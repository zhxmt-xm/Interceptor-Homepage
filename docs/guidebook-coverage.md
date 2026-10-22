# Guidebook 功能与 workflow 覆盖关系

这是教程选题与来源索引，不是测试结果或完成状态表。相似测试归纳成一个用户场景，不能把记录布局、fixture 生命周期或失败注入直接变成用户操作要求。

基线为 App 的 [功能设计索引](../../Interceptor/architecture/README.md)、[workflow 规格索引](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/docs/README.md)、[Inventory](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/README.md)与 [workflow 源码](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/)。

当前Inventory包含144条契约，下面逐项列入用户场景，并链接到[中文教程](../guidebook/README.md)的对应功能点；[英文教程](../guidebook/README.en.md)使用相同功能目录和演示值。正文使用[真实素材目录](../guidebook/media/v0.1.1-alpha.1/)中的步骤图及公开出处清单，不再分发教程视频或字幕。下面的映射只核对内容覆盖，不把某项`passed`自动转换为教程通过，也不把规格与Inventory的状态冲突改写为Green。未展示分支、平台专项和公开访问仍未完成。

操作验收以步骤为单位：每个编号步骤须关联真实步骤图和稳定锚点，不能只按整章标“有截图”。变量名、输入值、规则/请求/文件名称必须与同一次实际操作中的界面一致；动态值单独说明。当前正文没有步骤图的部分仍为草稿，下面的workflow映射不代表已达到该要求。

## 来源与验收边界

- 写作目标版本为 `v0.1.1-alpha.1` / `e55f1ed1`；[发行边界](../../Interceptor/architecture/platform/release.md#7-当前发行验证边界)仍保留下载产物实机安装、原生授权及退出恢复缺口。
- [Windows 范围](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/README.md#windows-复验)按实际场景区分；不能用 macOS、CI 或源码存在代替 Windows 实机结果。
- 例如 Composer 编辑规格中的状态与 Inventory 不完全一致；本次不修改产品验收记录，正式成文验收时回到对应真实证据核对。
- Rules 的功能契约列出 10 种 action type，而 Inventory 的概述写“11种action”。教程按实际类型和操作写，不照搬概述数字。
- 已追踪 [HTTP 场景](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/capture/http-scenarios.workflow.ts)、[录制边界](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/capture/recording-pause-resume.workflow.ts)、[Collection 交互](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/composer/collection-tree-interactions.workflow.ts)、[正文格式化](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/composer/body-formatting.workflow.ts)、[Rules 目录与状态](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/rules/hierarchy-menus-status.workflow.ts)、[断点编辑](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/breakpoints/execute-edited.workflow.ts)、[Settings 导航](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/settings/navigation.workflow.ts)与 [Diagnostics 导出](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/diagnostics/tools-queries-export.workflow.ts)，以及各功能契约。它们提供写作依据，不代表本书已经按Release完整试读。
- 额外核对 [Capture快捷规则创建](../../Interceptor/apps/desktop/src/renderer/features/rules/data/useRulesData.ts)：快捷Breakpoint创建、启用并立即Apply，不是普通未启用草稿；[Agent模型选择](../../Interceptor/apps/desktop/src/renderer/features/agent/AgentModelMenu/AgentModelMenu.tsx)只改变当前Chat，不改变全局默认；[正式对话响应](../../Interceptor/apps/desktop/src/renderer/features/agent/AgentPanelTranscript/AgentTurnResponse.tsx)提供Stop后的Retry，不按架构候选推断通用Continue按钮。
- 带 `tools` 的契约同时映射所属 feature 的操作说明和 Agent/MCP 的权限章节，不另写一套互相矛盾的业务步骤。
- [Collection目录实录](../guidebook/zh-CN/composer.md#walkthrough-composer-collection)已在对应发布App核对三级目录、目录内请求切换、排序、原生文件预览取消及删除，见[真实流程与退出恢复](../../Interceptor/apps/desktop/test-results/guidebook-media-20261015/collection-resumed/)。不重录这一组；[公开Basic/Bearer认证](../guidebook/zh-CN/composer.md#walkthrough-composer-auth)、[完整代表字段保存](../guidebook/zh-CN/composer.md#walkthrough-composer-persistence-save)/[重启](../guidebook/zh-CN/composer.md#walkthrough-composer-persistence-restart)与[Collection文件Tool往返](../guidebook/zh-CN/composer.md#walkthrough-composer-file-tools)均有独立有效实录，不宣称穷举所有Body/Auth组合。
- [阅读页媒体核对](../artifacts/item9-20261015/collection-and-captions-green/)同时确认正文、原图尺寸、SPA导航，以及每个已发布视频在中英文页面中的字幕轨与实际cue加载。构建时正确分隔显式锚点与video HTML块，不把播放器外的track节点或存在的VTT文件当作字幕可用。
- [响应Header与正文证据](../guidebook/zh-CN/rules.md#walkthrough-rules-response-evidence)补充空白区域新建、响应append/remove、请求Original/Final、两版本Copy、Original全屏、Final原生保存、效果跳转、响应Original不可用，以及停用Apply后的真实恢复请求。[原生实录与退出恢复](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/verified/rules-guidebook-response-e-af18e-nd-observable-body-versions-macos-guidebook/)不涵盖最后规则删除或其他未录matcher/action组合。
- [TLS透传往返](../guidebook/zh-CN/settings.md#walkthrough-settings-tls-passthrough)补充未解密Tunnel、已有CA下解密、精确localhost条目添加、命中、定位、删除、新连接恢复和本轮设置清理。[原生实录与退出恢复](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/tls-verified/)不涵盖wildcard、首次CA或Windows。Capture、Settings与Transfer按同一素材互相引用，不混淆动态端口、Original/Final或两个示例的文件名。
- [Capture清空搜索](../guidebook/zh-CN/capture.md#walkthrough-capture-filters-13-clear-search)已补真实操作：录制前暂停并确认只有本轮四条自产记录，取消Method/Status后再清空搜索，仍保留四条记录及暂停状态。[实际录制与退出恢复](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/codec-and-search-resumed-1421/)同时覆盖共用编码器的真实静止末帧；不把这一组扩展为其他分组或Windows应用归属的验收。
- Capture的[其他分组](../guidebook/zh-CN/capture.md#walkthrough-capture-facets)、[Request/Markdown Source与滚动](../guidebook/zh-CN/capture.md#walkthrough-capture-inspection)、[大正文预览与完整保存](../guidebook/zh-CN/capture.md#walkthrough-capture-body-limits)已有独立实录，分别使用自身输入与步骤图片，不挪用其他例子的字段值；未知Application归属仍不扩成Windows进程识别。
- [HTTP/2过程](../guidebook/zh-CN/capture.md#walkthrough-capture-http2)区分接收中字节进度、结束后正文可读、错误GOAWAY的部分正文与独立恢复GET；[WebSocket](../guidebook/zh-CN/capture.md#walkthrough-capture-websocket-messages)和[gRPC消息](../guidebook/zh-CN/capture.md#walkthrough-capture-grpc-messages)分别录制长正文、Copy、全屏及205条分页，gRPC末条正文必须完整出现在视区内。
- [导出范围](../guidebook/zh-CN/transfer.md#walkthrough-transfer-scopes)用同组三条输入核对3/2/1个HAR条目和同文件Import；[运行中取消](../guidebook/zh-CN/transfer.md#walkthrough-transfer-cancel)记录实际归档工作及取消后清理，不把原生面板取消或关闭前截图当作任务取消/退出等待。
- Rules的[目录/校验/命中导航](../guidebook/zh-CN/rules.md#walkthrough-rules-tree)、[匹配模式](../guidebook/zh-CN/rules.md#walkthrough-rules-matching-modes)、[响应控制与编码](../guidebook/zh-CN/rules.md#walkthrough-rules-response-controls)、[第二写入者冲突](../guidebook/zh-CN/rules.md#walkthrough-rules-conflict)、[跨协议改道与缺失文件恢复](../guidebook/zh-CN/rules.md#walkthrough-rules-routing)已逐步接入。不把Release允许保存无效regex却恒不匹配的行为伪造成语法报错，也不绕过最后一条规则删除后的Apply限制。
- Breakpoints的[管理器](../guidebook/zh-CN/breakpoints.md#walkthrough-breakpoints-manager)、[请求变体](../guidebook/zh-CN/breakpoints.md#walkthrough-breakpoints-request-variants)和[Both/控制帧](../guidebook/zh-CN/breakpoints.md#walkthrough-breakpoints-websocket-controls)分别使用真实发布App。HTTP头阶段的空Text保持正文，已知WebSocket payload的空Text转发零字节；关闭码分别核对客户端与源站，不混淆两段连接。
- [工作区导航](../guidebook/zh-CN/workspace.md#walkthrough-workspace-navigation)包含Settings保留、Agent空态深链、开着面板切工作区、两个关闭入口、Theme菜单和连续窗口缩放。[窗口控件](../guidebook/zh-CN/workspace.md#walkthrough-workspace-window-controls)另行实录真实最大化/还原与最小化，测试侧恢复不冒充Dock操作；[混合队列退出](../guidebook/zh-CN/breakpoints.md#walkthrough-breakpoints-mixed-queues)分别核对等待内容取消与正常退出，不制造Core故障作为教程步骤。
- Settings的[真实上游](../guidebook/zh-CN/settings.md#walkthrough-settings-upstream)、[隐私与实际HAR](../guidebook/zh-CN/settings.md#walkthrough-settings-privacy-export)、[真实更新检查](../guidebook/zh-CN/settings.md#walkthrough-settings-update-check)已接入；Check实际为`failed`/HTTP404，没有下载、校验或安装。WPAD、Windows和隔离首次CA仍缺前提。
- [Diagnostics生命周期](../guidebook/zh-CN/diagnostics.md#walkthrough-diagnostics-lifecycle)用真实UI生成历史、实际PAC失败、过滤、自动时间线、分栏、历史加载与JSONL。`composer.send`命令的success不等于HTTP成功；不为没有的时间线展开按钮编造步骤。
- Agent的[会话操作](../guidebook/zh-CN/agent.md#walkthrough-agent-session-lifecycle)和[Tool生命周期](../guidebook/zh-CN/agent.md#walkthrough-agent-tool-lifecycle)，MCP的[实际审批/导出/撤销](../guidebook/zh-CN/mcp.md#walkthrough-mcp-tool-lifecycle)与[新endpoint查询](../guidebook/zh-CN/mcp.md#walkthrough-mcp-endpoint-reconnect)，以及[完整只读配置](../guidebook/zh-CN/tool-permissions.md#walkthrough-tool-permissions-readonly)/[重启](../guidebook/zh-CN/tool-permissions.md#walkthrough-tool-permissions-restart)均已接入。模型/SDK仍明确是本地演示，不代替商业服务或真实外部Host。
- Agent的旧重启片前段因背景Capture流量不公开；[新的完整重启](../guidebook/zh-CN/agent.md#walkthrough-agent-session-restart)从Settings取景，前后两代统一使用同一轮成功来源。旧片安全删除尾段另有明确标注的[连续节选](../guidebook/zh-CN/agent.md#walkthrough-agent-model-removal)，不混用时间戳或冒充新录制。早期锁屏拒绝保留为环境证据。
- 旧交付包含70段影片和1736张步骤图，其媒体与字幕验收事实仍保留在各自历史记录。当前源码已移除影片/字幕，原PNG全部保留，并通过正式截图导入增加7张原业务workflow截图；当前图文索引直接定位步骤小节，详见[纯图文验收](guidebook.md#原workflow截图与纯图文验收)。跨平台/隔离场景、外部服务与App入口继续由Handover item 16跟踪，不以图片数量推算完成百分比。
- 当前VS Code Copilot SDK Host与签名`0.1.1-alpha.1`的[真实原生Tool验收](../../../.copilot/session-state/110ad12a-fedc-47bb-9369-c786f9527723/files/item16-current-host/verified-current-host.json)已覆盖查询/正文、Deny/Allow/Auto、Composer、Clear和退出恢复。它不是官方SDK演示，但本轮图片保持App实际`zh-CN`，未接入本书；仍须按English App图片约定补同次操作图。其他Host、未调用Tool、商业模型服务及App嵌入不随此代表主线通过。

## 完整功能目录的补充来源

| 功能来源 | 用户教程归属 |
| --- | --- |
| [Capture](../../Interceptor/architecture/features/capture.md) | 录制、筛选、正文、协议与规则效果 |
| [Composer](../../Interceptor/architecture/features/composer.md) | 请求编辑、直接发送、响应与 Collection |
| [Rules](../../Interceptor/architecture/features/rules.md) | method/host/path/url/query/header/status/mime 匹配；header/query/body/status/synthetic/map-local/map-remote/block/delay/breakpoint 操作 |
| [Breakpoints](../../Interceptor/architecture/features/breakpoints.md) | HTTP/WS 队列、编辑、放行、丢弃、批量与退出 |
| [HTTP 消息编辑](../../Interceptor/architecture/features/http-message-editing.md) | Rules、Breakpoints、Composer 内的 Header/Body、编码与实际发送语义；不重复创建第四套编辑教程 |
| [Transfer](../../Interceptor/architecture/features/transfer.md) | HAR、原生归档、正文、任务取消、隐私与清理互斥 |
| [Settings](../../Interceptor/architecture/features/settings.md) | 证书、代理、TLS、AppContainer、存储、偏好与更新 |
| [Diagnostics](../../Interceptor/architecture/features/diagnostics.md) | 查询、详情、筛选与 JSONL 导出 |
| [Agent](../../Interceptor/architecture/features/agent.md) | 模型、会话、上下文与工具调用 |
| [MCP](../../Interceptor/architecture/features/mcp.md) | 外部 Host 接入、认证、兼容、审批和撤权 |
| [Tool capabilities](../../Interceptor/architecture/features/tool-capabilities.md) | Agent/MCP 两套独立开关及 Ask/Auto，共用六类业务能力 |
| [Playground](../../Interceptor/architecture/features/playground.md) | 内部可控流量与演示素材来源，不当作普通用户必须安装的产品功能 |

工作区导航、主题、语言和窗口还要核对 [Renderer 契约](../../Interceptor/architecture/platform/renderer.md)，安装步骤核对 [发行说明](../../Interceptor/architecture/platform/release.md)；不只按 feature 文件数机械生成章节。

## Application 与 Shell

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 首次打开、用户数据与正常退出 | `application.startup.ready`、`application.lifecycle.profile-isolation`、`application.lifecycle.graceful-close` | [快速上手](../guidebook/zh-CN/getting-started.md)、[数据保留与退出](../guidebook/zh-CN/workspace.md#saved-data) |
| Core 异常后的恢复 | `application.lifecycle.core-restart` | [恢复](../guidebook/zh-CN/troubleshooting.md#proxy-recovery) |
| 工作区切换与侧栏 | `shell.navigation.workspaces`、`shell.sidebar.collapse` | [导航](../guidebook/zh-CN/workspace.md#navigation) |
| 主题与语言 | `shell.appearance.theme`、`shell.appearance.language` | [主题与语言](../guidebook/zh-CN/workspace.md#appearance) |
| 窗口操作 | `shell.window.controls` | [窗口与分栏](../guidebook/zh-CN/workspace.md#layout) |

## Capture

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 代理就绪与录制 | `capture.proxy-readiness.resolve`、`capture.recording.pause-resume` | [就绪](../guidebook/zh-CN/getting-started.md#确认代理与录制就绪)、[录制边界](../guidebook/zh-CN/capture.md#开始与暂停录制) |
| 找到请求与关键词 | `capture.traffic.capture-select`、`capture.filter.keyword` | [查找请求](../guidebook/zh-CN/capture.md#搜索和组合筛选) |
| 组合筛选与分组展开 | `capture.filter.structured`、`capture.filter-group-selection`、`capture.filter.protocol` | [组合筛选](../guidebook/zh-CN/capture.md#搜索和组合筛选) |
| 分组顺序、计数和清除筛选 | `capture.facet-stable-ordering`、`capture.clear-facets`、`capture.facets-clear-menu` | [筛选说明](../guidebook/zh-CN/capture.md#搜索和组合筛选)、[Clear](../guidebook/zh-CN/capture.md#清空记录) |
| 从请求进入断点菜单 | `capture.breakpoint-menu-hierarchy`、`capture.breakpoint-submenu-lifecycle` | [快捷入口](../guidebook/zh-CN/capture.md#从流量进入阻断与断点) |
| TLS passthrough 定位 | `capture.navigate-tls-passthrough` | [TLS 名单](../guidebook/zh-CN/settings.md#tls-passthrough) |
| 详情折叠、分栏与长列表 | `capture.inspector.section-collapse`、`capture.detail-body-fill`、`capture.list.virtual-scroll`、`capture.inspector.resize` | [详情](../guidebook/zh-CN/capture.md#检查请求详情)、[滚动与分栏](../guidebook/zh-CN/workspace.md#layout) |
| 正文模式和不同内容 | `capture.inspector.body-modes`、`capture.scenarios.bodies`、`capture.scenarios.body-media`、`capture.scenarios.encoding` | [正文模式](../guidebook/zh-CN/capture.md#选择正文查看方式)、[保存正文](../guidebook/zh-CN/transfer.md#body) |
| 预览上限和全屏 | `capture.body-preview-limits`、`capture.body.fullscreen` | [预览限制](../guidebook/zh-CN/capture.md#选择正文查看方式) |
| HTTP 流量、流式与异常响应 | `capture.scenarios.http`、`capture.playground-traffic` | [首次请求](../guidebook/zh-CN/getting-started.md#发出第一条-http-请求)、[进行中详情](../guidebook/zh-CN/capture.md#检查请求详情) |
| HTTP/2 与连接结束 | `capture.scenarios.http2`、`capture.http2-origin-goaway` | [HTTP/2](../guidebook/zh-CN/capture.md#http2)、[正文排查](../guidebook/zh-CN/troubleshooting.md#body) |
| HTTPS 解密与未解密 | `capture.protocols.without-mitm`、`capture.protocols.with-mitm`、`capture.scenarios.tls` | [HTTPS](../guidebook/zh-CN/capture.md#https-与-tls-tunnel)、[信任](../guidebook/zh-CN/settings.md#https-decryption) |
| WebSocket 与 gRPC 消息 | `capture.scenarios.websocket`、`capture.scenarios.grpc`、`capture.messages.compact-layout` | [消息](../guidebook/zh-CN/capture.md#查看-websocket-与-grpc-消息) |
| 清空临时记录 | `capture.clear` | [Clear](../guidebook/zh-CN/capture.md#清空记录) |
| HAR 往返 | `capture.transfer.har-roundtrip`、`capture.tools.har-transfer` | [HAR](../guidebook/zh-CN/transfer.md#har)、[重新导入](../guidebook/zh-CN/transfer.md#import) |
| 原生归档往返 | `capture.transfer.archive-roundtrip`、`capture.tools.archive-transfer` | [Archive](../guidebook/zh-CN/transfer.md#archive)、[重新导入](../guidebook/zh-CN/transfer.md#import) |
| 保存正文、任务取消与退出 | `capture.tools.body-export`、`capture.tools.transfer-jobs` | [正文](../guidebook/zh-CN/transfer.md#body)、[任务](../guidebook/zh-CN/transfer.md#jobs) |

## Rules

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 查找、选择与命中 | `rules.load-search-select`、`rules.runtime-hit` | [命中与效果](../guidebook/zh-CN/rules.md#effects) |
| 创建、命名、启停和删除 | `rules.root-toolbar`、`rules.create-edit-delete` | [创建规则](../guidebook/zh-CN/rules.md#first-rule)、[管理](../guidebook/zh-CN/rules.md#order) |
| 目录、菜单、状态及动作摘要 | `rules.hierarchy-menus-status`、`rules.action-tag-overflow` | [目录与顺序](../guidebook/zh-CN/rules.md#order) |
| 匹配条件 | `rules.matcher-variants` | [全部条件](../guidebook/zh-CN/rules.md#matchers) |
| 修改动作 | `rules.action-variants` | [Header/Query](../guidebook/zh-CN/rules.md#headers-query)、[Body/Status](../guidebook/zh-CN/rules.md#body-status)、[模拟](../guidebook/zh-CN/rules.md#mock-response)、[映射](../guidebook/zh-CN/rules.md#mapping)、[流量控制](../guidebook/zh-CN/rules.md#block-delay) |
| 排序与优先级 | `rules.reorder` | [顺序](../guidebook/zh-CN/rules.md#order) |
| 校验、应用及冲突处理 | `rules.validate-apply`、`rules.apply-conflict` | [Apply](../guidebook/zh-CN/rules.md#first-rule)、[Reload](../guidebook/zh-CN/rules.md#effects) |
| 原始/最终正文与头部效果 | `rules.body-effect-evidence` | [效果](../guidebook/zh-CN/rules.md#effects)、[编辑语义](../guidebook/zh-CN/rules.md#message-editing) |
| 导入导出 | `rules.import-tree`、`rules.tools.export`、`rules.tools.import` | [Rules 导入导出](../guidebook/zh-CN/rules.md#import-export) |

## Composer

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 编辑方法、URL、参数、正文和认证 | `composer.request-edit` | [Composer](../guidebook/zh-CN/composer.md#编辑-query-与-headers) |
| 发送成功与错误 | `composer.send-success`、`composer.send-failure` | [发送](../guidebook/zh-CN/composer.md#发送第一个请求) |
| 响应分组与正文格式化 | `composer.response.section-collapse`、`composer.response.body-formatting` | [响应](../guidebook/zh-CN/composer.md#查看响应) |
| 目录、请求与自动保存 | `composer.collection.tree-interactions` | [Collection](../guidebook/zh-CN/composer.md#管理-collection) |
| Recent sends 与新建 | `composer.history-new` | [Recent sends](../guidebook/zh-CN/composer.md#使用-recent-sends) |
| 调整分栏 | `composer.resize` | [响应与分栏](../guidebook/zh-CN/composer.md#查看响应) |
| Collection 导入导出 | `composer.collection.import`、`composer.tools.transfer` | [集合文件](../guidebook/zh-CN/composer.md#导出和导入-collection) |
| Tool 查询与替换集合 | `composer.tools.collection` | [Tool 操作](../guidebook/zh-CN/composer.md#从-agent-或-mcp-使用-composer)、[权限与冲突](../guidebook/zh-CN/tool-permissions.md#state) |

## Breakpoints

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 开启断点并选中挂起项 | `breakpoints.toggle`、`breakpoints.queue-select` | [HTTP](../guidebook/zh-CN/breakpoints.md#http) |
| 队列推进与 HTTP/WS 隔离 | `breakpoints.queue-stepping`、`breakpoints.queue-isolation` | [队列](../guidebook/zh-CN/breakpoints.md#queues) |
| 批量命令 | `breakpoints.queue-commands`、`breakpoints.tools.batch` | [批量](../guidebook/zh-CN/breakpoints.md#batch)、[Tool范围](../guidebook/zh-CN/breakpoints.md#tools) |
| 原样放行、编辑放行、丢弃 | `breakpoints.continue-unmodified`、`breakpoints.execute-edited`、`breakpoints.drop` | [单项决定](../guidebook/zh-CN/breakpoints.md#continue-drop) |
| 文件与原始正文预览 | `breakpoints.body-preview`、`breakpoints.original-body` | [编辑正文](../guidebook/zh-CN/breakpoints.md#edit) |
| WebSocket 关闭码编辑 | `breakpoints.websocket-close` | [WebSocket](../guidebook/zh-CN/breakpoints.md#websocket) |
| 分栏与长内容 | `breakpoints.resize` | [正文预览](../guidebook/zh-CN/breakpoints.md#edit)、[布局](../guidebook/zh-CN/workspace.md#layout) |
| 退出与挂起释放 | `breakpoints.lifecycle-release` | [结束与取消](../guidebook/zh-CN/breakpoints.md#lifecycle) |

## Diagnostics

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 记录、详情和操作链 | `diagnostics.list-detail` | [详情](../guidebook/zh-CN/diagnostics.md#records) |
| 筛选与更多记录 | `diagnostics.filters`、`diagnostics.pagination` | [筛选与加载](../guidebook/zh-CN/diagnostics.md#filters) |
| 分栏 | `diagnostics.resize` | [阅读详情](../guidebook/zh-CN/diagnostics.md#filters) |
| 脱敏 JSONL 导出与 Tool 查询 | `diagnostics.export`、`diagnostics.tools.queries-export` | [导出](../guidebook/zh-CN/diagnostics.md#export)、[Tool](../guidebook/zh-CN/diagnostics.md#tools) |

## Settings 与 Updates

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 导航与状态查询 | `settings.navigation`、`settings.tools.readonly` | [Settings](../guidebook/zh-CN/settings.md)、[Tool速查](../guidebook/zh-CN/tool-reference.md#settings) |
| 系统代理接管与恢复 | `settings.proxy.enable-restore`、`settings.tools.system-proxy` | [系统代理](../guidebook/zh-CN/settings.md#system-proxy) |
| 上游代理与外部工具共存 | `settings.proxy.upstream`、`settings.upstream.macos`、`settings.upstream.windows` | [五种上游模式与平台限制](../guidebook/zh-CN/settings.md#upstream) |
| 异常退出与偏好恢复 | `settings.system-proxy.crash-recovery`、`settings.proxy-mitm.persistence` | [恢复](../guidebook/zh-CN/troubleshooting.md#proxy-recovery) |
| CA 材料与共享生命周期 | `settings.certificates.generate-delete`、`settings.certificates.shared-startup`、`settings.tools.certificates` | [CA准备](../guidebook/zh-CN/settings.md#https-decryption)、[生命周期](../guidebook/zh-CN/settings.md#certificate-lifecycle) |
| macOS helper 与原生信任 | `settings.helper-startup`、`settings.certificates.helper-trust` | [平台授权](../guidebook/zh-CN/settings.md#https-decryption) |
| 信任、撤销与授权取消 | `settings.certificates.trust`、`settings.certificates.startup-cancel`、`settings.certificates.cancel-trust` | [信任](../guidebook/zh-CN/settings.md#https-decryption)、[撤销](../guidebook/zh-CN/settings.md#certificate-lifecycle) |
| 查看证书与所在位置 | `settings.certificates.external-actions` | [查看](../guidebook/zh-CN/settings.md#certificate-lifecycle) |
| 解密、TLS 配置与兼容错误 | `settings.certificates.https`、`settings.tools.tls`、`settings.tls-compatibility` | [解密](../guidebook/zh-CN/settings.md#https-decryption)、[透传](../guidebook/zh-CN/settings.md#tls-passthrough)、[源站例外](../guidebook/zh-CN/settings.md#insecure-hosts) |
| Windows AppContainer 单项和批量 | `settings.tools.app-containers`、`settings.app-containers.ordering`、`settings.app-containers.bulk-access` | [AppContainer](../guidebook/zh-CN/settings.md#app-containers) |
| 语言、主题与导出隐私 | `settings.tools.language`、`settings.tools.preferences`、`settings.privacy.defaults` | [外观](../guidebook/zh-CN/settings.md#appearance)、[Privacy](../guidebook/zh-CN/settings.md#privacy) |
| 存储刷新和清理 | `settings.storage.refresh-clear` | [Storage](../guidebook/zh-CN/settings.md#storage) |
| 更新检查、下载和通知 | `settings.updates.check`、`settings.updates.download-open`、`settings.update-notification` | [Updates](../guidebook/zh-CN/settings.md#updates) |

## Agent

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 打开面板、配置与选择模型 | `agent.panel.navigation-persistence`、`agent.settings.model-configuration` | [面板](../guidebook/zh-CN/workspace.md#agent-panel)、[模型](../guidebook/zh-CN/agent.md#models) |
| 对话、上下文、停止与重试 | `agent.chat.streaming-context` | [Chat](../guidebook/zh-CN/agent.md#chat)、[Context](../guidebook/zh-CN/agent.md#context)、[Stop/Retry](../guidebook/zh-CN/agent.md#stop-retry) |
| 会话恢复 | `agent.chat.restart-recovery` | [历史](../guidebook/zh-CN/agent.md#sessions) |
| Tool 开关与 Ask/Auto | `agent.tools.settings-capabilities`、`agent.tools.execution-modes` | [开关](../guidebook/zh-CN/tool-permissions.md#switches)、[模式](../guidebook/zh-CN/tool-permissions.md#ask-auto) |
| 查询流量、正文与消息 | `agent.tools.capture-discovery`、`agent.tools.body-messages` | [Capture Tool](../guidebook/zh-CN/tool-reference.md#capture)、[任务范围](../guidebook/zh-CN/agent.md#chat) |
| 录制与清理 | `agent.tools.traffic-control` | [权限](../guidebook/zh-CN/tool-permissions.md#review)、[Capture Tool](../guidebook/zh-CN/tool-reference.md#capture) |
| 修改规则与处理断点 | `agent.tools.rules`、`agent.tools.breakpoints` | [Rules Tool](../guidebook/zh-CN/tool-reference.md#rules)、[Breakpoint Tool](../guidebook/zh-CN/tool-reference.md#breakpoints) |
| 直接发送与 TLS 探测 | `agent.tools.composer` | [Composer Tool](../guidebook/zh-CN/composer.md#从-agent-或-mcp-使用-composer) |
| 查询诊断 | `agent.tools.diagnostics` | [Diagnostics Tool](../guidebook/zh-CN/diagnostics.md#tools) |

## MCP

| 用户功能点 | Workflow 契约 | 教程归属 |
| --- | --- | --- |
| 启用服务、客户端与审批 | `mcp.desktop.streamable-http` | [Server](../guidebook/zh-CN/mcp.md#server)、[Client](../guidebook/zh-CN/mcp.md#client)、[审批](../guidebook/zh-CN/mcp.md#approval) |
| 协议兼容 | `mcp.settings.protocol-support` | [接入条件](../guidebook/zh-CN/mcp.md#requirements) |
| 实际 Host 接入 | `mcp.current-host` | [Host配置](../guidebook/zh-CN/mcp.md#client)、[兼容边界](../guidebook/zh-CN/mcp.md#browser) |
| Browser 客户端与跨 Origin | `mcp.browser-playground-cors` | [Browser](../guidebook/zh-CN/mcp.md#browser) |
| 远程处理断点 | `mcp.tools.breakpoints` | [审批](../guidebook/zh-CN/mcp.md#approval)、[断点范围](../guidebook/zh-CN/breakpoints.md#tools) |
