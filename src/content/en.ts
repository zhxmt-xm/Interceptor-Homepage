import type { FeatureCard, FeatureDetail } from './types';

export const english = {
  title: 'Interceptor — Clarity for every request',
  description:
    'Interceptor is an HTTP(S) debugging proxy for macOS and Windows. Inspect traffic, rewrite responses, replay requests, and debug with optional AI.',
  skip: 'Skip to content',
  imagePreview: {
    close: 'Close image',
    error: 'The image could not be loaded.',
    errorHint: 'Check your connection, close this preview and try again.',
    flipX: 'Flip horizontally',
    flipY: 'Flip vertically',
    rotateLeft: 'Rotate left',
    rotateRight: 'Rotate right',
    zoomOut: 'Zoom out',
    zoomIn: 'Zoom in',
  },
  nav: {
    label: 'Main navigation',
    features: 'Features',
    guide: 'User Guide',
    download: 'Download',
    language: {
      label: 'Language',
      zh: '简体中文',
      en: 'English',
    },
    menu: 'More actions',
    close: 'Close actions',
    star: {
      label: 'Star on GitHub',
      description: 'Star Interceptor on GitHub (opens in a new tab)',
    },
    theme: {
      label: 'Appearance',
      system: 'Follow system',
      light: 'Light',
      dark: 'Dark',
    },
  },
  hero: {
    eyebrow: 'YOUR TRAFFIC. YOUR PERSPECTIVE.',
    first: 'See every request.',
    second: 'Find your next insight.',
    body: 'An HTTP(S) debugging proxy that brings the whole conversation into focus. Capture, understand, and reshape traffic — in one thoughtful workspace.',
    primary: 'Explore the workspace',
    platform: 'Built for macOS & Windows',
    privacy: 'Local capture',
    ai: 'AI, when you want it',
    badge: 'HTTP(S) DEBUGGING PROXY',
  },
  showcase: {
    label: 'Workspace overview',
    eyebrow: 'ONE WORKSPACE. THE WHOLE PICTURE.',
    alt: 'Released Interceptor Capture workspace with local demo requests and a JSON response.',
    description: 'One workspace. From the first request to the next idea.',
    caption: 'Released App screenshot · Local demo data',
    original: 'Open the full-size screenshot',
  },
  features: {
    eyebrow: 'LESS GUESSWORK. MORE SIGNAL.',
    title: 'Make the invisible\nunderstandable.',
    body: 'From a mysterious status code to a stubborn API bug. Keep the tools you need in the same place.',
    imageNote: 'Actual App screenshot · Local demo data',
    openImage: 'Open the full-size screenshot',
    sections: [
      {
        id: 'capture',
        label: 'Capture',
        icon: 'activity',
        title: 'Every request, in context.',
        body: 'Inspect headers, bodies, cookies, timing, and TLS. Filter by app, host, method, or status to get straight to the signal.',
        points: [
          'Filter by application, host, method, status, or protocol.',
          'Read headers, bodies, timing, and TLS details in context.',
          'Follow WebSocket frames and gRPC messages alongside HTTP traffic.',
        ],
        tags: ['HTTP(S)', 'WebSocket', 'gRPC'],
        imageAlt: 'Actual Capture workspace with local requests, filters, and a JSON response.',
      },
      {
        id: 'rules',
        label: 'Rules & Map',
        icon: 'rules',
        title: 'Your traffic. Your rules.',
        body: 'Rewrite a response, serve a local file, redirect an endpoint, or simulate a slow connection. No backend changes required.',
        tags: ['Rewrite', 'Map Local', 'Mock'],
        points: [
          'Match the requests and responses you want to change.',
          'Rewrite content, map a local file, or redirect an endpoint.',
          'Block traffic or add delay without changing the backend.',
        ],
        imageAlt:
          'Actual Rules workspace with applied Host and Path conditions and a request-header rewrite.',
      },
      {
        id: 'breakpoints',
        label: 'Breakpoints',
        icon: 'pause',
        title: 'Pause. Inspect. Intervene.',
        body: 'Stop a request, response, or WebSocket frame in its tracks. Make your edits, then forward it — or drop it.',
        tags: ['Breakpoints', 'Request', 'Response'],
        points: [
          'Pause an HTTP request, response, or WebSocket frame.',
          'Inspect the original content before making an edit.',
          'Continue, forward an edited message, or drop it deliberately.',
        ],
        imageAlt: 'Actual Breakpoints workspace with a paused POST request and editable JSON body.',
      },
      {
        id: 'composer',
        label: 'Composer',
        icon: 'send',
        title: 'Reproduce the unexpected.',
        body: 'Build and resend requests in Composer. Refine headers and bodies, then keep reusable requests together in collections.',
        tags: ['Composer', 'Replay', 'Collections'],
        points: [
          'Build a request with editable parameters, headers, and body.',
          'Resend it and inspect the returned response.',
          'Keep useful requests organized in reusable collections.',
        ],
        imageAlt:
          'Actual Composer workspace with a request header, a real send, and its JSON response.',
      },
      {
        id: 'agent',
        label: 'Agent',
        icon: 'bot',
        title: 'A second perspective.',
        body: 'Bring the captured traffic and your questions into one conversation with the optional built-in Agent. Decide which tools it may use and when it needs approval.',
        tags: ['Optional AI', 'Tools', 'History'],
        points: [
          'Discuss the captured exchange without leaving the workspace.',
          'Use enabled tools, with approval when required.',
          'Resume locally stored conversations when you return.',
        ],
        imageAlt:
          'Actual Agent conversation beside Capture, completed with a local demonstration model.',
      },
      {
        id: 'mcp',
        label: 'MCP',
        icon: 'plug',
        title: 'Bring your own AI workspace.',
        body: 'Connect a compatible external AI host to Interceptor through MCP. Access the same capture, rules, and request tools from the assistant you already use.',
        points: [
          'Enable the loopback-only Streamable HTTP server when needed.',
          'Give each connected client an independent credential.',
          'Choose available tools and Ask or Auto execution mode.',
        ],
        tags: ['MCP', 'External clients', 'Permissions'],
        imageAlt:
          'Actual MCP settings with a running loopback server, a demo Client, and Tool switches; not external-host acceptance.',
      },
    ] satisfies FeatureDetail[],
    capabilities: [
      {
        icon: 'download',
        title: 'Keep your findings.',
        body: 'Export HAR files, native archives, or individual bodies. Review and redact before sharing.',
        tags: ['HAR', 'Archive', 'Body'],
      },
      {
        icon: 'shield',
        title: 'Control the connection.',
        body: 'Manage the system proxy, chain an upstream proxy, and choose TLS passthrough when needed.',
        tags: ['Proxy', 'Upstream', 'TLS'],
      },
      {
        icon: 'terminal',
        title: 'Stay in your workspace.',
        body: 'Resize panels, inspect diagnostic logs, and choose from the app’s themes and interface languages.',
        tags: ['Diagnostics', 'Themes', 'Languages'],
      },
    ] satisfies FeatureCard[],
  },
  resources: {
    eyebrow: 'A LITTLE GUIDANCE GOES A LONG WAY',
    title: 'Your next steps.',
    quickStart: 'Start with the essentials.',
    quickBody:
      'Proxy setup, HTTPS inspection, your first request, and orderly cleanup — in the project README.',
    quickAction: 'Read the quick start',
    guide: 'The complete user guide.',
    guideBody: 'Start with your first request, then find instructions and screenshots by feature.',
    guideAction: 'Read the user guide',
    steps: 'Follow the steps.',
    stepsBody: 'Find real App step images by feature, with matching example values and results.',
    stepsAction: 'View step images',
    access: 'The current quick start is in the private product repository.',
  },
  faq: {
    eyebrow: 'GOOD QUESTIONS',
    title: 'A few things to know.',
    items: [
      {
        id: 'privacy',
        question: 'Does my traffic stay on my computer?',
        answer:
          'Capture storage is local. Agent can send conversation context and tool results to your configured model provider; an authorized MCP client can access data exposed by enabled tools. Review permissions, and redact recordings before sharing.',
      },
      {
        id: 'ai',
        question: 'Do I need an AI account?',
        answer:
          'No. Capture, Rules, Breakpoints, and Composer do not require a model API key. The built-in Agent and external MCP integrations are optional.',
      },
      {
        id: 'https',
        question: 'Why does HTTPS inspection need a certificate?',
        answer:
          'Decrypting HTTPS requires a local CA trusted through the operating system. Trust is a separate system permission and remains after you close the app. Remove it through Settings when it is no longer needed. Certificate-pinned apps may need TLS passthrough instead.',
      },
      {
        id: 'downloads',
        question: 'Where can I find the latest downloads?',
        answer:
          'Download in the header opens GitHub Releases in a new tab: the latest stable release when one exists, or the releases list otherwise. Choose DMG/ZIP for Intel x64 or Apple Silicon arm64, or EXE/MSI/ZIP for Windows x64. Source code archives are not installers. Downloads require a GitHub account with repository access; anonymous downloads are not available.',
      },
      {
        id: 'installation',
        question: 'What should I know before installing?',
        answer:
          'macOS packages are ad-hoc signed and not notarized. Windows installers are unsigned and may trigger SmartScreen warnings. Verify the download and follow normal system security prompts; do not disable system-wide protections. EXE runs the same MSI. Extract the full ZIP before launching; helper and certificate authorization still apply.',
      },
    ],
  },
  footer: {
    tagline: 'Clarity, one request at a time.',
    github: 'GitHub',
    feedback: 'Feedback',
    guide: 'Resources',
    access: 'Source code, releases and feedback are publicly available on GitHub.',
    note: 'A workspace for curious developers',
    legal: 'Inspect only traffic you are authorized to access.',
  },
};
