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
| 发送请求和添加字段 | [Composer演示](zh-CN/composer.md#walkthrough-video) |
| JSON/Text/Form与集合文件往返 | [Composer进阶实操](zh-CN/composer.md#walkthrough-composer-editing-video) |
| 三级目录、排序、导入取消与删除 | [Collection管理](zh-CN/composer.md#walkthrough-composer-collection-video) |
| 字段开关、删除后重发和历史恢复 | [Composer字段操作](zh-CN/composer.md#walkthrough-composer-fields-video) |
| 首条 Header 规则与命中 | [Rules入门](zh-CN/rules.md#walkthrough-video) |
| 改写、模拟、延迟、阻断、Map Local/Remote | [规则动作](zh-CN/rules.md#walkthrough-rules-actions-video) |
| 八类 matcher 与 AND 条件 | [匹配条件](zh-CN/rules.md#walkthrough-rules-matchers-video) |
| 优先级、目录、规则文件追加 | [规则组织](zh-CN/rules.md#walkthrough-rules-organization-video) |
| Text编辑、原样放行与Drop | [Breakpoints演示](zh-CN/breakpoints.md#walkthrough-video) |
| HAR、Archive与正文原生保存/打开 | [文件往返](zh-CN/transfer.md#walkthrough-video) |
| 现有CA、上游草稿、隐私与存储 | [Settings演示](zh-CN/settings.md#walkthrough-video) |
| 记录、过滤与详情 | [Diagnostics演示](zh-CN/diagnostics.md#walkthrough-video) |
| 模型配置、对话、审批、停止与重试 | [Agent演示](zh-CN/agent.md#walkthrough-video) |
| 客户端、查询、审批和撤权 | [MCP演示](zh-CN/mcp.md#walkthrough-video) |
| 重启后的端口冲突与新地址 | [MCP恢复](zh-CN/mcp.md#walkthrough-mcp-endpoint-video) |
| 独立控制Agent与MCP | [权限演示](zh-CN/tool-permissions.md#walkthrough-video) |

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
