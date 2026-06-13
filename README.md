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

## 🪟 换 Windows 新电脑？只装 Cursor 就行

**完整指南见 → [NEW-PC.md](./NEW-PC.md)**

最省事流程：

1. 安装 [Cursor](https://cursor.com/)，用 **529559434@qq.com** 登录
2. 打开 Cursor Chat / Agent，粘贴 [NEW-PC.md](./NEW-PC.md) 里「方案 A」的那段话
3. 让 Cursor 自动安装 Git、Node、clone 仓库、`npm install`、`npm run dev`
4. **File → Open Folder** → 选 `桌面/个人网站`

或一条命令（PowerShell）：

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force
iwr -useb https://raw.githubusercontent.com/529559434-hash/lihengcheng/main/scripts/setup-windows.ps1 | iex
```

**不需要** GitHub Desktop、不需要手动配 SSH、Vercel 已在云端自动部署。

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
