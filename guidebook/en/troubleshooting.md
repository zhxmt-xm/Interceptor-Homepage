# Troubleshooting and recovery

[Guide directory](../README.en.md) · [Diagnostics](diagnostics.md) · [Settings](settings.md)

Follow the checks for your symptom. Use your own addresses, request names and ports rather than copying example values unchanged; do not start by clearing records or reinstalling the App.

<a id="no-traffic"></a>
## Capture shows no request

1. Confirm startup has finished without an unresolved proxy-readiness prompt. Check that the recording control in box 1 says Recording; if it says Paused, click it to resume. Resuming records new traffic without backfilling requests from the pause.

   ![Check Capture’s Recording state](../media/v0.1.1-alpha.1/capture-recording-english/step-002.annotated.png)

2. Clear Keyword, then remove unwanted facet selections individually instead of using Capture Clear. Box 1 marks the already-empty search field, not a clear button. Method `GET` and `POST` and Status `200` remain selected, so the image shows `4 of 5`. Clear search removes only the keyword; it does not remove facets or change Recording.

   ![Inspect the cleared search field and retained facet selections](../media/v0.1.1-alpha.1/capture-filters-english/step-015.annotated.png)

   Next deselect Status `200`, then Method `POST` and `GET`, and inspect the complete list. A filtered-out request is not an uncaptured request, and displaying it does not require deleting the recording.

3. Send one identifiable request through the proxy from your client. The pictured new request is POST `http://127.0.0.1:59696/playground/body/json` with `Content-Type: application/json` and body `{"ready":true}`. Box 1 marks its `200` row in Capture. Substitute your own service instead of looking for a service on the example port.

   ![Check whether the new POST reaches Capture](../media/v0.1.1-alpha.1/capture-json-example-english/step-002.annotated.png)

   If no record appears, read the client’s DNS, connection or TLS error first, then find related operations at the same time in [Diagnostics](diagnostics.md#records). A closed connection is not a DNS failure, and one successful request does not establish recovery for other targets.

4. Confirm the client actually uses `127.0.0.1:8888`; not every client follows system proxy settings.

5. On Windows, inspect [AppContainer access](settings.md#app-containers) where applicable. Other network stacks may bypass WinINet.

6. For a Composer request, inspect Composer’s own response pane. This is a separate GET to `http://127.0.0.1:58053/e2e/composer/response-section-collapse`, returning `200` with JSON containing `message: response-sections` and `items`. Composer connects directly and is not controlled by Recording, proxy Rules or Breakpoints. Absence from Capture is not a recording failure.

   ![Inspect the direct-send result in Composer’s response pane](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-004.png)

Distinguish a request not sent, traffic not routed through the proxy, recording being off and a filtered-out result before changing the corresponding setting.

<a id="tls"></a>
## HTTPS is only a tunnel or has a certificate error

1. Select the CONNECT in box 1, targeting `localhost:52139` here. TLS tunnel says HTTPS content is encrypted: the connection crosses the proxy without decrypting its path, headers or body. A connection matching passthrough still tunnels even when MITM active is shown. Use View passthrough pattern in box 2 to locate its configuration; `0 B` does not mean the origin returned an empty body.

   ![Inspect the current CONNECT’s TLS tunnel and passthrough configuration](../media/v0.1.1-alpha.1/tls-pattern-english/step-014.annotated.png)

2. Open Settings → Certificates and inspect CA Status, Trust status and Decrypt HTTPS (MITM) separately. If the CA is Generated and Local machine is Trusted but decryption is off, as below, HTTPS bodies still cannot be inspected. Trusting the CA does not enable decryption automatically. Follow [HTTPS decryption](settings.md#https-decryption) to establish trust and enable inspection when needed; do not casually regenerate the CA to troubleshoot.

   ![Check the CA, system trust and HTTPS decryption independently](../media/v0.1.1-alpha.1/workspace-navigation-english/step-006.png)

3. Inspect the matching host in Settings → TLS passthrough. The pictured `localhost` entry makes that host tunnel; box 1 is its delete button. Remove it only when the target permits HTTPS inspection and you intend to restore decryption, without deleting another person’s configuration. Clients using certificate pinning or independent trust stores may still need passthrough. Passthrough still crosses the proxy and configured upstream.

   ![Inspect the localhost passthrough entry and its delete control](../media/v0.1.1-alpha.1/tls-pattern-english/step-015.annotated.png)

4. Establish a new client connection after changing configuration rather than testing an old pooled connection. After removing the `localhost` passthrough entry, this example sends a new GET to `https://localhost:52139/e2e/passthrough/http`. Select its new record and open Response in box 1. This is a `200`, `42 B` HTTP/1.1 response whose complete JSON has `mode: https-h1` and `secure: true`, not HTTP/2.

   ![Inspect the new connection’s HTTPS HTTP/1.1 body after removing passthrough](../media/v0.1.1-alpha.1/tls-pattern-english/step-016.annotated.png)

   The original CONNECT does not become this GET or gain a historical body. Do not keep waiting for the old record to change.

5. Distinguish client distrust of the Interceptor CA from the origin’s own certificate errors. Check client trust for the former and repair the origin certificate first for the latter. The owned `localhost` example above has a separate origin-certificate exception; it does not establish that other targets’ certificate problems are solved. Limit any needed exception to a specific host you control.

Use [decryption](settings.md#https-decryption) or [passthrough](settings.md#tls-passthrough) as appropriate. Do not disable global certificate validation.

<a id="rules"></a>
## A rule has no effect or too much scope

1. Open Rules and check required fields, the enabled state and whether the bottom still says Unsaved changes. Box 1 is the enabled switch for `E2E action variants`; Enabled still requires saving before it affects subsequent requests. Complete missing fields through [rule validation](rules.md#walkthrough-rules-tree-10-invalid) instead of trying to enable an incomplete rule.

   ![Inspect an enabled but unsaved rule](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-013.annotated.png)

2. Click Save at the upper right and wait for Rule set applied in box 1 before sending a new request. Seeing an edit in the editor does not mean it has taken effect.

   ![Confirm the rule has been saved and applied](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-018.annotated.png)

3. Inspect every matching condition: a rule combines them with AND. The separate `E2E hierarchy rule` requires Method `GET`; using `POST` for `http://127.0.0.1:53161/e2e/rules/all-conditions?case=and` fails that condition. Select this new POST and inspect Response Headers in box 1: even with response status `200`, it has no rule-added `x-rules-e2e: active`. See [matching conditions](rules.md#matchers).

   ![Inspect the POST response that fails the GET condition](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-068.annotated.png)

4. Send a new request through the proxy from an external client, not a completed historical record or Composer. For the earlier `E2E action variants`, the example is GET `http://127.0.0.1:62029/e2e/rules/actions/request-set` with original Header `x-e2e-action: original`. Select its new record and inspect Request Headers in box 1: the final value is `from-rule`, while `original` is struck through with Rule replaced. Do not rely solely on hit counts.

   ![Inspect the actual Header rewrite in a new proxied request](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-020.annotated.png)

5. Check whether later rules overwrite an earlier value or short-circuit forwarding with a synthetic response or Block. Box 1 marks Request Headers in both following images. `/e2e/rules/priority/before-drag` ends with `x-rules-e2e: root`: `E2E root priority` runs later and replaces `nested` from `E2E hierarchy rule`.

   ![Inspect final Header value root before reordering](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-119.annotated.png)

   Drag `E2E root priority` before `E2E hierarchy rule`, Save, then request `/e2e/rules/priority/after-drag`. This new request ends with `nested`; historical requests do not change. Follow [rule ordering](rules.md#order) to inspect the actual order and field sources.

   ![Inspect final Header value nested on the new request after reordering](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-124.annotated.png)

6. If scope is too wide, switch the target rule off and Save first. Confirm Disabled at the top and Rule set applied in box 1 before narrowing Host, Path or Query, reviewing, re-enabling and saving. The pictured `E2E action variants` now has response Header and Body actions; disabling the rule stops those actions, not just one field.

   ![Confirm the disabled rule state has been saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-186.annotated.png)

   Retain the last rule, disable it and Save. Deleting the last rule leaves an empty tree without an available Save action; an empty list does not confirm that matching stopped. Resolve existing breakpoint waits separately.

7. If Changed elsewhere · draft kept or a save conflict appears, note the edits you need before clicking Reload in box 1. The pictured local `MCP local draft` and `unapplied-local-value` are discarded as saved rules are reloaded, not automatically merged.

   ![Explicitly Reload after preserving needed edits](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-020.annotated.png)

   Follow [conflict recovery](rules.md#walkthrough-rules-conflict), inspect the latest name, value and revision, edit that tree, Save and check a new request. Do not repeatedly submit an old draft over another caller’s changes.

Check rule hit counts and actual Header or Body effects separately. For body rewrites, also inspect [Original/Final](rules.md#body-status).

<a id="waiting"></a>
## A request keeps waiting

1. Open the breakpoint manager at the top of Capture and inspect the waits in box 1. [Remove filters and clear search](capture.md#walkthrough-capture-filters-13-clear-search) if needed, not the records with Clear. These two POST requests and one PUT share the HTTP queue: the first is Head and the other two are Queued.

   ![Inspect Head and Queued in the HTTP queue](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-005.annotated.png)

2. Select POST `/e2e/queue-rule-post-b` in box 1 to inspect its details. Queued means it is waiting for earlier work; the details are read-only, not a normal network-loading animation or an editor for another Head. This queue example uses `http://127.0.0.1:57756`; check whether your own client is still waiting.

   ![Inspect a queued request’s read-only details](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-007.annotated.png)

3. To handle one item, select the current Head and confirm its request and phase first. This separate single-item example selects POST `http://127.0.0.1:65282/e2e/queue-stepping-a`. Continue in box 1 forwards it unchanged without submitting a replacement-body draft. If it is no longer needed, Drop at the lower left terminates it rather than producing a successful response. Inspect the current waits after the action instead of submitting again to the resolved target.

   ![Choose unchanged Continue or Drop for the selected HTTP Head](../media/v0.1.1-alpha.1/breakpoints-stepping-english/step-004.annotated.png)

4. Before using a batch action, check its scope in Queue actions. Back in the POST/PUT queue example, Continue all from this rule in box 1 releases waits for the current Rule, Continue all in box 2 releases the current HTTP queue, and Drop all in box 3 drops that queue. They are not the same operation on just the selected item and do not include future requests.

   ![Distinguish Rule and HTTP queue scope before a batch action](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-010.annotated.png)

5. Continuing only the POST Rule leaves the original PUT waiting; another PUT, `/e2e/queue-drop-put-b`, has also queued behind it here. Once you have confirmed both PUTs are no longer needed, use Drop all in box 1 to drop the current HTTP queue. Check that the waits disappear and inspect client completion or errors. This batch drop is not the result of the preceding single-item Continue.

   ![Confirm the scope before dropping the remaining HTTP queue](../media/v0.1.1-alpha.1/breakpoints-queue-english/step-013.annotated.png)

6. If there is no breakpoint, check the destination, upstream and client timeout. Open Settings → Upstream proxy and inspect Current route first. The applied route here is System, not an unapplied draft. Check your upstream service is reachable instead of applying a nonexistent proxy to troubleshoot.

   ![Inspect the applied upstream route](../media/v0.1.1-alpha.1/settings-upstream-english/step-001.png)

7. After a client disconnects, inspect the queue again instead of repeatedly submitting old edits to an item that disappeared. If debugging must continue, have the client send another request and select that new wait. Do not apply the old draft to the next request.

There is no fixed automatic continuation timeout. HTTP requests and responses share the HTTP queue; established WebSocket connections have their own message queues. Do not apply an HTTP batch scope to WebSocket. Disabling a rule does not resolve existing waits.

<a id="body"></a>
## The body is incomplete or cannot be formatted

1. Read the body notice first to distinguish a preview limit, receiving data, a network interruption and decoding failure. For the pictured GET `/e2e/rules/actions/header-only`, a rule only sets the response Header to `Content-Encoding: gzip`; the bytes remain uncompressed `{"message":"original-action-body"}`. The viewer reports `Failed to decode gzip body; showing raw bytes.` Copy in box 1 copies the currently displayed text but does not repair the encoding.

   ![Inspect a gzip decoding failure caused by a Header/byte mismatch](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-172.annotated.png)

   This has a different cause from receiving a damaged gzip stream; in both cases, check Content-Encoding against the actual bytes. Inspect [HTTP/2 interruptions](capture.md#walkthrough-capture-http2) and [preview limits](capture.md#walkthrough-capture-body-limits) separately rather than treating all incomplete displays as decode failures.

2. Text preview is limited to `2 MiB`; seeing only that portion does not mean only those bytes were captured.

   For bodies larger than `2 MiB`, preview and Copy can be incomplete. Use Save body for the full captured content as described under [large bodies](capture.md#walkthrough-capture-body-limits).

3. Use manual Format for a supported complete body above `1 MiB` but within the `2 MiB` preview limit. The JSON response for GET `/e2e/body-limits/manual` is about `1.25 MiB`. Click Format in box 1 to add display indentation and line breaks without resending the request or changing its captured response.

   ![Manually Format a complete large JSON body](../media/v0.1.1-alpha.1/capture-body-manual-english/step-003.annotated.png)

   Truncated previews or incompletely received bodies cannot be formatted. Check the notice and control state rather than treating wrapping or indentation as proof of complete reception.

4. Check the views available for the content type; use the offered preview, Hex or Save controls for images and unknown binary too. For audio, select GET `/playground/body/audio` and open Response: its metadata shows `audio/wav`, `48 B`. To keep the bytes, click Save body in box 1, choose a destination in the Save dialog and use filename `body-audio.wav`. The App does not load an audio player or parse duration or codecs.

   ![Inspect the audio MIME, size and Save body control](../media/v0.1.1-alpha.1/capture-audio-metadata-english/step-007.annotated.png)

   For video, inspect Response for GET `/playground/body/video`: its metadata shows `video/mp4`, `24 B`. Save body in box 1 below saves this response’s original bytes; use `body-video.mp4` in the Save dialog if desired. It is not a playback button. No player does not mean no capture, and MIME and size alone do not establish that a file is playable.

   ![Inspect the video metadata and locate Save body](../media/v0.1.1-alpha.1/capture-video-metadata-english/step-011.annotated.png)

5. Use Save body in the body toolbar for a complete file instead of assembling one from Copy. This saves a separate GET response from `/e2e/body-preview/four-byte`, with type `text/javascript; charset=utf-8` and `2097166` bytes (`2 MiB + 14`), not the earlier `1.25 MiB` JSON. Choose a location in the native Save body dialog, use filename `utf8-full-body.txt` and click Save.

   ![Save the complete body beyond the preview limit](../media/v0.1.1-alpha.1/capture-body-save-english/step-049.png)

   After saving, you can close the Inspector and return to the list. The image below retains this GET; it is not a file-completion state. Inspect the actual file at your chosen location: this example should contain `2097166` bytes and the complete `🙂after-preview` ending, not just the preview. Save body preserves captured bytes but cannot recover data never received because the network was interrupted.

   ![Return to the Capture list after saving and closing the Inspector](../media/v0.1.1-alpha.1/capture-body-save-english/step-050.png)

6. For imported HAR, check whether bodies or protocol details were absent in the source.

   Inspect the export options and original file using [body removal during export](settings.md#walkthrough-settings-privacy-export-18-strip-bodies). Import does not restore removed bodies or protocol data that HAR did not retain.

Captured bytes, previews and network completion differ: [body views](capture.md#选择正文查看方式).

<a id="files"></a>
## Import, export or Clear fails

1. Check the format and entry point first. In Capture’s Export menu, box 1 is Export HAR; use Export Archive for a native archive. Rules JSON belongs to the Rules toolbar, and Collection JSON belongs to Composer. Do not interchange their formats or entry points.

   ![Check Capture’s HAR export entry](../media/v0.1.1-alpha.1/capture-har-all-english/step-012.annotated.png)

2. Check whether the native file dialog is still waiting or was cancelled. The HAR filename here is `ui.har`; choose a location and click Save to start saving. Cancel creates no file. For import, select and confirm the file in the correct Open dialog rather than expecting data immediately after clicking Import.

   ![Complete destination selection for ui.har](../media/v0.1.1-alpha.1/capture-har-all-english/step-014.png)

3. Inspect errors, skipped items and terminal state, not just progress. The Rules preview for `rules-roundtrip.json` shows Rules `2`, Folders `1`, Enabled `1`, Skipped `0`. Cancel in box 1 abandons import; Import 2 rules in box 2 appends and saves them, enabling one immediately. Cancel if counts, skipped items or enabled scope are unexpected rather than confirming blindly.

   ![Check Rules import counts, enabled state and confirmation scope](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-008.annotated.png)

4. Confirm the source exists and is readable, the destination is writable and sufficient disk space remains. Inspect Settings → Storage if needed. Do not free space by manually deleting directories the App is using.

5. Wait for an active Capture file task or cancellation cleanup to finish before Clear. Follow [archive cancellation](transfer.md#walkthrough-transfer-cancel) to inspect the outcome. A requested cancellation is not completed cleanup, and a disabled Clear action must not be forced.

6. Check each format’s append and identity behavior. Confirming `rules-roundtrip.json` appends new nodes at the root’s end instead of replacing same-named rules. The pictured tree grows from two rules, one folder and one enabled rule to four rules, two folders and two enabled rules. Importing again appends again; it neither updates existing nodes nor repairs a damaged original file.

   ![Inspect the appended Rules import result](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-011.png)

Retain original files and use the [format guidance](transfer.md#config-files) for partial imports. Do not force-kill the App because a task is waiting or cancellation was requested.

<a id="agent"></a>
## Model, conversation or Tool fails

1. Open Settings → Agent and edit the model you need to inspect. Check Base URL in box 1. The pictured `Keyed lab` uses a local service at `http://127.0.0.1:64325/keyed/v1`; the App does not create it. Use your own service URL and never send a real credential to the example address.

   ![Check the model Base URL](../media/v0.1.1-alpha.1/agent-models-english/step-005.annotated.png)

2. Check Model ID in box 1, `keyed-model` here, rather than the profile name `Keyed lab`. Also check the API key, service reachability, provider quota and permissions. Enter credentials only in the configuration dialog when required.

   ![Check Model ID and service credentials](../media/v0.1.1-alpha.1/agent-models-english/step-006.annotated.png)

3. A previous connection test no longer applies after connection fields change. Here Model ID in box 1 changes to `keyed-model-v2`, disabling Save provider in box 2. This does not mean the Save button is broken.

   ![Changed connection fields require another test](../media/v0.1.1-alpha.1/agent-models-english/step-009.annotated.png)

4. Click Test connection in box 1 and wait for the current configuration’s result. If it fails, correct the address, model or credential according to the displayed error and test again.

   ![Retest the current model configuration](../media/v0.1.1-alpha.1/agent-models-english/step-010.annotated.png)

5. After Connection verified appears, click Save provider in box 1 and inspect the saved name and Model ID in Configured models. Entering fields or closing the dialog does not save them.

   ![Save the newly verified model configuration](../media/v0.1.1-alpha.1/agent-models-english/step-011.annotated.png)

6. If a conversation waits, inspect its Tool approval card first. The pictured `Pause recording after asking for my approval.` requests `capture_stop_recording`. Review its action and effect, then choose Deny Tool in box 1 or Allow Tool in box 2. Waiting for approval is not a model connection failure.

   ![Inspect the Agent Tool awaiting a decision](../media/v0.1.1-alpha.1/agent-execution-english/step-006.annotated.png)

   After Allow, finish any required file dialog or system authorization. For example, [Agent export](agent.md#walkthrough-agent-tool-lifecycle-10-export-request) still needs a destination; App approval does not replace Save or Windows UAC.

7. If a Tool is unavailable, inspect the Agent column in Settings → Agent → Tool capabilities. For `capture_get_proxy_status` here, the Agent switch in box 1 is off while MCP in box 2 remains on. MCP permission does not grant Agent access. Clear search before inspecting all rows or configuring [read-only permissions](tool-permissions.md#read-only); hidden rows are not disabled rows.

   ![Check separate Agent and MCP access to the Tool](../media/v0.1.1-alpha.1/tool-permissions-english/step-004.annotated.png)

8. If the outcome of a send, export or configuration write is uncertain, inspect product state before deciding to Retry. Box 1 already shows Paused here. Stop in box 2 cancels only the ongoing reply; after Response stopped appears, Recording remains paused and the completed `capture_stop_recording` is not undone.

   ![Inspect the completed pause before stopping the reply](../media/v0.1.1-alpha.1/agent-traffic-control-english/step-003.annotated.png)

   ![Recording remains paused after the reply stops](../media/v0.1.1-alpha.1/agent-traffic-control-english/step-004.png)

   A started export is not a saved file. Check the job’s terminal state and actual file instead of repeating sends, exports or writes because a reply is waiting or failed.

9. If a request ID in history is no longer valid, query current Capture again and choose an existing request. Do not guess a new ID or repeatedly submit a stale target.

Signing in to GitHub in VS Code does not configure the internal model. Stop neither undoes completed operations nor substitutes for breakpoint Continue.

<a id="mcp"></a>
## An external host cannot connect

1. Open Settings → Agent and inspect MCP server. The switch in box 1 should be enabled with Running shown; box 2 is the current endpoint, `http://127.0.0.1:57871/mcp` here. Use the complete URL in your own App, not Capture’s `8888`.

   ![Check MCP Server and its current endpoint](../media/v0.1.1-alpha.1/mcp-streamable-english/step-002.annotated.png)

   For `EADDRINUSE` or Port unavailable, follow [MCP endpoint conflicts](mcp.md#endpoint). Identify the port’s owner first and do not stop unknown processes. A saved URL can remain visible without the Server listening.

2. Confirm the Host connects from this computer to its local loopback. A cloud connector cannot reach your App through its own `127.0.0.1`; enabling MCP does not publish it on the LAN or Internet.

3. Check that the Host uses its corresponding Client’s current configuration. After rotating the pictured `MCP workflow client`, use the copy button in box 1, update the Host and reconnect; the old credential stops working immediately. If the endpoint also changed, update its address without recreating the Client solely for that change.

   ![Copy the corresponding Client configuration after rotation](../media/v0.1.1-alpha.1/mcp-streamable-english/step-031.annotated.png)

   Copying does not establish connectivity. After reconnecting, refresh the Host’s Tool list, call the read-only `capture_get_proxy_status` and inspect the result. Do not paste credential-bearing configuration into chats or projects.

4. Check protocol information in box 1 against the Host’s connection method. Interceptor uses Streamable HTTP and supports `2026-07-28`, `2025-11-25` and `2025-06-18`; do not substitute `stdio` or legacy HTTP+SSE configuration. This information remains readable while the Server is Off and does not establish that it has started.

   ![Check the supported MCP protocols](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-002.annotated.png)

5. If connected but missing a particular Tool, inspect the MCP column in Tool capabilities and refresh discovery in the Host. For `rules_replace_tree` here, MCP in box 2 is off while Agent in box 1 remains on. Agent access does not grant MCP access. Restore only the required permission rather than enabling every change capability to troubleshoot.

   ![Inspect the Tool’s independent MCP permission](../media/v0.1.1-alpha.1/tool-permissions-english/step-005.annotated.png)

6. If a change request keeps waiting, return to the App’s MCP approval. This one requests `capture_stop_recording`. Review the Client, arguments and effect, then choose Deny Tool call in box 1 or Allow Tool call in box 2. Denial leaves Recording active.

   ![Inspect the pending MCP recording-pause approval](../media/v0.1.1-alpha.1/mcp-streamable-english/step-012.annotated.png)

7. An approved file Tool still needs its native dialog. This is a separate operation: the `Diagnostics transfer MCP` Client uses `diagnostics_export` to save `mcp.jsonl`. Choose a location and Save to start the export; Cancel starts no export. Then return to the App to inspect the job’s terminal state and check the file at your chosen location instead of treating file selection as a broken connection.

   ![Complete the MCP Diagnostics export’s Save dialog](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-031.png)

   Host approval, App approval, Save and Windows UAC are separate steps. Auto does not choose files or bypass system authorization.

Follow [MCP](mcp.md) through network, authentication, protocol, permission and business errors. Never include Client credentials in a report.

<a id="updates"></a>
## Update checks or downloads fail

1. Confirm you are using an installed App that supports updates rather than a source-development process. Open Settings → Updates and inspect Current application, Latest GitHub release and Last update action separately; the installed version is not a downloadable new release.

   ![Inspect the current App and update state](../media/v0.1.1-alpha.1/settings-update-check-english/step-001.png)

2. Click Check now and wait for the result. Failed with `GitHub returned HTTP 404` means the release source is unavailable, not up-to-date. No update has been downloaded or installed.

   ![Read the update-check failure](../media/v0.1.1-alpha.1/settings-update-check-english/step-003.png)

3. Check the network, release-source address and access conditions. The source needs a suitable anonymously accessible stable release and supported installer; a private repository, prerelease-only state or network restriction can prevent this. Resolve the cause before using Check now again.

4. Use trusted Release assets for the correct OS and architecture, not source archives. Only choose Download after the App shows an available update and you have read its notes, then wait for the download and integrity checks.

5. If download or validation fails, do not run unfinished temporary files. Resolve the error and retry through the product. Choose Open installer only after download and validation finish, then complete the system installation.

The App has no GitHub PAT update-login field.

<a id="proxy-recovery"></a>
## Networking is wrong after quitting

1. Confirm whether the App is minimized, still shutting down or actually stopped; do not start several instances.

   Minimizing the window or closing the Agent panel does not quit the App. Save needed data before normal Close, then wait for pending work and system-proxy restoration.

2. After an abnormal exit, first ensure the old instance is gone, then start Interceptor normally and inspect recovery.

3. Open Settings → Proxy & Listener. If System proxy still says Owned by Interceptor, click Restore in box 1. Complete any system authorization and wait for the result rather than repeatedly clicking or force-killing.

   ![Restore the configuration from before system-proxy ownership](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-001.annotated.png)

   Inspect the recovery message and Current configuration. Here `Original system proxy settings restored.` appears, the state becomes External and the original proxy configuration on port `7890` remains. Restore does not erase all proxies. Compare your own original configuration rather than treating External alone as proof that a networking fault is fixed.

   ![Inspect the restored configuration and External state](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-002.png)

   The listener still says Listening, so clients explicitly using `127.0.0.1:8888` can still pass through Interceptor. Recording controls recording only; Pause does not restore the system proxy, while Enable takes ownership of system routing again. When finished, quit the App normally after restoration without enabling ownership again first.

4. If another application changed proxies, inspect both configurations instead of overwriting newer settings.

5. Retain state/error, App version and OS information if recovery still fails. Have an authorized administrator restore known-good settings.

6. Do not blindly erase all proxies/journals, disable protections or repeatedly force-kill.

<a id="feedback"></a>
## Prepare a reproducible report

- Include App version, OS, architecture and build source.
- Use authorized, credential-free data to explain prerequisites, actions, expectations and actual results.
- Include minimal redacted Diagnostics and a suitable HAR/archive if needed.
- State Rules, Breakpoints, HTTPS and upstream settings that matter.
- Exclude keys, cookies, Client configuration, CA private keys and personal traffic.

Report at [GitHub Issues](https://github.com/zhxmt-xm/Interceptor/issues). The private repository still requires access; a website link does not make it public.
