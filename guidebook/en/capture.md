# Capture: find and understand traffic

> Draft for `v0.1.1-alpha.1`. Recorded operations have matching step images; unrecorded branches remain explicitly pending. Neither this chapter nor item9 is complete, and the text alone is not protocol or platform acceptance.

[Guide directory](../README.en.md) · [Getting started](getting-started.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
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

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/capture/capture.mp4" poster="../media/v0.1.1-alpha.1/capture/capture-01-filter.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture/capture.vtt" default>
</video>

<a id="walkthrough-01-filter"></a>
### 01 · Filter owned traffic

[Video 00:00](../media/v0.1.1-alpha.1/capture/capture.mp4#t=0.338) · [Back to the video](#walkthrough-video)

![01 · Filter owned traffic](../media/v0.1.1-alpha.1/capture/capture-01-filter.png)

<a id="walkthrough-02-record"></a>
### 02 · Start Recording

[Video 00:03](../media/v0.1.1-alpha.1/capture/capture.mp4#t=3.147) · [Back to the video](#walkthrough-video)

![02 · Start Recording](../media/v0.1.1-alpha.1/capture/capture-02-record.png)

<a id="walkthrough-03-request"></a>
### 03 · Send the example GET

[Video 00:05](../media/v0.1.1-alpha.1/capture/capture.mp4#t=5.996) · [Back to the video](#walkthrough-video)

![03 · Send the example GET](../media/v0.1.1-alpha.1/capture/capture-03-request.png)

<a id="walkthrough-04-select"></a>
### 04 · Select the orders request

[Video 00:08](../media/v0.1.1-alpha.1/capture/capture.mp4#t=8.851) · [Back to the video](#walkthrough-video)

![04 · Select the orders request](../media/v0.1.1-alpha.1/capture/capture-04-select.png)

<a id="walkthrough-05-headers"></a>
### 05 · Inspect Headers

[Video 00:11](../media/v0.1.1-alpha.1/capture/capture.mp4#t=11.898) · [Back to the video](#walkthrough-video)

![05 · Inspect Headers](../media/v0.1.1-alpha.1/capture/capture-05-headers.png)

<a id="walkthrough-06-response"></a>
### 06 · Read the JSON response

[Video 00:14](../media/v0.1.1-alpha.1/capture/capture.mp4#t=14.746) · [Back to the video](#walkthrough-video)

![06 · Read the JSON response](../media/v0.1.1-alpha.1/capture/capture-06-response.png)

<a id="walkthrough-07-tree"></a>
### 07 · Switch to Tree

[Video 00:17](../media/v0.1.1-alpha.1/capture/capture.mp4#t=17.752) · [Back to the video](#walkthrough-video)

![07 · Switch to Tree](../media/v0.1.1-alpha.1/capture/capture-07-tree.png)

<a id="walkthrough-08-raw"></a>
### 08 · Switch to Raw

[Video 00:20](../media/v0.1.1-alpha.1/capture/capture.mp4#t=20.652) · [Back to the video](#walkthrough-video)

![08 · Switch to Raw](../media/v0.1.1-alpha.1/capture/capture-08-raw.png)

<a id="walkthrough-08a-fullscreen"></a>
### 09 · Open the body fullscreen

[Video 00:23](../media/v0.1.1-alpha.1/capture/capture.mp4#t=23.547) · [Back to the video](#walkthrough-video)

![09 · Open the body fullscreen](../media/v0.1.1-alpha.1/capture/capture-08a-fullscreen.png)

<a id="walkthrough-08b-close-fullscreen"></a>
### 10 · Return with Escape

[Video 00:26](../media/v0.1.1-alpha.1/capture/capture.mp4#t=26.455) · [Back to the video](#walkthrough-video)

![10 · Return with Escape](../media/v0.1.1-alpha.1/capture/capture-08b-close-fullscreen.png)

<a id="walkthrough-09-hex"></a>
### 11 · Inspect Hex bytes

[Video 00:29](../media/v0.1.1-alpha.1/capture/capture.mp4#t=29.398) · [Back to the video](#walkthrough-video)

![11 · Inspect Hex bytes](../media/v0.1.1-alpha.1/capture/capture-09-hex.png)

<a id="walkthrough-10-timing"></a>
### 12 · Inspect Timing

[Video 00:32](../media/v0.1.1-alpha.1/capture/capture.mp4#t=32.300) · [Back to the video](#walkthrough-video)

![12 · Inspect Timing](../media/v0.1.1-alpha.1/capture/capture-10-timing.png)

<a id="walkthrough-11-pause"></a>
### 13 · Pause Recording

[Video 00:35](../media/v0.1.1-alpha.1/capture/capture.mp4#t=35.198) · [Back to the video](#walkthrough-video)

![13 · Pause Recording](../media/v0.1.1-alpha.1/capture/capture-11-pause.png)

<a id="walkthrough-12-paused-request"></a>
### 14 · Forward while paused

[Video 00:38](../media/v0.1.1-alpha.1/capture/capture.mp4#t=38.098) · [Back to the video](#walkthrough-video)

![14 · Forward while paused](../media/v0.1.1-alpha.1/capture/capture-12-paused-request.png)

<a id="walkthrough-13-resume"></a>
### 15 · Resume Recording

[Video 00:40](../media/v0.1.1-alpha.1/capture/capture.mp4#t=40.948) · [Back to the video](#walkthrough-video)

![15 · Resume Recording](../media/v0.1.1-alpha.1/capture/capture-13-resume.png)

<a id="walkthrough-14-new-request"></a>
### 16 · Capture a new request after Resume

[Video 00:43](../media/v0.1.1-alpha.1/capture/capture.mp4#t=43.899) · [Back to the video](#walkthrough-video)

![16 · Capture a new request after Resume](../media/v0.1.1-alpha.1/capture/capture-14-new-request.png)

<a id="walkthrough-15-keyword"></a>
### 17 · Narrow search to orders

[Video 00:46](../media/v0.1.1-alpha.1/capture/capture.mp4#t=46.806) · [Back to the video](#walkthrough-video)

![17 · Narrow search to orders](../media/v0.1.1-alpha.1/capture/capture-15-keyword.png)

<a id="walkthrough-16-restore-filter"></a>
### 18 · Restore the example scope

[Video 00:49](../media/v0.1.1-alpha.1/capture/capture.mp4#t=49.699) · [Back to the video](#walkthrough-video)

![18 · Restore the example scope](../media/v0.1.1-alpha.1/capture/capture-16-restore-filter.png)

<a id="walkthrough-17-clear"></a>
### 19 · Clear disposable example records

[Video 00:52](../media/v0.1.1-alpha.1/capture/capture.mp4#t=52.549) · [Back to the video](#walkthrough-video)

![19 · Clear disposable example records](../media/v0.1.1-alpha.1/capture/capture-17-clear.png)

<a id="walkthrough-18-certificates"></a>
### 20 · Inspect the existing trusted CA

[Video 00:55](../media/v0.1.1-alpha.1/capture/capture.mp4#t=55.500) · [Back to the video](#walkthrough-video)

![20 · Inspect the existing trusted CA](../media/v0.1.1-alpha.1/capture/capture-18-certificates.png)

<a id="walkthrough-19-local-origin"></a>
### 21 · Add only the demo localhost exception

[Video 00:58](../media/v0.1.1-alpha.1/capture/capture.mp4#t=58.448) · [Back to the video](#walkthrough-video)

![21 · Add only the demo localhost exception](../media/v0.1.1-alpha.1/capture/capture-19-local-origin.png)

<a id="walkthrough-20-decryption"></a>
### 22 · Enable HTTPS decryption

[Video 01:01](../media/v0.1.1-alpha.1/capture/capture.mp4#t=61.398) · [Back to the video](#walkthrough-video)

![22 · Enable HTTPS decryption](../media/v0.1.1-alpha.1/capture/capture-20-decryption.png)

<a id="walkthrough-21-protocol-scope"></a>
### 23 · Filter the protocol examples

[Video 01:04](../media/v0.1.1-alpha.1/capture/capture.mp4#t=64.449) · [Back to the video](#walkthrough-video)

![23 · Filter the protocol examples](../media/v0.1.1-alpha.1/capture/capture-21-protocol-scope.png)

<a id="walkthrough-22-http2"></a>
### 24 · Capture real HTTP/2

[Video 01:07](../media/v0.1.1-alpha.1/capture/capture.mp4#t=67.500) · [Back to the video](#walkthrough-video)

![24 · Capture real HTTP/2](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

<a id="walkthrough-23-trailers"></a>
### 25 · Expand HTTP/2 trailers

[Video 01:10](../media/v0.1.1-alpha.1/capture/capture.mp4#t=70.750) · [Back to the video](#walkthrough-video)

![25 · Expand HTTP/2 trailers](../media/v0.1.1-alpha.1/capture/capture-23-trailers.png)

<a id="walkthrough-24-h2-body"></a>
### 26 · Read the HTTP/2 JSON body

[Video 01:13](../media/v0.1.1-alpha.1/capture/capture.mp4#t=73.599) · [Back to the video](#walkthrough-video)

![26 · Read the HTTP/2 JSON body](../media/v0.1.1-alpha.1/capture/capture-24-h2-body.png)

<a id="walkthrough-25-websocket"></a>
### 27 · Capture WebSocket text

[Video 01:16](../media/v0.1.1-alpha.1/capture/capture.mp4#t=76.649) · [Back to the video](#walkthrough-video)

![27 · Capture WebSocket text](../media/v0.1.1-alpha.1/capture/capture-25-websocket.png)

<a id="walkthrough-26-message"></a>
### 28 · Inspect a sent payload

[Video 01:19](../media/v0.1.1-alpha.1/capture/capture.mp4#t=79.699) · [Back to the video](#walkthrough-video)

![28 · Inspect a sent payload](../media/v0.1.1-alpha.1/capture/capture-26-message.png)

<a id="walkthrough-27-grpc"></a>
### 29 · Capture gRPC JSON

[Video 01:22](../media/v0.1.1-alpha.1/capture/capture.mp4#t=82.700) · [Back to the video](#walkthrough-video)

![29 · Capture gRPC JSON](../media/v0.1.1-alpha.1/capture/capture-27-grpc.png)

<a id="walkthrough-28-grpc-response"></a>
### 30 · Inspect the gRPC response message

[Video 01:25](../media/v0.1.1-alpha.1/capture/capture.mp4#t=85.957) · [Back to the video](#walkthrough-video)

![30 · Inspect the gRPC response message](../media/v0.1.1-alpha.1/capture/capture-28-grpc-response.png)

<a id="walkthrough-29-body-html"></a>
### 31 · HTML source

[Video 01:28](../media/v0.1.1-alpha.1/capture/capture.mp4#t=88.903) · [Back to the video](#walkthrough-video)

![31 · HTML source](../media/v0.1.1-alpha.1/capture/capture-29-body-html.png)

<a id="walkthrough-29-body-markdown"></a>
### 32 · Markdown preview

[Video 01:32](../media/v0.1.1-alpha.1/capture/capture.mp4#t=92.050) · [Back to the video](#walkthrough-video)

![32 · Markdown preview](../media/v0.1.1-alpha.1/capture/capture-29-body-markdown.png)

<a id="walkthrough-29-body-form"></a>
### 33 · Form fields

[Video 01:35](../media/v0.1.1-alpha.1/capture/capture.mp4#t=95.098) · [Back to the video](#walkthrough-video)

![33 · Form fields](../media/v0.1.1-alpha.1/capture/capture-29-body-form.png)

<a id="walkthrough-29-body-png"></a>
### 34 · PNG image

[Video 01:38](../media/v0.1.1-alpha.1/capture/capture.mp4#t=98.152) · [Back to the video](#walkthrough-video)

![34 · PNG image](../media/v0.1.1-alpha.1/capture/capture-29-body-png.png)

<a id="walkthrough-29-body-binary"></a>
### 35 · Binary Hex

[Video 01:41](../media/v0.1.1-alpha.1/capture/capture.mp4#t=101.149) · [Back to the video](#walkthrough-video)

![35 · Binary Hex](../media/v0.1.1-alpha.1/capture/capture-29-body-binary.png)

<a id="walkthrough-29-body-audio"></a>
### 36 · Audio metadata

[Video 01:44](../media/v0.1.1-alpha.1/capture/capture.mp4#t=104.449) · [Back to the video](#walkthrough-video)

![36 · Audio metadata](../media/v0.1.1-alpha.1/capture/capture-29-body-audio.png)

<a id="walkthrough-29-body-video"></a>
### 37 · Video metadata

[Video 01:47](../media/v0.1.1-alpha.1/capture/capture.mp4#t=107.505) · [Back to the video](#walkthrough-video)

![37 · Video metadata](../media/v0.1.1-alpha.1/capture/capture-29-body-video.png)

<a id="walkthrough-29-encoding-gzip"></a>
### 38 · gzip decoding

[Video 01:50](../media/v0.1.1-alpha.1/capture/capture.mp4#t=110.547) · [Back to the video](#walkthrough-video)

![38 · gzip decoding](../media/v0.1.1-alpha.1/capture/capture-29-encoding-gzip.png)

<a id="walkthrough-29-encoding-corrupt-gzip"></a>
### 39 · Actual corrupt-encoding notice

[Video 01:53](../media/v0.1.1-alpha.1/capture/capture.mp4#t=113.660) · [Back to the video](#walkthrough-video)

![39 · Actual corrupt-encoding notice](../media/v0.1.1-alpha.1/capture/capture-29-encoding-corrupt-gzip.png)

<a id="walkthrough-30-decryption-off"></a>
### 40 · Disable this run’s decryption

[Video 01:56](../media/v0.1.1-alpha.1/capture/capture.mp4#t=116.798) · [Back to the video](#walkthrough-video)

![40 · Disable this run’s decryption](../media/v0.1.1-alpha.1/capture/capture-30-decryption-off.png)

<a id="walkthrough-31-remove-exception"></a>
### 41 · Remove the demo origin exception

[Video 02:00](../media/v0.1.1-alpha.1/capture/capture.mp4#t=120.049) · [Back to the video](#walkthrough-video)

![41 · Remove the demo origin exception](../media/v0.1.1-alpha.1/capture/capture-31-remove-exception.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="开始与暂停录制"></a>
## Start and pause recording

**Purpose and prerequisites**

Record requests passing through the proxy. Complete proxy readiness first, then generate authorized traffic with an external client.

**Steps**

1. Open Capture and enable Recording. This section reuses the `capture` recording. The `58377` in `http://127.0.0.1:58377/guide/capture/orders` is a recording-only dynamic port; use your own test service.

   ![Enabling Recording](../media/v0.1.1-alpha.1/capture/capture-02-record.png)

2. Send that GET through the proxy with an external client and wait for its row. This is not Composer Send.

   ![The demonstration GET reaches Capture](../media/v0.1.1-alpha.1/capture/capture-03-request.png)

3. Pause Recording.

   ![Recording paused](../media/v0.1.1-alpha.1/capture/capture-11-pause.png)

4. Send again while paused; compare the client still receiving a result with the absence of a new capture row.

   ![Recorded checkpoint for forwarding while paused](../media/v0.1.1-alpha.1/capture/capture-12-paused-request.png)

5. Resume Recording.

   ![Resuming Recording](../media/v0.1.1-alpha.1/capture/capture-13-resume.png)

6. Send a new request and inspect its new record, rather than waiting for paused traffic to be backfilled.

   ![New request captured after resuming](../media/v0.1.1-alpha.1/capture/capture-14-new-request.png)

**Expected result**

Existing records remain. Requests started while paused are not backfilled; new requests started after resuming are recorded.

**Notes**

- Pause does not stop forwarding or restore the system proxy.
- Already-started requests can finish; Pause does not truncate a response.
- WebSocket recording is decided at its handshake. A previously recorded connection continues recording messages; a connection opened while paused does not start recording halfway through when you resume. Reconnect the client to capture a new connection.

<a id="搜索和组合筛选"></a>
## Search and combine filters

**Purpose:** locate relevant requests without deleting source records.

**Steps**

1. Search for `/guide/capture` to limit the list to this demonstration.

   ![Actual search value /guide/capture](../media/v0.1.1-alpha.1/capture/capture-01-filter.png)

2. Narrow the search to `orders`.

   ![Actual orders-only search](../media/v0.1.1-alpha.1/capture/capture-15-keyword.png)

3. Combined filtering uses the separate `capture-filters` recording: search `/guide/filters` starts with four demonstration records, not renamed orders from above.

   ![Four actual records before combined filtering](../media/v0.1.1-alpha.1/capture-filters/capture-filters-01-records.png)

4. Expand Method.

   ![Expanding the actual Method group](../media/v0.1.1-alpha.1/capture-filters/capture-filters-02-methods.png)

5. Select `GET` first.

   ![Actual GET-only results](../media/v0.1.1-alpha.1/capture-filters/capture-filters-03-get.png)

6. Also select `POST` in that group. The two methods are OR; three records remain in this example.

   ![GET and POST together show three records](../media/v0.1.1-alpha.1/capture-filters/capture-filters-04-get-post.png)

7. Expand Status while keeping the Method conditions.

   ![Expanding Status without removing Method selections](../media/v0.1.1-alpha.1/capture-filters/capture-filters-05-status.png)

8. Select `200`. This ANDs with Method across groups, leaving two records.

   ![Two records matching GET or POST and status 200](../media/v0.1.1-alpha.1/capture-filters/capture-filters-06-and-status.png)

9. Search `/guide/filters/post-ok` as an additional condition; one record remains.

   ![One record after combining search and groups](../media/v0.1.1-alpha.1/capture-filters/capture-filters-07-search.png)

10. Restore search to `/guide/filters`, retaining Method and Status.

    ![Restoring the demonstration path search, not clearing records](../media/v0.1.1-alpha.1/capture-filters/capture-filters-08-search-back.png)

11. Remove the `200` Status selection.

    ![Actually removing the Status condition](../media/v0.1.1-alpha.1/capture-filters/capture-filters-09-remove-status.png)

12. Remove `POST` from Method.

    ![Removing POST while retaining GET](../media/v0.1.1-alpha.1/capture-filters/capture-filters-10-remove-post.png)

13. Remove `GET` too, restoring all four original records within `/guide/filters`. None were deleted.

    ![Four records restored after removing the final Method selection](../media/v0.1.1-alpha.1/capture-filters/capture-filters-11-remove-get.png)

14. Click the group heading to collapse it; only expansion changes.

    ![Collapsing a group heading without Capture Clear](../media/v0.1.1-alpha.1/capture-filters/capture-filters-12-collapse.png)

15. To see traffic outside the demonstration path, clear search as well.

    **Image pending:** the final state retains `/guide/filters`; completely clearing search was not recorded.

16. Select Application, Host, Protocol, Content type or Rule when those dimensions are needed.

    **Image pending:** this new clip operates Method and Status only, not the remaining groups or Windows application attribution.

**Expected result:** selections within one group are OR; different groups, and search combined with groups, are AND.

**Notes**

- Search matches Host and Path, not arbitrary headers or body text.
- Group counts refer to the complete current recording, not necessarily the currently visible filtered rows.
- Pending means the relevant information is not yet available; it does not automatically mean failure.
- Selecting a value leaves the group expanded. Its title controls expansion.
- Clearing filters is not Clear capture. Do not delete records merely to reset filters.
- Application attribution is platform-dependent. Windows attribution does not guarantee equivalent results everywhere.

<a id="检查请求详情"></a>
## Inspect a request

**Steps**

1. Select `/guide/capture/orders` and review URL, method, protocol, status and size.

   ![Actual orders request summary](../media/v0.1.1-alpha.1/capture/capture-04-select.png)

2. Open Headers to inspect request and response headers; expand the relevant groups when needed.

   ![Headers for orders](../media/v0.1.1-alpha.1/capture/capture-05-headers.png)

3. Open Response and check `orderId: guide-001`, `message: Hello Interceptor` and `status: ready`.

   ![Actual orders JSON response](../media/v0.1.1-alpha.1/capture/capture-06-response.png)

4. Open Timing.

   ![Timing for the same request](../media/v0.1.1-alpha.1/capture/capture-10-timing.png)

5. For a request with a body, open Request; drag the list/detail separator as needed.

   **Image pending:** this GET did not demonstrate a request-body view or divider dragging. Response and Timing are not substitutes.

**Expected result:** viewing another tab does not resend or modify traffic. Collapsing one section does not collapse all the others.

**Notes**

- A request can appear before its response completes. Streaming sizes and status continue changing.
- A server can return an early response while the client is still uploading.
- Distinguish failed, cancelled and complete exchanges using their actual state, not merely the presence of a row.

<a id="选择正文查看方式"></a>
## Choose a body view

**Steps**

1. Open the JSON Response above.

   ![JSON response body](../media/v0.1.1-alpha.1/capture/capture-06-response.png)

2. Select Tree to inspect field structure.

   ![Tree view of the same JSON](../media/v0.1.1-alpha.1/capture/capture-07-tree.png)

3. Select Raw for the original textual view. Other content may provide Source.

   ![Raw view of this JSON, not Source](../media/v0.1.1-alpha.1/capture/capture-08-raw.png)

   **Image pending:** switching to Source was not recorded.

4. Open the body's fullscreen view.

   ![Body fullscreen opened](../media/v0.1.1-alpha.1/capture/capture-08a-fullscreen.png)

5. Press Escape to return to details.

   ![Details after exiting fullscreen](../media/v0.1.1-alpha.1/capture/capture-08b-close-fullscreen.png)

6. Select Hex for exact bytes.

   ![Hex bytes for the same body](../media/v0.1.1-alpha.1/capture/capture-09-hex.png)

7. Scroll or resize the pane to access overflow.

   **Image pending:** static mode images do not show wheel or divider actions. Long-body and boundary scrolling still need their own steps.

| Content | Typical views |
| --- | --- |
| JSON, NDJSON | Pretty, Tree, Raw, Hex |
| HTML, CSS, JavaScript, XML, SVG | Code, Raw, Hex |
| Plain text | Text, Hex |
| Images | Preview, Hex |
| Markdown | Preview, Split, Source, Hex |
| URL-encoded form | Form, Raw, Hex |
| Binary | Hex; Text when useful |
| Audio or video | Metadata and Save body |

**Expected result:** views present the same body differently. HTML/SVG is not executed as a webpage and changing modes does not resend a request.

**Notes**

- Text, WebSocket and gRPC read-only previews are limited to `2 MiB`. Images have a separate `16 MiB` read/decode budget.
- Complete bodies up to `1 MiB` can format automatically. Complete `1–2 MiB` bodies require Format. Truncated or incomplete captures must not be formatted.
- Format only changes presentation; failures retain source text. A mode without Format is not necessarily unreadable.
- Copy uses the viewer's currently available content, not necessarily an entire large file.
- Save body exports the complete captured body, not just the preview. It cannot recover bytes never received before a network interruption.
- `multipart/form-data` is not currently presented as a structured upload-part list.

<a id="区分原始内容与规则修改结果"></a>
## Distinguish Original and Final

**Purpose:** identify content changed by rules or breakpoint editing.

**Steps**

1. Look for genuine rule-effect markers in the request details.

   **Image pending:** the available rule-result images do not separately demonstrate effect-marker inspection or navigation.

2. If Body version is available, check whether Original or Final is selected. This image comes from the [Rules Body action](rules.md#walkthrough-rules-actions): `Guide body` replaces the response with `{"message":"guide-body"}`. It shows Final, not the earlier orders original.

   ![Final guide-body response from the Rules Body action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

3. Compare available versions and follow the effect marker to inspect its rule if needed.

   **Image pending:** toggling Original/Final and following the effect marker were not recorded. The image above only covers Final.

4. Check the selected version again before copying, saving or entering fullscreen.

   **Image pending:** copying, Save body and fullscreen after a version selection were not recorded. Unmodified-body images do not cover this branch.

**Expected result:** these actions apply to the selected body version rather than silently using another one.

**Notes**

- Empty Original and unavailable Original are different states.
- A response replaced at the header stage may never have exposed its original body. “Unavailable” does not mean an empty response.
- A rule hit alone does not prove that complete original bytes or a diff exist.

<a id="https-与-tls-tunnel"></a>
## HTTPS and TLS tunnels

**Prerequisites:** authorized HTTPS traffic, a usable CA, correct trust and decryption settings.

**Steps**

1. Send HTTPS through the proxy. If it appears only as TLS tunnel, distinguish proxy routing from decryption readiness.

   **Image pending:** this protocol recording shows decrypted traffic, not a separate undecrypted tunnel state.

2. Check existing CA trust in Settings. This is the recording machine's already-trusted CA, not first installation or native authorization.

   ![Existing trusted CA on the recording machine](../media/v0.1.1-alpha.1/capture/capture-18-certificates.png)

3. Enable HTTPS decryption once trust is ready. This recording also added an origin-certificate exception only for its controlled `localhost` demo service; do not copy that as a general Internet configuration.

   ![Adding only the controlled localhost origin exception](../media/v0.1.1-alpha.1/capture/capture-19-local-origin.png)

   ![Enabling HTTPS decryption](../media/v0.1.1-alpha.1/capture/capture-20-decryption.png)

4. Check whether TLS passthrough excludes the destination; follow [Settings](settings.md#tls-passthrough) if a change is required.

   **Image pending:** a passthrough match and configuration-adjustment round trip was not recorded.

5. Establish a new connection and inspect subsequent traffic. This image is the recorded `/playground/h2-json` HTTP/2 request, not the earlier HTTP orders request.

   ![New HTTP/2 request after decryption was enabled](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

6. After the demonstration, disable the decryption enabled for this exercise and remove its `localhost` exception. Preserve the existing CA and others' settings.

   ![Disabling this exercise's HTTPS decryption](../media/v0.1.1-alpha.1/capture/capture-30-decryption-off.png)

   ![Removing this exercise's localhost exception](../media/v0.1.1-alpha.1/capture/capture-31-remove-exception.png)

**Expected result:** an undecrypted tunnel exposes connection metadata, not encrypted HTTP bodies. Only suitable new connections can show decrypted HTTP details.

**Notes**

- Pinning, independent trust stores and explicit passthrough can prevent normal interception.
- Passthrough preserves encryption; it does not conceal an already-decrypted response.
- A confirmed passthrough tunnel can link to its matching setting. Do not weaken certificate checks globally to see content.
- Follow [Settings](settings.md#https-decryption) for actual certificate/native authorization steps and platform limitations.

<a id="http2"></a>
## Inspect HTTP/2 and connection endings

**Prerequisites:** client and origin actually use HTTP/2. HTTPS also needs the relevant decryption conditions.

**Steps**

1. Search for `/playground` to scope the recorded protocol examples.

   ![Actual protocol-example search /playground](../media/v0.1.1-alpha.1/capture/capture-21-protocol-scope.png)

2. Use an HTTP/2 client to request `/playground/h2-json`; select the record and inspect its protocol.

   ![Actual HTTP/2 request, not a protocol inferred from its name](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

3. Select HTTP/2 in Protocol if needed.

   **Image pending:** the recording used search rather than selecting a Protocol filter.

4. Expand the available trailers in Headers.

   ![Expanded HTTP/2 trailers](../media/v0.1.1-alpha.1/capture/capture-23-trailers.png)

5. Open Response to inspect this HTTP/2 JSON.

   ![HTTP/2 JSON body](../media/v0.1.1-alpha.1/capture/capture-24-h2-body.png)

6. For streaming responses, observe received data and final state in the same record instead of treating a visible prefix as complete.

   **Image pending:** long-stream receipt and completion were not recorded step by step. A completed short JSON response is not a substitute.

7. When a connection ends, compare request completion, client-received bytes and whether a new connection can serve another request.

   **Image pending / blocked:** GOAWAY, reset, interruption and reconnection need their own recorded cases; an ordinary HTTP/2 success does not verify them.

**Expected result:** evaluate each request, not every stream collectively from one connection event.

**Notes:** normal GOAWAY may drain accepted streams before a new connection is used; it does not necessarily truncate responses. Distinguish reset, interruption and normal completion. Diagnostics is not a complete HTTP/2 frame analyzer. HAR is not a lossless trailer backup.

<a id="查看-websocket-与-grpc-消息"></a>
## Read WebSocket and gRPC messages

**Steps**

1. Keep Recording enabled, connect to your own `/playground/ws/text` service, select that connection and open Messages.

   ![Recorded WebSocket text connection and Messages](../media/v0.1.1-alpha.1/capture/capture-25-websocket.png)

2. Select the outgoing message and check `hello from client`, direction, type and time.

   ![Client-sent hello from client](../media/v0.1.1-alpha.1/capture/capture-26-message.png)

3. Call `/playground.Capture/UnaryJson` with a gRPC client and request JSON `{"message":"hello"}`; select its record.

   ![Actual gRPC JSON request record](../media/v0.1.1-alpha.1/capture/capture-27-grpc.png)

4. Select the gRPC response message and check `{"message":"world"}`.

   ![gRPC response message world](../media/v0.1.1-alpha.1/capture/capture-28-grpc-response.png)

5. Expand, copy or use fullscreen for long messages.

   **Image pending:** these messages were short; message copying and fullscreen were not separately recorded. HTTP-body fullscreen is not the same operation.

6. Scroll or paginate longer message lists; the visible screen is not the entire session.

   **Image pending:** multiple pages and message-list scroll boundaries were not recorded.

**Expected result:** distinguish client-to-server from server-to-client data and observe new messages.

**Notes**

- Undecrypted WSS or encrypted gRPC can show only tunnels, not fully parsed messages.
- gRPC uses HTTP/2. Protocol and content type are separate dimensions.
- Pause obeys recording boundaries; it does not close the connection. Clear removes records, not necessarily the connection.
- Distinguish half-messages, decoding failure, interrupted connections and preview limits.

<a id="保存记录与正文"></a>
## Save records and bodies

**Steps**

These file-operation images explicitly reuse [Transfer](transfer.md#har). Its request is `http://127.0.0.1:55059/guide/transfer/order`; `55059` is that recording's dynamic port. It is not a renamed version of the orders request above.

1. Open Export.

   ![Actual Export menu in the Transfer recording](../media/v0.1.1-alpha.1/transfer/transfer-01-export-menu.png)

2. Choose HAR. Native Archive retains more Interceptor details; Save body retains one payload. They are different formats for different purposes.

   ![Options after choosing HAR](../media/v0.1.1-alpha.1/transfer/transfer-02-har-options.png)

3. Choose the intended scope. This recording selects the current request; all-record and filtered-record branches remain image pending.

   ![Current-request export scope](../media/v0.1.1-alpha.1/transfer/transfer-03-scope.png)

4. Review body and privacy options.

   ![Actual HAR privacy options](../media/v0.1.1-alpha.1/transfer/transfer-04-privacy.png)

5. Save as `guide-recording.har` in the real native dialog.

   ![macOS Save panel for guide-recording.har](../media/v0.1.1-alpha.1/transfer/transfer-05-har-save-dialog.png)

6. Wait for completion before Clear or quitting. See the [format-specific chapter](transfer.md#archive) for archive and body steps.

   ![Actual completion checkpoint for this HAR](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

**Expected result:** retain a deliberate output file rather than just a screenshot or truncated clipboard text.

**Notes**

- HAR cannot losslessly preserve HTTP/2 pseudo-headers, trailers, WebSocket messages, TLS details or rule history.
- HAR masking covers selected Authorization/Cookie fields, not arbitrary query parameters, business fields or every header.
- Native archives retain sensitive original data; they do not inherit HAR masking or replace Rules configuration backups.
- Export is a snapshot. Do not assume later traffic appears in an already-started export.
- Use trusted inputs and follow [Import and export](transfer.md) for full procedures.

<a id="清空记录"></a>
## Clear captured records

**Steps**

1. Export anything you need to retain.

   This reuses Transfer's `guide-recording.har` completion checkpoint; other recordings are not automatically saved.

   ![Confirming the required HAR was saved](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

2. Wait for body/HAR/archive tasks and any cancellation cleanup.

   **Image pending:** no active/cancelling file task was recorded; a completed task does not show waiting during cleanup.

3. Clear the unneeded demonstration records, complete any product confirmation and inspect list, selection and counts. This image returns to the `capture` recording's actual Clear operation.

   ![Actual Capture list after clearing demo records](../media/v0.1.1-alpha.1/capture/capture-17-clear.png)

4. Send a new request and check the intended Recording state.

   **Image pending:** the recorded “new request after resuming” preceded Clear. It cannot demonstrate a post-Clear check.

**Expected result:** old records disappear without late events restoring them. If Recording is still enabled, newly started requests can appear.

**Notes**

- Clear is neither Pause nor Stop forwarding.
- Active file operations can reject Clear. Do not work around that by deleting storage directories.
- Filter reset, Capture Clear, proxy restoration and App shutdown are distinct actions.

<a id="从流量进入阻断与断点"></a>
## Create controls from captured traffic

This is `capture-shortcuts`, using `http://127.0.0.1:52315/guide/shortcuts/order`. `52315` is a recording-only dynamic port, not an App constant. Block and Breakpoint have different save behavior; keep the two flows separate.

1. Select the captured example request. Selecting history does not resend it.

   ![Selecting the actual captured source request](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-01-source.png)

2. Open its context menu.

   ![Actual Capture context menu](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-02-context.png)

3. Choose Block under Control and inspect the disabled draft.

   ![Block shortcut creates a disabled draft](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-03-block-draft.png)

4. Name the draft `Guide quick block`.

   ![Actually naming Guide quick block](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-04-name.png)

5. Enable the rule.

   ![Enabling Block still requires Apply](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-05-enable.png)

6. Apply and wait for it to take effect.

   ![Actually applying the Block draft](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-06-apply.png)

7. Request the same test address again with the external client and check that the new request is blocked.

   ![Actual block result for a new request](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-07-blocked.png)

8. Disable `Guide quick block` so it does not interfere with the breakpoint exercise.

   ![Disabling this shortcut-created Block](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-08-disable.png)

9. Apply the disabled state.

   ![Saving the disabled Block state](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-09-disable-apply.png)

10. Return to the example request's context menu and open the Breakpoint submenu.

    ![Actual Breakpoint submenu](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-10-breakpoint-menu.png)

11. Select Endpoint. This derives conditions and **creates both request- and response-phase breakpoints, enabled and applied immediately**. Do not repeat the ordinary draft's enable/Apply sequence.

    ![Actually selecting Endpoint and applying immediately](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-11-endpoint.png)

12. Send a new matching request and inspect its first, request-phase wait.

    ![New request actually paused in request phase](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-12-paused.png)

13. Continue request phase unchanged. Response phase will pause separately afterward; one click does not finish the entire exchange.

    ![Continuing request phase before handling the response wait](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-13-continue-request.png)

14. Check that the current phase is response, continue it unchanged and inspect client completion.

    ![Second continuation for the actual response phase](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-14-continue-response.png)

15. After the exercise, inspect and disable the shortcut-created breakpoint matching.

    **Image pending:** this clip ends after both continuations, without disabling those breakpoint rules. Resolving waits is not disabling matching. Other scopes and left/right menu placement remain unrecorded.

**Expected result:** Block affects future traffic only after enable and Apply. This Endpoint breakpoint applies immediately, and the same new request needs separate request- and response-phase decisions.

**Notes:** menus can open left when space is limited. Escape/outside click dismisses the menu but does not disable an applied rule. Follow [Breakpoints](breakpoints.md) to manage matching and existing waits separately.

Next: [Composer](composer.md).

<!-- recorded-walkthrough:capture-filters:start -->
<a id="walkthrough-capture-filters"></a>
## Recorded walkthrough: OR, AND and search without clearing records

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
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

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4" poster="../media/v0.1.1-alpha.1/capture-filters/capture-filters-01-records.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-filters/capture-filters.vtt" default>
</video>

<a id="walkthrough-capture-filters-01-records"></a>
### 01 · Inspect four example requests

[Video 00:00](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=0.199) · [Back to the video](#walkthrough-capture-filters-video)

![01 · Inspect four example requests](../media/v0.1.1-alpha.1/capture-filters/capture-filters-01-records.png)

<a id="walkthrough-capture-filters-02-methods"></a>
### 02 · Expand Method

[Video 00:03](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=3.015) · [Back to the video](#walkthrough-capture-filters-video)

![02 · Expand Method](../media/v0.1.1-alpha.1/capture-filters/capture-filters-02-methods.png)

<a id="walkthrough-capture-filters-03-get"></a>
### 03 · Select GET

[Video 00:05](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=5.903) · [Back to the video](#walkthrough-capture-filters-video)

![03 · Select GET](../media/v0.1.1-alpha.1/capture-filters/capture-filters-03-get.png)

<a id="walkthrough-capture-filters-04-get-post"></a>
### 04 · Also select POST in the same group

[Video 00:08](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=8.805) · [Back to the video](#walkthrough-capture-filters-video)

![04 · Also select POST in the same group](../media/v0.1.1-alpha.1/capture-filters/capture-filters-04-get-post.png)

<a id="walkthrough-capture-filters-05-status"></a>
### 05 · Expand Status

[Video 00:11](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=11.703) · [Back to the video](#walkthrough-capture-filters-video)

![05 · Expand Status](../media/v0.1.1-alpha.1/capture-filters/capture-filters-05-status.png)

<a id="walkthrough-capture-filters-06-and-status"></a>
### 06 · Select 200 for an AND across groups

[Video 00:14](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=14.559) · [Back to the video](#walkthrough-capture-filters-video)

![06 · Select 200 for an AND across groups](../media/v0.1.1-alpha.1/capture-filters/capture-filters-06-and-status.png)

<a id="walkthrough-capture-filters-07-search"></a>
### 07 · Add a post-ok search

[Video 00:17](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=17.454) · [Back to the video](#walkthrough-capture-filters-video)

![07 · Add a post-ok search](../media/v0.1.1-alpha.1/capture-filters/capture-filters-07-search.png)

<a id="walkthrough-capture-filters-08-search-back"></a>
### 08 · Restore the example search scope

[Video 00:20](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=20.253) · [Back to the video](#walkthrough-capture-filters-video)

![08 · Restore the example search scope](../media/v0.1.1-alpha.1/capture-filters/capture-filters-08-search-back.png)

<a id="walkthrough-capture-filters-09-remove-status"></a>
### 09 · Remove Status selection

[Video 00:23](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=23.104) · [Back to the video](#walkthrough-capture-filters-video)

![09 · Remove Status selection](../media/v0.1.1-alpha.1/capture-filters/capture-filters-09-remove-status.png)

<a id="walkthrough-capture-filters-10-remove-post"></a>
### 10 · Remove POST selection

[Video 00:25](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=25.954) · [Back to the video](#walkthrough-capture-filters-video)

![10 · Remove POST selection](../media/v0.1.1-alpha.1/capture-filters/capture-filters-10-remove-post.png)

<a id="walkthrough-capture-filters-11-remove-get"></a>
### 11 · Remove GET without deleting records

[Video 00:28](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=28.809) · [Back to the video](#walkthrough-capture-filters-video)

![11 · Remove GET without deleting records](../media/v0.1.1-alpha.1/capture-filters/capture-filters-11-remove-get.png)

<a id="walkthrough-capture-filters-12-collapse"></a>
### 12 · Collapse only the group

[Video 00:31](../media/v0.1.1-alpha.1/capture-filters/capture-filters.mp4#t=31.657) · [Back to the video](#walkthrough-capture-filters-video)

![12 · Collapse only the group](../media/v0.1.1-alpha.1/capture-filters/capture-filters-12-collapse.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:capture-filters:end -->

<!-- recorded-walkthrough:capture-shortcuts:start -->
<a id="walkthrough-capture-shortcuts"></a>
## Recorded walkthrough: Capture Block and two-phase breakpoint shortcuts

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:52315/guide/shortcuts/order</code> |
| <code>blockName</code> | <code>Guide quick block</code> |
| <code>breakpointScope</code> | <code>endpoint</code> |
| <code>blockBehavior</code> | <code>disabled draft; enable and Apply required</code> |
| <code>breakpointBehavior</code> | <code>created, enabled and applied immediately for request and response phases</code> |

<a id="walkthrough-capture-shortcuts-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4" poster="../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-01-source.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.vtt" default>
</video>

<a id="walkthrough-capture-shortcuts-01-source"></a>
### 01 · Select the captured source request

[Video 00:00](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=0.333) · [Back to the video](#walkthrough-capture-shortcuts-video)

![01 · Select the captured source request](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-01-source.png)

<a id="walkthrough-capture-shortcuts-02-context"></a>
### 02 · Open the context menu

[Video 00:03](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=3.345) · [Back to the video](#walkthrough-capture-shortcuts-video)

![02 · Open the context menu](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-02-context.png)

<a id="walkthrough-capture-shortcuts-03-block-draft"></a>
### 03 · Block creates a disabled draft

[Video 00:06](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=6.295) · [Back to the video](#walkthrough-capture-shortcuts-video)

![03 · Block creates a disabled draft](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-03-block-draft.png)

<a id="walkthrough-capture-shortcuts-04-name"></a>
### 04 · Name the Block draft

[Video 00:09](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=9.252) · [Back to the video](#walkthrough-capture-shortcuts-video)

![04 · Name the Block draft](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-04-name.png)

<a id="walkthrough-capture-shortcuts-05-enable"></a>
### 05 · Enable Block

[Video 00:12](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=12.095) · [Back to the video](#walkthrough-capture-shortcuts-video)

![05 · Enable Block](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-05-enable.png)

<a id="walkthrough-capture-shortcuts-06-apply"></a>
### 06 · Apply before taking effect

[Video 00:14](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=14.945) · [Back to the video](#walkthrough-capture-shortcuts-video)

![06 · Apply before taking effect](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-06-apply.png)

<a id="walkthrough-capture-shortcuts-07-blocked"></a>
### 07 · Verify a new request is blocked

[Video 00:17](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=17.804) · [Back to the video](#walkthrough-capture-shortcuts-video)

![07 · Verify a new request is blocked](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-07-blocked.png)

<a id="walkthrough-capture-shortcuts-08-disable"></a>
### 08 · Disable this Block Rule

[Video 00:20](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=20.795) · [Back to the video](#walkthrough-capture-shortcuts-video)

![08 · Disable this Block Rule](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-08-disable.png)

<a id="walkthrough-capture-shortcuts-09-disable-apply"></a>
### 09 · Apply the disabled state

[Video 00:23](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=23.745) · [Back to the video](#walkthrough-capture-shortcuts-video)

![09 · Apply the disabled state](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-09-disable-apply.png)

<a id="walkthrough-capture-shortcuts-10-breakpoint-menu"></a>
### 10 · Open the actual Breakpoint submenu

[Video 00:26](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=26.645) · [Back to the video](#walkthrough-capture-shortcuts-video)

![10 · Open the actual Breakpoint submenu](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-10-breakpoint-menu.png)

<a id="walkthrough-capture-shortcuts-11-endpoint"></a>
### 11 · Select Endpoint and apply immediately

[Video 00:30](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=30.094) · [Back to the video](#walkthrough-capture-shortcuts-video)

![11 · Select Endpoint and apply immediately](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-11-endpoint.png)

<a id="walkthrough-capture-shortcuts-12-paused"></a>
### 12 · Send again and inspect the wait

[Video 00:33](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=33.095) · [Back to the video](#walkthrough-capture-shortcuts-video)

![12 · Send again and inspect the wait](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-12-paused.png)

<a id="walkthrough-capture-shortcuts-13-continue-request"></a>
### 13 · Continue the request phase

[Video 00:36](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=36.145) · [Back to the video](#walkthrough-capture-shortcuts-video)

![13 · Continue the request phase](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-13-continue-request.png)

<a id="walkthrough-capture-shortcuts-14-continue-response"></a>
### 14 · Continue the response phase separately

[Video 00:39](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts.mp4#t=39.249) · [Back to the video](#walkthrough-capture-shortcuts-video)

![14 · Continue the response phase separately](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-14-continue-response.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:capture-shortcuts:end -->
