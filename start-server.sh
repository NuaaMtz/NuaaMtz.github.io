#!/bin/bash

# 本地开发服务器启动脚本
# 用于在本地预览网站，无需提交到 GitHub

PORT=8000

echo "========================================="
echo "  启动本地开发服务器"
echo "========================================="
echo ""
echo "服务器地址: http://localhost:$PORT"
echo "按 Ctrl+C 停止服务器"
echo ""
echo "========================================="
echo ""

# 检查 Python 版本
if command -v python3 &> /dev/null; then
    PYTHON_CMD=python3
elif command -v python &> /dev/null; then
    PYTHON_CMD=python
else
    echo "错误: 未找到 Python，请先安装 Python"
    exit 1
fi

# 启动 HTTP 服务器
$PYTHON_CMD -m http.server $PORT

