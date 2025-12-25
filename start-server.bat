@echo off
REM Windows 本地开发服务器启动脚本

set PORT=8000

echo =========================================
echo   启动本地开发服务器
echo =========================================
echo.
echo 服务器地址: http://localhost:%PORT%
echo 按 Ctrl+C 停止服务器
echo.
echo =========================================
echo.

REM 检查 Python
python --version >nul 2>&1
if errorlevel 1 (
    echo 错误: 未找到 Python，请先安装 Python
    pause
    exit /b 1
)

REM 启动 HTTP 服务器
python -m http.server %PORT%

pause

