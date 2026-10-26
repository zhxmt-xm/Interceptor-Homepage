# Capture：找到并读懂流量

[教程目录](../README.md) · [快速上手](getting-started.md)

## 开始与暂停录制

记录经过代理的请求。先按快速上手完成代理就绪，再在外部客户端产生有权检查的流量。

1. <a id="walkthrough-02-record"></a>打开 Capture，点击红框 1 的录制开关，确认显示 Recording。本段用 `/e2e/recording-boundary` 下的 HTTP 请求和 WebSocket 连接比较录制状态；接口主机和端口请使用自己的服务，并按[路径搜索](#walkthrough-01-filter)限定显示范围。

   ![Recording已开启](../media/v0.1.1-alpha.1/capture-recording-english/step-002.annotated.png)

2. <a id="walkthrough-03-request"></a>通过代理发送 `GET /e2e/recording-boundary/http-before`。示例还连接了 `/e2e/recording-boundary/ws-before`，并发送 `recorded-before-pause`。选中这条 WebSocket，打开红框 1 的 Messages，可看到发送与回显消息；左侧也保留着 HTTP 的 `200` 记录。这些流量来自外部客户端，不是 Composer Send。

   ![捕获HTTP请求与WebSocket消息](../media/v0.1.1-alpha.1/capture-recording-english/step-003.annotated.png)

3. <a id="walkthrough-11-pause"></a>点击红框 1 的录制开关，暂停记录新请求。按钮变为 Paused，但代理仍继续转发。

   ![录制开关显示Paused](../media/v0.1.1-alpha.1/capture-recording-english/step-004.annotated.png)

4. <a id="walkthrough-12-paused-request"></a>暂停期间发送 `GET /e2e/recording-boundary/http-paused`，比较客户端仍收到响应与筛选列表没有新增该记录。向原 WebSocket 发送 `recorded-during-pause` 时，原连接的消息仍继续记录。红框 1 保持 Paused，列表仍是暂停前的两条记录。

   ![暂停不阻断转发，已录制连接继续记录消息](../media/v0.1.1-alpha.1/capture-recording-english/step-005.annotated.png)

5. <a id="walkthrough-13-resume"></a>再次点击红框 1 的开关，恢复 Recording。

   ![恢复Recording](../media/v0.1.1-alpha.1/capture-recording-english/step-006.annotated.png)

6. <a id="walkthrough-14-new-request"></a>再发送 `GET /e2e/recording-boundary/http-after`，并新建 `/e2e/recording-boundary/ws-after` 连接。选中红框 1 的新连接，查看 `recorded-after-resume` 的发送和回显消息；新 HTTP 与 WebSocket 都进入列表，不是补录暂停期间的请求。

   ![恢复后捕获新请求和新连接](../media/v0.1.1-alpha.1/capture-recording-english/step-007.annotated.png)

- 暂停不停止代理转发，也不恢复系统代理。
- 已开始的请求会继续收尾，暂停不等于截断响应。
- WebSocket 以连接握手时的录制状态为准：暂停前已录制的连接仍记录后续消息；暂停期间建立的连接，不会在恢复后从中间开始补录。需要重新捕获时由客户端重新连接。

## 搜索和组合筛选

从大量流量中找到目标请求，而不删除原始记录。

1. <a id="walkthrough"></a><a id="walkthrough-01-filter"></a>在红框 1 的搜索框输入 `/e2e/recording-boundary`，只查看上面录制状态示例的请求。

   ![按自产路径限定Capture列表](../media/v0.1.1-alpha.1/capture-recording-english/step-001.annotated.png)

2. <a id="walkthrough-15-keyword"></a>检查下面的 JSON 示例时，把红框 1 的搜索词改为 `/playground/body/json`。搜索只限定显示范围，不会发送请求。

   ![按JSON示例路径搜索](../media/v0.1.1-alpha.1/capture-json-example-english/step-001.annotated.png)

3. <a id="walkthrough-capture-filters"></a><a id="walkthrough-capture-filters-01-records"></a>下面改用已经捕获的五条 `/e2e/facets/` 记录：GET三条、POST两条，状态200四条、503一条。先保留全部记录，不要点击红框 1 的 Clear；它是删除记录的入口，不是解除筛选。

   ![五条记录齐备后开始组合筛选](../media/v0.1.1-alpha.1/capture-filters-english/step-010.annotated.png)

4. <a id="walkthrough-capture-filters-02-methods"></a><a id="walkthrough-capture-filters-03-get"></a>点击 Method 标题展开分组，再选择红框 1 的 GET。本例显示3 of 5。

   ![展开Method并只选择GET](../media/v0.1.1-alpha.1/capture-filters-english/step-011.annotated.png)

5. <a id="walkthrough-capture-filters-04-get-post"></a>同组再选择红框 1 的 POST。GET与POST按OR组合，恢复5 of 5。

   ![同组选择GET或POST](../media/v0.1.1-alpha.1/capture-filters-english/step-012.annotated.png)

6. <a id="walkthrough-capture-filters-05-status"></a><a id="walkthrough-capture-filters-06-and-status"></a>展开 Status，保留 Method 的两项选择，再选择红框 1 的200。跨组按AND组合，显示4 of 5，503那条被隐藏但没有删除。

   ![Method与Status跨组取交集](../media/v0.1.1-alpha.1/capture-filters-english/step-013.annotated.png)

7. <a id="walkthrough-capture-filters-07-search"></a>在红框 1 的搜索框输入 `/e2e/facets/post`。路径条件再与分组相交，只显示两条POST。

   ![叠加路径搜索后显示两条POST](../media/v0.1.1-alpha.1/capture-filters-english/step-014.annotated.png)

8. <a id="walkthrough-capture-filters-08-search-back"></a>只想扩大路径范围时，可将红框 1 中的值改回 `/e2e/facets/`，保留 Method 和 Status 条件。图中是修改前的 `/e2e/facets/post`，不是修改后的结果。

   ![在现有搜索框中修改路径范围](../media/v0.1.1-alpha.1/capture-filters-english/step-014.annotated.png)

9. <a id="walkthrough-capture-filters-13-clear-search"></a>不再需要搜索词时，点击搜索框内的 ×。红框 1 标出清空后的搜索框：Method仍选GET+POST，Status仍选200，因此显示4 of 5，不是清空全部筛选或清空记录。

   ![清空搜索但保留Method和Status条件](../media/v0.1.1-alpha.1/capture-filters-english/step-015.annotated.png)

10. <a id="walkthrough-capture-filters-09-remove-status"></a>再次点击红框 1 的200，取消Status限制。503记录重新可见，恢复5 of 5。

    ![取消Status条件后五条记录均可见](../media/v0.1.1-alpha.1/capture-filters-english/step-016.annotated.png)

11. <a id="walkthrough-capture-filters-10-remove-post"></a>取消红框 1 的POST，只保留GET，列表变为3 of 5。

    ![取消POST但保留GET](../media/v0.1.1-alpha.1/capture-filters-english/step-017.annotated.png)

12. <a id="walkthrough-capture-filters-11-remove-get"></a>再取消红框 1 的GET。Method恢复All，原有五条记录全部可见。

    ![取消最后一个Method条件](../media/v0.1.1-alpha.1/capture-filters-english/step-018.annotated.png)

13. <a id="walkthrough-capture-filters-12-collapse"></a>只想折叠分组时，点击 Method 标题或其左侧箭头，再点可展开。图中保留展开状态方便定位；红框 1 是已取消的GET值，不是折叠控件，点击它会重新筛选。

    ![区分Method标题与GET筛选项](../media/v0.1.1-alpha.1/capture-filters-english/step-018.annotated.png)

14. 查看 Pending 时，先展开 Application。红框 1 的Pending表示应用归属仍待确定；空列表中计数为0。以下几图展示上述请求到达期间的不同状态，不是筛选操作删除了记录。

    ![空列表中Application Pending的入口](../media/v0.1.1-alpha.1/capture-filters-english/step-001.annotated.png)

15. 在已有两条记录、归属均为Unknown时，选择红框 1 的Application Pending会显示0 of 2。Unknown与Pending不是同一个状态。

    ![选择Application Pending后没有匹配行](../media/v0.1.1-alpha.1/capture-filters-english/step-004.annotated.png)

16. 再次点击红框 1 的Application Pending取消条件，原来的两条记录恢复可见。

    ![取消Application Pending恢复原记录](../media/v0.1.1-alpha.1/capture-filters-english/step-005.annotated.png)

17. 有请求仍在等待响应时，在 Status 选择红框 1 的Pending。本图只保留尚未完成的 `/e2e/facets/pending`，显示1 of 4。

    ![按Status Pending找到等待响应的请求](../media/v0.1.1-alpha.1/capture-filters-english/step-007.annotated.png)

18. 取消Status Pending后，在Content type选择红框 1 的Pending，查找尚未确定内容类型的请求。本例仍是同一条等待中的GET。

    ![按Content type Pending查看尚未确定的类型](../media/v0.1.1-alpha.1/capture-filters-english/step-008.annotated.png)

19. 响应结束后取消Pending限制，核对红框 1 的200计数变为4，Pending归零。稍后新增503记录才形成前面用于组合筛选的五条记录。

    ![响应完成后Pending转为确定状态](../media/v0.1.1-alpha.1/capture-filters-english/step-009.annotated.png)

20. <a id="walkthrough-capture-facets"></a><a id="walkthrough-capture-facets-01-application"></a><a id="walkthrough-capture-facets-02-unknown"></a>需要按应用归属筛选时，展开Application并选择所需值。下面是五条记录的选择前状态，Unknown计数为5；选择Unknown只表示没有识别出具体应用，不能据此推断进程名称。

    ![Application展开后可选择Unknown](../media/v0.1.1-alpha.1/capture-filters-english/step-010.png)

21. <a id="walkthrough-capture-facets-03-host-group"></a><a id="walkthrough-capture-facets-04-host-select"></a>按主机缩小范围时，展开Host并选择目标。这个独立GET示例的主机为 `127.0.0.1`；图中是展开Host前的核对状态，Headers显示完整URL `http://127.0.0.1:53548/e2e/capture/clear-facets`，端口在详情中确认。

    ![在Headers核对主机后选择Host分组](../media/v0.1.1-alpha.1/capture-clear-state-english/step-002.png)

22. <a id="walkthrough-capture-facets-05-protocol-group"></a><a id="walkthrough-capture-facets-06-protocol-select"></a>按协议筛选时，展开Protocol，选择红框 1 的HTTP/2；下图是独立H2示例的选中状态。再次点击可取消，完整操作见[HTTP/2](#http2)。

    ![Protocol中选择HTTP2的实际状态](../media/v0.1.1-alpha.1/capture-http2-english/step-003.annotated.png)

23. <a id="walkthrough-capture-facets-07-type-group"></a><a id="walkthrough-capture-facets-08-json"></a><a id="walkthrough-capture-facets-11-remove-type"></a>需要按内容类型筛选时，展开Content type，选择json；再次点击已选的json可单独取消这个维度，不取消其他已选分组。下图是五条记录中选择前的All状态，json计数为5。类型分组不等于逐条验证正文都是合法JSON。

    ![查看Content type中的json选项](../media/v0.1.1-alpha.1/capture-filters-english/step-010.png)

24. <a id="walkthrough-capture-facets-09-rule-group"></a><a id="walkthrough-capture-facets-10-rule-select"></a>按规则命中筛选时，展开Rule并选择目标规则。这个独立示例选中了 `E2E hierarchy rule`；红框 1 是搜索词 `/e2e/rules/hierarchy-status`，红框 2 是符合条件的GET，当前1 of 2。

    ![Rule筛选与路径搜索共同找到命中记录](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-027.annotated.png)

    <a id="walkthrough-capture-facets-15-rules"></a><a id="walkthrough-capture-facets-16-disable"></a><a id="walkthrough-capture-facets-17-apply-disabled"></a>检查结束后进入Rules，找到本次练习规则，关闭其开关并Save。选择或取消Rule筛选只改变列表显示，不会启用或停用规则；保存步骤见 [Rules](rules.md)。

25. <a id="walkthrough-capture-facets-12-clear-facets"></a>想一次取消分组选项时，点击搜索框外侧红框 1 的Clear all filters。这里另用单条 `/e2e/capture/clear-facets` GET演示，Method的GET当前已选中；不是要删除该记录。

    ![清除分组筛选前的Clear all filters按钮](../media/v0.1.1-alpha.1/capture-clear-state-english/step-003.annotated.png)

26. 检查分组恢复All，原记录和右侧Inspector仍保留。红框 1 是清除分组选项后的Clear all filters按钮，列表仍为1 of 1。

    ![清除筛选后保留记录和Inspector](../media/v0.1.1-alpha.1/capture-clear-state-english/step-004.annotated.png)

27. <a id="walkthrough-capture-facets-13-hide-filters"></a><a id="walkthrough-capture-facets-14-show-filters"></a>只想临时隐藏筛选侧栏时，点击Recording左侧的面板图标，再点一次显示。图中是侧栏展开时的位置；隐藏侧栏不会删除记录或关闭已选请求的Inspector。

    ![筛选侧栏展开时的面板开关位置](../media/v0.1.1-alpha.1/capture-clear-state-english/step-002.png)

28. 只有确定不要记录时才点击Recording右侧的Capture Clear。图中红框 1 是清空后已禁用的Clear按钮；列表、详情和记录计数一起清空，不能用这项操作代替解除筛选。

    ![Capture Clear清空记录而不是只清筛选](../media/v0.1.1-alpha.1/capture-clear-state-english/step-005.annotated.png)

搜索匹配Host与Path，不包含端口。本章TLS示例可输入 `localhost`，再在详情核对端口；`localhost:56104` 不是同等搜索。上面的分组示例在系统代理Restore后显示Paused；Restore恢复的是系统代理，不能仅凭这个标签判断显式代理客户端是否还在产生新记录。

- 搜索匹配 Host 和 Path，不是全文检索正文或请求头。
- 分组计数来自当前录制的完整记录，不应直接当成当前筛选结果的行数。
- Pending 是正在等待相关信息的状态，不自动代表请求失败。
- 选择筛选项不应折叠该分组；点击标题才改变展开状态。
- 清除筛选与 Clear 记录是两件事。不要用 Clear 来解除筛选。
- 应用归属识别与平台有关，不能把 Windows 的应用识别结果当作所有平台的保证。

## 检查请求详情

1. <a id="walkthrough-04-select"></a>本段用 `POST http://127.0.0.1:55115/playground/body/json` 举例，请替换成自己的服务地址。让外部客户端经代理发送 `Content-Type: application/json`、正文 `{"ready":true}`。第一张图红框 1 是进入列表的 `200` 记录；点击它后，第二张图红框 1 显示选中状态，右侧出现 URL、方法、协议和状态概要。

   ![同一POST进入Capture列表](../media/v0.1.1-alpha.1/capture-json-example-english/step-002.annotated.png)

   ![选中同一POST检查概要](../media/v0.1.1-alpha.1/capture-json-example-english/step-003.annotated.png)

2. <a id="walkthrough-05-headers"></a>打开红框 1 的 Headers，查看同一请求的请求头与响应头。此例两侧使用 `application/json`，响应 Content-Length 为 `30`。

   ![同一JSON请求的Headers](../media/v0.1.1-alpha.1/capture-json-example-english/step-004.annotated.png)

3. <a id="walkthrough-06-response"></a>打开 Response，选择红框 1 的 Raw，读取 `{"ready":true,"items":[1,2,3]}`。这是该 POST 的响应，不是请求正文。

   ![同一POST的JSON响应](../media/v0.1.1-alpha.1/capture-json-example-english/step-006.annotated.png)

4. <a id="walkthrough-capture-inspection-06-headers"></a>需要比较详情分组时，另选 `GET http://127.0.0.1:56349/e2e/capture/section-collapse` 并打开 Headers；端口请替换成自己的服务端口。红框 1 的 General 已展开，下面的 Response Headers 也展开。这条记录为 `H1`、`200`，不是前面的 JSON POST。

   ![独立 GET 的 General 与 Response Headers 同时展开](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-001.annotated.png)

5. <a id="walkthrough-capture-inspection-07-collapse"></a>点击红框 1 的 General 标题将其收起。Response Headers 仍展开，不会随 General 一起折叠。

   ![只折叠 General，保留响应头](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-003.annotated.png)

6. <a id="walkthrough-capture-response-headers-collapse"></a>再点击红框 1 的 Response Headers 标题收起响应头。此时 General 和 Response Headers 均折叠，Request Headers 仍可查看。

   ![独立折叠 Response Headers](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-004.annotated.png)

7. <a id="walkthrough-capture-inspection-08-expand"></a>点击红框 1 重新展开 General。Response Headers 仍保持折叠；每个标题只控制自己的分组。

   ![重新展开 General，不改变响应头分组](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-005.annotated.png)

8. <a id="walkthrough-10-timing"></a>在这条 GET 中打开红框 1 的 Timing。本例 Waiting (TTFB) 为 `12 ms`，Response bodies 为 `4 ms`，Total 为 `16 ms`；请求正文为 `0 B`，响应正文为 `103 B`。这些是当前记录的数值，不是固定性能指标。

   ![检查同一 GET 的 Timing](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-006.annotated.png)

9. <a id="walkthrough-capture-inspection"></a><a id="walkthrough-capture-inspection-01-filter"></a><a id="walkthrough-capture-inspection-02-record"></a><a id="walkthrough-capture-inspection-03-post"></a><a id="walkthrough-capture-inspection-04-pause"></a><a id="walkthrough-capture-inspection-05-select"></a><a id="walkthrough-capture-inspection-09-request"></a>查看请求正文时，重新选中前面的 `POST /playground/body/json`，打开 Request，再选择红框 1 的 Raw。此例请求正文为 `{"ready":true}`，共 `14` 字节，Query 参数为空。

   ![同一POST的Request Raw正文](../media/v0.1.1-alpha.1/capture-json-example-english/step-005.annotated.png)

10. <a id="walkthrough-capture-inspection-10-raw"></a>返回 Response 后也可在红框 1 选择 Raw。比较请求的 `{"ready":true}` 与响应的 `{"ready":true,"items":[1,2,3]}`，不要把两侧正文混为一份。

    ![区分请求与响应Raw正文](../media/v0.1.1-alpha.1/capture-json-example-english/step-011.annotated.png)

11. <a id="walkthrough-capture-query"></a>URL 查询参数与请求正文分开查看。下面改用 `GET /e2e/capture/section-collapse/query`，查询字符串为 `orderId=ord_42&tag=books&tag=featured&message=hello%20capture`。打开 Request，在红框 1 的 Query String Parameters 下查看四项参数：两个 `tag` 都被保留，`message` 显示为 `hello capture`。

    ![检查重复Query参数与空格解码](../media/v0.1.1-alpha.1/capture-query-layout-english/step-007.annotated.png)

12. <a id="walkthrough-capture-query-collapse"></a>点击红框 1 的 Query String Parameters 标题折叠分组。只是收起显示，不会删除 URL 参数或请求。

    ![折叠Query分组](../media/v0.1.1-alpha.1/capture-query-layout-english/step-008.annotated.png)

13. <a id="walkthrough-capture-query-expand"></a>再次点击红框 1，展开同一分组，核对参数及两个 `tag` 的值仍在。

    ![重新展开同一请求的Query](../media/v0.1.1-alpha.1/capture-query-layout-english/step-009.annotated.png)

14. <a id="walkthrough-capture-inspection-11-widen"></a>在同一条 Query 请求中，向左拖动红框 1 的列表与 Inspector 分隔轨道。这里移动 `120px`，详情区域变宽，参数内容不变。

    ![向左拖动分栏扩大Inspector](../media/v0.1.1-alpha.1/capture-query-layout-english/step-010.annotated.png)

15. <a id="walkthrough-capture-inspection-27-restore-width"></a>把红框 1 的分隔轨道拖回原位，恢复初始宽度；仍然是同一条 Query 请求。

    ![恢复Inspector宽度并保留Query](../media/v0.1.1-alpha.1/capture-query-layout-english/step-011.annotated.png)

- 请求可能在响应尚未结束时已经出现在列表中。流式请求的大小和状态会继续更新。
- 服务器先返回响应、客户端稍后发送完正文，也是可能出现的真实情况。
- 失败、取消和正常完成要依据实际记录区分，不用“有响应行”代替完整性判断。

## 选择正文查看方式

不同模式呈现同一份正文，不会把 HTML 或 SVG 当成可执行页面，也不会因为切换模式重新发请求。

1. 继续查看同一个 `POST /playground/body/json`。红框 1 的 Response 显示该请求的 JSON 返回值。

   ![同一JSON请求的Response状态](../media/v0.1.1-alpha.1/capture-json-example-english/step-016.annotated.png)

2. <a id="walkthrough-07-tree"></a>选择第一张图红框 1 的 Tree，查看 `ready` 与 `items` 数组层级。点击第二张图红框 1 的根节点折叠控件，再点击第三张图红框 1 重新展开；内容没有被删除。第四张图红框 1 的 Copy 复制同一份 JSON 原文。

   ![选择Tree查看JSON层级](../media/v0.1.1-alpha.1/capture-json-example-english/step-007.annotated.png)

   ![折叠JSON根节点](../media/v0.1.1-alpha.1/capture-json-example-english/step-008.annotated.png)

   ![重新展开JSON根节点](../media/v0.1.1-alpha.1/capture-json-example-english/step-009.annotated.png)

   ![在Tree中复制同一份JSON](../media/v0.1.1-alpha.1/capture-json-example-english/step-010.annotated.png)

3. <a id="walkthrough-08-raw"></a><a id="walkthrough-capture-inspection-16-copy-request"></a>切换红框 1 的 Raw 查看同一 JSON 的文本原貌。Markdown 使用单独的 Preview、Split 和 Source，见下方[Markdown 示例](#walkthrough-capture-markdown-viewer)。

   ![同一JSON从Tree返回Raw](../media/v0.1.1-alpha.1/capture-json-example-english/step-011.annotated.png)

4. <a id="walkthrough-fullscreen-response"></a>下面继续用 `POST /playground/body/json` 的同一份响应演示字节和全屏。红框 1 的 Response 仍显示 `{"ready":true,"items":[1,2,3]}`。

   ![保持同一JSON响应](../media/v0.1.1-alpha.1/capture-json-example-english/step-016.annotated.png)

5. <a id="walkthrough-fullscreen-raw"></a>点击红框 1 的 Raw，先查看同一响应的原文。

   ![全屏之前选择Raw](../media/v0.1.1-alpha.1/capture-json-example-english/step-011.annotated.png)

6. <a id="walkthrough-09-hex"></a>选择红框 1 的 Hex，检查同一 JSON 的字节；开头的 `7b 22` 对应 `{"`。切换视图不会重发请求。

   ![同一JSON切换Hex](../media/v0.1.1-alpha.1/capture-json-example-english/step-012.annotated.png)

7. <a id="walkthrough-08a-fullscreen"></a>点击正文工具栏右端的 Fullscreen。红框 1 的 Hex 在全屏中保持选中，仍是同一条 POST 的响应。

   ![同一JSON以Hex打开全屏](../media/v0.1.1-alpha.1/capture-json-example-english/step-013.annotated.png)

8. <a id="walkthrough-fullscreen-copy"></a>在全屏中切回 Raw，再点击标题栏红框 1 的 Copy，复制 `{"ready":true,"items":[1,2,3]}` 原文，而不是 Hex 显示文本。

   ![全屏复制同一JSON原文](../media/v0.1.1-alpha.1/capture-json-example-english/step-014.annotated.png)

9. <a id="walkthrough-08b-close-fullscreen"></a>点击弹窗内 Raw 模式按钮，让焦点离开 Copy 提示后按 Escape。返回详情时，红框 1 的 Raw 仍被选中，JSON 内容不变。

   ![Escape返回同一JSON的Raw视图](../media/v0.1.1-alpha.1/capture-json-example-english/step-015.annotated.png)

10. <a id="walkthrough-fullscreen-close"></a>也可点击全屏标题栏的 Close（×）返回详情。下面的独立 `POST /e2e/fullscreen-json` 示例使用这一方式；红框 1 的 Raw 保持选中，响应为 `{"source":"fullscreen-response","values":[1,2,3]}`。

    ![使用Close返回详情并保留Raw](../media/v0.1.1-alpha.1/capture-fullscreen-english/step-016.annotated.png)

11. <a id="walkthrough-fullscreen-copy-again"></a>在这个独立的 `/e2e/fullscreen-json` 示例中，切回 Raw 再点击红框 1 的 Copy，复制的仍是 `{"source":"fullscreen-response","values":[1,2,3]}`，不是 Hex 显示文本。

    ![返回Raw后复制同一份原文](../media/v0.1.1-alpha.1/capture-fullscreen-english/step-019.annotated.png)

12. <a id="walkthrough-capture-body-scroll"></a>浏览长正文时，先选中对应请求。下面使用 `POST /e2e/detail-body-fill`，请求正文包含 200 条 `entries`；点击红框 1 的 Request，先查看正文开头。

    ![打开含200条entries的请求正文](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-002.annotated.png)

13. <a id="walkthrough-capture-inspection-12-inner-scroll"></a>红框 1 是 Inspector 的内容区域，其中正文有独立的滚动条。把鼠标移入正文编辑区，用滚轮向下浏览，不必重新发送请求。

    ![在正文内部使用滚轮](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-003.annotated.png)

14. <a id="walkthrough-capture-inspection-13-request-end"></a>拖动红框 1 区域内正文自己的滚动条到最下方，检查最后一项 `index: 199`、`value: entry-199`。

    ![拖动正文滚动条查看最后一项](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-004.annotated.png)

15. <a id="walkthrough-capture-inspection-14-outer-up"></a><a id="walkthrough-capture-inspection-15-scroll-chain"></a>正文已经到底后，把鼠标留在正文中继续向下滚动。红框 1 的外层详情会继续移动，正文仍停在最后一项。

    ![正文到边界后继续滚动外层详情](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-005.annotated.png)

    需要键盘定位时，先让正文获得焦点，再使用相应的首尾快捷键；也可参考[长消息中的键盘操作](#walkthrough-capture-websocket-messages-14-keyboard-end)。滚动和拖动分栏不会修改请求或响应内容。

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

- 文本、WebSocket 和 gRPC 的只读预览最多 `2 MiB`；图片读取与解码使用独立的 `16 MiB` 上限。
- 完整正文不超过 `1 MiB` 时可以自动格式化；`1–2 MiB` 需要手动点击 Format。截断预览或捕获不完整的正文不应格式化。
- 超过自动格式化阈值时手动点击 Format；超过 `2 MiB` 时，Copy 只取当前预览。需要完整文件时按[大正文保存](#walkthrough-capture-body-limits)使用 Save body。
- Format 只改变显示；失败时保留原文。没有 Format 按钮的模式，不代表该响应无法读取。
- Copy 复制当前查看器提供的内容，不应当作完整大文件导出的替代。
- 需要保存捕获到的完整正文时用 Save body。它不受只读预览上限替代，但无法恢复网络中断时从未捕获到的字节。
- `multipart/form-data` 当前不是结构化的文件上传列表，不要按普通 Form 视图理解。

<a id="walkthrough-capture-markdown-viewer"></a>
### Markdown 预览、源码与全屏

下面是独立的 `GET /playground/body/markdown`，不是前面的 JSON 请求。搜索该路径、选中记录并打开 Response；这份 Markdown 共 `36` 字节。

1. <a id="walkthrough-capture-inspection-17-preview"></a>红框 1 的 Preview 显示渲染结果：标题为 `Capture Lab`，列表包含 `request` 和 `response`。

   ![Markdown Preview显示标题与列表](../media/v0.1.1-alpha.1/capture-markdown-english/step-033.annotated.png)

2. <a id="walkthrough-capture-inspection-18-split"></a>聚焦 Preview 模式按钮后，按一次右方向键选择红框 1 的 Split。上方保留渲染预览，下方同时显示带 `#` 和 `-` 的源码。

   ![Markdown Split同时显示预览和源码](../media/v0.1.1-alpha.1/capture-markdown-english/step-034.annotated.png)

3. <a id="walkthrough-capture-inspection-19-source"></a>再按一次右方向键选择红框 1 的 Source，只查看原始 Markdown 文本。

   ![Markdown Source显示原文](../media/v0.1.1-alpha.1/capture-markdown-english/step-035.annotated.png)

4. <a id="walkthrough-capture-inspection-20-copy-source"></a>点击正文工具栏红框 1 的 Copy，复制包含 Markdown 标记和换行的完整原文，不是渲染后的标题与列表文字。

   ![从Markdown Source复制完整原文](../media/v0.1.1-alpha.1/capture-markdown-english/step-036.annotated.png)

5. <a id="walkthrough-capture-inspection-23-fullscreen"></a>点击正文工具栏右端的 Fullscreen。弹窗中红框 1 的 Source 仍被选中，显示同一份 Markdown；红框并不是打开全屏的按钮。

   ![全屏保留Markdown Source](../media/v0.1.1-alpha.1/capture-markdown-english/step-037.annotated.png)

6. <a id="walkthrough-capture-inspection-24-return"></a>按 Escape 返回详情。红框 1 的 Source 仍被选中，正文没有改变，也没有重发请求。

   ![Escape返回后保留Markdown Source](../media/v0.1.1-alpha.1/capture-markdown-english/step-038.annotated.png)

7. <a id="walkthrough-capture-inspection-25-preview-again"></a>点击红框 1 的 Preview，回到同一份 Markdown 的渲染预览。

   ![Markdown返回Preview](../media/v0.1.1-alpha.1/capture-markdown-english/step-039.annotated.png)

<a id="walkthrough-capture-inspection-21-source-scroll"></a><a id="walkthrough-capture-inspection-22-source-end"></a>较长的 Markdown Source 可使用滚轮或正文滚动条浏览到末尾；上面这份短正文已完整显示。<a id="walkthrough-capture-inspection-26-hex"></a>需要检查字节时也可选择 Hex，查看方式参见[Hex 示例](#walkthrough-09-hex)。

<a id="walkthrough-capture-audio-metadata"></a>
### 查看音频元信息并保存

1. 选中 `GET /playground/body/audio` 并打开 Response。本例显示 `audio/wav`、`48 B`；App 不加载音频播放器。红框 1 是 Save body，不是播放按钮。

   ![查看音频 MIME、大小与 Save body](../media/v0.1.1-alpha.1/capture-audio-metadata-english/step-007.annotated.png)

2. 点击 Save body，在系统 Save 窗口选择自己的目录，保存为 `body-audio.wav`。

   ![保存捕获的 body-audio.wav](../media/v0.1.1-alpha.1/capture-audio-metadata-english/step-008.png)

3. 保存后仍是同一条 Response，MIME 和 `48 B` 不变，红框 1 的 Save body 仍可用。保存的是已捕获字节，不会启动 App 内播放。

   ![音频保存后仍保留原元信息](../media/v0.1.1-alpha.1/capture-audio-metadata-english/step-009.annotated.png)

<a id="walkthrough-capture-video-metadata"></a>
### 查看视频元信息并保存

1. 另选 `GET /playground/body/video` 并打开 Response。这个小示例显示 `video/mp4`、`24 B`，只说明元信息和保存操作，不代表完整视频可播放，也不展示时长或 codec。红框 1 是 Save body。

   ![查看视频 MIME、大小与 Save body](../media/v0.1.1-alpha.1/capture-video-metadata-english/step-011.annotated.png)

2. 点击 Save body，在系统 Save 窗口保存为 `body-video.mp4`。

   ![保存捕获的 body-video.mp4](../media/v0.1.1-alpha.1/capture-video-metadata-english/step-012.png)

3. 保存后核对同一条 Response 仍为 `video/mp4`、`24 B`，红框 1 的 Save body 仍可用。导出不会把不完整的媒体内容补成完整文件。

   ![视频保存后仍保留原元信息](../media/v0.1.1-alpha.1/capture-video-metadata-english/step-013.annotated.png)

<a id="walkthrough-capture-body-limits"></a>
## 格式化大正文并保存完整文件

先开启 Recording，让自己的客户端通过代理请求测试接口。下面分别用 `/e2e/body-limits/manual` 与 `/e2e/body-limits/truncated` 比较手动格式化和预览上限；请按实际接口路径搜索。正文预览与完整保存文件不是同一份数据范围。

1. <a id="walkthrough-capture-body-limits-01-scope"></a><a id="walkthrough-capture-body-limits-02-record"></a><a id="walkthrough-capture-body-limits-03-manual-request"></a><a id="walkthrough-capture-body-limits-04-manual-select"></a><a id="walkthrough-capture-body-limits-05-unformatted"></a>选中 `GET /e2e/body-limits/manual`，打开 Response。约 `1.25 MiB` 的完整 JSON 超过自动格式化阈值，会先保留原文；长字符串可以自动折行。红框 1 是可手动使用的 Format。

   ![查看大正文的手动Format入口](../media/v0.1.1-alpha.1/capture-body-manual-english/step-001.annotated.png)

2. <a id="walkthrough-capture-body-limits-06-copy-before"></a>先点击红框 1 的 Copy，查看尚未格式化的原文。这份正文未超过 `2 MiB` 预览上限，当前可复制完整文本。

   ![格式化之前复制原文](../media/v0.1.1-alpha.1/capture-body-manual-english/step-002.annotated.png)

3. <a id="walkthrough-capture-body-limits-07-format"></a>点击红框 1 的 Format，为当前 JSON 增加缩进和换行；不会重新发送请求或修改捕获到的响应。

   ![手动格式化同一JSON正文](../media/v0.1.1-alpha.1/capture-body-manual-english/step-003.annotated.png)

4. <a id="walkthrough-capture-body-limits-08-copy-formatted"></a>再次点击红框 1 的 Copy，比较格式化后的显示文本。字段和值不变，变化的是查看格式。

   ![复制格式化后的显示文本](../media/v0.1.1-alpha.1/capture-body-manual-english/step-004.annotated.png)

5. <a id="walkthrough-capture-body-limits-09-large-request"></a><a id="walkthrough-capture-body-limits-10-large-select"></a><a id="walkthrough-capture-body-limits-11-preview"></a>再查看 `GET /e2e/body-limits/truncated`。约 `3 MiB` 的响应只预览前 `2 MiB`，界面提示完整正文仍被保留用于导出。红框 1 的 Format 已禁用；预览截断不等于网络响应丢失。

   ![预览上限提示与禁用的Format](../media/v0.1.1-alpha.1/capture-body-truncated-english/step-001.annotated.png)

6. <a id="walkthrough-capture-body-limits-12-copy-preview"></a>点击红框 1 的 Copy，只会复制当前 `2 MiB` 预览，不能把这份文本当成完整响应。

   ![Copy只复制当前预览](../media/v0.1.1-alpha.1/capture-body-truncated-english/step-002.annotated.png)

7. <a id="walkthrough-capture-body-limits-format-disabled"></a>复制后，红框 1 的 Format 仍不可用。不要通过格式化或 Copy 替代完整正文保存。

   ![截断预览仍不能格式化](../media/v0.1.1-alpha.1/capture-body-truncated-english/step-003.annotated.png)

8. <a id="walkthrough-capture-body-limits-13-save-dialog"></a>需要完整内容时使用 Save body。下面另用 `GET /e2e/body-preview/four-byte` 的 UTF-8 响应，总长为 `2097166` 字节，即 `2 MiB + 14`；它不是上面的 `3 MiB` JSON。选中它，打开 Response 并点击正文工具栏的 Save body。在系统 Save 窗口选择自己的目录，保存为 `utf8-full-body.txt`。

   ![通过 Save body 保存完整 utf8-full-body.txt](../media/v0.1.1-alpha.1/capture-body-save-english/step-049.png)

9. <a id="walkthrough-capture-body-limits-14-saved-complete"></a>等待保存完成，再关闭 Inspector 返回 Capture 列表。该 GET 仍为 `200`、`H1`，列表大小取整显示为 `2 MB`。保存的完整文件应以 `🙂after-preview` 结尾；这些尾部字节超出当前预览，不能通过 Copy 预览恢复。

   ![完整正文保存后返回原请求列表](../media/v0.1.1-alpha.1/capture-body-save-english/step-050.png)

## 区分原始内容与规则修改结果

下面检查已由 `E2E regular request body` 改写的 `/e2e/body-effect-regular-request`。Original 为 `{"stage":"regular-original"}`，Final 为 `{"stage":"regular-final"}`；规则配置见 [Rules](rules.md#walkthrough-rules-response-evidence)。

1. 在 Capture 搜索并选择这条 POST，打开 Request。红框 1 的 Final 是当前正文版本；上方 Rule replaced 和 Text 说明正文经过规则替换。

   ![选中改写后的POST并检查Final版本](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-027.annotated.png)

2. 点击红框 1 的 Original，读取客户端最初发送的 `regular-original`。

   ![切换同一请求的Original版本](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-029.annotated.png)

3. 选择红框 1 的 Raw。显示模式改变，Original 版本不变。

   ![Original版本切换到Raw](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-030.annotated.png)

4. 点击正文工具栏红框 1 的 Copy，复制当前 Original。

   ![复制Original的原始JSON](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-031.annotated.png)

5. 点击正文工具栏的 Fullscreen，在弹窗中放大查看同一份 Original；正文仍为 `{"stage":"regular-original"}`。

   ![全屏查看Original正文](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-032.png)

6. 点击弹窗标题栏红框 1 的 Copy，仍复制这份 Original，而不是另一个版本。

   ![在全屏中复制Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-033.annotated.png)

7. 按 Escape 返回详情。红框 1 的 Original 仍选中，显示模式仍为 Raw。

   ![关闭全屏后保留Original与Raw](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-034.annotated.png)

8. 点击红框 1 的 Final，改为查看 `{"stage":"regular-final"}`。

   ![切回同一请求的Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-037.annotated.png)

9. 点击正文工具栏红框 1 的 Copy。现在复制的是 Final，不是上一份 Original。

   ![复制Final的原始JSON](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-039.annotated.png)

10. 点击 Save body，在原生 Save 面板选择目录，保存为 `body-effect-regular-request-final.json`。

    ![保存当前Final版本的真实Save面板](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-043.png)

11. 保存后回到同一请求。红框 1 的 Final 仍选中；保存的是25字节 `{"stage":"regular-final"}`，不是 Pretty 展示时增加的缩进。

    ![保存后仍显示Final版本](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-044.annotated.png)

12. 点击红框 1 的 Rule replaced 来源标记，定位产生这份正文的规则。

    ![点击正文旁的规则来源标记](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-045.annotated.png)

13. 在 Rules 核对红框 1 的 `E2E regular request body`。它的 request JSON 动作写入 `regular-final`；检查完毕后停用本次练习规则并 Save。

    ![正文来源定位到同一条Rules规则](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-046.annotated.png)

14. 检查响应替换时，另选 `/e2e/body-effect-regular-response` 的 GET 并打开 Response。本例 Final 为26字节 `{"stage":"response-final"}`，Original 禁用并显示 unavailable 提示；它不是空正文。响应规则的配置与停用见 [Rules](rules.md#walkthrough-rules-response-evidence-44-response-body)。

    ![响应替换后的Original不可用提示与Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-061.png)

- Original 可能为空，也可能不可用；两者含义不同。
- 源站响应在头部阶段被整体替换时，原始响应正文可能根本没有被观察到。不可用不等于空响应。
- 不能仅凭规则命中记录推断存在完整的原文或差异；以 App 实际提供的证据为准。

## HTTPS 与 TLS tunnel

只检查你有权访问的 HTTPS 流量。HTTPS 解密需要正确的 CA、系统信任和解密设置。

1. <a id="walkthrough-18-certificates"></a>进入 Settings → Certificates，检查 CA 的 Generated 与 Trusted 状态。尚未信任时，先按 [Settings](settings.md#https-decryption)完成安装和系统授权；不要重新生成已有的有效 CA。

   ![检查已有CA和系统信任](../media/v0.1.1-alpha.1/tls-pattern-english/step-001.png)

2. <a id="walkthrough-20-decryption"></a>在信任就绪后，打开红框 1 的 Decrypt HTTPS (MITM)。

   ![通过Certificates开启MITM](../media/v0.1.1-alpha.1/tls-pattern-english/step-002.annotated.png)

3. <a id="walkthrough-19-local-origin"></a>仅当自己控制的演示源站使用不受信任证书时，在红框 1 的 Per-host overrides 输入 `localhost`，点击红框 2 的 Add host。这里添加的是源站证书例外，不是 TLS passthrough，也不应照搬到普通公网主机。

   ![只为自有localhost添加源站证书例外](../media/v0.1.1-alpha.1/tls-pattern-english/step-011.annotated.png)

4. 在 Capture 搜索 `/e2e/passthrough/http`，检查客户端对 `https://localhost:56104/e2e/passthrough/http` 建立的新连接。选中 GET，打开红框 1 的 Response：本例是 H1、200、42 B JSON，包含 `mode: https-h1` 和 `secure: true`。

   ![添加透传前新HTTPS连接可以查看HTTP正文](../media/v0.1.1-alpha.1/tls-pattern-english/step-012.annotated.png)

5. 需要让该主机保持加密转发时，进入 Settings → TLS passthrough，在红框 1 输入精确的 `localhost`，点击红框 2 的 Add。

   ![添加精确的localhost透传项](../media/v0.1.1-alpha.1/tls-pattern-english/step-013.annotated.png)

6. 让客户端重新连接同一 HTTPS 地址，在 Capture 搜索 `localhost`，选择红框 1 的新 CONNECT。右侧 TLS tunnel 显示主机、端口 `56104` 和加密转发状态，不提供 HTTP 路径、Headers 或 Body。红框 2 的 View passthrough pattern 可定位匹配项；即使显示 MITM active，此连接仍按透传处理。

   ![新CONNECT的Tunnel详情与透传定位入口](../media/v0.1.1-alpha.1/tls-pattern-english/step-014.annotated.png)

7. 点击上述 View passthrough pattern 进入名单，核对 `localhost`，再点击红框 1 的移除按钮。此处删除的是透传项，不是 Certificates 中的源站证书例外。

   ![定位并移除本次localhost透传项](../media/v0.1.1-alpha.1/tls-pattern-english/step-015.annotated.png)

8. 再让客户端建立新连接，搜索 `/e2e/passthrough/http` 并选择新 GET。红框 1 的 Response 恢复42字节 JSON；旧 CONNECT 不会因此变成已解密记录。

   ![移除透传后新HTTPS连接恢复正文](../media/v0.1.1-alpha.1/tls-pattern-english/step-016.annotated.png)

9. <a id="walkthrough-22-http2"></a>检查支持 HTTP/2 的另一请求时，搜索 `/playground/h2-json` 并选择红框 1 的记录。此例使用 `https://localhost:54766`，协议是 H2，不是前面 H1 连接的继续。

   ![选择独立的已解密HTTP2请求](../media/v0.1.1-alpha.1/capture-http2-english/step-001.annotated.png)

10. <a id="walkthrough-29-body-html"></a><a id="walkthrough-29-body-markdown"></a><a id="walkthrough-29-body-form"></a><a id="walkthrough-29-body-png"></a><a id="walkthrough-29-body-binary"></a><a id="walkthrough-29-body-audio"></a><a id="walkthrough-29-encoding-gzip"></a><a id="walkthrough-29-encoding-corrupt-gzip"></a><a id="walkthrough-30-decryption-off"></a>练习结束，在 Certificates 关闭红框 1 的 Decrypt HTTPS (MITM)。以下清理图展示同样的设置入口；只撤销自己本轮开启的设置。

    ![通过Certificates关闭本轮MITM](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

11. <a id="walkthrough-31-remove-exception"></a>若本轮添加过源站证书例外，点击红框 1 的 `localhost` 标签右侧 ×。保留原有 CA 和他人的例外。

    ![移除Certificates中的localhost源站例外](../media/v0.1.1-alpha.1/tls-cleanup-english/step-041.annotated.png)

12. 核对 `localhost` 标签已消失。红框 1 是恢复为空的 Per-host overrides 输入框，不是删除按钮。

    ![源站例外移除后输入框恢复为空](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.annotated.png)

- 证书固定、独立信任库或显式 TLS passthrough 都可能导致无法按普通方式解密。
- TLS passthrough 保持加密转发，不是“已经抓到了明文但隐藏了正文”。
- 可从明确标记为 passthrough 的隧道跳到对应配置；不要为了看到正文就放宽所有主机的证书检查。
- 证书安装、卸载与系统授权的操作见 [Settings](settings.md#https-decryption)。

### 核对 HTTPS 到 HTTP 的映射结果

先按 [Rules 跨协议映射](rules.md#walkthrough-rules-routing)配置自己的源服务和目标服务，并满足本章的 HTTPS 解密前提。下面使用规则 `E2E HTTPS to HTTP mapping`，把 `https://localhost:56814/e2e/rules/tls-mapping/enabled` 转到 `http://127.0.0.1:56810/e2e/rules/mapped-http`；端口是示例服务端口。

1. <a id="walkthrough-capture-mapping-response"></a>规则保存生效后，通过代理请求原 HTTPS 地址。在 Capture 搜索 `/e2e/rules/`，选择 `/enabled` 记录并打开红框 1 的 Response。实际返回 `owned-http-mapping-result`，而不是只有 Tunnel 元信息。

   ![HTTPS请求获得HTTP映射目标的实际响应](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-020.annotated.png)

2. <a id="walkthrough-capture-mapping-disable"></a>回到 Rules 停用该规则，再点击 Save。红框 1 的 Rule set applied 表示停用状态已经保存，不能只关闭开关而不保存。

   ![映射停用状态已保存](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-022.annotated.png)

3. <a id="walkthrough-capture-mapping-restored"></a>新发起 `GET https://localhost:56814/e2e/rules/tls-mapping/disabled`。红框 1 是这个新请求的 `404` 记录：它回到了没有该路径的原 HTTPS 服务。`/disabled` 与上面的 `/enabled` 是不同的完整 URL，不是对旧记录改名。

   ![停用后新请求回到原HTTPS服务](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-023.annotated.png)

### 用 HTTPS 请求读取本地文件

这是独立的本地文件示例，使用 HTTPS 服务 `localhost:56814` 和提供原始响应的 HTTP 服务 `127.0.0.1:56810`，不要沿用上一例的端口。下面的文件先由 Capture 保存，再供 Map Local 使用；请替换成自己的服务地址和保存路径。

1. <a id="walkthrough-capture-local-save-dialog"></a>在本例 `/e2e/rules/tls-mapping/enabled` 的 Response 工具栏点击 Save。在系统 Save body 对话框选择自己的目录，以 `https-map-local-response.txt` 保存。

   ![通过产品Save保存本轮响应文件](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-021.png)

2. <a id="walkthrough-capture-local-saved"></a>保存后返回 Capture。红框 1 是正文工具栏的 Save；当前正文仍为 `owned-http-mapping-result`，保存的文件包含相同的 `25` 字节。

   ![保存后返回同一Response](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-022.annotated.png)

3. <a id="walkthrough-capture-local-name"></a>在 Rules 中选中本例已停用的匹配规则，将红框 1 的名称改为 `E2E HTTPS to local file mapping`。保留 Host `localhost`、Path `/e2e/rules/tls-mapping`。

   ![命名本地文件映射规则](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-026.annotated.png)

4. <a id="walkthrough-capture-local-action"></a>移除原 Map Remote 动作，打开 Add action，选择红框 1 的 Map Local。未添加新动作时出现的校验提示会在配置有效后消失。

   ![选择Map Local动作](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-027.annotated.png)

5. <a id="walkthrough-capture-local-missing-path"></a>为观察路径错误，先在红框 1 输入同目录下不存在的 `https-map-local-missing.txt` 的完整路径，不创建该文件。

   ![填写不存在的本地文件路径](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-028.annotated.png)

6. <a id="walkthrough-capture-local-enable"></a>打开红框 1 的规则开关。此时只改变了草稿，下一步还需要保存。

   ![启用Map Local草稿](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-029.annotated.png)

7. <a id="walkthrough-capture-local-save-missing"></a>点击右上方 Save。页脚红框 1 的 Rule set applied 表示规则已保存生效。

   ![缺失文件路径的规则已保存](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-030.annotated.png)

8. <a id="walkthrough-capture-local-missing-result"></a>通过代理请求 `https://localhost:56814/e2e/rules/tls-mapping/map-local-missing`，在 Capture 搜索该路径并打开红框 1 的 Response。实际结果是 `404`，正文为 `Map Local target not found.`。

   ![HTTPS请求返回缺失文件提示](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-031.annotated.png)

9. <a id="walkthrough-capture-local-correct-path"></a>回到规则，在红框 1 将路径修正为第 1 步产品保存的 `https-map-local-response.txt`。这里直接编辑路径，不是重新创建文件。

   ![修正为产品保存的文件](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-032.annotated.png)

10. <a id="walkthrough-capture-local-save-corrected"></a>再次点击 Save，确认红框 1 的 Rule set applied；输入框变化本身不代表规则已经应用。

    ![修正后的文件路径已保存](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-033.annotated.png)

11. <a id="walkthrough-capture-local-file-result"></a>新请求 `https://localhost:56814/e2e/rules/tls-mapping/map-local-enabled`。在 Capture 打开红框 1 的 Response，确认 `200` 和本地文件的 `owned-http-mapping-result`。

    ![HTTPS响应实际来自本地文件](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-034.annotated.png)

12. <a id="walkthrough-capture-local-disable"></a>回到 Rules 关闭红框 1 的规则开关。这只停用 Map Local 规则，不是关闭 HTTPS 解密。

    ![停用Map Local规则](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-035.annotated.png)

13. <a id="walkthrough-capture-local-save-disabled"></a>点击 Save，确认红框 1 的 Rule set applied，保存停用状态。

    ![Map Local停用状态已保存](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-036.annotated.png)

14. <a id="walkthrough-capture-local-origin-restored"></a>再请求 `https://localhost:56814/e2e/rules/tls-mapping/map-local-disabled`。红框 1 的新记录回到原 HTTPS 服务的 `404`，正文为 `0 B`，不再是缺失文件提示或保存的文本。这三个后缀对应不同的新请求。

    ![停用后新请求恢复原HTTPS结果](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-037.annotated.png)

<a id="http2"></a>
## 检查 HTTP/2 与连接结束

客户端和源站必须实际使用 HTTP/2；HTTPS 还需要前述解密条件。下面先检查 `https://localhost:54766` 的已捕获请求。

1. <a id="walkthrough-21-protocol-scope"></a>搜索 `/playground/h2-json`，选择红框 1 的 GET。在 Headers → General 核对 H2、200 与实际 URL，不从路径名称猜测协议。

   ![搜索并选择真实H2请求](../media/v0.1.1-alpha.1/capture-http2-english/step-001.annotated.png)

2. <a id="walkthrough-capture-http2-10-protocol-group"></a>点击红框 1 的 Protocol 标题展开分组。

   ![展开Protocol分组](../media/v0.1.1-alpha.1/capture-http2-english/step-002.annotated.png)

3. <a id="walkthrough-capture-http2-11-http2-filter"></a>选择红框 1 的 HTTP/2，只保留该协议；搜索条件仍然生效。

   ![选择HTTP2协议筛选](../media/v0.1.1-alpha.1/capture-http2-english/step-003.annotated.png)

4. 再点击红框 1 的 HTTP/2 取消这个条件。Protocol 恢复 All，不会删除请求或清空搜索。

   ![取消HTTP2筛选并保留记录](../media/v0.1.1-alpha.1/capture-http2-english/step-004.annotated.png)

5. <a id="walkthrough-23-trailers"></a>在 Headers 向下滚动，展开红框 1 的 Response Trailers，读取 `x-playground-trailer: h2-complete`。

   ![HTTP2响应trailer完整可见](../media/v0.1.1-alpha.1/capture-http2-english/step-007.annotated.png)

6. <a id="walkthrough-24-h2-body"></a>打开 Response，选择红框 1 的 Raw，查看55字节 JSON 中的 `protocol: h2` 和 `/playground/h2-json`。

   ![查看同一H2请求的JSON响应](../media/v0.1.1-alpha.1/capture-http2-english/step-008.annotated.png)

7. <a id="walkthrough-capture-http2"></a><a id="walkthrough-capture-http2-01-scope"></a><a id="walkthrough-capture-http2-02-record"></a><a id="walkthrough-capture-http2-03-first-part"></a><a id="walkthrough-capture-http2-04-select"></a><a id="walkthrough-capture-http2-06-partial-body"></a>检查流式响应时，改搜 `/e2e/h2/body-progress`，选择红框 1 的 GET 并打开 Response。此时已收到65,536字节，列表显示64 KB，Time 仍为 `…`；正文尚不可读，不代表请求绕过了代理。

   ![同一H2流收到第一段64KB](../media/v0.1.1-alpha.1/capture-http2-english/step-009.annotated.png)

8. <a id="walkthrough-capture-http2-07-second-part"></a>保持选择同一记录，观察红框 1 的大小增至128 KB。响应还未结束，不能把进度增长当作完整正文已经可用。

   ![同一H2流收到第二段后仍在接收](../media/v0.1.1-alpha.1/capture-http2-english/step-010.annotated.png)

9. <a id="walkthrough-capture-http2-08-complete"></a>等待响应结束，再选择红框 1 的 Text。现在可以读取完整131,072字节：先是65,536个 `a`，后是65,536个 `b`。

   ![H2响应结束后读取完整Text](../media/v0.1.1-alpha.1/capture-http2-english/step-011.annotated.png)

10. 点击红框 1 的 Copy，复制完整正文，不是当前窗口显示的前几行。

    ![复制完整的128KiB响应](../media/v0.1.1-alpha.1/capture-http2-english/step-012.annotated.png)

11. <a id="walkthrough-capture-http2-05-headers"></a><a id="walkthrough-capture-http2-09-trailers"></a>返回 Headers，核对 Response Headers 的 `content-length: 131072`，再滚动到红框 1 的 Response Trailers，读取 `x-capture-end: complete`。这些阶段属于同一 GET。

    ![完整响应的长度与结束trailer](../media/v0.1.1-alpha.1/capture-http2-english/step-013.annotated.png)

12. 正常 GOAWAY 的另一例使用 `https://localhost:60170/e2e/h2/origin-goaway/paused`。若停在响应断点，点击 Continue 原样放行；完成后打开该 POST 的 Headers。下图是放行后的结果：响应完整4 MiB，红框 1 的 Response Trailers 中有 `x-goaway-complete`。

    ![正常GOAWAY后原POST完整结束并保留trailer](../media/v0.1.1-alpha.1/capture-http2-graceful-english/step-002.annotated.png)

13. 选择随后独立的 `/e2e/h2/origin-goaway/next` POST，打开 Response → 红框 1 的 Raw。它在新上游连接上返回62字节 JSON，不是重放上一条 POST。

    ![正常GOAWAY后新POST获得独立响应](../media/v0.1.1-alpha.1/capture-http2-graceful-english/step-003.annotated.png)

14. <a id="walkthrough-capture-http2-origin-01-interrupt"></a><a id="walkthrough-capture-http2-origin-02-original"></a><a id="walkthrough-capture-http2-origin-03-length"></a>检查源站错误 GOAWAY 的记录时，搜索 `/e2e/h2/error-goaway-origin`，选择 `/interrupted` POST。在红框 1 的 Response Headers 核对声明长度524,288字节。这里是响应长度，不是 POST 上传正文。

    ![源站错误GOAWAY原POST声明的响应长度](../media/v0.1.1-alpha.1/capture-http2-english/step-039.annotated.png)

15. <a id="walkthrough-capture-http2-origin-04-partial"></a>打开同一 POST 的 Response → 红框 1 的 Text。实际只捕获262,144字节，界面显示256 KB；响应头中的200不能证明正文完整。

    ![源站错误GOAWAY后实际保留的部分响应](../media/v0.1.1-alpha.1/capture-http2-english/step-040.annotated.png)

16. <a id="walkthrough-capture-http2-origin-05-recovered"></a><a id="walkthrough-capture-http2-origin-06-recovery-body"></a>选择新连接上的 `/e2e/h2/error-goaway-origin/recovered` GET，打开 Response → 红框 1 的 Raw。73字节 JSON 属于这条新 GET，不是原 POST 剩余的响应。

    ![源站错误GOAWAY后独立GET恢复](../media/v0.1.1-alpha.1/capture-http2-english/step-042.annotated.png)

17. <a id="walkthrough-capture-http2-client-01-interrupt"></a><a id="walkthrough-capture-http2-client-02-original"></a><a id="walkthrough-capture-http2-client-03-length"></a>检查客户端错误 GOAWAY 时，另搜 `/e2e/h2/error-goaway-client`，选择 `/interrupted` POST。红框 1 的 Response Headers 同样声明524,288字节。

    ![客户端错误GOAWAY原POST声明的响应长度](../media/v0.1.1-alpha.1/capture-http2-english/step-044.annotated.png)

18. <a id="walkthrough-capture-http2-client-04-partial"></a>切到同一记录的 Response → 红框 1 的 Text，比较实际保留的262,144字节。

    ![客户端错误GOAWAY后保留的256KiB响应](../media/v0.1.1-alpha.1/capture-http2-english/step-045.annotated.png)

19. <a id="walkthrough-capture-http2-client-05-recovered"></a><a id="walkthrough-capture-http2-client-06-recovery-body"></a>再选择独立的 `/e2e/h2/error-goaway-client/recovered` GET，打开 Response → 红框 1 的 Raw，核对新的73字节 JSON。

    ![客户端错误GOAWAY后独立GET恢复](../media/v0.1.1-alpha.1/capture-http2-english/step-047.annotated.png)

20. <a id="walkthrough-capture-http2-24-settings"></a><a id="walkthrough-capture-http2-25-certificates"></a><a id="walkthrough-capture-http2-26-mitm-off"></a><a id="walkthrough-capture-http2-27-origin-remove"></a>结束后按[解密清理步骤](#walkthrough-30-decryption-off)返回 Settings → Certificates，关闭本轮 MITM，并移除自己添加的源站例外。图中红框 1 是 MITM 开关，不是 CA 的 Remove 按钮。

    ![结束HTTP2检查后关闭本轮解密](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

正常 GOAWAY、错误 GOAWAY 和重置不是同一种结束。只检查自己有权访问的服务；不要为复现错误而中断他人的连接。Diagnostics 不是完整 HTTP/2 帧分析器，HAR 也不是 trailer 的无损备份。

## 查看 WebSocket 与 gRPC 消息

### WebSocket 文本消息

保持 Recording 开启，让客户端经代理连接自己的 `/playground/ws/text` 服务并发送 `hello from client`。本例收到相同的回显后正常关闭连接，下面检查保留的消息记录。

1. <a id="walkthrough-25-websocket"></a>按路径搜索并选择红框 1 的连接。它的状态为 `101`、协议为 `WS`；`closed` 表示连接已经关闭，不代表消息记录被删除。

   ![选择本次WebSocket文本连接](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-008.annotated.png)

2. 打开红框 1 的 Messages，查看发送和接收两个方向的消息。

   ![打开WebSocket Messages](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-009.annotated.png)

3. 选择红框 1 的 Sent，仅显示客户端发送的那条 Text 消息。

   ![筛选WebSocket发送方向](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-010.annotated.png)

4. <a id="walkthrough-26-message"></a>点击消息行展开正文，核对 `hello from client`。红框 1 的 Sent text 是展开后的方向和类型标题，不是展开按钮。

   ![展开WebSocket发送文本](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-011.annotated.png)

5. 点击消息标题行红框 1 的 Copy payload，复制 `hello from client`。它与下方正文工具栏的 Copy 是不同入口。

   ![复制WebSocket发送消息的载荷](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-012.annotated.png)

6. 选择红框 1 的 Received，切换到服务端返回的消息。

   ![筛选WebSocket接收方向](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-014.annotated.png)

7. 点击接收消息行展开。红框 1 的 Received text 标题说明当前方向；本例回显仍为 `hello from client`。

   ![展开WebSocket接收文本](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-015.annotated.png)

8. 点击接收消息标题行红框 1 的 Copy payload，复制这条回显。

   ![复制WebSocket接收消息的载荷](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-016.annotated.png)

9. 选择红框 1 的 All，同时查看一条 Sent 和一条 Received。每条载荷为 `17 B`；左侧连接行的 `0 B` 是 HTTP 正文大小，不是消息总字节数。

   ![同时查看WebSocket两个方向](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-018.annotated.png)

### gRPC JSON 消息

用 gRPC 客户端调用自己的 `/playground.Capture/UnaryJson`。本例使用 `application/grpc+json`，请求载荷为 `{"message":"hello"}`，响应为 `{"message":"world"}`；需要解密时先完成 HTTPS 前提。

1. <a id="walkthrough-27-grpc"></a>选中对应的 `POST`、`H2`、`200` 记录，打开红框 1 的 Messages。消息区同时显示 `grpc-status: 0`，它与 HTTP 状态码不是同一个字段。

   ![打开gRPC的Messages与状态](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-022.annotated.png)

2. 选择红框 1 的 Request，查看客户端的请求消息。

   ![切换gRPC Request消息](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-023.annotated.png)

3. 点击红框 1 的 Message 1 行展开，核对 JSON 中的 `message: hello`。

   ![展开gRPC JSON请求载荷](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-024.annotated.png)

4. 点击请求消息标题行红框 1 的 Copy payload，复制原始 `{"message":"hello"}`，而不是 Pretty 显示的缩进文本。

   ![复制gRPC请求原始载荷](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-025.annotated.png)

5. 选择红框 1 的 Response，查看服务端响应消息。

   ![切换gRPC Response消息](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-026.annotated.png)

6. <a id="walkthrough-28-grpc-response"></a>点击红框 1 的响应 Message 1 行展开，核对 JSON 中的 `message: world`。

   ![展开gRPC JSON响应载荷](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-027.annotated.png)

7. 点击响应消息标题行红框 1 的 Copy payload，复制 `{"message":"world"}`。这份载荷为 `19 B`，不包含前面的 5 字节 envelope header。

   ![复制gRPC响应原始载荷](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-028.annotated.png)

本例载荷本身是 JSON，可以直接显示；界面仍保留 No descriptor loaded 提示，不能据此认为普通 protobuf 已按 schema 解码。

### 长消息与分页

#### WebSocket：短正文、长正文与分页

下面的 `/e2e/websocket/compact-message-layout` 含六条 Sent Binary JSON 及回显：短正文70字节，长正文2,538字节。长正文包含28个 `entries`，末尾为 `end: compact-message-end`。

1. <a id="walkthrough-capture-websocket-messages"></a><a id="walkthrough-capture-websocket-messages-01-filter"></a><a id="walkthrough-capture-websocket-messages-02-record"></a><a id="walkthrough-capture-websocket-messages-03-messages"></a><a id="walkthrough-capture-websocket-messages-04-select"></a><a id="walkthrough-capture-websocket-messages-05-tab"></a><a id="walkthrough-capture-websocket-messages-06-direction"></a>搜索这条路径，选择连接并打开 Messages，点击红框 1 的 Sent，只检查客户端发送方向。

   ![选择长短消息示例的Sent方向](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-001.annotated.png)

2. <a id="walkthrough-capture-websocket-messages-07-short"></a><a id="walkthrough-capture-websocket-messages-08-short-raw"></a>展开第一条70 B消息，选择红框 1 的 Raw，读取 `requestId: short-message`、`status: ready` 和 `count: 18`。

   ![展开短Binary JSON并选择Raw](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-002.annotated.png)

3. <a id="walkthrough-capture-websocket-messages-09-copy-short"></a>点击正文工具栏红框 1 的 Copy，复制完整短 JSON。

   ![复制短消息Raw正文](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-003.annotated.png)

4. <a id="walkthrough-capture-websocket-messages-10-collapse-short"></a>再次点击红框 1 的第一条消息行，收起短正文。

   ![收起短消息但保留消息行](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-004.annotated.png)

5. <a id="walkthrough-capture-websocket-messages-11-long"></a>展开第二条 Sent 消息，选择红框 1 的 Raw。它是 `requestId: long-message`，详情中的连接序号为 message 3，不是 Sent 列表中的第三条。

   ![展开第二条Sent长消息](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-005.annotated.png)

6. <a id="walkthrough-capture-websocket-messages-12-resize"></a>拖动红框 1 正文区域右下角的尺寸手柄，调整阅读高度；这不会修改消息内容。

   ![调整WebSocket长正文高度](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-006.annotated.png)

7. <a id="walkthrough-capture-websocket-messages-13-wheel"></a>把指针放在红框 1 的正文内，用滚轮或触控板浏览内部内容。

   ![在WebSocket正文内部滚动](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-007.annotated.png)

8. <a id="walkthrough-capture-websocket-messages-14-keyboard-end"></a>点击红框 1 的正文使其获得焦点，在 macOS 按 Command+↓，其他平台按 Ctrl+End，读取末尾的 `compact-message-end`。

   ![使用键盘到达WebSocket正文末尾](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-008.annotated.png)

9. <a id="walkthrough-capture-websocket-messages-15-scroll-out"></a>正文已经到末尾后继续向下滚动。红框 1 的外层 Messages 面板继续移动，后续消息行进入视野。

   ![内层到边界后继续滚动Messages面板](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-009.annotated.png)

10. <a id="walkthrough-capture-websocket-messages-16-copy-long"></a>点击正文工具栏红框 1 的 Copy，得到完整2,538字节 UTF-8 JSON，而不是屏幕中可见的尾部片段。

    ![复制完整WebSocket长正文](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-010.annotated.png)

11. <a id="walkthrough-capture-websocket-messages-17-payload-copy"></a>点击消息标题行红框 1 的 Copy payload。因为本条是 Binary，这个入口复制空格分隔的十六进制字节，与上一项 Raw Copy 的 UTF-8 格式不同。

    ![使用Binary消息自身的Copy payload](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-011.annotated.png)

12. 选择红框 1 的 Hex，查看同一消息的字节、偏移和字符栏。

    ![切换WebSocket长消息的Hex视图](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-013.annotated.png)

13. <a id="walkthrough-capture-websocket-messages-18-fullscreen"></a>先切回 Raw，再点击正文工具栏的 Fullscreen。红框 1 是打开后弹窗的 Payload 标题栏；放大的是这条消息，不是整个连接。

    ![全屏查看同一条WebSocket消息](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-014.annotated.png)

14. <a id="walkthrough-capture-websocket-messages-19-return"></a>按 Escape 返回消息详情，核对红框 1 的 Raw 仍选中。

    ![关闭消息全屏后保留Raw](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-015.annotated.png)

15. <a id="walkthrough-capture-websocket-messages-20-paged-input"></a><a id="walkthrough-capture-websocket-messages-21-paged-select"></a><a id="walkthrough-capture-websocket-messages-22-paged-tab"></a><a id="walkthrough-capture-websocket-messages-23-load-pages"></a>在当前搜索结果中选择独立的 `/e2e/websocket/compact-message-layout/pagination` 连接。它有205条 Sent Text 消息及回显；打开 Messages、选择 Sent，在红框 1 的面板内向下滚动，加载后续消息。

    ![滚动加载WebSocket后续消息页](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-016.annotated.png)

16. <a id="walkthrough-capture-websocket-messages-24-last-message"></a>继续到末尾，点击红框 1 的第205条 Sent 消息，JSON 的零起始 `index` 为204。

    ![选择第205条Sent消息](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-017.annotated.png)

17. 继续向下滚动，使红框 1 中整条 `{"index":204,"state":"complete"}` 可读。这条消息使用 Text，不提供 Raw；详情的 message 409 是包含收发两个方向的连接序号。

    ![完整显示最后一条WebSocket Text正文](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-018.annotated.png)

18. <a id="walkthrough-capture-websocket-messages-25-copy-last"></a>点击消息标题行红框 1 的 Copy payload，复制完整32字节 Text。这次不是前面 Binary 消息的十六进制复制。

    ![复制最后一条完整Text消息](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-019.annotated.png)

#### gRPC：长正文与205条响应消息

本例 `/e2e/grpc/compact-message-layout` 有六条 Response JSON。界面仍显示 No descriptor loaded，不把这些 JSON 示例当作已经载入 Protobuf 描述文件的解码结果。

1. <a id="walkthrough-capture-grpc-messages"></a><a id="walkthrough-capture-grpc-messages-01-filter"></a><a id="walkthrough-capture-grpc-messages-02-record"></a><a id="walkthrough-capture-grpc-messages-03-messages"></a><a id="walkthrough-capture-grpc-messages-04-select"></a><a id="walkthrough-capture-grpc-messages-05-tab"></a><a id="walkthrough-capture-grpc-messages-06-direction"></a><a id="walkthrough-capture-grpc-messages-07-short"></a><a id="walkthrough-capture-grpc-messages-08-short-raw"></a>搜索该路径，选择 POST，打开 Messages → Response。展开70 B的 Message 1，选择红框 1 的 Raw，查看 `short-message`、`ready` 和 `count: 18`。

   ![选择gRPC Response并读取短消息Raw](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-002.annotated.png)

2. <a id="walkthrough-capture-grpc-messages-09-copy-short"></a>点击正文工具栏红框 1 的 Copy，复制完整短 JSON。

   ![复制gRPC短消息正文](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-003.annotated.png)

3. <a id="walkthrough-capture-grpc-messages-10-collapse-short"></a>再次点击红框 1 的 Message 1 行收起正文。

   ![收起gRPC短消息](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-004.annotated.png)

4. <a id="walkthrough-capture-grpc-messages-11-long"></a>展开 Message 2，选择红框 1 的 Raw。这条 `long-message` 也是2,538字节 JSON，包含28个 `entries`。

   ![展开gRPC长消息并查看Raw](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-005.annotated.png)

5. <a id="walkthrough-capture-grpc-messages-12-resize"></a>拖动红框 1 正文区域右下角的尺寸手柄，调整高度。

   ![调整gRPC长正文高度](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-006.annotated.png)

6. <a id="walkthrough-capture-grpc-messages-13-wheel"></a>在红框 1 的正文内部使用滚轮或触控板浏览。

   ![滚动gRPC消息内部正文](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-007.annotated.png)

7. <a id="walkthrough-capture-grpc-messages-14-keyboard-end"></a>点击红框 1 的正文取得焦点，在 macOS 按 Command+↓，其他平台按 Ctrl+End，核对末尾的 `compact-message-end`。

   ![用键盘到达gRPC长正文末尾](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-008.annotated.png)

8. <a id="walkthrough-capture-grpc-messages-15-scroll-out"></a>到达内部边界后继续滚动，让红框 1 的外层 Messages 面板显示后面的消息及 Response Trailers。

   ![从gRPC正文继续滚动到外层消息区](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-009.annotated.png)

9. <a id="walkthrough-capture-grpc-messages-16-copy-long"></a>点击正文工具栏红框 1 的 Copy，复制完整2,538字节 JSON。

   ![复制完整gRPC长正文](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-010.annotated.png)

10. <a id="walkthrough-capture-grpc-messages-17-payload-copy"></a>点击消息标题行红框 1 的 Copy payload。本例同样得到完整 JSON UTF-8，不是前面 WebSocket Binary 的空格分隔 Hex。

    ![从gRPC消息标题行复制载荷](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-011.annotated.png)

11. 选择红框 1 的 Hex，检查该消息的原始字节。

    ![查看gRPC长消息Hex](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-013.annotated.png)

12. <a id="walkthrough-capture-grpc-messages-18-fullscreen"></a>先切回 Raw，再点击正文工具栏的 Fullscreen。红框 1 是打开后的 Payload 标题栏，弹窗仍显示这条 `long-message`。

    ![全屏查看gRPC长消息](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-014.annotated.png)

13. <a id="walkthrough-capture-grpc-messages-19-return"></a>按 Escape 返回，核对红框 1 的 Raw 模式仍保留。

    ![关闭gRPC消息全屏后返回Raw](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-015.annotated.png)

14. <a id="walkthrough-capture-grpc-messages-20-paged-input"></a><a id="walkthrough-capture-grpc-messages-21-paged-select"></a><a id="walkthrough-capture-grpc-messages-22-paged-tab"></a><a id="walkthrough-capture-grpc-messages-23-load-pages"></a>另选 `/e2e/grpc/compact-message-layout/pagination`，打开 Messages → Response。在红框 1 的面板内向下滚动，加载这条调用的后续消息；总共205条。

    ![滚动加载gRPC后续响应消息](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-016.annotated.png)

15. <a id="walkthrough-capture-grpc-messages-24-last-message"></a>继续到末尾，点击红框 1 的 Message 205 展开。

    ![展开gRPC的Message 205](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-017.annotated.png)

16. <a id="walkthrough-capture-grpc-messages-24a-last-raw"></a><a id="walkthrough-capture-grpc-messages-24b-last-visible"></a>选择 Raw 并继续滚动，使红框 1 内的完整正文可见：`{"index":204,"state":"complete"}`。Message 205 与零起始 index 204不是同一种编号。

    ![完整显示gRPC末条Raw正文](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-018.annotated.png)

17. <a id="walkthrough-capture-grpc-messages-25-copy-last"></a>点击消息标题行红框 1 的 Copy payload，复制这条完整32字节 JSON。

    ![复制gRPC最后一条完整响应消息](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-019.annotated.png)

18. <a id="walkthrough-capture-grpc-messages-26-settings"></a><a id="walkthrough-capture-grpc-messages-27-certificates"></a><a id="walkthrough-capture-grpc-messages-28-mitm-off"></a><a id="walkthrough-capture-grpc-messages-29-origin-remove"></a>如果为这次加密调用开启过 MITM，结束后进入 Settings → Certificates，关闭图中红框 1 的 MITM 开关，再按[源站例外清理步骤](#walkthrough-31-remove-exception)移除自己添加的例外；不要移除原有 CA。

    ![消息检查结束后清理本轮解密设置](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

- WSS 或加密的 gRPC 若没有解密，只能看到相应隧道，不能据此声称协议消息被完整解析。
- gRPC 使用 HTTP/2；不要把 Protocol 筛选中的 HTTP/2 与内容类型混成同一个条件。
- Pause 仍遵守前述录制边界，不是关闭连接。Clear 删除记录也不是终止业务连接。
- 连接中断、半条消息、解码失败与预览截断需要按实际提示区分。

## 保存记录与正文

先选择适合的格式：HAR 用于交换 HTTP 记录，Native Archive 保留更多 Interceptor 流量信息，Save body 只保存单份正文。原生归档和正文文件的完整操作见[导入导出](transfer.md)。

下面是独立的四条记录：`POST /e2e/har-tools/text` 和 `POST /e2e/har-tools/binary` 各有两份。它们不是前面的 JSON 请求。先检查自己实际要保留的记录，再选择导出范围。

<a id="capture-har-all"></a>
### 导出全部记录

1. 打开 Capture 右上角的 Export 菜单，选择红框 1 中的 Export HAR。

   ![从 Export 菜单选择 HAR](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-012.annotated.png)

2. 选择红框 1 中的 All traffic，确认数量为 `4`。检查下方隐私选项：本例遮罩 Authorization、Cookie/Set-Cookie，保留正文。确认后点击红框 2 中的 Export 4 requests。本例没有预先选中一条请求，所以 Selected request 不可用。

   ![核对全部四条和隐私选项后导出](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-013.annotated.png)

3. 在系统 Save 窗口选择自己的目录，保存为 `ui.har`。

   ![保存全部四条记录到 ui.har](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-014.png)

4. 等待导出结束后回到 Capture。四条记录仍在，红框 1 是重新可用的 Export 入口，红框 2 仍显示 Paused；保存不会自动恢复 Recording。确认文件任务结束后再 Clear 或退出。

   ![保存后回到四条记录，Recording 仍暂停](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-015.annotated.png)

<a id="capture-har-scopes"></a>
### 只导出筛选结果或选中记录

下面的独立范围示例也有 text/binary 各两条记录。选择范围不会改变 Capture 数据；随后导入时仍选择[全部导出](#capture-har-all)保存的四条 `ui.har`，不要选这里的两条或一条文件。

1. 在红框 1 的搜索框输入 `/e2e/har-tools/text`，列表只显示两条文本记录。点击红框 2 中的第一条，将它选中；筛选和选择都不会删除其他记录。

   ![筛选两条文本记录并选中一条](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-016.annotated.png)

2. 再次打开 Export → Export HAR，选择红框 1 中的 Current filter，核对数量为 `2`。保留所需正文及遮罩选项，点击红框 2 中的 Export 2 requests。

   ![按当前筛选导出两条记录](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-017.annotated.png)

3. 在 Save 窗口保存为 `ui-filter.har`，不要覆盖刚才的 `ui.har`。

   ![保存当前筛选到 ui-filter.har](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-018.png)

4. 等待保存结束后回到 Capture。红框 1 标出 Export 入口；列表仍显示原来的两条筛选结果，`ui-filter.har` 包含这两条。

   ![筛选范围保存后保留原列表](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-019.annotated.png)

5. 保持第一条文本记录选中，再次打开 Export → Export HAR。选择红框 1 中的 Selected request，确认数量为 `1`，点击红框 2 中的 Export 1 request。

   ![只导出当前选中的一条记录](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-020.annotated.png)

6. 在 Save 窗口保存为 `ui-selected.har`。

   ![保存当前选中记录到 ui-selected.har](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-021.png)

7. 等待保存结束。红框 1 是返回 Capture 后的 Export 入口。文件只有一条，但列表仍显示两条；导出选中项不会把列表筛选成一条。

   ![选中项保存后仍保留两条筛选结果](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-022.annotated.png)

<a id="capture-har-privacy"></a>
### 遮罩指定字段并去除正文

1. 保持同一条文本记录选中，打开 Export → Export HAR，并选择 Selected request。按本次需要勾选遮罩 Authorization、Cookie/Set-Cookie 和 Strip bodies，逐项核对后点击红框 1 中的 Export 1 request。这里的选项只用于本次文件，不会改写 Settings → Privacy 的默认设置。

   ![核对遮罩与去正文选项后导出](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-029.annotated.png)

2. 在 Save 窗口保存为 `ui-stripped.har`，保留之前带正文的文件以便区分。

   ![保存去除正文的 ui-stripped.har](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-030.png)

3. 保存结束后回到 Capture，红框 1 标出 Export 入口。当前请求的正文仍可查看：Strip bodies 只去除导出文件中的正文，不清空 Capture。遮罩也不涵盖任意 Query、业务字段或其他 Header，分享前仍要检查文件。

   ![去正文导出不会删除 Capture 中的正文](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-031.annotated.png)

<a id="capture-har-import"></a>
### 将已导出的 HAR 追加到 Capture

回到[导出全部记录](#capture-har-all)的同一组示例，选择刚才由 Capture Export 保存的 `ui.har`。文件包含四条记录；导入会追加这四条，不替换当前记录，也不需要先通过 Agent 导出另一份文件。

1. 清除搜索内容，确认导入前仍有四条记录。打开 Import 菜单，选择红框 1 中的 Import HAR。

   ![从 Capture 的 Import 菜单选择 HAR](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-032.annotated.png)

2. 在 App 对话框中点击红框 1 的 Import HAR，打开系统文件选择窗口。

   ![从 App 启动 HAR 文件选择](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-033.annotated.png)

3. 在系统 Open 窗口进入自己的保存目录，选择刚才的 `ui.har` 并点击 Open。完成后，Capture 从四条追加到八条，原四条保留。红框 1 标出新追加但尚未选中的 `/e2e/har-tools/binary` 行；此时右侧仍是此前文本记录的正文。

   ![同一 ui.har 追加四条到八条](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-035.annotated.png)

4. 选择这条新增的 binary 路径记录并打开 Request。它的请求仍是 Text、`16 B`，内容为 `HAR request body`。点击红框 1 的 Copy 复制请求正文；binary 是这里的响应类型，不是请求类型。

   ![新增 binary 记录的 Request 仍为 Text](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-036.annotated.png)

5. 切到同一记录的 Response 并选择 Hex，核对完整六字节 `00 01 7f 80 fe ff`。点击红框 1 的 Copy 得到含偏移、十六进制和 ASCII 列的文本 dump；这不是原二进制文件。

   ![新增 binary 记录的完整六字节响应](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-037.annotated.png)

6. 再选一条新增的 `/e2e/har-tools/text`，打开 Request。红框 1 的 Copy 复制 `16 B` 的 `HAR request body`。

   ![新增 text 记录的完整请求正文](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-038.annotated.png)

7. 切到这条记录的 Response。红框 1 的 Copy 复制 `17 B` 的 `HAR response body`，不要把它与上一步请求正文混淆。

   ![新增 text 记录的完整响应正文](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-039.annotated.png)

- HAR 不能无损保存 HTTP/2 pseudo-header、trailer、WebSocket 消息、TLS 详情和规则历史等信息。
- HAR 可选择遮罩 Authorization、Cookie，也可移除正文；这不等于所有 URL、业务字段和任意 Header 都会自动脱敏。
- 原生归档按完整录制数据处理，不默认套用 HAR 的遮罩选择，也不应当作 Rules 配置的备份。
- 导出是一个快照，导出过程中新增的流量不应被认为一定包含在该文件中。
- 与可信来源交换文件；完整操作和格式限制见[导入导出](transfer.md)。

## 清空记录

1. 确认需要保留的数据已经导出。下图是 `ui.har` 保存四条记录后的状态：红框 1 为 Export 入口，红框 2 仍为 Paused。若随后已导入到八条或录制了新请求，应重新导出需要保留的当前数据；旧 `ui.har` 不会自动增加内容。

   ![清空前确认要保留的记录已有对应导出文件](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-015.annotated.png)

2. 等待正文保存、HAR 或归档任务完成。若要中止正在运行的任务，点击红框 1 的 Cancel transfer。本例是 `cancel-ui.iarchive` 的运行进度，不是原生 Save 面板的 Cancel；完整启动过程见[任务取消步骤](transfer.md#walkthrough-transfer-cancel)。

   ![取消正在运行的Native Archive任务](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-019.annotated.png)

3. <a id="walkthrough-16-restore-filter"></a><a id="walkthrough-17-clear"></a>等待取消及文件清理结束，返回 Capture。原来的 `/e2e/transfer-jobs/large-source`、128 MB 记录仍在；确认不需要保留后，再点击红框 1 的 Capture Clear。

   ![取消清理完成后才点击Capture Clear](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-020.annotated.png)

4. 检查列表为空、计数归零。取消导出本身不会删除原记录，刚才独立点击 Clear 才执行清空。

   ![归档取消后明确Clear得到空列表](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-021.png)

5. <a id="walkthrough-capture-inspection-28-close-details"></a>需要清空后保持暂停时，先单独暂停录制。以下是另一份 `/e2e/storage/` 记录的完整操作：核对红框 1 的记录，点击红框 2 的 Recording 暂停，不把系统代理 Restore 当作暂停操作。

   ![清理前单独暂停这份记录的Recording](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-001.annotated.png)

6. <a id="walkthrough-capture-inspection-29-clear"></a>进入 Settings → Storage，点击 Clear capture，再点击红框 1 的 Confirm clear。这个入口与 Capture Clear 清理同一份临时记录和正文；已保存文件不受影响。

   ![在Storage明确确认清理Capture](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-006.annotated.png)

7. 回到 Capture，确认列表、详情和计数已清空，顶部仍为 Paused。搜索词 `/e2e/storage/` 可以保留，清空记录不等于清空搜索。

   ![清理后保持Paused且列表与详情为空](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-008.png)

8. <a id="walkthrough-capture-inspection-30-resume"></a>点击 Paused 手动恢复录制。红框 1 显示恢复后的 Recording；此时还没有新记录。

   ![清理后单独恢复Recording](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-009.annotated.png)

9. <a id="walkthrough-capture-inspection-31-new-request"></a>让客户端发送新的 `/e2e/storage/after-clear` POST，在红框 1 核对新记录的200、H1和115 B。它不是清空前的旧记录恢复出现。

   ![恢复录制后出现新的after-clear请求](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-010.annotated.png)

10. <a id="walkthrough-capture-inspection-32-new-body"></a>选择红框 1 的这条新 POST，再打开 Response 读取本次返回的正文，按[正文查看步骤](#walkthrough-06-response)切换显示或复制。图中标出的是打开详情前的新记录，不是已经展开的 Response。

    ![选择清理后新记录以继续读取Response](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-010.annotated.png)

- Clear 不等于暂停录制，也不等于停止转发。
- 在途文件任务可能使 Clear 被拒绝；不能绕过提示直接删除存储目录。
- 暂停、清除筛选、清空记录、恢复系统代理和退出 App 是不同操作。

## 从流量进入阻断与断点

本例使用 `http://127.0.0.1:49157/e2e/capture/breakpoint-menu-hierarchy`。`49157` 是示例服务端口，不是 App 固定端口。Block 先生成草稿；This endpoint 则直接创建并启用断点规则。

1. <a id="walkthrough-capture-shortcuts"></a><a id="walkthrough-capture-shortcuts-01-source"></a>按路径搜索，选中红框 1 的历史 GET。选择记录只打开详情，不会重新发送请求。

   ![选择快捷规则的历史请求来源](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-001.annotated.png)

2. <a id="walkthrough-capture-shortcuts-02-context"></a>在这条记录上打开右键菜单，点击 Control 下红框 1 的 Block。

   ![从Capture右键菜单选择Block](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-002.annotated.png)

3. <a id="walkthrough-capture-shortcuts-03-block-draft"></a>在 Rules 检查生成的草稿：URL 精确匹配这条地址，Block 的 Mode 为 `reset`，红框 1 的规则开关默认关闭。

   ![检查默认停用的Block草稿](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-004.annotated.png)

4. <a id="walkthrough-capture-shortcuts-04-name"></a>点击名称，在红框 1 输入 `Capture quick block`。

   ![为Block草稿命名](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-005.annotated.png)

5. <a id="walkthrough-capture-shortcuts-05-enable"></a>打开红框 1 的规则开关。Enabled 只表示当前编辑状态，接下来仍需保存。

   ![启用当前Block草稿](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-006.annotated.png)

6. <a id="walkthrough-capture-shortcuts-06-apply"></a>点击右上角 Save，等待红框 1 的 Rule set applied。此时 Block 才按保存的配置生效。

   ![保存启用状态并确认规则已应用](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-007.annotated.png)

7. <a id="walkthrough-capture-shortcuts-07-blocked"></a>让客户端再次请求同一地址，在 Capture 选择红框 1 的新行。它被 reset，状态为 `—`、大小0 B，没有响应头；不要把上面原有的200记录当成这次结果。

   ![检查新请求被reset后的记录](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-008.annotated.png)

8. <a id="walkthrough-capture-shortcuts-08-disable"></a>回到 Rules，关闭红框 1 的 `Capture quick block` 开关，避免影响后面的断点练习。

   ![停用本轮快捷Block](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-009.annotated.png)

9. <a id="walkthrough-capture-shortcuts-09-disable-apply"></a>点击 Save，核对红框 1 再次显示 Rule set applied。

   ![保存Block停用状态](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-010.annotated.png)

10. 再发送一条同地址请求，在列表红框 1 核对新行恢复200和112 B。图中详情仍选着旧 reset 记录；要读新正文，应另选这条新行。

    ![停用Block后新请求恢复200](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-011.annotated.png)

11. <a id="walkthrough-capture-shortcuts-10-breakpoint-menu"></a>在原来的历史请求上再次打开右键菜单，移到 Breakpoint，查看红框 1 的 This endpoint。

    ![打开Breakpoint并查看This endpoint](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-012.annotated.png)

12. <a id="walkthrough-capture-shortcuts-11-endpoint"></a>点击 This endpoint，核对红框 1 的 Breakpoint created 提示。这会创建一条包含 request、response 两个断点动作的规则，并立即启用、保存；不要重复草稿的 Enable/Save 步骤。提示中的 Undo 可撤销本次创建。

    ![Endpoint断点创建后立即生效](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-013.annotated.png)

13. <a id="walkthrough-capture-shortcuts-12-paused"></a><a id="walkthrough-capture-shortcuts-13-continue-request"></a>让客户端发起新的匹配请求。首次等待为 Request paused；检查 Request Headers 后，点击红框 1 的 Continue 原样放行请求。创建规则不会追溯暂停历史记录。

    ![原样放行新请求的request阶段](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-014.annotated.png)

14. <a id="walkthrough-capture-shortcuts-14-continue-response"></a>同一请求随后停在 Response paused。核对 Status 200 和 Response Headers，再点击红框 1 的 Continue 原样放行响应；只放行 request 阶段还不算完成。

    ![原样放行同一请求的response阶段](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-015.annotated.png)

15. 两阶段均处理后，检查红框 1 的记录已恢复200、112 B，不再处于暂停状态。

    ![两次Continue后请求完成](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-016.annotated.png)

16. 进入 Rules，关闭红框 1 的本次 Breakpoint 规则。右侧仍可看到同一条规则中的 Request 和 Response 两个动作。

    ![停用本轮Endpoint断点规则](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-017.annotated.png)

17. 点击 Save，等待红框 1 的 Rule set applied，保存停用状态。

    ![保存Endpoint断点停用状态](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-018.annotated.png)

18. 再次请求相同地址，在红框 1 的新行检查直接返回200。图中详情仍属于上一条记录；需要看这次响应时再选择新行。单条规则、全局 Break on match、Undo 和挂起队列的管理见 [Breakpoints](breakpoints.md)。

    ![停用断点后新请求直接完成](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-019.annotated.png)

菜单在右侧空间不足时可向左展开；Escape 或点击外部关闭菜单，不等于取消已经生效的规则。关闭匹配或处理挂起项分别按 [Breakpoints](breakpoints.md)操作。

继续阅读：[Composer：手工构造请求](composer.md)。
