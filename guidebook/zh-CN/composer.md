# Composer：构造并发送请求

> 草稿，写作基线为 `v0.1.1-alpha.1`。已录操作配有对应实拍图，认证往返和其他未录分支逐步标明；已有 workflow 或局部配图不代表全章或 item9 已验收。

[教程目录](../README.md) · [Capture](capture.md)

<a id="walkthrough"></a>
## 逐步骤实操：发送请求并添加字段

下面的图和视频来自已发布的 `v0.1.1-alpha.1`、macOS x64，App 保持中文。每张图对应下面的一个步骤，点击图片可以查看原尺寸。本次使用无凭据的本机演示服务；`54275` 是录制时分配的端口，服务不是公开地址，实际使用时换成你自己的测试接口端口。

| 示例项 | 本次实际值 |
| --- | --- |
| 方法与地址 | `GET http://127.0.0.1:54275/guide/composer` |
| Query 名称 / 值 | `guide` / `composer-demo` |
| Header 名称 / 值 | `x-interceptor-guide` / `composer-demo` |
| 响应正文 | `{"request":"Guide request","message":"Hello Interceptor","status":"ready"}` |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/composer/composer.mp4" poster="../media/v0.1.1-alpha.1/composer/composer-04-send.png">
<track kind="captions" srclang="zh-CN" label="步骤 / Steps" src="../media/v0.1.1-alpha.1/composer/composer.vtt" default>
</video>

### C01 · 打开 Composer

在侧栏点击请求构造器。右侧出现 Collection 与空工作区。[视频 00:00](../media/v0.1.1-alpha.1/composer/composer.mp4#t=0.367)

![C01：打开真实 App 的 Composer，尚未新建请求](../media/v0.1.1-alpha.1/composer/composer-01-open.png)

### C02 · 新建请求

点击 Collection 顶部的加号。本版本新条目默认叫 `Untitled`，这不是已经发送的历史请求。[视频 00:03](../media/v0.1.1-alpha.1/composer/composer.mp4#t=3.248)

![C02：Collection 中新增 Untitled，请求编辑区已打开](../media/v0.1.1-alpha.1/composer/composer-02-new.png)

### C03 · 输入演示 URL

填入 `http://127.0.0.1:54275/guide/composer`。方法为 `GET`，协议保持“自动”；先核对协议和端口，不填认证。[视频 00:06](../media/v0.1.1-alpha.1/composer/composer.mp4#t=6.148)

![C03：GET 和 http://127.0.0.1:54275/guide/composer 与文字一致](../media/v0.1.1-alpha.1/composer/composer-03-url.png)

### C04 · 点击发送

等待响应区出现 `200` 和 JSON；其中 `message` 为 `Hello Interceptor`。响应直接显示在 Composer，不要求 Capture 新增记录。[视频 00:08](../media/v0.1.1-alpha.1/composer/composer.mp4#t=8.954)

![C04：实际响应含 Guide request、Hello Interceptor 和 ready](../media/v0.1.1-alpha.1/composer/composer-04-send.png)

### C05 · 查看响应 Header

点击下方响应区的“标头”。本例服务返回 `content-type: application/json; charset=utf-8` 和 `x-interceptor-guide: composer-demo`；其他演示服务可能返回不同附加头。[视频 00:11](../media/v0.1.1-alpha.1/composer/composer.mp4#t=11.999)

![C05：响应 Header 显示 JSON 类型与 composer-demo](../media/v0.1.1-alpha.1/composer/composer-05-headers.png)

### C06 · 添加 Query

打开请求区“查询参数”，在新行填 `guide` 与 `composer-demo`，点击该行确认。标签计数变为 `1`。[视频 00:14](../media/v0.1.1-alpha.1/composer/composer.mp4#t=14.848)

![C06：已启用的 Query 行为 guide=composer-demo](../media/v0.1.1-alpha.1/composer/composer-06-query.png)

### C07 · 添加请求 Header

打开请求区“标头”，填 `x-interceptor-guide` 与 `composer-demo` 并确认。这里是请求 Header，上一步观察的是响应 Header。[视频 00:17](../media/v0.1.1-alpha.1/composer/composer.mp4#t=17.799)

![C07：请求 Header 行与正文示例名称和值一致](../media/v0.1.1-alpha.1/composer/composer-07-header.png)

### C08 · 检查认证

打开“认证”，本例保持“无”。不要把真实 Key 输入这个演示服务。[视频 00:20](../media/v0.1.1-alpha.1/composer/composer.mp4#t=20.748)

![C08：本次演示不使用 Authorization](../media/v0.1.1-alpha.1/composer/composer-08-auth.png)

### C09 · 查看 Recent sends

点击 URL 行右侧的时钟，检查刚才发送的 `GET`、地址和 `200` 结果。列表不是完整持久请求快照。[视频 00:23](../media/v0.1.1-alpha.1/composer/composer.mp4#t=23.599)

![C09：Recent sends 中的请求与本次实际发送一致](../media/v0.1.1-alpha.1/composer/composer-09-history.png)

### C10 · 返回响应正文

关闭历史浮层并选择下方“正文”。看到的仍是 C04 那次响应；添加 Query/Header 不会自动重发。[视频 00:26](../media/v0.1.1-alpha.1/composer/composer.mp4#t=26.460)

![C10：返回原 JSON 响应，修改请求字段未触发额外 Send](../media/v0.1.1-alpha.1/composer/composer-10-body.png)

[返回本节视频](#walkthrough-video)。下面是完整功能参考，未配步骤图的进阶分支仍待补齐，不算已验收。

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

   **待配图 / blocked**：录制没有输入凭据，缺受控认证服务的实际操作，不能把空字段当作配置成功。

3. 检查 URL，再发送请求并查看响应。

   **待配图 / blocked**：没有认证请求的真实往返；普通无认证 Send 不能替代。

4. 控件演示结束恢复 None。

   ![本次演示恢复 Auth None](../media/v0.1.1-alpha.1/composer-editing/composer-editing-21-none.png)

5. 演示或分享前移除真实凭据，并检查 Headers 中是否还留有其他认证字段。

   **待配图**：尚未录制清除真实凭据及检查残留 Header 的流程；恢复 None 不等于删除所有自定义 Header。

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
- **待配图**：其他 MIME 的专用预览、格式化失败、截断/不完整正文的禁用状态，以及真实滚轮/键盘边界滚动不由这次 JSON/CSS 与两次分栏拖动覆盖。

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

    完整顺序见 [Workspace](workspace.md#saved-data)。**待配图**：这只验证该请求名称/URL；上面的目录操作已实录，但深层目录与所有字段的跨重启组合尚未专项核对。

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

   **待配图**：逐字段隐私复核未单独截图；后面的文件图不代表任意集合都已经脱敏。

2. 使用 Export collection，在真实系统保存窗口保存为 `guide-collection.json`。

   ![Collection Export 的实际原生保存窗口](../media/v0.1.1-alpha.1/composer-editing/composer-editing-25-export.png)

3. 检查刚导出的实际文件内容，再继续导入。

   ![核对本次产品导出的集合文件](../media/v0.1.1-alpha.1/composer-editing/composer-editing-26-exported.png)

4. 使用 Import，在真实系统打开窗口选择同一个 `guide-collection.json`。

   ![选择刚导出的同一个集合文件](../media/v0.1.1-alpha.1/composer-editing/composer-editing-27-import.png)

5. 阅读导入预览中的请求、目录和被跳过项。

   ![确认前的 Collection 导入预览](../media/v0.1.1-alpha.1/composer-editing/composer-editing-28-preview.png)

6. 不符合预期时取消，不要为了完成教程继续导入。

   取消分支使用上面目录管理示例导出的 `guide-collection-tree.json`，不是把 `guide-collection.json` 改名。选择该文件、进入预览后取消，原有两条请求保持不变，不追加第二份目录；见[取消分支视频](#walkthrough-composer-collection-10-cancel-preview)。

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

1. 按 [Tool 权限](tool-permissions.md)只启用需要的 Composer Tool。

   **待配图**：现有权限实拍没有逐项启用 Composer Tool 的操作。

2. 明确提供测试目标、方法和允许的操作范围；首次使用保持 Ask。

   **待配图**：没有对应 Composer 请求的 Agent/MCP 指令与 Ask 策略设置画面。

3. 发送请求时检查审批中的目标和方法；操作 Collection 前让 AI 先读取当前集合，避免覆盖已经更新的版本。

   **待配图 / blocked**：现有 Agent/MCP 片段没有 Composer 发送审批或 Collection 读取、修改往返。

4. 完成后回到 Composer 检查实际集合或响应结果，不仅依据模型的自然语言回答。

   **待配图**：没有上述 Tool 操作后的 Composer UI 结果，不能用手工 Send 的截图代替。

**预期结果**：AI 使用与 UI 相同的业务能力，修改集合后界面同步；集合导入不会自动发送请求。

**关键说明**：`composer_probe_connection` 只做 TLS 握手探测，不发送 HTTP 请求。它与 `composer_send_request` 是两个动作；连接探测成功不证明目标接口返回成功。具体入口和名称见 [Tool 速查](tool-reference.md#composer)。

返回：[教程目录](../README.md)。

<!-- recorded-walkthrough:composer-editing:start -->
<a id="walkthrough-composer-editing"></a>
## 逐步骤实操：正文、认证控件与 Collection 文件

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


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

<a id="walkthrough-composer-editing-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4" poster="../media/v0.1.1-alpha.1/composer-editing/composer-editing-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-editing/composer-editing.vtt" default>
</video>

<a id="walkthrough-composer-editing-01-open"></a>
### 01 · 打开 Composer

[视频 00:00](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=0.330) · [返回本节视频](#walkthrough-composer-editing-video)

![01 · 打开 Composer](../media/v0.1.1-alpha.1/composer-editing/composer-editing-01-open.png)

<a id="walkthrough-composer-editing-02-new"></a>
### 02 · 新建请求

[视频 00:03](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=3.186) · [返回本节视频](#walkthrough-composer-editing-video)

![02 · 新建请求](../media/v0.1.1-alpha.1/composer-editing/composer-editing-02-new.png)

<a id="walkthrough-composer-editing-03-url"></a>
### 03 · 填写演示 URL

[视频 00:06](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=6.086) · [返回本节视频](#walkthrough-composer-editing-video)

![03 · 填写演示 URL](../media/v0.1.1-alpha.1/composer-editing/composer-editing-03-url.png)

<a id="walkthrough-composer-editing-04-method"></a>
### 04 · 选择 POST

[视频 00:08](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=8.939) · [返回本节视频](#walkthrough-composer-editing-video)

![04 · 选择 POST](../media/v0.1.1-alpha.1/composer-editing/composer-editing-04-method.png)

<a id="walkthrough-composer-editing-05-json-header"></a>
### 05 · 填写 JSON Content-Type

[视频 00:11](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=11.889) · [返回本节视频](#walkthrough-composer-editing-video)

![05 · 填写 JSON Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-05-json-header.png)

<a id="walkthrough-composer-editing-06-body"></a>
### 06 · 打开 Body

[视频 00:14](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=14.837) · [返回本节视频](#walkthrough-composer-editing-video)

![06 · 打开 Body](../media/v0.1.1-alpha.1/composer-editing/composer-editing-06-body.png)

<a id="walkthrough-composer-editing-07-json"></a>
### 07 · 选择 JSON

[视频 00:17](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=17.688) · [返回本节视频](#walkthrough-composer-editing-video)

![07 · 选择 JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-07-json.png)

<a id="walkthrough-composer-editing-08-json-input"></a>
### 08 · 输入 Hello JSON

[视频 00:20](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=20.788) · [返回本节视频](#walkthrough-composer-editing-video)

![08 · 输入 Hello JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-08-json-input.png)

<a id="walkthrough-composer-editing-09-json-send"></a>
### 09 · 发送并核对完整 JSON

[视频 00:23](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=23.742) · [返回本节视频](#walkthrough-composer-editing-video)

![09 · 发送并核对完整 JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-09-json-send.png)

<a id="walkthrough-composer-editing-10-text"></a>
### 10 · 选择 Text

[视频 00:26](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=26.587) · [返回本节视频](#walkthrough-composer-editing-video)

![10 · 选择 Text](../media/v0.1.1-alpha.1/composer-editing/composer-editing-10-text.png)

<a id="walkthrough-composer-editing-11-text-header"></a>
### 11 · 设置 text/plain

[视频 00:29](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=29.535) · [返回本节视频](#walkthrough-composer-editing-video)

![11 · 设置 text/plain](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11-text-header.png)

<a id="walkthrough-composer-editing-11a-text-url"></a>
### 12 · 使用独立文本测试地址

[视频 00:32](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=32.387) · [返回本节视频](#walkthrough-composer-editing-video)

![12 · 使用独立文本测试地址](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11a-text-url.png)

<a id="walkthrough-composer-editing-12-text-send"></a>
### 13 · 发送并核对文本

[视频 00:35](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=35.186) · [返回本节视频](#walkthrough-composer-editing-video)

![13 · 发送并核对文本](../media/v0.1.1-alpha.1/composer-editing/composer-editing-12-text-send.png)

<a id="walkthrough-composer-editing-13-form"></a>
### 14 · 选择 Form

[视频 00:38](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=38.037) · [返回本节视频](#walkthrough-composer-editing-video)

![14 · 选择 Form](../media/v0.1.1-alpha.1/composer-editing/composer-editing-13-form.png)

<a id="walkthrough-composer-editing-14-form-name"></a>
### 15 · 添加 name=Interceptor

[视频 00:40](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=40.936) · [返回本节视频](#walkthrough-composer-editing-video)

![15 · 添加 name=Interceptor](../media/v0.1.1-alpha.1/composer-editing/composer-editing-14-form-name.png)

<a id="walkthrough-composer-editing-15-form-ready"></a>
### 16 · 添加 ready=true

[视频 00:43](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=43.838) · [返回本节视频](#walkthrough-composer-editing-video)

![16 · 添加 ready=true](../media/v0.1.1-alpha.1/composer-editing/composer-editing-15-form-ready.png)

<a id="walkthrough-composer-editing-16-form-header"></a>
### 17 · 设置表单 Content-Type

[视频 00:46](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=46.788) · [返回本节视频](#walkthrough-composer-editing-video)

![17 · 设置表单 Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16-form-header.png)

<a id="walkthrough-composer-editing-16a-form-url"></a>
### 18 · 使用独立表单测试地址

[视频 00:49](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=49.636) · [返回本节视频](#walkthrough-composer-editing-video)

![18 · 使用独立表单测试地址](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16a-form-url.png)

<a id="walkthrough-composer-editing-17-form-send"></a>
### 19 · 发送并核对表单字节

[视频 00:52](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=52.437) · [返回本节视频](#walkthrough-composer-editing-video)

![19 · 发送并核对表单字节](../media/v0.1.1-alpha.1/composer-editing/composer-editing-17-form-send.png)

<a id="walkthrough-composer-editing-18-auth"></a>
### 20 · 打开 Auth

[视频 00:55](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=55.286) · [返回本节视频](#walkthrough-composer-editing-video)

![20 · 打开 Auth](../media/v0.1.1-alpha.1/composer-editing/composer-editing-18-auth.png)

<a id="walkthrough-composer-editing-19-bearer"></a>
### 21 · 查看 Bearer 输入位置，不填真实Key

[视频 00:58](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=58.092) · [返回本节视频](#walkthrough-composer-editing-video)

![21 · 查看 Bearer 输入位置，不填真实Key](../media/v0.1.1-alpha.1/composer-editing/composer-editing-19-bearer.png)

<a id="walkthrough-composer-editing-20-basic"></a>
### 22 · 查看 Basic 输入位置

[视频 01:00](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=60.944) · [返回本节视频](#walkthrough-composer-editing-video)

![22 · 查看 Basic 输入位置](../media/v0.1.1-alpha.1/composer-editing/composer-editing-20-basic.png)

<a id="walkthrough-composer-editing-21-none"></a>
### 23 · 恢复 None

[视频 01:03](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=63.837) · [返回本节视频](#walkthrough-composer-editing-video)

![23 · 恢复 None](../media/v0.1.1-alpha.1/composer-editing/composer-editing-21-none.png)

<a id="walkthrough-composer-editing-22-rename"></a>
### 24 · 重命名 Guide form request

[视频 01:06](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=66.737) · [返回本节视频](#walkthrough-composer-editing-video)

![24 · 重命名 Guide form request](../media/v0.1.1-alpha.1/composer-editing/composer-editing-22-rename.png)

<a id="walkthrough-composer-editing-23-folder"></a>
### 25 · 新建 Guide collection

[视频 01:10](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=70.036) · [返回本节视频](#walkthrough-composer-editing-video)

![25 · 新建 Guide collection](../media/v0.1.1-alpha.1/composer-editing/composer-editing-23-folder.png)

<a id="walkthrough-composer-editing-24-move"></a>
### 26 · 把请求移入目录

[视频 01:12](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=72.937) · [返回本节视频](#walkthrough-composer-editing-video)

![26 · 把请求移入目录](../media/v0.1.1-alpha.1/composer-editing/composer-editing-24-move.png)

<a id="walkthrough-composer-editing-25-export"></a>
### 27 · 导出 guide-collection.json

[视频 01:35](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=95.507) · [返回本节视频](#walkthrough-composer-editing-video)

![27 · 导出 guide-collection.json](../media/v0.1.1-alpha.1/composer-editing/composer-editing-25-export.png)

<a id="walkthrough-composer-editing-26-exported"></a>
### 28 · 核对实际导出内容

[视频 01:40](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=100.377) · [返回本节视频](#walkthrough-composer-editing-video)

![28 · 核对实际导出内容](../media/v0.1.1-alpha.1/composer-editing/composer-editing-26-exported.png)

<a id="walkthrough-composer-editing-27-import"></a>
### 29 · 选择同一个集合文件

[视频 01:54](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=114.933) · [返回本节视频](#walkthrough-composer-editing-video)

![29 · 选择同一个集合文件](../media/v0.1.1-alpha.1/composer-editing/composer-editing-27-import.png)

<a id="walkthrough-composer-editing-28-preview"></a>
### 30 · 检查导入预览

[视频 01:59](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=119.982) · [返回本节视频](#walkthrough-composer-editing-video)

![30 · 检查导入预览](../media/v0.1.1-alpha.1/composer-editing/composer-editing-28-preview.png)

<a id="walkthrough-composer-editing-29-confirm"></a>
### 31 · 确认追加而不覆盖

[视频 02:02](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=122.788) · [返回本节视频](#walkthrough-composer-editing-video)

![31 · 确认追加而不覆盖](../media/v0.1.1-alpha.1/composer-editing/composer-editing-29-confirm.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-editing:end -->

<!-- recorded-walkthrough:composer-collection:start -->
<a id="walkthrough-composer-collection"></a>
## 逐步骤实操：目录层级、排序、取消和删除

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


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

<a id="walkthrough-composer-collection-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4" poster="../media/v0.1.1-alpha.1/composer-collection/composer-collection-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-collection/composer-collection.vtt" default>
</video>

<a id="walkthrough-composer-collection-01-open"></a>
### 01 · 打开 Composer

[视频 00:00](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=0.200) · [返回本节视频](#walkthrough-composer-collection-video)

![01 · 打开 Composer](../media/v0.1.1-alpha.1/composer-collection/composer-collection-01-open.png)

<a id="walkthrough-composer-collection-02-folder-1"></a>
### 02 · 创建 Guide level 1

[视频 00:03](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=3.215) · [返回本节视频](#walkthrough-composer-collection-video)

![02 · 创建 Guide level 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-1.png)

<a id="walkthrough-composer-collection-02-folder-2"></a>
### 03 · 创建 Guide level 2

[视频 00:06](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=6.296) · [返回本节视频](#walkthrough-composer-collection-video)

![03 · 创建 Guide level 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-2.png)

<a id="walkthrough-composer-collection-02-folder-3"></a>
### 04 · 创建 Guide level 3

[视频 00:09](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=9.812) · [返回本节视频](#walkthrough-composer-collection-video)

![04 · 创建 Guide level 3](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-3.png)

<a id="walkthrough-composer-collection-03-depth-limit"></a>
### 05 · 检查第三级的子目录禁用

[视频 00:13](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=13.393) · [返回本节视频](#walkthrough-composer-collection-video)

![05 · 检查第三级的子目录禁用](../media/v0.1.1-alpha.1/composer-collection/composer-collection-03-depth-limit.png)

<a id="walkthrough-composer-collection-04-request-1"></a>
### 06 · 在目录中新建 Guide request 1

[视频 00:16](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=16.383) · [返回本节视频](#walkthrough-composer-collection-video)

![06 · 在目录中新建 Guide request 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-1.png)

<a id="walkthrough-composer-collection-04-request-2"></a>
### 07 · 在目录中新建 Guide request 2

[视频 00:20](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=20.123) · [返回本节视频](#walkthrough-composer-collection-video)

![07 · 在目录中新建 Guide request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-2.png)

<a id="walkthrough-composer-collection-05-switch-1"></a>
### 08 · 切换并核对 request 1

[视频 00:24](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=24.295) · [返回本节视频](#walkthrough-composer-collection-video)

![08 · 切换并核对 request 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-1.png)

<a id="walkthrough-composer-collection-05-switch-2"></a>
### 09 · 切换并核对 request 2

[视频 00:27](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=27.220) · [返回本节视频](#walkthrough-composer-collection-video)

![09 · 切换并核对 request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-2.png)

<a id="walkthrough-composer-collection-06-rename-folder"></a>
### 10 · 重命名 Guide saved requests

[视频 00:30](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=30.223) · [返回本节视频](#walkthrough-composer-collection-video)

![10 · 重命名 Guide saved requests](../media/v0.1.1-alpha.1/composer-collection/composer-collection-06-rename-folder.png)

<a id="walkthrough-composer-collection-07-reorder"></a>
### 11 · 调整同级请求顺序

[视频 00:33](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=33.656) · [返回本节视频](#walkthrough-composer-collection-video)

![11 · 调整同级请求顺序](../media/v0.1.1-alpha.1/composer-collection/composer-collection-07-reorder.png)

<a id="walkthrough-composer-collection-08-export"></a>
### 12 · 保存目录示例文件

[视频 00:53](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=53.445) · [返回本节视频](#walkthrough-composer-collection-video)

![12 · 保存目录示例文件](../media/v0.1.1-alpha.1/composer-collection/composer-collection-08-export.png)

<a id="walkthrough-composer-collection-09-open-import"></a>
### 13 · 选择同一导出文件

[视频 01:09](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=69.361) · [返回本节视频](#walkthrough-composer-collection-video)

![13 · 选择同一导出文件](../media/v0.1.1-alpha.1/composer-collection/composer-collection-09-open-import.png)

<a id="walkthrough-composer-collection-10-cancel-preview"></a>
### 14 · 取消导入不追加

[视频 01:14](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=74.343) · [返回本节视频](#walkthrough-composer-collection-video)

![14 · 取消导入不追加](../media/v0.1.1-alpha.1/composer-collection/composer-collection-10-cancel-preview.png)

<a id="walkthrough-composer-collection-11-delete-request"></a>
### 15 · 删除本轮 request 2

[视频 01:17](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=77.555) · [返回本节视频](#walkthrough-composer-collection-video)

![15 · 删除本轮 request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-11-delete-request.png)

<a id="walkthrough-composer-collection-12-delete-folder"></a>
### 16 · 删除本轮目录及剩余演示请求

[视频 01:20](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=80.856) · [返回本节视频](#walkthrough-composer-collection-video)

![16 · 删除本轮目录及剩余演示请求](../media/v0.1.1-alpha.1/composer-collection/composer-collection-12-delete-folder.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-collection:end -->

<!-- recorded-walkthrough:composer-fields:start -->
<a id="walkthrough-composer-fields"></a>
## 逐步骤实操：字段停用/删除、重发与历史恢复

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>origin</code> | <code>http://127.0.0.1:62733/guide/composer-fields</code> |
| <code>headerName</code> | <code>x-guide-toggle</code> |
| <code>headerValue</code> | <code>enabled</code> |
| <code>queryName</code> | <code>guide</code> |
| <code>queryValue</code> | <code>enabled</code> |
| <code>json</code> | <code>{&quot;message&quot;:&quot;format-demo&quot;,&quot;count&quot;:2}</code> |
| <code>historyRestores</code> | <code>method and URL only</code> |

<a id="walkthrough-composer-fields-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4" poster="../media/v0.1.1-alpha.1/composer-fields/composer-fields-01-new.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-fields/composer-fields.vtt" default>
</video>

<a id="walkthrough-composer-fields-01-new"></a>
### 01 · 新建请求

[视频 00:00](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=0.425) · [返回本节视频](#walkthrough-composer-fields-video)

![01 · 新建请求](../media/v0.1.1-alpha.1/composer-fields/composer-fields-01-new.png)

<a id="walkthrough-composer-fields-02-header"></a>
### 02 · 添加 x-guide-toggle=enabled

[视频 00:03](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=3.405) · [返回本节视频](#walkthrough-composer-fields-video)

![02 · 添加 x-guide-toggle=enabled](../media/v0.1.1-alpha.1/composer-fields/composer-fields-02-header.png)

<a id="walkthrough-composer-fields-03-query"></a>
### 03 · 添加 guide=enabled

[视频 00:06](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=6.307) · [返回本节视频](#walkthrough-composer-fields-video)

![03 · 添加 guide=enabled](../media/v0.1.1-alpha.1/composer-fields/composer-fields-03-query.png)

<a id="walkthrough-composer-fields-04-send-enabled"></a>
### 04 · 重发并核对两个字段

[视频 00:09](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=9.256) · [返回本节视频](#walkthrough-composer-fields-video)

![04 · 重发并核对两个字段](../media/v0.1.1-alpha.1/composer-fields/composer-fields-04-send-enabled.png)

<a id="walkthrough-composer-fields-05-query-off"></a>
### 05 · 停用 Query 行

[视频 00:12](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=12.259) · [返回本节视频](#walkthrough-composer-fields-video)

![05 · 停用 Query 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-05-query-off.png)

<a id="walkthrough-composer-fields-06-header-off"></a>
### 06 · 停用 Header 行

[视频 00:15](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=15.063) · [返回本节视频](#walkthrough-composer-fields-video)

![06 · 停用 Header 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-06-header-off.png)

<a id="walkthrough-composer-fields-07-send-disabled"></a>
### 07 · 重发并确认字段未发送

[视频 00:17](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=17.957) · [返回本节视频](#walkthrough-composer-fields-video)

![07 · 重发并确认字段未发送](../media/v0.1.1-alpha.1/composer-fields/composer-fields-07-send-disabled.png)

<a id="walkthrough-composer-fields-08-header-delete"></a>
### 08 · 删除 Header 行

[视频 00:20](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=20.857) · [返回本节视频](#walkthrough-composer-fields-video)

![08 · 删除 Header 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-08-header-delete.png)

<a id="walkthrough-composer-fields-09-query-delete"></a>
### 09 · 删除 Query 行

[视频 00:23](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=23.706) · [返回本节视频](#walkthrough-composer-fields-video)

![09 · 删除 Query 行](../media/v0.1.1-alpha.1/composer-fields/composer-fields-09-query-delete.png)

<a id="walkthrough-composer-fields-10-json"></a>
### 10 · 选择 POST 与 JSON

[视频 00:26](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=26.607) · [返回本节视频](#walkthrough-composer-fields-video)

![10 · 选择 POST 与 JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-10-json.png)

<a id="walkthrough-composer-fields-11-format"></a>
### 11 · Format JSON

[视频 00:29](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=29.960) · [返回本节视频](#walkthrough-composer-fields-video)

![11 · Format JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-11-format.png)

<a id="walkthrough-composer-fields-12-send-json"></a>
### 12 · 发送并核对格式化后的 JSON

[视频 00:32](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=32.806) · [返回本节视频](#walkthrough-composer-fields-video)

![12 · 发送并核对格式化后的 JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-12-send-json.png)

<a id="walkthrough-composer-fields-13-none"></a>
### 13 · 选择 Body None

[视频 00:35](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=35.707) · [返回本节视频](#walkthrough-composer-fields-video)

![13 · 选择 Body None](../media/v0.1.1-alpha.1/composer-fields/composer-fields-13-none.png)

<a id="walkthrough-composer-fields-14-send-none"></a>
### 14 · 发送空正文

[视频 00:38](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=38.607) · [返回本节视频](#walkthrough-composer-fields-video)

![14 · 发送空正文](../media/v0.1.1-alpha.1/composer-fields/composer-fields-14-send-none.png)

<a id="walkthrough-composer-fields-15-history"></a>
### 15 · 从 Recent sends 选择旧地址

[视频 00:41](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=41.504) · [返回本节视频](#walkthrough-composer-fields-video)

![15 · 从 Recent sends 选择旧地址](../media/v0.1.1-alpha.1/composer-fields/composer-fields-15-history.png)

<a id="walkthrough-composer-fields-16-check-restored"></a>
### 16 · 核对没有恢复已删除字段或正文

[视频 00:44](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=44.457) · [返回本节视频](#walkthrough-composer-fields-video)

![16 · 核对没有恢复已删除字段或正文](../media/v0.1.1-alpha.1/composer-fields/composer-fields-16-check-restored.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-fields:end -->

<!-- recorded-walkthrough:composer-inspection:start -->
<a id="walkthrough-composer-inspection"></a>
## 逐步骤实操：响应分组、正文查看器与分栏

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


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

<a id="walkthrough-composer-inspection-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4" poster="../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.vtt" default>
</video>

<a id="walkthrough-composer-inspection-01-open"></a>
### 01 · 打开 Composer

[视频 00:00](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=0.375) · [返回本节视频](#walkthrough-composer-inspection-video)

![01 · 打开 Composer](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-01-open.png)

<a id="walkthrough-composer-inspection-02-new"></a>
### 02 · 新建响应检查请求

[视频 00:03](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=3.296) · [返回本节视频](#walkthrough-composer-inspection-video)

![02 · 新建响应检查请求](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-02-new.png)

<a id="walkthrough-composer-inspection-03-url"></a>
### 03 · 填写响应检查地址

[视频 00:06](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=6.206) · [返回本节视频](#walkthrough-composer-inspection-video)

![03 · 填写响应检查地址](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-03-url.png)

<a id="walkthrough-composer-inspection-04-header-name"></a>
### 04 · 填写 x-guide-request

[视频 00:09](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=9.096) · [返回本节视频](#walkthrough-composer-inspection-video)

![04 · 填写 x-guide-request](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-04-header-name.png)

<a id="walkthrough-composer-inspection-05-header-value"></a>
### 05 · 填写 inspection-demo

[视频 00:11](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=11.946) · [返回本节视频](#walkthrough-composer-inspection-video)

![05 · 填写 inspection-demo](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-05-header-value.png)

<a id="walkthrough-composer-inspection-06-add-header"></a>
### 06 · 添加请求 Header

[视频 00:14](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=14.812) · [返回本节视频](#walkthrough-composer-inspection-video)

![06 · 添加请求 Header](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-06-add-header.png)

<a id="walkthrough-composer-inspection-07-send"></a>
### 07 · Send 并接收真实 JSON

[视频 00:17](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=17.696) · [返回本节视频](#walkthrough-composer-inspection-video)

![07 · Send 并接收真实 JSON](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-07-send.png)

<a id="walkthrough-composer-inspection-08-headers"></a>
### 08 · 打开响应 Headers

[视频 00:20](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=20.845) · [返回本节视频](#walkthrough-composer-inspection-video)

![08 · 打开响应 Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-08-headers.png)

<a id="walkthrough-composer-inspection-09-response-collapse"></a>
### 09 · 折叠 Response Headers

[视频 00:23](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=23.845) · [返回本节视频](#walkthrough-composer-inspection-video)

![09 · 折叠 Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-09-response-collapse.png)

<a id="walkthrough-composer-inspection-10-request-collapse"></a>
### 10 · 折叠 Request Headers

[视频 00:26](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=26.745) · [返回本节视频](#walkthrough-composer-inspection-video)

![10 · 折叠 Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-10-request-collapse.png)

<a id="walkthrough-composer-inspection-11-response-expand"></a>
### 11 · 展开 Response Headers

[视频 00:29](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=29.645) · [返回本节视频](#walkthrough-composer-inspection-video)

![11 · 展开 Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-11-response-expand.png)

<a id="walkthrough-composer-inspection-12-request-expand"></a>
### 12 · 展开 Request Headers

[视频 00:32](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=32.546) · [返回本节视频](#walkthrough-composer-inspection-video)

![12 · 展开 Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-12-request-expand.png)

<a id="walkthrough-composer-inspection-13-cookies"></a>
### 13 · 打开响应 Cookies

[视频 00:35](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=35.453) · [返回本节视频](#walkthrough-composer-inspection-video)

![13 · 打开响应 Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-13-cookies.png)

<a id="walkthrough-composer-inspection-14-cookies-collapse"></a>
### 14 · 折叠 Cookies 分组

[视频 00:38](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=38.357) · [返回本节视频](#walkthrough-composer-inspection-video)

![14 · 折叠 Cookies 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-14-cookies-collapse.png)

<a id="walkthrough-composer-inspection-15-cookies-expand"></a>
### 15 · 展开 Cookies 分组

[视频 00:41](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=41.250) · [返回本节视频](#walkthrough-composer-inspection-video)

![15 · 展开 Cookies 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-15-cookies-expand.png)

<a id="walkthrough-composer-inspection-16-timing"></a>
### 16 · 查看 Timing 与连接信息

[视频 00:44](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=44.157) · [返回本节视频](#walkthrough-composer-inspection-video)

![16 · 查看 Timing 与连接信息](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-16-timing.png)

<a id="walkthrough-composer-inspection-17-timing-collapse"></a>
### 17 · 折叠 Timing 分组

[视频 00:47](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=47.100) · [返回本节视频](#walkthrough-composer-inspection-video)

![17 · 折叠 Timing 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-17-timing-collapse.png)

<a id="walkthrough-composer-inspection-18-connection-collapse"></a>
### 18 · 折叠 Connection 分组

[视频 00:50](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=50.004) · [返回本节视频](#walkthrough-composer-inspection-video)

![18 · 折叠 Connection 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-18-connection-collapse.png)

<a id="walkthrough-composer-inspection-19-timing-expand"></a>
### 19 · 展开 Timing 分组

[视频 00:52](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=52.895) · [返回本节视频](#walkthrough-composer-inspection-video)

![19 · 展开 Timing 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-19-timing-expand.png)

<a id="walkthrough-composer-inspection-20-connection-expand"></a>
### 20 · 展开 Connection 分组

[视频 00:55](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=55.795) · [返回本节视频](#walkthrough-composer-inspection-video)

![20 · 展开 Connection 分组](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-20-connection-expand.png)

<a id="walkthrough-composer-inspection-21-body"></a>
### 21 · 返回响应 Body

[视频 00:58](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=58.695) · [返回本节视频](#walkthrough-composer-inspection-video)

![21 · 返回响应 Body](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-21-body.png)

<a id="walkthrough-composer-inspection-22-tree"></a>
### 22 · 切换 Tree

[视频 01:01](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=61.595) · [返回本节视频](#walkthrough-composer-inspection-video)

![22 · 切换 Tree](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-22-tree.png)

<a id="walkthrough-composer-inspection-23-tree-collapse"></a>
### 23 · 折叠 JSON 根节点

[视频 01:04](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=64.497) · [返回本节视频](#walkthrough-composer-inspection-video)

![23 · 折叠 JSON 根节点](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-23-tree-collapse.png)

<a id="walkthrough-composer-inspection-24-tree-expand"></a>
### 24 · 展开 JSON 根节点

[视频 01:07](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=67.350) · [返回本节视频](#walkthrough-composer-inspection-video)

![24 · 展开 JSON 根节点](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-24-tree-expand.png)

<a id="walkthrough-composer-inspection-25-tree-menu"></a>
### 25 · 打开 message 的右键菜单

[视频 01:10](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=70.198) · [返回本节视频](#walkthrough-composer-inspection-video)

![25 · 打开 message 的右键菜单](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-25-tree-menu.png)

<a id="walkthrough-composer-inspection-26-tree-copy-value"></a>
### 26 · 复制 message 的值

[视频 01:13](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=73.096) · [返回本节视频](#walkthrough-composer-inspection-video)

![26 · 复制 message 的值](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-26-tree-copy-value.png)

<a id="walkthrough-composer-inspection-27-raw"></a>
### 27 · 切换 Raw

[视频 01:15](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=75.995) · [返回本节视频](#walkthrough-composer-inspection-video)

![27 · 切换 Raw](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-27-raw.png)

<a id="walkthrough-composer-inspection-28-copy-raw"></a>
### 28 · 复制 Raw 原始文本

[视频 01:18](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=78.907) · [返回本节视频](#walkthrough-composer-inspection-video)

![28 · 复制 Raw 原始文本](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-28-copy-raw.png)

<a id="walkthrough-composer-inspection-29-hex"></a>
### 29 · 切换 Hex 字节视图

[视频 01:21](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=81.804) · [返回本节视频](#walkthrough-composer-inspection-video)

![29 · 切换 Hex 字节视图](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-29-hex.png)

<a id="walkthrough-composer-inspection-30-copy-hex"></a>
### 30 · 复制 Hex 并核对原始字节

[视频 01:24](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=84.698) · [返回本节视频](#walkthrough-composer-inspection-video)

![30 · 复制 Hex 并核对原始字节](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-30-copy-hex.png)

<a id="walkthrough-composer-inspection-31-fullscreen"></a>
### 31 · 全屏查看响应 Hex

[视频 01:27](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=87.595) · [返回本节视频](#walkthrough-composer-inspection-video)

![31 · 全屏查看响应 Hex](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-31-fullscreen.png)

<a id="walkthrough-composer-inspection-32-exit-fullscreen"></a>
### 32 · 退出正文全屏

[视频 01:30](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=90.546) · [返回本节视频](#walkthrough-composer-inspection-video)

![32 · 退出正文全屏](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-32-exit-fullscreen.png)

<a id="walkthrough-composer-inspection-33-collection-drag"></a>
### 33 · 拖宽 Collection 分栏

[视频 01:33](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=93.447) · [返回本节视频](#walkthrough-composer-inspection-video)

![33 · 拖宽 Collection 分栏](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-33-collection-drag.png)

<a id="walkthrough-composer-inspection-34-response-drag"></a>
### 34 · 向上拖动以增高响应区

[视频 01:36](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=96.847) · [返回本节视频](#walkthrough-composer-inspection-video)

![34 · 向上拖动以增高响应区](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-34-response-drag.png)

<a id="walkthrough-composer-inspection-35-format-url"></a>
### 35 · 填写独立 CSS 地址

[视频 01:40](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=100.248) · [返回本节视频](#walkthrough-composer-inspection-video)

![35 · 填写独立 CSS 地址](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-35-format-url.png)

<a id="walkthrough-composer-inspection-36-css-send"></a>
### 36 · 接收需要手动 Format 的 CSS

[视频 01:43](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=103.096) · [返回本节视频](#walkthrough-composer-inspection-video)

![36 · 接收需要手动 Format 的 CSS](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-36-css-send.png)

<a id="walkthrough-composer-inspection-37-css-copy-before"></a>
### 37 · 复制并核对 Format 前的 CSS

[视频 01:46](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=106.097) · [返回本节视频](#walkthrough-composer-inspection-video)

![37 · 复制并核对 Format 前的 CSS](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-37-css-copy-before.png)

<a id="walkthrough-composer-inspection-38-format"></a>
### 38 · 点击 Format 格式化响应

[视频 01:49](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=109.146) · [返回本节视频](#walkthrough-composer-inspection-video)

![38 · 点击 Format 格式化响应](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-38-format.png)

<a id="walkthrough-composer-inspection-39-css-copy-after"></a>
### 39 · 复制并核对格式化结果

[视频 01:52](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=112.397) · [返回本节视频](#walkthrough-composer-inspection-video)

![39 · 复制并核对格式化结果](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-39-css-copy-after.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-inspection:end -->

<!-- recorded-walkthrough:composer-replay:start -->
<a id="walkthrough-composer-replay"></a>
## 逐步骤实操：重复 Query、Text 输入与历史重发

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


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

<a id="walkthrough-composer-replay-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4" poster="../media/v0.1.1-alpha.1/composer-replay/composer-replay-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-replay/composer-replay.vtt" default>
</video>

<a id="walkthrough-composer-replay-01-open"></a>
### 01 · 打开 Composer

[视频 00:00](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=0.424) · [返回本节视频](#walkthrough-composer-replay-video)

![01 · 打开 Composer](../media/v0.1.1-alpha.1/composer-replay/composer-replay-01-open.png)

<a id="walkthrough-composer-replay-02-new"></a>
### 02 · 新建 Query 与重发请求

[视频 00:03](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=3.269) · [返回本节视频](#walkthrough-composer-replay-video)

![02 · 新建 Query 与重发请求](../media/v0.1.1-alpha.1/composer-replay/composer-replay-02-new.png)

<a id="walkthrough-composer-replay-03-url"></a>
### 03 · 在 URL 中填写 guide=url

[视频 00:06](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=6.168) · [返回本节视频](#walkthrough-composer-replay-video)

![03 · 在 URL 中填写 guide=url](../media/v0.1.1-alpha.1/composer-replay/composer-replay-03-url.png)

<a id="walkthrough-composer-replay-04-post"></a>
### 04 · 选择 POST

[视频 00:09](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=9.060) · [返回本节视频](#walkthrough-composer-replay-video)

![04 · 选择 POST](../media/v0.1.1-alpha.1/composer-replay/composer-replay-04-post.png)

<a id="walkthrough-composer-replay-05-query"></a>
### 05 · 打开仍为空的 Query 表格

[视频 00:11](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=11.958) · [返回本节视频](#walkthrough-composer-replay-video)

![05 · 打开仍为空的 Query 表格](../media/v0.1.1-alpha.1/composer-replay/composer-replay-05-query.png)

<a id="walkthrough-composer-replay-06-query-name"></a>
### 06 · 填写 Query 名称 guide

[视频 00:14](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=14.810) · [返回本节视频](#walkthrough-composer-replay-video)

![06 · 填写 Query 名称 guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-06-query-name.png)

<a id="walkthrough-composer-replay-07-query-value"></a>
### 07 · 填写 Query 值 table

[视频 00:17](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=17.659) · [返回本节视频](#walkthrough-composer-replay-video)

![07 · 填写 Query 值 table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-07-query-value.png)

<a id="walkthrough-composer-replay-08-add-query"></a>
### 08 · 添加 guide=table

[视频 00:20](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=20.458) · [返回本节视频](#walkthrough-composer-replay-video)

![08 · 添加 guide=table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-08-add-query.png)

<a id="walkthrough-composer-replay-09-duplicate-name"></a>
### 09 · 再次填写同名 guide

[视频 00:23](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=23.312) · [返回本节视频](#walkthrough-composer-replay-video)

![09 · 再次填写同名 guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-09-duplicate-name.png)

<a id="walkthrough-composer-replay-10-duplicate-value"></a>
### 10 · 填写第二行值 again

[视频 00:26](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=26.158) · [返回本节视频](#walkthrough-composer-replay-video)

![10 · 填写第二行值 again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-10-duplicate-value.png)

<a id="walkthrough-composer-replay-11-add-duplicate"></a>
### 11 · 添加第二条同名 Query

[视频 00:28](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=28.958) · [返回本节视频](#walkthrough-composer-replay-video)

![11 · 添加第二条同名 Query](../media/v0.1.1-alpha.1/composer-replay/composer-replay-11-add-duplicate.png)

<a id="walkthrough-composer-replay-12-send-query"></a>
### 12 · 发送并核对三个 guide 值

[视频 00:31](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=31.808) · [返回本节视频](#walkthrough-composer-replay-video)

![12 · 发送并核对三个 guide 值](../media/v0.1.1-alpha.1/composer-replay/composer-replay-12-send-query.png)

<a id="walkthrough-composer-replay-13-text-url"></a>
### 13 · 只修改主机与路径为文本地址

[视频 00:34](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=34.908) · [返回本节视频](#walkthrough-composer-replay-video)

![13 · 只修改主机与路径为文本地址](../media/v0.1.1-alpha.1/composer-replay/composer-replay-13-text-url.png)

<a id="walkthrough-composer-replay-14-put"></a>
### 14 · 将方法改为 PUT

[视频 00:37](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=37.758) · [返回本节视频](#walkthrough-composer-replay-video)

![14 · 将方法改为 PUT](../media/v0.1.1-alpha.1/composer-replay/composer-replay-14-put.png)

<a id="walkthrough-composer-replay-15-body"></a>
### 15 · 打开请求 Body

[视频 00:40](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=40.613) · [返回本节视频](#walkthrough-composer-replay-video)

![15 · 打开请求 Body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-15-body.png)

<a id="walkthrough-composer-replay-16-text-mode"></a>
### 16 · 选择 Text，暂不输入

[视频 00:43](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=43.458) · [返回本节视频](#walkthrough-composer-replay-video)

![16 · 选择 Text，暂不输入](../media/v0.1.1-alpha.1/composer-replay/composer-replay-16-text-mode.png)

<a id="walkthrough-composer-replay-17-text-partial"></a>
### 17 · 输入中间态 Hello

[视频 00:46](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=46.355) · [返回本节视频](#walkthrough-composer-replay-video)

![17 · 输入中间态 Hello](../media/v0.1.1-alpha.1/composer-replay/composer-replay-17-text-partial.png)

<a id="walkthrough-composer-replay-18-text-complete"></a>
### 18 · 继续输入为 Hello text

[视频 00:49](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=49.355) · [返回本节视频](#walkthrough-composer-replay-video)

![18 · 继续输入为 Hello text](../media/v0.1.1-alpha.1/composer-replay/composer-replay-18-text-complete.png)

<a id="walkthrough-composer-replay-19-send-text"></a>
### 19 · 发送并核对 Hello text 字节

[视频 00:52](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=52.204) · [返回本节视频](#walkthrough-composer-replay-video)

![19 · 发送并核对 Hello text 字节](../media/v0.1.1-alpha.1/composer-replay/composer-replay-19-send-text.png)

<a id="walkthrough-composer-replay-20-query-again"></a>
### 20 · 回到 Query 表格

[视频 00:55](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=55.152) · [返回本节视频](#walkthrough-composer-replay-video)

![20 · 回到 Query 表格](../media/v0.1.1-alpha.1/composer-replay/composer-replay-20-query-again.png)

<a id="walkthrough-composer-replay-21-query-current"></a>
### 21 · 将 table 改为 current

[视频 00:58](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=58.002) · [返回本节视频](#walkthrough-composer-replay-video)

![21 · 将 table 改为 current](../media/v0.1.1-alpha.1/composer-replay/composer-replay-21-query-current.png)

<a id="walkthrough-composer-replay-22-body-again"></a>
### 22 · 回到当前 Text 正文

[视频 01:00](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=60.849) · [返回本节视频](#walkthrough-composer-replay-video)

![22 · 回到当前 Text 正文](../media/v0.1.1-alpha.1/composer-replay/composer-replay-22-body-again.png)

<a id="walkthrough-composer-replay-23-body-current"></a>
### 23 · 将正文改为 Hello replay

[视频 01:03](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=63.656) · [返回本节视频](#walkthrough-composer-replay-video)

![23 · 将正文改为 Hello replay](../media/v0.1.1-alpha.1/composer-replay/composer-replay-23-body-current.png)

<a id="walkthrough-composer-replay-24-history"></a>
### 24 · 打开 Recent sends 菜单

[视频 01:06](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=66.596) · [返回本节视频](#walkthrough-composer-replay-video)

![24 · 打开 Recent sends 菜单](../media/v0.1.1-alpha.1/composer-replay/composer-replay-24-history.png)

<a id="walkthrough-composer-replay-25-restore-old"></a>
### 25 · 选回旧 POST 地址

[视频 01:09](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=69.448) · [返回本节视频](#walkthrough-composer-replay-video)

![25 · 选回旧 POST 地址](../media/v0.1.1-alpha.1/composer-replay/composer-replay-25-restore-old.png)

<a id="walkthrough-composer-replay-26-current-query"></a>
### 26 · 检查 Query 仍为 current 与 again

[视频 01:12](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=72.299) · [返回本节视频](#walkthrough-composer-replay-video)

![26 · 检查 Query 仍为 current 与 again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-26-current-query.png)

<a id="walkthrough-composer-replay-27-resend"></a>
### 27 · 再次 Send，核对追加的 Query 与当前正文

[视频 01:15](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=75.166) · [返回本节视频](#walkthrough-composer-replay-video)

![27 · 再次 Send，核对追加的 Query 与当前正文](../media/v0.1.1-alpha.1/composer-replay/composer-replay-27-resend.png)

<a id="walkthrough-composer-replay-28-confirm-body"></a>
### 28 · 查看重发后保留的 Text 正文

[视频 01:18](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=78.037) · [返回本节视频](#walkthrough-composer-replay-video)

![28 · 查看重发后保留的 Text 正文](../media/v0.1.1-alpha.1/composer-replay/composer-replay-28-confirm-body.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:composer-replay:end -->
