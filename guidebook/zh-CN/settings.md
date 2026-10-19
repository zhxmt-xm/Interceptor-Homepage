# Settings：代理、证书、存储和更新

> 草稿，面向 `v0.1.1-alpha.1`；已配只读检查、安全草稿及已录操作，授权和平台缺口逐步标注，不代表全章或 item9 完成。原生授权须由有权限的用户完成，macOS 或测试结果不能替代 Windows 验收。

[教程目录](../README.md) · [快速上手](getting-started.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## 逐步骤实操：真实产品录制

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

> 本段展示已有CA、设置入口和可放弃的草稿。Manual和PAC示例没有Apply；实操不证明这些示例地址可用，也没有重新生成或卸载日常CA。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>manualHost</code> | <code>127.0.0.1</code> |
| <code>manualPort</code> | <code>7890</code> |
| <code>pacUrl</code> | <code>https://proxy.example.test/proxy.pac</code> |
| <code>exampleApplied</code> | <code>false</code> |

<a id="walkthrough-01-open"></a>
### 01 · 打开 Settings

![01 · 打开 Settings](../media/v0.1.1-alpha.1/settings/settings-01-open.png)

<a id="walkthrough-02-certificates"></a>
### 02 · 检查当前 CA 与信任

![02 · 检查当前 CA 与信任](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

<a id="walkthrough-03-proxy"></a>
### 03 · 检查 System proxy

![03 · 检查 System proxy](../media/v0.1.1-alpha.1/settings/settings-03-proxy.png)

<a id="walkthrough-04-upstream"></a>
### 04 · 查看当前上游路线

![04 · 查看当前上游路线](../media/v0.1.1-alpha.1/settings/settings-04-upstream.png)

<a id="walkthrough-05-manual-draft"></a>
### 05 · 选择 Manual 草稿

![05 · 选择 Manual 草稿](../media/v0.1.1-alpha.1/settings/settings-05-manual-draft.png)

<a id="walkthrough-06-discard"></a>
### 06 · Discard 不应用示例草稿

![06 · Discard 不应用示例草稿](../media/v0.1.1-alpha.1/settings/settings-06-discard.png)

<a id="walkthrough-07-pac"></a>
### 07 · 查看 PAC 输入

![07 · 查看 PAC 输入](../media/v0.1.1-alpha.1/settings/settings-07-pac.png)

<a id="walkthrough-08-discard-pac"></a>
### 08 · 放弃未运行的 PAC 示例

![08 · 放弃未运行的 PAC 示例](../media/v0.1.1-alpha.1/settings/settings-08-discard-pac.png)

<a id="walkthrough-09-passthrough"></a>
### 09 · 打开 TLS passthrough

![09 · 打开 TLS passthrough](../media/v0.1.1-alpha.1/settings/settings-09-passthrough.png)

<a id="walkthrough-10-privacy"></a>
### 10 · 检查导出隐私默认值

![10 · 检查导出隐私默认值](../media/v0.1.1-alpha.1/settings/settings-10-privacy.png)

<a id="walkthrough-11-storage"></a>
### 11 · 查看临时存储

![11 · 查看临时存储](../media/v0.1.1-alpha.1/settings/settings-11-storage.png)

<a id="walkthrough-12-refresh"></a>
### 12 · 刷新用量

![12 · 刷新用量](../media/v0.1.1-alpha.1/settings/settings-12-refresh.png)

<a id="walkthrough-13-clear-confirm"></a>
### 13 · 查看清理确认

![13 · 查看清理确认](../media/v0.1.1-alpha.1/settings/settings-13-clear-confirm.png)

<a id="walkthrough-14-cancel"></a>
### 14 · 取消清理

![14 · 取消清理](../media/v0.1.1-alpha.1/settings/settings-14-cancel.png)

<a id="walkthrough-15-updates"></a>
### 15 · 查看版本与更新状态

![15 · 查看版本与更新状态](../media/v0.1.1-alpha.1/settings/settings-15-updates.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:end -->

## 先找到对应设置

从侧栏进入 Settings。System proxy、Upstream proxy、App containers、TLS passthrough、Certificates、Appearance、Storage、Privacy、Agent、Updates 各自解决不同问题。

离开再返回会保留最后访问的分组；从代理就绪、TLS 提示或 Agent 配置入口跳转时，会定位到相应分组。

<a id="system-proxy"></a>
## 接管与恢复系统代理

**用途**：让遵循系统代理的应用把请求交给 Interceptor。

**步骤**

本段使用 `settings-proxy-routing`，录制机器已经有获授权的 helper。它展示实际 Restore/Enable，不是首次 helper 安装或系统授权；调用方是明确配置代理的本地演示客户端。

1. 检查当前系统代理已由 Interceptor 接管，监听地址为 `127.0.0.1:8888`。

   ![实际系统代理接管状态](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-01-owned.png)

2. 点击 Restore，恢复本轮接管前的系统路由。

   ![实际 Restore 系统代理](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-02-restore.png)

3. 核对监听器仍在运行。演示客户端显式通过 `http://127.0.0.1:8888` 访问 `http://127.0.0.1:59429/guide/system-proxy/explicit-client`；`59429` 是本次源站动态端口，不是代理端口。Restore 不等于关闭监听器，这个请求也不证明某个应用自动跟随系统代理。

   ![Restore 后实际仍运行的监听器检查点](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-03-listener.png)

4. 通过 Settings 再次 Enable，等待系统接管状态确认。本次复用已有授权 helper，没有首次授权弹窗。

   ![已有授权 helper 下的实际 Enable](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-04-enable.png)

5. 返回 Capture，确认 Recording 当前开启；系统接管状态与录制状态分别检查。

   ![实际返回 Capture 检查 Recording](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-05-recording.png)

6. 暂停 Recording。

   ![实际暂停新流量录制](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-06-pause.png)

7. 返回 System proxy，确认仍由 Interceptor 接管：Pause 没有执行 Restore。

   ![暂停 Recording 后实际仍接管系统代理](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-07-still-owned.png)

8. 结束本轮演示前，再 Restore 原系统路由；不要把关闭录制当作恢复代理。

   ![本轮结束前实际 Restore](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-08-final-restore.png)

9. 首次使用或 helper 尚未获授权时，仍须阅读并完成真实系统授权后再判断 Enable 成功。

   **待配图 / blocked**：此录制没有首次 helper、macOS 系统授权或 Windows UAC 的操作，已有授权下成功不能替代。

10. 要确认某个目标应用自动遵循系统代理，必须使用该应用自身发请求并检查 Capture。

    **待配图**：本例是显式代理客户端，不包含外部应用自动遵循系统代理的验证。

**预期结果**：系统代理的接管和恢复是明确的操作，不用 Recording 的状态代替判断。

**关键说明**

- Windows 主要接管 WinINet。WinHTTP、自带网络栈、Java、curl、容器或 WSL 不保证自动跟随。
- 客户端仍显式连接 `127.0.0.1:8888` 时，即使 Restore 了系统代理，它也可能继续经过监听器。
- 启用、恢复与原生授权正在进行时，不要反复点击或强制结束；冲突应按提示处理。
- App 不应覆盖另一软件在会话期间新写入的系统配置；已有代理环境见下一节。
- 正常关闭 App 也会走退出恢复流程，但本段以 Restore 收尾，不把它当作 Close 的实录；退出边界见 [Workspace](workspace.md#close)。

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

下面前五步属于早期安全草稿片段，`exampleApplied=false`。`127.0.0.1:7890`没有作为已运行的上游验证，`https://proxy.example.test/proxy.pac`也不是公共PAC；不要为了与截图一致而Apply。[完整上游实录](#walkthrough-settings-upstream)使用另外实际启动的自有上游和PAC，分别验证Manual、PAC、Direct与System。

1. 在Settings打开Upstream proxy，查看当前路线；[Capture快捷入口](#walkthrough-settings-upstream-11-shortcut)也可打开同一份配置。

   ![当前 Upstream proxy 路线](../media/v0.1.1-alpha.1/settings/settings-04-upstream.png)

2. 选择 Manual 草稿，Host 填 `127.0.0.1`，端口填 `7890`。Host 不带协议、路径或凭据；本次端口是演示输入，不是自动分配的代理监听端口。

   ![未 Apply 的 Manual 演示草稿](../media/v0.1.1-alpha.1/settings/settings-05-manual-draft.png)

3. 点击 Discard，不应用没有实际上游服务的示例。

   ![放弃 Manual 草稿](../media/v0.1.1-alpha.1/settings/settings-06-discard.png)

4. 选择 PAC，查看 `https://proxy.example.test/proxy.pac` 输入。实际使用时必须是自己的可访问 HTTP/HTTPS PAC，不是本地路径或含凭据的 URL。

   ![未运行的 PAC 示例输入](../media/v0.1.1-alpha.1/settings/settings-07-pac.png)

5. 放弃该 PAC 草稿，保留原配置。

   ![实际 Discard PAC 草稿](../media/v0.1.1-alpha.1/settings/settings-08-discard-pac.png)

6. 只有准备好真实出口后才填写其字段并 Apply，成功后查看 Current route。

   ![实际自有Manual上游Apply后的状态](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-08-apply-manual.png)

   ![实际自有PAC Apply后的状态](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-19-apply-pac.png)

   WPAD仍缺实际网络前提，不能用本地PAC示例代替发现流程。

7. 发新请求，检查客户端结果与实际目标；长连接按需要重新建立。

   ![核对真正通过Manual上游的请求](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-09-manual-request.png)

   PAC分别核对[经代理](#walkthrough-settings-upstream-20-pac-proxy)与[DIRECT](#walkthrough-settings-upstream-21-pac-direct)的请求；结束后显式切换Direct和System，不把所有PAC请求都说成经过同一出口。

8. 不想应用时使用 Cancel/Discard；在快捷入口中选择 Open in Settings 可继续检查同一份草稿。

   ![真实取消快捷入口中的PAC草稿](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-14-cancel-draft.png)

   ![同一份草稿通过Open in Settings继续编辑](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-18-open-settings.png)

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

   ![Certificates 中已有 CA 与信任状态](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

2. App 首次准备通常会处理缺失的共享 CA；若需要手动操作，用产品提供的生成入口，而不是自己覆盖证书文件。

   **待配图 / blocked**：录制机器已有日常 CA，没有空共享 CA 环境，不为拍图删除它。

3. 未受信任时使用 Install/信任操作，阅读并完成真实系统授权。

   **待配图 / blocked**：首次 helper、钥匙串信任或 Windows UAC 未录制；已受信任状态不证明授权步骤。

4. 确认产品报告受信任，再开启 HTTPS decryption。

   下图引用 Capture 的受控协议演示，只说明已有可信 CA 时开启解密：

   ![Capture 演示中开启 HTTPS 解密](../media/v0.1.1-alpha.1/capture/capture-20-decryption.png)

5. 让客户端建立一条新的 HTTPS 连接，在 Capture 中检查 HTTP 详情。

   本图是同次 `/playground/h2-json` 新连接；其 `localhost` 测试源站例外按[下一相关小节](#insecure-hosts)处理，不应推广到公网。

   ![开启解密后的真实 HTTP/2 详情](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

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

   **待配图**：只读 Certificates 页已录制，但没有点击 View 或 Reveal，不能冒充原生证书/文件窗口。

2. 需要查看系统信任管理时，使用产品提供的系统证书管理入口，并遵守平台权限。

   **待配图 / blocked**：缺实际钥匙串或 Windows 管理员 MMC 操作。

3. 不再信任该 CA 时，用 Uninstall 撤销信任。

   **待配图 / blocked**：未对日常 CA 执行撤销信任，需独立安全环境。

4. 确实不再需要材料时，再使用 Delete；若仍有信任，按产品流程先撤销。

   **待配图 / blocked**：未执行删除，不用空列表或其他设置图代替。

5. 需要重新生成时，先核对当前 CA 与所有仍在使用它的测试客户端，再按产品提示处理。

   **待配图 / blocked**：未执行重新生成及客户端信任更新，不能宣称生命周期全部验收。

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

本例使用自有 `https://localhost:63604/playground/tls/h1`；`63604` 是录制时的随机端口，不是产品固定端口。先按[准备步骤](#walkthrough-settings-tls-passthrough)确认已有受信任 CA，并仅为本轮自签名测试源站添加 `localhost` 例外、开启解密，取得第一条可见 HTTP 正文。不要把源站例外或演示地址照抄到不受控服务。

1. 返回 Settings。[对应步骤图](#walkthrough-settings-tls-passthrough-17-settings-passthrough)

   ![从 Capture 返回 Settings](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-17-settings-passthrough.png)

2. 打开 TLS passthrough，检查当前名单。[对应步骤图](#walkthrough-settings-tls-passthrough-18-passthrough)

   ![添加前的实际 TLS passthrough 名单](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-18-passthrough.png)

3. 输入精确主机 `localhost`，不填写协议、端口或 Path。[对应步骤图](#walkthrough-settings-tls-passthrough-19-host)

   ![填写精确主机 localhost](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-19-host.png)

4. 点击 Add，条目加入后即保存，不另找 Rules 的 Apply。[对应步骤图](#walkthrough-settings-tls-passthrough-20-add)

   ![已保存的 localhost 透传条目](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-20-add.png)

5. 返回 Capture，保持 `localhost` 搜索。[对应步骤图](#walkthrough-settings-tls-passthrough-21-capture-passthrough)

   ![保持同一主机筛选返回 Capture](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-21-capture-passthrough.png)

6. 让客户端用新连接再次请求同一个 HTTPS 地址。[对应步骤图](#walkthrough-settings-tls-passthrough-22-passthrough-request)

   ![透传条目生效后的新 CONNECT](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-22-passthrough-request.png)

7. 选择新增的 CONNECT，不继续查看前面的已解密 GET。[对应步骤图](#walkthrough-settings-tls-passthrough-23-passthrough-select)

   ![选中实际透传的新连接](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-23-passthrough-select.png)

8. 查看 Tunnel：主机与端口仍对应本机源站，协议为 `TLS passthrough`，没有 HTTP 正文；客户端仍成功收到响应。[对应步骤图](#walkthrough-settings-tls-passthrough-24-passthrough-tunnel)

   ![全局 MITM 开启但该连接按名单透传](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-24-passthrough-tunnel.png)

9. 点击查看透传配置的入口，Settings 会定位并短暂高亮真实的 `localhost` 条目。[对应步骤图](#walkthrough-settings-tls-passthrough-25-locate)

   ![从 Tunnel 跳转并高亮实际名单项](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-25-locate.png)

10. 删除本轮添加的 `localhost` 条目；删除立即保存。[对应步骤图](#walkthrough-settings-tls-passthrough-26-remove)

    ![已删除本轮透传条目](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-26-remove.png)

11. 返回 Capture；旧的 Tunnel 不会因此变成 HTTP。[对应步骤图](#walkthrough-settings-tls-passthrough-27-capture-restored)

    ![删除配置后旧 Tunnel 仍保留](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-27-capture-restored.png)

12. 用新连接再次请求同一地址。[对应步骤图](#walkthrough-settings-tls-passthrough-28-reconnect)

    ![移除透传项后出现新的 GET](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-28-reconnect.png)

13. 选择这条新 GET，核对同一主机与本次端口。[对应步骤图](#walkthrough-settings-tls-passthrough-29-restored-select)

    ![选择恢复解密后的新请求](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-29-restored-select.png)

14. 打开 Response，读取 `{"mode":"https-h1","secure":true}`；这是新连接的正文，不是给旧 Tunnel 补上正文。[对应步骤图](#walkthrough-settings-tls-passthrough-30-restored-body)

    ![删除透传项后实际恢复的 HTTP 正文](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-30-restored-body.png)

15. 演示结束后返回 Settings。[对应步骤图](#walkthrough-settings-tls-passthrough-31-cleanup-settings)

    ![返回 Settings 清理本轮设置](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-31-cleanup-settings.png)

16. 打开 Certificates，不执行 Generate、Uninstall 或 Delete。[对应步骤图](#walkthrough-settings-tls-passthrough-32-cleanup-certificates)

    ![保持原 CA 进入 Certificates](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-32-cleanup-certificates.png)

17. 关闭这次演示开启的 HTTPS 解密。[对应步骤图](#walkthrough-settings-tls-passthrough-33-mitm-off)

    ![关闭本轮解密但保留 CA 与信任](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-33-mitm-off.png)

18. 移除本轮自有源站的 `localhost` 证书例外，不修改其他配置。[对应步骤图](#walkthrough-settings-tls-passthrough-34-origin-remove)

    ![本轮源站例外已移除](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-34-origin-remove.png)

**待配图**：本次只添加精确 `localhost`，不代表 wildcard、复杂名单或首次系统授权已经录制。

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

   **待配图**：Capture 协议演示使用已知本机测试源站，没有录制证书报错、有效期与信任链的诊断过程。

2. 优先修复服务证书；仅在有授权的受控测试中，到 Certificates > Per-host overrides 添加精确主机。下图来自 Capture，实际值为 `localhost`，不是 TLS passthrough。

   ![Capture 演示添加 localhost 源站例外](../media/v0.1.1-alpha.1/capture/capture-19-local-origin.png)

3. 建立新请求核对结果；本次为 `/playground/h2-json`。

   ![同次本机源站的实际新请求](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

4. 演示结束移除本轮添加的 `localhost` 条目。

   ![移除本次 localhost 例外](../media/v0.1.1-alpha.1/capture/capture-31-remove-exception.png)

**预期结果**：例外只作用于明确目标，不改变其他主机的校验策略。

**关键说明**：源站证书例外与 TLS passthrough 不同，不能互换。前者可能仍解密但放宽源站校验，后者保持加密透传。不要对不明来源的真实业务使用全局绕过。

<a id="app-containers"></a>
## Windows AppContainer 的本地代理访问

**前提**：仅 Windows；目标应用确实受 AppContainer 网络隔离影响，且你有权修改相关系统设置。

**步骤**

1. 打开 App containers，搜索目标应用。

   **待配图 / blocked**：当前素材均为 macOS，没有 Windows AppContainer 列表及搜索。

2. 检查其 loopback access 是否启用，按需要使用单项开关并完成 UAC。

   **待配图 / blocked**：需要 Windows 目标应用与真实 UAC，macOS 截图不能替代。

3. 让该应用重新发起请求，检查是否到达本地代理。

   **待配图 / blocked**：缺受 AppContainer 隔离影响的真实应用流量。

4. 确实需要批量修改时使用 Enable all 或 Disable all，阅读目标数量、范围和后果后确认。

   **待配图 / blocked**：Windows 枚举与批量授权操作未录制。

5. 结束后撤销不再需要的例外，并核对系统实际状态。

   **待配图 / blocked**：没有 Windows 例外恢复与系统状态证据图。

**预期结果**：目标应用获准或被撤销访问本机 loopback 的例外；启用项稳定显示在列表前面。

**关键说明**：AppContainer 放行不能解决证书固定；TLS passthrough 也不能解决应用根本无法连接本地代理。批量操作只针对当前枚举目标，不等于任意修改所有系统网络隔离状态。macOS 不提供同一 Windows 功能。

<a id="appearance"></a>
## 语言和主题

通过 Appearance 或侧栏对应入口选择当前 App 提供的语言、主题，并核对保存状态。四个主题值为 `warm`、`light`、`ember`、`dark`；不添加不存在的 App System 主题。

切换只改变界面偏好，不翻译捕获内容、URL 或协议值；完整步骤见[工作区](workspace.md#appearance)。

<a id="storage"></a>
## 查看用量并清理 Capture

**步骤**

本段使用 `settings-storage-privacy`。完整录制先完成[下一节](#privacy)的默认值/单次覆盖检查并取消导出，再执行 Storage 清理。清理前 Recording 已暂停；Clear 只处理本流程的公共临时记录和正文，不涉及其他人的流量。需要保留自己的记录时，先按 [Transfer](transfer.md#har)完成导出；本次已取消的 HAR 草稿没有生成备份文件。

1. 核对要清理的是本次 `http://127.0.0.1:52747/guide/storage/before-clear` 记录，正文 `{"orderId":"guide-storage-001","message":"public example"}`。`52747` 是本次动态源站端口；图为同次录制的清理前准备状态。

   ![本次清理前的真实公共演示记录](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-01-record.png)

2. 打开 Storage，查看 Captured body data 和 Session、Exchange、Body 数量。

   ![本轮实际存储用量](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-11-storage.png)

3. 点击 Refresh，核对统计更新而记录仍保留；Refresh 不是 Clear，也不是固定配额设置。

   ![实际 Refresh，只刷新统计](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-12-refresh.png)

4. 打开 Clear capture 确认，先阅读清理影响。

   ![本轮真实 Clear 确认框](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-13-clear-dialog.png)

5. 先 Cancel，核对临时数据没有被删除。

   ![实际取消 Clear 后保留数据](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-14-cancel-clear.png)

6. 再次执行 Clear 并确认，清理本轮演示记录及正文；不能把上一步取消的画面当作清理成功。

   ![实际确认清理本轮临时数据](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-15-confirm-clear.png)

7. 回到 Capture，确认旧记录已清空，Recording 仍暂停。是保留了清理前的暂停状态，不是 Clear 自动暂停或恢复录制。

   ![清理后实际空列表与仍暂停的 Recording](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-16-empty-capture.png)

8. 明确恢复 Recording。

   ![Clear 后实际单独恢复录制](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-17-resume-after-clear.png)

9. 经代理请求 `http://127.0.0.1:52747/guide/storage/after-clear`，核对新记录进入列表，不将旧记录回填当作新请求。

   ![清理并恢复录制后实际捕获 after-clear](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-18-new-record.png)

**预期结果**：与 Capture 的 Clear 清理同一份临时数据，不删除已导出的文件。

**关键说明**：正文用量不是进程 RSS，也不是整个硬盘使用量。这里没有自动保留天数或配额设置；Refresh 不是后台持续轮询。文件任务未结束时清理可能被拒绝。

文件任务未结束时不要强行Clear。[运行中归档取消实录](transfer.md#walkthrough-transfer-cancel)展示Cancel、等待终态、再Clear的用户流程；它不把点击禁用按钮或直接调用内部命令当作必要操作。

<a id="privacy"></a>
## 设置后续导出的隐私默认值

本节是 `settings-storage-privacy` 的前半段，实际发生在上节 Clear 之前。这里只演示 `maskCookies` 默认值与当前 HAR 草稿的覆盖关系，不声称所有隐私选项或已生成文件都完成了检查。

1. 选择本轮公共测试记录 `/guide/storage/before-clear`，其源站为 `http://127.0.0.1:52747`，端口仅属于录制环境。

   ![隐私示例实际选中的公共记录](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-01-record.png)

2. 打开 Privacy。

   ![实际打开隐私默认值](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-02-privacy.png)

3. 临时将 Cookie 遮罩默认值设为 `maskCookies=false`；这是对无凭据演示数据的检查，不是推荐公开未遮罩流量。

   ![实际更改已保存的 Cookie 默认值](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-03-cookie-default.png)

4. 新开 HAR 导出，核对新草稿继承 `maskCookies=false`。

   ![新 HAR 草稿实际继承修改后的默认值](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-04-new-export.png)

5. 选择当前筛选结果范围，检查本次草稿的导出范围。

   ![实际选择当前筛选范围](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-05-filter-scope.png)

6. 再查看全部记录范围；本例全部记录仍仅是本流程公共数据，不代表日常全部流量都可以分享。

   ![实际查看全部记录范围](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-06-all-scope.png)

7. 仅在当前导出草稿把 Cookie 遮罩改成 `true`，与已保存默认值 `false` 区分。

   ![实际仅覆盖本次导出的 Cookie 遮罩](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-07-one-export-override.png)

8. 取消本次导出。这是取消 HAR 草稿，没有保存文件，也不是取消已运行的文件任务。

   ![实际取消本次 HAR 导出草稿](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-08-cancel-export.png)

9. 返回 Privacy，核对已保存默认值仍为 `false`，没有被单次覆盖改成 `true`。

   ![实际核对单次覆盖没有改默认值](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-09-default-unchanged.png)

10. 将 Cookie 遮罩默认值恢复为 `true`，再继续 Storage 清理。

    ![实际恢复 maskCookies=true](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-10-restore-privacy.png)

11. Authorization 遮罩和未遮罩导出警告仍按需要独立配置。

    [完整隐私实录](#walkthrough-settings-privacy-export)另外逐项修改Authorization、Cookie与警告默认值，检查新草稿继承、单次覆盖和实际HAR，再恢复三项设置。

    ![单独修改Authorization默认值](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-02-auth-default.png)

    ![单独修改未遮罩导出警告](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-09-warning-default.png)

12. 分享前继续检查 URL、正文、自定义敏感字段和最终文件。

    ![实际检查按单次覆盖生成的HAR](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-07-check-override.png)

    新实录还[移除正文后导出再导入](#walkthrough-settings-privacy-export-18-strip-bodies)，核对真实文件与回载结果。演示值可公开，不把这些检查扩展为任意业务字段都已匿名化；分享前仍需自行审查。

**预期结果**：新开的 HAR 草稿继承当前默认值；本次草稿的覆盖不回写已保存默认值。默认值变化不修改已打开草稿、运行中任务或既有文件；本次实际配图只覆盖新草稿与单次覆盖的往返。

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

   ![真实发布 App 的版本与更新状态页](../media/v0.1.1-alpha.1/settings/settings-15-updates.png)

2. 点击 Check；失败时先检查网络和发布源，不把失败理解成“已经是最新版”。

   [独立Check实录](#walkthrough-settings-update-check)使用原发布源，实际结果为`failed` / `GitHub returned HTTP 404`，没有下载或安装。这不是“已经是最新版”。

   ![实际Check后的失败状态](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-04-result.png)

3. 有可用版本时阅读说明，明确点击 Download。

   **待配图 / blocked**：缺更新器可获取的受支持版本及真实下载步骤。

4. 等待下载及完整性校验完成，再点击 Open installer。

   **待配图 / blocked**：未执行下载校验与打开安装器，当前版本页不能证明完成。

5. 在真实系统安装流程中完成必要操作；不要在文件尚未下载完成时自行运行临时文件。

   **待配图 / blocked**：缺 macOS/Windows 原生更新安装与授权录制。

**预期结果**：检查、下载、打开安装器是三个不同阶段，不会因为发现更新就自动开始下载。

**关键说明**

- 更新匿名访问固定 GitHub 来源，不使用 VS Code 登录，也没有让用户输入 GitHub PAT 的 App 页面。
- 当前私有发布源或没有可用稳定版本时，匿名检查可能失败；已发布 Alpha 不等于内置更新可获取。
- 内置更新只接受对应平台、架构和受支持的安装格式；macOS ZIP-only 分发不等于支持内置更新。
- 通知中的 Download/Open installer 与 Settings 对应同一状态，Dismiss 只是收起通知。
- 退出会收尾正在进行的检查或下载，不以打开旧临时文件跳过产品校验。

<!-- recorded-walkthrough:settings-storage-privacy:start -->
<a id="walkthrough-settings-storage-privacy"></a>
## 逐步骤实操：隐私默认值、存储取消与清理

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

> 本段展示已有CA、设置入口和可放弃的草稿。Manual和PAC示例没有Apply；实操不证明这些示例地址可用，也没有重新生成或卸载日常CA。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>firstUrl</code> | <code>http://127.0.0.1:52747/guide/storage/before-clear</code> |
| <code>secondUrl</code> | <code>http://127.0.0.1:52747/guide/storage/after-clear</code> |
| <code>body</code> | <code>{&quot;orderId&quot;:&quot;guide-storage-001&quot;,&quot;message&quot;:&quot;public example&quot;}</code> |
| <code>privacyOverride</code> | <code>maskCookies true for one cancelled export; saved default remained false then restored true</code> |
| <code>clearedData</code> | <code>only this workflow’s temporary records and bodies</code> |

<a id="walkthrough-settings-storage-privacy-01-record"></a>
### 01 · 选择本轮临时记录

![01 · 选择本轮临时记录](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-01-record.png)

<a id="walkthrough-settings-storage-privacy-02-privacy"></a>
### 02 · 打开隐私默认值

![02 · 打开隐私默认值](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-02-privacy.png)

<a id="walkthrough-settings-storage-privacy-03-cookie-default"></a>
### 03 · 临时更改 Cookie 默认值

![03 · 临时更改 Cookie 默认值](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-03-cookie-default.png)

<a id="walkthrough-settings-storage-privacy-04-new-export"></a>
### 04 · 打开新的 HAR 导出检查继承

![04 · 打开新的 HAR 导出检查继承](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-04-new-export.png)

<a id="walkthrough-settings-storage-privacy-05-filter-scope"></a>
### 05 · 选择当前筛选范围

![05 · 选择当前筛选范围](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-05-filter-scope.png)

<a id="walkthrough-settings-storage-privacy-06-all-scope"></a>
### 06 · 查看全部记录范围

![06 · 查看全部记录范围](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-06-all-scope.png)

<a id="walkthrough-settings-storage-privacy-07-one-export-override"></a>
### 07 · 只覆盖本次 Cookie 遮罩

![07 · 只覆盖本次 Cookie 遮罩](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-07-one-export-override.png)

<a id="walkthrough-settings-storage-privacy-08-cancel-export"></a>
### 08 · 取消本次导出

![08 · 取消本次导出](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-08-cancel-export.png)

<a id="walkthrough-settings-storage-privacy-09-default-unchanged"></a>
### 09 · 确认单次覆盖没有改默认值

![09 · 确认单次覆盖没有改默认值](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-09-default-unchanged.png)

<a id="walkthrough-settings-storage-privacy-10-restore-privacy"></a>
### 10 · 恢复 Cookie 遮罩默认值

![10 · 恢复 Cookie 遮罩默认值](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-10-restore-privacy.png)

<a id="walkthrough-settings-storage-privacy-11-storage"></a>
### 11 · 查看实际存储用量

![11 · 查看实际存储用量](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-11-storage.png)

<a id="walkthrough-settings-storage-privacy-12-refresh"></a>
### 12 · Refresh 只刷新统计

![12 · Refresh 只刷新统计](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-12-refresh.png)

<a id="walkthrough-settings-storage-privacy-13-clear-dialog"></a>
### 13 · 检查 Clear 影响

![13 · 检查 Clear 影响](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-13-clear-dialog.png)

<a id="walkthrough-settings-storage-privacy-14-cancel-clear"></a>
### 14 · 取消 Clear 不删除记录

![14 · 取消 Clear 不删除记录](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-14-cancel-clear.png)

<a id="walkthrough-settings-storage-privacy-15-confirm-clear"></a>
### 15 · 确认清理本轮记录和正文

![15 · 确认清理本轮记录和正文](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-15-confirm-clear.png)

<a id="walkthrough-settings-storage-privacy-16-empty-capture"></a>
### 16 · Capture 同步变空且仍暂停

![16 · Capture 同步变空且仍暂停](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-16-empty-capture.png)

<a id="walkthrough-settings-storage-privacy-17-resume-after-clear"></a>
### 17 · Clear 后显式恢复录制

![17 · Clear 后显式恢复录制](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-17-resume-after-clear.png)

<a id="walkthrough-settings-storage-privacy-18-new-record"></a>
### 18 · Clear 后捕获新请求

![18 · Clear 后捕获新请求](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-18-new-record.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:settings-storage-privacy:end -->

<!-- recorded-walkthrough:settings-proxy-routing:start -->
<a id="walkthrough-settings-proxy-routing"></a>
## 逐步骤实操：系统代理恢复与 Recording 的边界

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

> 本段展示已有CA、设置入口和可放弃的草稿。Manual和PAC示例没有Apply；实操不证明这些示例地址可用，也没有重新生成或卸载日常CA。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>listener</code> | <code>127.0.0.1:8888</code> |
| <code>explicitClientUrl</code> | <code>http://127.0.0.1:59429/guide/system-proxy/explicit-client</code> |
| <code>purpose</code> | <code>System proxy routing and Recording are separate; Restore retains the listener</code> |
| <code>authorizationScope</code> | <code>existing authorized helper; this is not first-time OS authorization footage</code> |

<a id="walkthrough-settings-proxy-routing-01-owned"></a>
### 01 · 查看系统代理接管状态

![01 · 查看系统代理接管状态](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-01-owned.png)

<a id="walkthrough-settings-proxy-routing-02-restore"></a>
### 02 · Restore 恢复原路由

![02 · Restore 恢复原路由](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-02-restore.png)

<a id="walkthrough-settings-proxy-routing-03-listener"></a>
### 03 · 确认监听器没有因此停止

![03 · 确认监听器没有因此停止](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-03-listener.png)

<a id="walkthrough-settings-proxy-routing-04-enable"></a>
### 04 · 通过 Settings 重新 Enable

![04 · 通过 Settings 重新 Enable](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-04-enable.png)

<a id="walkthrough-settings-proxy-routing-05-recording"></a>
### 05 · 返回 Capture 确认录制开启

![05 · 返回 Capture 确认录制开启](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-05-recording.png)

<a id="walkthrough-settings-proxy-routing-06-pause"></a>
### 06 · 暂停 Recording

![06 · 暂停 Recording](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-06-pause.png)

<a id="walkthrough-settings-proxy-routing-07-still-owned"></a>
### 07 · 暂停不等于 Restore

![07 · 暂停不等于 Restore](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-07-still-owned.png)

<a id="walkthrough-settings-proxy-routing-08-final-restore"></a>
### 08 · 结束演示前恢复原路由

![08 · 结束演示前恢复原路由](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-08-final-restore.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:settings-proxy-routing:end -->

<!-- recorded-walkthrough:settings-tls-passthrough:start -->
<a id="walkthrough-settings-tls-passthrough"></a>
## 逐步骤实操：TLS 透传与恢复解密

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>host</code> | <code>localhost</code> |
| <code>filter</code> | <code>localhost</code> |
| <code>url</code> | <code>https://localhost:63604/playground/tls/h1</code> |
| <code>originPort</code> | <code>63604</code> |
| <code>originException</code> | <code>localhost (owned self-signed test origin; removed after recording)</code> |
| <code>passthrough</code> | <code>localhost (exact host; removed before reconnecting)</code> |
| <code>certificateScope</code> | <code>existing trusted CA; no generation, install, uninstall or deletion</code> |

<a id="walkthrough-settings-tls-passthrough-01-filter"></a>
### 01 · 按 localhost 筛选

![01 · 按 localhost 筛选](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-01-filter.png)

<a id="walkthrough-settings-tls-passthrough-02-record"></a>
### 02 · 开启 Recording

![02 · 开启 Recording](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-02-record.png)

<a id="walkthrough-settings-tls-passthrough-03-opaque-request"></a>
### 03 · 建立未解密 TLS 连接

![03 · 建立未解密 TLS 连接](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-03-opaque-request.png)

<a id="walkthrough-settings-tls-passthrough-04-tunnel-select"></a>
### 04 · 选择 CONNECT 隧道

![04 · 选择 CONNECT 隧道](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-04-tunnel-select.png)

<a id="walkthrough-settings-tls-passthrough-05-tunnel"></a>
### 05 · 查看 Tunnel 而非 HTTP 正文

![05 · 查看 Tunnel 而非 HTTP 正文](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-05-tunnel.png)

<a id="walkthrough-settings-tls-passthrough-06-https-setup"></a>
### 06 · 从 Tunnel 打开 HTTPS Setup

![06 · 从 Tunnel 打开 HTTPS Setup](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-06-https-setup.png)

<a id="walkthrough-settings-tls-passthrough-07-cancel-setup"></a>
### 07 · 取消且保持未解密

![07 · 取消且保持未解密](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-07-cancel-setup.png)

<a id="walkthrough-settings-tls-passthrough-08-settings"></a>
### 08 · 打开 Settings

![08 · 打开 Settings](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-08-settings.png)

<a id="walkthrough-settings-tls-passthrough-09-certificates"></a>
### 09 · 检查已有受信任 CA

![09 · 检查已有受信任 CA](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-09-certificates.png)

<a id="walkthrough-settings-tls-passthrough-10-origin-host"></a>
### 10 · 填写自有源站 localhost

![10 · 填写自有源站 localhost](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-10-origin-host.png)

<a id="walkthrough-settings-tls-passthrough-11-origin-add"></a>
### 11 · 仅添加本轮源站例外

![11 · 仅添加本轮源站例外](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-11-origin-add.png)

<a id="walkthrough-settings-tls-passthrough-12-mitm-on"></a>
### 12 · 开启 HTTPS 解密

![12 · 开启 HTTPS 解密](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-12-mitm-on.png)

<a id="walkthrough-settings-tls-passthrough-13-capture-decrypted"></a>
### 13 · 返回 Capture

![13 · 返回 Capture](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-13-capture-decrypted.png)

<a id="walkthrough-settings-tls-passthrough-14-decrypted-request"></a>
### 14 · 用新连接请求 HTTPS

![14 · 用新连接请求 HTTPS](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-14-decrypted-request.png)

<a id="walkthrough-settings-tls-passthrough-15-decrypted-select"></a>
### 15 · 选择解密后的 GET

![15 · 选择解密后的 GET](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-15-decrypted-select.png)

<a id="walkthrough-settings-tls-passthrough-16-decrypted-body"></a>
### 16 · 读取真实 HTTPS 正文

![16 · 读取真实 HTTPS 正文](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-16-decrypted-body.png)

<a id="walkthrough-settings-tls-passthrough-17-settings-passthrough"></a>
### 17 · 返回 Settings

![17 · 返回 Settings](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-17-settings-passthrough.png)

<a id="walkthrough-settings-tls-passthrough-18-passthrough"></a>
### 18 · 打开 TLS passthrough

![18 · 打开 TLS passthrough](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-18-passthrough.png)

<a id="walkthrough-settings-tls-passthrough-19-host"></a>
### 19 · 填写精确主机 localhost

![19 · 填写精确主机 localhost](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-19-host.png)

<a id="walkthrough-settings-tls-passthrough-20-add"></a>
### 20 · 添加并保存透传条目

![20 · 添加并保存透传条目](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-20-add.png)

<a id="walkthrough-settings-tls-passthrough-21-capture-passthrough"></a>
### 21 · 返回 Capture 检查新连接

![21 · 返回 Capture 检查新连接](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-21-capture-passthrough.png)

<a id="walkthrough-settings-tls-passthrough-22-passthrough-request"></a>
### 22 · 重新建立同一源站 HTTPS 连接

![22 · 重新建立同一源站 HTTPS 连接](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-22-passthrough-request.png)

<a id="walkthrough-settings-tls-passthrough-23-passthrough-select"></a>
### 23 · 选择新增 CONNECT

![23 · 选择新增 CONNECT](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-23-passthrough-select.png)

<a id="walkthrough-settings-tls-passthrough-24-passthrough-tunnel"></a>
### 24 · 核对命中 TLS passthrough

![24 · 核对命中 TLS passthrough](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-24-passthrough-tunnel.png)

<a id="walkthrough-settings-tls-passthrough-25-locate"></a>
### 25 · 从 Tunnel 定位实际名单条目

![25 · 从 Tunnel 定位实际名单条目](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-25-locate.png)

<a id="walkthrough-settings-tls-passthrough-26-remove"></a>
### 26 · 删除本轮 localhost 透传项

![26 · 删除本轮 localhost 透传项](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-26-remove.png)

<a id="walkthrough-settings-tls-passthrough-27-capture-restored"></a>
### 27 · 返回 Capture 检查恢复

![27 · 返回 Capture 检查恢复](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-27-capture-restored.png)

<a id="walkthrough-settings-tls-passthrough-28-reconnect"></a>
### 28 · 再次用新连接请求 HTTPS

![28 · 再次用新连接请求 HTTPS](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-28-reconnect.png)

<a id="walkthrough-settings-tls-passthrough-29-restored-select"></a>
### 29 · 选择恢复解密的 GET

![29 · 选择恢复解密的 GET](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-29-restored-select.png)

<a id="walkthrough-settings-tls-passthrough-30-restored-body"></a>
### 30 · 核对 HTTP 正文恢复

![30 · 核对 HTTP 正文恢复](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-30-restored-body.png)

<a id="walkthrough-settings-tls-passthrough-31-cleanup-settings"></a>
### 31 · 返回 Settings 清理本轮配置

![31 · 返回 Settings 清理本轮配置](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-31-cleanup-settings.png)

<a id="walkthrough-settings-tls-passthrough-32-cleanup-certificates"></a>
### 32 · 打开 Certificates

![32 · 打开 Certificates](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-32-cleanup-certificates.png)

<a id="walkthrough-settings-tls-passthrough-33-mitm-off"></a>
### 33 · 关闭本轮解密

![33 · 关闭本轮解密](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-33-mitm-off.png)

<a id="walkthrough-settings-tls-passthrough-34-origin-remove"></a>
### 34 · 移除自有源站例外

![34 · 移除自有源站例外](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-34-origin-remove.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:settings-tls-passthrough:end -->

<!-- recorded-walkthrough:settings-upstream:start -->
<a id="walkthrough-settings-upstream"></a>
## 逐步骤实操：Manual、PAC、Direct与共享草稿

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>origin</code> | <code>http://127.0.0.1:51204/guide/upstream</code> |
| <code>proxyHost</code> | <code>127.0.0.1</code> |
| <code>proxyPort</code> | <code>51206</code> |
| <code>pacUrl</code> | <code>http://127.0.0.1:51204/guide/upstream/route.pac</code> |
| <code>pacChoice</code> | <code>127.0.0.1 uses the owned PROXY; localhost uses DIRECT</code> |
| <code>draftBoundary</code> | <code>Cancel/Discard do not Apply; Open in Settings retains the same draft</code> |
| <code>finalMode</code> | <code>system</code> |
| <code>scope</code> | <code>Owned HTTP routes only; no WPAD, external credentials or system proxy preference writes</code> |

<a id="walkthrough-settings-upstream-01-settings"></a>
### 01 · 打开Settings

![01 · 打开Settings](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-01-settings.png)

<a id="walkthrough-settings-upstream-02-upstream"></a>
### 02 · 打开Upstream proxy

![02 · 打开Upstream proxy](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-02-upstream.png)

<a id="walkthrough-settings-upstream-03-direct-draft"></a>
### 03 · 选择Direct草稿

![03 · 选择Direct草稿](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-03-direct-draft.png)

<a id="walkthrough-settings-upstream-04-discard"></a>
### 04 · Discard草稿不改路线

![04 · Discard草稿不改路线](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-04-discard.png)

<a id="walkthrough-settings-upstream-05-manual"></a>
### 05 · 选择Manual

![05 · 选择Manual](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-05-manual.png)

<a id="walkthrough-settings-upstream-06-host"></a>
### 06 · 填写自有上游Host

![06 · 填写自有上游Host](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-06-host.png)

<a id="walkthrough-settings-upstream-07-port"></a>
### 07 · 填写实际上游端口

![07 · 填写实际上游端口](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-07-port.png)

<a id="walkthrough-settings-upstream-08-apply-manual"></a>
### 08 · Apply Manual

![08 · Apply Manual](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-08-apply-manual.png)

<a id="walkthrough-settings-upstream-09-manual-request"></a>
### 09 · 用真实转发核对Manual

![09 · 用真实转发核对Manual](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-09-manual-request.png)

<a id="walkthrough-settings-upstream-10-capture"></a>
### 10 · 返回Capture查看生效路线

![10 · 返回Capture查看生效路线](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-10-capture.png)

<a id="walkthrough-settings-upstream-11-shortcut"></a>
### 11 · 打开底栏快捷浮层

![11 · 打开底栏快捷浮层](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-11-shortcut.png)

<a id="walkthrough-settings-upstream-12-pac-draft"></a>
### 12 · 在浮层选择PAC草稿

![12 · 在浮层选择PAC草稿](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-12-pac-draft.png)

<a id="walkthrough-settings-upstream-13-pac-url"></a>
### 13 · 填写自有PAC地址

![13 · 填写自有PAC地址](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-13-pac-url.png)

<a id="walkthrough-settings-upstream-14-cancel-draft"></a>
### 14 · Cancel放弃本次浮层草稿

![14 · Cancel放弃本次浮层草稿](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-14-cancel-draft.png)

<a id="walkthrough-settings-upstream-15-reopen"></a>
### 15 · 重开浮层核对仍为Manual

![15 · 重开浮层核对仍为Manual](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-15-reopen.png)

<a id="walkthrough-settings-upstream-16-pac-again"></a>
### 16 · 重新选择PAC

![16 · 重新选择PAC](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-16-pac-again.png)

<a id="walkthrough-settings-upstream-17-pac-url-again"></a>
### 17 · 再次填写本轮PAC

![17 · 再次填写本轮PAC](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-17-pac-url-again.png)

<a id="walkthrough-settings-upstream-18-open-settings"></a>
### 18 · 把同一草稿带到Settings

![18 · 把同一草稿带到Settings](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-18-open-settings.png)

<a id="walkthrough-settings-upstream-19-apply-pac"></a>
### 19 · Apply PAC

![19 · Apply PAC](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-19-apply-pac.png)

<a id="walkthrough-settings-upstream-20-pac-proxy"></a>
### 20 · 核对PAC选择PROXY

![20 · 核对PAC选择PROXY](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-20-pac-proxy.png)

<a id="walkthrough-settings-upstream-21-pac-direct"></a>
### 21 · 核对同一PAC选择DIRECT

![21 · 核对同一PAC选择DIRECT](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-21-pac-direct.png)

<a id="walkthrough-settings-upstream-22-direct"></a>
### 22 · 显式选择Direct

![22 · 显式选择Direct](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-22-direct.png)

<a id="walkthrough-settings-upstream-23-apply-direct"></a>
### 23 · Apply Direct

![23 · Apply Direct](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-23-apply-direct.png)

<a id="walkthrough-settings-upstream-24-direct-request"></a>
### 24 · 核对Direct不经过上游

![24 · 核对Direct不经过上游](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-24-direct-request.png)

<a id="walkthrough-settings-upstream-25-system"></a>
### 25 · 恢复System选择

![25 · 恢复System选择](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-25-system.png)

<a id="walkthrough-settings-upstream-26-apply-system"></a>
### 26 · Apply System

![26 · Apply System](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-26-apply-system.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:settings-upstream:end -->

<!-- recorded-walkthrough:settings-privacy-export:start -->
<a id="walkthrough-settings-privacy-export"></a>
## 逐步骤实操：隐私默认值、单次覆盖和实际HAR字段

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:61384/guide/privacy-export/record</code> |
| <code>publicAuthorization</code> | <code>Bearer public-export-value</code> |
| <code>publicCookie</code> | <code>guide-request=public</code> |
| <code>publicResponseCookie</code> | <code>guide-response=public; Path=/</code> |
| <code>retainedHeader</code> | <code>x-guide-note: public-note</code> |
| <code>originalBody</code> | <code>{&quot;message&quot;:&quot;public privacy example&quot;}</code> |
| <code>firstFile</code> | <code>guide-auth-masked.har</code> |
| <code>secondFile</code> | <code>guide-public-unmasked.har</code> |
| <code>finalFile</code> | <code>guide-redacted-no-body.har</code> |
| <code>safety</code> | <code>All authentication-like values are deliberately public loopback examples, not real credentials</code> |
| <code>finalDefaults</code> | <code>Authorization, Cookie and warning enabled; existing files not rewritten</code> |

<a id="walkthrough-settings-privacy-export-01-privacy"></a>
### 01 · 查看三项Privacy默认值

![01 · 查看三项Privacy默认值](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-01-privacy.png)

<a id="walkthrough-settings-privacy-export-02-auth-default"></a>
### 02 · 更改Authorization默认值

![02 · 更改Authorization默认值](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-02-auth-default.png)

<a id="walkthrough-settings-privacy-export-03-cookie-default"></a>
### 03 · 更改Cookie默认值

![03 · 更改Cookie默认值](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-03-cookie-default.png)

<a id="walkthrough-settings-privacy-export-04-inherited-export"></a>
### 04 · 打开新HAR草稿核对继承

![04 · 打开新HAR草稿核对继承](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-04-inherited-export.png)

<a id="walkthrough-settings-privacy-export-05-one-time-override"></a>
### 05 · 本次只遮罩Authorization

![05 · 本次只遮罩Authorization](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-05-one-time-override.png)

<a id="walkthrough-settings-privacy-export-06-save-override"></a>
### 06 · 保存guide-auth-masked.har

![06 · 保存guide-auth-masked.har](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-06-save-override.png)

<a id="walkthrough-settings-privacy-export-07-check-override"></a>
### 07 · 核对文件只遮罩指定字段

![07 · 核对文件只遮罩指定字段](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-07-check-override.png)

<a id="walkthrough-settings-privacy-export-08-defaults-unchanged"></a>
### 08 · 核对单次覆盖没改全局默认值

![08 · 核对单次覆盖没改全局默认值](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-08-defaults-unchanged.png)

<a id="walkthrough-settings-privacy-export-09-warning-default"></a>
### 09 · 关闭未遮罩前的警示偏好

![09 · 关闭未遮罩前的警示偏好](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-09-warning-default.png)

<a id="walkthrough-settings-privacy-export-10-unmasked-draft"></a>
### 10 · 查看新的公开数据导出草稿

![10 · 查看新的公开数据导出草稿](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-10-unmasked-draft.png)

<a id="walkthrough-settings-privacy-export-11-save-public"></a>
### 11 · 只保存本轮公开测试值

![11 · 只保存本轮公开测试值](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-11-save-public.png)

<a id="walkthrough-settings-privacy-export-12-check-public"></a>
### 12 · 核对取消遮罩后文件的真实字段

![12 · 核对取消遮罩后文件的真实字段](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-12-check-public.png)

<a id="walkthrough-settings-privacy-export-13-restore-privacy"></a>
### 13 · 返回Privacy恢复默认值

![13 · 返回Privacy恢复默认值](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-13-restore-privacy.png)

<a id="walkthrough-settings-privacy-export-14-restore-auth"></a>
### 14 · 恢复Authorization遮罩

![14 · 恢复Authorization遮罩](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-14-restore-auth.png)

<a id="walkthrough-settings-privacy-export-15-restore-cookies"></a>
### 15 · 恢复Cookie遮罩

![15 · 恢复Cookie遮罩](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-15-restore-cookies.png)

<a id="walkthrough-settings-privacy-export-16-restore-warning"></a>
### 16 · 恢复未遮罩警示

![16 · 恢复未遮罩警示](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-16-restore-warning.png)

<a id="walkthrough-settings-privacy-export-17-redacted-draft"></a>
### 17 · 检查新草稿使用恢复后的默认值

![17 · 检查新草稿使用恢复后的默认值](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-17-redacted-draft.png)

<a id="walkthrough-settings-privacy-export-18-strip-bodies"></a>
### 18 · 本次移除请求与响应正文

![18 · 本次移除请求与响应正文](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-18-strip-bodies.png)

<a id="walkthrough-settings-privacy-export-19-save-redacted"></a>
### 19 · 保存guide-redacted-no-body.har

![19 · 保存guide-redacted-no-body.har](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-19-save-redacted.png)

<a id="walkthrough-settings-privacy-export-20-check-redacted"></a>
### 20 · 逐字段核对真正的文件内容

![20 · 逐字段核对真正的文件内容](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-20-check-redacted.png)

<a id="walkthrough-settings-privacy-export-21-clear"></a>
### 21 · 清空本轮临时记录再检查导入

![21 · 清空本轮临时记录再检查导入](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-21-clear.png)

<a id="walkthrough-settings-privacy-export-22-import"></a>
### 22 · 从产品选择刚导出的HAR

![22 · 从产品选择刚导出的HAR](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-22-import.png)

<a id="walkthrough-settings-privacy-export-23-open-redacted"></a>
### 23 · 打开本轮去正文HAR

![23 · 打开本轮去正文HAR](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-23-open-redacted.png)

<a id="walkthrough-settings-privacy-export-24-imported"></a>
### 24 · 导入不会凭空恢复已移除正文

![24 · 导入不会凭空恢复已移除正文](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-24-imported.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:settings-privacy-export:end -->

<!-- recorded-walkthrough:settings-update-check:start -->
<a id="walkthrough-settings-update-check"></a>
## 实际检查更新与失败状态

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>source</code> | <code>The actual Release update source zhxmt-xm/Interceptor, without injected credentials</code> |
| <code>checkResult</code> | <code>failed</code> |
| <code>lastCheckedAt</code> | <code>2026-10-16T12:57:32.772Z</code> |
| <code>downloaded</code> | <code>false</code> |
| <code>installerOpened</code> | <code>false</code> |
| <code>boundary</code> | <code>Only the actual Check action/result is recorded; download and native installation require their own conditions</code> |

<a id="walkthrough-settings-update-check-01-settings"></a>
### 01 · 打开Settings

![01 · 打开Settings](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-01-settings.png)

<a id="walkthrough-settings-update-check-02-updates"></a>
### 02 · 进入Updates查看真实状态

![02 · 进入Updates查看真实状态](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-02-updates.png)

<a id="walkthrough-settings-update-check-03-check"></a>
### 03 · 真实点击Check

![03 · 真实点击Check](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-03-check.png)

<a id="walkthrough-settings-update-check-04-result"></a>
### 04 · 核对这次检查的实际终态

![04 · 核对这次检查的实际终态](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-04-result.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:settings-update-check:end -->
