# Composer: build and send requests

> Draft for `v0.1.1-alpha.1`; recorded operations have corresponding real images, with authenticated round trips and other unrecorded branches marked individually. Existing workflows or partial imagery do not complete this chapter or item9.

[Guide directory](../README.en.md) · [Capture](capture.md)

<a id="walkthrough"></a>
## Recorded walkthrough: send a request and add fields

These images and video show the published `v0.1.1-alpha.1` macOS x64 App, retaining its Chinese UI. Each image belongs to one step below and opens at full resolution. The credential-free local demo service used port `54275`; it is not a public endpoint. Substitute your own authorized test service's port.

| Example | Actual recorded value |
| --- | --- |
| Method and URL | `GET http://127.0.0.1:54275/guide/composer` |
| Query name / value | `guide` / `composer-demo` |
| Header name / value | `x-interceptor-guide` / `composer-demo` |
| Response | `{"request":"Guide request","message":"Hello Interceptor","status":"ready"}` |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/composer/composer.mp4" poster="../media/v0.1.1-alpha.1/composer/composer-04-send.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer/composer.vtt" default>
</video>

### C01 · Open Composer

Select Composer in the sidebar. Collection and an empty workspace appear. [Video 00:00](../media/v0.1.1-alpha.1/composer/composer.mp4#t=0.367)

![C01: the actual Composer workspace before creating a request](../media/v0.1.1-alpha.1/composer/composer-01-open.png)

### C02 · Create a request

Click the Collection plus button. This version names the new entry `Untitled`; it is not an already-sent history item. [Video 00:03](../media/v0.1.1-alpha.1/composer/composer.mp4#t=3.248)

![C02: a new Untitled entry and its request editor](../media/v0.1.1-alpha.1/composer/composer-02-new.png)

### C03 · Enter the URL

Enter `http://127.0.0.1:54275/guide/composer`. Keep `GET` and Auto; check scheme/port without adding credentials. [Video 00:06](../media/v0.1.1-alpha.1/composer/composer.mp4#t=6.148)

![C03: GET and the URL match the recorded example](../media/v0.1.1-alpha.1/composer/composer-03-url.png)

### C04 · Send

Wait for `200` and JSON containing `message: Hello Interceptor`. The result belongs to Composer and does not need a new Capture row. [Video 00:08](../media/v0.1.1-alpha.1/composer/composer.mp4#t=8.954)

![C04: actual response with Guide request, Hello Interceptor and ready](../media/v0.1.1-alpha.1/composer/composer-04-send.png)

### C05 · Read response headers

Select Headers in the lower response area. This service returned `content-type: application/json; charset=utf-8` and `x-interceptor-guide: composer-demo`. Additional server headers may differ in your environment. [Video 00:11](../media/v0.1.1-alpha.1/composer/composer.mp4#t=11.999)

![C05: response headers show the recorded JSON type and composer-demo value](../media/v0.1.1-alpha.1/composer/composer-05-headers.png)

### C06 · Add Query

Open the request Query tab, enter `guide` / `composer-demo` in the new row and confirm it. Its count becomes `1`. [Video 00:14](../media/v0.1.1-alpha.1/composer/composer.mp4#t=14.848)

![C06: enabled Query row guide=composer-demo](../media/v0.1.1-alpha.1/composer/composer-06-query.png)

### C07 · Add a request header

Open request Headers, enter `x-interceptor-guide` / `composer-demo` and confirm. This is an outgoing header, unlike the response headers inspected earlier. [Video 00:17](../media/v0.1.1-alpha.1/composer/composer.mp4#t=17.799)

![C07: request header name and value match the text](../media/v0.1.1-alpha.1/composer/composer-07-header.png)

### C08 · Inspect Auth

Open Auth and keep None for this example. Never put real credentials into this demo service. [Video 00:20](../media/v0.1.1-alpha.1/composer/composer.mp4#t=20.748)

![C08: no Authorization is used](../media/v0.1.1-alpha.1/composer/composer-08-auth.png)

### C09 · Inspect Recent sends

Click the clock beside the URL and review the previous `GET`, address and `200`. This is not a complete persistent request snapshot. [Video 00:23](../media/v0.1.1-alpha.1/composer/composer.mp4#t=23.599)

![C09: Recent sends identifies the actual request from this walkthrough](../media/v0.1.1-alpha.1/composer/composer-09-history.png)

### C10 · Return to the body

Dismiss history and select the response Body tab. It is still C04's response: editing Query/Headers did not resend anything automatically. [Video 00:26](../media/v0.1.1-alpha.1/composer/composer.mp4#t=26.460)

![C10: original JSON response after editing unsent fields](../media/v0.1.1-alpha.1/composer/composer-10-body.png)

[Return to the video](#walkthrough-video). The complete reference follows; advanced branches without step images remain pending, not accepted.

<a id="先区分-composer-与-capture"></a>
## Composer is not Capture

Composer actively constructs requests and connects directly to the destination:

- Requests do not automatically appear in Capture.
- Recording does not affect them.
- Proxy Rules and Breakpoints do not apply.
- System proxy ownership is not required, but the destination must still be reachable.

There is currently no delivered one-click “copy from Capture to Composer” integration. Do not look for a future feature as if it were an existing button.

<a id="发送第一个请求"></a>
## Send your first request

**Prerequisites:** an HTTP/HTTPS test endpoint you are authorized to use. These steps reuse this chapter's first recording. `54275` is that recording's dynamic port, not a fixed App port or public service; substitute your own test service.

**Steps**

1. Open Composer and locate the Collection create control.

   ![Composer before creating this request](../media/v0.1.1-alpha.1/composer/composer-01-open.png)

2. Click plus. The new request is initially named `Untitled`.

   ![New Untitled entry and request editor](../media/v0.1.1-alpha.1/composer/composer-02-new.png)

3. Keep `GET`, enter `http://127.0.0.1:54275/guide/composer` and leave protocol on Auto. Do not force HTTP/2 against an unsupported destination.

   ![Actual GET URL and Auto setting before sending](../media/v0.1.1-alpha.1/composer/composer-03-url.png)

4. Click Send. This service returned `200` and `{"request":"Guide request","message":"Hello Interceptor","status":"ready"}`; other destinations determine their own results.

   ![Actual 200 response and JSON body](../media/v0.1.1-alpha.1/composer/composer-04-send.png)

5. Open response Headers and check `content-type: application/json; charset=utf-8` and `x-interceptor-guide: composer-demo`.

   ![Response headers, not the request header editor](../media/v0.1.1-alpha.1/composer/composer-05-headers.png)

**Expected result:** the response appears in Composer, independently of Capture. The destination determines status and content.

**Notes**

- `4xx` and `5xx` are HTTP responses, not proof that sending never happened.
- Diagnose URL, DNS, connection or TLS errors from their actual message; toggling Recording does not fix them.
- This version displays a recognized URL scheme separately. When `http://` is already shown on the left, edit only the host, port and path in the input. Pasting that prefix again produces `http://http://...`; check the complete displayed address before sending.
- Do not weaken certificate validation merely to follow the example. Resolve managed-network restrictions through the responsible administrator.

<a id="编辑-query-与-headers"></a>
## Edit Query and Headers

**Purpose:** compare request parameters and headers without changing the server.

**Steps**

This section uses the separate `composer-fields` recording, target `http://127.0.0.1:62733/guide/composer-fields`; `62733` is its dynamic port. It actually sends with enabled fields and sends again after disabling them. Do not reuse C04's old response or substitute the earlier `composer-demo` values.

1. Create this field-experiment request using the running test service above.

   ![Actually creating this field-experiment request](../media/v0.1.1-alpha.1/composer-fields/composer-fields-01-new.png)

2. Add and enable Header `x-guide-toggle` / `enabled`.

   ![Actually enabled x-guide-toggle=enabled](../media/v0.1.1-alpha.1/composer-fields/composer-fields-02-header.png)

3. Add and enable Query `guide` / `enabled`.

   ![Actually enabled guide=enabled](../media/v0.1.1-alpha.1/composer-fields/composer-fields-03-query.png)

4. Send and inspect both fields actually received by the test service, not just filled editor rows.

   ![Actual Send result with enabled fields](../media/v0.1.1-alpha.1/composer-fields/composer-fields-04-send-enabled.png)

5. Disable the Query row, retaining it rather than deleting it.

   ![Actually disabling the Query row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-05-query-off.png)

6. Disable the Header row too.

   ![Actually disabling the Header row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-06-header-off.png)

7. Send again and verify `guide` and `x-guide-toggle` are omitted. Values retained in the table do not mean they participated.

   ![Actual resend after disabling confirms both fields were omitted](../media/v0.1.1-alpha.1/composer-fields/composer-fields-07-send-disabled.png)

8. Delete the Header row when no longer needed.

   ![Actually deleting the Header row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-08-header-delete.png)

9. Delete the Query row too; deletion and temporary disabling are separate actions.

   ![Actually deleting the Query row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-09-query-delete.png)

10. Duplicate Query uses the separate `composer-replay`. Open Composer; its service port `65227` is a dynamic recording value, not the earlier `62733`.

    ![Actually opening Composer for the duplicate-query example](../media/v0.1.1-alpha.1/composer-replay/composer-replay-01-open.png)

11. Create this Query/replay request.

    ![Actually creating the Query replay request](../media/v0.1.1-alpha.1/composer-replay/composer-replay-02-new.png)

12. Enter `http://127.0.0.1:65227/guide/composer-replay/query?guide=url`, already containing `guide=url`.

    ![Actual URL already containing guide=url](../media/v0.1.1-alpha.1/composer-replay/composer-replay-03-url.png)

13. Select `POST`.

    ![Actually selecting POST](../media/v0.1.1-alpha.1/composer-replay/composer-replay-04-post.png)

14. Open Query and inspect the still-empty table. URL parameters have not become table rows.

    ![Empty table despite the existing URL query](../media/v0.1.1-alpha.1/composer-replay/composer-replay-05-query.png)

15. Enter name `guide` for a new row.

    ![Actually entering the first guide name](../media/v0.1.1-alpha.1/composer-replay/composer-replay-06-query-name.png)

16. Enter value `table`.

    ![Actually entering first value table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-07-query-value.png)

17. Confirm adding `guide=table`.

    ![Actually adding the first Query row](../media/v0.1.1-alpha.1/composer-replay/composer-replay-08-add-query.png)

18. Add another `guide` without changing the URL value.

    ![Actually entering the second guide name](../media/v0.1.1-alpha.1/composer-replay/composer-replay-09-duplicate-name.png)

19. Enter second value `again`.

    ![Actually entering second value again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-10-duplicate-value.png)

20. Confirm the second row, retaining enabled `table` and `again` entries.

    ![Actually adding a second same-name Query row](../media/v0.1.1-alpha.1/composer-replay/composer-replay-11-add-duplicate.png)

21. Send and inspect `http://127.0.0.1:65227/guide/composer-replay/query?guide=url&guide=table&guide=again`. The three values are `url`, `table`, `again` in order: appended, not replaced or deduplicated.

    ![Actual Send verifies three guide values](../media/v0.1.1-alpha.1/composer-replay/composer-replay-12-send-query.png)

**Expected result:** enabled fields participate in the current request. Table Query values append after existing URL parameters, including duplicate names. Disabling a row omits that row, not an existing parameter in the URL.

**Notes:** Query is not Body, and changing Content-Type does not automatically convert every input. Headers, queries and URLs may contain secrets; inspect them before recording or sharing. Never send real credentials to the public example.

<a id="选择请求正文"></a>
## Select a request body

**Steps**

The first part comes from the [body and Collection recording](#walkthrough-composer-editing), not the earlier GET. `64036` is its dynamic port, with separate JSON, Text and Form endpoints. Format/None uses `composer-fields`; the final intermediate Text inputs use `composer-replay`. Each part explicitly uses its own address and values.

**Released UI limitation:** alpha.1's Chinese Text control actually displays `composer.text`, a missing translation. Text in this chapter names the body type; the original images and App language remain unchanged. Text does not automatically add `Content-Type`. The earlier `text/plain` example sets a Header explicitly; the replay example leaves that Header unset.

1. Create a request and set the URL to `http://127.0.0.1:64036/guide/composer/edit/json`.

   ![JSON endpoint before sending](../media/v0.1.1-alpha.1/composer-editing/composer-editing-03-url.png)

2. Change the method to `POST`.

   ![POST selected for the JSON example](../media/v0.1.1-alpha.1/composer-editing/composer-editing-04-method.png)

3. Set `Content-Type: application/json` in Headers.

   ![JSON Content-Type request row](../media/v0.1.1-alpha.1/composer-editing/composer-editing-05-json-header.png)

4. Open Body.

   ![Request Body editor opened](../media/v0.1.1-alpha.1/composer-editing/composer-editing-06-body.png)

5. Select JSON.

   ![JSON body mode selected](../media/v0.1.1-alpha.1/composer-editing/composer-editing-07-json.png)

6. Enter `{"message":"Hello JSON","orderId":"guide-001"}`.

   ![Hello JSON and guide-001 before sending](../media/v0.1.1-alpha.1/composer-editing/composer-editing-08-json-input.png)

7. Send and inspect the complete returned JSON. This is the Hello JSON example; an actual Format action appears in the separate example later in this section.

   ![Actual response after sending JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-09-json-send.png)

8. To try the text endpoint, select Text; the released Chinese control is labeled `composer.text`.

   ![Text selected instead of JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-10-text.png)

9. Explicitly set `Content-Type` to `text/plain` for this example; do not rely on Text adding it.

    ![Text request Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11-text-header.png)

10. Change the URL to `http://127.0.0.1:64036/guide/composer/edit/text`.

    ![Separate text endpoint](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11a-text-url.png)

11. Enter `Hello text`, send and check this explicitly configured `text/plain` example. This image shows its result. Actual intermediate inputs from the separate `composer-replay` follow below; do not conflate the two addresses.

    ![Checking Hello text after sending](../media/v0.1.1-alpha.1/composer-editing/composer-editing-12-text-send.png)

12. To try the form endpoint, select Form.

    ![Form body mode selected](../media/v0.1.1-alpha.1/composer-editing/composer-editing-13-form.png)

13. Add `name` / `Interceptor`.

    ![First form row name=Interceptor](../media/v0.1.1-alpha.1/composer-editing/composer-editing-14-form-name.png)

14. Add `ready` / `true`.

    ![Second form row ready=true](../media/v0.1.1-alpha.1/composer-editing/composer-editing-15-form-ready.png)

15. Set `Content-Type: application/x-www-form-urlencoded`.

    ![Form Content-Type request row](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16-form-header.png)

16. Change the URL to `http://127.0.0.1:64036/guide/composer/edit/form`.

    ![Separate form endpoint](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16a-form-url.png)

17. Send and inspect the actual form bytes `name=Interceptor&ready=true`.

    ![Actual form bytes after sending](../media/v0.1.1-alpha.1/composer-editing/composer-editing-17-form-send.png)

18. Format uses the preceding section's `composer-fields` request after Header/Query deletion, URL `http://127.0.0.1:62733/guide/composer-fields`, not the Form endpoint above. Choose `POST` and JSON, entering `{"message":"format-demo","count":2}`.

    ![Actual POST and format-demo JSON input](../media/v0.1.1-alpha.1/composer-fields/composer-fields-10-json.png)

19. Click the request JSON Format action and inspect its result.

    ![Request JSON after actually clicking Format](../media/v0.1.1-alpha.1/composer-fields/composer-fields-11-format.png)

20. Send and inspect the actually transmitted formatted JSON, still `message: format-demo`, `count: 2`.

    ![Actual Send result after formatting](../media/v0.1.1-alpha.1/composer-fields/composer-fields-12-send-json.png)

21. Change Body to None, not Auth None.

    ![Actually selecting Body None](../media/v0.1.1-alpha.1/composer-fields/composer-fields-13-none.png)

22. Send again and verify an actually empty body, not an old JSON response left on screen.

    ![Actually sending an empty body after selecting None](../media/v0.1.1-alpha.1/composer-fields/composer-fields-14-send-none.png)

23. The independent Text-input example continues the preceding `composer-replay` duplicate-query request, retaining `guide=table` and `guide=again`. Change the address to `http://127.0.0.1:65227/guide/composer-replay/text?guide=text-url`; when `http://` is already shown separately, edit only the following host, path and query.

    ![Actually changing to the separate Text endpoint](../media/v0.1.1-alpha.1/composer-replay/composer-replay-13-text-url.png)

24. Change the method to `PUT`.

    ![Actually selecting PUT](../media/v0.1.1-alpha.1/composer-replay/composer-replay-14-put.png)

25. Open request Body.

    ![Actually opening this request Body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-15-body.png)

26. Select the Text control actually labeled `composer.text`, initially without input.

    ![Unchanged released composer.text label and pre-input state](../media/v0.1.1-alpha.1/composer-replay/composer-replay-16-text-mode.png)

27. Enter `Hello` first.

    ![Actual intermediate Text input Hello](../media/v0.1.1-alpha.1/composer-replay/composer-replay-17-text-partial.png)

28. Continue to `Hello text`.

    ![Actual complete Hello text before sending](../media/v0.1.1-alpha.1/composer-replay/composer-replay-18-text-complete.png)

29. Send and inspect actual body `Hello text` and URL `http://127.0.0.1:65227/guide/composer-replay/text?guide=text-url&guide=table&guide=again`. Request `Content-Type` is unset and Text does not add it; the response's Content-Type is not the outgoing request Header.

    ![Actual PUT result with Text bytes and the composed URL](../media/v0.1.1-alpha.1/composer-replay/composer-replay-19-send-text.png)

| Type | Meaning |
| --- | --- |
| None | No request body |
| JSON | Editable JSON text, with Format |
| Text | Plain text, without JSON formatting or an automatically added `Content-Type`; Chinese alpha.1 labels it `composer.text` |
| Form | URL-encoded key/value fields, not multipart file upload |

**Expected result:** the current body is sent; changing editor tabs does not discard fields.

**Notes:** JSON mode is not server-side schema validation. Header and body are separate inputs. Current body input is a string interface; do not assume arbitrary binary or `multipart/form-data` file uploads.

<a id="使用认证"></a>
## Configure authentication

**Steps**

1. Open Auth and choose None, Bearer Token or Basic as required by your test endpoint.

   This `composer-editing` demonstration only inspects controls, without credentials. First open Auth:

   ![Auth opened](../media/v0.1.1-alpha.1/composer-editing/composer-editing-18-auth.png)

   Select `Bearer` and locate the empty Token field:

   ![Empty Token field, not a successful authentication result](../media/v0.1.1-alpha.1/composer-editing/composer-editing-19-bearer.png)

   Then select Basic and inspect its empty username and password fields:

   ![Empty Basic fields](../media/v0.1.1-alpha.1/composer-editing/composer-editing-20-basic.png)

2. If the endpoint needs authentication, enter only test credentials intended for your own service.

   **Image pending / blocked:** no credentials were entered. A controlled authentication setup is missing; empty fields are not evidence of success.

3. Recheck the URL, send and inspect the response.

   **Image pending / blocked:** no authenticated round trip was recorded. An unauthenticated Send is not a substitute.

4. Restore None after inspecting the controls.

   ![Restoring Auth None after this demonstration](../media/v0.1.1-alpha.1/composer-editing/composer-editing-21-none.png)

5. Before recording or sharing, remove real credentials and check Headers for other authorization fields.

   **Image pending:** removing credentials and checking residual headers was not recorded. Choosing None does not remove all custom headers.

**Expected result:** authentication is constructed from the selected Auth settings at send time.

**Notes**

- The generated authorization header need not appear as a saved editable Headers row.
- Basic is not transport encryption. Use trusted HTTPS for real credentials.
- Exported collections may contain authentication, headers, queries and bodies. Masked UI/Tool results do not make the export automatically anonymous.

<a id="查看响应"></a>
## Inspect the response

**Steps**

This uses the separate `composer-inspection`, not C04 or Capture viewer images. Its response endpoint is `http://127.0.0.1:62704/guide/composer-inspection/response`; `62704` is this recording's dynamic port. Use your own controlled service. The second part explicitly switches to that service's CSS endpoint for response Format.

1. Open Composer.

   ![Actually opening Composer for response inspection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-01-open.png)

2. Create a response-inspection request.

   ![Actually creating the inspection request](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-02-new.png)

3. Enter `http://127.0.0.1:62704/guide/composer-inspection/response`.

   ![Actual response-inspection URL](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-03-url.png)

4. Enter request Header name `x-guide-request`.

   ![Entering the actual request Header name first](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-04-header-name.png)

5. Enter value `inspection-demo`.

   ![Actual request Header value inspection-demo](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-05-header-value.png)

6. Confirm adding that Header row.

   ![Actually added request Header](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-06-add-header.png)

7. Send and inspect the actual JSON: `{"message":"Hello response","order":{"id":"guide-001","items":[{"sku":"demo-001","quantity":2}]},"ok":true}`.

   ![Actual response JSON after this Send](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-07-send.png)

8. Open response Headers. Distinguish request `x-guide-request` from response `x-guide-response`; both have value `inspection-demo` here.

   ![Actual response Headers and separate request group](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-08-headers.png)

9. Collapse Response Headers.

   ![Actually collapsing Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-09-response-collapse.png)

10. Collapse Request Headers too.

    ![Actually collapsing Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-10-request-collapse.png)

11. Expand Response Headers independently.

    ![Actually expanding Response Headers again](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-11-response-expand.png)

12. Expand Request Headers and inspect the independent groups.

    ![Actually expanding Request Headers again](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-12-request-expand.png)

13. Open Cookies. The response includes `guide_session=inspection-demo; Path=/; HttpOnly` and `guide_theme=light; Path=/`. This does not demonstrate automatic Cookie storage or resending.

    ![Two actual public demonstration response Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-13-cookies.png)

14. Collapse Cookies.

    ![Actually collapsing Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-14-cookies-collapse.png)

15. Expand Cookies again.

    ![Actually expanding Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-15-cookies-expand.png)

16. Open Timing and inspect this HTTP request's timings and Connection information. Use actual durations, not the recording's numbers as a performance guarantee.

    ![Actual Timing and Connection information](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-16-timing.png)

17. Collapse Timing.

    ![Actually collapsing Timing](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-17-timing-collapse.png)

18. Collapse Connection too.

    ![Actually collapsing Connection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-18-connection-collapse.png)

19. Expand Timing.

    ![Actually expanding Timing](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-19-timing-expand.png)

20. Expand Connection.

    ![Actually expanding Connection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-20-connection-expand.png)

21. Return to response Body, still inspecting step 7's JSON.

    ![Actually returning to the same response Body](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-21-body.png)

22. Select Tree.

    ![Actual JSON Tree inside Composer](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-22-tree.png)

23. Collapse the JSON root.

    ![Actually collapsing the JSON root](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-23-tree-collapse.png)

24. Expand the root again.

    ![Actually expanding the JSON root again](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-24-tree-expand.png)

25. Open the `message` field's context menu.

    ![Actual message-field context menu](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-25-tree-menu.png)

26. Copy that field's value and check `Hello response`, not the entire JSON document.

    ![Actual checkpoint for copying the message value](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-26-tree-copy-value.png)

27. Switch to Raw.

    ![Actual Raw source in Composer](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-27-raw.png)

28. Use Raw Copy and check this JSON source, not the previously copied single `message` value.

    ![Actually copying the Raw source](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-28-copy-raw.png)

29. Select Hex to inspect bytes.

    ![Actual Hex byte view in Composer](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-29-hex.png)

30. Use Hex Copy and check against the original bytes, rather than reusing another mode's copy result.

    ![Actual Hex copy and original-byte check](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-30-copy-hex.png)

31. Open fullscreen for the current response Hex view.

    ![Actually opening Composer response Hex fullscreen](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-31-fullscreen.png)

32. Exit body fullscreen and return to the same request.

    ![Actually exiting Composer body fullscreen](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-32-exit-fullscreen.png)

33. Drag the Collection divider wider and inspect the retained request selection. This resizes the pane, not Collection node order.

    ![Actually widening the Collection pane](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-33-collection-drag.png)

34. Drag the request/response divider upward to increase response height.

    ![Actually increasing response height by dragging](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-34-response-drag.png)

35. For Format, switch to `http://127.0.0.1:62704/guide/composer-inspection/format`. This is a separate CSS response, not request-JSON formatting.

    ![Actually entering the CSS response endpoint](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-35-format-url.png)

36. Send and receive complete CSS: `.guide{color:teal}` followed by `1048576` ASCII spaces, totaling `1048594` bytes. It exceeds the `1 MiB` automatic-format threshold but remains within the `2 MiB` text-preview limit.

    ![Actually receiving CSS that needs manual Format](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-36-css-send.png)

37. Copy before formatting and check the original CSS and trailing spaces. The short visible rule does not represent the full response size.

    ![Actually copying CSS before Format](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-37-css-copy-before.png)

38. Click Format in the response viewer.

    ![Actually formatting the CSS response manually](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-38-format.png)

39. Copy again and check the actual formatted result, retaining `.guide` and `color: teal`. Copy uses the current viewer text; its whitespace bytes need not equal the unformatted source.

    ![Actually copying and checking formatted CSS](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-39-css-copy-after.png)

**Expected result:** the response belongs to its corresponding Send. Only explicit Sends create new requests; collapsing, mode changes, Copy, Fullscreen, Format and divider dragging do not resend.

**Notes**

- Composer shares Capture's body viewer. A `2 MiB` text preview is not the total response-size limit.
- Complete bodies up to `1 MiB` can format automatically; `1–2 MiB` requires Format. Truncated/incomplete previews are not formatted.
- Formatting failure preserves source text. Copy reflects the available view, not necessarily a complete large response file.
- Resizing should not change request or collection selection.
- **Image pending:** other MIME-specific previews, formatting failures, disabled formatting for truncated/incomplete bodies, and real wheel/keyboard boundary scrolling are not covered by this JSON/CSS example and two divider drags.

<a id="管理-collection"></a>
## Manage a Collection

**Purpose:** retain reusable requests rather than rebuilding them for every session.

**Steps**

1. After the form example, use its entry menu to rename the request `Guide form request`. Its URL and fields belong to `composer-editing`, not the earlier GET.

   ![Actual request name Guide form request](../media/v0.1.1-alpha.1/composer-editing/composer-editing-22-rename.png)

2. Create `Guide collection`.

   ![New Guide collection folder](../media/v0.1.1-alpha.1/composer-editing/composer-editing-23-folder.png)

3. Move `Guide form request` into that folder.

   ![Request moved into Guide collection](../media/v0.1.1-alpha.1/composer-editing/composer-editing-24-move.png)

4. Start the separate folder-management example by creating `Guide level 1` at the root. This is not a rename of the previous `Guide collection`.

   ![New Guide level 1 root folder](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-1.png)

5. Use its folder menu to create the child `Guide level 2`.

   ![Guide level 2 inside Guide level 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-2.png)

6. Use the second-level folder's menu to create `Guide level 3`.

   ![The actual three-level folder structure](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-3.png)

7. Open the `Guide level 3` menu. Creating another folder is disabled, while creating a request is still available. Do not try to bypass the depth limit by dragging.

   ![Third-level folder creation is disabled while request creation remains available](../media/v0.1.1-alpha.1/composer-collection/composer-collection-03-depth-limit.png)

8. Create `Guide request 1` inside that folder and enter `http://127.0.0.1:54811/guide/collection/1`. Port `54811` belongs to this recording; substitute your own test service. This exercise edits without clicking Send.

   ![Guide request 1 created in the third-level folder with its actual URL](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-1.png)

9. Create `Guide request 2` in the same folder, with URL `http://127.0.0.1:54811/guide/collection/2`.

   ![Second request with the separate collection/2 address](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-2.png)

10. Select `Guide request 1` again and confirm `/guide/collection/1`, not the second request's address.

    ![Selecting the first Collection request restores its own URL](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-1.png)

11. Return to `Guide request 2` and confirm `/guide/collection/2`. This is Collection-node selection, not Recent sends.

    ![Second request retains its separate fields](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-2.png)

12. Rename `Guide level 3` to `Guide saved requests` through its folder menu.

    ![Folder rename preserves its existing requests](../media/v0.1.1-alpha.1/composer-collection/composer-collection-06-rename-folder.png)

13. Drag `Guide request 2` before `Guide request 1` and check sibling order. Export anything you need before deletion; this recording saves `guide-collection-tree.json` using the next section's file controls.

    ![Second request moved before the first](../media/v0.1.1-alpha.1/composer-collection/composer-collection-07-reorder.png)

14. Operate only on this exercise's new nodes: delete `Guide request 2` through its menu and confirm the first request remains.

    ![Guide request 1 remains after deleting Guide request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-11-delete-request.png)

15. Delete the owned `Guide saved requests` folder and its remaining demo request. The two parent folders are not deleted with it.

    ![Actual tree after deleting the third-level folder and its demo request](../media/v0.1.1-alpha.1/composer-collection/composer-collection-12-delete-folder.png)

16. Wait for saving before quitting; after restart, verify the collection you intended to retain.

    This reuses Workspace's independent two-generation recording: save `Guide retained request`, URL `http://127.0.0.1:63009/guide/restart/request`, then actually Close/restart. `63009` is that recording's dynamic port, not a rename of `Guide form request` or `Guide request 1`.

    ![Request name actually saved before Workspace closes](../media/v0.1.1-alpha.1/workspace-close/workspace-close-03-name.png)

    ![Image before actual Close, not the click](../media/v0.1.1-alpha.1/workspace-close/workspace-close-06-before-close.png)

    ![Collection request and URL retained after the actual restart](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-01-collection.png)

    See the full [Workspace sequence](workspace.md#saved-data). **Image pending:** this verifies that request's name/URL. The folder operations above are now recorded, but deep-folder and every-field combinations across restart are not separately verified.

**Expected result:** collection edits persist automatically. There is no separate Save button or unsaved-draft workflow.

**Notes**

- Folders are limited to three levels. A third-level folder can contain requests but no deeper subfolder.
- Folder selection chooses where to create a new item; it does not close the current document.
- Editing or importing does not Send.
- Handle a reported save failure. Visible fields alone do not prove persistence.

<a id="使用-recent-sends"></a>
## Use Recent sends

**Steps**

1. After the first GET, open Recent sends beside the URL and inspect `GET`, `http://127.0.0.1:54275/guide/composer`, `200` and its relative time.

   ![Recent sends showing this recording's actual GET](../media/v0.1.1-alpha.1/composer/composer-09-history.png)

2. Actual history selection uses the separate `composer-fields` service at `http://127.0.0.1:62733/guide/composer-fields`. After the field deletion and JSON/None sends above, select an earlier record and inspect its actual method and full URL. The first example's `54275` list image is not this selection.

   ![Actually selecting an earlier Recent send in this recording](../media/v0.1.1-alpha.1/composer-fields/composer-fields-15-history.png)

3. Check that only method/URL were restored: deleted `x-guide-toggle` Header and `guide` Query table rows do not return, and the current Body is not overwritten by an old JSON snapshot. This refers to table rows, not the absence of previously composed queries in the historical URL. Check Auth against the current request without assuming credentials were restored.

   ![Actually checking that deleted fields and old body were not restored](../media/v0.1.1-alpha.1/composer-fields/composer-fields-16-check-restored.png)

4. Actual resending after selection uses `composer-replay`, continuing the earlier `PUT` / `Hello text` with recording-only port `65227`. Return to Query, still containing `table` and `again`.

   ![Actually returning to replay's current Query table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-20-query-again.png)

5. Change the first value from `table` to `current`, retaining second value `again`.

   ![Actual current Query values current and again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-21-query-current.png)

6. Return to the current Text body; the Chinese label remains the released `composer.text` translation defect.

   ![Actually returning to the current Text body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-22-body-again.png)

7. Change the body to `Hello replay`, without sending yet.

   ![Actual Hello replay input before history selection](../media/v0.1.1-alpha.1/composer-replay/composer-replay-23-body-current.png)

8. Open Recent sends.

   ![Actually opening this recording's history menu](../media/v0.1.1-alpha.1/composer-replay/composer-replay-24-history.png)

9. Select the old POST. It restores `POST` and the previously composed `http://127.0.0.1:65227/guide/composer-replay/query?guide=url&guide=table&guide=again`, not the initial input URL containing only `guide=url`.

   ![Actually restoring the old POST and composed URL](../media/v0.1.1-alpha.1/composer-replay/composer-replay-25-restore-old.png)

10. Inspect current Query rows: still `current` and `again`, not restored to historical `table` and `again`.

    ![Current Query rows actually retained after history selection](../media/v0.1.1-alpha.1/composer-replay/composer-replay-26-current-query.png)

11. Send again. Current rows append to the already-composed historical URL, producing `http://127.0.0.1:65227/guide/composer-replay/query?guide=url&guide=table&guide=again&guide=current&guide=again`. The five `guide` values are `url,table,again,current,again` in order; the body remains `Hello replay`. This is not automatic deduplication or an unchanged replay of the old request.

    ![Actual history resend with five Query values and the current body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-27-resend.png)

12. Return to the Text editor and confirm `Hello replay` remains after sending.

    ![Actual Hello replay retained after resending](../media/v0.1.1-alpha.1/composer-replay/composer-replay-28-confirm-body.png)

**Expected result:** recent methods and composed URLs are reusable, but this is neither a complete snapshot, persistent history nor unchanged replay. Send still uses the current Body and appends enabled current Query rows again.

**Notes:** Recent sends is separate from Collection and lives in memory. It does not guarantee restoration of previous bodies/credentials or retention across restarts.

Before sending, inspect both the complete restored URL and the current Query table. Unwanted duplicates require an explicit input change. This clip does not clean up duplicates and resend; do not rewrite the actual five-value result as already deduplicated.

<a id="导出和导入-collection"></a>
## Export and import a Collection

**Prerequisites:** create your own example using product Export first; do not treat an unknown file as a safe tutorial input.

**Steps**

1. Check the collection for real credentials and personal data. This example is `Guide collection` / `Guide form request`, with no credentials entered.

   **Image pending:** the field-by-field privacy review has no separate image. A later file image does not establish that arbitrary collections are anonymous.

2. Use Export collection and save `guide-collection.json` in the real native save dialog.

   ![Actual Collection Export native save panel](../media/v0.1.1-alpha.1/composer-editing/composer-editing-25-export.png)

3. Inspect the actual exported contents before importing.

   ![Checking the product-exported collection file](../media/v0.1.1-alpha.1/composer-editing/composer-editing-26-exported.png)

4. Open Import and select the same `guide-collection.json` in the native open dialog.

   ![Selecting the same exported collection file](../media/v0.1.1-alpha.1/composer-editing/composer-editing-27-import.png)

5. Review the proposed requests, folders and skipped items.

   ![Collection import preview before confirmation](../media/v0.1.1-alpha.1/composer-editing/composer-editing-28-preview.png)

6. Cancel if the result is not what you intended.

   The cancellation branch uses `guide-collection-tree.json` exported in the folder example above, not a renamed `guide-collection.json`. Select that file, enter preview and cancel: the original two requests remain without another appended tree. See the [cancellation recording](#walkthrough-composer-collection-10-cancel-preview).

   ![Cancelling Collection import leaves only the two original demo requests](../media/v0.1.1-alpha.1/composer-collection/composer-collection-10-cancel-preview.png)

7. If you choose Confirm instead of Cancel, inspect the items appended at the root. The image below is the original `guide-collection.json` confirmation branch, not the outcome of cancelling.

   ![Collection appended without replacing existing entries](../media/v0.1.1-alpha.1/composer-editing/composer-editing-29-confirm.png)

**Expected result:** cancelling either dialog leaves the collection unchanged. Confirmation appends new identities without overwriting requests or sending them.

**Notes:** repeated imports append again. File-level errors reject the file; node problems are listed individually. Collection JSON is not a Capture HAR or native archive.

<a id="从-agent-或-mcp-使用-composer"></a>
## Use Composer through Agent or MCP

**Purpose:** let AI send a specific test request or manage a saved collection.

1. Enable only the required Composer tools in [Tool permissions](tool-permissions.md).

   **Image pending:** the permissions recording did not individually enable Composer tools.

2. State the destination, method and allowed operations. Start in Ask.

   **Image pending:** no corresponding Composer request instruction and Ask-policy setup was recorded.

3. Review the destination/method before approving Send. Read the current collection before replacing it.

   **Image pending / blocked:** the Agent/MCP recordings do not include Composer send approval or a Collection read/update round trip.

4. Check the actual collection or response in Composer, not only the model's explanation.

   **Image pending:** there is no Composer UI result for those tool operations. A manual Send image is not a substitute.

**Expected result:** AI uses the same business operations and collection changes synchronize with the UI. Importing a collection does not Send.

**Notes:** `composer_probe_connection` performs a TLS handshake only; `composer_send_request` sends HTTP. Successful probing is not a successful API response. See the [Tool reference](tool-reference.md#composer).

Return to the [guide directory](../README.en.md).

<!-- recorded-walkthrough:composer-editing:start -->
<a id="walkthrough-composer-editing"></a>
## Recorded walkthrough: bodies, Auth controls and Collection files

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
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

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4" poster="../media/v0.1.1-alpha.1/composer-editing/composer-editing-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-editing/composer-editing.vtt" default>
</video>

<a id="walkthrough-composer-editing-01-open"></a>
### 01 · Open Composer

[Video 00:00](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=0.330) · [Back to the video](#walkthrough-composer-editing-video)

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-editing/composer-editing-01-open.png)

<a id="walkthrough-composer-editing-02-new"></a>
### 02 · Create the request

[Video 00:03](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=3.186) · [Back to the video](#walkthrough-composer-editing-video)

![02 · Create the request](../media/v0.1.1-alpha.1/composer-editing/composer-editing-02-new.png)

<a id="walkthrough-composer-editing-03-url"></a>
### 03 · Enter the demo URL

[Video 00:06](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=6.086) · [Back to the video](#walkthrough-composer-editing-video)

![03 · Enter the demo URL](../media/v0.1.1-alpha.1/composer-editing/composer-editing-03-url.png)

<a id="walkthrough-composer-editing-04-method"></a>
### 04 · Choose POST

[Video 00:08](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=8.939) · [Back to the video](#walkthrough-composer-editing-video)

![04 · Choose POST](../media/v0.1.1-alpha.1/composer-editing/composer-editing-04-method.png)

<a id="walkthrough-composer-editing-05-json-header"></a>
### 05 · Set the JSON Content-Type

[Video 00:11](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=11.889) · [Back to the video](#walkthrough-composer-editing-video)

![05 · Set the JSON Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-05-json-header.png)

<a id="walkthrough-composer-editing-06-body"></a>
### 06 · Open Body

[Video 00:14](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=14.837) · [Back to the video](#walkthrough-composer-editing-video)

![06 · Open Body](../media/v0.1.1-alpha.1/composer-editing/composer-editing-06-body.png)

<a id="walkthrough-composer-editing-07-json"></a>
### 07 · Choose JSON

[Video 00:17](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=17.688) · [Back to the video](#walkthrough-composer-editing-video)

![07 · Choose JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-07-json.png)

<a id="walkthrough-composer-editing-08-json-input"></a>
### 08 · Enter the JSON body

[Video 00:20](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=20.788) · [Back to the video](#walkthrough-composer-editing-video)

![08 · Enter the JSON body](../media/v0.1.1-alpha.1/composer-editing/composer-editing-08-json-input.png)

<a id="walkthrough-composer-editing-09-json-send"></a>
### 09 · Send and verify the complete JSON

[Video 00:23](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=23.742) · [Back to the video](#walkthrough-composer-editing-video)

![09 · Send and verify the complete JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-09-json-send.png)

<a id="walkthrough-composer-editing-10-text"></a>
### 10 · Choose Text

[Video 00:26](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=26.587) · [Back to the video](#walkthrough-composer-editing-video)

![10 · Choose Text](../media/v0.1.1-alpha.1/composer-editing/composer-editing-10-text.png)

<a id="walkthrough-composer-editing-11-text-header"></a>
### 11 · Set text/plain

[Video 00:29](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=29.535) · [Back to the video](#walkthrough-composer-editing-video)

![11 · Set text/plain](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11-text-header.png)

<a id="walkthrough-composer-editing-11a-text-url"></a>
### 12 · Use the separate text endpoint

[Video 00:32](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=32.387) · [Back to the video](#walkthrough-composer-editing-video)

![12 · Use the separate text endpoint](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11a-text-url.png)

<a id="walkthrough-composer-editing-12-text-send"></a>
### 13 · Send and verify text

[Video 00:35](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=35.186) · [Back to the video](#walkthrough-composer-editing-video)

![13 · Send and verify text](../media/v0.1.1-alpha.1/composer-editing/composer-editing-12-text-send.png)

<a id="walkthrough-composer-editing-13-form"></a>
### 14 · Choose Form

[Video 00:38](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=38.037) · [Back to the video](#walkthrough-composer-editing-video)

![14 · Choose Form](../media/v0.1.1-alpha.1/composer-editing/composer-editing-13-form.png)

<a id="walkthrough-composer-editing-14-form-name"></a>
### 15 · Add name=Interceptor

[Video 00:40](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=40.936) · [Back to the video](#walkthrough-composer-editing-video)

![15 · Add name=Interceptor](../media/v0.1.1-alpha.1/composer-editing/composer-editing-14-form-name.png)

<a id="walkthrough-composer-editing-15-form-ready"></a>
### 16 · Add ready=true

[Video 00:43](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=43.838) · [Back to the video](#walkthrough-composer-editing-video)

![16 · Add ready=true](../media/v0.1.1-alpha.1/composer-editing/composer-editing-15-form-ready.png)

<a id="walkthrough-composer-editing-16-form-header"></a>
### 17 · Set the form Content-Type

[Video 00:46](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=46.788) · [Back to the video](#walkthrough-composer-editing-video)

![17 · Set the form Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16-form-header.png)

<a id="walkthrough-composer-editing-16a-form-url"></a>
### 18 · Use the separate form endpoint

[Video 00:49](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=49.636) · [Back to the video](#walkthrough-composer-editing-video)

![18 · Use the separate form endpoint](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16a-form-url.png)

<a id="walkthrough-composer-editing-17-form-send"></a>
### 19 · Send and verify form bytes

[Video 00:52](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=52.437) · [Back to the video](#walkthrough-composer-editing-video)

![19 · Send and verify form bytes](../media/v0.1.1-alpha.1/composer-editing/composer-editing-17-form-send.png)

<a id="walkthrough-composer-editing-18-auth"></a>
### 20 · Open Auth

[Video 00:55](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=55.286) · [Back to the video](#walkthrough-composer-editing-video)

![20 · Open Auth](../media/v0.1.1-alpha.1/composer-editing/composer-editing-18-auth.png)

<a id="walkthrough-composer-editing-19-bearer"></a>
### 21 · Inspect Bearer input without a real key

[Video 00:58](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=58.092) · [Back to the video](#walkthrough-composer-editing-video)

![21 · Inspect Bearer input without a real key](../media/v0.1.1-alpha.1/composer-editing/composer-editing-19-bearer.png)

<a id="walkthrough-composer-editing-20-basic"></a>
### 22 · Inspect Basic inputs

[Video 01:00](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=60.944) · [Back to the video](#walkthrough-composer-editing-video)

![22 · Inspect Basic inputs](../media/v0.1.1-alpha.1/composer-editing/composer-editing-20-basic.png)

<a id="walkthrough-composer-editing-21-none"></a>
### 23 · Restore None

[Video 01:03](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=63.837) · [Back to the video](#walkthrough-composer-editing-video)

![23 · Restore None](../media/v0.1.1-alpha.1/composer-editing/composer-editing-21-none.png)

<a id="walkthrough-composer-editing-22-rename"></a>
### 24 · Rename the request

[Video 01:06](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=66.737) · [Back to the video](#walkthrough-composer-editing-video)

![24 · Rename the request](../media/v0.1.1-alpha.1/composer-editing/composer-editing-22-rename.png)

<a id="walkthrough-composer-editing-23-folder"></a>
### 25 · Create the collection folder

[Video 01:10](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=70.036) · [Back to the video](#walkthrough-composer-editing-video)

![25 · Create the collection folder](../media/v0.1.1-alpha.1/composer-editing/composer-editing-23-folder.png)

<a id="walkthrough-composer-editing-24-move"></a>
### 26 · Move the request into the folder

[Video 01:12](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=72.937) · [Back to the video](#walkthrough-composer-editing-video)

![26 · Move the request into the folder](../media/v0.1.1-alpha.1/composer-editing/composer-editing-24-move.png)

<a id="walkthrough-composer-editing-25-export"></a>
### 27 · Export the collection

[Video 01:35](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=95.507) · [Back to the video](#walkthrough-composer-editing-video)

![27 · Export the collection](../media/v0.1.1-alpha.1/composer-editing/composer-editing-25-export.png)

<a id="walkthrough-composer-editing-26-exported"></a>
### 28 · Verify the exported collection

[Video 01:40](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=100.377) · [Back to the video](#walkthrough-composer-editing-video)

![28 · Verify the exported collection](../media/v0.1.1-alpha.1/composer-editing/composer-editing-26-exported.png)

<a id="walkthrough-composer-editing-27-import"></a>
### 29 · Select the same exported file

[Video 01:54](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=114.933) · [Back to the video](#walkthrough-composer-editing-video)

![29 · Select the same exported file](../media/v0.1.1-alpha.1/composer-editing/composer-editing-27-import.png)

<a id="walkthrough-composer-editing-28-preview"></a>
### 30 · Review import preview

[Video 01:59](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=119.982) · [Back to the video](#walkthrough-composer-editing-video)

![30 · Review import preview](../media/v0.1.1-alpha.1/composer-editing/composer-editing-28-preview.png)

<a id="walkthrough-composer-editing-29-confirm"></a>
### 31 · Confirm append without overwrite

[Video 02:02](../media/v0.1.1-alpha.1/composer-editing/composer-editing.mp4#t=122.788) · [Back to the video](#walkthrough-composer-editing-video)

![31 · Confirm append without overwrite](../media/v0.1.1-alpha.1/composer-editing/composer-editing-29-confirm.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-editing:end -->

<!-- recorded-walkthrough:composer-collection:start -->
<a id="walkthrough-composer-collection"></a>
## Recorded walkthrough: folder depth, ordering, cancellation and deletion

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
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

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4" poster="../media/v0.1.1-alpha.1/composer-collection/composer-collection-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-collection/composer-collection.vtt" default>
</video>

<a id="walkthrough-composer-collection-01-open"></a>
### 01 · Open Composer

[Video 00:00](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=0.200) · [Back to the video](#walkthrough-composer-collection-video)

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-collection/composer-collection-01-open.png)

<a id="walkthrough-composer-collection-02-folder-1"></a>
### 02 · Create Guide level 1

[Video 00:03](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=3.215) · [Back to the video](#walkthrough-composer-collection-video)

![02 · Create Guide level 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-1.png)

<a id="walkthrough-composer-collection-02-folder-2"></a>
### 03 · Create Guide level 2

[Video 00:06](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=6.296) · [Back to the video](#walkthrough-composer-collection-video)

![03 · Create Guide level 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-2.png)

<a id="walkthrough-composer-collection-02-folder-3"></a>
### 04 · Create Guide level 3

[Video 00:09](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=9.812) · [Back to the video](#walkthrough-composer-collection-video)

![04 · Create Guide level 3](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-3.png)

<a id="walkthrough-composer-collection-03-depth-limit"></a>
### 05 · Inspect the third-level folder limit

[Video 00:13](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=13.393) · [Back to the video](#walkthrough-composer-collection-video)

![05 · Inspect the third-level folder limit](../media/v0.1.1-alpha.1/composer-collection/composer-collection-03-depth-limit.png)

<a id="walkthrough-composer-collection-04-request-1"></a>
### 06 · Create Guide request 1 in the folder

[Video 00:16](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=16.383) · [Back to the video](#walkthrough-composer-collection-video)

![06 · Create Guide request 1 in the folder](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-1.png)

<a id="walkthrough-composer-collection-04-request-2"></a>
### 07 · Create Guide request 2 in the folder

[Video 00:20](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=20.123) · [Back to the video](#walkthrough-composer-collection-video)

![07 · Create Guide request 2 in the folder](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-2.png)

<a id="walkthrough-composer-collection-05-switch-1"></a>
### 08 · Switch and verify request 1

[Video 00:24](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=24.295) · [Back to the video](#walkthrough-composer-collection-video)

![08 · Switch and verify request 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-1.png)

<a id="walkthrough-composer-collection-05-switch-2"></a>
### 09 · Switch and verify request 2

[Video 00:27](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=27.220) · [Back to the video](#walkthrough-composer-collection-video)

![09 · Switch and verify request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-2.png)

<a id="walkthrough-composer-collection-06-rename-folder"></a>
### 10 · Rename the folder Guide saved requests

[Video 00:30](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=30.223) · [Back to the video](#walkthrough-composer-collection-video)

![10 · Rename the folder Guide saved requests](../media/v0.1.1-alpha.1/composer-collection/composer-collection-06-rename-folder.png)

<a id="walkthrough-composer-collection-07-reorder"></a>
### 11 · Reorder sibling requests

[Video 00:33](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=33.656) · [Back to the video](#walkthrough-composer-collection-video)

![11 · Reorder sibling requests](../media/v0.1.1-alpha.1/composer-collection/composer-collection-07-reorder.png)

<a id="walkthrough-composer-collection-08-export"></a>
### 12 · Save the example collection file

[Video 00:53](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=53.445) · [Back to the video](#walkthrough-composer-collection-video)

![12 · Save the example collection file](../media/v0.1.1-alpha.1/composer-collection/composer-collection-08-export.png)

<a id="walkthrough-composer-collection-09-open-import"></a>
### 13 · Select the same exported file

[Video 01:09](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=69.361) · [Back to the video](#walkthrough-composer-collection-video)

![13 · Select the same exported file](../media/v0.1.1-alpha.1/composer-collection/composer-collection-09-open-import.png)

<a id="walkthrough-composer-collection-10-cancel-preview"></a>
### 14 · Cancel import without appending

[Video 01:14](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=74.343) · [Back to the video](#walkthrough-composer-collection-video)

![14 · Cancel import without appending](../media/v0.1.1-alpha.1/composer-collection/composer-collection-10-cancel-preview.png)

<a id="walkthrough-composer-collection-11-delete-request"></a>
### 15 · Delete this run’s request 2

[Video 01:17](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=77.555) · [Back to the video](#walkthrough-composer-collection-video)

![15 · Delete this run’s request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-11-delete-request.png)

<a id="walkthrough-composer-collection-12-delete-folder"></a>
### 16 · Delete the owned folder and remaining demo request

[Video 01:20](../media/v0.1.1-alpha.1/composer-collection/composer-collection.mp4#t=80.856) · [Back to the video](#walkthrough-composer-collection-video)

![16 · Delete the owned folder and remaining demo request](../media/v0.1.1-alpha.1/composer-collection/composer-collection-12-delete-folder.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-collection:end -->

<!-- recorded-walkthrough:composer-fields:start -->
<a id="walkthrough-composer-fields"></a>
## Recorded walkthrough: field toggles, resending and history restoration

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>origin</code> | <code>http://127.0.0.1:62733/guide/composer-fields</code> |
| <code>headerName</code> | <code>x-guide-toggle</code> |
| <code>headerValue</code> | <code>enabled</code> |
| <code>queryName</code> | <code>guide</code> |
| <code>queryValue</code> | <code>enabled</code> |
| <code>json</code> | <code>{&quot;message&quot;:&quot;format-demo&quot;,&quot;count&quot;:2}</code> |
| <code>historyRestores</code> | <code>method and URL only</code> |

<a id="walkthrough-composer-fields-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4" poster="../media/v0.1.1-alpha.1/composer-fields/composer-fields-01-new.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-fields/composer-fields.vtt" default>
</video>

<a id="walkthrough-composer-fields-01-new"></a>
### 01 · Create a request

[Video 00:00](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=0.425) · [Back to the video](#walkthrough-composer-fields-video)

![01 · Create a request](../media/v0.1.1-alpha.1/composer-fields/composer-fields-01-new.png)

<a id="walkthrough-composer-fields-02-header"></a>
### 02 · Add the test Header

[Video 00:03](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=3.405) · [Back to the video](#walkthrough-composer-fields-video)

![02 · Add the test Header](../media/v0.1.1-alpha.1/composer-fields/composer-fields-02-header.png)

<a id="walkthrough-composer-fields-03-query"></a>
### 03 · Add the test Query

[Video 00:06](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=6.307) · [Back to the video](#walkthrough-composer-fields-video)

![03 · Add the test Query](../media/v0.1.1-alpha.1/composer-fields/composer-fields-03-query.png)

<a id="walkthrough-composer-fields-04-send-enabled"></a>
### 04 · Send and verify both enabled fields

[Video 00:09](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=9.256) · [Back to the video](#walkthrough-composer-fields-video)

![04 · Send and verify both enabled fields](../media/v0.1.1-alpha.1/composer-fields/composer-fields-04-send-enabled.png)

<a id="walkthrough-composer-fields-05-query-off"></a>
### 05 · Disable the Query row

[Video 00:12](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=12.259) · [Back to the video](#walkthrough-composer-fields-video)

![05 · Disable the Query row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-05-query-off.png)

<a id="walkthrough-composer-fields-06-header-off"></a>
### 06 · Disable the Header row

[Video 00:15](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=15.063) · [Back to the video](#walkthrough-composer-fields-video)

![06 · Disable the Header row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-06-header-off.png)

<a id="walkthrough-composer-fields-07-send-disabled"></a>
### 07 · Send without the disabled fields

[Video 00:17](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=17.957) · [Back to the video](#walkthrough-composer-fields-video)

![07 · Send without the disabled fields](../media/v0.1.1-alpha.1/composer-fields/composer-fields-07-send-disabled.png)

<a id="walkthrough-composer-fields-08-header-delete"></a>
### 08 · Delete the Header row

[Video 00:20](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=20.857) · [Back to the video](#walkthrough-composer-fields-video)

![08 · Delete the Header row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-08-header-delete.png)

<a id="walkthrough-composer-fields-09-query-delete"></a>
### 09 · Delete the Query row

[Video 00:23](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=23.706) · [Back to the video](#walkthrough-composer-fields-video)

![09 · Delete the Query row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-09-query-delete.png)

<a id="walkthrough-composer-fields-10-json"></a>
### 10 · Select POST and JSON

[Video 00:26](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=26.607) · [Back to the video](#walkthrough-composer-fields-video)

![10 · Select POST and JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-10-json.png)

<a id="walkthrough-composer-fields-11-format"></a>
### 11 · Format JSON

[Video 00:29](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=29.960) · [Back to the video](#walkthrough-composer-fields-video)

![11 · Format JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-11-format.png)

<a id="walkthrough-composer-fields-12-send-json"></a>
### 12 · Send and verify formatted JSON

[Video 00:32](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=32.806) · [Back to the video](#walkthrough-composer-fields-video)

![12 · Send and verify formatted JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-12-send-json.png)

<a id="walkthrough-composer-fields-13-none"></a>
### 13 · Select Body None

[Video 00:35](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=35.707) · [Back to the video](#walkthrough-composer-fields-video)

![13 · Select Body None](../media/v0.1.1-alpha.1/composer-fields/composer-fields-13-none.png)

<a id="walkthrough-composer-fields-14-send-none"></a>
### 14 · Send without a body

[Video 00:38](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=38.607) · [Back to the video](#walkthrough-composer-fields-video)

![14 · Send without a body](../media/v0.1.1-alpha.1/composer-fields/composer-fields-14-send-none.png)

<a id="walkthrough-composer-fields-15-history"></a>
### 15 · Select an earlier Recent send

[Video 00:41](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=41.504) · [Back to the video](#walkthrough-composer-fields-video)

![15 · Select an earlier Recent send](../media/v0.1.1-alpha.1/composer-fields/composer-fields-15-history.png)

<a id="walkthrough-composer-fields-16-check-restored"></a>
### 16 · Check that fields and body were not restored

[Video 00:44](../media/v0.1.1-alpha.1/composer-fields/composer-fields.mp4#t=44.457) · [Back to the video](#walkthrough-composer-fields-video)

![16 · Check that fields and body were not restored](../media/v0.1.1-alpha.1/composer-fields/composer-fields-16-check-restored.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-fields:end -->

<!-- recorded-walkthrough:composer-inspection:start -->
<a id="walkthrough-composer-inspection"></a>
## Recorded walkthrough: response groups, body viewers and splitters

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
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

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4" poster="../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.vtt" default>
</video>

<a id="walkthrough-composer-inspection-01-open"></a>
### 01 · Open Composer

[Video 00:00](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=0.375) · [Back to the video](#walkthrough-composer-inspection-video)

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-01-open.png)

<a id="walkthrough-composer-inspection-02-new"></a>
### 02 · Create the response inspection request

[Video 00:03](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=3.296) · [Back to the video](#walkthrough-composer-inspection-video)

![02 · Create the response inspection request](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-02-new.png)

<a id="walkthrough-composer-inspection-03-url"></a>
### 03 · Enter the response inspection URL

[Video 00:06](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=6.206) · [Back to the video](#walkthrough-composer-inspection-video)

![03 · Enter the response inspection URL](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-03-url.png)

<a id="walkthrough-composer-inspection-04-header-name"></a>
### 04 · Enter x-guide-request

[Video 00:09](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=9.096) · [Back to the video](#walkthrough-composer-inspection-video)

![04 · Enter x-guide-request](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-04-header-name.png)

<a id="walkthrough-composer-inspection-05-header-value"></a>
### 05 · Enter inspection-demo

[Video 00:11](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=11.946) · [Back to the video](#walkthrough-composer-inspection-video)

![05 · Enter inspection-demo](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-05-header-value.png)

<a id="walkthrough-composer-inspection-06-add-header"></a>
### 06 · Add the request Header

[Video 00:14](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=14.812) · [Back to the video](#walkthrough-composer-inspection-video)

![06 · Add the request Header](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-06-add-header.png)

<a id="walkthrough-composer-inspection-07-send"></a>
### 07 · Send and receive real JSON

[Video 00:17](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=17.696) · [Back to the video](#walkthrough-composer-inspection-video)

![07 · Send and receive real JSON](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-07-send.png)

<a id="walkthrough-composer-inspection-08-headers"></a>
### 08 · Open response Headers

[Video 00:20](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=20.845) · [Back to the video](#walkthrough-composer-inspection-video)

![08 · Open response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-08-headers.png)

<a id="walkthrough-composer-inspection-09-response-collapse"></a>
### 09 · Collapse Response Headers

[Video 00:23](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=23.845) · [Back to the video](#walkthrough-composer-inspection-video)

![09 · Collapse Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-09-response-collapse.png)

<a id="walkthrough-composer-inspection-10-request-collapse"></a>
### 10 · Collapse Request Headers

[Video 00:26](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=26.745) · [Back to the video](#walkthrough-composer-inspection-video)

![10 · Collapse Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-10-request-collapse.png)

<a id="walkthrough-composer-inspection-11-response-expand"></a>
### 11 · Expand Response Headers

[Video 00:29](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=29.645) · [Back to the video](#walkthrough-composer-inspection-video)

![11 · Expand Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-11-response-expand.png)

<a id="walkthrough-composer-inspection-12-request-expand"></a>
### 12 · Expand Request Headers

[Video 00:32](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=32.546) · [Back to the video](#walkthrough-composer-inspection-video)

![12 · Expand Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-12-request-expand.png)

<a id="walkthrough-composer-inspection-13-cookies"></a>
### 13 · Open response Cookies

[Video 00:35](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=35.453) · [Back to the video](#walkthrough-composer-inspection-video)

![13 · Open response Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-13-cookies.png)

<a id="walkthrough-composer-inspection-14-cookies-collapse"></a>
### 14 · Collapse the Cookies section

[Video 00:38](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=38.357) · [Back to the video](#walkthrough-composer-inspection-video)

![14 · Collapse the Cookies section](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-14-cookies-collapse.png)

<a id="walkthrough-composer-inspection-15-cookies-expand"></a>
### 15 · Expand the Cookies section

[Video 00:41](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=41.250) · [Back to the video](#walkthrough-composer-inspection-video)

![15 · Expand the Cookies section](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-15-cookies-expand.png)

<a id="walkthrough-composer-inspection-16-timing"></a>
### 16 · Inspect Timing and connection details

[Video 00:44](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=44.157) · [Back to the video](#walkthrough-composer-inspection-video)

![16 · Inspect Timing and connection details](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-16-timing.png)

<a id="walkthrough-composer-inspection-17-timing-collapse"></a>
### 17 · Collapse Timing

[Video 00:47](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=47.100) · [Back to the video](#walkthrough-composer-inspection-video)

![17 · Collapse Timing](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-17-timing-collapse.png)

<a id="walkthrough-composer-inspection-18-connection-collapse"></a>
### 18 · Collapse Connection

[Video 00:50](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=50.004) · [Back to the video](#walkthrough-composer-inspection-video)

![18 · Collapse Connection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-18-connection-collapse.png)

<a id="walkthrough-composer-inspection-19-timing-expand"></a>
### 19 · Expand Timing

[Video 00:52](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=52.895) · [Back to the video](#walkthrough-composer-inspection-video)

![19 · Expand Timing](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-19-timing-expand.png)

<a id="walkthrough-composer-inspection-20-connection-expand"></a>
### 20 · Expand Connection

[Video 00:55](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=55.795) · [Back to the video](#walkthrough-composer-inspection-video)

![20 · Expand Connection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-20-connection-expand.png)

<a id="walkthrough-composer-inspection-21-body"></a>
### 21 · Return to response Body

[Video 00:58](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=58.695) · [Back to the video](#walkthrough-composer-inspection-video)

![21 · Return to response Body](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-21-body.png)

<a id="walkthrough-composer-inspection-22-tree"></a>
### 22 · Switch to Tree

[Video 01:01](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=61.595) · [Back to the video](#walkthrough-composer-inspection-video)

![22 · Switch to Tree](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-22-tree.png)

<a id="walkthrough-composer-inspection-23-tree-collapse"></a>
### 23 · Collapse the JSON root

[Video 01:04](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=64.497) · [Back to the video](#walkthrough-composer-inspection-video)

![23 · Collapse the JSON root](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-23-tree-collapse.png)

<a id="walkthrough-composer-inspection-24-tree-expand"></a>
### 24 · Expand the JSON root

[Video 01:07](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=67.350) · [Back to the video](#walkthrough-composer-inspection-video)

![24 · Expand the JSON root](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-24-tree-expand.png)

<a id="walkthrough-composer-inspection-25-tree-menu"></a>
### 25 · Open the message context menu

[Video 01:10](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=70.198) · [Back to the video](#walkthrough-composer-inspection-video)

![25 · Open the message context menu](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-25-tree-menu.png)

<a id="walkthrough-composer-inspection-26-tree-copy-value"></a>
### 26 · Copy the message value

[Video 01:13](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=73.096) · [Back to the video](#walkthrough-composer-inspection-video)

![26 · Copy the message value](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-26-tree-copy-value.png)

<a id="walkthrough-composer-inspection-27-raw"></a>
### 27 · Switch to Raw

[Video 01:15](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=75.995) · [Back to the video](#walkthrough-composer-inspection-video)

![27 · Switch to Raw](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-27-raw.png)

<a id="walkthrough-composer-inspection-28-copy-raw"></a>
### 28 · Copy the Raw response text

[Video 01:18](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=78.907) · [Back to the video](#walkthrough-composer-inspection-video)

![28 · Copy the Raw response text](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-28-copy-raw.png)

<a id="walkthrough-composer-inspection-29-hex"></a>
### 29 · Switch to Hex bytes

[Video 01:21](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=81.804) · [Back to the video](#walkthrough-composer-inspection-video)

![29 · Switch to Hex bytes](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-29-hex.png)

<a id="walkthrough-composer-inspection-30-copy-hex"></a>
### 30 · Copy Hex and verify the original bytes

[Video 01:24](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=84.698) · [Back to the video](#walkthrough-composer-inspection-video)

![30 · Copy Hex and verify the original bytes](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-30-copy-hex.png)

<a id="walkthrough-composer-inspection-31-fullscreen"></a>
### 31 · Open the response Hex fullscreen

[Video 01:27](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=87.595) · [Back to the video](#walkthrough-composer-inspection-video)

![31 · Open the response Hex fullscreen](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-31-fullscreen.png)

<a id="walkthrough-composer-inspection-32-exit-fullscreen"></a>
### 32 · Exit body fullscreen

[Video 01:30](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=90.546) · [Back to the video](#walkthrough-composer-inspection-video)

![32 · Exit body fullscreen](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-32-exit-fullscreen.png)

<a id="walkthrough-composer-inspection-33-collection-drag"></a>
### 33 · Widen the Collection pane

[Video 01:33](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=93.447) · [Back to the video](#walkthrough-composer-inspection-video)

![33 · Widen the Collection pane](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-33-collection-drag.png)

<a id="walkthrough-composer-inspection-34-response-drag"></a>
### 34 · Drag upward to enlarge the response pane

[Video 01:36](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=96.847) · [Back to the video](#walkthrough-composer-inspection-video)

![34 · Drag upward to enlarge the response pane](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-34-response-drag.png)

<a id="walkthrough-composer-inspection-35-format-url"></a>
### 35 · Enter the separate CSS URL

[Video 01:40](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=100.248) · [Back to the video](#walkthrough-composer-inspection-video)

![35 · Enter the separate CSS URL](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-35-format-url.png)

<a id="walkthrough-composer-inspection-36-css-send"></a>
### 36 · Receive CSS requiring manual Format

[Video 01:43](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=103.096) · [Back to the video](#walkthrough-composer-inspection-video)

![36 · Receive CSS requiring manual Format](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-36-css-send.png)

<a id="walkthrough-composer-inspection-37-css-copy-before"></a>
### 37 · Copy and verify CSS before Format

[Video 01:46](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=106.097) · [Back to the video](#walkthrough-composer-inspection-video)

![37 · Copy and verify CSS before Format](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-37-css-copy-before.png)

<a id="walkthrough-composer-inspection-38-format"></a>
### 38 · Click Format on the response

[Video 01:49](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=109.146) · [Back to the video](#walkthrough-composer-inspection-video)

![38 · Click Format on the response](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-38-format.png)

<a id="walkthrough-composer-inspection-39-css-copy-after"></a>
### 39 · Copy and verify the formatted result

[Video 01:52](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection.mp4#t=112.397) · [Back to the video](#walkthrough-composer-inspection-video)

![39 · Copy and verify the formatted result](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-39-css-copy-after.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-inspection:end -->

<!-- recorded-walkthrough:composer-replay:start -->
<a id="walkthrough-composer-replay"></a>
## Recorded walkthrough: repeated Query, Text input and history replay

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
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

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4" poster="../media/v0.1.1-alpha.1/composer-replay/composer-replay-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/composer-replay/composer-replay.vtt" default>
</video>

<a id="walkthrough-composer-replay-01-open"></a>
### 01 · Open Composer

[Video 00:00](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=0.424) · [Back to the video](#walkthrough-composer-replay-video)

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-replay/composer-replay-01-open.png)

<a id="walkthrough-composer-replay-02-new"></a>
### 02 · Create the Query and replay request

[Video 00:03](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=3.269) · [Back to the video](#walkthrough-composer-replay-video)

![02 · Create the Query and replay request](../media/v0.1.1-alpha.1/composer-replay/composer-replay-02-new.png)

<a id="walkthrough-composer-replay-03-url"></a>
### 03 · Enter guide=url in the URL

[Video 00:06](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=6.168) · [Back to the video](#walkthrough-composer-replay-video)

![03 · Enter guide=url in the URL](../media/v0.1.1-alpha.1/composer-replay/composer-replay-03-url.png)

<a id="walkthrough-composer-replay-04-post"></a>
### 04 · Select POST

[Video 00:09](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=9.060) · [Back to the video](#walkthrough-composer-replay-video)

![04 · Select POST](../media/v0.1.1-alpha.1/composer-replay/composer-replay-04-post.png)

<a id="walkthrough-composer-replay-05-query"></a>
### 05 · Open the still-empty Query table

[Video 00:11](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=11.958) · [Back to the video](#walkthrough-composer-replay-video)

![05 · Open the still-empty Query table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-05-query.png)

<a id="walkthrough-composer-replay-06-query-name"></a>
### 06 · Enter the Query name guide

[Video 00:14](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=14.810) · [Back to the video](#walkthrough-composer-replay-video)

![06 · Enter the Query name guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-06-query-name.png)

<a id="walkthrough-composer-replay-07-query-value"></a>
### 07 · Enter the Query value table

[Video 00:17](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=17.659) · [Back to the video](#walkthrough-composer-replay-video)

![07 · Enter the Query value table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-07-query-value.png)

<a id="walkthrough-composer-replay-08-add-query"></a>
### 08 · Add guide=table

[Video 00:20](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=20.458) · [Back to the video](#walkthrough-composer-replay-video)

![08 · Add guide=table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-08-add-query.png)

<a id="walkthrough-composer-replay-09-duplicate-name"></a>
### 09 · Enter the duplicate name guide

[Video 00:23](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=23.312) · [Back to the video](#walkthrough-composer-replay-video)

![09 · Enter the duplicate name guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-09-duplicate-name.png)

<a id="walkthrough-composer-replay-10-duplicate-value"></a>
### 10 · Enter the second row value again

[Video 00:26](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=26.158) · [Back to the video](#walkthrough-composer-replay-video)

![10 · Enter the second row value again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-10-duplicate-value.png)

<a id="walkthrough-composer-replay-11-add-duplicate"></a>
### 11 · Add the second same-name Query row

[Video 00:28](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=28.958) · [Back to the video](#walkthrough-composer-replay-video)

![11 · Add the second same-name Query row](../media/v0.1.1-alpha.1/composer-replay/composer-replay-11-add-duplicate.png)

<a id="walkthrough-composer-replay-12-send-query"></a>
### 12 · Send and verify all three guide values

[Video 00:31](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=31.808) · [Back to the video](#walkthrough-composer-replay-video)

![12 · Send and verify all three guide values](../media/v0.1.1-alpha.1/composer-replay/composer-replay-12-send-query.png)

<a id="walkthrough-composer-replay-13-text-url"></a>
### 13 · Edit only host and path for the text URL

[Video 00:34](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=34.908) · [Back to the video](#walkthrough-composer-replay-video)

![13 · Edit only host and path for the text URL](../media/v0.1.1-alpha.1/composer-replay/composer-replay-13-text-url.png)

<a id="walkthrough-composer-replay-14-put"></a>
### 14 · Change the method to PUT

[Video 00:37](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=37.758) · [Back to the video](#walkthrough-composer-replay-video)

![14 · Change the method to PUT](../media/v0.1.1-alpha.1/composer-replay/composer-replay-14-put.png)

<a id="walkthrough-composer-replay-15-body"></a>
### 15 · Open request Body

[Video 00:40](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=40.613) · [Back to the video](#walkthrough-composer-replay-video)

![15 · Open request Body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-15-body.png)

<a id="walkthrough-composer-replay-16-text-mode"></a>
### 16 · Select Text before entering content

[Video 00:43](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=43.458) · [Back to the video](#walkthrough-composer-replay-video)

![16 · Select Text before entering content](../media/v0.1.1-alpha.1/composer-replay/composer-replay-16-text-mode.png)

<a id="walkthrough-composer-replay-17-text-partial"></a>
### 17 · Enter the intermediate text Hello

[Video 00:46](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=46.355) · [Back to the video](#walkthrough-composer-replay-video)

![17 · Enter the intermediate text Hello](../media/v0.1.1-alpha.1/composer-replay/composer-replay-17-text-partial.png)

<a id="walkthrough-composer-replay-18-text-complete"></a>
### 18 · Complete the text as Hello text

[Video 00:49](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=49.355) · [Back to the video](#walkthrough-composer-replay-video)

![18 · Complete the text as Hello text](../media/v0.1.1-alpha.1/composer-replay/composer-replay-18-text-complete.png)

<a id="walkthrough-composer-replay-19-send-text"></a>
### 19 · Send and verify Hello text bytes

[Video 00:52](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=52.204) · [Back to the video](#walkthrough-composer-replay-video)

![19 · Send and verify Hello text bytes](../media/v0.1.1-alpha.1/composer-replay/composer-replay-19-send-text.png)

<a id="walkthrough-composer-replay-20-query-again"></a>
### 20 · Return to the Query table

[Video 00:55](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=55.152) · [Back to the video](#walkthrough-composer-replay-video)

![20 · Return to the Query table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-20-query-again.png)

<a id="walkthrough-composer-replay-21-query-current"></a>
### 21 · Change table to current

[Video 00:58](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=58.002) · [Back to the video](#walkthrough-composer-replay-video)

![21 · Change table to current](../media/v0.1.1-alpha.1/composer-replay/composer-replay-21-query-current.png)

<a id="walkthrough-composer-replay-22-body-again"></a>
### 22 · Return to the current Text body

[Video 01:00](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=60.849) · [Back to the video](#walkthrough-composer-replay-video)

![22 · Return to the current Text body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-22-body-again.png)

<a id="walkthrough-composer-replay-23-body-current"></a>
### 23 · Change the body to Hello replay

[Video 01:03](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=63.656) · [Back to the video](#walkthrough-composer-replay-video)

![23 · Change the body to Hello replay](../media/v0.1.1-alpha.1/composer-replay/composer-replay-23-body-current.png)

<a id="walkthrough-composer-replay-24-history"></a>
### 24 · Open the Recent sends menu

[Video 01:06](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=66.596) · [Back to the video](#walkthrough-composer-replay-video)

![24 · Open the Recent sends menu](../media/v0.1.1-alpha.1/composer-replay/composer-replay-24-history.png)

<a id="walkthrough-composer-replay-25-restore-old"></a>
### 25 · Select the earlier POST address

[Video 01:09](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=69.448) · [Back to the video](#walkthrough-composer-replay-video)

![25 · Select the earlier POST address](../media/v0.1.1-alpha.1/composer-replay/composer-replay-25-restore-old.png)

<a id="walkthrough-composer-replay-26-current-query"></a>
### 26 · Check that Query remains current and again

[Video 01:12](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=72.299) · [Back to the video](#walkthrough-composer-replay-video)

![26 · Check that Query remains current and again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-26-current-query.png)

<a id="walkthrough-composer-replay-27-resend"></a>
### 27 · Send again and verify appended Query and current body

[Video 01:15](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=75.166) · [Back to the video](#walkthrough-composer-replay-video)

![27 · Send again and verify appended Query and current body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-27-resend.png)

<a id="walkthrough-composer-replay-28-confirm-body"></a>
### 28 · Inspect the Text body retained after replay

[Video 01:18](../media/v0.1.1-alpha.1/composer-replay/composer-replay.mp4#t=78.037) · [Back to the video](#walkthrough-composer-replay-video)

![28 · Inspect the Text body retained after replay](../media/v0.1.1-alpha.1/composer-replay/composer-replay-28-confirm-body.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-replay:end -->
