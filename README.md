# Interceptor Homepage

Interceptor 产品官网。直接维护正式页面，不另建或维护官网设计 SPA。

使用 React、TypeScript、Vite 和 CSS Modules，构建结果为纯静态文件。Cloudflare Workers Static Assets 配置已准备；不需要业务 Worker、数据库、服务端密钥或付费运行时。

## 本地运行

使用 Node.js 24 和 npm：

```sh
npm ci
npm run dev
```

打开 <http://127.0.0.1:4175>。页面支持简体中文和 English、系统主题跟随、右上角手动选择浅/深主题、响应式导航及键盘操作。手动主题偏好会保存在本机；选回“跟随系统”后恢复实时跟随。

首屏保留工作台总览，下方按 Capture、Rules、Breakpoints、Composer、Agent、MCP 展开图文模块，不再把独立功能藏在Tab中。Agent与MCP分别介绍内置对话和外部AI接入。桌面图文左右排列，手机文字在上、图片在下；点击图片可查看原图。

Header滚动时保持在顶部，按左品牌、中间导航、右侧操作独立布局。导航始终居中可见，窄屏独立一行，不收进右侧菜单；右侧顺序为下载、主题、语言，并为Star保留固定安全距离。下载保留原来的主色按钮样式，手机菜单只承载右侧下载操作。下载以新标签页打开GitHub最新发布页，原页面和滚动位置保留；平台选包、签名及权限提醒在FAQ，入门步骤通过Quick Start链接提供。

最右上角提供斜角“Star on GitHub”入口，窄屏缩为星形角标，深浅主题均可用。它只在新标签页打开产品仓库，由访客自行Star，不请求GitHub写权限或显示虚构计数。

```sh
npm run lint                # Biome 检查 TypeScript、React、CSS 与格式
npm run format              # 使用同一套规则整理源码
npm run typecheck
npm test                    # 构建后通过真实浏览器检查页面
npm run check               # lint + 构建与浏览器检查
npm run build               # 生成 dist/
npm run preview             # 本地查看 dist/
npm run preview:cloudflare  # 用本地 Wrangler 核对静态资源和响应头
npm run deploy:check        # 仅本地 dry-run，不上线
```

浏览器检查在本机使用 Microsoft Edge；CI 使用 Playwright Chromium。失败截图与 trace 放在 `artifacts/test-results/`，不提交到源码。端口 `4175` 同时用于 dev/preview，二者不同时启动；测试使用 `4176`，Wrangler 使用 `8787`。

## 目录

```text
src/
  app/              # 入口、全站语言与 metadata
  features/home/    # 首页与独立区块组件
  components/       # 共享导航、页脚、链接、图标
  content/          # 有类型的中英文文案与外部链接
  theme/            # 系统跟随、偏好保存与主题应用
  styles/           # 根级 token、字体、reset 与无障碍规则
public/             # 产品素材、robots.txt、Cloudflare 响应头
tests/integration/  # 真实浏览器页面流程
docs/               # 结构约定与部署指南
```

每个组件使用同名 CSS Module。公共样式不进入功能组件，页面组件不共享样式文件；可复用值集中在 [tokens.css](src/styles/tokens.css)。组件、内容与状态职责见[架构约定](docs/architecture.md)。

## 部署

优先按 [Cloudflare 部署指南](docs/deployment.md)使用免费 Static Assets 托管。部署配置以 [wrangler.jsonc](wrangler.jsonc) 为准，CI 只检查、不自动上线。

构建输出为 `dist/`，没有与 Cloudflare 绑定的 React 逻辑；也可交给其他静态托管服务。实际上线、账号授权、域名与任何付费操作需要单独确认。

## 产品内容边界

- App图片按light/dark成对保存在 `public/media/features/`，主题切换时使用对应图片。来源分别为桌面项目 `design-vite/shots/<theme>/` 下的 `capture/framed.png`、`rules/framed.png`、`capture/breakpoint-response-body-loaded.png`、`composer/framed.png`、`agent-panel/capture-open.png` 和 `agent-models/settings-mcp-running.png`。
- 图片旁明确标注示例数据/设计预览，不冒充发布版本截图；图中的鉴权示例是设计稿已截断的不可用占位文字，不包含真实凭据。官网页面本身是正式源码，不是设计工具，未修改桌面App或其截图基准。
- Logo 来自桌面项目的 `apps/desktop/assets/interceptor-icon.png`。没有复制产品代码、凭据、真实流量或用户数据。
- 官网不维护固定版本号或发布阶段。页头下载统一使用 [GitHub 最新发布入口](https://github.com/zhxmt-xm/Interceptor/releases/latest)，地址在 [links.ts](src/content/links.ts) 中维护；常规发版不需要再改官网或重新部署。
- `/releases/latest` 是网页入口：有稳定版时跳到最新稳定版，尚无稳定版时跳到Releases列表，可以查看预发布。这与REST API在没有稳定版时返回404的行为不同；官网不依赖私有API或客户端凭据解析版本。
- Interceptor 仍为私有仓库，下载、GitHub和反馈入口需要登录有仓库访问权限的账号；“已发布”不代表匿名可下载，也不代表稳定版或各平台实机验收已完成。
- macOS 包使用 ad-hoc 签名且未公证，Windows 安装器未签名；EXE 内嵌同一 MSI，ZIP需完整解压。平台与格式以实际 Release 附件为准，`Source code`归档不是安装包。
- 完整 guidebook、真实操作视频及发布版本截图尚未交付，不伪造入口或媒体。
- 页面没有分析追踪、表单提交或后端；字体由 Google Fonts 提供。完整公开上线仍需核对可匿名访问的入口和真实媒体。

产品源码：[zhxmt-xm/Interceptor](https://github.com/zhxmt-xm/Interceptor)。

## Guidebook 教程内容

[教程目录](guidebook/README.md)包含完整中文初稿：入门、工作区、Capture、Composer、Rules、Breakpoints、文件交换、Settings、Diagnostics、Agent、MCP、权限、Tool 速查和排查。内容只在本仓库维护，按用户操作组织，不要求阅读 workflow。

- [内容与阅读页面约定](docs/guidebook.md)：章节、素材、在线路由和先官网后 App 的边界。
- [全量功能覆盖关系](docs/guidebook-coverage.md)：每组 workflow 对应正文及功能点锚点，不把规格覆盖当作教程已经实机验收。

当前只有可直接阅读的 Markdown 初稿；官网阅读页面、正式产品截图和视频尚未交付。先完成 Homepage，再让 App 用无边框 iframe 打开对应在线路由并提供浏览器打开按钮；不承诺离线，不分发教程 npm 包，也不给 App 构建增加 PAT 或私有 registry 依赖。首页现有构建、部署与根项目的 `private: true` 不变。
