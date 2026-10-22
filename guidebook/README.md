# Interceptor 使用指南

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

<a id="walkthroughs"></a>
## 操作步骤索引

按要完成的操作进入对应小节。

| 想学习的操作 | 操作步骤 |
| --- | --- |
| 工作区与主题 | [工作区演示](zh-CN/workspace.md#walkthrough) |
| 录制、正文、HTTP/2、WebSocket 与 gRPC | [Capture演示](zh-CN/capture.md#walkthrough) |
| Application、Host、Protocol、Type与Rule分组 | [完整筛选分组](zh-CN/capture.md#walkthrough-capture-facets) |
| Request、Markdown Source、分栏与滚动 | [正文检查](zh-CN/capture.md#walkthrough-capture-inspection) |
| 接收进度、GOAWAY中断与新连接恢复 | [HTTP/2过程](zh-CN/capture.md#walkthrough-capture-http2) |
| 消息复制、全屏与205条分页 | [WebSocket](zh-CN/capture.md#walkthrough-capture-websocket-messages) · [gRPC](zh-CN/capture.md#walkthrough-capture-grpc-messages) |
| 大正文格式化、预览上限与完整文件 | [大正文](zh-CN/capture.md#walkthrough-capture-body-limits) |
| 发送请求和添加字段 | [Composer演示](zh-CN/composer.md#walkthrough) |
| JSON/Text/Form与集合文件往返 | [Composer进阶实操](zh-CN/composer.md#walkthrough-composer-editing) |
| 三级目录、排序、导入取消与删除 | [Collection管理](zh-CN/composer.md#walkthrough-composer-collection) |
| 字段开关、删除后重发和历史恢复 | [Composer字段操作](zh-CN/composer.md#walkthrough-composer-fields) |
| 首条 Header 规则与命中 | [Rules入门](zh-CN/rules.md#walkthrough) |
| 响应Header、Original/Final与原生正文保存 | [响应与正文证据](zh-CN/rules.md#walkthrough-rules-response-evidence) |
| 改写、模拟、延迟、阻断、Map Local/Remote | [规则动作](zh-CN/rules.md#walkthrough-rules-actions) |
| 八类 matcher 与 AND 条件 | [匹配条件](zh-CN/rules.md#walkthrough-rules-matchers) |
| 优先级、目录、规则文件追加 | [规则组织](zh-CN/rules.md#walkthrough-rules-organization) |
| Text编辑、原样放行与Drop | [Breakpoints演示](zh-CN/breakpoints.md#walkthrough) |
| HAR、Archive与正文原生保存/打开 | [文件往返](zh-CN/transfer.md#walkthrough) |
| 全部/筛选/选中范围与运行中取消 | [导出范围](zh-CN/transfer.md#walkthrough-transfer-scopes) · [归档取消](zh-CN/transfer.md#walkthrough-transfer-cancel) |
| 现有CA、上游草稿、隐私与存储 | [Settings演示](zh-CN/settings.md#walkthrough) |
| TLS透传的添加、命中、删除与恢复解密 | [TLS透传往返](zh-CN/settings.md#walkthrough-settings-tls-passthrough) |
| 记录、过滤与详情 | [Diagnostics演示](zh-CN/diagnostics.md#walkthrough) |
| 模型配置、对话、审批、停止与重试 | [Agent演示](zh-CN/agent.md#walkthrough) |
| 客户端、查询、审批和撤权 | [MCP演示](zh-CN/mcp.md#walkthrough) |
| 重启后的端口冲突与新地址 | [MCP恢复](zh-CN/mcp.md#walkthrough-mcp-endpoint) |
| 独立控制Agent与MCP | [权限演示](zh-CN/tool-permissions.md#walkthrough) |
| 工作区：保存与正常关闭 | [关闭前保存](zh-CN/workspace.md#walkthrough-workspace-close) |
| 工作区：重开后的持久与临时数据 | [重启检查](zh-CN/workspace.md#walkthrough-workspace-restart) |
| 工作区：设置保留、Agent深链、面板与窗口缩放 | [导航与窗口](zh-CN/workspace.md#walkthrough-workspace-navigation) |
| 工作区：真实最大化、还原与最小化 | [窗口控件](zh-CN/workspace.md#walkthrough-workspace-window-controls) |
| Capture：同组OR、跨组AND与清空搜索 | [筛选组合](zh-CN/capture.md#walkthrough-capture-filters) |
| Capture：快捷Block与双阶段断点 | [快捷规则](zh-CN/capture.md#walkthrough-capture-shortcuts) |
| Composer：响应分组、查看器与分栏 | [响应检查](zh-CN/composer.md#walkthrough-composer-inspection) |
| Composer：重复Query、Text与历史重发 | [重发操作](zh-CN/composer.md#walkthrough-composer-replay) |
| Composer：公开Basic/Bearer认证与清理 | [认证实操](zh-CN/composer.md#walkthrough-composer-auth) |
| Composer：MCP发送审批与Collection读取替换 | [Tool与UI边界](zh-CN/composer.md#walkthrough-composer-tools) |
| Composer：Collection文件Tool的原生取消、确认与追加 | [文件Tool往返](zh-CN/composer.md#walkthrough-composer-file-tools) |
| Composer：深层目录中的完整请求字段保存 | [重启前保存](zh-CN/composer.md#walkthrough-composer-persistence-save) |
| Composer：重启后核对字段及唯一Send | [重启后核对](zh-CN/composer.md#walkthrough-composer-persistence-restart) |
| Composer：自动Format、XML原文保留与2MiB预览 | [响应边界](zh-CN/composer.md#walkthrough-composer-response-formatting) |
| Rules：remove、append、正文与搜索 | [字段与正文操作](zh-CN/rules.md#walkthrough-rules-operations) |
| Rules：目录层级、校验、命中导航与删除 | [规则树操作](zh-CN/rules.md#walkthrough-rules-tree) |
| Rules：contains、exact、regex、Aa与MIME | [匹配模式](zh-CN/rules.md#walkthrough-rules-matching-modes) |
| Rules：响应Header、停用恢复与编码边界 | [响应控制](zh-CN/rules.md#walkthrough-rules-response-controls) |
| Rules：第二写入者、冲突与Reload | [冲突恢复](zh-CN/rules.md#walkthrough-rules-conflict) |
| Rules：跨协议改道与缺失Map Local文件 | [映射恢复](zh-CN/rules.md#walkthrough-rules-routing) |
| Breakpoints：响应Header、Text与File | [响应断点](zh-CN/breakpoints.md#walkthrough-breakpoints-response) |
| Breakpoints：队首、草稿与批量范围 | [队列实操](zh-CN/breakpoints.md#walkthrough-breakpoints-queue) |
| Breakpoints：WebSocket双向文本 | [文本帧断点](zh-CN/breakpoints.md#walkthrough-breakpoints-websocket) |
| Breakpoints：快捷撤销、全局与规则开关、客户端取消 | [管理器](zh-CN/breakpoints.md#walkthrough-breakpoints-manager) |
| Breakpoints：Both、空Text、Ping/Pong与关闭码 | [控制帧](zh-CN/breakpoints.md#walkthrough-breakpoints-websocket-controls) |
| Breakpoints：请求Header、空Text、File与响应状态 | [请求变体](zh-CN/breakpoints.md#walkthrough-breakpoints-request-variants) |
| Breakpoints：混合队列范围与持等待正常退出 | [混合队列与退出](zh-CN/breakpoints.md#walkthrough-breakpoints-mixed-queues) |
| Settings：隐私默认值、存储取消与清理 | [存储与隐私](zh-CN/settings.md#walkthrough-settings-storage-privacy) |
| Settings：系统代理恢复与Recording边界 | [代理控制](zh-CN/settings.md#walkthrough-settings-proxy-routing) |
| Settings：真实Manual、PAC、Direct与共享草稿 | [上游往返](zh-CN/settings.md#walkthrough-settings-upstream) |
| Settings：三项隐私默认值、单次覆盖与实际HAR | [导出隐私](zh-CN/settings.md#walkthrough-settings-privacy-export) |
| Settings：实际Check与失败状态 | [更新检查](zh-CN/settings.md#walkthrough-settings-update-check) |
| Diagnostics：实际失败、历史、过滤与JSONL | [诊断排查](zh-CN/diagnostics.md#walkthrough-diagnostics-lifecycle) |
| Agent：模型、Chat管理与权限实效 | [管理操作](zh-CN/agent.md#walkthrough-agent-management) |
| Agent：删除唯一剩余模型并回到未配置状态 | [删除最后一个模型](zh-CN/agent.md#walkthrough-agent-model-removal) |
| Agent：快捷键、Context、新Chat与运行中删除 | [会话操作](zh-CN/agent.md#walkthrough-agent-session-lifecycle) |
| Agent：真实重启、历史回载与最后模型删除 | [重启与历史](zh-CN/agent.md#walkthrough-agent-session-restart) |
| Agent：Tool完成、Stop、Retry与原生文件审批 | [Tool生命周期](zh-CN/agent.md#walkthrough-agent-tool-lifecycle) |
| MCP：取消审批、导出与运行中撤销Client | [调用生命周期](zh-CN/mcp.md#walkthrough-mcp-tool-lifecycle) |
| MCP：更换冲突地址后重新发现与查询 | [新地址重连](zh-CN/mcp.md#walkthrough-mcp-endpoint-reconnect) |
| 权限：逐项完整只读配置与真实拒绝 | [完整只读](zh-CN/tool-permissions.md#walkthrough-tool-permissions-readonly) |
| 权限：重启后只读发现与查询 | [持久化核对](zh-CN/tool-permissions.md#walkthrough-tool-permissions-restart) |
