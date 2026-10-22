# Composer: build and send requests

[Guide directory](../README.en.md) · [Capture](capture.md)

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

Prepare an HTTP or HTTPS endpoint you are authorized to access. The example is `http://127.0.0.1:58053/e2e/composer/response-section-collapse`. The App does not start this service; use your own complete address.

1. <a id="walkthrough"></a>Open Composer and click the plus button at the top of Collection in box 1 to create a request.

   ![Send your first request · 1](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-001.annotated.png)

2. The new request is named `Untitled`. Keep GET selected; box 1 marks the URL field. Nothing has been sent yet.

   ![Send your first request · 2](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-002.annotated.png)

3. Enter the test URL in box 1, keep Auto selected and click Send in box 2. If `http://` is already displayed separately on the left, edit only the host, port and path rather than duplicating the scheme.

   ![Send your first request · 3](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-003.annotated.png)

4. Wait for this request’s result in the response pane below. The example returns `200` with JSON containing `message: response-sections` and `items`. Composer displays the response directly; it is not automatically added to Capture.

   ![Send your first request · 4](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-004.png)

5. Open Headers in the response pane and distinguish Response Headers from Request Headers. The example returns `application/json` and two Set-Cookie headers; actual values depend on your service.

   ![Send your first request · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-005.png)

`4xx` and `5xx` are HTTP responses from the server, not evidence that nothing was sent. Investigate DNS, connection or TLS errors from their actual messages instead of toggling Recording.


<a id="编辑-query-与-headers"></a>
## Edit Query and Headers

<a id="walkthrough-composer-fields"></a><a id="walkthrough-composer-replay"></a>
Open the test request you want to edit. The example uses `http://127.0.0.1:56993/e2e/composer/fields/json?entry=url`; substitute your endpoint. Query table rows append to existing URL parameters without deduplicating names. Click Send after each change to use it.

1. <a id="walkthrough-composer-fields-01-new"></a><a id="walkthrough-composer-fields-02-header"></a><a id="walkthrough-composer-replay-01-open"></a><a id="walkthrough-composer-replay-02-new"></a><a id="walkthrough-composer-replay-04-post"></a>Choose POST in the method control in box 1. Open Headers, enter `x-e2e-current` and `enabled` in the name and value fields marked box 1, then confirm the row. Box 1 in the last image marks the enabled Header.

   ![Edit Query and Headers · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-039.annotated.png)

   ![Edit Query and Headers · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-040.annotated.png)

   ![Edit Query and Headers · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-041.annotated.png)

   ![Edit Query and Headers · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-042.annotated.png)

2. Add `Content-Type: application/json`. Box 1 is the confirmed Content-Type row. It describes the request body type; it does not create a JSON body for you.

   ![Edit Query and Headers · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-045.annotated.png)

3. <a id="walkthrough-composer-fields-03-query"></a><a id="walkthrough-composer-replay-05-query"></a><a id="walkthrough-composer-replay-06-query-name"></a><a id="walkthrough-composer-replay-07-query-value"></a><a id="walkthrough-composer-replay-08-add-query"></a>Open Query, enter `entry` in Name in box 1 and `table` in Value in box 1, then confirm the row. Box 1 in the last image is the added `entry=table`, not a copy of the existing URL parameter.

   ![Edit Query and Headers · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-046.annotated.png)

   ![Edit Query and Headers · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-047.annotated.png)

   ![Edit Query and Headers · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-048.annotated.png)

   ![Edit Query and Headers · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-049.annotated.png)

4. <a id="walkthrough-composer-replay-09-duplicate-name"></a><a id="walkthrough-composer-replay-10-duplicate-value"></a><a id="walkthrough-composer-replay-11-add-duplicate"></a>Add another row, `entry=again`, in the same way. Box 1 marks its name, value and completed row in order. Keep both rows enabled; the second does not replace the first.

   ![Edit Query and Headers · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-050.annotated.png)

   ![Edit Query and Headers · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-051.annotated.png)

   ![Edit Query and Headers · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-052.annotated.png)

5. <a id="walkthrough-composer-fields-04-send-enabled"></a><a id="walkthrough-composer-replay-03-url"></a><a id="walkthrough-composer-replay-12-send-query"></a>Check the existing `entry=url` in the URL in box 1, enter the JSON body from the next section and click Send. The sent URL contains `entry=url&entry=table&entry=again`. A previous response still visible while editing is not the result of the new request.

   ![Edit Query and Headers · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-053.annotated.png)

   ![Edit Query and Headers · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-059.png)

6. <a id="walkthrough-composer-fields-05-query-off"></a><a id="walkthrough-composer-fields-06-header-off"></a>To omit a field temporarily, clear its row’s checkbox in box 1. The Query images disable the two rows separately; the Header image disables `x-e2e-current`. The values remain saved but are not sent.

   ![Edit Query and Headers · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-083.annotated.png)

   ![Edit Query and Headers · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-084.annotated.png)

   ![Edit Query and Headers · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-085.annotated.png)

7. <a id="walkthrough-composer-fields-07-send-disabled"></a>Select Body None in box 1 and change the URL in box 1 to `/e2e/composer/fields/disabled` without parameters, then Send. Disabled rows are omitted and the body is empty. Disabling Query rows does not remove parameters already present in a URL, so inspect the address separately.

   ![Edit Query and Headers · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-086.annotated.png)

   ![Edit Query and Headers · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-087.annotated.png)

   ![Edit Query and Headers · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-088.png)

8. <a id="walkthrough-composer-fields-09-query-delete"></a>When the Query rows are no longer needed, remove each with its row-end delete button. Box 1 marks the Query tab; check the count updates. Deleting differs from temporarily disabling a row.

   ![Edit Query and Headers · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-089.annotated.png)

   ![Edit Query and Headers · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-090.annotated.png)

9. <a id="walkthrough-composer-fields-08-header-delete"></a>Delete the custom Header. Box 1 in the first image shows the retained Content-Type row; after removing that too, box 1 in the second image returns to the empty name field. Remove only the fields you no longer need.

   ![Edit Query and Headers · 9](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-091.annotated.png)

   ![Edit Query and Headers · 9](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-092.annotated.png)


<a id="选择请求正文"></a>
## Select a request body

<a id="walkthrough-composer-editing"></a>
First add the Headers and two Query rows described above, using POST. The following examples send JSON, Text and Form through the service on port `56993`. Changing body type does not automatically change Content-Type or Send.

1. <a id="walkthrough-composer-editing-01-open"></a><a id="walkthrough-composer-editing-02-new"></a><a id="walkthrough-composer-editing-03-url"></a><a id="walkthrough-composer-editing-04-method"></a><a id="walkthrough-composer-editing-05-json-header"></a><a id="walkthrough-composer-editing-06-body"></a><a id="walkthrough-composer-editing-07-json"></a>Set the URL in box 1 to `/e2e/composer/fields/json?entry=url` and the Content-Type row in box 1 to `application/json`. Open Body and choose JSON in the type control in box 1.

   ![Select a request body · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-053.annotated.png)

   ![Select a request body · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-054.annotated.png)

   ![Select a request body · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-055.png)

   ![Select a request body · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-056.annotated.png)

2. <a id="walkthrough-composer-editing-08-json-input"></a><a id="walkthrough-composer-editing-09-json-send"></a><a id="walkthrough-composer-fields-10-json"></a><a id="walkthrough-composer-fields-11-format"></a><a id="walkthrough-composer-fields-12-send-json"></a>Enter `{"message":"formatted-request","count":2}` in the editor in box 1. Click Format, compare line breaks and indentation in that area, then Send. Format does not send the request for you.

   ![Select a request body · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-057.annotated.png)

   ![Select a request body · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-058.annotated.png)

   ![Select a request body · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-059.png)

3. <a id="walkthrough-composer-editing-10-text"></a><a id="walkthrough-composer-editing-11-text-header"></a><a id="walkthrough-composer-editing-11a-text-url"></a><a id="walkthrough-composer-editing-12-text-send"></a><a id="walkthrough-composer-editing-13-form"></a><a id="walkthrough-composer-replay-13-text-url"></a><a id="walkthrough-composer-replay-14-put"></a><a id="walkthrough-composer-replay-15-body"></a><a id="walkthrough-composer-replay-16-text-mode"></a><a id="walkthrough-composer-replay-17-text-partial"></a><a id="walkthrough-composer-replay-18-text-complete"></a><a id="walkthrough-composer-replay-19-send-text"></a>For Text, use `/e2e/composer/fields/text?entry=url`. Box 1 marks the URL, Content-Type, body type and editor in order. Explicitly set `text/plain`, choose Text, enter `Hello text` and Send. Text does not add that Header automatically.

   ![Select a request body · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-060.annotated.png)

   ![Select a request body · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-061.annotated.png)

   ![Select a request body · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-063.annotated.png)

   ![Select a request body · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-064.annotated.png)

   ![Select a request body · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-065.png)

4. <a id="walkthrough-composer-editing-14-form-name"></a><a id="walkthrough-composer-editing-15-form-ready"></a><a id="walkthrough-composer-editing-16-form-header"></a><a id="walkthrough-composer-editing-16a-form-url"></a>For Form, use `/e2e/composer/fields/form?entry=url`, set Content-Type to `application/x-www-form-urlencoded` and choose Form. Box 1 marks each of these three settings.

   ![Select a request body · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-066.annotated.png)

   ![Select a request body · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-067.annotated.png)

   ![Select a request body · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-069.annotated.png)

5. <a id="walkthrough-composer-editing-17-form-send"></a>In a new Form row, enter the name in box 1 and value in box 2, adding `name=Interceptor` and `ready=true`. Box 1 marks each completed row. Keep both enabled and Send; the body is `name=Interceptor&ready=true`.

   ![Select a request body · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-070.annotated.png)

   ![Select a request body · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-071.annotated.png)

   ![Select a request body · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-072.annotated.png)

   ![Select a request body · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-073.annotated.png)

   ![Select a request body · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-074.png)

6. <a id="walkthrough-composer-fields-13-none"></a><a id="walkthrough-composer-fields-14-send-none"></a>Select None in box 1 when no body is needed, then Send to the intended endpoint. None excludes the previously entered body rather than sending the old content type with retained text.

   ![Select a request body · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-086.annotated.png)

   ![Select a request body · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-088.png)

After selecting JSON, Text or Form, check the endpoint requirements, Headers and URL. Scroll within long editors as needed. Configure authentication separately; do not substitute a Query token for Auth.


<a id="使用认证"></a>
## Configure authentication

<a id="walkthrough-composer-editing-18-auth"></a><a id="walkthrough-composer-editing-19-bearer"></a><a id="walkthrough-composer-editing-20-basic"></a><a id="walkthrough-composer-auth"></a><a id="walkthrough-composer-editing-21-none"></a>
Use an authorized endpoint that requires authentication. The example `http://127.0.0.1:57177/e2e/composer/auth` accepts only the local demonstration values `workflow-user`, `public-loopback-password` and `public-loopback-token`. Never send real credentials to this example address.

1. <a id="walkthrough-composer-auth-05-auth-tab"></a><a id="walkthrough-composer-auth-07-username"></a><a id="walkthrough-composer-auth-01-composer"></a><a id="walkthrough-composer-auth-02-new"></a><a id="walkthrough-composer-auth-03-url"></a><a id="walkthrough-composer-auth-04-none"></a><a id="walkthrough-composer-auth-16-explicit-name"></a><a id="walkthrough-composer-auth-23-clear-username"></a>Enter the authentication URL in box 1 and send with Auth None first. A `401` response means this endpoint requires authentication; configure it before sending again.

   ![Configure authentication · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-018.annotated.png)

   ![Configure authentication · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-019.png)

2. <a id="walkthrough-composer-auth-06-basic"></a>Open request Auth and choose Basic in the authentication selector in box 1. Changing the type does not send a request.

   ![Configure authentication · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-020.annotated.png)

   ![Configure authentication · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-021.annotated.png)

3. <a id="walkthrough-composer-auth-08-password"></a><a id="walkthrough-composer-auth-09-basic-result"></a><a id="walkthrough-composer-auth-24-clear-password"></a>Enter `workflow-user` in Username in box 1, then `public-loopback-password` in Password in box 2 of the second image. Check both before Send; do not duplicate this authentication in Headers.

   ![Configure authentication · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-022.annotated.png)

   ![Configure authentication · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-023.annotated.png)

4. <a id="walkthrough-composer-auth-10-bearer"></a>Click Send and check the new response status is `200`. A server response establishes whether authentication was accepted; populated input fields alone do not.

   ![Configure authentication · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-024.png)

5. <a id="walkthrough-composer-auth-11-token"></a><a id="walkthrough-composer-auth-12-bearer-result"></a><a id="walkthrough-composer-auth-13-none-again"></a><a id="walkthrough-composer-auth-14-none-result"></a><a id="walkthrough-composer-auth-25-clear-bearer-type"></a><a id="walkthrough-composer-auth-26-clear-token"></a>For Bearer, select Bearer in box 1, then enter the public example `public-loopback-token` in the Token field in box 1 of the next image. Send and check this response’s `200` rather than relying on the previous Basic result.

   ![Configure authentication · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-026.annotated.png)

   ![Configure authentication · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-027.annotated.png)

   ![Configure authentication · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-028.png)

6. <a id="walkthrough-composer-auth-15-headers"></a><a id="walkthrough-composer-auth-17-explicit-value"></a><a id="walkthrough-composer-auth-19-none-keeps-header"></a><a id="walkthrough-composer-auth-27-finish-none"></a>Switch the authentication type in box 1 back to None and Send again. The derived Authorization header is no longer sent, so this example returns `401`. Previously entered Basic/Bearer values do not mean those modes remain active.

   ![Configure authentication · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-030.annotated.png)

   ![Configure authentication · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-031.png)

7. <a id="walkthrough-composer-auth-18-add-header"></a><a id="walkthrough-composer-auth-20-delete-header"></a><a id="walkthrough-composer-auth-21-header-removed"></a><a id="walkthrough-composer-auth-22-clear-basic-type"></a>With None selected, open Headers. Enter `Authorization` in Name in box 1, then `Bearer public-loopback-token` in the value field marked box 1 and confirm the row. Box 1 in the last annotated image marks the complete enabled row. Send still returns `200`: None does not remove a Header you explicitly added.

   ![Configure authentication · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-032.annotated.png)

   ![Configure authentication · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-033.annotated.png)

   ![Configure authentication · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-034.annotated.png)

   ![Configure authentication · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-035.annotated.png)

   ![Configure authentication · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-036.png)

8. <a id="walkthrough-composer-auth-28-no-capture"></a>Delete the explicit Authorization row; box 1 now shows the empty new-row field. Send again to check the response returns to `401`. Finish with None selected and remove authentication values you no longer need.

   ![Configure authentication · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-037.annotated.png)

   ![Configure authentication · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-038.png)

Basic is encoding, not encryption. Use HTTPS for real credentials and avoid including them in URLs, screenshots or shared files.


<a id="查看响应"></a>
## Inspect the response

<a id="walkthrough-composer-inspection"></a><a id="walkthrough-composer-inspection-35-format-url"></a><a id="walkthrough-composer-inspection-36-css-send"></a><a id="walkthrough-composer-inspection-37-css-copy-before"></a><a id="walkthrough-composer-inspection-38-format"></a><a id="walkthrough-composer-inspection-39-css-copy-after"></a>
Complete the GET request above, then inspect Body, Headers, Cookies and Timing for that response. Changing a view neither sends another request nor changes the server response.

1. <a id="walkthrough-composer-inspection-01-open"></a><a id="walkthrough-composer-inspection-02-new"></a><a id="walkthrough-composer-inspection-03-url"></a><a id="walkthrough-composer-inspection-04-header-name"></a><a id="walkthrough-composer-inspection-05-header-value"></a><a id="walkthrough-composer-inspection-06-add-header"></a><a id="walkthrough-composer-inspection-07-send"></a><a id="walkthrough-composer-inspection-08-headers"></a>Open response Headers. Response Headers contains the received headers; Request Headers contains the headers sent for this request. Neither is the request editor above.

   ![Inspect the response · 1](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-005.png)

2. <a id="walkthrough-composer-inspection-09-response-collapse"></a><a id="walkthrough-composer-inspection-10-request-collapse"></a>Click the Response Headers heading in box 1 to collapse it. Request Headers in box 2 stays expanded; each heading controls only its own section.

   ![Inspect the response · 2](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-007.annotated.png)

3. <a id="walkthrough-composer-inspection-11-response-expand"></a><a id="walkthrough-composer-inspection-12-request-expand"></a><a id="walkthrough-composer-inspection-13-cookies"></a>Click box 2 to collapse Request Headers, then box 1 to reopen Response Headers. The other section does not reopen with it.

   ![Inspect the response · 3](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-008.annotated.png)

   ![Inspect the response · 3](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-009.annotated.png)

4. <a id="walkthrough-composer-inspection-14-cookies-collapse"></a><a id="walkthrough-composer-inspection-15-cookies-expand"></a><a id="walkthrough-composer-inspection-16-timing"></a>Switch to Cookies. Box 1 marks Response Cookies, including `e2e_session=section-value` and `e2e_theme=light` in this example. Collapse and reopen the heading without changing the cookies.

   ![Inspect the response · 4](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-010.annotated.png)

   ![Inspect the response · 4](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-011.annotated.png)

   ![Inspect the response · 4](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-012.png)

5. <a id="walkthrough-composer-inspection-17-timing-collapse"></a><a id="walkthrough-composer-inspection-18-connection-collapse"></a><a id="walkthrough-composer-inspection-19-timing-expand"></a><a id="walkthrough-composer-inspection-20-connection-expand"></a>Switch to Timing: box 1 marks Timing and box 2 marks Connection. Collapse and reopen each heading independently, reading timings and connection details for the current request.

   ![Inspect the response · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-013.annotated.png)

   ![Inspect the response · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-014.annotated.png)

   ![Inspect the response · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-015.annotated.png)

   ![Inspect the response · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-016.annotated.png)

   ![Inspect the response · 5](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-017.png)

6. <a id="walkthrough-composer-inspection-21-body"></a><a id="walkthrough-composer-inspection-22-tree"></a><a id="walkthrough-composer-inspection-23-tree-collapse"></a><a id="walkthrough-composer-inspection-24-tree-expand"></a><a id="walkthrough-composer-inspection-25-tree-menu"></a><a id="walkthrough-composer-inspection-26-tree-copy-value"></a>Return to Body. Box 1 marks the body viewer. Inspect Pretty, choose Tree and expand `items` to inspect objects and arrays. Click the root node in box 1 to collapse the tree. These are views of the same JSON, not new requests.

   ![Inspect the response · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-018.annotated.png)

   ![Inspect the response · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-019.annotated.png)

   ![Inspect the response · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-020.annotated.png)

   ![Inspect the response · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-021.annotated.png)

   ![Inspect the response · 6](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-022.png)

7. <a id="walkthrough-composer-inspection-27-raw"></a><a id="walkthrough-composer-inspection-28-copy-raw"></a>Switch to Raw. Box 1 contains the original response text and box 2 is Copy. Copy the content in this mode rather than treating one Tree value as the complete response.

   ![Inspect the response · 7](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-023.annotated.png)

   ![Inspect the response · 7](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-024.png)

8. <a id="walkthrough-composer-inspection-29-hex"></a><a id="walkthrough-composer-inspection-30-copy-hex"></a>Switch to Hex to inspect the bytes in box 1 and use Copy as needed. Hex is a byte view, not a transformation of the network response.

   ![Inspect the response · 8](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-025.annotated.png)

   ![Inspect the response · 8](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-026.png)

9. <a id="walkthrough-composer-inspection-31-fullscreen"></a><a id="walkthrough-composer-inspection-32-exit-fullscreen"></a>Open fullscreen from the body toolbar for more space. Escape or Close returns to the same Hex view in box 1. Fullscreen does not remove preview limits.

   ![Inspect the response · 9](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-027.png)

   ![Inspect the response · 9](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-028.annotated.png)

10. <a id="walkthrough-composer-inspection-33-collection-drag"></a><a id="walkthrough-composer-inspection-34-response-drag"></a>Drag the splitter between request and response to adjust response height, and the splitter beside Collection to adjust its width. Resizing does not switch requests, change fields or Send.

    ![Inspect the response · 10](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-029.png)

    ![Inspect the response · 10](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-016.png)

Continue below for response formatting, invalid formats and large-body limits. Before comparing content, check the selected request, response tab and view mode.


<a id="walkthrough-composer-response-formatting"></a>
## Inspect response formatting, format errors and preview limits

Response bodies follow the same rules: small HTML/JavaScript may format automatically, invalid XML retains its source, and bodies above `2 MiB` show a limited preview. These images use the same English requests as the next section.

1. <a id="walkthrough-composer-response-formatting-html-01-new"></a><a id="walkthrough-composer-response-formatting-html-02-name"></a><a id="walkthrough-composer-response-formatting-html-03-url"></a><a id="walkthrough-composer-response-formatting-html-04-send"></a><a id="walkthrough-composer-response-formatting-html-06-copy"></a><a id="walkthrough-composer-response-formatting-javascript-01-new"></a><a id="walkthrough-composer-response-formatting-javascript-02-name"></a><a id="walkthrough-composer-response-formatting-javascript-03-url"></a><a id="walkthrough-composer-response-formatting-javascript-04-send"></a><a id="walkthrough-composer-response-formatting-javascript-06-copy"></a>Send the HTML and JavaScript requests and inspect box 1. HTML shows formatted nesting; short JavaScript may still fit on one line, so line count alone does not establish failure.

   ![Inspect response formatting, format errors and preview limits · 1](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-001.annotated.png)

   ![Inspect response formatting, format errors and preview limits · 1](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-002.annotated.png)

2. <a id="walkthrough-composer-response-formatting-xml-01-new"></a><a id="walkthrough-composer-response-formatting-xml-02-name"></a><a id="walkthrough-composer-response-formatting-xml-03-url"></a><a id="walkthrough-composer-response-formatting-xml-04-send"></a><a id="walkthrough-composer-response-formatting-xml-05-format"></a><a id="walkthrough-composer-response-formatting-xml-06-copy"></a>After trying Format on invalid XML, inspect the failure notice and unchanged `<root><` in box 1. Formatting is not a repair tool that turns invalid input into valid XML.

   ![Inspect response formatting, format errors and preview limits · 2](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-005.annotated.png)

3. <a id="walkthrough-composer-response-formatting-large-01-new"></a><a id="walkthrough-composer-response-formatting-large-02-name"></a><a id="walkthrough-composer-response-formatting-large-03-url"></a><a id="walkthrough-composer-response-formatting-large-04-send"></a><a id="walkthrough-composer-response-formatting-large-06-copy"></a>Above `2 MiB`, Format in box 1 is disabled and box 2 shows the limited preview and its notice. Copy uses the displayed portion, not the complete response; this Composer viewer has no Save body action.

   ![Inspect response formatting, format errors and preview limits · 3](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-007.annotated.png)

4. <a id="walkthrough-composer-response-formatting-restore-html"></a>Return to the earlier CSS request. Its body in box 1 retains its own formatted view rather than inheriting another request’s content or error state.

   ![Inspect response formatting, format errors and preview limits · 4](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-006.annotated.png)


<a id="walkthrough-composer-formatting-workflow"></a>
## Manually format a body above the automatic threshold

Format changes the response view, not the network response. Send the request first, then choose automatic viewing or manual Format according to its size and format.

1. <a id="walkthrough-composer-formatting-workflow-step-001"></a><a id="walkthrough-composer-formatting-workflow-step-002"></a>Open an HTML or JavaScript response and inspect the body area in box 1. When automatic formatting applies, this area displays formatted indentation without another send.

   ![Automatically format HTML](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-001.annotated.png)

   ![Automatically format JavaScript](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-002.annotated.png)

2. <a id="walkthrough-composer-formatting-workflow-step-003"></a><a id="walkthrough-composer-formatting-workflow-step-004"></a>Open CSS above the automatic-formatting threshold but still within the complete preview limit, then scroll to the final `.a` rule. Box 1 marks Format and box 2 marks the body. Click Format and compare line breaks and indentation at the end.

   ![Inspect CSS above the automatic-formatting limit](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-003.annotated.png)

   ![Format CSS manually](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-004.annotated.png)

3. <a id="walkthrough-composer-formatting-workflow-step-005"></a><a id="walkthrough-composer-formatting-workflow-step-006"></a>If invalid XML cannot be formatted, inspect the failure notice and retained source in box 1. Switch back to the previous CSS request and scroll to the end: the manually formatted line breaks and indentation remain without running Format again.

   ![Retain XML source when formatting fails](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-005.annotated.png)

   ![Restore the CSS request’s formatted view](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-006.annotated.png)

4. <a id="walkthrough-composer-formatting-workflow-step-007"></a>When a body exceeds `2 MiB` and its preview is truncated, the Format button in box 1 is disabled. Box 2 marks the truncation notices and current body preview. Do not treat Copy as the complete response; Composer’s response viewer has no Save body action.

   ![Check the 2 MiB preview and disabled Format](../media/v0.1.1-alpha.1/composer-formatting-workflow/step-007.annotated.png)

<a id="管理-collection"></a>
## Manage a Collection

<a id="walkthrough-composer-editing-24-move"></a><a id="walkthrough-composer-collection"></a>
Collection automatically saves requests and folders; there is no separate Save button. The example uses `E2E level 1 → E2E level 2 → E2E level 3`. Use names appropriate for your project.

1. <a id="walkthrough-composer-collection-01-open"></a><a id="walkthrough-composer-collection-02-folder-1"></a><a id="walkthrough-composer-collection-02-folder-2"></a><a id="walkthrough-composer-collection-02-folder-3"></a>Click New folder in box 1, enter `E2E level 1` in the inline name field in box 1 and press Enter. Box 1 in the last image marks the new folder.

   ![Manage a Collection · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-001.annotated.png)

   ![Manage a Collection · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-002.annotated.png)

   ![Manage a Collection · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-003.annotated.png)

2. <a id="walkthrough-composer-collection-03-depth-limit"></a><a id="walkthrough-composer-collection-04-request-1"></a><a id="walkthrough-composer-collection-04-request-2"></a>Open the first-level folder menu, click New folder in box 1 and create `E2E level 2`. Use the same command in that folder to create `E2E level 3`, pressing Enter after each name.

   ![Manage a Collection · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-004.annotated.png)

   ![Manage a Collection · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-005.annotated.png)

   ![Manage a Collection · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-006.annotated.png)

   ![Manage a Collection · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-007.png)

3. <a id="walkthrough-composer-collection-05-switch-1"></a><a id="walkthrough-composer-collection-05-switch-2"></a>In the third-level menu, New folder in box 1 is disabled: a fourth level is not allowed. Click New request in box 2; the next image shows `Untitled` in box 1.

   ![Manage a Collection · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-008.annotated.png)

   ![Manage a Collection · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-009.annotated.png)

4. <a id="walkthrough-composer-collection-06-rename-folder"></a>Enter `http://127.0.0.1:56993/e2e/collection/first` in box 1, replacing it with your own address. Edit only; do not click Send yet.

   ![Manage a Collection · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-010.annotated.png)

5. <a id="walkthrough-composer-editing-22-rename"></a><a id="walkthrough-composer-editing-23-folder"></a><a id="walkthrough-composer-collection-07-reorder"></a>Right-click the request, choose Rename in box 1, then enter `E2E renamed request` in the inline name field in box 1 and press Enter. Leave Composer and return to check the name and URL are retained.

   ![Manage a Collection · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-011.annotated.png)

   ![Manage a Collection · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-012.annotated.png)

   ![Manage a Collection · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-013.png)

6. Selecting the folder in box 1 changes where the next item will be created; the current URL in box 2 remains unchanged. Click empty tree space to clear the folder target, or drag the Collection splitter to resize it.

   ![Manage a Collection · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-014.annotated.png)

   ![Manage a Collection · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-015.png)

   ![Manage a Collection · 6](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-016.png)

7. Create a sibling request with `/e2e/collection/second`. Box 1 marks the selected request and box 2 its own URL. Switch between both requests and check each retains its content.

   ![Manage a Collection · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-094.annotated.png)

   ![Manage a Collection · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-095.annotated.png)

   ![Manage a Collection · 7](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-096.png)

8. <a id="walkthrough-composer-collection-11-delete-request"></a>Rename the third-level folder in box 1 to `E2E renamed folder`, then drag the second request before the first. Check the sibling order changes without replacing the current URL.

   ![Manage a Collection · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-097.annotated.png)

   ![Manage a Collection · 8](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-098.png)

9. <a id="walkthrough-composer-collection-12-delete-folder"></a>Export anything you need first, then right-click an unwanted request and choose Delete in box 1. Check that only the selected request is removed.

   ![Manage a Collection · 9](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-099.annotated.png)

   ![Manage a Collection · 9](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-100.png)

10. To delete a folder, choose Delete in box 1 of its menu. Its requests are deleted with it; wait for automatic saving to finish before leaving.

    ![Manage a Collection · 10](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-101.annotated.png)

    ![Manage a Collection · 10](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-102.png)


<a id="walkthrough-composer-persistence-save"></a>
## Save a request with all its fields

Collection saves each request’s fields automatically. The following Query, Header and Auth values belong only to the local example, not real accounts. The request starts as `Untitled`; the later Tool operations rename it to `Collection MCP`.

1. <a id="walkthrough-composer-persistence-save-01-new-request"></a><a id="walkthrough-composer-persistence-save-02-name"></a><a id="walkthrough-composer-persistence-save-03-url"></a><a id="walkthrough-composer-persistence-save-04-method"></a><a id="walkthrough-composer-persistence-save-05-protocol"></a>Create a request and enter your test URL in box 1. The example is `http://127.0.0.1:60293/e2e/collection/no-send?token=collection-query-private-value`. Select POST and HTTP/1.1 in the respective box 1 controls without sending yet.

   ![Save a request with all its fields · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-001.annotated.png)

   ![Save a request with all its fields · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-002.annotated.png)

   ![Save a request with all its fields · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-003.annotated.png)

   ![Save a request with all its fields · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-004.annotated.png)

2. <a id="walkthrough-composer-persistence-save-06-header-x-guide-persist"></a><a id="walkthrough-composer-persistence-save-06-header-x-guide-disabled"></a><a id="walkthrough-composer-persistence-save-07-disable-header"></a>Add two Headers: the local example Authorization and `x-e2e-disabled: omitted`. Box 1 marks each added row. Disable the second row; it remains saved but is excluded from sending.

   ![Save a request with all its fields · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-005.annotated.png)

   ![Save a request with all its fields · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-006.annotated.png)

   ![Save a request with all its fields · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-007.annotated.png)

3. <a id="walkthrough-composer-persistence-save-08-query"></a>Add `scope=retained` in Query. Box 1 is the enabled new row. The existing URL parameter and this table row are saved separately.

   ![Save a request with all its fields · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-008.annotated.png)

4. <a id="walkthrough-composer-persistence-save-10-auth"></a>Choose Bearer in box 1, then enter the local-only value `collection-auth-private-value` in the Token field in box 1. Do not substitute real credentials in the tutorial example.

   ![Save a request with all its fields · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-009.annotated.png)

   ![Save a request with all its fields · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-010.annotated.png)

5. <a id="walkthrough-composer-persistence-save-09-json"></a>Choose JSON in Body and enter `{"collection":"owned-body"}` in box 1. Let the fields save automatically without clicking Send.

   ![Save a request with all its fields · 5](../media/v0.1.1-alpha.1/composer-saved-request-english/step-011.annotated.png)

6. <a id="walkthrough-composer-persistence-save-11-saved"></a>To organize the Collection, create another request and move it into `Collection group`. Box 1 marks its URL, the new folder and the folder after moving. Folders organize requests without sending them. Close the App normally after saving.

   ![Save a request with all its fields · 6](../media/v0.1.1-alpha.1/composer-saved-request-english/step-012.annotated.png)

   ![Save a request with all its fields · 6](../media/v0.1.1-alpha.1/composer-saved-request-english/step-013.annotated.png)

   ![Save a request with all its fields · 6](../media/v0.1.1-alpha.1/composer-saved-request-english/step-014.annotated.png)


<a id="walkthrough-composer-persistence-restart"></a>
## Reopen a saved request and send it

Reopening the App does not automatically replay Collection requests. Continue with the same configuration above. The later Collection Tool has renamed `Untitled` to `Collection MCP`; it is not a newly created request.

1. <a id="walkthrough-composer-persistence-restart-01-folder-1"></a><a id="walkthrough-composer-persistence-restart-01-folder-2"></a><a id="walkthrough-composer-persistence-restart-01-folder-3"></a><a id="walkthrough-composer-persistence-restart-02-select"></a>Open Composer and select `Collection MCP` in box 1. In the next image, box 1 is the saved POST method and box 2 is HTTP/1.1; no reconfiguration is needed.

   ![Reopen a saved request and send it · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-042.annotated.png)

   ![Reopen a saved request and send it · 1](../media/v0.1.1-alpha.1/composer-saved-request-english/step-043.annotated.png)

2. <a id="walkthrough-composer-persistence-restart-03-headers"></a><a id="walkthrough-composer-persistence-restart-04-query"></a><a id="walkthrough-composer-persistence-restart-05-body"></a><a id="walkthrough-composer-persistence-restart-06-auth"></a>Inspect Auth, Headers, Query and Body in turn. Box 1 in each image marks the restored Token, still-disabled `x-e2e-disabled` row, `scope=retained` and JSON body. Do not re-enter values or accidentally enable the disabled row.

   ![Reopen a saved request and send it · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-044.annotated.png)

   ![Reopen a saved request and send it · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-045.annotated.png)

   ![Reopen a saved request and send it · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-046.annotated.png)

   ![Reopen a saved request and send it · 2](../media/v0.1.1-alpha.1/composer-saved-request-english/step-047.annotated.png)

3. <a id="walkthrough-composer-persistence-restart-07-send"></a><a id="walkthrough-composer-persistence-restart-08-clear-auth"></a><a id="walkthrough-composer-persistence-restart-09-none"></a>Ensure your test service is still reachable, then click Send once. The request includes the original Query and `scope=retained`, retains `{"collection":"owned-body"}` and omits the disabled Header. Afterwards, choose Auth None and remove example credentials you no longer need.

   ![Reopen a saved request and send it · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-048.png)


<a id="使用-recent-sends"></a>
## Use Recent sends

Recent sends restores a recent method and composed URL, not a complete request snapshot or persistent history. It does not replace the current Query, Headers or Body; a new Send appends the currently enabled Query rows again.

1. <a id="walkthrough-composer-fields-15-history"></a><a id="walkthrough-composer-replay-20-query-again"></a><a id="walkthrough-composer-replay-21-query-current"></a>First send one of the JSON, Text or Form requests above. Open Query and change the first row from `table` to `current` in box 1, leaving the other row as `again`.

   ![Use Recent sends · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-075.png)

   ![Use Recent sends · 1](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-076.annotated.png)

2. <a id="walkthrough-composer-replay-22-body-again"></a><a id="walkthrough-composer-replay-23-body-current"></a>Set `x-e2e-current` in box 1 to `current` and Content-Type in box 2 to `text/plain`. Enter `Hello replay` in the body editor in box 1. In the last image, box 1 is the current method and box 2 is the current body; do not Send yet.

   ![Use Recent sends · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-077.annotated.png)

   ![Use Recent sends · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-078.annotated.png)

   ![Use Recent sends · 2](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-079.annotated.png)

3. <a id="walkthrough-composer-replay-24-history"></a>Click the clock beside the URL to open Recent sends and choose the earlier JSON request in box 1. Check its method and complete URL rather than only the hostname.

   ![Use Recent sends · 3](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-080.annotated.png)

4. <a id="walkthrough-composer-fields-16-check-restored"></a><a id="walkthrough-composer-replay-25-restore-old"></a><a id="walkthrough-composer-replay-26-current-query"></a>After selection, box 1 restores POST and the historical URL containing `entry=url&entry=table&entry=again`. Box 2 still contains the current `Hello replay`. Selecting history alone does not Send.

   ![Use Recent sends · 4](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-081.annotated.png)

5. <a id="walkthrough-composer-replay-27-resend"></a><a id="walkthrough-composer-replay-28-confirm-body"></a>Clicking Send appends the two current Query rows, producing five values in order: `url`, `table`, `again`, `current`, `again`. The body remains `Hello replay`. Remove unwanted duplicates from the URL or Query table before sending.

   ![Use Recent sends · 5](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-082.png)


<a id="导出和导入-collection"></a>
## Export and import a Collection

<a id="walkthrough-composer-collection-09-open-import"></a>
A Collection file contains requests and folders; importing it does not send requests. Export your own Collection first, then use that same file for this exercise. Both example requests are still named `Untitled`; distinguish them by URL.

1. <a id="walkthrough-composer-editing-25-export"></a>Prepare the first POST request: enter `collection.e2e.invalid/first?existing=1` in the URL in box 1 and add Query `source=first` and Header `x-collection-e2e: first`. Each box 1 marks its corresponding field. Save configuration only; do not request this example address.

   ![Export and import a Collection · 1](../media/v0.1.1-alpha.1/composer-import-english/step-002.annotated.png)

   ![Export and import a Collection · 1](../media/v0.1.1-alpha.1/composer-import-english/step-004.annotated.png)

   ![Export and import a Collection · 1](../media/v0.1.1-alpha.1/composer-import-english/step-008.annotated.png)

   ![Export and import a Collection · 1](../media/v0.1.1-alpha.1/composer-import-english/step-011.annotated.png)

2. Use `collection.e2e.invalid/second` and `x-collection-e2e: second` for the second request. Box 1 marks its URL, Header, the new `E2E collection folder` and the moved request in order. Drag that request into the folder and wait for autosave.

   ![Export and import a Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-013.annotated.png)

   ![Export and import a Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-016.annotated.png)

   ![Export and import a Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-018.annotated.png)

   ![Export and import a Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-019.annotated.png)

   ![Export and import a Collection · 2](../media/v0.1.1-alpha.1/composer-import-english/step-020.png)

3. <a id="walkthrough-composer-editing-26-exported"></a><a id="walkthrough-composer-editing-27-import"></a><a id="walkthrough-composer-collection-08-export"></a>Click Export in the Collection toolbar, choose your directory in Save and save `collection-roundtrip.json`. Wait for saving to finish before continuing; do not substitute an unknown file.

   ![Export and import a Collection · 3](../media/v0.1.1-alpha.1/composer-import-english/step-021.png)

   ![Export and import a Collection · 3](../media/v0.1.1-alpha.1/composer-import-english/step-022.png)

4. <a id="walkthrough-composer-editing-28-preview"></a><a id="walkthrough-composer-collection-10-cancel-preview"></a><a id="walkthrough-composer-editing-29-confirm"></a>Click Import and choose the file you just exported. Box 1 before import marks the original folder; in the preview, box 1 contains the incoming content and box 2 is Cancel. Review requests, folders and warnings before deciding.

   ![Export and import a Collection · 4](../media/v0.1.1-alpha.1/composer-import-english/step-023.annotated.png)

   ![Export and import a Collection · 4](../media/v0.1.1-alpha.1/composer-import-english/step-024.png)

   ![Export and import a Collection · 4](../media/v0.1.1-alpha.1/composer-import-english/step-025.annotated.png)

5. After Cancel, check that the original Collection, open request and target folder are unchanged. Cancelling neither appends items nor sends the requests in the file.

   ![Export and import a Collection · 5](../media/v0.1.1-alpha.1/composer-import-english/step-026.png)

6. Import the same file again, review box 1 in the preview and click Confirm in box 2. Box 1 in the next image marks the appended folder. Import creates new identities instead of overwriting items with matching names.

   ![Export and import a Collection · 6](../media/v0.1.1-alpha.1/composer-import-english/step-027.png)

   ![Export and import a Collection · 6](../media/v0.1.1-alpha.1/composer-import-english/step-028.annotated.png)

   ![Export and import a Collection · 6](../media/v0.1.1-alpha.1/composer-import-english/step-029.annotated.png)

7. Select an imported request in box 1 and check its URL in box 2 against the exported file, then inspect the Query row in box 1. Both Collections remain after leaving and returning; only an explicit Send starts a request.

   ![Export and import a Collection · 7](../media/v0.1.1-alpha.1/composer-import-english/step-030.annotated.png)

   ![Export and import a Collection · 7](../media/v0.1.1-alpha.1/composer-import-english/step-031.annotated.png)

   ![Export and import a Collection · 7](../media/v0.1.1-alpha.1/composer-import-english/step-032.png)

   ![Export and import a Collection · 7](../media/v0.1.1-alpha.1/composer-import-english/step-033.annotated.png)

Review URLs, Headers, bodies and authentication fields before sharing. Exported files can contain credentials; an import preview is not a privacy review.


<a id="从-agent-或-mcp-使用-composer"></a>
## Use Composer through Agent or MCP

<a id="walkthrough-composer-tools"></a>
Configure your model or MCP Client first and grant only the Composer capabilities you need in Settings. Sending is a change operation that makes network requests. Reading Collection is a query; editing Collection does not automatically Send.

1. <a id="walkthrough-composer-tools-01-ask-client"></a><a id="walkthrough-composer-tools-02-composer"></a><a id="walkthrough-composer-tools-03-create"></a><a id="walkthrough-composer-tools-04-rename-menu"></a><a id="walkthrough-composer-tools-05-name"></a><a id="walkthrough-composer-tools-06-url"></a><a id="walkthrough-composer-tools-07-header"></a><a id="walkthrough-composer-tools-08-ui-send"></a><a id="walkthrough-composer-tools-09-saved"></a><a id="walkthrough-composer-tools-10-query"></a><a id="walkthrough-composer-tools-11-send-ask"></a>Ask the caller to prepare a test request. In Ask approval, review `composer_send_request`, the complete URL, method and body. Click Deny Tool in box 1 if you do not want to send; denial leaves the target untouched.

   ![Use Composer through Agent or MCP · 1](../media/v0.1.1-alpha.1/agent-composer-english/step-001.annotated.png)

   ![Use Composer through Agent or MCP · 1](../media/v0.1.1-alpha.1/agent-composer-english/step-002.png)

2. <a id="walkthrough-composer-tools-12-send-deny"></a><a id="walkthrough-composer-tools-13-send-again"></a><a id="walkthrough-composer-tools-14-send-allow"></a><a id="walkthrough-composer-tools-15-ui-response-kept"></a>For an approved request, click Allow Tool in box 1. The example POST returns `201` in the caller’s Tool result. It sends directly: enabling Recording does not capture it, and it does not replace an existing Composer response.

   ![Use Composer through Agent or MCP · 2](../media/v0.1.1-alpha.1/agent-composer-english/step-003.annotated.png)

   ![Use Composer through Agent or MCP · 2](../media/v0.1.1-alpha.1/agent-composer-english/step-004.png)

3. <a id="walkthrough-composer-tools-16-replace-ask"></a><a id="walkthrough-composer-tools-17-replace-deny"></a><a id="walkthrough-composer-tools-18-replace-again"></a><a id="walkthrough-composer-tools-19-replace-allow"></a>Before changing Collection, have the caller read the current Collection and propose an update against that revision. Box 1 marks the pending approval or updated request name: Deny retains the original; Allow changes the name to `Collection allowed`. Do not replace saved credentials with their masked representation.

   ![Use Composer through Agent or MCP · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-016.annotated.png)

   ![Use Composer through Agent or MCP · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-017.png)

   ![Use Composer through Agent or MCP · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-018.annotated.png)

   ![Use Composer through Agent or MCP · 3](../media/v0.1.1-alpha.1/composer-saved-request-english/step-019.annotated.png)

4. <a id="walkthrough-composer-tools-20-query-latest"></a><a id="walkthrough-composer-tools-21-mcp-settings"></a><a id="walkthrough-composer-tools-22-disable"></a>Auto in box 1 changes approval behavior, not permissions or revision checks. The example updates the name to `Collection auto`; a stale revision is rejected. Read the current version before deciding how to merge changes.

   ![Use Composer through Agent or MCP · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-025.annotated.png)

   ![Use Composer through Agent or MCP · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-026.annotated.png)

   ![Use Composer through Agent or MCP · 4](../media/v0.1.1-alpha.1/composer-saved-request-english/step-027.png)

5. An external MCP change opens its own approval. Review the Client, Tool, arguments and scope in box 1, then Deny or Allow. Agent permissions do not replace MCP’s independent permissions.

   ![Use Composer through Agent or MCP · 5](../media/v0.1.1-alpha.1/composer-saved-request-english/step-034.annotated.png)

   ![Use Composer through Agent or MCP · 5](../media/v0.1.1-alpha.1/composer-saved-request-english/step-035.annotated.png)

6. `composer_probe_connection` probes only the TLS handshake, not an HTTP request. Success does not mean the endpoint returned a successful response; investigate failures using the reported address, port and TLS information.

   ![Use Composer through Agent or MCP · 6](../media/v0.1.1-alpha.1/agent-composer-english/step-005.png)

7. Use Stop to cancel an in-flight request, then inspect the actual outcome before retrying. Disable unneeded Composer Tool permissions in Settings after debugging; an existing conversation cannot bypass disabled permissions.

   ![Use Composer through Agent or MCP · 7](../media/v0.1.1-alpha.1/agent-composer-english/step-006.png)

   ![Use Composer through Agent or MCP · 7](../media/v0.1.1-alpha.1/agent-composer-english/step-007.png)


<a id="walkthrough-composer-file-tools"></a>
## Approve Collection file exports and imports

Save your Collection before an authorized Agent or MCP invokes a file Tool. The example contains two requests and `Transfer folder`. Import only the same file produced by the App’s Export; importing does not send requests.

1. <a id="walkthrough-composer-file-tools-01-request"></a><a id="walkthrough-composer-file-tools-02-url"></a><a id="walkthrough-composer-file-tools-03-header"></a>Click Export in Collection and save `product-collection.json`. Back in the App, box 1 marks the Export control and saved Collection. Use this file for the later Import.

   ![Approve Collection file exports and imports · 1](../media/v0.1.1-alpha.1/composer-file-tools-english/step-015.png)

   ![Approve Collection file exports and imports · 1](../media/v0.1.1-alpha.1/composer-file-tools-english/step-016.annotated.png)

   ![Approve Collection file exports and imports · 1](../media/v0.1.1-alpha.1/composer-file-tools-english/step-017.annotated.png)

2. <a id="walkthrough-composer-file-tools-04-export-ask"></a><a id="walkthrough-composer-file-tools-05-export-deny"></a><a id="walkthrough-composer-file-tools-06-export-cancel-ask"></a><a id="walkthrough-composer-file-tools-07-save-cancel-panel"></a><a id="walkthrough-composer-file-tools-08-save-cancelled"></a>After `composer_export_collection` is requested, review its effect in the approval in box 1. Deny exports nothing; Allow still requires the Save dialog. After cancelling the native dialog, check the caller’s cancelled result rather than treating approval as a completed file.

   ![Approve Collection file exports and imports · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-018.annotated.png)

   ![Approve Collection file exports and imports · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-019.png)

   ![Approve Collection file exports and imports · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-020.annotated.png)

   ![Approve Collection file exports and imports · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-021.png)

   ![Approve Collection file exports and imports · 2](../media/v0.1.1-alpha.1/composer-file-tools-english/step-022.png)

3. <a id="walkthrough-composer-file-tools-09-export-save-ask"></a><a id="walkthrough-composer-file-tools-10-save-file"></a><a id="walkthrough-composer-file-tools-11-export-result"></a>To export, review the new approval in box 1 and Allow, then save `tool-export.json` in the Save dialog. Wait for the call to finish before using the file.

   ![Approve Collection file exports and imports · 3](../media/v0.1.1-alpha.1/composer-file-tools-english/step-029.annotated.png)

   ![Approve Collection file exports and imports · 3](../media/v0.1.1-alpha.1/composer-file-tools-english/step-030.png)

   ![Approve Collection file exports and imports · 3](../media/v0.1.1-alpha.1/composer-file-tools-english/step-031.png)

4. <a id="walkthrough-composer-file-tools-12-import-deny-ask"></a><a id="walkthrough-composer-file-tools-13-import-denied"></a><a id="walkthrough-composer-file-tools-14-open-cancel-ask"></a><a id="walkthrough-composer-file-tools-15-open-cancel-panel"></a><a id="walkthrough-composer-file-tools-16-open-cancelled"></a>`composer_import_collection` has its own approval in box 1. Deny imports nothing; Allow still requires file selection. Cancelling Open retains the original Collection without a partial import.

   ![Approve Collection file exports and imports · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-023.annotated.png)

   ![Approve Collection file exports and imports · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-024.png)

   ![Approve Collection file exports and imports · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-025.annotated.png)

   ![Approve Collection file exports and imports · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-026.png)

   ![Approve Collection file exports and imports · 4](../media/v0.1.1-alpha.1/composer-file-tools-english/step-027.png)

5. <a id="walkthrough-composer-file-tools-cancel-preview-ask"></a><a id="walkthrough-composer-file-tools-cancel-preview-open"></a><a id="walkthrough-composer-file-tools-cancel-preview-preview"></a><a id="walkthrough-composer-file-tools-cancel-preview-decision"></a>After allowing Import, choose `product-collection.json` in Open. In the preview, box 1 contains the incoming content and box 2 is Cancel. Review the counts and content, then cancel to retain the original Collection.

   ![Approve Collection file exports and imports · 5](../media/v0.1.1-alpha.1/composer-file-tools-english/step-032.annotated.png)

   ![Approve Collection file exports and imports · 5](../media/v0.1.1-alpha.1/composer-file-tools-english/step-033.png)

   ![Approve Collection file exports and imports · 5](../media/v0.1.1-alpha.1/composer-file-tools-english/step-034.annotated.png)

   ![Approve Collection file exports and imports · 5](../media/v0.1.1-alpha.1/composer-file-tools-english/step-035.png)

6. <a id="walkthrough-composer-file-tools-confirm-preview-ask"></a><a id="walkthrough-composer-file-tools-confirm-preview-open"></a><a id="walkthrough-composer-file-tools-confirm-preview-preview"></a><a id="walkthrough-composer-file-tools-confirm-preview-decision"></a>Request and allow Import again, selecting the same file. Review box 1 and confirm the append with box 2. The original Collection is not overwritten; back in Collection, Export in box 1 can save the appended result.

   ![Approve Collection file exports and imports · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-036.annotated.png)

   ![Approve Collection file exports and imports · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-037.png)

   ![Approve Collection file exports and imports · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-038.annotated.png)

   ![Approve Collection file exports and imports · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-040.annotated.png)

   ![Approve Collection file exports and imports · 6](../media/v0.1.1-alpha.1/composer-file-tools-english/step-041.png)

7. <a id="walkthrough-composer-file-tools-auto-mode"></a><a id="walkthrough-composer-file-tools-auto-open"></a><a id="walkthrough-composer-file-tools-auto-preview"></a><a id="walkthrough-composer-file-tools-auto-confirm"></a>Switching to Auto in box 1 does not choose files or confirm previews for you. Review box 1 in the preview and confirm with box 2; box 1 in the following image shows another appended Collection. Repeated imports add independent requests rather than overwriting by name.

   ![Approve Collection file exports and imports · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-042.annotated.png)

   ![Approve Collection file exports and imports · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-043.png)

   ![Approve Collection file exports and imports · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-044.annotated.png)

   ![Approve Collection file exports and imports · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-045.annotated.png)

   ![Approve Collection file exports and imports · 7](../media/v0.1.1-alpha.1/composer-file-tools-english/step-047.png)

8. MCP uses the same file flow with independent approval. Box 1 marks MCP approval or preview content. After Allow, confirm with box 2 in the preview; Auto still permits cancelling with box 2.

   ![Approve Collection file exports and imports · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-048.annotated.png)

   ![Approve Collection file exports and imports · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-049.annotated.png)

   ![Approve Collection file exports and imports · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-050.annotated.png)

   ![Approve Collection file exports and imports · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-051.png)

   ![Approve Collection file exports and imports · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-052.annotated.png)

   ![Approve Collection file exports and imports · 8](../media/v0.1.1-alpha.1/composer-file-tools-english/step-054.annotated.png)

9. <a id="walkthrough-composer-file-tools-stop-server"></a>When finished, turn off the MCP Server switch in box 1 and check the Off state. This stops MCP access; close the App window normally when you also want to quit.

   ![Approve Collection file exports and imports · 9](../media/v0.1.1-alpha.1/composer-file-tools-english/step-059.annotated.png)
