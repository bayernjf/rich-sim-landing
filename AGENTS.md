# AGENTS.md — rich-sim-landing（财富模拟 · 落地页）

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览

**rich-sim**（中文名「财富模拟」）的营销落地页 + 海外官网入口。双主线叙事：**富豪模拟做钩子，现实测算做落点**。

这是**纯静态营销站**，不是产品应用——产品应用在 `rich-sim` 仓库的 `apps/web`（代码已并入该仓库）。

**动手前先读**：`handoff.md`（状态 / 占位待办）→ `README.md`（结构与设计约定）→ `docs/DEPLOYMENT.md`（发布流程）。
分工：**handoff = 状态 + 待办**，**README = 结构 + 设计约定**，**AGENTS = agent 约定与红线**，三者不复制同一份内容。

## 技术栈

| 类别 | 方案 |
|------|------|
| 框架 | Astro 5（静态输出） |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`，CSS 变量令牌） |
| 图标 | astro-icon + Phosphor（`ph:*`） |
| 站点地图 | `@astrojs/sitemap`（i18n 配置） |
| 交互 | **无 React**，原生脚本 |
| 构建期截图 | Playwright（`scripts/shot.mjs` 生成 OG 图） |
| 包管理 | npm；Node ≥ 22（`package.json` engines） |

## 常用命令

```bash
npm install
npm run dev      # 开发服务器
npm run build    # astro build && node scripts/shot.mjs（构建 + 生成 OG 截图）
npm run preview
npm run check    # astro check
```

> `npm run build` 末尾会跑 Playwright 截图；本地首次需先 `npx playwright install chromium`。

## 目录结构

```
src/
├─ consts.ts              SITE_URL / SITE_NAME / SOCIAL / LOCALES / OG_IMAGE —— 公开 URL 的唯一同步点
├─ content/site.ts        全部文案 en/zh 双字典（getCopy + langOf）
├─ styles/global.css      Tailwind + 设计令牌（深色优先，浅色自适应）
├─ layouts/Layout.astro   lang / OG / hreflang 双语外壳
├─ components/            Nav / Hero / AssetPreview / SimShowcase / RealityCheck /
│                         Calculator / Milestones / Differentiation / Pricing /
│                         Faq / Disclaimer / Footer
└─ pages/                 index · 404 · privacy · terms（+ zh/ 同构双语）
scripts/shot.mjs          构建期 Playwright 截图 → preview-en.png / preview-zh.png
docs/DEPLOYMENT.md        发布流程与验证清单
```

## 约定

### i18n（双语，必须成对维护）

- **英文默认在根 `/`，中文在 `/zh/`**；`trailingSlash: 'ignore'`。
- 文案集中在 `src/content/site.ts`，用 `getCopy(locale)` + `langOf(pathname)` 取；**不依赖 `Astro.locale`**（静态构建下它为空，已实测）。
- **改任何文案，en 与 zh 两份都要改**；页面要成对（`pages/x.astro` ↔ `pages/zh/x.astro`）。
- 公开 URL 只在 `src/consts.ts` 改，别处不要硬编码。

### 设计令牌

- 令牌在 `src/styles/global.css` 的 CSS 变量，深色优先，浅色经 `prefers-color-scheme` 切换。
- **单一强调色金色 `--c-accent`**，不要引入第二强调色；新颜色先加令牌再用，不要写死色值。
- 圆角：卡片 `rounded-2xl`、按钮 `rounded-full`、输入 `rounded-xl`。
- 字体：Space Grotesk（标题）/ Manrope（正文）/ JetBrains Mono（数字，类 `.num`）。

### 合规

- `Disclaimer.astro` 的免责声明不能被弱化、折叠或删除；页面任何位置都不得出现具体金融产品推荐或收益承诺。

## 部署

- Cloudflare Pages **Git 集成**（GitHub `bayernjf/rich-sim-landing`），push `main` 自动构建部署。
- Build command：`npx playwright install chromium && npm run build`；输出 `dist`；Env：`NODE_VERSION=22`、`PLAYWRIGHT_BROWSERS_PATH=0`。
- 线上以 `src/consts.ts` 的 `SITE_URL` 为准（当前 `https://rich-sim-landing.pages.dev`）。
- 详见 `docs/DEPLOYMENT.md`。

## 占位 / 未接入（不要当已定结论）

三档定价数字、资产持有成本数字（标注「示意」）、`SOCIAL.email`（TODO）、表单提交 / 账号 / 支付。
`Calculator.astro` 的测算是**静态复利推演（年化 4% 写死）**，只是雏形——正式模型是 `rich-sim` 仓库的 `@rich-sim/core`，将来应复用同一份，不要在这里另维护一套。清单见 `handoff.md`。

## 不要做的事

- 不要提交构建产物与依赖：`dist/`、`.astro/`、`.wrangler/`、`node_modules/`、`.env`。
- 不要引入 React 或其他前端框架（刻意保持零框架交互），除非明确要求改架构。
- 不要只改单语文案或只加单语页面（i18n 必须成对）。
- 不要硬编码公开 URL（一律走 `src/consts.ts`）。
- 不要用「示意」数字冒充真实数据或真实报价。
- 提交信息遵守根目录 `git-commit-message.md`：英文 `<type>[(<scope>)]: <subject>`、按逻辑拆成原子提交、
  作者保持用户本人（不加 AI co-author）、**未经明确要求不 push**。
- 不要跳过 `git pull --rebase` 直接 push。
