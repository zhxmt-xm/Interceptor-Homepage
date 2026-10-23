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

首屏保留工作台总览，下方按 Capture、Rules、Breakpoints、Composer、Agent、MCP 展开图文模块，不再把独立功能藏在Tab中。Agent与MCP分别介绍内置对话和外部AI接入。桌面图文左右排列，手机文字在上、图片在下；首页与教程图片统一在当前页面弹窗预览，支持缩放、拖动和键盘关闭，不另开网页。

Header滚动时保持在顶部，所有尺寸均为一行：左品牌、中间导航、右侧操作。中间导航固定为指向根路径`/`的首页与使用指南，不用首页区块hash代替首页路径；导航始终居中可见，不换到第二行或收入菜单。小于等于840px时仅将下载、主题、语言收进右侧菜单，最窄尺寸品牌仅显示Logo。Star保持原来的样式，下载使用Ant Design Button并继续在新标签页打开GitHub最新发布页；平台选包、签名及权限提醒在FAQ，入门步骤通过Quick Start链接提供。

页面不设固定最小宽度，小于320px时Star和折叠按钮仍跟随实际视口；中间导航紧凑排列，空间进一步不足时可在导航区横向滚动或用键盘访问两个链接。偏好菜单统一使用Ant Design Menu与Popover，沿用默认行高、间距、圆角、阴影和键盘导航，仅接入官网字体/配色及窄屏边界。弹层正常空间下距按钮下缘8px；上方放外观和语言，下方独立下载区与分隔线留16px内边距，下载使用40px的large按钮并撑满。桌面下载为36px，按内容宽度显示。语言只有简体中文和English，打开菜单不立即切换；主题和语言可直接双向切换，不会相互误关。内部空白点击不关闭，外部点击或Escape收起；窗口高度不足时菜单可以滚动。

首页主标题保持两行独立居中，不用句号参与每行宽度；中文为“看清每个请求”“掌控每次响应”。站内区块锚点和程序回顶统一使用浏览器原生平滑滚动，重复点击同一首页锚点仍可定位，并为固定Header预留空间。开启系统“减少动态效果”时改为直接定位；滚轮、触控板和触屏保留浏览器原生行为，不额外拦截输入或模拟惯性。

最右上角提供斜角“Star on GitHub”入口，窄屏缩为星形角标，深浅主题均可用。它只在新标签页打开产品仓库，由访客自行Star，不请求GitHub写权限或显示虚构计数。

```sh
npm run lint                # Biome 检查 TypeScript、React、CSS 与格式
npm run format              # 使用同一套规则整理源码
npm run typecheck
npm test                    # 构建后通过本地Cloudflare静态托管与真实浏览器检查页面
npm run check:quick         # lint + typecheck + 构建
npm run check               # format + 快速检查 + 浏览器检查
npm run build               # 生成 dist/
npm run preview             # 本地查看 dist/
npm run preview:cloudflare  # 用本地 Wrangler 核对静态资源和响应头
npm run deploy:check        # 仅本地 dry-run，不上线
```

浏览器检查在本机使用 Microsoft Edge；CI 使用 Playwright Chromium。测试由Wrangler本地Static Assets服务承载生产构建，同时验证正式HTML路径规则、实际响应头和网站的iframe加载，不上传或发布。失败截图与 trace 放在 `artifacts/test-results/`，不提交到源码。端口 `4175` 同时用于 dev/preview，二者不同时启动；测试使用 `4176`，人工Wrangler预览使用 `8787`。

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

优先按 [Cloudflare 部署指南](docs/deployment.md)使用免费 Static Assets 托管。部署配置以 [wrangler.jsonc](wrangler.jsonc) 为准。GitHub CI 在临时 checkout 中先执行 formatter，再完成 lint、typecheck、构建与完整 Playwright；同一分支的新提交会取消旧检查。

Pull Request会在没有部署凭据的环境中运行同一套检查；`main` push会重新执行完整检查，避免把PR检查后的并发变化直接发布。当前private仓库使用GitHub Free，平台不提供private branch ruleset，暂时只能由维护者遵守“检查通过后再合并”；升级GitHub Pro或将仓库公开后，应启用必须PR、required `check`、禁止force push与删除的ruleset。

`main`检查全部通过后，CI上传本轮实际受测的`dist/`；deploy job通过`needs: check`下载同一份artifact并执行`wrangler deploy`，不重新build。启用前必须：

- 关闭Cloudflare Workers Builds的Git push自动构建，避免它绕过GitHub检查并行启动。
- 将最小权限token保存为GitHub Actions secret `CLOUDFLARE_API_TOKEN`。
- 将Cloudflare账号ID保存为GitHub Actions variable `CLOUDFLARE_ACCOUNT_ID`。

Pull Request只运行检查，不读取部署凭据。任何来源的`main` push都会先检查；任一步失败时deploy job不会启动。

构建输出为 `dist/`，没有与 Cloudflare 绑定的 React 逻辑；也可交给其他静态托管服务。实际上线、账号授权、域名与任何付费操作需要单独确认。

官网不再配置自定义CSP、iframe禁止头、Permissions/Referrer等安全响应头，也不生成Ant Design样式hash；`public/_headers`只保留带hash资源的长期缓存。此约定不改变桌面App安全策略或云端Access权限，网站允许被iframe加载不代表App内嵌入口已经完成。

## 产品内容边界

- 首页App图片按light/dark成对保存在 `public/media/features/`，来自发布App的实际原生窗口。主题切换通过产品菜单完成，不调色或拼接截图；工作台总览复用Capture原图。发布来源、尺寸与每张原图的SHA-256见[素材清单](docs/homepage-media.json)。
- 图片旁明确标注真实App截图与本地演示数据；截图保留App实际中文，英文网页不伪装成英文App。Agent使用无Key本地演示模型，MCP展示实际本机Server与Client配置，不声称商业模型或外部Host已验收，不包含凭据。未修改桌面App或其设计基准。
- Logo 来自桌面项目的 `apps/desktop/assets/interceptor-icon.png`。没有复制产品代码、凭据、真实流量或用户数据。
- 官网不维护固定版本号或发布阶段。页头下载统一使用 [GitHub 最新发布入口](https://github.com/zhxmt-xm/Interceptor/releases/latest)，地址在 [links.ts](src/content/links.ts) 中维护；常规发版不需要再改官网或重新部署。
- `/releases/latest` 是网页入口：有稳定版时跳到最新稳定版，尚无稳定版时跳到Releases列表，可以查看预发布。这与REST API在没有稳定版时返回404的行为不同；官网不依赖私有API或客户端凭据解析版本。
- Interceptor 产品仓库、Release、下载和反馈入口均可匿名访问；独立 Homepage 源码仓库继续保持私有。“已发布”不代表稳定版或各平台实机验收已完成。
- macOS 包使用 ad-hoc 签名且未公证，Windows 安装器未签名；EXE 内嵌同一 MSI，ZIP需完整解压。平台与格式以实际 Release 附件为准，`Source code`归档不是安装包。
- 首页真实功能截图已接入；完整guidebook逐步骤图文和App内嵌的剩余范围由教程任务独立维护，不因首页图片完成而认定整本教程已验收。
- 页面没有分析追踪、表单提交或后端；字体仍由 Google Fonts 提供。正式网站为 <https://www.interceptor.cn/>，本地通过不替代线上深链、缓存和静态资源验收。

产品源码：[zhxmt-xm/Interceptor](https://github.com/zhxmt-xm/Interceptor)。

## Guidebook 教程内容

[教程目录](guidebook/README.md)包含对应中英初稿：入门、工作区、Capture、Composer、Rules、Breakpoints、文件交换、Settings、Diagnostics、Agent、MCP、权限、Tool 速查和排查。内容只在本仓库维护，按用户操作组织，不要求阅读 workflow。

- 教程内点击“搜索教程 / Search guide”或按`Cmd/Ctrl+K`，可搜索当前语言的全部章节、正文和步骤；点击结果或按Enter直接定位，Escape关闭。搜索在本机完成，不上传关键词，也不识别截图中的文字。
- [内容与阅读页面约定](docs/guidebook.md)：章节、素材、在线路由和先官网后 App 的边界。
- [全量功能覆盖关系](docs/guidebook-coverage.md)：每组 workflow 对应正文及功能点锚点，不把规格覆盖当作教程已经实机验收。
- [截图来源](docs/guidebook.md#从原workflow取得步骤图)：在Interceptor的`npm start → Test → E2E`选择逐步截图，结果留在独立测试目录；本仓库不再维护专用制作或导入工具，普通测试不会覆盖官网。

本地启动后，从顶栏“使用指南 / User Guide”或首页“阅读教程”进入 <http://127.0.0.1:4175/guide>，也可直接打开章节，例如 <http://127.0.0.1:4175/guide/capture>。站内导航由React Router处理，不整页刷新；章节链接、锚点与直接刷新使用同一份正文，查询参数中的UI语言在本章定位时保留。

中英正文使用真实App逐步骤图片，首页步骤图入口直达图文索引；不再分发教程视频、字幕或播放器。原业务workflow的截图模式只产生测试证据，采用素材前独立审核，本仓库不再维护专用制作/导入链路，普通回归不会修改官网。未配图分支及逐章完整实机验收仍保留初稿标记。先完成Homepage，再接入App无边框iframe及对应浏览器打开入口；不承诺离线，不分发教程npm包，也不给App构建增加PAT或私有registry依赖。本地页面和静态产物验证不代表公开部署，根项目继续保持`private: true`。
