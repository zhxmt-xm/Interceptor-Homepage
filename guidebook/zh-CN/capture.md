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

15. 如需查看演示路径之外的全部流量，再清空搜索框。

    **待配图**：本次最终仍保留 `/guide/filters` 搜索，没有录到完全清空搜索框的操作。

16. 需要其他维度时选择 Application、Host、Protocol、Content type 或 Rule。

    **待配图**：新片段只操作 Method 与 Status，没有逐项操作其余分组，也不证明 Windows 应用归属。

**预期结果**

同一组内多个选项是“满足任意一个”；不同组之间，以及搜索与分组之间，是“同时满足”。

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

5. 有请求正文时打开 Request；按需要拖动列表与详情分栏。

   **待配图**：本次 GET 没有展示请求正文编辑区，也没有单独录制分栏拖动；Response 和 Timing 图不能替代。

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

   **待配图**：Source 的实际切换尚未录制。

4. 使用全屏入口放大当前正文。

   ![正文全屏已打开](../media/v0.1.1-alpha.1/capture/capture-08a-fullscreen.png)

5. 按 Escape 返回详情。

   ![退出全屏后的详情](../media/v0.1.1-alpha.1/capture/capture-08b-close-fullscreen.png)

6. 切换 Hex，精确检查字节。

   ![同一正文的 Hex 字节](../media/v0.1.1-alpha.1/capture/capture-09-hex.png)

7. 需要访问溢出内容时滚动或拖动分栏。

   **待配图**：现有模式图不展示真实滚轮或拖动过程；长正文与边界滚动仍缺独立步骤图。

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
- Format 只改变显示；失败时保留原文。没有 Format 按钮的模式，不代表该响应无法读取。
- Copy 复制当前查看器提供的内容，不应当作完整大文件导出的替代。
- 需要保存捕获到的完整正文时用 Save body。它不受只读预览上限替代，但无法恢复网络中断时从未捕获到的字节。
- `multipart/form-data` 当前不是结构化的文件上传列表，不要按普通 Form 视图理解。

## 区分原始内容与规则修改结果

**用途**

确定当前看到的正文是否被 Rules 或断点编辑改变。

**步骤**

1. 查找请求详情中的真实规则效果标记。

   **待配图**：现有规则结果图没有独立演示效果标记的查看与跳转，不以普通 Header 图替代。

2. 如果正文提供 Body version 选择，先确认当前选择是 Original 还是 Final。下图引用 [Rules 的 Body 动作实拍](rules.md#walkthrough-rules-actions)：`Guide body` 将响应替换为 `{"message":"guide-body"}`，画面是 Final，不是前面的 orders 原文。

   ![Rules Body 动作后的 Final 正文 guide-body](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

3. 切换可用版本，比较内容；需要检查规则时使用效果标记的跳转入口。

   **待配图**：尚未录制 Original/Final 来回切换及效果标记跳转；上图只覆盖 Final。

4. 复制、保存或全屏前，再确认当前版本。

   **待配图**：未录制版本选择后的复制、Save body 或全屏操作，不能拿无规则正文的画面替代。

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

   **待配图**：本次协议片段录到了已解密请求，没有单独录制 TLS tunnel 的未解密状态。

2. 到 Settings 检查现有 CA 信任；下图是录制机器已有的受信任 CA，不是首次安装或系统授权。

   ![录制环境已有的受信任 CA](../media/v0.1.1-alpha.1/capture/capture-18-certificates.png)

3. 在具备信任条件后启用 HTTPS 解密。本次仅对自己控制的 `localhost` 演示源站添加了证书例外；不要照抄为普通公网配置。

   ![只为本机演示源站添加 localhost 例外](../media/v0.1.1-alpha.1/capture/capture-19-local-origin.png)

   ![开启 HTTPS 解密](../media/v0.1.1-alpha.1/capture/capture-20-decryption.png)

4. 核对 TLS passthrough 是否排除了你的目标；需要调整时按 [Settings](settings.md#tls-passthrough)操作。

   **待配图**：现有录制没有完成 passthrough 命中与配置调整的往返。

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

   **待配图**：实拍使用搜索框限定范围，没有点击 Protocol 筛选项。

4. 在 Headers 展开实际可用的 trailers。

   ![HTTP/2 trailers 展开状态](../media/v0.1.1-alpha.1/capture/capture-23-trailers.png)

5. 打开 Response 查看本次 HTTP/2 JSON。

   ![HTTP/2 JSON 正文](../media/v0.1.1-alpha.1/capture/capture-24-h2-body.png)

6. 对较长或流式响应，观察同一记录的接收进度和最终状态，不因已看到一部分文本就提前判断完整。

   **待配图**：本段未逐步录制长流接收和结束，短 JSON 的完成画面不能代替。

7. 若连接关闭，比较该请求是否正常结束、客户端实际收到的内容和后续新请求能否建立连接。

   **待配图 / blocked**：GOAWAY、reset、中断与重连的专项过程尚未录制，不能用普通 HTTP/2 成功请求标通过。

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

   **待配图**：现有消息较短，未单独操作消息复制或全屏；HTTP 正文全屏图不能替代消息操作。

6. 消息较多时使用列表滚动或分页，避免把当前屏幕当成完整会话。

   **待配图**：尚未录制多页消息和滚动边界。

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

3. 选择实际要保存的范围。本次选择当前请求；全部记录与当前筛选结果分支仍待配图。

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

   **待配图**：没有录制正在执行或取消清理的文件任务；完成画面不能展示清理中的等待过程。

3. 使用 Clear 清空不需保留的演示记录，按实际界面完成确认并检查列表、选择和计数。下图回到 `capture` 录制的清空操作。

   ![Capture 清空演示记录后的实际列表](../media/v0.1.1-alpha.1/capture/capture-17-clear.png)

4. 再发起新请求，确认 Recording 状态符合预期。

   **待配图**：现有“恢复录制后新请求”发生在 Clear 之前，不用它冒充 Clear 之后的验证。

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

<a id="walkthrough-capture-filters-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4" poster="../media/v0.1.1-alpha.1/capture-filters/capture-filters-01-records.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-filters/capture-filters.vtt" default>
</video>

<a id="walkthrough-capture-filters-01-records"></a>
### 01 · 查看四条演示请求

[视频 00:00](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=0.199) · [返回本节视频](#walkthrough-capture-filters-video)

![01 · 查看四条演示请求](../media/v0.1.1-alpha.1/capture-filters/capture-filters-01-records.png)

<a id="walkthrough-capture-filters-02-methods"></a>
### 02 · 展开 Method

[视频 00:03](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=3.015) · [返回本节视频](#walkthrough-capture-filters-video)

![02 · 展开 Method](../media/v0.1.1-alpha.1/capture-filters/capture-filters-02-methods.png)

<a id="walkthrough-capture-filters-03-get"></a>
### 03 · 只选 GET

[视频 00:05](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=5.903) · [返回本节视频](#walkthrough-capture-filters-video)

![03 · 只选 GET](../media/v0.1.1-alpha.1/capture-filters/capture-filters-03-get.png)

<a id="walkthrough-capture-filters-04-get-post"></a>
### 04 · 同组再选 POST

[视频 00:08](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=8.805) · [返回本节视频](#walkthrough-capture-filters-video)

![04 · 同组再选 POST](../media/v0.1.1-alpha.1/capture-filters/capture-filters-04-get-post.png)

<a id="walkthrough-capture-filters-05-status"></a>
### 05 · 展开 Status

[视频 00:11](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=11.703) · [返回本节视频](#walkthrough-capture-filters-video)

![05 · 展开 Status](../media/v0.1.1-alpha.1/capture-filters/capture-filters-05-status.png)

<a id="walkthrough-capture-filters-06-and-status"></a>
### 06 · 再选 200，跨组 AND

[视频 00:14](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=14.559) · [返回本节视频](#walkthrough-capture-filters-video)

![06 · 再选 200，跨组 AND](../media/v0.1.1-alpha.1/capture-filters/capture-filters-06-and-status.png)

<a id="walkthrough-capture-filters-07-search"></a>
### 07 · 叠加 post-ok 搜索

[视频 00:17](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=17.454) · [返回本节视频](#walkthrough-capture-filters-video)

![07 · 叠加 post-ok 搜索](../media/v0.1.1-alpha.1/capture-filters/capture-filters-07-search.png)

<a id="walkthrough-capture-filters-08-search-back"></a>
### 08 · 恢复演示搜索范围

[视频 00:20](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=20.253) · [返回本节视频](#walkthrough-capture-filters-video)

![08 · 恢复演示搜索范围](../media/v0.1.1-alpha.1/capture-filters/capture-filters-08-search-back.png)

<a id="walkthrough-capture-filters-09-remove-status"></a>
### 09 · 取消 Status 条件

[视频 00:23](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=23.104) · [返回本节视频](#walkthrough-capture-filters-video)

![09 · 取消 Status 条件](../media/v0.1.1-alpha.1/capture-filters/capture-filters-09-remove-status.png)

<a id="walkthrough-capture-filters-10-remove-post"></a>
### 10 · 取消 POST

[视频 00:25](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=25.954) · [返回本节视频](#walkthrough-capture-filters-video)

![10 · 取消 POST](../media/v0.1.1-alpha.1/capture-filters/capture-filters-10-remove-post.png)

<a id="walkthrough-capture-filters-11-remove-get"></a>
### 11 · 取消 GET，保留原记录

[视频 00:28](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=28.809) · [返回本节视频](#walkthrough-capture-filters-video)

![11 · 取消 GET，保留原记录](../media/v0.1.1-alpha.1/capture-filters/capture-filters-11-remove-get.png)

<a id="walkthrough-capture-filters-12-collapse"></a>
### 12 · 只折叠组标题

[视频 00:31](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=31.657) · [返回本节视频](#walkthrough-capture-filters-video)

![12 · 只折叠组标题](../media/v0.1.1-alpha.1/capture-filters/capture-filters-12-collapse.png)

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
