# Import and export: retain and share evidence

[Guide directory](../README.en.md) · [Capture](capture.md) · [Privacy settings](settings.md#privacy)

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

Start with records you want to retain in Capture. This example has four: two `/e2e/har-tools/text` and two `/e2e/har-tools/binary` records. All, Current filter and Selected request produce four, two and one records from this set. Check your own records and filters rather than assuming these counts.

1. <a id="walkthrough"></a><a id="walkthrough-01-export-menu"></a><a id="walkthrough-02-har-options"></a><a id="walkthrough-transfer-scopes-all-01-menu"></a><a id="walkthrough-transfer-scopes-all-02-har"></a>Pause new recording, open Export in Capture and choose Export HAR in box 1.

   ![Export HAR · 1](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-012.annotated.png)

2. <a id="walkthrough-03-scope"></a><a id="walkthrough-transfer-scopes"></a><a id="walkthrough-transfer-scopes-all-03-scope"></a><a id="walkthrough-04-privacy"></a>Choose All traffic in box 1 and check the four-record count. Review authorization and cookie masks and whether to retain bodies, then click Export 4 requests in box 2.

   ![Export HAR · 2](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-013.annotated.png)

3. <a id="walkthrough-transfer-scopes-all-04-save"></a><a id="walkthrough-05-har-save-dialog"></a>Choose your destination in the system Save dialog and save `ui.har`. Cancelling does not create an output file.

   ![Export HAR · 3](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-014.png)

4. <a id="walkthrough-transfer-scopes-all-05-complete"></a><a id="walkthrough-06-har-complete"></a>Wait for the file to be saved and return to Capture. Box 1 is Export, available for another operation, and box 2 shows recording remains Paused. Confirm the file exists before continuing.

   ![Export HAR · 4](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-015.annotated.png)

5. <a id="walkthrough-transfer-scopes-01-filter"></a><a id="walkthrough-transfer-scopes-02-select"></a>Enter `/e2e/har-tools/text` in Keyword, box 1, to filter the two text records, then select one in box 2. The filtered scope and selected scope are different.

   ![Export HAR · 5](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-016.annotated.png)

6. <a id="walkthrough-transfer-scopes-filtered-01-menu"></a><a id="walkthrough-transfer-scopes-filtered-02-har"></a><a id="walkthrough-transfer-scopes-filtered-03-scope"></a>Open Export HAR again, choose Current filter in box 1 and click Export 2 requests in box 2. It includes both filtered records, not only the selected row.

   ![Export HAR · 6](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-017.annotated.png)

7. <a id="walkthrough-transfer-scopes-filtered-04-save"></a>Save a separate `ui-filter.har` so the all-records file is not unintentionally overwritten.

   ![Export HAR · 7](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-018.png)

8. <a id="walkthrough-transfer-scopes-filtered-05-complete"></a>Wait for saving to finish, then use Export in box 1 for the next operation. The list retains its filter, and export does not delete original records.

   ![Export HAR · 8](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-019.annotated.png)

9. <a id="walkthrough-transfer-scopes-selected-01-menu"></a><a id="walkthrough-transfer-scopes-selected-02-har"></a><a id="walkthrough-transfer-scopes-selected-03-scope"></a>Choose Selected request in box 1, confirm the one-record count and click Export 1 request in box 2. With no selected record, this scope is not a synonym for all records.

   ![Export HAR · 9](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-020.annotated.png)

10. <a id="walkthrough-transfer-scopes-selected-04-save"></a>Save `ui-selected.har` separately and retain the all, filtered and single-record files according to their purpose.

    ![Export HAR · 10](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-021.png)

11. <a id="walkthrough-transfer-scopes-selected-05-complete"></a>Export in box 1 remains available after saving. Before sharing, inspect record counts, bodies and sensitive fields in the actual output file, not only the dialog choices.

    ![Export HAR · 11](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-022.annotated.png)

12. To reopen the data, follow [Import](#import) using a file you just saved. Import appends its records without sending requests or automatically deduplicating them.

    ![Related view from the same workflow](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-022.png)
- HAR cannot losslessly represent HTTP/2 pseudo-headers, trailers, WebSocket messages, TLS detail or full Rule history.
- Compressed responses may be stored as decoded content as required by HAR. File body size alone does not establish whether wire bytes were lost.
- Large bodies increase export memory requirements; no fixed file-size limit does not imply low memory at every scale.
- Export is a snapshot, not an automatic inclusion of traffic arriving afterward.


<a id="archive"></a>

## Save a native archive

Native Archive saves a complete Capture snapshot that Interceptor can reopen. This independent example contains eight records, including HTTP at `/e2e/archive-tools/http` and message connections at `/e2e/archive-tools/websocket`. Check your own data; HAR masks are not automatically applied.

1. <a id="walkthrough-10-har-appended"></a><a id="walkthrough-11-archive-options"></a>Review the records in Capture, open Export and click Save Capture (`.iarchive`) in box 1. If a response is still arriving, decide whether to wait for its complete contents first.

   ![Save a native archive · 1](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-020.annotated.png)

2. Read the snapshot and sensitive-data warnings. Use Cancel in box 1 if not ready to save or share; cancelling this confirmation does not create an archive.

   ![Save a native archive · 2](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-021.annotated.png)

3. When ready, open the same action from Export again and click Save Capture in box 1.

   ![Save a native archive · 3](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-022.annotated.png)

4. <a id="walkthrough-12-archive-save-dialog"></a>Choose your destination in the system Save dialog and save `ui.iarchive`. Do not treat it as Rules or Collection JSON.

   ![Save a native archive · 4](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-023.png)

5. <a id="walkthrough-13-archive-complete"></a>Wait for saving to finish before retaining or sharing the file. Returning to Capture does not clear the original records, which remain available for inspection.

   ![Save a native archive · 5](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-024.png)

- Archives contain unmasked original data; inspect them separately before sharing.
- Rule-hit associations are not a full Rules configuration backup.
- Arbitrary migration across past or future versions is not guaranteed; the current format does not support ZIP64.
- A snapshot of an unfinished connection does not contain bytes that will arrive later.


<a id="import"></a>
## Reopen HAR or native archives

Use a trusted file you have already saved through product Export. HAR and Archive are separate examples below; compare each file’s record count with the current list. Import appends without sending the requests to their origins and does not require Clear first.

1. <a id="walkthrough-07-import-menu"></a><a id="walkthrough-transfer-scopes-import-01-menu"></a>For HAR, open Import in Capture and choose Import HAR in box 1.

   ![Reopen HAR or native archives · 1](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-032.annotated.png)

2. <a id="walkthrough-08-import-har"></a><a id="walkthrough-09-har-open-dialog"></a><a id="walkthrough-transfer-scopes-import-02-har"></a><a id="walkthrough-transfer-scopes-import-03-open"></a>Click Import HAR in box 1 and select the previously saved `ui.har` in the system Open dialog, not an `.iarchive` or configuration JSON file.

   ![Reopen HAR or native archives · 2](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-033.annotated.png)

3. <a id="walkthrough-transfer-scopes-import-04-complete"></a><a id="walkthrough-transfer-scopes-import-05-all"></a>Wait for import to finish. Four entries from `ui.har` append to the original four, making eight. Box 1 marks a new binary record that is not selected yet; the Inspector still shows the earlier text content. Do not mistake those old details for the new row’s body.

   ![Reopen HAR or native archives · 3](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-035.annotated.png)

4. Select the imported `/e2e/har-tools/binary`, open Request and use Copy in box 1 to check the complete `HAR request body`, `16 B`. A binary path does not mean its request body is binary.

   ![Reopen HAR or native archives · 4](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-036.annotated.png)

5. Switch the same record to Response and inspect its six bytes in Hex: `00 01 7f 80 fe ff`. Copy in box 1 copies the current body representation. This is the opposite direction from the preceding request.

   ![Reopen HAR or native archives · 5](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-037.annotated.png)

6. Select an imported `/e2e/har-tools/text` next. Request Copy in box 1 of the first image corresponds to `HAR request body` (`16 B`); Response Copy in box 1 of the second corresponds to `HAR response body` (`17 B`). Check each body rather than only counting records.

   ![Reopen HAR or native archives · 6](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-038.annotated.png)

   ![Reopen HAR or native archives · 6](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-039.annotated.png)

7. Read import warnings. Missing protocol detail or stripped bodies cannot be recreated. Failure or cancellation is not a complete import, even if partial progress was shown.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-039.png)

8. <a id="walkthrough-14-clear"></a>Import does not require an empty list. To reopen an archive into empty Capture, save records you need first, use Capture Clear and wait for cleanup to finish.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-039.png)

9. <a id="walkthrough-15-archive-import"></a>This separate example opens the saved `ui.iarchive` while eight original records remain. Choose Open Capture (`.iarchive`) in box 1 of Import.

   ![Reopen HAR or native archives · 9](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-025.annotated.png)

10. <a id="walkthrough-16-archive-open-dialog"></a>Read the warning, click Open Capture in box 1 and choose that same `ui.iarchive` in the system Open dialog.

    ![Reopen HAR or native archives · 10](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-026.annotated.png)

11. <a id="walkthrough-17-restored"></a>Wait for completion. The archive’s eight records append to the original eight, making sixteen in this example without replacing original records by name.

    ![Reopen HAR or native archives · 11](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-028.png)

12. Select an imported HTTP record, open Response in box 1 and check the complete `archive-response-payload`. This is a text response, not JSON from another example.

    ![Reopen HAR or native archives · 12](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-029.annotated.png)

13. Open the imported WebSocket record, select the message in box 1 and inspect `archive-websocket-payload` and its direction. An archive restores inspectable history, not a new live connection.

    ![Reopen HAR or native archives · 13](../media/v0.1.1-alpha.1/capture-archive-ui-english/step-030.annotated.png)

Repeated imports can append more copies rather than performing incremental synchronization. Unknown files can be large or sensitive; verify their source instead of automatically opening or extracting them to experiment. Reading a file and Recording are separate operations.


<a id="body"></a>
## Save an individual body

Save body writes the complete captured storage bytes, not only the read-only preview. This example is the UTF-8 response to GET `/e2e/body-preview/four-byte`, with `2097166` bytes (`2 MiB + 14`). It is separate from the HAR and archive files above.

1. Select your Capture record and open Request, Response or the relevant message body. This example saves Response; first confirm the direction and selected record.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/capture-body-save-english/step-049.png)

2. Choose Original or Final first when both versions exist. This example has no dual-version comparison; see [original and final bodies](rules.md#effects) for saving rewritten traffic.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/capture-body-save-english/step-049.png)

3. <a id="walkthrough-18-body-save-dialog"></a>Click Save in the body toolbar, choose a destination in the system dialog and save `utf8-full-body.txt`. You choose the filename and location; Copy is not a substitute for saving the complete body.

   ![Save an individual body · 3](../media/v0.1.1-alpha.1/capture-body-save-english/step-049.png)

4. <a id="walkthrough-19-body-complete"></a>Wait for the save to finish and inspect the file with an appropriate tool. The complete example is `2097166` bytes and still ends with `🙂after-preview`, even though the on-screen preview is truncated. The image shows Capture after closing the Inspector, not the file contents or a permanent completion badge.

   ![Save an individual body · 4](../media/v0.1.1-alpha.1/capture-body-save-english/step-050.png)

- Export cannot recover bytes that never arrived before a network interruption.
- Stored content can retain its wire encoding; a saved file is not necessarily directly readable text.
- Audio, video, unknown binary data or oversized images may expose metadata and Save without an in-App player.
- Copy can copy only the preview or formatted display. Use Save body for complete data.


<a id="jobs"></a>
## Progress, cancellation and quitting

Large tasks usually expose progress; small files can finish quickly. Cancelling a running task differs from cancelling a Save dialog before a task starts. This example uses one `128 MiB` binary response without personal traffic.

1. <a id="walkthrough-transfer-cancel"></a><a id="walkthrough-transfer-cancel-01-source"></a>Confirm the `/e2e/transfer-jobs/large-source` response in box 1 has finished arriving. Use only test data you are allowed to save and delete.

   ![Progress, cancellation and quitting · 1](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-004.annotated.png)

2. <a id="walkthrough-transfer-cancel-02-export-menu"></a>Open Export and choose Save Capture in box 1 to begin a native archive.

   ![Progress, cancellation and quitting · 2](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-016.annotated.png)

3. <a id="walkthrough-transfer-cancel-03-archive"></a><a id="walkthrough-transfer-cancel-04-save-dialog"></a>Read the warning, click Save Capture in box 1 and choose `cancel-ui.iarchive` in the system dialog. Cancel in that system dialog cancels file selection, not the running-task action below.

   ![Progress, cancellation and quitting · 3](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-017.annotated.png)

   ![Progress, cancellation and quitting · 3](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-018.png)

4. <a id="walkthrough-transfer-cancel-05-running"></a><a id="walkthrough-transfer-cancel-06-cancel"></a>While Exporting archive is still running, click Cancel transfer in box 1. The `1 of 2 files` progress refers to archive work, not two Capture records.

   ![Progress, cancellation and quitting · 4](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-019.annotated.png)

5. <a id="walkthrough-transfer-cancel-07-cleaned"></a>Wait for cancellation and temporary-file cleanup. UI cancellation closes the progress dialog while the original Capture record remains. Clear in box 1 is a separate later cleanup action, not a substitute for Cancel transfer.

   ![Progress, cancellation and quitting · 5](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-020.annotated.png)

6. <a id="walkthrough-transfer-cancel-08-clear"></a>Clear only after confirming the record is disposable, then check the empty list. Skip this step if the record must remain. Also wait for task cleanup before a normal exit.

   ![Progress, cancellation and quitting · 6](../media/v0.1.1-alpha.1/capture-cancel-ui-english/step-021.png)

- A late Cancel is not Undo for a completed task and should not delete its final saved file.
- Capture Clear neither cancels another file task nor deletes exported files.
- Clear may be rejected during active work or cleanup; do not force a disabled action.
- Started from Agent/MCP means the job was accepted. Query its terminal state; stopping a conversation does not automatically cancel an existing file job.


<a id="config-files"></a>
## Exchange Rules and Collections

Rules and Collection use different JSON formats. These examples use `rules-roundtrip.json` and `collection-roundtrip.json`: Export from the owning feature first, then Import through that same feature.

1. Inspect your tree in Rules, click Export rules and save `rules-roundtrip.json`. This example has two Rules and one folder, with one Rule enabled. Export does not apply unsaved edits for you.

   ![Exchange Rules and Collections · 1](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-005.png)

2. Use Export in the Composer Collection toolbar and save a separate `collection-roundtrip.json`. This example has two requests and one folder. Export does not send them.

   ![Exchange Rules and Collections · 2](../media/v0.1.1-alpha.1/composer-import-english/step-021.png)

3. In Rules, click Import rules and select the saved Rules file. Check Rules `2`, Folders `1`, Enabled `1` and Skipped `0`. Cancel in box 1 cancels the import; Import 2 rules in box 2 appends and saves it, potentially activating the enabled Rule for subsequent traffic.

   ![Exchange Rules and Collections · 3](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-008.annotated.png)

4. Click Cancel first and confirm the existing tree has no additional nodes. This cancels the preview, not the exported file.

   ![Exchange Rules and Collections · 4](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-009.png)

5. Import the same Rules file again and confirm. New nodes append after the existing tree rather than replacing names. This example now has four Rules, two folders and two enabled Rules, without another Save.

   ![Exchange Rules and Collections · 5](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-011.png)

6. In Composer Collection, click Import and choose `collection-roundtrip.json`. Box 1 shows the import preview and box 2 is Cancel. Inspect requests, folders and warnings; do not use a Rules file here.

   ![Exchange Rules and Collections · 6](../media/v0.1.1-alpha.1/composer-import-english/step-025.annotated.png)

7. After Cancel, check the original Collection and open request remain unchanged. Cancellation neither appends data nor triggers Send.

   ![Exchange Rules and Collections · 7](../media/v0.1.1-alpha.1/composer-import-english/step-026.png)

8. Select the same Collection file again, review the preview in box 1 and click the confirmation action in box 2.

   ![Exchange Rules and Collections · 8](../media/v0.1.1-alpha.1/composer-import-english/step-028.annotated.png)

9. Expand the new folder in box 1 and verify the original Collection remains; new content was appended rather than overwritten.

   ![Exchange Rules and Collections · 9](../media/v0.1.1-alpha.1/composer-import-english/step-029.annotated.png)

10. Select the imported request in box 1 and inspect its URL in box 2, then Headers, Query, Body and Auth. Only an explicit Send issues a request; a successful import does not execute it.

    ![Exchange Rules and Collections · 10](../media/v0.1.1-alpha.1/composer-import-english/step-030.annotated.png)

Rules UI exports the current edited tree; Rules Tools export saved configuration, so Save first when appropriate. Repeated imports append again and enabled Rules can match repeatedly. Both file types can contain credentials, addresses, bodies or paths. Review them before sharing; see [Rules](rules.md#import-export) and [Composer](composer.md#导出和导入-collection) for complete workflows.


<a id="privacy"></a>
## Review privacy before sharing

Share only the data needed to reproduce the issue. A selected export format does not establish that the output is anonymized.

1. Narrow the scope first. Box 1 selects one current record and box 2 is Export 1 request. Avoid unintentionally exporting the whole session.

   ![Review privacy before sharing · 1](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-020.annotated.png)

2. Mask Authorization and Cookie/Set-Cookie as needed and decide whether to strip bodies before using Export in box 1. This example enables both masks and Strip bodies.

   ![Review privacy before sharing · 2](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-029.annotated.png)

3. Separately inspect URL queries, usernames, business identifiers, custom headers, local paths and file contents. Default rules cannot identify every sensitive business field.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-029.png)

4. Inspect the final file you will send, not only the App options. In particular, treat native archives and Collection configuration as sensitive files.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-029.png)

5. Describe the App version, system, protocol, steps and actual error in feedback. Do not send CA private keys, model credentials or Client credentials. When unsure, reproduce the issue with minimal credential-free test data.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-029.png)
