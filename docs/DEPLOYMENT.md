# 部署 — rich-sim-landing（Cloudflare Pages · Git 集成）

更新时间：2026-10-04

## 站点信息
- Pages 项目：`rich-sim-landing`（**Git 集成**：GitHub 仓库 `bayernjf/rich-sim-landing`，push main 自动构建部署）
- 域名：https://rich-sim-landing.pages.dev（正式域名待定；绑定方式：CNAME → pages.dev，Proxied，与其他 landing 一致）
- 技术栈：Astro 5（SSG）+ Tailwind CSS 4 + astro-icon + @astrojs/sitemap
- 包管理器：npm

## 部署模型（与 agent-world-landing 对齐）
- **push 即部署**：推送 `main` → Cloudflare 自动构建生产；`dev` 等其他分支只产出 preview 部署
- 本地开发在 `dev`，合入 `main` 前先在本地跑 `npm run build` + `npm run check`

## Cloudflare Pages 配置（已就位，2026-10-04）
| 项 | 值 |
|---|---|
| Framework preset | Astro |
| Build command | `npx playwright install chromium && npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0` |
| Production branch | `main` |
| Automatic deployments | Enabled |

## 构建（本地）
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs（生成 dist/ + preview-en.png / preview-zh.png OG 图）
npm run check     # astro check
npm run preview   # 本地预览 dist/
```

## 发布流程
```bash
npm run build && npm run check     # 本地验证
git add -A && git commit -m "…"
git checkout main && git merge dev
git push origin main               # 触发 Cloudflare 自动构建
```
兜底（手动直传，仅应急，不覆盖 Git 集成状态）：
`wrangler pages deploy dist --project-name=rich-sim-landing --branch=main`

## 多语言与 SEO 机制
- i18n：英文默认（根路径 `/`），中文 `/zh/`（`astro.config.mjs` i18n + `src/pages/zh/`）
- 语言判定：`src/content/site.ts` 的 `langOf(pathname)`（**不依赖 Astro.locale**，静态路由下它为空）
- 文案：全部集中在 `src/content/site.ts`（`getCopy(locale)` 返回 en/zh 字典）
- OG 图：`scripts/shot.mjs` 在每次构建时用 Playwright 截取真实页面 → `dist/preview-en.png` / `preview-zh.png`（`consts.ts` OG_IMAGE 引用）
- Sitemap：`@astrojs/sitemap` 构建时生成（en + zh 全部页面）
- 合规页：404 / Privacy / Terms 均有 en + zh 双语版本

## 发布后验证
1. 首页 200：`<html lang="en">` + 英文标题
2. `/zh/` 200：`<html lang="zh-CN">` + 中文标题
3. `https://<site>/preview-en.png`、`/preview-zh.png` 200（OG 图）
4. `sitemap-index.xml` 200，含 `/` 与 `/zh/` 及隐私/条款页
5. 404 页返回 200（Cloudflare Pages 对未知路径服务 `404.html`）
6. 换正式域名后：`src/consts.ts` 的 `SITE_URL` 同步（sitemap/hreflang/og:image 都从它读）

## 改域名时的同步点（单一事实源）
- `src/consts.ts` → `SITE_URL`（sitemap / hreflang / og:image / robots.txt 全部引用它）
- Cloudflare Custom domains 加绑定后无需改代码
