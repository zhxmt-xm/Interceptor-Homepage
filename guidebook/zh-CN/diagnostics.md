# Diagnostics：查找运行问题

> 草稿，面向 `v0.1.1-alpha.1`；已配实际查询与原生 JSONL 导出步骤图，故障和 Tool 分支仍有缺口，不代表全章或 item9 完成。Diagnostics 是 App 的运行记录，不是完整网络协议分析器。

[教程目录](../README.md) · [常见问题](troubleshooting.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## 逐步骤实操：真实产品录制

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>requestUrl</code> | <code>http://127.0.0.1:54599/guide/diagnostics</code> |
| <code>method</code> | <code>GET</code> |
| <code>command</code> | <code>composer.send</code> |
| <code>process</code> | <code>core</code> |
| <code>level</code> | <code>info</code> |
| <code>outcome</code> | <code>success</code> |
| <code>fileName</code> | <code>guide-diagnostics.jsonl</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4" poster="../media/v0.1.1-alpha.1/diagnostics/diagnostics-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/diagnostics/diagnostics.vtt" default>
</video>

<a id="walkthrough-01-open"></a>
### 01 · 打开 Diagnostics

[视频 00:00](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=0.423) · [返回本节视频](#walkthrough-video)

![01 · 打开 Diagnostics](../media/v0.1.1-alpha.1/diagnostics/diagnostics-01-open.png)

<a id="walkthrough-02-record"></a>
### 02 · 选择实际记录

[视频 00:03](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=3.322) · [返回本节视频](#walkthrough-video)

![02 · 选择实际记录](../media/v0.1.1-alpha.1/diagnostics/diagnostics-02-record.png)

<a id="walkthrough-03-process"></a>
### 03 · 按 Process 筛选

[视频 00:06](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=6.133) · [返回本节视频](#walkthrough-video)

![03 · 按 Process 筛选](../media/v0.1.1-alpha.1/diagnostics/diagnostics-03-process.png)

<a id="walkthrough-04-level"></a>
### 04 · 按 Level 筛选

[视频 00:08](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=8.993) · [返回本节视频](#walkthrough-video)

![04 · 按 Level 筛选](../media/v0.1.1-alpha.1/diagnostics/diagnostics-04-level.png)

<a id="walkthrough-05-info"></a>
### 05 · 切换到 info

[视频 00:11](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=11.824) · [返回本节视频](#walkthrough-video)

![05 · 切换到 info](../media/v0.1.1-alpha.1/diagnostics/diagnostics-05-info.png)

<a id="walkthrough-06-outcome"></a>
### 06 · 只查看成功操作

[视频 00:14](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=14.707) · [返回本节视频](#walkthrough-video)

![06 · 只查看成功操作](../media/v0.1.1-alpha.1/diagnostics/diagnostics-06-outcome.png)

<a id="walkthrough-07-export"></a>
### 07 · 保存 guide-diagnostics.jsonl

[视频 00:28](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=28.128) · [返回本节视频](#walkthrough-video)

![07 · 保存 guide-diagnostics.jsonl](../media/v0.1.1-alpha.1/diagnostics/diagnostics-07-export.png)

<a id="walkthrough-08-exported"></a>
### 08 · 核对真实 JSONL 导出

[视频 00:32](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=32.242) · [返回本节视频](#walkthrough-video)

![08 · 核对真实 JSONL 导出](../media/v0.1.1-alpha.1/diagnostics/diagnostics-08-exported.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:end -->

<a id="records"></a>
## 选择记录并阅读详情

**用途**：知道一次发送、文件任务、代理操作或运行错误发生在哪里。

**步骤**

1. 记下操作时间和用户动作。本参考使用补充录制中的成功请求：`GET http://127.0.0.1:54599/guide/diagnostics`，命令为 `composer.send`；`54599` 只是该次录制的动态端口，不是失败示例或公共服务。

   **待配图**：本段从 Diagnostics 开始，没有单独展示前面的 Composer 输入与 Send；其他端口的 Composer 截图不能冒充本次操作。

2. 打开 Diagnostics，等待记录列表刷新。

   ![打开实际 Diagnostics 列表](../media/v0.1.1-alpha.1/diagnostics/diagnostics-01-open.png)

3. 选中时间和操作相符的记录，检查进程、命令、等级、结果和耗时。

   本次值为 `core` / `composer.send` / `info` / `success`，时间和耗时以实际记录为准。

   ![选中真实 composer.send 成功记录](../media/v0.1.1-alpha.1/diagnostics/diagnostics-02-record.png)

4. 在详情中展开关联操作和时间线，区分开始、完成、取消与失败。

   **待配图**：没有分别展开关联操作/时间线，也未录制取消和失败记录；成功详情图只覆盖上一步。

**预期结果**：把用户操作与可观察的运行记录关联起来，而不是只凭一句错误描述猜原因。

**关键说明**：Main、Core、Renderer 是不同来源；界面不包含每个内部字段，也不会将完整请求正文或命令参数原样作为日志公开。

<a id="filters"></a>
## 缩小查询范围

**步骤**

1. 在 Process 选择本例来源 `core`；不确定来源时先保留全部。

   ![按实际 Process 筛选](../media/v0.1.1-alpha.1/diagnostics/diagnostics-03-process.png)

2. 操作 Level 筛选，观察列表随等级条件改变，不把暂时无结果当成日志丢失。

   ![实际 Level 筛选中间态](../media/v0.1.1-alpha.1/diagnostics/diagnostics-04-level.png)

3. 切换到本次命令的 `info`。

   ![Level 切到 info](../media/v0.1.1-alpha.1/diagnostics/diagnostics-05-info.png)

4. 将 Outcome 限定为 `success`，检查本次成功操作。

   ![只查看 success 的实际结果](../media/v0.1.1-alpha.1/diagnostics/diagnostics-06-outcome.png)

5. 确认列表和选择属于本次操作，必要时清除过滤重新定位。

   **待配图**：已有组合筛选结果，没有完整清除过滤的逐步画面。

6. 想看更早数据时使用页面加载入口，等待记录进入列表。

   **待配图**：未录制加载历史页。

7. 调整列表和详情分栏，滚动阅读完整内容。

   **待配图**：未录制分栏拖动或较长详情的滚动。

**预期结果**：筛选改变当前查看范围，不删除底层记录；加载更早记录与刷新最新记录是不同动作。

**关键说明**：列表不是一次性展示数据库中的全部记录，当前屏幕没有某条数据不代表它一定不存在。Tool 查询可用条件按实际 schema 提供，不把内部字段想当然当成 UI 控件。

<a id="outcome"></a>
## 判断失败、取消和未完成

1. 先看操作是否已经进入终态。

   下图是本次 `composer.send` 的 `success` 终态，不是失败、取消或“仍在执行”的示例。

   ![实际成功操作的终态](../media/v0.1.1-alpha.1/diagnostics/diagnostics-02-record.png)

2. 检查失败摘要和对应进程，再回到所属功能核对实际状态。

   **待配图**：现有记录是成功结果，未录制失败摘要与所属功能往返。

3. 网络发送检查客户端与目标；文件操作检查任务终态；代理操作检查当前系统归属。

   **待配图**：这些失败排查分支未逐项录制，不能拿一条成功日志代替端到端结果。

4. 避免把用户取消、目标拒绝、协议错误和 App 内部错误混成同一类。

   **待配图**：缺各类不同终态的对照场景，不伪造错误来补图。

**预期结果**：得到具体的排查方向，不因看到一条成功记录就假定整条流程成功。

**关键说明**：例如 UI 成功提交意图，不等于异步文件任务已经完成；同理日志中某个步骤失败也不保证目标服务完全没有收到请求。

<a id="export"></a>
## 导出诊断给维护者

**步骤**

1. 复现一次有权执行的最小问题，并记下时间、版本和系统。

   **待配图**：本次是 macOS x64、`0.1.1-alpha.1` 的正常 `composer.send` 示例，不是故障复现；输入和发起阶段未在 Diagnostics 片段中展示。

2. 本例使用 Process `core`、Level `info`、Outcome `success`；实际故障应按自己的记录调整，不能过滤掉所需错误。

   ![选择 core 来源](../media/v0.1.1-alpha.1/diagnostics/diagnostics-03-process.png)

   ![选择 info 等级](../media/v0.1.1-alpha.1/diagnostics/diagnostics-05-info.png)

   ![选择 success 结果](../media/v0.1.1-alpha.1/diagnostics/diagnostics-06-outcome.png)

3. 使用 Export，在真实系统保存窗口保存 `guide-diagnostics.jsonl`。

   ![真实原生 Save 面板中的 guide-diagnostics.jsonl](../media/v0.1.1-alpha.1/diagnostics/diagnostics-07-export.png)

4. 等待导出任务完成，再检查结果。

   ![本次实际 JSONL 导出核对](../media/v0.1.1-alpha.1/diagnostics/diagnostics-08-exported.png)

5. 分享前再检查内容，附上操作步骤、预期结果和实际错误。

   **待配图**：没有最终隐私复核或提交工单的录制；JSONL 导出完成不表示文件可以不经检查就分享。

**预期结果**：得到逐行 JSON 的诊断文件，便于核对，不需要公开整个 App 数据目录。

**关键说明**

- 诊断在记录和导出环节有脱敏，仍应检查业务标识和其他可识别信息。
- Diagnostics 导出不等于 HAR，也不能恢复没有保存的正文。
- 不发送模型 Key、MCP 配置凭据、CA 私钥或个人流量。
- 导出任务启动不等于保存完成，取消规则见[文件任务](transfer.md#jobs)。

<a id="tools"></a>
## 通过 Agent 或 MCP 查询

1. 仅开启需要的 Diagnostics 查询 Tool。

   **待配图**：权限录制使用 Capture Tool，没有逐项配置 Diagnostics Tool。

2. 让 AI 限定来源、时间线索和操作，不要求它读取全部无关日志。

   **待配图**：没有 Diagnostics 专用 Agent/MCP 指令与查询返回。

3. 区分当前 Core 内存快照与持久查询结果。

   **待配图**：未录制两类 Tool 结果的对照，UI 记录列表不能代替。

4. 需要导出时单独审批导出操作，并完成原生保存窗口。

   **待配图**：上面已录 UI Export 的原生窗口，但没有 Agent/MCP 导出审批，不冒充 Tool 调用链。

**预期结果**：AI 获得必要的脱敏摘要，正式导出仍由用户选择文件。

**关键说明**：`diagnostics_get_trace` 和 `diagnostics_get_recent` 是当前 Core 快照，不是任意历史的完整查询；前者有当前 trace 与条数边界。具体名称见 [Tool 速查](tool-reference.md#diagnostics)。

<a id="limits"></a>
## 不要用 Diagnostics 推断这些事情

- 没有日志不能证明网络没有发生，需结合真实目标和客户端。
- 当前没有完整 HTTP/2 帧录制及所有 session/stream 与请求的精确关联；不能从普通请求日志重建全部 SETTINGS、RST_STREAM 或 GOAWAY。
- 记录不是自动按天数或条数淘汰；Capture Clear 也不是完整 Diagnostics 历史清理入口。
- 导出没有包含某个内部属性，不代表可以让 AI 从别处推测还原。
