import type { english } from './en';

export const chinese: typeof english = {
  title: 'Interceptor — 看清每个请求',
  description:
    'Interceptor 是面向 macOS 与 Windows 的 HTTP(S) 调试代理，集流量捕获、规则改写、断点、请求重放与可选 AI 调试于一个工作台。',
  skip: '跳到正文',
  nav: {
    label: '主导航',
    features: '产品能力',
    guide: '使用指南',
    download: '下载',
    language: {
      label: '语言',
      zh: '简体中文',
      en: 'English',
    },
    menu: '更多操作',
    close: '收起操作',
    star: {
      label: 'Star on GitHub',
      description: '在 GitHub 为 Interceptor 加星（新标签页打开）',
    },
    theme: {
      label: '外观',
      system: '跟随系统',
      light: '浅色',
      dark: '深色',
    },
  },
  hero: {
    eyebrow: 'YOUR TRAFFIC. YOUR PERSPECTIVE.',
    first: '看清每个请求。',
    second: '掌控每次响应。',
    body: '不再猜测应用与网络之间发生了什么。\n在一个专注的工作台里，捕获、理解并改写 HTTP(S) 流量。',
    primary: '探索工作台',
    platform: '面向 macOS 与 Windows',
    privacy: '本地流量存储',
    ai: 'AI，按需开启',
    badge: 'HTTP(S) DEBUGGING PROXY',
  },
  showcase: {
    label: '工作台总览',
    eyebrow: 'ONE WORKSPACE. THE WHOLE PICTURE.',
    alt: 'Interceptor 发布版 Capture 实拍，展示本地示例请求与 JSON 响应。',
    description: '一个工作台，从找到请求，到验证下一个想法。',
    caption: '发布版 App 实拍 · 本地演示数据',
    original: '查看原尺寸截图',
  },
  features: {
    eyebrow: 'LESS GUESSWORK. MORE SIGNAL.',
    title: '让看不见的过程，\n变成看得懂的线索。',
    body: '从一个意外的状态码，到一个难以复现的 API 问题。\n把需要的工具，放在同一个地方。',
    imageNote: '真实 App 截图 · 本地演示数据',
    openImage: '查看原尺寸截图',
    sections: [
      {
        id: 'capture',
        label: 'Capture',
        icon: 'activity',
        title: '每个请求，都有上下文。',
        body: '查看 headers、正文、cookies、耗时和 TLS 信息。按应用、域名、方法或状态筛选，把注意力留给真正的线索。',
        points: [
          '按应用、域名、方法、状态或协议快速筛选。',
          '结合上下文查看 headers、正文、耗时与 TLS 信息。',
          '在 HTTP 之外，继续追踪 WebSocket 帧与 gRPC 消息。',
        ],
        tags: ['HTTP(S)', 'WebSocket', 'gRPC'],
        imageAlt: 'Capture 实拍，展示本地请求列表、筛选区与 JSON 响应。',
      },
      {
        id: 'rules',
        label: 'Rules & Map',
        icon: 'rules',
        title: '你的流量，你来定义。',
        body: '改写响应、映射本地文件、重定向接口，或模拟网络延迟。不改后端，也能验证下一种可能。',
        tags: ['Rewrite', 'Map Local', 'Mock'],
        points: [
          '匹配需要介入的请求与响应。',
          '改写内容、映射本地文件，或重定向接口。',
          '不改后端，也能阻断流量或模拟网络延迟。',
        ],
        imageAlt: 'Rules 实拍，展示已生效的 Host、Path 条件与请求 Header 改写。',
      },
      {
        id: 'breakpoints',
        label: 'Breakpoints',
        icon: 'pause',
        title: '按下暂停，再做决定。',
        body: '挂起请求、响应或 WebSocket 帧。查看、编辑，然后选择继续转发或丢弃，让排查不再追着问题跑。',
        tags: ['Breakpoints', 'Request', 'Response'],
        points: [
          '挂起 HTTP 请求、响应或 WebSocket 帧。',
          '先看清原始内容，再编辑需要改变的部分。',
          '选择继续、转发修改后的内容，或直接丢弃。',
        ],
        imageAlt: 'Breakpoints 实拍，展示已挂起的 POST 请求与可编辑的 JSON 正文。',
      },
      {
        id: 'composer',
        label: 'Composer',
        icon: 'send',
        title: '把偶发，变成可复现。',
        body: '用 Composer 构造并重发请求，调整 headers 与正文。把常用请求保存到集合，下一次从这里继续。',
        tags: ['Composer', 'Replay', 'Collections'],
        points: [
          '编辑参数、headers 与正文，构造需要的请求。',
          '重新发送，并直接检查返回的响应。',
          '把常用请求保存在集合中，随时接着调试。',
        ],
        imageAlt: 'Composer 实拍，展示请求 Header、真实发送结果与 JSON 响应。',
      },
      {
        id: 'agent',
        label: 'Agent',
        icon: 'bot',
        title: '多一个观察问题的视角。',
        body: '按需开启内置 Agent，把观察到的流量和问题放进同一段对话。哪些工具可用、何时需要批准，始终由你决定。',
        tags: ['Optional AI', 'Tools', 'History'],
        points: [
          '在捕获的交互旁边展开对话，不必离开工作台。',
          '调用已启用的工具，需要时先由你批准。',
          '重新打开本地保存的对话，接着已有线索继续。',
        ],
        imageAlt: 'Agent 实拍，展示 Capture 旁使用本地演示模型完成的对话。',
      },
      {
        id: 'mcp',
        label: 'MCP',
        icon: 'plug',
        title: '接入你熟悉的 AI 工作台。',
        body: '通过 MCP 连接兼容的外部 AI Host，在已有的助手中使用 Interceptor 的流量、规则和请求工具，不必把工作流搬进另一个聊天界面。',
        points: [
          '按需开启仅监听本机的 Streamable HTTP 服务。',
          '为每个接入客户端配置独立凭据。',
          '选择可用工具，以及 Ask 或 Auto 执行模式。',
        ],
        tags: ['MCP', 'External clients', 'Permissions'],
        imageAlt:
          'MCP 设置实拍，展示运行中的本机服务、演示 Client 和 Tool 开关，不代表外部 Host 验收。',
      },
    ],
    capabilities: [
      {
        icon: 'download',
        title: '线索，也可以带走。',
        body: '导出 HAR、原生录制归档或单独的正文。分享之前，先检查并移除敏感信息。',
        tags: ['HAR', 'Archive', 'Body'],
      },
      {
        icon: 'shield',
        title: '连接方式，由你选择。',
        body: '管理系统代理、串联上游代理，并在需要时配置 TLS passthrough。',
        tags: ['Proxy', 'Upstream', 'TLS'],
      },
      {
        icon: 'terminal',
        title: '保留自己的工作节奏。',
        body: '调整分栏，查看诊断日志，选择 App 的主题与界面语言，让工作台更适合你。',
        tags: ['Diagnostics', 'Themes', 'Languages'],
      },
    ],
  },
  resources: {
    eyebrow: 'A LITTLE GUIDANCE GOES A LONG WAY',
    title: '下一步，从这里开始。',
    quickStart: '先掌握最重要的几步。',
    quickBody: '设置代理、检查 HTTPS、找到第一个请求，以及结束后的恢复方式，都在项目 README 中。',
    quickAction: '阅读快速开始',
    guide: '完整使用指南。',
    guideBody: '中英教程初稿均可阅读。按功能查找操作步骤、真实步骤图和明确的使用限制。',
    guideAction: '阅读教程',
    steps: '跟着步骤操作。',
    stepsBody: '按功能查找真实 App 步骤图，核对相同示例值与操作结果。',
    stepsAction: '查看步骤图',
    access: '当前快速开始文档位于私有产品仓库。',
  },
  faq: {
    eyebrow: 'GOOD QUESTIONS',
    title: '还有几件事，值得了解。',
    items: [
      {
        id: 'privacy',
        question: '流量数据会留在本机吗？',
        answer:
          '捕获数据保存在本地。使用 Agent 时，对话上下文与工具结果可能发送给配置的模型服务；已授权的 MCP 客户端也能取得启用工具暴露的数据。连接前请检查权限，分享录制前请移除敏感信息。',
      },
      {
        id: 'ai',
        question: '一定需要 AI 账号或 API key 吗？',
        answer:
          '不需要。Capture、Rules、Breakpoints 和 Composer 都不要求模型 API key。内置 Agent 与外部 MCP 接入是按需启用的可选能力。',
      },
      {
        id: 'https',
        question: '为什么检查 HTTPS 需要安装证书？',
        answer:
          'HTTPS 解密需要通过操作系统信任本地 CA，这是独立的系统权限。关闭应用不会自动移除信任；不再需要时请从 Settings 中移除。启用证书固定的应用可能需要 TLS passthrough，而不是解密。',
      },
      {
        id: 'downloads',
        question: '在哪里获取最新安装包？',
        answer:
          '点击顶部“下载”在新标签页打开 GitHub Releases：有稳定版时打开最新稳定版详情，尚无稳定版时显示发布列表，可查看预发布。按设备选择 Intel x64 或 Apple Silicon arm64 的 DMG/ZIP，或 Windows x64 的 EXE/MSI/ZIP。Source code 源码归档不是安装包。下载需登录有 GitHub 仓库访问权限的账号，暂未开放匿名下载。',
      },
      {
        id: 'installation',
        question: '安装前需要留意什么？',
        answer:
          'macOS 包使用 ad-hoc 签名，尚未经 Apple 公证；Windows 安装器未签名，可能触发 SmartScreen 提示。请核对下载来源并遵循正常系统安全提示，不要关闭系统安全保护。EXE 内嵌并启动同一 MSI；ZIP 需完整解压后运行，helper 和证书授权要求不变。',
      },
    ],
  },
  footer: {
    tagline: '让每一个请求，都更清晰。',
    github: 'GitHub',
    feedback: '问题反馈',
    guide: '学习资源',
    access: 'GitHub 链接当前需要仓库访问权限。',
    note: '为保持好奇心的开发者而造',
    legal: '只检查你有权访问的流量。',
  },
};
