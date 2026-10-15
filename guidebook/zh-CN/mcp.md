# MCP：连接外部 AI 客户端

> 草稿，面向 `v0.1.1-alpha.1`；已配本地 SDK、凭据轮换及两种端口冲突的真实步骤图，具体 Host 配置仍有缺口，不代表全章或 item9 完成。支持某版协议不等于所有 MCP 产品都能接入。

[教程目录](../README.md) · [Tool 权限](tool-permissions.md) · [Tool 速查](tool-reference.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## 逐步骤实操：真实产品录制

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。

> 调用方是官方SDK构建的本地演示Client，不是VS Code或云端Host兼容性演示。凭据未进入图文或视频，Copy后的配置只在本机测试内存中使用。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>clientName</code> | <code>Guide local client</code> |
| <code>endpoint</code> | <code>http://127.0.0.1:65443/mcp</code> |
| <code>endpointChanged</code> | <code>false</code> |
| <code>caller</code> | <code>official SDK local demonstration; not a VS Code or cloud-host compatibility claim</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/mcp/mcp.mp4" poster="../media/v0.1.1-alpha.1/mcp/mcp-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/mcp/mcp.vtt" default>
</video>

<a id="walkthrough-01-settings"></a>
### 01 · 打开 Settings

[视频 00:00](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=0.421) · [返回本节视频](#walkthrough-video)

![01 · 打开 Settings](../media/v0.1.1-alpha.1/mcp/mcp-01-settings.png)

<a id="walkthrough-02-mcp"></a>
### 02 · 找到 MCP Server

[视频 00:03](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=3.275) · [返回本节视频](#walkthrough-video)

![02 · 找到 MCP Server](../media/v0.1.1-alpha.1/mcp/mcp-02-mcp.png)

<a id="walkthrough-03-enable"></a>
### 03 · 开启本机 MCP Server

[视频 00:06](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=6.417) · [返回本节视频](#walkthrough-video)

![03 · 开启本机 MCP Server](../media/v0.1.1-alpha.1/mcp/mcp-03-enable.png)

<a id="walkthrough-04-add-client"></a>
### 04 · 添加独立 Client

[视频 00:09](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=9.327) · [返回本节视频](#walkthrough-video)

![04 · 添加独立 Client](../media/v0.1.1-alpha.1/mcp/mcp-04-add-client.png)

<a id="walkthrough-05-name"></a>
### 05 · 输入 Guide local client

[视频 00:12](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=12.266) · [返回本节视频](#walkthrough-video)

![05 · 输入 Guide local client](../media/v0.1.1-alpha.1/mcp/mcp-05-name.png)

<a id="walkthrough-06-create"></a>
### 06 · 创建 Client

[视频 00:15](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=15.117) · [返回本节视频](#walkthrough-video)

![06 · 创建 Client](../media/v0.1.1-alpha.1/mcp/mcp-06-create.png)

<a id="walkthrough-07-copy"></a>
### 07 · 复制配置，不展示凭据

[视频 00:18](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=18.067) · [返回本节视频](#walkthrough-video)

![07 · 复制配置，不展示凭据](../media/v0.1.1-alpha.1/mcp/mcp-07-copy.png)

<a id="walkthrough-08-query"></a>
### 08 · 演示客户端连接并查询

[视频 00:21](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=21.368) · [返回本节视频](#walkthrough-video)

![08 · 演示客户端连接并查询](../media/v0.1.1-alpha.1/mcp/mcp-08-query.png)

<a id="walkthrough-09-ask"></a>
### 09 · 发起需要审批的操作

[视频 00:24](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=24.367) · [返回本节视频](#walkthrough-video)

![09 · 发起需要审批的操作](../media/v0.1.1-alpha.1/mcp/mcp-09-ask.png)

<a id="walkthrough-10-deny"></a>
### 10 · 拒绝一次操作

[视频 00:27](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=27.278) · [返回本节视频](#walkthrough-video)

![10 · 拒绝一次操作](../media/v0.1.1-alpha.1/mcp/mcp-10-deny.png)

<a id="walkthrough-11-ask-again"></a>
### 11 · 再次请求并检查影响

[视频 00:30](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=30.168) · [返回本节视频](#walkthrough-video)

![11 · 再次请求并检查影响](../media/v0.1.1-alpha.1/mcp/mcp-11-ask-again.png)

<a id="walkthrough-12-allow"></a>
### 12 · 允许暂停录制

[视频 00:33](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=33.017) · [返回本节视频](#walkthrough-video)

![12 · 允许暂停录制](../media/v0.1.1-alpha.1/mcp/mcp-12-allow.png)

<a id="walkthrough-13-auto"></a>
### 13 · 查看 Client 的 Auto 模式

[视频 00:35](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=35.917) · [返回本节视频](#walkthrough-video)

![13 · 查看 Client 的 Auto 模式](../media/v0.1.1-alpha.1/mcp/mcp-13-auto.png)

<a id="walkthrough-14-ask-mode"></a>
### 14 · 恢复 Client 的 Ask

[视频 00:38](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=38.868) · [返回本节视频](#walkthrough-video)

![14 · 恢复 Client 的 Ask](../media/v0.1.1-alpha.1/mcp/mcp-14-ask-mode.png)

<a id="walkthrough-14a-regenerate-dialog"></a>
### 15 · 检查轮换凭据确认

[视频 00:41](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=41.716) · [返回本节视频](#walkthrough-video)

![15 · 检查轮换凭据确认](../media/v0.1.1-alpha.1/mcp/mcp-14a-regenerate-dialog.png)

<a id="walkthrough-14b-regenerate"></a>
### 16 · 轮换凭据并验证旧配置失效

[视频 00:44](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=44.618) · [返回本节视频](#walkthrough-video)

![16 · 轮换凭据并验证旧配置失效](../media/v0.1.1-alpha.1/mcp/mcp-14b-regenerate.png)

<a id="walkthrough-14c-update-client"></a>
### 17 · 复制新配置并重新连接

[视频 00:47](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=47.568) · [返回本节视频](#walkthrough-video)

![17 · 复制新配置并重新连接](../media/v0.1.1-alpha.1/mcp/mcp-14c-update-client.png)

<a id="walkthrough-15-revoke-dialog"></a>
### 18 · 查看撤销 Client 的确认

[视频 00:50](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=50.666) · [返回本节视频](#walkthrough-video)

![18 · 查看撤销 Client 的确认](../media/v0.1.1-alpha.1/mcp/mcp-15-revoke-dialog.png)

<a id="walkthrough-16-revoke"></a>
### 19 · 撤销演示 Client

[视频 00:53](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=53.568) · [返回本节视频](#walkthrough-video)

![19 · 撤销演示 Client](../media/v0.1.1-alpha.1/mcp/mcp-16-revoke.png)

<a id="walkthrough-17-disable"></a>
### 20 · 关闭 MCP Server

[视频 00:56](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=56.468) · [返回本节视频](#walkthrough-video)

![20 · 关闭 MCP Server](../media/v0.1.1-alpha.1/mcp/mcp-17-disable.png)

<a id="walkthrough-18-port-conflict"></a>
### 21 · 观察端口冲突提示

[视频 00:59](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=59.418) · [返回本节视频](#walkthrough-video)

![21 · 观察端口冲突提示](../media/v0.1.1-alpha.1/mcp/mcp-18-port-conflict.png)

<a id="walkthrough-19-release-port"></a>
### 22 · 结束已知占用后重试

[视频 01:02](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=62.368) · [返回本节视频](#walkthrough-video)

![22 · 结束已知占用后重试](../media/v0.1.1-alpha.1/mcp/mcp-19-release-port.png)

<a id="walkthrough-20-final-disable"></a>
### 23 · 结束演示并关闭 Server

[视频 01:05](../media/v0.1.1-alpha.1/mcp/mcp.mp4#t=65.319) · [返回本节视频](#walkthrough-video)

![23 · 结束演示并关闭 Server](../media/v0.1.1-alpha.1/mcp/mcp-20-final-disable.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:end -->

<a id="requirements"></a>
## 先确认接入条件

- Interceptor 必须在本机运行，MCP Server 已开启。
- Host 需要能够从这台机器连接 loopback Streamable HTTP endpoint。
- 支持的协议为 `2025-06-18`、`2025-11-25`、`2026-07-28`，由 Host 与 SDK 自动处理，不手动切版本。
- 不使用 `stdio` 或旧式 HTTP+SSE 的配置替代当前 HTTP endpoint。
- 外部 Host 负责自己的模型配置；不要求先给 Interceptor 内置 Agent 添加模型。

**重要限制**：从云端发起连接的远程 connector 不能访问你电脑的 `127.0.0.1`。例如不能因为某个云端产品支持 MCP，就把本机 endpoint 粘过去并期待可达。

<a id="server"></a>
## 开启服务并取得 endpoint

**步骤**

1. 打开 Settings。

   ![打开 Settings](../media/v0.1.1-alpha.1/mcp/mcp-01-settings.png)

2. 进入 Agent，找到 MCP Server 并阅读协议说明。

   ![MCP Server 开启前的实际入口](../media/v0.1.1-alpha.1/mcp/mcp-02-mcp.png)

3. 开启服务，等待 Running，再检查实际 endpoint。本段为 `http://127.0.0.1:65443/mcp`；`65443` 是录制时分配的端口，不是固定配置。核对 `127.0.0.1` 与 `/mcp`，不要使用 Capture 的 `8888`。

   ![实际开启的本机 MCP Server 与 endpoint](../media/v0.1.1-alpha.1/mcp/mcp-03-enable.png)

**预期结果**：首次开启选择一个空闲端口，正常后续启动使用保存的端口。

**关键说明**：服务不会对局域网或公网监听；App 关闭后也不留下独立后台 MCP 服务。

<a id="client"></a>
## 为一个 Host 创建独立客户端

**步骤**

本次调用方是官方 SDK 的本地演示客户端，不是 VS Code、Claude 或云端 Host。Client 名称也明确为 `Guide local client`。

1. 在客户端管理区点击添加 Client。

   ![实际添加 Client 的入口](../media/v0.1.1-alpha.1/mcp/mcp-04-add-client.png)

2. 名称填 `Guide local client`。

   ![输入本次实际 Client 名称](../media/v0.1.1-alpha.1/mcp/mcp-05-name.png)

3. 创建 Client，初次保持 Ask。

   ![创建后的独立 Client](../media/v0.1.1-alpha.1/mcp/mcp-06-create.png)

4. 使用复制配置动作，把连接片段放入系统剪贴板，不公开其中的认证信息。

   ![实际复制配置，画面不展示凭据](../media/v0.1.1-alpha.1/mcp/mcp-07-copy.png)

5. 在实际 Host 的用户级 MCP 配置中，按其格式添加 HTTP Server，使用复制的 endpoint 与认证字段。

   **待配图 / blocked**：本地 SDK 演示没有商业 Host 的设置页面，不能把 App 的复制成功当作 Host 配置成功。

6. 让调用方连接、发现 Tool，再做只读代理状态查询。本图是本次 SDK 客户端的实际检查点；真实 Host 的发现界面仍待配图。

   ![本地 SDK 客户端连接并查询的实际结果](../media/v0.1.1-alpha.1/mcp/mcp-08-query.png)

**预期结果**：Host 可以使用被允许的 Tool，每个 Host 使用自己的 Client 凭据。

**关键说明**

- 复制的是通用连接片段，外层配置格式与保存入口由具体 Host 决定，不把它当作所有 Host 的整份配置文件。
- 配置包含凭据，只放在 Host 的用户级安全配置；不要提交到项目、粘进聊天、公开截图或加入 Settings Sync。
- App 不向普通 Renderer 暴露凭据内容，复制成功与认证成功仍是两个步骤。
- 两个独立 Host 不应共用同一 Client 身份和凭据。

<a id="approval"></a>
## 从 Host 请求一个修改操作

1. 在 Settings 的 MCP 列开启该 Tool，不用 Agent 列代替。

   **待配图**：权限章节演示的是 `capture_clear` 两列开关，本次暂停使用 `capture_stop_recording`，该行启用操作没有单独录制。

2. 用 `Guide local client` 请求暂停新流量录制，Ask 下回到 App 检查调用方、Tool、参数和影响。这里仍是 SDK 调用方，不是商业 Host 的对话截图。

   ![实际外部 Pause 调用的 Ask 审批](../media/v0.1.1-alpha.1/mcp/mcp-09-ask.png)

3. 第一次选择 Deny。

   ![真实拒绝的调用结果](../media/v0.1.1-alpha.1/mcp/mcp-10-deny.png)

4. 再次请求，重新检查本次审批，不复用旧决定。

   ![第二次调用的独立审批](../media/v0.1.1-alpha.1/mcp/mcp-11-ask-again.png)

5. 选择 Allow，核对调用结果与产品 Recording 状态。

   ![MCP 允许后实际暂停录制](../media/v0.1.1-alpha.1/mcp/mcp-12-allow.png)

6. 其他操作如有原生文件窗口或系统授权，仍要完成后再判断成功。

   **待配图**：本次暂停不需要这些窗口，不能拿手工 Export 或其他平台窗口当作 MCP 审批后续。

**预期结果**：外部请求与 App 的权限和真实状态一致，不因 Host 自己说“已授权”就跳过 App 的控制。

**关键说明**：Host 可能还有自己的审批，和 Interceptor 审批是两层不同控制。Auto 只省略 App 对已启用 change Tool 的逐次审批，不省略文件选择和 UAC。

<a id="endpoint"></a>
## endpoint 冲突或需要更换

**步骤**

两条路径分开阅读：下面 1–4 是运行期手动 Enable 的错误/重试，5–11 是另一次正常重启后的保存端口冲突。不同端口属于不同录制环境，不要求读者制造冲突。

1. 手动 Enable 失败时，检查是否明确报告 `EADDRINUSE`，服务保持关闭。

   ![运行期 EADDRINUSE，不是 endpoint-conflict](../media/v0.1.1-alpha.1/mcp/mcp-18-port-conflict.png)

2. 核对占用者是旧 App 还是自己管理的已知服务，不盲目结束未知进程。

   **待配图**：录制使用已知自有占用进程，没有单独展示操作系统定位占用者的窗口。

3. 结束确认属于自己的占用后重试 Enable，不要求换 endpoint。图中是释放端口后的 App 重试结果，终止占用程序本身仍待配图。

   ![释放已知占用后成功重试](../media/v0.1.1-alpha.1/mcp/mcp-19-release-port.png)

4. 本轮验证结束关闭演示 Server。

   ![结束运行期重试演示](../media/v0.1.1-alpha.1/mcp/mcp-20-final-disable.png)

5. 另一条路径的前提是 MCP 上次保存为开启，正常重启时保存端口被自己的演示进程占用；重启后打开 Settings。

   ![正常重启后的 MCP 设置入口](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-01-settings.png)

6. 检查 `endpoint-conflict`。这次旧地址为 `http://127.0.0.1:49659/mcp`，不是前一段的 `65443`。

   ![保存端口冲突的独立状态](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-02-conflict.png)

7. 确需换地址时明确点击更换 endpoint。

   ![用户明确更换 endpoint](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-03-change.png)

8. 核对新地址，本次为 `http://127.0.0.1:49835/mcp`。`49659`、`49835` 都只是本次录制分配值。

   ![核对需要更新到 Host 的新地址](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-04-note-new-address.png)

9. 重新复制各 Host 的有效配置并更新 Host。

   **待配图 / blocked**：更换 endpoint 后没有真实 Host 配置更新画面；凭据轮换时的复制图属于另一操作。

10. Host 重新连接后，再做一次只读查询。

    **待配图**：此重启片段未录新 endpoint 上的 Host 查询，旧地址的成功查询不能替代。

11. 演示结束关闭本轮 Server。

    ![关闭 endpoint 更换演示的 Server](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-05-disable.png)

**预期结果**：地址变化是明确动作，不在后台悄悄换端口让所有旧配置失效。

**关键说明**：正常关闭、开启或重启不应要求每次重新创建 Client；但主动更换 endpoint 后，旧地址仍需手动更新。

**该版本的实际分支**：如果在页面中手动开启一个被占用的端口，App保持关闭并显示`EADDRINUSE`；结束明确属于自己的占用程序后可以重试。若上次保存为开启，App重启时发现原端口被占用，才会显示`endpoint-conflict`及更换入口。两种实录分别见[运行期错误与重试](#walkthrough-video)和[重启恢复](#walkthrough-mcp-endpoint-video)，不把其中一个画面套用到另一种情况。

<a id="credentials"></a>
## 轮换凭据、撤销客户端和关闭服务

**步骤**

1. 某个 Client 配置可能泄露时，打开重新生成凭据的确认框。本次目标是 `Guide local client`。

   ![轮换该 Client 的真实确认](../media/v0.1.1-alpha.1/mcp/mcp-14a-regenerate-dialog.png)

2. 确认轮换，旧凭据失效；不在教程中公开新旧凭据。

   ![实际轮换后的检查点](../media/v0.1.1-alpha.1/mcp/mcp-14b-regenerate.png)

3. 复制新配置，更新调用方再连接。本图覆盖同一个本地 SDK 客户端的重连；商业 Host 设置页面仍待配图。

   ![复制新配置并重新连接](../media/v0.1.1-alpha.1/mcp/mcp-14c-update-client.png)

4. 不再需要时打开撤销 Client 的确认框，核对名称。

   ![撤销 Guide local client 的确认](../media/v0.1.1-alpha.1/mcp/mcp-15-revoke-dialog.png)

5. 确认撤销，检查身份不可再用。在途长调用的取消过程没有独立录制，仍待配图。

   ![实际撤销演示 Client](../media/v0.1.1-alpha.1/mcp/mcp-16-revoke.png)

6. 不再需要任何调用方时关闭 MCP Server。

   ![实际关闭 MCP Server](../media/v0.1.1-alpha.1/mcp/mcp-17-disable.png)

7. 正常退出 App 时等待服务及在途操作收尾。

   **待配图**：关闭 Server 与退出 App 是不同操作，本段没有退出及进程收尾图。

**预期结果**：轮换使旧凭据失效；撤销只针对目标 Client；关闭 Server 停止全部 MCP 接入。

**关键说明**：取消连接或撤权不是撤销已经完成的文件保存、请求发送或配置写入。发生竞态时先查询真实业务状态，避免重放有副作用的请求。

<a id="browser"></a>
## Browser Host 与兼容性排查

1. 确认 Browser 中的客户端在你自己的设备上运行，而不是由远端服务器代理连接。

   **待配图 / blocked**：本次使用本地 SDK，不是 Browser Host，缺对应部署与可达性检查。

2. 使用自己明确授权的页面，并按要求提供 Client 凭据。

   **待配图 / blocked**：没有实际 Browser Host 安全配置页面；不公开凭据凑图。

3. 如果工具列表为空，检查 Server、Client 身份、协议支持和 MCP 列权限。

   **待配图**：未录制真实 Browser Host 的空发现列表与排查往返。

4. 查询成功但修改停住时，检查 App 审批、原生窗口和目标业务的前提。

   **待配图**：SDK 的 Ask 图只证明 App 审批；该 Browser Host 的停住场景及原生窗口未录制。

5. 升级 Host 后重新核对连接和一项实际操作，不只看“Server 已登记”。

   **待配图 / blocked**：没有具体 Host 升级前后操作，不能扩展成本机 SDK 之外的兼容性通过。

**预期结果**：把网络、认证、协议、Tool 权限和业务失败分开判断。

**关键说明**

- 允许 Browser 跨 Origin 访问不意味着匿名调用，实际请求仍需有效认证。
- Tool 查询结果可能包含调试数据，不要把 Client 凭据交给任意第三方网页。
- 本教程不要求使用内部 Playground，也不把官方 SDK 客户端测试冒充真实 VS Code、Claude 或其他 Host 的全部兼容性。
- 当前部分真实 Host 的代表调用已有记录，不代表全部 Tool、双 Host 并发或所有版本均已逐项验收。

<!-- recorded-walkthrough:mcp-endpoint:start -->
<a id="walkthrough-mcp-endpoint"></a>
## 逐步骤实操：重启后的 endpoint 冲突恢复

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。

> 调用方是官方SDK构建的本地演示Client，不是VS Code或云端Host兼容性演示。凭据未进入图文或视频，Copy后的配置只在本机测试内存中使用。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>oldEndpoint</code> | <code>http://127.0.0.1:49659/mcp</code> |
| <code>newEndpoint</code> | <code>http://127.0.0.1:49835/mcp</code> |
| <code>prerequisite</code> | <code>MCP was enabled before normal App restart; its saved port was occupied by an owned demo process</code> |

<a id="walkthrough-mcp-endpoint-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint.mp4" poster="../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint.vtt" default>
</video>

<a id="walkthrough-mcp-endpoint-01-settings"></a>
### 01 · 重启后打开 Settings

[视频 00:00](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint.mp4#t=0.414) · [返回本节视频](#walkthrough-mcp-endpoint-video)

![01 · 重启后打开 Settings](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-01-settings.png)

<a id="walkthrough-mcp-endpoint-02-conflict"></a>
### 02 · 检查已保存 endpoint 冲突

[视频 00:03](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint.mp4#t=3.262) · [返回本节视频](#walkthrough-mcp-endpoint-video)

![02 · 检查已保存 endpoint 冲突](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-02-conflict.png)

<a id="walkthrough-mcp-endpoint-03-change"></a>
### 03 · 显式更换 endpoint

[视频 00:06](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint.mp4#t=6.461) · [返回本节视频](#walkthrough-mcp-endpoint-video)

![03 · 显式更换 endpoint](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-03-change.png)

<a id="walkthrough-mcp-endpoint-04-note-new-address"></a>
### 04 · 核对需要更新的地址

[视频 00:09](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint.mp4#t=9.360) · [返回本节视频](#walkthrough-mcp-endpoint-video)

![04 · 核对需要更新的地址](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-04-note-new-address.png)

<a id="walkthrough-mcp-endpoint-05-disable"></a>
### 05 · 关闭演示 Server

[视频 00:12](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint.mp4#t=12.261) · [返回本节视频](#walkthrough-mcp-endpoint-video)

![05 · 关闭演示 Server](../media/v0.1.1-alpha.1/mcp-endpoint/mcp-endpoint-05-disable.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:mcp-endpoint:end -->
