# Handoff · rich-sim-landing（财富模拟 · 落地页）

> 更新时间：2026-10-04

---

## 这个仓库是什么

产品**落地页**。双主线叙事：富豪模拟做钩子，现实测算做落点。

**营销页框架 + 海外官网入口**，不是产品应用（产品应用在 `rich-sim` 仓库的 `apps/web`，已并入该仓库）。

## 技术栈

**Astro 5 + Tailwind v4 + astro-icon（Phosphor）+ @astrojs/sitemap。无 React**，交互用原生脚本。

## 当前状态（2026-10-04 已对齐 agent-world-landing）

- ✅ **已部署**：Cloudflare Pages **Git 集成**（GitHub `bayernjf/rich-sim-landing`，push `main` 自动构建部署）
- ✅ 线上：https://rich-sim-landing.pages.dev（首页 en、/zh/ 中文、/zh/privacy/、/zh/terms/、OG 图、sitemap 全部 200 验证通过）
- ✅ **i18n 双语**：英文默认（/），中文 /zh/；文案集中在 `src/content/site.ts`（`getCopy(locale)` + `langOf(pathname)`，**不依赖 Astro.locale**——静态构建下它为空，已实测）
- ✅ **OG/Preview 截图**：`scripts/shot.mjs` 每次构建用 Playwright 截 `preview-en.png` / `preview-zh.png`（Cloudflare 环境变量 `PLAYWRIGHT_BROWSERS_PATH=0`）
- ✅ **合规页**：404 / Privacy / Terms 均有 en + zh 双语版本；Footer 已加隐私/条款链接
- ✅ **SEO**：sitemap-index（6 条）、robots.txt、hreflang
- **分支**：`dev`（开发）+ `main`（生产，已推）；`dev` 本地领先 `origin/dev` 若干提交未推（工作分支，按需推）
- 构建产物 `dist/`（已 gitignore）

## Cloudflare Pages 配置（已在控制台保存）

| 项 | 值 |
|---|---|
| Framework preset | Astro |
| Build command | `npx playwright install chromium && npm run build` |
| Build output | `dist` |
| Env | `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0` |
| Production branch | `main`，Automatic deployments on |

详见 `docs/DEPLOYMENT.md`（发布流程、验证清单、改域名同步点）。

## 如何运行

```bash
npm install
npm run dev
```

## 结构

```
src/
├─ consts.ts             SITE_URL / OG_IMAGE / SOCIAL / LOCALES（改域名唯一同步点）
├─ content/site.ts       全部文案 en/zh 双字典（getCopy + langOf）
├─ styles/global.css      Tailwind + 设计令牌
├─ layouts/Layout.astro   lang / OG / hreflang 双语外壳
├─ components/            Nav / Hero / AssetPreview / SimShowcase /
│                         RealityCheck / Calculator / Milestones /
│                         Differentiation / Pricing / Faq / Disclaimer / Footer
└─ pages/                 index / 404 / privacy / terms + zh/（同构双语）
```

## 占位 / 待办

- **正式域名未定**：当前 pages.dev；定域名后在 `src/consts.ts` 改 `SITE_URL` + Cloudflare Custom domain 绑定
- **定价数字**（¥0 / ¥39 / ¥19）是占位，商业模式未定
- **成本数字**（住宅 60 万/年等）标注了"示意"，需换真实数据
- **SOCIAL.email** 标 TODO（当前只填了 github）
- **测算逻辑**是静态复利推演（年化 4%，写死在 `Calculator.astro`）；与产品引擎对齐见 `rich-sim` 仓库 `technical-design.md` §4
- **表单提交 / 账号 / 支付**均未接入

## 与产品文档的关系

产品文档与应用代码在 `rich-sim` 仓库（`docs/` + `apps/web` + `packages/core`）。落地页测算器将来应复用 `@rich-sim/core`，而不是各自维护。
