# Tool 权限与审批

> 草稿，面向 `v0.1.1-alpha.1`；已配独立权限开关、模式与审批操作，未录分支保留缺口，不代表完整只读配置或 item9 完成。开启 Tool 会允许对应 AI 入口读写产品数据，只授予必要范围。

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

2. 搜索 `capture_clear`。也可按 Capture、Rules、Composer、Breakpoints、Diagnostics、Settings 分组查找；逐组展开仍待配图。

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

   **待配图**：本次结尾仍限定查询 Tool，没有清空搜索及逐项完整复核。

9. 到对应入口验证被关闭 Tool 不能使用，重启后再核对保持。

   **待配图**：本段没有实际调用清理 Tool，也未录制权限重启持久化；开关图不能替代拒绝调用结果。

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

   **待配图**：其余 change 行未逐项操作；上一个小节还演示了恢复开关，不能将其结束状态称为完整只读配置。

4. 发起一次限定范围的查询，检查真实 Tool 与结果。下图来自 MCP 的本地 SDK 代理状态查询；它不是关闭 Clear 后尝试越权的验证。

   ![MCP 本地 SDK 的实际只读查询](../media/v0.1.1-alpha.1/mcp/mcp-08-query.png)

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

   **待配图**：模式切换期间仍挂起的旧调用未录制；不能声称切回 Ask 会取消或替你处理它们。

**预期结果**：执行模式影响审批策略，不改变 Tool 开关、系统权限或业务前提。

**关键说明**：某条审批已经在等待时，切换模式不会替你同意那条旧审批。不同 Chat 或不同 Client 的模式也不能互相代替。

<a id="review"></a>
## 审批时检查什么

1. 确认调用方与具体 Tool。本例引用 Agent 的 `Pause recording after asking me.`：实际操作是 `capture_stop_recording`，只暂停新录制，不清空或恢复代理。

   ![Agent 的实际调用方、Tool 与 Pause 审批](../media/v0.1.1-alpha.1/agent/agent-18a-tool-question.png)

2. 核对目标、数量、状态与影响。清理范围、规则数量、断点队列应检查各自参数，不能照搬 Pause 的审批。

   **待配图**：上述其他业务的审批参数未录制，本例只覆盖暂停录制。

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
