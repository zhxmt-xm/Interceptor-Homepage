# Capture: find and understand traffic

[Guide directory](../README.en.md) · [Getting started](getting-started.md)

<a id="开始与暂停录制"></a>
## Start and pause recording

Record requests passing through the proxy. Complete proxy readiness first, then generate authorized traffic with an external client.

1. <a id="walkthrough-02-record"></a>Open Capture and click the recording control in box 1; confirm it shows Recording. This example compares HTTP requests and WebSocket connections under `/e2e/recording-boundary`. Use your own service host and port, and [search by path](#walkthrough-01-filter) to scope the list.

   ![Recording is enabled](../media/v0.1.1-alpha.1/capture-recording-english/step-002.annotated.png)

2. <a id="walkthrough-03-request"></a>Send `GET /e2e/recording-boundary/http-before` through the proxy. The example also connects to `/e2e/recording-boundary/ws-before` and sends `recorded-before-pause`. Select that WebSocket and open Messages in box 1 to inspect the sent and echoed messages; the HTTP `200` record remains in the list. This traffic comes from external clients, not Composer Send.

   ![Captured HTTP request and WebSocket messages](../media/v0.1.1-alpha.1/capture-recording-english/step-003.annotated.png)

3. <a id="walkthrough-11-pause"></a>Click the recording control in box 1 to pause recording new requests. It changes to Paused while the proxy continues forwarding traffic.

   ![The recording control shows Paused](../media/v0.1.1-alpha.1/capture-recording-english/step-004.annotated.png)

4. <a id="walkthrough-12-paused-request"></a>While paused, send `GET /e2e/recording-boundary/http-paused`. Compare the client still receiving a response with no new row for that request. Sending `recorded-during-pause` on the original WebSocket still adds messages to that recorded connection. Box 1 remains Paused, and the filtered list retains the same two records.

   ![Forwarding and previously recorded messages continue while paused](../media/v0.1.1-alpha.1/capture-recording-english/step-005.annotated.png)

5. <a id="walkthrough-13-resume"></a>Click the control in box 1 again to resume Recording.

   ![Recording resumed](../media/v0.1.1-alpha.1/capture-recording-english/step-006.annotated.png)

6. <a id="walkthrough-14-new-request"></a>Send `GET /e2e/recording-boundary/http-after` and open a new `/e2e/recording-boundary/ws-after` connection. Select the new connection in box 1 to inspect sent and echoed `recorded-after-resume` messages. Both new records appear; paused traffic is not backfilled.

   ![New requests and connections are captured after resuming](../media/v0.1.1-alpha.1/capture-recording-english/step-007.annotated.png)

- Pause does not stop forwarding or restore the system proxy.
- Already-started requests can finish; Pause does not truncate a response.
- WebSocket recording is decided at its handshake. A previously recorded connection continues recording messages; a connection opened while paused does not start recording halfway through when you resume. Reconnect the client to capture a new connection.

<a id="搜索和组合筛选"></a>
## Search and combine filters

Locate relevant requests without deleting source records.

1. <a id="walkthrough"></a><a id="walkthrough-01-filter"></a>Enter `/e2e/recording-boundary` in the search field in box 1 to show only the recording-state example above.

   ![Scope the Capture list to the example path](../media/v0.1.1-alpha.1/capture-recording-english/step-001.annotated.png)

2. <a id="walkthrough-15-keyword"></a>For the JSON example below, change the search field in box 1 to `/playground/body/json`. Searching scopes the displayed records; it does not send a request.

   ![Search for the JSON example path](../media/v0.1.1-alpha.1/capture-json-example-english/step-001.annotated.png)

3. <a id="walkthrough-capture-filters"></a><a id="walkthrough-capture-filters-01-records"></a>Switch to five already-captured `/e2e/facets/` records: three GETs, two POSTs, four status-200 responses and one 503. Retain them all for now. Do not click Clear in box 1; it deletes records rather than resetting filters.

   ![Start combined filtering with all five records available](../media/v0.1.1-alpha.1/capture-filters-english/step-010.annotated.png)

4. <a id="walkthrough-capture-filters-02-methods"></a><a id="walkthrough-capture-filters-03-get"></a>Expand the Method heading, then select GET in box 1. This example shows 3 of 5.

   ![Expand Method and select only GET](../media/v0.1.1-alpha.1/capture-filters-english/step-011.annotated.png)

5. <a id="walkthrough-capture-filters-04-get-post"></a>Also select POST in box 1. Values in the same group combine with OR, restoring 5 of 5.

   ![Select GET or POST within the same group](../media/v0.1.1-alpha.1/capture-filters-english/step-012.annotated.png)

6. <a id="walkthrough-capture-filters-05-status"></a><a id="walkthrough-capture-filters-06-and-status"></a>Expand Status, retain both Method selections and select 200 in box 1. Groups combine with AND: 4 of 5 remain visible. The 503 row is hidden, not deleted.

   ![Intersect Method and Status conditions](../media/v0.1.1-alpha.1/capture-filters-english/step-013.annotated.png)

7. <a id="walkthrough-capture-filters-07-search"></a>Enter `/e2e/facets/post` in the search field in box 1. Search intersects with the groups, leaving the two POSTs.

   ![Add a path search to display the two POSTs](../media/v0.1.1-alpha.1/capture-filters-english/step-014.annotated.png)

8. <a id="walkthrough-capture-filters-08-search-back"></a>To widen only the path scope, change the value in box 1 back to `/e2e/facets/`, retaining Method and Status. This image shows `/e2e/facets/post` before editing, not the resulting wider search.

   ![Edit the path scope in the existing search field](../media/v0.1.1-alpha.1/capture-filters-english/step-014.annotated.png)

9. <a id="walkthrough-capture-filters-13-clear-search"></a>When no search term is needed, click × inside the search field. Box 1 marks the field after clearing: Method still selects GET+POST and Status still selects 200, so 4 of 5 are shown. This is neither clearing all filters nor clearing records.

   ![Clear search while retaining Method and Status](../media/v0.1.1-alpha.1/capture-filters-english/step-015.annotated.png)

10. <a id="walkthrough-capture-filters-09-remove-status"></a>Click 200 in box 1 again to remove the Status condition. The 503 record reappears, restoring 5 of 5.

    ![Removing Status makes all five records visible](../media/v0.1.1-alpha.1/capture-filters-english/step-016.annotated.png)

11. <a id="walkthrough-capture-filters-10-remove-post"></a>Deselect POST in box 1, retaining only GET. The list shows 3 of 5.

    ![Remove POST while retaining GET](../media/v0.1.1-alpha.1/capture-filters-english/step-017.annotated.png)

12. <a id="walkthrough-capture-filters-11-remove-get"></a>Deselect GET in box 1 too. Method returns to All and all five original records are visible.

    ![Remove the last Method condition](../media/v0.1.1-alpha.1/capture-filters-english/step-018.annotated.png)

13. <a id="walkthrough-capture-filters-12-collapse"></a>To collapse only the group, click the Method heading or its left arrow; click again to expand. The image remains expanded to show the controls. Box 1 marks the deselected GET value, not the collapse control; clicking it would filter again.

    ![Distinguish the Method heading from its GET value](../media/v0.1.1-alpha.1/capture-filters-english/step-018.annotated.png)

14. To inspect Pending, expand Application first. Pending in box 1 means attribution is still being determined; its count is zero in an empty list. The following images show different stages as the example requests arrive, not records deleted by filtering.

    ![Locate Application Pending in an empty list](../media/v0.1.1-alpha.1/capture-filters-english/step-001.annotated.png)

15. With two records already attributed as Unknown, selecting Application Pending in box 1 shows 0 of 2. Unknown and Pending are different states.

    ![Select Application Pending with no matching rows](../media/v0.1.1-alpha.1/capture-filters-english/step-004.annotated.png)

16. Click Application Pending in box 1 again to remove the condition. Both original records become visible.

    ![Remove Application Pending to restore the records](../media/v0.1.1-alpha.1/capture-filters-english/step-005.annotated.png)

17. While a request awaits a response, choose Pending in box 1 under Status. This image retains only the unfinished `/e2e/facets/pending`, showing 1 of 4.

    ![Find a request awaiting its response with Status Pending](../media/v0.1.1-alpha.1/capture-filters-english/step-007.annotated.png)

18. Remove Status Pending, then choose Pending in box 1 under Content type to find requests whose type is not yet determined. This example retains the same waiting GET.

    ![Inspect an undetermined type through Content type Pending](../media/v0.1.1-alpha.1/capture-filters-english/step-008.annotated.png)

19. After the response completes, remove the Pending condition. Check that 200 in box 1 now counts four records and Pending is zero. The later 503 record completes the five-record set used above.

    ![Pending becomes a determined state after the response completes](../media/v0.1.1-alpha.1/capture-filters-english/step-009.annotated.png)

20. <a id="walkthrough-capture-facets"></a><a id="walkthrough-capture-facets-01-application"></a><a id="walkthrough-capture-facets-02-unknown"></a>To filter by application attribution, expand Application and choose a value. This image shows the five records before selection, with Unknown counting five. Unknown means no specific application was identified; it does not identify a process name.

    ![Expand Application to choose Unknown](../media/v0.1.1-alpha.1/capture-filters-english/step-010.png)

21. <a id="walkthrough-capture-facets-03-host-group"></a><a id="walkthrough-capture-facets-04-host-select"></a>To narrow by host, expand Host and choose the destination. This separate GET example uses host `127.0.0.1`. The image shows the check before expanding Host: Headers exposes `http://127.0.0.1:53548/e2e/capture/clear-facets`, including the port to verify in details.

    ![Verify the host in Headers before choosing its Host filter](../media/v0.1.1-alpha.1/capture-clear-state-english/step-002.png)

22. <a id="walkthrough-capture-facets-05-protocol-group"></a><a id="walkthrough-capture-facets-06-protocol-select"></a>To filter by protocol, expand Protocol and select HTTP/2 in box 1. This image shows the selected state from a separate H2 example. Click again to deselect; see the full [HTTP/2 steps](#http2).

    ![Inspect the actual selected HTTP2 Protocol state](../media/v0.1.1-alpha.1/capture-http2-english/step-003.annotated.png)

23. <a id="walkthrough-capture-facets-07-type-group"></a><a id="walkthrough-capture-facets-08-json"></a><a id="walkthrough-capture-facets-11-remove-type"></a>To filter by content type, expand Content type and select json. Clicking selected json again removes only that dimension, leaving other selected groups intact. The image shows All before selecting among the five records, with json counting five. Type grouping is not validation that every body is valid JSON.

    ![Locate json in the Content type group](../media/v0.1.1-alpha.1/capture-filters-english/step-010.png)

24. <a id="walkthrough-capture-facets-09-rule-group"></a><a id="walkthrough-capture-facets-10-rule-select"></a>To filter by rule hits, expand Rule and select the rule. This separate example selects `E2E hierarchy rule`. Box 1 marks search `/e2e/rules/hierarchy-status`; box 2 marks the matching GET, with 1 of 2 displayed.

    ![Combine Rule selection and path search to find a matching record](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-027.annotated.png)

    <a id="walkthrough-capture-facets-15-rules"></a><a id="walkthrough-capture-facets-16-disable"></a><a id="walkthrough-capture-facets-17-apply-disabled"></a>When finished, open Rules, find this exercise's rule, turn off its switch and Save. Selecting or deselecting the Rule filter only changes the list; it does not enable or disable a rule. See [Rules](rules.md) for saving changes.

25. <a id="walkthrough-capture-facets-12-clear-facets"></a>To remove group selections together, click Clear all filters in box 1 outside the search field. This separate demonstration uses one GET `/e2e/capture/clear-facets`, with GET currently selected in Method. The goal is not to delete the record.

    ![Locate Clear all filters before removing group selections](../media/v0.1.1-alpha.1/capture-clear-state-english/step-003.annotated.png)

26. Check that the group returns to All while the original record and Inspector remain. Box 1 marks Clear all filters after the selections were removed; the list still shows 1 of 1.

    ![Retain the record and Inspector after clearing filters](../media/v0.1.1-alpha.1/capture-clear-state-english/step-004.annotated.png)

27. <a id="walkthrough-capture-facets-13-hide-filters"></a><a id="walkthrough-capture-facets-14-show-filters"></a>To hide the filter sidebar temporarily, click the panel icon to the left of Recording, then click again to show it. The image shows its location while expanded. Hiding the sidebar neither deletes records nor closes the selected request's Inspector.

    ![Locate the panel toggle while the filter sidebar is expanded](../media/v0.1.1-alpha.1/capture-clear-state-english/step-002.png)

28. Click Capture Clear to the right of Recording only when you no longer need the records. Box 1 shows Clear disabled after the list, Inspector and record counts are emptied together. Do not use this operation merely to reset filters.

    ![Capture Clear removes records rather than only filters](../media/v0.1.1-alpha.1/capture-clear-state-english/step-005.annotated.png)

Search matches Host and Path, not the port. For this chapter's TLS example, search `localhost` and verify the port in details; `localhost:56104` is not equivalent. The facet examples show Paused after system-proxy Restore. Restore changes the system proxy; that label alone does not establish whether an explicit proxy client is still producing new records.

- Search is not a full-text query over arbitrary headers or body text.
- Group counts refer to the complete current recording, not necessarily the currently visible filtered rows.
- Pending means the relevant information is not yet available; it does not automatically mean failure.
- Selecting a value leaves the group expanded. Its title controls expansion.
- Clearing filters is not Clear capture. Do not delete records merely to reset filters.
- Application attribution is platform-dependent. Windows attribution does not guarantee equivalent results everywhere.

<a id="检查请求详情"></a>
## Inspect a request

1. <a id="walkthrough-04-select"></a>This example uses `POST http://127.0.0.1:55115/playground/body/json`; replace it with your own service address. Send `Content-Type: application/json` and body `{"ready":true}` through the proxy with an external client. Box 1 in the first image marks the captured `200` row. Click it: box 1 in the second image shows the selected row, with URL, method, protocol and status in the Inspector.

   ![The POST appears in Capture](../media/v0.1.1-alpha.1/capture-json-example-english/step-002.annotated.png)

   ![Select the same POST to inspect its summary](../media/v0.1.1-alpha.1/capture-json-example-english/step-003.annotated.png)

2. <a id="walkthrough-05-headers"></a>Open Headers in box 1 to inspect both sides of the same request. Both use `application/json`, and the response Content-Length is `30`.

   ![Headers for the same JSON request](../media/v0.1.1-alpha.1/capture-json-example-english/step-004.annotated.png)

3. <a id="walkthrough-06-response"></a>Open Response and select Raw in box 1 to read `{"ready":true,"items":[1,2,3]}`. This is the POST response, not its request body.

   ![JSON response for the same POST](../media/v0.1.1-alpha.1/capture-json-example-english/step-006.annotated.png)

4. <a id="walkthrough-capture-inspection-06-headers"></a>To compare detail sections, select a separate `GET http://127.0.0.1:56349/e2e/capture/section-collapse` and open Headers; replace the port with your own service's port. General in box 1 and Response Headers below are both expanded. This record is `H1`, `200`, not the earlier JSON POST.

   ![General and Response Headers expanded for a separate GET](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-001.annotated.png)

5. <a id="walkthrough-capture-inspection-07-collapse"></a>Click the General heading in box 1 to collapse it. Response Headers remains expanded rather than collapsing with General.

   ![Collapse only General while retaining response headers](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-003.annotated.png)

6. <a id="walkthrough-capture-response-headers-collapse"></a>Click Response Headers in box 1 to collapse that section too. General and Response Headers are now collapsed; Request Headers remains readable.

   ![Collapse Response Headers independently](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-004.annotated.png)

7. <a id="walkthrough-capture-inspection-08-expand"></a>Click box 1 to reopen General. Response Headers stays collapsed; each heading controls only its own section.

   ![Reopen General without changing the response-header section](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-005.annotated.png)

8. <a id="walkthrough-10-timing"></a>Open Timing in box 1 for this GET. Waiting (TTFB) is `12 ms`, Response bodies is `4 ms`, and Total is `16 ms`; request bytes are `0 B` and response bytes are `103 B`. These belong to this record, not a fixed performance target.

   ![Inspect Timing for the same GET](../media/v0.1.1-alpha.1/capture-headers-timing-english/step-006.annotated.png)

9. <a id="walkthrough-capture-inspection"></a><a id="walkthrough-capture-inspection-01-filter"></a><a id="walkthrough-capture-inspection-02-record"></a><a id="walkthrough-capture-inspection-03-post"></a><a id="walkthrough-capture-inspection-04-pause"></a><a id="walkthrough-capture-inspection-05-select"></a><a id="walkthrough-capture-inspection-09-request"></a>To inspect the request body, select the earlier `POST /playground/body/json` again, open Request, and choose Raw in box 1. Its body is `{"ready":true}`, `14` bytes, with no Query parameters.

   ![Request Raw body for the same POST](../media/v0.1.1-alpha.1/capture-json-example-english/step-005.annotated.png)

10. <a id="walkthrough-capture-inspection-10-raw"></a>Back in Response, Raw in box 1 reads that side's body. Compare request `{"ready":true}` with response `{"ready":true,"items":[1,2,3]}` rather than treating both as the same payload.

    ![Distinguish the request and response Raw bodies](../media/v0.1.1-alpha.1/capture-json-example-english/step-011.annotated.png)

11. <a id="walkthrough-capture-query"></a>Inspect URL query parameters separately from the request body. This example uses `GET /e2e/capture/section-collapse/query` with `orderId=ord_42&tag=books&tag=featured&message=hello%20capture`. Open Request and inspect the four parameters beneath Query String Parameters in box 1: both `tag` entries remain, and `message` is decoded to `hello capture`.

    ![Inspect repeated Query parameters and decoded spaces](../media/v0.1.1-alpha.1/capture-query-layout-english/step-007.annotated.png)

12. <a id="walkthrough-capture-query-collapse"></a>Click the Query String Parameters heading in box 1 to collapse the group. This hides its contents without deleting the URL parameters or request.

    ![Collapse the Query group](../media/v0.1.1-alpha.1/capture-query-layout-english/step-008.annotated.png)

13. <a id="walkthrough-capture-query-expand"></a>Click box 1 again to reopen the same group and inspect the parameters, including both `tag` values.

    ![Reopen Query for the same request](../media/v0.1.1-alpha.1/capture-query-layout-english/step-009.annotated.png)

14. <a id="walkthrough-capture-inspection-11-widen"></a>For the same Query request, drag the list/Inspector divider in box 1 to the left. Here it moves `120px`, widening details without changing the parameter values.

    ![Drag the divider left to widen the Inspector](../media/v0.1.1-alpha.1/capture-query-layout-english/step-010.annotated.png)

15. <a id="walkthrough-capture-inspection-27-restore-width"></a>Drag the divider in box 1 back to its starting position. The original width returns, and the same Query request remains selected.

    ![Restore the Inspector width while retaining Query](../media/v0.1.1-alpha.1/capture-query-layout-english/step-011.annotated.png)

- A request can appear before its response completes. Streaming sizes and status continue changing.
- A server can return an early response while the client is still uploading.
- Distinguish failed, cancelled and complete exchanges using their actual state, not merely the presence of a row.

<a id="选择正文查看方式"></a>
## Choose a body view

views present the same body differently. HTML/SVG is not executed as a webpage and changing modes does not resend a request.

1. Continue with the same `POST /playground/body/json`. Response in box 1 shows its JSON result.

   ![Response state for the same JSON request](../media/v0.1.1-alpha.1/capture-json-example-english/step-016.annotated.png)

2. <a id="walkthrough-07-tree"></a>Select Tree in box 1 of the first image to inspect `ready` and the `items` array. Click the root disclosure in box 1 of the second image to collapse it, then box 1 in the third image to expand it again; the data was not deleted. Copy in box 1 of the fourth image copies the same JSON source.

   ![Select Tree to inspect the JSON structure](../media/v0.1.1-alpha.1/capture-json-example-english/step-007.annotated.png)

   ![Collapse the JSON root](../media/v0.1.1-alpha.1/capture-json-example-english/step-008.annotated.png)

   ![Expand the JSON root again](../media/v0.1.1-alpha.1/capture-json-example-english/step-009.annotated.png)

   ![Copy the same JSON from Tree](../media/v0.1.1-alpha.1/capture-json-example-english/step-010.annotated.png)

3. <a id="walkthrough-08-raw"></a><a id="walkthrough-capture-inspection-16-copy-request"></a>Select Raw in box 1 for the same JSON's source text. Markdown has separate Preview, Split and Source modes; see the [Markdown example below](#walkthrough-capture-markdown-viewer).

   ![Return the same JSON from Tree to Raw](../media/v0.1.1-alpha.1/capture-json-example-english/step-011.annotated.png)

4. <a id="walkthrough-fullscreen-response"></a>Continue using the same `POST /playground/body/json` response for byte inspection and fullscreen. Response in box 1 still contains `{"ready":true,"items":[1,2,3]}`.

   ![Keep the same JSON response selected](../media/v0.1.1-alpha.1/capture-json-example-english/step-016.annotated.png)

5. <a id="walkthrough-fullscreen-raw"></a>Select Raw in box 1 to inspect the same response's source first.

   ![Select Raw before fullscreen](../media/v0.1.1-alpha.1/capture-json-example-english/step-011.annotated.png)

6. <a id="walkthrough-09-hex"></a>Select Hex in box 1 to inspect the same JSON bytes; the initial `7b 22` represents `{"`. Changing views does not resend the request.

   ![Select Hex for the same JSON](../media/v0.1.1-alpha.1/capture-json-example-english/step-012.annotated.png)

7. <a id="walkthrough-08a-fullscreen"></a>Click Fullscreen at the right end of the body toolbar. Hex in box 1 remains selected in the enlarged view of the same POST response.

   ![Open the same JSON fullscreen in Hex](../media/v0.1.1-alpha.1/capture-json-example-english/step-013.annotated.png)

8. <a id="walkthrough-fullscreen-copy"></a>Switch to Raw inside fullscreen, then click the header Copy control in box 1. It copies `{"ready":true,"items":[1,2,3]}`, not the Hex display.

   ![Copy the same JSON source from fullscreen](../media/v0.1.1-alpha.1/capture-json-example-english/step-014.annotated.png)

9. <a id="walkthrough-08b-close-fullscreen"></a>Click the Raw mode control inside the dialog to move focus away from the Copy tooltip, then press Escape. Raw in box 1 remains selected in details with unchanged JSON.

   ![Escape returns to Raw for the same JSON](../media/v0.1.1-alpha.1/capture-json-example-english/step-015.annotated.png)

10. <a id="walkthrough-fullscreen-close"></a>You can also click Close (×) on the fullscreen header. The separate `POST /e2e/fullscreen-json` example below uses this action: Raw in box 1 stays selected, with response `{"source":"fullscreen-response","values":[1,2,3]}`.

    ![Close returns to details while retaining Raw](../media/v0.1.1-alpha.1/capture-fullscreen-english/step-016.annotated.png)

11. <a id="walkthrough-fullscreen-copy-again"></a>For that separate `/e2e/fullscreen-json` example, return to Raw and click Copy in box 1. The copied text remains `{"source":"fullscreen-response","values":[1,2,3]}`, not the Hex display.

    ![Copy the same source after returning to Raw](../media/v0.1.1-alpha.1/capture-fullscreen-english/step-019.annotated.png)

12. <a id="walkthrough-capture-body-scroll"></a>Select the relevant request before browsing a long body. This example uses `POST /e2e/detail-body-fill`, whose request body contains 200 `entries`. Open Request in box 1 to inspect the beginning.

    ![Open the request body containing 200 entries](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-002.annotated.png)

13. <a id="walkthrough-capture-inspection-12-inner-scroll"></a>Box 1 marks the Inspector content area; the body inside it has its own scrollbar. Move the pointer over the body editor and wheel downward without resending the request.

    ![Use the wheel inside the body](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-003.annotated.png)

14. <a id="walkthrough-capture-inspection-13-request-end"></a>Drag the body's own scrollbar within box 1 to its lower boundary. Inspect the last item, `index: 199` and `value: entry-199`.

    ![Drag the body scrollbar to inspect the final item](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-004.annotated.png)

15. <a id="walkthrough-capture-inspection-14-outer-up"></a><a id="walkthrough-capture-inspection-15-scroll-chain"></a>Once the body reaches its end, keep the pointer over it and continue wheeling downward. The outer details in box 1 move while the body remains at its final item.

    ![Continue scrolling outer details after the body reaches its boundary](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-005.annotated.png)

    For keyboard navigation, focus the body first and use the appropriate start/end shortcuts; see the [long-message keyboard example](#walkthrough-capture-websocket-messages-14-keyboard-end). Scrolling and resizing do not change request or response content.

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

- Text, WebSocket and gRPC read-only previews are limited to `2 MiB`. Images have a separate `16 MiB` read/decode budget.
- Complete bodies up to `1 MiB` can format automatically. Complete `1–2 MiB` bodies require Format. Truncated or incomplete captures must not be formatted.
- Compare [manual Format](#walkthrough-capture-body-limits-07-format) above 1 MiB with a [3 MiB response previewed only up to 2 MiB](#walkthrough-capture-body-limits-11-preview). Use [Save body](#walkthrough-capture-body-limits-13-save-dialog) when you need the complete captured content rather than a copied preview.
- Format only changes presentation; failures retain source text. A mode without Format is not necessarily unreadable.
- Copy uses the viewer's currently available content, not necessarily an entire large file.
- Save body exports the complete captured body, not just the preview. It cannot recover bytes never received before a network interruption.
- `multipart/form-data` is not currently presented as a structured upload-part list.

<a id="walkthrough-capture-markdown-viewer"></a>
### Markdown preview, source and fullscreen

This separate example uses `GET /playground/body/markdown`, not the earlier JSON request. Search that path, select the record and open Response. Its Markdown body is `36` bytes.

1. <a id="walkthrough-capture-inspection-17-preview"></a>Preview in box 1 shows the rendered result: a `Capture Lab` heading and the list items `request` and `response`.

   ![Markdown Preview shows the heading and list](../media/v0.1.1-alpha.1/capture-markdown-english/step-033.annotated.png)

2. <a id="walkthrough-capture-inspection-18-split"></a>Focus the Preview mode control, then press ArrowRight once to select Split in box 1. The rendered preview stays above, with source containing `#` and `-` below.

   ![Markdown Split shows the preview and source together](../media/v0.1.1-alpha.1/capture-markdown-english/step-034.annotated.png)

3. <a id="walkthrough-capture-inspection-19-source"></a>Press ArrowRight once more to select Source in box 1 and inspect only the original Markdown text.

   ![Markdown Source shows the original text](../media/v0.1.1-alpha.1/capture-markdown-english/step-035.annotated.png)

4. <a id="walkthrough-capture-inspection-20-copy-source"></a>Click Copy in box 1 on the body toolbar. It copies the complete source, including Markdown markers and line breaks, rather than only the rendered heading and list text.

   ![Copy the complete Markdown source](../media/v0.1.1-alpha.1/capture-markdown-english/step-036.annotated.png)

5. <a id="walkthrough-capture-inspection-23-fullscreen"></a>Click Fullscreen at the right end of the body toolbar. Source in box 1 remains selected inside the dialog with the same Markdown; the box does not mark the fullscreen-opening button.

   ![Fullscreen retains Markdown Source](../media/v0.1.1-alpha.1/capture-markdown-english/step-037.annotated.png)

6. <a id="walkthrough-capture-inspection-24-return"></a>Press Escape to return to details. Source in box 1 stays selected with unchanged text, without resending the request.

   ![Escape returns to the retained Markdown Source mode](../media/v0.1.1-alpha.1/capture-markdown-english/step-038.annotated.png)

7. <a id="walkthrough-capture-inspection-25-preview-again"></a>Click Preview in box 1 to return to the same Markdown's rendered view.

   ![Return Markdown to Preview](../media/v0.1.1-alpha.1/capture-markdown-english/step-039.annotated.png)

<a id="walkthrough-capture-inspection-21-source-scroll"></a><a id="walkthrough-capture-inspection-22-source-end"></a>Use the wheel or body scrollbar to reach the end of a longer Markdown Source; the short example above is already fully visible. <a id="walkthrough-capture-inspection-26-hex"></a>Hex is also available for byte inspection; see the [Hex example](#walkthrough-09-hex).

<a id="walkthrough-capture-audio-metadata"></a>
### Inspect audio metadata and save

1. Select `GET /playground/body/audio` and open Response. This example shows `audio/wav`, `48 B`; the App does not load an audio player. Box 1 is Save body, not Play.

   ![Inspect audio MIME, size and Save body](../media/v0.1.1-alpha.1/capture-audio-metadata-english/step-007.annotated.png)

2. Click Save body, choose your directory in the system Save dialog, and save `body-audio.wav`.

   ![Save the captured body-audio.wav](../media/v0.1.1-alpha.1/capture-audio-metadata-english/step-008.png)

3. After saving, the same Response retains its MIME and `48 B` size, and Save body in box 1 remains available. Saving exports captured bytes without starting playback inside the App.

   ![Retain the audio metadata after saving](../media/v0.1.1-alpha.1/capture-audio-metadata-english/step-009.annotated.png)

<a id="walkthrough-capture-video-metadata"></a>
### Inspect video metadata and save

1. Select a separate `GET /playground/body/video` and open Response. This small example shows `video/mp4`, `24 B`, demonstrating metadata and saving only—not a complete playable movie, duration, or codec inspection. Box 1 is Save body.

   ![Inspect video MIME, size and Save body](../media/v0.1.1-alpha.1/capture-video-metadata-english/step-011.annotated.png)

2. Click Save body and save `body-video.mp4` through the system Save dialog.

   ![Save the captured body-video.mp4](../media/v0.1.1-alpha.1/capture-video-metadata-english/step-012.png)

3. Confirm the same Response still shows `video/mp4`, `24 B`, with Save body available in box 1. Export cannot turn incomplete media content into a complete file.

   ![Retain the video metadata after saving](../media/v0.1.1-alpha.1/capture-video-metadata-english/step-013.annotated.png)

<a id="walkthrough-capture-body-limits"></a>
## Format a large body and save the complete file

Enable Recording and send requests from your client through the proxy. The examples use `/e2e/body-limits/manual` and `/e2e/body-limits/truncated` to compare manual formatting and the preview limit; search for your actual endpoint path. The body preview and the complete saved file have different scopes.

1. <a id="walkthrough-capture-body-limits-01-scope"></a><a id="walkthrough-capture-body-limits-02-record"></a><a id="walkthrough-capture-body-limits-03-manual-request"></a><a id="walkthrough-capture-body-limits-04-manual-select"></a><a id="walkthrough-capture-body-limits-05-unformatted"></a>Select `GET /e2e/body-limits/manual` and open Response. This complete JSON body is about `1.25 MiB`, above the automatic-formatting threshold, so it initially retains its source text. Long strings can still wrap visually. Box 1 marks the available Format control.

   ![Inspect the manual Format control for a large body](../media/v0.1.1-alpha.1/capture-body-manual-english/step-001.annotated.png)

2. <a id="walkthrough-capture-body-limits-06-copy-before"></a>Click Copy in box 1 first to inspect the unformatted source. This body is below the `2 MiB` preview limit, so the complete text is available to copy.

   ![Copy the source before formatting](../media/v0.1.1-alpha.1/capture-body-manual-english/step-002.annotated.png)

3. <a id="walkthrough-capture-body-limits-07-format"></a>Click Format in box 1 to add indentation and line breaks to the JSON view. This neither resends the request nor changes the captured response.

   ![Manually format the same JSON body](../media/v0.1.1-alpha.1/capture-body-manual-english/step-003.annotated.png)

4. <a id="walkthrough-capture-body-limits-08-copy-formatted"></a>Click Copy in box 1 again to compare the formatted display text. Its fields and values are unchanged; only presentation differs.

   ![Copy the formatted display text](../media/v0.1.1-alpha.1/capture-body-manual-english/step-004.annotated.png)

5. <a id="walkthrough-capture-body-limits-09-large-request"></a><a id="walkthrough-capture-body-limits-10-large-select"></a><a id="walkthrough-capture-body-limits-11-preview"></a>Inspect `GET /e2e/body-limits/truncated` next. Only the first `2 MiB` of this approximately `3 MiB` response is previewed; the notice states that the full body remains captured for export. Format in box 1 is disabled. A truncated preview does not mean the network response was lost.

   ![Inspect the preview-limit notice and disabled Format](../media/v0.1.1-alpha.1/capture-body-truncated-english/step-001.annotated.png)

6. <a id="walkthrough-capture-body-limits-12-copy-preview"></a>Click Copy in box 1. It copies only the current `2 MiB` preview, not the complete response.

   ![Copy only the current preview](../media/v0.1.1-alpha.1/capture-body-truncated-english/step-002.annotated.png)

7. <a id="walkthrough-capture-body-limits-format-disabled"></a>Format in box 1 remains unavailable after copying. Neither formatting nor Copy replaces saving the complete body.

   ![The truncated preview still cannot be formatted](../media/v0.1.1-alpha.1/capture-body-truncated-english/step-003.annotated.png)

8. <a id="walkthrough-capture-body-limits-13-save-dialog"></a>Use Save body for complete content. This separate UTF-8 example is `GET /e2e/body-preview/four-byte`, with `2097166` response bytes, or `2 MiB + 14`; it is not the `3 MiB` JSON above. Select it, open Response, and click Save body on the body toolbar. Choose your directory in the system Save dialog and save `utf8-full-body.txt`.

   ![Save the complete utf8-full-body.txt through Save body](../media/v0.1.1-alpha.1/capture-body-save-english/step-049.png)

9. <a id="walkthrough-capture-body-limits-14-saved-complete"></a>Wait for saving to finish, then close the Inspector and return to the Capture list. The GET remains `200`, `H1`; its list size is rounded to `2 MB`. The complete saved file should end with `🙂after-preview`. Those trailing bytes lie beyond the current preview and cannot be recovered by copying that preview.

   ![Return to the original request list after saving the complete body](../media/v0.1.1-alpha.1/capture-body-save-english/step-050.png)

<a id="区分原始内容与规则修改结果"></a>
## Distinguish Original and Final

Inspect `/e2e/body-effect-regular-request`, already rewritten by `E2E regular request body`. Original is `{"stage":"regular-original"}` and Final is `{"stage":"regular-final"}`. See [Rules](rules.md#walkthrough-rules-response-evidence) for configuration.

1. Search for and select this POST in Capture, then open Request. Final in box 1 is the current body version; Rule replaced and Text above it identify a rule replacement.

   ![Select the rewritten POST and inspect Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-027.annotated.png)

2. Click Original in box 1 to read the client's initial `regular-original` body.

   ![Select Original for the same request](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-029.annotated.png)

3. Choose Raw in box 1. The display mode changes, but Original remains selected.

   ![Switch Original to Raw](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-030.annotated.png)

4. Click Copy in box 1 on the body toolbar to copy the current Original.

   ![Copy the Original JSON bytes](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-031.annotated.png)

5. Click Fullscreen on the body toolbar to enlarge the same Original. It still contains `{"stage":"regular-original"}`.

   ![Inspect Original fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-032.png)

6. Click Copy in box 1 on the dialog title bar. This still copies Original, not a different version.

   ![Copy Original from fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-033.annotated.png)

7. Press Escape to return to details. Original in box 1 remains selected, with Raw still active.

   ![Retain Original and Raw after closing fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-034.annotated.png)

8. Click Final in box 1 to inspect `{"stage":"regular-final"}` instead.

   ![Return to Final for the same request](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-037.annotated.png)

9. Click Copy in box 1 on the body toolbar. This now copies Final rather than the previous Original.

   ![Copy the Final JSON bytes](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-039.annotated.png)

10. Click Save body, choose a directory in the native Save panel and save as `body-effect-regular-request-final.json`.

    ![Save the current Final version through the native panel](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-043.png)

11. Return to the same request. Final in box 1 remains selected. The saved content is the 25-byte `{"stage":"regular-final"}`, not indentation added by Pretty.

    ![Final remains selected after saving](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-044.annotated.png)

12. Click the Rule replaced source marker in box 1 to locate the rule that produced this body.

    ![Follow the rule-source marker beside the body](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-045.annotated.png)

13. In Rules, inspect `E2E regular request body` in box 1. Its request JSON action writes `regular-final`. Disable this exercise's rule and Save when finished.

    ![The body source locates the same Rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-046.annotated.png)

14. To inspect response replacement, select the separate GET `/e2e/body-effect-regular-response` and open Response. Its Final is the 26-byte `{"stage":"response-final"}`. Original is disabled with an unavailable notice, not an empty body. See [Rules](rules.md#walkthrough-rules-response-evidence-44-response-body) for configuring and disabling the response rule.

    ![Unavailable Original and retained Final after response replacement](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-061.png)

- Empty Original and unavailable Original are different states.
- A response replaced at the header stage may never have exposed its original body. “Unavailable” does not mean an empty response.
- A rule hit alone does not prove that complete original bytes or a diff exist.

<a id="https-与-tls-tunnel"></a>
## HTTPS and TLS tunnels

Inspect only authorized HTTPS traffic, with the required CA trust and decryption settings.

1. <a id="walkthrough-18-certificates"></a>Open Settings → Certificates and inspect Generated and Trusted. If trust is missing, follow [Settings](settings.md#https-decryption) for installation and native authorization. Do not regenerate an existing valid CA.

   ![Inspect the existing CA and system trust](../media/v0.1.1-alpha.1/tls-pattern-english/step-001.png)

2. <a id="walkthrough-20-decryption"></a>Once trust is ready, enable Decrypt HTTPS (MITM) in box 1.

   ![Enable MITM through Certificates](../media/v0.1.1-alpha.1/tls-pattern-english/step-002.annotated.png)

3. <a id="walkthrough-19-local-origin"></a>Only for an untrusted certificate on an example origin you control, enter `localhost` in Per-host overrides in box 1 and click Add host in box 2. This adds an origin-certificate exception, not TLS passthrough; do not apply it indiscriminately to public hosts.

   ![Add an origin-certificate exception only for owned localhost](../media/v0.1.1-alpha.1/tls-pattern-english/step-011.annotated.png)

4. Search `/e2e/passthrough/http` in Capture and inspect the client's new connection to `https://localhost:56104/e2e/passthrough/http`. Select its GET and open Response in box 1. This example shows H1, 200 and 42 B of JSON containing `mode: https-h1` and `secure: true`.

   ![The new HTTPS connection exposes HTTP content before passthrough](../media/v0.1.1-alpha.1/tls-pattern-english/step-012.annotated.png)

5. To preserve encrypted forwarding for this host, open Settings → TLS passthrough, enter exact `localhost` in box 1 and click Add in box 2.

   ![Add an exact localhost passthrough entry](../media/v0.1.1-alpha.1/tls-pattern-english/step-013.annotated.png)

6. Reconnect the client to the same HTTPS address, search `localhost` in Capture and select the new CONNECT in box 1. TLS tunnel shows the host, port `56104` and encrypted-forwarding state, without HTTP paths, Headers or Body. View passthrough pattern in box 2 locates the matching entry. MITM active does not override that entry.

   ![Inspect the new CONNECT tunnel and passthrough navigation](../media/v0.1.1-alpha.1/tls-pattern-english/step-014.annotated.png)

7. Follow View passthrough pattern, locate `localhost` and click its removal button in box 1. This removes passthrough, not the origin-certificate exception in Certificates.

   ![Locate and remove this localhost passthrough entry](../media/v0.1.1-alpha.1/tls-pattern-english/step-015.annotated.png)

8. Establish another new client connection, search `/e2e/passthrough/http` and select the new GET. Response in box 1 exposes the 42-byte JSON again. The old CONNECT does not become a decrypted record.

   ![A new HTTPS connection exposes its body after passthrough removal](../media/v0.1.1-alpha.1/tls-pattern-english/step-016.annotated.png)

9. <a id="walkthrough-22-http2"></a>For a separate HTTP/2 request, search `/playground/h2-json` and select the record in box 1. This example uses `https://localhost:54766` and H2; it is not a continuation of the preceding H1 connection.

   ![Select a separate decrypted HTTP2 request](../media/v0.1.1-alpha.1/capture-http2-english/step-001.annotated.png)

10. <a id="walkthrough-29-body-html"></a><a id="walkthrough-29-body-markdown"></a><a id="walkthrough-29-body-form"></a><a id="walkthrough-29-body-png"></a><a id="walkthrough-29-body-binary"></a><a id="walkthrough-29-body-audio"></a><a id="walkthrough-29-encoding-gzip"></a><a id="walkthrough-29-encoding-corrupt-gzip"></a><a id="walkthrough-30-decryption-off"></a>When finished, turn off Decrypt HTTPS (MITM) in box 1 in Certificates. These cleanup images show the same settings controls; undo only settings enabled for your exercise.

    ![Turn off this exercise's MITM through Certificates](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

11. <a id="walkthrough-31-remove-exception"></a>If you added the origin-certificate exception, click × on the `localhost` tag in box 1. Preserve the existing CA and other people's exceptions.

    ![Remove the localhost origin exception in Certificates](../media/v0.1.1-alpha.1/tls-cleanup-english/step-041.annotated.png)

12. Check that the `localhost` tag has disappeared. Box 1 marks the empty Per-host overrides input, not a deletion button.

    ![The origin-exception input is empty after removal](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.annotated.png)

- Pinning, independent trust stores and explicit passthrough can prevent normal interception.
- Passthrough preserves encryption; it does not conceal an already-decrypted response.
- A confirmed passthrough tunnel can link to its matching setting. Do not weaken certificate checks globally to see content.
- Follow [Settings](settings.md#https-decryption) for actual certificate/native authorization steps and platform limitations.

### Inspect HTTPS-to-HTTP mapping results

Configure your source and destination services through [cross-scheme Rules mapping](rules.md#walkthrough-rules-routing), with the HTTPS decryption prerequisites described above. This example uses `E2E HTTPS to HTTP mapping` to route `https://localhost:56814/e2e/rules/tls-mapping/enabled` to `http://127.0.0.1:56810/e2e/rules/mapped-http`; the ports belong to the example services.

1. <a id="walkthrough-capture-mapping-response"></a>After saving the enabled Rule, request the original HTTPS address through the proxy. Search `/e2e/rules/` in Capture, select `/enabled` and open Response in box 1. Its actual text is `owned-http-mapping-result`, not merely Tunnel metadata.

   ![The HTTPS request receives the actual HTTP destination response](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-020.annotated.png)

2. <a id="walkthrough-capture-mapping-disable"></a>Return to Rules, disable the Rule and click Save. Rule set applied in box 1 confirms the disabled state was saved; switching it off without saving is not enough.

   ![The disabled mapping state is saved](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-022.annotated.png)

3. <a id="walkthrough-capture-mapping-restored"></a>Send a new `GET https://localhost:56814/e2e/rules/tls-mapping/disabled`. Box 1 marks this new `404` record: it reached the original HTTPS service, where that path is not defined. `/disabled` and `/enabled` are different complete URLs, not renamed versions of one record.

   ![A new request reaches the original HTTPS service after disabling](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-023.annotated.png)

### Read a local file through an HTTPS request

This independent local-file example uses HTTPS service `localhost:56814` and HTTP service `127.0.0.1:56810` for the original response, not the previous example's ports. Capture saves the file before Map Local uses it. Substitute your own service addresses and save location.

1. <a id="walkthrough-capture-local-save-dialog"></a>Click Save on the Response toolbar for this example's `/e2e/rules/tls-mapping/enabled` request. In the native Save body dialog, choose your directory and save `https-map-local-response.txt`.

   ![Save this response file through the product](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-021.png)

2. <a id="walkthrough-capture-local-saved"></a>Return to Capture after saving. Box 1 marks the body toolbar Save control. The response remains `owned-http-mapping-result`, and the saved file contains the same `25` bytes.

   ![Return to the same Response after saving](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-022.annotated.png)

3. <a id="walkthrough-capture-local-name"></a>Select this example's disabled matching Rule in Rules and change its name in box 1 to `E2E HTTPS to local file mapping`. Retain Host `localhost` and Path `/e2e/rules/tls-mapping`.

   ![Name the local file mapping Rule](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-026.annotated.png)

4. <a id="walkthrough-capture-local-action"></a>Remove the previous Map Remote action, open Add action and choose Map Local in box 1. The validation notice shown while no action exists disappears once the configuration is valid.

   ![Choose the Map Local action](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-027.annotated.png)

5. <a id="walkthrough-capture-local-missing-path"></a>To observe a path error, first enter the full path to a nonexistent `https-map-local-missing.txt` in the same directory in box 1. Do not create that file.

   ![Enter a missing local file path](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-028.annotated.png)

6. <a id="walkthrough-capture-local-enable"></a>Turn on the Rule switch in box 1. This changes the draft; saving is still required.

   ![Enable the Map Local draft](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-029.annotated.png)

7. <a id="walkthrough-capture-local-save-missing"></a>Click Save at the upper right. Rule set applied in box 1 confirms the Rule is saved and active.

   ![The missing-path Rule is saved](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-030.annotated.png)

8. <a id="walkthrough-capture-local-missing-result"></a>Request `https://localhost:56814/e2e/rules/tls-mapping/map-local-missing` through the proxy. Search that path in Capture and open Response in box 1. The actual result is `404` with body `Map Local target not found.`.

   ![The HTTPS request returns the missing-file message](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-031.annotated.png)

9. <a id="walkthrough-capture-local-correct-path"></a>Return to the Rule and correct box 1 to the `https-map-local-response.txt` saved by the product in step 1. Edit its path rather than creating another file.

   ![Correct the path to the product-saved file](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-032.annotated.png)

10. <a id="walkthrough-capture-local-save-corrected"></a>Click Save again and confirm Rule set applied in box 1. Changing the input alone does not apply the Rule.

    ![The corrected file path is saved](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-033.annotated.png)

11. <a id="walkthrough-capture-local-file-result"></a>Send a new request to `https://localhost:56814/e2e/rules/tls-mapping/map-local-enabled`. Open Response in box 1 in Capture and confirm `200` with the local file's `owned-http-mapping-result`.

    ![The HTTPS response comes from the local file](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-034.annotated.png)

12. <a id="walkthrough-capture-local-disable"></a>Return to Rules and turn off the switch in box 1. This disables Map Local, not HTTPS decryption.

    ![Disable the Map Local Rule](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-035.annotated.png)

13. <a id="walkthrough-capture-local-save-disabled"></a>Click Save and confirm Rule set applied in box 1 to persist the disabled state.

    ![The disabled Map Local state is saved](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-036.annotated.png)

14. <a id="walkthrough-capture-local-origin-restored"></a>Request `https://localhost:56814/e2e/rules/tls-mapping/map-local-disabled`. The new row in box 1 returns the original HTTPS service's `404` with a `0 B` body, not the missing-file message or saved text. The three suffixes represent different new requests.

    ![A new request restores the original HTTPS result after disabling](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-037.annotated.png)

<a id="http2"></a>
## Inspect HTTP/2 and connection endings

The client and origin must actually use HTTP/2. HTTPS also needs the decryption conditions above. Start with captured requests to `https://localhost:54766`.

1. <a id="walkthrough-21-protocol-scope"></a>Search `/playground/h2-json` and select the GET in box 1. Check H2, 200 and the actual URL in Headers → General rather than inferring the protocol from a path.

   ![Search for and select the actual H2 request](../media/v0.1.1-alpha.1/capture-http2-english/step-001.annotated.png)

2. <a id="walkthrough-capture-http2-10-protocol-group"></a>Click the Protocol heading in box 1 to expand it.

   ![Expand the Protocol group](../media/v0.1.1-alpha.1/capture-http2-english/step-002.annotated.png)

3. <a id="walkthrough-capture-http2-11-http2-filter"></a>Select HTTP/2 in box 1 to retain that protocol. The search condition still applies.

   ![Select the HTTP2 protocol filter](../media/v0.1.1-alpha.1/capture-http2-english/step-003.annotated.png)

4. Click HTTP/2 in box 1 again to remove that condition. Protocol returns to All without deleting records or clearing search.

   ![Remove the HTTP2 filter without deleting records](../media/v0.1.1-alpha.1/capture-http2-english/step-004.annotated.png)

5. <a id="walkthrough-23-trailers"></a>Scroll down in Headers and expand Response Trailers in box 1 to read `x-playground-trailer: h2-complete`.

   ![Read the fully visible HTTP2 response trailer](../media/v0.1.1-alpha.1/capture-http2-english/step-007.annotated.png)

6. <a id="walkthrough-24-h2-body"></a>Open Response and choose Raw in box 1. The 55-byte JSON contains `protocol: h2` and `/playground/h2-json`.

   ![Read the same H2 request's JSON response](../media/v0.1.1-alpha.1/capture-http2-english/step-008.annotated.png)

7. <a id="walkthrough-capture-http2"></a><a id="walkthrough-capture-http2-01-scope"></a><a id="walkthrough-capture-http2-02-record"></a><a id="walkthrough-capture-http2-03-first-part"></a><a id="walkthrough-capture-http2-04-select"></a><a id="walkthrough-capture-http2-06-partial-body"></a>For a streaming response, search `/e2e/h2/body-progress`, select the GET in box 1 and open Response. It has received 65,536 bytes, displayed as 64 KB, while Time remains `…`. The body is not readable yet; that does not mean the request bypassed the proxy.

   ![The same H2 stream receives its first 64KB part](../media/v0.1.1-alpha.1/capture-http2-english/step-009.annotated.png)

8. <a id="walkthrough-capture-http2-07-second-part"></a>Keep the same record selected and watch its size in box 1 grow to 128 KB. Receiving has not ended; progress alone does not make a complete body available.

   ![The same H2 stream is still receiving after its second part](../media/v0.1.1-alpha.1/capture-http2-english/step-010.annotated.png)

9. <a id="walkthrough-capture-http2-08-complete"></a>Wait for completion, then choose Text in box 1. The complete 131,072-byte body is now readable: 65,536 `a` characters followed by 65,536 `b` characters.

   ![Read complete Text after the H2 response ends](../media/v0.1.1-alpha.1/capture-http2-english/step-011.annotated.png)

10. Click Copy in box 1 to copy the entire body, not just the first lines visible in the window.

    ![Copy the complete 128KiB response](../media/v0.1.1-alpha.1/capture-http2-english/step-012.annotated.png)

11. <a id="walkthrough-capture-http2-05-headers"></a><a id="walkthrough-capture-http2-09-trailers"></a>Return to Headers, check `content-length: 131072` in Response Headers and scroll to Response Trailers in box 1 to read `x-capture-end: complete`. These are stages of one GET.

    ![Inspect the completed response length and end trailer](../media/v0.1.1-alpha.1/capture-http2-english/step-013.annotated.png)

12. A separate normal-GOAWAY example uses `https://localhost:60170/e2e/h2/origin-goaway/paused`. If it is waiting at a response breakpoint, click Continue unchanged, then open that POST's Headers after completion. This image shows the result after Continue: a complete 4 MiB response and `x-goaway-complete` in Response Trailers in box 1.

    ![The original POST finishes completely after normal GOAWAY](../media/v0.1.1-alpha.1/capture-http2-graceful-english/step-002.annotated.png)

13. Select the subsequent, separate POST `/e2e/h2/origin-goaway/next` and open Response → Raw in box 1. It returns 62-byte JSON on a new upstream connection rather than replaying the preceding POST.

    ![A new POST receives its own response after normal GOAWAY](../media/v0.1.1-alpha.1/capture-http2-graceful-english/step-003.annotated.png)

14. <a id="walkthrough-capture-http2-origin-01-interrupt"></a><a id="walkthrough-capture-http2-origin-02-original"></a><a id="walkthrough-capture-http2-origin-03-length"></a>For origin error GOAWAY, search `/e2e/h2/error-goaway-origin` and select its `/interrupted` POST. Response Headers in box 1 declare 524,288 bytes. This is the response length, not the POST upload body.

    ![The original POST declares its response length before origin error GOAWAY](../media/v0.1.1-alpha.1/capture-http2-english/step-039.annotated.png)

15. <a id="walkthrough-capture-http2-origin-04-partial"></a>Open that same POST's Response → Text in box 1. Only 262,144 bytes were captured, displayed as 256 KB. Status 200 in the response headers does not prove body completion.

    ![Inspect the partial response retained after origin error GOAWAY](../media/v0.1.1-alpha.1/capture-http2-english/step-040.annotated.png)

16. <a id="walkthrough-capture-http2-origin-05-recovered"></a><a id="walkthrough-capture-http2-origin-06-recovery-body"></a>Select GET `/e2e/h2/error-goaway-origin/recovered` on the new connection and open Response → Raw in box 1. Its 73-byte JSON belongs to this new GET, not the missing remainder of the POST response.

    ![Inspect the independent recovery GET after origin error GOAWAY](../media/v0.1.1-alpha.1/capture-http2-english/step-042.annotated.png)

17. <a id="walkthrough-capture-http2-client-01-interrupt"></a><a id="walkthrough-capture-http2-client-02-original"></a><a id="walkthrough-capture-http2-client-03-length"></a>For client error GOAWAY, search `/e2e/h2/error-goaway-client` and select its `/interrupted` POST. Response Headers in box 1 likewise declare 524,288 bytes.

    ![Inspect the declared response length for client error GOAWAY](../media/v0.1.1-alpha.1/capture-http2-english/step-044.annotated.png)

18. <a id="walkthrough-capture-http2-client-04-partial"></a>Open the same record's Response → Text in box 1 and compare the 262,144 bytes actually retained.

    ![Inspect the 256KiB response retained after client error GOAWAY](../media/v0.1.1-alpha.1/capture-http2-english/step-045.annotated.png)

19. <a id="walkthrough-capture-http2-client-05-recovered"></a><a id="walkthrough-capture-http2-client-06-recovery-body"></a>Select the independent GET `/e2e/h2/error-goaway-client/recovered`, open Response → Raw in box 1 and inspect its new 73-byte JSON.

    ![Inspect the independent recovery GET after client error GOAWAY](../media/v0.1.1-alpha.1/capture-http2-english/step-047.annotated.png)

20. <a id="walkthrough-capture-http2-24-settings"></a><a id="walkthrough-capture-http2-25-certificates"></a><a id="walkthrough-capture-http2-26-mitm-off"></a><a id="walkthrough-capture-http2-27-origin-remove"></a>Follow the [decryption cleanup steps](#walkthrough-30-decryption-off): return to Settings → Certificates, disable this exercise's MITM and remove only origin exceptions you added. Box 1 marks the MITM switch, not the CA Remove button.

    ![Disable this exercise's decryption after inspecting HTTP2](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

Normal GOAWAY, error GOAWAY and resets are different endings. Inspect only authorized services; do not interrupt other people's connections to reproduce errors. Diagnostics is not a complete HTTP/2 frame analyzer, and HAR is not a lossless trailer backup.

<a id="查看-websocket-与-grpc-消息"></a>
## Read WebSocket and gRPC messages

### WebSocket text messages

Keep Recording on and connect a client through the proxy to your `/playground/ws/text` service. Send `hello from client`. This example receives the same echo and closes normally before inspecting the retained messages.

1. <a id="walkthrough-25-websocket"></a>Search the path and select the connection in box 1. Its status is `101` and protocol is `WS`. `closed` means the connection ended, not that its messages were deleted.

   ![Select the WebSocket text connection](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-008.annotated.png)

2. Open Messages in box 1 to inspect both directions.

   ![Open WebSocket Messages](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-009.annotated.png)

3. Select Sent in box 1 to show only the client's Text message.

   ![Filter the WebSocket Sent direction](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-010.annotated.png)

4. <a id="walkthrough-26-message"></a>Click the message row to expand its body and inspect `hello from client`. Sent text in box 1 is the expanded direction/type heading, not the expand control.

   ![Expand the WebSocket sent text](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-011.annotated.png)

5. Click Copy payload in box 1 on the message header to copy `hello from client`. This is a separate control from Copy on the body toolbar below.

   ![Copy the WebSocket sent payload](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-012.annotated.png)

6. Select Received in box 1 to inspect the server's message.

   ![Filter the WebSocket Received direction](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-014.annotated.png)

7. Click the received message row to expand it. The Received text heading in box 1 identifies its direction; this example's echo is still `hello from client`.

   ![Expand the WebSocket received text](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-015.annotated.png)

8. Click Copy payload in box 1 on the received message header to copy that echo.

   ![Copy the WebSocket received payload](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-016.annotated.png)

9. Select All in box 1 to show one Sent and one Received message. Each payload is `17 B`; the connection row's `0 B` measures its HTTP body, not the total message bytes.

   ![Show both WebSocket directions](../media/v0.1.1-alpha.1/capture-websocket-text-english/step-018.annotated.png)

### gRPC JSON messages

Call your `/playground.Capture/UnaryJson` service with a gRPC client. This example uses `application/grpc+json`, request payload `{"message":"hello"}` and response `{"message":"world"}`. Complete the HTTPS prerequisites if decryption is needed.

1. <a id="walkthrough-27-grpc"></a>Select the matching `POST`, `H2`, `200` record and open Messages in box 1. The message view also shows `grpc-status: 0`, which is separate from the HTTP status.

   ![Open gRPC Messages and inspect status](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-022.annotated.png)

2. Select Request in box 1 to inspect the client's request message.

   ![Select gRPC Request messages](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-023.annotated.png)

3. Click the Message 1 row in box 1 to expand it and inspect `message: hello` in its JSON.

   ![Expand the gRPC JSON request payload](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-024.annotated.png)

4. Click Copy payload in box 1 on the request message header. It copies the original `{"message":"hello"}`, not the indentation added by Pretty.

   ![Copy the original gRPC request payload](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-025.annotated.png)

5. Select Response in box 1 to inspect the server's message.

   ![Select gRPC Response messages](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-026.annotated.png)

6. <a id="walkthrough-28-grpc-response"></a>Click the response Message 1 row in box 1 to expand it and inspect `message: world` in its JSON.

   ![Expand the gRPC JSON response payload](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-027.annotated.png)

7. Click Copy payload in box 1 on the response message header to copy `{"message":"world"}`. This `19 B` payload excludes the preceding 5-byte envelope header.

   ![Copy the original gRPC response payload](../media/v0.1.1-alpha.1/capture-grpc-json-english/step-028.annotated.png)

The payload itself is JSON and can be displayed directly. The No descriptor loaded notice remains; this does not demonstrate schema decoding for ordinary protobuf.

### Long messages and pagination

#### WebSocket: short bodies, long bodies and pagination

The following `/e2e/websocket/compact-message-layout` connection contains six Sent Binary JSON messages and their echoes. The short body is 70 bytes; the long body is 2,538 bytes, with 28 `entries` and `end: compact-message-end`.

1. <a id="walkthrough-capture-websocket-messages"></a><a id="walkthrough-capture-websocket-messages-01-filter"></a><a id="walkthrough-capture-websocket-messages-02-record"></a><a id="walkthrough-capture-websocket-messages-03-messages"></a><a id="walkthrough-capture-websocket-messages-04-select"></a><a id="walkthrough-capture-websocket-messages-05-tab"></a><a id="walkthrough-capture-websocket-messages-06-direction"></a>Search for this path, select the connection and open Messages. Click Sent in box 1 to inspect only the client-to-server direction.

   ![Select Sent for the short and long message example](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-001.annotated.png)

2. <a id="walkthrough-capture-websocket-messages-07-short"></a><a id="walkthrough-capture-websocket-messages-08-short-raw"></a>Expand the first 70 B message and choose Raw in box 1. Read `requestId: short-message`, `status: ready` and `count: 18`.

   ![Expand the short Binary JSON and choose Raw](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-002.annotated.png)

3. <a id="walkthrough-capture-websocket-messages-09-copy-short"></a>Click Copy in box 1 on the body toolbar to copy the complete short JSON.

   ![Copy the short message's Raw body](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-003.annotated.png)

4. <a id="walkthrough-capture-websocket-messages-10-collapse-short"></a>Click the first message row in box 1 again to collapse its body.

   ![Collapse the short body while retaining its row](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-004.annotated.png)

5. <a id="walkthrough-capture-websocket-messages-11-long"></a>Expand the second Sent message and choose Raw in box 1. Its `requestId` is `long-message`. The connection-wide label is message 3, not the third row in the Sent list.

   ![Expand the second Sent message's long body](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-005.annotated.png)

6. <a id="walkthrough-capture-websocket-messages-12-resize"></a>Drag the bottom-right resize handle of the body region in box 1 to adjust its reading height. This does not change the message.

   ![Resize the long WebSocket body](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-006.annotated.png)

7. <a id="walkthrough-capture-websocket-messages-13-wheel"></a>Place the pointer inside the body in box 1 and use the wheel or trackpad to scroll its contents.

   ![Scroll inside the WebSocket body](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-007.annotated.png)

8. <a id="walkthrough-capture-websocket-messages-14-keyboard-end"></a>Click the body in box 1 to focus it. Press Command+↓ on macOS, or Ctrl+End on other platforms, to read `compact-message-end` at the end.

   ![Use the keyboard to reach the WebSocket body's end](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-008.annotated.png)

9. <a id="walkthrough-capture-websocket-messages-15-scroll-out"></a>Continue scrolling after reaching the body's end. The outer Messages panel in box 1 moves on to reveal subsequent rows.

   ![Continue scrolling the outer Messages panel at the inner boundary](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-009.annotated.png)

10. <a id="walkthrough-capture-websocket-messages-16-copy-long"></a>Click Copy in box 1 on the body toolbar. It copies the complete 2,538-byte UTF-8 JSON, not just the visible final fragment.

    ![Copy the complete long WebSocket body](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-010.annotated.png)

11. <a id="walkthrough-capture-websocket-messages-17-payload-copy"></a>Click Copy payload in box 1 on the message heading. Because this message is Binary, this entry copies space-separated hexadecimal bytes, unlike the preceding UTF-8 Raw Copy.

    ![Use the Binary message's own Copy payload action](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-011.annotated.png)

12. Choose Hex in box 1 to inspect the same message's bytes, offsets and character column.

    ![Switch the long WebSocket message to Hex](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-013.annotated.png)

13. <a id="walkthrough-capture-websocket-messages-18-fullscreen"></a>Switch back to Raw, then click Fullscreen on the body toolbar. Box 1 marks the opened dialog's Payload title bar. It enlarges this message, not the entire connection.

    ![Inspect the same WebSocket message fullscreen](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-014.annotated.png)

14. <a id="walkthrough-capture-websocket-messages-19-return"></a>Press Escape to return to message details and check that Raw in box 1 remains selected.

    ![Retain Raw after closing message fullscreen](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-015.annotated.png)

15. <a id="walkthrough-capture-websocket-messages-20-paged-input"></a><a id="walkthrough-capture-websocket-messages-21-paged-select"></a><a id="walkthrough-capture-websocket-messages-22-paged-tab"></a><a id="walkthrough-capture-websocket-messages-23-load-pages"></a>Within the current search results, select the separate `/e2e/websocket/compact-message-layout/pagination` connection. It contains 205 Sent Text messages and their echoes. Open Messages, select Sent and scroll down inside the panel in box 1 to load later messages.

    ![Scroll to load subsequent WebSocket message pages](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-016.annotated.png)

16. <a id="walkthrough-capture-websocket-messages-24-last-message"></a>Continue to the bottom and click the 205th Sent message in box 1. Its zero-based JSON `index` is 204.

    ![Select the 205th Sent message](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-017.annotated.png)

17. Scroll further until the complete `{"index":204,"state":"complete"}` is readable in box 1. This message uses Text and has no Raw option. The message 409 label is its connection-wide sequence including both directions.

    ![Display the complete final WebSocket Text body](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-018.annotated.png)

18. <a id="walkthrough-capture-websocket-messages-25-copy-last"></a>Click Copy payload in box 1 on the message heading to copy the complete 32-byte Text. This is not the earlier Binary message's hexadecimal copy.

    ![Copy the complete final Text message](../media/v0.1.1-alpha.1/capture-websocket-messages-english/step-019.annotated.png)

#### gRPC: long bodies and 205 response messages

The `/e2e/grpc/compact-message-layout` example contains six Response JSON messages. No descriptor loaded remains visible; do not present these JSON examples as decoding through an imported Protobuf descriptor.

1. <a id="walkthrough-capture-grpc-messages"></a><a id="walkthrough-capture-grpc-messages-01-filter"></a><a id="walkthrough-capture-grpc-messages-02-record"></a><a id="walkthrough-capture-grpc-messages-03-messages"></a><a id="walkthrough-capture-grpc-messages-04-select"></a><a id="walkthrough-capture-grpc-messages-05-tab"></a><a id="walkthrough-capture-grpc-messages-06-direction"></a><a id="walkthrough-capture-grpc-messages-07-short"></a><a id="walkthrough-capture-grpc-messages-08-short-raw"></a>Search this path, select the POST and open Messages → Response. Expand the 70 B Message 1 and choose Raw in box 1 to read `short-message`, `ready` and `count: 18`.

   ![Select gRPC Response and read the short message's Raw body](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-002.annotated.png)

2. <a id="walkthrough-capture-grpc-messages-09-copy-short"></a>Click Copy in box 1 on the body toolbar to copy the complete short JSON.

   ![Copy the short gRPC message body](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-003.annotated.png)

3. <a id="walkthrough-capture-grpc-messages-10-collapse-short"></a>Click the Message 1 row in box 1 again to collapse its body.

   ![Collapse the short gRPC message](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-004.annotated.png)

4. <a id="walkthrough-capture-grpc-messages-11-long"></a>Expand Message 2 and choose Raw in box 1. This `long-message` is also 2,538-byte JSON containing 28 `entries`.

   ![Expand the long gRPC message and inspect Raw](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-005.annotated.png)

5. <a id="walkthrough-capture-grpc-messages-12-resize"></a>Drag the bottom-right resize handle of the body region in box 1 to adjust its height.

   ![Resize the long gRPC body](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-006.annotated.png)

6. <a id="walkthrough-capture-grpc-messages-13-wheel"></a>Use the wheel or trackpad inside the body in box 1.

   ![Scroll inside the gRPC message body](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-007.annotated.png)

7. <a id="walkthrough-capture-grpc-messages-14-keyboard-end"></a>Click the body in box 1 to focus it. Press Command+↓ on macOS, or Ctrl+End elsewhere, and check `compact-message-end` at the end.

   ![Reach the long gRPC body's end with the keyboard](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-008.annotated.png)

8. <a id="walkthrough-capture-grpc-messages-15-scroll-out"></a>Continue scrolling at the inner boundary so that the outer Messages panel in box 1 reveals subsequent messages and Response Trailers.

   ![Continue from the gRPC body into the outer message panel](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-009.annotated.png)

9. <a id="walkthrough-capture-grpc-messages-16-copy-long"></a>Click Copy in box 1 on the body toolbar to copy the complete 2,538-byte JSON.

   ![Copy the complete long gRPC body](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-010.annotated.png)

10. <a id="walkthrough-capture-grpc-messages-17-payload-copy"></a>Click Copy payload in box 1 on the message heading. This example also produces complete JSON UTF-8, unlike the space-separated Hex of the earlier WebSocket Binary message.

    ![Copy the payload from the gRPC message heading](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-011.annotated.png)

11. Choose Hex in box 1 to inspect this message's original bytes.

    ![Inspect Hex for the long gRPC message](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-013.annotated.png)

12. <a id="walkthrough-capture-grpc-messages-18-fullscreen"></a>Switch back to Raw, then click Fullscreen on the body toolbar. Box 1 marks the opened Payload title bar, with the same `long-message` in the dialog.

    ![Inspect the long gRPC message fullscreen](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-014.annotated.png)

13. <a id="walkthrough-capture-grpc-messages-19-return"></a>Press Escape to return and check that Raw in box 1 is retained.

    ![Return to Raw after closing gRPC message fullscreen](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-015.annotated.png)

14. <a id="walkthrough-capture-grpc-messages-20-paged-input"></a><a id="walkthrough-capture-grpc-messages-21-paged-select"></a><a id="walkthrough-capture-grpc-messages-22-paged-tab"></a><a id="walkthrough-capture-grpc-messages-23-load-pages"></a>Select the separate `/e2e/grpc/compact-message-layout/pagination` call and open Messages → Response. Scroll down inside the panel in box 1 to load later messages from this call, which has 205 in total.

    ![Scroll to load later gRPC response messages](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-016.annotated.png)

15. <a id="walkthrough-capture-grpc-messages-24-last-message"></a>Continue to the bottom and click Message 205 in box 1 to expand it.

    ![Expand gRPC Message 205](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-017.annotated.png)

16. <a id="walkthrough-capture-grpc-messages-24a-last-raw"></a><a id="walkthrough-capture-grpc-messages-24b-last-visible"></a>Choose Raw and scroll further until box 1 exposes the entire `{"index":204,"state":"complete"}`. Message 205 and zero-based index 204 are different numbering systems.

    ![Display the complete final gRPC Raw body](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-018.annotated.png)

17. <a id="walkthrough-capture-grpc-messages-25-copy-last"></a>Click Copy payload in box 1 on the message heading to copy this complete 32-byte JSON.

    ![Copy the complete final gRPC response message](../media/v0.1.1-alpha.1/capture-grpc-messages-english/step-019.annotated.png)

18. <a id="walkthrough-capture-grpc-messages-26-settings"></a><a id="walkthrough-capture-grpc-messages-27-certificates"></a><a id="walkthrough-capture-grpc-messages-28-mitm-off"></a><a id="walkthrough-capture-grpc-messages-29-origin-remove"></a>If you enabled MITM for this encrypted call, finish in Settings → Certificates by turning off the MITM switch in box 1. Then follow [origin-exception cleanup](#walkthrough-31-remove-exception) to remove exceptions you added, preserving the existing CA.

    ![Clean up this exercise's decryption after message inspection](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

- Undecrypted WSS or encrypted gRPC can show only tunnels, not fully parsed messages.
- gRPC uses HTTP/2. Protocol and content type are separate dimensions.
- Pause obeys recording boundaries; it does not close the connection. Clear removes records, not necessarily the connection.
- Distinguish half-messages, decoding failure, interrupted connections and preview limits.

<a id="保存记录与正文"></a>
## Save records and bodies

Choose the appropriate format first: HAR exchanges HTTP records, Native Archive retains more Interceptor traffic details, and Save body saves one payload. See [Import and export](transfer.md) for complete archive and body-file procedures.

This separate example contains four records: two copies each of `POST /e2e/har-tools/text` and `POST /e2e/har-tools/binary`. They are not the earlier JSON request. Check the records you actually need before choosing an export scope.

<a id="capture-har-all"></a>
### Export all records

1. Open Export at the upper right of Capture and select Export HAR in box 1.

   ![Choose HAR from the Export menu](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-012.annotated.png)

2. Select All traffic in box 1 and confirm its count is `4`. Review the privacy options below: this example masks Authorization and Cookie/Set-Cookie while retaining bodies. Then click Export 4 requests in box 2. No row was selected beforehand, so Selected request is unavailable here.

   ![Check all four records and privacy options before exporting](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-013.annotated.png)

3. Choose your directory in the system Save dialog and save `ui.har`.

   ![Save all four records to ui.har](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-014.png)

4. Wait for the export to finish and return to Capture. The four records remain; box 1 marks the available Export control, and box 2 still shows Paused. Saving does not resume Recording. Finish file tasks before Clear or quitting.

   ![Return to four records while Recording remains paused](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-015.annotated.png)

<a id="capture-har-scopes"></a>
### Export filtered or selected records

This independent scope example also has two text and two binary records. Choosing a scope does not change Capture data. When importing later, select the four-record `ui.har` from [Export all records](#capture-har-all), not one of the two-record or one-record files below.

1. Enter `/e2e/har-tools/text` in the search field in box 1. Two text records remain visible. Select the first row in box 2; neither filtering nor selecting deletes the other records.

   ![Filter two text records and select one](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-016.annotated.png)

2. Open Export → Export HAR again. Choose Current filter in box 1 and check the count is `2`. Keep the required body and masking options, then click Export 2 requests in box 2.

   ![Export the two currently filtered records](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-017.annotated.png)

3. Save `ui-filter.har` in the Save dialog without overwriting `ui.har`.

   ![Save the current filter to ui-filter.har](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-018.png)

4. Wait for saving to finish and return to Capture. Box 1 marks Export; the list still shows the original two filtered records, both included in `ui-filter.har`.

   ![Keep the filtered list after saving its two records](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-019.annotated.png)

5. Keep the first text record selected and reopen Export → Export HAR. Choose Selected request in box 1, confirm the count is `1`, and click Export 1 request in box 2.

   ![Export only the selected record](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-020.annotated.png)

6. Save `ui-selected.har` in the Save dialog.

   ![Save the selected record to ui-selected.har](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-021.png)

7. Wait for saving to finish. Box 1 marks Export after returning to Capture. The file contains one record, but two remain visible: exporting the selected row does not filter the list down to one.

   ![Selected export retains both filtered records in Capture](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-022.annotated.png)

<a id="capture-har-privacy"></a>
### Mask selected fields and omit bodies

1. Keep the same text record selected, open Export → Export HAR, and choose Selected request. Enable Authorization masking, Cookie/Set-Cookie masking, and Strip bodies for this file. Check each option, then click Export 1 request in box 1. These choices apply to this export without rewriting the defaults in Settings → Privacy.

   ![Review masking and body removal before exporting](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-029.annotated.png)

2. Save `ui-stripped.har` in the Save dialog, keeping the earlier files that include bodies.

   ![Save ui-stripped.har without bodies](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-030.png)

3. Return to Capture after saving; box 1 marks Export. The current record's body is still readable: Strip bodies affects the exported file, not Capture. Masking does not cover arbitrary Query values, business fields or other Headers, so inspect a file before sharing it.

   ![Omitting exported bodies does not delete the captured body](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-031.annotated.png)

<a id="capture-har-import"></a>
### Append an exported HAR to Capture

Return to the same example as [Export all records](#capture-har-all) and choose `ui.har`, just saved through Capture Export. It contains four records. Import appends them without replacing current records; no separate Agent export is required.

1. Clear the search text and confirm four records remain before importing. Open Import and select Import HAR in box 1.

   ![Choose HAR from the Capture Import menu](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-032.annotated.png)

2. Click Import HAR in box 1 of the App dialog to open the system file picker.

   ![Start HAR file selection from the App](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-033.annotated.png)

3. In the system Open dialog, navigate to your directory, select the same `ui.har`, and click Open. Capture grows from four records to eight, retaining the original four. Box 1 marks the newly appended `/e2e/har-tools/binary` row, which is not selected yet; the Inspector still shows the previous text record's body.

   ![Append four records from the same ui.har to reach eight](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-035.annotated.png)

4. Select that imported binary-path record and open Request. Its request is still Text, `16 B`, containing `HAR request body`. Click Copy in box 1 to copy the request body; binary describes this example's response, not its request.

   ![The imported binary record still has a Text request](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-036.annotated.png)

5. Switch the same record to Response and select Hex. Check all six bytes: `00 01 7f 80 fe ff`. Copy in box 1 produces a text dump including offset, hexadecimal and ASCII columns, not the original binary file.

   ![The imported binary record retains its complete six-byte response](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-037.annotated.png)

6. Select an imported `/e2e/har-tools/text` record and open Request. Copy in box 1 copies the `16 B` `HAR request body`.

   ![The imported text record retains its complete request body](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-038.annotated.png)

7. Switch that record to Response. Copy in box 1 copies the `17 B` `HAR response body`, distinct from the request body in the previous step.

   ![The imported text record retains its complete response body](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-039.annotated.png)

- HAR cannot losslessly preserve HTTP/2 pseudo-headers, trailers, WebSocket messages, TLS details or rule history.
- HAR masking covers selected Authorization/Cookie fields, not arbitrary query parameters, business fields or every header.
- Native archives retain sensitive original data; they do not inherit HAR masking or replace Rules configuration backups.
- Export is a snapshot. Do not assume later traffic appears in an already-started export.
- Use trusted inputs and follow [Import and export](transfer.md) for full procedures.

<a id="清空记录"></a>
## Clear captured records

1. Export the current data you need to retain. This image shows the four-record `ui.har` save: box 1 marks Export, and box 2 remains Paused. If you later imported up to eight records or captured new requests, export the required current data again; the old `ui.har` does not gain entries automatically.

   ![Ensure the records to retain have a corresponding export before Clear](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-015.annotated.png)

2. Wait for body saves, HAR and archive tasks to finish. To stop a running task, click Cancel transfer in box 1. This example shows running progress for `cancel-ui.iarchive`, not Cancel in a native Save panel. See the [task cancellation steps](transfer.md#walkthrough-transfer-cancel) for the complete startup procedure.

   ![Cancel a running Native Archive task](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-019.annotated.png)

3. <a id="walkthrough-16-restore-filter"></a><a id="walkthrough-17-clear"></a>Wait for cancellation and file cleanup, then return to Capture. The original `/e2e/transfer-jobs/large-source` record, shown as 128 MB, remains. Once you no longer need it, click Capture Clear in box 1.

   ![Click Capture Clear only after cancellation cleanup finishes](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-020.annotated.png)

4. Check that the list is empty and counts are zero. Cancelling the export did not delete its source record; the separate Clear action did.

   ![Explicit Clear produces an empty list after archive cancellation](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-021.png)

5. <a id="walkthrough-capture-inspection-28-close-details"></a>To remain paused after clearing, pause recording separately first. The following sequence uses a different `/e2e/storage/` record: inspect the record in box 1 and click Recording in box 2 to pause. Do not substitute system-proxy Restore for Pause.

   ![Pause this separate recording before clearing it](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-001.annotated.png)

6. <a id="walkthrough-capture-inspection-29-clear"></a>Open Settings → Storage, click Clear capture, then click Confirm clear in box 1. This entry clears the same temporary records and bodies as Capture Clear; saved files remain unaffected.

   ![Explicitly confirm Capture cleanup in Storage](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-006.annotated.png)

7. Return to Capture and check the empty list, Inspector and counts, with Paused still at the top. The `/e2e/storage/` search can remain; clearing records is not clearing search.

   ![The empty list and Inspector remain Paused after cleanup](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-008.png)

8. <a id="walkthrough-capture-inspection-30-resume"></a>Click Paused to resume manually. Box 1 shows Recording afterward; there are no new records yet.

   ![Resume Recording separately after cleanup](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-009.annotated.png)

9. <a id="walkthrough-capture-inspection-31-new-request"></a>Have the client send a new POST to `/e2e/storage/after-clear`. Check its new row in box 1 for 200, H1 and 115 B. This is not a deleted historical record reappearing.

   ![A new after-clear request appears after recording resumes](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-010.annotated.png)

10. <a id="walkthrough-capture-inspection-32-new-body"></a>Select this new POST in box 1 and open Response to read its returned body, using the [body inspection steps](#walkthrough-06-response) to change views or copy it. The image marks the new row before opening details, not an already-open Response.

    ![Select the new record to continue inspecting Response](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-010.annotated.png)

- Clear is neither Pause nor Stop forwarding.
- Active file operations can reject Clear. Do not work around that by deleting storage directories.
- Filter reset, Capture Clear, proxy restoration and App shutdown are distinct actions.

<a id="从流量进入阻断与断点"></a>
## Create controls from captured traffic

This example uses `http://127.0.0.1:49157/e2e/capture/breakpoint-menu-hierarchy`. `49157` is the example service port, not an App constant. Block first creates a draft; This endpoint creates and enables a breakpoint rule immediately.

1. <a id="walkthrough-capture-shortcuts"></a><a id="walkthrough-capture-shortcuts-01-source"></a>Search by path and select the historical GET in box 1. Selection opens details without resending the request.

   ![Select the historical request used to create a control](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-001.annotated.png)

2. <a id="walkthrough-capture-shortcuts-02-context"></a>Open that record's context menu and click Block in box 1 under Control.

   ![Choose Block from the Capture context menu](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-002.annotated.png)

3. <a id="walkthrough-capture-shortcuts-03-block-draft"></a>Inspect the generated Rules draft. URL exactly matches this address, Block Mode is `reset`, and the rule switch in box 1 is initially off.

   ![Inspect the initially disabled Block draft](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-004.annotated.png)

4. <a id="walkthrough-capture-shortcuts-04-name"></a>Click the name and enter `Capture quick block` in box 1.

   ![Name the Block draft](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-005.annotated.png)

5. <a id="walkthrough-capture-shortcuts-05-enable"></a>Turn on the rule switch in box 1. Enabled reflects the current edit; saving is still required.

   ![Enable the current Block draft](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-006.annotated.png)

6. <a id="walkthrough-capture-shortcuts-06-apply"></a>Click Save at the upper right and wait for Rule set applied in box 1. Block now takes effect using the saved configuration.

   ![Save the enabled state and confirm it is applied](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-007.annotated.png)

7. <a id="walkthrough-capture-shortcuts-07-blocked"></a>Request the same address again from the client and select the new Capture row in box 1. It is reset, with status `—`, 0 B and no response headers. The older 200 row above it is not this request's result.

   ![Inspect the new request's reset result](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-008.annotated.png)

8. <a id="walkthrough-capture-shortcuts-08-disable"></a>Return to Rules and turn off `Capture quick block` in box 1 so it does not interfere with the breakpoint exercise.

   ![Disable this shortcut-created Block](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-009.annotated.png)

9. <a id="walkthrough-capture-shortcuts-09-disable-apply"></a>Click Save and check Rule set applied in box 1 again.

   ![Save the disabled Block state](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-010.annotated.png)

10. Send another request to the same address and inspect the new row in box 1: 200 and 112 B are restored. The Inspector still selects the older reset record; select the new row separately to read its body.

    ![A new request returns 200 after Block is disabled](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-011.annotated.png)

11. <a id="walkthrough-capture-shortcuts-10-breakpoint-menu"></a>Open the original historical request's context menu again, move to Breakpoint and inspect This endpoint in box 1.

    ![Open Breakpoint and inspect This endpoint](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-012.annotated.png)

12. <a id="walkthrough-capture-shortcuts-11-endpoint"></a>Click This endpoint and check Breakpoint created in box 1. It creates one rule with request- and response-phase breakpoint actions, enabled and saved immediately. Do not repeat the draft's Enable/Save steps. Undo in the message can reverse this creation.

    ![Endpoint breakpoint creation takes effect immediately](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-013.annotated.png)

13. <a id="walkthrough-capture-shortcuts-12-paused"></a><a id="walkthrough-capture-shortcuts-13-continue-request"></a>Start a new matching client request. Its first wait is Request paused. Inspect Request Headers, then click Continue in box 1 to forward the request unchanged. Creating a rule does not retroactively pause historical records.

    ![Continue the new request's request phase unchanged](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-014.annotated.png)

14. <a id="walkthrough-capture-shortcuts-14-continue-response"></a>The same request subsequently reaches Response paused. Check Status 200 and Response Headers, then click Continue in box 1 to forward the response unchanged. Continuing only the request phase is not completion.

    ![Continue the same request's response phase unchanged](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-015.annotated.png)

15. After both phases, inspect the row in box 1: it now shows 200 and 112 B rather than a paused state.

    ![The request completes after both Continue actions](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-016.annotated.png)

16. Open Rules and turn off this Breakpoint rule in box 1. Its Request and Response actions remain visible as two actions within the same rule.

    ![Disable this Endpoint breakpoint rule](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-017.annotated.png)

17. Click Save and wait for Rule set applied in box 1 to persist the disabled state.

    ![Save the disabled Endpoint breakpoint state](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-018.annotated.png)

18. Request the same address again and inspect the new row in box 1 for a direct 200 result. The Inspector still belongs to the preceding row; select the new one to read this response. See [Breakpoints](breakpoints.md) for per-rule control, global Break on match, Undo and pending-queue management.

    ![A new request completes directly after disabling the breakpoint](../media/v0.1.1-alpha.1/capture-shortcuts-english/step-019.annotated.png)

Menus can open left when space is limited. Escape/outside click dismisses the menu but does not disable an applied rule. Follow [Breakpoints](breakpoints.md) to manage matching and existing waits separately.

Next: [Composer](composer.md).
