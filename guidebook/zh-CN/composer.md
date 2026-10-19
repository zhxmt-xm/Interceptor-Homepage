# Composer：构造并发送请求

> 草稿，写作基线为 `v0.1.1-alpha.1`。已录操作配有对应实拍图，认证往返和其他未录分支逐步标明；已有 workflow 或局部配图不代表全章或 item9 已验收。

[教程目录](../README.md) · [Capture](capture.md)

<a id="walkthrough"></a>
## 逐步骤实操：发送请求并添加字段

下面的图片来自已发布的 `v0.1.1-alpha.1`、macOS x64，App 保持中文。每张图对应下面的一个步骤，点击图片可以查看原尺寸。本次使用无凭据的本机演示服务；`54275` 是录制时分配的端口，服务不是公开地址，实际使用时换成你自己的测试接口端口。

| 示例项 | 本次实际值 |
| --- | --- |
| 方法与地址 | `GET http://127.0.0.1:54275/guide/composer` |
| Query 名称 / 值 | `guide` / `composer-demo` |
| Header 名称 / 值 | `x-interceptor-guide` / `composer-demo` |
| 响应正文 | `{"request":"Guide request","message":"Hello Interceptor","status":"ready"}` |

### C01 · 打开 Composer

在侧栏点击请求构造器。右侧出现 Collection 与空工作区。

![C01：打开真实 App 的 Composer，尚未新建请求](../media/v0.1.1-alpha.1/composer/composer-01-open.png)

### C02 · 新建请求

点击 Collection 顶部的加号。本版本新条目默认叫 `Untitled`，这不是已经发送的历史请求。

![C02：Collection 中新增 Untitled，请求编辑区已打开](../media/v0.1.1-alpha.1/composer/composer-02-new.png)

### C03 · 输入演示 URL

填入 `http://127.0.0.1:54275/guide/composer`。方法为 `GET`，协议保持“自动”；先核对协议和端口，不填认证。

![C03：GET 和 http://127.0.0.1:54275/guide/composer 与文字一致](../media/v0.1.1-alpha.1/composer/composer-03-url.png)

### C04 · 点击发送

等待响应区出现 `200` 和 JSON；其中 `message` 为 `Hello Interceptor`。响应直接显示在 Composer，不要求 Capture 新增记录。

![C04：实际响应含 Guide request、Hello Interceptor 和 ready](../media/v0.1.1-alpha.1/composer/composer-04-send.png)

### C05 · 查看响应 Header

点击下方响应区的“标头”。本例服务返回 `content-type: application/json; charset=utf-8` 和 `x-interceptor-guide: composer-demo`；其他演示服务可能返回不同附加头。

![C05：响应 Header 显示 JSON 类型与 composer-demo](../media/v0.1.1-alpha.1/composer/composer-05-headers.png)

### C06 · 添加 Query

打开请求区“查询参数”，在新行填 `guide` 与 `composer-demo`，点击该行确认。标签计数变为 `1`。

![C06：已启用的 Query 行为 guide=composer-demo](../media/v0.1.1-alpha.1/composer/composer-06-query.png)

### C07 · 添加请求 Header

打开请求区“标头”，填 `x-interceptor-guide` 与 `composer-demo` 并确认。这里是请求 Header，上一步观察的是响应 Header。

![C07：请求 Header 行与正文示例名称和值一致](../media/v0.1.1-alpha.1/composer/composer-07-header.png)

### C08 · 检查认证

打开“认证”，本例保持“无”。不要把真实 Key 输入这个演示服务。

![C08：本次演示不使用 Authorization](../media/v0.1.1-alpha.1/composer/composer-08-auth.png)

### C09 · 查看 Recent sends

点击 URL 行右侧的时钟，检查刚才发送的 `GET`、地址和 `200` 结果。列表不是完整持久请求快照。

![C09：Recent sends 中的请求与本次实际发送一致](../media/v0.1.1-alpha.1/composer/composer-09-history.png)

### C10 · 返回响应正文

关闭历史浮层并选择下方“正文”。看到的仍是 C04 那次响应；添加 Query/Header 不会自动重发。

![C10：返回原 JSON 响应，修改请求字段未触发额外 Send](../media/v0.1.1-alpha.1/composer/composer-10-body.png)

下面是完整功能参考，未配步骤图的进阶分支仍待补齐，不算已验收。

## 先区分 Composer 与 Capture

Composer 用来主动构造请求并查看响应。它直接连接目标服务，不经过 Interceptor 的抓包代理：

- 请求不会自动出现在 Capture 列表中。
- 不受 Recording 开关影响。
- 不应用 Rules，也不会按代理流量命中 Breakpoints。
- 不要求先接管系统代理，但目标服务仍需要可达。

当前没有“从 Capture 一键复制到 Composer”的已交付联动；不要把未来设想当成现有按钮。

## 发送第一个请求

**前提**

有一个自己有权访问的 HTTP 或 HTTPS 测试接口。以下图文沿用本章首段实拍：`54275` 是录制环境的动态端口，不是 App 固定端口或公共服务；实际操作请替换成自己的测试服务。

**步骤**

1. 打开 Composer，找到 Collection 顶部的新建入口。

   ![打开 Composer，尚无本次请求](../media/v0.1.1-alpha.1/composer/composer-01-open.png)

2. 点击加号，新请求默认名为 `Untitled`。

   ![新建 Untitled 后出现请求编辑区](../media/v0.1.1-alpha.1/composer/composer-02-new.png)

3. 方法保持 `GET`，输入 `http://127.0.0.1:54275/guide/composer`，协议保持 Auto；不要在目标不支持时强制 HTTP/2。

   ![GET、录制地址和 Auto 的实际编辑状态](../media/v0.1.1-alpha.1/composer/composer-03-url.png)

4. 点击 Send。本次服务返回 `200`，正文为 `{"request":"Guide request","message":"Hello Interceptor","status":"ready"}`；其他服务以实际结果为准。

   ![发送后显示 200 与本次 JSON 正文](../media/v0.1.1-alpha.1/composer/composer-04-send.png)

5. 打开响应 Headers，核对 `content-type: application/json; charset=utf-8` 与 `x-interceptor-guide: composer-demo`。

   ![本次响应 Headers，不是请求 Headers 编辑表](../media/v0.1.1-alpha.1/composer/composer-05-headers.png)

**预期结果**

响应显示在 Composer 中，而不是依赖 Capture 出现一条记录。响应内容和状态码由目标服务器决定。

**关键说明**

- `4xx` 或 `5xx` 是服务器的 HTTP 响应，不等于客户端没有完成发送。
- URL、DNS、连接或 TLS 错误应按实际提示排查，不用反复切换 Recording 解决。
- 本版本URL栏会单独显示已识别的协议前缀。编辑已有URL时，如果左侧已经显示`http://`，输入框只改后面的主机、端口和路径；再次粘贴完整前缀会形成`http://http://...`。发送前核对完整显示的地址。
- 本章不要求测试本地端口或放宽目标证书检查；受限网络先由有权管理网络的人处理。

## 编辑 Query 与 Headers

**用途**

在不改服务端的前提下，比较不同请求参数与头部对响应的影响。

**步骤**

本节改用独立的 `composer-fields` 实拍，目标为 `http://127.0.0.1:62733/guide/composer-fields`；`62733` 是本次录制动态端口。这里实际执行了启用后 Send、停用后 Send，不沿用首段 C04 的旧响应，也不把 `composer-demo` 当作本轮字段值。

1. 新建本轮字段实验的请求，使用上述已运行的测试服务。

   ![实际新建本轮字段实验请求](../media/v0.1.1-alpha.1/composer-fields/composer-fields-01-new.png)

2. 添加并启用 Header，名称 `x-guide-toggle`、值 `enabled`。

   ![实际启用的 x-guide-toggle=enabled](../media/v0.1.1-alpha.1/composer-fields/composer-fields-02-header.png)

3. 添加并启用 Query，名称 `guide`、值 `enabled`。

   ![实际启用的 guide=enabled](../media/v0.1.1-alpha.1/composer-fields/composer-fields-03-query.png)

4. 点击 Send，核对测试服务实际收到这两个字段；不是只看已填写的编辑表。

   ![启用字段后真实 Send 的结果](../media/v0.1.1-alpha.1/composer-fields/composer-fields-04-send-enabled.png)

5. 关闭 Query 行，先保留该行而不删除。

   ![实际停用 Query 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-05-query-off.png)

6. 再关闭 Header 行。

   ![实际停用 Header 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-06-header-off.png)

7. 再次 Send，核对 `guide` 与 `x-guide-toggle` 不再发送；表格里保留的值不代表本次仍参与请求。

   ![停用字段后真实重发，确认未发送这两个字段](../media/v0.1.1-alpha.1/composer-fields/composer-fields-07-send-disabled.png)

8. 确定不再需要时删除 Header 行。

   ![实际删除 Header 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-08-header-delete.png)

9. 再删除 Query 行；删除与暂时停用是两次不同操作。

   ![实际删除 Query 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-09-query-delete.png)

10. 重复 Query 改用独立的 `composer-replay`，先打开 Composer。该次服务端口为 `65227`，是动态录制值，不是前面的 `62733`。

    ![重复 Query 演示实际打开 Composer](../media/v0.1.1-alpha.1/composer-replay/composer-replay-01-open.png)

11. 新建这次 Query 与重发请求。

    ![实际新建 Query 重发请求](../media/v0.1.1-alpha.1/composer-replay/composer-replay-02-new.png)

12. URL 填 `http://127.0.0.1:65227/guide/composer-replay/query?guide=url`，其中已经有 `guide=url`。

    ![实际 URL 中已有 guide=url](../media/v0.1.1-alpha.1/composer-replay/composer-replay-03-url.png)

13. 方法选择 `POST`。

    ![实际选择 POST](../media/v0.1.1-alpha.1/composer-replay/composer-replay-04-post.png)

14. 打开 Query 表格，检查它此时仍为空；URL 中的参数不是已经生成的表格行。

    ![已有 URL Query 时仍为空的表格](../media/v0.1.1-alpha.1/composer-replay/composer-replay-05-query.png)

15. 新行名称填 `guide`。

    ![实际填写第一行名称 guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-06-query-name.png)

16. 值填 `table`。

    ![实际填写第一行值 table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-07-query-value.png)

17. 确认添加 `guide=table`。

    ![实际添加第一条 Query 行](../media/v0.1.1-alpha.1/composer-replay/composer-replay-08-add-query.png)

18. 再添加一个同名 `guide`，不修改 URL 中的值。

    ![实际填写第二个同名 guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-09-duplicate-name.png)

19. 第二行值填 `again`。

    ![实际填写第二行值 again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-10-duplicate-value.png)

20. 确认第二行，保留 `table`、`again` 两条启用的表格项。

    ![实际添加第二条同名 Query](../media/v0.1.1-alpha.1/composer-replay/composer-replay-11-add-duplicate.png)

21. Send，核对实际地址为 `http://127.0.0.1:65227/guide/composer-replay/query?guide=url&guide=table&guide=again`，三个值依次为 `url`、`table`、`again`。同名值是追加，不是覆盖或去重。

    ![真实发送后核对三个 guide 值](../media/v0.1.1-alpha.1/composer-replay/composer-replay-12-send-query.png)

**预期结果**

本次发送使用当前启用的字段。表格中的 Query 追加在已有 URL 参数之后，同名值可以出现多次；关闭一行可以暂时排除该行，不会删除 URL 中原有的参数。

**关键说明**

- 不把 Query 当作正文，也不把 `Content-Type` 当作自动转换所有输入的开关。
- Header、Query 和 URL 都可能含敏感数据，截图和分享前要逐项检查。
- 认证信息应只发送给你确认的目标；不要把真实凭据填进公共示例。

## 选择请求正文

**步骤**

前半段取自[正文与 Collection 实拍](#walkthrough-composer-editing)，不是前面的 GET。`64036` 只是该次录制动态端口，三个地址分别用于 JSON、Text 和 Form。Format/None 使用另一段 `composer-fields`，最后的 Text 输入中间态来自 `composer-replay`；各段明确使用自己的地址与输入值。

**发布版界面说明**：alpha.1 的中文 Text 标签实际显示 `composer.text`，属于缺译。本章用 Text 指正文类型，保留原截图与原 App 语言，不把该标签修成另一段文字。Text 默认不会自动添加 `Content-Type`；前面的 `text/plain` 示例是显式设置 Header，后面的 replay 示例保持该 Header 未设置。

1. 新建请求后，将地址设为 `http://127.0.0.1:64036/guide/composer/edit/json`。

   ![JSON 示例地址已填入，尚未发送](../media/v0.1.1-alpha.1/composer-editing/composer-editing-03-url.png)

2. 将方法改为 `POST`。

   ![JSON 示例选择 POST](../media/v0.1.1-alpha.1/composer-editing/composer-editing-04-method.png)

3. 在 Headers 填写 `Content-Type: application/json`。

   ![JSON Content-Type 请求行](../media/v0.1.1-alpha.1/composer-editing/composer-editing-05-json-header.png)

4. 打开 Body。

   ![打开请求 Body 编辑区](../media/v0.1.1-alpha.1/composer-editing/composer-editing-06-body.png)

5. 选择 JSON。

   ![JSON 正文类型已选中](../media/v0.1.1-alpha.1/composer-editing/composer-editing-07-json.png)

6. 输入 `{"message":"Hello JSON","orderId":"guide-001"}`。

   ![发送前的 Hello JSON 和 guide-001](../media/v0.1.1-alpha.1/composer-editing/composer-editing-08-json-input.png)

7. 点击 Send，核对返回的完整 JSON；此处是 `Hello JSON` 示例，真正点击 Format 的独立例在本节后面。

   ![JSON 发送后的实际响应](../media/v0.1.1-alpha.1/composer-editing/composer-editing-09-json-send.png)

8. 测试文本接口时，将 Body 切为 Text；中文发布版控件标签为 `composer.text`。

   ![选择 Text，而不是 JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-10-text.png)

9. 为这个示例显式将 `Content-Type` 改为 `text/plain`，不是依赖 Text 自动添加。

    ![文本请求的 Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11-text-header.png)

10. 将地址改为 `http://127.0.0.1:64036/guide/composer/edit/text`。

    ![使用独立的文本接口地址](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11a-text-url.png)

11. 输入 `Hello text`，发送并核对这个手动设置 `text/plain` 的示例。下图展示发送结果；本节末尾另有 `composer-replay` 的真实输入中间态，不把两个地址的画面混为同一次请求。

    ![发送后核对 Hello text](../media/v0.1.1-alpha.1/composer-editing/composer-editing-12-text-send.png)

12. 测试表单接口时，选择 Form。

    ![选择 Form 正文类型](../media/v0.1.1-alpha.1/composer-editing/composer-editing-13-form.png)

13. 添加 `name` / `Interceptor`。

    ![第一行 name=Interceptor](../media/v0.1.1-alpha.1/composer-editing/composer-editing-14-form-name.png)

14. 添加 `ready` / `true`。

    ![第二行 ready=true](../media/v0.1.1-alpha.1/composer-editing/composer-editing-15-form-ready.png)

15. 设置 `Content-Type: application/x-www-form-urlencoded`。

    ![表单 Content-Type 请求行](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16-form-header.png)

16. 将地址改为 `http://127.0.0.1:64036/guide/composer/edit/form`。

    ![独立的表单接口地址](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16a-form-url.png)

17. 点击 Send，核对实际表单字节 `name=Interceptor&ready=true`。

    ![表单发送后核对实际字节](../media/v0.1.1-alpha.1/composer-editing/composer-editing-17-form-send.png)

18. Format 演示使用上一节 `composer-fields` 已删除 Header/Query 行的请求，地址为 `http://127.0.0.1:62733/guide/composer-fields`，不是刚才的 Form 接口。选择 `POST` 与 JSON，输入 `{"message":"format-demo","count":2}`。

    ![实际 POST 与 format-demo JSON 输入](../media/v0.1.1-alpha.1/composer-fields/composer-fields-10-json.png)

19. 点击请求 JSON 的 Format，检查格式化后的内容。

    ![实际点击 Format 后的请求 JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-11-format.png)

20. 点击 Send，核对实际发送的格式化 JSON，字段仍为 `message: format-demo`、`count: 2`。

    ![格式化后真实 Send 的结果](../media/v0.1.1-alpha.1/composer-fields/composer-fields-12-send-json.png)

21. 将 Body 改为 None；这不是 Auth None。

    ![实际选择 Body None](../media/v0.1.1-alpha.1/composer-fields/composer-fields-13-none.png)

22. 再 Send，核对实际空正文，而不是旧 JSON 响应留在屏幕上。

    ![Body None 后真实发送空正文](../media/v0.1.1-alpha.1/composer-fields/composer-fields-14-send-none.png)

23. Text 输入的独立演示承接上一节 `composer-replay` 的重复 Query 请求，保留 `guide=table`、`guide=again` 两行。将地址改为 `http://127.0.0.1:65227/guide/composer-replay/text?guide=text-url`；已有 `http://` 前缀时只改其后的主机、路径与 query。

    ![实际改为独立 Text 请求地址](../media/v0.1.1-alpha.1/composer-replay/composer-replay-13-text-url.png)

24. 方法改为 `PUT`。

    ![实际选择 PUT](../media/v0.1.1-alpha.1/composer-replay/composer-replay-14-put.png)

25. 打开请求 Body。

    ![实际打开本轮请求 Body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-15-body.png)

26. 选择实际显示为 `composer.text` 的 Text 控件，先查看未输入状态。

    ![发布版原样的 composer.text 标签与输入前状态](../media/v0.1.1-alpha.1/composer-replay/composer-replay-16-text-mode.png)

27. 先输入 `Hello`。

    ![实际 Text 输入中间态 Hello](../media/v0.1.1-alpha.1/composer-replay/composer-replay-17-text-partial.png)

28. 继续输入成 `Hello text`。

    ![发送前实际完整输入 Hello text](../media/v0.1.1-alpha.1/composer-replay/composer-replay-18-text-complete.png)

29. Send，核对真实正文 `Hello text`，实际地址为 `http://127.0.0.1:65227/guide/composer-replay/text?guide=text-url&guide=table&guide=again`。本例没有设置请求 `Content-Type`，Text 也没有自动补它；响应自身的 Content-Type 不能当作请求 Header。

    ![真实 PUT 发送后的 Text 字节与组合地址](../media/v0.1.1-alpha.1/composer-replay/composer-replay-19-send-text.png)

**正文类型**

| 类型 | 用途与边界 |
| --- | --- |
| None | 不发送正文 |
| JSON | 编辑 JSON 文本；可使用 Format |
| Text | 发送普通文本；不提供 JSON 格式化，也不自动添加 `Content-Type`；中文 alpha.1 标签为 `composer.text` |
| Form | 以键值行编辑 URL encoded 表单，不是 multipart 文件上传 |

**预期结果**

请求按当前正文发送；切换请求编辑区的标签不应丢失当前字段。

**关键说明**

- JSON 类型不是服务端 schema 校验，接口仍可能拒绝字段或格式。
- Header 与 Body 是不同输入，修改 Header 不代表正文已经按新编码转换。
- 当前正文输入以字符串为边界，不把它描述为支持任意二进制或 `multipart/form-data` 文件上传。

## 使用认证

**步骤**

1. 打开 Auth，选择接口要求的 None、Bearer Token 或 Basic。

   本次 `composer-editing` 只检查控件，未输入凭据。打开 Auth 的画面：

   ![打开 Auth](../media/v0.1.1-alpha.1/composer-editing/composer-editing-18-auth.png)

   选择 `Bearer` 后查看空 Token 字段：

   ![空 Token 输入位置，不是认证成功](../media/v0.1.1-alpha.1/composer-editing/composer-editing-19-bearer.png)

   再选择 Basic，查看空用户名和密码字段：

   ![Basic 空字段状态](../media/v0.1.1-alpha.1/composer-editing/composer-editing-20-basic.png)

2. 实际接口需要认证时，仅对自己的测试服务填写相应的测试凭据。

   [公开本机认证实录](#walkthrough-composer-auth)另建临时`127.0.0.1`服务，只接受本轮的`guide-user`、`public-demo-password`和`public-demo-token`。这些是刻意公开、仅演示服务有效的测试字符串，不是系统账号、真实服务凭据或API Key；不要把自己真实的凭据填进这些例子。

   ![为自有服务填写公开Basic示例值](../media/v0.1.1-alpha.1/composer-auth/composer-auth-08-password.png)

   ![为同一自有服务填写公开Token示例值](../media/v0.1.1-alpha.1/composer-auth/composer-auth-11-token.png)

3. 检查 URL，再发送请求并查看响应。

   同一实录先得到None的401，再通过Basic和`Bearer`分别得到200；响应中的`scheme`和源站实际收到的Header共同核对，不把控件有值当作认证成功。

   ![未提供认证时实际返回401](../media/v0.1.1-alpha.1/composer-auth/composer-auth-04-none.png)

   ![Basic实际请求返回200](../media/v0.1.1-alpha.1/composer-auth/composer-auth-09-basic-result.png)

   ![Token实际请求返回200](../media/v0.1.1-alpha.1/composer-auth/composer-auth-12-bearer-result.png)

4. 控件演示结束恢复 None。

   ![本次演示恢复 Auth None](../media/v0.1.1-alpha.1/composer-editing/composer-editing-21-none.png)

5. 演示或分享前移除真实凭据，并检查 Headers 中是否还留有其他认证字段。

   [清理步骤](#walkthrough-composer-auth-13-none-again)先验证切None会移除自动合成的认证，再自行添加一个公开Authorization Header：即使Auth为None，它仍被发送。只有[删除该行](#walkthrough-composer-auth-20-delete-header)后才再次得到401；最后清空三个演示输入并保持None。这段没有使用真实凭据。

   ![Auth None仍保留用户明确添加的Header](../media/v0.1.1-alpha.1/composer-auth/composer-auth-19-none-keeps-header.png)

   ![删除显式Header后真实请求恢复401](../media/v0.1.1-alpha.1/composer-auth/composer-auth-21-header-removed.png)

**预期结果**

发送时根据当前 Auth 选择构造认证信息。

**关键说明**

- Auth 中的认证头在发送时合成，不以它是否出现在 Headers 编辑表中判断配置成功。
- Basic 不是传输加密；对真实凭据使用可信 HTTPS 接口。
- Collection 导出可能包含认证、Header、Query 和正文。不能因为界面或 Tool 结果经过遮罩，就认为导出的集合已经脱敏。

## 查看响应

**步骤**

本节使用独立的 `composer-inspection`，不是首段 C04 或 Capture 的查看器截图。响应接口为 `http://127.0.0.1:62704/guide/composer-inspection/response`；`62704` 是本次录制动态端口，实际使用自己的受控服务。后半段另换同一服务的 CSS 地址，专门展示响应 Format。

1. 打开 Composer。

   ![实际打开 Composer 响应检查工作区](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-01-open.png)

2. 新建响应检查请求。

   ![实际新建响应检查请求](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-02-new.png)

3. 输入 `http://127.0.0.1:62704/guide/composer-inspection/response`。

   ![实际响应检查 URL](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-03-url.png)

4. 请求 Header 名称填 `x-guide-request`。

   ![先填写实际请求 Header 名称](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-04-header-name.png)

5. 值填 `inspection-demo`。

   ![实际请求 Header 值 inspection-demo](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-05-header-value.png)

6. 确认添加该 Header 行。

   ![实际添加完成的请求 Header](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-06-add-header.png)

7. Send，核对本次实际 JSON：`{"message":"Hello response","order":{"id":"guide-001","items":[{"sku":"demo-001","quantity":2}]},"ok":true}`。

   ![本次真实 Send 后的响应 JSON](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-07-send.png)

8. 打开响应 Headers，区分请求中的 `x-guide-request` 和响应中的 `x-guide-response`；本例两者的值都是 `inspection-demo`。

   ![实际响应 Headers 与独立的请求头分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-08-headers.png)

9. 折叠 Response Headers。

   ![实际折叠 Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-09-response-collapse.png)

10. 再折叠 Request Headers。

    ![实际折叠 Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-10-request-collapse.png)

11. 单独展开 Response Headers。

    ![实际重新展开 Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-11-response-expand.png)

12. 再展开 Request Headers，核对两个分组独立。

    ![实际重新展开 Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-12-request-expand.png)

13. 打开 Cookies。本例响应包含 `guide_session=inspection-demo; Path=/; HttpOnly` 和 `guide_theme=light; Path=/`，不是自动保存或重发 Cookie 的演示。

    ![实际响应中的两个公开演示 Cookie](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-13-cookies.png)

14. 折叠 Cookies 分组。

    ![实际折叠 Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-14-cookies-collapse.png)

15. 重新展开 Cookies。

    ![实际展开 Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-15-cookies-expand.png)

16. 打开 Timing，查看本次 HTTP 请求的时序与 Connection 信息。耗时取实际值，不把录制数字当作固定性能保证。

    ![实际 Timing 与 Connection 信息](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-16-timing.png)

17. 折叠 Timing 分组。

    ![实际折叠 Timing](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-17-timing-collapse.png)

18. 再折叠 Connection 分组。

    ![实际折叠 Connection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-18-connection-collapse.png)

19. 展开 Timing。

    ![实际展开 Timing](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-19-timing-expand.png)

20. 展开 Connection。

    ![实际展开 Connection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-20-connection-expand.png)

21. 返回响应 Body，仍查看第7步那次 JSON。

    ![实际返回同一次响应 Body](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-21-body.png)

22. 切换 Tree。

    ![Composer 中实际 JSON Tree](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-22-tree.png)

23. 折叠 JSON 根节点。

    ![实际折叠 JSON 根节点](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-23-tree-collapse.png)

24. 再展开根节点。

    ![实际重新展开 JSON 根节点](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-24-tree-expand.png)

25. 在 `message` 字段打开右键菜单。

    ![实际 message 字段菜单](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-25-tree-menu.png)

26. 复制该字段的值，核对 `Hello response`；这是字段值，不是整份 JSON。

    ![实际复制 message 值的检查点](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-26-tree-copy-value.png)

27. 切换 Raw。

    ![Composer 中实际 Raw 原文](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-27-raw.png)

28. 使用 Raw 的 Copy，核对本次 JSON 原文，不沿用刚才只复制的 `message` 值。

    ![实际复制 Raw 原文](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-28-copy-raw.png)

29. 切换 Hex 检查字节。

    ![Composer 中实际 Hex 字节视图](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-29-hex.png)

30. 使用 Hex 的 Copy，核对对应原始字节，不把另一模式的复制结果冒充本次操作。

    ![实际 Hex 复制与原始字节核对](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-30-copy-hex.png)

31. 全屏查看当前响应 Hex。

    ![实际打开 Composer 响应 Hex 全屏](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-31-fullscreen.png)

32. 退出正文全屏，返回同一请求。

    ![实际退出 Composer 正文全屏](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-32-exit-fullscreen.png)

33. 拖宽 Collection 分栏，核对当前请求仍保持选中；这是宽度调整，不是 Collection 节点排序。

    ![实际拖宽 Collection 分栏](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-33-collection-drag.png)

34. 将请求/响应之间的分隔条向上拖动，增高响应区。

    ![实际拖动后增高的响应区](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-34-response-drag.png)

35. Format 示例改用 `http://127.0.0.1:62704/guide/composer-inspection/format`。这是独立 CSS 响应，不是给前面的 JSON 请求正文执行 Format。

    ![实际填写 CSS 响应地址](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-35-format-url.png)

36. Send，接收完整 CSS。规则为 `.guide{color:teal}`，后附 `1048576` 个 ASCII 空格，总计 `1048594` 字节；完整内容超过 `1 MiB` 自动格式化阈值，但未超过 `2 MiB` 文本预览上限。

    ![实际收到需手动 Format 的 CSS 响应](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-36-css-send.png)

37. Format 前先 Copy，核对原 CSS 与尾部空格；不能仅凭可见的短规则判断完整响应大小。

    ![实际复制 Format 前的 CSS](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-37-css-copy-before.png)

38. 点击响应查看器的 Format。

    ![实际手动格式化响应 CSS](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-38-format.png)

39. 再 Copy，核对实际格式化结果，`.guide` 的 `color: teal` 规则保持不变。复制的是当前查看器提供的文本，不要求它与格式化前的空白字节完全相同。

    ![实际复制并核对格式化后的 CSS](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-39-css-copy-after.png)

**预期结果**

响应区展示对应 Send 的结果。以上只有明确的 Send 产生新请求；折叠、模式切换、Copy、Fullscreen、Format 与分栏拖动不会重发。

**关键说明**

- 响应正文使用与 Capture 相同的查看器。文本只读预览最多 `2 MiB`，不代表原始响应只接收了这些字节。
- 完整正文不超过 `1 MiB` 可以自动格式化，`1–2 MiB` 需要手动 Format；截断或不完整正文不格式化。
- 格式化失败时保留原文。Copy 是当前查看器提供的内容，不保证是完整大响应文件。
- 调整分栏不应改变当前请求或集合选择。
- [响应格式化实录](#walkthrough-composer-response-formatting)另外展示HTML/JavaScript自动格式化、XML无法格式化时保留原文及超过2MiB的JSON预览。短JavaScript可能只增加空格而仍是一行；超限Copy只是预览，Format禁用。共用正文查看器的真实内外层滚动见[Capture](capture.md#walkthrough-capture-inspection)，不把静态全屏图片当滚动过程。

## 管理 Collection

**用途**

长期保存可重复使用的请求，而不是每次重新输入。

**步骤**

1. 完成上面的表单请求后，用条目菜单把请求重命名为 `Guide form request`。地址和字段沿用 `composer-editing`，不是首段 GET。

   ![实际请求名 Guide form request](../media/v0.1.1-alpha.1/composer-editing/composer-editing-22-rename.png)

2. 创建目录 `Guide collection`。

   ![新建 Guide collection 目录](../media/v0.1.1-alpha.1/composer-editing/composer-editing-23-folder.png)

3. 把 `Guide form request` 移入该目录。

   ![请求移入 Guide collection 后的层级](../media/v0.1.1-alpha.1/composer-editing/composer-editing-24-move.png)

4. 接下来使用独立的目录管理示例。新建根目录 `Guide level 1`；它不是把上面的 `Guide collection` 改名。

   ![新建 Guide level 1 根目录](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-1.png)

5. 在该目录的菜单中选择新建子目录，命名为 `Guide level 2`。

   ![Guide level 1 内的 Guide level 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-2.png)

6. 在第二级目录的菜单中创建 `Guide level 3`。

   ![实际创建的三级目录](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-3.png)

7. 打开 `Guide level 3` 的菜单。新建子目录已禁用，但仍可新建请求；不要尝试通过拖动绕过层级限制。

   ![第三级目录的新建子目录入口已禁用，新建请求仍可用](../media/v0.1.1-alpha.1/composer-collection/composer-collection-03-depth-limit.png)

8. 在该目录中新建 `Guide request 1`，填入 `http://127.0.0.1:54811/guide/collection/1`。`54811` 是这次录制的动态端口，请替换为自己的测试服务地址；本流程只编辑，不点击 Send。

   ![在第三级目录创建 Guide request 1 并填写实际 URL](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-1.png)

9. 在同一目录中新建 `Guide request 2`，地址填 `http://127.0.0.1:54811/guide/collection/2`。

   ![第二条请求使用独立的 collection/2 地址](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-2.png)

10. 选回 `Guide request 1`，确认恢复的是 `/guide/collection/1`，而不是第二条请求的地址。

    ![切回第一条 Collection 请求并核对其地址](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-1.png)

11. 再选 `Guide request 2`，确认其地址仍为 `/guide/collection/2`。这是真正的 Collection 节点切换，不是 Recent sends 恢复。

    ![切回第二条请求，字段没有串到第一条](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-2.png)

12. 用目录菜单把 `Guide level 3` 重命名为 `Guide saved requests`。

    ![目录重命名后保留原有请求](../media/v0.1.1-alpha.1/composer-collection/composer-collection-06-rename-folder.png)

13. 将 `Guide request 2` 拖到 `Guide request 1` 前面，检查同级顺序。需要保留的数据先按下一节 Export；本次导出文件为 `guide-collection-tree.json`。

    ![拖动后第二条请求位于第一条之前](../media/v0.1.1-alpha.1/composer-collection/composer-collection-07-reorder.png)

14. 仅对本轮新建的示例条目操作：打开 `Guide request 2` 的菜单并删除，确认第一条仍在。

    ![删除 Guide request 2 后仍保留 Guide request 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-11-delete-request.png)

15. 删除本轮 `Guide saved requests` 目录及其中剩余的演示请求；上面两级目录不因此被一起删除。

    ![删除第三层目录及其演示请求后的实际树](../media/v0.1.1-alpha.1/composer-collection/composer-collection-12-delete-folder.png)

16. 等待保存完成后再退出；重启后检查需要保留的集合是否按预期保留。

    这里引用独立的 Workspace 两代启动：保存 `Guide retained request`，URL 为 `http://127.0.0.1:63009/guide/restart/request`，再真实 Close/重启。`63009` 仅为该次动态端口，不是本节 `Guide form request` 或 `Guide request 1` 换了名称。

    ![Workspace 关闭前实际保存的请求名](../media/v0.1.1-alpha.1/workspace-close/workspace-close-03-name.png)

    ![正常 Close 前的画面，不是点击瞬间](../media/v0.1.1-alpha.1/workspace-close/workspace-close-06-before-close.png)

    ![真实重启后保留的 Collection 请求与 URL](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-01-collection.png)

    名称/URL的基础顺序见[Workspace](workspace.md#saved-data)。完整代表性请求另外有[保存字段](#walkthrough-composer-persistence-save)与[重启后核对](#walkthrough-composer-persistence-restart)：同一三级目录和request ID回载method/protocol、Header启停、Query、JSON及公开Auth，然后只Send一次检验实际字节。不宣称穷举全部Body/Auth组合。

**预期结果**

请求和目录保存在 Collection 中，修改自动持久化，没有额外的 Save 按钮或“未保存草稿”步骤。

**关键说明**

- 目录最多三级，第三级不能继续新建子目录，但可以包含请求。
- 选中目录只确定新建落点，不应关闭右侧正在编辑的请求。
- 编辑或导入集合不自动 Send；只有明确发送才产生相应请求。
- 发生保存错误时处理实际提示，不把编辑器仍显示内容当作已经持久化。

## 使用 Recent sends

**步骤**

1. 首段 GET 发送后，打开 URL 行旁的 Recent sends，查看 `GET`、`http://127.0.0.1:54275/guide/composer`、`200` 和相对时间。

   ![Recent sends 中本次实际发送的 GET](../media/v0.1.1-alpha.1/composer/composer-09-history.png)

2. 真正选择历史项的画面来自另一段 `composer-fields`，服务地址为 `http://127.0.0.1:62733/guide/composer-fields`。完成上面的字段删除、JSON/None 发送后，从 Recent sends 选择此前的记录，核对那条记录的实际方法与完整 URL；不要把首段 `54275` 的列表图冒充这次选择。

   ![实际选择本轮 Recent sends 的旧记录](../media/v0.1.1-alpha.1/composer-fields/composer-fields-15-history.png)

3. 检查只恢复了 method/URL：此前删除的 `x-guide-toggle` Header 行、`guide` Query 表格行没有恢复，当前 Body 不被旧 JSON 快照覆盖。这里说的是表格行，不表示历史 URL 内没有已组合的 query。Auth 仍按当前请求检查，不假定历史会还原凭据。

   ![实际核对未恢复已删除字段或旧正文](../media/v0.1.1-alpha.1/composer-fields/composer-fields-16-check-restored.png)

4. 历史选择后再 Send 的完整演示改用 `composer-replay`，承接前面已发送 `PUT` / `Hello text` 的状态，端口为本次动态值 `65227`。回到 Query 表格，此时仍有 `table`、`again` 两行。

   ![实际回到 replay 的当前 Query 表格](../media/v0.1.1-alpha.1/composer-replay/composer-replay-20-query-again.png)

5. 将第一行的值从 `table` 改为 `current`，第二行仍是 `again`。

   ![实际当前 Query 值 current 与 again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-21-query-current.png)

6. 回到当前 Text 正文；中文标签仍为发布版缺译的 `composer.text`。

   ![实际返回当前 Text 正文](../media/v0.1.1-alpha.1/composer-replay/composer-replay-22-body-again.png)

7. 将正文改为 `Hello replay`，先不要发送。

   ![历史选择前实际输入 Hello replay](../media/v0.1.1-alpha.1/composer-replay/composer-replay-23-body-current.png)

8. 打开 Recent sends。

   ![实际打开本轮历史菜单](../media/v0.1.1-alpha.1/composer-replay/composer-replay-24-history.png)

9. 选择旧 POST 记录。恢复的方法是 `POST`，URL 是先前已组合的 `http://127.0.0.1:65227/guide/composer-replay/query?guide=url&guide=table&guide=again`，不是最初仅含 `guide=url` 的输入地址。

   ![实际恢复旧 POST 与已组合 URL](../media/v0.1.1-alpha.1/composer-replay/composer-replay-25-restore-old.png)

10. 检查当前 Query 表格仍为 `current`、`again`，没有被旧历史改回 `table`、`again`。

    ![历史选择后实际保留的当前 Query 行](../media/v0.1.1-alpha.1/composer-replay/composer-replay-26-current-query.png)

11. 再 Send，当前两行继续追加到历史已组合 URL 后面。实际请求为 `http://127.0.0.1:65227/guide/composer-replay/query?guide=url&guide=table&guide=again&guide=current&guide=again`，`guide` 五个值依次是 `url,table,again,current,again`，正文仍为 `Hello replay`；不能写成自动去重或原请求原样重放。

    ![真实历史重发后的五个 Query 值与当前正文](../media/v0.1.1-alpha.1/composer-replay/composer-replay-27-resend.png)

12. 回到 Text 编辑区，确认重发后仍保留 `Hello replay`。

    ![真实重发后保留的 Hello replay](../media/v0.1.1-alpha.1/composer-replay/composer-replay-28-confirm-body.png)

**预期结果**

方便重新使用最近的方法和已组合 URL，但不是完整请求快照、持久历史或原样重放。再次 Send 仍使用当前 Body，并把当前启用 Query 追加一次。

**关键说明**

Recent sends 独立于 Collection，属于内存记录；不能依赖它跨启动保存请求，也不能假定选择历史项会恢复当时全部正文和凭据。

发送前应同时检查恢复后的完整 URL 和当前 Query 表格。不需要重复值时需明确调整这些输入；本段没有录制“清理重复值后再次发送”，不能把实际五值结果改写成已经去重。

## 导出和导入 Collection

**前提**

先用产品 Export 生成一个自己的测试集合文件；不要把未知来源的文件当作安全示例。

**步骤**

1. 检查集合中没有要隐藏的真实凭据和个人数据；本次实际示例为 `Guide collection` / `Guide form request`，认证控件未输入凭据。

   这是分享前的安全要求，不是自动脱敏承诺。下面只使用本轮公开数据；导出成功不表示任意日常集合可以直接分享。

2. 使用 Export collection，在真实系统保存窗口保存为 `guide-collection.json`。

   ![Collection Export 的实际原生保存窗口](../media/v0.1.1-alpha.1/composer-editing/composer-editing-25-export.png)

3. 检查刚导出的实际文件内容，再继续导入。

   ![核对本次产品导出的集合文件](../media/v0.1.1-alpha.1/composer-editing/composer-editing-26-exported.png)

4. 使用 Import，在真实系统打开窗口选择同一个 `guide-collection.json`。

   ![选择刚导出的同一个集合文件](../media/v0.1.1-alpha.1/composer-editing/composer-editing-27-import.png)

5. 阅读导入预览中的请求、目录和被跳过项。

   ![确认前的 Collection 导入预览](../media/v0.1.1-alpha.1/composer-editing/composer-editing-28-preview.png)

6. 不符合预期时取消，不要为了完成教程继续导入。

   取消分支使用上面目录管理示例导出的 `guide-collection-tree.json`，不是把 `guide-collection.json` 改名。选择该文件、进入预览后取消，原有两条请求保持不变，不追加第二份目录；见[取消分支步骤图](#walkthrough-composer-collection-10-cancel-preview)。

   ![取消 Collection 导入后仍只有原来的两条演示请求](../media/v0.1.1-alpha.1/composer-collection/composer-collection-10-cancel-preview.png)

7. 若选择确认而不是取消，查看追加到根目录末尾的内容。下面仍是原 `guide-collection.json` 的确认分支，不是取消操作的结果。

   ![确认后追加的 Collection，不覆盖原有内容](../media/v0.1.1-alpha.1/composer-editing/composer-editing-29-confirm.png)

**预期结果**

取消选择或预览不会修改集合。确认后以新身份追加导入内容，不覆盖原来的请求，也不会自动发送请求。

**关键说明**

- 重复导入会继续追加，不是同步更新或覆盖旧集合。
- 文件级错误整体拒绝；部分节点无效时，按预览中的具体跳过原因处理。
- Collection 的导入导出不等于 Capture 的 HAR 或原生归档，不能互相替代。

## 从 Agent 或 MCP 使用 Composer

**用途**：让 AI 发送明确的测试请求，或管理已经保存的 Collection。

1. 按[Tool权限](tool-permissions.md)检查所需能力；只读Collection保留query，发送请求属于change，不能用只读权限替代。

   [完整只读实录](tool-permissions.md#walkthrough-tool-permissions-readonly)包含Composer各行的独立开关，不把搜索后隐藏的项当成已关闭。

2. 明确提供测试目标、方法和允许的操作范围；首次使用保持 Ask。

   [MCP调用生命周期](mcp.md#walkthrough-mcp-tool-lifecycle-17-auto)另有明确使用Auto发送自有长请求、随后撤销Client并实际取消网络的例子；它不冒充Ask发送审批。

3. 发送请求时检查审批中的目标和方法；操作 Collection 前让 AI 先读取当前集合，避免覆盖已经更新的版本。

   [Composer专用实录](#walkthrough-composer-tools)使用`Guide Composer tools`的Ask模式。先拒绝POST并确认源站零请求，再允许同一目标得到真实201；随后读取实际保存树，以原request ID和revision只改名为`Guide MCP renamed request`，分别检查Deny不写入与Allow通知UI更新。

   ![Composer专用POST审批中的实际目标与参数](../media/v0.1.1-alpha.1/composer-tools/composer-tools-11-send-ask.png)

   ![Collection替换的实际请求和目录范围](../media/v0.1.1-alpha.1/composer-tools/composer-tools-16-replace-ask.png)

4. 发送请求后检查Tool返回的实际状态、Header和正文预览，而不是只读模型的结论。Tool发送不会自动填入当前Composer编辑器的响应区；该响应区由你在UI中的Send更新。修改Collection后再回到Composer检查集合通知同步，两种操作不要混为一谈。

   下图中的`guide-ui-response`来自先前UI Send；Tool返回的`guide-tool-response`只由调用方接收。[同一实录](#walkthrough-composer-tools-15-ui-response-kept)实际检查这条边界，Collection改名则确实自动同步到当前UI。另见[MCP在途撤销](mcp.md#walkthrough-mcp-tool-lifecycle-18-long-request)。

   ![Tool发送后当前UI响应保持原值](../media/v0.1.1-alpha.1/composer-tools/composer-tools-15-ui-response-kept.png)

   ![允许替换后Collection名称自动同步](../media/v0.1.1-alpha.1/composer-tools/composer-tools-19-replace-allow.png)

**预期结果**：AI 使用与 UI 相同的业务能力，修改集合后界面同步；集合导入不会自动发送请求。

Collection的文件Tool另见[原生往返实录](#walkthrough-composer-file-tools)：`Guide Collection files`先拒绝导出，再取消真实Save，然后由产品导出`guide-tool-collection.json`。Import只读取这一个文件，分别取消Open、取消预览和确认追加；Auto也保留原生Open和确认。最终三条同名请求拥有不同ID，原请求未被覆盖，也没有自动Send。

![Collection Tool的真实原生Save](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-10-save-file.png)

![Auto仍需确认Collection导入](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-preview.png)

**关键说明**：`composer_probe_connection` 只做 TLS 握手探测，不发送 HTTP 请求。它与 `composer_send_request` 是两个动作；连接探测成功不证明目标接口返回成功。具体入口和名称见 [Tool 速查](tool-reference.md#composer)。

返回：[教程目录](../README.md)。

<!-- recorded-walkthrough:composer-editing:start -->
<a id="walkthrough-composer-editing"></a>
## 逐步骤实操：正文、认证控件与 Collection 文件

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>jsonUrl</code> | <code>http://127.0.0.1:64036/guide/composer/edit/json</code> |
| <code>textUrl</code> | <code>http://127.0.0.1:64036/guide/composer/edit/text</code> |
| <code>formUrl</code> | <code>http://127.0.0.1:64036/guide/composer/edit/form</code> |
| <code>method</code> | <code>POST</code> |
| <code>jsonBody</code> | <code>{&quot;message&quot;:&quot;Hello JSON&quot;,&quot;orderId&quot;:&quot;guide-001&quot;}</code> |
| <code>textBody</code> | <code>Hello text</code> |
| <code>formBody</code> | <code>name=Interceptor&amp;ready=true</code> |
| <code>requestName</code> | <code>Guide form request</code> |
| <code>folderName</code> | <code>Guide collection</code> |
| <code>exportedFile</code> | <code>guide-collection.json</code> |
| <code>credentialsEntered</code> | <code>none</code> |

<a id="walkthrough-composer-editing-01-open"></a>
### 01 · 打开 Composer

![01 · 打开 Composer](../media/v0.1.1-alpha.1/composer-editing/composer-editing-01-open.png)

<a id="walkthrough-composer-editing-02-new"></a>
### 02 · 新建请求

![02 · 新建请求](../media/v0.1.1-alpha.1/composer-editing/composer-editing-02-new.png)

<a id="walkthrough-composer-editing-03-url"></a>
### 03 · 填写演示 URL

![03 · 填写演示 URL](../media/v0.1.1-alpha.1/composer-editing/composer-editing-03-url.png)

<a id="walkthrough-composer-editing-04-method"></a>
### 04 · 选择 POST

![04 · 选择 POST](../media/v0.1.1-alpha.1/composer-editing/composer-editing-04-method.png)

<a id="walkthrough-composer-editing-05-json-header"></a>
### 05 · 填写 JSON Content-Type

![05 · 填写 JSON Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-05-json-header.png)

<a id="walkthrough-composer-editing-06-body"></a>
### 06 · 打开 Body

![06 · 打开 Body](../media/v0.1.1-alpha.1/composer-editing/composer-editing-06-body.png)

<a id="walkthrough-composer-editing-07-json"></a>
### 07 · 选择 JSON

![07 · 选择 JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-07-json.png)

<a id="walkthrough-composer-editing-08-json-input"></a>
### 08 · 输入 Hello JSON

![08 · 输入 Hello JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-08-json-input.png)

<a id="walkthrough-composer-editing-09-json-send"></a>
### 09 · 发送并核对完整 JSON

![09 · 发送并核对完整 JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-09-json-send.png)

<a id="walkthrough-composer-editing-10-text"></a>
### 10 · 选择 Text

![10 · 选择 Text](../media/v0.1.1-alpha.1/composer-editing/composer-editing-10-text.png)

<a id="walkthrough-composer-editing-11-text-header"></a>
### 11 · 设置 text/plain

![11 · 设置 text/plain](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11-text-header.png)

<a id="walkthrough-composer-editing-11a-text-url"></a>
### 12 · 使用独立文本测试地址

![12 · 使用独立文本测试地址](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11a-text-url.png)

<a id="walkthrough-composer-editing-12-text-send"></a>
### 13 · 发送并核对文本

![13 · 发送并核对文本](../media/v0.1.1-alpha.1/composer-editing/composer-editing-12-text-send.png)

<a id="walkthrough-composer-editing-13-form"></a>
### 14 · 选择 Form

![14 · 选择 Form](../media/v0.1.1-alpha.1/composer-editing/composer-editing-13-form.png)

<a id="walkthrough-composer-editing-14-form-name"></a>
### 15 · 添加 name=Interceptor

![15 · 添加 name=Interceptor](../media/v0.1.1-alpha.1/composer-editing/composer-editing-14-form-name.png)

<a id="walkthrough-composer-editing-15-form-ready"></a>
### 16 · 添加 ready=true

![16 · 添加 ready=true](../media/v0.1.1-alpha.1/composer-editing/composer-editing-15-form-ready.png)

<a id="walkthrough-composer-editing-16-form-header"></a>
### 17 · 设置表单 Content-Type

![17 · 设置表单 Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16-form-header.png)

<a id="walkthrough-composer-editing-16a-form-url"></a>
### 18 · 使用独立表单测试地址

![18 · 使用独立表单测试地址](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16a-form-url.png)

<a id="walkthrough-composer-editing-17-form-send"></a>
### 19 · 发送并核对表单字节

![19 · 发送并核对表单字节](../media/v0.1.1-alpha.1/composer-editing/composer-editing-17-form-send.png)

<a id="walkthrough-composer-editing-18-auth"></a>
### 20 · 打开 Auth

![20 · 打开 Auth](../media/v0.1.1-alpha.1/composer-editing/composer-editing-18-auth.png)

<a id="walkthrough-composer-editing-19-bearer"></a>
### 21 · 查看 Bearer 输入位置，不填真实Key

![21 · 查看 Bearer 输入位置，不填真实Key](../media/v0.1.1-alpha.1/composer-editing/composer-editing-19-bearer.png)

<a id="walkthrough-composer-editing-20-basic"></a>
### 22 · 查看 Basic 输入位置

![22 · 查看 Basic 输入位置](../media/v0.1.1-alpha.1/composer-editing/composer-editing-20-basic.png)

<a id="walkthrough-composer-editing-21-none"></a>
### 23 · 恢复 None

![23 · 恢复 None](../media/v0.1.1-alpha.1/composer-editing/composer-editing-21-none.png)

<a id="walkthrough-composer-editing-22-rename"></a>
### 24 · 重命名 Guide form request

![24 · 重命名 Guide form request](../media/v0.1.1-alpha.1/composer-editing/composer-editing-22-rename.png)

<a id="walkthrough-composer-editing-23-folder"></a>
### 25 · 新建 Guide collection

![25 · 新建 Guide collection](../media/v0.1.1-alpha.1/composer-editing/composer-editing-23-folder.png)

<a id="walkthrough-composer-editing-24-move"></a>
### 26 · 把请求移入目录

![26 · 把请求移入目录](../media/v0.1.1-alpha.1/composer-editing/composer-editing-24-move.png)

<a id="walkthrough-composer-editing-25-export"></a>
### 27 · 导出 guide-collection.json

![27 · 导出 guide-collection.json](../media/v0.1.1-alpha.1/composer-editing/composer-editing-25-export.png)

<a id="walkthrough-composer-editing-26-exported"></a>
### 28 · 核对实际导出内容

![28 · 核对实际导出内容](../media/v0.1.1-alpha.1/composer-editing/composer-editing-26-exported.png)

<a id="walkthrough-composer-editing-27-import"></a>
### 29 · 选择同一个集合文件

![29 · 选择同一个集合文件](../media/v0.1.1-alpha.1/composer-editing/composer-editing-27-import.png)

<a id="walkthrough-composer-editing-28-preview"></a>
### 30 · 检查导入预览

![30 · 检查导入预览](../media/v0.1.1-alpha.1/composer-editing/composer-editing-28-preview.png)

<a id="walkthrough-composer-editing-29-confirm"></a>
### 31 · 确认追加而不覆盖

![31 · 确认追加而不覆盖](../media/v0.1.1-alpha.1/composer-editing/composer-editing-29-confirm.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-editing:end -->

<!-- recorded-walkthrough:composer-collection:start -->
<a id="walkthrough-composer-collection"></a>
## 逐步骤实操：目录层级、排序、取消和删除

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>folderOne</code> | <code>Guide level 1</code> |
| <code>folderTwo</code> | <code>Guide level 2</code> |
| <code>folderThree</code> | <code>Guide level 3</code> |
| <code>renamedFolder</code> | <code>Guide saved requests</code> |
| <code>requestOne</code> | <code>Guide request 1</code> |
| <code>requestTwo</code> | <code>Guide request 2</code> |
| <code>urlOne</code> | <code>http://127.0.0.1:54811/guide/collection/1</code> |
| <code>urlTwo</code> | <code>http://127.0.0.1:54811/guide/collection/2</code> |
| <code>fileName</code> | <code>guide-collection-tree.json</code> |
| <code>requestsSent</code> | <code>0</code> |

<a id="walkthrough-composer-collection-01-open"></a>
### 01 · 打开 Composer

![01 · 打开 Composer](../media/v0.1.1-alpha.1/composer-collection/composer-collection-01-open.png)

<a id="walkthrough-composer-collection-02-folder-1"></a>
### 02 · 创建 Guide level 1

![02 · 创建 Guide level 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-1.png)

<a id="walkthrough-composer-collection-02-folder-2"></a>
### 03 · 创建 Guide level 2

![03 · 创建 Guide level 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-2.png)

<a id="walkthrough-composer-collection-02-folder-3"></a>
### 04 · 创建 Guide level 3

![04 · 创建 Guide level 3](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-3.png)

<a id="walkthrough-composer-collection-03-depth-limit"></a>
### 05 · 检查第三级的子目录禁用

![05 · 检查第三级的子目录禁用](../media/v0.1.1-alpha.1/composer-collection/composer-collection-03-depth-limit.png)

<a id="walkthrough-composer-collection-04-request-1"></a>
### 06 · 在目录中新建 Guide request 1

![06 · 在目录中新建 Guide request 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-1.png)

<a id="walkthrough-composer-collection-04-request-2"></a>
### 07 · 在目录中新建 Guide request 2

![07 · 在目录中新建 Guide request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-2.png)

<a id="walkthrough-composer-collection-05-switch-1"></a>
### 08 · 切换并核对 request 1

![08 · 切换并核对 request 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-1.png)

<a id="walkthrough-composer-collection-05-switch-2"></a>
### 09 · 切换并核对 request 2

![09 · 切换并核对 request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-2.png)

<a id="walkthrough-composer-collection-06-rename-folder"></a>
### 10 · 重命名 Guide saved requests

![10 · 重命名 Guide saved requests](../media/v0.1.1-alpha.1/composer-collection/composer-collection-06-rename-folder.png)

<a id="walkthrough-composer-collection-07-reorder"></a>
### 11 · 调整同级请求顺序

![11 · 调整同级请求顺序](../media/v0.1.1-alpha.1/composer-collection/composer-collection-07-reorder.png)

<a id="walkthrough-composer-collection-08-export"></a>
### 12 · 保存目录示例文件

![12 · 保存目录示例文件](../media/v0.1.1-alpha.1/composer-collection/composer-collection-08-export.png)

<a id="walkthrough-composer-collection-09-open-import"></a>
### 13 · 选择同一导出文件

![13 · 选择同一导出文件](../media/v0.1.1-alpha.1/composer-collection/composer-collection-09-open-import.png)

<a id="walkthrough-composer-collection-10-cancel-preview"></a>
### 14 · 取消导入不追加

![14 · 取消导入不追加](../media/v0.1.1-alpha.1/composer-collection/composer-collection-10-cancel-preview.png)

<a id="walkthrough-composer-collection-11-delete-request"></a>
### 15 · 删除本轮 request 2

![15 · 删除本轮 request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-11-delete-request.png)

<a id="walkthrough-composer-collection-12-delete-folder"></a>
### 16 · 删除本轮目录及剩余演示请求

![16 · 删除本轮目录及剩余演示请求](../media/v0.1.1-alpha.1/composer-collection/composer-collection-12-delete-folder.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-collection:end -->

<!-- recorded-walkthrough:composer-fields:start -->
<a id="walkthrough-composer-fields"></a>
## 逐步骤实操：字段停用/删除、重发与历史恢复

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>origin</code> | <code>http://127.0.0.1:62733/guide/composer-fields</code> |
| <code>headerName</code> | <code>x-guide-toggle</code> |
| <code>headerValue</code> | <code>enabled</code> |
| <code>queryName</code> | <code>guide</code> |
| <code>queryValue</code> | <code>enabled</code> |
| <code>json</code> | <code>{&quot;message&quot;:&quot;format-demo&quot;,&quot;count&quot;:2}</code> |
| <code>historyRestores</code> | <code>method and URL only</code> |

<a id="walkthrough-composer-fields-01-new"></a>
### 01 · 新建请求

![01 · 新建请求](../media/v0.1.1-alpha.1/composer-fields/composer-fields-01-new.png)

<a id="walkthrough-composer-fields-02-header"></a>
### 02 · 添加 x-guide-toggle=enabled

![02 · 添加 x-guide-toggle=enabled](../media/v0.1.1-alpha.1/composer-fields/composer-fields-02-header.png)

<a id="walkthrough-composer-fields-03-query"></a>
### 03 · 添加 guide=enabled

![03 · 添加 guide=enabled](../media/v0.1.1-alpha.1/composer-fields/composer-fields-03-query.png)

<a id="walkthrough-composer-fields-04-send-enabled"></a>
### 04 · 重发并核对两个字段

![04 · 重发并核对两个字段](../media/v0.1.1-alpha.1/composer-fields/composer-fields-04-send-enabled.png)

<a id="walkthrough-composer-fields-05-query-off"></a>
### 05 · 停用 Query 行

![05 · 停用 Query 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-05-query-off.png)

<a id="walkthrough-composer-fields-06-header-off"></a>
### 06 · 停用 Header 行

![06 · 停用 Header 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-06-header-off.png)

<a id="walkthrough-composer-fields-07-send-disabled"></a>
### 07 · 重发并确认字段未发送

![07 · 重发并确认字段未发送](../media/v0.1.1-alpha.1/composer-fields/composer-fields-07-send-disabled.png)

<a id="walkthrough-composer-fields-08-header-delete"></a>
### 08 · 删除 Header 行

![08 · 删除 Header 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-08-header-delete.png)

<a id="walkthrough-composer-fields-09-query-delete"></a>
### 09 · 删除 Query 行

![09 · 删除 Query 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-09-query-delete.png)

<a id="walkthrough-composer-fields-10-json"></a>
### 10 · 选择 POST 与 JSON

![10 · 选择 POST 与 JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-10-json.png)

<a id="walkthrough-composer-fields-11-format"></a>
### 11 · Format JSON

![11 · Format JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-11-format.png)

<a id="walkthrough-composer-fields-12-send-json"></a>
### 12 · 发送并核对格式化后的 JSON

![12 · 发送并核对格式化后的 JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-12-send-json.png)

<a id="walkthrough-composer-fields-13-none"></a>
### 13 · 选择 Body None

![13 · 选择 Body None](../media/v0.1.1-alpha.1/composer-fields/composer-fields-13-none.png)

<a id="walkthrough-composer-fields-14-send-none"></a>
### 14 · 发送空正文

![14 · 发送空正文](../media/v0.1.1-alpha.1/composer-fields/composer-fields-14-send-none.png)

<a id="walkthrough-composer-fields-15-history"></a>
### 15 · 从 Recent sends 选择旧地址

![15 · 从 Recent sends 选择旧地址](../media/v0.1.1-alpha.1/composer-fields/composer-fields-15-history.png)

<a id="walkthrough-composer-fields-16-check-restored"></a>
### 16 · 核对没有恢复已删除字段或正文

![16 · 核对没有恢复已删除字段或正文](../media/v0.1.1-alpha.1/composer-fields/composer-fields-16-check-restored.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-fields:end -->

<!-- recorded-walkthrough:composer-inspection:start -->
<a id="walkthrough-composer-inspection"></a>
## 逐步骤实操：响应分组、正文查看器与分栏

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>responseUrl</code> | <code>http://127.0.0.1:62704/guide/composer-inspection/response</code> |
| <code>requestHeader</code> | <code>x-guide-request</code> |
| <code>requestHeaderValue</code> | <code>inspection-demo</code> |
| <code>responseHeader</code> | <code>x-guide-response</code> |
| <code>responseHeaderValue</code> | <code>inspection-demo</code> |
| <code>responseJson</code> | <code>{&quot;message&quot;:&quot;Hello response&quot;,&quot;order&quot;:{&quot;id&quot;:&quot;guide-001&quot;,&quot;items&quot;:[{&quot;sku&quot;:&quot;demo-001&quot;,&quot;quantity&quot;:2}]},&quot;ok&quot;:true}</code> |
| <code>cookieOne</code> | <code>guide_session=inspection-demo; Path=/; HttpOnly</code> |
| <code>cookieTwo</code> | <code>guide_theme=light; Path=/</code> |
| <code>treeCopyValue</code> | <code>Hello response</code> |
| <code>cssUrl</code> | <code>http://127.0.0.1:62704/guide/composer-inspection/format</code> |
| <code>cssRule</code> | <code>.guide{color:teal}</code> |
| <code>cssPaddingBytes</code> | <code>1048576</code> |
| <code>cssResponseBytes</code> | <code>1048594</code> |
| <code>cssPadding</code> | <code>ASCII spaces after the rule; above the 1 MiB automatic formatting threshold</code> |

<a id="walkthrough-composer-inspection-01-open"></a>
### 01 · 打开 Composer

![01 · 打开 Composer](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-01-open.png)

<a id="walkthrough-composer-inspection-02-new"></a>
### 02 · 新建响应检查请求

![02 · 新建响应检查请求](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-02-new.png)

<a id="walkthrough-composer-inspection-03-url"></a>
### 03 · 填写响应检查地址

![03 · 填写响应检查地址](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-03-url.png)

<a id="walkthrough-composer-inspection-04-header-name"></a>
### 04 · 填写 x-guide-request

![04 · 填写 x-guide-request](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-04-header-name.png)

<a id="walkthrough-composer-inspection-05-header-value"></a>
### 05 · 填写 inspection-demo

![05 · 填写 inspection-demo](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-05-header-value.png)

<a id="walkthrough-composer-inspection-06-add-header"></a>
### 06 · 添加请求 Header

![06 · 添加请求 Header](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-06-add-header.png)

<a id="walkthrough-composer-inspection-07-send"></a>
### 07 · Send 并接收真实 JSON

![07 · Send 并接收真实 JSON](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-07-send.png)

<a id="walkthrough-composer-inspection-08-headers"></a>
### 08 · 打开响应 Headers

![08 · 打开响应 Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-08-headers.png)

<a id="walkthrough-composer-inspection-09-response-collapse"></a>
### 09 · 折叠 Response Headers

![09 · 折叠 Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-09-response-collapse.png)

<a id="walkthrough-composer-inspection-10-request-collapse"></a>
### 10 · 折叠 Request Headers

![10 · 折叠 Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-10-request-collapse.png)

<a id="walkthrough-composer-inspection-11-response-expand"></a>
### 11 · 展开 Response Headers

![11 · 展开 Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-11-response-expand.png)

<a id="walkthrough-composer-inspection-12-request-expand"></a>
### 12 · 展开 Request Headers

![12 · 展开 Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-12-request-expand.png)

<a id="walkthrough-composer-inspection-13-cookies"></a>
### 13 · 打开响应 Cookies

![13 · 打开响应 Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-13-cookies.png)

<a id="walkthrough-composer-inspection-14-cookies-collapse"></a>
### 14 · 折叠 Cookies 分组

![14 · 折叠 Cookies 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-14-cookies-collapse.png)

<a id="walkthrough-composer-inspection-15-cookies-expand"></a>
### 15 · 展开 Cookies 分组

![15 · 展开 Cookies 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-15-cookies-expand.png)

<a id="walkthrough-composer-inspection-16-timing"></a>
### 16 · 查看 Timing 与连接信息

![16 · 查看 Timing 与连接信息](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-16-timing.png)

<a id="walkthrough-composer-inspection-17-timing-collapse"></a>
### 17 · 折叠 Timing 分组

![17 · 折叠 Timing 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-17-timing-collapse.png)

<a id="walkthrough-composer-inspection-18-connection-collapse"></a>
### 18 · 折叠 Connection 分组

![18 · 折叠 Connection 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-18-connection-collapse.png)

<a id="walkthrough-composer-inspection-19-timing-expand"></a>
### 19 · 展开 Timing 分组

![19 · 展开 Timing 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-19-timing-expand.png)

<a id="walkthrough-composer-inspection-20-connection-expand"></a>
### 20 · 展开 Connection 分组

![20 · 展开 Connection 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-20-connection-expand.png)

<a id="walkthrough-composer-inspection-21-body"></a>
### 21 · 返回响应 Body

![21 · 返回响应 Body](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-21-body.png)

<a id="walkthrough-composer-inspection-22-tree"></a>
### 22 · 切换 Tree

![22 · 切换 Tree](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-22-tree.png)

<a id="walkthrough-composer-inspection-23-tree-collapse"></a>
### 23 · 折叠 JSON 根节点

![23 · 折叠 JSON 根节点](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-23-tree-collapse.png)

<a id="walkthrough-composer-inspection-24-tree-expand"></a>
### 24 · 展开 JSON 根节点

![24 · 展开 JSON 根节点](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-24-tree-expand.png)

<a id="walkthrough-composer-inspection-25-tree-menu"></a>
### 25 · 打开 message 的右键菜单

![25 · 打开 message 的右键菜单](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-25-tree-menu.png)

<a id="walkthrough-composer-inspection-26-tree-copy-value"></a>
### 26 · 复制 message 的值

![26 · 复制 message 的值](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-26-tree-copy-value.png)

<a id="walkthrough-composer-inspection-27-raw"></a>
### 27 · 切换 Raw

![27 · 切换 Raw](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-27-raw.png)

<a id="walkthrough-composer-inspection-28-copy-raw"></a>
### 28 · 复制 Raw 原始文本

![28 · 复制 Raw 原始文本](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-28-copy-raw.png)

<a id="walkthrough-composer-inspection-29-hex"></a>
### 29 · 切换 Hex 字节视图

![29 · 切换 Hex 字节视图](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-29-hex.png)

<a id="walkthrough-composer-inspection-30-copy-hex"></a>
### 30 · 复制 Hex 并核对原始字节

![30 · 复制 Hex 并核对原始字节](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-30-copy-hex.png)

<a id="walkthrough-composer-inspection-31-fullscreen"></a>
### 31 · 全屏查看响应 Hex

![31 · 全屏查看响应 Hex](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-31-fullscreen.png)

<a id="walkthrough-composer-inspection-32-exit-fullscreen"></a>
### 32 · 退出正文全屏

![32 · 退出正文全屏](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-32-exit-fullscreen.png)

<a id="walkthrough-composer-inspection-33-collection-drag"></a>
### 33 · 拖宽 Collection 分栏

![33 · 拖宽 Collection 分栏](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-33-collection-drag.png)

<a id="walkthrough-composer-inspection-34-response-drag"></a>
### 34 · 向上拖动以增高响应区

![34 · 向上拖动以增高响应区](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-34-response-drag.png)

<a id="walkthrough-composer-inspection-35-format-url"></a>
### 35 · 填写独立 CSS 地址

![35 · 填写独立 CSS 地址](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-35-format-url.png)

<a id="walkthrough-composer-inspection-36-css-send"></a>
### 36 · 接收需要手动 Format 的 CSS

![36 · 接收需要手动 Format 的 CSS](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-36-css-send.png)

<a id="walkthrough-composer-inspection-37-css-copy-before"></a>
### 37 · 复制并核对 Format 前的 CSS

![37 · 复制并核对 Format 前的 CSS](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-37-css-copy-before.png)

<a id="walkthrough-composer-inspection-38-format"></a>
### 38 · 点击 Format 格式化响应

![38 · 点击 Format 格式化响应](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-38-format.png)

<a id="walkthrough-composer-inspection-39-css-copy-after"></a>
### 39 · 复制并核对格式化结果

![39 · 复制并核对格式化结果](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-39-css-copy-after.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-inspection:end -->

<!-- recorded-walkthrough:composer-replay:start -->
<a id="walkthrough-composer-replay"></a>
## 逐步骤实操：重复 Query、Text 输入与历史重发

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>initialUrl</code> | <code>http://127.0.0.1:65227/guide/composer-replay/query?guide=url</code> |
| <code>initialSentUrl</code> | <code>http://127.0.0.1:65227/guide/composer-replay/query?guide=url&amp;guide=table&amp;guide=again</code> |
| <code>initialMethod</code> | <code>POST</code> |
| <code>queryName</code> | <code>guide</code> |
| <code>urlQueryValue</code> | <code>url</code> |
| <code>firstTableValue</code> | <code>table</code> |
| <code>secondTableValue</code> | <code>again</code> |
| <code>textUrl</code> | <code>http://127.0.0.1:65227/guide/composer-replay/text?guide=text-url</code> |
| <code>textSentUrl</code> | <code>http://127.0.0.1:65227/guide/composer-replay/text?guide=text-url&amp;guide=table&amp;guide=again</code> |
| <code>textMethod</code> | <code>PUT</code> |
| <code>textPartial</code> | <code>Hello</code> |
| <code>textBody</code> | <code>Hello text</code> |
| <code>textContentType</code> | <code>not added automatically in Text mode; this example leaves the Header unset</code> |
| <code>currentTableValue</code> | <code>current</code> |
| <code>currentBody</code> | <code>Hello replay</code> |
| <code>restoredMethod</code> | <code>POST</code> |
| <code>restoredUrl</code> | <code>http://127.0.0.1:65227/guide/composer-replay/query?guide=url&amp;guide=table&amp;guide=again</code> |
| <code>replaySentUrl</code> | <code>http://127.0.0.1:65227/guide/composer-replay/query?guide=url&amp;guide=table&amp;guide=again&amp;guide=current&amp;guide=again</code> |
| <code>replayQueryValues</code> | <code>url, table, again, current, again</code> |
| <code>historyRestores</code> | <code>method and previously composed URL only; enabled current Query rows append again</code> |

<a id="walkthrough-composer-replay-01-open"></a>
### 01 · 打开 Composer

![01 · 打开 Composer](../media/v0.1.1-alpha.1/composer-replay/composer-replay-01-open.png)

<a id="walkthrough-composer-replay-02-new"></a>
### 02 · 新建 Query 与重发请求

![02 · 新建 Query 与重发请求](../media/v0.1.1-alpha.1/composer-replay/composer-replay-02-new.png)

<a id="walkthrough-composer-replay-03-url"></a>
### 03 · 在 URL 中填写 guide=url

![03 · 在 URL 中填写 guide=url](../media/v0.1.1-alpha.1/composer-replay/composer-replay-03-url.png)

<a id="walkthrough-composer-replay-04-post"></a>
### 04 · 选择 POST

![04 · 选择 POST](../media/v0.1.1-alpha.1/composer-replay/composer-replay-04-post.png)

<a id="walkthrough-composer-replay-05-query"></a>
### 05 · 打开仍为空的 Query 表格

![05 · 打开仍为空的 Query 表格](../media/v0.1.1-alpha.1/composer-replay/composer-replay-05-query.png)

<a id="walkthrough-composer-replay-06-query-name"></a>
### 06 · 填写 Query 名称 guide

![06 · 填写 Query 名称 guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-06-query-name.png)

<a id="walkthrough-composer-replay-07-query-value"></a>
### 07 · 填写 Query 值 table

![07 · 填写 Query 值 table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-07-query-value.png)

<a id="walkthrough-composer-replay-08-add-query"></a>
### 08 · 添加 guide=table

![08 · 添加 guide=table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-08-add-query.png)

<a id="walkthrough-composer-replay-09-duplicate-name"></a>
### 09 · 再次填写同名 guide

![09 · 再次填写同名 guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-09-duplicate-name.png)

<a id="walkthrough-composer-replay-10-duplicate-value"></a>
### 10 · 填写第二行值 again

![10 · 填写第二行值 again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-10-duplicate-value.png)

<a id="walkthrough-composer-replay-11-add-duplicate"></a>
### 11 · 添加第二条同名 Query

![11 · 添加第二条同名 Query](../media/v0.1.1-alpha.1/composer-replay/composer-replay-11-add-duplicate.png)

<a id="walkthrough-composer-replay-12-send-query"></a>
### 12 · 发送并核对三个 guide 值

![12 · 发送并核对三个 guide 值](../media/v0.1.1-alpha.1/composer-replay/composer-replay-12-send-query.png)

<a id="walkthrough-composer-replay-13-text-url"></a>
### 13 · 只修改主机与路径为文本地址

![13 · 只修改主机与路径为文本地址](../media/v0.1.1-alpha.1/composer-replay/composer-replay-13-text-url.png)

<a id="walkthrough-composer-replay-14-put"></a>
### 14 · 将方法改为 PUT

![14 · 将方法改为 PUT](../media/v0.1.1-alpha.1/composer-replay/composer-replay-14-put.png)

<a id="walkthrough-composer-replay-15-body"></a>
### 15 · 打开请求 Body

![15 · 打开请求 Body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-15-body.png)

<a id="walkthrough-composer-replay-16-text-mode"></a>
### 16 · 选择 Text，暂不输入

![16 · 选择 Text，暂不输入](../media/v0.1.1-alpha.1/composer-replay/composer-replay-16-text-mode.png)

<a id="walkthrough-composer-replay-17-text-partial"></a>
### 17 · 输入中间态 Hello

![17 · 输入中间态 Hello](../media/v0.1.1-alpha.1/composer-replay/composer-replay-17-text-partial.png)

<a id="walkthrough-composer-replay-18-text-complete"></a>
### 18 · 继续输入为 Hello text

![18 · 继续输入为 Hello text](../media/v0.1.1-alpha.1/composer-replay/composer-replay-18-text-complete.png)

<a id="walkthrough-composer-replay-19-send-text"></a>
### 19 · 发送并核对 Hello text 字节

![19 · 发送并核对 Hello text 字节](../media/v0.1.1-alpha.1/composer-replay/composer-replay-19-send-text.png)

<a id="walkthrough-composer-replay-20-query-again"></a>
### 20 · 回到 Query 表格

![20 · 回到 Query 表格](../media/v0.1.1-alpha.1/composer-replay/composer-replay-20-query-again.png)

<a id="walkthrough-composer-replay-21-query-current"></a>
### 21 · 将 table 改为 current

![21 · 将 table 改为 current](../media/v0.1.1-alpha.1/composer-replay/composer-replay-21-query-current.png)

<a id="walkthrough-composer-replay-22-body-again"></a>
### 22 · 回到当前 Text 正文

![22 · 回到当前 Text 正文](../media/v0.1.1-alpha.1/composer-replay/composer-replay-22-body-again.png)

<a id="walkthrough-composer-replay-23-body-current"></a>
### 23 · 将正文改为 Hello replay

![23 · 将正文改为 Hello replay](../media/v0.1.1-alpha.1/composer-replay/composer-replay-23-body-current.png)

<a id="walkthrough-composer-replay-24-history"></a>
### 24 · 打开 Recent sends 菜单

![24 · 打开 Recent sends 菜单](../media/v0.1.1-alpha.1/composer-replay/composer-replay-24-history.png)

<a id="walkthrough-composer-replay-25-restore-old"></a>
### 25 · 选回旧 POST 地址

![25 · 选回旧 POST 地址](../media/v0.1.1-alpha.1/composer-replay/composer-replay-25-restore-old.png)

<a id="walkthrough-composer-replay-26-current-query"></a>
### 26 · 检查 Query 仍为 current 与 again

![26 · 检查 Query 仍为 current 与 again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-26-current-query.png)

<a id="walkthrough-composer-replay-27-resend"></a>
### 27 · 再次 Send，核对追加的 Query 与当前正文

![27 · 再次 Send，核对追加的 Query 与当前正文](../media/v0.1.1-alpha.1/composer-replay/composer-replay-27-resend.png)

<a id="walkthrough-composer-replay-28-confirm-body"></a>
### 28 · 查看重发后保留的 Text 正文

![28 · 查看重发后保留的 Text 正文](../media/v0.1.1-alpha.1/composer-replay/composer-replay-28-confirm-body.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-replay:end -->

<!-- recorded-walkthrough:composer-auth:start -->
<a id="walkthrough-composer-auth"></a>
## 逐步骤实操：自有公开认证示例与Authorization清理

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:62653/guide/composer-auth</code> |
| <code>username</code> | <code>guide-user</code> |
| <code>password</code> | <code>public-demo-password</code> |
| <code>bearerToken</code> | <code>public-demo-token</code> |
| <code>scope</code> | <code>Public demonstration strings accepted only by this temporary loopback origin; not real credentials</code> |
| <code>responses</code> | <code>None 401; Basic 200; Bearer 200; None without explicit Header 401</code> |
| <code>explicitHeader</code> | <code>Auth None leaves a user-added Authorization Header until its row is deleted</code> |

<a id="walkthrough-composer-auth-01-composer"></a>
### 01 · 打开Composer

![01 · 打开Composer](../media/v0.1.1-alpha.1/composer-auth/composer-auth-01-composer.png)

<a id="walkthrough-composer-auth-02-new"></a>
### 02 · 新建认证演示请求

![02 · 新建认证演示请求](../media/v0.1.1-alpha.1/composer-auth/composer-auth-02-new.png)

<a id="walkthrough-composer-auth-03-url"></a>
### 03 · 填写自有localhost服务地址

![03 · 填写自有localhost服务地址](../media/v0.1.1-alpha.1/composer-auth/composer-auth-03-url.png)

<a id="walkthrough-composer-auth-04-none"></a>
### 04 · 无认证发送得到401

![04 · 无认证发送得到401](../media/v0.1.1-alpha.1/composer-auth/composer-auth-04-none.png)

<a id="walkthrough-composer-auth-05-auth-tab"></a>
### 05 · 打开Auth

![05 · 打开Auth](../media/v0.1.1-alpha.1/composer-auth/composer-auth-05-auth-tab.png)

<a id="walkthrough-composer-auth-06-basic"></a>
### 06 · 选择Basic

![06 · 选择Basic](../media/v0.1.1-alpha.1/composer-auth/composer-auth-06-basic.png)

<a id="walkthrough-composer-auth-07-username"></a>
### 07 · 填写公开演示用户名

![07 · 填写公开演示用户名](../media/v0.1.1-alpha.1/composer-auth/composer-auth-07-username.png)

<a id="walkthrough-composer-auth-08-password"></a>
### 08 · 填写仅本机有效的演示密码

![08 · 填写仅本机有效的演示密码](../media/v0.1.1-alpha.1/composer-auth/composer-auth-08-password.png)

<a id="walkthrough-composer-auth-09-basic-result"></a>
### 09 · 发送Basic并核对200

![09 · 发送Basic并核对200](../media/v0.1.1-alpha.1/composer-auth/composer-auth-09-basic-result.png)

<a id="walkthrough-composer-auth-10-bearer"></a>
### 10 · 切换到Bearer

![10 · 切换到Bearer](../media/v0.1.1-alpha.1/composer-auth/composer-auth-10-bearer.png)

<a id="walkthrough-composer-auth-11-token"></a>
### 11 · 填写公开演示token

![11 · 填写公开演示token](../media/v0.1.1-alpha.1/composer-auth/composer-auth-11-token.png)

<a id="walkthrough-composer-auth-12-bearer-result"></a>
### 12 · 发送Bearer并核对200

![12 · 发送Bearer并核对200](../media/v0.1.1-alpha.1/composer-auth/composer-auth-12-bearer-result.png)

<a id="walkthrough-composer-auth-13-none-again"></a>
### 13 · 切回None

![13 · 切回None](../media/v0.1.1-alpha.1/composer-auth/composer-auth-13-none-again.png)

<a id="walkthrough-composer-auth-14-none-result"></a>
### 14 · 核对自动Authorization已移除

![14 · 核对自动Authorization已移除](../media/v0.1.1-alpha.1/composer-auth/composer-auth-14-none-result.png)

<a id="walkthrough-composer-auth-15-headers"></a>
### 15 · 打开Headers添加显式字段

![15 · 打开Headers添加显式字段](../media/v0.1.1-alpha.1/composer-auth/composer-auth-15-headers.png)

<a id="walkthrough-composer-auth-16-explicit-name"></a>
### 16 · 填写Authorization名称

![16 · 填写Authorization名称](../media/v0.1.1-alpha.1/composer-auth/composer-auth-16-explicit-name.png)

<a id="walkthrough-composer-auth-17-explicit-value"></a>
### 17 · 填写同一公开Bearer值

![17 · 填写同一公开Bearer值](../media/v0.1.1-alpha.1/composer-auth/composer-auth-17-explicit-value.png)

<a id="walkthrough-composer-auth-18-add-header"></a>
### 18 · 添加这条显式Header

![18 · 添加这条显式Header](../media/v0.1.1-alpha.1/composer-auth/composer-auth-18-add-header.png)

<a id="walkthrough-composer-auth-19-none-keeps-header"></a>
### 19 · None不删除显式Authorization

![19 · None不删除显式Authorization](../media/v0.1.1-alpha.1/composer-auth/composer-auth-19-none-keeps-header.png)

<a id="walkthrough-composer-auth-20-delete-header"></a>
### 20 · 删除自己的显式Authorization行

![20 · 删除自己的显式Authorization行](../media/v0.1.1-alpha.1/composer-auth/composer-auth-20-delete-header.png)

<a id="walkthrough-composer-auth-21-header-removed"></a>
### 21 · 核对请求不再带认证字段

![21 · 核对请求不再带认证字段](../media/v0.1.1-alpha.1/composer-auth/composer-auth-21-header-removed.png)

<a id="walkthrough-composer-auth-22-clear-basic-type"></a>
### 22 · 返回Basic清理演示输入

![22 · 返回Basic清理演示输入](../media/v0.1.1-alpha.1/composer-auth/composer-auth-22-clear-basic-type.png)

<a id="walkthrough-composer-auth-23-clear-username"></a>
### 23 · 清空演示用户名

![23 · 清空演示用户名](../media/v0.1.1-alpha.1/composer-auth/composer-auth-23-clear-username.png)

<a id="walkthrough-composer-auth-24-clear-password"></a>
### 24 · 清空演示密码

![24 · 清空演示密码](../media/v0.1.1-alpha.1/composer-auth/composer-auth-24-clear-password.png)

<a id="walkthrough-composer-auth-25-clear-bearer-type"></a>
### 25 · 返回Bearer

![25 · 返回Bearer](../media/v0.1.1-alpha.1/composer-auth/composer-auth-25-clear-bearer-type.png)

<a id="walkthrough-composer-auth-26-clear-token"></a>
### 26 · 清空演示token

![26 · 清空演示token](../media/v0.1.1-alpha.1/composer-auth/composer-auth-26-clear-token.png)

<a id="walkthrough-composer-auth-27-finish-none"></a>
### 27 · 最终保持None

![27 · 最终保持None](../media/v0.1.1-alpha.1/composer-auth/composer-auth-27-finish-none.png)

<a id="walkthrough-composer-auth-28-no-capture"></a>
### 28 · 确认Composer没有写入Capture

![28 · 确认Composer没有写入Capture](../media/v0.1.1-alpha.1/composer-auth/composer-auth-28-no-capture.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-auth:end -->

<!-- recorded-walkthrough:composer-tools:start -->
<a id="walkthrough-composer-tools"></a>
## 逐步骤实操：MCP发送审批与Collection读取替换

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>caller</code> | <code>Official local SDK; not a commercial Host interface</code> |
| <code>clientName</code> | <code>Guide Composer tools</code> |
| <code>endpoint</code> | <code>http://127.0.0.1:52619/mcp</code> |
| <code>originalName</code> | <code>Guide UI request</code> |
| <code>replacedName</code> | <code>Guide MCP renamed request</code> |
| <code>savedUrl</code> | <code>http://127.0.0.1:52615/guide/composer-tools/saved</code> |
| <code>sentUrl</code> | <code>http://127.0.0.1:52615/guide/composer-tools/allowed</code> |
| <code>uiResponse</code> | <code>guide-ui-response</code> |
| <code>toolResponse</code> | <code>{&quot;message&quot;:&quot;guide-tool-response&quot;}</code> |
| <code>method</code> | <code>POST</code> |
| <code>requestBody</code> | <code>{&quot;message&quot;:&quot;guide-tool-request&quot;}</code> |
| <code>requestHeader</code> | <code>x-guide-tool: public-example</code> |
| <code>collectionHeader</code> | <code>x-guide-collection: public-example</code> |
| <code>protocol</code> | <code>http/1.1</code> |
| <code>timeoutMs</code> | <code>5000</code> |
| <code>originalRevision</code> | <code>4</code> |
| <code>finalRevision</code> | <code>5</code> |
| <code>uiBoundary</code> | <code>Tool sending returns to its caller; Collection replacement notifies the mounted Composer UI</code> |

<a id="walkthrough-composer-tools-01-ask-client"></a>
### 01 · 检查本次Client的Ask模式

![01 · 检查本次Client的Ask模式](../media/v0.1.1-alpha.1/composer-tools/composer-tools-01-ask-client.png)

<a id="walkthrough-composer-tools-02-composer"></a>
### 02 · 打开Composer

![02 · 打开Composer](../media/v0.1.1-alpha.1/composer-tools/composer-tools-02-composer.png)

<a id="walkthrough-composer-tools-03-create"></a>
### 03 · 新建本次Collection请求

![03 · 新建本次Collection请求](../media/v0.1.1-alpha.1/composer-tools/composer-tools-03-create.png)

<a id="walkthrough-composer-tools-04-rename-menu"></a>
### 04 · 打开请求的重命名入口

![04 · 打开请求的重命名入口](../media/v0.1.1-alpha.1/composer-tools/composer-tools-04-rename-menu.png)

<a id="walkthrough-composer-tools-05-name"></a>
### 05 · 保存名称Guide UI request

![05 · 保存名称Guide UI request](../media/v0.1.1-alpha.1/composer-tools/composer-tools-05-name.png)

<a id="walkthrough-composer-tools-06-url"></a>
### 06 · 填写本次自有UI请求地址

![06 · 填写本次自有UI请求地址](../media/v0.1.1-alpha.1/composer-tools/composer-tools-06-url.png)

<a id="walkthrough-composer-tools-07-header"></a>
### 07 · 添加公开示例Header

![07 · 添加公开示例Header](../media/v0.1.1-alpha.1/composer-tools/composer-tools-07-header.png)

<a id="walkthrough-composer-tools-08-ui-send"></a>
### 08 · 通过UI Send读取guide-ui-response

![08 · 通过UI Send读取guide-ui-response](../media/v0.1.1-alpha.1/composer-tools/composer-tools-08-ui-send.png)

<a id="walkthrough-composer-tools-09-saved"></a>
### 09 · 等待Collection实际保存

![09 · 等待Collection实际保存](../media/v0.1.1-alpha.1/composer-tools/composer-tools-09-saved.png)

<a id="walkthrough-composer-tools-10-query"></a>
### 10 · 只读获取实际保存的Collection

![10 · 只读获取实际保存的Collection](../media/v0.1.1-alpha.1/composer-tools/composer-tools-10-query.png)

<a id="walkthrough-composer-tools-11-send-ask"></a>
### 11 · 检查Composer发送的实际审批

![11 · 检查Composer发送的实际审批](../media/v0.1.1-alpha.1/composer-tools/composer-tools-11-send-ask.png)

<a id="walkthrough-composer-tools-12-send-deny"></a>
### 12 · Deny不发送网络请求

![12 · Deny不发送网络请求](../media/v0.1.1-alpha.1/composer-tools/composer-tools-12-send-deny.png)

<a id="walkthrough-composer-tools-13-send-again"></a>
### 13 · 重新请求同一个明确目标

![13 · 重新请求同一个明确目标](../media/v0.1.1-alpha.1/composer-tools/composer-tools-13-send-again.png)

<a id="walkthrough-composer-tools-14-send-allow"></a>
### 14 · Allow后核对真实POST与201结果

![14 · Allow后核对真实POST与201结果](../media/v0.1.1-alpha.1/composer-tools/composer-tools-14-send-allow.png)

<a id="walkthrough-composer-tools-15-ui-response-kept"></a>
### 15 · Tool结果不替换当前UI响应

![15 · Tool结果不替换当前UI响应](../media/v0.1.1-alpha.1/composer-tools/composer-tools-15-ui-response-kept.png)

<a id="walkthrough-composer-tools-16-replace-ask"></a>
### 16 · 检查Collection替换的实际范围

![16 · 检查Collection替换的实际范围](../media/v0.1.1-alpha.1/composer-tools/composer-tools-16-replace-ask.png)

<a id="walkthrough-composer-tools-17-replace-deny"></a>
### 17 · Deny保留原Collection

![17 · Deny保留原Collection](../media/v0.1.1-alpha.1/composer-tools/composer-tools-17-replace-deny.png)

<a id="walkthrough-composer-tools-18-replace-again"></a>
### 18 · 用同一已读取版本重新请求

![18 · 用同一已读取版本重新请求](../media/v0.1.1-alpha.1/composer-tools/composer-tools-18-replace-again.png)

<a id="walkthrough-composer-tools-19-replace-allow"></a>
### 19 · Allow后查看当前UI自动同步

![19 · Allow后查看当前UI自动同步](../media/v0.1.1-alpha.1/composer-tools/composer-tools-19-replace-allow.png)

<a id="walkthrough-composer-tools-20-query-latest"></a>
### 20 · 重新读取最终保存版本

![20 · 重新读取最终保存版本](../media/v0.1.1-alpha.1/composer-tools/composer-tools-20-query-latest.png)

<a id="walkthrough-composer-tools-21-mcp-settings"></a>
### 21 · 回到本次MCP设置

![21 · 回到本次MCP设置](../media/v0.1.1-alpha.1/composer-tools/composer-tools-21-mcp-settings.png)

<a id="walkthrough-composer-tools-22-disable"></a>
### 22 · 关闭演示Client连接与Server

![22 · 关闭演示Client连接与Server](../media/v0.1.1-alpha.1/composer-tools/composer-tools-22-disable.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-tools:end -->

<!-- recorded-walkthrough:composer-file-tools:start -->
<a id="walkthrough-composer-file-tools"></a>
## 逐步骤实操：Collection原生文件Tool与确认边界

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>caller</code> | <code>Official local SDK, not a commercial Host UI</code> |
| <code>clientName</code> | <code>Guide Collection files</code> |
| <code>endpoint</code> | <code>http://127.0.0.1:65024/mcp</code> |
| <code>requestName</code> | <code>Guide file request</code> |
| <code>url</code> | <code>http://127.0.0.1:65022/guide/collection-file-tools</code> |
| <code>header</code> | <code>x-guide-file: public-collection</code> |
| <code>exportedFile</code> | <code>guide-tool-collection.json</code> |
| <code>cancelledFile</code> | <code>guide-cancelled-collection.json</code> |
| <code>sourceOfImport</code> | <code>The same file exported by the product in this workflow</code> |
| <code>importSemantics</code> | <code>Cancel does not write; confirmation appends with fresh request identities; Auto still confirms</code> |
| <code>networkRequests</code> | <code>0; file Tools do not Send</code> |

<a id="walkthrough-composer-file-tools-01-request"></a>
### 01 · 创建并命名本轮请求

![01 · 创建并命名本轮请求](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-01-request.png)

<a id="walkthrough-composer-file-tools-02-url"></a>
### 02 · 填写本轮公开测试地址

![02 · 填写本轮公开测试地址](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-02-url.png)

<a id="walkthrough-composer-file-tools-03-header"></a>
### 03 · 保存公开Header但不Send

![03 · 保存公开Header但不Send](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-03-header.png)

<a id="walkthrough-composer-file-tools-04-export-ask"></a>
### 04 · 检查Collection Export审批

![04 · 检查Collection Export审批](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-04-export-ask.png)

<a id="walkthrough-composer-file-tools-05-export-deny"></a>
### 05 · Deny不写出文件

![05 · Deny不写出文件](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-05-export-deny.png)

<a id="walkthrough-composer-file-tools-06-export-cancel-ask"></a>
### 06 · 再次请求Export并Allow

![06 · 再次请求Export并Allow](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-06-export-cancel-ask.png)

<a id="walkthrough-composer-file-tools-07-save-cancel-panel"></a>
### 07 · 在自有目录查看Save面板

![07 · 在自有目录查看Save面板](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-07-save-cancel-panel.png)

<a id="walkthrough-composer-file-tools-08-save-cancelled"></a>
### 08 · 取消原生Save后没有导出

![08 · 取消原生Save后没有导出](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-08-save-cancelled.png)

<a id="walkthrough-composer-file-tools-09-export-save-ask"></a>
### 09 · 请求真正保存的Export

![09 · 请求真正保存的Export](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-09-export-save-ask.png)

<a id="walkthrough-composer-file-tools-10-save-file"></a>
### 10 · 保存guide-tool-collection.json

![10 · 保存guide-tool-collection.json](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-10-save-file.png)

<a id="walkthrough-composer-file-tools-11-export-result"></a>
### 11 · 检查产品实际导出的文件

![11 · 检查产品实际导出的文件](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-11-export-result.png)

<a id="walkthrough-composer-file-tools-12-import-deny-ask"></a>
### 12 · 检查Import自己的审批

![12 · 检查Import自己的审批](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-12-import-deny-ask.png)

<a id="walkthrough-composer-file-tools-13-import-denied"></a>
### 13 · Deny不导入Collection

![13 · Deny不导入Collection](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-13-import-denied.png)

<a id="walkthrough-composer-file-tools-14-open-cancel-ask"></a>
### 14 · Allow后仍需要Open面板

![14 · Allow后仍需要Open面板](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-14-open-cancel-ask.png)

<a id="walkthrough-composer-file-tools-15-open-cancel-panel"></a>
### 15 · 只选择本流程导出的文件

![15 · 只选择本流程导出的文件](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-15-open-cancel-panel.png)

<a id="walkthrough-composer-file-tools-16-open-cancelled"></a>
### 16 · 取消Open保留原集合

![16 · 取消Open保留原集合](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-16-open-cancelled.png)

<a id="walkthrough-composer-file-tools-cancel-preview-ask"></a>
### 17 · 再次检查Import审批

![17 · 再次检查Import审批](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-cancel-preview-ask.png)

<a id="walkthrough-composer-file-tools-cancel-preview-open"></a>
### 18 · 打开同一份产品文件

![18 · 打开同一份产品文件](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-cancel-preview-open.png)

<a id="walkthrough-composer-file-tools-cancel-preview-preview"></a>
### 19 · 读取真实导入预览

![19 · 读取真实导入预览](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-cancel-preview-preview.png)

<a id="walkthrough-composer-file-tools-cancel-preview-decision"></a>
### 20 · 取消预览不修改集合

![20 · 取消预览不修改集合](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-cancel-preview-decision.png)

<a id="walkthrough-composer-file-tools-confirm-preview-ask"></a>
### 21 · 再次检查Import审批

![21 · 再次检查Import审批](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-confirm-preview-ask.png)

<a id="walkthrough-composer-file-tools-confirm-preview-open"></a>
### 22 · 打开同一份产品文件

![22 · 打开同一份产品文件](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-confirm-preview-open.png)

<a id="walkthrough-composer-file-tools-confirm-preview-preview"></a>
### 23 · 读取真实导入预览

![23 · 读取真实导入预览](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-confirm-preview-preview.png)

<a id="walkthrough-composer-file-tools-confirm-preview-decision"></a>
### 24 · 确认追加而不覆盖原请求

![24 · 确认追加而不覆盖原请求](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-confirm-preview-decision.png)

<a id="walkthrough-composer-file-tools-auto-mode"></a>
### 25 · 为本轮重复导入选择Auto

![25 · 为本轮重复导入选择Auto](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-mode.png)

<a id="walkthrough-composer-file-tools-auto-open"></a>
### 26 · Auto仍使用真实Open

![26 · Auto仍使用真实Open](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-open.png)

<a id="walkthrough-composer-file-tools-auto-preview"></a>
### 27 · Auto仍等待产品预览确认

![27 · Auto仍等待产品预览确认](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-preview.png)

<a id="walkthrough-composer-file-tools-auto-confirm"></a>
### 28 · 确认第二次追加并检查独立身份

![28 · 确认第二次追加并检查独立身份](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-confirm.png)

<a id="walkthrough-composer-file-tools-stop-server"></a>
### 29 · 关闭本轮MCP Server

![29 · 关闭本轮MCP Server](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-stop-server.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-file-tools:end -->

<!-- recorded-walkthrough:composer-persistence-save:start -->
<a id="walkthrough-composer-persistence-save"></a>
## 逐步骤实操：保存深层目录中的完整请求字段

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>folders</code> | <code>Guide persistence 1 &gt; Guide persistence 2 &gt; Guide persistence 3</code> |
| <code>requestName</code> | <code>Guide persisted fields</code> |
| <code>url</code> | <code>http://127.0.0.1:49253/guide/persisted-request?guide=url</code> |
| <code>method</code> | <code>POST</code> |
| <code>protocol</code> | <code>http/1.1</code> |
| <code>enabledHeader</code> | <code>x-guide-persist: retained</code> |
| <code>disabledHeader</code> | <code>x-guide-disabled: omitted</code> |
| <code>query</code> | <code>scope=retained</code> |
| <code>body</code> | <code>{&quot;message&quot;:&quot;persisted-fields&quot;,&quot;count&quot;:2}</code> |
| <code>auth</code> | <code>Bearer with the deliberately public example value</code> |
| <code>publicToken</code> | <code>public-persistence-example</code> |
| <code>sentBeforeClose</code> | <code>0</code> |
| <code>closeImage</code> | <code>Saved state before actual Close; shutdown is independently verified by the driver</code> |

<a id="walkthrough-composer-persistence-save-01-new-request"></a>
### 01 · 在第三级目录新建请求

![01 · 在第三级目录新建请求](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-01-new-request.png)

<a id="walkthrough-composer-persistence-save-02-name"></a>
### 02 · 命名Guide persisted fields

![02 · 命名Guide persisted fields](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-02-name.png)

<a id="walkthrough-composer-persistence-save-03-url"></a>
### 03 · 填写带Query的自有地址

![03 · 填写带Query的自有地址](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-03-url.png)

<a id="walkthrough-composer-persistence-save-04-method"></a>
### 04 · 选择POST

![04 · 选择POST](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-04-method.png)

<a id="walkthrough-composer-persistence-save-05-protocol"></a>
### 05 · 固定HTTP/1.1

![05 · 固定HTTP/1.1](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-05-protocol.png)

<a id="walkthrough-composer-persistence-save-06-header-x-guide-persist"></a>
### 06 · 添加Header x-guide-persist

![06 · 添加Header x-guide-persist](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-06-header-x-guide-persist.png)

<a id="walkthrough-composer-persistence-save-06-header-x-guide-disabled"></a>
### 07 · 添加Header x-guide-disabled

![07 · 添加Header x-guide-disabled](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-06-header-x-guide-disabled.png)

<a id="walkthrough-composer-persistence-save-07-disable-header"></a>
### 08 · 停用但保留第二个Header

![08 · 停用但保留第二个Header](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-07-disable-header.png)

<a id="walkthrough-composer-persistence-save-08-query"></a>
### 09 · 添加scope=retained

![09 · 添加scope=retained](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-08-query.png)

<a id="walkthrough-composer-persistence-save-09-json"></a>
### 10 · 保存本次JSON正文

![10 · 保存本次JSON正文](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-09-json.png)

<a id="walkthrough-composer-persistence-save-10-auth"></a>
### 11 · 保存公开演示Bearer字段

![11 · 保存公开演示Bearer字段](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-10-auth.png)

<a id="walkthrough-composer-persistence-save-11-saved"></a>
### 12 · 确认真正保存且尚未Send

![12 · 确认真正保存且尚未Send](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-11-saved.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-persistence-save:end -->

<!-- recorded-walkthrough:composer-persistence-restart:start -->
<a id="walkthrough-composer-persistence-restart"></a>
## 逐步骤实操：真实重启后核对字段并发送

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>folders</code> | <code>Guide persistence 1 &gt; Guide persistence 2 &gt; Guide persistence 3</code> |
| <code>requestName</code> | <code>Guide persisted fields</code> |
| <code>url</code> | <code>http://127.0.0.1:49253/guide/persisted-request?guide=url</code> |
| <code>method</code> | <code>POST</code> |
| <code>protocol</code> | <code>http/1.1</code> |
| <code>expectedPath</code> | <code>/guide/persisted-request?guide=url&amp;scope=retained</code> |
| <code>body</code> | <code>{&quot;message&quot;:&quot;persisted-fields&quot;,&quot;count&quot;:2}</code> |
| <code>enabledHeader</code> | <code>x-guide-persist: retained</code> |
| <code>disabledHeader</code> | <code>x-guide-disabled: omitted</code> |
| <code>publicToken</code> | <code>public-persistence-example</code> |
| <code>sentAfterRestart</code> | <code>One explicit UI Send; no automatic replay</code> |
| <code>evidenceGeneration</code> | <code>composer-reopened</code> |

<a id="walkthrough-composer-persistence-restart-01-folder-1"></a>
### 01 · 检查保留的第1级目录

![01 · 检查保留的第1级目录](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-01-folder-1.png)

<a id="walkthrough-composer-persistence-restart-01-folder-2"></a>
### 02 · 检查保留的第2级目录

![02 · 检查保留的第2级目录](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-01-folder-2.png)

<a id="walkthrough-composer-persistence-restart-01-folder-3"></a>
### 03 · 检查保留的第3级目录

![03 · 检查保留的第3级目录](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-01-folder-3.png)

<a id="walkthrough-composer-persistence-restart-02-select"></a>
### 04 · 打开同一个保存请求

![04 · 打开同一个保存请求](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-02-select.png)

<a id="walkthrough-composer-persistence-restart-03-headers"></a>
### 05 · 核对Header值与启停状态

![05 · 核对Header值与启停状态](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-03-headers.png)

<a id="walkthrough-composer-persistence-restart-04-query"></a>
### 06 · 核对未重填的Query行

![06 · 核对未重填的Query行](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-04-query.png)

<a id="walkthrough-composer-persistence-restart-05-body"></a>
### 07 · 核对实际回载的JSON正文

![07 · 核对实际回载的JSON正文](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-05-body.png)

<a id="walkthrough-composer-persistence-restart-06-auth"></a>
### 08 · 核对实际回载的公开Auth字段

![08 · 核对实际回载的公开Auth字段](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-06-auth.png)

<a id="walkthrough-composer-persistence-restart-07-send"></a>
### 09 · 仅在重启后Send一次核对实际字节

![09 · 仅在重启后Send一次核对实际字节](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-07-send.png)

<a id="walkthrough-composer-persistence-restart-08-clear-auth"></a>
### 10 · 清空演示Auth值

![10 · 清空演示Auth值](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-08-clear-auth.png)

<a id="walkthrough-composer-persistence-restart-09-none"></a>
### 11 · 恢复Auth None并等待保存

![11 · 恢复Auth None并等待保存](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-09-none.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-persistence-restart:end -->

<!-- recorded-walkthrough:composer-response-formatting:start -->
<a id="walkthrough-composer-response-formatting"></a>
## 逐步骤实操：自动格式化、错误原文与2MiB预览

以下图片来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本组步骤图中的进阶分支仍待逐步配图与验收。

| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>baseUrl</code> | <code>http://127.0.0.1:49907/guide/response-formatting</code> |
| <code>html</code> | <code>&lt;main&gt;&lt;section&gt;&lt;p&gt;guide-html&lt;/p&gt;&lt;/section&gt;&lt;/main&gt;</code> |
| <code>javascript</code> | <code>function guideExample(){const count=2;return {count};}</code> |
| <code>invalidXml</code> | <code>&lt;root&gt;&lt;</code> |
| <code>previewLimitBytes</code> | <code>2097152</code> |
| <code>largeJsonBytes</code> | <code>2097199</code> |
| <code>largeJsonMarker</code> | <code>guide-large-response</code> |
| <code>scope</code> | <code>HTML/JavaScript auto formatting, XML failure preservation, oversized preview and response-scoped view restoration</code> |

<a id="walkthrough-composer-response-formatting-html-01-new"></a>
### 01 · 新建Guide HTML response

![01 · 新建Guide HTML response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-01-new.png)

<a id="walkthrough-composer-response-formatting-html-02-name"></a>
### 02 · 命名Guide HTML response

![02 · 命名Guide HTML response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-02-name.png)

<a id="walkthrough-composer-response-formatting-html-03-url"></a>
### 03 · 填写html实际地址

![03 · 填写html实际地址](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-03-url.png)

<a id="walkthrough-composer-response-formatting-html-04-send"></a>
### 04 · 发送并读取html响应

![04 · 发送并读取html响应](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-04-send.png)

<a id="walkthrough-composer-response-formatting-html-06-copy"></a>
### 05 · Copy核对html的实际显示

![05 · Copy核对html的实际显示](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-06-copy.png)

<a id="walkthrough-composer-response-formatting-javascript-01-new"></a>
### 06 · 新建Guide JavaScript response

![06 · 新建Guide JavaScript response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-01-new.png)

<a id="walkthrough-composer-response-formatting-javascript-02-name"></a>
### 07 · 命名Guide JavaScript response

![07 · 命名Guide JavaScript response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-02-name.png)

<a id="walkthrough-composer-response-formatting-javascript-03-url"></a>
### 08 · 填写javascript实际地址

![08 · 填写javascript实际地址](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-03-url.png)

<a id="walkthrough-composer-response-formatting-javascript-04-send"></a>
### 09 · 发送并读取javascript响应

![09 · 发送并读取javascript响应](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-04-send.png)

<a id="walkthrough-composer-response-formatting-javascript-06-copy"></a>
### 10 · Copy核对javascript的实际显示

![10 · Copy核对javascript的实际显示](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-06-copy.png)

<a id="walkthrough-composer-response-formatting-xml-01-new"></a>
### 11 · 新建Guide XML source

![11 · 新建Guide XML source](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-01-new.png)

<a id="walkthrough-composer-response-formatting-xml-02-name"></a>
### 12 · 命名Guide XML source

![12 · 命名Guide XML source](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-02-name.png)

<a id="walkthrough-composer-response-formatting-xml-03-url"></a>
### 13 · 填写xml实际地址

![13 · 填写xml实际地址](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-03-url.png)

<a id="walkthrough-composer-response-formatting-xml-04-send"></a>
### 14 · 发送并读取xml响应

![14 · 发送并读取xml响应](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-04-send.png)

<a id="walkthrough-composer-response-formatting-xml-05-format"></a>
### 15 · 尝试Format并保留无效XML原文

![15 · 尝试Format并保留无效XML原文](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-05-format.png)

<a id="walkthrough-composer-response-formatting-xml-06-copy"></a>
### 16 · Copy核对xml的实际显示

![16 · Copy核对xml的实际显示](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-06-copy.png)

<a id="walkthrough-composer-response-formatting-large-01-new"></a>
### 17 · 新建Guide large JSON

![17 · 新建Guide large JSON](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-01-new.png)

<a id="walkthrough-composer-response-formatting-large-02-name"></a>
### 18 · 命名Guide large JSON

![18 · 命名Guide large JSON](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-02-name.png)

<a id="walkthrough-composer-response-formatting-large-03-url"></a>
### 19 · 填写large实际地址

![19 · 填写large实际地址](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-03-url.png)

<a id="walkthrough-composer-response-formatting-large-04-send"></a>
### 20 · 发送并读取large响应

![20 · 发送并读取large响应](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-04-send.png)

<a id="walkthrough-composer-response-formatting-large-06-copy"></a>
### 21 · Copy核对large的实际显示

![21 · Copy核对large的实际显示](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-06-copy.png)

<a id="walkthrough-composer-response-formatting-restore-html"></a>
### 22 · 切回HTML保留原格式化视图

![22 · 切回HTML保留原格式化视图](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-restore-html.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-response-formatting:end -->

<!-- workflow-screenshots:composer-formatting-workflow:start -->
<a id="walkthrough-composer-formatting-workflow"></a>

## 实操补充：响应格式化与预览边界

以下步骤图来自实际 App <code>0.1.1-alpha.1</code>（macOS x64）中的同一轮操作。截图保留当时的 App 语言与主题；点击图片可查看原尺寸。

本机地址、端口和生成 ID 来自这次实际操作，使用时替换为自己的已授权环境。未展示的平台和分支仍待验收。

<a id="walkthrough-composer-formatting-workflow-step-001"></a>
### 01 · 01 · HTML自动格式化

![01 · HTML自动格式化](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-001.png)

<a id="walkthrough-composer-formatting-workflow-step-002"></a>
### 02 · 02 · JavaScript自动格式化

![02 · JavaScript自动格式化](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-002.png)

<a id="walkthrough-composer-formatting-workflow-step-003"></a>
### 03 · 03 · 查看超过自动阈值的CSS原文

![03 · 查看超过自动阈值的CSS原文](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-003.png)

<a id="walkthrough-composer-formatting-workflow-step-004"></a>
### 04 · 04 · 手动Format CSS

![04 · 手动Format CSS](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-004.png)

<a id="walkthrough-composer-formatting-workflow-step-005"></a>
### 05 · 05 · 格式化失败保留XML原文

![05 · 格式化失败保留XML原文](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-005.png)

<a id="walkthrough-composer-formatting-workflow-step-006"></a>
### 06 · 06 · 切回文档保持格式化视图

![06 · 切回文档保持格式化视图](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-006.png)

<a id="walkthrough-composer-formatting-workflow-step-007"></a>
### 07 · 07 · 检查2MiB预览与禁用Format

![07 · 检查2MiB预览与禁用Format](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-007.png)

<!-- workflow-screenshots:composer-formatting-workflow:end -->
