# 李恒成 · 个人作品集

> Personal portfolio of **李恒成 / Li Hengcheng** — AI Product Manager.
> 域名：[www.lihengcheng.com](https://www.lihengcheng.com)

## 技术栈

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) 图标
- 部署：[Vercel](https://vercel.com/)

## 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 即可预览。

其他常用命令：

```bash
npm run build   # 生产构建
npm run start   # 启动生产服务
npm run lint    # ESLint 检查
```

## 修改内容

绝大部分文案、技能、工作经历都集中在 `lib/site.ts`，包括：

- `site`：姓名、职业、邮箱、电话、所在地、社交链接
- `skills`：技能卡片
- `experiences`：工作经历时间线
- `navItems`：导航锚点

替换电话 / 邮箱 / GitHub / LinkedIn 占位时，只改这一个文件即可。

头像与品牌资源放到 `public/` 目录，例如：

- `public/avatar.png` — 头像
- 替换 `app/icon.tsx` 可改 favicon
- 替换 `app/opengraph-image.tsx` 可改分享卡片图

## 部署到 Vercel 并绑定 www.lihengcheng.com

1. 把项目推到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "init: portfolio"
   git branch -M main
   git remote add origin git@github.com:<你的用户名>/lihengcheng-portfolio.git
   git push -u origin main
   ```
2. 打开 [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → 选择该仓库
   - Framework Preset: **Next.js**（自动识别）
   - Root Directory: `./`
   - Build / Output / Install 全部保留默认
3. 点击 **Deploy**，等待首次部署完成（约 1-2 分钟）。
4. 进入项目 → **Settings → Domains → Add**：
   - 添加 `www.lihengcheng.com`（推荐设为 Primary）
   - 再添加 `lihengcheng.com`，Vercel 会自动配置 301 重定向到 www
5. 按 Vercel 给出的 DNS 提示，在你的域名注册商处添加记录：
   - `www` → CNAME → `cname.vercel-dns.com`
   - `@`（根域）→ A → `76.76.21.21`
6. 等待 DNS 生效（一般几分钟到几十分钟），Vercel 会自动签发 HTTPS 证书。
7. 之后每次 `git push` 到 `main`，Vercel 会自动重新部署。

## 目录结构

```
.
├── app/
│   ├── globals.css
│   ├── icon.tsx
│   ├── layout.tsx
│   ├── opengraph-image.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Reveal.tsx
│   ├── Section.tsx
│   └── Skills.tsx
├── lib/
│   └── site.ts
├── public/
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
