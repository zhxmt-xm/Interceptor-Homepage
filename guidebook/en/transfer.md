# Import and export: retain and share evidence

> Draft for `v0.1.1-alpha.1`; actual Save/Open panels and file round trips are illustrated. Cancellation, errors and other unrecorded branches still have gaps; neither this chapter nor item9 is complete. Export success does not make a file safe to publish.

[Guide directory](../README.en.md) · [Capture](capture.md) · [Privacy settings](settings.md#privacy)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:55059/guide/transfer/order</code> |
| <code>har</code> | <code>guide-recording.har</code> |
| <code>archive</code> | <code>guide-recording.iarchive</code> |
| <code>bodyFile</code> | <code>guide-response.json</code> |
| <code>body</code> | <code>{&quot;orderId&quot;:&quot;guide-001&quot;,&quot;message&quot;:&quot;Hello Interceptor&quot;}</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/transfer/transfer.mp4" poster="../media/v0.1.1-alpha.1/transfer/transfer-01-export-menu.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/transfer/transfer.vtt" default>
</video>

<a id="walkthrough-01-export-menu"></a>
### 01 · Open Export

[Video 00:00](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=0.203) · [Back to the video](#walkthrough-video)

![01 · Open Export](../media/v0.1.1-alpha.1/transfer/transfer-01-export-menu.png)

<a id="walkthrough-02-har-options"></a>
### 02 · Choose HAR

[Video 00:03](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=3.084) · [Back to the video](#walkthrough-video)

![02 · Choose HAR](../media/v0.1.1-alpha.1/transfer/transfer-02-har-options.png)

<a id="walkthrough-03-scope"></a>
### 03 · Select the current request

[Video 00:06](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=6.033) · [Back to the video](#walkthrough-video)

![03 · Select the current request](../media/v0.1.1-alpha.1/transfer/transfer-03-scope.png)

<a id="walkthrough-04-privacy"></a>
### 04 · Review privacy options

[Video 00:08](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=8.933) · [Back to the video](#walkthrough-video)

![04 · Review privacy options](../media/v0.1.1-alpha.1/transfer/transfer-04-privacy.png)

<a id="walkthrough-05-har-save-dialog"></a>
### 05 · Save as guide-recording.har

[Video 00:30](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=30.729) · [Back to the video](#walkthrough-video)

![05 · Save as guide-recording.har](../media/v0.1.1-alpha.1/transfer/transfer-05-har-save-dialog.png)

<a id="walkthrough-06-har-complete"></a>
### 06 · Verify HAR completion

[Video 00:35](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=35.598) · [Back to the video](#walkthrough-video)

![06 · Verify HAR completion](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

<a id="walkthrough-07-import-menu"></a>
### 07 · Open Import

[Video 00:38](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=38.882) · [Back to the video](#walkthrough-video)

![07 · Open Import](../media/v0.1.1-alpha.1/transfer/transfer-07-import-menu.png)

<a id="walkthrough-08-import-har"></a>
### 08 · Choose HAR import

[Video 00:41](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=41.690) · [Back to the video](#walkthrough-video)

![08 · Choose HAR import](../media/v0.1.1-alpha.1/transfer/transfer-08-import-har.png)

<a id="walkthrough-09-har-open-dialog"></a>
### 09 · Open the same exported HAR

[Video 00:57](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=57.739) · [Back to the video](#walkthrough-video)

![09 · Open the same exported HAR](../media/v0.1.1-alpha.1/transfer/transfer-09-har-open-dialog.png)

<a id="walkthrough-10-har-appended"></a>
### 10 · Verify appended records

[Video 01:03](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=63.035) · [Back to the video](#walkthrough-video)

![10 · Verify appended records](../media/v0.1.1-alpha.1/transfer/transfer-10-har-appended.png)

<a id="walkthrough-11-archive-options"></a>
### 11 · Choose Native Archive

[Video 01:06](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=66.780) · [Back to the video](#walkthrough-video)

![11 · Choose Native Archive](../media/v0.1.1-alpha.1/transfer/transfer-11-archive-options.png)

<a id="walkthrough-12-archive-save-dialog"></a>
### 12 · Save the native archive

[Video 01:28](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=88.748) · [Back to the video](#walkthrough-video)

![12 · Save the native archive](../media/v0.1.1-alpha.1/transfer/transfer-12-archive-save-dialog.png)

<a id="walkthrough-13-archive-complete"></a>
### 13 · Verify archive completion

[Video 01:33](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=93.692) · [Back to the video](#walkthrough-video)

![13 · Verify archive completion](../media/v0.1.1-alpha.1/transfer/transfer-13-archive-complete.png)

<a id="walkthrough-14-clear"></a>
### 14 · Clear the exported example records

[Video 01:36](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=96.933) · [Back to the video](#walkthrough-video)

![14 · Clear the exported example records](../media/v0.1.1-alpha.1/transfer/transfer-14-clear.png)

<a id="walkthrough-15-archive-import"></a>
### 15 · Open Native Archive

[Video 01:39](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=99.783) · [Back to the video](#walkthrough-video)

![15 · Open Native Archive](../media/v0.1.1-alpha.1/transfer/transfer-15-archive-import.png)

<a id="walkthrough-16-archive-open-dialog"></a>
### 16 · Select the product-created archive

[Video 01:56](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=116.550) · [Back to the video](#walkthrough-video)

![16 · Select the product-created archive](../media/v0.1.1-alpha.1/transfer/transfer-16-archive-open-dialog.png)

<a id="walkthrough-17-restored"></a>
### 17 · Verify restored requests and body

[Video 02:01](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=121.537) · [Back to the video](#walkthrough-video)

![17 · Verify restored requests and body](../media/v0.1.1-alpha.1/transfer/transfer-17-restored.png)

<a id="walkthrough-18-body-save-dialog"></a>
### 18 · Save the individual body

[Video 02:15](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=135.124) · [Back to the video](#walkthrough-video)

![18 · Save the individual body](../media/v0.1.1-alpha.1/transfer/transfer-18-body-save-dialog.png)

<a id="walkthrough-19-body-complete"></a>
### 19 · Verify the complete body

[Video 02:19](../media/v0.1.1-alpha.1/transfer/transfer.mp4#t=139.247) · [Back to the video](#walkthrough-video)

![19 · Verify the complete body](../media/v0.1.1-alpha.1/transfer/transfer-19-body-complete.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="formats"></a>
## Choose the right format

| Need | Use | Not a replacement for |
| --- | --- | --- |
| HTTP interchange with other tools | HAR | All Interceptor protocol details |
| Reopen more complete traffic in Interceptor | Native Archive | Rules, Collection or all App settings |
| One request/response/message payload | Save body | The rest of the session |
| A rule tree | Rules Export JSON | Captured exchanges |
| A request collection | Composer Export collection JSON | Send history or capture archives |
| App operations and errors | Diagnostics JSONL | Bodies or complete protocol capture |

Choose based on the facts you need. Similar file extensions or JSON syntax do not make formats interchangeable.

<a id="har"></a>
## Export HAR

**Prerequisites:** Capture contains the needed traffic. Check filters and selection before choosing scope.

The actual request is `http://127.0.0.1:55059/guide/transfer/order`, body `{"orderId":"guide-001","message":"Hello Interceptor"}`. `55059` is only the recording's dynamic port; use your own test service.

1. Open Capture Export.

   ![Actually opening Export](../media/v0.1.1-alpha.1/transfer/transfer-01-export-menu.png)

2. Select HAR.

   ![HAR configuration after selection](../media/v0.1.1-alpha.1/transfer/transfer-02-har-options.png)

3. This recording selects the current request. All-record and filtered-record branches remain image pending.

   ![Actual current-request scope](../media/v0.1.1-alpha.1/transfer/transfer-03-scope.png)

4. Inspect body inclusion and Authorization/Cookie masking, and read format-loss/sensitive-data warnings. Masking is not universal.

   ![Actual HAR privacy review](../media/v0.1.1-alpha.1/transfer/transfer-04-privacy.png)

5. Confirm export and save `guide-recording.har` in the real native dialog.

   ![Actual native Save panel for guide-recording.har](../media/v0.1.1-alpha.1/transfer/transfer-05-har-save-dialog.png)

6. Wait for completion and inspect this file. Cancelled/failed is not completed.

   ![Actual completion checkpoint for this HAR](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

**Expected result:** a HAR 1.2 file for HTTP interchange.

**Notes**

- HAR cannot preserve all HTTP/2 pseudo-headers, trailers, WebSocket messages, TLS details and rule history.
- Encoded responses may become decoded HAR content; exported content size and wire size can legitimately differ.
- Large HAR bodies can consume substantial memory. No file-size limit does not imply bounded memory for every input.
- Export is a snapshot, not automatic inclusion of later traffic.

<a id="archive"></a>
## Save a native archive

1. Confirm the traffic exists. This image follows the recording's HAR import: it is still `/guide/transfer/order`, not a resent request. Waiting for a long stream remains image pending.

   ![Actual traffic state after this HAR append](../media/v0.1.1-alpha.1/transfer/transfer-10-har-appended.png)

2. Choose Native Archive from Export and review contents/privacy implications.

   ![Actual Native Archive export options](../media/v0.1.1-alpha.1/transfer/transfer-11-archive-options.png)

3. Save `guide-recording.iarchive` in the real native dialog.

   ![Native Save panel for guide-recording.iarchive](../media/v0.1.1-alpha.1/transfer/transfer-12-archive-save-dialog.png)

4. Wait for completion before retaining or sharing.

   ![This native archive actually saved](../media/v0.1.1-alpha.1/transfer/transfer-13-archive-complete.png)

**Expected result:** retain native exchanges and their bodies, including details HAR cannot fully express.

**Notes**

- Native archives retain sensitive source data and do not inherit HAR masking.
- Rule-hit associations are not complete Rules configuration or historical definitions.
- The archive uses the current format, not a promise of migration across arbitrary versions.
- ZIP64 is unsupported; a generic ZIP tool's ability to open something does not prove product compatibility.
- A snapshot of unfinished traffic is not a backup of bytes that will arrive later.

<a id="import"></a>
## Reopen HAR or native archives

**Prerequisites:** use a trusted file. For the first exercise, generate it with product Export.

1. Retain current important data; you do not need to Clear before importing.

   This input is the `guide-recording.har` just exported by the product above. Confirm it finished saving first:

   ![The input HAR actually finished saving](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

2. Open Import.

   ![Actual Import menu](../media/v0.1.1-alpha.1/transfer/transfer-07-import-menu.png)

3. Select HAR import, not Rules/Collection JSON.

   ![Actual HAR import entry](../media/v0.1.1-alpha.1/transfer/transfer-08-import-har.png)

4. Select the same `guide-recording.har` in the real native open dialog.

   ![Native Open panel for that same HAR](../media/v0.1.1-alpha.1/transfer/transfer-09-har-open-dialog.png)

5. Read actual progress, warnings and provided confirmations, then inspect the successful append. Do not assume every format has a Rules-style preview. Error, cancellation and lossy-warning branches remain image pending.

   ![Actual records appended by HAR import](../media/v0.1.1-alpha.1/transfer/transfer-10-har-appended.png)

6. To follow this archive-restoration exercise, finish the preceding Native Archive export, then Clear disposable demo records. Clearing demonstrates restoration; it is not an import prerequisite.

   ![Clearing demo records after the archive was saved](../media/v0.1.1-alpha.1/transfer/transfer-14-clear.png)

7. Choose Import Native Archive.

   ![Actual native archive import entry](../media/v0.1.1-alpha.1/transfer/transfer-15-archive-import.png)

8. Select the just-exported `guide-recording.iarchive` in the native open dialog.

   ![Native Open panel for the same archive](../media/v0.1.1-alpha.1/transfer/transfer-16-archive-open-dialog.png)

9. After success, select the restored record and open its body; check `guide-001` and `Hello Interceptor`.

   ![Actually restored request and JSON body](../media/v0.1.1-alpha.1/transfer/transfer-17-restored.png)

**Expected result:** records are appended. Import does not resend requests.

**Notes**

- Reimporting is not incremental synchronization and may create duplicate records.
- Missing HAR details cannot be reconstructed during import.
- Partial progress does not prove a completed import; use its terminal state.
- Import-only reading does not require hidden Recording state.
- Do not automatically unpack untrusted archives just to see whether they work.

<a id="body"></a>
## Save an individual body

1. Select restored `/guide/transfer/order` and open Response. This is JSON response export, not a WebSocket/gRPC message.

   ![Actual response body to save](../media/v0.1.1-alpha.1/transfer/transfer-17-restored.png)

2. If Original/Final is available, choose the required version first.

   **Image pending:** this example did not switch rule-modified body versions. Ordinary JSON is not evidence of version selection.

3. Use Save body and enter `guide-response.json` in the real native panel.

   ![Actual native panel for saving one body](../media/v0.1.1-alpha.1/transfer/transfer-18-body-save-dialog.png)

4. Wait for completion and use a JSON-capable tool to check `{"orderId":"guide-001","message":"Hello Interceptor"}`.

   ![Actual complete-body save checkpoint](../media/v0.1.1-alpha.1/transfer/transfer-19-body-complete.png)

**Expected result:** save the actual stored captured bytes, not just a `2 MiB` preview.

**Notes:** missing network bytes cannot be recovered. Stored bytes may retain wire content encoding rather than visible text. Media may offer metadata/save only. Copy can represent a preview or formatted view instead of the complete file.

<a id="jobs"></a>
## Progress, cancellation and quitting

1. Observe actual task state, not just a dialog or rising progress count.

   This is the recorded HAR's completed state, not an active job:

   ![Confirming actual file-task completion](../media/v0.1.1-alpha.1/transfer/transfer-06-har-complete.png)

2. Use Cancel if no longer needed and wait for a terminal outcome.

   **Image pending:** the file round trip did not cancel a running job. Native-dialog cancellation and Rules-preview cancellation are different operations.

3. If saving already completed, a late Cancel is not undo; manage the saved file deliberately.

   **Image pending:** late-cancellation races and managing the saved file were not separately recorded.

4. Wait for active operations and cancellation cleanup before Clear or quitting.

   This shows Clear after a completed archive. Clear rejection during an active task, cancellation cleanup and quit waits remain image pending.

   ![Clear only after archive completion](../media/v0.1.1-alpha.1/transfer/transfer-14-clear.png)

**Expected result:** cancellation completes explicitly, errors remain errors and committed output stays completed.

**Notes**

- Capture file operations can reject Clear while holding data.
- Clear neither cancels another task nor deletes prior exports.
- Cancellation is not instantaneous rollback. A late signal must not delete a successfully committed output.
- Agent/MCP “started” results are not “finished.” Query the task; stopping a chat does not necessarily cancel an already-started transfer.

<a id="config-files"></a>
## Exchange Rules and Collections

These are two independent recordings, not interchangeable inputs: Rules uses `guide-rules.json`; Composer uses `guide-collection.json`.

1. Export in the owning feature using its real native save panel.

   ![Rules saving guide-rules.json](../media/v0.1.1-alpha.1/rules-organization/rules-organization-11-export.png)

   ![Composer saving guide-collection.json](../media/v0.1.1-alpha.1/composer-editing/composer-editing-25-export.png)

2. Import through the same feature, selecting its just-generated file in the native open panel.

   ![Rules selecting its just-exported file](../media/v0.1.1-alpha.1/rules-organization/rules-organization-13-import-file.png)

   ![Composer selecting its just-exported collection](../media/v0.1.1-alpha.1/composer-editing/composer-editing-27-import.png)

3. Read each preview's counts, skipped items and effects; pay attention to enabled Rules.

   ![Actual Rules import preview](../media/v0.1.1-alpha.1/rules-organization/rules-organization-14-preview.png)

   ![Actual Collection import preview](../media/v0.1.1-alpha.1/composer-editing/composer-editing-28-preview.png)

4. Cancel unwanted effects. Rules actually cancels first and retains its tree; Collection cancellation remains image pending.

   ![Actually cancelling Rules preview](../media/v0.1.1-alpha.1/rules-organization/rules-organization-15-cancel.png)

5. To continue the Rules exercise, select the same `guide-rules.json` again. Collection proceeds directly from its own preview.

   ![Rules selecting the same file again](../media/v0.1.1-alpha.1/rules-organization/rules-organization-16-import-again.png)

6. Confirm and inspect each append without overwriting existing items.

   ![Confirmed Rules append](../media/v0.1.1-alpha.1/rules-organization/rules-organization-17-confirm.png)

   ![Confirmed Collection append](../media/v0.1.1-alpha.1/composer-editing/composer-editing-29-confirm.png)

**Expected result:** new local identities are appended; matching names do not overwrite existing items.

**Notes:** imported enabled Rules may immediately act on traffic. Collection import does not Send. Rules UI exports drafts; Rules Tools export saved configuration. Review credentials, addresses, bodies and paths before sharing. See [Rules](rules.md#import-export) and [Composer](composer.md#导出和导入-collection).

<a id="privacy"></a>
## Review privacy before sharing

1. Export only the records needed to reproduce the issue.

   ![This example selects only the current demo request](../media/v0.1.1-alpha.1/transfer/transfer-03-scope.png)

2. Mask Authorization/Cookie or remove bodies from HAR as appropriate.

   ![Actual HAR privacy-option location](../media/v0.1.1-alpha.1/transfer/transfer-04-privacy.png)

3. Also inspect query values, usernames, business identifiers, other headers, contents and local paths.

   **Image pending:** field-by-field privacy review has no step images. Public demonstration data does not make arbitrary traffic safe.

4. Recheck the final file, not just dialog options.

   **Image pending:** saving and format validity are not a privacy review; a complete final-file privacy check was not separately recorded.

5. Report version, OS, protocol, steps and actual errors without CA private keys or model credentials.

   **Image pending:** issue creation/submission was not recorded. Credentials will not be published just to provide a screenshot.

**Expected result:** a minimal reproducible artifact you are authorized to disclose.

**Notes:** masking is not universal anonymization. Native archives and configuration exports are sensitive files. When uncertain, reproduce the issue using newly generated credential-free test data.
