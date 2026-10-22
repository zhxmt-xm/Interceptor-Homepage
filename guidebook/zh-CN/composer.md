# Composer：构造并发送请求

[教程目录](../README.md) · [Capture](capture.md)

## 先区分 Composer 与 Capture

Composer 用来主动构造请求并查看响应。它直接连接目标服务，不经过 Interceptor 的抓包代理：

- 请求不会自动出现在 Capture 列表中。
- 不受 Recording 开关影响。
- 不应用 Rules，也不会按代理流量命中 Breakpoints。
- 不要求先接管系统代理，但目标服务仍需要可达。

当前没有“从 Capture 一键复制到 Composer”的已交付联动；不要把未来设想当成现有按钮。

## 发送第一个请求

准备自己有权访问的 HTTP 或 HTTPS 接口。下面使用 `http://127.0.0.1:58053/e2e/composer/response-section-collapse`；这是示例服务，不会随 App 启动，操作时换成自己的完整地址。

1. <a id="walkthrough"></a>打开 Composer，点击红框 1 中 Collection 顶部的加号，新建请求。

   ![发送第一个请求 · 1](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-001.annotated.png)

2. 新请求默认名为 `Untitled`。方法保持 GET，红框 1 是 URL 输入框；此时还没有发送。

   ![发送第一个请求 · 2](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-002.annotated.png)

3. 在红框 1 填入测试 URL，协议保持 Auto，再点击红框 2 的 Send。如果左侧已单独显示 `http://`，编辑框只填写后面的主机、端口和路径，不要重复粘贴协议。

   ![发送第一个请求 · 3](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-003.annotated.png)

4. 等待下方响应区显示本次结果。示例返回 `200`，JSON 含 `message: response-sections` 和 `items`。响应直接显示在 Composer，不会自动出现在 Capture。

   ![发送第一个请求 · 4](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-004.png)

5. 点击下方响应区的 Headers，区分 Response Headers 与 Request Headers。示例响应为 `application/json`，并包含两条 Set-Cookie；实际值由目标服务决定。

   ![发送第一个请求 · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-005.png)

`4xx`、`5xx` 也是服务器返回的 HTTP 响应，不等于没有发送。出现 DNS、连接或 TLS 错误时按实际提示排查，不用反复切换 Recording。

## 编辑 Query 与 Headers

<a id="walkthrough-composer-fields"></a><a id="walkthrough-composer-replay"></a>
打开要编辑的测试请求。下面使用 `http://127.0.0.1:56993/e2e/composer/fields/json?entry=url`，实际操作换成自己的接口。Query 表格会追加到 URL 已有参数之后，同名值不会自动去重；每次修改后都需要 Send 才会生效。

1. <a id="walkthrough-composer-fields-01-new"></a><a id="walkthrough-composer-fields-02-header"></a><a id="walkthrough-composer-replay-01-open"></a><a id="walkthrough-composer-replay-02-new"></a><a id="walkthrough-composer-replay-04-post"></a>在方法控件的红框 1 选择 POST。打开 Headers，依次在红框 1 的名称和值输入框填写 `x-e2e-current`、`enabled`，点击行末确认；最后一张图红框 1 标出已启用的 Header 行。

   ![编辑 Query 与 Headers · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-039.annotated.png)

   ![编辑 Query 与 Headers · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-040.annotated.png)

   ![编辑 Query 与 Headers · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-041.annotated.png)

   ![编辑 Query 与 Headers · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-042.annotated.png)

2. 再添加 `Content-Type: application/json`。红框 1 是已确认的 Content-Type 行；它只说明请求正文的类型，不会替你创建 JSON 正文。

   ![编辑 Query 与 Headers · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-045.annotated.png)

3. <a id="walkthrough-composer-fields-03-query"></a><a id="walkthrough-composer-replay-05-query"></a><a id="walkthrough-composer-replay-06-query-name"></a><a id="walkthrough-composer-replay-07-query-value"></a><a id="walkthrough-composer-replay-08-add-query"></a>打开 Query，先在 Name 的红框 1 填 `entry`，再在 Value 的红框 1 填 `table`，点击行末确认。最后一张图红框 1 是已添加的 `entry=table`，不是 URL 中原有参数的副本。

   ![编辑 Query 与 Headers · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-046.annotated.png)

   ![编辑 Query 与 Headers · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-047.annotated.png)

   ![编辑 Query 与 Headers · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-048.annotated.png)

   ![编辑 Query 与 Headers · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-049.annotated.png)

4. <a id="walkthrough-composer-replay-09-duplicate-name"></a><a id="walkthrough-composer-replay-10-duplicate-value"></a><a id="walkthrough-composer-replay-11-add-duplicate"></a>按相同方式再添加一行 `entry=again`。红框 1 依次标出名称、值和已添加的第二行；两行都保持启用，不覆盖第一行。

   ![编辑 Query 与 Headers · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-050.annotated.png)

   ![编辑 Query 与 Headers · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-051.annotated.png)

   ![编辑 Query 与 Headers · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-052.annotated.png)

5. <a id="walkthrough-composer-fields-04-send-enabled"></a><a id="walkthrough-composer-replay-03-url"></a><a id="walkthrough-composer-replay-12-send-query"></a>在红框 1 核对 URL 中原有 `entry=url`，再按下一节填写 JSON 正文后 Send。实际地址包含 `entry=url&entry=table&entry=again`；下面仍显示旧响应时，说明这次修改尚未发送，不能把旧状态码当作新结果。

   ![编辑 Query 与 Headers · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-053.annotated.png)

   ![编辑 Query 与 Headers · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-059.png)

6. <a id="walkthrough-composer-fields-05-query-off"></a><a id="walkthrough-composer-fields-06-header-off"></a>需要临时排除字段时，关闭红框 1 所在行的勾选。两张 Query 图分别停用两行，Header 图停用 `x-e2e-current`；值仍保留，不代表下一次还会发送。

   ![编辑 Query 与 Headers · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-083.annotated.png)

   ![编辑 Query 与 Headers · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-084.annotated.png)

   ![编辑 Query 与 Headers · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-085.annotated.png)

7. <a id="walkthrough-composer-fields-07-send-disabled"></a>选择 Body None（红框 1），并把 URL 的红框 1 改为不带参数的 `/e2e/composer/fields/disabled`，再 Send。此时停用的表格字段不发送，正文为空；停用 Query 行不会删除旧 URL 中的参数，所以地址也要单独检查。

   ![编辑 Query 与 Headers · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-086.annotated.png)

   ![编辑 Query 与 Headers · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-087.annotated.png)

   ![编辑 Query 与 Headers · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-088.png)

8. <a id="walkthrough-composer-fields-09-query-delete"></a>确定不再需要时，点击行末删除按钮分别删除两条 Query。红框 1 标出 Query 标签，检查计数随着删除更新；删除与暂时停用不是同一操作。

   ![编辑 Query 与 Headers · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-089.annotated.png)

   ![编辑 Query 与 Headers · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-090.annotated.png)

9. <a id="walkthrough-composer-fields-08-header-delete"></a>再删除自定义 Header。第一张图红框 1 是仍保留的 Content-Type 行；继续删除它后，第二张图红框 1 回到空白名称输入框。确认只移除了自己不需要的字段。

   ![编辑 Query 与 Headers · 9](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-091.annotated.png)

   ![编辑 Query 与 Headers · 9](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-092.annotated.png)

## 选择请求正文

<a id="walkthrough-composer-editing"></a>
先按前一节添加 Header 和两条 Query，方法使用 POST。下面分别发送 JSON、Text 和 Form，示例服务端口为 `56993`。切换正文类型不会自动修改 Content-Type，也不会自动 Send。

1. <a id="walkthrough-composer-editing-01-open"></a><a id="walkthrough-composer-editing-02-new"></a><a id="walkthrough-composer-editing-03-url"></a><a id="walkthrough-composer-editing-04-method"></a><a id="walkthrough-composer-editing-05-json-header"></a><a id="walkthrough-composer-editing-06-body"></a><a id="walkthrough-composer-editing-07-json"></a>在 URL 的红框 1 填 `/e2e/composer/fields/json?entry=url`，把 Header 行的红框 1 设置为 `application/json`。打开 Body，在类型控件的红框 1 选择 JSON。

   ![选择请求正文 · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-053.annotated.png)

   ![选择请求正文 · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-054.annotated.png)

   ![选择请求正文 · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-055.png)

   ![选择请求正文 · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-056.annotated.png)

2. <a id="walkthrough-composer-editing-08-json-input"></a><a id="walkthrough-composer-editing-09-json-send"></a><a id="walkthrough-composer-fields-10-json"></a><a id="walkthrough-composer-fields-11-format"></a><a id="walkthrough-composer-fields-12-send-json"></a>在红框 1 的编辑器输入 `{"message":"formatted-request","count":2}`。点击 Format，比较同一区域的换行和缩进，再 Send；Format 只整理输入，不会替你发送。

   ![选择请求正文 · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-057.annotated.png)

   ![选择请求正文 · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-058.annotated.png)

   ![选择请求正文 · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-059.png)

3. <a id="walkthrough-composer-editing-10-text"></a><a id="walkthrough-composer-editing-11-text-header"></a><a id="walkthrough-composer-editing-11a-text-url"></a><a id="walkthrough-composer-editing-12-text-send"></a><a id="walkthrough-composer-editing-13-form"></a><a id="walkthrough-composer-replay-13-text-url"></a><a id="walkthrough-composer-replay-14-put"></a><a id="walkthrough-composer-replay-15-body"></a><a id="walkthrough-composer-replay-16-text-mode"></a><a id="walkthrough-composer-replay-17-text-partial"></a><a id="walkthrough-composer-replay-18-text-complete"></a><a id="walkthrough-composer-replay-19-send-text"></a>Text 示例改用 `/e2e/composer/fields/text?entry=url`。红框 1 依次标出 URL、Content-Type、正文类型和文本编辑器；将 Content-Type 明确设为 `text/plain`，选择 Text，输入 `Hello text` 后 Send。Text 不会自动补充这个 Header。

   ![选择请求正文 · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-060.annotated.png)

   ![选择请求正文 · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-061.annotated.png)

   ![选择请求正文 · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-063.annotated.png)

   ![选择请求正文 · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-064.annotated.png)

   ![选择请求正文 · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-065.png)

4. <a id="walkthrough-composer-editing-14-form-name"></a><a id="walkthrough-composer-editing-15-form-ready"></a><a id="walkthrough-composer-editing-16-form-header"></a><a id="walkthrough-composer-editing-16a-form-url"></a>Form 示例改用 `/e2e/composer/fields/form?entry=url`，Content-Type 设为 `application/x-www-form-urlencoded`，然后选择 Form。红框 1 分别标出这三个需要修改的位置。

   ![选择请求正文 · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-066.annotated.png)

   ![选择请求正文 · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-067.annotated.png)

   ![选择请求正文 · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-069.annotated.png)

5. <a id="walkthrough-composer-editing-17-form-send"></a>在 Form 新行中，红框 1 填名称、红框 2 填值，依次添加 `name=Interceptor` 和 `ready=true`。完成后的行由红框 1 标出；两行启用后 Send，发送的正文为 `name=Interceptor&ready=true`。

   ![选择请求正文 · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-070.annotated.png)

   ![选择请求正文 · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-071.annotated.png)

   ![选择请求正文 · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-072.annotated.png)

   ![选择请求正文 · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-073.annotated.png)

   ![选择请求正文 · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-074.png)

6. <a id="walkthrough-composer-fields-13-none"></a><a id="walkthrough-composer-fields-14-send-none"></a>不需要正文时选择红框 1 的 None，再对明确的目标 Send。None 不发送编辑器中以前的正文，不是把旧文本改成空字符串后仍发送同一种内容。

   ![选择请求正文 · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-086.annotated.png)

   ![选择请求正文 · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-088.png)

选择 JSON、Text 或 Form 后仍应核对接口要求、Header 和 URL。长文本支持编辑区滚动；认证与正文分开配置，不把 Token 放进 Query 代替 Auth。

## 使用认证

<a id="walkthrough-composer-editing-18-auth"></a><a id="walkthrough-composer-editing-19-bearer"></a><a id="walkthrough-composer-editing-20-basic"></a><a id="walkthrough-composer-auth"></a><a id="walkthrough-composer-editing-21-none"></a>
使用自己有权访问且要求认证的接口。示例地址为 `http://127.0.0.1:57177/e2e/composer/auth`，只接受本地演示值 `workflow-user`、`public-loopback-password` 和 `public-loopback-token`。不要向这个示例地址发送自己的真实凭据。

1. <a id="walkthrough-composer-auth-05-auth-tab"></a><a id="walkthrough-composer-auth-07-username"></a><a id="walkthrough-composer-auth-01-composer"></a><a id="walkthrough-composer-auth-02-new"></a><a id="walkthrough-composer-auth-03-url"></a><a id="walkthrough-composer-auth-04-none"></a><a id="walkthrough-composer-auth-16-explicit-name"></a><a id="walkthrough-composer-auth-23-clear-username"></a>在红框 1 填入认证接口地址，先用 Auth None 发送。服务返回 `401`，表示接口要求认证；接着再配置认证重发。

   ![使用认证 · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-018.annotated.png)

   ![使用认证 · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-019.png)

2. <a id="walkthrough-composer-auth-06-basic"></a>打开请求 Auth，在红框 1 的认证类型中选择 Basic。切换类型不会自动发送。

   ![使用认证 · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-020.annotated.png)

   ![使用认证 · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-021.annotated.png)

3. <a id="walkthrough-composer-auth-08-password"></a><a id="walkthrough-composer-auth-09-basic-result"></a><a id="walkthrough-composer-auth-24-clear-password"></a>红框 1 的 Username 填 `workflow-user`；第二张图红框 2 的 Password 填 `public-loopback-password`。核对后再 Send，不要在 Header 中重复添加同一种认证。

   ![使用认证 · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-022.annotated.png)

   ![使用认证 · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-023.annotated.png)

4. <a id="walkthrough-composer-auth-10-bearer"></a>点击 Send，检查新响应的状态为 `200`。只有收到服务端响应才知道认证是否被接受，不能只看输入框中已有值。

   ![使用认证 · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-024.png)

5. <a id="walkthrough-composer-auth-11-token"></a><a id="walkthrough-composer-auth-12-bearer-result"></a><a id="walkthrough-composer-auth-13-none-again"></a><a id="walkthrough-composer-auth-14-none-result"></a><a id="walkthrough-composer-auth-25-clear-bearer-type"></a><a id="walkthrough-composer-auth-26-clear-token"></a>改用 Bearer 时，先在红框 1 选择 Bearer，再在下一张图红框 1 的 Token 输入框填写公开示例值 `public-loopback-token`。Send 后检查本次 `200`，不要沿用上一条 Basic 的结果。

   ![使用认证 · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-026.annotated.png)

   ![使用认证 · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-027.annotated.png)

   ![使用认证 · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-028.png)

6. <a id="walkthrough-composer-auth-15-headers"></a><a id="walkthrough-composer-auth-17-explicit-value"></a><a id="walkthrough-composer-auth-19-none-keeps-header"></a><a id="walkthrough-composer-auth-27-finish-none"></a>把红框 1 的认证类型切回 None，再 Send。自动生成的 Authorization 不再发送，示例重新返回 `401`；保存的 Basic/Bearer 字段不代表当前仍会使用。

   ![使用认证 · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-030.annotated.png)

   ![使用认证 · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-031.png)

7. <a id="walkthrough-composer-auth-18-add-header"></a><a id="walkthrough-composer-auth-20-delete-header"></a><a id="walkthrough-composer-auth-21-header-removed"></a><a id="walkthrough-composer-auth-22-clear-basic-type"></a>在 None 模式打开 Headers。先在红框 1 的 Name 填 `Authorization`，再在值输入框的红框 1 填 `Bearer public-loopback-token` 并确认添加；最后一张带框图的红框 1 是完整已启用行。Send 仍返回 `200`，因为 None 不会删除你显式添加的 Header。

   ![使用认证 · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-032.annotated.png)

   ![使用认证 · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-033.annotated.png)

   ![使用认证 · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-034.annotated.png)

   ![使用认证 · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-035.annotated.png)

   ![使用认证 · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-036.png)

8. <a id="walkthrough-composer-auth-28-no-capture"></a>删除显式 Authorization 行，红框 1 处只剩空白新行入口，再 Send 检查回到 `401`。调试结束后保留 None，并清除不再需要的认证字段。

   ![使用认证 · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-037.annotated.png)

   ![使用认证 · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-038.png)

Basic 是编码而不是加密。对真实服务使用认证时应通过 HTTPS，并避免把凭据放入 URL、截图或分享文件。

## 查看响应

<a id="walkthrough-composer-inspection"></a><a id="walkthrough-composer-inspection-35-format-url"></a><a id="walkthrough-composer-inspection-36-css-send"></a><a id="walkthrough-composer-inspection-37-css-copy-before"></a><a id="walkthrough-composer-inspection-38-format"></a><a id="walkthrough-composer-inspection-39-css-copy-after"></a>
先完成上面的 GET 请求，再操作同一次响应的 Body、Headers、Cookies 与 Timing。只切换查看方式不会重新 Send，也不会改变服务器响应。

1. <a id="walkthrough-composer-inspection-01-open"></a><a id="walkthrough-composer-inspection-02-new"></a><a id="walkthrough-composer-inspection-03-url"></a><a id="walkthrough-composer-inspection-04-header-name"></a><a id="walkthrough-composer-inspection-05-header-value"></a><a id="walkthrough-composer-inspection-06-add-header"></a><a id="walkthrough-composer-inspection-07-send"></a><a id="walkthrough-composer-inspection-08-headers"></a>打开响应 Headers。Response Headers 是服务端返回的头，Request Headers 是这次发送的头，不要与上方请求编辑表混淆。

   ![查看响应 · 1](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-005.png)

2. <a id="walkthrough-composer-inspection-09-response-collapse"></a><a id="walkthrough-composer-inspection-10-request-collapse"></a>点击红框 1 的 Response Headers 标题收起它，红框 2 的 Request Headers 仍展开。每个标题只控制自己的内容。

   ![查看响应 · 2](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-007.annotated.png)

3. <a id="walkthrough-composer-inspection-11-response-expand"></a><a id="walkthrough-composer-inspection-12-request-expand"></a><a id="walkthrough-composer-inspection-13-cookies"></a>再点击红框 2 收起 Request Headers，然后点击红框 1 重新展开 Response Headers。第二个分组不会跟着重新展开。

   ![查看响应 · 3](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-008.annotated.png)

   ![查看响应 · 3](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-009.annotated.png)

4. <a id="walkthrough-composer-inspection-14-cookies-collapse"></a><a id="walkthrough-composer-inspection-15-cookies-expand"></a><a id="walkthrough-composer-inspection-16-timing"></a>切到 Cookies，红框 1 是 Response Cookies 分组。示例包含 `e2e_session=section-value` 和 `e2e_theme=light`。点击标题可收起、再展开，不会修改 Cookie。

   ![查看响应 · 4](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-010.annotated.png)

   ![查看响应 · 4](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-011.annotated.png)

   ![查看响应 · 4](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-012.png)

5. <a id="walkthrough-composer-inspection-17-timing-collapse"></a><a id="walkthrough-composer-inspection-18-connection-collapse"></a><a id="walkthrough-composer-inspection-19-timing-expand"></a><a id="walkthrough-composer-inspection-20-connection-expand"></a>切到 Timing，红框 1 为 Timing，红框 2 为 Connection。分别折叠、展开两个标题，读取当前请求的耗时和连接信息；一个分组的状态不会影响另一个。

   ![查看响应 · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-013.annotated.png)

   ![查看响应 · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-014.annotated.png)

   ![查看响应 · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-015.annotated.png)

   ![查看响应 · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-016.annotated.png)

   ![查看响应 · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-017.png)

6. <a id="walkthrough-composer-inspection-21-body"></a><a id="walkthrough-composer-inspection-22-tree"></a><a id="walkthrough-composer-inspection-23-tree-collapse"></a><a id="walkthrough-composer-inspection-24-tree-expand"></a><a id="walkthrough-composer-inspection-25-tree-menu"></a><a id="walkthrough-composer-inspection-26-tree-copy-value"></a>返回 Body，红框 1 标出正文查看器。先看 Pretty，再选择 Tree，展开 `items` 查看对象与数组；点击根节点的红框 1 可以收起整棵树。它们都是同一份 JSON，不会重发请求。

   ![查看响应 · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-018.annotated.png)

   ![查看响应 · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-019.annotated.png)

   ![查看响应 · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-020.annotated.png)

   ![查看响应 · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-021.annotated.png)

   ![查看响应 · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-022.png)

7. <a id="walkthrough-composer-inspection-27-raw"></a><a id="walkthrough-composer-inspection-28-copy-raw"></a>切到 Raw，红框 1 是原始响应文本，红框 2 是 Copy。点击 Copy 复制当前模式的内容，别把 Tree 中的局部值当作完整响应。

   ![查看响应 · 7](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-023.annotated.png)

   ![查看响应 · 7](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-024.png)

8. <a id="walkthrough-composer-inspection-29-hex"></a><a id="walkthrough-composer-inspection-30-copy-hex"></a>切到 Hex，在红框 1 查看对应字节并按需 Copy。Hex 是字节视图，不会把响应转换成另一种网络内容。

   ![查看响应 · 8](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-025.annotated.png)

   ![查看响应 · 8](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-026.png)

9. <a id="walkthrough-composer-inspection-31-fullscreen"></a><a id="walkthrough-composer-inspection-32-exit-fullscreen"></a>点击正文的全屏入口扩大查看范围。按 Escape 或关闭按钮返回，红框 1 中仍保留刚才的 Hex 模式；全屏不会解除正文预览上限。

   ![查看响应 · 9](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-027.png)

   ![查看响应 · 9](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-028.annotated.png)

10. <a id="walkthrough-composer-inspection-33-collection-drag"></a><a id="walkthrough-composer-inspection-34-response-drag"></a>拖动请求与响应之间的分隔条调整响应高度，拖动 Collection 右边的分隔条调整左栏宽度。调整空间不会切换当前请求、改变字段或 Send。

    ![查看响应 · 10](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-029.png)

    ![查看响应 · 10](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-016.png)

响应格式化、格式错误和大正文限制见下面的操作。需要精确对比时，先确认当前请求、响应标签和查看模式。


<a id="walkthrough-composer-response-formatting"></a>
## 检查响应格式化、格式错误和预览上限

响应正文的查看规则相同：小的 HTML/JavaScript 可以自动格式化；无效 XML 保留原文；超过 `2 MiB` 时只展示预览。下面的图与下一节使用同一组英文请求，不再切换到另一组示例值。

1. <a id="walkthrough-composer-response-formatting-html-01-new"></a><a id="walkthrough-composer-response-formatting-html-02-name"></a><a id="walkthrough-composer-response-formatting-html-03-url"></a><a id="walkthrough-composer-response-formatting-html-04-send"></a><a id="walkthrough-composer-response-formatting-html-06-copy"></a><a id="walkthrough-composer-response-formatting-javascript-01-new"></a><a id="walkthrough-composer-response-formatting-javascript-02-name"></a><a id="walkthrough-composer-response-formatting-javascript-03-url"></a><a id="walkthrough-composer-response-formatting-javascript-04-send"></a><a id="walkthrough-composer-response-formatting-javascript-06-copy"></a>分别 Send HTML 和 JavaScript 请求，检查红框 1 中的显示。HTML 可看到整理后的层级；短 JavaScript 格式化后仍可能是一行，不能仅凭行数判断失败。

   ![检查响应格式化、格式错误和预览上限 · 1](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-001.annotated.png)

   ![检查响应格式化、格式错误和预览上限 · 1](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-002.annotated.png)

2. <a id="walkthrough-composer-response-formatting-xml-01-new"></a><a id="walkthrough-composer-response-formatting-xml-02-name"></a><a id="walkthrough-composer-response-formatting-xml-03-url"></a><a id="walkthrough-composer-response-formatting-xml-04-send"></a><a id="walkthrough-composer-response-formatting-xml-05-format"></a><a id="walkthrough-composer-response-formatting-xml-06-copy"></a>无效 XML 点击 Format 后，在红框 1 查看失败提示和未被改变的 `<root><`。格式化不是修复器，不会把无效输入改造成合法 XML。

   ![检查响应格式化、格式错误和预览上限 · 2](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-005.annotated.png)

3. <a id="walkthrough-composer-response-formatting-large-01-new"></a><a id="walkthrough-composer-response-formatting-large-02-name"></a><a id="walkthrough-composer-response-formatting-large-03-url"></a><a id="walkthrough-composer-response-formatting-large-04-send"></a><a id="walkthrough-composer-response-formatting-large-06-copy"></a>超过 `2 MiB` 时，红框 1 的 Format 禁用，红框 2 只显示受限预览及提示。Copy 复制当前显示部分，不等于完整响应；此 Composer 查看器没有 Save body 入口。

   ![检查响应格式化、格式错误和预览上限 · 3](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-007.annotated.png)

4. <a id="walkthrough-composer-response-formatting-restore-html"></a>切回前面的 CSS 请求，红框 1 的正文保留自己先前的格式化视图。另一个请求的查看模式或错误状态不会替换这条请求的内容。

   ![检查响应格式化、格式错误和预览上限 · 4](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-006.annotated.png)


<a id="walkthrough-composer-formatting-workflow"></a>
## 手动格式化超过自动阈值的正文

Format 改变的是响应查看方式，不会修改网络响应。先完成发送，再根据正文大小和格式选择自动查看或手动 Format。

1. <a id="walkthrough-composer-formatting-workflow-step-001"></a><a id="walkthrough-composer-formatting-workflow-step-002"></a>打开 HTML 或 JavaScript 响应，查看红框 1 中的正文区域。符合自动格式化条件时，这里直接显示整理后的缩进，不需要再次发送。

   ![01 · HTML自动格式化](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-001.annotated.png)

   ![02 · JavaScript自动格式化](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-002.annotated.png)

2. <a id="walkthrough-composer-formatting-workflow-step-003"></a><a id="walkthrough-composer-formatting-workflow-step-004"></a>打开超过自动格式化阈值、但仍可完整预览的 CSS，滚到末尾查看 `.a` 规则。红框 1 是 Format 按钮，红框 2 是正文；点击 Format 后，在正文末尾比较换行和缩进。

   ![03 · 查看超过自动阈值的CSS原文](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-003.annotated.png)

   ![04 · 手动Format CSS](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-004.annotated.png)

3. <a id="walkthrough-composer-formatting-workflow-step-005"></a><a id="walkthrough-composer-formatting-workflow-step-006"></a>无效 XML 无法格式化时，在红框 1 中查看失败提示和保留的原文。再切回先前的 CSS 请求并滚到末尾，确认手动格式化的换行和缩进仍保留，不需要重新 Format。

   ![05 · 格式化失败保留XML原文](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-005.annotated.png)

   ![06 · 切回CSS请求保持格式化视图](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-006.annotated.png)

4. <a id="walkthrough-composer-formatting-workflow-step-007"></a>正文超过 `2 MiB`、预览已截断时，红框 1 中的 Format 按钮不可用；红框 2 标出截断提示和当前正文预览。不要把 Copy 的结果当作完整响应；Composer 的响应查看器没有 Save body 入口。

   ![07 · 检查2MiB预览与禁用Format](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-007.annotated.png)

## 管理 Collection

<a id="walkthrough-composer-editing-24-move"></a><a id="walkthrough-composer-collection"></a>
Collection 自动保存请求和目录编辑，不另设 Save 按钮。下面用 `E2E level 1 → E2E level 2 → E2E level 3` 演示三级目录；名称可按自己的项目修改。

1. <a id="walkthrough-composer-collection-01-open"></a><a id="walkthrough-composer-collection-02-folder-1"></a><a id="walkthrough-composer-collection-02-folder-2"></a><a id="walkthrough-composer-collection-02-folder-3"></a>点击红框 1 的 New folder，在行内名称框的红框 1 输入 `E2E level 1` 并按 Enter。最后一张图红框 1 标出新目录。

   ![管理 Collection · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-001.annotated.png)

   ![管理 Collection · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-002.annotated.png)

   ![管理 Collection · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-003.annotated.png)

2. <a id="walkthrough-composer-collection-03-depth-limit"></a><a id="walkthrough-composer-collection-04-request-1"></a><a id="walkthrough-composer-collection-04-request-2"></a>打开第一级目录菜单，点击红框 1 的 New folder，创建 `E2E level 2`；再从第二级目录的同一入口创建 `E2E level 3`。每次输入名称后按 Enter。

   ![管理 Collection · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-004.annotated.png)

   ![管理 Collection · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-005.annotated.png)

   ![管理 Collection · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-006.annotated.png)

   ![管理 Collection · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-007.png)

3. <a id="walkthrough-composer-collection-05-switch-1"></a><a id="walkthrough-composer-collection-05-switch-2"></a>第三级目录菜单中，红框 1 的 New folder 已禁用，不能再套第四级；点击红框 2 的 New request，下一张图红框 1 中出现 `Untitled`。

   ![管理 Collection · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-008.annotated.png)

   ![管理 Collection · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-009.annotated.png)

4. <a id="walkthrough-composer-collection-06-rename-folder"></a>在红框 1 输入 `http://127.0.0.1:56993/e2e/collection/first`，替换成自己的地址。此处只编辑，不点击 Send。

   ![管理 Collection · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-010.annotated.png)

5. <a id="walkthrough-composer-editing-22-rename"></a><a id="walkthrough-composer-editing-23-folder"></a><a id="walkthrough-composer-collection-07-reorder"></a>右键请求，在红框 1 选择 Rename，然后在名称输入框的红框 1 填 `E2E renamed request` 并按 Enter。离开 Composer 再返回，检查名称和 URL 仍保留。

   ![管理 Collection · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-011.annotated.png)

   ![管理 Collection · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-012.annotated.png)

   ![管理 Collection · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-013.png)

6. 点击红框 1 的目录只改变下一次新建的落点；红框 2 的当前请求 URL 不应改变。点击树中空白处可取消目录落点，拖动 Collection 分隔条只调整宽度。

   ![管理 Collection · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-014.annotated.png)

   ![管理 Collection · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-015.png)

   ![管理 Collection · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-016.png)

7. 在同一目录中新建另一条请求，为它填入 `/e2e/collection/second`。红框 1 表示选中的请求，红框 2 是它自己的 URL；在两条请求之间切换，检查各自内容没有串改。

   ![管理 Collection · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-094.annotated.png)

   ![管理 Collection · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-095.annotated.png)

   ![管理 Collection · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-096.png)

8. <a id="walkthrough-composer-collection-11-delete-request"></a>用目录菜单把红框 1 的第三级目录改名为 `E2E renamed folder`，再将第二条请求拖到第一条之前。确认同级顺序变化，当前请求仍保持自己的 URL。

   ![管理 Collection · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-097.annotated.png)

   ![管理 Collection · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-098.png)

9. <a id="walkthrough-composer-collection-12-delete-folder"></a>先导出需要保留的数据，再右键不需要的请求并点击红框 1 的 Delete。检查仅删除选中的请求，另一条仍保留。

   ![管理 Collection · 9](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-099.annotated.png)

   ![管理 Collection · 9](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-100.png)

10. 删除目录时，在其菜单点击红框 1 的 Delete。目录内的请求会一并删除；确认自动保存完成后再结束操作。

    ![管理 Collection · 10](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-101.annotated.png)

    ![管理 Collection · 10](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-102.png)


<a id="walkthrough-composer-persistence-save"></a>
## 保存包含完整字段的请求

Collection 自动保存每条请求的字段。下面使用只属于本地示例的 Query、Header 和 Auth 值检查保存；这些演示值不能用于真实账号。请求最初名为 `Untitled`，后面的 Tool 操作将它改名为 `Collection MCP`。

1. <a id="walkthrough-composer-persistence-save-01-new-request"></a><a id="walkthrough-composer-persistence-save-02-name"></a><a id="walkthrough-composer-persistence-save-03-url"></a><a id="walkthrough-composer-persistence-save-04-method"></a><a id="walkthrough-composer-persistence-save-05-protocol"></a>新建请求，在 URL 的红框 1 填入自己的测试地址。示例为 `http://127.0.0.1:60293/e2e/collection/no-send?token=collection-query-private-value`。分别在红框 1 选择 POST 和 HTTP/1.1，先不 Send。

   ![保存包含完整字段的请求 · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-001.annotated.png)

   ![保存包含完整字段的请求 · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-002.annotated.png)

   ![保存包含完整字段的请求 · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-003.annotated.png)

   ![保存包含完整字段的请求 · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-004.annotated.png)

2. <a id="walkthrough-composer-persistence-save-06-header-x-guide-persist"></a><a id="walkthrough-composer-persistence-save-06-header-x-guide-disabled"></a><a id="walkthrough-composer-persistence-save-07-disable-header"></a>添加两条 Header：第一条是本地示例的 Authorization，第二条为 `x-e2e-disabled: omitted`。红框 1 标出刚添加的行；关闭第二行的勾选后，它仍保存，但不参与发送。

   ![保存包含完整字段的请求 · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-005.annotated.png)

   ![保存包含完整字段的请求 · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-006.annotated.png)

   ![保存包含完整字段的请求 · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-007.annotated.png)

3. <a id="walkthrough-composer-persistence-save-08-query"></a>在 Query 添加 `scope=retained`，红框 1 是已启用的新行。URL 中的原有参数与这个表格行分别保存。

   ![保存包含完整字段的请求 · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-008.annotated.png)

4. <a id="walkthrough-composer-persistence-save-10-auth"></a>在红框 1 选择 Bearer，再在 Token 输入框的红框 1 填入仅用于本地示例的 `collection-auth-private-value`。不要复制自己的真实凭据到教程示例。

   ![保存包含完整字段的请求 · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-009.annotated.png)

   ![保存包含完整字段的请求 · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-010.annotated.png)

5. <a id="walkthrough-composer-persistence-save-09-json"></a>Body 选择 JSON，在红框 1 填入 `{"collection":"owned-body"}`。等待字段自动保存，仍不点击 Send。

   ![保存包含完整字段的请求 · 5](../media/v0.1.1-alpha.1/composer-saved-request-english/step-011.annotated.png)

6. <a id="walkthrough-composer-persistence-save-11-saved"></a>需要整理时，新建另一条请求并放入 `Collection group`。红框 1 分别标出第二条请求的 URL、新目录和移动后的目录；目录只负责组织，不触发请求。保存完成后再正常关闭 App。

   ![保存包含完整字段的请求 · 6](../media/v0.1.1-alpha.1/composer-saved-request-english/step-012.annotated.png)

   ![保存包含完整字段的请求 · 6](../media/v0.1.1-alpha.1/composer-saved-request-english/step-013.annotated.png)

   ![保存包含完整字段的请求 · 6](../media/v0.1.1-alpha.1/composer-saved-request-english/step-014.annotated.png)


<a id="walkthrough-composer-persistence-restart"></a>
## 重新打开保存的请求再发送

重新打开 App 不会自动重发 Collection 请求。继续使用上面的同一份配置；示例中的 `Untitled` 已通过后面的集合 Tool 改名为 `Collection MCP`，不是新建的另一个请求。

1. <a id="walkthrough-composer-persistence-restart-01-folder-1"></a><a id="walkthrough-composer-persistence-restart-01-folder-2"></a><a id="walkthrough-composer-persistence-restart-01-folder-3"></a><a id="walkthrough-composer-persistence-restart-02-select"></a>打开 Composer，选择红框 1 的 `Collection MCP`。下一张图红框 1 是保存的 POST，红框 2 是 HTTP/1.1；无需重新配置。

   ![重新打开保存的请求再发送 · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-042.annotated.png)

   ![重新打开保存的请求再发送 · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-043.annotated.png)

2. <a id="walkthrough-composer-persistence-restart-03-headers"></a><a id="walkthrough-composer-persistence-restart-04-query"></a><a id="walkthrough-composer-persistence-restart-05-body"></a><a id="walkthrough-composer-persistence-restart-06-auth"></a>依次检查 Auth、Headers、Query 和 Body。各图红框 1 分别标出回载的 Token、仍停用的 `x-e2e-disabled` 行、`scope=retained` 和 JSON 正文；没有重新填写，也不要误把停用行启用。

   ![重新打开保存的请求再发送 · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-044.annotated.png)

   ![重新打开保存的请求再发送 · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-045.annotated.png)

   ![重新打开保存的请求再发送 · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-046.annotated.png)

   ![重新打开保存的请求再发送 · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-047.annotated.png)

3. <a id="walkthrough-composer-persistence-restart-07-send"></a><a id="walkthrough-composer-persistence-restart-08-clear-auth"></a><a id="walkthrough-composer-persistence-restart-09-none"></a>确认自己的测试服务仍可访问，再点击一次 Send。请求路径含原有 Query 和 `scope=retained`，正文仍为 `{"collection":"owned-body"}`，停用 Header 不发送。结束后切回 Auth None，并清除不再需要的示例认证值。

   ![重新打开保存的请求再发送 · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-048.png)

## 使用 Recent sends

Recent sends 只恢复最近的方法和已组合 URL，不是完整请求快照或持久历史。当前 Query、Header 和 Body 不会被旧请求替换；再次 Send 会再追加一次当前启用的 Query。

1. <a id="walkthrough-composer-fields-15-history"></a><a id="walkthrough-composer-replay-20-query-again"></a><a id="walkthrough-composer-replay-21-query-current"></a>先确认前面的 JSON、Text 或 Form 请求已经发送过。打开 Query，把红框 1 中第一行的值从 `table` 改为 `current`，第二行仍为 `again`。

   ![使用 Recent sends · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-075.png)

   ![使用 Recent sends · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-076.annotated.png)

2. <a id="walkthrough-composer-replay-22-body-again"></a><a id="walkthrough-composer-replay-23-body-current"></a>把红框 1 的 `x-e2e-current` 改为 `current`，红框 2 的 Content-Type 改为 `text/plain`。再在正文编辑器的红框 1 输入 `Hello replay`。最后一张图红框 1 为当前方法、红框 2 为当前正文，先不要 Send。

   ![使用 Recent sends · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-077.annotated.png)

   ![使用 Recent sends · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-078.annotated.png)

   ![使用 Recent sends · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-079.annotated.png)

3. <a id="walkthrough-composer-replay-24-history"></a>点击 URL 右侧的时钟打开 Recent sends，选择红框 1 中之前的 JSON 请求。先核对列表中的方法和完整 URL，别只看相同的主机名。

   ![使用 Recent sends · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-080.annotated.png)

4. <a id="walkthrough-composer-fields-16-check-restored"></a><a id="walkthrough-composer-replay-25-restore-old"></a><a id="walkthrough-composer-replay-26-current-query"></a>选择后，红框 1 恢复 POST 和含 `entry=url&entry=table&entry=again` 的历史 URL；红框 2 仍是当前的 `Hello replay`。仅选择历史项不会发送。

   ![使用 Recent sends · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-081.annotated.png)

5. <a id="walkthrough-composer-replay-27-resend"></a><a id="walkthrough-composer-replay-28-confirm-body"></a>点击 Send 后，当前两条 Query 再追加一次，地址中的五个值依次为 `url`、`table`、`again`、`current`、`again`。正文仍为 `Hello replay`；不想要重复值时，发送前先整理 URL 和 Query 表格。

   ![使用 Recent sends · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-082.png)

## 导出和导入 Collection

<a id="walkthrough-composer-collection-09-open-import"></a>
Collection 文件保存请求和目录配置，不会把其中的请求发送到网络。下面先从 App 导出自己的集合，再用同一个文件练习导入；两个示例请求仍叫 `Untitled`，通过 URL 区分。

1. <a id="walkthrough-composer-editing-25-export"></a>准备第一条 POST 请求：红框 1 的 URL 填 `collection.e2e.invalid/first?existing=1`，添加 `source=first` Query 和 `x-collection-e2e: first` Header。各自红框 1 标出对应字段；这里仅保存配置，不请求这个示例地址。

   ![导出和导入 Collection · 1](../media/v0.1.1-alpha.1/composer-import-english/step-002.annotated.png)

   ![导出和导入 Collection · 1](../media/v0.1.1-alpha.1/composer-import-english/step-004.annotated.png)

   ![导出和导入 Collection · 1](../media/v0.1.1-alpha.1/composer-import-english/step-008.annotated.png)

   ![导出和导入 Collection · 1](../media/v0.1.1-alpha.1/composer-import-english/step-011.annotated.png)

2. 第二条请求使用 `collection.e2e.invalid/second` 和 `x-collection-e2e: second`。红框 1 依次标出 URL、Header、新建的 `E2E collection folder` 和移入后的请求；把第二条请求拖进目录，等待自动保存。

   ![导出和导入 Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-013.annotated.png)

   ![导出和导入 Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-016.annotated.png)

   ![导出和导入 Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-018.annotated.png)

   ![导出和导入 Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-019.annotated.png)

   ![导出和导入 Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-020.png)

3. <a id="walkthrough-composer-editing-26-exported"></a><a id="walkthrough-composer-editing-27-import"></a><a id="walkthrough-composer-collection-08-export"></a>点击 Collection 工具栏的 Export，在 Save 面板选择自己的目录并保存为 `collection-roundtrip.json`。等保存结束再做下一步，不使用别人提供的未知文件。

   ![导出和导入 Collection · 3](../media/v0.1.1-alpha.1/composer-import-english/step-021.png)

   ![导出和导入 Collection · 3](../media/v0.1.1-alpha.1/composer-import-english/step-022.png)

4. <a id="walkthrough-composer-editing-28-preview"></a><a id="walkthrough-composer-collection-10-cancel-preview"></a><a id="walkthrough-composer-editing-29-confirm"></a>点击 Import，选择刚导出的同一文件。导入前图片的红框 1 是原目录；预览中的红框 1 是待导入内容，红框 2 是 Cancel。先检查请求、目录和警告，再决定继续还是取消。

   ![导出和导入 Collection · 4](../media/v0.1.1-alpha.1/composer-import-english/step-023.annotated.png)

   ![导出和导入 Collection · 4](../media/v0.1.1-alpha.1/composer-import-english/step-024.png)

   ![导出和导入 Collection · 4](../media/v0.1.1-alpha.1/composer-import-english/step-025.annotated.png)

5. 点击 Cancel 后检查原 Collection、当前打开请求和目录落点都没有改变。取消不追加，也不发送文件中的请求。

   ![导出和导入 Collection · 5](../media/v0.1.1-alpha.1/composer-import-english/step-026.png)

6. 再次 Import 同一个文件，检查预览红框 1 后点击红框 2 的确认按钮。下一张图红框 1 是新追加的目录；导入创建新的请求身份，不按名称覆盖原项目。

   ![导出和导入 Collection · 6](../media/v0.1.1-alpha.1/composer-import-english/step-027.png)

   ![导出和导入 Collection · 6](../media/v0.1.1-alpha.1/composer-import-english/step-028.annotated.png)

   ![导出和导入 Collection · 6](../media/v0.1.1-alpha.1/composer-import-english/step-029.annotated.png)

7. 选择导入请求（红框 1），检查 URL（红框 2）与原文件一致，再检查 Query 行的红框 1。离开 Composer 再返回后，新旧集合仍保留；只有手动 Send 才发出请求。

   ![导出和导入 Collection · 7](../media/v0.1.1-alpha.1/composer-import-english/step-030.annotated.png)

   ![导出和导入 Collection · 7](../media/v0.1.1-alpha.1/composer-import-english/step-031.annotated.png)

   ![导出和导入 Collection · 7](../media/v0.1.1-alpha.1/composer-import-english/step-032.png)

   ![导出和导入 Collection · 7](../media/v0.1.1-alpha.1/composer-import-english/step-033.annotated.png)

分享前检查 URL、Header、正文和认证字段。导出文件可能包含凭据，导入预览不能替代隐私检查。

## 从 Agent 或 MCP 使用 Composer

<a id="walkthrough-composer-tools"></a>
先配置自己的模型或 MCP Client，并在 Settings 中只允许需要的 Composer 能力。发送请求属于会产生网络访问的 change 操作；读取 Collection 是 query，修改 Collection 不会自动 Send。

1. <a id="walkthrough-composer-tools-01-ask-client"></a><a id="walkthrough-composer-tools-02-composer"></a><a id="walkthrough-composer-tools-03-create"></a><a id="walkthrough-composer-tools-04-rename-menu"></a><a id="walkthrough-composer-tools-05-name"></a><a id="walkthrough-composer-tools-06-url"></a><a id="walkthrough-composer-tools-07-header"></a><a id="walkthrough-composer-tools-08-ui-send"></a><a id="walkthrough-composer-tools-09-saved"></a><a id="walkthrough-composer-tools-10-query"></a><a id="walkthrough-composer-tools-11-send-ask"></a>让调用方准备测试请求，在 Ask 审批中核对 `composer_send_request`、完整 URL、方法和正文。不想发送时点击红框 1 的 Deny Tool；拒绝后不会访问目标服务。

   ![从 Agent 或 MCP 使用 Composer · 1](../media/v0.1.1-alpha.1/agent-composer-english/step-001.annotated.png)

   ![从 Agent 或 MCP 使用 Composer · 1](../media/v0.1.1-alpha.1/agent-composer-english/step-002.png)

2. <a id="walkthrough-composer-tools-12-send-deny"></a><a id="walkthrough-composer-tools-13-send-again"></a><a id="walkthrough-composer-tools-14-send-allow"></a><a id="walkthrough-composer-tools-15-ui-response-kept"></a>确认允许的请求后点击红框 1 的 Allow Tool。示例 POST 返回 `201`，结果显示在调用方的 Tool 记录里；它直接出站，不会因为 Recording 开启而自动进入 Capture，也不会替换已有的 Composer 响应。

   ![从 Agent 或 MCP 使用 Composer · 2](../media/v0.1.1-alpha.1/agent-composer-english/step-003.annotated.png)

   ![从 Agent 或 MCP 使用 Composer · 2](../media/v0.1.1-alpha.1/agent-composer-english/step-004.png)

3. <a id="walkthrough-composer-tools-16-replace-ask"></a><a id="walkthrough-composer-tools-17-replace-deny"></a><a id="walkthrough-composer-tools-18-replace-again"></a><a id="walkthrough-composer-tools-19-replace-allow"></a>修改集合前，让调用方先读取当前 Collection，再提出基于当前版本的修改。红框 1 是待审批的替换或修改后的请求名称：Deny 保留原集合；Allow 后名称更新为 `Collection allowed`。不要把读取到的遮罩凭据当作新值覆盖原配置。

   ![从 Agent 或 MCP 使用 Composer · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-016.annotated.png)

   ![从 Agent 或 MCP 使用 Composer · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-017.png)

   ![从 Agent 或 MCP 使用 Composer · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-018.annotated.png)

   ![从 Agent 或 MCP 使用 Composer · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-019.annotated.png)

4. <a id="walkthrough-composer-tools-20-query-latest"></a><a id="walkthrough-composer-tools-21-mcp-settings"></a><a id="walkthrough-composer-tools-22-disable"></a>红框 1 的 Auto 只改变审批方式，不取消权限和版本检查。示例自动修改后，名称成为 `Collection auto`；旧 revision 再提交会被拒绝，先重新读取再决定如何合并。

   ![从 Agent 或 MCP 使用 Composer · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-025.annotated.png)

   ![从 Agent 或 MCP 使用 Composer · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-026.annotated.png)

   ![从 Agent 或 MCP 使用 Composer · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-027.png)

5. 外部 MCP 修改会弹出独立审批。红框 1 中核对 Client、Tool、参数和变更范围，再选择 Deny 或 Allow；Agent 的权限开关不会代替 MCP 的独立授权。

   ![从 Agent 或 MCP 使用 Composer · 5](../media/v0.1.1-alpha.1/composer-saved-request-english/step-034.annotated.png)

   ![从 Agent 或 MCP 使用 Composer · 5](../media/v0.1.1-alpha.1/composer-saved-request-english/step-035.annotated.png)

6. `composer_probe_connection` 只探测 TLS 握手，不发送 HTTP 请求。成功并不表示目标接口返回成功；失败时按返回的地址、端口和 TLS 信息排查。

   ![从 Agent 或 MCP 使用 Composer · 6](../media/v0.1.1-alpha.1/agent-composer-english/step-005.png)

7. 运行中的请求需要取消时点击 Stop，随后先检查实际执行状态再决定是否重试。结束调试后，在 Settings 关闭不再需要的 Composer Tool 权限；旧对话不能绕过已关闭的权限。

   ![从 Agent 或 MCP 使用 Composer · 7](../media/v0.1.1-alpha.1/agent-composer-english/step-006.png)

   ![从 Agent 或 MCP 使用 Composer · 7](../media/v0.1.1-alpha.1/agent-composer-english/step-007.png)


<a id="walkthrough-composer-file-tools"></a>
## 审批 Collection 文件导出与导入

先保存自己的 Collection，再让已授权的 Agent 或 MCP 调用文件 Tool。下面使用两条示例请求与 `Transfer folder`；导入只选择先由产品 Export 生成的同一文件，不会自动发送请求。

1. <a id="walkthrough-composer-file-tools-01-request"></a><a id="walkthrough-composer-file-tools-02-url"></a><a id="walkthrough-composer-file-tools-03-header"></a>先在 Collection 点击 Export，保存 `product-collection.json`。返回 App 后，红框 1 分别标出 Export 入口和已保存集合；这是后续 Import 使用的文件。

   ![审批 Collection 文件导出与导入 · 1](../media/v0.1.1-alpha.1/composer-file-tools-english/step-015.png)

   ![审批 Collection 文件导出与导入 · 1](../media/v0.1.1-alpha.1/composer-file-tools-english/step-016.annotated.png)

   ![审批 Collection 文件导出与导入 · 1](../media/v0.1.1-alpha.1/composer-file-tools-english/step-017.annotated.png)

2. <a id="walkthrough-composer-file-tools-04-export-ask"></a><a id="walkthrough-composer-file-tools-05-export-deny"></a><a id="walkthrough-composer-file-tools-06-export-cancel-ask"></a><a id="walkthrough-composer-file-tools-07-save-cancel-panel"></a><a id="walkthrough-composer-file-tools-08-save-cancelled"></a>调用 `composer_export_collection` 后，在红框 1 的审批中确认影响。Deny 不导出；Allow 后仍需操作 Save 面板。在原生面板 Cancel 后，返回调用方检查取消结果，不把允许 Tool 当作文件已经保存。

   ![审批 Collection 文件导出与导入 · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-018.annotated.png)

   ![审批 Collection 文件导出与导入 · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-019.png)

   ![审批 Collection 文件导出与导入 · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-020.annotated.png)

   ![审批 Collection 文件导出与导入 · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-021.png)

   ![审批 Collection 文件导出与导入 · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-022.png)

3. <a id="walkthrough-composer-file-tools-09-export-save-ask"></a><a id="walkthrough-composer-file-tools-10-save-file"></a><a id="walkthrough-composer-file-tools-11-export-result"></a>需要实际导出时，重新核对红框 1 中的审批并 Allow，在 Save 面板保存 `tool-export.json`。等待调用结束后再使用文件。

   ![审批 Collection 文件导出与导入 · 3](../media/v0.1.1-alpha.1/composer-file-tools-english/step-029.annotated.png)

   ![审批 Collection 文件导出与导入 · 3](../media/v0.1.1-alpha.1/composer-file-tools-english/step-030.png)

   ![审批 Collection 文件导出与导入 · 3](../media/v0.1.1-alpha.1/composer-file-tools-english/step-031.png)

4. <a id="walkthrough-composer-file-tools-12-import-deny-ask"></a><a id="walkthrough-composer-file-tools-13-import-denied"></a><a id="walkthrough-composer-file-tools-14-open-cancel-ask"></a><a id="walkthrough-composer-file-tools-15-open-cancel-panel"></a><a id="walkthrough-composer-file-tools-16-open-cancelled"></a>`composer_import_collection` 也有自己的审批（红框 1）。Deny 不导入；Allow 后仍要选择文件。取消 Open 会保留原 Collection，不会产生半份导入。

   ![审批 Collection 文件导出与导入 · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-023.annotated.png)

   ![审批 Collection 文件导出与导入 · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-024.png)

   ![审批 Collection 文件导出与导入 · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-025.annotated.png)

   ![审批 Collection 文件导出与导入 · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-026.png)

   ![审批 Collection 文件导出与导入 · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-027.png)

5. <a id="walkthrough-composer-file-tools-cancel-preview-ask"></a><a id="walkthrough-composer-file-tools-cancel-preview-open"></a><a id="walkthrough-composer-file-tools-cancel-preview-preview"></a><a id="walkthrough-composer-file-tools-cancel-preview-decision"></a>允许 Import 后，在 Open 中选择 `product-collection.json`。预览图的红框 1 是待导入内容，红框 2 是 Cancel；检查数量和内容后取消，集合保持不变。

   ![审批 Collection 文件导出与导入 · 5](../media/v0.1.1-alpha.1/composer-file-tools-english/step-032.annotated.png)

   ![审批 Collection 文件导出与导入 · 5](../media/v0.1.1-alpha.1/composer-file-tools-english/step-033.png)

   ![审批 Collection 文件导出与导入 · 5](../media/v0.1.1-alpha.1/composer-file-tools-english/step-034.annotated.png)

   ![审批 Collection 文件导出与导入 · 5](../media/v0.1.1-alpha.1/composer-file-tools-english/step-035.png)

6. <a id="walkthrough-composer-file-tools-confirm-preview-ask"></a><a id="walkthrough-composer-file-tools-confirm-preview-open"></a><a id="walkthrough-composer-file-tools-confirm-preview-preview"></a><a id="walkthrough-composer-file-tools-confirm-preview-decision"></a>再次请求并允许导入，仍选择同一文件。检查预览红框 1，点击红框 2 确认追加。原集合不被覆盖；返回 Collection 后，红框 1 的 Export 可用于保存追加后的新集合。

   ![审批 Collection 文件导出与导入 · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-036.annotated.png)

   ![审批 Collection 文件导出与导入 · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-037.png)

   ![审批 Collection 文件导出与导入 · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-038.annotated.png)

   ![审批 Collection 文件导出与导入 · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-040.annotated.png)

   ![审批 Collection 文件导出与导入 · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-041.png)

7. <a id="walkthrough-composer-file-tools-auto-mode"></a><a id="walkthrough-composer-file-tools-auto-open"></a><a id="walkthrough-composer-file-tools-auto-preview"></a><a id="walkthrough-composer-file-tools-auto-confirm"></a>切换 Auto（红框 1）不会替你选文件或确认预览。预览中仍需检查红框 1，再点击红框 2 确认；下一张图红框 1 显示又一次追加后的 Collection。重复导入会增加独立请求，不按名字覆盖。

   ![审批 Collection 文件导出与导入 · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-042.annotated.png)

   ![审批 Collection 文件导出与导入 · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-043.png)

   ![审批 Collection 文件导出与导入 · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-044.annotated.png)

   ![审批 Collection 文件导出与导入 · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-045.annotated.png)

   ![审批 Collection 文件导出与导入 · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-047.png)

8. MCP 使用相同文件流程，但审批独立。红框 1 标出 MCP 审批或预览内容；Allow 后仍需在预览红框 2 确认，Auto 预览的红框 2 也仍可取消。

   ![审批 Collection 文件导出与导入 · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-048.annotated.png)

   ![审批 Collection 文件导出与导入 · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-049.annotated.png)

   ![审批 Collection 文件导出与导入 · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-050.annotated.png)

   ![审批 Collection 文件导出与导入 · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-051.png)

   ![审批 Collection 文件导出与导入 · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-052.annotated.png)

   ![审批 Collection 文件导出与导入 · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-054.annotated.png)

9. <a id="walkthrough-composer-file-tools-stop-server"></a>结束使用后，关闭红框 1 的 MCP Server 开关，确认状态为 Off。关闭服务器只停止 MCP 接入；需要退出 App 时再正常关闭窗口。

   ![审批 Collection 文件导出与导入 · 9](../media/v0.1.1-alpha.1/composer-file-tools-english/step-059.annotated.png)
