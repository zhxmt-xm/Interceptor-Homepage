import type { Locale } from './types.ts';

export const GUIDE_CHAPTERS = [
  {
    slug: 'getting-started',
    label: { zh: '快速上手', en: 'Getting started' },
    group: 0,
    summary: {
      zh: '安装与代理就绪、第一条 HTTP 请求，以及保存和正常退出。',
      en: 'Prepare the proxy, capture your first HTTP request, save what matters and quit normally.',
    },
  },
  {
    slug: 'workspace',
    label: { zh: '工作区与基本操作', en: 'Workspace and controls' },
    group: 0,
    summary: {
      zh: '找到需要的工具，调整分栏、主题和语言，了解哪些数据会保留。',
      en: 'Find the right tool, adjust panes and preferences, and understand what is retained.',
    },
  },
  {
    slug: 'capture',
    label: { zh: 'Capture', en: 'Capture' },
    group: 0,
    summary: {
      zh: '从找到一条请求，到理解它的正文、时序和协议。先看清发生了什么，再决定下一步。',
      en: 'Find a request and understand its body, timing and protocol before deciding what to do next.',
    },
  },
  {
    slug: 'composer',
    label: { zh: 'Composer', en: 'Composer' },
    group: 1,
    summary: {
      zh: '独立构造请求，编辑参数和正文，查看响应并管理 Collection。',
      en: 'Build independent requests, edit fields and bodies, inspect responses and organize collections.',
    },
  },
  {
    slug: 'rules',
    label: { zh: 'Rules', en: 'Rules' },
    group: 1,
    summary: {
      zh: '用明确的匹配条件修改后续流量，检查实际生效的结果。',
      en: 'Use explicit conditions to change subsequent traffic, then verify the actual effects.',
    },
  },
  {
    slug: 'breakpoints',
    label: { zh: 'Breakpoints', en: 'Breakpoints' },
    group: 1,
    summary: {
      zh: '在转发前暂停请求、响应或消息，检查后再决定如何继续。',
      en: 'Pause requests, responses or messages before forwarding, inspect them and decide how to continue.',
    },
  },
  {
    slug: 'transfer',
    label: { zh: '导入导出', en: 'Import and export' },
    group: 2,
    summary: {
      zh: '选择合适的格式保留调试数据，并在分享前检查敏感信息。',
      en: 'Choose the right format to retain evidence, and review sensitive data before sharing.',
    },
  },
  {
    slug: 'settings',
    label: { zh: 'Settings', en: 'Settings' },
    group: 2,
    summary: {
      zh: '管理代理、证书、TLS、存储和更新，区分各个平台的前提。',
      en: 'Manage proxies, certificates, TLS, storage and updates with the right platform prerequisites.',
    },
  },
  {
    slug: 'diagnostics',
    label: { zh: 'Diagnostics', en: 'Diagnostics' },
    group: 2,
    summary: {
      zh: '从运行记录中定位失败，查询相关操作并安全地导出诊断。',
      en: 'Locate failures in operation records, narrow queries and export diagnostics safely.',
    },
  },
  {
    slug: 'agent',
    label: { zh: 'Agent', en: 'Agent' },
    group: 3,
    summary: {
      zh: '配置模型、管理对话，在明确范围内使用 AI 辅助调试。',
      en: 'Configure models and conversations, and use AI within a clearly authorized scope.',
    },
  },
  {
    slug: 'mcp',
    label: { zh: 'MCP', en: 'MCP' },
    group: 3,
    summary: {
      zh: '连接外部 AI Host，管理客户端、endpoint、审批和撤权。',
      en: 'Connect external AI hosts and manage clients, endpoints, approvals and revocation.',
    },
  },
  {
    slug: 'tool-permissions',
    label: { zh: 'Tool 权限与审批', en: 'Tool permissions' },
    group: 3,
    summary: {
      zh: '分别控制 Agent 与 MCP，理解只读权限、Ask、Auto 和系统授权。',
      en: 'Control Agent and MCP separately, including read-only access, Ask, Auto and native permissions.',
    },
  },
  {
    slug: 'tool-reference',
    label: { zh: 'Tool 操作速查', en: 'Tool reference' },
    group: 3,
    summary: {
      zh: '按功能查找实际 Tool 名称、作用及操作边界。',
      en: 'Look up actual tool names, effects and boundaries by feature.',
    },
  },
  {
    slug: 'troubleshooting',
    label: { zh: '常见问题与恢复', en: 'Troubleshooting' },
    group: 2,
    summary: {
      zh: '从症状找到排查顺序，保留必要数据并正确恢复系统设置。',
      en: 'Investigate symptoms in order, retain useful evidence and restore system settings correctly.',
    },
  },
] as const;

export type GuideChapterSlug = (typeof GUIDE_CHAPTERS)[number]['slug'];
export type GuidePageId = 'overview' | GuideChapterSlug;
export const GUIDE_LANGUAGE = { zh: 'zh-CN', en: 'en' } as const;

export const GUIDE_GROUPS = [
  {
    title: { zh: '从第一条请求开始', en: 'Start with your first request' },
    description: {
      zh: '配置代理、找到请求，读懂 headers、正文与协议消息。',
      en: 'Set up the proxy, locate traffic and read headers, bodies and protocol messages.',
    },
  },
  {
    title: { zh: '修改与复现', en: 'Modify and reproduce' },
    description: {
      zh: '构造请求、改写流量，在转发前检查并作出决定。',
      en: 'Build requests, change traffic and inspect it before forwarding.',
    },
  },
  {
    title: { zh: '保存与排查', en: 'Save and troubleshoot' },
    description: {
      zh: '保留调试数据，管理网络设置，定位问题并正常恢复。',
      en: 'Retain evidence, configure connections, investigate problems and recover cleanly.',
    },
  },
  {
    title: { zh: 'AI 辅助调试', en: 'AI-assisted debugging' },
    description: {
      zh: '按需连接模型或外部 Host，在明确的权限范围内协作。',
      en: 'Connect optional models or external hosts with explicit permissions.',
    },
  },
] as const;

export const GUIDE_UI = {
  zh: {
    back: '返回官网',
    title: '使用指南',
    eyebrow: 'INTERCEPTOR 使用指南',
    directory: '教程目录',
    onPage: '本章内容',
    draft: '中文初稿',
    notice: '面向 v0.1.1-alpha.1。已验证实操附逐步图，其他分支和平台仍待验收。',
    sidebarNote: '逐步图文持续完善',
    overviewTitle: '让每一步，都有清楚的答案。',
    overviewSummary:
      '从第一次抓包开始，按你要完成的事情查找教程。无需阅读源码，也不需要先配置 AI。',
    previous: '上一章',
    next: '下一章',
    loading: '正在加载教程…',
    notFound: '页面不存在',
    loadError: '教程未能加载',
    loadErrorHint: '请检查网络后重试，也可以继续使用顶部导航。重试会重新加载当前页面。',
    retry: '重新加载',
  },
  en: {
    back: 'Back to website',
    title: 'User Guide',
    eyebrow: 'INTERCEPTOR USER GUIDE',
    directory: 'All chapters',
    onPage: 'On this page',
    draft: 'English draft',
    notice:
      'Written for v0.1.1-alpha.1. Verified walkthroughs include step images; other branches and platforms still need acceptance.',
    sidebarNote: 'Step-by-step images are being completed',
    overviewTitle: 'A clear answer for every step.',
    overviewSummary:
      'Find a guide for the task you want to complete. Start with your first request; no source-code knowledge or AI setup required.',
    previous: 'Previous chapter',
    next: 'Next chapter',
    loading: 'Loading guidebook…',
    notFound: 'Page not found',
    loadError: 'The guide could not be loaded',
    loadErrorHint:
      'Check your connection and retry, or use the site navigation. Retrying reloads this page.',
    retry: 'Reload this page',
  },
} satisfies Record<Locale, Record<string, string>>;

export function guideHref(page: GuidePageId, locale: Locale): string {
  return `/guide${page === 'overview' ? '' : `/${page}`}${locale === 'en' ? '?lang=en' : ''}`;
}

export const GUIDE_ROUTES: { path: string; page: GuidePageId; caseSensitive: boolean }[] = [
  { path: '/guide', page: 'overview', caseSensitive: true },
  ...GUIDE_CHAPTERS.map((chapter) => ({
    path: `/guide/${chapter.slug}`,
    page: chapter.slug,
    caseSensitive: true,
  })),
];
