# Handoff · 财富沙盘落地页

> 更新时间：2026-10-03

---

## 这个仓库是什么

产品**落地页**。双主线叙事：富豪模拟做钩子，现实测算做落点。

这是**营销页框架**，不是产品应用。应用将来是独立仓库（见产品文档仓库 `rich-sim`）。

## 技术栈

**Astro 5 + Tailwind v4 + astro-icon（Phosphor）。无 React**，交互用原生脚本。

## 当前状态

- ✅ 构建通过（`npm run build`），浏览器验证过：深色/浅色、桌面/平板、测算器三种状态
- **分支**：`dev`，与 `origin/dev` 同步
- **默认分支**：`main`
- **远程**：`git@github.com:bayernjf/rich-sim-landing.git`（public）
- ❌ **未部署**（只推到了 GitHub）
- 构建产物在 `dist/`（已 gitignore）

## 如何运行

```bash
npm install
```

```bash
npm run dev
```

## 结构

```
src/
├─ content/site.ts        所有文案集中在此，改文案不用碰布局
├─ styles/global.css      Tailwind + 设计令牌（深色优先，浅色自适应）
├─ layouts/Layout.astro   页面外壳、字体、滚动进场脚本
├─ components/            Nav / Hero / AssetPreview / SimShowcase /
│                         RealityCheck / Calculator / Milestones /
│                         Differentiation / Pricing / Faq / Disclaimer / Footer
└─ pages/index.astro      组装
```

## 占位 / 待办

- **品牌名**「财富沙盘」是占位（产品名待定）
- **定价数字**（¥0 / ¥39 / ¥19）是占位，商业模式未定
- **成本数字**（住宅 60 万/年等）标注了"示意"，需换真实数据
- **没有真实照片**：视觉靠真实组件预览（资产看板、测算器）+ CSS 背景。如需摄影素材，首屏与「富豪模拟」区块各补一张
- **测算逻辑**是静态复利推演（年化 4%，写死在 `Calculator.astro`）
- **表单提交 / 账号 / 支付**均未接入

## 与产品文档的关系

产品文档在 `rich-sim` 仓库。落地页的测算器将来应复用同一份计算引擎（见 `architecture.md` §4），而不是各自维护。

## 注意

- 本地 `dev` 领先 `origin/dev`，**有未推送的提交**（数量用 `git status` 查看）。
