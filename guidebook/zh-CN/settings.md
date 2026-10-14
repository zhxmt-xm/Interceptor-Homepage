# Settings：代理、证书、存储和更新

> 中文初稿，面向 `v0.1.1-alpha.1`；待各平台实际安装产物的逐步核对、截图和视频。涉及原生授权的步骤须由有权限的用户完成，不能用测试或 macOS 结果代替 Windows 验收。

[教程目录](../README.md) · [快速上手](getting-started.md)

## 先找到对应设置

从侧栏进入 Settings。System proxy、Upstream proxy、App containers、TLS passthrough、Certificates、Appearance、Storage、Privacy、Agent、Updates 各自解决不同问题。

离开再返回会保留最后访问的分组；从代理就绪、TLS 提示或 Agent 配置入口跳转时，会定位到相应分组。

<a id="system-proxy"></a>
## 接管与恢复系统代理

**用途**：让遵循系统代理的应用把请求交给 Interceptor。

**步骤**

1. 检查 System proxy 当前状态和本地监听地址。
2. 需要接管时使用 Enable，完成实际的系统授权，等待状态确认。
3. 让目标应用发一条测试请求，检查 Capture。
4. 不再需要系统接管时使用 Restore，或正常关闭 App，由退出流程处理恢复。

**预期结果**：系统代理的接管和恢复是明确的操作，不用 Recording 的状态代替判断。

**关键说明**

- Windows 主要接管 WinINet。WinHTTP、自带网络栈、Java、curl、容器或 WSL 不保证自动跟随。
- 客户端仍显式连接 `127.0.0.1:8888` 时，即使 Restore 了系统代理，它也可能继续经过监听器。
- 启用、恢复与原生授权正在进行时，不要反复点击或强制结束；冲突应按提示处理。
- App 不应覆盖另一软件在会话期间新写入的系统配置；已有代理环境见下一节。

<a id="upstream"></a>
## 选择上游代理

**用途**：请求先经过 Interceptor，再按你选择的出口访问目标。它与客户端是否接入 Interceptor 是两个方向。

| 模式 | 含义 | 需要准备 |
| --- | --- | --- |
| System | 沿用 Interceptor 接管前的系统生效代理 | 已正确配置的原系统代理或自动配置 |
| Direct | Interceptor 直接连接目标 | 目标直接可达 |
| Manual | 明确指定另一个上游代理 | 协议、Host、端口 |
| PAC | 按 PAC 脚本为请求选择路线 | 可访问的 HTTP/HTTPS PAC URL |
| WPAD | 从当前网络发现 PAC | 网络实际提供所需的自动发现配置 |

**步骤**

1. 打开 Upstream proxy，也可以从 Capture 右下角的快捷入口进入。
2. 选择模式，填写该模式要求的字段。
3. Manual 的 Host 只填主机，不带协议、路径或凭据；端口使用有效端口号。
4. PAC 使用明确的 HTTP/HTTPS 地址，不填本地文件路径或内嵌凭据的 URL。
5. 点击 Apply，等待成功后查看 Current route。
6. 发出新的测试请求，检查客户端结果与实际目标；长连接需按需要重新建立。
7. 不想应用草稿时使用 Cancel/Discard；切到 Open in Settings 可以继续检查同一份草稿。

**预期结果**：Apply 成功后改变后续请求的路线；失败时显示错误并保留之前已生效配置，而不是偷偷转成 Direct。

**关键说明**

- 选择 Direct 不等于停止 Capture，也不等于恢复操作系统代理。
- System 不能把 Interceptor 自己的 `8888` 当作原上游，否则会形成循环。
- 不要把 Manual 指向当前 Interceptor listener；另一个合法本地代理可以使用自己的端口。
- PAC/WPAD 可能对不同请求选择不同出口，不能只靠一个固定地址概括全部路线。
- WPAD 需要真实网络前提；不要为了读教程修改办公网络的 DHCP 或 DNS。发现失败先联系网络管理者。
- macOS 与 Windows 的网络发现、系统快照和授权不同，不以另一平台成功推断本机一定可用。
- 产品没有独立的上游账号/密码设置，不能把凭据拼进不接受它们的字段。

<a id="https-decryption"></a>
## 准备 CA 并启用 HTTPS 解密

**用途**：检查你有权调试的 HTTPS 请求头和正文，而不只是 TLS 隧道。

**步骤**

1. 打开 Certificates，检查 CA 是否存在、当前身份以及是否受信任。
2. App 首次准备通常会处理缺失的共享 CA；若需要手动操作，用产品提供的生成入口，而不是自己覆盖证书文件。
3. 未受信任时使用 Install/信任操作，阅读并完成真实系统授权。
4. 确认产品报告受信任，再开启 HTTPS decryption。
5. 让客户端建立一条新的 HTTPS 连接，在 Capture 中检查 HTTP 详情。

**预期结果**：只有 CA 可用、已信任且解密开启时，普通可代理 HTTPS 连接才按解密路径处理。

**关键说明**

- macOS 可能请求 helper、钥匙串或系统信任授权；Windows 使用对应的管理员授权。系统提示不是 GitHub 登录。
- CA 影响系统信任，不只是 App 内的一张图片；先确认来源和用途。
- 同一系统用户的不同 App 数据环境会复用共享 CA。正常退出或删除某份 profile 不表示 CA 已经删除。
- 证书固定、独立信任库或 TLS passthrough 可以阻止普通 MITM 解密；不建议为了看正文关闭全局证书验证。
- 关闭解密仅停止解密，不自动卸载 CA 信任。

<a id="certificate-lifecycle"></a>
## 查看、移除信任与删除 CA

**步骤**

1. 用 View 查看当前公开证书，按平台提供的方式核对身份；Reveal 用于定位相关材料。
2. 需要查看系统信任管理时，使用产品提供的系统证书管理入口，并遵守平台权限。
3. 不再信任该 CA 时，用 Uninstall 撤销信任。
4. 确实不再需要材料时，再使用 Delete；若仍有信任，按产品流程先撤销。
5. 需要重新生成时，先核对当前 CA 与所有仍在使用它的测试客户端，再按产品提示处理。

**预期结果**：查看、撤销信任、删除材料是可区分的操作。

**关键说明**

- Uninstall 保留 CA 材料，Delete 才删除；受信任时不能直接重新生成覆盖。
- 重新生成会改变证书身份，独立客户端的旧信任可能失效。
- 不为复现教程删除日常 CA，不复制私钥到工单或其他机器。
- Windows 管理员 MMC 专项仍有独立验收边界，不能把存在入口当作每个平台原生窗口均已验收。

<a id="tls-passthrough"></a>
## 对特定主机保持 TLS 透传

**用途**：让不适合解密的目标继续使用原始加密连接。

**步骤**

1. 打开 TLS passthrough，检查已有条目。
2. 添加需要透传的精确主机；只有确有需要时才扩大到受控的父域 wildcard。
3. 保存后让客户端重新连接。
4. 在 Capture 核对 TLS tunnel，而不是期待看到解密后的正文。
5. 不再需要时删除对应条目并保存，再用新连接验证。

**预期结果**：新连接按名单透传，在途连接不会被强制转换为另一种模式。

**关键说明**

- 精确主机与通配域名范围不同，默认选择最小范围。
- TLS 兼容性提示中的 Not now 不保存配置；勾选和保存才表示明确决定。
- 遇到多个失败主机时逐项检查，不把全部加入广泛通配名单作为默认修复。
- 从隧道跳转到 Settings 时，可以查看 App 定位的最具体匹配条目。

<a id="insecure-hosts"></a>
## 区分源站证书例外

**用途**：在受控测试环境里排查目标服务自身的证书问题，而不是处理客户端是否信任 Interceptor CA。

1. 先确认错误来自源站证书，核对域名、有效期和你管理的信任链。
2. 优先修复测试服务证书；仅在有明确授权的测试条件下，进入 Certificates 的 Per-host overrides，输入必要的精确主机并点击添加。
3. 使用新请求验证结果；结束后通过对应主机条目的移除按钮撤销不再需要的例外。

**预期结果**：例外只作用于明确目标，不改变其他主机的校验策略。

**关键说明**：源站证书例外与 TLS passthrough 不同，不能互换。前者可能仍解密但放宽源站校验，后者保持加密透传。不要对不明来源的真实业务使用全局绕过。

<a id="app-containers"></a>
## Windows AppContainer 的本地代理访问

**前提**：仅 Windows；目标应用确实受 AppContainer 网络隔离影响，且你有权修改相关系统设置。

**步骤**

1. 打开 App containers，搜索目标应用。
2. 检查其 loopback access 是否启用，按需要使用单项开关并完成 UAC。
3. 让该应用重新发起请求，检查是否到达本地代理。
4. 确实需要批量修改时使用 Enable all 或 Disable all，阅读目标数量、范围和后果后确认。
5. 结束后撤销不再需要的例外，并核对系统实际状态。

**预期结果**：目标应用获准或被撤销访问本机 loopback 的例外；启用项稳定显示在列表前面。

**关键说明**：AppContainer 放行不能解决证书固定；TLS passthrough 也不能解决应用根本无法连接本地代理。批量操作只针对当前枚举目标，不等于任意修改所有系统网络隔离状态。macOS 不提供同一 Windows 功能。

<a id="appearance"></a>
## 语言和主题

通过 Appearance 或侧栏对应入口选择当前 App 提供的语言、主题，并核对保存状态。四个主题值为 `warm`、`light`、`ember`、`dark`；不添加不存在的 App System 主题。

切换只改变界面偏好，不翻译捕获内容、URL 或协议值；完整步骤见[工作区](workspace.md#appearance)。

<a id="storage"></a>
## 查看用量并清理 Capture

**步骤**

1. 打开 Storage，使用右上角 Refresh 获取当前数据。
2. 查看 Captured body data，以及 Session、Exchange 和 Body 数量。
3. 先导出要保留的记录。
4. 使用 Clear capture，阅读确认；取消不会删除记录。
5. 确认后核对 Capture 列表和详情清空，Recording 状态仍符合预期。

**预期结果**：与 Capture 的 Clear 清理同一份临时数据，不删除已导出的文件。

**关键说明**：正文用量不是进程 RSS，也不是整个硬盘使用量。这里没有自动保留天数或配额设置；Refresh 不是后台持续轮询。文件任务未结束时清理可能被拒绝。

<a id="privacy"></a>
## 设置后续导出的隐私默认值

1. 打开 Privacy。
2. 分别配置 Authorization 遮罩、Cookie 遮罩和未遮罩导出的警告。
3. 新开一次 HAR 导出，检查默认选项是否符合预期。
4. 分享前继续检查 URL、正文及自定义敏感字段。

**预期结果**：改变之后新开的导出草稿默认值，不修改已经打开的草稿、正在运行的任务或既有文件。

**关键说明**：原生归档仍按完整数据处理。默认遮罩不是全数据匿名化，详见[导出隐私](transfer.md#privacy)。

<a id="agent-mcp"></a>
## 模型、Tool 和 MCP

- 在 Settings > Agent 添加和测试模型，详见 [Agent](agent.md#models)。
- Tool capabilities 的 Agent/MCP 两列分别配置，详见[权限与审批](tool-permissions.md)。
- MCP Server 的开启、客户端和 endpoint 见 [MCP](mcp.md)。

配置模型不自动开启 MCP，开启 MCP 也不要求为内置 Agent 配置模型；外部 Host 使用自己的模型配置。

<a id="updates"></a>
## 检查、下载并打开更新

**前提**：实际打包的 Windows/macOS App。源码开发运行可能显示不支持更新。

**步骤**

1. 打开 Updates，查看当前版本和检查状态。
2. 点击 Check；失败时先检查网络和发布源，不把失败理解成“已经是最新版”。
3. 有可用版本时阅读说明，明确点击 Download。
4. 等待下载及完整性校验完成，再点击 Open installer。
5. 在真实系统安装流程中完成必要操作；不要在文件尚未下载完成时自行运行临时文件。

**预期结果**：检查、下载、打开安装器是三个不同阶段，不会因为发现更新就自动开始下载。

**关键说明**

- 更新匿名访问固定 GitHub 来源，不使用 VS Code 登录，也没有让用户输入 GitHub PAT 的 App 页面。
- 当前私有发布源或没有可用稳定版本时，匿名检查可能失败；已发布 Alpha 不等于内置更新可获取。
- 内置更新只接受对应平台、架构和受支持的安装格式；macOS ZIP-only 分发不等于支持内置更新。
- 通知中的 Download/Open installer 与 Settings 对应同一状态，Dismiss 只是收起通知。
- 退出会收尾正在进行的检查或下载，不以打开旧临时文件跳过产品校验。
