#Requires -Version 5.1
<#
  李恒成个人网站 - Windows 新电脑一键配置
  用法（PowerShell）:
    Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force
    iwr -useb https://raw.githubusercontent.com/529559434-hash/lihengcheng/main/scripts/setup-windows.ps1 | iex

  或在已 clone 的项目根目录:
    powershell -ExecutionPolicy Bypass -File .\scripts\setup-windows.ps1
#>

$ErrorActionPreference = "Stop"

$RepoUrl = "https://github.com/529559434-hash/lihengcheng.git"
$ProjectName = "个人网站"
$Desktop = [Environment]::GetFolderPath("Desktop")
$TargetDir = Join-Path $Desktop $ProjectName
$GitName = "529559434-hash"
$GitEmail = "529559434@qq.com"

function Write-Step([string]$Message) {
  Write-Host "`n==> $Message" -ForegroundColor Cyan
}

function Test-Command([string]$Name) {
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

function Ensure-Winget {
  if (Test-Command "winget") { return }
  Write-Step "未检测到 winget，请先更新 Windows 到 Win10 1809+ / Win11，或手动安装 Node.js 与 Git"
  throw "winget 不可用"
}

function Install-IfMissing([string]$CommandName, [string]$WingetId, [string]$Label) {
  if (Test-Command $CommandName) {
    Write-Host "✓ 已安装 $Label"
    return
  }
  Write-Step "正在安装 $Label ..."
  winget install --id $WingetId -e --accept-source-agreements --accept-package-agreements | Out-Host
  if (-not (Test-Command $CommandName)) {
    throw "$Label 安装后仍未检测到，请重启终端后重试"
  }
}

Write-Host @"

========================================
  李恒成个人网站 · Windows 一键配置
  https://www.lihengcheng.com
========================================
"@ -ForegroundColor Green

Ensure-Winget
Install-IfMissing "git" "Git.Git" "Git"
Install-IfMissing "node" "OpenJS.NodeJS.LTS" "Node.js LTS"

Write-Step "配置 Git 用户信息"
git config --global user.name $GitName
git config --global user.email $GitEmail
git config --global core.quotepath false
Write-Host "✓ git user.name = $GitName"
Write-Host "✓ git user.email = $GitEmail"

if (-not (Test-Path $TargetDir)) {
  Write-Step "克隆仓库到 $TargetDir"
  git clone $RepoUrl $TargetDir
} else {
  Write-Step "项目目录已存在，拉取最新代码"
  Push-Location $TargetDir
  git pull --rebase origin main
  Pop-Location
}

Write-Step "安装 npm 依赖"
Push-Location $TargetDir
npm install --no-audit --no-fund
Pop-Location

Write-Host @"

========================================
  配置完成！
========================================

项目目录: $TargetDir

下一步（任选其一）:
  1. 在 Cursor 中 File → Open Folder → 选择上面的项目目录
  2. 在终端运行:
       cd `"$TargetDir`"
       npm run dev
     然后打开 http://localhost:3000

日常更新网站:
  改代码 → git add . → git commit -m "update" → git push
  Vercel 会自动部署到 https://www.lihengcheng.com

"@ -ForegroundColor Green
