# 官网结构与页面契约

官网是独立的 React + TypeScript + Vite 单页网站，不是桌面 App 的 Renderer，也不需要 Preload、Core、数据库或 Worker 业务代码。

## 源码职责

| 目录 | 职责 |
| --- | --- |
| `src/app/` | 页面入口、全站语言和标题/摘要等 metadata |
| `src/features/home/` | 首页与各内容区块；预览选择、FAQ等局部状态由所属组件持有 |
| `src/features/guide/` | Markdown阅读、章节导航、本章锚点和正文表格 |
| `src/components/` | 跨区块共享的导航、页脚、按钮链接和图标 |
| `src/content/` | 中英文文案、类型与已核对的外部链接 |
| `src/theme/` | 跟随系统、主题偏好保存与根级主题应用 |
| `src/styles/` | reset、根级 design token、字体与减少动效规则 |
| `public/` | 产品图片、图标与静态托管资源 |
| `tests/integration/` | 通过真实浏览器点击、键盘和滚动验证官网 |
| `guidebook/` | 已接入本地阅读页面的唯一教程正文、目录和功能点锚点 |

不保留独立官网设计 SPA、fixture、全局状态 setter、截图专用组件或兼容旧入口。官网的 `dist/` 可以交给任意静态托管平台。页面局部状态使用React hooks，FAQ使用原生`details`的单项展开能力；站内路由统一使用React Router的`BrowserRouter / Routes / Link`，不自行维护另一套History API。

使用指南是普通Markdown内容目录，不是待发布npm包，也不是App的runtime dependency。当前官网构建已包含`/guide`目录和全部已登记章节；阅读模块按需加载，正文仅维护一份。先完成官网，再接入App；路由与后续嵌入边界见[使用指南说明](guidebook.md)。本地可读不代表已经公开部署。

Markdown解析、HTML清理与本章目录在Vite端编译；阅读器入口一次取得中英正文数据和媒体地址清单，章节与语言切换不再下载正文或重建整套阅读外壳。媒体文件仍独立发布：图片懒加载、视频进入附近视区后加载元信息，不能把整套素材当作阅读器代码预载入。

## CSS 约定

- 一个组件一个同名 CSS Module；组件仅导入自己的样式文件。
- 颜色、间距、圆角、通用尺寸从根级 token 取值；全局文件不写页面组件的 class。
- 组件 class 使用用途命名，不依赖 DOM 嵌套层级或第三方私有 class。
- 同行元素由 flex/inline-flex 容器垂直居中；网格可伸缩列使用 `minmax(0, 1fr)`。
- 普通文档保持滚动；图片圆角可裁切，但不能用裁切掩盖内容溢出。
- 保留 320px 起的响应式布局、可见焦点与 `prefers-reduced-motion`。
- Biome 统一检查 TypeScript、React、CSS Modules 和格式；不再叠加另一套 formatter 或 CSS 处理器。
- 根级token覆盖浅/深两套颜色，共享尺寸不随主题变化。浅色沿用桌面设计的靛紫强调色与浅色表面；官网小字及标题渐变使用更深的配色以保持可读性，不改桌面设计token。
- 主题在React挂载前读取并应用；未挂载时使用浏览器Canvas系统色，不写固定深色背景。手动选择会同步根主题、浏览器theme-color和截图；localStorage不可用时记录警告，不阻止本次切换。

## 页面契约

- `/` 是首页，`/guide`和`/guide/<chapter>`是目录与章节。站内切换保留同一document，浏览器前进后退由React Router处理；首次打开或刷新使用构建时输出的已知HTML入口，未知路径保持真正404。Cloudflare静态托管显式使用`drop-trailing-slash`，已知入口不增加末尾斜线；非规范的目录地址由托管层重定向并保留查询参数，不在阅读器增加补偿逻辑。
- Header固定为左品牌、中间导航、右侧操作三个独立区域，所有宽度保持单行；中间导航按视口居中，始终可见，不换到第二行或收入菜单。空间不足时仅将右侧下载、主题、语言收进操作菜单；最窄尺寸品牌只显示Logo，保留可访问名称。Header滚动时保持在顶部，页内锚点按单行高度预留空间。
- 视口最右上角提供45°的“Star on GitHub”入口，随Header固定；窄屏只展示星形角标，但保留完整可访问名称。点击在隔离opener的新标签页打开产品仓库，由访客自行Star；不调用GitHub API、不显示伪造的Star计数，也不绕过私有仓库权限。角标不能覆盖导航、下载、主题或手机菜单的点击区域。
- 首页默认简体中文；语言按钮同步站点文案、`html.lang`、标题和分享摘要。教程UI通过`lang=en`保留英文选择，点本章锚点仅改变hash而不删除查询参数；中文正文继续用`lang="zh-CN"`标识，不冒充英文教程。
- 默认跟随浏览器的`prefers-color-scheme`。右上角提供System / Light / Dark选择，手动偏好在本机保存；选择System后恢复实时跟随，浏览器主题改变时同步更新。保存不可用时明确记录警告，本次主题选择仍可使用。
- 首屏保留完整工作台总览，不再通过Tab隐藏独立功能；Capture、Rules、Breakpoints、Composer、Agent、MCP按纵向图文模块展示。Agent说明内置对话与工具辅助，MCP独立说明外部Host接入、loopback监听、每客户端凭据及Tool授权，不混作一种入口。桌面图文左右交替、手机文字在上图片在下；WebSocket/gRPC纳入Capture，导入导出等用紧凑补充区呈现。
- 每个功能的截图与说明属于同一模块，截图跟随当前浅/深主题，原图使用真实链接。首页总览与六功能模块使用发布App原生窗口实拍，图片保持原始字节并明确标注本地演示数据；Capture原图供总览和Capture模块共用，来源见[素材清单](homepage-media.json)。
- 功能介绍后直接进入学习资源，不再保留独立下载区、两张同地址的平台卡片、首屏重复下载按钮或三步流程示意。入门步骤统一通过学习资源中的真实Quick Start链接提供。
- 桌面右侧顺序为下载、主题、语言；距窗口右缘固定104px，手机角标布局固定36px，为Star预留安全区。桌面下载使用36px的Ant Design主按钮，Star斜条不变；小屏菜单先展示外观/语言，底部独立下载区使用40px的large按钮并撑满内容宽度。宽度不超过840px时仅收纳右侧操作，避免英文按钮与导航相撞；不包含产品能力或Guidebook。Escape先关闭当前偏好选项，再关闭操作菜单并恢复焦点。
- 外观与语言使用等宽、图标和名称左对齐的完整操作行，右侧显示当前值和展开指示，选项标记当前勾选；只展开一组，不套内层边框卡片。语言入口只展开选择菜单，简体中文/English明确点选后切换。菜单限制在视口内，高度不足时可滚动；Star角标不变，原生控件仅接入官网字体和配色。
- 页面不使用固定最小宽度把Star或折叠按钮挤出实际视口。小于320px时导航采用紧凑间距，极窄时仅中间导航区域允许横向滚动，两个链接仍可通过滚动或键盘访问；不换到第二行、不与右侧控件重叠，也不隐藏滚动条。
- FAQ 支持鼠标和键盘，同一时间至多展开一项。
- 页面不暴露 `window.__setState` 等设计/自动化写入口。测试只通过公开 UI 操作。
- 首页和功能截图均不是设计候选；实际App图片保持录制时的中文界面，网页文案仍提供中英两种语言。Agent仅使用本地确定性演示模型，MCP仅展示真实本机服务与Client配置，不冒充商业模型、外部Host或Windows实机验收。
- 官网不写固定版本号，不维护“当前Alpha/稳定版”的发布状态副本。平台、架构、包类型、安装安全提醒与访问权限统一在FAQ说明；具体版本、发布时间及Pre-release标记以GitHub发布页为准。
- 每种尺寸只显示一个下载入口，桌面和平板放在右侧操作区最左，手机放在独立的右侧菜单；不与中间导航混合。下载以新标签页打开 `https://github.com/zhxmt-xm/Interceptor/releases/latest`，原官网地址和滚动位置保持不变，使用`noopener noreferrer`隔离opener。有稳定版时进入最新稳定版详情，否则GitHub网页跳转到Releases列表；官网不固定版本号，也不依赖私有API解析版本，常规发版无需更新官网。
- Release已发布与仓库公开是独立状态；当前下载仍需登录有仓库访问权限的GitHub账号。发布不证明各平台实机安装已验收。首页实拍与教程覆盖独立：教程正文保持初稿说明，未录的功能分支继续明确标注。
- 不增加埋点、表单后端、账号、第三方 API 调用或模型请求。

### 锚点滚动与下载布局

- 小屏先展示外观/语言，下载放底部独立操作区；分隔线到按钮留16px内边距，使用Ant Design默认large按钮（40px）并撑满。桌面改为同一Button组件的36px入口，不再保留46px CTA。
- 打开小屏操作菜单时焦点落到第一个偏好入口，下载按DOM顺序位于末尾；不自动滚到页尾按钮而遮住设置项。
- 首页、回顶及教程锚点的程序滚动统一使用`behavior: 'auto'`，由已有根级CSS `scroll-behavior: smooth`决定动画；系统`prefers-reduced-motion: reduce`时直接定位。重复点击首页同一锚点也重新定位，目标继续避让固定Header。
- 滚轮、触控板和触屏保持浏览器原生输入，不拦截wheel、不模拟额外惯性，也不引入平滑滚动库。教程只同步锚点滚动策略，不修改正文或阅读器结构。
- [前置Red](../artifacts/footer-scroll-red/)分别复现桌面仍为46px、首页和指南锚点没有任何中间滚动帧；[生产Green](../artifacts/footer-scroll-production-green/)覆盖桌面36px/菜单40px、下载置底与16px留白、首焦点、单行导航和下载新标签页。没有重跑教程正文或桌面App流程。
- [实际滚动轨迹](../artifacts/smooth-navigation-final/)保存首页首次/重复定位、指南定位及减少动态效果的逐帧scrollY；[汇总](../artifacts/download-footer-final/scroll-trajectories.json)记录采样直到滚动稳定。正常模式具有连续中间帧，reduce模式直接定位；指南最终目标与固定Header预留位置的差值不超过1px，不只检查CSS属性。
- [浅色底部下载](../artifacts/download-footer-final/light-closed.png)、[深色语言展开](../artifacts/download-footer-final/dark-language.png)与[桌面效果](../artifacts/download-footer-final/light-desktop-language.png)为当前产品截图。[方案像素对比](../artifacts/download-footer-final/proposal-parity.json)确认浅深菜单及桌面下载与已展示方案一致；原方案和旧尺寸证据未覆盖。Scoped Biome、typecheck/build及最新产物CSP/原生按钮检查通过，未公开部署。

## 验证

### 真实首页素材

- 已展示七处替换清单和前后效果后，按用户继续实施的要求接入，不增加布局或交互变化。总览与Capture共用实际Capture原图，六功能分别保留真实light/dark图；原图链接、新标签页、懒加载和主题同步沿用既有实现。
- 图片与[来源清单](homepage-media.json)的SHA-256及3200×1800尺寸一致；中英文说明改为实际App和本地演示，不保留“设计预览”或声称已验收商业模型/外部Host。版本号只记在素材来源，不把它作为官网“当前版本”的同步副本。
- [官网素材workflow](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/application/guidebook-homepage-media.workflow.ts)通过真实UI在已核对的`v0.1.1-alpha.1 / macOS x64`发布App中创建本地流量、规则、断点、Composer请求、无Key演示模型和MCP Client，每个状态分别使用正式主题菜单切到light/dark，取得[12张原生窗口图及来源清单](../../Interceptor/apps/desktop/test-results/homepage-media-20261017/native-verified/application-guidebook-home-a6b30-nd-dark-feature-screenshots-macos-guidebook/homepage-steps.json)。不读取内部Store、不调色或拼接App画面、不重录或改写item9教程素材。
- 初次workflow在规则命中后读取了同一路径的首次源站观测，导致断言读到改写前的请求；改为独立匹配路径后，源站实际Header、命中计数、断点转发字节、Composer响应和Agent已完成状态均通过。此修正属于素材流程，不是产品故障Red，失败输出保留在同一根目录的`native/`。
- [正常退出metadata](../../Interceptor/apps/desktop/test-results/homepage-media-20261017/native-verified/application-guidebook-home-a6b30-nd-dark-feature-screenshots-macos-guidebook/metadata.json)确认`gracefulDestroyVerified: true`、非强制退出；原主题恢复为light、语言zh-CN未改变，MCP Client已撤销且Server关闭。driver宿主检查通过，交还App独占窗口前再次实际绑定并释放8888；后续端口使用交回item9会话，不附着其App。
- [预览工具](../../Interceptor/design-vite/tools/homepage-media-preview.mjs)复用现有官网SPA，只在两个独立本地预览服务里替换媒体响应和准确的中英说明，不复制另一套官网或增加产品后门。工具已实际生成总览和六模块、中英、浅深、1600/390px的112张前后图；[评审报告](../../../.copilot/session-state/ee896419-966b-4416-b7a5-65a933b9a36d/files/homepage-media-review-20261017/review.html)直接展开28组中文对比并用红框标明图片和说明位置。
- [预览检查](../../../.copilot/session-state/ee896419-966b-4416-b7a5-65a933b9a36d/files/homepage-media-review-20261017/review-check.json)确认全部图片几何不变、无水平溢出，报告内56张图片和标注均有效；英文手机总览因真实截图说明变短自然减少一行16px，其余场景高度不变。字体实际加载后才截图，没有以fallback或修改尺寸补偿。TypeScript检查、原生workflow及预览脚本执行通过，不为设计辅助工具新增unit或Browser测试。
- [前置Browser Red](../artifacts/homepage-real-media-20261017/red-behavior/report.json)证明旧页面的图片摘要和中英文说明均不满足真实素材要求；不是用输入/导入错误充当产品Red。[生产Browser](../artifacts/homepage-real-media-20261017/green/report.json)通过全部46项受影响流程，包含12张原图摘要、各主题原图入口、双语说明、Header、导航、滚动、iframe和缓存，无跳过或重试。
- [对方案parity](../artifacts/homepage-real-media-20261017/parity/report.json)覆盖七处图片、中英、浅深和桌面/手机共56个场景，图片/说明几何、内容和像素均无差异；按零像素阈值包含抗锯齿像素比较，不修改基准或字体。本轮正式产品改动仅为12张PNG及中英文说明，不改组件、CSS、教程正文或阅读器。
- [最终整站Browser](../artifacts/homepage-real-media-20261017/full/report.json)在同一生产静态快照中通过65项，无失败、跳过或重试，覆盖首页、教程入口、章节导航、媒体、共享Header、主题、滚动和响应头。该结果只代表这份本地网站产物，不替代item9尚未录制的产品分支、App内嵌或Cloudflare实际URL验收；前面保存的历史失败不改写。
- lint、typecheck、production build和Wrangler dry-run通过。[产物核对](../artifacts/homepage-real-media-20261017/artifact-check.json)确认全部1639个文件满足当前静态托管单文件/数量限制、12张首页图摘要准确，`_headers`仍仅包含缓存。[默认产物比较](../artifacts/homepage-real-media-20261017/default-build-check.json)确认默认`dist/`与整站Green快照逐字节一致。大JS chunk、正文编译耗时及离线报告超过Biome大小上限的警告保留，不声称已消除。
- [同一item改动说明](../commit-changes/202610141539_ui_homepage_initial-progress.html#homepage-real-media-20261017)保留全部展开的实际前后截图与红框；[离线显示检查](../artifacts/homepage-real-media-20261017/report-check.json)核对1280/390px、全部76张内嵌图片、标注和无横向溢出。只更新首页区块，保留其他会话的Guidebook区块，不混入提交或改写历史。
- 本地官网制作范围已完成；Cloudflare部署、访问保护、GitHub自动部署和公网媒体/入口检查单独列入Handover的item15。源码仓库仍private，尚未执行远程部署；保存代码不代表线上验收。需要受限访问、实际账号确认和域名/费用授权的条件见[部署说明](deployment.md#待执行受限部署与线上验收)。
- [清理与本地入口核对](../artifacts/homepage-real-media-20261017/cleanup.json)确认独立8793服务已停止且端口可重新绑定，临时构建与Wrangler状态已移除，默认`dist/`、原图、trace和截图证据保留；既有4175开发预览实际返回全部12张已核对原图。没有停止其他会话的服务或重新占用已交还的App窗口。

### Cloudflare静态托管路径

- Browser默认使用Wrangler本地Static Assets，而不是Vite preview，直接加载生产构建并应用HTML策略和实际响应头；仍可通过`HOMEPAGE_TEST_URL`核对已启动的独立实例。
- 已有桌面/手机Header语言切换检查复现默认策略追加末尾斜线的Red；显式配置`drop-trailing-slash`后，同一断言与完整官网Browser组通过。规范入口直接返回200，目录别名由托管层重定向并保留查询参数，未知章节和资源继续返回404。
- [路径修复记录](deployment.md#当前本地部署复核)保留对应阶段的Red/Green、资源限制、HTTP响应及Range缺口；[当前响应头清理](deployment.md#官网自定义响应头清理)记录新目标Red、最终25项Green、前后视觉核对及原有教程全量失败。没有修改UI布局、教程正文或阅读器，不使用本地结果代替Cloudflare公开URL或App接入验收。

### 组件化偏好菜单

- 下载统一使用Ant Design Button：小屏为底部独立操作区的40px large按钮，桌面为36px入口。保留官网强调色，Star及导航位置不变；布局细节与最新证据见上面的锚点滚动与下载布局。
- 外观与语言使用统一的紧凑菜单，当前值和已选勾号明确展示；同一时间只展开一组，不再嵌套带边框卡片或重复标题。
- 语言仅支持简体中文和English。点击语言入口只打开选择菜单，选择具体语言才调用`onLocaleChange(locale)`；选择当前语言不修改页面地址。教程路径、其他查询参数和锚点沿用当前流程，不修改教程内容。
- 桌面使用Popover内的竖向Menu，小屏使用Menu的inline子菜单；方向键只移动焦点，Enter/Space确认。Escape先收起当前选项，再关闭外层操作菜单，焦点返回对应触发器。
- 桌面偏好按钮允许直接双向切换：主题打开时点击语言，只关闭主题并保持语言菜单可操作；语言到主题相同。迟到的外部点击/失焦关闭只能关闭发出通知的那一个菜单，不能清空随后打开的另一组。重复点击当前按钮收起，Escape返回当前按钮；切换入口不改变已选主题或语言。
- 外层和桌面选项均由Ant Design Popover相对按钮定位，正常空间下在按钮下方8px、右侧对齐；空间不足时由组件避让并限制可滚动高度。不再按Header高度手写固定坐标，也不以外层`onBlur`决定关闭。点击弹层内部空白、分隔线或操作控件保持打开，点击外部才关闭；选定语言和进入下载按各自操作收起弹层。
- Radix依赖与实现已移除。正式组件使用Ant Design Menu/Popover，保留其默认40px行高、4px项间距、内边距、圆角、阴影和交互反馈；只定制官网字体/配色、行内flex居中及容器边界。配置集中在`src/theme/components.ts`，不再在CSS Module中覆盖每个菜单项的皮肤。继续使用有类型的中英文案，不增加语言或i18n框架。
- 公共`PreferenceMenu`由主题和语言共用。控制状态按菜单归属关闭，旧菜单的事件不能清空新菜单；仅显式选择或Escape返回原触发器，切换菜单不会把焦点抢回旧按钮。叶子选项确认和父级展开的键盘事件分开，避免Enter选中后又重新展开。不对第三方私有DOM写样式，不修改`node_modules`。
- 按用户确认，官网不再通过自定义CSP限制Ant Design动态样式，也不保留样式hash提取或构建插件；Ant Design运行时照常生成样式。官网移除CSP、iframe禁止头、Permissions/Referrer及nosniff，只保留静态资源缓存，具体约定见[部署说明](deployment.md#http-与索引)。这不改变Electron的CSP、sandbox、Preload、IPC或云端访问权限。

#### Ant Design实现与当前验证

- [桌面直接互切Red](../artifacts/preference-switch-red/)复现主题打开后点击语言导致两者关闭。实际焦点记录显示旧菜单把焦点拉回旧按钮，随后关闭新菜单；只保护关闭回调归属仍不足以解决。修复同时约束菜单状态和显式焦点恢复，不将此归因于已证实的第三方库缺陷。
- [当前生产Browser](../artifacts/antd-menu-production-green/)通过主题↔语言连续双向切换、当前按钮重复点击、Enter选择、方向键、分层Escape、内部/外部点击、明确中英选择、下载新标签页和原页面滚动保持。覆盖首页及共用Header、260–1600px和260×180窗口，不修改教程内容或以此代替桌面App E2E。
- 菜单项直接使用Ant Design的`icon / label / extra`，已删除自写`PreferenceOption`；[间距检查](../tests/integration/header-preferences.test.ts)测量桌面/小屏的默认40px行高及4px项间距，不再以被原样式覆盖的CSS class假定间距生效。
- 该轮Scoped Biome、typecheck、production build和使用该产物的Wrangler dry-run通过，未上传/部署。当时的静态CSP下浅深主题及全部菜单状态无被阻止样式或浏览器错误；[该轮几何/CSP记录](../artifacts/antd-menu-final/results.json)、[浅色菜单](../artifacts/antd-menu-final/light-language.png)、[深色菜单](../artifacts/antd-menu-final/dark-theme.png)、[桌面选择](../artifacts/antd-menu-final/light-desktop-language.png)和[280px小屏](../artifacts/antd-menu-final/dark-280-language.png)保留，不将旧策略描述为当前实现。
- 用户后续选择Ant Design默认皮肤，内边距、缩进、圆角和阴影以原生组件为准，不再把前一版自写皮肤的像素差异当成还原目标。字体/配色仍接入本站token；已确认深色勾选图标可辨识，[260×180英文状态](../artifacts/antd-menu-final/dark-260-short-english.png)中的选择指示不被裁掉。旧方案截图未被覆盖。
- 此前曾将菜单下载从46px降至32px、桌面保持46px；该尺寸方案已由当前的下载置底及36px/40px替代。[当时尺寸Red](../artifacts/compact-download-red/)与[当时Green](../artifacts/compact-download-green/)、[改前截图](../artifacts/compact-download/light-before.png)及[32px效果](../artifacts/antd-menu-final/light-closed.png)仅作为历史记录，不代表当前页面。该阶段的typecheck/build、严格CSP点击及静态部署dry-run结果仍保留。

#### 先前无样式组件方案的历史证据

以下结果保留，不代表当前Ant Design版本，也没有覆盖后来反馈的桌面按钮直接互切故障。

- [显式选择与撑满按钮Red](../artifacts/preference-menu-red/)、[内部点击误关与22px间距Red](../artifacts/preference-popover-red/)保留。最终[生产环境定向Browser](../artifacts/preference-menu-production-green/)覆盖中英、260–1600px、260×180低高窗口、嵌套Escape、内部/外部点击、语言路由、主题持久化/跨页同步及下载新标签页；原页面URL和scrollY保持不变。
- 该轮生产构建使用当时`public/_headers`的完整CSP运行，未出现被阻止样式或浏览器错误；scoped Biome、typecheck、build通过，新增依赖安装审计无公告。[浅色语言菜单](../artifacts/preference-menu-final/light-language.png)、[深色外观菜单](../artifacts/preference-menu-final/dark-theme.png)、[深色280px](../artifacts/preference-menu-final/dark-280-language.png)和[桌面语言菜单](../artifacts/preference-menu-final/light-desktop-language.png)为真实页面截图；[布局记录](../artifacts/preference-menu-final/results.json)包含按钮到弹层的8px间距。这些验证不代表当前响应头、公开部署或桌面App验收。
- [逐元素方案对比](../artifacts/preference-menu-final/layout-comparison.json)以弹层左上角为原点，下载、外观/语言行、当前值、图标、选项及勾号的`x/y/width/height`差值均为0。[像素对比](../artifacts/preference-menu-final/pixel-comparison.json)的浅深语言菜单均无差异；外观菜单分别有52/64个差异像素，仅在底部圆角外的页面背景，因为按用户后续要求上移弹层，未修改方案截图掩盖差异。最终间距调整后另跑[窄屏与内部点击检查](../artifacts/preference-menu-final-layout/)，保留真实结果。

迁移前保存现有浏览器交互与布局基线，先让正式入口约束因旧设计接口而失败，再迁移源码。迁移后验证相同交互、响应式布局、图片与字体，以及真实静态构建。

这是独立官网的浏览器验收，不启动或声称覆盖桌面 App 的 Electron workflow / fake Preload parity。

### 小窗口Header修正（历史证据）

以下为前一轮定位与原宽下载的验证，菜单宽度和偏好交互已被上面的组件化方案替代，不用历史截图代表当前页面。

- 前置问题：菜单把下载从102px拉伸为206px，外观无名称、语言图标被断点隐藏；页面的320px最小宽度使280px窗口的导航偏离实际中心20px，并裁掉右侧角标。[菜单Red](../artifacts/header-menu-red/)与[小于320px的Red](../artifacts/header-below-320-red/)保留真实失败。
- 最终检查：[定向Browser](../artifacts/header-menu-final-green/)覆盖首页和共用Header、260–1600px、中英文、布局边界、主题键盘及下载新标签页；[极窄导航](../artifacts/header-menu-keyboard-final/)通过真实横向滚轮及Tab验证两个入口可访问。Scoped Biome、typecheck及独立目录的production build通过，没有重跑教程正文或桌面App流程。
- [浅色280px菜单](../artifacts/header-menu-visual/light-280-open.png)、[深色280px菜单](../artifacts/header-menu-visual/dark-280-open.png)及[低高窗口记录](../artifacts/header-menu-visual/final-results.json)验证260×180窗口内仍可滚动并切换主题、语言。相同焦点状态下，[闭合页面像素比较](../artifacts/header-menu-visual/closed-parity.json)确认320/390/691/1600px的浅深页面与改前一致。
- Star组件及下载按钮CSS未修改。本次仅调整公共Header和响应式基础样式，教程正文、阅读器及素材由item 9独立维护；公开部署仍须完成Cloudflare授权。
