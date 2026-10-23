# Settings：代理、证书、存储和更新

[教程目录](../README.md) · [快速上手](getting-started.md)

## 先找到对应设置

从侧栏进入 Settings。System proxy、Upstream proxy、App containers、TLS passthrough、Certificates、Appearance、Storage、Privacy、Agent、Updates 各自解决不同问题。

离开再返回会保留最后访问的分组；从代理就绪、TLS 提示或 Agent 配置入口跳转时，会定位到相应分组。

<a id="system-proxy"></a>
## 接管与恢复系统代理

系统代理让遵循系统设置的应用把流量交给 Interceptor；显式配置代理的客户端仍使用自己的地址。操作需要产品 helper 已就绪，并完成系统要求的授权。Restore、Enable 和 Recording 分别检查，不用一个按钮的状态推断全部网络行为。

1. <a id="walkthrough-settings-proxy-routing"></a><a id="walkthrough-settings-proxy-routing-01-owned"></a>打开 Settings → Proxy & Listener，检查监听地址 `127.0.0.1:8888`、Listening 和 Owned by Interceptor。红框 1 是恢复本轮接管前设置的 Restore。

   ![接管与恢复系统代理 · 1](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-001.annotated.png)

2. <a id="walkthrough-settings-proxy-routing-02-restore"></a>点击 Restore 并等待操作完成。系统代理恢复原配置，本例显示 External；监听器仍显示 Listening。不要把按钮暂时不可点击当作已经恢复。

   ![接管与恢复系统代理 · 2](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-002.png)

3. <a id="walkthrough-settings-proxy-routing-03-listener"></a>需要继续使用显式代理时，客户端仍可连接 `http://127.0.0.1:8888`。红框 1 是 Restore 后显式代理访问 `/e2e/system-proxy/ui/explicit-client` 的记录；它证明监听器可用，不证明其他应用自动遵循系统代理。

   ![接管与恢复系统代理 · 3](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-003.annotated.png)

4. <a id="walkthrough-settings-proxy-routing-04-enable"></a>需要重新接管时，点击红框 1 的 Enable，等待 Owned by Interceptor。本例复用已有授权 helper；首次授权仍应在系统窗口中完成。

   ![接管与恢复系统代理 · 4](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-004.annotated.png)

   ![接管与恢复系统代理 · 4](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-005.png)

5. <a id="walkthrough-settings-proxy-routing-05-recording"></a>回到 Capture，单独确认红框 1 的 Recording。若尚未开始录制，先使用录制按钮完成就绪提示。

   ![接管与恢复系统代理 · 5](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-006.annotated.png)

6. <a id="walkthrough-settings-proxy-routing-06-pause"></a>点击录制按钮暂停，确认红框 1 变为 Paused。这不是在 Settings 中执行 Restore。

   ![接管与恢复系统代理 · 6](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-007.annotated.png)

7. <a id="walkthrough-settings-proxy-routing-07-still-owned"></a>再到 Proxy & Listener 核对系统代理仍为 Owned by Interceptor。分别检查路由、监听器和录制状态，不把 Pause 当作恢复原网络设置。

   ![接管与恢复系统代理 · 7](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-008.png)

8. <a id="walkthrough-settings-proxy-routing-08-final-restore"></a>只想恢复系统路由而继续使用 App 时，再执行 Restore 并等待完成。需要退出时先保存数据，再通过窗口 Close 正常关闭。

   ![接管与恢复系统代理 · 8](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-010.png)

- Windows 主要接管 WinINet；WinHTTP、自带网络栈、Java、curl、容器或 WSL 不保证自动跟随。
- 要确认某个应用的路由，使用该应用自己发请求并检查 Capture。
- 启用、恢复或原生授权正在进行时，不重复点击或强制结束；冲突按提示处理。
- 若其他软件在会话期间修改了代理，不要求 Interceptor 覆盖对方的新配置。原有代理的上游安排见下一节。


<a id="upstream"></a>
## 选择上游代理

上游代理决定 Interceptor 收到请求后使用哪个出口，与客户端是否接入 Interceptor 分开。

| 模式 | 界面选项 | 作用 |
| --- | --- | --- |
| System | Use system settings | 沿用接管前的系统代理或自动配置 |
| Direct | No upstream proxy | 直接连接目标，不经过另一个上游代理 |
| Manual | Manual proxy | 使用填写的协议、Host 和 Port |
| PAC | PAC URL | 通过 HTTP/HTTPS PAC 为各个请求选择路线 |
| WPAD | Auto-discover (WPAD) | 从实际支持自动发现的网络取得 PAC |

先准备自己的可用上游或 PAC。下面的 HTTP 上游为 `127.0.0.1:64599`，PAC 为 `http://127.0.0.1:64598/proxy.pac`；App 不会自动创建这些服务。没有对应服务时只练习填写和 Discard，不要 Apply。

1. <a id="walkthrough-03-proxy"></a><a id="walkthrough-04-upstream"></a><a id="walkthrough-settings-upstream"></a><a id="walkthrough-settings-upstream-01-settings"></a><a id="walkthrough-settings-upstream-02-upstream"></a>进入 Settings → Upstream proxy，先查看 Current route。这里显示的是当前已生效的 System，而不是正在编辑的草稿。

   ![选择上游代理 · 1](../media/v0.1.1-alpha.1/settings-upstream-english/step-001.png)

2. <a id="walkthrough-settings-upstream-03-direct-draft"></a><a id="walkthrough-settings-upstream-04-discard"></a>选择 No upstream proxy（Direct）后先不应用。Not applied 表示草稿尚未提交；点击红框 1 的 Discard changes，Current route 仍为 System。

   ![选择上游代理 · 2](../media/v0.1.1-alpha.1/settings-upstream-english/step-002.annotated.png)

   ![选择上游代理 · 2](../media/v0.1.1-alpha.1/settings-upstream-english/step-003.png)

3. <a id="walkthrough-05-manual-draft"></a><a id="walkthrough-settings-upstream-05-manual"></a><a id="walkthrough-settings-upstream-06-host"></a><a id="walkthrough-settings-upstream-07-port"></a>选择 Manual proxy。Protocol 使用上游支持的协议，本例为 HTTP；红框 1 的 Host 填 `127.0.0.1`，红框 2 的 Port 填 `64599`。Host 不包含协议、路径或凭据。红框 3 是 Apply，只有上游确实可用时才点击。

   ![选择上游代理 · 3](../media/v0.1.1-alpha.1/settings-upstream-english/step-004.annotated.png)

4. <a id="walkthrough-06-discard"></a>不想保存这次 Manual 草稿时点击 Discard changes，核对仍使用 System。放弃草稿不会关闭监听器或停止 Capture。

   ![选择上游代理 · 4](../media/v0.1.1-alpha.1/settings-upstream-english/step-005.png)

5. <a id="walkthrough-settings-upstream-08-apply-manual"></a>要实际使用上游，重新填写自己的 Manual 字段并点击 Apply。Current route 变为 Manual，显示已保存的 Host 和 Port，Apply 回到禁用状态。

   ![选择上游代理 · 5](../media/v0.1.1-alpha.1/settings-upstream-english/step-006.png)

6. <a id="walkthrough-settings-upstream-09-manual-request"></a><a id="walkthrough-settings-upstream-10-capture"></a>让客户端通过 `http://127.0.0.1:8888` 请求自己的接口，再到 Capture 选择红框 1 的请求。图中源站使用 `127.0.0.1:64598`，请求路径以 `/manual-` 开头；检查实际客户端结果及目标服务，不只看设置输入框。

   ![选择上游代理 · 6](../media/v0.1.1-alpha.1/settings-upstream-english/step-007.annotated.png)

7. <a id="walkthrough-settings-upstream-11-shortcut"></a>点击 Capture 底栏右侧的 Upstream，打开同一份上游配置。快捷浮层显示当前 Manual 路线和已保存字段。

   ![选择上游代理 · 7](../media/v0.1.1-alpha.1/settings-upstream-english/step-008.png)

8. <a id="walkthrough-07-pac"></a><a id="walkthrough-settings-upstream-12-pac-draft"></a><a id="walkthrough-settings-upstream-13-pac-url"></a><a id="walkthrough-settings-upstream-14-cancel-draft"></a>选择 PAC URL，在红框 1 输入 `http://127.0.0.1:64598/proxy.pac`。它必须是自己可访问的 HTTP/HTTPS 地址。不想应用时点击 Cancel，或点击红框 2 的关闭按钮，放弃这次草稿。

   ![选择上游代理 · 8](../media/v0.1.1-alpha.1/settings-upstream-english/step-009.annotated.png)

9. <a id="walkthrough-settings-upstream-15-reopen"></a>重新打开 Upstream，核对仍是原来的 Manual，取消的 PAC 草稿没有生效。

   ![选择上游代理 · 9](../media/v0.1.1-alpha.1/settings-upstream-english/step-010.png)

10. <a id="walkthrough-settings-upstream-16-pac-again"></a><a id="walkthrough-settings-upstream-17-pac-url-again"></a><a id="walkthrough-settings-upstream-18-open-settings"></a>再次选择 PAC URL，在红框 1 填写地址，然后点击红框 2 的 Open in Settings，继续在设置页编辑同一份草稿。

    ![选择上游代理 · 10](../media/v0.1.1-alpha.1/settings-upstream-english/step-011.annotated.png)

11. 进入 Settings 后，红框 1 保留刚填写的 PAC URL，Current route 仍为 Manual。红框 2 的 Apply 才会提交这份草稿。

    ![选择上游代理 · 11](../media/v0.1.1-alpha.1/settings-upstream-english/step-012.annotated.png)

12. <a id="walkthrough-08-discard-pac"></a>需要放弃时点击 Discard changes，核对 Manual 路线和原 Host、Port 恢复显示。打开 Settings 本身不会应用草稿。

    ![选择上游代理 · 12](../media/v0.1.1-alpha.1/settings-upstream-english/step-013.png)

13. <a id="walkthrough-settings-upstream-19-apply-pac"></a>要使用 PAC，重新填写有效地址并 Apply。Current route 显示 PAC 和 Selected per request，表示每个请求分别按脚本选择出口。

    ![选择上游代理 · 13](../media/v0.1.1-alpha.1/settings-upstream-english/step-014.png)

14. <a id="walkthrough-settings-upstream-20-pac-proxy"></a>发送脚本应选择 PROXY 的请求。示例对 `127.0.0.1` 使用上游，红框 1 是路径以 `/pac-` 开头的请求；检查服务响应及实际上游记录。

    ![选择上游代理 · 14](../media/v0.1.1-alpha.1/settings-upstream-english/step-015.annotated.png)

15. <a id="walkthrough-settings-upstream-21-pac-direct"></a>再发送脚本应选择 DIRECT 的请求。示例对 `localhost` 直连，红框 1 是 `/pac-direct-` 请求。它仍会被 Capture 记录，DIRECT 只表示这一跳不经过另一个上游。

    ![选择上游代理 · 15](../media/v0.1.1-alpha.1/settings-upstream-english/step-016.annotated.png)

16. <a id="walkthrough-settings-upstream-22-direct"></a><a id="walkthrough-settings-upstream-23-apply-direct"></a><a id="walkthrough-settings-upstream-24-direct-request"></a>不再使用 PAC 时，选择 No upstream proxy（Direct）并点击红框 1 的 Apply。等 Current route 显示 Direct / Direct connection 后再发送新请求；已有连接不会因此重放。

    ![选择上游代理 · 16](../media/v0.1.1-alpha.1/settings-upstream-english/step-017.annotated.png)

    ![选择上游代理 · 16](../media/v0.1.1-alpha.1/settings-upstream-english/step-018.png)

17. 保存后可通过红框 1 的 Close 正常退出，再打开 App 检查 Current route。图中 Direct 已保留；窗口关闭不等于删除已保存的上游偏好。

    ![选择上游代理 · 17](../media/v0.1.1-alpha.1/settings-upstream-english/step-019.annotated.png)

    ![选择上游代理 · 17](../media/v0.1.1-alpha.1/settings-upstream-english/step-020.png)

18. <a id="walkthrough-settings-upstream-25-system"></a><a id="walkthrough-settings-upstream-26-apply-system"></a>要重新沿用接管前的系统出口，选择 Use system settings（System），点击红框 1 的 Apply，再确认 Current route 为 System。这与恢复操作系统代理是两个操作。

    ![选择上游代理 · 18](../media/v0.1.1-alpha.1/settings-upstream-english/step-021.annotated.png)

    ![选择上游代理 · 18](../media/v0.1.1-alpha.1/settings-upstream-english/step-022.png)

- 不要把 Manual 指向 Interceptor 自己的 `8888`，System 也不能把它当作原上游，否则会形成循环。
- Apply 成功后新请求使用新配置；应用失败时读取错误提示，原有效路线仍保留，不把失败当成自动直连。
- Direct 不关闭 Capture，也不恢复操作系统代理。
- WPAD 需要真实网络支持，不用手填 PAC 冒充自动发现。发现失败先联系网络管理者，不为练习修改办公网络的 DHCP 或 DNS。
- macOS 与 Windows 的系统快照、网络发现和授权不同。
- 产品没有独立的上游账号/密码设置，不把凭据拼进不接受它们的字段。


<a id="https-decryption"></a>
## 准备 CA 并启用 HTTPS 解密

只调试自己有权查看的 HTTPS 流量。普通 HTTPS 解密需要可用 CA、相应客户端信任及已开启的 MITM；看到 CONNECT 或 TLS tunnel 不代表正文已经解密。

1. <a id="walkthrough"></a><a id="walkthrough-01-open"></a><a id="walkthrough-02-certificates"></a>打开 Settings → Certificates，检查公开指纹、有效期、Generated 和 Trusted。本例复用已经准备并信任的 CA，不删除现有证书来重新演示首次启动。

   ![准备 CA 并启用 HTTPS 解密 · 1](../media/v0.1.1-alpha.1/tls-pattern-english/step-001.png)

2. 若 CA 尚未准备好，按 App 的生成与信任入口完成系统授权。不要自己覆盖证书材料，也不要把系统权限提示当作 GitHub 登录。

   ![同一流程相关界面](../media/v0.1.1-alpha.1/tls-pattern-english/step-001.png)

3. 确认所需信任后，开启红框 1 的 Decrypt HTTPS (MITM)。只有开关开启并不保证所有客户端都接受这个 CA；证书固定和独立信任库仍可能拒绝。

   ![准备 CA 并启用 HTTPS 解密 · 3](../media/v0.1.1-alpha.1/tls-pattern-english/step-002.annotated.png)

4. 仅在自己控制的本机源站使用测试证书时，才在红框 1 填 `localhost` 并点击红框 2 的 Add host。该源站例外不代替客户端信任，也不应照搬到公网。

   ![准备 CA 并启用 HTTPS 解密 · 4](../media/v0.1.1-alpha.1/tls-pattern-english/step-011.annotated.png)

5. 让客户端建立新连接。本例 GET `/e2e/passthrough/http` 在红框 1 的 Response 显示 `{"mode":"https-h1","secure":true}` 的格式化 JSON。它展示 HTTP/1.1 的已解密正文，不代表所有 TLS 故障都已解决。

   ![准备 CA 并启用 HTTPS 解密 · 5](../media/v0.1.1-alpha.1/tls-pattern-english/step-012.annotated.png)

已有连接不会因为切换设置自动变成另一种模式。关闭解密不自动卸载 CA 信任；正常退出或删除单个 App 数据环境也不等于删除共享 CA。不要为了查看正文全局关闭证书校验。


<a id="certificate-lifecycle"></a>
## 查看、移除信任与删除 CA

1. 用 View 查看当前公开证书，按平台提供的方式核对身份；Reveal 用于定位相关材料。

   ![查看当前 Certificates 面板](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

2. 需要查看系统信任管理时，使用产品提供的系统证书管理入口，并遵守平台权限。

   ![Certificates 与系统信任入口](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

3. 不再信任该 CA 时，用 Uninstall 撤销信任。

   ![在 Certificates 检查 HTTPS 解密与信任状态](../media/v0.1.1-alpha.1/tls-cleanup-english/step-039.png)

4. 确实不再需要材料时，再使用 Delete；若仍有信任，按产品流程先撤销。

   ![停用 HTTPS 解密后再处理证书材料](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.png)

5. 需要重新生成时，先核对当前 CA 与所有仍在使用它的测试客户端，再按产品提示处理。

   ![清理完成后的 Certificates 状态](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.png)

- Uninstall 保留 CA 材料，Delete 才删除；受信任时不能直接重新生成覆盖。
- 重新生成会改变证书身份，独立客户端的旧信任可能失效。
- 不为复现教程删除日常 CA，不复制私钥到工单或其他机器。
-

<a id="tls-passthrough"></a>
## 对特定主机保持 TLS 透传

透传名单让选定主机保持端到端加密。下面使用同一个 `https://localhost:52139/e2e/passthrough/http`，每次重新连接，依次比较解密、透传和移除后的恢复；实际操作使用自己的服务。

1. <a id="walkthrough-settings-tls-passthrough"></a><a id="walkthrough-settings-tls-passthrough-01-filter"></a><a id="walkthrough-settings-tls-passthrough-02-record"></a><a id="walkthrough-settings-tls-passthrough-03-opaque-request"></a><a id="walkthrough-settings-tls-passthrough-04-tunnel-select"></a><a id="walkthrough-settings-tls-passthrough-05-tunnel"></a><a id="walkthrough-settings-tls-passthrough-06-https-setup"></a><a id="walkthrough-settings-tls-passthrough-07-cancel-setup"></a><a id="walkthrough-settings-tls-passthrough-08-settings"></a><a id="walkthrough-settings-tls-passthrough-09-certificates"></a><a id="walkthrough-settings-tls-passthrough-10-origin-host"></a><a id="walkthrough-settings-tls-passthrough-11-origin-add"></a><a id="walkthrough-settings-tls-passthrough-12-mitm-on"></a><a id="walkthrough-settings-tls-passthrough-13-capture-decrypted"></a><a id="walkthrough-settings-tls-passthrough-14-decrypted-request"></a><a id="walkthrough-settings-tls-passthrough-15-decrypted-select"></a><a id="walkthrough-settings-tls-passthrough-16-decrypted-body"></a>先完成上节 CA、受控源站例外和 MITM 设置。发送新请求，在红框 1 的 Response 确认能看到 `https-h1` 与 `secure: true` 正文。

   ![对特定主机保持 TLS 透传 · 1](../media/v0.1.1-alpha.1/tls-pattern-english/step-012.annotated.png)

2. <a id="walkthrough-settings-tls-passthrough-17-settings-passthrough"></a><a id="walkthrough-settings-tls-passthrough-18-passthrough"></a>进入 Settings → TLS passthrough，检查当前名单。精确主机与通配域名影响范围不同，默认选择最小范围。

   ![对特定主机保持 TLS 透传 · 2](../media/v0.1.1-alpha.1/tls-pattern-english/step-003.png)

3. <a id="walkthrough-settings-tls-passthrough-19-host"></a><a id="walkthrough-settings-tls-passthrough-20-add"></a>红框 1 输入精确主机 `localhost`，不要填写协议、端口或 Path，再点击红框 2 的 Add。添加后立即保存，不需要 Rules Save。

   ![对特定主机保持 TLS 透传 · 3](../media/v0.1.1-alpha.1/tls-pattern-english/step-013.annotated.png)

4. <a id="walkthrough-settings-tls-passthrough-21-capture-passthrough"></a><a id="walkthrough-settings-tls-passthrough-22-passthrough-request"></a><a id="walkthrough-settings-tls-passthrough-23-passthrough-select"></a><a id="walkthrough-settings-tls-passthrough-24-passthrough-tunnel"></a>回到 Capture 并搜索 `localhost`，让客户端用新连接再次请求同一地址。红框 1 是新的 CONNECT，右侧显示 TLS passthrough、无 HTTP 正文；客户端仍可以收到完整响应。红框 2 是 View passthrough pattern。

   ![对特定主机保持 TLS 透传 · 4](../media/v0.1.1-alpha.1/tls-pattern-english/step-014.annotated.png)

5. <a id="walkthrough-settings-tls-passthrough-25-locate"></a><a id="walkthrough-settings-tls-passthrough-26-remove"></a>点击上图的配置入口，App 会定位并短暂高亮匹配的 `localhost` 条目。需要恢复解密时，点击本图红框 1 的移除按钮；移除立即保存。

   ![对特定主机保持 TLS 透传 · 5](../media/v0.1.1-alpha.1/tls-pattern-english/step-015.annotated.png)

6. <a id="walkthrough-settings-tls-passthrough-27-capture-restored"></a><a id="walkthrough-settings-tls-passthrough-28-reconnect"></a><a id="walkthrough-settings-tls-passthrough-29-restored-select"></a><a id="walkthrough-settings-tls-passthrough-30-restored-body"></a>再次新建连接并请求同一地址，选择新 GET，在红框 1 的 Response 核对 JSON 又可读取。原来的 Tunnel 仍是历史隧道，不会被补成 HTTP 记录。

   ![对特定主机保持 TLS 透传 · 6](../media/v0.1.1-alpha.1/tls-pattern-english/step-016.annotated.png)

7. <a id="walkthrough-settings-tls-passthrough-31-cleanup-settings"></a><a id="walkthrough-settings-tls-passthrough-32-cleanup-certificates"></a><a id="walkthrough-settings-tls-passthrough-33-mitm-off"></a>如果 MITM 仅为本次调试开启，返回 Certificates 关闭红框 1 的开关，保留原有 CA 与信任。

   ![对特定主机保持 TLS 透传 · 7](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

8. <a id="walkthrough-settings-tls-passthrough-34-origin-remove"></a>只移除本次添加的源站例外。第一张图红框 1 是 `localhost` 标签及右侧移除入口；移除后，第二张图红框 1 是空 Host 输入框，不是 CA 的 Remove。

   ![对特定主机保持 TLS 透传 · 8](../media/v0.1.1-alpha.1/tls-cleanup-english/step-041.annotated.png)

   ![对特定主机保持 TLS 透传 · 8](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.annotated.png)

9. 遇到 TLS interception may be incompatible 提示时，逐个核对失败主机。红框 1 示例只选精确主机，红框 2 示例选择父域通配范围；确认影响后才点击红框 3 的 Add 2 patterns，不默认勾选全部宽泛范围。

   ![对特定主机保持 TLS 透传 · 9](../media/v0.1.1-alpha.1/tls-compatibility-english/step-003.annotated.png)

10. 没有选中任何范围时，第一张图红框 1 的保存按钮不可用。暂时不改变设置时，点击第二张图红框 1 的 Not now；关闭提示不会添加名单。

    ![对特定主机保持 TLS 透传 · 10](../media/v0.1.1-alpha.1/tls-compatibility-english/step-002.annotated.png)

    ![对特定主机保持 TLS 透传 · 10](../media/v0.1.1-alpha.1/tls-compatibility-english/step-005.annotated.png)

透传仍经过 Interceptor 和所选上游，只是不解密应用内容。客户端证书固定、源站证书例外与本机代理接入是不同问题；按实际症状处理，不把透传当作所有连接错误的通用修复。


<a id="insecure-hosts"></a>
## 区分源站证书例外

源站例外处理目标服务的证书校验，不处理客户端是否信任 Interceptor CA。优先修复源站证书，只在有授权的受控环境对精确主机设置例外。

1. 先检查服务域名、有效期与管理的信任链，确认确实是源站证书问题。

   ![同一流程相关界面](../media/v0.1.1-alpha.1/tls-pattern-english/step-011.png)

2. 在 Certificates → Per-host overrides 的红框 1 输入 `localhost`，点击红框 2 的 Add host。本例是自有本机源站，不代表应给任意公网地址添加例外。

   ![区分源站证书例外 · 2](../media/v0.1.1-alpha.1/tls-pattern-english/step-011.annotated.png)

3. 使用新连接访问 `/e2e/passthrough/http`，在红框 1 的 Response 检查实际正文。例外并没有关闭 MITM，本例仍能看到解密的 HTTP 内容。

   ![区分源站证书例外 · 3](../media/v0.1.1-alpha.1/tls-pattern-english/step-012.annotated.png)

4. 结束后找到红框 1 的 `localhost` 标签，点击其右侧移除按钮，只删除本次添加的项。

   ![区分源站证书例外 · 4](../media/v0.1.1-alpha.1/tls-cleanup-english/step-041.annotated.png)

5. 确认标签消失；红框 1 剩下的是 Host 输入框。源站例外、透传名单及 CA 信任分别管理，不互相替代。

   ![区分源站证书例外 · 5](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.annotated.png)


<a id="app-containers"></a>
## Windows AppContainer 的本地代理访问

仅 Windows；目标应用确实受 AppContainer 网络隔离影响，且你有权修改相关系统设置。

1. 打开 App containers，搜索目标应用。

   ![Windows AppContainer 页面控制区](../media/windows-local-20261023/app-containers/overview-controls.png)

   图片只保留导航、风险提示、搜索和批量操作区；应用身份与 SID 已因隐私省略。

2. 检查其 loopback access 是否启用，按需要使用单项开关并完成 UAC。

   ![同一流程相关界面](../media/windows-local-20261023/app-containers/overview-controls.png)

3. 让该应用重新发起请求，检查是否到达本地代理。

   ![同一流程相关界面](../media/windows-local-20261023/app-containers/overview-controls.png)

4. 确实需要批量修改时使用 Enable all 或 Disable all，阅读目标数量、范围和后果后确认。

   ![同一流程相关界面](../media/windows-local-20261023/app-containers/overview-controls.png)

5. 结束后撤销不再需要的例外，并核对系统实际状态。

   ![同一流程相关界面](../media/windows-local-20261023/app-containers/overview-controls.png)
AppContainer 放行不能解决证书固定；TLS passthrough 也不能解决应用根本无法连接本地代理。批量操作只针对当前枚举目标，不等于任意修改所有系统网络隔离状态。macOS 不提供同一 Windows 功能。

<a id="appearance"></a>

## 语言和主题

通过 Appearance 或侧栏对应入口选择当前 App 提供的语言、主题，并核对保存状态。四个主题值为 `warm`、`light`、`ember`、`dark`；不添加不存在的 App System 主题。

切换只改变界面偏好，不翻译捕获内容、URL 或协议值；完整步骤见[工作区](workspace.md#appearance)。

<a id="storage"></a>
## 查看用量并清理 Capture

先导出需要保留的数据，并确认备份文件已经保存；取消导出不会产生备份。Settings 的 Clear capture 与 Capture 顶部 Clear 清理同一份临时记录和正文，不删除已经导出的文件。只清理自己允许删除的流量。

1. <a id="walkthrough-settings-storage-privacy"></a><a id="walkthrough-settings-storage-privacy-01-record"></a>在 Capture 选中红框 1 的记录并核对正文。本例是 POST `/e2e/storage/first`，请求正文为 `storage-original-body`。确认要清理的是这批数据，再点击红框 2 的 Recording 暂停新录制。

   ![查看用量并清理 Capture · 1](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-001.annotated.png)

2. <a id="walkthrough-settings-storage-privacy-11-storage"></a>打开 Settings → Storage。红框 1 是右上角 Refresh，红框 2 是 Captured body data 用量；下方分别列出 Sessions、Exchanges 和 Stored bodies。

   ![查看用量并清理 Capture · 2](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-002.annotated.png)

3. <a id="walkthrough-settings-storage-privacy-12-refresh"></a>点击 Refresh，等待统计更新。暂停录制时，同一批记录的统计应保持一致；Refresh 不会删除数据，也不是自动清理或配额开关。

   ![查看用量并清理 Capture · 3](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-003.png)

4. <a id="walkthrough-settings-storage-privacy-13-clear-dialog"></a>点击 Clear capture 后先阅读清理说明。红框 1 是 Cancel，红框 2 是 Confirm clear；这次先点击红框 1，取消清理。

   ![查看用量并清理 Capture · 4](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-004.annotated.png)

5. <a id="walkthrough-settings-storage-privacy-14-cancel-clear"></a>返回 Capture，确认红框 1 的原记录和正文仍在，录制仍是 Paused。Cancel 不等于清理成功。

   ![查看用量并清理 Capture · 5](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-005.annotated.png)

6. <a id="walkthrough-settings-storage-privacy-15-confirm-clear"></a>重新打开 Storage，再点击 Clear capture。这次确认可以删除后，点击红框 1 的 Confirm clear。

   ![查看用量并清理 Capture · 6](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-006.annotated.png)

7. 等待清理结束，检查红框 1 的正文用量为 `0 B`、红框 2 的 Exchanges 为 `0`、红框 3 的 Stored bodies 为 `0`。Sessions 仍可为 `1`，不要把当前会话也必须消失当作清理条件。

   ![查看用量并清理 Capture · 7](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-007.annotated.png)

8. <a id="walkthrough-settings-storage-privacy-16-empty-capture"></a>回到 Capture，检查列表和详情都已清空，Recording 仍为 Paused。Clear 保持原来的录制状态，不会替你自动开始录制。

   ![查看用量并清理 Capture · 8](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-008.png)

9. <a id="walkthrough-settings-storage-privacy-17-resume-after-clear"></a>需要继续捕获时，明确点击录制按钮，确认红框 1 变为 Recording。

   ![查看用量并清理 Capture · 9](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-009.annotated.png)

10. <a id="walkthrough-settings-storage-privacy-18-new-record"></a>从客户端经代理发送新的 POST `/e2e/storage/after-clear`，正文 `storage-new-body`。红框 1 是这次新请求生成的记录，不是把旧记录恢复回来。

    ![查看用量并清理 Capture · 10](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-010.annotated.png)

11. 若这条新记录也无需保留，先暂停录制，再点击红框 1 的 Capture Clear。随后到 Storage 点击 Refresh，核对相同的正文用量和记录数量归零；两个清理入口操作的是同一份数据。

    ![查看用量并清理 Capture · 11](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-011.annotated.png)

    ![查看用量并清理 Capture · 11](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-012.png)

正文用量不是进程 RSS，也不是整个硬盘的使用量。这里没有自动保留天数或配额设置，Refresh 不是持续轮询。文件任务尚未结束时不要强行 Clear；需要取消时先使用任务的 Cancel，等待任务结束和临时文件清理完成。


<a id="privacy"></a>
## 设置后续导出的隐私默认值

Privacy 决定下一次新开 HAR 导出窗口的初始选项，不会追溯修改已经导出的文件。以下只用自己的无凭据测试记录；关闭遮罩不是推荐的分享方式。

1. <a id="walkthrough-settings-storage-privacy-02-privacy"></a><a id="walkthrough-settings-privacy-export"></a><a id="walkthrough-settings-privacy-export-01-privacy"></a><a id="walkthrough-settings-privacy-export-02-auth-default"></a><a id="walkthrough-settings-privacy-export-09-warning-default"></a>打开 Settings → Privacy。红框 1 控制 Authorization 与 URL token 遮罩，红框 2 控制 Cookie/Set-Cookie 遮罩，红框 3 控制未遮罩导出前的警告。三个设置相互独立。

   ![设置后续导出的隐私默认值 · 1](../media/v0.1.1-alpha.1/privacy-workspace-english/step-002.annotated.png)

2. <a id="walkthrough-settings-storage-privacy-03-cookie-default"></a><a id="walkthrough-settings-privacy-export-03-cookie-default"></a>按需要分别调整开关；本例关闭红框 1 的授权遮罩、开启红框 2 的 Cookie 遮罩，并保留警告。设置按各自点击保存，不必到 Rules 找 Save。

   ![设置后续导出的隐私默认值 · 2](../media/v0.1.1-alpha.1/privacy-workspace-english/step-003.annotated.png)

3. <a id="walkthrough-settings-storage-privacy-04-new-export"></a><a id="walkthrough-settings-storage-privacy-05-filter-scope"></a><a id="walkthrough-settings-privacy-export-04-inherited-export"></a>Capture 有记录时，从 Export 打开 HAR 并核对范围。图中另一组设置是红框 1 的授权遮罩开启、红框 2 的 Cookie 遮罩关闭，Current filter 只选择 `/e2e/preferences/` 的记录。以当前窗口实际选项为准。

   ![设置后续导出的隐私默认值 · 3](../media/v0.1.1-alpha.1/privacy-workspace-english/step-006.annotated.png)

4. 如果已授权的 MCP 在此期间把默认值改为 `maskAuthorization=false`、`maskCookies=true`、`warnBeforeUnmasked=false`，当前窗口仍保留原选择：红框 1 开启、红框 2 关闭。正在编辑的导出草稿不会被外部默认值覆盖。

   ![设置后续导出的隐私默认值 · 4](../media/v0.1.1-alpha.1/privacy-workspace-english/step-007.annotated.png)

5. <a id="walkthrough-settings-storage-privacy-08-cancel-export"></a>关闭本次导出窗口，再从 Export 重新打开 HAR。新窗口读取新默认值，红框 1 关闭、红框 2 开启；关闭草稿没有保存文件。

   ![设置后续导出的隐私默认值 · 5](../media/v0.1.1-alpha.1/privacy-workspace-english/step-008.annotated.png)

6. <a id="walkthrough-settings-storage-privacy-06-all-scope"></a>导出范围与隐私设置分开选择。第一张图中，红框 1 是 Current filter 的两条记录，红框 2 是 Export 2 requests；第二张图中，红框 1 的 All traffic 包含四条，红框 2 是 Export 4 requests。全部记录不等于全部都适合分享。

   ![设置后续导出的隐私默认值 · 6](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-017.annotated.png)

   ![设置后续导出的隐私默认值 · 6](../media/v0.1.1-alpha.1/capture-har-all-english/step-013.annotated.png)

7. <a id="walkthrough-settings-storage-privacy-07-one-export-override"></a><a id="walkthrough-settings-privacy-export-05-one-time-override"></a><a id="walkthrough-settings-privacy-export-06-save-override"></a><a id="walkthrough-settings-privacy-export-07-check-override"></a>只想改变一次导出时，在当前 HAR 窗口覆盖遮罩选项，再点击红框 1 的 Export 并选择保存位置。本例保存 `ui-override.har`；这种覆盖不会回写 Privacy 默认值。

   ![设置后续导出的隐私默认值 · 7](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-023.annotated.png)

   ![设置后续导出的隐私默认值 · 7](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-024.png)

8. <a id="walkthrough-settings-storage-privacy-09-default-unchanged"></a><a id="walkthrough-settings-privacy-export-08-defaults-unchanged"></a>回到 Privacy 核对保存的默认值。本图红框 1 的授权遮罩关闭、红框 2 的 Cookie 遮罩开启、红框 3 的警告关闭；单次导出文件与这些默认值是不同对象。

   ![设置后续导出的隐私默认值 · 8](../media/v0.1.1-alpha.1/privacy-workspace-english/step-009.annotated.png)

9. 正常关闭并重新打开 App 后，再核对红框 1 的授权遮罩、红框 2 的 Cookie 遮罩和红框 3 的警告。它们保持关闭前的默认值，不以旧窗口还开着代替重启后的检查。

   ![设置后续导出的隐私默认值 · 9](../media/v0.1.1-alpha.1/privacy-workspace-english/step-016.annotated.png)

10. <a id="walkthrough-settings-storage-privacy-10-restore-privacy"></a><a id="walkthrough-settings-privacy-export-13-restore-privacy"></a><a id="walkthrough-settings-privacy-export-14-restore-auth"></a><a id="walkthrough-settings-privacy-export-15-restore-cookies"></a><a id="walkthrough-settings-privacy-export-16-restore-warning"></a>如果只为测试临时关闭了保护，结束后重新开启红框 1 的授权遮罩、红框 2 的 Cookie 遮罩和红框 3 的未遮罩导出警告。

    ![设置后续导出的隐私默认值 · 10](../media/v0.1.1-alpha.1/privacy-workspace-english/step-019.annotated.png)

11. <a id="walkthrough-settings-privacy-export-10-unmasked-draft"></a><a id="walkthrough-settings-privacy-export-11-save-public"></a><a id="walkthrough-settings-privacy-export-12-check-public"></a>确实需要未遮罩数据时，先确认范围和接收方。本图的授权与 Cookie 遮罩都未选中，红框 1 的 Export 会保存相应原始字段；示例文件为 `ui-plain.har`，不要把它当作已匿名化文件。

    ![设置后续导出的隐私默认值 · 11](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-026.annotated.png)

    ![设置后续导出的隐私默认值 · 11](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-027.png)

12. <a id="walkthrough-settings-privacy-export-17-redacted-draft"></a><a id="walkthrough-settings-privacy-export-18-strip-bodies"></a><a id="walkthrough-settings-privacy-export-19-save-redacted"></a><a id="walkthrough-settings-privacy-export-20-check-redacted"></a><a id="walkthrough-settings-privacy-export-21-clear"></a><a id="walkthrough-settings-privacy-export-22-import"></a><a id="walkthrough-settings-privacy-export-23-open-redacted"></a><a id="walkthrough-settings-privacy-export-24-imported"></a>不需要正文时，选择 Strip request/response bodies，再点击红框 1 的 Export，保存 `ui-stripped.har`。检查最终文件确实不包含正文；以后导入这份文件也不能恢复已移除的字节。

    ![设置后续导出的隐私默认值 · 12](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-029.annotated.png)

    ![设置后续导出的隐私默认值 · 12](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-030.png)

分享前仍需检查 URL query、自定义 Header、业务标识、本地路径和文件正文；遮罩不是对任意业务数据的完整匿名化。原生归档保存完整数据，不默认套用这些 HAR 选项。取消文件草稿、取消正在运行的任务与删除已保存文件是不同操作，见[导出隐私](transfer.md#privacy)。


<a id="agent-mcp"></a>
## 模型、Tool 和 MCP

- 在 Settings > Agent 添加和测试模型，详见 [Agent](agent.md#models)。
- Tool capabilities 的 Agent/MCP 两列分别配置，详见[权限与审批](tool-permissions.md)。
- MCP Server 的开启、客户端和 endpoint 见 [MCP](mcp.md)。

配置模型不自动开启 MCP，开启 MCP 也不要求为内置 Agent 配置模型；外部 Host 使用自己的模型配置。

<a id="updates"></a>
## 检查、下载并打开更新

在已安装的 Windows 或 macOS App 中操作；源码开发运行可能不支持更新。检查、下载和打开安装器是三个独立动作，发现版本不会自动下载。下面先演示检查失败后如何重试。

1. <a id="walkthrough-09-passthrough"></a><a id="walkthrough-10-privacy"></a><a id="walkthrough-11-storage"></a><a id="walkthrough-12-refresh"></a><a id="walkthrough-13-clear-confirm"></a><a id="walkthrough-14-cancel"></a><a id="walkthrough-15-updates"></a><a id="walkthrough-settings-update-check"></a><a id="walkthrough-settings-update-check-01-settings"></a><a id="walkthrough-settings-update-check-02-updates"></a>打开 Settings → Updates，查看 Current application、Latest GitHub release 和 Last update action。当前版本与能够下载的新版本是不同信息。

   ![检查、下载并打开更新 · 1](../media/v0.1.1-alpha.1/settings-update-check-english/step-001.png)

2. <a id="walkthrough-settings-update-check-03-check"></a>点击红框 1 的 Check now，等待本次检查结束。没有必要登录 VS Code，也不要把 GitHub PAT 填进模型配置。

   ![检查、下载并打开更新 · 2](../media/v0.1.1-alpha.1/settings-update-check-english/step-002.annotated.png)

3. <a id="walkthrough-settings-update-check-04-result"></a>本例显示 Failed 和 `GitHub returned HTTP 404`，表示发布源不可用，不是已经处于最新版，也没有下载或安装更新。

   ![检查、下载并打开更新 · 3](../media/v0.1.1-alpha.1/settings-update-check-english/step-003.png)

4. 检查网络、发布地址和访问条件后，可再次点击红框 1 的 Check now。若发布源仍返回 404，页面仍显示失败，不会把重试变成成功。

   ![检查、下载并打开更新 · 4](../media/v0.1.1-alpha.1/settings-update-check-english/step-004.annotated.png)

   ![检查、下载并打开更新 · 4](../media/v0.1.1-alpha.1/settings-update-check-english/step-005.png)

5. 正常关闭并重开 App 后，仍可在 Updates 点击红框 1 的 Check now。重启不会改变发布源的权限；继续按返回的实际状态处理。

   ![检查、下载并打开更新 · 5](../media/v0.1.1-alpha.1/settings-update-check-english/step-007.annotated.png)

   ![检查、下载并打开更新 · 5](../media/v0.1.1-alpha.1/settings-update-check-english/step-008.png)

6. 只有页面发现可用版本时，才阅读版本说明并明确点击 Download。等待下载及完整性校验完成，再点击 Open installer；随后完成系统安装流程，不运行未完成的临时文件。

   ![同一流程相关界面](../media/v0.1.1-alpha.1/settings-update-check-english/step-008.png)
- 更新使用匿名 GitHub 请求；私有发布源、没有合适稳定版本或缺少受支持安装包时，检查可能失败。
- 已发布 Alpha 或只有 macOS ZIP，不等于内置更新已经有可用安装目标。
- 平台、架构和安装格式必须匹配。通知中的 Download、Open installer 与 Settings 使用同一状态，Dismiss 只收起通知。
- 正常退出会收尾正在进行的检查或下载，不用旧临时文件绕过校验。
