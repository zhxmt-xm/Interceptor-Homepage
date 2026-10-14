import type { Locale } from './types.ts';

export const GUIDE_CHAPTERS = [
  {
    slug: 'getting-started',
    label: '快速上手',
    group: 0,
    summary: '安装与代理就绪、第一条 HTTP 请求，以及保存和正常退出。',
  },
  {
    slug: 'workspace',
    label: '工作区与基本操作',
    group: 0,
    summary: '找到需要的工具，调整分栏、主题和语言，了解哪些数据会保留。',
  },
  {
    slug: 'capture',
    label: 'Capture',
    group: 0,
    summary: '从找到一条请求，到理解它的正文、时序和协议。先看清发生了什么，再决定下一步。',
  },
  {
    slug: 'composer',
    label: 'Composer',
    group: 1,
    summary: '独立构造请求，编辑参数和正文，查看响应并管理 Collection。',
  },
  {
    slug: 'rules',
    label: 'Rules',
    group: 1,
    summary: '用明确的匹配条件修改后续流量，检查实际生效的结果。',
  },
  {
    slug: 'breakpoints',
    label: 'Breakpoints',
    group: 1,
    summary: '在转发前暂停请求、响应或消息，检查后再决定如何继续。',
  },
  {
    slug: 'transfer',
    label: '导入导出',
    group: 2,
    summary: '选择合适的格式保留调试数据，并在分享前检查敏感信息。',
  },
  {
    slug: 'settings',
    label: 'Settings',
    group: 2,
    summary: '管理代理、证书、TLS、存储和更新，区分各个平台的前提。',
  },
  {
    slug: 'diagnostics',
    label: 'Diagnostics',
    group: 2,
    summary: '从运行记录中定位失败，查询相关操作并安全地导出诊断。',
  },
  {
    slug: 'agent',
    label: 'Agent',
    group: 3,
    summary: '配置模型、管理对话，在明确范围内使用 AI 辅助调试。',
  },
  {
    slug: 'mcp',
    label: 'MCP',
    group: 3,
    summary: '连接外部 AI Host，管理客户端、endpoint、审批和撤权。',
  },
  {
    slug: 'tool-permissions',
    label: 'Tool 权限与审批',
    group: 3,
    summary: '分别控制 Agent 与 MCP，理解只读权限、Ask、Auto 和系统授权。',
  },
  {
    slug: 'tool-reference',
    label: 'Tool 操作速查',
    group: 3,
    summary: '按功能查找实际 Tool 名称、作用及操作边界。',
  },
  {
    slug: 'troubleshooting',
    label: '常见问题与恢复',
    group: 2,
    summary: '从症状找到排查顺序，保留必要数据并正确恢复系统设置。',
  },
] as const;

export type GuideChapterSlug = (typeof GUIDE_CHAPTERS)[number]['slug'];
export type GuidePageId = 'overview' | GuideChapterSlug;

export const GUIDE_GROUPS = [
  { title: '从第一条请求开始', description: '配置代理、找到请求，读懂 headers、正文与协议消息。' },
  { title: '修改与复现', description: '构造请求、改写流量，在转发前检查并作出决定。' },
  { title: '保存与排查', description: '保留调试数据，管理网络设置，定位问题并正常恢复。' },
  { title: 'AI 辅助调试', description: '按需连接模型或外部 Host，在明确的权限范围内协作。' },
] as const;

export const GUIDE_UI = {
  zh: {
    back: '返回官网',
    title: '使用指南',
    eyebrow: 'INTERCEPTOR 使用指南',
    directory: '教程目录',
    onPage: '本章内容',
    draft: '中文初稿',
    notice: '面向 v0.1.1-alpha.1 整理。实际版本试读、真实产品截图与视频仍待补充。',
    sidebarNote: '图片与视频持续补充',
    overviewTitle: '让每一步，都有清楚的答案。',
    overviewSummary:
      '从第一次抓包开始，按你要完成的事情查找教程。无需阅读源码，也不需要先配置 AI。',
    previous: '上一章',
    next: '下一章',
    loading: '正在加载教程…',
    notFound: '页面不存在',
  },
  en: {
    back: 'Back to website',
    title: 'User Guide',
    eyebrow: 'INTERCEPTOR USER GUIDE',
    directory: 'All chapters',
    onPage: 'On this page',
    draft: 'Chinese draft',
    notice:
      'Written for v0.1.1-alpha.1. Release walkthroughs, product screenshots and videos are pending. English articles are not available yet.',
    sidebarNote: 'Screenshots and videos are pending',
    overviewTitle: 'A clear answer for every step.',
    overviewSummary:
      'Browse the Chinese draft by task. Start with your first request; no source-code knowledge or AI setup required.',
    previous: 'Previous chapter',
    next: 'Next chapter',
    loading: 'Loading guidebook…',
    notFound: 'Page not found',
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
