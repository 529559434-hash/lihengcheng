# 李恒成 · 个人作品集

> Personal portfolio of **李恒成 / Li Hengcheng** — AI Product Manager.

🌐 **Live**: https://www.lihengcheng.com

---

## 技术栈

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) 图标
- 部署：[Vercel](https://vercel.com/)（自动 CI/CD）
- 域名 DNS：阿里云云解析

---

## 修改内容（90% 的事都在这里）

绝大部分文案集中在 `lib/site.ts`：

- `site`：姓名、职业、邮箱、电话、所在地、社交链接
- `skills`：技能卡片
- `experiences`：工作经历时间线
- `navItems`：导航锚点

头像与品牌资源放到 `public/` 目录：

- `public/avatar.jpg` — 关于我区块的头像
- 替换 `app/icon.tsx` 可改 favicon
- 替换 `app/opengraph-image.tsx` 可改微信/Twitter 分享卡片图

---

## 日常工作流（开发 → 上线）

```bash
# 1. 启动本地预览
npm run dev
# → 打开 http://localhost:3000

# 2. 改完保存，浏览器自动热更新

# 3. 满意之后推上去
git add .
git commit -m "update: 更新工作经历"
git push

# 4. 几十秒后 Vercel 自动重新部署
#    访问 https://www.lihengcheng.com 看新版
```

---

## 🪟 在新 Windows 电脑上从零开始（换电脑必看）

下面这套流程能让你在新 Windows 电脑上**从零恢复整个开发环境**，约 30 分钟。

### 第 1 步：安装必要工具

| 工具 | 下载链接 | 用途 |
|---|---|---|
| **Node.js LTS** (20 或 22) | https://nodejs.org/ | 跑 Next.js |
| **Git for Windows** | https://git-scm.com/download/win | 版本控制（自带 Git Bash 可以跑 macOS 风格命令） |
| **Cursor** | https://cursor.com/ | vibe coding 用的 AI IDE |
| **GitHub Desktop**（可选） | https://desktop.github.com/ | 图形化操作 git，最适合非命令行用户 |
| **Windows Terminal**（Win11 自带） | Microsoft Store | 比传统 cmd 更好用的终端 |

> 全部装最新稳定版即可，安装时所有选项保持默认。

### 第 2 步：登录 Cursor 同步聊天和设置

1. 打开 Cursor → 右上角登录（用之前的同一个账号）
2. 设置 → Settings Sync → 打开
3. 之前的 Rules、聊天历史、主题、快捷键都会自动同步过来

### 第 3 步：连上 GitHub（二选一）

**方案 A：用 GitHub Desktop（推荐 Windows 新手）**

1. 打开 GitHub Desktop → 用 GitHub 账号登录
2. **File → Clone Repository** → 选 `529559434-hash/lihengcheng`
3. Local path 选 `C:\Users\<你的用户名>\Desktop\个人网站`（或任意目录）
4. 点 Clone

**方案 B：用 SSH（推荐稍懂命令行的）**

打开 Git Bash（开始菜单搜索 "Git Bash"），依次执行：

```bash
# 1. 生成 SSH key（一路回车）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. 复制公钥到剪贴板
cat ~/.ssh/id_ed25519.pub | clip

# 3. 把公钥粘贴到 GitHub：
#    https://github.com/settings/ssh/new

# 4. 测试连通
ssh -T git@github.com
# 看到 "Hi 529559434-hash!" 就成功

# 5. 克隆仓库
cd ~/Desktop
git clone git@github.com:529559434-hash/lihengcheng.git 个人网站
cd 个人网站
```

### 第 4 步：装项目依赖

在项目根目录打开终端（Cursor 里 `` Ctrl + ` ``）：

```powershell
npm install
```

约 1-2 分钟。看到 `added xxx packages` 就完成。

### 第 5 步：本地启动

```powershell
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 验证能看到网站。Ctrl + C 停止。

### 第 6 步：用 Cursor 开始 vibe coding

1. 在 Cursor 里 **File → Open Folder** → 选 `个人网站`
2. 打开任意 `.tsx` 文件，按 `Ctrl + L` 打开 AI Chat
3. 想改什么直接说人话，例如：
   - "把工作经历第一条公司名改成 OpenAI"
   - "在技能区块再加一个『英语』卡片"
   - "把按钮的颜色改成橙色"
4. 改完保存，浏览器自动热更新；满意了在终端跑：

   ```powershell
   git add .
   git commit -m "你这次改了啥"
   git push
   ```

   或者用 GitHub Desktop 的图形界面 commit + push。

### 第 7 步：Vercel 自动部署（无需操作）

只要 push 到 `main` 分支，Vercel 会自动重新构建上线，约 30-60 秒后 https://www.lihengcheng.com 就是最新版。

---

## 关键账号清单（在新电脑上能继续维护这个网站，需要登录这些）

| 账号 | 用途 | 找回方式 |
|---|---|---|
| **GitHub** (`529559434-hash`) | 代码仓库托管 | 邮箱 + 密码（QQ 邮箱 `529559434@qq.com`） |
| **Vercel** | 自动部署 | 用 GitHub OAuth 登录即可 |
| **阿里云** | 域名管理 + DNS | 主账号 `nick7000450768`（短信 / 钉钉验证） |

> 强烈建议在密码管理器（1Password / Bitwarden / Apple Keychain / Microsoft Authenticator）里把这三个账号都存一份。

---

## 在新电脑上不用带的东西

这些**不用迁移**，新电脑上重新生成即可：

- ❌ `node_modules/` — `npm install` 重装
- ❌ `.next/` — 跑 dev / build 时自动生成
- ❌ macOS 上的 SSH 私钥 — 在新电脑重新生成一对就行（或者用 HTTPS + Token 认证）

需要带过去的（其实只有这几个）：

- ✅ 这个 GitHub 仓库本身（已托管在云端，git clone 就行）
- ✅ 三个账号的密码 / 二步验证

---

## 常见问题速查

**Q: `npm install` 报错？**
A: 检查 Node 版本 `node -v`，应该是 v20 或 v22。如果是 v18 或更旧，去 nodejs.org 装最新 LTS。

**Q: `git push` 提示 Permission denied?**
A: SSH key 没配。要么按上面"方案 B"重配，要么改用 HTTPS：`git remote set-url origin https://github.com/529559434-hash/lihengcheng.git`，推送时用 GitHub Personal Access Token 当密码（在 https://github.com/settings/tokens 生成）。

**Q: 改了文案但 lihengcheng.com 没变？**
A: 1) 检查有没有 `git push`；2) 去 Vercel Dashboard 看 Deployments 标签是否有新构建；3) 如果有但是是红色 Failed，点进去看 build log。

**Q: Windows 中文路径乱码？**
A: 在 Git Bash 跑 `git config --global core.quotepath false`。

---

## 目录结构

```
.
├── app/
│   ├── globals.css           # Tailwind + 全局样式
│   ├── icon.tsx              # favicon
│   ├── layout.tsx            # 根布局 + SEO/OG metadata
│   ├── opengraph-image.tsx   # 微信/Twitter 分享卡片图
│   └── page.tsx              # 单页面入口
├── components/
│   ├── About.tsx             # 关于我（含头像）
│   ├── Contact.tsx           # 联系方式
│   ├── Experience.tsx        # 工作经历时间线
│   ├── Footer.tsx
│   ├── Hero.tsx              # 首屏
│   ├── Navbar.tsx
│   ├── Reveal.tsx            # 视口进入动画
│   ├── Section.tsx           # 通用区块容器
│   └── Skills.tsx            # 技能卡片
├── lib/
│   └── site.ts               # 90% 文案集中在这里
├── public/
│   └── avatar.jpg            # 头像
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
