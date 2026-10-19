# Composer: build and send requests

> Draft for `v0.1.1-alpha.1`; recorded operations have corresponding real images, with authenticated round trips and other unrecorded branches marked individually. Existing workflows or partial imagery do not complete this chapter or item9.

[Guide directory](../README.en.md) · [Capture](capture.md)

<a id="walkthrough"></a>
## Recorded walkthrough: send a request and add fields

These images show the published `v0.1.1-alpha.1` macOS x64 App, retaining its Chinese UI. Each image belongs to one step below and opens at full resolution. The credential-free local demo service used port `54275`; it is not a public endpoint. Substitute your own authorized test service's port.

| Example | Actual recorded value |
| --- | --- |
| Method and URL | `GET http://127.0.0.1:54275/guide/composer` |
| Query name / value | `guide` / `composer-demo` |
| Header name / value | `x-interceptor-guide` / `composer-demo` |
| Response | `{"request":"Guide request","message":"Hello Interceptor","status":"ready"}` |

### C01 · Open Composer

Select Composer in the sidebar. Collection and an empty workspace appear.

![C01: the actual Composer workspace before creating a request](../media/v0.1.1-alpha.1/composer/composer-01-open.png)

### C02 · Create a request

Click the Collection plus button. This version names the new entry `Untitled`; it is not an already-sent history item.

![C02: a new Untitled entry and its request editor](../media/v0.1.1-alpha.1/composer/composer-02-new.png)

### C03 · Enter the URL

Enter `http://127.0.0.1:54275/guide/composer`. Keep `GET` and Auto; check scheme/port without adding credentials.

![C03: GET and the URL match the recorded example](../media/v0.1.1-alpha.1/composer/composer-03-url.png)

### C04 · Send

Wait for `200` and JSON containing `message: Hello Interceptor`. The result belongs to Composer and does not need a new Capture row.

![C04: actual response with Guide request, Hello Interceptor and ready](../media/v0.1.1-alpha.1/composer/composer-04-send.png)

### C05 · Read response headers

Select Headers in the lower response area. This service returned `content-type: application/json; charset=utf-8` and `x-interceptor-guide: composer-demo`. Additional server headers may differ in your environment.

![C05: response headers show the recorded JSON type and composer-demo value](../media/v0.1.1-alpha.1/composer/composer-05-headers.png)

### C06 · Add Query

Open the request Query tab, enter `guide` / `composer-demo` in the new row and confirm it. Its count becomes `1`.

![C06: enabled Query row guide=composer-demo](../media/v0.1.1-alpha.1/composer/composer-06-query.png)

### C07 · Add a request header

Open request Headers, enter `x-interceptor-guide` / `composer-demo` and confirm. This is an outgoing header, unlike the response headers inspected earlier.

![C07: request header name and value match the text](../media/v0.1.1-alpha.1/composer/composer-07-header.png)

### C08 · Inspect Auth

Open Auth and keep None for this example. Never put real credentials into this demo service.

![C08: no Authorization is used](../media/v0.1.1-alpha.1/composer/composer-08-auth.png)

### C09 · Inspect Recent sends

Click the clock beside the URL and review the previous `GET`, address and `200`. This is not a complete persistent request snapshot.

![C09: Recent sends identifies the actual request from this walkthrough](../media/v0.1.1-alpha.1/composer/composer-09-history.png)

### C10 · Return to the body

Dismiss history and select the response Body tab. It is still C04's response: editing Query/Headers did not resend anything automatically.

![C10: original JSON response after editing unsent fields](../media/v0.1.1-alpha.1/composer/composer-10-body.png)

The complete reference follows; advanced branches without step images remain pending, not accepted.

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

   The [public loopback-authentication recording](#walkthrough-composer-auth) owns a temporary `127.0.0.1` service accepting only this example's `guide-user`, `public-demo-password` and `public-demo-token`. These deliberately public test strings work only for that service, not system accounts, real services or API keys. Never substitute your real credentials into the public example.

   ![Entering public Basic example values for the owned service](../media/v0.1.1-alpha.1/composer-auth/composer-auth-08-password.png)

   ![Entering the public token example for the same owned service](../media/v0.1.1-alpha.1/composer-auth/composer-auth-11-token.png)

3. Recheck the URL, send and inspect the response.

   The same recording receives 401 with None, then 200 with Basic and with the token option. The response `scheme` and actual origin Header are checked together; populated controls alone are not authentication success.

   ![Actual 401 without authentication](../media/v0.1.1-alpha.1/composer-auth/composer-auth-04-none.png)

   ![Actual Basic request returning 200](../media/v0.1.1-alpha.1/composer-auth/composer-auth-09-basic-result.png)

   ![Actual token-authenticated request returning 200](../media/v0.1.1-alpha.1/composer-auth/composer-auth-12-bearer-result.png)

4. Restore None after inspecting the controls.

   ![Restoring Auth None after this demonstration](../media/v0.1.1-alpha.1/composer-editing/composer-editing-21-none.png)

5. Before recording or sharing, remove real credentials and check Headers for other authorization fields.

   The [cleanup steps](#walkthrough-composer-auth-13-none-again) first verify that None removes automatically generated authentication, then add a public Authorization Header manually: it still goes out with Auth None. Only [deleting that row](#walkthrough-composer-auth-20-delete-header) produces 401 again. Finally all three example inputs are cleared and None is retained. No real credential is used.

   ![Auth None retains an explicitly added Header](../media/v0.1.1-alpha.1/composer-auth/composer-auth-19-none-keeps-header.png)

   ![Actual 401 after deleting the explicit Header](../media/v0.1.1-alpha.1/composer-auth/composer-auth-21-header-removed.png)

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
- The [response-formatting recording](#walkthrough-composer-response-formatting) additionally shows HTML/JavaScript auto-formatting, XML preserved when formatting fails, and JSON previews above 2 MiB. A short JavaScript function may gain spaces while remaining one line; oversized Copy is only the preview and Format is disabled. See [Capture](capture.md#walkthrough-capture-inspection) for actual nested scrolling in the shared body viewer, not a static fullscreen substitute.

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

    See [Workspace](workspace.md#saved-data) for the basic name/URL sequence. A complete representative request separately [saves its fields](#walkthrough-composer-persistence-save) and [verifies them after restart](#walkthrough-composer-persistence-restart): the same three-level folder/request identity restores method/protocol, Header states, Query, JSON and public Auth before one explicit Send verifies actual bytes. This does not exhaust every Body/Auth combination.

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

   This is a safety requirement before sharing, not automatic anonymization. The following examples contain this run's public data; exporting successfully does not make arbitrary everyday collections safe to share.

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

1. Inspect required capabilities in [Tool permissions](tool-permissions.md). Reading a Collection uses query access; sending requests is a change and is not covered by read-only access.

   The [complete read-only recording](tool-permissions.md#walkthrough-tool-permissions-readonly) operates individual Composer switches. Rows hidden by search are not automatically disabled.

2. State the destination, method and allowed operations. Start in Ask.

   The [MCP call lifecycle](mcp.md#walkthrough-mcp-tool-lifecycle-17-auto) explicitly uses Auto for an owned long request, then revokes the Client and verifies real network cancellation. It is not presented as Ask send approval.

3. Review the destination/method before approving Send. Read the current collection before replacing it.

   The [Composer-specific recording](#walkthrough-composer-tools) uses Ask for `Guide Composer tools`. It first denies POST with no origin request, then allows the same destination and verifies an actual 201. It reads the saved tree and retains the actual request ID/revision while renaming to `Guide MCP renamed request`, separately checking no write on Deny and notification-driven UI changes on Allow.

   ![The actual destination and arguments in Composer POST approval](../media/v0.1.1-alpha.1/composer-tools/composer-tools-11-send-ask.png)

   ![Actual request/folder scope for Collection replacement](../media/v0.1.1-alpha.1/composer-tools/composer-tools-16-replace-ask.png)

4. After sending, inspect the actual Tool result's status, Headers and body preview, not only the model's conclusion. Tool sending does not fill the current Composer editor's response pane; that pane is updated by your UI Send. After changing a Collection, check its notification-driven UI update in Composer. These are different operations.

   `guide-ui-response` below belongs to the earlier UI Send; only the caller receives the Tool's `guide-tool-response`. The [same recording](#walkthrough-composer-tools-15-ui-response-kept) actually checks this boundary, while a Collection rename does synchronize with the mounted UI. Also see [MCP in-flight revocation](mcp.md#walkthrough-mcp-tool-lifecycle-18-long-request).

   ![The current UI response remains unchanged after Tool sending](../media/v0.1.1-alpha.1/composer-tools/composer-tools-15-ui-response-kept.png)

   ![The Collection name synchronizes after allowing replacement](../media/v0.1.1-alpha.1/composer-tools/composer-tools-19-replace-allow.png)

**Expected result:** AI uses the same business operations and collection changes synchronize with the UI. Importing a collection does not Send.

See the separate [native file Tool recording](#walkthrough-composer-file-tools): `Guide Collection files` first denies export, cancels a real Save, then exports `guide-tool-collection.json` through the product. Every Import reads that same file, separately cancelling Open, cancelling preview and confirming append. Auto still requires native Open and confirmation. The final three identically named requests have distinct IDs, retain the original and never Send automatically.

![Actual native Save for the Collection Tool](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-10-save-file.png)

![Auto still requires Collection import confirmation](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-preview.png)

**Notes:** `composer_probe_connection` performs a TLS handshake only; `composer_send_request` sends HTTP. Successful probing is not a successful API response. See the [Tool reference](tool-reference.md#composer).

Return to the [guide directory](../README.en.md).

<!-- recorded-walkthrough:composer-editing:start -->
<a id="walkthrough-composer-editing"></a>
## Recorded walkthrough: bodies, Auth controls and Collection files

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

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

<a id="walkthrough-composer-editing-01-open"></a>
### 01 · Open Composer

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-editing/composer-editing-01-open.png)

<a id="walkthrough-composer-editing-02-new"></a>
### 02 · Create the request

![02 · Create the request](../media/v0.1.1-alpha.1/composer-editing/composer-editing-02-new.png)

<a id="walkthrough-composer-editing-03-url"></a>
### 03 · Enter the demo URL

![03 · Enter the demo URL](../media/v0.1.1-alpha.1/composer-editing/composer-editing-03-url.png)

<a id="walkthrough-composer-editing-04-method"></a>
### 04 · Choose POST

![04 · Choose POST](../media/v0.1.1-alpha.1/composer-editing/composer-editing-04-method.png)

<a id="walkthrough-composer-editing-05-json-header"></a>
### 05 · Set the JSON Content-Type

![05 · Set the JSON Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-05-json-header.png)

<a id="walkthrough-composer-editing-06-body"></a>
### 06 · Open Body

![06 · Open Body](../media/v0.1.1-alpha.1/composer-editing/composer-editing-06-body.png)

<a id="walkthrough-composer-editing-07-json"></a>
### 07 · Choose JSON

![07 · Choose JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-07-json.png)

<a id="walkthrough-composer-editing-08-json-input"></a>
### 08 · Enter the JSON body

![08 · Enter the JSON body](../media/v0.1.1-alpha.1/composer-editing/composer-editing-08-json-input.png)

<a id="walkthrough-composer-editing-09-json-send"></a>
### 09 · Send and verify the complete JSON

![09 · Send and verify the complete JSON](../media/v0.1.1-alpha.1/composer-editing/composer-editing-09-json-send.png)

<a id="walkthrough-composer-editing-10-text"></a>
### 10 · Choose Text

![10 · Choose Text](../media/v0.1.1-alpha.1/composer-editing/composer-editing-10-text.png)

<a id="walkthrough-composer-editing-11-text-header"></a>
### 11 · Set text/plain

![11 · Set text/plain](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11-text-header.png)

<a id="walkthrough-composer-editing-11a-text-url"></a>
### 12 · Use the separate text endpoint

![12 · Use the separate text endpoint](../media/v0.1.1-alpha.1/composer-editing/composer-editing-11a-text-url.png)

<a id="walkthrough-composer-editing-12-text-send"></a>
### 13 · Send and verify text

![13 · Send and verify text](../media/v0.1.1-alpha.1/composer-editing/composer-editing-12-text-send.png)

<a id="walkthrough-composer-editing-13-form"></a>
### 14 · Choose Form

![14 · Choose Form](../media/v0.1.1-alpha.1/composer-editing/composer-editing-13-form.png)

<a id="walkthrough-composer-editing-14-form-name"></a>
### 15 · Add name=Interceptor

![15 · Add name=Interceptor](../media/v0.1.1-alpha.1/composer-editing/composer-editing-14-form-name.png)

<a id="walkthrough-composer-editing-15-form-ready"></a>
### 16 · Add ready=true

![16 · Add ready=true](../media/v0.1.1-alpha.1/composer-editing/composer-editing-15-form-ready.png)

<a id="walkthrough-composer-editing-16-form-header"></a>
### 17 · Set the form Content-Type

![17 · Set the form Content-Type](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16-form-header.png)

<a id="walkthrough-composer-editing-16a-form-url"></a>
### 18 · Use the separate form endpoint

![18 · Use the separate form endpoint](../media/v0.1.1-alpha.1/composer-editing/composer-editing-16a-form-url.png)

<a id="walkthrough-composer-editing-17-form-send"></a>
### 19 · Send and verify form bytes

![19 · Send and verify form bytes](../media/v0.1.1-alpha.1/composer-editing/composer-editing-17-form-send.png)

<a id="walkthrough-composer-editing-18-auth"></a>
### 20 · Open Auth

![20 · Open Auth](../media/v0.1.1-alpha.1/composer-editing/composer-editing-18-auth.png)

<a id="walkthrough-composer-editing-19-bearer"></a>
### 21 · Inspect Bearer input without a real key

![21 · Inspect Bearer input without a real key](../media/v0.1.1-alpha.1/composer-editing/composer-editing-19-bearer.png)

<a id="walkthrough-composer-editing-20-basic"></a>
### 22 · Inspect Basic inputs

![22 · Inspect Basic inputs](../media/v0.1.1-alpha.1/composer-editing/composer-editing-20-basic.png)

<a id="walkthrough-composer-editing-21-none"></a>
### 23 · Restore None

![23 · Restore None](../media/v0.1.1-alpha.1/composer-editing/composer-editing-21-none.png)

<a id="walkthrough-composer-editing-22-rename"></a>
### 24 · Rename the request

![24 · Rename the request](../media/v0.1.1-alpha.1/composer-editing/composer-editing-22-rename.png)

<a id="walkthrough-composer-editing-23-folder"></a>
### 25 · Create the collection folder

![25 · Create the collection folder](../media/v0.1.1-alpha.1/composer-editing/composer-editing-23-folder.png)

<a id="walkthrough-composer-editing-24-move"></a>
### 26 · Move the request into the folder

![26 · Move the request into the folder](../media/v0.1.1-alpha.1/composer-editing/composer-editing-24-move.png)

<a id="walkthrough-composer-editing-25-export"></a>
### 27 · Export the collection

![27 · Export the collection](../media/v0.1.1-alpha.1/composer-editing/composer-editing-25-export.png)

<a id="walkthrough-composer-editing-26-exported"></a>
### 28 · Verify the exported collection

![28 · Verify the exported collection](../media/v0.1.1-alpha.1/composer-editing/composer-editing-26-exported.png)

<a id="walkthrough-composer-editing-27-import"></a>
### 29 · Select the same exported file

![29 · Select the same exported file](../media/v0.1.1-alpha.1/composer-editing/composer-editing-27-import.png)

<a id="walkthrough-composer-editing-28-preview"></a>
### 30 · Review import preview

![30 · Review import preview](../media/v0.1.1-alpha.1/composer-editing/composer-editing-28-preview.png)

<a id="walkthrough-composer-editing-29-confirm"></a>
### 31 · Confirm append without overwrite

![31 · Confirm append without overwrite](../media/v0.1.1-alpha.1/composer-editing/composer-editing-29-confirm.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-editing:end -->

<!-- recorded-walkthrough:composer-collection:start -->
<a id="walkthrough-composer-collection"></a>
## Recorded walkthrough: folder depth, ordering, cancellation and deletion

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

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

<a id="walkthrough-composer-collection-01-open"></a>
### 01 · Open Composer

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-collection/composer-collection-01-open.png)

<a id="walkthrough-composer-collection-02-folder-1"></a>
### 02 · Create Guide level 1

![02 · Create Guide level 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-1.png)

<a id="walkthrough-composer-collection-02-folder-2"></a>
### 03 · Create Guide level 2

![03 · Create Guide level 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-2.png)

<a id="walkthrough-composer-collection-02-folder-3"></a>
### 04 · Create Guide level 3

![04 · Create Guide level 3](../media/v0.1.1-alpha.1/composer-collection/composer-collection-02-folder-3.png)

<a id="walkthrough-composer-collection-03-depth-limit"></a>
### 05 · Inspect the third-level folder limit

![05 · Inspect the third-level folder limit](../media/v0.1.1-alpha.1/composer-collection/composer-collection-03-depth-limit.png)

<a id="walkthrough-composer-collection-04-request-1"></a>
### 06 · Create Guide request 1 in the folder

![06 · Create Guide request 1 in the folder](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-1.png)

<a id="walkthrough-composer-collection-04-request-2"></a>
### 07 · Create Guide request 2 in the folder

![07 · Create Guide request 2 in the folder](../media/v0.1.1-alpha.1/composer-collection/composer-collection-04-request-2.png)

<a id="walkthrough-composer-collection-05-switch-1"></a>
### 08 · Switch and verify request 1

![08 · Switch and verify request 1](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-1.png)

<a id="walkthrough-composer-collection-05-switch-2"></a>
### 09 · Switch and verify request 2

![09 · Switch and verify request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-05-switch-2.png)

<a id="walkthrough-composer-collection-06-rename-folder"></a>
### 10 · Rename the folder Guide saved requests

![10 · Rename the folder Guide saved requests](../media/v0.1.1-alpha.1/composer-collection/composer-collection-06-rename-folder.png)

<a id="walkthrough-composer-collection-07-reorder"></a>
### 11 · Reorder sibling requests

![11 · Reorder sibling requests](../media/v0.1.1-alpha.1/composer-collection/composer-collection-07-reorder.png)

<a id="walkthrough-composer-collection-08-export"></a>
### 12 · Save the example collection file

![12 · Save the example collection file](../media/v0.1.1-alpha.1/composer-collection/composer-collection-08-export.png)

<a id="walkthrough-composer-collection-09-open-import"></a>
### 13 · Select the same exported file

![13 · Select the same exported file](../media/v0.1.1-alpha.1/composer-collection/composer-collection-09-open-import.png)

<a id="walkthrough-composer-collection-10-cancel-preview"></a>
### 14 · Cancel import without appending

![14 · Cancel import without appending](../media/v0.1.1-alpha.1/composer-collection/composer-collection-10-cancel-preview.png)

<a id="walkthrough-composer-collection-11-delete-request"></a>
### 15 · Delete this run’s request 2

![15 · Delete this run’s request 2](../media/v0.1.1-alpha.1/composer-collection/composer-collection-11-delete-request.png)

<a id="walkthrough-composer-collection-12-delete-folder"></a>
### 16 · Delete the owned folder and remaining demo request

![16 · Delete the owned folder and remaining demo request](../media/v0.1.1-alpha.1/composer-collection/composer-collection-12-delete-folder.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-collection:end -->

<!-- recorded-walkthrough:composer-fields:start -->
<a id="walkthrough-composer-fields"></a>
## Recorded walkthrough: field toggles, resending and history restoration

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>origin</code> | <code>http://127.0.0.1:62733/guide/composer-fields</code> |
| <code>headerName</code> | <code>x-guide-toggle</code> |
| <code>headerValue</code> | <code>enabled</code> |
| <code>queryName</code> | <code>guide</code> |
| <code>queryValue</code> | <code>enabled</code> |
| <code>json</code> | <code>{&quot;message&quot;:&quot;format-demo&quot;,&quot;count&quot;:2}</code> |
| <code>historyRestores</code> | <code>method and URL only</code> |

<a id="walkthrough-composer-fields-01-new"></a>
### 01 · Create a request

![01 · Create a request](../media/v0.1.1-alpha.1/composer-fields/composer-fields-01-new.png)

<a id="walkthrough-composer-fields-02-header"></a>
### 02 · Add the test Header

![02 · Add the test Header](../media/v0.1.1-alpha.1/composer-fields/composer-fields-02-header.png)

<a id="walkthrough-composer-fields-03-query"></a>
### 03 · Add the test Query

![03 · Add the test Query](../media/v0.1.1-alpha.1/composer-fields/composer-fields-03-query.png)

<a id="walkthrough-composer-fields-04-send-enabled"></a>
### 04 · Send and verify both enabled fields

![04 · Send and verify both enabled fields](../media/v0.1.1-alpha.1/composer-fields/composer-fields-04-send-enabled.png)

<a id="walkthrough-composer-fields-05-query-off"></a>
### 05 · Disable the Query row

![05 · Disable the Query row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-05-query-off.png)

<a id="walkthrough-composer-fields-06-header-off"></a>
### 06 · Disable the Header row

![06 · Disable the Header row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-06-header-off.png)

<a id="walkthrough-composer-fields-07-send-disabled"></a>
### 07 · Send without the disabled fields

![07 · Send without the disabled fields](../media/v0.1.1-alpha.1/composer-fields/composer-fields-07-send-disabled.png)

<a id="walkthrough-composer-fields-08-header-delete"></a>
### 08 · Delete the Header row

![08 · Delete the Header row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-08-header-delete.png)

<a id="walkthrough-composer-fields-09-query-delete"></a>
### 09 · Delete the Query row

![09 · Delete the Query row](../media/v0.1.1-alpha.1/composer-fields/composer-fields-09-query-delete.png)

<a id="walkthrough-composer-fields-10-json"></a>
### 10 · Select POST and JSON

![10 · Select POST and JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-10-json.png)

<a id="walkthrough-composer-fields-11-format"></a>
### 11 · Format JSON

![11 · Format JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-11-format.png)

<a id="walkthrough-composer-fields-12-send-json"></a>
### 12 · Send and verify formatted JSON

![12 · Send and verify formatted JSON](../media/v0.1.1-alpha.1/composer-fields/composer-fields-12-send-json.png)

<a id="walkthrough-composer-fields-13-none"></a>
### 13 · Select Body None

![13 · Select Body None](../media/v0.1.1-alpha.1/composer-fields/composer-fields-13-none.png)

<a id="walkthrough-composer-fields-14-send-none"></a>
### 14 · Send without a body

![14 · Send without a body](../media/v0.1.1-alpha.1/composer-fields/composer-fields-14-send-none.png)

<a id="walkthrough-composer-fields-15-history"></a>
### 15 · Select an earlier Recent send

![15 · Select an earlier Recent send](../media/v0.1.1-alpha.1/composer-fields/composer-fields-15-history.png)

<a id="walkthrough-composer-fields-16-check-restored"></a>
### 16 · Check that fields and body were not restored

![16 · Check that fields and body were not restored](../media/v0.1.1-alpha.1/composer-fields/composer-fields-16-check-restored.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-fields:end -->

<!-- recorded-walkthrough:composer-inspection:start -->
<a id="walkthrough-composer-inspection"></a>
## Recorded walkthrough: response groups, body viewers and splitters

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

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

<a id="walkthrough-composer-inspection-01-open"></a>
### 01 · Open Composer

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-01-open.png)

<a id="walkthrough-composer-inspection-02-new"></a>
### 02 · Create the response inspection request

![02 · Create the response inspection request](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-02-new.png)

<a id="walkthrough-composer-inspection-03-url"></a>
### 03 · Enter the response inspection URL

![03 · Enter the response inspection URL](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-03-url.png)

<a id="walkthrough-composer-inspection-04-header-name"></a>
### 04 · Enter x-guide-request

![04 · Enter x-guide-request](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-04-header-name.png)

<a id="walkthrough-composer-inspection-05-header-value"></a>
### 05 · Enter inspection-demo

![05 · Enter inspection-demo](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-05-header-value.png)

<a id="walkthrough-composer-inspection-06-add-header"></a>
### 06 · Add the request Header

![06 · Add the request Header](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-06-add-header.png)

<a id="walkthrough-composer-inspection-07-send"></a>
### 07 · Send and receive real JSON

![07 · Send and receive real JSON](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-07-send.png)

<a id="walkthrough-composer-inspection-08-headers"></a>
### 08 · Open response Headers

![08 · Open response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-08-headers.png)

<a id="walkthrough-composer-inspection-09-response-collapse"></a>
### 09 · Collapse Response Headers

![09 · Collapse Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-09-response-collapse.png)

<a id="walkthrough-composer-inspection-10-request-collapse"></a>
### 10 · Collapse Request Headers

![10 · Collapse Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-10-request-collapse.png)

<a id="walkthrough-composer-inspection-11-response-expand"></a>
### 11 · Expand Response Headers

![11 · Expand Response Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-11-response-expand.png)

<a id="walkthrough-composer-inspection-12-request-expand"></a>
### 12 · Expand Request Headers

![12 · Expand Request Headers](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-12-request-expand.png)

<a id="walkthrough-composer-inspection-13-cookies"></a>
### 13 · Open response Cookies

![13 · Open response Cookies](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-13-cookies.png)

<a id="walkthrough-composer-inspection-14-cookies-collapse"></a>
### 14 · Collapse the Cookies section

![14 · Collapse the Cookies section](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-14-cookies-collapse.png)

<a id="walkthrough-composer-inspection-15-cookies-expand"></a>
### 15 · Expand the Cookies section

![15 · Expand the Cookies section](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-15-cookies-expand.png)

<a id="walkthrough-composer-inspection-16-timing"></a>
### 16 · Inspect Timing and connection details

![16 · Inspect Timing and connection details](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-16-timing.png)

<a id="walkthrough-composer-inspection-17-timing-collapse"></a>
### 17 · Collapse Timing

![17 · Collapse Timing](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-17-timing-collapse.png)

<a id="walkthrough-composer-inspection-18-connection-collapse"></a>
### 18 · Collapse Connection

![18 · Collapse Connection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-18-connection-collapse.png)

<a id="walkthrough-composer-inspection-19-timing-expand"></a>
### 19 · Expand Timing

![19 · Expand Timing](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-19-timing-expand.png)

<a id="walkthrough-composer-inspection-20-connection-expand"></a>
### 20 · Expand Connection

![20 · Expand Connection](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-20-connection-expand.png)

<a id="walkthrough-composer-inspection-21-body"></a>
### 21 · Return to response Body

![21 · Return to response Body](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-21-body.png)

<a id="walkthrough-composer-inspection-22-tree"></a>
### 22 · Switch to Tree

![22 · Switch to Tree](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-22-tree.png)

<a id="walkthrough-composer-inspection-23-tree-collapse"></a>
### 23 · Collapse the JSON root

![23 · Collapse the JSON root](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-23-tree-collapse.png)

<a id="walkthrough-composer-inspection-24-tree-expand"></a>
### 24 · Expand the JSON root

![24 · Expand the JSON root](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-24-tree-expand.png)

<a id="walkthrough-composer-inspection-25-tree-menu"></a>
### 25 · Open the message context menu

![25 · Open the message context menu](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-25-tree-menu.png)

<a id="walkthrough-composer-inspection-26-tree-copy-value"></a>
### 26 · Copy the message value

![26 · Copy the message value](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-26-tree-copy-value.png)

<a id="walkthrough-composer-inspection-27-raw"></a>
### 27 · Switch to Raw

![27 · Switch to Raw](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-27-raw.png)

<a id="walkthrough-composer-inspection-28-copy-raw"></a>
### 28 · Copy the Raw response text

![28 · Copy the Raw response text](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-28-copy-raw.png)

<a id="walkthrough-composer-inspection-29-hex"></a>
### 29 · Switch to Hex bytes

![29 · Switch to Hex bytes](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-29-hex.png)

<a id="walkthrough-composer-inspection-30-copy-hex"></a>
### 30 · Copy Hex and verify the original bytes

![30 · Copy Hex and verify the original bytes](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-30-copy-hex.png)

<a id="walkthrough-composer-inspection-31-fullscreen"></a>
### 31 · Open the response Hex fullscreen

![31 · Open the response Hex fullscreen](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-31-fullscreen.png)

<a id="walkthrough-composer-inspection-32-exit-fullscreen"></a>
### 32 · Exit body fullscreen

![32 · Exit body fullscreen](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-32-exit-fullscreen.png)

<a id="walkthrough-composer-inspection-33-collection-drag"></a>
### 33 · Widen the Collection pane

![33 · Widen the Collection pane](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-33-collection-drag.png)

<a id="walkthrough-composer-inspection-34-response-drag"></a>
### 34 · Drag upward to enlarge the response pane

![34 · Drag upward to enlarge the response pane](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-34-response-drag.png)

<a id="walkthrough-composer-inspection-35-format-url"></a>
### 35 · Enter the separate CSS URL

![35 · Enter the separate CSS URL](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-35-format-url.png)

<a id="walkthrough-composer-inspection-36-css-send"></a>
### 36 · Receive CSS requiring manual Format

![36 · Receive CSS requiring manual Format](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-36-css-send.png)

<a id="walkthrough-composer-inspection-37-css-copy-before"></a>
### 37 · Copy and verify CSS before Format

![37 · Copy and verify CSS before Format](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-37-css-copy-before.png)

<a id="walkthrough-composer-inspection-38-format"></a>
### 38 · Click Format on the response

![38 · Click Format on the response](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-38-format.png)

<a id="walkthrough-composer-inspection-39-css-copy-after"></a>
### 39 · Copy and verify the formatted result

![39 · Copy and verify the formatted result](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-39-css-copy-after.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-inspection:end -->

<!-- recorded-walkthrough:composer-replay:start -->
<a id="walkthrough-composer-replay"></a>
## Recorded walkthrough: repeated Query, Text input and history replay

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

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

<a id="walkthrough-composer-replay-01-open"></a>
### 01 · Open Composer

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-replay/composer-replay-01-open.png)

<a id="walkthrough-composer-replay-02-new"></a>
### 02 · Create the Query and replay request

![02 · Create the Query and replay request](../media/v0.1.1-alpha.1/composer-replay/composer-replay-02-new.png)

<a id="walkthrough-composer-replay-03-url"></a>
### 03 · Enter guide=url in the URL

![03 · Enter guide=url in the URL](../media/v0.1.1-alpha.1/composer-replay/composer-replay-03-url.png)

<a id="walkthrough-composer-replay-04-post"></a>
### 04 · Select POST

![04 · Select POST](../media/v0.1.1-alpha.1/composer-replay/composer-replay-04-post.png)

<a id="walkthrough-composer-replay-05-query"></a>
### 05 · Open the still-empty Query table

![05 · Open the still-empty Query table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-05-query.png)

<a id="walkthrough-composer-replay-06-query-name"></a>
### 06 · Enter the Query name guide

![06 · Enter the Query name guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-06-query-name.png)

<a id="walkthrough-composer-replay-07-query-value"></a>
### 07 · Enter the Query value table

![07 · Enter the Query value table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-07-query-value.png)

<a id="walkthrough-composer-replay-08-add-query"></a>
### 08 · Add guide=table

![08 · Add guide=table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-08-add-query.png)

<a id="walkthrough-composer-replay-09-duplicate-name"></a>
### 09 · Enter the duplicate name guide

![09 · Enter the duplicate name guide](../media/v0.1.1-alpha.1/composer-replay/composer-replay-09-duplicate-name.png)

<a id="walkthrough-composer-replay-10-duplicate-value"></a>
### 10 · Enter the second row value again

![10 · Enter the second row value again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-10-duplicate-value.png)

<a id="walkthrough-composer-replay-11-add-duplicate"></a>
### 11 · Add the second same-name Query row

![11 · Add the second same-name Query row](../media/v0.1.1-alpha.1/composer-replay/composer-replay-11-add-duplicate.png)

<a id="walkthrough-composer-replay-12-send-query"></a>
### 12 · Send and verify all three guide values

![12 · Send and verify all three guide values](../media/v0.1.1-alpha.1/composer-replay/composer-replay-12-send-query.png)

<a id="walkthrough-composer-replay-13-text-url"></a>
### 13 · Edit only host and path for the text URL

![13 · Edit only host and path for the text URL](../media/v0.1.1-alpha.1/composer-replay/composer-replay-13-text-url.png)

<a id="walkthrough-composer-replay-14-put"></a>
### 14 · Change the method to PUT

![14 · Change the method to PUT](../media/v0.1.1-alpha.1/composer-replay/composer-replay-14-put.png)

<a id="walkthrough-composer-replay-15-body"></a>
### 15 · Open request Body

![15 · Open request Body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-15-body.png)

<a id="walkthrough-composer-replay-16-text-mode"></a>
### 16 · Select Text before entering content

![16 · Select Text before entering content](../media/v0.1.1-alpha.1/composer-replay/composer-replay-16-text-mode.png)

<a id="walkthrough-composer-replay-17-text-partial"></a>
### 17 · Enter the intermediate text Hello

![17 · Enter the intermediate text Hello](../media/v0.1.1-alpha.1/composer-replay/composer-replay-17-text-partial.png)

<a id="walkthrough-composer-replay-18-text-complete"></a>
### 18 · Complete the text as Hello text

![18 · Complete the text as Hello text](../media/v0.1.1-alpha.1/composer-replay/composer-replay-18-text-complete.png)

<a id="walkthrough-composer-replay-19-send-text"></a>
### 19 · Send and verify Hello text bytes

![19 · Send and verify Hello text bytes](../media/v0.1.1-alpha.1/composer-replay/composer-replay-19-send-text.png)

<a id="walkthrough-composer-replay-20-query-again"></a>
### 20 · Return to the Query table

![20 · Return to the Query table](../media/v0.1.1-alpha.1/composer-replay/composer-replay-20-query-again.png)

<a id="walkthrough-composer-replay-21-query-current"></a>
### 21 · Change table to current

![21 · Change table to current](../media/v0.1.1-alpha.1/composer-replay/composer-replay-21-query-current.png)

<a id="walkthrough-composer-replay-22-body-again"></a>
### 22 · Return to the current Text body

![22 · Return to the current Text body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-22-body-again.png)

<a id="walkthrough-composer-replay-23-body-current"></a>
### 23 · Change the body to Hello replay

![23 · Change the body to Hello replay](../media/v0.1.1-alpha.1/composer-replay/composer-replay-23-body-current.png)

<a id="walkthrough-composer-replay-24-history"></a>
### 24 · Open the Recent sends menu

![24 · Open the Recent sends menu](../media/v0.1.1-alpha.1/composer-replay/composer-replay-24-history.png)

<a id="walkthrough-composer-replay-25-restore-old"></a>
### 25 · Select the earlier POST address

![25 · Select the earlier POST address](../media/v0.1.1-alpha.1/composer-replay/composer-replay-25-restore-old.png)

<a id="walkthrough-composer-replay-26-current-query"></a>
### 26 · Check that Query remains current and again

![26 · Check that Query remains current and again](../media/v0.1.1-alpha.1/composer-replay/composer-replay-26-current-query.png)

<a id="walkthrough-composer-replay-27-resend"></a>
### 27 · Send again and verify appended Query and current body

![27 · Send again and verify appended Query and current body](../media/v0.1.1-alpha.1/composer-replay/composer-replay-27-resend.png)

<a id="walkthrough-composer-replay-28-confirm-body"></a>
### 28 · Inspect the Text body retained after replay

![28 · Inspect the Text body retained after replay](../media/v0.1.1-alpha.1/composer-replay/composer-replay-28-confirm-body.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-replay:end -->

<!-- recorded-walkthrough:composer-auth:start -->
<a id="walkthrough-composer-auth"></a>
## Recorded walkthrough: public loopback authentication and Authorization cleanup

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:62653/guide/composer-auth</code> |
| <code>username</code> | <code>guide-user</code> |
| <code>password</code> | <code>public-demo-password</code> |
| <code>bearerToken</code> | <code>public-demo-token</code> |
| <code>scope</code> | <code>Public demonstration strings accepted only by this temporary loopback origin; not real credentials</code> |
| <code>responses</code> | <code>None 401; Basic 200; Bearer 200; None without explicit Header 401</code> |
| <code>explicitHeader</code> | <code>Auth None leaves a user-added Authorization Header until its row is deleted</code> |

<a id="walkthrough-composer-auth-01-composer"></a>
### 01 · Open Composer

![01 · Open Composer](../media/v0.1.1-alpha.1/composer-auth/composer-auth-01-composer.png)

<a id="walkthrough-composer-auth-02-new"></a>
### 02 · Create an authentication example request

![02 · Create an authentication example request](../media/v0.1.1-alpha.1/composer-auth/composer-auth-02-new.png)

<a id="walkthrough-composer-auth-03-url"></a>
### 03 · Enter the owned loopback service address

![03 · Enter the owned loopback service address](../media/v0.1.1-alpha.1/composer-auth/composer-auth-03-url.png)

<a id="walkthrough-composer-auth-04-none"></a>
### 04 · Send without authentication and receive 401

![04 · Send without authentication and receive 401](../media/v0.1.1-alpha.1/composer-auth/composer-auth-04-none.png)

<a id="walkthrough-composer-auth-05-auth-tab"></a>
### 05 · Open Auth

![05 · Open Auth](../media/v0.1.1-alpha.1/composer-auth/composer-auth-05-auth-tab.png)

<a id="walkthrough-composer-auth-06-basic"></a>
### 06 · Choose Basic

![06 · Choose Basic](../media/v0.1.1-alpha.1/composer-auth/composer-auth-06-basic.png)

<a id="walkthrough-composer-auth-07-username"></a>
### 07 · Enter the public example username

![07 · Enter the public example username](../media/v0.1.1-alpha.1/composer-auth/composer-auth-07-username.png)

<a id="walkthrough-composer-auth-08-password"></a>
### 08 · Enter the loopback-only example password

![08 · Enter the loopback-only example password](../media/v0.1.1-alpha.1/composer-auth/composer-auth-08-password.png)

<a id="walkthrough-composer-auth-09-basic-result"></a>
### 09 · Send Basic and verify 200

![09 · Send Basic and verify 200](../media/v0.1.1-alpha.1/composer-auth/composer-auth-09-basic-result.png)

<a id="walkthrough-composer-auth-10-bearer"></a>
### 10 · Switch to Bearer

![10 · Switch to Bearer](../media/v0.1.1-alpha.1/composer-auth/composer-auth-10-bearer.png)

<a id="walkthrough-composer-auth-11-token"></a>
### 11 · Enter the public example token

![11 · Enter the public example token](../media/v0.1.1-alpha.1/composer-auth/composer-auth-11-token.png)

<a id="walkthrough-composer-auth-12-bearer-result"></a>
### 12 · Send Bearer and verify 200

![12 · Send Bearer and verify 200](../media/v0.1.1-alpha.1/composer-auth/composer-auth-12-bearer-result.png)

<a id="walkthrough-composer-auth-13-none-again"></a>
### 13 · Switch back to None

![13 · Switch back to None](../media/v0.1.1-alpha.1/composer-auth/composer-auth-13-none-again.png)

<a id="walkthrough-composer-auth-14-none-result"></a>
### 14 · Verify automatic Authorization was removed

![14 · Verify automatic Authorization was removed](../media/v0.1.1-alpha.1/composer-auth/composer-auth-14-none-result.png)

<a id="walkthrough-composer-auth-15-headers"></a>
### 15 · Open Headers for an explicit field

![15 · Open Headers for an explicit field](../media/v0.1.1-alpha.1/composer-auth/composer-auth-15-headers.png)

<a id="walkthrough-composer-auth-16-explicit-name"></a>
### 16 · Enter the Authorization name

![16 · Enter the Authorization name](../media/v0.1.1-alpha.1/composer-auth/composer-auth-16-explicit-name.png)

<a id="walkthrough-composer-auth-17-explicit-value"></a>
### 17 · Enter the same public Bearer value

![17 · Enter the same public Bearer value](../media/v0.1.1-alpha.1/composer-auth/composer-auth-17-explicit-value.png)

<a id="walkthrough-composer-auth-18-add-header"></a>
### 18 · Add the explicit Header

![18 · Add the explicit Header](../media/v0.1.1-alpha.1/composer-auth/composer-auth-18-add-header.png)

<a id="walkthrough-composer-auth-19-none-keeps-header"></a>
### 19 · None does not remove explicit Authorization

![19 · None does not remove explicit Authorization](../media/v0.1.1-alpha.1/composer-auth/composer-auth-19-none-keeps-header.png)

<a id="walkthrough-composer-auth-20-delete-header"></a>
### 20 · Delete the explicit Authorization row

![20 · Delete the explicit Authorization row](../media/v0.1.1-alpha.1/composer-auth/composer-auth-20-delete-header.png)

<a id="walkthrough-composer-auth-21-header-removed"></a>
### 21 · Verify the request no longer carries authentication

![21 · Verify the request no longer carries authentication](../media/v0.1.1-alpha.1/composer-auth/composer-auth-21-header-removed.png)

<a id="walkthrough-composer-auth-22-clear-basic-type"></a>
### 22 · Return to Basic to clear example inputs

![22 · Return to Basic to clear example inputs](../media/v0.1.1-alpha.1/composer-auth/composer-auth-22-clear-basic-type.png)

<a id="walkthrough-composer-auth-23-clear-username"></a>
### 23 · Clear the example username

![23 · Clear the example username](../media/v0.1.1-alpha.1/composer-auth/composer-auth-23-clear-username.png)

<a id="walkthrough-composer-auth-24-clear-password"></a>
### 24 · Clear the example password

![24 · Clear the example password](../media/v0.1.1-alpha.1/composer-auth/composer-auth-24-clear-password.png)

<a id="walkthrough-composer-auth-25-clear-bearer-type"></a>
### 25 · Return to Bearer

![25 · Return to Bearer](../media/v0.1.1-alpha.1/composer-auth/composer-auth-25-clear-bearer-type.png)

<a id="walkthrough-composer-auth-26-clear-token"></a>
### 26 · Clear the example token

![26 · Clear the example token](../media/v0.1.1-alpha.1/composer-auth/composer-auth-26-clear-token.png)

<a id="walkthrough-composer-auth-27-finish-none"></a>
### 27 · Finish with None

![27 · Finish with None](../media/v0.1.1-alpha.1/composer-auth/composer-auth-27-finish-none.png)

<a id="walkthrough-composer-auth-28-no-capture"></a>
### 28 · Verify Composer did not create Capture records

![28 · Verify Composer did not create Capture records](../media/v0.1.1-alpha.1/composer-auth/composer-auth-28-no-capture.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-auth:end -->

<!-- recorded-walkthrough:composer-tools:start -->
<a id="walkthrough-composer-tools"></a>
## Recorded walkthrough: MCP send approval and Collection read/replace

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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
### 01 · Inspect Ask for this Client

![01 · Inspect Ask for this Client](../media/v0.1.1-alpha.1/composer-tools/composer-tools-01-ask-client.png)

<a id="walkthrough-composer-tools-02-composer"></a>
### 02 · Open Composer

![02 · Open Composer](../media/v0.1.1-alpha.1/composer-tools/composer-tools-02-composer.png)

<a id="walkthrough-composer-tools-03-create"></a>
### 03 · Create this Collection request

![03 · Create this Collection request](../media/v0.1.1-alpha.1/composer-tools/composer-tools-03-create.png)

<a id="walkthrough-composer-tools-04-rename-menu"></a>
### 04 · Open the request rename action

![04 · Open the request rename action](../media/v0.1.1-alpha.1/composer-tools/composer-tools-04-rename-menu.png)

<a id="walkthrough-composer-tools-05-name"></a>
### 05 · Save the name Guide UI request

![05 · Save the name Guide UI request](../media/v0.1.1-alpha.1/composer-tools/composer-tools-05-name.png)

<a id="walkthrough-composer-tools-06-url"></a>
### 06 · Enter the owned UI request URL

![06 · Enter the owned UI request URL](../media/v0.1.1-alpha.1/composer-tools/composer-tools-06-url.png)

<a id="walkthrough-composer-tools-07-header"></a>
### 07 · Add the public example Header

![07 · Add the public example Header](../media/v0.1.1-alpha.1/composer-tools/composer-tools-07-header.png)

<a id="walkthrough-composer-tools-08-ui-send"></a>
### 08 · Send through UI and read guide-ui-response

![08 · Send through UI and read guide-ui-response](../media/v0.1.1-alpha.1/composer-tools/composer-tools-08-ui-send.png)

<a id="walkthrough-composer-tools-09-saved"></a>
### 09 · Wait for the Collection to be saved

![09 · Wait for the Collection to be saved](../media/v0.1.1-alpha.1/composer-tools/composer-tools-09-saved.png)

<a id="walkthrough-composer-tools-10-query"></a>
### 10 · Query the actually saved Collection

![10 · Query the actually saved Collection](../media/v0.1.1-alpha.1/composer-tools/composer-tools-10-query.png)

<a id="walkthrough-composer-tools-11-send-ask"></a>
### 11 · Inspect the actual Composer send approval

![11 · Inspect the actual Composer send approval](../media/v0.1.1-alpha.1/composer-tools/composer-tools-11-send-ask.png)

<a id="walkthrough-composer-tools-12-send-deny"></a>
### 12 · Deny without sending a network request

![12 · Deny without sending a network request](../media/v0.1.1-alpha.1/composer-tools/composer-tools-12-send-deny.png)

<a id="walkthrough-composer-tools-13-send-again"></a>
### 13 · Request the same explicit destination again

![13 · Request the same explicit destination again](../media/v0.1.1-alpha.1/composer-tools/composer-tools-13-send-again.png)

<a id="walkthrough-composer-tools-14-send-allow"></a>
### 14 · Allow and verify the real POST and 201 result

![14 · Allow and verify the real POST and 201 result](../media/v0.1.1-alpha.1/composer-tools/composer-tools-14-send-allow.png)

<a id="walkthrough-composer-tools-15-ui-response-kept"></a>
### 15 · Tool results do not replace the current UI response

![15 · Tool results do not replace the current UI response](../media/v0.1.1-alpha.1/composer-tools/composer-tools-15-ui-response-kept.png)

<a id="walkthrough-composer-tools-16-replace-ask"></a>
### 16 · Inspect the actual Collection replacement scope

![16 · Inspect the actual Collection replacement scope](../media/v0.1.1-alpha.1/composer-tools/composer-tools-16-replace-ask.png)

<a id="walkthrough-composer-tools-17-replace-deny"></a>
### 17 · Deny and retain the original Collection

![17 · Deny and retain the original Collection](../media/v0.1.1-alpha.1/composer-tools/composer-tools-17-replace-deny.png)

<a id="walkthrough-composer-tools-18-replace-again"></a>
### 18 · Request replacement from the same read revision again

![18 · Request replacement from the same read revision again](../media/v0.1.1-alpha.1/composer-tools/composer-tools-18-replace-again.png)

<a id="walkthrough-composer-tools-19-replace-allow"></a>
### 19 · Allow and observe notification-driven UI synchronization

![19 · Allow and observe notification-driven UI synchronization](../media/v0.1.1-alpha.1/composer-tools/composer-tools-19-replace-allow.png)

<a id="walkthrough-composer-tools-20-query-latest"></a>
### 20 · Query the final saved revision

![20 · Query the final saved revision](../media/v0.1.1-alpha.1/composer-tools/composer-tools-20-query-latest.png)

<a id="walkthrough-composer-tools-21-mcp-settings"></a>
### 21 · Return to this MCP configuration

![21 · Return to this MCP configuration](../media/v0.1.1-alpha.1/composer-tools/composer-tools-21-mcp-settings.png)

<a id="walkthrough-composer-tools-22-disable"></a>
### 22 · Close the demo Client connection and Server

![22 · Close the demo Client connection and Server](../media/v0.1.1-alpha.1/composer-tools/composer-tools-22-disable.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-tools:end -->

<!-- recorded-walkthrough:composer-file-tools:start -->
<a id="walkthrough-composer-file-tools"></a>
## Recorded walkthrough: native Collection file Tools and confirmation

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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
### 01 · Create and name this request

![01 · Create and name this request](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-01-request.png)

<a id="walkthrough-composer-file-tools-02-url"></a>
### 02 · Enter the public test URL

![02 · Enter the public test URL](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-02-url.png)

<a id="walkthrough-composer-file-tools-03-header"></a>
### 03 · Save a public Header without sending

![03 · Save a public Header without sending](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-03-header.png)

<a id="walkthrough-composer-file-tools-04-export-ask"></a>
### 04 · Inspect Collection Export approval

![04 · Inspect Collection Export approval](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-04-export-ask.png)

<a id="walkthrough-composer-file-tools-05-export-deny"></a>
### 05 · Deny without writing a file

![05 · Deny without writing a file](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-05-export-deny.png)

<a id="walkthrough-composer-file-tools-06-export-cancel-ask"></a>
### 06 · Request Export again and allow it

![06 · Request Export again and allow it](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-06-export-cancel-ask.png)

<a id="walkthrough-composer-file-tools-07-save-cancel-panel"></a>
### 07 · Inspect Save in the owned directory

![07 · Inspect Save in the owned directory](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-07-save-cancel-panel.png)

<a id="walkthrough-composer-file-tools-08-save-cancelled"></a>
### 08 · Native Save cancellation does not export

![08 · Native Save cancellation does not export](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-08-save-cancelled.png)

<a id="walkthrough-composer-file-tools-09-export-save-ask"></a>
### 09 · Request the Export to save

![09 · Request the Export to save](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-09-export-save-ask.png)

<a id="walkthrough-composer-file-tools-10-save-file"></a>
### 10 · Save guide-tool-collection.json

![10 · Save guide-tool-collection.json](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-10-save-file.png)

<a id="walkthrough-composer-file-tools-11-export-result"></a>
### 11 · Inspect the file actually exported by the product

![11 · Inspect the file actually exported by the product](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-11-export-result.png)

<a id="walkthrough-composer-file-tools-12-import-deny-ask"></a>
### 12 · Inspect the separate Import approval

![12 · Inspect the separate Import approval](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-12-import-deny-ask.png)

<a id="walkthrough-composer-file-tools-13-import-denied"></a>
### 13 · Deny without importing the Collection

![13 · Deny without importing the Collection](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-13-import-denied.png)

<a id="walkthrough-composer-file-tools-14-open-cancel-ask"></a>
### 14 · Allow still requires an Open panel

![14 · Allow still requires an Open panel](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-14-open-cancel-ask.png)

<a id="walkthrough-composer-file-tools-15-open-cancel-panel"></a>
### 15 · Select only this flow’s exported file

![15 · Select only this flow’s exported file](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-15-open-cancel-panel.png)

<a id="walkthrough-composer-file-tools-16-open-cancelled"></a>
### 16 · Cancel Open and retain the original Collection

![16 · Cancel Open and retain the original Collection](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-16-open-cancelled.png)

<a id="walkthrough-composer-file-tools-cancel-preview-ask"></a>
### 17 · Review Import approval again

![17 · Review Import approval again](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-cancel-preview-ask.png)

<a id="walkthrough-composer-file-tools-cancel-preview-open"></a>
### 18 · Open the same product-created file

![18 · Open the same product-created file](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-cancel-preview-open.png)

<a id="walkthrough-composer-file-tools-cancel-preview-preview"></a>
### 19 · Read the actual import preview

![19 · Read the actual import preview](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-cancel-preview-preview.png)

<a id="walkthrough-composer-file-tools-cancel-preview-decision"></a>
### 20 · Cancel preview without changing the Collection

![20 · Cancel preview without changing the Collection](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-cancel-preview-decision.png)

<a id="walkthrough-composer-file-tools-confirm-preview-ask"></a>
### 21 · Review Import approval again

![21 · Review Import approval again](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-confirm-preview-ask.png)

<a id="walkthrough-composer-file-tools-confirm-preview-open"></a>
### 22 · Open the same product-created file

![22 · Open the same product-created file](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-confirm-preview-open.png)

<a id="walkthrough-composer-file-tools-confirm-preview-preview"></a>
### 23 · Read the actual import preview

![23 · Read the actual import preview](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-confirm-preview-preview.png)

<a id="walkthrough-composer-file-tools-confirm-preview-decision"></a>
### 24 · Confirm append without replacing the original request

![24 · Confirm append without replacing the original request](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-confirm-preview-decision.png)

<a id="walkthrough-composer-file-tools-auto-mode"></a>
### 25 · Select Auto for this repeated import

![25 · Select Auto for this repeated import](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-mode.png)

<a id="walkthrough-composer-file-tools-auto-open"></a>
### 26 · Auto still uses native Open

![26 · Auto still uses native Open](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-open.png)

<a id="walkthrough-composer-file-tools-auto-preview"></a>
### 27 · Auto still waits for product preview confirmation

![27 · Auto still waits for product preview confirmation](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-preview.png)

<a id="walkthrough-composer-file-tools-auto-confirm"></a>
### 28 · Confirm the second append and check distinct identities

![28 · Confirm the second append and check distinct identities](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-auto-confirm.png)

<a id="walkthrough-composer-file-tools-stop-server"></a>
### 29 · Disable this run’s MCP Server

![29 · Disable this run’s MCP Server](../media/v0.1.1-alpha.1/composer-file-tools/composer-file-tools-stop-server.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-file-tools:end -->

<!-- recorded-walkthrough:composer-persistence-save:start -->
<a id="walkthrough-composer-persistence-save"></a>
## Recorded walkthrough: saving complete request fields in a deep folder

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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
### 01 · Create a request in the third-level folder

![01 · Create a request in the third-level folder](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-01-new-request.png)

<a id="walkthrough-composer-persistence-save-02-name"></a>
### 02 · Name it Guide persisted fields

![02 · Name it Guide persisted fields](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-02-name.png)

<a id="walkthrough-composer-persistence-save-03-url"></a>
### 03 · Enter the owned URL with its Query

![03 · Enter the owned URL with its Query](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-03-url.png)

<a id="walkthrough-composer-persistence-save-04-method"></a>
### 04 · Select POST

![04 · Select POST](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-04-method.png)

<a id="walkthrough-composer-persistence-save-05-protocol"></a>
### 05 · Select HTTP/1.1 explicitly

![05 · Select HTTP/1.1 explicitly](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-05-protocol.png)

<a id="walkthrough-composer-persistence-save-06-header-x-guide-persist"></a>
### 06 · Add Header x-guide-persist

![06 · Add Header x-guide-persist](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-06-header-x-guide-persist.png)

<a id="walkthrough-composer-persistence-save-06-header-x-guide-disabled"></a>
### 07 · Add Header x-guide-disabled

![07 · Add Header x-guide-disabled](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-06-header-x-guide-disabled.png)

<a id="walkthrough-composer-persistence-save-07-disable-header"></a>
### 08 · Disable but retain the second Header

![08 · Disable but retain the second Header](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-07-disable-header.png)

<a id="walkthrough-composer-persistence-save-08-query"></a>
### 09 · Add scope=retained

![09 · Add scope=retained](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-08-query.png)

<a id="walkthrough-composer-persistence-save-09-json"></a>
### 10 · Save this JSON body

![10 · Save this JSON body](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-09-json.png)

<a id="walkthrough-composer-persistence-save-10-auth"></a>
### 11 · Save the public demonstration Bearer field

![11 · Save the public demonstration Bearer field](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-10-auth.png)

<a id="walkthrough-composer-persistence-save-11-saved"></a>
### 12 · Confirm saved state without sending

![12 · Confirm saved state without sending](../media/v0.1.1-alpha.1/composer-persistence-save/composer-persistence-save-11-saved.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-persistence-save:end -->

<!-- recorded-walkthrough:composer-persistence-restart:start -->
<a id="walkthrough-composer-persistence-restart"></a>
## Recorded walkthrough: verifying fields and sending after a real restart

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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
### 01 · Inspect retained folder level 1

![01 · Inspect retained folder level 1](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-01-folder-1.png)

<a id="walkthrough-composer-persistence-restart-01-folder-2"></a>
### 02 · Inspect retained folder level 2

![02 · Inspect retained folder level 2](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-01-folder-2.png)

<a id="walkthrough-composer-persistence-restart-01-folder-3"></a>
### 03 · Inspect retained folder level 3

![03 · Inspect retained folder level 3](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-01-folder-3.png)

<a id="walkthrough-composer-persistence-restart-02-select"></a>
### 04 · Open the same saved request

![04 · Open the same saved request](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-02-select.png)

<a id="walkthrough-composer-persistence-restart-03-headers"></a>
### 05 · Verify Header values and enabled states

![05 · Verify Header values and enabled states](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-03-headers.png)

<a id="walkthrough-composer-persistence-restart-04-query"></a>
### 06 · Verify the Query row without refilling it

![06 · Verify the Query row without refilling it](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-04-query.png)

<a id="walkthrough-composer-persistence-restart-05-body"></a>
### 07 · Verify the actually restored JSON body

![07 · Verify the actually restored JSON body](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-05-body.png)

<a id="walkthrough-composer-persistence-restart-06-auth"></a>
### 08 · Verify the restored public Auth field

![08 · Verify the restored public Auth field](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-06-auth.png)

<a id="walkthrough-composer-persistence-restart-07-send"></a>
### 09 · Send once after restart and verify actual bytes

![09 · Send once after restart and verify actual bytes](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-07-send.png)

<a id="walkthrough-composer-persistence-restart-08-clear-auth"></a>
### 10 · Clear the demonstration Auth value

![10 · Clear the demonstration Auth value](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-08-clear-auth.png)

<a id="walkthrough-composer-persistence-restart-09-none"></a>
### 11 · Restore Auth None and wait for saving

![11 · Restore Auth None and wait for saving](../media/v0.1.1-alpha.1/composer-persistence-restart/composer-persistence-restart-09-none.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-persistence-restart:end -->

<!-- recorded-walkthrough:composer-response-formatting:start -->
<a id="walkthrough-composer-response-formatting"></a>
## Recorded walkthrough: auto formatting, original text on failure and the 2 MiB preview

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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
### 01 · Create Guide HTML response

![01 · Create Guide HTML response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-01-new.png)

<a id="walkthrough-composer-response-formatting-html-02-name"></a>
### 02 · Name Guide HTML response

![02 · Name Guide HTML response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-02-name.png)

<a id="walkthrough-composer-response-formatting-html-03-url"></a>
### 03 · Enter the actual html URL

![03 · Enter the actual html URL](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-03-url.png)

<a id="walkthrough-composer-response-formatting-html-04-send"></a>
### 04 · Send and read the html response

![04 · Send and read the html response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-04-send.png)

<a id="walkthrough-composer-response-formatting-html-06-copy"></a>
### 05 · Copy and verify the actual html view

![05 · Copy and verify the actual html view](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-html-06-copy.png)

<a id="walkthrough-composer-response-formatting-javascript-01-new"></a>
### 06 · Create Guide JavaScript response

![06 · Create Guide JavaScript response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-01-new.png)

<a id="walkthrough-composer-response-formatting-javascript-02-name"></a>
### 07 · Name Guide JavaScript response

![07 · Name Guide JavaScript response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-02-name.png)

<a id="walkthrough-composer-response-formatting-javascript-03-url"></a>
### 08 · Enter the actual javascript URL

![08 · Enter the actual javascript URL](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-03-url.png)

<a id="walkthrough-composer-response-formatting-javascript-04-send"></a>
### 09 · Send and read the javascript response

![09 · Send and read the javascript response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-04-send.png)

<a id="walkthrough-composer-response-formatting-javascript-06-copy"></a>
### 10 · Copy and verify the actual javascript view

![10 · Copy and verify the actual javascript view](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-javascript-06-copy.png)

<a id="walkthrough-composer-response-formatting-xml-01-new"></a>
### 11 · Create Guide XML source

![11 · Create Guide XML source](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-01-new.png)

<a id="walkthrough-composer-response-formatting-xml-02-name"></a>
### 12 · Name Guide XML source

![12 · Name Guide XML source](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-02-name.png)

<a id="walkthrough-composer-response-formatting-xml-03-url"></a>
### 13 · Enter the actual xml URL

![13 · Enter the actual xml URL](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-03-url.png)

<a id="walkthrough-composer-response-formatting-xml-04-send"></a>
### 14 · Send and read the xml response

![14 · Send and read the xml response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-04-send.png)

<a id="walkthrough-composer-response-formatting-xml-05-format"></a>
### 15 · Try Format and retain the invalid XML source

![15 · Try Format and retain the invalid XML source](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-05-format.png)

<a id="walkthrough-composer-response-formatting-xml-06-copy"></a>
### 16 · Copy and verify the actual xml view

![16 · Copy and verify the actual xml view](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-xml-06-copy.png)

<a id="walkthrough-composer-response-formatting-large-01-new"></a>
### 17 · Create Guide large JSON

![17 · Create Guide large JSON](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-01-new.png)

<a id="walkthrough-composer-response-formatting-large-02-name"></a>
### 18 · Name Guide large JSON

![18 · Name Guide large JSON](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-02-name.png)

<a id="walkthrough-composer-response-formatting-large-03-url"></a>
### 19 · Enter the actual large URL

![19 · Enter the actual large URL](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-03-url.png)

<a id="walkthrough-composer-response-formatting-large-04-send"></a>
### 20 · Send and read the large response

![20 · Send and read the large response](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-04-send.png)

<a id="walkthrough-composer-response-formatting-large-06-copy"></a>
### 21 · Copy and verify the actual large view

![21 · Copy and verify the actual large view](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-large-06-copy.png)

<a id="walkthrough-composer-response-formatting-restore-html"></a>
### 22 · Return to HTML and retain its formatted view

![22 · Return to HTML and retain its formatted view](../media/v0.1.1-alpha.1/composer-response-formatting/composer-response-formatting-restore-html.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:composer-response-formatting:end -->

<!-- workflow-screenshots:composer-formatting-workflow:start -->
<a id="walkthrough-composer-formatting-workflow"></a>

## Additional walkthrough: response formatting and preview limits

These step images come from the same actual App <code>0.1.1-alpha.1</code> (macOS x64) walkthrough. Images retain the App language and theme used at capture time; open them at full size for detail.

Loopback addresses, ports and generated IDs belong to this walkthrough; use your own authorized environment. Platforms and branches not shown still need acceptance.

<a id="walkthrough-composer-formatting-workflow-step-001"></a>
### 01 · Automatically format HTML

![Automatically format HTML](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-001.png)

<a id="walkthrough-composer-formatting-workflow-step-002"></a>
### 02 · Automatically format JavaScript

![Automatically format JavaScript](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-002.png)

<a id="walkthrough-composer-formatting-workflow-step-003"></a>
### 03 · Inspect CSS above the automatic-formatting limit

![Inspect CSS above the automatic-formatting limit](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-003.png)

<a id="walkthrough-composer-formatting-workflow-step-004"></a>
### 04 · Format CSS manually

![Format CSS manually](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-004.png)

<a id="walkthrough-composer-formatting-workflow-step-005"></a>
### 05 · Retain XML source when formatting fails

![Retain XML source when formatting fails](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-005.png)

<a id="walkthrough-composer-formatting-workflow-step-006"></a>
### 06 · Restore the document’s formatted view

![Restore the document’s formatted view](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-006.png)

<a id="walkthrough-composer-formatting-workflow-step-007"></a>
### 07 · Check the 2 MiB preview and disabled Format

![Check the 2 MiB preview and disabled Format](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-007.png)

<!-- workflow-screenshots:composer-formatting-workflow:end -->
