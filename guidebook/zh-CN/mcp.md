# MCP：连接外部 AI 客户端

> 中文初稿，面向 `v0.1.1-alpha.1`；待具体 Host 版本的操作截图与逐步试读。支持某版协议不等于所有标注“支持 MCP”的产品都能接入。

[教程目录](../README.md) · [Tool 权限](tool-permissions.md) · [Tool 速查](tool-reference.md)

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

1. 打开 Settings > Agent > MCP Server。
2. 阅读协议说明并开启服务。
3. 等待 Running，查看实际分配的 endpoint。
4. 确认地址属于本机 `127.0.0.1` 和 `/mcp`，不要把 Capture 的 `8888` 当作 MCP 地址。

**预期结果**：首次开启选择一个空闲端口，正常后续启动使用保存的端口。

**关键说明**：服务不会对局域网或公网监听；App 关闭后也不留下独立后台 MCP 服务。

<a id="client"></a>
## 为一个 Host 创建独立客户端

**步骤**

1. 在 MCP 客户端管理区添加 Client，用清楚的名称标识实际 Host。
2. 初次连接先保留 Ask。
3. 使用复制配置动作，把该 Client 的连接片段写到系统剪贴板。
4. 在 Host 的用户级 MCP 配置中添加 HTTP Server，按 Host 所需格式使用复制片段中的 endpoint 和认证信息。
5. 让 Host 连接并发现 Tool。
6. 先请求一项只读状态，例如查询代理状态；在 App 中核对没有发生不必要的修改。

**预期结果**：Host 可以使用被允许的 Tool，每个 Host 使用自己的 Client 凭据。

**关键说明**

- 复制的是通用连接片段，外层配置格式与保存入口由具体 Host 决定，不把它当作所有 Host 的整份配置文件。
- 配置包含凭据，只放在 Host 的用户级安全配置；不要提交到项目、粘进聊天、公开截图或加入 Settings Sync。
- App 不向普通 Renderer 暴露凭据内容，复制成功与认证成功仍是两个步骤。
- 两个独立 Host 不应共用同一 Client 身份和凭据。

<a id="approval"></a>
## 从 Host 请求一个修改操作

1. 在 Settings 的 MCP 列开启该 Tool，不用 Agent 列代替。
2. 在 Host 发起一个范围清楚的测试动作。
3. 当 Client 处于 Ask 时，切回 App 阅读调用方、Tool、参数和影响。
4. 选择 Allow 或 Deny；Allow 后完成必要的原生窗口或系统授权。
5. 在 Host 结果和对应产品工作区分别检查结果。

**预期结果**：外部请求与 App 的权限和真实状态一致，不因 Host 自己说“已授权”就跳过 App 的控制。

**关键说明**：Host 可能还有自己的审批，和 Interceptor 审批是两层不同控制。Auto 只省略 App 对已启用 change Tool 的逐次审批，不省略文件选择和 UAC。

<a id="endpoint"></a>
## endpoint 冲突或需要更换

**步骤**

1. 服务无法启动时先看是否明确报告端口冲突。
2. 核对是否另有旧 App 实例或其他已知服务占用，不盲目结束不明进程。
3. 确需换地址时使用独立的更换 endpoint 动作。
4. 重新复制各 Host 的有效连接配置并更新 Host。
5. 重新连接后再做一次只读查询。

**预期结果**：地址变化是明确动作，不在后台悄悄换端口让所有旧配置失效。

**关键说明**：正常关闭、开启或重启不应要求每次重新创建 Client；但主动更换 endpoint 后，旧地址仍需手动更新。

<a id="credentials"></a>
## 轮换凭据、撤销客户端和关闭服务

**步骤**

1. 某个 Client 的配置可能泄露时，使用重新生成凭据。
2. 到该 Host 更新复制配置，重新连接；旧凭据不应继续使用。
3. 不再信任某个 Host 时撤销它的 Client，检查在途调用已停止。
4. 暂时不需要任何 Host 时关闭 MCP Server。
5. 正常退出 App 时等待服务及在途操作收尾。

**预期结果**：轮换使旧凭据失效；撤销只针对目标 Client；关闭 Server 停止全部 MCP 接入。

**关键说明**：取消连接或撤权不是撤销已经完成的文件保存、请求发送或配置写入。发生竞态时先查询真实业务状态，避免重放有副作用的请求。

<a id="browser"></a>
## Browser Host 与兼容性排查

1. 确认 Browser 中的客户端在你自己的设备上运行，而不是由远端服务器代理连接。
2. 使用自己明确授权的页面，并按要求提供 Client 凭据。
3. 如果工具列表为空，检查 Server、Client 身份、协议支持和 MCP 列权限。
4. 查询成功但修改停住时，检查 App 审批、原生窗口和目标业务的前提。
5. 升级 Host 后重新核对连接和一项实际操作，不只看“Server 已登记”。

**预期结果**：把网络、认证、协议、Tool 权限和业务失败分开判断。

**关键说明**

- 允许 Browser 跨 Origin 访问不意味着匿名调用，实际请求仍需有效认证。
- Tool 查询结果可能包含调试数据，不要把 Client 凭据交给任意第三方网页。
- 本教程不要求使用内部 Playground，也不把官方 SDK 客户端测试冒充真实 VS Code、Claude 或其他 Host 的全部兼容性。
- 当前部分真实 Host 的代表调用已有记录，不代表全部 Tool、双 Host 并发或所有版本均已逐项验收。
