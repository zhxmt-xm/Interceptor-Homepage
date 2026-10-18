# Capture：找到并读懂流量

> 草稿，写作基线为 `v0.1.1-alpha.1`。已录制的操作按步骤配图，未录分支保留待配图说明；不代表全章或 item9 完成，协议和平台专项不能仅凭本文视为验收通过。

[教程目录](../README.md) · [快速上手](getting-started.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## 逐步骤实操：真实产品录制

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>filter</code> | <code>/guide/capture</code> |
| <code>url</code> | <code>http://127.0.0.1:58377/guide/capture/orders</code> |
| <code>response</code> | <code>{&quot;orderId&quot;:&quot;guide-001&quot;,&quot;message&quot;:&quot;Hello Interceptor&quot;,&quot;status&quot;:&quot;ready&quot;}</code> |
| <code>protocolFilter</code> | <code>/playground</code> |
| <code>h2Path</code> | <code>/playground/h2-json</code> |
| <code>websocketPath</code> | <code>/playground/ws/text</code> |
| <code>websocketPayload</code> | <code>hello from client</code> |
| <code>grpcPath</code> | <code>/playground.Capture/UnaryJson</code> |
| <code>grpcRequest</code> | <code>{&quot;message&quot;:&quot;hello&quot;}</code> |
| <code>grpcResponse</code> | <code>{&quot;message&quot;:&quot;world&quot;}</code> |
| <code>originException</code> | <code>localhost (removed after the demonstration)</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture/capture.mp4" poster="../media/v0.1.1-alpha.1/capture/capture-01-filter.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture/capture.vtt" default>
</video>

<a id="walkthrough-01-filter"></a>
### 01 · 输入 /guide/capture 筛选

[视频 00:00](../media/v0.1.1-alpha.1/capture/capture.mp4#t=0.338) · [返回本节视频](#walkthrough-video)

![01 · 输入 /guide/capture 筛选](../media/v0.1.1-alpha.1/capture/capture-01-filter.png)

<a id="walkthrough-02-record"></a>
### 02 · 开启 Recording

[视频 00:03](../media/v0.1.1-alpha.1/capture/capture.mp4#t=3.147) · [返回本节视频](#walkthrough-video)

![02 · 开启 Recording](../media/v0.1.1-alpha.1/capture/capture-02-record.png)

<a id="walkthrough-03-request"></a>
### 03 · 发送演示 GET

[视频 00:05](../media/v0.1.1-alpha.1/capture/capture.mp4#t=5.996) · [返回本节视频](#walkthrough-video)

![03 · 发送演示 GET](../media/v0.1.1-alpha.1/capture/capture-03-request.png)

<a id="walkthrough-04-select"></a>
### 04 · 选择 orders 请求

[视频 00:08](../media/v0.1.1-alpha.1/capture/capture.mp4#t=8.851) · [返回本节视频](#walkthrough-video)

![04 · 选择 orders 请求](../media/v0.1.1-alpha.1/capture/capture-04-select.png)

<a id="walkthrough-05-headers"></a>
### 05 · 检查 Headers

[视频 00:11](../media/v0.1.1-alpha.1/capture/capture.mp4#t=11.898) · [返回本节视频](#walkthrough-video)

![05 · 检查 Headers](../media/v0.1.1-alpha.1/capture/capture-05-headers.png)

<a id="walkthrough-06-response"></a>
### 06 · 读取 JSON 正文

[视频 00:14](../media/v0.1.1-alpha.1/capture/capture.mp4#t=14.746) · [返回本节视频](#walkthrough-video)

![06 · 读取 JSON 正文](../media/v0.1.1-alpha.1/capture/capture-06-response.png)

<a id="walkthrough-07-tree"></a>
### 07 · 切换 Tree

[视频 00:17](../media/v0.1.1-alpha.1/capture/capture.mp4#t=17.752) · [返回本节视频](#walkthrough-video)

![07 · 切换 Tree](../media/v0.1.1-alpha.1/capture/capture-07-tree.png)

<a id="walkthrough-08-raw"></a>
### 08 · 切换 Raw

[视频 00:20](../media/v0.1.1-alpha.1/capture/capture.mp4#t=20.652) · [返回本节视频](#walkthrough-video)

![08 · 切换 Raw](../media/v0.1.1-alpha.1/capture/capture-08-raw.png)

<a id="walkthrough-08a-fullscreen"></a>
### 09 · 全屏查看正文

[视频 00:23](../media/v0.1.1-alpha.1/capture/capture.mp4#t=23.547) · [返回本节视频](#walkthrough-video)

![09 · 全屏查看正文](../media/v0.1.1-alpha.1/capture/capture-08a-fullscreen.png)

<a id="walkthrough-08b-close-fullscreen"></a>
### 10 · Escape 返回详情

[视频 00:26](../media/v0.1.1-alpha.1/capture/capture.mp4#t=26.455) · [返回本节视频](#walkthrough-video)

![10 · Escape 返回详情](../media/v0.1.1-alpha.1/capture/capture-08b-close-fullscreen.png)

<a id="walkthrough-09-hex"></a>
### 11 · 查看 Hex 字节

[视频 00:29](../media/v0.1.1-alpha.1/capture/capture.mp4#t=29.398) · [返回本节视频](#walkthrough-video)

![11 · 查看 Hex 字节](../media/v0.1.1-alpha.1/capture/capture-09-hex.png)

<a id="walkthrough-10-timing"></a>
### 12 · 检查请求时序

[视频 00:32](../media/v0.1.1-alpha.1/capture/capture.mp4#t=32.300) · [返回本节视频](#walkthrough-video)

![12 · 检查请求时序](../media/v0.1.1-alpha.1/capture/capture-10-timing.png)

<a id="walkthrough-11-pause"></a>
### 13 · 暂停录制

[视频 00:35](../media/v0.1.1-alpha.1/capture/capture.mp4#t=35.198) · [返回本节视频](#walkthrough-video)

![13 · 暂停录制](../media/v0.1.1-alpha.1/capture/capture-11-pause.png)

<a id="walkthrough-12-paused-request"></a>
### 14 · 暂停时请求仍转发

[视频 00:38](../media/v0.1.1-alpha.1/capture/capture.mp4#t=38.098) · [返回本节视频](#walkthrough-video)

![14 · 暂停时请求仍转发](../media/v0.1.1-alpha.1/capture/capture-12-paused-request.png)

<a id="walkthrough-13-resume"></a>
### 15 · 恢复录制

[视频 00:40](../media/v0.1.1-alpha.1/capture/capture.mp4#t=40.948) · [返回本节视频](#walkthrough-video)

![15 · 恢复录制](../media/v0.1.1-alpha.1/capture/capture-13-resume.png)

<a id="walkthrough-14-new-request"></a>
### 16 · 恢复后捕获新请求

[视频 00:43](../media/v0.1.1-alpha.1/capture/capture.mp4#t=43.899) · [返回本节视频](#walkthrough-video)

![16 · 恢复后捕获新请求](../media/v0.1.1-alpha.1/capture/capture-14-new-request.png)

<a id="walkthrough-15-keyword"></a>
### 17 · 只查找 orders

[视频 00:46](../media/v0.1.1-alpha.1/capture/capture.mp4#t=46.806) · [返回本节视频](#walkthrough-video)

![17 · 只查找 orders](../media/v0.1.1-alpha.1/capture/capture-15-keyword.png)

<a id="walkthrough-16-restore-filter"></a>
### 18 · 恢复演示范围

[视频 00:49](../media/v0.1.1-alpha.1/capture/capture.mp4#t=49.699) · [返回本节视频](#walkthrough-video)

![18 · 恢复演示范围](../media/v0.1.1-alpha.1/capture/capture-16-restore-filter.png)

<a id="walkthrough-17-clear"></a>
### 19 · 清空不需保留的演示记录

[视频 00:52](../media/v0.1.1-alpha.1/capture/capture.mp4#t=52.549) · [返回本节视频](#walkthrough-video)

![19 · 清空不需保留的演示记录](../media/v0.1.1-alpha.1/capture/capture-17-clear.png)

<a id="walkthrough-18-certificates"></a>
### 20 · 检查现有受信任 CA

[视频 00:55](../media/v0.1.1-alpha.1/capture/capture.mp4#t=55.500) · [返回本节视频](#walkthrough-video)

![20 · 检查现有受信任 CA](../media/v0.1.1-alpha.1/capture/capture-18-certificates.png)

<a id="walkthrough-19-local-origin"></a>
### 21 · 只为演示 localhost 添加源站例外

[视频 00:58](../media/v0.1.1-alpha.1/capture/capture.mp4#t=58.448) · [返回本节视频](#walkthrough-video)

![21 · 只为演示 localhost 添加源站例外](../media/v0.1.1-alpha.1/capture/capture-19-local-origin.png)

<a id="walkthrough-20-decryption"></a>
### 22 · 开启 HTTPS 解密

[视频 01:01](../media/v0.1.1-alpha.1/capture/capture.mp4#t=61.398) · [返回本节视频](#walkthrough-video)

![22 · 开启 HTTPS 解密](../media/v0.1.1-alpha.1/capture/capture-20-decryption.png)

<a id="walkthrough-21-protocol-scope"></a>
### 23 · 限定协议演示请求

[视频 01:04](../media/v0.1.1-alpha.1/capture/capture.mp4#t=64.449) · [返回本节视频](#walkthrough-video)

![23 · 限定协议演示请求](../media/v0.1.1-alpha.1/capture/capture-21-protocol-scope.png)

<a id="walkthrough-22-http2"></a>
### 24 · 捕获真实 HTTP/2

[视频 01:07](../media/v0.1.1-alpha.1/capture/capture.mp4#t=67.500) · [返回本节视频](#walkthrough-video)

![24 · 捕获真实 HTTP/2](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

<a id="walkthrough-23-trailers"></a>
### 25 · 展开 HTTP/2 trailers

[视频 01:10](../media/v0.1.1-alpha.1/capture/capture.mp4#t=70.750) · [返回本节视频](#walkthrough-video)

![25 · 展开 HTTP/2 trailers](../media/v0.1.1-alpha.1/capture/capture-23-trailers.png)

<a id="walkthrough-24-h2-body"></a>
### 26 · 读取 HTTP/2 JSON

[视频 01:13](../media/v0.1.1-alpha.1/capture/capture.mp4#t=73.599) · [返回本节视频](#walkthrough-video)

![26 · 读取 HTTP/2 JSON](../media/v0.1.1-alpha.1/capture/capture-24-h2-body.png)

<a id="walkthrough-25-websocket"></a>
### 27 · 捕获 WebSocket 文本

[视频 01:16](../media/v0.1.1-alpha.1/capture/capture.mp4#t=76.649) · [返回本节视频](#walkthrough-video)

![27 · 捕获 WebSocket 文本](../media/v0.1.1-alpha.1/capture/capture-25-websocket.png)

<a id="walkthrough-26-message"></a>
### 28 · 查看发送方向的载荷

[视频 01:19](../media/v0.1.1-alpha.1/capture/capture.mp4#t=79.699) · [返回本节视频](#walkthrough-video)

![28 · 查看发送方向的载荷](../media/v0.1.1-alpha.1/capture/capture-26-message.png)

<a id="walkthrough-27-grpc"></a>
### 29 · 捕获 gRPC JSON

[视频 01:22](../media/v0.1.1-alpha.1/capture/capture.mp4#t=82.700) · [返回本节视频](#walkthrough-video)

![29 · 捕获 gRPC JSON](../media/v0.1.1-alpha.1/capture/capture-27-grpc.png)

<a id="walkthrough-28-grpc-response"></a>
### 30 · 查看 gRPC response 消息

[视频 01:25](../media/v0.1.1-alpha.1/capture/capture.mp4#t=85.957) · [返回本节视频](#walkthrough-video)

![30 · 查看 gRPC response 消息](../media/v0.1.1-alpha.1/capture/capture-28-grpc-response.png)

<a id="walkthrough-29-body-html"></a>
### 31 · HTML代码

[视频 01:28](../media/v0.1.1-alpha.1/capture/capture.mp4#t=88.903) · [返回本节视频](#walkthrough-video)

![31 · HTML代码](../media/v0.1.1-alpha.1/capture/capture-29-body-html.png)

<a id="walkthrough-29-body-markdown"></a>
### 32 · Markdown预览

[视频 01:32](../media/v0.1.1-alpha.1/capture/capture.mp4#t=92.050) · [返回本节视频](#walkthrough-video)

![32 · Markdown预览](../media/v0.1.1-alpha.1/capture/capture-29-body-markdown.png)

<a id="walkthrough-29-body-form"></a>
### 33 · Form字段

[视频 01:35](../media/v0.1.1-alpha.1/capture/capture.mp4#t=95.098) · [返回本节视频](#walkthrough-video)

![33 · Form字段](../media/v0.1.1-alpha.1/capture/capture-29-body-form.png)

<a id="walkthrough-29-body-png"></a>
### 34 · PNG图片

[视频 01:38](../media/v0.1.1-alpha.1/capture/capture.mp4#t=98.152) · [返回本节视频](#walkthrough-video)

![34 · PNG图片](../media/v0.1.1-alpha.1/capture/capture-29-body-png.png)

<a id="walkthrough-29-body-binary"></a>
### 35 · 二进制Hex

[视频 01:41](../media/v0.1.1-alpha.1/capture/capture.mp4#t=101.149) · [返回本节视频](#walkthrough-video)

![35 · 二进制Hex](../media/v0.1.1-alpha.1/capture/capture-29-body-binary.png)

<a id="walkthrough-29-body-audio"></a>
### 36 · 音频元信息

[视频 01:44](../media/v0.1.1-alpha.1/capture/capture.mp4#t=104.449) · [返回本节视频](#walkthrough-video)

![36 · 音频元信息](../media/v0.1.1-alpha.1/capture/capture-29-body-audio.png)

<a id="walkthrough-29-body-video"></a>
### 37 · 视频元信息

[视频 01:47](../media/v0.1.1-alpha.1/capture/capture.mp4#t=107.505) · [返回本节视频](#walkthrough-video)

![37 · 视频元信息](../media/v0.1.1-alpha.1/capture/capture-29-body-video.png)

<a id="walkthrough-29-encoding-gzip"></a>
### 38 · gzip解码

[视频 01:50](../media/v0.1.1-alpha.1/capture/capture.mp4#t=110.547) · [返回本节视频](#walkthrough-video)

![38 · gzip解码](../media/v0.1.1-alpha.1/capture/capture-29-encoding-gzip.png)

<a id="walkthrough-29-encoding-corrupt-gzip"></a>
### 39 · 损坏编码的实际提示

[视频 01:53](../media/v0.1.1-alpha.1/capture/capture.mp4#t=113.660) · [返回本节视频](#walkthrough-video)

![39 · 损坏编码的实际提示](../media/v0.1.1-alpha.1/capture/capture-29-encoding-corrupt-gzip.png)

<a id="walkthrough-30-decryption-off"></a>
### 40 · 关闭本轮 HTTPS 解密

[视频 01:56](../media/v0.1.1-alpha.1/capture/capture.mp4#t=116.798) · [返回本节视频](#walkthrough-video)

![40 · 关闭本轮 HTTPS 解密](../media/v0.1.1-alpha.1/capture/capture-30-decryption-off.png)

<a id="walkthrough-31-remove-exception"></a>
### 41 · 移除演示源站例外

[视频 02:00](../media/v0.1.1-alpha.1/capture/capture.mp4#t=120.049) · [返回本节视频](#walkthrough-video)

![41 · 移除演示源站例外](../media/v0.1.1-alpha.1/capture/capture-31-remove-exception.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:end -->

## 开始与暂停录制

**用途与前提**

记录经过代理的请求。先按快速上手完成代理就绪，再在外部客户端产生有权检查的流量。

**步骤**

1. 打开 Capture，开启 Recording。本节沿用 `capture` 实拍；目标 `http://127.0.0.1:58377/guide/capture/orders` 中的 `58377` 只是录制环境的动态端口，实际使用自己的测试服务。

   ![开启 Recording](../media/v0.1.1-alpha.1/capture/capture-02-record.png)

2. 让外部客户端通过代理发送该 GET，等待它进入列表；这不是 Composer Send。

   ![演示 GET 到达 Capture](../media/v0.1.1-alpha.1/capture/capture-03-request.png)

3. 点击 Recording 暂停。

   ![暂停后的 Recording 状态](../media/v0.1.1-alpha.1/capture/capture-11-pause.png)

4. 暂停期间再发请求，比较客户端仍可收到结果与列表不新增记录。

   ![暂停期间请求仍转发的实拍检查点](../media/v0.1.1-alpha.1/capture/capture-12-paused-request.png)

5. 恢复 Recording。

   ![恢复录制](../media/v0.1.1-alpha.1/capture/capture-13-resume.png)

6. 再发一条新请求，检查新的记录，而不是等待暂停期间的请求补录。

   ![恢复后捕获新请求](../media/v0.1.1-alpha.1/capture/capture-14-new-request.png)

**预期结果**

暂停前的记录仍在；暂停期间开始的新请求不补录，恢复后开始的新请求重新出现。

**关键说明**

- 暂停不停止代理转发，也不恢复系统代理。
- 已开始的请求会继续收尾，暂停不等于截断响应。
- WebSocket 以连接握手时的录制状态为准：暂停前已录制的连接仍记录后续消息；暂停期间建立的连接，不会在恢复后从中间开始补录。需要重新捕获时由客户端重新连接。

## 搜索和组合筛选

**用途**

从大量流量中找到目标请求，而不删除原始记录。

**步骤**

1. 在搜索框输入 `/guide/capture`，限定本章的演示路径。

   ![实际搜索值 /guide/capture](../media/v0.1.1-alpha.1/capture/capture-01-filter.png)

2. 要进一步缩小范围时改为 `orders`。

   ![只查找 orders 的实际结果](../media/v0.1.1-alpha.1/capture/capture-15-keyword.png)

3. 组合筛选使用另一段 `capture-filters` 实拍：搜索范围为 `/guide/filters`，开始时有四条演示记录，不是把上面的 orders 改名。

   ![组合筛选开始前的四条真实记录](../media/v0.1.1-alpha.1/capture-filters/capture-filters-01-records.png)

4. 展开 Method 分组。

   ![展开实际 Method 分组](../media/v0.1.1-alpha.1/capture-filters/capture-filters-02-methods.png)

5. 先选择 `GET`。

   ![只选 GET 的实际结果](../media/v0.1.1-alpha.1/capture-filters/capture-filters-03-get.png)

6. 同组再选择 `POST`，两种方法是 OR，本次显示三条记录。

   ![GET 与 POST 同组多选后显示三条](../media/v0.1.1-alpha.1/capture-filters/capture-filters-04-get-post.png)

7. 展开 Status 分组，不取消 Method 条件。

   ![保留 Method 条件并展开 Status](../media/v0.1.1-alpha.1/capture-filters/capture-filters-05-status.png)

8. 选择状态 `200`，与 Method 跨组 AND，本次剩两条。

   ![GET 或 POST，同时状态为 200 的两条记录](../media/v0.1.1-alpha.1/capture-filters/capture-filters-06-and-status.png)

9. 将搜索改为 `/guide/filters/post-ok`，叠加路径条件后只剩一条。

   ![搜索与分组条件共同作用后的一条记录](../media/v0.1.1-alpha.1/capture-filters/capture-filters-07-search.png)

10. 搜索改回 `/guide/filters`，保留当前 Method 与 Status 条件。

    ![恢复演示路径搜索，而非清空记录](../media/v0.1.1-alpha.1/capture-filters/capture-filters-08-search-back.png)

11. 取消 Status 的 `200` 条件。

    ![实际取消 Status 条件](../media/v0.1.1-alpha.1/capture-filters/capture-filters-09-remove-status.png)

12. 取消 Method 中的 `POST`。

    ![实际取消 POST，仍保留 GET](../media/v0.1.1-alpha.1/capture-filters/capture-filters-10-remove-post.png)

13. 再取消 `GET`，恢复 `/guide/filters` 范围内原有四条记录；这些记录没有被删除。

    ![取消最后一个 Method 条件后恢复四条](../media/v0.1.1-alpha.1/capture-filters/capture-filters-11-remove-get.png)

14. 点击分组标题折叠，只改变展开状态。

    ![折叠组标题，不执行 Capture Clear](../media/v0.1.1-alpha.1/capture-filters/capture-filters-12-collapse.png)

15. 点击搜索框右侧的清空按钮，移除 `/guide/filters`，而不是点击 Capture Clear。本次搜索框已空，仍保留全部四条记录，Recording 仍为暂停。[视频步骤](#walkthrough-capture-filters-13-clear-search)

    ![清空搜索后保留四条已暂停的演示记录](../media/v0.1.1-alpha.1/capture-filters/capture-filters-13-clear-search.png)

16. 需要其他维度时选择 Application、Host、Protocol、Content type 或 Rule。

    [独立的全部分组实录](#walkthrough-capture-facets)从两条已捕获的公开请求开始：`/guide/facets/selected-json` 与 `/guide/facets/other-text`；已应用的 `Guide facets` 只命中前者，准备规则的方法见[Rules](rules.md#first-rule)。这不是前面四条请求的同一段录像。

    按实录逐项[展开并选择 Application](#walkthrough-capture-facets-01-application)、[Host](#walkthrough-capture-facets-03-host-group)、[Protocol](#walkthrough-capture-facets-05-protocol-group)、[Content type](#walkthrough-capture-facets-07-type-group)与[Rule](#walkthrough-capture-facets-09-rule-group)，每次展开和选择都有独立图片与视频时间。macOS本次归属为Unknown，不冒充Windows应用识别。

    ![只保留json且命中Guide facets的实际结果](../media/v0.1.1-alpha.1/capture-facets/capture-facets-10-rule-select.png)

    取消json后仍由Rule保留一条；使用[清除分组筛选](#walkthrough-capture-facets-12-clear-facets)后恢复两条，但搜索词`/guide/facets`不变。筛选栏的[收起与显示](#walkthrough-capture-facets-13-hide-filters)也不删除记录。演示结束按实录停用并Apply `Guide facets`。

**预期结果**

同一组内多个选项是“满足任意一个”；不同组之间，以及搜索与分组之间，是“同时满足”。

搜索匹配 Host 与 Path，不包含端口。需要找本机 TLS 示例时输入 `localhost`，再在详情中核对本次端口；不要把 `localhost:63604` 当作同等搜索。

**关键说明**

- 搜索匹配 Host 和 Path，不是全文检索正文或请求头。
- 分组计数来自当前录制的完整记录，不应直接当成当前筛选结果的行数。
- Pending 是正在等待相关信息的状态，不自动代表请求失败。
- 选择筛选项不应折叠该分组；点击标题才改变展开状态。
- 清除筛选与 Clear 记录是两件事。不要用 Clear 来解除筛选。
- 应用归属识别与平台有关，不能把 Windows 的应用识别结果当作所有平台的保证。

## 检查请求详情

**步骤**

1. 选中 `/guide/capture/orders`，检查 URL、方法、协议、状态和大小等概要。

   ![选中 orders 后的实际请求概要](../media/v0.1.1-alpha.1/capture/capture-04-select.png)

2. 打开 Headers，查看请求与响应头；按需展开对应分组。

   ![orders 的 Headers](../media/v0.1.1-alpha.1/capture/capture-05-headers.png)

3. 打开 Response，核对 `orderId: guide-001`、`message: Hello Interceptor`、`status: ready`。

   ![orders 的实际 JSON 响应](../media/v0.1.1-alpha.1/capture/capture-06-response.png)

4. 打开 Timing 查看本次时序。

   ![同一请求的 Timing](../media/v0.1.1-alpha.1/capture/capture-10-timing.png)

5. 有请求正文时打开 Request。另一个[正文检查实录](#walkthrough-capture-inspection)使用 `POST /guide/inspection/body`，请求包含`requestId: guide-request`、96条entries及24个Query字段，不把它当成前面的GET。[视频步骤](#walkthrough-capture-inspection-09-request)

   ![实际POST的Request与查询字段](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-09-request.png)

6. 选择 Raw，读取相同的请求正文。[视频步骤](#walkthrough-capture-inspection-10-raw)

   ![请求正文的Raw模式](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-10-raw.png)

7. 拖动列表与详情之间的分隔轨道，扩大详情区域；本次向左拖240px，并在结束时恢复。[视频步骤](#walkthrough-capture-inspection-11-widen)

   ![实际拖动后变宽的详情](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-11-widen.png)

**预期结果**

切换详情只改变查看方式，不会重发请求或修改流量；折叠一个分组不影响其他分组。

**关键说明**

- 请求可能在响应尚未结束时已经出现在列表中。流式请求的大小和状态会继续更新。
- 服务器先返回响应、客户端稍后发送完正文，也是可能出现的真实情况。
- 失败、取消和正常完成要依据实际记录区分，不用“有响应行”代替完整性判断。

## 选择正文查看方式

**步骤**

1. 打开上述 JSON 的 Response。

   ![JSON 响应正文](../media/v0.1.1-alpha.1/capture/capture-06-response.png)

2. 选择 Tree 检查字段层级。

   ![同一 JSON 的 Tree 模式](../media/v0.1.1-alpha.1/capture/capture-07-tree.png)

3. 切换 Raw 查看文本原貌；其他内容若提供 Source，可用它查看源码。

   ![同一 JSON 的 Raw 模式，未声称是 Source](../media/v0.1.1-alpha.1/capture/capture-08-raw.png)

   Markdown使用独立的`/guide/inspection/body`响应，标题为`Guide response source`。从[Preview](#walkthrough-capture-inspection-17-preview)聚焦模式控件后，按右方向键选择[Split](#walkthrough-capture-inspection-18-split)，再右移一次选择[Source](#walkthrough-capture-inspection-19-source)；这三个操作各有图片，不把JSON Raw当作Markdown Source。

   ![Markdown的实际Split模式](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-18-split.png)

   ![Markdown的实际Source模式](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-19-source.png)

   [Copy Source](#walkthrough-capture-inspection-20-copy-source)复制原始Markdown；全屏及Escape返回也保持Source，完整步骤在同一实录中。

4. 使用全屏入口放大当前正文。

   ![正文全屏已打开](../media/v0.1.1-alpha.1/capture/capture-08a-fullscreen.png)

5. 按 Escape 返回详情。

   ![退出全屏后的详情](../media/v0.1.1-alpha.1/capture/capture-08b-close-fullscreen.png)

6. 切换 Hex，精确检查字节。

   ![同一正文的 Hex 字节](../media/v0.1.1-alpha.1/capture/capture-09-hex.png)

7. 需要访问溢出内容时滚动或拖动分栏。

   长请求正文先用[真实滚轮](#walkthrough-capture-inspection-12-inner-scroll)滚动，再用`Command+ArrowDown`到达`guide-request-end`；在详情边缘向上滚动后，把鼠标移回已到底的正文，继续滚轮可移动外层详情。[内外层交接步骤](#walkthrough-capture-inspection-14-outer-up)

   ![键盘到达真实请求末尾](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-13-request-end.png)

   ![正文到底后继续滚动外层](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-15-scroll-chain.png)

   Markdown Source同样有[滚轮与键盘到末尾](#walkthrough-capture-inspection-21-source-scroll)的实录，末尾为`guide-response-end`。滚动和拖拽不重发该POST，也不修改线上正文。

**可用模式**

| 内容 | 常用查看方式 |
| --- | --- |
| JSON、NDJSON | Pretty、Tree、Raw、Hex |
| HTML、CSS、JavaScript、XML、SVG | Code、Raw、Hex |
| 普通文本 | Text、Hex |
| 图片 | Preview、Hex |
| Markdown | Preview、Split、Source、Hex |
| URL encoded 表单 | Form、Raw、Hex |
| 二进制 | Hex，必要时尝试 Text |
| 音频、视频 | 查看元信息，再通过 Save body 保存 |

**预期结果**

不同模式呈现同一份正文，不会把 HTML 或 SVG 当成可执行页面，也不会因为切换模式重新发请求。

**关键说明**

- 文本、WebSocket 和 gRPC 的只读预览最多 `2 MiB`；图片读取与解码使用独立的 `16 MiB` 上限。
- 完整正文不超过 `1 MiB` 时可以自动格式化；`1–2 MiB` 需要手动点击 Format。截断预览或捕获不完整的正文不应格式化。
- [大正文逐步实录](#walkthrough-capture-body-limits)分别演示超过1MiB后的[手动Format](#walkthrough-capture-body-limits-07-format)、3MiB数据只显示/Copy前2MiB的[截断预览](#walkthrough-capture-body-limits-11-preview)，以及通过原生Save保存完整`guide-full-response.json`。输入范围、实际总字节和每一步图片都在该实录中，不拿普通小JSON图替代。
- Format 只改变显示；失败时保留原文。没有 Format 按钮的模式，不代表该响应无法读取。
- Copy 复制当前查看器提供的内容，不应当作完整大文件导出的替代。
- 需要保存捕获到的完整正文时用 Save body。它不受只读预览上限替代，但无法恢复网络中断时从未捕获到的字节。
- `multipart/form-data` 当前不是结构化的文件上传列表，不要按普通 Form 视图理解。

## 区分原始内容与规则修改结果

**用途**

确定当前看到的正文是否被 Rules 或断点编辑改变。

**步骤**

本节使用[独立 Rules 实录](rules.md#walkthrough-rules-response-evidence)里的 `Guide response and body`。先完成其中的创建、Apply 和 POST；请求为 `/guide/response-evidence/request-body`，客户端原文是 `{"message":"guide-original"}`，实际发送给源站的是 `{"message":"guide-final"}`。

1. 在 Capture 选择这条 `request-body` 请求。[视频步骤](rules.md#walkthrough-rules-response-evidence-32-body-select)

   ![选中正文改写对应的 POST](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-32-body-select.png)

2. 打开 Request，检查正文旁的规则效果和 Text 来源；默认显示 Final `guide-final`。[视频步骤](rules.md#walkthrough-rules-response-evidence-33-final)

   ![Request 中实际的 Final 与规则效果](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-33-final.png)

3. 切换 Original，读取 `guide-original`。[视频步骤](rules.md#walkthrough-rules-response-evidence-34-original)

   ![同一请求的 Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-34-original.png)

4. 选择 Raw，仍应看到 Original，不因显示模式改变版本。[视频步骤](rules.md#walkthrough-rules-response-evidence-35-raw)

   ![Raw 模式保留 Original 选择](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-35-raw.png)

5. 点击 Copy，复制当前 Original。[视频步骤](rules.md#walkthrough-rules-response-evidence-36-copy-original)

   ![Original 的实际复制操作](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-36-copy-original.png)

6. 点击 Fullscreen，放大后的正文仍为 `guide-original`。[视频步骤](rules.md#walkthrough-rules-response-evidence-37-fullscreen)

   ![Original 的真实全屏正文](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-37-fullscreen.png)

7. 按 Escape 返回详情，移开鼠标后继续选择版本。[视频步骤](rules.md#walkthrough-rules-response-evidence-38-close-fullscreen)

   ![返回详情后仍保留 Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-38-close-fullscreen.png)

8. 切回 Final，确认显示 `guide-final`。[视频步骤](rules.md#walkthrough-rules-response-evidence-39-final-again)

   ![同一请求再次显示 Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-39-final-again.png)

9. 点击 Copy，此时复制的是 Final，不是上一份 Original。[视频步骤](rules.md#walkthrough-rules-response-evidence-40-copy-final)

   ![Final 的实际复制操作](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-40-copy-final.png)

10. 点击 Save body，在原生面板选择自己的演示目录，保存为 `guide-final.json`。[视频步骤](rules.md#walkthrough-rules-response-evidence-41-save-dialog)

    ![仅包含本轮文件名的真实 Save 面板](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-41-save-dialog.png)

11. 保存后回到同一请求，当前仍是 Final；本次文件内容已核对为 `{"message":"guide-final"}`。[视频步骤](rules.md#walkthrough-rules-response-evidence-42-saved)

    ![保存后仍显示同一 Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-42-saved.png)

12. 点击正文的规则效果标记，跳回产生这份正文的 `Guide response and body`。[视频步骤](rules.md#walkthrough-rules-response-evidence-43-body-rule)

    ![效果标记实际定位到对应规则](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-43-body-rule.png)

响应方向另见[同一实录的后续步骤](rules.md#walkthrough-rules-response-evidence-44-response-body)：这时 Final 是 `{"message":"guide-response-final"}`，Original 明确不可用，不是空原文。演示结束后[停用并 Apply](rules.md#walkthrough-rules-response-evidence-52-disable)。

![响应替换后原文不可用的实际提示](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-50-unavailable.png)

**预期结果**

操作作用于当前选择的正文版本，不把修改后的内容误认为客户端或源站的原始内容。

**关键说明**

- Original 可能为空，也可能不可用；两者含义不同。
- 源站响应在头部阶段被整体替换时，原始响应正文可能根本没有被观察到。不可用不等于空响应。
- 不能仅凭规则命中记录推断存在完整的原文或差异；以 App 实际提供的证据为准。

## HTTPS 与 TLS tunnel

**前提**

只检查你有权访问的 HTTPS 流量。HTTPS 解密需要正确的 CA、系统信任和解密设置。

**步骤**

1. 让目标客户端通过代理发起 HTTPS 请求。若只看到 TLS tunnel，先区分“已经经过代理”和“可以解密”。

   [TLS 实录](settings.md#walkthrough-settings-tls-passthrough)先按 `localhost` 搜索，再开启 Recording；本次端口为 `63604`，读者使用自己的实际端口。下面是同一连接的[发送](settings.md#walkthrough-settings-tls-passthrough-03-opaque-request)、[选中](settings.md#walkthrough-settings-tls-passthrough-04-tunnel-select)和[Tunnel 详情](settings.md#walkthrough-settings-tls-passthrough-05-tunnel)，不借用普通 HTTP 成功图。

   ![未解密的真实 CONNECT 进入列表](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-03-opaque-request.png)

   ![选择本轮 CONNECT](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-04-tunnel-select.png)

   ![真实 Tunnel 元信息，没有 HTTP 正文](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-05-tunnel.png)

2. 到 Settings 检查现有 CA 信任；下图是录制机器已有的受信任 CA，不是首次安装或系统授权。

   ![录制环境已有的受信任 CA](../media/v0.1.1-alpha.1/capture/capture-18-certificates.png)

3. 在具备信任条件后启用 HTTPS 解密。本次仅对自己控制的 `localhost` 演示源站添加了证书例外；不要照抄为普通公网配置。

   ![只为本机演示源站添加 localhost 例外](../media/v0.1.1-alpha.1/capture/capture-19-local-origin.png)

   ![开启 HTTPS 解密](../media/v0.1.1-alpha.1/capture/capture-20-decryption.png)

4. 核对 TLS passthrough 是否排除了你的目标；需要调整时按 [Settings](settings.md#tls-passthrough)操作。

   新增实录已按[Settings 的完整步骤](settings.md#tls-passthrough)添加精确 `localhost`、重新连接、查看命中、定位并删除条目，再建立新连接恢复解密。图中全局 MITM 开启，但这个匹配连接仍只显示 Tunnel；不能因此断言解密故障。

   ![启用 MITM 时实际命中 TLS passthrough](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-24-passthrough-tunnel.png)

5. 让客户端建立新连接，再观察后续请求。下图是这次录制的 `/playground/h2-json` HTTP/2 请求，不是此前的 HTTP orders。

   ![启用解密后的新 HTTP/2 请求](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

6. 演示结束关闭本轮启用的解密，再移除本轮添加的 `localhost` 例外；保留原有 CA，不改他人的设置。

   ![关闭本轮 HTTPS 解密](../media/v0.1.1-alpha.1/capture/capture-30-decryption-off.png)

   ![移除本轮 localhost 源站例外](../media/v0.1.1-alpha.1/capture/capture-31-remove-exception.png)

**预期结果**

不解密时可以观察隧道元信息，但不能读取加密后的 HTTP 正文；满足解密条件的新连接才可能展示 HTTP 详情。

**关键说明**

- 证书固定、独立信任库或显式 TLS passthrough 都可能导致无法按普通方式解密。
- TLS passthrough 保持加密转发，不是“已经抓到了明文但隐藏了正文”。
- 可从明确标记为 passthrough 的隧道跳到对应配置；不要为了看到正文就放宽所有主机的证书检查。
- 证书安装、卸载、首次授权和平台差异见 [Settings](settings.md#https-decryption)；本小节不替代这些专项验收。

<a id="http2"></a>
## 检查 HTTP/2 与连接结束

**前提**：目标与客户端实际使用 HTTP/2；若连接经过 HTTPS，先具备所需解密条件。

**步骤**

1. 在搜索框输入 `/playground`，限定本次协议演示范围。

   ![实际协议演示搜索值 /playground](../media/v0.1.1-alpha.1/capture/capture-21-protocol-scope.png)

2. 让支持 HTTP/2 的外部客户端请求 `/playground/h2-json`，选中结果并查看协议值。

   ![真实 HTTP/2 请求，不是从名称猜测协议](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

3. 需要时在 Protocol 中选择 HTTP/2。

   [HTTP/2独立实录](#walkthrough-capture-http2-10-protocol-group)实际展开Protocol并选择HTTP/2；它使用自己的`/guide/h2`请求，不是把旧的`/playground`录制改名。

   ![真实选择HTTP/2协议分组](../media/v0.1.1-alpha.1/capture-http2/capture-http2-11-http2-filter.png)

4. 在 Headers 展开实际可用的 trailers。

   ![HTTP/2 trailers 展开状态](../media/v0.1.1-alpha.1/capture/capture-23-trailers.png)

5. 打开 Response 查看本次 HTTP/2 JSON。

   ![HTTP/2 JSON 正文](../media/v0.1.1-alpha.1/capture/capture-24-h2-body.png)

6. 对较长或流式响应，观察同一记录的接收进度和最终状态，不因已看到一部分文本就提前判断完整。

   新实录的`/guide/h2/stream`先收到第一段，再收到第二段，最后才结束；[完整进度步骤](#walkthrough-capture-http2-03-first-part)逐步核对真实字节。接收中行数、大小会更新，但此版本的普通HTTP正文还没有可读视图，不能把“未捕获响应正文”误当作没有经过代理。

   ![正在接收64KB，但正文暂未可读](../media/v0.1.1-alpha.1/capture-http2/capture-http2-06-partial-body.png)

   ![第二段到达后实际进度增加](../media/v0.1.1-alpha.1/capture-http2/capture-http2-07-second-part.png)

   ![结束后完整正文才可读取和复制](../media/v0.1.1-alpha.1/capture-http2/capture-http2-08-complete.png)

   结束时还可查看`x-guide-end: complete`，见[trailer步骤](#walkthrough-capture-http2-09-trailers)。这是分段接收的同一GET，不是反复发起请求。

7. 若连接关闭，比较该请求是否正常结束、客户端实际收到的内容和后续新请求能否建立连接。

   [客户端错误GOAWAY](#walkthrough-capture-http2-client-01-interrupt)和[源站错误GOAWAY](#walkthrough-capture-http2-origin-01-interrupt)各有真实操作：原POST的Header声明`524288`字节，实际只捕获`262144`字节，随后是新连接上的独立`/recovered` GET；并非重放原POST。实验只影响自有源站，不能用来故意中断别人的服务。

   ![原请求Header仍声明512KiB](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-03-length.png)

   ![真正捕获到的部分正文为256KiB](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-04-partial.png)

   ![独立恢复GET实际返回正常正文](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-06-recovery-body.png)

   本段不把两个错误GOAWAY扩成正常GOAWAY下所有多流收尾、每种reset和重试策略均已实拍。

**预期结果**：分别判断每条请求的结果，不把共享连接的一个事件等同于全部请求成功或失败。

**关键说明**：正常 GOAWAY 可以让已经接收的流结束后再使用新连接，不等于响应必然被截断。真实的重置、中断与正常结束需要区分；Diagnostics 也不是完整 HTTP/2 帧分析器。需要保留 trailer 等细节时，不使用 HAR 作为无损备份。

## 查看 WebSocket 与 gRPC 消息

**步骤**

1. 保持 Recording 开启，让客户端连接自己的 `/playground/ws/text` 演示服务，找到对应连接并打开 Messages。

   ![本次 WebSocket 文本连接与 Messages](../media/v0.1.1-alpha.1/capture/capture-25-websocket.png)

2. 选择发送方向的消息，核对载荷 `hello from client` 及方向、类型和时间。

   ![客户端发送的 hello from client](../media/v0.1.1-alpha.1/capture/capture-26-message.png)

3. 用 gRPC 客户端调用 `/playground.Capture/UnaryJson`，请求 JSON 为 `{"message":"hello"}`，选中对应记录。

   ![真实 gRPC JSON 请求记录](../media/v0.1.1-alpha.1/capture/capture-27-grpc.png)

4. 选择 gRPC response 消息，核对 `{"message":"world"}`。

   ![gRPC 响应消息 world](../media/v0.1.1-alpha.1/capture/capture-28-grpc-response.png)

5. 长消息按需展开、复制或全屏查看。

   [WebSocket消息实录](#walkthrough-capture-websocket-messages)另用`/guide/messages/websocket/detail`：`guide-short`、`guide-long`及后续消息均为本轮公开数据。展开后[缩放高度](#walkthrough-capture-websocket-messages-12-resize)、滚轮/键盘到底、[继续滚动列表](#walkthrough-capture-websocket-messages-15-scroll-out)、Copy和Fullscreen均有各自步骤图。

   ![真实WebSocket长消息正文](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-11-long.png)

   ![消息自身的实际全屏](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-18-fullscreen.png)

   这段长消息是binary JSON：正文Raw的Copy得到UTF-8，而[消息专用Copy](#walkthrough-capture-websocket-messages-17-payload-copy)仍给原binary的Hex。不要把两种复制内容当成同一个格式。

   gRPC有自己的[完整消息实录](#walkthrough-capture-grpc-messages)，使用`/guide/messages/grpc/detail`的六条JSON消息，独立演示展开、Raw、复制、拖动高度、内外滚动及全屏；已有CA和自有localhost例外的准备按[HTTPS步骤](settings.md#https-decryption)，不是新的CA安装录像。

   ![gRPC长消息的实际正文与控制](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-11-long.png)

   ![gRPC消息自己的全屏查看](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-18-fullscreen.png)

6. 消息较多时使用列表滚动或分页，避免把当前屏幕当成完整会话。

   WebSocket另建`/guide/messages/websocket/pages`，实际发送205条text消息；[切连接和滚动加载](#walkthrough-capture-websocket-messages-20-paged-input)后展开并复制最后一条`{"index":204,"message":"guide-page-204"}`。列表序号205与示例JSON的零起始index 204是不同编号。

   ![实际滚动到后续WebSocket消息页](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-23-load-pages.png)

   ![实际复制第205条text消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-25-copy-last.png)

   gRPC也有独立的`/guide/messages/grpc/pages`：从[205条消息的输入](#walkthrough-capture-grpc-messages-20-paged-input)到滚动分页、展开末条、切Raw并继续滚动到正文完全可见，再Copy核对相同的index 204。不能仅凭页码或已经挂载的DOM断言文字在当前窗口可读。

   ![gRPC第205条的正文完整显示在窗口内](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-24b-last-visible.png)

   ![复制同一条gRPC末尾消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-25-copy-last.png)

**预期结果**

能够区分客户端发送和服务端返回的数据，并观察消息随连接继续到达。

**关键说明**

- WSS 或加密的 gRPC 若没有解密，只能看到相应隧道，不能据此声称协议消息被完整解析。
- gRPC 使用 HTTP/2；不要把 Protocol 筛选中的 HTTP/2 与内容类型混成同一个条件。
- Pause 仍遵守前述录制边界，不是关闭连接。Clear 删除记录也不是终止业务连接。
- 连接中断、半条消息、解码失败与预览截断需要按实际提示区分。

## 保存记录与正文

**步骤**

下面准确复用 [Transfer](transfer.md#har) 的文件操作；其请求是 `http://127.0.0.1:55059/guide/transfer/order`，`55059` 是那次录制的动态端口，不是把上面的 orders 请求换了名字。

1. 打开 Export。

   ![Transfer 录制中实际打开的 Export 菜单](../media/v0.1.1-alpha.1/transfer/transfer-01-export-menu.png)

2. 选择 HAR；需要更多原生流量信息时选择 Native Archive，单独正文则使用 Save body，三者用途不同。

   ![选择 HAR 后的选项](../media/v0.1.1-alpha.1/transfer/transfer-02-har-options.png)

3. 选择实际要保存的范围。本次选择当前请求；[三种范围的独立实录](transfer.md#walkthrough-transfer-scopes)另用三条`/guide/export-scopes`请求，实际导出并核对全部3条、筛选2条和选中1条的文件，不用同一张单请求图代表三种范围。

   ![选择当前请求的范围](../media/v0.1.1-alpha.1/transfer/transfer-03-scope.png)

4. 检查正文与隐私选项。

   ![HAR 的实际隐私选项](../media/v0.1.1-alpha.1/transfer/transfer-04-privacy.png)

5. 在真实保存窗口保存为 `guide-recording.har`。

   ![macOS 原生 Save 面板中的 guide-recording.har](../media/v0.1.1-alpha.1/transfer/transfer-05-har-save-dialog.png)

6. 等待任务完成再 Clear 或退出；原生归档与正文保存的逐步操作见[对应章节](transfer.md#archive)。

   ![本次 HAR 已保存的实际检查点](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

**预期结果**

得到明确选择的文件，而不是只有一张截断正文的截图或剪贴板内容。

**关键说明**

- HAR 不能无损保存 HTTP/2 pseudo-header、trailer、WebSocket 消息、TLS 详情和规则历史等信息。
- HAR 可选择遮罩 Authorization、Cookie，也可移除正文；这不等于所有 URL、业务字段和任意 Header 都会自动脱敏。
- 原生归档按完整录制数据处理，不默认套用 HAR 的遮罩选择，也不应当作 Rules 配置的备份。
- 导出是一个快照，导出过程中新增的流量不应被认为一定包含在该文件中。
- 与可信来源交换文件；完整操作和格式限制见[导入导出](transfer.md)。

## 清空记录

**步骤**

1. 确认需要保留的数据已经导出。

   下图引用 Transfer 的 `guide-recording.har` 完成检查点，不表示其他录制已经自动保存。

   ![先确认需要的 HAR 已保存](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

2. 等待 Capture 的正文保存、HAR 或归档文件任务结束；若仍在取消清理中，也要等待完成。

   [运行中归档取消实录](transfer.md#walkthrough-transfer-cancel)使用本轮自有128MiB响应，拍到实际running进度、真实Cancel、取消后原记录保留及文件清理完成，再执行Clear；不是原生文件面板取消。

   ![实际运行中的归档进度](../media/v0.1.1-alpha.1/transfer-cancel/transfer-cancel-05-running.png)

   **待配图**：这段证明取消清理完成后可Clear，尚未在运行中通过其他入口发起Clear并展示拒绝结果，也不替代退出等待专项。

3. 使用 Clear 清空不需保留的演示记录，按实际界面完成确认并检查列表、选择和计数。下图回到 `capture` 录制的清空操作。

   ![Capture 清空演示记录后的实际列表](../media/v0.1.1-alpha.1/capture/capture-17-clear.png)

4. Clear之后的完整对照使用另一段[正文检查实录](#walkthrough-capture-inspection-29-clear)：它先暂停并清空本轮临时记录，清理后仍暂停，不把之前的Resume画面挪到这里。

   ![本次真正Clear后的空列表与暂停状态](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-29-clear.png)

5. 重新开启Recording。[视频步骤](#walkthrough-capture-inspection-30-resume)

   ![Clear之后重新开启Recording](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-30-resume.png)

6. 发送新的`/guide/inspection/after-clear`，确认新记录出现。[视频步骤](#walkthrough-capture-inspection-31-new-request)

   ![Clear之后实际捕获的新请求](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-31-new-request.png)

7. 选择新请求并打开Response，核对`{"afterClear":"guide-visible"}`。[视频步骤](#walkthrough-capture-inspection-32-new-body)

   ![新请求的真实正文仍可读取](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-32-new-body.png)

**预期结果**

旧记录被移除，清理前的数据不会迟到回填；如果仍在录制，清理后开始的新请求可以进入列表。

**关键说明**

- Clear 不等于暂停录制，也不等于停止转发。
- 在途文件任务可能使 Clear 被拒绝；不能绕过提示直接删除存储目录。
- 暂停、清除筛选、清空记录、恢复系统代理和退出 App 是不同操作。

## 从流量进入阻断与断点

本段来自 `capture-shortcuts`，实际地址为 `http://127.0.0.1:52315/guide/shortcuts/order`；`52315` 是录制环境动态端口，不是 App 固定端口。Block 与 Breakpoint 的保存行为不同，不能把下列两个流程合并。

1. 选中已经捕获的示例请求；选择历史记录不会重发。

   ![选中实际历史请求](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-01-source.png)

2. 打开该请求的右键菜单。

   ![Capture 的真实右键菜单](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-02-context.png)

3. 在 Control 中选择 Block，检查生成的未启用草稿。

   ![Block 快捷入口生成未启用草稿](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-03-block-draft.png)

4. 将草稿命名为 `Guide quick block`。

   ![实际命名 Guide quick block](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-04-name.png)

5. 启用该规则。

   ![启用 Block，仍需 Apply](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-05-enable.png)

6. 点击 Apply，等待生效。

   ![实际 Apply Block 草稿](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-06-apply.png)

7. 让外部客户端重新请求同一测试地址，核对新请求确实被阻断。

   ![新请求的真实阻断结果](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-07-blocked.png)

8. 停用 `Guide quick block`，避免影响后面的断点练习。

   ![停用本轮快捷 Block](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-08-disable.png)

9. Apply 停用状态。

   ![保存 Block 停用状态](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-09-disable-apply.png)

10. 返回示例请求的右键菜单，展开 Breakpoint 子菜单。

    ![真实 Breakpoint 子菜单](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-10-breakpoint-menu.png)

11. 选择 Endpoint。此快捷操作从当前请求生成条件，**同时创建 request 与 response 阶段的断点，启用并立即 Apply**，不再执行普通草稿的启用/Apply 步骤。

    ![实际选择 Endpoint 并立即应用](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-11-endpoint.png)

12. 重新发出匹配请求，观察第一次 request 阶段等待。

    ![新请求在 request 阶段实际挂起](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-12-paused.png)

13. 原样放行 request 阶段。请求继续后，response 阶段还会再挂起一次，不要以为点击一次就结束了整笔请求。

    ![放行 request 后继续处理 response 等待](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-13-continue-request.png)

14. 核对当前阶段为 response，再原样放行，检查客户端完成结果。

    ![第二次放行实际 response 阶段](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-14-continue-response.png)

15. 结束练习后检查并停用本轮快捷生成的断点匹配。

    **待配图**：此片段结束于两阶段放行，没有快捷断点规则的停用画面；处理等待项不等于停用规则。其他作用范围及菜单左右展开的分支也仍未录制。

**预期结果**：Block 需启用并 Apply 才影响后续流量；本例 Endpoint 断点立即生效，同一新请求需要分别处理 request、response 两次等待。

**关键说明**：菜单在右侧空间不足时可向左展开；Escape 或点击外部关闭菜单，不等于取消已经生效的规则。关闭匹配或处理挂起项分别按 [Breakpoints](breakpoints.md)操作。

继续阅读：[Composer：手工构造请求](composer.md)。

<!-- recorded-walkthrough:capture-filters:start -->
<a id="walkthrough-capture-filters"></a>
## 逐步骤实操：同组 OR、跨组 AND 与搜索恢复

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>search</code> | <code>/guide/filters</code> |
| <code>methods</code> | <code>GET + POST</code> |
| <code>status</code> | <code>200</code> |
| <code>addedSearch</code> | <code>/guide/filters/post-ok</code> |
| <code>initialRecords</code> | <code>4</code> |
| <code>afterOr</code> | <code>3</code> |
| <code>afterAnd</code> | <code>2</code> |
| <code>afterSearch</code> | <code>1</code> |
| <code>finalRecords</code> | <code>4</code> |
| <code>finalSearch</code> | <code>(empty; cleared through the search control, not Capture Clear)</code> |

<a id="walkthrough-capture-filters-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4" poster="../media/v0.1.1-alpha.1/capture-filters/capture-filters-01-records.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-filters/capture-filters.vtt" default>
</video>

<a id="walkthrough-capture-filters-01-records"></a>
### 01 · 查看四条演示请求

[视频 00:00](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=0.325) · [返回本节视频](#walkthrough-capture-filters-video)

![01 · 查看四条演示请求](../media/v0.1.1-alpha.1/capture-filters/capture-filters-01-records.png)

<a id="walkthrough-capture-filters-02-methods"></a>
### 02 · 展开 Method

[视频 00:03](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=3.149) · [返回本节视频](#walkthrough-capture-filters-video)

![02 · 展开 Method](../media/v0.1.1-alpha.1/capture-filters/capture-filters-02-methods.png)

<a id="walkthrough-capture-filters-03-get"></a>
### 03 · 只选 GET

[视频 00:06](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=6.002) · [返回本节视频](#walkthrough-capture-filters-video)

![03 · 只选 GET](../media/v0.1.1-alpha.1/capture-filters/capture-filters-03-get.png)

<a id="walkthrough-capture-filters-04-get-post"></a>
### 04 · 同组再选 POST

[视频 00:08](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=8.857) · [返回本节视频](#walkthrough-capture-filters-video)

![04 · 同组再选 POST](../media/v0.1.1-alpha.1/capture-filters/capture-filters-04-get-post.png)

<a id="walkthrough-capture-filters-05-status"></a>
### 05 · 展开 Status

[视频 00:11](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=11.750) · [返回本节视频](#walkthrough-capture-filters-video)

![05 · 展开 Status](../media/v0.1.1-alpha.1/capture-filters/capture-filters-05-status.png)

<a id="walkthrough-capture-filters-06-and-status"></a>
### 06 · 再选 200，跨组 AND

[视频 00:14](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=14.601) · [返回本节视频](#walkthrough-capture-filters-video)

![06 · 再选 200，跨组 AND](../media/v0.1.1-alpha.1/capture-filters/capture-filters-06-and-status.png)

<a id="walkthrough-capture-filters-07-search"></a>
### 07 · 叠加 post-ok 搜索

[视频 00:17](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=17.501) · [返回本节视频](#walkthrough-capture-filters-video)

![07 · 叠加 post-ok 搜索](../media/v0.1.1-alpha.1/capture-filters/capture-filters-07-search.png)

<a id="walkthrough-capture-filters-08-search-back"></a>
### 08 · 恢复演示搜索范围

[视频 00:20](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=20.399) · [返回本节视频](#walkthrough-capture-filters-video)

![08 · 恢复演示搜索范围](../media/v0.1.1-alpha.1/capture-filters/capture-filters-08-search-back.png)

<a id="walkthrough-capture-filters-09-remove-status"></a>
### 09 · 取消 Status 条件

[视频 00:23](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=23.251) · [返回本节视频](#walkthrough-capture-filters-video)

![09 · 取消 Status 条件](../media/v0.1.1-alpha.1/capture-filters/capture-filters-09-remove-status.png)

<a id="walkthrough-capture-filters-10-remove-post"></a>
### 10 · 取消 POST

[视频 00:26](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=26.100) · [返回本节视频](#walkthrough-capture-filters-video)

![10 · 取消 POST](../media/v0.1.1-alpha.1/capture-filters/capture-filters-10-remove-post.png)

<a id="walkthrough-capture-filters-11-remove-get"></a>
### 11 · 取消 GET，保留原记录

[视频 00:28](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=28.960) · [返回本节视频](#walkthrough-capture-filters-video)

![11 · 取消 GET，保留原记录](../media/v0.1.1-alpha.1/capture-filters/capture-filters-11-remove-get.png)

<a id="walkthrough-capture-filters-12-collapse"></a>
### 12 · 只折叠组标题

[视频 00:31](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=31.850) · [返回本节视频](#walkthrough-capture-filters-video)

![12 · 只折叠组标题](../media/v0.1.1-alpha.1/capture-filters/capture-filters-12-collapse.png)

<a id="walkthrough-capture-filters-13-clear-search"></a>
### 13 · 清空搜索但不删除请求

[视频 00:34](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=34.751) · [返回本节视频](#walkthrough-capture-filters-video)

![13 · 清空搜索但不删除请求](../media/v0.1.1-alpha.1/capture-filters/capture-filters-13-clear-search.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:capture-filters:end -->

<!-- recorded-walkthrough:capture-shortcuts:start -->
<a id="walkthrough-capture-shortcuts"></a>
## 逐步骤实操：Capture 快捷 Block 与双阶段断点

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:52315/guide/shortcuts/order</code> |
| <code>blockName</code> | <code>Guide quick block</code> |
| <code>breakpointScope</code> | <code>endpoint</code> |
| <code>blockBehavior</code> | <code>disabled draft; enable and Apply required</code> |
| <code>breakpointBehavior</code> | <code>created, enabled and applied immediately for request and response phases</code> |

<a id="walkthrough-capture-shortcuts-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4" poster="../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-01-source.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.vtt" default>
</video>

<a id="walkthrough-capture-shortcuts-01-source"></a>
### 01 · 选择实际历史请求

[视频 00:00](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=0.333) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![01 · 选择实际历史请求](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-01-source.png)

<a id="walkthrough-capture-shortcuts-02-context"></a>
### 02 · 打开右键菜单

[视频 00:03](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=3.345) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![02 · 打开右键菜单](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-02-context.png)

<a id="walkthrough-capture-shortcuts-03-block-draft"></a>
### 03 · Block 创建未启用草稿

[视频 00:06](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=6.295) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![03 · Block 创建未启用草稿](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-03-block-draft.png)

<a id="walkthrough-capture-shortcuts-04-name"></a>
### 04 · 命名 Guide quick block

[视频 00:09](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=9.252) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![04 · 命名 Guide quick block](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-04-name.png)

<a id="walkthrough-capture-shortcuts-05-enable"></a>
### 05 · 启用 Block

[视频 00:12](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=12.095) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![05 · 启用 Block](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-05-enable.png)

<a id="walkthrough-capture-shortcuts-06-apply"></a>
### 06 · Apply 后才生效

[视频 00:14](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=14.945) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![06 · Apply 后才生效](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-06-apply.png)

<a id="walkthrough-capture-shortcuts-07-blocked"></a>
### 07 · 发送新请求验证阻断

[视频 00:17](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=17.804) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![07 · 发送新请求验证阻断](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-07-blocked.png)

<a id="walkthrough-capture-shortcuts-08-disable"></a>
### 08 · 停用本轮 Block

[视频 00:20](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=20.795) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![08 · 停用本轮 Block](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-08-disable.png)

<a id="walkthrough-capture-shortcuts-09-disable-apply"></a>
### 09 · Apply 停用状态

[视频 00:23](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=23.745) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![09 · Apply 停用状态](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-09-disable-apply.png)

<a id="walkthrough-capture-shortcuts-10-breakpoint-menu"></a>
### 10 · 打开真实 Breakpoint 子菜单

[视频 00:26](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=26.645) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![10 · 打开真实 Breakpoint 子菜单](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-10-breakpoint-menu.png)

<a id="walkthrough-capture-shortcuts-11-endpoint"></a>
### 11 · 选择 Endpoint 并立即 Apply

[视频 00:30](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=30.094) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![11 · 选择 Endpoint 并立即 Apply](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-11-endpoint.png)

<a id="walkthrough-capture-shortcuts-12-paused"></a>
### 12 · 发送新请求并观察等待

[视频 00:33](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=33.095) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![12 · 发送新请求并观察等待](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-12-paused.png)

<a id="walkthrough-capture-shortcuts-13-continue-request"></a>
### 13 · 请求阶段原样放行

[视频 00:36](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=36.145) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![13 · 请求阶段原样放行](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-13-continue-request.png)

<a id="walkthrough-capture-shortcuts-14-continue-response"></a>
### 14 · 响应阶段再次放行

[视频 00:39](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=39.249) · [返回本节视频](#walkthrough-capture-shortcuts-video)

![14 · 响应阶段再次放行](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-14-continue-response.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:capture-shortcuts:end -->

<!-- recorded-walkthrough:capture-inspection:start -->
<a id="walkthrough-capture-inspection"></a>
## 逐步骤实操：请求正文、Markdown Source与滚动

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:55601/guide/inspection/body?detail0=guide-0&amp;detail1=guide-1&amp;detail2=guide-2&amp;detail3=guide-3&amp;detail4=guide-4&amp;detail5=guide-5&amp;detail6=guide-6&amp;detail7=guide-7&amp;detail8=guide-8&amp;detail9=guide-9&amp;detail10=guide-10&amp;detail11=guide-11&amp;detail12=guide-12&amp;detail13=guide-13&amp;detail14=guide-14&amp;detail15=guide-15&amp;detail16=guide-16&amp;detail17=guide-17&amp;detail18=guide-18&amp;detail19=guide-19&amp;detail20=guide-20&amp;detail21=guide-21&amp;detail22=guide-22&amp;detail23=guide-23</code> |
| <code>search</code> | <code>/guide/inspection</code> |
| <code>requestId</code> | <code>guide-request</code> |
| <code>requestEntries</code> | <code>request-000 through request-095</code> |
| <code>queryFields</code> | <code>detail0=guide-0 through detail23=guide-23</code> |
| <code>requestEnd</code> | <code>guide-request-end</code> |
| <code>responseTitle</code> | <code>Guide response source</code> |
| <code>responseEntries</code> | <code>response-000 through response-159</code> |
| <code>responseEnd</code> | <code>guide-response-end</code> |
| <code>responseMime</code> | <code>text/markdown</code> |
| <code>inspectorDrag</code> | <code>240px wider, then restored</code> |
| <code>afterClearPath</code> | <code>/guide/inspection/after-clear</code> |
| <code>afterClearBody</code> | <code>{&quot;afterClear&quot;:&quot;guide-visible&quot;}</code> |

<a id="walkthrough-capture-inspection-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4" poster="../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-01-filter.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.vtt" default>
</video>

<a id="walkthrough-capture-inspection-01-filter"></a>
### 01 · 限定本轮检查路径

[视频 00:00](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=0.418) · [返回本节视频](#walkthrough-capture-inspection-video)

![01 · 限定本轮检查路径](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-01-filter.png)

<a id="walkthrough-capture-inspection-02-record"></a>
### 02 · 开启 Recording

[视频 00:03](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=3.213) · [返回本节视频](#walkthrough-capture-inspection-video)

![02 · 开启 Recording](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-02-record.png)

<a id="walkthrough-capture-inspection-03-post"></a>
### 03 · 发送长正文 POST

[视频 00:05](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=5.968) · [返回本节视频](#walkthrough-capture-inspection-video)

![03 · 发送长正文 POST](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-03-post.png)

<a id="walkthrough-capture-inspection-04-pause"></a>
### 04 · 暂停后检查已捕获请求

[视频 00:08](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=8.764) · [返回本节视频](#walkthrough-capture-inspection-video)

![04 · 暂停后检查已捕获请求](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-04-pause.png)

<a id="walkthrough-capture-inspection-05-select"></a>
### 05 · 选择 body 请求

[视频 00:11](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=11.606) · [返回本节视频](#walkthrough-capture-inspection-video)

![05 · 选择 body 请求](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-05-select.png)

<a id="walkthrough-capture-inspection-06-headers"></a>
### 06 · 查看 Headers

[视频 00:14](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=14.657) · [返回本节视频](#walkthrough-capture-inspection-video)

![06 · 查看 Headers](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-06-headers.png)

<a id="walkthrough-capture-inspection-07-collapse"></a>
### 07 · 折叠 General

[视频 00:17](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=17.469) · [返回本节视频](#walkthrough-capture-inspection-video)

![07 · 折叠 General](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-07-collapse.png)

<a id="walkthrough-capture-inspection-08-expand"></a>
### 08 · 重新展开 General

[视频 00:20](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=20.306) · [返回本节视频](#walkthrough-capture-inspection-video)

![08 · 重新展开 General](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-08-expand.png)

<a id="walkthrough-capture-inspection-09-request"></a>
### 09 · 打开 Request 正文

[视频 00:23](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=23.156) · [返回本节视频](#walkthrough-capture-inspection-video)

![09 · 打开 Request 正文](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-09-request.png)

<a id="walkthrough-capture-inspection-10-raw"></a>
### 10 · 选择请求 Raw

[视频 00:26](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=26.913) · [返回本节视频](#walkthrough-capture-inspection-video)

![10 · 选择请求 Raw](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-10-raw.png)

<a id="walkthrough-capture-inspection-11-widen"></a>
### 11 · 拖动分栏扩大详情

[视频 00:29](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=29.907) · [返回本节视频](#walkthrough-capture-inspection-video)

![11 · 拖动分栏扩大详情](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-11-widen.png)

<a id="walkthrough-capture-inspection-12-inner-scroll"></a>
### 12 · 在正文内使用滚轮

[视频 00:39](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=39.008) · [返回本节视频](#walkthrough-capture-inspection-video)

![12 · 在正文内使用滚轮](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-12-inner-scroll.png)

<a id="walkthrough-capture-inspection-13-request-end"></a>
### 13 · 用键盘到达请求末尾

[视频 00:42](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=42.007) · [返回本节视频](#walkthrough-capture-inspection-video)

![13 · 用键盘到达请求末尾](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-13-request-end.png)

<a id="walkthrough-capture-inspection-14-outer-up"></a>
### 14 · 在详情边缘向上滚动

[视频 00:44](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=44.907) · [返回本节视频](#walkthrough-capture-inspection-video)

![14 · 在详情边缘向上滚动](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-14-outer-up.png)

<a id="walkthrough-capture-inspection-15-scroll-chain"></a>
### 15 · 正文到底后继续滚动外层

[视频 00:47](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=47.856) · [返回本节视频](#walkthrough-capture-inspection-video)

![15 · 正文到底后继续滚动外层](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-15-scroll-chain.png)

<a id="walkthrough-capture-inspection-16-copy-request"></a>
### 16 · 复制完整请求正文

[视频 00:50](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=50.915) · [返回本节视频](#walkthrough-capture-inspection-video)

![16 · 复制完整请求正文](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-16-copy-request.png)

<a id="walkthrough-capture-inspection-17-preview"></a>
### 17 · 打开 Markdown Preview

[视频 00:53](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=53.808) · [返回本节视频](#walkthrough-capture-inspection-video)

![17 · 打开 Markdown Preview](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-17-preview.png)

<a id="walkthrough-capture-inspection-18-split"></a>
### 18 · 右方向键切换 Split

[视频 00:56](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=56.710) · [返回本节视频](#walkthrough-capture-inspection-video)

![18 · 右方向键切换 Split](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-18-split.png)

<a id="walkthrough-capture-inspection-19-source"></a>
### 19 · 再次右移切换 Source

[视频 00:59](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=59.608) · [返回本节视频](#walkthrough-capture-inspection-video)

![19 · 再次右移切换 Source](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-19-source.png)

<a id="walkthrough-capture-inspection-20-copy-source"></a>
### 20 · 复制 Markdown Source

[视频 01:02](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=62.463) · [返回本节视频](#walkthrough-capture-inspection-video)

![20 · 复制 Markdown Source](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-20-copy-source.png)

<a id="walkthrough-capture-inspection-21-source-scroll"></a>
### 21 · 滚动长 Source

[视频 01:05](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=65.307) · [返回本节视频](#walkthrough-capture-inspection-video)

![21 · 滚动长 Source](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-21-source-scroll.png)

<a id="walkthrough-capture-inspection-22-source-end"></a>
### 22 · 用键盘查看 Source 末尾

[视频 01:08](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=68.219) · [返回本节视频](#walkthrough-capture-inspection-video)

![22 · 用键盘查看 Source 末尾](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-22-source-end.png)

<a id="walkthrough-capture-inspection-23-fullscreen"></a>
### 23 · 全屏查看 Source

[视频 01:11](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=71.057) · [返回本节视频](#walkthrough-capture-inspection-video)

![23 · 全屏查看 Source](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-23-fullscreen.png)

<a id="walkthrough-capture-inspection-24-return"></a>
### 24 · Escape 返回 Source

[视频 01:13](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=73.957) · [返回本节视频](#walkthrough-capture-inspection-video)

![24 · Escape 返回 Source](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-24-return.png)

<a id="walkthrough-capture-inspection-25-preview-again"></a>
### 25 · 返回 Markdown Preview

[视频 01:16](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=76.912) · [返回本节视频](#walkthrough-capture-inspection-video)

![25 · 返回 Markdown Preview](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-25-preview-again.png)

<a id="walkthrough-capture-inspection-26-hex"></a>
### 26 · 查看同一响应的 Hex

[视频 01:19](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=79.756) · [返回本节视频](#walkthrough-capture-inspection-video)

![26 · 查看同一响应的 Hex](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-26-hex.png)

<a id="walkthrough-capture-inspection-27-restore-width"></a>
### 27 · 拖回原来的详情宽度

[视频 01:22](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=82.608) · [返回本节视频](#walkthrough-capture-inspection-video)

![27 · 拖回原来的详情宽度](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-27-restore-width.png)

<a id="walkthrough-capture-inspection-28-close-details"></a>
### 28 · 关闭详情回到列表

[视频 01:26](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=86.207) · [返回本节视频](#walkthrough-capture-inspection-video)

![28 · 关闭详情回到列表](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-28-close-details.png)

<a id="walkthrough-capture-inspection-29-clear"></a>
### 29 · Clear 本轮临时记录

[视频 01:29](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=89.006) · [返回本节视频](#walkthrough-capture-inspection-video)

![29 · Clear 本轮临时记录](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-29-clear.png)

<a id="walkthrough-capture-inspection-30-resume"></a>
### 30 · 清理后重新开启 Recording

[视频 01:31](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=91.858) · [返回本节视频](#walkthrough-capture-inspection-video)

![30 · 清理后重新开启 Recording](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-30-resume.png)

<a id="walkthrough-capture-inspection-31-new-request"></a>
### 31 · 发送清理后的新请求

[视频 01:34](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=94.707) · [返回本节视频](#walkthrough-capture-inspection-video)

![31 · 发送清理后的新请求](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-31-new-request.png)

<a id="walkthrough-capture-inspection-32-new-body"></a>
### 32 · 确认新请求正文可读

[视频 01:37](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection.mp4#t=97.515) · [返回本节视频](#walkthrough-capture-inspection-video)

![32 · 确认新请求正文可读](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-32-new-body.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:capture-inspection:end -->

<!-- recorded-walkthrough:capture-facets:start -->
<a id="walkthrough-capture-facets"></a>
## 逐步骤实操：Application、Host、Protocol、Type与Rule筛选

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>search</code> | <code>/guide/facets</code> |
| <code>ruleName</code> | <code>Guide facets</code> |
| <code>rulePath</code> | <code>/guide/facets/selected-json</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>protocol</code> | <code>HTTP/1.1</code> |
| <code>application</code> | <code>Unknown (actual macOS result, not Windows attribution)</code> |
| <code>prerequisite</code> | <code>Two captured owned requests and one applied Guide facets Rule; recording is paused before filming</code> |
| <code>jsonPath</code> | <code>/guide/facets/selected-json</code> |
| <code>textPath</code> | <code>/guide/facets/other-text</code> |
| <code>header</code> | <code>x-guide-facet: selected</code> |
| <code>initialRecords</code> | <code>2</code> |
| <code>afterJson</code> | <code>1</code> |
| <code>afterRule</code> | <code>1</code> |
| <code>afterClearFacets</code> | <code>2</code> |

<a id="walkthrough-capture-facets-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4" poster="../media/v0.1.1-alpha.1/capture-facets/capture-facets-01-application.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-facets/capture-facets.vtt" default>
</video>

<a id="walkthrough-capture-facets-01-application"></a>
### 01 · 展开 Application

[视频 00:00](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=0.370) · [返回本节视频](#walkthrough-capture-facets-video)

![01 · 展开 Application](../media/v0.1.1-alpha.1/capture-facets/capture-facets-01-application.png)

<a id="walkthrough-capture-facets-02-unknown"></a>
### 02 · 选择本次 Unknown 归属

[视频 00:03](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=3.318) · [返回本节视频](#walkthrough-capture-facets-video)

![02 · 选择本次 Unknown 归属](../media/v0.1.1-alpha.1/capture-facets/capture-facets-02-unknown.png)

<a id="walkthrough-capture-facets-03-host-group"></a>
### 03 · 展开 Host

[视频 00:06](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=6.320) · [返回本节视频](#walkthrough-capture-facets-video)

![03 · 展开 Host](../media/v0.1.1-alpha.1/capture-facets/capture-facets-03-host-group.png)

<a id="walkthrough-capture-facets-04-host-select"></a>
### 04 · 选择 127.0.0.1

[视频 00:09](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=9.318) · [返回本节视频](#walkthrough-capture-facets-video)

![04 · 选择 127.0.0.1](../media/v0.1.1-alpha.1/capture-facets/capture-facets-04-host-select.png)

<a id="walkthrough-capture-facets-05-protocol-group"></a>
### 05 · 展开 Protocol

[视频 00:12](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=12.372) · [返回本节视频](#walkthrough-capture-facets-video)

![05 · 展开 Protocol](../media/v0.1.1-alpha.1/capture-facets/capture-facets-05-protocol-group.png)

<a id="walkthrough-capture-facets-06-protocol-select"></a>
### 06 · 选择 HTTP/1.1

[视频 00:15](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=15.372) · [返回本节视频](#walkthrough-capture-facets-video)

![06 · 选择 HTTP/1.1](../media/v0.1.1-alpha.1/capture-facets/capture-facets-06-protocol-select.png)

<a id="walkthrough-capture-facets-07-type-group"></a>
### 07 · 展开 Content type

[视频 00:18](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=18.369) · [返回本节视频](#walkthrough-capture-facets-video)

![07 · 展开 Content type](../media/v0.1.1-alpha.1/capture-facets/capture-facets-07-type-group.png)

<a id="walkthrough-capture-facets-08-json"></a>
### 08 · 选择 json，剩一条请求

[视频 00:21](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=21.370) · [返回本节视频](#walkthrough-capture-facets-video)

![08 · 选择 json，剩一条请求](../media/v0.1.1-alpha.1/capture-facets/capture-facets-08-json.png)

<a id="walkthrough-capture-facets-09-rule-group"></a>
### 09 · 展开 Rule

[视频 00:24](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=24.373) · [返回本节视频](#walkthrough-capture-facets-video)

![09 · 展开 Rule](../media/v0.1.1-alpha.1/capture-facets/capture-facets-09-rule-group.png)

<a id="walkthrough-capture-facets-10-rule-select"></a>
### 10 · 选择实际命中的 Guide facets

[视频 00:27](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=27.380) · [返回本节视频](#walkthrough-capture-facets-video)

![10 · 选择实际命中的 Guide facets](../media/v0.1.1-alpha.1/capture-facets/capture-facets-10-rule-select.png)

<a id="walkthrough-capture-facets-11-remove-type"></a>
### 11 · 取消 json，仍按规则保留一条

[视频 00:30](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=30.420) · [返回本节视频](#walkthrough-capture-facets-video)

![11 · 取消 json，仍按规则保留一条](../media/v0.1.1-alpha.1/capture-facets/capture-facets-11-remove-type.png)

<a id="walkthrough-capture-facets-12-clear-facets"></a>
### 12 · 清除分组筛选但保留搜索

[视频 00:33](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=33.419) · [返回本节视频](#walkthrough-capture-facets-video)

![12 · 清除分组筛选但保留搜索](../media/v0.1.1-alpha.1/capture-facets/capture-facets-12-clear-facets.png)

<a id="walkthrough-capture-facets-13-hide-filters"></a>
### 13 · 收起筛选栏

[视频 00:36](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=36.451) · [返回本节视频](#walkthrough-capture-facets-video)

![13 · 收起筛选栏](../media/v0.1.1-alpha.1/capture-facets/capture-facets-13-hide-filters.png)

<a id="walkthrough-capture-facets-14-show-filters"></a>
### 14 · 重新显示筛选栏

[视频 00:39](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=39.418) · [返回本节视频](#walkthrough-capture-facets-video)

![14 · 重新显示筛选栏](../media/v0.1.1-alpha.1/capture-facets/capture-facets-14-show-filters.png)

<a id="walkthrough-capture-facets-15-rules"></a>
### 15 · 返回示例规则

[视频 00:42](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=42.416) · [返回本节视频](#walkthrough-capture-facets-video)

![15 · 返回示例规则](../media/v0.1.1-alpha.1/capture-facets/capture-facets-15-rules.png)

<a id="walkthrough-capture-facets-16-disable"></a>
### 16 · 停用 Guide facets

[视频 00:45](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=45.485) · [返回本节视频](#walkthrough-capture-facets-video)

![16 · 停用 Guide facets](../media/v0.1.1-alpha.1/capture-facets/capture-facets-16-disable.png)

<a id="walkthrough-capture-facets-17-apply-disabled"></a>
### 17 · Apply 停用状态

[视频 00:48](../media/v0.1.1-alpha.1/capture-facets/capture-facets.mp4#t=48.474) · [返回本节视频](#walkthrough-capture-facets-video)

![17 · Apply 停用状态](../media/v0.1.1-alpha.1/capture-facets/capture-facets-17-apply-disabled.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:capture-facets:end -->

<!-- recorded-walkthrough:capture-websocket-messages:start -->
<a id="walkthrough-capture-websocket-messages"></a>
## 逐步骤实操：WebSocket消息展开、复制、全屏与分页

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>protocol</code> | <code>websocket</code> |
| <code>filter</code> | <code>/guide/messages/websocket</code> |
| <code>detailPath</code> | <code>/guide/messages/websocket/detail</code> |
| <code>pagePath</code> | <code>/guide/messages/websocket/pages</code> |
| <code>firstMessage</code> | <code>{&quot;message&quot;:&quot;guide-short&quot;,&quot;state&quot;:&quot;ready&quot;}</code> |
| <code>longMessage</code> | <code>guide-long with 28 entries; ending guide-message-end</code> |
| <code>firstCount</code> | <code>6</code> |
| <code>pagedCount</code> | <code>205</code> |
| <code>finalMessage</code> | <code>{&quot;index&quot;:204,&quot;message&quot;:&quot;guide-page-204&quot;}</code> |
| <code>detailEncoding</code> | <code>binary JSON; body Copy is text, message Copy is Hex</code> |
| <code>pagedEncoding</code> | <code>WebSocket text</code> |
| <code>tlsScope</code> | <code>plain WebSocket; no CA changes</code> |

<a id="walkthrough-capture-websocket-messages-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4" poster="../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-01-filter.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.vtt" default>
</video>

<a id="walkthrough-capture-websocket-messages-01-filter"></a>
### 01 · 限定本轮消息路径

[视频 00:00](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=0.292) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![01 · 限定本轮消息路径](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-01-filter.png)

<a id="walkthrough-capture-websocket-messages-02-record"></a>
### 02 · 开启 Recording

[视频 00:03](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=3.425) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![02 · 开启 Recording](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-02-record.png)

<a id="walkthrough-capture-websocket-messages-03-messages"></a>
### 03 · 发送六条公开消息

[视频 00:06](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=6.510) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![03 · 发送六条公开消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-03-messages.png)

<a id="walkthrough-capture-websocket-messages-04-select"></a>
### 04 · 选择本轮连接

[视频 00:09](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=9.708) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![04 · 选择本轮连接](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-04-select.png)

<a id="walkthrough-capture-websocket-messages-05-tab"></a>
### 05 · 打开消息页

[视频 00:12](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=12.999) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![05 · 打开消息页](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-05-tab.png)

<a id="walkthrough-capture-websocket-messages-06-direction"></a>
### 06 · 选择 Sent 消息

[视频 00:16](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=16.154) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![06 · 选择 Sent 消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-06-direction.png)

<a id="walkthrough-capture-websocket-messages-07-short"></a>
### 07 · 展开 guide-short

[视频 00:19](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=19.329) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![07 · 展开 guide-short](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-07-short.png)

<a id="walkthrough-capture-websocket-messages-08-short-raw"></a>
### 08 · 选择 Raw 查看原文

[视频 00:22](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=22.700) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![08 · 选择 Raw 查看原文](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-08-short-raw.png)

<a id="walkthrough-capture-websocket-messages-09-copy-short"></a>
### 09 · 复制当前短消息正文

[视频 00:25](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=25.786) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![09 · 复制当前短消息正文](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-09-copy-short.png)

<a id="walkthrough-capture-websocket-messages-10-collapse-short"></a>
### 10 · 收起短消息

[视频 00:28](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=28.824) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![10 · 收起短消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-10-collapse-short.png)

<a id="walkthrough-capture-websocket-messages-11-long"></a>
### 11 · 展开 guide-long

[视频 00:31](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=31.824) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![11 · 展开 guide-long](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-11-long.png)

<a id="walkthrough-capture-websocket-messages-12-resize"></a>
### 12 · 拖动正文右下角缩小高度

[视频 00:35](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=35.030) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![12 · 拖动正文右下角缩小高度](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-12-resize.png)

<a id="walkthrough-capture-websocket-messages-13-wheel"></a>
### 13 · 在长消息中滚动

[视频 00:38](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=38.319) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![13 · 在长消息中滚动](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-13-wheel.png)

<a id="walkthrough-capture-websocket-messages-14-keyboard-end"></a>
### 14 · 用键盘到达消息末尾

[视频 00:41](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=41.375) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![14 · 用键盘到达消息末尾](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-14-keyboard-end.png)

<a id="walkthrough-capture-websocket-messages-15-scroll-out"></a>
### 15 · 到底后继续滚动消息列表

[视频 00:44](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=44.360) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![15 · 到底后继续滚动消息列表](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-15-scroll-out.png)

<a id="walkthrough-capture-websocket-messages-16-copy-long"></a>
### 16 · 复制完整长消息正文

[视频 00:47](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=47.377) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![16 · 复制完整长消息正文](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-16-copy-long.png)

<a id="walkthrough-capture-websocket-messages-17-payload-copy"></a>
### 17 · 复制 binary 消息的原始 Hex

[视频 00:50](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=50.389) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![17 · 复制 binary 消息的原始 Hex](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-17-payload-copy.png)

<a id="walkthrough-capture-websocket-messages-18-fullscreen"></a>
### 18 · 全屏查看这条消息

[视频 00:53](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=53.428) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![18 · 全屏查看这条消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-18-fullscreen.png)

<a id="walkthrough-capture-websocket-messages-19-return"></a>
### 19 · Escape 返回同一消息

[视频 00:56](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=56.627) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![19 · Escape 返回同一消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-19-return.png)

<a id="walkthrough-capture-websocket-messages-20-paged-input"></a>
### 20 · 在新连接发送205条消息

[视频 00:59](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=59.711) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![20 · 在新连接发送205条消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-20-paged-input.png)

<a id="walkthrough-capture-websocket-messages-21-paged-select"></a>
### 21 · 选择新的 pages 连接

[视频 01:02](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=62.916) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![21 · 选择新的 pages 连接](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-21-paged-select.png)

<a id="walkthrough-capture-websocket-messages-22-paged-tab"></a>
### 22 · 打开新连接的消息

[视频 01:05](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=65.929) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![22 · 打开新连接的消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-22-paged-tab.png)

<a id="walkthrough-capture-websocket-messages-23-load-pages"></a>
### 23 · 滚动加载后续消息页

[视频 01:08](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=68.917) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![23 · 滚动加载后续消息页](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-23-load-pages.png)

<a id="walkthrough-capture-websocket-messages-24-last-message"></a>
### 24 · 展开第205条消息

[视频 01:12](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=72.380) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![24 · 展开第205条消息](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-24-last-message.png)

<a id="walkthrough-capture-websocket-messages-25-copy-last"></a>
### 25 · 复制最后一条并核对 index 204

[视频 01:15](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages.mp4#t=75.492) · [返回本节视频](#walkthrough-capture-websocket-messages-video)

![25 · 复制最后一条并核对 index 204](../media/v0.1.1-alpha.1/capture-websocket-messages/capture-websocket-messages-25-copy-last.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:capture-websocket-messages:end -->

<!-- recorded-walkthrough:capture-http2:start -->
<a id="walkthrough-capture-http2"></a>
## 逐步骤实操：HTTP/2接收进度、中断与新连接恢复

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>filter</code> | <code>/guide/h2</code> |
| <code>streamPath</code> | <code>/guide/h2/stream</code> |
| <code>firstPartBytes</code> | <code>65559</code> |
| <code>twoPartBytes</code> | <code>131119</code> |
| <code>completeBytes</code> | <code>131141</code> |
| <code>firstMarker</code> | <code>part-one: guide-start</code> |
| <code>secondMarker</code> | <code>part-two: guide-middle</code> |
| <code>finalMarker</code> | <code>part-three: guide-end</code> |
| <code>trailer</code> | <code>x-guide-end: complete</code> |
| <code>errorGoawayCode</code> | <code>2</code> |
| <code>declaredBytes</code> | <code>524288</code> |
| <code>capturedPartialBytes</code> | <code>262144</code> |
| <code>recovery</code> | <code>separate GET on a new connection; original POST not replayed</code> |
| <code>inflightBody</code> | <code>Received byte counts update before the normal HTTP response body becomes readable</code> |

<a id="walkthrough-capture-http2-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4" poster="../media/v0.1.1-alpha.1/capture-http2/capture-http2-01-scope.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-http2/capture-http2.vtt" default>
</video>

<a id="walkthrough-capture-http2-01-scope"></a>
### 01 · 限定本轮 HTTP/2 路径

[视频 00:00](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=0.368) · [返回本节视频](#walkthrough-capture-http2-video)

![01 · 限定本轮 HTTP/2 路径](../media/v0.1.1-alpha.1/capture-http2/capture-http2-01-scope.png)

<a id="walkthrough-capture-http2-02-record"></a>
### 02 · 开启 Recording

[视频 00:03](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=3.251) · [返回本节视频](#walkthrough-capture-http2-video)

![02 · 开启 Recording](../media/v0.1.1-alpha.1/capture-http2/capture-http2-02-record.png)

<a id="walkthrough-capture-http2-03-first-part"></a>
### 03 · 接收第一段但保持连接未结束

[视频 00:06](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=6.160) · [返回本节视频](#walkthrough-capture-http2-video)

![03 · 接收第一段但保持连接未结束](../media/v0.1.1-alpha.1/capture-http2/capture-http2-03-first-part.png)

<a id="walkthrough-capture-http2-04-select"></a>
### 04 · 选择仍在接收的 stream

[视频 00:09](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=9.144) · [返回本节视频](#walkthrough-capture-http2-video)

![04 · 选择仍在接收的 stream](../media/v0.1.1-alpha.1/capture-http2/capture-http2-04-select.png)

<a id="walkthrough-capture-http2-05-headers"></a>
### 05 · 核对声明的完整长度

[视频 00:12](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=12.156) · [返回本节视频](#walkthrough-capture-http2-video)

![05 · 核对声明的完整长度](../media/v0.1.1-alpha.1/capture-http2/capture-http2-05-headers.png)

<a id="walkthrough-capture-http2-06-partial-body"></a>
### 06 · 区分接收进度与正文可读性

[视频 00:15](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=15.119) · [返回本节视频](#walkthrough-capture-http2-video)

![06 · 区分接收进度与正文可读性](../media/v0.1.1-alpha.1/capture-http2/capture-http2-06-partial-body.png)

<a id="walkthrough-capture-http2-07-second-part"></a>
### 07 · 继续接收第二段

[视频 00:18](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=18.064) · [返回本节视频](#walkthrough-capture-http2-video)

![07 · 继续接收第二段](../media/v0.1.1-alpha.1/capture-http2/capture-http2-07-second-part.png)

<a id="walkthrough-capture-http2-08-complete"></a>
### 08 · 结束响应并核对完整正文

[视频 00:21](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=21.065) · [返回本节视频](#walkthrough-capture-http2-video)

![08 · 结束响应并核对完整正文](../media/v0.1.1-alpha.1/capture-http2/capture-http2-08-complete.png)

<a id="walkthrough-capture-http2-09-trailers"></a>
### 09 · 查看结束时的 trailer

[视频 00:24](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=24.355) · [返回本节视频](#walkthrough-capture-http2-video)

![09 · 查看结束时的 trailer](../media/v0.1.1-alpha.1/capture-http2/capture-http2-09-trailers.png)

<a id="walkthrough-capture-http2-10-protocol-group"></a>
### 10 · 展开 Protocol 分组

[视频 00:27](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=27.682) · [返回本节视频](#walkthrough-capture-http2-video)

![10 · 展开 Protocol 分组](../media/v0.1.1-alpha.1/capture-http2/capture-http2-10-protocol-group.png)

<a id="walkthrough-capture-http2-11-http2-filter"></a>
### 11 · 选择实际 HTTP/2 协议

[视频 00:30](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=30.685) · [返回本节视频](#walkthrough-capture-http2-video)

![11 · 选择实际 HTTP/2 协议](../media/v0.1.1-alpha.1/capture-http2/capture-http2-11-http2-filter.png)

<a id="walkthrough-capture-http2-client-01-interrupt"></a>
### 12 · 观察客户端中断与新连接

[视频 00:33](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=33.765) · [返回本节视频](#walkthrough-capture-http2-video)

![12 · 观察客户端中断与新连接](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-01-interrupt.png)

<a id="walkthrough-capture-http2-client-02-original"></a>
### 13 · 选择原来的 POST

[视频 00:36](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=36.818) · [返回本节视频](#walkthrough-capture-http2-video)

![13 · 选择原来的 POST](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-02-original.png)

<a id="walkthrough-capture-http2-client-03-length"></a>
### 14 · 查看仍声明 524288 的 Header

[视频 00:39](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=39.909) · [返回本节视频](#walkthrough-capture-http2-video)

![14 · 查看仍声明 524288 的 Header](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-03-length.png)

<a id="walkthrough-capture-http2-client-04-partial"></a>
### 15 · 读取真正捕获到的部分正文

[视频 00:42](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=42.909) · [返回本节视频](#walkthrough-capture-http2-video)

![15 · 读取真正捕获到的部分正文](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-04-partial.png)

<a id="walkthrough-capture-http2-client-05-recovered"></a>
### 16 · 选择独立的 recovered GET

[视频 00:46](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=46.063) · [返回本节视频](#walkthrough-capture-http2-video)

![16 · 选择独立的 recovered GET](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-05-recovered.png)

<a id="walkthrough-capture-http2-client-06-recovery-body"></a>
### 17 · 读取新连接的正常响应

[视频 00:49](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=49.784) · [返回本节视频](#walkthrough-capture-http2-video)

![17 · 读取新连接的正常响应](../media/v0.1.1-alpha.1/capture-http2/capture-http2-client-06-recovery-body.png)

<a id="walkthrough-capture-http2-origin-01-interrupt"></a>
### 18 · 观察源站中断与新连接

[视频 00:52](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=52.955) · [返回本节视频](#walkthrough-capture-http2-video)

![18 · 观察源站中断与新连接](../media/v0.1.1-alpha.1/capture-http2/capture-http2-origin-01-interrupt.png)

<a id="walkthrough-capture-http2-origin-02-original"></a>
### 19 · 选择原来的 POST

[视频 00:55](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=55.924) · [返回本节视频](#walkthrough-capture-http2-video)

![19 · 选择原来的 POST](../media/v0.1.1-alpha.1/capture-http2/capture-http2-origin-02-original.png)

<a id="walkthrough-capture-http2-origin-03-length"></a>
### 20 · 查看仍声明 524288 的 Header

[视频 00:59](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=59.070) · [返回本节视频](#walkthrough-capture-http2-video)

![20 · 查看仍声明 524288 的 Header](../media/v0.1.1-alpha.1/capture-http2/capture-http2-origin-03-length.png)

<a id="walkthrough-capture-http2-origin-04-partial"></a>
### 21 · 读取真正捕获到的部分正文

[视频 01:02](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=62.113) · [返回本节视频](#walkthrough-capture-http2-video)

![21 · 读取真正捕获到的部分正文](../media/v0.1.1-alpha.1/capture-http2/capture-http2-origin-04-partial.png)

<a id="walkthrough-capture-http2-origin-05-recovered"></a>
### 22 · 选择独立的 recovered GET

[视频 01:05](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=65.315) · [返回本节视频](#walkthrough-capture-http2-video)

![22 · 选择独立的 recovered GET](../media/v0.1.1-alpha.1/capture-http2/capture-http2-origin-05-recovered.png)

<a id="walkthrough-capture-http2-origin-06-recovery-body"></a>
### 23 · 读取新连接的正常响应

[视频 01:08](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=68.550) · [返回本节视频](#walkthrough-capture-http2-video)

![23 · 读取新连接的正常响应](../media/v0.1.1-alpha.1/capture-http2/capture-http2-origin-06-recovery-body.png)

<a id="walkthrough-capture-http2-24-settings"></a>
### 24 · 返回 Settings

[视频 01:11](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=71.709) · [返回本节视频](#walkthrough-capture-http2-video)

![24 · 返回 Settings](../media/v0.1.1-alpha.1/capture-http2/capture-http2-24-settings.png)

<a id="walkthrough-capture-http2-25-certificates"></a>
### 25 · 打开 Certificates

[视频 01:14](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=74.727) · [返回本节视频](#walkthrough-capture-http2-video)

![25 · 打开 Certificates](../media/v0.1.1-alpha.1/capture-http2/capture-http2-25-certificates.png)

<a id="walkthrough-capture-http2-26-mitm-off"></a>
### 26 · 关闭本轮 HTTPS 解密

[视频 01:17](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=77.716) · [返回本节视频](#walkthrough-capture-http2-video)

![26 · 关闭本轮 HTTPS 解密](../media/v0.1.1-alpha.1/capture-http2/capture-http2-26-mitm-off.png)

<a id="walkthrough-capture-http2-27-origin-remove"></a>
### 27 · 移除本轮源站例外

[视频 01:20](../media/v0.1.1-alpha.1/capture-http2/capture-http2.mp4#t=80.964) · [返回本节视频](#walkthrough-capture-http2-video)

![27 · 移除本轮源站例外](../media/v0.1.1-alpha.1/capture-http2/capture-http2-27-origin-remove.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:capture-http2:end -->

<!-- recorded-walkthrough:capture-body-limits:start -->
<a id="walkthrough-capture-body-limits"></a>
## 逐步骤实操：大正文格式化、预览上限与完整保存

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>search</code> | <code>/guide/body-limits</code> |
| <code>manualPath</code> | <code>/guide/body-limits/manual</code> |
| <code>largePath</code> | <code>/guide/body-limits/large</code> |
| <code>manualDataBytes</code> | <code>1310720</code> |
| <code>manualWireBytes</code> | <code>1310785</code> |
| <code>largeDataBytes</code> | <code>3145728</code> |
| <code>largeWireBytes</code> | <code>3145791</code> |
| <code>previewBytes</code> | <code>2097152</code> |
| <code>manualStart</code> | <code>guide-manual-start</code> |
| <code>largeStart</code> | <code>guide-large-start</code> |
| <code>savedEnd</code> | <code>guide-large-end</code> |
| <code>savedFile</code> | <code>guide-full-response.json</code> |

<a id="walkthrough-capture-body-limits-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4" poster="../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-01-scope.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.vtt" default>
</video>

<a id="walkthrough-capture-body-limits-01-scope"></a>
### 01 · 限定本轮正文路径

[视频 00:00](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=0.463) · [返回本节视频](#walkthrough-capture-body-limits-video)

![01 · 限定本轮正文路径](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-01-scope.png)

<a id="walkthrough-capture-body-limits-02-record"></a>
### 02 · 开启 Recording

[视频 00:03](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=3.538) · [返回本节视频](#walkthrough-capture-body-limits-video)

![02 · 开启 Recording](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-02-record.png)

<a id="walkthrough-capture-body-limits-03-manual-request"></a>
### 03 · 请求超过1MiB的JSON

[视频 00:06](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=6.544) · [返回本节视频](#walkthrough-capture-body-limits-video)

![03 · 请求超过1MiB的JSON](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-03-manual-request.png)

<a id="walkthrough-capture-body-limits-04-manual-select"></a>
### 04 · 选择 manual 请求

[视频 00:09](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=9.695) · [返回本节视频](#walkthrough-capture-body-limits-video)

![04 · 选择 manual 请求](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-04-manual-select.png)

<a id="walkthrough-capture-body-limits-05-unformatted"></a>
### 05 · 查看尚未自动格式化的正文

[视频 00:13](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=13.006) · [返回本节视频](#walkthrough-capture-body-limits-video)

![05 · 查看尚未自动格式化的正文](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-05-unformatted.png)

<a id="walkthrough-capture-body-limits-06-copy-before"></a>
### 06 · 复制并核对原始文本

[视频 00:16](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=16.745) · [返回本节视频](#walkthrough-capture-body-limits-video)

![06 · 复制并核对原始文本](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-06-copy-before.png)

<a id="walkthrough-capture-body-limits-07-format"></a>
### 07 · 手动点击 Format

[视频 00:20](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=20.036) · [返回本节视频](#walkthrough-capture-body-limits-video)

![07 · 手动点击 Format](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-07-format.png)

<a id="walkthrough-capture-body-limits-08-copy-formatted"></a>
### 08 · 核对格式化只改变显示

[视频 00:23](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=23.290) · [返回本节视频](#walkthrough-capture-body-limits-video)

![08 · 核对格式化只改变显示](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-08-copy-formatted.png)

<a id="walkthrough-capture-body-limits-09-large-request"></a>
### 09 · 请求超过2MiB的完整JSON

[视频 00:26](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=26.482) · [返回本节视频](#walkthrough-capture-body-limits-video)

![09 · 请求超过2MiB的完整JSON](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-09-large-request.png)

<a id="walkthrough-capture-body-limits-10-large-select"></a>
### 10 · 选择 large 请求

[视频 00:29](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=29.607) · [返回本节视频](#walkthrough-capture-body-limits-video)

![10 · 选择 large 请求](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-10-large-select.png)

<a id="walkthrough-capture-body-limits-11-preview"></a>
### 11 · 查看有上限的正文预览

[视频 00:32](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=32.764) · [返回本节视频](#walkthrough-capture-body-limits-video)

![11 · 查看有上限的正文预览](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-11-preview.png)

<a id="walkthrough-capture-body-limits-12-copy-preview"></a>
### 12 · Copy只取当前2MiB预览

[视频 00:35](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=35.793) · [返回本节视频](#walkthrough-capture-body-limits-video)

![12 · Copy只取当前2MiB预览](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-12-copy-preview.png)

<a id="walkthrough-capture-body-limits-13-save-dialog"></a>
### 13 · 保存完整 guide-full-response.json

[视频 00:52](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=52.012) · [返回本节视频](#walkthrough-capture-body-limits-video)

![13 · 保存完整 guide-full-response.json](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-13-save-dialog.png)

<a id="walkthrough-capture-body-limits-14-saved-complete"></a>
### 14 · 核对保存文件没有按预览截断

[视频 00:56](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits.mp4#t=56.353) · [返回本节视频](#walkthrough-capture-body-limits-video)

![14 · 核对保存文件没有按预览截断](../media/v0.1.1-alpha.1/capture-body-limits/capture-body-limits-14-saved-complete.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:capture-body-limits:end -->

<!-- recorded-walkthrough:capture-grpc-messages:start -->
<a id="walkthrough-capture-grpc-messages"></a>
## 逐步骤实操：gRPC消息正文、复制、全屏与分页

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>protocol</code> | <code>grpc</code> |
| <code>filter</code> | <code>/guide/messages/grpc</code> |
| <code>detailPath</code> | <code>/guide/messages/grpc/detail</code> |
| <code>pagePath</code> | <code>/guide/messages/grpc/pages</code> |
| <code>firstMessage</code> | <code>{&quot;message&quot;:&quot;guide-short&quot;,&quot;state&quot;:&quot;ready&quot;}</code> |
| <code>longMessage</code> | <code>guide-long with 28 entries; ending guide-message-end</code> |
| <code>firstCount</code> | <code>6</code> |
| <code>pagedCount</code> | <code>205</code> |
| <code>finalMessage</code> | <code>{&quot;index&quot;:204,&quot;message&quot;:&quot;guide-page-204&quot;}</code> |
| <code>detailEncoding</code> | <code>gRPC JSON</code> |
| <code>pagedEncoding</code> | <code>gRPC JSON</code> |
| <code>tlsScope</code> | <code>existing CA; localhost exception removed, decryption stopped</code> |

<a id="walkthrough-capture-grpc-messages-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4" poster="../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-01-filter.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.vtt" default>
</video>

<a id="walkthrough-capture-grpc-messages-01-filter"></a>
### 01 · 限定本轮消息路径

[视频 00:00](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=0.436) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![01 · 限定本轮消息路径](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-01-filter.png)

<a id="walkthrough-capture-grpc-messages-02-record"></a>
### 02 · 开启 Recording

[视频 00:03](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=3.346) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![02 · 开启 Recording](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-02-record.png)

<a id="walkthrough-capture-grpc-messages-03-messages"></a>
### 03 · 发送六条公开消息

[视频 00:06](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=6.244) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![03 · 发送六条公开消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-03-messages.png)

<a id="walkthrough-capture-grpc-messages-04-select"></a>
### 04 · 选择本轮连接

[视频 00:09](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=9.241) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![04 · 选择本轮连接](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-04-select.png)

<a id="walkthrough-capture-grpc-messages-05-tab"></a>
### 05 · 打开消息页

[视频 00:12](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=12.450) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![05 · 打开消息页](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-05-tab.png)

<a id="walkthrough-capture-grpc-messages-06-direction"></a>
### 06 · 选择 Response 消息

[视频 00:15](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=15.446) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![06 · 选择 Response 消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-06-direction.png)

<a id="walkthrough-capture-grpc-messages-07-short"></a>
### 07 · 展开 guide-short

[视频 00:18](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=18.393) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![07 · 展开 guide-short](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-07-short.png)

<a id="walkthrough-capture-grpc-messages-08-short-raw"></a>
### 08 · 选择 Raw 查看原文

[视频 00:21](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=21.541) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![08 · 选择 Raw 查看原文](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-08-short-raw.png)

<a id="walkthrough-capture-grpc-messages-09-copy-short"></a>
### 09 · 复制当前短消息正文

[视频 00:24](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=24.544) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![09 · 复制当前短消息正文](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-09-copy-short.png)

<a id="walkthrough-capture-grpc-messages-10-collapse-short"></a>
### 10 · 收起短消息

[视频 00:27](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=27.512) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![10 · 收起短消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-10-collapse-short.png)

<a id="walkthrough-capture-grpc-messages-11-long"></a>
### 11 · 展开 guide-long

[视频 00:30](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=30.484) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![11 · 展开 guide-long](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-11-long.png)

<a id="walkthrough-capture-grpc-messages-12-resize"></a>
### 12 · 拖动正文右下角缩小高度

[视频 00:33](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=33.692) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![12 · 拖动正文右下角缩小高度](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-12-resize.png)

<a id="walkthrough-capture-grpc-messages-13-wheel"></a>
### 13 · 在长消息中滚动

[视频 00:37](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=37.093) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![13 · 在长消息中滚动](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-13-wheel.png)

<a id="walkthrough-capture-grpc-messages-14-keyboard-end"></a>
### 14 · 用键盘到达消息末尾

[视频 00:40](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=40.143) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![14 · 用键盘到达消息末尾](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-14-keyboard-end.png)

<a id="walkthrough-capture-grpc-messages-15-scroll-out"></a>
### 15 · 到底后继续滚动消息列表

[视频 00:43](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=43.139) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![15 · 到底后继续滚动消息列表](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-15-scroll-out.png)

<a id="walkthrough-capture-grpc-messages-16-copy-long"></a>
### 16 · 复制完整长消息正文

[视频 00:46](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=46.092) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![16 · 复制完整长消息正文](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-16-copy-long.png)

<a id="walkthrough-capture-grpc-messages-17-payload-copy"></a>
### 17 · 使用消息专用 Copy

[视频 00:49](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=49.053) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![17 · 使用消息专用 Copy](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-17-payload-copy.png)

<a id="walkthrough-capture-grpc-messages-18-fullscreen"></a>
### 18 · 全屏查看这条消息

[视频 00:52](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=52.041) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![18 · 全屏查看这条消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-18-fullscreen.png)

<a id="walkthrough-capture-grpc-messages-19-return"></a>
### 19 · Escape 返回同一消息

[视频 00:55](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=55.136) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![19 · Escape 返回同一消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-19-return.png)

<a id="walkthrough-capture-grpc-messages-20-paged-input"></a>
### 20 · 在新连接发送205条消息

[视频 00:58](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=58.298) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![20 · 在新连接发送205条消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-20-paged-input.png)

<a id="walkthrough-capture-grpc-messages-21-paged-select"></a>
### 21 · 选择新的 pages 连接

[视频 01:01](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=61.191) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![21 · 选择新的 pages 连接](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-21-paged-select.png)

<a id="walkthrough-capture-grpc-messages-22-paged-tab"></a>
### 22 · 打开新连接的消息

[视频 01:04](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=64.193) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![22 · 打开新连接的消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-22-paged-tab.png)

<a id="walkthrough-capture-grpc-messages-23-load-pages"></a>
### 23 · 滚动加载后续消息页

[视频 01:07](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=67.193) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![23 · 滚动加载后续消息页](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-23-load-pages.png)

<a id="walkthrough-capture-grpc-messages-24-last-message"></a>
### 24 · 展开第205条消息

[视频 01:10](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=70.643) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![24 · 展开第205条消息](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-24-last-message.png)

<a id="walkthrough-capture-grpc-messages-24a-last-raw"></a>
### 25 · 切到 Raw 查看末条原文

[视频 01:13](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=73.694) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![25 · 切到 Raw 查看末条原文](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-24a-last-raw.png)

<a id="walkthrough-capture-grpc-messages-24b-last-visible"></a>
### 26 · 继续滚动使末条正文完整可见

[视频 01:16](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=76.744) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![26 · 继续滚动使末条正文完整可见](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-24b-last-visible.png)

<a id="walkthrough-capture-grpc-messages-25-copy-last"></a>
### 27 · 复制最后一条并核对 index 204

[视频 01:19](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=79.793) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![27 · 复制最后一条并核对 index 204](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-25-copy-last.png)

<a id="walkthrough-capture-grpc-messages-26-settings"></a>
### 28 · 返回 Settings

[视频 01:22](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=82.792) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![28 · 返回 Settings](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-26-settings.png)

<a id="walkthrough-capture-grpc-messages-27-certificates"></a>
### 29 · 打开 Certificates

[视频 01:25](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=85.745) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![29 · 打开 Certificates](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-27-certificates.png)

<a id="walkthrough-capture-grpc-messages-28-mitm-off"></a>
### 30 · 关闭本轮解密

[视频 01:28](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=88.642) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![30 · 关闭本轮解密](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-28-mitm-off.png)

<a id="walkthrough-capture-grpc-messages-29-origin-remove"></a>
### 31 · 移除自有localhost例外

[视频 01:31](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages.mp4#t=91.746) · [返回本节视频](#walkthrough-capture-grpc-messages-video)

![31 · 移除自有localhost例外](../media/v0.1.1-alpha.1/capture-grpc-messages/capture-grpc-messages-29-origin-remove.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:capture-grpc-messages:end -->
