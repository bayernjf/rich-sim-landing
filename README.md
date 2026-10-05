# 财富模拟（rich-sim）· 落地页

产品落地页 + 海外官网入口。双主线叙事：**富豪模拟做钩子，现实测算做落点**。

技术栈：Astro 5 + Tailwind v4 + astro-icon（Phosphor）+ `@astrojs/sitemap`。**无 React**，交互用原生脚本。双语（英文默认 `/`，中文 `/zh/`）。

## 开发

```bash
npm install
npm run dev
```

构建与预览：

```bash
npm run build     # astro build && node scripts/shot.mjs（构建 + 生成 OG 截图）
npm run preview
```

> `npm run build` 末尾会用 Playwright 截图生成 OG 图；本地首次需先 `npx playwright install chromium`。

## 结构

```
src/
├─ consts.ts              SITE_URL / SITE_NAME / SOCIAL / LOCALES / OG_IMAGE —— 公开 URL 唯一同步点
├─ content/site.ts        全部文案 en/zh 双字典（getCopy + langOf）
├─ styles/global.css      Tailwind + 设计令牌（深色优先，浅色自动适配）
├─ layouts/Layout.astro   lang / OG / hreflang 双语外壳
├─ components/            Nav / Hero / AssetPreview / SimShowcase / RealityCheck /
│                         Calculator / Milestones / Differentiation / Pricing /
│                         Faq / Disclaimer / Footer
└─ pages/                 index · 404 · privacy · terms（+ zh/ 同构双语）
scripts/shot.mjs          构建期 Playwright 截图 → preview-en.png / preview-zh.png
docs/DEPLOYMENT.md        发布流程与验证清单
```

## i18n

- 英文默认在根 `/`，中文在 `/zh/`；文案集中在 `src/content/site.ts`，用 `getCopy(locale)` + `langOf(pathname)` 取（**不依赖 `Astro.locale`**——静态构建下它为空，已实测）。
- **改文案要 en/zh 两份一起改**；页面成对（`pages/x.astro` ↔ `pages/zh/x.astro`）。
- 公开 URL 只在 `src/consts.ts` 改，别处不要硬编码。

## 设计约定

- **单一强调色**（金色 `--c-accent`），全页统一。
- **深色优先**，浅色通过 `prefers-color-scheme` 自动切换（令牌在 `global.css`）。
- 圆角规则：卡片 16px（`rounded-2xl`），按钮胶囊（`rounded-full`），输入框 12px（`rounded-xl`）。
- 字体：Space Grotesk（标题）/ Manrope（正文）/ JetBrains Mono（数字，`.num`）。

## 部署

Cloudflare Pages **Git 集成**（GitHub `bayernjf/rich-sim-landing`），push `main` 自动构建部署。

- Build command：`npx playwright install chromium && npm run build`；输出 `dist`；Env：`NODE_VERSION=22`、`PLAYWRIGHT_BROWSERS_PATH=0`
- 生产域名：`https://rich-sim.bayjf.com`（`src/consts.ts` 的 `SITE_URL`；OG 图、hreflang、sitemap 都读它）
- 详见 `docs/DEPLOYMENT.md`

## 待办 / 占位

- [ ] 定价数字（¥0 / ¥39 / ¥19）是占位，商业模式未定
- [ ] `RealityCheck`、`AssetPreview` 的成本数字标注「示意」，需替换为真实数据
- [ ] `SOCIAL.email` 标 TODO（当前只填了 github）
- [ ] 测算逻辑是静态复利推演（年化 4%，写死在 `Calculator.astro`）；正式引擎是 `rich-sim` 仓库的 `@rich-sim/core`，将来应复用同一份
- [ ] 表单提交、账号、支付均未接入

## 图片

OG 分享图由 `scripts/shot.mjs` 在**构建时自动截取**（`preview-en.png` / `preview-zh.png`），不是手工维护的静态素材。
页面本身目前未使用摄影素材，视觉由真实组件预览（资产看板、测算器）与 CSS 背景承担。
