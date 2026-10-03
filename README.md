# 财富模拟（rich-sim）· 落地页

产品落地页框架。双主线叙事：**富豪模拟做钩子，现实测算做落点**。

技术栈：Astro + Tailwind v4 + astro-icon（Phosphor）。无 React，交互用原生脚本。

## 开发

```bash
npm install
npm run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

## 结构

```
src/
├─ content/site.ts        所有文案集中在此，改文案不用碰布局
├─ styles/global.css      Tailwind + 设计令牌（深色优先，浅色自动适配）
├─ layouts/Layout.astro   页面外壳、字体、滚动进场脚本
├─ components/
│  ├─ Nav.astro           顶部导航（含移动端菜单）
│  ├─ Hero.astro          首屏：双 CTA + 资产看板预览
│  ├─ AssetPreview.astro  资产看板（真实组件预览，非假截图）
│  ├─ SimShowcase.astro   富豪模拟：身份/资产/成本/波动
│  ├─ RealityCheck.astro  转折：持有成本与风险
│  ├─ Calculator.astro    现实测算（交互，原生脚本）
│  ├─ Milestones.astro    阶梯目标
│  ├─ Differentiation.astro  与爽游/记账工具的差异
│  ├─ Pricing.astro       定价
│  ├─ Faq.astro           常见问题
│  ├─ Disclaimer.astro    合规免责声明
│  └─ Footer.astro        页脚
└─ pages/index.astro      组装
```

## 设计约定

- **单一强调色**（金色 `--c-accent`），全页统一。
- **深色优先**，浅色通过 `prefers-color-scheme` 自动切换（令牌在 `global.css`）。
- 圆角规则：卡片 16px（`rounded-2xl`），按钮胶囊（`rounded-full`），输入框 12px（`rounded-xl`）。
- 字体：Space Grotesk（标题）/ Manrope（正文）/ JetBrains Mono（数字，`.num`）。

## 待办 / 占位

- [ ] 定价数字为占位，最终方案待定。
- [ ] `RealityCheck`、`AssetPreview` 中的成本数字为**示意**，需替换为真实数据。
- [ ] 需要真实图片素材的位置见下。
- [ ] 测算逻辑目前为静态复利推演（年化 4%），需接入正式模型。
- [ ] 表单提交、账号、支付均未接入。

## 图片

当前未使用真实照片，视觉由真实组件预览（资产看板、测算器）与 CSS 背景承担。
如需摄影素材，建议在首屏与「富豪模拟」区块各放一张，深色、克制的建筑/城市/室内题材。
