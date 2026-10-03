# AGENTS.md — rich-sim-landing（财富模拟 · 落地页）

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览

**rich-sim**（中文名「财富模拟」）的营销落地页。双主线叙事：**富豪模拟做钩子，现实测算做落点**。

这是**纯静态营销页**，不是产品应用：
- 产品文档：同级目录 `rich-sim`（独立 git 仓库，PRD / 架构在那里）
- 产品应用：将来是独立仓库（暂名 `rich-sim-app`，尚未创建）

`handoff.md` 是连续性文档（状态 / 占位待办 / 与产品文档的关系）——**动手前先读它**。

## 技术栈

| 类别 | 方案 |
|------|------|
| 框架 | Astro 5（SSG 静态输出） |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`，CSS 变量令牌） |
| 图标 | astro-icon + Phosphor（`ph:*`） |
| 交互 | **无 React**，原生脚本 |
| 包管理 | npm |

## 常用命令

```bash
npm install
npm run dev
npm run build     # astro build
npm run preview
npm run check     # astro check
```

## 目录结构

```
src/
├─ content/site.ts        所有文案集中在此，改文案不用碰布局
├─ styles/global.css      Tailwind + 设计令牌（深色优先，浅色自适应）
├─ layouts/Layout.astro   页面外壳、字体、滚动进场脚本
├─ components/
│  ├─ Nav.astro  Hero.astro  AssetPreview.astro
│  ├─ SimShowcase.astro   富豪模拟：身份/资产/成本/波动
│  ├─ RealityCheck.astro  转折：持有成本与风险
│  ├─ Calculator.astro    现实测算（交互，原生脚本）
│  ├─ Milestones.astro  Differentiation.astro
│  └─ Pricing.astro  Faq.astro  Disclaimer.astro  Footer.astro
└─ pages/index.astro      组装
```

## 约定

- **文案只在 `src/content/site.ts`**。组件里不要硬编码中文字符串与展示数字（含价格、成本、收益率）。
- **设计令牌在 `src/styles/global.css` 的 CSS 变量**，深色优先，浅色经 `prefers-color-scheme` 切换。
  **单一强调色金色 `--c-accent`**，不要引入第二强调色；新颜色先加令牌再用，不要写死色值。
- 圆角：卡片 `rounded-2xl`、按钮 `rounded-full`、输入 `rounded-xl`。
  字体：Space Grotesk（标题）/ Manrope（正文）/ JetBrains Mono（数字，类 `.num`）。
- **合规**：`Disclaimer.astro` 的免责声明不能被弱化、折叠或删除；页面任何位置都不得出现具体金融产品推荐或收益承诺。
- `astro.config.mjs` 的 `site` 目前是**占位** `https://example.com`。
- `Calculator.astro` 的测算是**静态复利推演（年化 4% 写死）**，只是雏形。正式模型是产品侧规划的
  `@rich-sim/core`，将来应复用同一份引擎，而不是在这里另维护一套。

## 占位 / 未接入（不要当已定结论）

三档定价数字、资产持有成本数字（标注「示意」）、无真实照片素材、
表单提交 / 账号 / 支付均未接入。清单见 `handoff.md`「占位 / 待办」。

## 不要做的事

- 不要提交构建产物与依赖：`dist/`、`.astro/`、`node_modules/`、`.env`。
- 不要引入 React 或其他前端框架（当前刻意保持零框架交互），除非明确要求改架构。
- 不要用「示意」数字冒充真实数据或真实报价。
- 提交信息遵守根目录 `git-commit-message.md`：英文 Conventional Commits、按逻辑拆成原子提交、
  不加 AI co-author、**未经明确要求不 push**。
- 不要跳过 `git pull --rebase` 直接 push。
