# Diagnostics: investigate runtime problems

> Draft for `v0.1.1-alpha.1`. Actual query and native JSONL export steps are illustrated; fault and Tool branches still have gaps. Neither this chapter nor item9 is complete. Diagnostics records operations, not every network frame.

[Guide directory](../README.en.md) · [Troubleshooting](troubleshooting.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>requestUrl</code> | <code>http://127.0.0.1:54599/guide/diagnostics</code> |
| <code>method</code> | <code>GET</code> |
| <code>command</code> | <code>composer.send</code> |
| <code>process</code> | <code>core</code> |
| <code>level</code> | <code>info</code> |
| <code>outcome</code> | <code>success</code> |
| <code>fileName</code> | <code>guide-diagnostics.jsonl</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4" poster="../media/v0.1.1-alpha.1/diagnostics/diagnostics-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/diagnostics/diagnostics.vtt" default>
</video>

<a id="walkthrough-01-open"></a>
### 01 · Open Diagnostics

[Video 00:00](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=0.423) · [Back to the video](#walkthrough-video)

![01 · Open Diagnostics](../media/v0.1.1-alpha.1/diagnostics/diagnostics-01-open.png)

<a id="walkthrough-02-record"></a>
### 02 · Select an actual record

[Video 00:03](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=3.322) · [Back to the video](#walkthrough-video)

![02 · Select an actual record](../media/v0.1.1-alpha.1/diagnostics/diagnostics-02-record.png)

<a id="walkthrough-03-process"></a>
### 03 · Filter by Process

[Video 00:06](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=6.133) · [Back to the video](#walkthrough-video)

![03 · Filter by Process](../media/v0.1.1-alpha.1/diagnostics/diagnostics-03-process.png)

<a id="walkthrough-04-level"></a>
### 04 · Filter by Level

[Video 00:08](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=8.993) · [Back to the video](#walkthrough-video)

![04 · Filter by Level](../media/v0.1.1-alpha.1/diagnostics/diagnostics-04-level.png)

<a id="walkthrough-05-info"></a>
### 05 · Select the info level

[Video 00:11](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=11.824) · [Back to the video](#walkthrough-video)

![05 · Select the info level](../media/v0.1.1-alpha.1/diagnostics/diagnostics-05-info.png)

<a id="walkthrough-06-outcome"></a>
### 06 · Inspect successful operations

[Video 00:14](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=14.707) · [Back to the video](#walkthrough-video)

![06 · Inspect successful operations](../media/v0.1.1-alpha.1/diagnostics/diagnostics-06-outcome.png)

<a id="walkthrough-07-export"></a>
### 07 · Save guide-diagnostics.jsonl

[Video 00:28](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=28.128) · [Back to the video](#walkthrough-video)

![07 · Save guide-diagnostics.jsonl](../media/v0.1.1-alpha.1/diagnostics/diagnostics-07-export.png)

<a id="walkthrough-08-exported"></a>
### 08 · Verify the actual JSONL export

[Video 00:32](../media/v0.1.1-alpha.1/diagnostics/diagnostics.mp4#t=32.242) · [Back to the video](#walkthrough-video)

![08 · Verify the actual JSONL export](../media/v0.1.1-alpha.1/diagnostics/diagnostics-08-exported.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="records"></a>
## Select a record and inspect details

**Purpose:** locate a failed request send, file operation, proxy action or runtime event.

1. Note the operation and time. This reference uses the supplementary recording's successful `GET http://127.0.0.1:54599/guide/diagnostics`, command `composer.send`. `54599` is its dynamic recording port, not a public service or failed-request example.

   **Image pending:** this clip starts in Diagnostics, without the preceding Composer input/Send. A Composer image using another port cannot stand in for this operation.

2. Open Diagnostics and wait for the list to update.

   ![Opening the actual Diagnostics list](../media/v0.1.1-alpha.1/diagnostics/diagnostics-01-open.png)

3. Select a matching record and inspect process, command, level, outcome and duration.

   Recorded values are `core` / `composer.send` / `info` / `success`; time and duration are record-specific.

   ![Selecting the actual successful composer.send record](../media/v0.1.1-alpha.1/diagnostics/diagnostics-02-record.png)

4. Select a record and read the related timeline shown automatically on the right. There is no separate “expand timeline” button.

   ![The actual failed upstream operation and automatic timeline](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-11-timeline.png)

**Expected result:** connect a visible user action to actual runtime records instead of guessing from one error sentence.

**Notes:** Main, Core and Renderer are different sources. The UI does not expose every internal attribute or log complete command payloads and request bodies.

<a id="filters"></a>
## Narrow the query

1. Select this example's `core` Process; keep all if the source is uncertain.

   ![Actual Process filtering](../media/v0.1.1-alpha.1/diagnostics/diagnostics-03-process.png)

2. Use Level and observe the changed list; temporarily empty results are not necessarily missing logs.

   ![Actual intermediate Level filter state](../media/v0.1.1-alpha.1/diagnostics/diagnostics-04-level.png)

3. Select this command's `info` level.

   ![Selecting info](../media/v0.1.1-alpha.1/diagnostics/diagnostics-05-info.png)

4. Limit Outcome to `success`.

   ![Actual success-only results](../media/v0.1.1-alpha.1/diagnostics/diagnostics-06-outcome.png)

5. Confirm list/selection belong to this operation; clear filters when necessary.

   ![Process, Level and Outcome all returned to all](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-16-filters-cleared.png)

6. Load earlier records and wait for the page to appear.

   ![Loading history produced by real Composer operations](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-17-earlier.png)

7. Resize the list/detail split and scroll through complete content.

   ![Resizing the list/detail divider](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-12-widen.png)

   ![Scrolling actual historical records](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-18-list-wheel.png)

**Expected result:** filtering changes the view, not stored records. Loading older results differs from receiving recent ones.

**Notes:** the screen is not the complete database. Tool filters follow their real schema; internal fields are not automatically UI controls.

<a id="outcome"></a>
## Distinguish failure, cancellation and unfinished work

1. Check whether the operation has reached a terminal state.

   This shows the actual `composer.send` success, not a failed, cancelled or still-running example.

   ![Actual successful terminal state](../media/v0.1.1-alpha.1/diagnostics/diagnostics-02-record.png)

2. Inspect the error summary and process, then verify state in the owning feature.

   In this example, enter an owned PAC URL returning 404 in Settings, observe Apply fail, discard the draft, then select `main.upstream.apply.failed`. The [recording](#walkthrough-diagnostics-lifecycle) includes input and recovery.

   ![Selecting the actual main-process failure](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-10-select-failed.png)

3. For networking, inspect client/origin results; for files, task completion; for proxies, actual ownership.

   A Composer network failure can still have an `info/success` record for `composer.send`: the command successfully returned a network-failure result, not an HTTP success. Return to Composer and Send against the working owned service to verify actual recovery.

   ![A real network failure rather than a command exception](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-04-send-failed.png)

   ![Checking the successful response after another Send](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-23-recovered.png)

4. Do not conflate user cancellation, destination rejection, protocol errors and App failures.

   The `cancelled` or `timed_out` filter can be empty; that is not evidence of an actual timeout. See [native Save cancellation](agent.md#walkthrough-agent-tool-lifecycle-12-cancel-native) and [cancelling a running archive](transfer.md#walkthrough-transfer-cancel) for real user cancellation.

   ![The actual results of selecting cancelled](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-14-outcome-cancelled.png)

**Expected result:** a specific investigation direction, not an assumption that one successful intermediate record means the entire operation succeeded.

**Notes:** an accepted UI intent may start an unfinished file task. A reported failure also does not prove the server received nothing.

<a id="export"></a>
## Export useful diagnostics

1. Reproduce the smallest authorized scenario and note time, version and OS.

   The basic clip uses a successful `composer.send`. The [additional recording](#walkthrough-diagnostics-lifecycle-04a-upstream) also shows an actual Apply failure from an owned PAC URL returning 404. Both use macOS x64, `0.1.1-alpha.1`; no failure logs are fabricated.

2. This example uses Process `core`, Level `info`, Outcome `success`. Adjust to your own records for an actual fault rather than filtering out the needed errors.

   ![Selecting core](../media/v0.1.1-alpha.1/diagnostics/diagnostics-03-process.png)

   ![Selecting info](../media/v0.1.1-alpha.1/diagnostics/diagnostics-05-info.png)

   ![Selecting success](../media/v0.1.1-alpha.1/diagnostics/diagnostics-06-outcome.png)

3. Use Export and save `guide-diagnostics.jsonl` in the real native dialog.

   ![Real native Save panel for guide-diagnostics.jsonl](../media/v0.1.1-alpha.1/diagnostics/diagnostics-07-export.png)

4. Wait for completion and inspect the output.

   ![Actual JSONL export check](../media/v0.1.1-alpha.1/diagnostics/diagnostics-08-exported.png)

5. Review privacy, then share steps, expected behavior and the actual error.

   This is a safety requirement before sharing, not an automatic upload step. This tutorial did not send the exported file to a third party; completing export is not permission to share it unchecked.

**Expected result:** line-delimited JSON useful for diagnosis, without sending the entire App data directory.

**Notes**

- Recording/export redaction does not eliminate every business identifier; review the final file.
- JSONL is not HAR and cannot recover missing captured bodies.
- Do not share model keys, MCP credentials, CA private keys or personal traffic.
- Starting export does not prove completion. See [file tasks](transfer.md#jobs).

<a id="tools"></a>
## Query through Agent or MCP

1. Enable only required Diagnostics query tools.

   The [complete read-only recording](tool-permissions.md#walkthrough-tool-permissions-readonly) disables change entries individually and retains query entries, including Diagnostics. Explicitly grant `diagnostics_export` separately when export is needed.

2. Limit the AI task to the source, time clues and operation instead of requesting unrelated history.

   ![Agent querying actual Recent records for a limited goal](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-08-diagnostics-recent.png)

3. Distinguish current Core memory snapshots from persistent queries.

   Read the current Core snapshot with `diagnostics_get_recent`, then pass the returned `traceId` to `diagnostics_get_trace`. Use `diagnostics_query` for persistent records. Do not add a nonexistent `limit` argument to `diagnostics_get_trace` or treat it as an arbitrary-history query.

   ![Reading Trace with the just-returned traceId](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-09-read-trace.png)

4. Approve export separately and complete its native file window.

   The [Agent recording](agent.md#walkthrough-agent-tool-lifecycle-10-export-request) and [MCP recording](mcp.md#walkthrough-mcp-tool-lifecycle-08-export-ask) each include actual approval, native Save cancellation, saving again and querying job completion.

   ![Agent approval still requires a real save destination](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-14-native-save.png)

**Expected result:** AI receives the necessary redacted context while you choose export destinations.

**Notes:** `diagnostics_get_trace` and `diagnostics_get_recent` are current-Core snapshots, not unlimited history. The trace query has current-trace/count limits. See [Tool reference](tool-reference.md#diagnostics).

<a id="limits"></a>
## What Diagnostics cannot prove

- Missing logs do not prove no network traffic occurred.
- It does not record every HTTP/2 frame or associate every session/stream precisely with requests. Normal records cannot reconstruct all SETTINGS, RST_STREAM or GOAWAY traffic.
- Records are not automatically discarded by a retention-days/count setting. Capture Clear is not a full Diagnostics-history deletion action.
- A hidden internal attribute is not permission for AI to infer or reconstruct it elsewhere.

<!-- recorded-walkthrough:diagnostics-lifecycle:start -->
<a id="walkthrough-diagnostics-lifecycle"></a>
## Actual failure, filters, history and JSONL

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>successUrl</code> | <code>http://127.0.0.1:60694/guide/diagnostics-visible/success</code> |
| <code>failureUrl</code> | <code>http://127.0.0.1:60696/guide/diagnostics-failure</code> |
| <code>unavailablePac</code> | <code>http://127.0.0.1:60694/guide/diagnostics-visible/unavailable.pac</code> |
| <code>failedOrigin</code> | <code>Owned loopback TCP service closes its accepted connection</code> |
| <code>history</code> | <code>120 real Composer Send operations prepared before filming, not seeded diagnostic rows</code> |
| <code>command</code> | <code>composer.send</code> |
| <code>failedAction</code> | <code>main.upstream.apply.failed</code> |
| <code>failureFilter</code> | <code>main / error / failed</code> |
| <code>clearedFilter</code> | <code>all / all / all</code> |
| <code>outcomeBoundary</code> | <code>Composer returns a normal command result with ok=false for network failure; diagnostic success does not imply HTTP success</code> |
| <code>file</code> | <code>guide-diagnostics-lifecycle.jsonl</code> |
| <code>timeline</code> | <code>Shown automatically for the selected operation; not an expandable control</code> |

<a id="walkthrough-diagnostics-lifecycle-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4" poster="../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-01-input.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.vtt" default>
</video>

<a id="walkthrough-diagnostics-lifecycle-01-input"></a>
### 01 · Enter the visible success example

[Video 00:00](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=0.394) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![01 · Enter the visible success example](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-01-input.png)

<a id="walkthrough-diagnostics-lifecycle-02-send-success"></a>
### 02 · Actually Send and verify the successful response

[Video 00:03](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=3.409) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![02 · Actually Send and verify the successful response](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-02-send-success.png)

<a id="walkthrough-diagnostics-lifecycle-03-failed-input"></a>
### 03 · Enter the owned endpoint that closes its connection

[Video 00:06](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=6.492) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![03 · Enter the owned endpoint that closes its connection](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-03-failed-input.png)

<a id="walkthrough-diagnostics-lifecycle-04-send-failed"></a>
### 04 · Observe the real network failure

[Video 00:09](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=9.508) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![04 · Observe the real network failure](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-04-send-failed.png)

<a id="walkthrough-diagnostics-lifecycle-04a-upstream"></a>
### 05 · Open the owned PAC failure example

[Video 00:12](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=12.536) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![05 · Open the owned PAC failure example](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-04a-upstream.png)

<a id="walkthrough-diagnostics-lifecycle-04b-pac-mode"></a>
### 06 · Choose a PAC draft

[Video 00:15](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=15.664) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![06 · Choose a PAC draft](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-04b-pac-mode.png)

<a id="walkthrough-diagnostics-lifecycle-04c-pac-url"></a>
### 07 · Enter the owned PAC URL that returns 404

[Video 00:18](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=18.719) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![07 · Enter the owned PAC URL that returns 404](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-04c-pac-url.png)

<a id="walkthrough-diagnostics-lifecycle-04d-pac-failure"></a>
### 08 · Observe actual Apply failure while retaining the route

[Video 00:21](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=21.729) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![08 · Observe actual Apply failure while retaining the route](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-04d-pac-failure.png)

<a id="walkthrough-diagnostics-lifecycle-04e-discard"></a>
### 09 · Discard the failed draft without changing saved configuration

[Video 00:24](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=24.868) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![09 · Discard the failed draft without changing saved configuration](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-04e-discard.png)

<a id="walkthrough-diagnostics-lifecycle-05-diagnostics"></a>
### 10 · Open Diagnostics

[Video 00:27](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=27.901) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![10 · Open Diagnostics](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-05-diagnostics.png)

<a id="walkthrough-diagnostics-lifecycle-05a-save-evidence"></a>
### 11 · Export current records before filtering

[Video 00:43](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=43.163) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![11 · Export current records before filtering](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-05a-save-evidence.png)

<a id="walkthrough-diagnostics-lifecycle-05b-evidence"></a>
### 12 · Inspect the actual exported outcome classifications

[Video 00:47](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=47.649) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![12 · Inspect the actual exported outcome classifications](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-05b-evidence.png)

<a id="walkthrough-diagnostics-lifecycle-06-core"></a>
### 13 · Filter by core process

[Video 00:50](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=50.649) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![13 · Filter by core process](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-06-core.png)

<a id="walkthrough-diagnostics-lifecycle-06a-main"></a>
### 14 · Switch to the failed action’s main process

[Video 00:53](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=53.798) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![14 · Switch to the failed action’s main process](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-06a-main.png)

<a id="walkthrough-diagnostics-lifecycle-07-error"></a>
### 15 · Filter by error level

[Video 00:56](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=56.869) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![15 · Filter by error level](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-07-error.png)

<a id="walkthrough-diagnostics-lifecycle-08-success-filter"></a>
### 16 · Inspect the success outcome combination

[Video 00:59](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=59.908) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![16 · Inspect the success outcome combination](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-08-success-filter.png)

<a id="walkthrough-diagnostics-lifecycle-09-failed-filter"></a>
### 17 · Switch to failed outcomes

[Video 01:02](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=62.921) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![17 · Switch to failed outcomes](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-09-failed-filter.png)

<a id="walkthrough-diagnostics-lifecycle-10-select-failed"></a>
### 18 · Select the actually failed upstream action

[Video 01:05](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=65.945) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![18 · Select the actually failed upstream action](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-10-select-failed.png)

<a id="walkthrough-diagnostics-lifecycle-11-timeline"></a>
### 19 · Read the automatically shown related timeline

[Video 01:08](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=68.993) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![19 · Read the automatically shown related timeline](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-11-timeline.png)

<a id="walkthrough-diagnostics-lifecycle-12-widen"></a>
### 20 · Drag the Diagnostics splitter

[Video 01:11](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=71.977) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![20 · Drag the Diagnostics splitter](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-12-widen.png)

<a id="walkthrough-diagnostics-lifecycle-13-level-warn"></a>
### 21 · Cycle Level to warn

[Video 01:15](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=75.497) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![21 · Cycle Level to warn](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-13-level-warn.png)

<a id="walkthrough-diagnostics-lifecycle-13-level-info"></a>
### 22 · Cycle Level to info

[Video 01:18](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=78.532) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![22 · Cycle Level to info](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-13-level-info.png)

<a id="walkthrough-diagnostics-lifecycle-13-level-debug"></a>
### 23 · Cycle Level to debug

[Video 01:21](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=81.568) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![23 · Cycle Level to debug](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-13-level-debug.png)

<a id="walkthrough-diagnostics-lifecycle-13-level-all"></a>
### 24 · Cycle Level to all

[Video 01:24](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=84.599) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![24 · Cycle Level to all](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-13-level-all.png)

<a id="walkthrough-diagnostics-lifecycle-14-outcome-cancelled"></a>
### 25 · Cycle Outcome to cancelled

[Video 01:27](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=87.627) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![25 · Cycle Outcome to cancelled](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-14-outcome-cancelled.png)

<a id="walkthrough-diagnostics-lifecycle-14-outcome-timed_out"></a>
### 26 · Cycle Outcome to timed_out

[Video 01:30](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=90.640) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![26 · Cycle Outcome to timed_out](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-14-outcome-timed_out.png)

<a id="walkthrough-diagnostics-lifecycle-14-outcome-all"></a>
### 27 · Cycle Outcome to all

[Video 01:33](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=93.657) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![27 · Cycle Outcome to all](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-14-outcome-all.png)

<a id="walkthrough-diagnostics-lifecycle-15-process-renderer"></a>
### 28 · Cycle Process to renderer

[Video 01:36](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=96.677) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![28 · Cycle Process to renderer](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-15-process-renderer.png)

<a id="walkthrough-diagnostics-lifecycle-15-process-all"></a>
### 29 · Cycle Process to all

[Video 01:39](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=99.701) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![29 · Cycle Process to all](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-15-process-all.png)

<a id="walkthrough-diagnostics-lifecycle-16-filters-cleared"></a>
### 30 · Verify all three filters are cleared

[Video 01:42](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=102.732) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![30 · Verify all three filters are cleared](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-16-filters-cleared.png)

<a id="walkthrough-diagnostics-lifecycle-17-earlier"></a>
### 31 · Load the actual earlier page

[Video 01:45](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=105.821) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![31 · Load the actual earlier page](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-17-earlier.png)

<a id="walkthrough-diagnostics-lifecycle-18-list-wheel"></a>
### 32 · Scroll the real history list

[Video 01:49](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=109.118) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![32 · Scroll the real history list](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-18-list-wheel.png)

<a id="walkthrough-diagnostics-lifecycle-19-export"></a>
### 33 · Save this Diagnostics JSONL

[Video 02:02](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=122.469) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![33 · Save this Diagnostics JSONL](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-19-export.png)

<a id="walkthrough-diagnostics-lifecycle-20-exported"></a>
### 34 · Verify the actual export, not just the dialog

[Video 02:06](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=126.942) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![34 · Verify the actual export, not just the dialog](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-20-exported.png)

<a id="walkthrough-diagnostics-lifecycle-21-composer-return"></a>
### 35 · Return to Composer, which produced the records

[Video 02:09](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=129.945) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![35 · Return to Composer, which produced the records](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-21-composer-return.png)

<a id="walkthrough-diagnostics-lifecycle-22-good-url"></a>
### 36 · Return to the working owned service

[Video 02:13](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=133.053) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![36 · Return to the working owned service](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-22-good-url.png)

<a id="walkthrough-diagnostics-lifecycle-23-recovered"></a>
### 37 · Send again and verify actual recovery

[Video 02:16](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle.mp4#t=136.067) · [Back to the video](#walkthrough-diagnostics-lifecycle-video)

![37 · Send again and verify actual recovery](../media/v0.1.1-alpha.1/diagnostics-lifecycle/diagnostics-lifecycle-23-recovered.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:diagnostics-lifecycle:end -->
