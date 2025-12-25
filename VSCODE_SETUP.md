# VSCode 中打开网站

## 方法一：使用 Live Server 扩展（推荐）

### 1. 安装 Live Server 扩展

1. 在 VSCode 中按 `Ctrl+Shift+X` 打开扩展面板
2. 搜索 "Live Server"
3. 找到 "Live Server" by Ritwick Dey，点击安装

或者，VSCode 可能会自动提示你安装推荐的扩展（因为项目已配置 `extensions.json`）

### 2. 启动 Live Server

**方法 A：右键菜单**
1. 在文件资源管理器中，右键点击 `index.html`
2. 选择 "Open with Live Server"

**方法 B：状态栏**
1. 打开 `index.html` 文件
2. 点击 VSCode 底部状态栏的 "Go Live" 按钮

**方法 C：命令面板**
1. 按 `Ctrl+Shift+P` 打开命令面板
2. 输入 "Live Server: Open with Live Server"
3. 回车执行

### 3. 自动打开浏览器

启动后，浏览器会自动打开 `http://127.0.0.1:5500`（或配置的端口）

### 4. 停止服务器

- 点击状态栏的 "Port: 5500" 或右键状态栏选择 "Stop Live Server"
- 或者在命令面板中选择 "Live Server: Stop Live Server"

## 方法二：使用内置预览（简单但功能有限）

1. 在 VSCode 中打开 `index.html`
2. 按 `Ctrl+Shift+V` 或点击右上角的预览图标
3. 注意：这种方式不支持某些功能（如 AJAX 请求），建议使用 Live Server

## Live Server 的优势

✅ **自动刷新**：修改文件后，浏览器自动刷新  
✅ **实时预览**：保存文件立即看到效果  
✅ **支持本地文件协议**：正确处理相对路径  
✅ **多设备访问**：同一网络下的设备可以访问  

## 配置说明

项目已配置 `.vscode/settings.json`，Live Server 将：
- 使用端口 5500（可在设置中修改）
- 自动忽略 `.vscode` 目录
- 使用默认浏览器打开

## 故障排除

### 端口被占用
如果 5500 端口被占用，可以：
1. 修改 `.vscode/settings.json` 中的 `liveServer.settings.port`
2. 或者在 Live Server 设置中更改端口

### 扩展未安装
如果右键菜单没有 "Open with Live Server"：
1. 确认已安装 Live Server 扩展
2. 重启 VSCode
3. 检查扩展是否已启用

### 浏览器未自动打开
1. 检查 VSCode 设置中的 `liveServer.settings.CustomBrowser`
2. 手动访问显示的地址（通常是 `http://127.0.0.1:5500`）

