# 快速上手：看到第一条请求

[教程目录](../README.md) · [继续阅读 Capture](capture.md)

## 先了解你要完成什么

让一条不带凭据的 HTTP 请求经过 Interceptor，在 Capture 中检查它，然后正常关闭 App。

本章不需要模型 API Key，不使用 Rules，也不要求先开启 HTTPS 解密。代理转发与 HTTPS 解密是两件事。

## 准备应用

- 使用 Windows 或 macOS，取得适合本机系统和架构的安装包。
- 允许安装和运行可信软件；设备上的管理策略可能限制证书或代理设置。
- 确认本机 `127.0.0.1:8888` 没有被其他代理实例占用。

1. 在 [GitHub Releases](https://github.com/zhxmt-xm/Interceptor/releases) 查看实际附件、版本说明及 Pre-release 标记，不把 `Source code` 当作安装包。

   ![公开 Release 与实际附件](../media/public-release-20261024/github-release-assets.png)

2. macOS 用户选择对应芯片架构的 DMG 或 ZIP，将 App 放到 Applications 后打开。

   ![Release 中的 macOS 架构附件](../media/public-release-20261024/github-release-assets.png)

3. Windows 用户选择 Release 实际提供的安装器或 ZIP；使用 ZIP 时完整解压，不单独取出其中的 EXE 运行。

   ![Release 中的 Windows 安装器和 ZIP](../media/public-release-20261024/github-release-assets.png)

4. 首次启动时阅读系统提示，只授权确认可信的 Interceptor 操作；等待启动准备结束再使用功能。

   ![启动准备结束后的 Interceptor](../media/v0.1.1-alpha.1/workspace-navigation-english/step-013.png)

- 当前源码仓库仍是私有仓库，下载需要有访问权限的 GitHub 账号；教程不会提供可绕过权限的下载地址。
- macOS 包使用 ad-hoc 签名且未公证，Windows 安装器未签名。仅从可信发布入口下载安装。
- 受 Gatekeeper 或企业策略阻止时，按操作系统针对可信应用提供的正式流程处理；不删除 quarantine、不关闭全局安全保护。
- 证书与系统组件可能在首次启动时准备。不要为了重现“首次启动”删除日常使用的共享 CA。
- 完整的系统授权、证书信任和解密步骤见 [Settings](settings.md#https-decryption)。

## 确认代理与录制就绪

先确认客户端能连接代理，并且 Capture 正在录制。仅看到 App 窗口，不代表这两项都已就绪。

1. 从左侧导航点击红框 1 的 Capture，查看顶部录制按钮和底部代理状态。列表是否为空还取决于搜索与筛选条件。

   ![确认代理与录制就绪 · 1](../media/v0.1.1-alpha.1/workspace-navigation-english/step-013.annotated.png)

2. App 启动会尝试接管系统代理。出现就绪提示时，阅读缺失条件，再使用 Enable 或 Proxy settings 处理；需要系统授权时先完成授权。

   ![同一流程相关界面](../media/v0.1.1-alpha.1/workspace-navigation-english/step-013.png)

3. 确认红框 1 显示 Recording。若当前为 Paused，点击录制按钮并完成提示，再发送请求；取消就绪提示不等于录制已开启。

   ![确认代理与录制就绪 · 3](../media/v0.1.1-alpha.1/capture-recording-english/step-002.annotated.png)

- 遵循系统代理的应用会使用系统设置；其他客户端需要单独指定代理。
- Pause 只影响新流量的录制，不代替系统代理 Restore。
- 已有其他代理时先检查 Settings 的系统代理和上游配置，不盲目覆盖。

## 发出第一条 HTTP 请求

先开启 Recording，并准备自己有权使用、可以安全接收 POST 的测试接口。下面使用 `http://127.0.0.1:59696/playground/body/json`，请求正文为 `{"ready":true}`；该服务不会由 App 自动创建，操作时将地址换成自己的接口，不向生产接口随意发送写入请求。

1. 在红框 1 的 Capture 搜索框输入 `/playground/body/json`。使用自己的地址时，改为相应的 Host 或 Path 搜索词。

   ![发出第一条 HTTP 请求 · 1](../media/v0.1.1-alpha.1/capture-json-example-english/step-001.annotated.png)

2. 从终端通过 `127.0.0.1:8888` 发送下面的 JSON。macOS 命令中的 `--noproxy ""` 仅对本次调用取消绕过，避免本机地址被 `NO_PROXY` 排除；Windows 使用 PowerShell 的显式 Proxy 参数。

   ![同一流程相关界面](../media/v0.1.1-alpha.1/capture-json-example-english/step-001.png)
   macOS:

   ```sh
   curl --proxy http://127.0.0.1:8888 --noproxy "" --max-time 20 \
     --header "Content-Type: application/json" \
     --data-raw '{"ready":true}' \
     "http://127.0.0.1:59696/playground/body/json"
   ```

   Windows PowerShell:

   ```powershell
   Invoke-WebRequest -UseBasicParsing -Method Post `
     -Proxy "http://127.0.0.1:8888" `
     -Uri "http://127.0.0.1:59696/playground/body/json" `
     -ContentType "application/json" `
     -Body '{"ready":true}'
   ```


3. 返回 Capture，等待红框 1 的 POST 进入列表。先确认记录出现，再选择它，不用模型或内部接口代替客户端发请求。

   ![发出第一条 HTTP 请求 · 3](../media/v0.1.1-alpha.1/capture-json-example-english/step-002.annotated.png)

4. 点击红框 1 的记录，在详情核对方法 POST、Host `127.0.0.1` 和 Path `/playground/body/json`。使用自己的接口时核对自己的地址。

   ![发出第一条 HTTP 请求 · 4](../media/v0.1.1-alpha.1/capture-json-example-english/step-003.annotated.png)

5. 打开 Response，选择红框 1 的 Raw。示例返回 `{"ready":true,"items":[1,2,3]}`，状态为 `200`；其他服务以实际状态为准，不要求必须 `200` 才算捕获。

   ![发出第一条 HTTP 请求 · 5](../media/v0.1.1-alpha.1/capture-json-example-english/step-006.annotated.png)

- 本例不发送登录凭据，也不需要关闭 TLS 校验。
- 请求没有出现时，先检查代理地址、Recording 和绕过规则，不直接 Clear 现有录制。
- Composer 直接发送请求，不会自动进入 Capture，因此这里使用外部客户端。

## 读懂这条请求

继续查看同一个 POST，不重新发送，也不混入其他请求的正文。

1. 点击红框 1 的 Headers，核对完整 URL、方法、状态和协议，再展开需要的请求头、响应头分组。

   ![读懂这条请求 · 1](../media/v0.1.1-alpha.1/capture-json-example-english/step-004.annotated.png)

2. 打开 Request，选择红框 1 的 Raw，检查已发送的 `{"ready":true}`。这里是请求正文，不是服务器回复。

   ![读懂这条请求 · 2](../media/v0.1.1-alpha.1/capture-json-example-english/step-005.annotated.png)

3. 切回 Response，在红框 1 的 Raw 阅读服务器返回的 `ready` 和 `items`。请求与响应分别查看，不按相同字段名推断两者相同。

   ![读懂这条请求 · 3](../media/v0.1.1-alpha.1/capture-json-example-english/step-006.annotated.png)

4. 选择红框 1 的 Tree，按对象和数组层级阅读 JSON。

   ![读懂这条请求 · 4](../media/v0.1.1-alpha.1/capture-json-example-english/step-007.annotated.png)

5. 点击红框 1 的根节点箭头收起，再点击同一位置展开。这里只改变显示层级，不修改正文内容。

   ![读懂这条请求 · 5](../media/v0.1.1-alpha.1/capture-json-example-english/step-008.annotated.png)

   ![读懂这条请求 · 5](../media/v0.1.1-alpha.1/capture-json-example-english/step-009.annotated.png)

6. 需要复制时点击红框 1 的 Copy。复制的是这条响应的正文，不是重新请求源站。

   ![读懂这条请求 · 6](../media/v0.1.1-alpha.1/capture-json-example-english/step-010.annotated.png)

7. 选择红框 1 的 Raw 回到文本原貌；同一响应和选择对象保持不变。

   ![读懂这条请求 · 7](../media/v0.1.1-alpha.1/capture-json-example-english/step-011.annotated.png)

8. 需要检查字节时选择红框 1 的 Hex。显示形式改变，不代表重新获取了另一份正文。

   ![读懂这条请求 · 8](../media/v0.1.1-alpha.1/capture-json-example-english/step-012.annotated.png)

9. 点击正文的全屏入口放大查看。红框 1 显示 Hex 仍被选中，全屏沿用当前查看模式。

   ![读懂这条请求 · 9](../media/v0.1.1-alpha.1/capture-json-example-english/step-013.annotated.png)

10. 在全屏中切回 Raw，也可通过标题栏红框 1 的 Copy 复制同一份 JSON。

    ![读懂这条请求 · 10](../media/v0.1.1-alpha.1/capture-json-example-english/step-014.annotated.png)

11. 复制后先点回 Raw 收起 Copy 提示，再按 Escape 返回详情。红框 1 表明内联正文仍使用 Raw。

    ![读懂这条请求 · 11](../media/v0.1.1-alpha.1/capture-json-example-english/step-015.annotated.png)

12. 最后核对红框 1 的 Response 和当前记录仍对应原 POST。以上查看、复制和全屏操作都没有重新 Send。

    ![读懂这条请求 · 12](../media/v0.1.1-alpha.1/capture-json-example-english/step-016.annotated.png)

不同内容类型提供不同查看模式。HTML 以代码显示时不会作为网页执行；全屏也不会解除正文预览上限。

## 保存需要的记录并正常退出

导出前先确认要保留哪些流量。下面使用独立的 `/e2e/har-tools/` 文本与二进制请求，当前共有四条记录，并非前面那一个 JSON 请求；操作时按自己的记录选择范围。

1. 先暂停 Recording，再打开 Capture 顶部 Export 菜单，点击红框 1 的 Export HAR。需要保留更多原生流量细节时，改按 [Native Archive](transfer.md#archive) 操作。

   ![保存需要的记录并正常退出 · 1](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-012.annotated.png)

2. 选择红框 1 的 All traffic，核对数量为 4。保留正文，并检查 Authorization、Cookie 和 Set-Cookie 的遮罩选项，再点击红框 2 的 Export 4 requests。自己的录制数量可能不同，不照抄示例数量。

   ![保存需要的记录并正常退出 · 2](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-013.annotated.png)

3. 在系统 Save 窗口选择自己要保存的位置，文件名填 `ui.har`，点击 Save。要取消时使用 Cancel，不把取消当作已经导出。

   ![保存需要的记录并正常退出 · 3](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-014.png)

4. 等待导出完成并返回 Capture。红框 1 是可再次使用的 Export 入口，红框 2 显示录制仍为 Paused；确认文件已保存后再退出。

   ![保存需要的记录并正常退出 · 4](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-015.annotated.png)

5. 点击 App 窗口的正常关闭按钮，等待系统操作和代理恢复；若仍显示忙状态，先等当前操作完成，不强制结束进程。

   ![同一流程相关界面](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-015.png)
- Capture 是当前运行中的临时数据，Core 退出或重启会释放它，不应当作持久历史。
- 正常关闭不会卸载共享 CA；停用解密、恢复代理和移除证书信任是不同操作。
- 若其他软件在会话期间修改了系统代理，Interceptor 不应覆盖对方的新设置，按实际冲突状态处理。
- 各种范围、格式和取消操作见[导入导出](transfer.md)；退出后仍有网络问题时按[恢复步骤](troubleshooting.md#proxy-recovery)排查。


## 没有看到请求时

- 检查 Recording 是否开启，是否仍有未处理的就绪提示。
- 清空搜索条件和筛选条件，而不是直接清空录制记录。
- 核对客户端使用的代理地址和端口；确认没有被绕过规则排除。
- 检查目标请求是否真的发出，以及终端是否报告连接或 DNS 错误。
- HTTPS 仅显示 TLS tunnel 时，先区分“经过代理但未解密”和“完全没有经过代理”；不应直接认定抓包失败。

下一步：[在 Capture 中筛选、检查和保存流量](capture.md)。
