# Tool 权限与审批

> 面向 `v0.1.1-alpha.1`；包含独立开关、逐项完整只读配置、实际拒绝调用和重启持久化。开启Tool会允许对应AI入口读写产品数据，只授予必要范围；演示调用方不是商业模型或外部Host兼容性验收。

[教程目录](../README.md) · [Agent](agent.md) · [MCP](mcp.md) · [Tool 速查](tool-reference.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## 逐步骤实操：真实产品录制

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。

> 这里只演示单项权限的独立开关，不等于已经把整个入口配置为只读；没有实际执行Clear。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>changeTool</code> | <code>capture_clear</code> |
| <code>queryTool</code> | <code>capture_get_proxy_status</code> |
| <code>operationExecuted</code> | <code>none</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4" poster="../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.vtt" default>
</video>

<a id="walkthrough-01-settings"></a>
### 01 · 打开 Settings

[视频 00:00](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=0.368) · [返回本节视频](#walkthrough-video)

![01 · 打开 Settings](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-01-settings.png)

<a id="walkthrough-02-agent"></a>
### 02 · 打开 Tool capabilities

[视频 00:03](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=3.252) · [返回本节视频](#walkthrough-video)

![02 · 打开 Tool capabilities](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-02-agent.png)

<a id="walkthrough-03-search"></a>
### 03 · 查找 capture_clear

[视频 00:06](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=6.453) · [返回本节视频](#walkthrough-video)

![03 · 查找 capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-03-search.png)

<a id="walkthrough-04-disable-agent"></a>
### 04 · 只关闭 Agent 清理权限

[视频 00:09](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=9.302) · [返回本节视频](#walkthrough-video)

![04 · 只关闭 Agent 清理权限](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

<a id="walkthrough-05-disable-mcp"></a>
### 05 · 再关闭 MCP 清理权限

[视频 00:12](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=12.203) · [返回本节视频](#walkthrough-video)

![05 · 再关闭 MCP 清理权限](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

<a id="walkthrough-06-restore-agent"></a>
### 06 · 显式恢复 Agent 权限

[视频 00:15](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=15.102) · [返回本节视频](#walkthrough-video)

![06 · 显式恢复 Agent 权限](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-06-restore-agent.png)

<a id="walkthrough-07-restore-mcp"></a>
### 07 · 显式恢复 MCP 权限

[视频 00:18](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=18.002) · [返回本节视频](#walkthrough-video)

![07 · 显式恢复 MCP 权限](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-07-restore-mcp.png)

<a id="walkthrough-08-query"></a>
### 08 · 查找只读查询 Tool

[视频 00:20](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=20.856) · [返回本节视频](#walkthrough-video)

![08 · 查找只读查询 Tool](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-08-query.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:end -->

<a id="switches"></a>
## 分别配置 Agent 与 MCP

**步骤**

本段实际只修改权限开关，`operationExecuted=none`，没有执行 `capture_clear`。恢复开关仅展示操作，不表示推荐给不需要清理能力的 AI 开放权限。

1. 打开 Settings，再进入 Agent > Tool capabilities。

   ![打开 Settings](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-01-settings.png)

   ![打开独立的 Tool capabilities 两列](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-02-agent.png)

2. 搜索 `capture_clear`。清空搜索后也可滚动查看Capture、Rules、Composer、Breakpoints、Diagnostics、Settings各组；[完整实录](#walkthrough-tool-permissions-readonly)逐项操作，不把搜索当作批量开关。

   ![实际搜索 capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-03-search.png)

3. 只关闭 Agent 列，限制内置面板，不改变 MCP 列。

   ![只关闭 Agent 清理权限](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

4. 再关闭 MCP 列，限制外部客户端。

   ![随后关闭 MCP 清理权限](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

5. 只有需要该能力时才恢复 Agent 列；本次实拍显式恢复。

   ![显式恢复 Agent 权限](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-06-restore-agent.png)

6. 同样独立决定是否恢复 MCP 列。

   ![显式恢复 MCP 权限](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-07-restore-mcp.png)

7. 搜索 `capture_get_proxy_status` 查看只读查询能力；搜索变化不会自动改变其他开关。

   ![实际查找 capture_get_proxy_status](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-08-query.png)

8. 清空搜索，再检查完整配置，关闭不需要的项。

   ![清空搜索显示完整权限表](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-09-clear-search.png)

9. 到对应入口验证被关闭 Tool 不能使用，重启后再核对保持。

   ![实际Agent调用被拒绝](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-06-agent-rejection.png)

   ![实际MCP调用被拒绝](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-04-mcp-rejection.png)

   ![重启后权限保持关闭](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-01-saved-permissions.png)

**预期结果**：两个入口分别拥有自己的授权，不会因为关闭内置 Agent 就自动关闭外部 MCP。

**关键说明**：新配置的默认开关可能全部开启，使用前主动审视。搜索只是缩小显示范围，不把看不见的行自动禁用。

<a id="read-only"></a>
## 配置“只能查看”

**用途**：让 AI 分析流量，不允许它发送请求、清空数据或修改设置。

**步骤**

1. 先限定需要的数据；本例为 Capture 的代理/录制状态，搜索 `capture_get_proxy_status` 并检查目标入口的 query 权限。

   ![只读状态查询 Tool 的实际位置](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-08-query.png)

2. 关闭不需要的 change Tool。以 `capture_clear` 为例，Agent 与 MCP 必须分别关闭，不能只改一列。

   ![关闭 Agent 的 capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

   ![关闭 MCP 的 capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

3. 继续关闭不需要的发送、配置替换、导入导出、证书和系统代理操作；“只能查看”不能只关闭 Clear。

   [完整只读实录](#walkthrough-tool-permissions-readonly)从清空搜索开始，对每条change分别关闭Agent和MCP，保留query；每个开关都有单独步骤图。它没有执行这些危险动作，也没有批量授权。

4. 实际尝试被关闭的`capture_clear`，确认两个入口都拒绝且录制记录保留；重启后重新发现Tool，目录只包含保留的query，再执行代理状态查询。

   ![拒绝后实际录制记录仍在](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-07-retained-record.png)

   ![重启后只读发现与真实查询](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-02-query-only.png)

**预期结果**：关闭的能力不可通过该入口继续发现或调用。

**关键说明**：Ask 不是“只读模式”。Ask 下被启用的 change Tool 在你 Allow 后仍会修改数据。query 也可能读取敏感流量；只读不等于没有数据外传风险。

<a id="ask-auto"></a>
## 理解 Ask 与 Auto

| 行为 | Ask | Auto |
| --- | --- | --- |
| 已开启的 query Tool | 直接查询 | 直接查询 |
| 已开启的 change Tool | App 请求明确审批 | 自动执行 |
| 已关闭的 Tool | 不允许执行 | 不允许执行 |
| 系统文件窗口与原生权限 | 仍需正常完成 | 仍需正常完成 |

**步骤**

首次或范围较广的任务保持 Ask。以下准确复用 Agent 与 MCP 的独立模式演示；切到 Auto 的画面不表示实际执行了 Auto change Tool。

1. 在当前 Agent Chat 检查 Auto 模式；只有理解范围、数据和后果才选择它。

   ![Agent 当前 Chat 的 Auto 状态](../media/v0.1.1-alpha.1/agent/agent-17-auto.png)

2. 在同一个 Chat 切回 Ask。

   ![Agent 恢复 Ask](../media/v0.1.1-alpha.1/agent/agent-18-ask.png)

3. MCP 要单独操作 `Guide local client` 的模式，不能用 Chat 模式代替。

   ![独立 MCP Client 的 Auto 状态](../media/v0.1.1-alpha.1/mcp/mcp-13-auto.png)

4. 把该 Client 恢复为 Ask。

   ![MCP Client 恢复 Ask](../media/v0.1.1-alpha.1/mcp/mcp-14-ask-mode.png)

5. 检查是否还有已经开始或等待审批的调用。

   处理已有审批应使用原审批卡片或调用方取消，不用模式切换代替。[MCP实录](mcp.md#walkthrough-mcp-tool-lifecycle-03-pending-ask)展示挂起审批和调用方真正取消；它没有把切回Ask当成取消。

**预期结果**：执行模式影响审批策略，不改变 Tool 开关、系统权限或业务前提。

**关键说明**：某条审批已经在等待时，切换模式不会替你同意那条旧审批。不同 Chat 或不同 Client 的模式也不能互相代替。

<a id="review"></a>
## 审批时检查什么

1. 确认调用方与具体 Tool。本例引用 Agent 的 `Pause recording after asking me.`：实际操作是 `capture_stop_recording`，只暂停新录制，不清空或恢复代理。

   ![Agent 的实际调用方、Tool 与 Pause 审批](../media/v0.1.1-alpha.1/agent/agent-18a-tool-question.png)

2. 核对目标、数量、状态与影响。清理范围、规则数量、断点队列应检查各自参数，不能照搬 Pause 的审批。

   导出例使用`diagnostics_export`，检查Process、Level、Outcome与文件副作用；更多业务仍按对应Tool的实际schema核对，不把下图冒充规则或断点参数。

   ![Diagnostics导出的真实审批参数](../media/v0.1.1-alpha.1/mcp-tool-lifecycle/mcp-tool-lifecycle-08-export-ask.png)

3. 不接受就 Deny。

   ![本例实际拒绝 Pause](../media/v0.1.1-alpha.1/agent/agent-18b-deny.png)

4. 重新说明或请求范围后，检查新审批。本例重新发送同一个限定的 Pause 请求。

   ![重新请求后的实际审批](../media/v0.1.1-alpha.1/agent/agent-18c-tool-again.png)

5. 允许后核对实际 Recording 状态及 Tool 结果；“允许调用”不等于任何后续操作都已成功。

   ![实际允许并暂停新录制](../media/v0.1.1-alpha.1/agent/agent-18d-allow.png)

**预期结果**：你的决定针对一项明确操作，不是无限授权后续所有步骤。

**关键说明**：文件导入可能还有业务预览确认，证书或 AppContainer 可能还有系统授权；不要把多层确认当成重复故障而绕过。

<a id="state"></a>
## 旧状态、冲突与取消

- Rules 和 Collection 替换要基于最新保存版本。旧版本冲突时先重新读取，不以重复提交强行覆盖。
- Breakpoint 必须仍然存在于当前 Core 代际。已消失的目标不能自动替换成另一条。
- 文件任务“已启动”不是“已完成”，用任务查询或产品进度确认。
- Stop、取消、撤权或关闭客户端不会撤销已经完成的业务副作用。
- 原生窗口尚未完成时回到窗口处理，不用隐藏 API 代替选择文件或授权。

**推荐顺序**：先查询当前状态，再执行一个小范围操作，最后在实际工作区核对。

<a id="privacy"></a>
## 把 Tool 结果当成数据

查询结果、响应正文、网页和日志可能含他人提供的文字。它们不能替你授权模型修改规则、读取更多数据或上传内容。

只提供本次任务需要的信息，不在 Prompt 中粘贴真实 Key、Client 凭据或 CA 私钥。需要限制数据暴露时先关闭相关查询能力，而不是只把执行模式改成 Ask。

<a id="non-tools"></a>
## 哪些操作仍由产品界面管理

模型配置与凭据、Chat 管理、MCP Server 和 Client 接入控制、窗口导航以及应用更新不是任意开放的业务 Tool。

需要添加模型、轮换 MCP 凭据或下载更新时，使用对应正式界面，不要求模型通过一个不存在的“通用 IPC/文件命令”代做。

<!-- recorded-walkthrough:tool-permissions-readonly:start -->
<a id="walkthrough-tool-permissions-readonly"></a>
## 完整只读配置与真实拒绝调用

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>client</code> | <code>Guide readonly client</code> |
| <code>model</code> | <code>Guide permission demo (keyless local endpoint)</code> |
| <code>blockedOperation</code> | <code>capture_clear rejected by both Agent and MCP without clearing the real record</code> |
| <code>changeToolCount</code> | <code>48</code> |
| <code>queryToolCount</code> | <code>21</code> |
| <code>disabledChanges</code> | <code>capture_start_recording, capture_stop_recording, capture_clear, capture_cancel_transfer_job, capture_export_body, capture_export_har, capture_import_har, capture_export_archive, capture_import_archive, rules_replace_tree, rules_export, rules_import, composer_send_request, composer_probe_connection, composer_replace_collection, composer_export_collection, composer_import_collection, breakpoints_enable_http, breakpoints_disable_http, breakpoints_enable_websocket, breakpoints_disable_websocket, breakpoints_continue, breakpoints_forward_edited, breakpoints_drop, breakpoints_continue_queue, breakpoints_drop_queue, breakpoints_continue_rule, diagnostics_export, settings_generate_certificate, settings_install_certificate, settings_uninstall_certificate, settings_delete_certificate, settings_reveal_certificate, settings_view_certificate, settings_open_certificate_manager, settings_enable_app_container, settings_disable_app_container, settings_enable_all_app_containers, settings_disable_all_app_containers, settings_enable_system_proxy, settings_restore_system_proxy, settings_replace_tls_insecure_hosts, settings_replace_tls_passthrough, settings_enable_https_decryption, settings_disable_https_decryption, settings_set_language, settings_set_theme, settings_set_export_privacy_defaults</code> |
| <code>closeImage</code> | <code>Before actual Close; real shutdown is separately verified</code> |

<a id="walkthrough-tool-permissions-readonly-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4" poster="../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-01-search.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.vtt" default>
</video>

<a id="walkthrough-tool-permissions-readonly-01-search"></a>
### 01 · 查找capture_clear

[视频 00:00](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=0.362) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![01 · 查找capture_clear](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-01-search.png)

<a id="walkthrough-tool-permissions-readonly-02-disable-agent-clear"></a>
### 02 · 关闭Agent清理权限

[视频 00:03](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=3.364) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![02 · 关闭Agent清理权限](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-02-disable-agent-clear.png)

<a id="walkthrough-tool-permissions-readonly-03-disable-mcp-clear"></a>
### 03 · 独立关闭MCP清理权限

[视频 00:06](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=6.421) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![03 · 独立关闭MCP清理权限](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-03-disable-mcp-clear.png)

<a id="walkthrough-tool-permissions-readonly-04-mcp-rejection"></a>
### 04 · 核对真实MCP调用被拒绝

[视频 00:09](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=9.475) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![04 · 核对真实MCP调用被拒绝](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-04-mcp-rejection.png)

<a id="walkthrough-tool-permissions-readonly-05-agent"></a>
### 05 · 打开本地演示Agent

[视频 00:12](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=12.522) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![05 · 打开本地演示Agent](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-05-agent.png)

<a id="walkthrough-tool-permissions-readonly-06-agent-rejection"></a>
### 06 · 核对Agent也不能执行禁用动作

[视频 00:15](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=15.641) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![06 · 核对Agent也不能执行禁用动作](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-06-agent-rejection.png)

<a id="walkthrough-tool-permissions-readonly-07-retained-record"></a>
### 07 · 实际记录仍保留

[视频 00:18](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=18.788) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![07 · 实际记录仍保留](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-07-retained-record.png)

<a id="walkthrough-tool-permissions-readonly-08-close-agent"></a>
### 08 · 关闭面板返回授权表

[视频 00:21](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=21.872) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![08 · 关闭面板返回授权表](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-08-close-agent.png)

<a id="walkthrough-tool-permissions-readonly-09-clear-search"></a>
### 09 · 清空搜索显示全部分组

[视频 00:25](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=25.253) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![09 · 清空搜索显示全部分组](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-09-clear-search.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_start_recording"></a>
### 10 · 关闭agent的capture_start_recording

[视频 00:28](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=28.310) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![10 · 关闭agent的capture_start_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_start_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_start_recording"></a>
### 11 · 关闭mcp的capture_start_recording

[视频 00:31](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=31.537) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![11 · 关闭mcp的capture_start_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_start_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_stop_recording"></a>
### 12 · 关闭agent的capture_stop_recording

[视频 00:35](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=35.313) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![12 · 关闭agent的capture_stop_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_stop_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_stop_recording"></a>
### 13 · 关闭mcp的capture_stop_recording

[视频 00:38](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=38.618) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![13 · 关闭mcp的capture_stop_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_stop_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_cancel_transfer_job"></a>
### 14 · 关闭agent的capture_cancel_transfer_job

[视频 00:41](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=41.919) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![14 · 关闭agent的capture_cancel_transfer_job](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_cancel_transfer_job.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_cancel_transfer_job"></a>
### 15 · 关闭mcp的capture_cancel_transfer_job

[视频 00:45](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=45.197) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![15 · 关闭mcp的capture_cancel_transfer_job](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_cancel_transfer_job.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_body"></a>
### 16 · 关闭agent的capture_export_body

[视频 00:48](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=48.424) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![16 · 关闭agent的capture_export_body](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_body.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_body"></a>
### 17 · 关闭mcp的capture_export_body

[视频 00:51](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=51.646) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![17 · 关闭mcp的capture_export_body](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_body.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_har"></a>
### 18 · 关闭agent的capture_export_har

[视频 00:54](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=54.921) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![18 · 关闭agent的capture_export_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_har"></a>
### 19 · 关闭mcp的capture_export_har

[视频 00:58](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=58.179) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![19 · 关闭mcp的capture_export_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_import_har"></a>
### 20 · 关闭agent的capture_import_har

[视频 01:01](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=61.429) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![20 · 关闭agent的capture_import_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_import_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_import_har"></a>
### 21 · 关闭mcp的capture_import_har

[视频 01:04](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=64.611) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![21 · 关闭mcp的capture_import_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_import_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_archive"></a>
### 22 · 关闭agent的capture_export_archive

[视频 01:07](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=67.855) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![22 · 关闭agent的capture_export_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_archive"></a>
### 23 · 关闭mcp的capture_export_archive

[视频 01:11](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=71.118) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![23 · 关闭mcp的capture_export_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_import_archive"></a>
### 24 · 关闭agent的capture_import_archive

[视频 01:14](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=74.323) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![24 · 关闭agent的capture_import_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_import_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_import_archive"></a>
### 25 · 关闭mcp的capture_import_archive

[视频 01:17](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=77.541) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![25 · 关闭mcp的capture_import_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_import_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_replace_tree"></a>
### 26 · 关闭agent的rules_replace_tree

[视频 01:20](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=80.851) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![26 · 关闭agent的rules_replace_tree](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_replace_tree.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_replace_tree"></a>
### 27 · 关闭mcp的rules_replace_tree

[视频 01:24](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=84.139) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![27 · 关闭mcp的rules_replace_tree](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_replace_tree.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_export"></a>
### 28 · 关闭agent的rules_export

[视频 01:27](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=87.362) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![28 · 关闭agent的rules_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_export"></a>
### 29 · 关闭mcp的rules_export

[视频 01:30](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=90.545) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![29 · 关闭mcp的rules_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_import"></a>
### 30 · 关闭agent的rules_import

[视频 01:33](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=93.722) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![30 · 关闭agent的rules_import](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_import.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_import"></a>
### 31 · 关闭mcp的rules_import

[视频 01:36](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=96.917) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![31 · 关闭mcp的rules_import](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_import.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_send_request"></a>
### 32 · 关闭agent的composer_send_request

[视频 01:40](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=100.674) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![32 · 关闭agent的composer_send_request](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_send_request.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_send_request"></a>
### 33 · 关闭mcp的composer_send_request

[视频 01:43](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=103.890) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![33 · 关闭mcp的composer_send_request](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_send_request.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_probe_connection"></a>
### 34 · 关闭agent的composer_probe_connection

[视频 01:47](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=107.173) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![34 · 关闭agent的composer_probe_connection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_probe_connection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_probe_connection"></a>
### 35 · 关闭mcp的composer_probe_connection

[视频 01:50](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=110.419) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![35 · 关闭mcp的composer_probe_connection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_probe_connection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_replace_collection"></a>
### 36 · 关闭agent的composer_replace_collection

[视频 01:53](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=113.639) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![36 · 关闭agent的composer_replace_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_replace_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_replace_collection"></a>
### 37 · 关闭mcp的composer_replace_collection

[视频 01:56](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=116.893) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![37 · 关闭mcp的composer_replace_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_replace_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_export_collection"></a>
### 38 · 关闭agent的composer_export_collection

[视频 02:00](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=120.149) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![38 · 关闭agent的composer_export_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_export_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_export_collection"></a>
### 39 · 关闭mcp的composer_export_collection

[视频 02:03](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=123.390) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![39 · 关闭mcp的composer_export_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_export_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_import_collection"></a>
### 40 · 关闭agent的composer_import_collection

[视频 02:06](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=126.597) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![40 · 关闭agent的composer_import_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_import_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_import_collection"></a>
### 41 · 关闭mcp的composer_import_collection

[视频 02:09](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=129.812) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![41 · 关闭mcp的composer_import_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_import_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_enable_http"></a>
### 42 · 关闭agent的breakpoints_enable_http

[视频 02:13](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=133.033) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![42 · 关闭agent的breakpoints_enable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_enable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_enable_http"></a>
### 43 · 关闭mcp的breakpoints_enable_http

[视频 02:16](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=136.265) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![43 · 关闭mcp的breakpoints_enable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_enable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_disable_http"></a>
### 44 · 关闭agent的breakpoints_disable_http

[视频 02:19](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=139.479) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![44 · 关闭agent的breakpoints_disable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_disable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_disable_http"></a>
### 45 · 关闭mcp的breakpoints_disable_http

[视频 02:22](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=142.687) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![45 · 关闭mcp的breakpoints_disable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_disable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_enable_websocket"></a>
### 46 · 关闭agent的breakpoints_enable_websocket

[视频 02:25](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=145.867) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![46 · 关闭agent的breakpoints_enable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_enable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_enable_websocket"></a>
### 47 · 关闭mcp的breakpoints_enable_websocket

[视频 02:29](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=149.056) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![47 · 关闭mcp的breakpoints_enable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_enable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_disable_websocket"></a>
### 48 · 关闭agent的breakpoints_disable_websocket

[视频 02:32](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=152.292) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![48 · 关闭agent的breakpoints_disable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_disable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_disable_websocket"></a>
### 49 · 关闭mcp的breakpoints_disable_websocket

[视频 02:35](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=155.504) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![49 · 关闭mcp的breakpoints_disable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_disable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue"></a>
### 50 · 关闭agent的breakpoints_continue

[视频 02:38](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=158.699) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![50 · 关闭agent的breakpoints_continue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue"></a>
### 51 · 关闭mcp的breakpoints_continue

[视频 02:41](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=161.931) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![51 · 关闭mcp的breakpoints_continue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_forward_edited"></a>
### 52 · 关闭agent的breakpoints_forward_edited

[视频 02:45](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=165.144) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![52 · 关闭agent的breakpoints_forward_edited](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_forward_edited.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_forward_edited"></a>
### 53 · 关闭mcp的breakpoints_forward_edited

[视频 02:48](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=168.371) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![53 · 关闭mcp的breakpoints_forward_edited](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_forward_edited.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_drop"></a>
### 54 · 关闭agent的breakpoints_drop

[视频 02:51](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=171.571) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![54 · 关闭agent的breakpoints_drop](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_drop.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_drop"></a>
### 55 · 关闭mcp的breakpoints_drop

[视频 02:54](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=174.763) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![55 · 关闭mcp的breakpoints_drop](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_drop.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue_queue"></a>
### 56 · 关闭agent的breakpoints_continue_queue

[视频 02:57](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=177.932) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![56 · 关闭agent的breakpoints_continue_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue_queue"></a>
### 57 · 关闭mcp的breakpoints_continue_queue

[视频 03:01](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=181.115) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![57 · 关闭mcp的breakpoints_continue_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_drop_queue"></a>
### 58 · 关闭agent的breakpoints_drop_queue

[视频 03:04](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=184.323) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![58 · 关闭agent的breakpoints_drop_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_drop_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_drop_queue"></a>
### 59 · 关闭mcp的breakpoints_drop_queue

[视频 03:07](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=187.550) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![59 · 关闭mcp的breakpoints_drop_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_drop_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue_rule"></a>
### 60 · 关闭agent的breakpoints_continue_rule

[视频 03:10](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=190.768) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![60 · 关闭agent的breakpoints_continue_rule](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue_rule.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue_rule"></a>
### 61 · 关闭mcp的breakpoints_continue_rule

[视频 03:13](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=193.975) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![61 · 关闭mcp的breakpoints_continue_rule](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue_rule.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-diagnostics_export"></a>
### 62 · 关闭agent的diagnostics_export

[视频 03:17](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=197.204) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![62 · 关闭agent的diagnostics_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-diagnostics_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-diagnostics_export"></a>
### 63 · 关闭mcp的diagnostics_export

[视频 03:20](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=200.417) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![63 · 关闭mcp的diagnostics_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-diagnostics_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_generate_certificate"></a>
### 64 · 关闭agent的settings_generate_certificate

[视频 03:23](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=203.628) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![64 · 关闭agent的settings_generate_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_generate_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_generate_certificate"></a>
### 65 · 关闭mcp的settings_generate_certificate

[视频 03:26](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=206.846) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![65 · 关闭mcp的settings_generate_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_generate_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_install_certificate"></a>
### 66 · 关闭agent的settings_install_certificate

[视频 03:30](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=210.044) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![66 · 关闭agent的settings_install_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_install_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_install_certificate"></a>
### 67 · 关闭mcp的settings_install_certificate

[视频 03:33](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=213.284) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![67 · 关闭mcp的settings_install_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_install_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_uninstall_certificate"></a>
### 68 · 关闭agent的settings_uninstall_certificate

[视频 03:36](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=216.498) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![68 · 关闭agent的settings_uninstall_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_uninstall_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_uninstall_certificate"></a>
### 69 · 关闭mcp的settings_uninstall_certificate

[视频 03:39](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=219.707) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![69 · 关闭mcp的settings_uninstall_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_uninstall_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_delete_certificate"></a>
### 70 · 关闭agent的settings_delete_certificate

[视频 03:42](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=222.903) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![70 · 关闭agent的settings_delete_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_delete_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_delete_certificate"></a>
### 71 · 关闭mcp的settings_delete_certificate

[视频 03:46](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=226.125) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![71 · 关闭mcp的settings_delete_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_delete_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_reveal_certificate"></a>
### 72 · 关闭agent的settings_reveal_certificate

[视频 03:49](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=229.352) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![72 · 关闭agent的settings_reveal_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_reveal_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_reveal_certificate"></a>
### 73 · 关闭mcp的settings_reveal_certificate

[视频 03:52](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=232.570) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![73 · 关闭mcp的settings_reveal_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_reveal_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_view_certificate"></a>
### 74 · 关闭agent的settings_view_certificate

[视频 03:55](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=235.782) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![74 · 关闭agent的settings_view_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_view_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_view_certificate"></a>
### 75 · 关闭mcp的settings_view_certificate

[视频 03:59](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=239.014) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![75 · 关闭mcp的settings_view_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_view_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_open_certificate_manager"></a>
### 76 · 关闭agent的settings_open_certificate_manager

[视频 04:02](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=242.230) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![76 · 关闭agent的settings_open_certificate_manager](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_open_certificate_manager.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_open_certificate_manager"></a>
### 77 · 关闭mcp的settings_open_certificate_manager

[视频 04:05](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=245.454) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![77 · 关闭mcp的settings_open_certificate_manager](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_open_certificate_manager.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_app_container"></a>
### 78 · 关闭agent的settings_enable_app_container

[视频 04:08](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=248.685) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![78 · 关闭agent的settings_enable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_app_container"></a>
### 79 · 关闭mcp的settings_enable_app_container

[视频 04:11](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=251.904) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![79 · 关闭mcp的settings_enable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_app_container"></a>
### 80 · 关闭agent的settings_disable_app_container

[视频 04:15](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=255.138) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![80 · 关闭agent的settings_disable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_app_container"></a>
### 81 · 关闭mcp的settings_disable_app_container

[视频 04:18](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=258.397) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![81 · 关闭mcp的settings_disable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_all_app_containers"></a>
### 82 · 关闭agent的settings_enable_all_app_containers

[视频 04:21](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=261.598) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![82 · 关闭agent的settings_enable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_all_app_containers"></a>
### 83 · 关闭mcp的settings_enable_all_app_containers

[视频 04:24](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=264.769) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![83 · 关闭mcp的settings_enable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_all_app_containers"></a>
### 84 · 关闭agent的settings_disable_all_app_containers

[视频 04:27](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=267.999) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![84 · 关闭agent的settings_disable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_all_app_containers"></a>
### 85 · 关闭mcp的settings_disable_all_app_containers

[视频 04:31](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=271.203) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![85 · 关闭mcp的settings_disable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_system_proxy"></a>
### 86 · 关闭agent的settings_enable_system_proxy

[视频 04:34](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=274.428) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![86 · 关闭agent的settings_enable_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_system_proxy"></a>
### 87 · 关闭mcp的settings_enable_system_proxy

[视频 04:37](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=277.622) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![87 · 关闭mcp的settings_enable_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_restore_system_proxy"></a>
### 88 · 关闭agent的settings_restore_system_proxy

[视频 04:40](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=280.847) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![88 · 关闭agent的settings_restore_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_restore_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_restore_system_proxy"></a>
### 89 · 关闭mcp的settings_restore_system_proxy

[视频 04:44](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=284.025) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![89 · 关闭mcp的settings_restore_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_restore_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_replace_tls_insecure_hosts"></a>
### 90 · 关闭agent的settings_replace_tls_insecure_hosts

[视频 04:47](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=287.204) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![90 · 关闭agent的settings_replace_tls_insecure_hosts](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_replace_tls_insecure_hosts.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_replace_tls_insecure_hosts"></a>
### 91 · 关闭mcp的settings_replace_tls_insecure_hosts

[视频 04:50](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=290.435) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![91 · 关闭mcp的settings_replace_tls_insecure_hosts](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_replace_tls_insecure_hosts.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_replace_tls_passthrough"></a>
### 92 · 关闭agent的settings_replace_tls_passthrough

[视频 04:53](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=293.698) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![92 · 关闭agent的settings_replace_tls_passthrough](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_replace_tls_passthrough.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_replace_tls_passthrough"></a>
### 93 · 关闭mcp的settings_replace_tls_passthrough

[视频 04:56](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=296.907) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![93 · 关闭mcp的settings_replace_tls_passthrough](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_replace_tls_passthrough.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_https_decryption"></a>
### 94 · 关闭agent的settings_enable_https_decryption

[视频 05:00](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=300.115) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![94 · 关闭agent的settings_enable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_https_decryption"></a>
### 95 · 关闭mcp的settings_enable_https_decryption

[视频 05:03](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=303.336) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![95 · 关闭mcp的settings_enable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_https_decryption"></a>
### 96 · 关闭agent的settings_disable_https_decryption

[视频 05:06](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=306.543) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![96 · 关闭agent的settings_disable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_https_decryption"></a>
### 97 · 关闭mcp的settings_disable_https_decryption

[视频 05:09](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=309.756) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![97 · 关闭mcp的settings_disable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_language"></a>
### 98 · 关闭agent的settings_set_language

[视频 05:12](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=312.976) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![98 · 关闭agent的settings_set_language](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_language.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_language"></a>
### 99 · 关闭mcp的settings_set_language

[视频 05:16](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=316.166) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![99 · 关闭mcp的settings_set_language](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_language.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_theme"></a>
### 100 · 关闭agent的settings_set_theme

[视频 05:19](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=319.393) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![100 · 关闭agent的settings_set_theme](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_theme.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_theme"></a>
### 101 · 关闭mcp的settings_set_theme

[视频 05:22](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=322.596) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![101 · 关闭mcp的settings_set_theme](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_theme.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_export_privacy_defaults"></a>
### 102 · 关闭agent的settings_set_export_privacy_defaults

[视频 05:25](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=325.815) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![102 · 关闭agent的settings_set_export_privacy_defaults](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_export_privacy_defaults.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_export_privacy_defaults"></a>
### 103 · 关闭mcp的settings_set_export_privacy_defaults

[视频 05:29](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=329.024) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![103 · 关闭mcp的settings_set_export_privacy_defaults](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_export_privacy_defaults.png)

<a id="walkthrough-tool-permissions-readonly-review-capture"></a>
### 104 · 滚动复核capture分组

[视频 05:32](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=332.257) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![104 · 滚动复核capture分组](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-capture.png)

<a id="walkthrough-tool-permissions-readonly-review-rules"></a>
### 105 · 滚动复核rules分组

[视频 05:35](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=335.284) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![105 · 滚动复核rules分组](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-rules.png)

<a id="walkthrough-tool-permissions-readonly-review-composer"></a>
### 106 · 滚动复核composer分组

[视频 05:38](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=338.339) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![106 · 滚动复核composer分组](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-composer.png)

<a id="walkthrough-tool-permissions-readonly-review-breakpoints"></a>
### 107 · 滚动复核breakpoints分组

[视频 05:41](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=341.352) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![107 · 滚动复核breakpoints分组](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-breakpoints.png)

<a id="walkthrough-tool-permissions-readonly-review-diagnostics"></a>
### 108 · 滚动复核diagnostics分组

[视频 05:44](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=344.364) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![108 · 滚动复核diagnostics分组](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-diagnostics.png)

<a id="walkthrough-tool-permissions-readonly-review-settings"></a>
### 109 · 滚动复核settings分组

[视频 05:47](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=347.380) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![109 · 滚动复核settings分组](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-settings.png)

<a id="walkthrough-tool-permissions-readonly-10-readonly-list"></a>
### 110 · 核对MCP只发现query

[视频 05:50](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=350.398) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![110 · 核对MCP只发现query](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-10-readonly-list.png)

<a id="walkthrough-tool-permissions-readonly-11-before-close"></a>
### 111 · 保留完整只读配置后正常关闭

[视频 05:54](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=354.039) · [返回本节视频](#walkthrough-tool-permissions-readonly-video)

![111 · 保留完整只读配置后正常关闭](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-11-before-close.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:tool-permissions-readonly:end -->

<!-- recorded-walkthrough:tool-permissions-restart:start -->
<a id="walkthrough-tool-permissions-restart"></a>
## 重启后的完整只读权限

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>client</code> | <code>Guide readonly client</code> |
| <code>disabledChanges</code> | <code>capture_start_recording, capture_stop_recording, capture_clear, capture_cancel_transfer_job, capture_export_body, capture_export_har, capture_import_har, capture_export_archive, capture_import_archive, rules_replace_tree, rules_export, rules_import, composer_send_request, composer_probe_connection, composer_replace_collection, composer_export_collection, composer_import_collection, breakpoints_enable_http, breakpoints_disable_http, breakpoints_enable_websocket, breakpoints_disable_websocket, breakpoints_continue, breakpoints_forward_edited, breakpoints_drop, breakpoints_continue_queue, breakpoints_drop_queue, breakpoints_continue_rule, diagnostics_export, settings_generate_certificate, settings_install_certificate, settings_uninstall_certificate, settings_delete_certificate, settings_reveal_certificate, settings_view_certificate, settings_open_certificate_manager, settings_enable_app_container, settings_disable_app_container, settings_enable_all_app_containers, settings_disable_all_app_containers, settings_enable_system_proxy, settings_restore_system_proxy, settings_replace_tls_insecure_hosts, settings_replace_tls_passthrough, settings_enable_https_decryption, settings_disable_https_decryption, settings_set_language, settings_set_theme, settings_set_export_privacy_defaults</code> |
| <code>queryTools</code> | <code>capture_get_proxy_status, capture_get_storage_status, capture_list_exchanges, capture_get_exchange, capture_get_exchange_body, capture_list_websocket_messages, capture_list_grpc_messages, capture_get_transfer_job, rules_get_tree, rules_get_hits, composer_get_collection, breakpoints_list, diagnostics_query, diagnostics_get_trace, diagnostics_get_recent, settings_get_core_process_status, settings_get_system_proxy_status, settings_get_certificate_status, settings_get_tls_insecure_hosts, settings_get_tls_passthrough, settings_list_app_containers</code> |
| <code>persisted</code> | <code>Every change Tool remains disabled for both Agent and MCP after actual App restart</code> |
| <code>evidenceGeneration</code> | <code>readonly-reopened</code> |

<a id="walkthrough-tool-permissions-restart-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4" poster="../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-01-saved-permissions.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.vtt" default>
</video>

<a id="walkthrough-tool-permissions-restart-01-saved-permissions"></a>
### 01 · 读取重启后的实际双列权限

[视频 00:00](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=0.472) · [返回本节视频](#walkthrough-tool-permissions-restart-video)

![01 · 读取重启后的实际双列权限](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-01-saved-permissions.png)

<a id="walkthrough-tool-permissions-restart-02-query-only"></a>
### 02 · 新连接仍只发现query

[视频 00:04](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=4.991) · [返回本节视频](#walkthrough-tool-permissions-restart-video)

![02 · 新连接仍只发现query](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-02-query-only.png)

<a id="walkthrough-tool-permissions-restart-03-query-enabled"></a>
### 03 · 已保留的只读查询仍可用

[视频 00:07](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=7.973) · [返回本节视频](#walkthrough-tool-permissions-restart-video)

![03 · 已保留的只读查询仍可用](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-03-query-enabled.png)

<a id="walkthrough-tool-permissions-restart-04-clear-search"></a>
### 04 · 清空搜索保留完整只读状态

[视频 00:10](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=10.986) · [返回本节视频](#walkthrough-tool-permissions-restart-video)

![04 · 清空搜索保留完整只读状态](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-04-clear-search.png)

<a id="walkthrough-tool-permissions-restart-05-stop-server"></a>
### 05 · 关闭本轮Server而不恢复change授权

[视频 00:14](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=14.047) · [返回本节视频](#walkthrough-tool-permissions-restart-video)

![05 · 关闭本轮Server而不恢复change授权](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-05-stop-server.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:tool-permissions-restart:end -->
