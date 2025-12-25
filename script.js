// 文档列表配置
const DOCUMENTS_DIR = 'documents/';

// 文档列表（可以通过手动添加或使用 API 获取）
// 如果你有文件列表 API，可以在这里调用
const documents = [];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadDocuments();
    setupSmoothScroll();
});

// 加载文档列表
async function loadDocuments() {
    const container = document.getElementById('documents-container');
    
    try {
        // 尝试从 documents-list.json 加载文件列表
        const response = await fetch('documents-list.json');
        if (response.ok) {
            const fileList = await response.json();
            displayDocuments(fileList);
        } else {
            // 如果没有 JSON 文件，尝试扫描 documents 目录
            await scanDocumentsDirectory(container);
        }
    } catch (error) {
        console.log('无法加载文档列表，使用默认方式');
        // 如果都失败了，显示空状态或使用硬编码的列表
        await scanDocumentsDirectory(container);
    }
}

// 扫描 documents 目录（需要服务器支持目录列表）
async function scanDocumentsDirectory(container) {
    try {
        // 尝试获取目录列表（需要服务器配置允许目录浏览）
        const response = await fetch(DOCUMENTS_DIR);
        if (response.ok) {
            const html = await response.text();
            // 解析 HTML 获取文件列表（简单方法）
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const links = doc.querySelectorAll('a[href]');
            const files = [];
            
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !href.endsWith('/') && href !== '../') {
                    files.push({
                        name: decodeURIComponent(href),
                        url: DOCUMENTS_DIR + href,
                        size: '未知'
                    });
                }
            });
            
            if (files.length > 0) {
                displayDocuments(files);
            } else {
                showEmptyState(container);
            }
        } else {
            showEmptyState(container);
        }
    } catch (error) {
        console.error('扫描文档目录失败:', error);
        showEmptyState(container);
    }
}

// 显示文档列表
function displayDocuments(files) {
    const container = document.getElementById('documents-container');
    
    if (!files || files.length === 0) {
        showEmptyState(container);
        return;
    }
    
    container.innerHTML = '';
    
    files.forEach(file => {
        const card = createDocumentCard(file);
        container.appendChild(card);
    });
}

// 创建文档卡片
function createDocumentCard(file) {
    const card = document.createElement('div');
    card.className = 'document-card';
    card.onclick = () => downloadFile(file.url, file.name);
    
    const icon = getFileIcon(file.name);
    const size = file.size || '未知大小';
    
    card.innerHTML = `
        <div class="document-icon">${icon}</div>
        <div class="document-name">${file.name}</div>
        <div class="document-size">${size}</div>
    `;
    
    return card;
}

// 获取文件图标
function getFileIcon(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const iconMap = {
        'pdf': '📄',
        'doc': '📝',
        'docx': '📝',
        'xls': '📊',
        'xlsx': '📊',
        'ppt': '📽️',
        'pptx': '📽️',
        'zip': '📦',
        'rar': '📦',
        'txt': '📃',
        'md': '📋',
        'jpg': '🖼️',
        'jpeg': '🖼️',
        'png': '🖼️',
        'gif': '🖼️',
        'mp4': '🎬',
        'mp3': '🎵'
    };
    return iconMap[ext] || '📎';
}

// 下载文件
function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 显示空状态
function showEmptyState(container) {
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">📁</div>
            <p>暂无文档</p>
            <p style="margin-top: 1rem; font-size: 0.9rem;">请将文件添加到 documents/ 目录</p>
        </div>
    `;
}

// 设置平滑滚动
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

