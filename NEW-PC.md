# 新 Windows 电脑 · 最省事指南

> 目标：**只装 Cursor**，其余交给 Cursor Agent 或一条命令。

---

## 方案 A：只装 Cursor，然后复制下面这段话给 Cursor（推荐）

1. 安装 [Cursor](https://cursor.com/) 并用 **529559434@qq.com** 登录
2. 打开 Cursor，按 `Ctrl + L` 打开 Chat（或 Agent 模式）
3. **整段复制粘贴**下面内容，回车：

```
我刚换了新 Windows 电脑，请帮我一键配置个人网站开发环境。

仓库：https://github.com/529559434-hash/lihengcheng
目标目录：桌面/个人网站

请按顺序执行：
1. 若缺少 winget / git / node，用 winget 安装 Git 和 Node.js LTS
2. 配置 git user.name=529559434-hash，user.email=529559434@qq.com
3. clone 或 pull 仓库到桌面/个人网站
4. 在项目目录运行 npm install
5. 运行 npm run dev，确认 http://localhost:3000 可访问
6. 告诉我项目路径和下一步怎么改 lib/site.ts

如果项目里已有 scripts/setup-windows.ps1，优先执行它。
遇到权限问题，用 Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force。
```

4. 让 Cursor **自动跑命令**（Agent 模式下它会替你执行）
5. 完成后 **File → Open Folder** → 选 `桌面/个人网站`

---

## 方案 B：一条命令（不依赖 Cursor Agent）

1. 安装 [Cursor](https://cursor.com/)
2. 按 `Win + X` → **终端(管理员)** 或 **Windows PowerShell**
3. 粘贴运行：

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force
iwr -useb https://raw.githubusercontent.com/529559434-hash/lihengcheng/main/scripts/setup-windows.ps1 | iex
```

4. 完成后用 Cursor 打开 `桌面/个人网站` 文件夹

---

## 方案 C：双击运行（已 clone 项目后）

在项目文件夹里双击：

```
scripts/setup-windows.bat
```

---

## 你不需要记住的东西

| 以前要手动装 | 现在 |
|---|---|
| Node.js | 脚本 / Cursor 自动装 |
| Git | 脚本 / Cursor 自动装 |
| GitHub Desktop | **不需要**，用 git 命令行即可 |
| SSH Key | **不需要**，HTTPS clone 就能 push（首次 push 浏览器登录 GitHub） |
| Vercel 配置 | **不用动**，已在云端，git push 自动部署 |

---

## 日常改网站（3 步）

```powershell
cd ~/Desktop/个人网站
npm run dev          # 本地预览
# 改 lib/site.ts 或组件，保存后浏览器自动刷新
git add . && git commit -m "update: xxx" && git push
# 30 秒后 https://www.lihengcheng.com 自动更新
```

---

## 关键账号（只需记 1 个）

- **Cursor / GitHub / Vercel**：都用 **529559434@qq.com**
- **GitHub 用户名**：529559434-hash
- **线上网站**：https://www.lihengcheng.com
