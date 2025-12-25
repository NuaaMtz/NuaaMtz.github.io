# 本地开发指南

本指南将帮助你设置本地开发环境，这样你就可以在提交到 GitHub 之前预览网站效果。

## 方法一：使用启动脚本（推荐）

### Linux/Mac/WSL

```bash
./start-server.sh
```

### Windows

双击运行 `start-server.bat` 或在命令行中执行：

```cmd
start-server.bat
```

## 方法二：手动启动 Python 服务器

### 在项目根目录执行：

**Python 3:**
```bash
python3 -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

## 访问网站

启动服务器后，在浏览器中打开：

```
http://localhost:8000
```

或者

```
http://127.0.0.1:8000
```

## 停止服务器

在终端中按 `Ctrl + C` 停止服务器。

## 注意事项

1. **端口冲突**：如果 8000 端口被占用，可以修改脚本中的 `PORT` 变量使用其他端口（如 8080、3000 等）

2. **文件修改**：修改 HTML、CSS 或 JavaScript 文件后，在浏览器中按 `F5` 或 `Ctrl+R` 刷新页面即可看到更改

3. **图片和资源**：确保所有资源文件（图片、文档等）都在正确的目录中，路径要相对于项目根目录

4. **GitHub Pages 差异**：本地预览和 GitHub Pages 上的效果应该是一致的，但某些 GitHub Pages 特定的功能（如 Jekyll）可能不会在本地显示

## 其他可选方案

### 使用 Node.js (如果已安装)

```bash
npx http-server -p 8000
```

### 使用 PHP (如果已安装)

```bash
php -S localhost:8000
```

## 开发工作流建议

1. 在本地启动服务器
2. 在浏览器中打开 `http://localhost:8000`
3. 修改代码文件
4. 刷新浏览器查看效果
5. 满意后，再提交到 GitHub

这样可以大大提高开发效率！

