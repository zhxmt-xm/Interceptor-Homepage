# Breakpoints: pause traffic before deciding

[Guide directory](../README.en.md) · [Rules](rules.md) · [Capture](capture.md)

<a id="http"></a>
## Create a request or response breakpoint

A request breakpoint pauses before the request continues; a response breakpoint pauses before delivery to the client. Enable Recording and send through the proxy to a service you control. The request and response examples are independent: disable another Rule covering the same path when switching unless both phases should pause.

1. <a id="walkthrough"></a><a id="walkthrough-01-rules"></a>Open Rules from the sidebar.

   ![Create a request or response breakpoint · 1](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-001.png)

2. <a id="walkthrough-02-create"></a>Right-click the empty Rule tree and choose New rule in box 1.

   ![Create a request or response breakpoint · 2](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-002.annotated.png)

3. <a id="walkthrough-03-name"></a>Enter `E2E request breakpoint` in box 1. Keep the Rule disabled while completing its match and action.

   ![Create a request or response breakpoint · 3](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-003.annotated.png)

4. <a id="walkthrough-04-host"></a>Enter `127.0.0.1` in the Host field, box 1. For another service, use its authorized exact Host rather than broadening scope unnecessarily.

   ![Create a request or response breakpoint · 4](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-004.annotated.png)

5. <a id="walkthrough-05-path-condition"></a><a id="walkthrough-06-path"></a>Add a Path condition through Add condition and enter `/e2e/` in box 1. Restrict it further to your test endpoint when appropriate.

   ![Create a request or response breakpoint · 5](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-005.annotated.png)

6. <a id="walkthrough-07-remove-header"></a><a id="walkthrough-08-add-breakpoint"></a>Remove the default Header action, then choose Breakpoint in box 1 of Add action. Do not save the Rule with no action in between.

   ![Create a request or response breakpoint · 6](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-006.png)

   ![Create a request or response breakpoint · 6](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-007.annotated.png)

7. Confirm Phase is Request. A response breakpoint requires selecting Response, not merely renaming the Rule.

   ![Create a request or response breakpoint · 7](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-008.png)

8. <a id="walkthrough-09-enable"></a><a id="walkthrough-10-apply"></a>Enable the Rule and click Save in box 1. Wait for Rule set applied before sending new traffic; resolve validation errors first.

   ![Create a request or response breakpoint · 8](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-009.annotated.png)

   ![Create a request or response breakpoint · 8](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-010.png)

9. <a id="walkthrough-11-capture"></a><a id="walkthrough-12-pending"></a>Return to Capture, ensure Break on match is enabled and send a matching POST from the client. Box 1 selects the `/e2e/header-only` Request paused record and its current head.

   ![Create a request or response breakpoint · 9](../media/v0.1.1-alpha.1/breakpoints-request-edits-english/step-011.annotated.png)

10. <a id="walkthrough-breakpoints-response-06-rules"></a>For the response example, separately configure `E2E response edits`. Box 1 is its name and box 2 sets Path `/e2e/response-edits/`. Before a File replacement, save your own response file as described in [body editing](#edit).

    ![Create a request or response breakpoint · 10](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-004.annotated.png)

11. <a id="walkthrough-breakpoints-response-07-phase-menu"></a><a id="walkthrough-breakpoints-response-08-response-phase"></a>Open Phase and select Response in box 1.

    ![Create a request or response breakpoint · 11](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-005.annotated.png)

12. <a id="walkthrough-breakpoints-response-09-apply"></a>Enable and save the Rule, then confirm Rule set applied in box 1. Subsequent matches will wait at the response phase.

    ![Create a request or response breakpoint · 12](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-006.annotated.png)

13. <a id="walkthrough-breakpoints-response-10-capture"></a><a id="walkthrough-breakpoints-response-11-header-paused"></a><a id="walkthrough-breakpoints-response-12-select-header"></a>Request `/e2e/response-edits/header` from the client and select the wait in box 1. Check Response paused and the response-status editor rather than treating it as a request-phase pause.

    ![Create a request or response breakpoint · 13](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-007.annotated.png)

14. Alternatively, use Breakpoint → This endpoint from a Capture row’s context menu. It enables and immediately saves both request and response phases, potentially pausing twice. See [shortcut breakpoints](#walkthrough-breakpoints-manager) for operation and Undo; this differs from a Request-only manual Rule.

HTTP can pause at headers before the complete body arrives. An unavailable Original does not mean the message has no body. The current head is actionable; subsequent Queued entries are read-only.


<a id="continue-drop"></a>
## Continue, edit or drop

Check the phase, path and current wait before each action. This example uses the preceding section’s separate response Rule. The three decisions also apply to the corresponding request head; do not repeat an action on an already resolved target.

1. Select the `/e2e/response-edits/header` response wait in box 1.

   ![Continue, edit or drop · 1](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-007.annotated.png)

2. <a id="walkthrough-13-text"></a><a id="walkthrough-14-replacement"></a><a id="walkthrough-15-forward"></a>For an edited forward, add `x-response-edited: header-only` in Response headers, leave the body Off and click Forward edited in box 1. For Text or File, provide the complete replacement as shown in [the next section](#edit) before using this command.

   ![Continue, edit or drop · 2](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-008.annotated.png)

3. Check the client receives the added Header. Response in box 1 still shows `{"action":"header","source":"origin"}`; a Header-only edit did not replace its body.

   ![Continue, edit or drop · 3](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-009.annotated.png)

4. <a id="walkthrough-16-next"></a>Request `/e2e/response-edits/unmodified` and select the new wait in box 1, not the response already forwarded.

   ![Continue, edit or drop · 4](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-018.annotated.png)

5. <a id="walkthrough-17-unmodified"></a>Even with a `not-forwarded` Text draft in box 1, Continue in box 2 forwards unchanged without submitting it.

   ![Continue, edit or drop · 5](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-019.annotated.png)

6. Inspect `{"action":"unmodified","source":"origin"}` in Response, box 1. The client did not receive the draft.

   ![Continue, edit or drop · 6](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-020.annotated.png)

7. <a id="walkthrough-18-drop-target"></a>Request `/e2e/response-edits/drop` and deliberately select this wait in box 1.

   ![Continue, edit or drop · 7](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-021.annotated.png)

8. <a id="walkthrough-19-drop"></a>Click Drop in box 1 and check the client error or connection termination, not a successful response. This is a response-phase pause: Drop cannot undo the request already received by the origin.

   ![Continue, edit or drop · 8](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-022.annotated.png)

   ![Continue, edit or drop · 8](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-023.png)

Continue ignores local unsubmitted drafts, Forward edited applies them, and Drop terminates the wait. Earlier Rules may already have changed the message, so unchanged does not necessarily mean the original client bytes. For another attempt, create a new request and select its current valid wait.


<a id="edit"></a>
## Edit headers, Text or File

Use the separate `E2E response edits` response Rule with Path `/e2e/response-edits/`. Save the source file before enabling the Rule so that the source request is not intercepted. Off retains the original body, Text uses explicit input and File uses all bytes of the selected file.

1. <a id="walkthrough-breakpoints-response"></a><a id="walkthrough-breakpoints-response-01-source"></a><a id="walkthrough-breakpoints-response-02-select-source"></a><a id="walkthrough-breakpoints-response-03-response-body"></a>Before enabling the Rule, request `/e2e/response-edits/file-source`, select the record and open Response. Check `{"message":"file-response"}` and click Save body in box 1.

   ![Edit headers, Text or File · 1](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-001.annotated.png)

2. <a id="walkthrough-breakpoints-response-04-save-dialog"></a><a id="walkthrough-breakpoints-response-05-saved-body"></a>Save `response-body.json` in the system dialog and wait for the file. The later File replacement must select this saved file, not merely enter a name or use a different file with the same name.

   ![Edit headers, Text or File · 2](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-002.png)

   ![Edit headers, Text or File · 2](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-003.png)

3. Create and save the response Rule as described earlier. Its name in box 1 is `E2E response edits`, Path in box 2 is `/e2e/response-edits/`, and Phase is Response.

   ![Edit headers, Text or File · 3](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-004.annotated.png)

4. Request `/e2e/response-edits/header`, select the Response paused record in box 1 and inspect its response status and Headers.

   ![Edit headers, Text or File · 4](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-007.annotated.png)

5. <a id="walkthrough-breakpoints-response-13-body-off"></a><a id="walkthrough-breakpoints-response-14-header-value"></a><a id="walkthrough-breakpoints-response-15-header-forward"></a>For a Header-only edit, leave Body Off, use Add header to add `x-response-edited: header-only`, then click Forward edited in box 1.

   ![Edit headers, Text or File · 5](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-008.annotated.png)

6. Check the client receives the added Header while Response in box 1 remains `{"action":"header","source":"origin"}`. Editing a Header did not automatically replace the body.

   ![Edit headers, Text or File · 6](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-009.annotated.png)

7. <a id="walkthrough-breakpoints-response-16-text-paused"></a><a id="walkthrough-breakpoints-response-17-select-text"></a>Request `/e2e/response-edits/text` separately and select its new wait in box 1. Collapse Response headers and Original body by their titles when more space is needed.

   ![Edit headers, Text or File · 7](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-010.annotated.png)

8. <a id="walkthrough-breakpoints-response-18-text-mode"></a><a id="walkthrough-breakpoints-response-19-text-value"></a><a id="walkthrough-breakpoints-response-20-text-forward"></a>Set Status in box 1 to `201`, select Text, enter the complete `{"message":"response-edited"}` in box 2 and click Forward edited in box 3. Leave Status unchanged when only replacing the body.

   ![Edit headers, Text or File · 8](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-011.annotated.png)

9. Open Response in box 1, choose Final and Raw and inspect `201` and the new JSON. This is the final response, not the original request body.

   ![Edit headers, Text or File · 9](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-012.annotated.png)

10. <a id="walkthrough-breakpoints-response-21-file-paused"></a><a id="walkthrough-breakpoints-response-22-select-file"></a>Request `/e2e/response-edits/file` and select its new response wait in box 1, not the resolved Text target.

    ![Edit headers, Text or File · 10](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-013.annotated.png)

11. <a id="walkthrough-breakpoints-response-23-file-mode"></a><a id="walkthrough-breakpoints-response-24-open-dialog"></a>Collapse Headers and Original to make room, select File and use Choose file in box 1. Select the `response-body.json` saved earlier in the system Open dialog.

    ![Edit headers, Text or File · 11](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-014.annotated.png)

12. <a id="walkthrough-breakpoints-response-25-file-preview"></a><a id="walkthrough-breakpoints-response-26-file-forward"></a>Check the filename, `27 B` size and `file-response` preview in box 1, then click Forward edited in box 2. The complete file is sent, not selected preview text.

    ![Edit headers, Text or File · 12](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-016.annotated.png)

13. Inspect `{"message":"file-response"}` in Response → Final → Raw, box 1, and verify the complete content actually received by the client.

    ![Edit headers, Text or File · 13](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-017.annotated.png)

14. <a id="walkthrough-breakpoints-response-27-cleanup-rule"></a><a id="walkthrough-breakpoints-response-28-disable"></a>After resolving the waits, return to this response Rule and disable its switch in box 1.

    ![Edit headers, Text or File · 14](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-027.annotated.png)

15. <a id="walkthrough-breakpoints-response-29-apply-disabled"></a>Click Save in box 1 of the first image, then confirm Rule set applied in box 1 of the second. Disabling matches and resolving existing waits remain separate operations.

    ![Edit headers, Text or File · 15](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-028.annotated.png)

    ![Edit headers, Text or File · 15](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-029.annotated.png)

- Read-only File text previews are bounded at `2 MiB`, with complete image previews up to `16 MiB`. Unknown binary data, audio, video or oversized images may show only file information.
- Empty Text can retain the original HTTP body when the headers-stage snapshot has no body; a WebSocket message snapshot can instead be explicitly replaced by an empty message. Do not mix these cases.
- A later Capture preview does not change whether a snapshot existed at pause time.
- See [message editing](rules.md#message-editing) for Header, charset, compression and body interactions, and [the next section](#walkthrough-breakpoints-request-variants) for File and empty-Text variants.


<a id="walkthrough-breakpoints-request-variants"></a>
## Change only request headers, use a body file or edit response status

These are separate request and response examples. Check the Rule phase and Path, enable only the needed Rule and send a new request for each case. Resolved waits cannot be submitted again. The JSON File example uses `/e2e/body-file/`; other request variants use the `/e2e/` scope of `E2E request breakpoint`.

1. <a id="walkthrough-breakpoints-request-variants-header-01-pending"></a>Send POST `/e2e/header-only` with body `{"stage":"header-only"}` and Header `x-edit-stage: original`. Select its new wait in box 1.

   ![Change only request headers, use a body file or edit response status · 1](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-014.annotated.png)

2. <a id="walkthrough-breakpoints-request-variants-header-02-off"></a><a id="walkthrough-breakpoints-request-variants-header-03-add"></a><a id="walkthrough-breakpoints-request-variants-header-04-name"></a><a id="walkthrough-breakpoints-request-variants-header-05-value"></a><a id="walkthrough-breakpoints-request-variants-header-06-forward"></a>Leave Body Off. Set Content-Type in box 1 to `application/x-header-only`, change `x-edit-stage` in box 2 to `edited` and use Forward edited in box 3. The origin still receives the original JSON bytes; a Header change does not automatically convert the body.

   ![Change only request headers, use a body file or edit response status · 2](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-015.annotated.png)

   ![Change only request headers, use a body file or edit response status · 2](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-016.png)

3. For an explicit text replacement, send a separate `/e2e/body-only` request with `{"stage":"body-original"}`. Select Text, enter the complete `{"stage":"body-edited"}` in box 1 and use Forward edited in box 2.

   ![Change only request headers, use a body file or edit response status · 3](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-019.annotated.png)

4. In Request, check the Text source badge in box 1, choose Final below it and inspect `{"stage":"body-edited"}` in Raw. Also check the complete content actually received by the origin.

   ![Change only request headers, use a body file or edit response status · 4](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-021.annotated.png)

5. <a id="walkthrough-breakpoints-request-variants-empty-01-pending"></a><a id="walkthrough-breakpoints-request-variants-empty-02-text"></a><a id="walkthrough-breakpoints-request-variants-empty-03-forward"></a>Send `/e2e/empty-text` with `{"stage":"empty-keeps-original"}`. Box 1 in the first image selects the new request. In the second, choose Text in box 1 but leave it empty, then use Forward edited in box 2. At HTTP headers without a body snapshot, this retains the original body rather than behaving like an empty WebSocket message.

   ![Change only request headers, use a body file or edit response status · 5](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-031.annotated.png)

   ![Change only request headers, use a body file or edit response status · 5](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-032.annotated.png)

6. Choose Raw in Request, box 1, and verify `{"stage":"empty-keeps-original"}` remains. Without a body replacement, do not look for an Original/Final comparison that is not offered.

   ![Change only request headers, use a body file or edit response status · 6](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-033.annotated.png)

7. <a id="walkthrough-breakpoints-request-variants-json-01-source"></a><a id="walkthrough-breakpoints-request-variants-json-02-select"></a><a id="walkthrough-breakpoints-request-variants-json-03-save"></a><a id="walkthrough-breakpoints-request-variants-json-04-saved"></a>For the separate JSON File example, use the `/e2e/body-file/source` response with `begin: file-preview-start`, `cartId: cart-123` and `end: complete-file-end`. Use Save body in box 1 and save `exported-body.json`, an `89 B` file in this example.

   ![Change only request headers, use a body file or edit response status · 7](../media/v0.1.1-alpha.1/breakpoints-short-file-english/step-001.annotated.png)

   ![Change only request headers, use a body file or edit response status · 7](../media/v0.1.1-alpha.1/breakpoints-short-file-english/step-002.png)

8. <a id="walkthrough-breakpoints-request-variants-json-file-01-pending"></a>Enable the corresponding request breakpoint for POST `/e2e/body-file/target` and select the wait in box 1. Collapse a long Original by its heading to make room for File.

   ![Change only request headers, use a body file or edit response status · 8](../media/v0.1.1-alpha.1/breakpoints-short-file-english/step-004.annotated.png)

   ![Change only request headers, use a body file or edit response status · 8](../media/v0.1.1-alpha.1/breakpoints-short-file-english/step-005.png)

9. <a id="walkthrough-breakpoints-request-variants-json-file-02-mode"></a><a id="walkthrough-breakpoints-request-variants-json-file-03-open"></a><a id="walkthrough-breakpoints-request-variants-json-file-04-preview"></a>Choose File, use Choose file in box 1 and select the saved `exported-body.json` in the system dialog. Back in the App, inspect its filename, size and preview rather than merely entering a filename.

   ![Change only request headers, use a body file or edit response status · 9](../media/v0.1.1-alpha.1/breakpoints-short-file-english/step-006.annotated.png)

   ![Change only request headers, use a body file or edit response status · 9](../media/v0.1.1-alpha.1/breakpoints-short-file-english/step-008.png)

10. <a id="walkthrough-breakpoints-request-variants-json-file-05-forward"></a>Use Forward edited in box 1 and check complete JSON delivery at the client or origin. Preview height, scrolling and text selection do not limit the transmitted file length.

    ![Change only request headers, use a body file or edit response status · 10](../media/v0.1.1-alpha.1/breakpoints-short-file-english/step-011.annotated.png)

    ![Change only request headers, use a body file or edit response status · 10](../media/v0.1.1-alpha.1/breakpoints-short-file-english/step-012.png)

11. <a id="walkthrough-breakpoints-request-variants-binary-01-source"></a><a id="walkthrough-breakpoints-request-variants-binary-02-select"></a><a id="walkthrough-breakpoints-request-variants-binary-03-save"></a><a id="walkthrough-breakpoints-request-variants-binary-04-saved"></a>For binary data, first use Save body in box 1 of `/e2e/request-file/source` to save `request-body.bin`. It contains seven bytes, `00 01 02 7f 80 fe ff`, not a substitute text file.

    ![Change only request headers, use a body file or edit response status · 11](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-001.annotated.png)

    ![Change only request headers, use a body file or edit response status · 11](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-002.png)

12. <a id="walkthrough-breakpoints-request-variants-binary-file-01-pending"></a><a id="walkthrough-breakpoints-request-variants-binary-file-04a-type"></a>Send a separate POST `/e2e/binary-file`. Box 1 in the first image selects the wait. Set Content-Type in box 1 of the second image to `application/octet-stream` as required by this endpoint.

    ![Change only request headers, use a body file or edit response status · 12](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-034.annotated.png)

    ![Change only request headers, use a body file or edit response status · 12](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-035.annotated.png)

13. <a id="walkthrough-breakpoints-request-variants-binary-file-02-mode"></a><a id="walkthrough-breakpoints-request-variants-binary-file-03-open"></a>Collapse Headers and Original, choose File and use Choose file in box 1 to select the saved `request-body.bin`.

    ![Change only request headers, use a body file or edit response status · 13](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-036.annotated.png)

14. <a id="walkthrough-breakpoints-request-variants-binary-file-04-preview"></a><a id="walkthrough-breakpoints-request-variants-binary-file-05-forward"></a>Check the filename and full `7 B` size in box 1, then use Forward edited in box 2. The origin should receive all seven bytes; the absence of a text preview does not mean an empty file.

    ![Change only request headers, use a body file or edit response status · 14](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-038.annotated.png)

    ![Change only request headers, use a body file or edit response status · 14](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-039.png)

15. <a id="walkthrough-breakpoints-request-variants-status-01-rule"></a><a id="walkthrough-breakpoints-request-variants-status-02-phase"></a><a id="walkthrough-breakpoints-request-variants-status-03-apply"></a><a id="walkthrough-breakpoints-request-variants-status-04-capture"></a><a id="walkthrough-breakpoints-request-variants-status-05-pending"></a><a id="walkthrough-breakpoints-request-variants-status-06-code"></a><a id="walkthrough-breakpoints-request-variants-status-07-forward"></a>For a status-only response edit, separately enable the Response Rule and request `/e2e/response-edits/status`. Leave Body Off, set Status in box 1 to `202` and use Forward edited in box 2.

    ![Change only request headers, use a body file or edit response status · 15](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-025.annotated.png)

16. In Response, box 1, verify status `202` and the unchanged `{"action":"status","source":"origin"}` body. No Text or File replacement occurred.

    ![Change only request headers, use a body file or edit response status · 16](../media/v0.1.1-alpha.1/breakpoints-response-visible-english/step-026.annotated.png)

17. <a id="walkthrough-breakpoints-request-variants-finish-01-rule"></a><a id="walkthrough-breakpoints-request-variants-finish-02-disable"></a><a id="walkthrough-breakpoints-request-variants-finish-03-apply"></a>Finish by disabling `E2E request breakpoint` in box 1 of the first image. If you also configured the example’s `E2E later rewrite` Header Rule, disable its switch in box 1 of the second image, then use Save in box 1 of the third. Disable and save the response Rule as described above as well, so later traffic does not keep waiting.

    ![Change only request headers, use a body file or edit response status · 17](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-040.annotated.png)

    ![Change only request headers, use a body file or edit response status · 17](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-041.annotated.png)

    ![Change only request headers, use a body file or edit response status · 17](../media/v0.1.1-alpha.1/breakpoints-request-variants-english/step-042.annotated.png)


<a id="queues"></a>
## Handle multiple waiting items

Use a test service you control that accepts POST and PUT. Replace the example base URL `http://127.0.0.1:57756` with your service. Both Rules below use Host `127.0.0.1`, Path `/e2e/queue-` and the Request phase. HTTP waits with different methods still enter the same queue.

1. <a id="walkthrough-breakpoints-queue"></a><a id="walkthrough-breakpoints-queue-01-rules"></a><a id="walkthrough-breakpoints-queue-02-post-rule"></a>Create a request breakpoint in Rules. Enter `E2E POST queue commands` in the name field, box 1, and select POST in Method, box 2. Set the Host, Path and Breakpoint action described above, enable the Rule and click Save.

   ![Handle multiple waiting items · 1](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-001.annotated.png)

2. <a id="walkthrough-breakpoints-queue-03-put-rule"></a>Create another Rule named `E2E PUT queue commands` in box 1 and choose PUT in box 2. Keep the same scope and phase, enable it and Save. Two Rules do not create two HTTP queues.

   ![Handle multiple waiting items · 2](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-002.annotated.png)

3. <a id="walkthrough-breakpoints-queue-04-capture"></a>Return to Capture, enable Recording and search for `/e2e/queue-`. Open the breakpoint manager at the top. Check Break on match in box 1 and both Rule switches are enabled, then close the manager.

   ![Handle multiple waiting items · 3](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-003.annotated.png)

4. <a id="walkthrough-breakpoints-queue-05-post-head"></a><a id="walkthrough-breakpoints-queue-06-post-queued"></a><a id="walkthrough-breakpoints-queue-07-put-queued"></a>Send POST `/e2e/queue-rule-post-a`, POST `/e2e/queue-rule-post-b` and PUT `/e2e/queue-rule-put-a` through the proxy, in that order, with bodies `post-a-original`, `post-b-original` and `put-a-original`. Do not continue them yet. Box 1 shows three waits: the first is Head and the other two are Queued.

   ![Handle multiple waiting items · 4](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-005.annotated.png)

5. <a id="walkthrough-breakpoints-queue-08-select-head"></a><a id="walkthrough-breakpoints-queue-09-text-draft"></a><a id="walkthrough-breakpoints-queue-10-enter-draft"></a>Select the first POST, choose Text under Replacement body and enter `post-draft-must-not-forward` in box 1. Do not click Forward edited; this remains a draft for the selected wait.

   ![Handle multiple waiting items · 5](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-006.annotated.png)

6. <a id="walkthrough-breakpoints-queue-11-post-queued-detail"></a>Click the second POST in box 1. Its details show Queued and are read-only; this is not an editor for another queue head.

   ![Handle multiple waiting items · 6](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-007.annotated.png)

7. <a id="walkthrough-breakpoints-queue-12-put-queued-detail"></a>Select the PUT in box 1. Although it matches the other Rule, it is still waiting in the same HTTP queue and cannot be edited ahead of the head.

   ![Handle multiple waiting items · 7](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-008.annotated.png)

8. <a id="walkthrough-breakpoints-queue-13-restore-draft"></a>Return to the first POST and confirm box 1 still contains its own `post-draft-must-not-forward` draft. Selecting other rows does not copy this draft to them.

   ![Handle multiple waiting items · 8](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-009.annotated.png)

9. <a id="walkthrough-breakpoints-queue-15-continue-rule"></a>All three requests are still waiting. Continue with [batch commands](#batch) to choose a Rule or queue scope; do not resend requests that are already paused.

- Search and filters change visible rows, not hidden waits or queue order.
- A timeout or client disconnect can remove a wait. Do not apply its stale draft to the next request.
- A long queue does not automatically continue traffic and can exhaust client connections.
- HTTP requests and responses share the HTTP queue. Established WebSocket connections have their own message queues; see [mixed queues](#walkthrough-breakpoints-mixed-queues).


<a id="batch"></a>
## Use batch commands and the manager

Continue with the three waits from the preceding section. A batch command handles the selected scope at the time of the click, not every future request. Continuing unchanged does not submit the editor’s Text draft.

1. <a id="walkthrough-breakpoints-queue-14-rule-menu"></a>Open Queue actions at the top right of the first POST’s paused details. Continue all from this rule in box 1 targets the current Rule, Continue all in box 2 targets the HTTP queue, and Drop all in box 3 drops that queue. Click box 1 first.

   ![Use batch commands and the manager · 1](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-010.annotated.png)

2. Check that both POST requests continued while the PUT in box 1 remains as the new head. The origin receives `post-a-original` and `post-b-original`, not the unsubmitted `post-draft-must-not-forward`.

   ![Use batch commands and the manager · 2](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-011.annotated.png)

3. <a id="walkthrough-breakpoints-queue-16-put-b"></a><a id="walkthrough-breakpoints-queue-18-drop-menu"></a>Send PUT `/e2e/queue-drop-put-b` with body `put-b-original`. Confirm it queues behind the existing PUT, then click Drop all in box 1 of the current HTTP queue menu.

   ![Use batch commands and the manager · 3](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-013.annotated.png)

4. <a id="walkthrough-breakpoints-queue-19-drop-queue"></a>Check that neither PUT remains waiting. Their clients end or report errors, and neither request reaches the origin. Drop does not produce a successful response.

   ![Use batch commands and the manager · 4](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-014.png)

5. <a id="walkthrough-breakpoints-queue-20-new-post"></a><a id="walkthrough-breakpoints-queue-21-new-put"></a><a id="walkthrough-breakpoints-queue-22-select-new-head"></a>Send two new POST requests: `/e2e/queue-continue-a` with `queue-a-original` and `/e2e/queue-continue-b` with `queue-b-original`. Select the new head in box 1. These are new requests, not previously continued or dropped targets.

   ![Use batch commands and the manager · 5](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-015.annotated.png)

6. <a id="walkthrough-breakpoints-queue-23-continue-menu"></a><a id="walkthrough-breakpoints-queue-24-continue-queue"></a>Open Queue actions and click Continue all in box 1. Check both new POST requests complete with `queue-a-original` and `queue-b-original` unchanged. This command selects the whole current queue, not one Rule.

   ![Use batch commands and the manager · 6](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-016.annotated.png)

   ![Use batch commands and the manager · 6](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-017.png)

7. <a id="walkthrough-breakpoints-queue-25-cleanup-rules"></a><a id="walkthrough-breakpoints-queue-26-select-post-rule"></a><a id="walkthrough-breakpoints-queue-27-disable-post"></a>After resolving the waits, return to Rules, select `E2E POST queue commands` and disable its switch in box 1. The change is not saved yet.

   ![Use batch commands and the manager · 7](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-018.annotated.png)

8. <a id="walkthrough-breakpoints-queue-28-select-put-rule"></a><a id="walkthrough-breakpoints-queue-29-disable-put"></a>Select `E2E PUT queue commands` and disable its switch in box 1 as well. Disabling future matches and resolving existing waits are separate operations.

   ![Use batch commands and the manager · 8](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-019.annotated.png)

9. <a id="walkthrough-breakpoints-queue-30-apply-disabled"></a>Click Save in box 1. Wait for the applied state at the bottom and for Save to become disabled. Verify both Rules remain disabled; keep them rather than deleting them.

   ![Use batch commands and the manager · 9](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-020.annotated.png)

   ![Use batch commands and the manager · 9](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-021.png)

A switch or Undo in the breakpoint manager applies immediately; ordinary Rules edits still require Save. Use the [manager](#walkthrough-breakpoints-manager) for global or per-Rule switches, Undo of a shortcut creation, or navigation to Rules. A disabled Rule does not prove its waiting clients were released.


<a id="walkthrough-breakpoints-manager"></a>
## Undo a shortcut breakpoint or temporarily disable matching

Find a historical Capture request you are authorized to debug. This section uses GET `http://127.0.0.1:60784/e2e/capture/breakpoint-submenu-lifecycle`; replace it with your service. Send each new request to that same endpoint. Creating a Rule does not resend the historical record.

1. <a id="walkthrough-breakpoints-manager-01-source"></a><a id="walkthrough-breakpoints-manager-02-menu"></a>Right-click the request, open the Breakpoint submenu and choose This endpoint in box 1. This path prefix and This host cover broader scopes; do not choose them when only one endpoint is intended.

   ![Undo a shortcut breakpoint or temporarily disable matching · 1](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-002.annotated.png)

2. <a id="walkthrough-breakpoints-manager-03-create"></a>When the creation message in box 1 appears, the shortcut Rule is enabled and saved without another Save in Rules. Closing this message does not remove the Rule; Undo is the removal action.

   ![Undo a shortcut breakpoint or temporarily disable matching · 2](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-005.annotated.png)

3. Send a new request to the endpoint. Continue in box 1 of the first image releases Request. When Response pauses next, use Continue in box 1 of the second image. This endpoint includes both phases; these are distinct waits, not repeated actions on one target.

   ![Undo a shortcut breakpoint or temporarily disable matching · 3](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-006.annotated.png)

   ![Undo a shortcut breakpoint or temporarily disable matching · 3](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-007.annotated.png)

4. <a id="walkthrough-breakpoints-manager-08-manager"></a>Open the Manager from the breakpoint control at the top of Capture. Box 1 controls only this Rule, while Break on match in box 2 controls all new breakpoint matches. Neither is Recording.

   ![Undo a shortcut breakpoint or temporarily disable matching · 4](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-008.annotated.png)

5. <a id="walkthrough-breakpoints-manager-21-rule-manager"></a><a id="walkthrough-breakpoints-manager-22-rule-off"></a>To disable only this endpoint, turn off the Rule switch in box 1 and leave Break on match on. This change saves immediately; any existing waits still need their own decisions.

   ![Undo a shortcut breakpoint or temporarily disable matching · 5](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-009.annotated.png)

6. <a id="walkthrough-breakpoints-manager-25-open-rule"></a>Use View rule on the same Manager row to open Rules. Check Disabled and Rule set applied in box 1; no extra Save is needed here. Later manual edits to match conditions or actions still require Save.

   ![Undo a shortcut breakpoint or temporarily disable matching · 6](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-010.annotated.png)

7. <a id="walkthrough-breakpoints-manager-23-close-manager"></a><a id="walkthrough-breakpoints-manager-24-rule-disabled"></a>Return to Capture and send the same GET again. The new record in box 1 completes with `200` without pausing. Check new traffic rather than inferring switch behavior from an old record.

   ![Undo a shortcut breakpoint or temporarily disable matching · 7](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-011.annotated.png)

8. To resume debugging, reopen the Manager and enable the Rule in box 1 of the first image. Send a new request, release Request with box 1 of the second image and Response with box 1 of the third, then wait for the client to finish.

   ![Undo a shortcut breakpoint or temporarily disable matching · 8](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-012.annotated.png)

   ![Undo a shortcut breakpoint or temporarily disable matching · 8](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-013.annotated.png)

   ![Undo a shortcut breakpoint or temporarily disable matching · 8](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-014.annotated.png)

9. <a id="walkthrough-breakpoints-manager-09-global-off"></a>To suspend all new matches temporarily, turn off Break on match in box 1 while leaving the Rule itself enabled. This is not a substitute for Continue, Drop or client cancellation.

   ![Undo a shortcut breakpoint or temporarily disable matching · 9](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-015.annotated.png)

10. <a id="walkthrough-breakpoints-manager-10-close-manager"></a><a id="walkthrough-breakpoints-manager-11-not-paused"></a>Close the Manager and send another request. Check the record in box 1 completes directly. Capture is still recording; no system-proxy change is needed.

    ![Undo a shortcut breakpoint or temporarily disable matching · 10](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-016.annotated.png)

11. <a id="walkthrough-breakpoints-manager-12-manager-again"></a><a id="walkthrough-breakpoints-manager-13-global-on"></a><a id="walkthrough-breakpoints-manager-14-close-manager"></a>Reopen the Manager and enable Break on match in box 1. After closing the Manager, newly sent matching requests pause again.

    ![Undo a shortcut breakpoint or temporarily disable matching · 11](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-017.annotated.png)

12. <a id="walkthrough-breakpoints-manager-15-abort-pending"></a><a id="walkthrough-breakpoints-manager-16-select-pending"></a><a id="walkthrough-breakpoints-manager-17-client-abort"></a>Box 1 in the first image marks the new Request head. Cancel this request in its client, for example with Ctrl+C in the terminal. Back in the App, the breakpoint control in box 1 of the second image has no pending count. The historical record may remain, but its ended wait is no longer actionable.

    ![Undo a shortcut breakpoint or temporarily disable matching · 12](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-018.annotated.png)

    ![Undo a shortcut breakpoint or temporarily disable matching · 12](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-019.annotated.png)

13. <a id="walkthrough-breakpoints-manager-18-new-wait"></a><a id="walkthrough-breakpoints-manager-19-continue-request"></a><a id="walkthrough-breakpoints-manager-20-continue-response"></a>Sending again creates a new wait. Box 1 of the first image continues Request unmodified, and box 1 of the second continues Response separately. This does not revive the cancelled request.

    ![Undo a shortcut breakpoint or temporarily disable matching · 13](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-020.annotated.png)

    ![Undo a shortcut breakpoint or temporarily disable matching · 13](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-021.annotated.png)

14. <a id="walkthrough-breakpoints-manager-04-undo"></a><a id="walkthrough-breakpoints-manager-06-recreate-menu"></a><a id="walkthrough-breakpoints-manager-07-recreate"></a>If a shortcut was created by mistake, use Undo in box 1 of its creation message. The message is brief and stays while hovered. Here the original Rule was disabled before a second one was created; Undo targets that new second Rule, not the entire tree.

    ![Undo a shortcut breakpoint or temporarily disable matching · 14](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-022.annotated.png)

15. <a id="walkthrough-breakpoints-manager-05-after-undo"></a>After Undo, the new Rule disappears while the original in box 1 remains disabled and saved. If the message has expired, manage the Rule through the Manager or Rules; dismissing a message is not Undo.

    ![Undo a shortcut breakpoint or temporarily disable matching · 15](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-023.annotated.png)

16. Send to the same endpoint once more and check the new record in box 1 completes with `200` without pausing. Keep the configuration you need, disable unused matches and exit normally.

    ![Undo a shortcut breakpoint or temporarily disable matching · 16](../media/v0.1.1-alpha.1/breakpoints-manager-english/step-024.annotated.png)


<a id="walkthrough-breakpoints-mixed-queues"></a>
## Handle HTTP and WebSocket wait queues separately

HTTP requests and responses share one queue; each established WebSocket connection has its own message queue. This example uses a request breakpoint for POST `/e2e/queue-isolation-http`, a response breakpoint for GET `/e2e/queue-isolation-response`, and the `/e2e/queue-isolation-ws` connection. Create the Rules as described earlier and establish WebSocket before working with its messages; an Upgrade request is not an established-connection message.

1. <a id="walkthrough-breakpoints-mixed-queues-03-upgrade-result"></a><a id="walkthrough-breakpoints-mixed-queues-04-live-connection"></a>Select the WebSocket connection, open Messages and choose Both in box 1 of its breakpoint settings, with only Messages enabled.

   ![Handle HTTP and WebSocket wait queues separately · 1](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-004.annotated.png)

2. <a id="walkthrough-breakpoints-mixed-queues-01-http-head"></a><a id="walkthrough-breakpoints-mixed-queues-02-response-queued"></a><a id="walkthrough-breakpoints-mixed-queues-08-inspect-response"></a>Send the POST through the proxy with body `http-queue` so it becomes the HTTP head. Then send the GET so its response queues behind it. Select the response record in box 1: Queued and `2 of 2` identify a read-only queued response, not an editable head.

   ![Handle HTTP and WebSocket wait queues separately · 2](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-006.annotated.png)

3. <a id="walkthrough-breakpoints-mixed-queues-05-ws-head"></a>Send `client-queue-head` from the WebSocket client, then `server-queue-follower` from the service. The message queue has its own Head and Queued entries while HTTP remains waiting.

   ![Handle HTTP and WebSocket wait queues separately · 3](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-007.png)

4. <a id="walkthrough-breakpoints-mixed-queues-07-http-draft"></a>Return to the HTTP head and enter `http-draft` in the Text field in box 1. Do not use Forward edited yet.

   ![Handle HTTP and WebSocket wait queues separately · 4](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-011.annotated.png)

5. Select the WebSocket head and enter a separate `websocket-draft` in box 1. Switch between the heads and verify each keeps its own draft.

   ![Handle HTTP and WebSocket wait queues separately · 5](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-013.annotated.png)

6. <a id="walkthrough-breakpoints-mixed-queues-06-ws-queued"></a><a id="walkthrough-breakpoints-mixed-queues-09-inspect-upgrade"></a>Selecting `server-queue-follower` shows Queued information without Forward edited. Return to the current message head before executing a command.

   ![Handle HTTP and WebSocket wait queues separately · 6](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-014.png)

7. Open the WebSocket queue menu and click Continue all in box 1. It forwards the two current message frames unchanged, without submitting `websocket-draft` or releasing HTTP.

   ![Handle HTTP and WebSocket wait queues separately · 7](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-015.annotated.png)

8. <a id="walkthrough-breakpoints-mixed-queues-12-ws-still-pending"></a>The echo subsequently produced by the service is a new Received wait, not automatically included in the earlier batch command. Return to this connection and continue that echo unchanged. The HTTP request and response remain in their own queue.

   ![Handle HTTP and WebSocket wait queues separately · 8](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-016.png)

9. <a id="walkthrough-breakpoints-mixed-queues-10-http-menu"></a><a id="walkthrough-breakpoints-mixed-queues-11-continue-http"></a>Return to the HTTP head and click Continue in box 1. The origin receives the original `http-queue`, not the unsubmitted `http-draft`.

   ![Handle HTTP and WebSocket wait queues separately · 9](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-017.annotated.png)

10. The previously queued response is now Head. Select it, use Continue in box 1 and check the request completes. Requests and responses do not occupy separate HTTP queues.

    ![Handle HTTP and WebSocket wait queues separately · 10](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-018.annotated.png)

    ![Handle HTTP and WebSocket wait queues separately · 10](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-019.png)

11. <a id="walkthrough-breakpoints-mixed-queues-13-drop-ws"></a>To try queue dropping, create new `mixed-queue-drop-sent` and `mixed-queue-drop-received` messages, confirm the current scope is the WebSocket queue and click Drop all in box 1.

    ![Handle HTTP and WebSocket wait queues separately · 11](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-020.annotated.png)

12. Confirm the waits are removed, disable this connection’s breakpoint and send `mixed-queue-after-drop`. Normal delivery of a new message does not replay previously dropped frames.

    ![Handle HTTP and WebSocket wait queues separately · 12](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-021.png)

13. <a id="walkthrough-breakpoints-mixed-queues-14-exit-http"></a><a id="walkthrough-breakpoints-mixed-queues-15-exit-ws"></a><a id="walkthrough-breakpoints-mixed-queues-16-before-close"></a>Another way to finish is normal App exit. Box 1 indicates remaining waits and box 2 is Close. Closing cancels pending clients instead of submitting drafts or automatically forwarding them. Resolve traffic you need to retain first.

    ![Handle HTTP and WebSocket wait queues separately · 13](../media/v0.1.1-alpha.1/breakpoints-lifecycle-english/step-005.annotated.png)


<a id="websocket"></a>
## Pause and edit WebSocket frames

Connect an authorized WebSocket client through the proxy and enable Recording. These examples use ordinary text messages on `/e2e/websocket-controls`; WSS also needs the decryption prerequisites. Operate on each new paused frame, not a historical message or a wait in the other direction.

1. <a id="walkthrough-breakpoints-websocket"></a><a id="walkthrough-breakpoints-websocket-01-connect"></a><a id="walkthrough-breakpoints-websocket-02-select-connection"></a><a id="walkthrough-breakpoints-websocket-03-messages"></a>Select the connection in Capture and open Messages. Existing history can remain; you do not need to Clear it first.

2. <a id="walkthrough-breakpoints-websocket-04-sent-setup"></a><a id="walkthrough-breakpoints-websocket-05-sent-direction"></a><a id="walkthrough-breakpoints-websocket-06-enable-sent"></a>Open the connection breakpoint settings at the top right of Messages. Select Sent in box 1, select only Messages and click Enable breakpoint in box 2. Sent intercepts only that direction.

   ![Pause and edit WebSocket frames · 2](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-020.annotated.png)

3. <a id="walkthrough-breakpoints-websocket-07-sent-original"></a><a id="walkthrough-breakpoints-websocket-08-sent-unmodified"></a>Send from the client: `e2e-sent-original`. Select the new paused frame, keep Replacement Off and click Continue in box 1 to forward it unchanged.

   ![Pause and edit WebSocket frames · 3](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-021.annotated.png)

4. Check that the frame is no longer waiting and the client receives `e2e-sent-original`. The service echoes the sent-direction example; the received-direction example is delivered directly to the client.

   ![Pause and edit WebSocket frames · 4](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-022.png)

5. <a id="walkthrough-breakpoints-websocket-09-sent-edit-target"></a><a id="walkthrough-breakpoints-websocket-10-sent-text"></a><a id="walkthrough-breakpoints-websocket-11-sent-edit"></a><a id="walkthrough-breakpoints-websocket-12-sent-forward"></a>Send from the client: `e2e-sent-before-edit`. When it pauses, select Text in box 1, enter the complete replacement `e2e-sent-edited` in box 2 and click Forward edited in box 3.

   ![Pause and edit WebSocket frames · 5](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-023.annotated.png)

6. Check that the client actually receives `e2e-sent-edited`, not `e2e-sent-before-edit`. Capture history can retain the original frame; its summary alone does not establish the bytes delivered to the client.

   ![Pause and edit WebSocket frames · 6](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-024.png)

7. <a id="walkthrough-breakpoints-websocket-13-sent-drop-target"></a><a id="walkthrough-breakpoints-websocket-14-sent-drop"></a>Send from the client: a separate `e2e-sent-drop` message. Select it and click Drop in box 1. This discards the current frame rather than delivering it successfully, and does not delete its history.

   ![Pause and edit WebSocket frames · 7](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-025.annotated.png)

8. <a id="walkthrough-breakpoints-websocket-15-disable-sent"></a>Disable the current interception with the Messages breakpoint button, then send `e2e-sent-after-disable`. Confirm this new message arrives and the previously dropped frame is not replayed.

   ![Pause and edit WebSocket frames · 8](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-026.png)

9. <a id="walkthrough-breakpoints-websocket-16-received-setup"></a><a id="walkthrough-breakpoints-websocket-17-received-direction"></a><a id="walkthrough-breakpoints-websocket-18-enable-received"></a>Open the connection breakpoint settings at the top right of Messages. Select Received in box 1, select only Messages and click Enable breakpoint in box 2. Received intercepts only that direction.

   ![Pause and edit WebSocket frames · 9](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-027.annotated.png)

10. <a id="walkthrough-breakpoints-websocket-19-received-original"></a><a id="walkthrough-breakpoints-websocket-20-received-unmodified"></a>Have the service send or echo: `e2e-received-original`. Select the new paused frame, keep Replacement Off and click Continue in box 1 to forward it unchanged.

    ![Pause and edit WebSocket frames · 10](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-028.annotated.png)

11. Check that the frame is no longer waiting and the client receives `e2e-received-original`. The service echoes the sent-direction example; the received-direction example is delivered directly to the client.

    ![Pause and edit WebSocket frames · 11](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-029.png)

12. <a id="walkthrough-breakpoints-websocket-21-received-edit-target"></a><a id="walkthrough-breakpoints-websocket-22-received-text"></a><a id="walkthrough-breakpoints-websocket-23-received-edit"></a><a id="walkthrough-breakpoints-websocket-24-received-forward"></a>Have the service send or echo: `e2e-received-before-edit`. When it pauses, select Text in box 1, enter the complete replacement `e2e-received-edited` in box 2 and click Forward edited in box 3.

    ![Pause and edit WebSocket frames · 12](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-030.annotated.png)

13. Check that the client actually receives `e2e-received-edited`, not `e2e-received-before-edit`. Capture history can retain the original frame; its summary alone does not establish the bytes delivered to the client.

    ![Pause and edit WebSocket frames · 13](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-031.png)

14. <a id="walkthrough-breakpoints-websocket-25-received-drop-target"></a><a id="walkthrough-breakpoints-websocket-26-received-drop"></a>Have the service send or echo: a separate `e2e-received-drop` message. Select it and click Drop in box 1. This discards the current frame rather than delivering it successfully, and does not delete its history.

    ![Pause and edit WebSocket frames · 14](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-032.annotated.png)

15. <a id="walkthrough-breakpoints-websocket-27-disable-received"></a><a id="walkthrough-breakpoints-websocket-28-after-disabled"></a>Disable the current interception with the Messages breakpoint button, then have the service send `e2e-received-after-disable`. Confirm this new message arrives and the previously dropped frame is not replayed.

    ![Pause and edit WebSocket frames · 15](../media/v0.1.1-alpha.1/breakpoints-websocket-messages-english/step-033.png)

16. <a id="walkthrough-breakpoints-websocket-29-close-client"></a>Close the connection normally from the client when finished. For both directions, an empty replacement or control frames, continue with [empty messages, Ping/Pong and close codes](#walkthrough-breakpoints-websocket-controls).

Moving configuration to another connection does not resolve existing waits on the old one. Check each connection’s queue. Forward edited submits Text; Continue ignores unsubmitted drafts. Pausing Ping, Pong or Close can affect keepalive and shutdown.


<a id="walkthrough-breakpoints-websocket-controls"></a>
## Edit empty WebSocket messages, Ping/Pong and close codes

Use a WebSocket service you control, connect through the proxy and enable Capture Recording. First use `/e2e/websocket-close` for the close-code example, then another connection at `/e2e/websocket-controls` for empty messages and Ping/Pong. Resolve the old connection’s waits before moving the configuration.

1. <a id="walkthrough-breakpoints-websocket-controls-18-close-setup"></a>Select `/e2e/websocket-close`, open Messages and click the connection breakpoint button in box 1.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 1](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-001.annotated.png)

2. <a id="walkthrough-breakpoints-websocket-controls-19-close-sent"></a><a id="walkthrough-breakpoints-websocket-controls-20-message-off"></a><a id="walkthrough-breakpoints-websocket-controls-20-ping-off"></a><a id="walkthrough-breakpoints-websocket-controls-20-pong-off"></a><a id="walkthrough-breakpoints-websocket-controls-21-close-on"></a><a id="walkthrough-breakpoints-websocket-controls-22-enable-close"></a>Select Close in box 1 and click Enable breakpoint in box 2. This example uses Both. Choose Sent or Received for a single direction; Both does not mean one action continues both directions.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 2](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-002.annotated.png)

3. <a id="walkthrough-breakpoints-websocket-controls-23-close-request"></a>Have the client send a Close frame with code `1000`, then select the paused Close. Box 1 shows its current code; confirm the direction and target first.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 3](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-004.annotated.png)

4. Use the arrow at the right of Replacement message to collapse or expand its contents when you need more space. This changes neither Off to Text nor the close code.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 4](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-007.png)

5. <a id="walkthrough-breakpoints-websocket-controls-24-close-code"></a><a id="walkthrough-breakpoints-websocket-controls-25-close-forward"></a>Change the close code in box 1 to `1001`, keep Replacement message Off and click Forward edited in box 2. A close-code-only edit does not require a Text replacement.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 5](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-008.annotated.png)

6. Both also pauses the returning Close. Confirm the current frame is Received close and click Continue in box 1 to forward that direction unchanged. Wait for the connection to show closed and the paused editor to disappear. Editing the sent direction does not resolve the return direction.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 6](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-010.annotated.png)

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 6](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-011.png)

7. <a id="walkthrough-breakpoints-websocket-controls-01-connect"></a><a id="walkthrough-breakpoints-websocket-controls-02-select"></a><a id="walkthrough-breakpoints-websocket-controls-03-messages"></a><a id="walkthrough-breakpoints-websocket-controls-04-setup"></a><a id="walkthrough-breakpoints-websocket-controls-05-both"></a><a id="walkthrough-breakpoints-websocket-controls-06-ping"></a><a id="walkthrough-breakpoints-websocket-controls-07-pong"></a><a id="walkthrough-breakpoints-websocket-controls-08-enable"></a>Open and select a new `/e2e/websocket-controls` connection, then open its Messages breakpoint settings. Choose Both in box 1, select Messages, Ping and Pong, clear Close and click Enable breakpoint in box 2.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 7](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-012.annotated.png)

8. <a id="walkthrough-breakpoints-websocket-controls-09-text"></a><a id="walkthrough-breakpoints-websocket-controls-10-empty-mode"></a><a id="walkthrough-breakpoints-websocket-controls-11-empty-value"></a><a id="walkthrough-breakpoints-websocket-controls-12-empty-forward"></a>After the client sends `e2e-before-empty` and it pauses, choose Text in box 1, explicitly empty the replacement in box 2 and click Forward edited in box 3. Empty Text sends an empty message; Off preserves the original.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 8](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-013.annotated.png)

9. <a id="walkthrough-breakpoints-websocket-controls-13-empty-echo"></a>The empty return message pauses separately. Confirm the Received message has a `0 B` Original, then click Continue in box 1 so the client receives it.

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 9](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-014.png)

   ![Edit empty WebSocket messages, Ping/Pong and close codes · 9](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-015.annotated.png)

10. <a id="walkthrough-breakpoints-websocket-controls-14-send-ping"></a><a id="walkthrough-breakpoints-websocket-controls-15-continue-ping"></a>Send a Ping containing `e2e-control-ping` from the client. Confirm the current wait is Sent ping, then click Continue in box 1 without changing its content.

    ![Edit empty WebSocket messages, Ping/Pong and close codes · 10](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-016.annotated.png)

11. <a id="walkthrough-breakpoints-websocket-controls-16-continue-pong"></a>The returning Pong also pauses. Click Continue in box 1 and confirm this connection has no remaining wait and the client receives its Pong. Do not stop after continuing only the Ping.

    ![Edit empty WebSocket messages, Ping/Pong and close codes · 11](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-017.annotated.png)

    ![Edit empty WebSocket messages, Ping/Pong and close codes · 11](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-018.png)

12. <a id="walkthrough-breakpoints-websocket-controls-17-disable-both"></a>Disable interception with the breakpoint button at the top right of Messages, then send `e2e-controls-disabled`. Check the sent and returned messages appear without waiting for another manual decision.

    ![Edit empty WebSocket messages, Ping/Pong and close codes · 12](../media/v0.1.1-alpha.1/breakpoints-websocket-complete-english/step-019.png)

Pausing Ping, Pong or Close can affect keepalive and shutdown. Interpret close codes, errors and terminal events separately for what the client and origin actually receive; completion on one side does not establish completion on the other.


<a id="lifecycle"></a>
## End a debugging session

A user decision, client disconnect or App/Core shutdown resolves the corresponding waits. There is no fixed timeout that automatically forwards them.

1. <a id="walkthrough-20-disable"></a>Resolve traffic you need to retain, then disable Rules no longer needed. Box 1 in each image is the enabled switch for the POST and PUT example Rules respectively. Disabling matching does not resolve existing waits.

   ![End a debugging session · 1](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-018.annotated.png)

   ![End a debugging session · 1](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-019.annotated.png)

2. <a id="walkthrough-21-apply-disabled"></a>Click Save in box 1 and wait for the applied state. Keep Rules for future use if needed; ending a session does not require deleting the tree.

   ![End a debugging session · 2](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-020.annotated.png)

   ![End a debugging session · 2](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-021.png)

3. A client disconnect removes only its own waits. The WebSocket `disconnect-must-not-forward` wait is removed here while independent HTTP remains Head. Do not resubmit an edit to a wait that has disappeared.

   ![End a debugging session · 3](../media/v0.1.1-alpha.1/breakpoints-lifecycle-english/step-002.png)

   ![End a debugging session · 3](../media/v0.1.1-alpha.1/breakpoints-lifecycle-english/step-003.png)

4. Check the wait count in box 1 and decide whether that traffic should continue. Use Close in box 2 to exit. Remaining requests and messages are cancelled rather than delivered as successful responses.

   ![End a debugging session · 4](../media/v0.1.1-alpha.1/breakpoints-lifecycle-english/step-004.png)

   ![End a debugging session · 4](../media/v0.1.1-alpha.1/breakpoints-lifecycle-english/step-005.annotated.png)

Restarting does not restore waits from old connections. Check the client’s actual error and App recovery state. If the system proxy remains incorrect, follow [recovery steps](troubleshooting.md#proxy-recovery) rather than repeatedly force-killing processes or deleting recovery records.


<a id="tools"></a>
## Use Agent or MCP

Read current waits before approving a specific item, queue or rule. If the target has disappeared, query again instead of guessing an ID.

Tool editing is deliberately narrower than the full UI. It does not accept arbitrary local paths or every Header/close-code edit. Use the native editor for those operations; see the [Tool reference](tool-reference.md#breakpoints).
