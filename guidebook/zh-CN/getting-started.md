# 快速上手：看到第一条请求

> 草稿，写作基线为 `v0.1.1-alpha.1`。请求检查与保存步骤准确引用相关章节实拍，安装、首次授权和退出恢复仍待配图；不代表所有平台或 item9 已验收。

[教程目录](../README.md) · [继续阅读 Capture](capture.md)

## 先了解你要完成什么

让一条不带凭据的 HTTP 请求经过 Interceptor，在 Capture 中检查它，然后正常关闭 App。

本章不需要模型 API Key，不使用 Rules，也不要求先开启 HTTPS 解密。代理转发与 HTTPS 解密是两件事。

## 准备应用

**前提**

- 使用 Windows 或 macOS，取得适合本机系统和架构的安装包。
- 允许安装和运行可信软件；设备上的管理策略可能限制证书或代理设置。
- 确认本机 `127.0.0.1:8888` 没有被其他代理实例占用。

**步骤**

1. 在 [GitHub Releases](https://github.com/zhxmt-xm/Interceptor/releases) 查看实际附件、版本说明及 Pre-release 标记，不把 `Source code` 当作安装包。

   **待配图 / blocked**：现有素材从运行中的发布 App 开始，没有真实 Release 下载页；私有仓库仍需要对应访问权限。

2. macOS 用户选择对应芯片架构的 DMG 或 ZIP，将 App 放到 Applications 后打开。

   **待配图**：没有下载、解压/挂载、放入 Applications 和 Gatekeeper 打开流程，不用运行后的 App 图代替安装步骤。

3. Windows 用户选择 Release 实际提供的安装器或 ZIP；使用 ZIP 时完整解压，不单独取出其中的 EXE 运行。

   **待配图 / blocked**：当前录制均为 macOS，缺 Windows 安装与启动素材。

4. 首次启动时阅读系统提示，只授权确认可信的 Interceptor 操作；等待启动准备结束再使用功能。

   **待配图 / blocked**：录制环境已有 CA 和授权状态，未拍首次系统授权；不删除日常 CA 制造首装场景。

**预期结果**

App 打开并进入工作区。遇到启动错误时先保留错误信息，不反复启动多个实例。

**关键说明**

- 当前源码仓库仍是私有仓库，下载需要有访问权限的 GitHub 账号；教程不会提供可绕过权限的下载地址。
- 该版本的 macOS 包为 ad-hoc 签名、未公证，Windows 包未签名。下载产物的各平台实机安装验收仍有缺口。
- 受 Gatekeeper 或企业策略阻止时，按操作系统针对可信应用提供的正式流程处理；不删除 quarantine、不关闭全局安全保护。
- 证书与系统组件可能在首次启动时准备。不要为了重现“首次启动”删除日常使用的共享 CA。
- 完整的系统授权、证书信任和解密步骤见 [Settings](settings.md#https-decryption)。

## 确认代理与录制就绪

**用途**

先确认请求能够经过代理，并且 Capture 正在记录；仅看到 App 窗口不代表这两项都已就绪。

**步骤**

1. 打开 Capture，查看 Recording 状态和代理就绪提示。

   下图引用 Workspace 的真实 Capture 导航，仅展示工作区，不代表出现或完成了授权。

   ![Workspace 录制中实际打开 Capture](../media/v0.1.1-alpha.1/workspace/workspace-02-capture.png)

2. App 启动会尝试接管系统代理；如果出现就绪提示，阅读当前缺失条件，使用其中的 Enable 或 Proxy settings 入口处理。

   **待配图**：当前素材没有就绪提示、Enable 或 Proxy settings 跳转操作。

3. 代理就绪后点击 Recording 开始录制，确认开启再发请求。下面引用 Capture 的实际开启操作；如果出现原生授权仍须完成，该分支待配图。

   ![代理已就绪时实际开启 Recording](../media/v0.1.1-alpha.1/capture/capture-02-record.png)

**预期结果**

Capture 可以接收经过本地代理的新请求。

**关键说明**

- 取消就绪提示不等于已开启录制。
- 遵循系统代理的应用会使用系统设置；不遵循系统代理的客户端需要单独配置代理。
- 不要用“暂停 Recording”代替恢复系统代理。暂停只控制新流量是否被记录。
- 如果已有其他代理或上游网络工具，不要盲目覆盖它的配置；先核对 Settings 中的系统代理和上游设置。

## 发出第一条 HTTP 请求

**前提**

Recording 已开启。以下图文准确复用 Capture 的 `http://127.0.0.1:58377/guide/capture/orders`；`58377` 是录制环境动态端口，不是 App 固定端口。该演示服务不会随 App 启动，读者必须换成自己已运行、获授权的 HTTP 测试服务。无本机服务时也可用公共 HTTP 地址，但它不属于下面的实拍，结果和配图需另行核对。

**步骤**

1. 先在 Capture 搜索框输入 `/guide/capture`；使用自己的地址时，相应换成自己的 Host/Path 搜索词。

   ![本次实际搜索值 /guide/capture](../media/v0.1.1-alpha.1/capture/capture-01-filter.png)

2. 在终端通过显式代理请求同一地址。以下命令是读者复现该 GET 的方式，不表示步骤图中展示了终端输入。

   macOS：

   ```sh
   curl --proxy http://127.0.0.1:8888 --max-time 20 "http://127.0.0.1:58377/guide/capture/orders"
   ```

   Windows PowerShell：

   ```powershell
   curl.exe --proxy http://127.0.0.1:8888 --max-time 20 "http://127.0.0.1:58377/guide/capture/orders"
   ```

   **待配图**：没有 macOS 终端输入或 Windows PowerShell 操作图；下一张只展示请求进入 Capture，不冒充终端截图。

3. 回到 Capture，等待新 GET 进入列表。

   ![实际外部 GET 到达 Capture](../media/v0.1.1-alpha.1/capture/capture-03-request.png)

4. 选中 orders，确认 Host 为 `127.0.0.1`、Path 为 `/guide/capture/orders`。

   ![选中与地址一致的 orders 请求](../media/v0.1.1-alpha.1/capture/capture-04-select.png)

5. 打开响应，核对本次 JSON 中的 `orderId: guide-001`、`message: Hello Interceptor`、`status: ready`。其他服务以实际状态码为准，不要求必须 `200` 才算捕获。

   ![本次实际 JSON 响应，而非 example.com 页面](../media/v0.1.1-alpha.1/capture/capture-06-response.png)

**预期结果**

能找到本次 GET 请求，并且选中后可以检查详情。HTTP 错误响应仍可能是一次成功捕获；连接失败则需要按实际错误继续排查。

**关键说明**

- 示例不发送登录信息，不需要关闭 TLS 校验，也不会修改服务端数据。
- 若终端配置了 `NO_PROXY` 等绕过规则，确认目标没有绕过显式代理。
- 需要在无外网环境下演练时，改用自己运行的本地 HTTP 服务；教程本身不启动隐藏的测试服务。
- Composer 是直接发送请求的工具，它的请求不会自动出现在 Capture 中；本例因此使用外部客户端。

## 读懂这条请求

**步骤**

1. 在请求详情中查看 URL、方法、状态和协议。

   ![本次 orders 请求的概要](../media/v0.1.1-alpha.1/capture/capture-04-select.png)

2. 打开 Headers，分别检查请求头和响应头；内容折叠时展开对应分组。

   ![本次实际请求与响应 Headers](../media/v0.1.1-alpha.1/capture/capture-05-headers.png)

3. 打开 Response 查看 JSON；其他内容按 MIME 使用 Code、Text 等可用模式，不能把本次 JSON 当成 HTML。

   ![本次 Response JSON](../media/v0.1.1-alpha.1/capture/capture-06-response.png)

4. 选择 Tree 阅读字段层级。

   ![实际 JSON Tree](../media/v0.1.1-alpha.1/capture/capture-07-tree.png)

5. 选择 Raw 阅读文本原貌。

   ![实际 JSON Raw](../media/v0.1.1-alpha.1/capture/capture-08-raw.png)

6. 使用正文全屏入口。

   ![实际打开放大的正文](../media/v0.1.1-alpha.1/capture/capture-08a-fullscreen.png)

7. 按 Escape 返回详情。

   ![实际退出正文全屏](../media/v0.1.1-alpha.1/capture/capture-08b-close-fullscreen.png)

8. 需要检查字节时切换 Hex。

   ![同一正文的实际 Hex](../media/v0.1.1-alpha.1/capture/capture-09-hex.png)

**预期结果**

你能够区分“客户端请求了什么”和“目标返回了什么”，而不是只看到一行请求名称。

**关键说明**

不同内容类型提供不同查看模式。HTML 显示为代码不代表错误，也不会被当成一个网页执行。

## 保存需要的记录并正常退出

**步骤**

以下保存操作的图来自独立的 [Transfer 实拍](transfer.md)，其请求是 `http://127.0.0.1:55059/guide/transfer/order`，`55059` 也是录制环境动态端口；不是声称上面的 Capture 请求已自动导出。实际练习应选中自己要保留的流量。

1. 打开 Capture Export。

   ![Transfer 中实际打开的 Export 菜单](../media/v0.1.1-alpha.1/transfer/transfer-01-export-menu.png)

2. 选择 HAR 交换 HTTP 数据；要保留更多原生流量细节，按 [Native Archive](transfer.md#archive)的独立步骤操作。

   ![实际 HAR 导出配置](../media/v0.1.1-alpha.1/transfer/transfer-02-har-options.png)

3. 核对范围，本次选择当前演示请求。

   ![实际导出当前请求的范围](../media/v0.1.1-alpha.1/transfer/transfer-03-scope.png)

4. 检查正文与隐私选项。

   ![实际 HAR 隐私选项](../media/v0.1.1-alpha.1/transfer/transfer-04-privacy.png)

5. 在真实系统窗口保存 `guide-recording.har`。

   ![实际原生 Save 面板](../media/v0.1.1-alpha.1/transfer/transfer-05-har-save-dialog.png)

6. 等待保存完成，再准备关闭 App。

   ![HAR 保存完成的实际检查点](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

7. 使用 App 正常关闭入口，等待系统操作和代理恢复；忙状态时等操作结束再关闭。

   **待配图**：现有片段没有 App Close、进程结束和系统代理恢复的逐步画面；导出完成或关闭 Agent 面板不能代替退出验收。

**预期结果**

需要保留的记录已经成为你选择的文件，App 正常退出并处理自己接管的代理设置。

**关键说明**

- Capture 属于当前运行中的临时数据，Core 退出或重启会释放它，不应当作持久历史使用。
- 正常关闭不会卸载共享 CA。停用解密、恢复代理、移除证书信任是不同操作。
- 会话期间若其他软件修改了系统代理，Interceptor 不应覆盖对方的新设置；遇到冲突时按实际状态处理。
- 不用强制结束进程代替正常退出。
- 导出范围、取消和各格式差异见[导入导出](transfer.md)；退出后仍有网络问题时，按[恢复步骤](troubleshooting.md#proxy-recovery)排查。

## 没有看到请求时

- 检查 Recording 是否开启，是否仍有未处理的就绪提示。
- 清空搜索条件和筛选条件，而不是直接清空录制记录。
- 核对客户端使用的代理地址和端口；确认没有被绕过规则排除。
- 检查目标请求是否真的发出，以及终端是否报告连接或 DNS 错误。
- HTTPS 仅显示 TLS tunnel 时，先区分“经过代理但未解密”和“完全没有经过代理”；不应直接认定抓包失败。

下一步：[在 Capture 中筛选、检查和保存流量](capture.md)。
