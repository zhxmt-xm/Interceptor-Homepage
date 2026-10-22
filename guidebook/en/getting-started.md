# Getting started: capture your first request

[Guide directory](../README.en.md) · [Continue to Capture](capture.md)

<a id="先了解你要完成什么"></a>
## What you will accomplish

Send one credential-free HTTP request through Interceptor, inspect it in Capture, and quit normally.

No model API key, Rules configuration or HTTPS decryption is needed. Proxy forwarding and HTTPS decryption are separate operations.

<a id="准备应用"></a>
## Prepare the App

- Windows or macOS, with the correct installer for your OS and architecture.
- Permission to run trusted software. Device management policies may restrict certificate or proxy changes.
- No other process using `127.0.0.1:8888`.

1. Open [GitHub Releases](https://github.com/zhxmt-xm/Interceptor/releases). Read the attached assets, release notes and Pre-release label. `Source code` is not an installer.

2. On macOS, select the DMG or ZIP for your CPU architecture, place the App in Applications and open it.

3. On Windows, select an installer or ZIP actually attached to the release. Extract a ZIP completely; do not run a lone EXE removed from its directory.

4. Read first-launch system prompts and authorize only the trusted Interceptor operation. Wait for startup preparation to finish.

- The product repository is currently private. Downloads require a GitHub account with repository access; this guide does not bypass it.
- The macOS package is ad-hoc signed and not notarized; Windows installers are unsigned. Download only from a trusted release source.
- Use the OS's normal per-application process for trusted software. Do not remove quarantine or disable system-wide protection.
- First launch may prepare shared certificates and system components. Do not delete your daily-use CA to recreate a “first launch.”
- See [Settings](settings.md#https-decryption) for system authorization, certificate trust and decryption.

<a id="确认代理与录制就绪"></a>
## Confirm proxy and recording readiness

First confirm the client can reach the proxy and Capture is recording. An open App window alone does not establish either condition.

1. Open Capture from box 1 in the left navigation. Inspect recording at the top and proxy status at the bottom; an empty list can also result from search or filters.

   ![Confirm proxy and recording readiness · 1](../media/v0.1.1-alpha.1/workspace-navigation-english/step-013.annotated.png)

2. Startup attempts to take ownership of the system proxy. If a readiness prompt appears, read the missing condition and use Enable or Proxy settings. Complete any required system authorization first.

3. Verify box 1 shows Recording. If it shows Paused, use the recording control and complete any prompt before sending traffic. Cancelling readiness does not start recording.

   ![Confirm proxy and recording readiness · 3](../media/v0.1.1-alpha.1/capture-recording-english/step-002.annotated.png)

- Applications that follow the system proxy use its settings; other clients need an explicit proxy.
- Pause only affects recording new traffic; it is not system proxy Restore.
- Inspect system and upstream settings before changing an existing proxy configuration.


<a id="发出第一条-http-请求"></a>
## Send your first HTTP request

Enable Recording and prepare an authorized test endpoint that can safely accept POST. The example uses `http://127.0.0.1:59696/playground/body/json` with body `{"ready":true}`. The App does not create this service; replace the URL with your endpoint rather than sending arbitrary writes to production.

1. Enter `/playground/body/json` in the Capture search field, box 1. Use the corresponding Host or Path for your own endpoint.

   ![Send your first HTTP request · 1](../media/v0.1.1-alpha.1/capture-json-example-english/step-001.annotated.png)

2. Send the JSON through `127.0.0.1:8888` from a terminal. The macOS command uses `--noproxy ""` for this invocation so `NO_PROXY` does not bypass the local target; the Windows command sets PowerShell’s explicit Proxy parameter.
   macOS:

   ```sh
   curl --proxy http://127.0.0.1:8888 --noproxy "" --max-time 20 \
     --header "Content-Type: application/json" \
     --data-raw '{"ready":true}' \
     "http://127.0.0.1:59696/playground/body/json"
   ```

   Windows PowerShell:

   ```powershell
   Invoke-WebRequest -UseBasicParsing -Method Post `
     -Proxy "http://127.0.0.1:8888" `
     -Uri "http://127.0.0.1:59696/playground/body/json" `
     -ContentType "application/json" `
     -Body '{"ready":true}'
   ```

3. Return to Capture and wait for the POST in box 1 to appear. Confirm the row exists before selecting it; the request comes from the client, not a model or an internal application call.

   ![Send your first HTTP request · 3](../media/v0.1.1-alpha.1/capture-json-example-english/step-002.annotated.png)

4. Click the row in box 1 and inspect POST, Host `127.0.0.1` and Path `/playground/body/json`. Check your actual URL when using another endpoint.

   ![Send your first HTTP request · 4](../media/v0.1.1-alpha.1/capture-json-example-english/step-003.annotated.png)

5. Open Response and select Raw in box 1. This example returns `{"ready":true,"items":[1,2,3]}` with status `200`. Other services determine their own status; a captured response need not be `200`.

   ![Send your first HTTP request · 5](../media/v0.1.1-alpha.1/capture-json-example-english/step-006.annotated.png)

- The example sends no login credential and does not require disabling TLS verification.
- If the request is missing, check the proxy address, Recording and bypass rules rather than immediately clearing the recording.
- Composer sends directly and is not automatically captured, so this example uses an external client.


<a id="读懂这条请求"></a>
## Understand the request

Continue with the same POST without resending it or mixing in another request’s body.

1. Open Headers in box 1 to inspect the complete URL, method, status and protocol, then expand the request and response header groups you need.

   ![Understand the request · 1](../media/v0.1.1-alpha.1/capture-json-example-english/step-004.annotated.png)

2. Open Request and choose Raw in box 1 to inspect the sent `{"ready":true}`. This is the request body, not the server response.

   ![Understand the request · 2](../media/v0.1.1-alpha.1/capture-json-example-english/step-005.annotated.png)

3. Return to Response and read the returned `ready` and `items` in Raw, box 1. Inspect request and response separately rather than assuming matching field names mean identical bodies.

   ![Understand the request · 3](../media/v0.1.1-alpha.1/capture-json-example-english/step-006.annotated.png)

4. Choose Tree in box 1 to read JSON by object and array structure.

   ![Understand the request · 4](../media/v0.1.1-alpha.1/capture-json-example-english/step-007.annotated.png)

5. Use the root disclosure arrow in box 1 to collapse and expand the tree. This changes the displayed structure without modifying the body.

   ![Understand the request · 5](../media/v0.1.1-alpha.1/capture-json-example-english/step-008.annotated.png)

   ![Understand the request · 5](../media/v0.1.1-alpha.1/capture-json-example-english/step-009.annotated.png)

6. Click Copy in box 1 when you need the response body. Copying does not make another origin request.

   ![Understand the request · 6](../media/v0.1.1-alpha.1/capture-json-example-english/step-010.annotated.png)

7. Select Raw in box 1 to return to the source text while keeping the same response selected.

   ![Understand the request · 7](../media/v0.1.1-alpha.1/capture-json-example-english/step-011.annotated.png)

8. Choose Hex in box 1 to inspect bytes. A different presentation does not fetch a different body.

   ![Understand the request · 8](../media/v0.1.1-alpha.1/capture-json-example-english/step-012.annotated.png)

9. Use the body’s fullscreen control to enlarge it. Box 1 shows Hex remains selected; fullscreen retains the current view mode.

   ![Understand the request · 9](../media/v0.1.1-alpha.1/capture-json-example-english/step-013.annotated.png)

10. Switch back to Raw in fullscreen and use Copy in box 1 of its header to copy the same JSON.

    ![Understand the request · 10](../media/v0.1.1-alpha.1/capture-json-example-english/step-014.annotated.png)

11. After copying, select Raw again to dismiss the Copy tooltip, then press Escape to return to details. Box 1 shows the inline body still uses Raw.

    ![Understand the request · 11](../media/v0.1.1-alpha.1/capture-json-example-english/step-015.annotated.png)

12. Finally, check Response in box 1 and the selected row still belong to the original POST. Viewing, copying and fullscreen did not Send it again.

    ![Understand the request · 12](../media/v0.1.1-alpha.1/capture-json-example-english/step-016.annotated.png)

Available view modes depend on content type. HTML displayed as code is not executed as a page, and fullscreen does not remove body-preview limits.


<a id="保存需要的记录并正常退出"></a>
## Save important records and quit normally

Decide which traffic to keep before exporting. This example uses four separate text and binary records under `/e2e/har-tools/`, not the single JSON request above. Choose the scope that matches your own records.

1. Pause Recording, open Export at the top of Capture and click Export HAR in box 1. To preserve additional native traffic detail, follow [Native Archive](transfer.md#archive) instead.

   ![Save important records and quit normally · 1](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-012.annotated.png)

2. Select All traffic in box 1 and check the count is 4. Retain bodies and review masking for Authorization, Cookie and Set-Cookie, then click Export 4 requests in box 2. Your recording can have a different count.

   ![Save important records and quit normally · 2](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-013.annotated.png)

3. Choose your destination in the system Save dialog, enter `ui.har` and click Save. Use Cancel to cancel the operation; cancellation does not export a file.

   ![Save important records and quit normally · 3](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-014.png)

4. Wait for the export to finish and return to Capture. Box 1 is the Export entry point available for another operation, and box 2 shows recording remains Paused. Confirm the file was saved before quitting.

   ![Save important records and quit normally · 4](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-015.annotated.png)

5. Use the App window’s normal Close button and wait for system operations and proxy restoration. If it is busy, let the current operation finish rather than force-killing the process.

- Capture is temporary data for the current Core process; quitting or restarting Core releases it.
- Normal shutdown does not remove the shared CA. Disabling decryption, restoring the proxy and removing certificate trust are separate operations.
- If another application changes the proxy during the session, Interceptor must not overwrite that change; handle the reported conflict.
- See [Import and export](transfer.md) for scopes, formats and cancellation, and [Proxy recovery](troubleshooting.md#proxy-recovery) if networking remains incorrect after quitting.


<a id="没有看到请求时"></a>
## If the request is missing

- Check Recording and unresolved readiness prompts.
- Clear search and filter conditions, not the captured records themselves.
- Check the client's proxy host, port and bypass rules.
- Confirm a request was actually sent and inspect terminal DNS/connection errors.
- An HTTPS TLS tunnel means “proxied but not decrypted,” which differs from traffic not reaching the proxy.

Next: [find, inspect and save traffic in Capture](capture.md).
