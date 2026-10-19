# Breakpoints: pause traffic before deciding

> Draft for `v0.1.1-alpha.1`; request-breakpoint steps have real images, while response, queue and frame gaps are marked individually. Neither this chapter nor item9 is complete. Pausing affects real clients; use only authorized traffic.

[Guide directory](../README.en.md) · [Rules](rules.md) · [Capture](capture.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>ruleName</code> | <code>Guide request breakpoint</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/breakpoints</code> |
| <code>url</code> | <code>http://127.0.0.1:51191/guide/breakpoints/edited</code> |
| <code>original</code> | <code>{&quot;message&quot;:&quot;original&quot;}</code> |
| <code>replacement</code> | <code>{&quot;message&quot;:&quot;edited-by-guide&quot;}</code> |

<a id="walkthrough-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/breakpoints/breakpoints-01-rules.png)

<a id="walkthrough-02-create"></a>
### 02 · Create the breakpoint Rule

![02 · Create the breakpoint Rule](../media/v0.1.1-alpha.1/breakpoints/breakpoints-02-create.png)

<a id="walkthrough-03-name"></a>
### 03 · Name the Rule

![03 · Name the Rule](../media/v0.1.1-alpha.1/breakpoints/breakpoints-03-name.png)

<a id="walkthrough-04-host"></a>
### 04 · Set the local test Host

![04 · Set the local test Host](../media/v0.1.1-alpha.1/breakpoints/breakpoints-04-host.png)

<a id="walkthrough-05-path-condition"></a>
### 05 · Add a Path condition

![05 · Add a Path condition](../media/v0.1.1-alpha.1/breakpoints/breakpoints-05-path-condition.png)

<a id="walkthrough-06-path"></a>
### 06 · Restrict the breakpoint path

![06 · Restrict the breakpoint path](../media/v0.1.1-alpha.1/breakpoints/breakpoints-06-path.png)

<a id="walkthrough-07-remove-header"></a>
### 07 · Remove the default Header action

![07 · Remove the default Header action](../media/v0.1.1-alpha.1/breakpoints/breakpoints-07-remove-header.png)

<a id="walkthrough-08-add-breakpoint"></a>
### 08 · Add a Breakpoint action

![08 · Add a Breakpoint action](../media/v0.1.1-alpha.1/breakpoints/breakpoints-08-add-breakpoint.png)

<a id="walkthrough-09-enable"></a>
### 09 · Enable the Rule

![09 · Enable the Rule](../media/v0.1.1-alpha.1/breakpoints/breakpoints-09-enable.png)

<a id="walkthrough-10-apply"></a>
### 10 · Apply the Rule

![10 · Apply the Rule](../media/v0.1.1-alpha.1/breakpoints/breakpoints-10-apply.png)

<a id="walkthrough-11-capture"></a>
### 11 · Return to Capture

![11 · Return to Capture](../media/v0.1.1-alpha.1/breakpoints/breakpoints-11-capture.png)

<a id="walkthrough-12-pending"></a>
### 12 · Send and select the paused request

![12 · Send and select the paused request](../media/v0.1.1-alpha.1/breakpoints/breakpoints-12-pending.png)

<a id="walkthrough-13-text"></a>
### 13 · Choose Text replacement

![13 · Choose Text replacement](../media/v0.1.1-alpha.1/breakpoints/breakpoints-13-text.png)

<a id="walkthrough-14-replacement"></a>
### 14 · Enter the replacement body

![14 · Enter the replacement body](../media/v0.1.1-alpha.1/breakpoints/breakpoints-14-replacement.png)

<a id="walkthrough-15-forward"></a>
### 15 · Forward edited and verify the origin

![15 · Forward edited and verify the origin](../media/v0.1.1-alpha.1/breakpoints/breakpoints-15-forward.png)

<a id="walkthrough-16-next"></a>
### 16 · Send the next request

![16 · Send the next request](../media/v0.1.1-alpha.1/breakpoints/breakpoints-16-next.png)

<a id="walkthrough-17-unmodified"></a>
### 17 · Continue unmodified

![17 · Continue unmodified](../media/v0.1.1-alpha.1/breakpoints/breakpoints-17-unmodified.png)

<a id="walkthrough-18-drop-target"></a>
### 18 · Select a disposable request

![18 · Select a disposable request](../media/v0.1.1-alpha.1/breakpoints/breakpoints-18-drop-target.png)

<a id="walkthrough-19-drop"></a>
### 19 · Drop and inspect the client error

![19 · Drop and inspect the client error](../media/v0.1.1-alpha.1/breakpoints/breakpoints-19-drop.png)

<a id="walkthrough-20-disable"></a>
### 20 · Disable the test Rule

![20 · Disable the test Rule](../media/v0.1.1-alpha.1/breakpoints/breakpoints-20-disable.png)

<a id="walkthrough-21-apply-disabled"></a>
### 21 · Apply the disabled state

![21 · Apply the disabled state](../media/v0.1.1-alpha.1/breakpoints/breakpoints-21-apply-disabled.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="http"></a>
## Create a request or response breakpoint

**Purpose:** inspect a request before forwarding, or a response before returning it to the client.

**Prerequisites:** an external client uses the proxy. Enable Recording to observe the flow.

1. For the Capture shortcut, open the request's Breakpoint submenu and select Endpoint. These images reuse the separate `capture-shortcuts` example, `http://127.0.0.1:52315/guide/shortcuts/order`; `52315` is its dynamic recording port. The shortcut creates both request and response phases, enabled and applied immediately. The same new request pauses twice and needs both decisions; see the complete [Capture sequence](capture.md#从流量进入阻断与断点). The manual Rules path below is a separate operation.

   ![Actually opening the Capture Breakpoint submenu](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-10-breakpoint-menu.png)

   ![Endpoint immediately applies request and response phases](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-11-endpoint.png)

2. For the manual path, open Rules.

   ![Actual Rules view](../media/v0.1.1-alpha.1/breakpoints/breakpoints-01-rules.png)

3. Create a rule and name it `Guide request breakpoint`.

   ![Creating a breakpoint rule](../media/v0.1.1-alpha.1/breakpoints/breakpoints-02-create.png)

   ![Entering Guide request breakpoint](../media/v0.1.1-alpha.1/breakpoints/breakpoints-03-name.png)

4. Set Host to `127.0.0.1`.

   ![Limiting the local Host](../media/v0.1.1-alpha.1/breakpoints/breakpoints-04-host.png)

5. Add Path and limit it to `/guide/breakpoints`.

   ![Adding the Path condition](../media/v0.1.1-alpha.1/breakpoints/breakpoints-05-path-condition.png)

   ![Actual Path scope](../media/v0.1.1-alpha.1/breakpoints/breakpoints-06-path.png)

6. Remove the default Header and add a request-phase Breakpoint.

   ![Removing the default Header](../media/v0.1.1-alpha.1/breakpoints/breakpoints-07-remove-header.png)

   ![Adding the Breakpoint action](../media/v0.1.1-alpha.1/breakpoints/breakpoints-08-add-breakpoint.png)

7. Complete the fields and enable the rule.

   ![Enabling the request breakpoint](../media/v0.1.1-alpha.1/breakpoints/breakpoints-09-enable.png)

8. Apply and wait for success. Apply failures caused by incomplete fields remain image pending.

   ![Applying the manual breakpoint rule](../media/v0.1.1-alpha.1/breakpoints/breakpoints-10-apply.png)

9. Return to Capture and inspect Break on match. The [manager recording](#walkthrough-breakpoints-manager) operates global and individual Rule switches. Disabling a Rule is not resolving every waiting item.

   ![Returning to Capture before sending](../media/v0.1.1-alpha.1/breakpoints/breakpoints-11-capture.png)

10. Send through the proxy to `http://127.0.0.1:51191/guide/breakpoints/edited` and select its wait. `51191` is the recording's dynamic port. The original sent body was `{"message":"original"}`; this does not guarantee a body snapshot at the HTTP header pause.

    ![New matching request actually paused](../media/v0.1.1-alpha.1/breakpoints/breakpoints-12-pending.png)

11. The response example uses a separate `Guide response breakpoint`, Path scope `/guide/response` and origin `http://127.0.0.1:59309/`; `59309` is another dynamic recording port. Open the rule, expand its phase menu and select `response`. For File, finish the [next section's](#edit) file-saving preparation before enabling this rule.

    ![Opening the separate Guide response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-06-rules.png)

    ![Expanding the phase menu](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-07-phase-menu.png)

    ![Actually selecting response phase](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-08-response-phase.png)

12. Apply the response breakpoint.

    ![Actually applying response phase](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-09-apply.png)

13. Return to Capture, then send a matching `POST` with request body `{"request":"guide-response"}`.

    ![Returning to Capture for the response demonstration](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-10-capture.png)

    ![The header-only example waiting in response phase](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-11-header-paused.png)

14. Select the response wait, confirm it is not request phase and continue with the editing steps below.

    ![Actually selected response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-12-select-header.png)

**Expected result:** the client waits for your decision. Historical requests are not replayed.

**Notes:** HTTP breakpoints pause at headers without buffering the full original body. A missing body snapshot does not mean the original request has no body.

<a id="continue-drop"></a>
## Continue, edit or drop

1. Confirm the selected wait belongs to the request and phase above.

   ![Selecting the actual paused request](../media/v0.1.1-alpha.1/breakpoints/breakpoints-12-pending.png)

2. This recording edits first: select Text.

   ![Selecting Text replacement, not unchanged continuation](../media/v0.1.1-alpha.1/breakpoints/breakpoints-13-text.png)

3. Enter complete replacement `{"message":"edited-by-guide"}`.

   ![edited-by-guide draft before submission](../media/v0.1.1-alpha.1/breakpoints/breakpoints-14-replacement.png)

4. Choose Forward edited and inspect what the origin receives.

   ![Actual edited-forward checkpoint](../media/v0.1.1-alpha.1/breakpoints/breakpoints-15-forward.png)

5. Send another test request and select its new wait, not the already-resolved target.

   ![Next waiting request](../media/v0.1.1-alpha.1/breakpoints/breakpoints-16-next.png)

6. Choose Continue unmodified and inspect its result.

   ![Actual unchanged continuation](../media/v0.1.1-alpha.1/breakpoints/breakpoints-17-unmodified.png)

7. Send another disposable test request and confirm the target to drop.

   ![Selecting this Drop target](../media/v0.1.1-alpha.1/breakpoints/breakpoints-18-drop-target.png)

8. Choose Drop and inspect the client error and Capture state; this is not a successful response.

   ![Actual Drop result checkpoint](../media/v0.1.1-alpha.1/breakpoints/breakpoints-19-drop.png)

**Expected result**

- Continue unmodified ignores the current unsent editing draft.
- Forward edited applies that draft.
- Drop aborts that wait; it does not invent a successful HTTP response.

**Notes:** rules may already have modified the message. “Unmodified” means no additional breakpoint draft, not necessarily the client's earliest original bytes.

<a id="edit"></a>
## Edit headers, Text or File

This complete sequence uses `breakpoints-response`: save the file first, then configure response interception. Origin `http://127.0.0.1:59309/` belongs only to this recording. Request-phase `edited-by-guide` remains in the [preceding section](#continue-drop); do not mix its data with these responses.

1. Before the response rule takes effect, obtain this example's source response for saving.

   ![Actually obtaining the saveable example response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-01-source.png)

2. Select that source request.

   ![Selecting the actual source request](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-02-select-source.png)

3. Open Response and check the JSON to save: `message` is `file-from-product`, `orderId` is `guide-response-001`.

   ![Actual file body available in the product](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-03-response-body.png)

4. Use Save body and the real native panel to create `guide-response.json`. Do not hand-write a substitute or use Transfer's same-named file with different contents.

   ![Real Save panel creating this exercise's guide-response.json](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-04-save-dialog.png)

5. Wait for completion and retain the complete product-exported bytes. This file contains the following JSON, not the later header-only request's `origin-response`.

   ```json
   {
     "message": "file-from-product",
     "orderId": "guide-response-001"
   }
   ```

   ![Actual checkpoint for saving the complete body](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-05-saved-body.png)

6. Open `Guide response breakpoint`.

   ![Opening this response rule](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-06-rules.png)

7. Expand the phase menu and select `response`.

   ![Expanding phase choices](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-07-phase-menu.png)

   ![Selecting response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-08-response-phase.png)

8. Apply before sending matching requests.

   ![Applying this response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-09-apply.png)

9. Return to Capture to observe waits.

   ![Actually returning to Capture](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-10-capture.png)

10. Send the header-only `POST`, request body `{"request":"guide-response"}`, and wait in response phase.

    ![Actual header-only response pause](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-11-header-paused.png)

11. Select its response breakpoint and inspect the queue-head fields; request and response fields differ.

    ![Actual response-phase editor fields](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-12-select-header.png)

12. Keep Body Off for a header-only edit.

    ![Explicitly keeping Body Off](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-13-body-off.png)

13. Change `x-guide-response` to `header-only-guide`, without entering a replacement body.

    ![Editing only the actual response Header](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-14-header-value.png)

14. Forward edited; verify the Header changed while the body remains `{"message":"origin-response","orderId":"guide-response-001"}`.

    ![Actual header-only forwarding result](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-15-header-forward.png)

15. Send a separate Text example request and wait for its response, not the already-resolved target.

    ![New Text example response wait](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-16-text-paused.png)

16. Select the Text example.

    ![Selecting the actual Text response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-17-select-text.png)

17. Switch the body source to Text.

    ![Selecting Text replacement](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-18-text-mode.png)

18. Enter complete replacement `{"message":"text-from-guide","orderId":"guide-response-001"}`.

    ![Actual text-from-guide draft before submission](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-19-text-value.png)

19. Forward edited and inspect the replaced Text received by the client.

    ![Actual Text replacement forwarding result](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-20-text-forward.png)

20. Send the separate File example and wait for its response.

    ![Independent File example response wait](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-21-file-paused.png)

21. Select the File example.

    ![Selecting the actual File response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-22-select-file.png)

22. Switch the body source to File.

    ![Selecting File rather than Text or Off](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-23-file-mode.png)

23. In the real native Open panel, select the same `guide-response.json` saved in step 4 of this section.

    ![Real Open panel selecting this exercise's product-exported file](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-24-open-dialog.png)

24. Collapse response headers and inspect filename, displayed size and preview, confirming `file-from-product`.

    ![Actual file source and preview fully visible](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-25-file-preview.png)

25. Forward edited and verify that the client receives the complete saved file bytes, not just its preview.

    ![Actual complete-file replacement result](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-26-file-forward.png)

26. Return to the response rule to end the exercise.

    ![Returning to Guide response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-27-cleanup-rule.png)

27. Disable that response breakpoint.

    ![Actually disabling the response rule](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-28-disable.png)

28. Apply the disabled state and check this exercise's requests have all been handled.

    ![Saving the disabled response-breakpoint state](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-29-apply-disabled.png)

**Expected result:** Off preserves the body, Text uses intentional replacement text, and File sends the complete file rather than its preview.

**Notes**

- File previews are limited to `2 MiB` text or `16 MiB` complete images. Binary, media or oversized images may show an explanation instead.
- At a normal HTTP header breakpoint without a body snapshot, empty Text still means Using original.
- If a snapshot has a body, such as a WebSocket message, clearing Text can mean an empty replacement. Whitespace is real content.
- A later Capture preview does not change whether the breakpoint snapshot originally contained a body.
- See [header/body semantics](rules.md#message-editing).
- The [request variants recording](#walkthrough-breakpoints-request-variants) separately shows Header-only, HTTP empty Text preserving the original body, product-saved JSON and a six-byte binary File, and response status changed to 202. A header-stage breakpoint lacking a complete body snapshot does not prevent a later Capture preview. Binary File shows metadata, not a fabricated text preview. See [Capture body limits](capture.md#walkthrough-capture-body-limits) for large previews and full saving.

<a id="queues"></a>
## Handle multiple waiting items

This is `breakpoints-queue`, using origin `http://127.0.0.1:56242/`; the port belongs only to this recording. Prepared rules `Guide POST queue` and `Guide PUT queue` both limit `/guide/queue`, matching POST and PUT respectively in the shared `http` queue. The clip begins by inspecting existing rules, not demonstrating their initial creation.

1. Inspect both rules in Rules.

   ![The two actual Method rules](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-01-rules.png)

2. Select `Guide POST queue` and check its POST condition.

   ![Actual Guide POST queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-02-post-rule.png)

3. Select `Guide PUT queue` and check PUT. Two rules do not mean two independent HTTP queues.

   ![Actual Guide PUT queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-03-put-rule.png)

4. Return to Capture.

   ![Returning to Capture before queuing requests](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-04-capture.png)

5. Send POST-A through the proxy, body `{"order":"POST-A","source":"original"}`; it becomes Head.

   ![POST-A becomes the actual head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-05-post-head.png)

6. Without resolving the head, send POST-B, body `{"order":"POST-B","source":"original"}`, and inspect Queued.

   ![POST-B waiting in the same queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-06-post-queued.png)

7. Send PUT-A, body `{"order":"PUT-A","source":"original"}`. The `http` queue now has three items; different methods do not bypass the queue.

   ![PUT-A joins the actual three-item HTTP queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-07-put-queued.png)

8. Select the editable POST-A head.

   ![Selecting POST-A Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-08-select-head.png)

9. Choose Text for the head.

   ![Selecting a Text draft for the head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-09-text-draft.png)

10. Enter `{"order":"POST-A","source":"draft-not-submitted"}` without Forward edited.

    ![Actual unsubmitted POST-A draft](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-10-enter-draft.png)

11. Select POST-B and inspect its ordinary, read-only Queued details.

    ![Actual read-only POST-B Queued details](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-11-post-queued-detail.png)

12. Select PUT-A and confirm it is still waiting too.

    ![Actual PUT-A waiting details](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-12-put-queued-detail.png)

13. Return to POST-A Head and check that its `draft-not-submitted` draft remains. Do not apply it to a later item.

    ![Actual draft retained when returning to the head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-13-restore-draft.png)

14. After Continue rule in the next section, inspect POST-A/POST-B resolved and PUT-A retained as the next head. This advances existing waits; it is not a newly sent request impersonating queue progress.

    ![PUT wait remaining after the POST rule was continued](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-15-continue-rule.png)

**Expected result:** HTTP requests, responses and WebSocket upgrades share the HTTP queue. Each WebSocket connection has a separate message queue, preserving arrival order in both directions.

**Notes**

- Filters hide rows, not waits, and do not reorder queues.
- Each waiting item keeps its own draft while selected elsewhere.
- Client timeouts/disconnects can remove items. Never reuse a stale ID against a different request.
- There is no hidden queue-size limit that automatically continues traffic.
- If you selected another request, continue deliberately. The [mixed-queue recording](#walkthrough-breakpoints-mixed-queues) checks a shared HTTP request/response queue and an independent connection-message queue; actual client cancellation is also in the manager recording. The tested Release establishes Upgrade without an HTTP pending item, so no Queued state is fabricated from architectural expectations. Removed IDs are not forcibly reused through an internal API.

<a id="batch"></a>
## Use batch commands and the manager

Continue from the preceding `http` queue containing POST-A, POST-B and PUT-A, with POST-A's unsubmitted draft. Execute each command separately; do not act again on an already-resolved target.

1. Open the batch menu and check that the rule target is `Guide POST queue`.

   ![Actual batch menu and rule target](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-14-rule-menu.png)

2. Choose Continue rule. It continues POST-A/POST-B unchanged and retains PUT-A. It does not submit `draft-not-submitted`; POST-A still uses `source: original`.

   ![Actually continuing only POST while PUT remains waiting](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-15-continue-rule.png)

3. Send PUT-B, body `{"order":"PUT-B","source":"original"}`, leaving PUT-A and PUT-B in the queue.

   ![Actually adding PUT-B](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-16-put-b.png)

4. Open the current `http` queue menu.

   ![Actual queue menu for the remaining PUT waits](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-18-drop-menu.png)

5. Choose Drop queue and inspect both drops and actual client errors/end states, not a successful response.

   ![Drop queue actually resolves the two remaining waits](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-19-drop-queue.png)

6. Send new POST-C, body `{"order":"POST-C","source":"original"}`, to create a new head.

   ![New POST-C head, not a reused old request](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-20-new-post.png)

7. Send new PUT-C, body `{"order":"PUT-C","source":"original"}`, into the same `http` queue.

   ![PUT-C joins the new HTTP queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-21-new-put.png)

8. Select the new head.

   ![Selecting the actual new Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-22-select-new-head.png)

9. Open the whole-queue menu and distinguish Continue queue from Continue rule.

   ![Actual whole-queue menu](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-23-continue-menu.png)

10. Choose Continue queue to continue current POST-C and PUT-C unchanged, across both rules rather than POST only.

    ![Actually continuing both POST and PUT unchanged](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-24-continue-queue.png)

11. Return to Rules to clean up future matching.

    ![Returning to Rules after resolving waits](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-25-cleanup-rules.png)

12. Select and disable `Guide POST queue`.

    ![Selecting the POST rule](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-26-select-post-rule.png)

    ![Actually disabling the POST rule](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-27-disable-post.png)

13. Select and disable `Guide PUT queue`.

    ![Selecting the PUT rule](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-28-select-put-rule.png)

    ![Actually disabling the PUT rule](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-29-disable-put.png)

14. Apply both disabled states. This recording retains the rules rather than deleting them.

    ![Actually applying both disabled rules](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-30-apply-disabled.png)

**Expected result:** the action uses the target snapshot at its start, not an unbounded set of future arrivals.

**Notes:** manager rule toggles/removal apply immediately; ordinary Rules editing follows its own Apply flow. Batch Continue ignores editor drafts. Disabling matching does not prove all existing clients have been released.

The [manager recording](#walkthrough-breakpoints-manager) independently demonstrates manager switches, removal, subsequent matching and the corresponding rule. Concurrent arrivals are an operational boundary; a fixed-batch walkthrough is not exhaustive coverage of every internal race.

<a id="websocket"></a>
## Pause and edit WebSocket frames

**Prerequisites:** a readable connection; WSS needs appropriate decryption.

This separate example uses `ws://127.0.0.1:58082/guide/websocket/text`; `58082` is a dynamic recording port. Every example is a JSON text frame of type `message`, first Sent and then Received to cover each direction separately. This is neither Capture's ordinary hello from client nor simultaneous Both mode.

1. Connect the external client through the proxy.

   ![Actually establishing this WebSocket connection](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-01-connect.png)

2. Select that connection.

   ![Selecting the actual WebSocket record](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-02-select-connection.png)

3. Open Messages.

   ![Actual Messages entry](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-03-messages.png)

4. Open breakpoint settings for this connection.

   ![Actual connection breakpoint settings](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-04-sent-setup.png)

5. Select Sent to pause only client-to-server messages in this phase.

   ![Actually selecting Sent](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-05-sent-direction.png)

6. Enable Sent text interception.

   ![Actually enabling sent-direction interception](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-06-enable-sent.png)

7. Send `{"type":"chat","message":"hello-original"}` from the client and inspect its pause.

   ![hello-original actually paused](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-07-sent-original.png)

8. Continue unmodified and check unchanged sending.

   ![Actually continuing the sent frame unchanged](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-08-sent-unmodified.png)

9. Send a separate `{"type":"chat","message":"edit-this"}` and wait for its new frame.

   ![Separate edit-this paused frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-09-sent-edit-target.png)

10. Select Text in that frame's inline editor.

    ![Selecting Text for the sent frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-10-sent-text.png)

11. Enter complete replacement `{"type":"chat","message":"edited-by-guide"}`.

    ![Actual sent-frame replacement draft](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-11-sent-edit.png)

12. Forward edited and check the replacement at the origin and in its echo.

    ![Actual edited sending and echo checkpoint](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-12-sent-forward.png)

13. Send `{"type":"chat","message":"do-not-forward"}` separately and confirm this Drop target.

    ![Actual sent frame to drop](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-13-sent-drop-target.png)

14. Drop that sent frame, rather than treating it as delivered to the origin.

    ![Actually dropping the sent-direction frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-14-sent-drop.png)

15. Disable Sent to finish that direction's exercise.

    ![Actually disabling Sent](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-15-disable-sent.png)

16. Reopen settings for the same connection.

    ![Reopening actual connection settings](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-16-received-setup.png)

17. Select Received for server-to-client traffic.

    ![Actually selecting Received](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-17-received-direction.png)

18. Enable Received text interception.

    ![Actually enabling received-direction interception](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-18-enable-received.png)

19. Have the origin send `{"type":"chat","message":"server-original"}` and inspect the received-direction pause.

    ![server-original actually paused](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-19-received-original.png)

20. Continue unmodified and check the client receives the original.

    ![Actually continuing the received frame unchanged](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-20-received-unmodified.png)

21. Have the origin send a separate `{"type":"chat","message":"server-edit-this"}`.

    ![Separate server-edit-this paused frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-21-received-edit-target.png)

22. Select Text for that received frame.

    ![Actually selecting Text for the received frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-22-received-text.png)

23. Enter complete replacement `{"type":"chat","message":"server-edited-by-guide"}`.

    ![Actual received-frame replacement draft](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-23-received-edit.png)

24. Forward edited and inspect the replacement text received by the client.

    ![Actual edited receiving result](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-24-received-forward.png)

25. Have the origin send `{"type":"chat","message":"server-do-not-forward"}` and confirm this Drop target.

    ![Actual received frame to drop](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-25-received-drop-target.png)

26. Drop that received frame without delivering it to the client.

    ![Actually dropping the received-direction frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-26-received-drop.png)

27. Disable Received interception for the connection.

    ![Actually disabling the connection breakpoint](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-27-disable-received.png)

28. Send `{"type":"chat","message":"after-disabled"}` and check normal echo without a manual wait.

    ![Normal echo actually restored after disabling](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-28-after-disabled.png)

29. Close this demonstration client connection normally.

    ![Actually closing the example connection, not intercepting a close frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-29-close-client.png)

30. For simultaneous Both or ping/pong/close interception, select those directions/types and verify them separately.

    The [control-frame recording](#walkthrough-breakpoints-websocket-controls) independently selects Both, actually intercepts ping, pong and close, and edits the close code. It also verifies empty Text forwards zero bytes when the WebSocket payload is known. Code 1001 is what the origin side actually receives; the client-side close acknowledgement can remain 1000, so do not conflate the two connections.

**Expected result:** frames wait within that connection's Messages view rather than a reused HTTP editor.

**Notes**

- There is one current active WebSocket configuration, not persistent independent configuration for unlimited connections.
- Moving configuration to another connection does not resolve existing waits on the old one.
- A close frame can be forwarded with only an allowed close-code edit; text editing is not required.
- Pausing ping/pong/close can disrupt keepalive or shutdown.

<a id="lifecycle"></a>
## End a debugging session

1. Resolve needed waits and save the disabling of unwanted future matching.

   These images disable and Apply `Guide request breakpoint` after the three requests above were handled; they do not show batch release:

   ![Disabling this request breakpoint](../media/v0.1.1-alpha.1/breakpoints/breakpoints-20-disable.png)

   ![Applying the disabled state](../media/v0.1.1-alpha.1/breakpoints/breakpoints-21-apply-disabled.png)

2. Check whether clients continued, failed or disconnected.

   Check each example you actually ran. These show the queue clip's POST-C/PUT-C continuation and the separate WebSocket clip's normal close, not a global summary of one set of connections.

   ![This HTTP queue actually resolved](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-24-continue-queue.png)

   ![The example WebSocket connection actually closed](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-29-close-client.png)

3. Quit normally and wait for proxy/process cleanup.

   The independent [Workspace Close/restart recording](workspace.md#saved-data) now includes a real driver-executed Close. This image shows the saved state before closing, not the Close click or system-proxy recovery.

   ![Workspace state before the actual Close](../media/v0.1.1-alpha.1/workspace-close/workspace-close-06-before-close.png)

   [Normal Close with pending traffic](#walkthrough-breakpoints-mixed-queues-16-before-close) actually retains HTTP and WS waits before closing, separately verifying client cancellation, no forwarding and host recovery. Its image is the pre-close state, not an exited-process image. No Core force-kill or desktop recording is used to manufacture footage.

**Expected result:** a user decision, client disconnection or Core lifecycle event resolves waits. No fixed timeout automatically continues them.

**Notes:** App shutdown or Core restart aborts waits; it is not successful forwarding. Check waits hidden by filters instead of force-killing.

<a id="tools"></a>
## Use Agent or MCP

Read current waits before approving a specific item, queue or rule. If the target has disappeared, query again instead of guessing an ID.

Tool editing is deliberately narrower than the full UI. It does not accept arbitrary local paths or every Header/close-code edit. Use the native editor for those operations; see the [Tool reference](tool-reference.md#breakpoints).

<!-- recorded-walkthrough:breakpoints-response:start -->
<a id="walkthrough-breakpoints-response"></a>
## Recorded walkthrough: response Headers, Text and File

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>rule</code> | <code>Guide response breakpoint</code> |
| <code>path</code> | <code>/guide/response</code> |
| <code>method</code> | <code>POST</code> |
| <code>phase</code> | <code>response</code> |
| <code>requestBody</code> | <code>{&quot;request&quot;:&quot;guide-response&quot;}</code> |
| <code>originBody</code> | <code>{&quot;message&quot;:&quot;origin-response&quot;,&quot;orderId&quot;:&quot;guide-response-001&quot;}</code> |
| <code>headerName</code> | <code>x-guide-response</code> |
| <code>headerValue</code> | <code>header-only-guide</code> |
| <code>textReplacement</code> | <code>{&quot;message&quot;:&quot;text-from-guide&quot;,&quot;orderId&quot;:&quot;guide-response-001&quot;}</code> |
| <code>fileName</code> | <code>guide-response.json</code> |
| <code>fileBody</code> | <code>{&#10;  &quot;message&quot;: &quot;file-from-product&quot;,&#10;  &quot;orderId&quot;: &quot;guide-response-001&quot;&#10;}</code> |
| <code>origin</code> | <code>http://127.0.0.1:59309/</code> |

<a id="walkthrough-breakpoints-response-01-source"></a>
### 01 · Fetch the source response

![01 · Fetch the source response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-01-source.png)

<a id="walkthrough-breakpoints-response-02-select-source"></a>
### 02 · Select the source request

![02 · Select the source request](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-02-select-source.png)

<a id="walkthrough-breakpoints-response-03-response-body"></a>
### 03 · Open the Response body

![03 · Open the Response body](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-03-response-body.png)

<a id="walkthrough-breakpoints-response-04-save-dialog"></a>
### 04 · Save body as guide-response.json

![04 · Save body as guide-response.json](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-04-save-dialog.png)

<a id="walkthrough-breakpoints-response-05-saved-body"></a>
### 05 · Verify the product-saved body

![05 · Verify the product-saved body](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-05-saved-body.png)

<a id="walkthrough-breakpoints-response-06-rules"></a>
### 06 · Open the response Rule

![06 · Open the response Rule](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-06-rules.png)

<a id="walkthrough-breakpoints-response-07-phase-menu"></a>
### 07 · Open the breakpoint phase options

![07 · Open the breakpoint phase options](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-07-phase-menu.png)

<a id="walkthrough-breakpoints-response-08-response-phase"></a>
### 08 · Select response phase

![08 · Select response phase](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-08-response-phase.png)

<a id="walkthrough-breakpoints-response-09-apply"></a>
### 09 · Apply the response breakpoint

![09 · Apply the response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-09-apply.png)

<a id="walkthrough-breakpoints-response-10-capture"></a>
### 10 · Return to Capture

![10 · Return to Capture](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-10-capture.png)

<a id="walkthrough-breakpoints-response-11-header-paused"></a>
### 11 · Pause the header-only response

![11 · Pause the header-only response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-11-header-paused.png)

<a id="walkthrough-breakpoints-response-12-select-header"></a>
### 12 · Select the paused response

![12 · Select the paused response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-12-select-header.png)

<a id="walkthrough-breakpoints-response-13-body-off"></a>
### 13 · Keep body replacement Off

![13 · Keep body replacement Off](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-13-body-off.png)

<a id="walkthrough-breakpoints-response-14-header-value"></a>
### 14 · Edit only x-guide-response

![14 · Edit only x-guide-response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-14-header-value.png)

<a id="walkthrough-breakpoints-response-15-header-forward"></a>
### 15 · Forward the Header edit without changing body

![15 · Forward the Header edit without changing body](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-15-header-forward.png)

<a id="walkthrough-breakpoints-response-16-text-paused"></a>
### 16 · Pause the Text example response

![16 · Pause the Text example response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-16-text-paused.png)

<a id="walkthrough-breakpoints-response-17-select-text"></a>
### 17 · Select the Text example

![17 · Select the Text example](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-17-select-text.png)

<a id="walkthrough-breakpoints-response-18-text-mode"></a>
### 18 · Choose Text replacement

![18 · Choose Text replacement](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-18-text-mode.png)

<a id="walkthrough-breakpoints-response-19-text-value"></a>
### 19 · Enter text-from-guide

![19 · Enter text-from-guide](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-19-text-value.png)

<a id="walkthrough-breakpoints-response-20-text-forward"></a>
### 20 · Forward and verify the Text bytes

![20 · Forward and verify the Text bytes](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-20-text-forward.png)

<a id="walkthrough-breakpoints-response-21-file-paused"></a>
### 21 · Pause the File example response

![21 · Pause the File example response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-21-file-paused.png)

<a id="walkthrough-breakpoints-response-22-select-file"></a>
### 22 · Select the File example

![22 · Select the File example](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-22-select-file.png)

<a id="walkthrough-breakpoints-response-23-file-mode"></a>
### 23 · Choose File replacement

![23 · Choose File replacement](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-23-file-mode.png)

<a id="walkthrough-breakpoints-response-24-open-dialog"></a>
### 24 · Select the product-saved guide-response.json

![24 · Select the product-saved guide-response.json](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-24-open-dialog.png)

<a id="walkthrough-breakpoints-response-25-file-preview"></a>
### 25 · Collapse Headers to read the File preview

![25 · Collapse Headers to read the File preview](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-25-file-preview.png)

<a id="walkthrough-breakpoints-response-26-file-forward"></a>
### 26 · Forward and verify the complete file bytes

![26 · Forward and verify the complete file bytes](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-26-file-forward.png)

<a id="walkthrough-breakpoints-response-27-cleanup-rule"></a>
### 27 · Return to the response Rule

![27 · Return to the response Rule](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-27-cleanup-rule.png)

<a id="walkthrough-breakpoints-response-28-disable"></a>
### 28 · Disable the response breakpoint

![28 · Disable the response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-28-disable.png)

<a id="walkthrough-breakpoints-response-29-apply-disabled"></a>
### 29 · Apply the disabled state

![29 · Apply the disabled state](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-29-apply-disabled.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:breakpoints-response:end -->

<!-- recorded-walkthrough:breakpoints-queue:start -->
<a id="walkthrough-breakpoints-queue"></a>
## Recorded walkthrough: queue heads, drafts and batch scope

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>postRule</code> | <code>Guide POST queue</code> |
| <code>putRule</code> | <code>Guide PUT queue</code> |
| <code>path</code> | <code>/guide/queue</code> |
| <code>queueKey</code> | <code>http</code> |
| <code>postA</code> | <code>{&quot;order&quot;:&quot;POST-A&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>postB</code> | <code>{&quot;order&quot;:&quot;POST-B&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>putA</code> | <code>{&quot;order&quot;:&quot;PUT-A&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>putB</code> | <code>{&quot;order&quot;:&quot;PUT-B&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>postC</code> | <code>{&quot;order&quot;:&quot;POST-C&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>putC</code> | <code>{&quot;order&quot;:&quot;PUT-C&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>draft</code> | <code>{&quot;order&quot;:&quot;POST-A&quot;,&quot;source&quot;:&quot;draft-not-submitted&quot;}</code> |
| <code>origin</code> | <code>http://127.0.0.1:56242/</code> |

<a id="walkthrough-breakpoints-queue-01-rules"></a>
### 01 · Review the two Method Rules

![01 · Review the two Method Rules](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-01-rules.png)

<a id="walkthrough-breakpoints-queue-02-post-rule"></a>
### 02 · Inspect Guide POST queue

![02 · Inspect Guide POST queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-02-post-rule.png)

<a id="walkthrough-breakpoints-queue-03-put-rule"></a>
### 03 · Inspect Guide PUT queue

![03 · Inspect Guide PUT queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-03-put-rule.png)

<a id="walkthrough-breakpoints-queue-04-capture"></a>
### 04 · Return to Capture

![04 · Return to Capture](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-04-capture.png)

<a id="walkthrough-breakpoints-queue-05-post-head"></a>
### 05 · Send POST-A as the Head

![05 · Send POST-A as the Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-05-post-head.png)

<a id="walkthrough-breakpoints-queue-06-post-queued"></a>
### 06 · Send POST-B into Queued

![06 · Send POST-B into Queued](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-06-post-queued.png)

<a id="walkthrough-breakpoints-queue-07-put-queued"></a>
### 07 · Send PUT-A into the same HTTP queue

![07 · Send PUT-A into the same HTTP queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-07-put-queued.png)

<a id="walkthrough-breakpoints-queue-08-select-head"></a>
### 08 · Select the POST-A Head

![08 · Select the POST-A Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-08-select-head.png)

<a id="walkthrough-breakpoints-queue-09-text-draft"></a>
### 09 · Choose Text for the Head draft

![09 · Choose Text for the Head draft](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-09-text-draft.png)

<a id="walkthrough-breakpoints-queue-10-enter-draft"></a>
### 10 · Enter an unsubmitted draft

![10 · Enter an unsubmitted draft](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-10-enter-draft.png)

<a id="walkthrough-breakpoints-queue-11-post-queued-detail"></a>
### 11 · Inspect POST-B as read-only Queued

![11 · Inspect POST-B as read-only Queued](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-11-post-queued-detail.png)

<a id="walkthrough-breakpoints-queue-12-put-queued-detail"></a>
### 12 · Inspect PUT-A while it waits

![12 · Inspect PUT-A while it waits](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-12-put-queued-detail.png)

<a id="walkthrough-breakpoints-queue-13-restore-draft"></a>
### 13 · Return to the Head with its draft intact

![13 · Return to the Head with its draft intact](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-13-restore-draft.png)

<a id="walkthrough-breakpoints-queue-14-rule-menu"></a>
### 14 · Open the batch actions menu

![14 · Open the batch actions menu](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-14-rule-menu.png)

<a id="walkthrough-breakpoints-queue-15-continue-rule"></a>
### 15 · Continue the POST Rule and leave PUT pending

![15 · Continue the POST Rule and leave PUT pending](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-15-continue-rule.png)

<a id="walkthrough-breakpoints-queue-16-put-b"></a>
### 16 · Add PUT-B to the remaining queue

![16 · Add PUT-B to the remaining queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-16-put-b.png)

<a id="walkthrough-breakpoints-queue-18-drop-menu"></a>
### 17 · Open the PUT queue menu

![17 · Open the PUT queue menu](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-18-drop-menu.png)

<a id="walkthrough-breakpoints-queue-19-drop-queue"></a>
### 18 · Drop both remaining HTTP items

![18 · Drop both remaining HTTP items](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-19-drop-queue.png)

<a id="walkthrough-breakpoints-queue-20-new-post"></a>
### 19 · Start a new POST Head

![19 · Start a new POST Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-20-new-post.png)

<a id="walkthrough-breakpoints-queue-21-new-put"></a>
### 20 · Add PUT to the same HTTP queue

![20 · Add PUT to the same HTTP queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-21-new-put.png)

<a id="walkthrough-breakpoints-queue-22-select-new-head"></a>
### 21 · Select the new Head

![21 · Select the new Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-22-select-new-head.png)

<a id="walkthrough-breakpoints-queue-23-continue-menu"></a>
### 22 · Open the whole-queue menu

![22 · Open the whole-queue menu](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-23-continue-menu.png)

<a id="walkthrough-breakpoints-queue-24-continue-queue"></a>
### 23 · Continue both Methods without edits

![23 · Continue both Methods without edits](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-24-continue-queue.png)

<a id="walkthrough-breakpoints-queue-25-cleanup-rules"></a>
### 24 · Return to Rules for cleanup

![24 · Return to Rules for cleanup](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-25-cleanup-rules.png)

<a id="walkthrough-breakpoints-queue-26-select-post-rule"></a>
### 25 · Select the POST Rule

![25 · Select the POST Rule](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-26-select-post-rule.png)

<a id="walkthrough-breakpoints-queue-27-disable-post"></a>
### 26 · Disable the POST Rule

![26 · Disable the POST Rule](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-27-disable-post.png)

<a id="walkthrough-breakpoints-queue-28-select-put-rule"></a>
### 27 · Select the PUT Rule

![27 · Select the PUT Rule](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-28-select-put-rule.png)

<a id="walkthrough-breakpoints-queue-29-disable-put"></a>
### 28 · Disable the PUT Rule

![28 · Disable the PUT Rule](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-29-disable-put.png)

<a id="walkthrough-breakpoints-queue-30-apply-disabled"></a>
### 29 · Apply both disabled Rules

![29 · Apply both disabled Rules](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-30-apply-disabled.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:breakpoints-queue:end -->

<!-- recorded-walkthrough:breakpoints-websocket:start -->
<a id="walkthrough-breakpoints-websocket"></a>
## Recorded walkthrough: WebSocket text breakpoints

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>path</code> | <code>/guide/websocket/text</code> |
| <code>original</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;hello-original&quot;}</code> |
| <code>editOriginal</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;edit-this&quot;}</code> |
| <code>replacement</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;edited-by-guide&quot;}</code> |
| <code>dropped</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;do-not-forward&quot;}</code> |
| <code>serverOriginal</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;server-original&quot;}</code> |
| <code>serverEditOriginal</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;server-edit-this&quot;}</code> |
| <code>serverReplacement</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;server-edited-by-guide&quot;}</code> |
| <code>serverDropped</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;server-do-not-forward&quot;}</code> |
| <code>afterDisabled</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;after-disabled&quot;}</code> |
| <code>origin</code> | <code>ws://127.0.0.1:58082/guide/websocket/text</code> |
| <code>directions</code> | <code>client-to-server, server-to-client</code> |
| <code>frames</code> | <code>message</code> |

<a id="walkthrough-breakpoints-websocket-01-connect"></a>
### 01 · Connect the text example client

![01 · Connect the text example client](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-01-connect.png)

<a id="walkthrough-breakpoints-websocket-02-select-connection"></a>
### 02 · Select the WebSocket connection

![02 · Select the WebSocket connection](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-02-select-connection.png)

<a id="walkthrough-breakpoints-websocket-03-messages"></a>
### 03 · Open Messages

![03 · Open Messages](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-03-messages.png)

<a id="walkthrough-breakpoints-websocket-04-sent-setup"></a>
### 04 · Open connection breakpoint settings

![04 · Open connection breakpoint settings](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-04-sent-setup.png)

<a id="walkthrough-breakpoints-websocket-05-sent-direction"></a>
### 05 · Choose Sent messages

![05 · Choose Sent messages](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-05-sent-direction.png)

<a id="walkthrough-breakpoints-websocket-06-enable-sent"></a>
### 06 · Enable Sent message breakpoints

![06 · Enable Sent message breakpoints](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-06-enable-sent.png)

<a id="walkthrough-breakpoints-websocket-07-sent-original"></a>
### 07 · Pause hello-original

![07 · Pause hello-original](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-07-sent-original.png)

<a id="walkthrough-breakpoints-websocket-08-sent-unmodified"></a>
### 08 · Continue the sent text unmodified

![08 · Continue the sent text unmodified](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-08-sent-unmodified.png)

<a id="walkthrough-breakpoints-websocket-09-sent-edit-target"></a>
### 09 · Pause edit-this

![09 · Pause edit-this](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-09-sent-edit-target.png)

<a id="walkthrough-breakpoints-websocket-10-sent-text"></a>
### 10 · Choose Text for the sent frame

![10 · Choose Text for the sent frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-10-sent-text.png)

<a id="walkthrough-breakpoints-websocket-11-sent-edit"></a>
### 11 · Enter edited-by-guide

![11 · Enter edited-by-guide](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-11-sent-edit.png)

<a id="walkthrough-breakpoints-websocket-12-sent-forward"></a>
### 12 · Forward the edited text and verify its echo

![12 · Forward the edited text and verify its echo](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-12-sent-forward.png)

<a id="walkthrough-breakpoints-websocket-13-sent-drop-target"></a>
### 13 · Pause do-not-forward

![13 · Pause do-not-forward](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-13-sent-drop-target.png)

<a id="walkthrough-breakpoints-websocket-14-sent-drop"></a>
### 14 · Drop the sent frame

![14 · Drop the sent frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-14-sent-drop.png)

<a id="walkthrough-breakpoints-websocket-15-disable-sent"></a>
### 15 · Disable the Sent configuration

![15 · Disable the Sent configuration](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-15-disable-sent.png)

<a id="walkthrough-breakpoints-websocket-16-received-setup"></a>
### 16 · Reopen connection settings

![16 · Reopen connection settings](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-16-received-setup.png)

<a id="walkthrough-breakpoints-websocket-17-received-direction"></a>
### 17 · Choose Received messages

![17 · Choose Received messages](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-17-received-direction.png)

<a id="walkthrough-breakpoints-websocket-18-enable-received"></a>
### 18 · Enable Received message breakpoints

![18 · Enable Received message breakpoints](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-18-enable-received.png)

<a id="walkthrough-breakpoints-websocket-19-received-original"></a>
### 19 · Pause server-original from the origin

![19 · Pause server-original from the origin](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-19-received-original.png)

<a id="walkthrough-breakpoints-websocket-20-received-unmodified"></a>
### 20 · Continue the received text unmodified

![20 · Continue the received text unmodified](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-20-received-unmodified.png)

<a id="walkthrough-breakpoints-websocket-21-received-edit-target"></a>
### 21 · Pause server-edit-this

![21 · Pause server-edit-this](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-21-received-edit-target.png)

<a id="walkthrough-breakpoints-websocket-22-received-text"></a>
### 22 · Choose Text for the received frame

![22 · Choose Text for the received frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-22-received-text.png)

<a id="walkthrough-breakpoints-websocket-23-received-edit"></a>
### 23 · Enter server-edited-by-guide

![23 · Enter server-edited-by-guide](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-23-received-edit.png)

<a id="walkthrough-breakpoints-websocket-24-received-forward"></a>
### 24 · Forward the replacement to the client

![24 · Forward the replacement to the client](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-24-received-forward.png)

<a id="walkthrough-breakpoints-websocket-25-received-drop-target"></a>
### 25 · Pause server-do-not-forward

![25 · Pause server-do-not-forward](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-25-received-drop-target.png)

<a id="walkthrough-breakpoints-websocket-26-received-drop"></a>
### 26 · Drop the received frame

![26 · Drop the received frame](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-26-received-drop.png)

<a id="walkthrough-breakpoints-websocket-27-disable-received"></a>
### 27 · Disable connection breakpoints

![27 · Disable connection breakpoints](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-27-disable-received.png)

<a id="walkthrough-breakpoints-websocket-28-after-disabled"></a>
### 28 · Verify normal echo after disabling

![28 · Verify normal echo after disabling](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-28-after-disabled.png)

<a id="walkthrough-breakpoints-websocket-29-close-client"></a>
### 29 · Close the example connection normally

![29 · Close the example connection normally](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-29-close-client.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:breakpoints-websocket:end -->

<!-- recorded-walkthrough:breakpoints-manager:start -->
<a id="walkthrough-breakpoints-manager"></a>
## Recorded walkthrough: shortcut undo, global and Rule switches, and client abort

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:63537/guide/breakpoint-manager/request</code> |
| <code>shortcutScope</code> | <code>endpoint</code> |
| <code>generatedRuleName</code> | <code>断点 · 127.0.0.1/guide/breakpoint-manager/request</code> |
| <code>abortHeader</code> | <code>x-guide-attempt: abort</code> |
| <code>resumedHeader</code> | <code>x-guide-attempt: after-abort</code> |
| <code>finalState</code> | <code>Break on match enabled; this endpoint Rule disabled and applied; no pending item remains</code> |

<a id="walkthrough-breakpoints-manager-01-source"></a>
### 01 · Inspect the captured shortcut source

![01 · Inspect the captured shortcut source](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-01-source.png)

<a id="walkthrough-breakpoints-manager-02-menu"></a>
### 02 · Open the Breakpoint scope menu

![02 · Open the Breakpoint scope menu](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-02-menu.png)

<a id="walkthrough-breakpoints-manager-03-create"></a>
### 03 · Choose Endpoint and apply immediately

![03 · Choose Endpoint and apply immediately](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-03-create.png)

<a id="walkthrough-breakpoints-manager-04-undo"></a>
### 04 · Use Undo in the creation notice

![04 · Use Undo in the creation notice](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-04-undo.png)

<a id="walkthrough-breakpoints-manager-05-after-undo"></a>
### 05 · Send a new request to verify undo

![05 · Send a new request to verify undo](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-05-after-undo.png)

<a id="walkthrough-breakpoints-manager-06-recreate-menu"></a>
### 06 · Reopen the same Endpoint menu

![06 · Reopen the same Endpoint menu](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-06-recreate-menu.png)

<a id="walkthrough-breakpoints-manager-07-recreate"></a>
### 07 · Recreate this example Breakpoint

![07 · Recreate this example Breakpoint](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-07-recreate.png)

<a id="walkthrough-breakpoints-manager-08-manager"></a>
### 08 · Open the Breakpoint manager

![08 · Open the Breakpoint manager](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-08-manager.png)

<a id="walkthrough-breakpoints-manager-09-global-off"></a>
### 09 · Turn off global Break on match

![09 · Turn off global Break on match](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-09-global-off.png)

<a id="walkthrough-breakpoints-manager-10-close-manager"></a>
### 10 · Close the manager

![10 · Close the manager](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-10-close-manager.png)

<a id="walkthrough-breakpoints-manager-11-not-paused"></a>
### 11 · Verify new requests do not pause while globally disabled

![11 · Verify new requests do not pause while globally disabled](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-11-not-paused.png)

<a id="walkthrough-breakpoints-manager-12-manager-again"></a>
### 12 · Open the manager again

![12 · Open the manager again](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-12-manager-again.png)

<a id="walkthrough-breakpoints-manager-13-global-on"></a>
### 13 · Enable Break on match again

![13 · Enable Break on match again](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-13-global-on.png)

<a id="walkthrough-breakpoints-manager-14-close-manager"></a>
### 14 · Return to the request list

![14 · Return to the request list](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-14-close-manager.png)

<a id="walkthrough-breakpoints-manager-15-abort-pending"></a>
### 15 · Send a request that the client will cancel

![15 · Send a request that the client will cancel](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-15-abort-pending.png)

<a id="walkthrough-breakpoints-manager-16-select-pending"></a>
### 16 · Inspect this Head item

![16 · Inspect this Head item](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-16-select-pending.png)

<a id="walkthrough-breakpoints-manager-17-client-abort"></a>
### 17 · Let the client abort and release the pending item

![17 · Let the client abort and release the pending item](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-17-client-abort.png)

<a id="walkthrough-breakpoints-manager-18-new-wait"></a>
### 18 · Send again to obtain a new pending item

![18 · Send again to obtain a new pending item](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-18-new-wait.png)

<a id="walkthrough-breakpoints-manager-19-continue-request"></a>
### 19 · Continue the request phase unchanged

![19 · Continue the request phase unchanged](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-19-continue-request.png)

<a id="walkthrough-breakpoints-manager-20-continue-response"></a>
### 20 · Continue the response phase unchanged

![20 · Continue the response phase unchanged](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-20-continue-response.png)

<a id="walkthrough-breakpoints-manager-21-rule-manager"></a>
### 21 · Open the manager to disable one Rule

![21 · Open the manager to disable one Rule](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-21-rule-manager.png)

<a id="walkthrough-breakpoints-manager-22-rule-off"></a>
### 22 · Disable only this Endpoint Rule

![22 · Disable only this Endpoint Rule](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-22-rule-off.png)

<a id="walkthrough-breakpoints-manager-23-close-manager"></a>
### 23 · Return to the list to inspect disabling

![23 · Return to the list to inspect disabling](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-23-close-manager.png)

<a id="walkthrough-breakpoints-manager-24-rule-disabled"></a>
### 24 · Verify the disabled Rule no longer pauses new requests

![24 · Verify the disabled Rule no longer pauses new requests](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-24-rule-disabled.png)

<a id="walkthrough-breakpoints-manager-25-open-rule"></a>
### 25 · Open the corresponding Rule from the manager

![25 · Open the corresponding Rule from the manager](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-25-open-rule.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:breakpoints-manager:end -->

<!-- recorded-walkthrough:breakpoints-websocket-controls:start -->
<a id="walkthrough-breakpoints-websocket-controls"></a>
## Recorded walkthrough: Both, empty Text, Ping/Pong and close-code editing

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>path</code> | <code>/guide/websocket-controls</code> |
| <code>originalMessage</code> | <code>guide-before-empty</code> |
| <code>replacement</code> | <code>empty Text produces an empty WebSocket message</code> |
| <code>directions</code> | <code>Both for message and ping/pong; Sent only for close</code> |
| <code>ping</code> | <code>guide-ping</code> |
| <code>afterDisabled</code> | <code>guide-unpaused is delivered without any pending item</code> |
| <code>originalClose</code> | <code>1000, guide-close</code> |
| <code>forwardedClose</code> | <code>1001, guide-close</code> |
| <code>clientAcknowledgement</code> | <code>The client-side close acknowledgement is 1000; do not equate both connection directions</code> |

<a id="walkthrough-breakpoints-websocket-controls-01-connect"></a>
### 01 · Open the control-frame example connection

![01 · Open the control-frame example connection](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-01-connect.png)

<a id="walkthrough-breakpoints-websocket-controls-02-select"></a>
### 02 · Select this connection

![02 · Select this connection](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-02-select.png)

<a id="walkthrough-breakpoints-websocket-controls-03-messages"></a>
### 03 · Open Messages

![03 · Open Messages](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-03-messages.png)

<a id="walkthrough-breakpoints-websocket-controls-04-setup"></a>
### 04 · Open connection breakpoint settings

![04 · Open connection breakpoint settings](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-04-setup.png)

<a id="walkthrough-breakpoints-websocket-controls-05-both"></a>
### 05 · Select Both directions

![05 · Select Both directions](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-05-both.png)

<a id="walkthrough-breakpoints-websocket-controls-06-ping"></a>
### 06 · Include ping frames

![06 · Include ping frames](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-06-ping.png)

<a id="walkthrough-breakpoints-websocket-controls-07-pong"></a>
### 07 · Include pong frames

![07 · Include pong frames](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-07-pong.png)

<a id="walkthrough-breakpoints-websocket-controls-08-enable"></a>
### 08 · Enable Both message and ping/pong breakpoints

![08 · Enable Both message and ping/pong breakpoints](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-08-enable.png)

<a id="walkthrough-breakpoints-websocket-controls-09-text"></a>
### 09 · Send and pause a non-empty message

![09 · Send and pause a non-empty message](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-09-text.png)

<a id="walkthrough-breakpoints-websocket-controls-10-empty-mode"></a>
### 10 · Choose Text replacement

![10 · Choose Text replacement](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-10-empty-mode.png)

<a id="walkthrough-breakpoints-websocket-controls-11-empty-value"></a>
### 11 · Explicitly leave Text empty

![11 · Explicitly leave Text empty](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-11-empty-value.png)

<a id="walkthrough-breakpoints-websocket-controls-12-empty-forward"></a>
### 12 · Forward an empty message instead of keeping the original

![12 · Forward an empty message instead of keeping the original](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-12-empty-forward.png)

<a id="walkthrough-breakpoints-websocket-controls-13-empty-echo"></a>
### 13 · Continue the return direction in Both mode

![13 · Continue the return direction in Both mode](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-13-empty-echo.png)

<a id="walkthrough-breakpoints-websocket-controls-14-send-ping"></a>
### 14 · Send and pause guide-ping

![14 · Send and pause guide-ping](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-14-send-ping.png)

<a id="walkthrough-breakpoints-websocket-controls-15-continue-ping"></a>
### 15 · Continue ping unchanged

![15 · Continue ping unchanged](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-15-continue-ping.png)

<a id="walkthrough-breakpoints-websocket-controls-16-continue-pong"></a>
### 16 · Continue the returning pong unchanged

![16 · Continue the returning pong unchanged](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-16-continue-pong.png)

<a id="walkthrough-breakpoints-websocket-controls-17-disable-both"></a>
### 17 · Disable the current Both settings

![17 · Disable the current Both settings](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-17-disable-both.png)

<a id="walkthrough-breakpoints-websocket-controls-18-close-setup"></a>
### 18 · Open connection settings again

![18 · Open connection settings again](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-18-close-setup.png)

<a id="walkthrough-breakpoints-websocket-controls-19-close-sent"></a>
### 19 · Select Sent for the close example

![19 · Select Sent for the close example](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-19-close-sent.png)

<a id="walkthrough-breakpoints-websocket-controls-20-message-off"></a>
### 20 · Stop pausing message

![20 · Stop pausing message](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-20-message-off.png)

<a id="walkthrough-breakpoints-websocket-controls-20-ping-off"></a>
### 21 · Stop pausing ping

![21 · Stop pausing ping](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-20-ping-off.png)

<a id="walkthrough-breakpoints-websocket-controls-20-pong-off"></a>
### 22 · Stop pausing pong

![22 · Stop pausing pong](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-20-pong-off.png)

<a id="walkthrough-breakpoints-websocket-controls-21-close-on"></a>
### 23 · Select close control frames

![23 · Select close control frames](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-21-close-on.png)

<a id="walkthrough-breakpoints-websocket-controls-22-enable-close"></a>
### 24 · Enable the Sent close breakpoint

![24 · Enable the Sent close breakpoint](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-22-enable-close.png)

<a id="walkthrough-breakpoints-websocket-controls-23-close-request"></a>
### 25 · Ask the client to close with code 1000

![25 · Ask the client to close with code 1000](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-23-close-request.png)

<a id="walkthrough-breakpoints-websocket-controls-24-close-code"></a>
### 26 · Change only the close code to 1001

![26 · Change only the close code to 1001](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-24-close-code.png)

<a id="walkthrough-breakpoints-websocket-controls-25-close-forward"></a>
### 27 · Verify the origin edit and the actual client close acknowledgement

![27 · Verify the origin edit and the actual client close acknowledgement](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-25-close-forward.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:breakpoints-websocket-controls:end -->

<!-- recorded-walkthrough:breakpoints-request-variants:start -->
<a id="walkthrough-breakpoints-request-variants"></a>
## Request Headers, empty Text, Files and response status

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>ruleName</code> | <code>Guide request variants</code> |
| <code>path</code> | <code>/guide/request-variants</code> |
| <code>originalRequest</code> | <code>{&quot;message&quot;:&quot;guide-original-request&quot;}</code> |
| <code>requestHeader</code> | <code>x-guide-request: header-only</code> |
| <code>jsonFile</code> | <code>guide-request.json</code> |
| <code>jsonFileBody</code> | <code>{&quot;message&quot;:&quot;guide-file-request&quot;,&quot;count&quot;:2}</code> |
| <code>binaryFile</code> | <code>guide-request.bin</code> |
| <code>binaryHex</code> | <code>00010203feff</code> |
| <code>responseStatus</code> | <code>202</code> |
| <code>retainedResponseBody</code> | <code>{&quot;message&quot;:&quot;guide-origin-response&quot;}</code> |
| <code>binaryPreview</code> | <code>The release shows file metadata without a text preview; forwarding still sends all six bytes</code> |
| <code>httpSnapshot</code> | <code>HTTP suspension is at the head stage; Capture may independently provide a readable original preview</code> |
| <code>source</code> | <code>Both replacement files are generated by this workflow’s real Save body</code> |

<a id="walkthrough-breakpoints-request-variants-json-01-source"></a>
### 01 · Fetch the public json source body

![01 · Fetch the public json source body](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-01-source.png)

<a id="walkthrough-breakpoints-request-variants-json-02-select"></a>
### 02 · Select the source response

![02 · Select the source response](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-02-select.png)

<a id="walkthrough-breakpoints-request-variants-json-03-save"></a>
### 03 · Save guide-request.json through the product

![03 · Save guide-request.json through the product](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-03-save.png)

<a id="walkthrough-breakpoints-request-variants-json-04-saved"></a>
### 04 · Verify the actually saved bytes

![04 · Verify the actually saved bytes](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-04-saved.png)

<a id="walkthrough-breakpoints-request-variants-binary-01-source"></a>
### 05 · Fetch the public binary source body

![05 · Fetch the public binary source body](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-01-source.png)

<a id="walkthrough-breakpoints-request-variants-binary-02-select"></a>
### 06 · Select the source response

![06 · Select the source response](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-02-select.png)

<a id="walkthrough-breakpoints-request-variants-binary-03-save"></a>
### 07 · Save guide-request.bin through the product

![07 · Save guide-request.bin through the product](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-03-save.png)

<a id="walkthrough-breakpoints-request-variants-binary-04-saved"></a>
### 08 · Verify the actually saved bytes

![08 · Verify the actually saved bytes](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-04-saved.png)

<a id="walkthrough-breakpoints-request-variants-header-01-pending"></a>
### 09 · Send and select the Header-only pending request

![09 · Send and select the Header-only pending request](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-01-pending.png)

<a id="walkthrough-breakpoints-request-variants-header-02-off"></a>
### 10 · Keep Body explicitly Off

![10 · Keep Body explicitly Off](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-02-off.png)

<a id="walkthrough-breakpoints-request-variants-header-03-add"></a>
### 11 · Add a request Header row

![11 · Add a request Header row](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-03-add.png)

<a id="walkthrough-breakpoints-request-variants-header-04-name"></a>
### 12 · Enter x-guide-request

![12 · Enter x-guide-request](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-04-name.png)

<a id="walkthrough-breakpoints-request-variants-header-05-value"></a>
### 13 · Enter header-only

![13 · Enter header-only](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-05-value.png)

<a id="walkthrough-breakpoints-request-variants-header-06-forward"></a>
### 14 · Forward edited while retaining the original body

![14 · Forward edited while retaining the original body](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-06-forward.png)

<a id="walkthrough-breakpoints-request-variants-empty-01-pending"></a>
### 15 · Send the empty-Text example

![15 · Send the empty-Text example](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-empty-01-pending.png)

<a id="walkthrough-breakpoints-request-variants-empty-02-text"></a>
### 16 · Choose Text without entering a replacement

![16 · Choose Text without entering a replacement](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-empty-02-text.png)

<a id="walkthrough-breakpoints-request-variants-empty-03-forward"></a>
### 17 · Verify empty Text at the HTTP head stage retains the original body

![17 · Verify empty Text at the HTTP head stage retains the original body](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-empty-03-forward.png)

<a id="walkthrough-breakpoints-request-variants-json-file-01-pending"></a>
### 18 · Send the File replacement request

![18 · Send the File replacement request](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-01-pending.png)

<a id="walkthrough-breakpoints-request-variants-json-file-02-mode"></a>
### 19 · Choose File replacement

![19 · Choose File replacement](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-02-mode.png)

<a id="walkthrough-breakpoints-request-variants-json-file-03-open"></a>
### 20 · Select the product-saved guide-request.json

![20 · Select the product-saved guide-request.json](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-03-open.png)

<a id="walkthrough-breakpoints-request-variants-json-file-04-preview"></a>
### 21 · Inspect the actually selected file

![21 · Inspect the actually selected file](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-04-preview.png)

<a id="walkthrough-breakpoints-request-variants-json-file-05-forward"></a>
### 22 · Verify the origin received the complete file bytes

![22 · Verify the origin received the complete file bytes](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-05-forward.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-01-pending"></a>
### 23 · Send the File replacement request

![23 · Send the File replacement request](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-01-pending.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-02-mode"></a>
### 24 · Choose File replacement

![24 · Choose File replacement](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-02-mode.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-03-open"></a>
### 25 · Select the product-saved guide-request.bin

![25 · Select the product-saved guide-request.bin](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-03-open.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-04-preview"></a>
### 26 · Inspect the actually selected file

![26 · Inspect the actually selected file](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-04-preview.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-04a-type"></a>
### 27 · Explicitly change Content-Type to binary

![27 · Explicitly change Content-Type to binary](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-04a-type.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-05-forward"></a>
### 28 · Verify the origin received the complete file bytes

![28 · Verify the origin received the complete file bytes](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-05-forward.png)

<a id="walkthrough-breakpoints-request-variants-status-01-rule"></a>
### 29 · Return to the same Rule

![29 · Return to the same Rule](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-01-rule.png)

<a id="walkthrough-breakpoints-request-variants-status-02-phase"></a>
### 30 · Switch to the response phase

![30 · Switch to the response phase](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-02-phase.png)

<a id="walkthrough-breakpoints-request-variants-status-03-apply"></a>
### 31 · Apply the response phase

![31 · Apply the response phase](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-03-apply.png)

<a id="walkthrough-breakpoints-request-variants-status-04-capture"></a>
### 32 · Return to Capture

![32 · Return to Capture](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-04-capture.png)

<a id="walkthrough-breakpoints-request-variants-status-05-pending"></a>
### 33 · Send and wait for response headers

![33 · Send and wait for response headers](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-05-pending.png)

<a id="walkthrough-breakpoints-request-variants-status-06-code"></a>
### 34 · Change response status to 202

![34 · Change response status to 202](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-06-code.png)

<a id="walkthrough-breakpoints-request-variants-status-07-forward"></a>
### 35 · Verify the status changes while the response body is retained

![35 · Verify the status changes while the response body is retained](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-07-forward.png)

<a id="walkthrough-breakpoints-request-variants-finish-01-rule"></a>
### 36 · Return to the Rule for cleanup

![36 · Return to the Rule for cleanup](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-finish-01-rule.png)

<a id="walkthrough-breakpoints-request-variants-finish-02-disable"></a>
### 37 · Disable this Rule

![37 · Disable this Rule](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-finish-02-disable.png)

<a id="walkthrough-breakpoints-request-variants-finish-03-apply"></a>
### 38 · Apply the disabled state

![38 · Apply the disabled state](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-finish-03-apply.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:breakpoints-request-variants:end -->

<!-- recorded-walkthrough:breakpoints-mixed-queues:start -->
<a id="walkthrough-breakpoints-mixed-queues"></a>
## Recorded walkthrough: mixed queues, actual Upgrade behavior and shutdown with pending traffic

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>requestPath</code> | <code>/guide/mixed/request-head</code> |
| <code>responsePath</code> | <code>/guide/mixed/response-queued</code> |
| <code>upgradePath</code> | <code>/guide/mixed/upgrade-queued</code> |
| <code>livePath</code> | <code>/guide/mixed/live</code> |
| <code>exitPath</code> | <code>/guide/mixed/request-exit</code> |
| <code>originalBody</code> | <code>{&quot;message&quot;:&quot;guide-original-http&quot;}</code> |
| <code>unsentDraft</code> | <code>{&quot;message&quot;:&quot;guide-unsubmitted-draft&quot;}</code> |
| <code>firstFrame</code> | <code>guide-ws-head</code> |
| <code>secondFrame</code> | <code>guide-ws-queued</code> |
| <code>exitFrame</code> | <code>guide-ws-exit-must-not-forward</code> |
| <code>httpScope</code> | <code>Request and response waits share queueKey=http</code> |
| <code>upgradeBoundary</code> | <code>The released App established this real Upgrade without a pending item despite the configured narrow GET Rule; no queued Upgrade is claimed</code> |
| <code>wsScope</code> | <code>Established connection frames have a separate ws:* queue</code> |
| <code>closeImage</code> | <code>Before the actual Close; post-close cancellation and host restoration are separate evidence, not a desktop recording</code> |

<a id="walkthrough-breakpoints-mixed-queues-01-http-head"></a>
### 01 · Send an HTTP request as queue head

![01 · Send an HTTP request as queue head](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-01-http-head.png)

<a id="walkthrough-breakpoints-mixed-queues-02-response-queued"></a>
### 02 · Queue a response in the same HTTP queue

![02 · Queue a response in the same HTTP queue](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-02-response-queued.png)

<a id="walkthrough-breakpoints-mixed-queues-03-upgrade-result"></a>
### 03 · Observe Upgrade connecting without joining this queue

![03 · Observe Upgrade connecting without joining this queue](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-03-upgrade-result.png)

<a id="walkthrough-breakpoints-mixed-queues-04-live-connection"></a>
### 04 · Select the established WS connection

![04 · Select the established WS connection](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-04-live-connection.png)

<a id="walkthrough-breakpoints-mixed-queues-05-ws-head"></a>
### 05 · Send the first WS frame as its own queue head

![05 · Send the first WS frame as its own queue head](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-05-ws-head.png)

<a id="walkthrough-breakpoints-mixed-queues-06-ws-queued"></a>
### 06 · Queue an origin frame in the same WS queue

![06 · Queue an origin frame in the same WS queue](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-06-ws-queued.png)

<a id="walkthrough-breakpoints-mixed-queues-07-http-draft"></a>
### 07 · Enter an HTTP head draft without submitting it

![07 · Enter an HTTP head draft without submitting it](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-07-http-draft.png)

<a id="walkthrough-breakpoints-mixed-queues-08-inspect-response"></a>
### 08 · Select the queued response for read-only inspection

![08 · Select the queued response for read-only inspection](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-08-inspect-response.png)

<a id="walkthrough-breakpoints-mixed-queues-09-inspect-upgrade"></a>
### 09 · Select the established connection without claiming Queued

![09 · Select the established connection without claiming Queued](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-09-inspect-upgrade.png)

<a id="walkthrough-breakpoints-mixed-queues-10-http-menu"></a>
### 10 · Return to the HTTP head and open batch actions

![10 · Return to the HTTP head and open batch actions](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-10-http-menu.png)

<a id="walkthrough-breakpoints-mixed-queues-11-continue-http"></a>
### 11 · Continue only HTTP without applying the draft

![11 · Continue only HTTP without applying the draft](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-11-continue-http.png)

<a id="walkthrough-breakpoints-mixed-queues-12-ws-still-pending"></a>
### 12 · Return to WS and confirm its waits remain

![12 · Return to WS and confirm its waits remain](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-12-ws-still-pending.png)

<a id="walkthrough-breakpoints-mixed-queues-13-drop-ws"></a>
### 13 · Drop only the current WS queue

![13 · Drop only the current WS queue](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-13-drop-ws.png)

<a id="walkthrough-breakpoints-mixed-queues-14-exit-http"></a>
### 14 · Hold a new HTTP request for the exit scenario

![14 · Hold a new HTTP request for the exit scenario](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-14-exit-http.png)

<a id="walkthrough-breakpoints-mixed-queues-15-exit-ws"></a>
### 15 · Retain a WS wait at the same time

![15 · Retain a WS wait at the same time](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-15-exit-ws.png)

<a id="walkthrough-breakpoints-mixed-queues-16-before-close"></a>
### 16 · Record both waits before the actual Close

![16 · Record both waits before the actual Close](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-16-before-close.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:breakpoints-mixed-queues:end -->
