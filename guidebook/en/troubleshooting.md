# Troubleshooting and recovery

> Draft for `v0.1.1-alpha.1`; actual inspection locations and representative results are illustrated, with unrecorded faults marked individually. Not every diagnostic scenario or item9 is complete. Preserve evidence and narrow the cause before altering installation, storage or protection.

[Guide directory](../README.en.md) · [Diagnostics](diagnostics.md) · [Settings](settings.md)

Images reuse actual operations from the owning chapters to locate checks. A healthy-state image is not a reproduced fault. Requests, rules and Clients belong to their own examples, and pictured ports are recording-specific assignments.

<a id="no-traffic"></a>
## Capture shows no request

1. Confirm startup, Recording and readiness.

   This reuses Capture's enabled Recording state. First readiness prompts and authorization remain image pending.

   ![Actually enabling Recording in Capture](../media/v0.1.1-alpha.1/capture/capture-02-record.png)

2. Clear search/filter conditions, not captured data.

   **Image pending:** restoring `/guide/capture` is not clearing every condition and does not demonstrate this step.

3. Send one identifiable test request and inspect client DNS/connection errors.

   This is Capture's successful `/guide/capture/orders` arrival. Client DNS/connection failures remain image pending.

   ![Actual external test request arriving in Capture](../media/v0.1.1-alpha.1/capture/capture-03-request.png)

4. Confirm the client actually uses `127.0.0.1:8888`; not every client follows system proxy settings.

   **Image pending:** individual client proxy-settings windows were not recorded. App listener status is not client configuration.

5. On Windows, inspect [AppContainer access](settings.md#app-containers) where applicable. Other network stacks may bypass WinINet.

   **Image pending / blocked:** a Windows AppContainer environment is needed; existing recordings are macOS.

6. For a Composer request, inspect Composer's response. Absence from Capture is its direct-send boundary, not a Recording fault. This is Composer's `/guide/composer`, not orders above.

   ![Composer direct response in its own response area](../media/v0.1.1-alpha.1/composer/composer-04-send.png)

Distinguish no request, no proxy routing, no recording and a hidden filtered result.

<a id="tls"></a>
## HTTPS is only a tunnel or has a certificate error

1. Tunnel metadata can prove routing, not decryption.

   **Image pending:** the protocol recording has no undecrypted tunnel state; plaintext HTTP/2 cannot substitute.

2. Check actual CA, trust and decryption state.

   This reuses Settings' existing trusted CA, not repairing a faulty machine. See [Settings](settings.md#https-decryption) for the decryption control.

   ![Actual CA and trust inspection location](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

3. Inspect passthrough, pinning and independent trust stores.

   ![Actual TLS passthrough inspection location](../media/v0.1.1-alpha.1/settings/settings-09-passthrough.png)

   **Image pending:** client pinning and independent trust-store inspection were not recorded.

4. Reconnect after changing settings rather than testing an old pooled connection.

   This reuses Capture's new `/playground/h2-json` connection with decryption ready, not proof that every TLS failure was fixed.

   ![Actual new decrypted HTTP/2 request](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

5. Distinguish client distrust of the Interceptor CA from an origin-certificate error.

   **Image pending:** a diagnostic comparison of those errors is missing. Adding a controlled localhost exception is not error diagnosis itself.

Use [decryption](settings.md#https-decryption) or [passthrough](settings.md#tls-passthrough) as appropriate. Do not disable global certificate validation.

<a id="rules"></a>
## A rule has no effect or too much scope

1. Check for an unapplied draft, disabled state or missing fields.

   These are `Guide test header`'s actual enable and Apply states; missing-field errors remain image pending.

   ![Enabled editing stage still requiring Apply](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

   ![Actual state after Apply](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

2. Inspect every matcher: one rule combines them with AND.

   This is the separate `Guide matchers`: POST fails Method `GET`, not the Header example unexpectedly failing.

   ![Actual AND negative case failing Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-24-no-match.png)

3. Send a new external proxied request, not a historical record or Composer request.

   ![New matching request for Guide test header](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

4. Inspect later overwrites, synthetic responses or blocking rules.

   This reuses `Guide first` / `Guide second` ordering: final `x-guide-order` changes from `second` to `first`. Independent synthetic/Block examples are in [Rules](rules.md#block-delay).

   ![Later writer second before reordering](../media/v0.1.1-alpha.1/rules-organization/rules-organization-03-before.png)

   ![Later writer first after reordering](../media/v0.1.1-alpha.1/rules-organization/rules-organization-06-after.png)

5. If scope is too wide, disable and Apply before narrowing Host/Path/Query.

   This actually disables `Guide test header`. A faulty broad scope followed by narrowing was not recorded; this is not a claimed fault repair.

   ![Actually disabling and applying the test rule](../media/v0.1.1-alpha.1/rules/rules-14-disable.png)

6. On conflict, preserve needed edits before explicit Reload and re-edit. Reload discards the draft.

   **Image pending / blocked:** a two-writer conflict and Reload recovery were not recorded.

A hit count and a concrete effect are different. Check [actual results](rules.md#effects).

<a id="waiting"></a>
## A request keeps waiting

1. Inspect pending breakpoints, clearing filters if necessary.

   This reuses `Guide request breakpoint`'s actual wait; clearing filters remains image pending.

   ![Actual pending request breakpoint](../media/v0.1.1-alpha.1/breakpoints/breakpoints-12-pending.png)

2. Distinguish queue head and Queued from network loading.

   **Image pending:** requests were handled one at a time, with no simultaneous Queued items.

3. Continue or drop unneeded waits after confirming batch scope.

   These belong to two different requests in Breakpoints, not two decisions on one resolved target. Batch branches remain image pending.

   ![One actual unchanged continuation](../media/v0.1.1-alpha.1/breakpoints/breakpoints-17-unmodified.png)

   ![A different actual Drop](../media/v0.1.1-alpha.1/breakpoints/breakpoints-19-drop.png)

4. If no breakpoint exists, check destination, upstream and client timeouts.

   ![Actual upstream inspection location in Settings](../media/v0.1.1-alpha.1/settings/settings-04-upstream.png)

   **Image pending:** destination/client timeouts were not recorded; this only shows the inspection location.

5. Requery after client disconnection rather than repeatedly submitting an old ID.

   **Image pending:** client disconnection, stale IDs and requery were not recorded as a round trip.

There is no fixed automatic continuation timeout. Disabling matching is not proof that all existing waits have been resolved.

<a id="body"></a>
## The body is incomplete or cannot be formatted

1. Distinguish preview limits, receiving data, actual interruption and decode failure.

   This reuses Capture's corrupt-gzip warning, showing decode failure only. Receiving, interruption and oversized-preview branches remain image pending.

   ![Actual corrupt-gzip decoding warning](../media/v0.1.1-alpha.1/capture/capture-29-encoding-corrupt-gzip.png)

2. A `2 MiB` text preview does not prove only that much was captured.

   **Image pending:** oversized-text preview and complete-file comparison were not recorded step by step.

3. Use manual Format for complete `1–2 MiB` content; truncated/incomplete data is not formatted.

   **Image pending:** Format in that size range and refusal for incomplete data were not recorded.

4. Images, unknown binary or media can offer metadata and Save only.

   These are Capture's actual audio/video metadata. Oversized-image and unknown-binary metadata-only branches remain image pending.

   ![Actual audio metadata](../media/v0.1.1-alpha.1/capture/capture-29-body-audio.png)

   ![Actual video metadata](../media/v0.1.1-alpha.1/capture/capture-29-body-video.png)

5. Save actual captured bytes instead of assembling a large file from Copy.

   These reuse Transfer's small JSON saved as `guide-response.json`: actual native panel and completion, demonstrating the action rather than large-file boundaries.

   ![Actual Save body native panel](../media/v0.1.1-alpha.1/transfer/transfer-18-body-save-dialog.png)

   ![Actual saved-body completion checkpoint](../media/v0.1.1-alpha.1/transfer/transfer-19-body-complete.png)

6. For imported HAR, check whether bodies or protocol details were absent in the source.

   **Image pending:** the normal HAR round trip is not a removed-body or missing-protocol comparison.

Captured bytes, previews and network completion differ: [body views](capture.md#选择正文查看方式).

<a id="files"></a>
## Import, export or Clear fails

1. Check the correct HAR/archive/Rules/Collection entry.

   This reuses Capture Export; Rules/Collection use their own features. Their actual native panels are in the [format procedures](transfer.md#config-files).

   ![Actual Capture format entry](../media/v0.1.1-alpha.1/transfer/transfer-01-export-menu.png)

2. Look for a waiting or cancelled native dialog.

   This is the real Save panel awaiting confirmation of `guide-recording.har`; native-dialog cancellation remains image pending.

   ![Actual native save panel still needing a user decision](../media/v0.1.1-alpha.1/transfer/transfer-05-har-save-dialog.png)

3. Inspect errors, skipped items and terminal state, not only progress.

   This reuses normal Rules import preview for counts/enabled warnings. Corrupt-file errors, actual skipped items and task failures remain image pending.

   ![Actual Rules preview, not a failure result](../media/v0.1.1-alpha.1/rules-organization/rules-organization-14-preview.png)

4. Check file existence/readability, destination access and available space.

   **Image pending:** OS file permissions and disk-space diagnosis were not recorded.

5. Wait for Capture file operations or cancellation cleanup before Clear.

   **Image pending:** Clear refusal during a running/cancelling task was not recorded.

6. Apply the format's append/identity rules; repeated imports do not overwrite.

   This accurately reuses the `guide-rules.json` append result; it is not a corrupt-file repair.

   ![Rules actually appending without overwriting](../media/v0.1.1-alpha.1/rules-organization/rules-organization-17-confirm.png)

Retain original files. Do not delete active storage or force-kill merely because cancellation was requested.

<a id="agent"></a>
## Model, conversation or Tool fails

1. Check Base URL, Model ID, credentials, reachability and provider quota/permission.

   These only locate the local Agent demonstration's actual fields, not a failed test. Paid-provider credential/quota/authorization checks are image pending / blocked.

   ![Local demonstration Base URL inspection location](../media/v0.1.1-alpha.1/agent/agent-06-endpoint.png)

   ![Actual guide-demo-model Model ID](../media/v0.1.1-alpha.1/agent/agent-07-model.png)

2. Retest changed configuration; old verification cannot save a different draft.

   **Image pending:** invalidated verification after editing and the retest/save recovery were not recorded.

3. Inspect Tool approval, OS authorization or native file windows if a chat waits.

   This is a normal Ask wait for `Pause recording after asking me.`, not a hung model. Agent native-authorization/file-wait branches remain image pending.

   ![Actual Agent Tool awaiting user approval](../media/v0.1.1-alpha.1/agent/agent-18a-tool-question.png)

4. Check the Agent column, not MCP, and clear search to see all switches.

   This permissions image only shows Agent `capture_clear` disabled. Clearing search and actual rejected execution remain image pending.

   ![Actual state with only Agent disabled](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

5. Inspect real state before retrying a possibly completed send/change.

   **Image pending:** existing Stop/Retry uses a stream demo, not a failed operation that already sent a request or wrote configuration.

6. Requery current Capture identities after restart.

   **Image pending:** historical IDs becoming invalid after Core restart and requery were not recorded.

VS Code GitHub login is not internal model setup. Stop does not undo completed effects.

<a id="mcp"></a>
## An external host cannot connect

1. Check App/Server state and the actual endpoint, not `8888`.

   This is the recorded `http://127.0.0.1:65443/mcp`; `65443` is recording-specific. Separate runtime `EADDRINUSE` and restart `endpoint-conflict` steps are in [MCP](mcp.md#endpoint).

   ![Actual running MCP Server](../media/v0.1.1-alpha.1/mcp/mcp-03-enable.png)

2. Confirm local loopback access rather than a cloud-originated connection.

   **Image pending / blocked:** this uses a local SDK, without commercial/cloud-host deployment or reachability pages.

3. Update the host after credential rotation or endpoint changes.

   This is `Guide local client` configuration update and SDK reconnection after rotation. Real host updates after endpoint changes remain image pending.

   ![Copying new configuration and reconnecting after rotation](../media/v0.1.1-alpha.1/mcp/mcp-14c-update-client.png)

4. Match transport/protocol; do not substitute stdio or legacy SSE.

   This shows the App's protocol information location; external host transport configuration remains image pending.

   ![Actual App MCP protocol information location](../media/v0.1.1-alpha.1/mcp/mcp-02-mcp.png)

5. If discovery is empty, check MCP authorization and host discovery state.

   This only shows MCP `capture_clear` disabled, not an empty host tool list. Actual discovery failure remains image pending.

   ![Actual MCP cleanup switch state from permissions](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

6. For waiting changes, inspect App approvals and native prompts.

   ![Actual pending MCP Pause approval](../media/v0.1.1-alpha.1/mcp/mcp-09-ask.png)

   **Image pending:** this Pause has no native window and cannot demonstrate another Tool's file or UAC wait.

Follow [MCP](mcp.md) in order. Never include Client credentials in an issue.

<a id="updates"></a>
## Update checks or downloads fail

1. Confirm a supported packaged App, not development Electron.

   ![Release App version page from the Settings recording](../media/v0.1.1-alpha.1/settings/settings-15-updates.png)

2. Distinguish failed from up-to-date.

   **Image pending:** the clip only inspects the current page, without an operational comparison of failed/up-to-date results.

3. A suitable anonymously accessible stable release is required; private sources, prerelease-only state or network restrictions can prevent it.

   **Image pending / blocked:** an anonymously accessible supported stable source is missing; source diagnosis was not recorded.

4. Use trusted Release assets for the correct OS/architecture, not source archives.

   **Image pending / blocked:** actual Release downloading was not recorded and the private repository requires access.

5. Never run unfinished/unverified temporary files. Resolve the cause and retry formally.

   **Image pending / blocked:** download/verification failures and recovery were not recorded. A version page is not a substitute.

The App has no GitHub PAT update-login field.

<a id="proxy-recovery"></a>
## Networking is wrong after quitting

1. Confirm whether the App is minimized, still shutting down or actually stopped; do not start several instances.

   **Image pending:** minimized, shutting-down and stopped-process states were not compared. Closing Agent is not App exit.

2. After an abnormal exit, first ensure the old instance is gone, then start Interceptor normally and inspect recovery.

   **Image pending / blocked:** abnormal-exit recovery was not recorded. Do not manufacture footage by force-killing.

3. Use System proxy Restore or quit normally after recovery finishes.

   **Image pending:** Settings' System proxy inspection was read-only, without Restore and its terminal state.

4. If another application changed proxies, inspect both configurations instead of overwriting newer settings.

   **Image pending / blocked:** a controlled two-writer system-proxy environment is missing; others' networking is not changed for screenshots.

5. Retain state/error, App version and OS information if recovery still fails. Have an authorized administrator restore known-good settings.

   **Image pending:** no actual proxy-recovery fault and administrator handling was recorded. Successful Diagnostics cannot impersonate its failure log.

6. Do not blindly erase all proxies/journals, disable protections or repeatedly force-kill.

   **Image-pending note:** this is a safety constraint, not a dangerous demonstration to execute. Proper recovery still needs the preceding step images.

**Expected result:** recover owned changes without overwriting another application's configuration. Temporary connectivity alone is not proof of correct system state.

<a id="feedback"></a>
## Prepare a reproducible report

- Include App version, OS, architecture and build source.
- Use authorized, credential-free data to explain prerequisites, actions, expectations and actual results.
- Include minimal redacted Diagnostics and a suitable HAR/archive if needed.
- State Rules, Breakpoints, HTTPS and upstream settings that matter.
- Exclude keys, cookies, Client configuration, CA private keys and personal traffic.

Report at [GitHub Issues](https://github.com/zhxmt-xm/Interceptor/issues). The private repository still requires access; a website link does not make it public.
