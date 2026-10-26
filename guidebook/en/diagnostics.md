# Diagnostics: investigate runtime problems

[Guide directory](../README.en.md) · [Troubleshooting](troubleshooting.md)

<a id="records"></a>
## Select a record and inspect details

When a send, proxy or file operation fails, note its time and the action you performed, then find the matching Diagnostics record. This example uses `main.upstream.apply.failed`; locate your own incident by its actual time and command.

1. <a id="walkthrough"></a><a id="walkthrough-01-open"></a>Open Diagnostics from the sidebar and wait for the list. Use Time, Command, Level, Outcome and Duration to identify when an operation happened, what ran, its severity, result and duration.

   ![Select a record and inspect details · 1](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-037.png)

2. <a id="filters"></a><a id="walkthrough-03-process"></a>Use Process in box 1 to select `main` for this example. Leave it unrestricted when the source is uncertain; `core`, `main` and `renderer` are distinct processes.

   ![Select a record and inspect details · 2](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-038.annotated.png)

3. <a id="walkthrough-04-level"></a><a id="walkthrough-05-info"></a>Select `error` with Level in box 1. Use `warn`, `info` or `debug` as appropriate for other records. No matching result does not mean the logs were lost.

   ![Select a record and inspect details · 3](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-039.annotated.png)

4. <a id="walkthrough-02-record"></a><a id="walkthrough-diagnostics-lifecycle-11-timeline"></a><a id="walkthrough-06-outcome"></a>Select `failed` in Outcome and click the `main.upstream.apply.failed` record matching the incident time. Box 1 shows its process, outcome, duration, error type and related timeline automatically; there is no separate expand-timeline action.

   ![Select a record and inspect details · 4](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-040.annotated.png)

5. <a id="walkthrough-diagnostics-lifecycle-12-widen"></a><a id="walkthrough-diagnostics-lifecycle-18-list-wheel"></a>Drag the divider between list and details to give the timeline more room. Scroll within the relevant pane to read its content while retaining the selected record.

   ![Select a record and inspect details · 5](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-042.png)

6. <a id="walkthrough-diagnostics-lifecycle-14-outcome-timed_out"></a><a id="walkthrough-diagnostics-lifecycle-14-outcome-all"></a><a id="walkthrough-diagnostics-lifecycle-15-process-renderer"></a><a id="walkthrough-diagnostics-lifecycle-15-process-all"></a><a id="walkthrough-diagnostics-lifecycle-16-filters-cleared"></a>Return Process, Level and Outcome to their unrestricted states when you need to search again. Filtering changes the view; it neither deletes records nor clears Capture.

   ![Select a record and inspect details · 6](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-043.png)

7. <a id="walkthrough-diagnostics-lifecycle-17-earlier"></a>Scroll to the bottom of the list and click Load earlier records. The button is at the bottom, but the older records it loads appear at the top. Previously loaded records remain. The button disappears when no earlier records are available; this is different from refreshing the latest records or loading the entire database at once.

   ![Select a record and inspect details · 7](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-044.png)

A record missing from the current screen may still exist. Check filters and pagination first; a filter available to a Tool does not necessarily have a matching page control.


<a id="outcome"></a>
## Distinguish failure, cancellation and unfinished work

Check command completion, job completion and actual network results separately. Logs provide evidence, not a substitute for the business outcome.

1. <a id="walkthrough-diagnostics-lifecycle-04a-upstream"></a><a id="walkthrough-diagnostics-lifecycle-04b-pac-mode"></a><a id="walkthrough-diagnostics-lifecycle-04c-pac-url"></a><a id="walkthrough-diagnostics-lifecycle-04d-pac-failure"></a><a id="walkthrough-diagnostics-lifecycle-04e-discard"></a>Read an error on the operation page first. Box 1 reports a failed PAC application while Current route remains System; the failure did not switch the route. Use Discard changes if the draft is no longer wanted.

   ![Distinguish failure, cancellation and unfinished work · 1](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-036.annotated.png)

2. <a id="walkthrough-diagnostics-lifecycle-05-diagnostics"></a><a id="walkthrough-diagnostics-lifecycle-05a-save-evidence"></a><a id="walkthrough-diagnostics-lifecycle-05b-evidence"></a><a id="walkthrough-diagnostics-lifecycle-06-core"></a><a id="walkthrough-diagnostics-lifecycle-06a-main"></a><a id="walkthrough-diagnostics-lifecycle-07-error"></a><a id="walkthrough-diagnostics-lifecycle-08-success-filter"></a><a id="walkthrough-diagnostics-lifecycle-09-failed-filter"></a><a id="walkthrough-diagnostics-lifecycle-10-select-failed"></a>Find the failure from the same time in Diagnostics. The `main.upstream.apply.failed` record in box 1 matches this operation; an unrelated `success` record does not explain every failure.

   ![Distinguish failure, cancellation and unfinished work · 2](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-040.annotated.png)

3. <a id="walkthrough-diagnostics-lifecycle"></a><a id="walkthrough-diagnostics-lifecycle-01-input"></a><a id="walkthrough-diagnostics-lifecycle-02-send-success"></a><a id="walkthrough-diagnostics-lifecycle-03-failed-input"></a><a id="walkthrough-diagnostics-lifecycle-04-send-failed"></a><a id="walkthrough-diagnostics-lifecycle-19-export"></a><a id="walkthrough-diagnostics-lifecycle-20-exported"></a><a id="walkthrough-diagnostics-lifecycle-21-composer-return"></a><a id="walkthrough-diagnostics-lifecycle-22-good-url"></a><a id="walkthrough-diagnostics-lifecycle-23-recovered"></a>Return to the owning feature to verify recovery. Here Composer sends to the working endpoint and receives `200` with `diagnostics-recovered`. An `info/success` record for `composer.send` can also mean the command successfully returned a network failure result; the log alone does not prove HTTP success.

   ![Distinguish failure, cancellation and unfinished work · 3](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-048.png)

4. <a id="walkthrough-diagnostics-lifecycle-13-level-warn"></a><a id="walkthrough-diagnostics-lifecycle-13-level-info"></a><a id="walkthrough-diagnostics-lifecycle-13-level-debug"></a><a id="walkthrough-diagnostics-lifecycle-13-level-all"></a><a id="walkthrough-diagnostics-lifecycle-14-outcome-cancelled"></a>Distinguish `success`, `failed`, `cancelled` and `timed_out`. Cancellation or timeout filters can be empty; an empty list does not prove those events occurred. Also inspect the actual file and terminal job state for file operations.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-048.png)
Successfully submitting an operation does not complete an asynchronous file job, and a failed step does not prove the destination received no request.


<a id="export"></a>

## Export useful diagnostics

Reproduce the smallest authorized case and note its time. Set Process, Level and Outcome for the issue without excluding its errors. This example clears those filters, so the export includes both successful and failed records.

1. <a id="walkthrough-07-export"></a>After checking the filters, click Export in box 1. Selecting a record for inspection does not limit the export to that row.

   ![Export useful diagnostics · 1](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-045.annotated.png)

2. Choose your own directory and a filename such as `lifecycle.jsonl` in the system Save dialog, then select Save. Use Cancel to abandon it.

   ![Export useful diagnostics · 2](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-046.png)

3. <a id="walkthrough-08-exported"></a>After returning to Diagnostics, check the job and output file rather than treating a visible list as proof of completion. Each JSONL line is a JSON record; it is not HAR and cannot restore missing traffic bodies.

   ![Export useful diagnostics · 3](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-047.png)

4. Inspect business identifiers and other identifying data before sharing. Include reproduction steps, time, version, operating system and the actual error. Do not send model keys, MCP credentials, CA private keys or personal traffic; exporting does not upload anything automatically.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-047.png)
Records are redacted during collection and export, but still inspect the actual file. See [file transfers](transfer.md#jobs) for cancellation and completion states.


<a id="tools"></a>

## Query through Agent or MCP

Enable only the Diagnostics permissions you need and scope the model’s request by source, time clues and operation. Queries are read-only; `diagnostics_export` is a separately authorized change.

1. Use `diagnostics_get_recent` for recent records in the current Core memory. This example passes `limit: 200` and receives a record count and droppedCount; it is not an unrestricted history query.

   ![Query through Agent or MCP · 1](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-003.png)

2. Take traceId from an actual returned record and pass it to `diagnostics_get_trace`. The example returns two records for that trace. Do not guess an ID or add an unsupported limit argument.

   ![Query through Agent or MCP · 2](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-005.png)

3. Use `diagnostics_query` for persisted history and pagination with its actual schema. Recent/Trace retain the current Core memory order rather than providing newest-first database pagination.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-005.png)

4. Review the `diagnostics_export` arguments: process `core`, level `info` and outcome `success` here. Deny Tool in box 1 refuses the operation; Allow Tool in box 2 continues. Choosing Deny does not open Save.

   ![Query through Agent or MCP · 4](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-009.annotated.png)

   ![Query through Agent or MCP · 4](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-010.png)

5. For another request, box 1 can still refuse it and box 2 permits that call. Even after Allow, cancelling the system Save dialog returns Export canceled without starting an export job.

   ![Query through Agent or MCP · 5](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-012.annotated.png)

   ![Query through Agent or MCP · 5](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-014.png)

6. When ready to save, review the new approval: box 1 is Deny and box 2 is Allow. After allowing, choose a destination in the real Save dialog, `agent.jsonl` here, and confirm Save.

   ![Query through Agent or MCP · 6](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-016.annotated.png)

   ![Query through Agent or MCP · 6](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-017.png)

7. Export job Running or started means the job began, not that the file is complete. Check the file and terminal result rather than relying on the model’s statement that it is done.

   ![Query through Agent or MCP · 7](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-018.png)

8. Selecting Agent Auto in box 1 still leaves system Save dialogs in place. This example saves `auto.jsonl`; Auto does not choose a path for you.

   ![Query through Agent or MCP · 8](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-019.annotated.png)

   ![Query through Agent or MCP · 8](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-021.png)

9. An external MCP Client uses its own approval. Review the client, Tool and arguments, click Allow Tool call in box 1, then save `mcp.jsonl` in the system dialog. An Agent approval does not authorize this MCP call.

   ![Query through Agent or MCP · 9](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-030.annotated.png)

   ![Query through Agent or MCP · 9](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-031.png)

10. MCP Client Auto also retains file selection; the image still requires Save for `mcp-auto.jsonl`. Revoke permissions for the relevant entry point when finished rather than removing unrelated configuration.

    ![Query through Agent or MCP · 10](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-033.png)

See [Tool permissions](tool-permissions.md#walkthrough-tool-permissions-readonly) for read-only configuration and the [Tool reference](tool-reference.md#diagnostics) for argument boundaries.


<a id="limits"></a>
## What Diagnostics cannot prove

- Missing logs do not prove no network traffic occurred.
- It does not record every HTTP/2 frame or associate every session/stream precisely with requests. Normal records cannot reconstruct all SETTINGS, RST_STREAM or GOAWAY traffic.
- Records are not automatically discarded by a retention-days/count setting. Capture Clear is not a full Diagnostics-history deletion action.
- A hidden internal attribute is not permission for AI to infer or reconstruct it elsewhere.
