/**
 * All landing-page copy lives here so positioning and wording can be
 * swapped without touching layout. Numbers marked 示意 / illustrative are
 * illustrative examples, not real quotes. Prices are placeholders.
 * Components read the copy for the current locale via getCopy(langOf(pathname)).
 */

export function getCopy(locale: string) {
  return locale === 'zh' ? zh : en;
}

/** Astro.locale is not reliably populated in static file routes; derive the
 *  language from the URL path instead. zh lives under /zh/, en at the root. */
export function langOf(pathname: string): 'en' | 'zh' {
  return pathname.startsWith('/zh/') ? 'zh' : 'en';
}

/** The product app (rich-sim repo, Cloudflare Pages). This is the landing
 *  page's only outbound link, so it must move with the custom-domain decision
 *  (rich-sim docs/deferred-items.md #2). */
export const APP_URL = 'https://rich-sim.pages.dev';

const en = {
  brand: {
    name: 'WEALTH SIM',
    alt: '财富模拟',
  },
  seo: {
    title: 'Wealth Sim · Try on a rich life, then see your own path',
    description:
      'See the rich\u2019s real wealth and bills, then run your own income through the same numbers to find how far you are from the life you want.',
  },
  nav: [
    { label: 'Wealth Sim', href: '#sim' },
    { label: 'Reality Check', href: '#calc' },
    { label: 'Why', href: '#why' },
    { label: 'Pricing', href: '#pricing' },
  ],
  cta: {
    sim: 'Try the rich life',
    calc: 'Calculate now',
    app: 'Open the app',
  },
  hero: {
    headline: ['Try on a rich life first,', 'then see your own path'],
    sub: 'We lay out the rich\u2019s real wealth and bills, then run your own income through the same numbers to see how far you are from the life you want.',
  },
  sim: {
    title: 'A complete rich-person balance sheet',
    lead: 'Not endless money. Every persona carries a real asset structure — and a real bill to match.',
    tiles: [
      {
        icon: 'ph:users-three',
        title: 'Personas',
        body: 'Founder, investor, family office — each with its own asset structure and income sources.',
        tone: 'accent',
        span: 'wide',
      },
      {
        icon: 'ph:squares-four',
        title: 'Asset dashboard',
        body: 'Property, equity, funds, art — item by item, visible and tappable.',
        tone: 'plain',
      },
      {
        icon: 'ph:receipt',
        title: 'Yearly cost of ownership',
        body: 'Upkeep, taxes, staff, private jets. The rich don\u2019t only receive.',
        tone: 'plain',
      },
      {
        icon: 'ph:chart-line',
        title: 'Cash-flow swings',
        body: 'Downturns, losses, liquidity squeezes — the part no fantasy video shows.',
        tone: 'accent',
        span: 'wide',
      },
    ],
  },
  reality: {
    title: 'But do you actually want that life?',
    lead: 'Short videos show you the spending, never the bills. Put the upkeep, taxes and risk on the table, and much of the \u201crich life\u201d is really an intense cash-flow job.',
    note: 'Figures below are illustrative — they explain structure, not real quotes.',
    rows: [
      { item: 'A $30M home', cost: '~$600k a year in upkeep & property taxes' },
      { item: 'A private jet', cost: '~$8M a year to own and operate' },
      { item: 'A family trust', cost: '~0.5% of assets a year in fees' },
    ],
  },
  calc: {
    title: 'Run the numbers on yourself',
    lead: 'No dozens of fields. Four numbers — see your current saving speed and how far the goal is.',
    fields: {
      income: 'Monthly income',
      expense: 'Monthly spending',
      savings: 'Current savings',
      target: 'Target net worth',
    },
    unit: '$',
    submit: 'Calculate',
    empty: 'Fill in the four numbers on the left; results show here.',
    labels: {
      years: 'At your current saving pace, roughly',
      yearsUnit: 'years',
      rate: 'Savings rate',
      monthly: 'Investable per month',
      target: 'Target net worth',
    },
    impossible: 'At your current pace, this target is unreachable within 60 years.',
    negative: 'Your monthly spending is at or above your income — no net savings right now.',
    done: 'This goal is already covered by your current savings.',
    assumption: 'Assumes 4% annual return and flat income & spending; excludes inflation, taxes and large unexpected costs.',
    disclaimer: 'Static projection only — not investment, career or financial advice.',
  },
  milestones: {
    title: 'No leap-to-the-top',
    lead: 'Big goals get abandoned. Break it into achievable stages, each with one concrete thing to do.',
    note: 'Example path — replace with your own numbers.',
    steps: [
      {
        verb: 'Raise your savings rate',
        detail: 'From 15% to 30% of monthly income',
        action: 'Track spending for two weeks and cut fixed costs',
      },
      {
        verb: 'Build your first capital',
        detail: '~$30k investable assets within 3 years',
        action: 'Save a 3\u20136 month emergency fund first, then start investing',
      },
      {
        verb: 'Grow your income',
        detail: 'Grow your main income ~60% within 5 years',
        action: 'Pick one skill that pays, invest in it consistently',
      },
    ],
  },
  why: {
    title: 'Not a fantasy game, not a ledger',
    items: [
      {
        icon: 'ph:game-controller',
        title: 'Wealth sim games',
        body: 'Fun only. The numbers are fake and unrelated to your real finances.',
      },
      {
        icon: 'ph:notebook',
        title: 'Budgeting & finance apps',
        body: 'Complete data, but no goal in sight and no reason to keep going.',
      },
      {
        icon: 'ph:compass',
        title: 'Wealth Sim',
        body: 'First make you see it, then make you calculate it with your own numbers.',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    note: 'Illustrative placeholder pricing — final plans are pending.',
    highlightLabel: 'Best value',
    tiers: [
      {
        name: 'Free',
        price: '$0',
        unit: '',
        desc: 'Start playing',
        features: ['Basic personas', 'Asset dashboard', 'Simple static calculator'],
        cta: 'Calculate now',
        highlight: false,
      },
      {
        name: 'Deep report',
        price: '$39',
        unit: '/ once',
        desc: 'For one serious run',
        features: ['Full projection report', 'Multiple scenarios', 'Exportable & saved'],
        cta: 'Generate my report',
        highlight: false,
      },
      {
        name: 'Member',
        price: '$19',
        unit: '/ month',
        desc: 'Keep your eyes on the goal',
        features: ['All personas', 'Dynamic financial model', 'Compare saved plans', 'Goal progress tracking'],
        cta: 'Become a member',
        highlight: true,
      },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Is this financial advice?',
        a: 'No. Every result is a static calculation of the assumptions you entered — not investment, career or financial advice.',
      },
      {
        q: 'How accurate is it?',
        a: 'It computes \u201cwhat happens if these assumptions hold\u201d — it is not a prediction. Real outcomes depend on your income, industry, luck and the macro environment.',
      },
      {
        q: 'Is my data safe?',
        a: 'Data is used only for your current calculation. We do not sell your information or use it to pitch financial products.',
      },
      {
        q: 'Do I have to pay?',
        a: 'Basic persona simulation and the simple calculator are free. Payment only unlocks deeper models and retention features.',
      },
      {
        q: 'Where do the rich-person cost figures come from?',
        a: 'Public sources and reasonable estimates, used only to explain structure — not real quotes.',
      },
    ],
  },
  disclaimer:
    'Wealth Sim is a financial-literacy simulation tool, not an investment adviser. All calculations are simulation only and do not constitute investment, career or financial advice. Wealth is shaped by industry, opportunity and the macro environment — do not make major decisions based solely on these results.',
  footer: {
    note: 'Wealth Sim is a financial-literacy simulation tool.',
    links: [
      { label: 'Wealth Sim', href: '#sim' },
      { label: 'Reality Check', href: '#calc' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
};

const zh = {
  brand: {
    name: '财富模拟',
    alt: 'WEALTH SIM',
  },
  seo: {
    title: '财富模拟 · 先体验富豪人生，再看清你自己的路',
    description: '把富人的财富可视化，再用你的真实收入算出：离你想要的生活，还差多远。',
  },
  nav: [
    { label: '富豪模拟', href: '#sim' },
    { label: '现实测算', href: '#calc' },
    { label: '为什么', href: '#why' },
    { label: '定价', href: '#pricing' },
  ],
  cta: {
    sim: '体验富豪人生',
    calc: '开始测算',
    app: '打开应用',
  },
  hero: {
    headline: ['先体验一次富豪人生，', '再看清你自己的路'],
    sub: '把富人的财富摊开给你看，再用你的真实收入算一笔账：离你想要的生活，还差多远。',
  },
  sim: {
    title: '一套完整的富人资产负债表',
    lead: '不是无限刷钱。每个身份都有一份真实的资产结构，也有对应的账单。',
    tiles: [
      {
        icon: 'ph:users-three',
        title: '身份剧本',
        body: '创始人、投资人、家族信托，每个身份一套不同的资产结构与收入来源。',
        tone: 'accent',
        span: 'wide',
      },
      {
        icon: 'ph:squares-four',
        title: '资产看板',
        body: '房产、股权、基金、艺术品逐项拆开，看得见，也点得动。',
        tone: 'plain',
      },
      {
        icon: 'ph:receipt',
        title: '每年持有成本',
        body: '物业、维护、税费、佣人、私人飞机。富人不是只进不出。',
        tone: 'plain',
      },
      {
        icon: 'ph:chart-line',
        title: '现金流波动',
        body: '行业下行、投资亏损、流动性吃紧，爽文里不会出现的那部分。',
        tone: 'accent',
        span: 'wide',
      },
    ],
  },
  reality: {
    title: '但你真的想要这种人生吗？',
    lead: '短视频只给你看消费，不给你看账单。把维护成本、税费和风险摊到桌面上，很多「富人生活」其实是一份高强度的现金流工作。',
    note: '以下数字仅为示意，用于说明结构，不是真实报价。',
    rows: [
      { item: '一套 3000 万住宅', cost: '年维护与物业税费 约 60 万' },
      { item: '一架私人飞机', cost: '年持有与运行成本 约 800 万' },
      { item: '一个家族信托', cost: '年管理费 约资产规模的 0.5%' },
    ],
  },
  calc: {
    title: '用你自己的数字，算一遍',
    lead: '不填几十项。四个数字，先看清你现在的储蓄速度，和离目标还有多远。',
    fields: {
      income: '月收入',
      expense: '月支出',
      savings: '现有存款',
      target: '目标净资产',
    },
    unit: '元',
    submit: '开始测算',
    empty: '填入左侧四个数字，这里会显示结果。',
    labels: {
      years: '按当前储蓄速度，约需',
      yearsUnit: '年',
      rate: '当前储蓄率',
      monthly: '每月可用于投资',
      target: '目标净资产',
    },
    impossible: '按当前储蓄速度，60 年内无法达到这个目标。',
    negative: '你的月支出不低于月收入，当前没有净储蓄。',
    done: '这个目标已经在你的存款覆盖范围内。',
    assumption: '假设年化收益率 4%，收入与支出保持不变，未计入通胀、税费与大额意外支出。',
    disclaimer: '结果仅为静态推演，不构成投资、职业或理财建议。',
  },
  milestones: {
    title: '不会让你一步登天',
    lead: '目标太大就会放弃。拆成能落地的阶段，每一阶段配一件具体要做的事。',
    note: '以下为示例路径，请替换成你自己的数字。',
    steps: [
      {
        verb: '提高储蓄率',
        detail: '把月储蓄率从 15% 提到 30%',
        action: '记账两周，找出能砍掉的固定支出',
      },
      {
        verb: '攒出第一笔本金',
        detail: '3 年内积累 20 万可投资资产',
        action: '先备好 3 到 6 个月应急金，再开始定投',
      },
      {
        verb: '抬升收入',
        detail: '5 年内把主业收入从 15k 提到 25k',
        action: '挑一项能涨薪的硬技能，持续投入',
      },
    ],
  },
  why: {
    title: '不是爽游，也不是记账本',
    items: [
      {
        icon: 'ph:game-controller',
        title: '财富模拟游戏',
        body: '只有爽感。数字是假的，和你的真实财务没有关系。',
      },
      {
        icon: 'ph:notebook',
        title: '记账与理财工具',
        body: '数据很全，但看不到目标，也没有坚持下去的理由。',
      },
      {
        icon: 'ph:compass',
        title: '财富模拟',
        body: '先用幻想让你看见，再用你自己的数字让你算清。',
      },
    ],
  },
  pricing: {
    title: '定价',
    note: '以下价格为占位，最终方案待定。',
    highlightLabel: '长期使用',
    tiers: [
      {
        name: '免费',
        price: '¥0',
        unit: '',
        desc: '先玩起来',
        features: ['基础身份剧本', '资产看板', '简易静态测算'],
        cta: '开始测算',
        highlight: false,
      },
      {
        name: '深度报告',
        price: '¥39',
        unit: '/ 次',
        desc: '只想认真算一次',
        features: ['完整测算报告', '多情景推演', '可导出留存'],
        cta: '生成我的报告',
        highlight: false,
      },
      {
        name: '会员',
        price: '¥19',
        unit: '/ 月',
        desc: '长期盯着目标',
        features: ['全部身份剧本', '动态财务模型', '多方案存档对比', '目标进度追踪'],
        cta: '开通会员',
        highlight: true,
      },
    ],
  },
  faq: {
    title: '常见问题',
    items: [
      {
        q: '这是理财建议吗？',
        a: '不是。所有结果只是你输入假设下的静态算术推演，不构成投资、职业或理财建议。',
      },
      {
        q: '测算准吗？',
        a: '它算的是「如果这些假设成立会怎样」，不是预测。真实结果取决于你的收入、行业、机遇和宏观环境。',
      },
      {
        q: '我的数据安全吗？',
        a: '数据仅用于当次测算。我们不出售你的信息，也不会用它向你推销任何金融产品。',
      },
      {
        q: '一定要付费吗？',
        a: '基础的身份模拟和简易测算是免费的。付费只为更完整的模型和留存功能。',
      },
      {
        q: '富人的成本数据从哪来？',
        a: '来自公开资料和合理估算，只用于说明结构，不是真实报价。',
      },
    ],
  },
  disclaimer:
    '本产品是财商模拟教育工具，不是投资顾问。所有测算仅为模拟推演，不构成投资、职业或理财建议。财富受行业、机遇与宏观环境影响，请勿仅凭测算结果做重大决策。',
  footer: {
    note: '财富模拟是一个财商模拟教育工具。',
    links: [
      { label: '富豪模拟', href: '#sim' },
      { label: '现实测算', href: '#calc' },
      { label: '定价', href: '#pricing' },
      { label: '常见问题', href: '#faq' },
    ],
  },
};
