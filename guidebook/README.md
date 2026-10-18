# Interceptor 使用指南

> 中文内容初稿，面向 `v0.1.1-alpha.1` 整理。已有对应英文正文与部分真实逐步图文/视频，但完整功能点的逐步配图与实机验收仍未结束；不要把初稿或单个演示当作整章已验收。公开上线与App接入仍未完成。

Interceptor 是桌面 HTTP(S) 调试代理。本书从你要完成的事情出发，不要求阅读源码、测试脚本或使用 Agent。

## 第一次使用

1. [快速上手](zh-CN/getting-started.md)：安装、代理就绪、第一条 HTTP 请求、保存与退出。
2. [工作区与基本操作](zh-CN/workspace.md)：找到各个工具，调整分栏、主题和语言，了解哪些数据会保留。
3. [Capture](zh-CN/capture.md)：找到目标请求，检查请求头、正文、WebSocket 与 gRPC。

## 修改和复现问题

- [Composer](zh-CN/composer.md)：独立发送请求，编辑参数、正文和认证，管理 Collection。
- [Rules](zh-CN/rules.md)：匹配流量，修改 Header、Query、正文和状态，模拟、映射、阻断与延迟。
- [Breakpoints](zh-CN/breakpoints.md)：暂停请求、响应或 WebSocket 帧，原样放行、编辑、丢弃及批量处理。

## 保存、配置和排查

- [导入导出](zh-CN/transfer.md)：选择 HAR、原生归档或正文文件，处理任务取消与敏感信息。
- [Settings](zh-CN/settings.md)：系统与上游代理、证书、TLS、Windows AppContainer、存储、隐私和更新。
- [Diagnostics](zh-CN/diagnostics.md)：查找运行错误、查看操作链及导出诊断。
- [常见问题与恢复](zh-CN/troubleshooting.md)：从症状找到排查顺序，而不是反复重装或清空数据。

## AI 辅助调试

- [Agent](zh-CN/agent.md)：配置模型、管理对话、读取上下文用量、停止与重试。
- [MCP](zh-CN/mcp.md)：连接外部 AI Host，管理客户端、endpoint 与凭据。
- [Tool 权限与审批](zh-CN/tool-permissions.md)：分别管理 Agent/MCP 权限，理解 Ask、Auto 和系统授权。
- [Tool 操作速查](zh-CN/tool-reference.md)：按 feature 查找实际 Tool 名称、作用和操作边界。

AI 是可选能力。抓包、Composer、Rules 和 Breakpoints 不需要模型 API Key；模型调用可能产生服务商费用。

## 按问题查找

| 想完成的事 | 阅读位置 |
| --- | --- |
| 抓到第一条请求 | [快速上手](zh-CN/getting-started.md#发出第一条-http-请求) |
| 只找某个接口或错误响应 | [Capture 筛选](zh-CN/capture.md#搜索和组合筛选) |
| HTTPS 只显示一条隧道 | [HTTPS 与证书](zh-CN/settings.md#https-decryption) |
| 请求一直在等待 | [断点队列](zh-CN/breakpoints.md#queues) |
| 不改服务端，返回一份测试响应 | [模拟响应](zh-CN/rules.md#mock-response) |
| 重复发送某个请求 | [Composer](zh-CN/composer.md#发送第一个请求) |
| 导出给同事且避免泄露数据 | [导出隐私](zh-CN/transfer.md#privacy) |
| 与已有代理一起使用 | [上游代理](zh-CN/settings.md#upstream) |
| 让 AI 只能查看，不能修改 | [配置只读权限](zh-CN/tool-permissions.md#read-only) |
| App 关闭后网络异常 | [退出与代理恢复](zh-CN/troubleshooting.md#proxy-recovery) |

<a id="videos"></a>
## 实拍视频与步骤图

以下入口打开同章中的真实产品视频、字幕、操作值和逐步截图。录制使用`v0.1.1-alpha.1`的macOS x64发布产物；未在录像中执行的分支、其他平台及首次系统授权不因此自动通过验收。

| 想学习的操作 | 实拍入口 |
| --- | --- |
| 工作区与主题 | [工作区演示](zh-CN/workspace.md#walkthrough-video) |
| 录制、正文、HTTP/2、WebSocket 与 gRPC | [Capture演示](zh-CN/capture.md#walkthrough-video) |
| Application、Host、Protocol、Type与Rule分组 | [完整筛选分组](zh-CN/capture.md#walkthrough-capture-facets-video) |
| Request、Markdown Source、分栏与滚动 | [正文检查](zh-CN/capture.md#walkthrough-capture-inspection-video) |
| 接收进度、GOAWAY中断与新连接恢复 | [HTTP/2过程](zh-CN/capture.md#walkthrough-capture-http2-video) |
| 消息复制、全屏与205条分页 | [WebSocket](zh-CN/capture.md#walkthrough-capture-websocket-messages-video) · [gRPC](zh-CN/capture.md#walkthrough-capture-grpc-messages-video) |
| 大正文格式化、预览上限与完整文件 | [大正文](zh-CN/capture.md#walkthrough-capture-body-limits-video) |
| 发送请求和添加字段 | [Composer演示](zh-CN/composer.md#walkthrough-video) |
| JSON/Text/Form与集合文件往返 | [Composer进阶实操](zh-CN/composer.md#walkthrough-composer-editing-video) |
| 三级目录、排序、导入取消与删除 | [Collection管理](zh-CN/composer.md#walkthrough-composer-collection-video) |
| 字段开关、删除后重发和历史恢复 | [Composer字段操作](zh-CN/composer.md#walkthrough-composer-fields-video) |
| 首条 Header 规则与命中 | [Rules入门](zh-CN/rules.md#walkthrough-video) |
| 响应Header、Original/Final与原生正文保存 | [响应与正文证据](zh-CN/rules.md#walkthrough-rules-response-evidence-video) |
| 改写、模拟、延迟、阻断、Map Local/Remote | [规则动作](zh-CN/rules.md#walkthrough-rules-actions-video) |
| 八类 matcher 与 AND 条件 | [匹配条件](zh-CN/rules.md#walkthrough-rules-matchers-video) |
| 优先级、目录、规则文件追加 | [规则组织](zh-CN/rules.md#walkthrough-rules-organization-video) |
| Text编辑、原样放行与Drop | [Breakpoints演示](zh-CN/breakpoints.md#walkthrough-video) |
| HAR、Archive与正文原生保存/打开 | [文件往返](zh-CN/transfer.md#walkthrough-video) |
| 全部/筛选/选中范围与运行中取消 | [导出范围](zh-CN/transfer.md#walkthrough-transfer-scopes-video) · [归档取消](zh-CN/transfer.md#walkthrough-transfer-cancel-video) |
| 现有CA、上游草稿、隐私与存储 | [Settings演示](zh-CN/settings.md#walkthrough-video) |
| TLS透传的添加、命中、删除与恢复解密 | [TLS透传往返](zh-CN/settings.md#walkthrough-settings-tls-passthrough-video) |
| 记录、过滤与详情 | [Diagnostics演示](zh-CN/diagnostics.md#walkthrough-video) |
| 模型配置、对话、审批、停止与重试 | [Agent演示](zh-CN/agent.md#walkthrough-video) |
| 客户端、查询、审批和撤权 | [MCP演示](zh-CN/mcp.md#walkthrough-video) |
| 重启后的端口冲突与新地址 | [MCP恢复](zh-CN/mcp.md#walkthrough-mcp-endpoint-video) |
| 独立控制Agent与MCP | [权限演示](zh-CN/tool-permissions.md#walkthrough-video) |
| 工作区：保存与正常关闭 | [关闭前保存](zh-CN/workspace.md#walkthrough-workspace-close-video) |
| 工作区：重开后的持久与临时数据 | [重启检查](zh-CN/workspace.md#walkthrough-workspace-restart-video) |
| 工作区：设置保留、Agent深链、面板与窗口缩放 | [导航与窗口](zh-CN/workspace.md#walkthrough-workspace-navigation-video) |
| 工作区：真实最大化、还原与最小化 | [窗口控件](zh-CN/workspace.md#walkthrough-workspace-window-controls-video) |
| Capture：同组OR、跨组AND与清空搜索 | [筛选组合](zh-CN/capture.md#walkthrough-capture-filters-video) |
| Capture：快捷Block与双阶段断点 | [快捷规则](zh-CN/capture.md#walkthrough-capture-shortcuts-video) |
| Composer：响应分组、查看器与分栏 | [响应检查](zh-CN/composer.md#walkthrough-composer-inspection-video) |
| Composer：重复Query、Text与历史重发 | [重发操作](zh-CN/composer.md#walkthrough-composer-replay-video) |
| Composer：公开Basic/Bearer认证与清理 | [认证实操](zh-CN/composer.md#walkthrough-composer-auth-video) |
| Composer：MCP发送审批与Collection读取替换 | [Tool与UI边界](zh-CN/composer.md#walkthrough-composer-tools-video) |
| Composer：Collection文件Tool的原生取消、确认与追加 | [文件Tool往返](zh-CN/composer.md#walkthrough-composer-file-tools-video) |
| Composer：深层目录中的完整请求字段保存 | [重启前保存](zh-CN/composer.md#walkthrough-composer-persistence-save-video) |
| Composer：重启后核对字段及唯一Send | [重启后核对](zh-CN/composer.md#walkthrough-composer-persistence-restart-video) |
| Composer：自动Format、XML原文保留与2MiB预览 | [响应边界](zh-CN/composer.md#walkthrough-composer-response-formatting-video) |
| Rules：remove、append、正文与搜索 | [字段与正文操作](zh-CN/rules.md#walkthrough-rules-operations-video) |
| Rules：目录层级、校验、命中导航与删除 | [规则树操作](zh-CN/rules.md#walkthrough-rules-tree-video) |
| Rules：contains、exact、regex、Aa与MIME | [匹配模式](zh-CN/rules.md#walkthrough-rules-matching-modes-video) |
| Rules：响应Header、停用恢复与编码边界 | [响应控制](zh-CN/rules.md#walkthrough-rules-response-controls-video) |
| Rules：第二写入者、冲突与Reload | [冲突恢复](zh-CN/rules.md#walkthrough-rules-conflict-video) |
| Rules：跨协议改道与缺失Map Local文件 | [映射恢复](zh-CN/rules.md#walkthrough-rules-routing-video) |
| Breakpoints：响应Header、Text与File | [响应断点](zh-CN/breakpoints.md#walkthrough-breakpoints-response-video) |
| Breakpoints：队首、草稿与批量范围 | [队列实操](zh-CN/breakpoints.md#walkthrough-breakpoints-queue-video) |
| Breakpoints：WebSocket双向文本 | [文本帧断点](zh-CN/breakpoints.md#walkthrough-breakpoints-websocket-video) |
| Breakpoints：快捷撤销、全局与规则开关、客户端取消 | [管理器](zh-CN/breakpoints.md#walkthrough-breakpoints-manager-video) |
| Breakpoints：Both、空Text、Ping/Pong与关闭码 | [控制帧](zh-CN/breakpoints.md#walkthrough-breakpoints-websocket-controls-video) |
| Breakpoints：请求Header、空Text、File与响应状态 | [请求变体](zh-CN/breakpoints.md#walkthrough-breakpoints-request-variants-video) |
| Breakpoints：混合队列范围与持等待正常退出 | [混合队列与退出](zh-CN/breakpoints.md#walkthrough-breakpoints-mixed-queues-video) |
| Settings：隐私默认值、存储取消与清理 | [存储与隐私](zh-CN/settings.md#walkthrough-settings-storage-privacy-video) |
| Settings：系统代理恢复与Recording边界 | [代理控制](zh-CN/settings.md#walkthrough-settings-proxy-routing-video) |
| Settings：真实Manual、PAC、Direct与共享草稿 | [上游往返](zh-CN/settings.md#walkthrough-settings-upstream-video) |
| Settings：三项隐私默认值、单次覆盖与实际HAR | [导出隐私](zh-CN/settings.md#walkthrough-settings-privacy-export-video) |
| Settings：实际Check与失败状态 | [更新检查](zh-CN/settings.md#walkthrough-settings-update-check-video) |
| Diagnostics：实际失败、历史、过滤与JSONL | [诊断排查](zh-CN/diagnostics.md#walkthrough-diagnostics-lifecycle-video) |
| Agent：模型、Chat管理与权限实效 | [管理操作](zh-CN/agent.md#walkthrough-agent-management-video) |
| Agent：删除唯一剩余模型并回到未配置状态 | [最后模型删除（真实节选）](zh-CN/agent.md#walkthrough-agent-model-removal-video) |
| Agent：快捷键、Context、新Chat与运行中删除 | [会话操作](zh-CN/agent.md#walkthrough-agent-session-lifecycle-video) |
| Agent：真实重启、历史回载与最后模型删除 | [重启与历史](zh-CN/agent.md#walkthrough-agent-session-restart-video) |
| Agent：Tool完成、Stop、Retry与原生文件审批 | [Tool生命周期](zh-CN/agent.md#walkthrough-agent-tool-lifecycle-video) |
| MCP：取消审批、导出与运行中撤销Client | [调用生命周期](zh-CN/mcp.md#walkthrough-mcp-tool-lifecycle-video) |
| MCP：更换冲突地址后重新发现与查询 | [新地址重连](zh-CN/mcp.md#walkthrough-mcp-endpoint-reconnect-video) |
| 权限：逐项完整只读配置与真实拒绝 | [完整只读](zh-CN/tool-permissions.md#walkthrough-tool-permissions-readonly-video) |
| 权限：重启后只读发现与查询 | [持久化核对](zh-CN/tool-permissions.md#walkthrough-tool-permissions-restart-video) |

## 阅读约定

- Capture、Composer、Recording、Headers 等名称对应 App 功能；按钮文字会随当前语言变化，不要求为了看教程切换语言。
- 每个场景写用途、前提、操作步骤、可观察的结果与限制。章节链接和锚点可在本地官网中使用，公开访问仍以实际部署地址为准。
- 示例只用于自己有权检查的测试流量；`example.com` 是公开示例，`example.test`、示例服务地址和示例文件名不代表真实可用服务。
- 第一次先完成普通 HTTP，再处理 HTTPS；不会要求关闭全局系统安全保护。
- “有记录”“有正文预览”“网络请求完整结束”不是同一件事；以客户端结果与 App 实际状态共同判断。

## 版本、素材与访问

- [English](README.en.md)提供对应英文初稿，网站切换语言会切换正文，不仅改变导航。两种语言保持同一组演示名称和值。
- 已加入的步骤图和视频来自核对过发布摘要的真实App，注明版本、平台和原App语言；每步对应独立截图与实际视频时间，没有使用设计预览、空图片或虚构时间戳。未配图分支仍待制作。
- 教程只在 Homepage 维护。先完成官网阅读体验，再接入 App；后续 App 计划用无边框 iframe 打开相应在线章节，并提供浏览器打开按钮。
- 在线教程依赖官网可达性，不承诺断网可读。暂不分发教程 npm 包，不复制目录进 App，不给 App 构建增加私有 registry 认证。
- 当前 Capture 是临时记录。重要数据先导出；分享前检查凭据、Cookie、URL、正文和系统身份信息。
