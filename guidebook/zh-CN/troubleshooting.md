# 常见问题与恢复

> 草稿，面向 `v0.1.1-alpha.1`；已引用实际检查位置与代表结果，未录故障逐步标注，不代表全部排查场景或 item9 完成。先保留记录并缩小范围，不默认重装、清目录或关闭系统保护。

[教程目录](../README.md) · [Diagnostics](diagnostics.md) · [Settings](settings.md)

下图按各章真实操作说明检查位置；正常状态图不表示复现了故障。不同录制的请求、规则与 Client 名称不可混用，图中的端口也只是各自录制环境的分配值。

<a id="no-traffic"></a>
## Capture 没有请求

1. 确认 App 启动完成，Recording 已开启，没有未处理的代理就绪提示。

   下图引用 Capture 的 Recording 开启状态；首次就绪提示及授权仍待配图。

   ![Capture 实际开启 Recording](../media/v0.1.1-alpha.1/capture/capture-02-record.png)

2. 清空搜索与筛选，而不是 Clear 记录。

   **待配图**：现有搜索示例恢复 `/guide/capture`，并非清空所有条件，不能当作本步。

3. 让客户端再发一条明确的测试请求，检查客户端是否报 DNS 或连接错误。

   图中是 Capture 实拍的 `/guide/capture/orders` 成功到达；DNS/连接失败的客户端画面仍待配图。

   ![实际外部测试请求到达 Capture](../media/v0.1.1-alpha.1/capture/capture-03-request.png)

4. 核对客户端是否真的经过 `127.0.0.1:8888`；不遵循系统代理的客户端需要单独配置。

   **待配图**：没有各客户端代理配置窗口，不以 App 的监听状态替代客户端设置。

5. Windows AppContainer 应用检查 [loopback 访问](settings.md#app-containers)；其他网络栈不保证受 WinINet 控制。

   **待配图 / blocked**：需要 Windows AppContainer 环境，现有素材为 macOS。

6. 若请求由 Composer 发出，到 Composer 检查其响应；不在 Capture 出现是设计边界，不是 Recording 故障。本图来自 Composer 的 `/guide/composer`，不是上面的 orders。

   ![Composer 直接发送后在自身响应区显示结果](../media/v0.1.1-alpha.1/composer/composer-04-send.png)

**判断**：先区分“没发请求”“没经过代理”“经过但没录制”“被筛选隐藏”。

<a id="tls"></a>
## HTTPS 只显示 TLS tunnel 或客户端报证书错误

1. 能看到 tunnel，说明连接可能已经经过代理，不等于已经解密。

   **待配图**：现有协议片段没有未解密 tunnel 状态，明文 HTTP/2 不能替代。

2. 检查 CA、信任和 HTTPS decryption 的实际状态。

   下图来自 Settings 的已有受信任 CA 检查，不是错误机器的信任修复；解密开关操作见 [Settings](settings.md#https-decryption)。

   ![实际 CA 与信任状态检查位置](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

3. 检查目标是否在 TLS passthrough，或是否使用证书固定、独立信任库。

   ![实际 TLS passthrough 检查位置](../media/v0.1.1-alpha.1/settings/settings-09-passthrough.png)

   **待配图**：客户端证书固定及独立信任库检查未录制。

4. 设置后让客户端新建连接；不要用仍在复用的旧连接判断新配置。

   下图引用 Capture 解密就绪后的新 `/playground/h2-json` 连接，不证明所有 TLS 错误都已解决。

   ![实际新建并解密的 HTTP/2 请求](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

5. 明确区分客户端不信任 Interceptor CA 与源站证书有问题。

   **待配图**：两种证书错误的诊断对照未录制，添加 localhost 测试例外也不是错误诊断本身。

**处理**：按 [HTTPS 解密](settings.md#https-decryption)或 [TLS passthrough](settings.md#tls-passthrough)选择适合目标的路径，不全局关闭证书校验。

<a id="rules"></a>
## 规则不生效或影响范围过大

1. 检查是否仍是未应用草稿，规则是否开启，字段是否完整。

   以下为 Rules 中 `Guide test header` 的启用和 Apply 两个真实状态；未填写报错分支仍待配图。

   ![开启但仍需 Apply 的操作阶段](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

   ![实际 Apply 之后](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

2. 核对所有 matcher，因为一条规则里的条件是 AND。

   本图来自另一条 `Guide matchers`：POST 不满足 Method `GET`，不是 Header 示例突然失效。

   ![AND 中 Method 不满足的真实反例](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-24-no-match.png)

3. 使用一笔新的外部代理请求，而不是已完成的历史请求或 Composer 请求。

   ![Guide test header 的新匹配请求](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

4. 检查其他规则是否后写覆盖、模拟响应或阻断了流程。

   下图引用 `Guide first` / `Guide second` 排序实拍，`x-guide-order` 从后写的 `second` 变成 `first`；模拟响应和 Block 的独立例见 [Rules](rules.md#block-delay)。

   ![调整前后写 second](../media/v0.1.1-alpha.1/rules-organization/rules-organization-03-before.png)

   ![调整后后写 first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-06-after.png)

5. 范围过大时先停用并 Apply，再缩小 Host、Path 或 Query 条件。

   本图是 `Guide test header` 实际停用；“先出错再缩小条件”未录制，不能称为故障修复演示。

   ![实际停用并 Apply 测试规则](../media/v0.1.1-alpha.1/rules/rules-14-disable.png)

6. Apply 冲突时先保留需要的编辑，显式 Reload 获取最新树后重新编辑；Reload 会放弃当前草稿，不盲目点它。

   **待配图 / blocked**：双写入者冲突与 Reload 恢复未录制。

**判断**：规则命中与真实 Header/Body 效果不同，结合[命中检查](rules.md#effects)确认。

<a id="waiting"></a>
## 请求一直等待

1. 检查 Capture 是否存在 pending breakpoint，必要时解除筛选。

   本图引用 `Guide request breakpoint` 的实际等待项；解除筛选操作仍待配图。

   ![实际 pending 请求断点](../media/v0.1.1-alpha.1/breakpoints/breakpoints-12-pending.png)

2. 查看队首与 Queued，不把排队状态当作网络加载动画。

   **待配图**：录制依次处理单项，没有同时排队的 Queued。

3. 原样放行或丢弃不再需要的等待项；批量操作先确认队列或规则范围。

   下图分别属于 Breakpoints 演示中的两条不同请求，不是对同一已处理目标操作两次；批量分支仍待配图。

   ![第一条实际原样放行](../media/v0.1.1-alpha.1/breakpoints/breakpoints-17-unmodified.png)

   ![另一条实际 Drop](../media/v0.1.1-alpha.1/breakpoints/breakpoints-19-drop.png)

4. 没有断点时检查目标、上游代理以及客户端自身的超时。

   ![Settings 中实际的上游检查位置](../media/v0.1.1-alpha.1/settings/settings-04-upstream.png)

   **待配图**：目标超时与客户端自身错误未录制，此图只展示检查入口。

5. 客户端已经断开时重新查询，不向已消失的等待项反复提交。

   **待配图**：客户端断开、旧 ID 失效和重新查询的往返未录制。

**关键说明**：人工断点没有固定超时自动继续；停用规则也不能代替核对已有等待项是否解决。

<a id="body"></a>
## 正文显示不全、不能格式化或无法预览

1. 区分只读预览上限、仍在接收、真实中断和解码失败。

   本图引用 Capture 的损坏 gzip 提示，只展示解码失败；仍在接收、中断和超限分支仍待配图。

   ![真实损坏 gzip 的解码提示](../media/v0.1.1-alpha.1/capture/capture-29-encoding-corrupt-gzip.png)

2. 文本预览超过 `2 MiB` 不表示捕获只保存了这些字节。

   **待配图**：没有超限文本预览与完整文件的逐步对照。

3. 完整正文在 `1–2 MiB` 时用手动 Format；截断或不完整正文不能格式化。

   **待配图**：该大小范围的 Format 操作和不完整正文拒绝格式化未录制。

4. 图片、未知二进制、音视频可能只有元信息与保存入口。

   下图来自 Capture 的音频、视频元信息；超限图片与未知二进制的仅元信息分支仍待配图。

   ![实际音频元信息](../media/v0.1.1-alpha.1/capture/capture-29-body-audio.png)

   ![实际视频元信息](../media/v0.1.1-alpha.1/capture/capture-29-body-video.png)

5. 使用 Save body 保存实际捕获的完整内容；不要用 Copy 拼凑大文件。

   下图引用 Transfer 保存小 JSON 为 `guide-response.json` 的真实原生面板与完成结果，只演示保存动作，不证明大文件边界。

   ![实际 Save body 原生面板](../media/v0.1.1-alpha.1/transfer/transfer-18-body-save-dialog.png)

   ![实际保存完成检查点](../media/v0.1.1-alpha.1/transfer/transfer-19-body-complete.png)

6. 若数据从 HAR 导入，检查是否本来就被移除了正文或无法表示相关协议内容。

   **待配图**：本次正常 HAR 往返不是移除正文或协议信息缺失的对照。

**判断**：保存完整数据、读取预览和网络完整接收是不同事实，详见 [Capture](capture.md#选择正文查看方式)。

<a id="files"></a>
## 文件导入、导出或 Clear 失败

1. 核对使用的是 HAR、原生归档、Rules JSON 还是 Collection JSON 的正确入口。

   本图引用 Capture 的 Export 菜单；Rules/Collection 应到各自功能，完整原生面板见[文件格式步骤](transfer.md#config-files)。

   ![Capture 的实际格式入口](../media/v0.1.1-alpha.1/transfer/transfer-01-export-menu.png)

2. 检查原生文件窗口是否仍在等待，是否被用户取消。

   下图是等待确认 `guide-recording.har` 的真实 Save 面板；原生面板取消分支仍待配图。

   ![尚需用户完成的真实保存面板](../media/v0.1.1-alpha.1/transfer/transfer-05-har-save-dialog.png)

3. 查看错误、跳过项和任务终态，不把进度数字当作成功。

   这里引用 Rules 正常导入预览中的数量与启用警告检查位置；损坏文件错误、实际跳过项及任务失败仍待配图。

   ![Rules 导入的真实预览，而非故障结果](../media/v0.1.1-alpha.1/rules-organization/rules-organization-14-preview.png)

4. 确认文件存在、可读，目标位置可写，空间足够。

   **待配图**：系统文件权限和磁盘空间排查未录制。

5. Capture 文件任务或取消清理仍在进行时，等待完成后再 Clear。

   **待配图**：运行中或取消清理状态下 Clear 被拒绝的场景未录制。

6. 部分导入或身份变化按对应格式说明理解；重复导入不是覆盖更新。

   下图准确引用 `guide-rules.json` 的追加结果；它不是修复了非法文件。

   ![Rules 实际追加而不覆盖](../media/v0.1.1-alpha.1/rules-organization/rules-organization-17-confirm.png)

**处理**：保留原文件，不手动删除正在使用的存储目录，也不因取消请求已经发出就强杀 App。

<a id="agent"></a>
## 模型连接、对话或 Tool 失败

1. 连接测试失败：检查 Base URL、Model ID、凭据、服务可达性和服务商余额/权限。

   下图仅是 Agent 本地演示的实际字段位置，不是失败结果；收费服务凭据、余额和授权检查待配图 / blocked。

   ![本地演示 Base URL 检查位置](../media/v0.1.1-alpha.1/agent/agent-06-endpoint.png)

   ![guide-demo-model 的 Model ID](../media/v0.1.1-alpha.1/agent/agent-07-model.png)

2. 修改配置后无法保存：重新 Test，旧的验证结果不能保存另一份配置。

   **待配图**：编辑后失去验证、重新 Test/Save 的故障分支未录制。

3. 对话停在等待：检查 App Tool 审批、系统授权或文件窗口。

   这里是 `Pause recording after asking me.` 的正常 Ask 等待，不是模型卡死；原生授权/文件等待的 Agent 分支仍待配图。

   ![实际等待用户审批的 Agent Tool](../media/v0.1.1-alpha.1/agent/agent-18a-tool-question.png)

4. Tool 不可用：检查正确的 Agent 列，而不是 MCP 列；清空搜索查看完整开关。

   本图来自权限章节，只展示 Agent 的 `capture_clear` 被关闭；清空搜索与实际拒绝调用仍待配图。

   ![只关闭 Agent 列的实际状态](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

5. 已发送请求或写配置的结果不确定：先回产品查状态，再决定 Retry。

   **待配图**：现有 Stop/Retry 是流式演示，没有已发送业务请求或写配置的故障对照。

6. 历史中的请求 ID 失效：重新查询当前 Capture，不猜新 ID。

   **待配图**：Core 重启后历史 ID 失效与重新查询未录制。

**关键说明**：在 VS Code 登录 GitHub 不等于内置模型已配置；Stop 也不撤销已经完成的副作用。

<a id="mcp"></a>
## 外部 Host 连不上 MCP

1. 确认 App 和 Server 都运行，endpoint 不是 `8888`。

   本图来自 MCP 的实际 `http://127.0.0.1:65443/mcp`；`65443` 只是该次录制端口。运行期 `EADDRINUSE` 与重启 `endpoint-conflict` 的独立操作见 [MCP](mcp.md#endpoint)。

   ![实际 MCP Server 运行状态](../media/v0.1.1-alpha.1/mcp/mcp-03-enable.png)

2. 核对 Host 能从本机连接 loopback，不是从云端发起访问。

   **待配图 / blocked**：本次只用本地 SDK，没有实际商业/云端 Host 的部署与可达性页面。

3. 检查复制的是当前 Client 的配置；轮换凭据或更换 endpoint 后，Host 需要更新。

   下面是 `Guide local client` 轮换后更新配置及 SDK 重连；换 endpoint 后的真实 Host 更新仍待配图。

   ![轮换后复制新配置并重新连接](../media/v0.1.1-alpha.1/mcp/mcp-14c-update-client.png)

4. 检查 Host 支持的 transport 和协议，不把 stdio 或旧式 SSE 配置套过来。

   下图展示 App 的协议说明入口；外部 Host 的 transport 配置仍待配图。

   ![App 的实际 MCP 协议说明位置](../media/v0.1.1-alpha.1/mcp/mcp-02-mcp.png)

5. 能连接但没有 Tool 时，检查 MCP 列授权和 Host 的工具发现状态。

   本图仅展示 `capture_clear` 的 MCP 列关闭；不是 Host 空列表，实际发现失败仍待配图。

   ![权限章节的实际 MCP 清理开关状态](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

6. 有修改请求但无结果时，回 App 检查审批和原生窗口。

   ![MCP Pause 的实际待审批状态](../media/v0.1.1-alpha.1/mcp/mcp-09-ask.png)

   **待配图**：本次 Pause 没有原生窗口，不能证明其他 Tool 的文件或 UAC 等待。

**处理**：按 [MCP](mcp.md)逐层区分网络、认证、协议、权限与业务错误；不把凭据公开到工单。

<a id="updates"></a>
## 无法检查或下载更新

1. 确认运行的是支持更新的打包 App，而不是源码开发进程。

   ![Settings 实拍中的发布 App 版本页](../media/v0.1.1-alpha.1/settings/settings-15-updates.png)

2. 检查实际状态是否为 failed，而不是把失败解读成 up-to-date。

   **待配图**：该片段只查看当前页面，没有 failed/up-to-date 两种结果的操作对照。

3. 当前更新源需要匿名可读的合适稳定版本；私有仓库、仅有预发布或网络受限都可能影响结果。

   **待配图 / blocked**：缺可匿名访问的受支持稳定更新来源，未录源状态排查。

4. 从可信 Release 页按实际附件获取适合系统与架构的产物，不把源码包当安装器。

   **待配图 / blocked**：没有实际 Release 下载操作，且私有仓库需要访问权限。

5. 下载或校验失败时不运行临时文件；解决原因后用产品入口重试。

   **待配图 / blocked**：下载失败、校验失败及恢复重试未录制，不能用版本页代替。

**关键说明**：不需要向 App 输入 GitHub PAT；App 没有这样的更新认证功能。

<a id="proxy-recovery"></a>
## 退出后网络异常或系统代理尚未恢复

1. 先确认 App 是最小化、仍在收尾，还是确实已退出；不要同时启动多个实例。

   **待配图**：没有最小化、退出中与进程已结束的对照，关闭 Agent 面板不是退出。

2. 若上一个实例异常退出，确认它已经结束后再正常启动 Interceptor，读取正式恢复状态。

   **待配图 / blocked**：没有异常退出后的恢复录制，不故意强杀来制造素材。

3. 在 System proxy 使用 Restore，或在恢复完成后正常关闭。

   **待配图**：Settings 的 System proxy 片段只读，没有 Restore 和恢复终态。

4. 如果会话期间别的软件修改了代理，核对双方当前配置；不要要求 Interceptor 覆盖对方的新设置。

   **待配图 / blocked**：缺受控的双写入者系统代理环境，不修改他人的网络设置拍图。

5. 仍不能恢复时，记录当前状态、操作错误、系统和 App 版本，交给有权限的人按事先记录的网络配置处理。

   **待配图**：没有实际代理恢复故障及管理员处理过程，普通成功 Diagnostics 不能冒充故障日志。

6. 不盲目清空所有代理、删除 journal、关闭防护或反复强杀；这些操作可能丢失恢复所需信息。

   **待配图说明**：这是安全约束，不提供危险操作示范；完整正规恢复仍缺前述步骤图。

**预期结果**：恢复已明确接管的设置，保留其他软件的新配置，不用“网络暂时能访问”掩盖错误的系统状态。

<a id="feedback"></a>
## 准备可复现的反馈

- 记录 App 版本、操作系统、架构与运行来源。
- 用自己的无凭据测试数据写清准备、操作、预期和实际结果。
- 附必要的脱敏 Diagnostics，按问题选择最小 HAR 或归档。
- 说明是否启用了 Rules、Breakpoints、HTTPS 解密及上游代理。
- 排除 API Key、Cookie、Client 配置、CA 私钥和个人流量。

反馈入口：[GitHub Issues](https://github.com/zhxmt-xm/Interceptor/issues)。当前私有仓库需要对应访问权限，官网出现链接不代表已经匿名可用。
