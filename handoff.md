# Handoff · rich-sim-landing（财富模拟 · 落地页）

> 更新时间：2026-10-05

---

## 这个仓库是什么

产品**落地页** + 海外官网入口。双主线叙事：富豪模拟做钩子，现实测算做落点。

**营销站**，不是产品应用（产品应用在 `rich-sim` 仓库的 `apps/web`，已并入该仓库）。

## 技术栈

**Astro 5 + Tailwind v4 + astro-icon（Phosphor）+ `@astrojs/sitemap`。无 React**，交互用原生脚本。双语（en 默认 `/`，zh `/zh/`）。

## 当前状态

- ✅ **已部署**：Cloudflare Pages **Git 集成**（GitHub `bayernjf/rich-sim-landing`，push `main` 自动构建部署）
- ✅ **线上（2026-10-05 实测 200）**：
  - 生产域名 `https://rich-sim.bayjf.com`（标题 `Wealth Sim · Try on a rich life, then see your own path`）
  - Pages 预览域 `https://rich-sim-landing.pages.dev`
- ✅ **i18n 双语**：英文默认（`/`）、中文（`/zh/`）；文案集中在 `src/content/site.ts`（`getCopy(locale)` + `langOf(pathname)`，**不依赖 `Astro.locale`**——静态构建下为空，已实测）
- ✅ **合规页**：404 / Privacy / Terms 均有 en + zh 双语版本
- ✅ **SEO**：sitemap、robots.txt、hreflang
- ✅ **OG/Preview 截图**：`scripts/shot.mjs` 每次构建用 Playwright 截 `preview-en.png` / `preview-zh.png`
- ✅ **导流改造（2026-10-08）**：全站从「只有导航栏一个出口」改为 4 处指向 app——Hero 主 CTA「领取 $1,000,000 虚拟起始金」→ `APP_URL`、SimShowcase 底部同款 CTA、Calculator 结果区「在应用里做完整测算」→ `APP_URL/app/designer`、Pricing 免费档「Calculate now」→ `APP_URL/app/designer`；付费档 CTA 维持 `#calc` 页内锚点（付费功能未上线，不导流）。文案新增 `cta.claimApp` / `cta.continueApp` 双语 key
- **分支**：`dev`（开发）+ `main`（生产）。同步状态用 `git status` 现测，不写死在这里
- 构建产物 `dist/`（已 gitignore）

## Cloudflare Pages 配置（已在控制台保存）

| 项 | 值 |
|---|---|
| Framework preset | Astro |
| Build command | `npx playwright install chromium && npm run build` |
| Build output | `dist` |
| Env | `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0` |
| Production branch | `main`，Automatic deployments on |
| Custom domain | `rich-sim.bayjf.com` |

详见 `docs/DEPLOYMENT.md`（发布流程、验证清单、改域名同步点）。

## 如何运行

```bash
npm install
npm run dev
```

## 结构

```
src/
├─ consts.ts             SITE_URL / SITE_NAME / SOCIAL / LOCALES / OG_IMAGE（公开 URL 唯一同步点）
├─ content/site.ts       全部文案 en/zh 双字典（getCopy + langOf）
├─ styles/global.css     Tailwind + 设计令牌
├─ layouts/Layout.astro  lang / OG / hreflang 双语外壳
├─ components/           Nav / Hero / AssetPreview / SimShowcase / RealityCheck /
│                        Calculator / Milestones / Differentiation / Pricing /
│                        Faq / Disclaimer / Footer
└─ pages/                index / 404 / privacy / terms + zh/（同构双语）
scripts/shot.mjs          构建期 Playwright 截图 → preview-en.png / preview-zh.png
```

## 占位 / 待办

- **定价数字**（¥0 / ¥39 / ¥19）是占位，商业模式未定
- **成本数字**（住宅 60 万/年等）标注了「示意」，需换真实数据
- **`SOCIAL.email`** 标 TODO（当前只填了 github）
- **测算逻辑**是静态复利推演（年化 4%，写死在 `Calculator.astro`）；与产品引擎对齐见 `rich-sim` 仓库 `technical-design.md` §4
- **表单提交 / 账号 / 支付**均未接入

## 与产品文档的关系

产品文档与应用代码在 `rich-sim` 仓库（`docs/` + `apps/web` + `packages/core`）。落地页测算器将来应复用 `@rich-sim/core`，而不是各自维护。
