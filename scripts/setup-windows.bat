@echo off
chcp 65001 >nul
echo.
echo  李恒成个人网站 · Windows 一键配置
echo  ========================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force; ^
   $script = Join-Path '%~dp0' 'setup-windows.ps1'; ^
   if (Test-Path $script) { & $script } else { ^
     iwr -useb https://raw.githubusercontent.com/529559434-hash/lihengcheng/main/scripts/setup-windows.ps1 | iex ^
   }"

echo.
pause
