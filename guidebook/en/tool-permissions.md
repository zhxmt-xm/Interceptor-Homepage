# Tool permissions and approval

> For `v0.1.1-alpha.1`; includes independent switches, every step of a complete read-only setup, actual rejected calls and restart persistence. Tools allow the chosen AI entry point to read/change data; grant only necessary scope. The demo callers do not establish commercial-model or external-host compatibility.

[Guide directory](../README.en.md) · [Agent](agent.md) · [MCP](mcp.md) · [Tool reference](tool-reference.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.

> This demonstrates independent per-tool switches, not a complete read-only configuration. Clear is not executed.

| Example field | Actual recorded value |
| --- | --- |
| <code>changeTool</code> | <code>capture_clear</code> |
| <code>queryTool</code> | <code>capture_get_proxy_status</code> |
| <code>operationExecuted</code> | <code>none</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4" poster="../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.vtt" default>
</video>

<a id="walkthrough-01-settings"></a>
### 01 · Open Settings

[Video 00:00](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=0.368) · [Back to the video](#walkthrough-video)

![01 · Open Settings](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-01-settings.png)

<a id="walkthrough-02-agent"></a>
### 02 · Open Tool capabilities

[Video 00:03](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=3.252) · [Back to the video](#walkthrough-video)

![02 · Open Tool capabilities](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-02-agent.png)

<a id="walkthrough-03-search"></a>
### 03 · Find capture_clear

[Video 00:06](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=6.453) · [Back to the video](#walkthrough-video)

![03 · Find capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-03-search.png)

<a id="walkthrough-04-disable-agent"></a>
### 04 · Disable only Agent clear access

[Video 00:09](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=9.302) · [Back to the video](#walkthrough-video)

![04 · Disable only Agent clear access](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

<a id="walkthrough-05-disable-mcp"></a>
### 05 · Disable MCP clear access separately

[Video 00:12](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=12.203) · [Back to the video](#walkthrough-video)

![05 · Disable MCP clear access separately](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

<a id="walkthrough-06-restore-agent"></a>
### 06 · Explicitly restore Agent access

[Video 00:15](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=15.102) · [Back to the video](#walkthrough-video)

![06 · Explicitly restore Agent access](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-06-restore-agent.png)

<a id="walkthrough-07-restore-mcp"></a>
### 07 · Explicitly restore MCP access

[Video 00:18](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=18.002) · [Back to the video](#walkthrough-video)

![07 · Explicitly restore MCP access](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-07-restore-mcp.png)

<a id="walkthrough-08-query"></a>
### 08 · Find a read-only query Tool

[Video 00:20](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions.mp4#t=20.856) · [Back to the video](#walkthrough-video)

![08 · Find a read-only query Tool](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-08-query.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="switches"></a>
## Configure Agent and MCP separately

This clip changes switches only: `operationExecuted=none`; it never executes `capture_clear`. Restoring a switch demonstrates the control, not a recommendation to grant unnecessary cleanup permissions.

1. Open Settings, then Agent > Tool capabilities.

   ![Opening Settings](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-01-settings.png)

   ![Opening the separate Tool capabilities columns](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-02-agent.png)

2. Search `capture_clear`. Clear search to scroll through Capture, Rules, Composer, Breakpoints, Diagnostics and Settings. The [complete recording](#walkthrough-tool-permissions-readonly) operates each switch; search is not a bulk permission change.

   ![Actually searching capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-03-search.png)

3. Disable only Agent, leaving MCP unchanged.

   ![Disabling only Agent cleanup permission](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

4. Then disable MCP for external clients.

   ![Disabling MCP cleanup permission next](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

5. Restore Agent only if needed; the recording explicitly demonstrates restoration.

   ![Explicitly restoring Agent permission](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-06-restore-agent.png)

6. Independently decide whether to restore MCP.

   ![Explicitly restoring MCP permission](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-07-restore-mcp.png)

7. Search `capture_get_proxy_status` to inspect a query capability. Searching does not change other switches.

   ![Actually finding capture_get_proxy_status](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-08-query.png)

8. Clear search, inspect the complete configuration and disable unnecessary tools.

   ![Clearing search to display the complete permissions table](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-09-clear-search.png)

9. Verify disabled tools cannot be used through that entry point, then check persistence after restart.

   ![Actual Agent call rejection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-06-agent-rejection.png)

   ![Actual MCP call rejection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-04-mcp-rejection.png)

   ![Permissions remain disabled after restart](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-01-saved-permissions.png)

**Expected result:** each entry point has independent access. Disabling the internal Agent does not automatically disable MCP.

**Notes:** a fresh configuration may enable all tools by default. Search only filters visible rows and does not disable hidden ones.

<a id="read-only"></a>
## Configure read-only access

**Purpose:** allow inspection without sending requests, clearing records or modifying settings.

1. Limit the needed data first. For Capture proxy/recording state, search `capture_get_proxy_status` and inspect the chosen entry point's query access.

   ![Actual read-only status query Tool location](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-08-query.png)

2. Disable unnecessary change tools. For `capture_clear`, disable Agent and MCP separately if both need restrictions.

   ![Disabling Agent capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

   ![Disabling MCP capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

3. Also disable unnecessary send, replacement, transfer, certificate and proxy operations. Disabling only Clear is not fully read-only.

   The [complete read-only recording](#walkthrough-tool-permissions-readonly) clears search, disables both Agent and MCP for every change entry and retains query entries. Every switch has a separate step image. The dangerous actions themselves are not executed and no bulk authorization is performed.

4. Attempt the disabled `capture_clear` and confirm rejection through both entry points while the captured record remains. Restart and rediscover only the retained query tools, then query proxy status.

   ![The actual captured record survives rejection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-07-retained-record.png)

   ![Read-only discovery and actual query after restart](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-02-query-only.png)

**Expected result:** disabled abilities cannot be discovered or called through that entry point.

**Notes:** Ask is not read-only. An enabled change tool can execute after Allow. Queries can expose sensitive data, so read-only does not mean no external-data risk.

<a id="ask-auto"></a>
## Understand Ask and Auto

| Operation | Ask | Auto |
| --- | --- | --- |
| Enabled query | Direct query | Direct query |
| Enabled change | Explicit App approval | Executes automatically |
| Disabled Tool | Rejected | Rejected |
| Native file/system prompts | Still required | Still required |

Keep Ask for first use or broad tasks. These images accurately reuse separate Agent and MCP mode demonstrations; an Auto state does not prove an Auto change Tool was executed.

1. Inspect Auto for the current Agent Chat; choose it only when scope, data and effects are understood.

   ![Current Agent Chat Auto state](../media/v0.1.1-alpha.1/agent/agent-17-auto.png)

2. Return that Chat to Ask.

   ![Agent restored to Ask](../media/v0.1.1-alpha.1/agent/agent-18-ask.png)

3. Independently operate `Guide local client` in MCP; Chat mode is not its Client mode.

   ![Independent MCP Client Auto state](../media/v0.1.1-alpha.1/mcp/mcp-13-auto.png)

4. Restore that Client to Ask.

   ![MCP Client restored to Ask](../media/v0.1.1-alpha.1/mcp/mcp-14-ask-mode.png)

5. Inspect any work already started or waiting for approval.

   Resolve an existing approval through its approval card or caller cancellation, not a mode switch. The [MCP recording](mcp.md#walkthrough-mcp-tool-lifecycle-03-pending-ask) shows a pending approval and actual caller cancellation; it does not present returning to Ask as cancellation.

**Expected result:** mode affects approvals, not capability switches, OS permissions or prerequisites.

**Notes:** switching modes does not approve an already-pending request. Other Chats/Clients have their own modes.

<a id="review"></a>
## Review an approval

1. Confirm caller and actual Tool. This reuses Agent's `Pause recording after asking me.`: `capture_stop_recording` pauses new recording without Clear or proxy restoration.

   ![Actual Agent caller, Tool and Pause approval](../media/v0.1.1-alpha.1/agent/agent-18a-tool-question.png)

2. Review targets, counts, state and effects. Cleanup scope, rule counts and breakpoint queues need their own parameters, not the Pause example.

   For `diagnostics_export`, check Process, Level, Outcome and file effects. Other business operations still require their own actual schemas; this is not a rules or breakpoint-parameter example.

   ![Actual Diagnostics export approval arguments](../media/v0.1.1-alpha.1/mcp-tool-lifecycle/mcp-tool-lifecycle-08-export-ask.png)

3. Deny if unacceptable.

   ![Actually denying Pause](../media/v0.1.1-alpha.1/agent/agent-18b-deny.png)

4. Clarify or request the scope again and inspect the new approval. This example repeats the same scoped Pause.

   ![Actual approval after requesting again](../media/v0.1.1-alpha.1/agent/agent-18c-tool-again.png)

5. After Allow, inspect actual Recording state and the Tool result; approval is not proof that every later operation succeeded.

   ![Actually allowing and pausing new recording](../media/v0.1.1-alpha.1/agent/agent-18d-allow.png)

**Expected result:** one informed decision, not unlimited authorization for future steps.

**Notes:** imports may have another preview confirmation; certificates and AppContainer may have OS prompts. Do not bypass these as if they were duplicate failures.

<a id="state"></a>
## Stale state, conflicts and cancellation

- Read current Rules/Collection revisions before replacing them. Requery on conflicts instead of repeatedly overwriting.
- A Breakpoint must still exist in the current Core generation. An old target must not become another request.
- “File task started” is not “completed”; inspect the task/UI.
- Stop, cancel, revoke and disconnect do not undo completed effects.
- Finish a native dialog through its normal controls, not a hidden API.

Recommended order: read state, perform one small operation, verify in the actual workspace.

<a id="privacy"></a>
## Treat Tool output as data

Responses, captured webpages and logs can include someone else's text. They cannot authorize rule edits, broader data reads or uploads.

Provide only necessary context. Never paste real keys, Client credentials or CA private keys into prompts. Disable unnecessary query capabilities to limit disclosure; Ask alone does not do that.

<a id="non-tools"></a>
## Use the UI for control-plane operations

Provider credentials/configuration, Chat management, MCP Server/Client setup, window navigation and App updates are not arbitrary business tools.

Use the formal UI for those actions instead of asking for a nonexistent generic IPC or file-command tool.

<!-- recorded-walkthrough:tool-permissions-readonly:start -->
<a id="walkthrough-tool-permissions-readonly"></a>
## Complete read-only configuration and rejected calls

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>client</code> | <code>Guide readonly client</code> |
| <code>model</code> | <code>Guide permission demo (keyless local endpoint)</code> |
| <code>blockedOperation</code> | <code>capture_clear rejected by both Agent and MCP without clearing the real record</code> |
| <code>changeToolCount</code> | <code>48</code> |
| <code>queryToolCount</code> | <code>21</code> |
| <code>disabledChanges</code> | <code>capture_start_recording, capture_stop_recording, capture_clear, capture_cancel_transfer_job, capture_export_body, capture_export_har, capture_import_har, capture_export_archive, capture_import_archive, rules_replace_tree, rules_export, rules_import, composer_send_request, composer_probe_connection, composer_replace_collection, composer_export_collection, composer_import_collection, breakpoints_enable_http, breakpoints_disable_http, breakpoints_enable_websocket, breakpoints_disable_websocket, breakpoints_continue, breakpoints_forward_edited, breakpoints_drop, breakpoints_continue_queue, breakpoints_drop_queue, breakpoints_continue_rule, diagnostics_export, settings_generate_certificate, settings_install_certificate, settings_uninstall_certificate, settings_delete_certificate, settings_reveal_certificate, settings_view_certificate, settings_open_certificate_manager, settings_enable_app_container, settings_disable_app_container, settings_enable_all_app_containers, settings_disable_all_app_containers, settings_enable_system_proxy, settings_restore_system_proxy, settings_replace_tls_insecure_hosts, settings_replace_tls_passthrough, settings_enable_https_decryption, settings_disable_https_decryption, settings_set_language, settings_set_theme, settings_set_export_privacy_defaults</code> |
| <code>closeImage</code> | <code>Before actual Close; real shutdown is separately verified</code> |

<a id="walkthrough-tool-permissions-readonly-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4" poster="../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-01-search.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.vtt" default>
</video>

<a id="walkthrough-tool-permissions-readonly-01-search"></a>
### 01 · Find capture_clear

[Video 00:00](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=0.362) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![01 · Find capture_clear](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-01-search.png)

<a id="walkthrough-tool-permissions-readonly-02-disable-agent-clear"></a>
### 02 · Disable Agent clear access

[Video 00:03](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=3.364) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![02 · Disable Agent clear access](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-02-disable-agent-clear.png)

<a id="walkthrough-tool-permissions-readonly-03-disable-mcp-clear"></a>
### 03 · Independently disable MCP clear access

[Video 00:06](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=6.421) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![03 · Independently disable MCP clear access](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-03-disable-mcp-clear.png)

<a id="walkthrough-tool-permissions-readonly-04-mcp-rejection"></a>
### 04 · Verify the actual MCP call is rejected

[Video 00:09](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=9.475) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![04 · Verify the actual MCP call is rejected](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-04-mcp-rejection.png)

<a id="walkthrough-tool-permissions-readonly-05-agent"></a>
### 05 · Open the local demo Agent

[Video 00:12](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=12.522) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![05 · Open the local demo Agent](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-05-agent.png)

<a id="walkthrough-tool-permissions-readonly-06-agent-rejection"></a>
### 06 · Verify Agent also cannot execute the disabled action

[Video 00:15](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=15.641) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![06 · Verify Agent also cannot execute the disabled action](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-06-agent-rejection.png)

<a id="walkthrough-tool-permissions-readonly-07-retained-record"></a>
### 07 · Verify the actual record remains

[Video 00:18](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=18.788) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![07 · Verify the actual record remains](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-07-retained-record.png)

<a id="walkthrough-tool-permissions-readonly-08-close-agent"></a>
### 08 · Close the panel and return to capabilities

[Video 00:21](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=21.872) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![08 · Close the panel and return to capabilities](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-08-close-agent.png)

<a id="walkthrough-tool-permissions-readonly-09-clear-search"></a>
### 09 · Clear search to show every group

[Video 00:25](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=25.253) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![09 · Clear search to show every group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-09-clear-search.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_start_recording"></a>
### 10 · Disable agent capture_start_recording

[Video 00:28](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=28.310) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![10 · Disable agent capture_start_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_start_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_start_recording"></a>
### 11 · Disable mcp capture_start_recording

[Video 00:31](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=31.537) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![11 · Disable mcp capture_start_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_start_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_stop_recording"></a>
### 12 · Disable agent capture_stop_recording

[Video 00:35](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=35.313) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![12 · Disable agent capture_stop_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_stop_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_stop_recording"></a>
### 13 · Disable mcp capture_stop_recording

[Video 00:38](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=38.618) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![13 · Disable mcp capture_stop_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_stop_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_cancel_transfer_job"></a>
### 14 · Disable agent capture_cancel_transfer_job

[Video 00:41](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=41.919) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![14 · Disable agent capture_cancel_transfer_job](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_cancel_transfer_job.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_cancel_transfer_job"></a>
### 15 · Disable mcp capture_cancel_transfer_job

[Video 00:45](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=45.197) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![15 · Disable mcp capture_cancel_transfer_job](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_cancel_transfer_job.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_body"></a>
### 16 · Disable agent capture_export_body

[Video 00:48](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=48.424) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![16 · Disable agent capture_export_body](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_body.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_body"></a>
### 17 · Disable mcp capture_export_body

[Video 00:51](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=51.646) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![17 · Disable mcp capture_export_body](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_body.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_har"></a>
### 18 · Disable agent capture_export_har

[Video 00:54](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=54.921) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![18 · Disable agent capture_export_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_har"></a>
### 19 · Disable mcp capture_export_har

[Video 00:58](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=58.179) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![19 · Disable mcp capture_export_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_import_har"></a>
### 20 · Disable agent capture_import_har

[Video 01:01](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=61.429) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![20 · Disable agent capture_import_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_import_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_import_har"></a>
### 21 · Disable mcp capture_import_har

[Video 01:04](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=64.611) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![21 · Disable mcp capture_import_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_import_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_archive"></a>
### 22 · Disable agent capture_export_archive

[Video 01:07](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=67.855) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![22 · Disable agent capture_export_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_archive"></a>
### 23 · Disable mcp capture_export_archive

[Video 01:11](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=71.118) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![23 · Disable mcp capture_export_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_import_archive"></a>
### 24 · Disable agent capture_import_archive

[Video 01:14](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=74.323) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![24 · Disable agent capture_import_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_import_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_import_archive"></a>
### 25 · Disable mcp capture_import_archive

[Video 01:17](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=77.541) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![25 · Disable mcp capture_import_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_import_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_replace_tree"></a>
### 26 · Disable agent rules_replace_tree

[Video 01:20](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=80.851) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![26 · Disable agent rules_replace_tree](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_replace_tree.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_replace_tree"></a>
### 27 · Disable mcp rules_replace_tree

[Video 01:24](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=84.139) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![27 · Disable mcp rules_replace_tree](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_replace_tree.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_export"></a>
### 28 · Disable agent rules_export

[Video 01:27](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=87.362) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![28 · Disable agent rules_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_export"></a>
### 29 · Disable mcp rules_export

[Video 01:30](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=90.545) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![29 · Disable mcp rules_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_import"></a>
### 30 · Disable agent rules_import

[Video 01:33](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=93.722) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![30 · Disable agent rules_import](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_import.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_import"></a>
### 31 · Disable mcp rules_import

[Video 01:36](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=96.917) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![31 · Disable mcp rules_import](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_import.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_send_request"></a>
### 32 · Disable agent composer_send_request

[Video 01:40](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=100.674) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![32 · Disable agent composer_send_request](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_send_request.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_send_request"></a>
### 33 · Disable mcp composer_send_request

[Video 01:43](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=103.890) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![33 · Disable mcp composer_send_request](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_send_request.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_probe_connection"></a>
### 34 · Disable agent composer_probe_connection

[Video 01:47](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=107.173) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![34 · Disable agent composer_probe_connection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_probe_connection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_probe_connection"></a>
### 35 · Disable mcp composer_probe_connection

[Video 01:50](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=110.419) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![35 · Disable mcp composer_probe_connection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_probe_connection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_replace_collection"></a>
### 36 · Disable agent composer_replace_collection

[Video 01:53](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=113.639) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![36 · Disable agent composer_replace_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_replace_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_replace_collection"></a>
### 37 · Disable mcp composer_replace_collection

[Video 01:56](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=116.893) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![37 · Disable mcp composer_replace_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_replace_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_export_collection"></a>
### 38 · Disable agent composer_export_collection

[Video 02:00](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=120.149) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![38 · Disable agent composer_export_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_export_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_export_collection"></a>
### 39 · Disable mcp composer_export_collection

[Video 02:03](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=123.390) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![39 · Disable mcp composer_export_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_export_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_import_collection"></a>
### 40 · Disable agent composer_import_collection

[Video 02:06](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=126.597) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![40 · Disable agent composer_import_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_import_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_import_collection"></a>
### 41 · Disable mcp composer_import_collection

[Video 02:09](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=129.812) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![41 · Disable mcp composer_import_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_import_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_enable_http"></a>
### 42 · Disable agent breakpoints_enable_http

[Video 02:13](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=133.033) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![42 · Disable agent breakpoints_enable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_enable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_enable_http"></a>
### 43 · Disable mcp breakpoints_enable_http

[Video 02:16](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=136.265) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![43 · Disable mcp breakpoints_enable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_enable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_disable_http"></a>
### 44 · Disable agent breakpoints_disable_http

[Video 02:19](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=139.479) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![44 · Disable agent breakpoints_disable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_disable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_disable_http"></a>
### 45 · Disable mcp breakpoints_disable_http

[Video 02:22](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=142.687) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![45 · Disable mcp breakpoints_disable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_disable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_enable_websocket"></a>
### 46 · Disable agent breakpoints_enable_websocket

[Video 02:25](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=145.867) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![46 · Disable agent breakpoints_enable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_enable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_enable_websocket"></a>
### 47 · Disable mcp breakpoints_enable_websocket

[Video 02:29](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=149.056) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![47 · Disable mcp breakpoints_enable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_enable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_disable_websocket"></a>
### 48 · Disable agent breakpoints_disable_websocket

[Video 02:32](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=152.292) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![48 · Disable agent breakpoints_disable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_disable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_disable_websocket"></a>
### 49 · Disable mcp breakpoints_disable_websocket

[Video 02:35](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=155.504) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![49 · Disable mcp breakpoints_disable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_disable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue"></a>
### 50 · Disable agent breakpoints_continue

[Video 02:38](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=158.699) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![50 · Disable agent breakpoints_continue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue"></a>
### 51 · Disable mcp breakpoints_continue

[Video 02:41](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=161.931) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![51 · Disable mcp breakpoints_continue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_forward_edited"></a>
### 52 · Disable agent breakpoints_forward_edited

[Video 02:45](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=165.144) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![52 · Disable agent breakpoints_forward_edited](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_forward_edited.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_forward_edited"></a>
### 53 · Disable mcp breakpoints_forward_edited

[Video 02:48](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=168.371) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![53 · Disable mcp breakpoints_forward_edited](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_forward_edited.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_drop"></a>
### 54 · Disable agent breakpoints_drop

[Video 02:51](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=171.571) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![54 · Disable agent breakpoints_drop](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_drop.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_drop"></a>
### 55 · Disable mcp breakpoints_drop

[Video 02:54](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=174.763) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![55 · Disable mcp breakpoints_drop](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_drop.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue_queue"></a>
### 56 · Disable agent breakpoints_continue_queue

[Video 02:57](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=177.932) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![56 · Disable agent breakpoints_continue_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue_queue"></a>
### 57 · Disable mcp breakpoints_continue_queue

[Video 03:01](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=181.115) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![57 · Disable mcp breakpoints_continue_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_drop_queue"></a>
### 58 · Disable agent breakpoints_drop_queue

[Video 03:04](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=184.323) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![58 · Disable agent breakpoints_drop_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_drop_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_drop_queue"></a>
### 59 · Disable mcp breakpoints_drop_queue

[Video 03:07](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=187.550) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![59 · Disable mcp breakpoints_drop_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_drop_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue_rule"></a>
### 60 · Disable agent breakpoints_continue_rule

[Video 03:10](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=190.768) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![60 · Disable agent breakpoints_continue_rule](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue_rule.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue_rule"></a>
### 61 · Disable mcp breakpoints_continue_rule

[Video 03:13](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=193.975) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![61 · Disable mcp breakpoints_continue_rule](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue_rule.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-diagnostics_export"></a>
### 62 · Disable agent diagnostics_export

[Video 03:17](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=197.204) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![62 · Disable agent diagnostics_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-diagnostics_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-diagnostics_export"></a>
### 63 · Disable mcp diagnostics_export

[Video 03:20](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=200.417) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![63 · Disable mcp diagnostics_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-diagnostics_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_generate_certificate"></a>
### 64 · Disable agent settings_generate_certificate

[Video 03:23](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=203.628) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![64 · Disable agent settings_generate_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_generate_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_generate_certificate"></a>
### 65 · Disable mcp settings_generate_certificate

[Video 03:26](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=206.846) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![65 · Disable mcp settings_generate_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_generate_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_install_certificate"></a>
### 66 · Disable agent settings_install_certificate

[Video 03:30](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=210.044) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![66 · Disable agent settings_install_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_install_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_install_certificate"></a>
### 67 · Disable mcp settings_install_certificate

[Video 03:33](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=213.284) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![67 · Disable mcp settings_install_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_install_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_uninstall_certificate"></a>
### 68 · Disable agent settings_uninstall_certificate

[Video 03:36](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=216.498) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![68 · Disable agent settings_uninstall_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_uninstall_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_uninstall_certificate"></a>
### 69 · Disable mcp settings_uninstall_certificate

[Video 03:39](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=219.707) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![69 · Disable mcp settings_uninstall_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_uninstall_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_delete_certificate"></a>
### 70 · Disable agent settings_delete_certificate

[Video 03:42](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=222.903) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![70 · Disable agent settings_delete_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_delete_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_delete_certificate"></a>
### 71 · Disable mcp settings_delete_certificate

[Video 03:46](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=226.125) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![71 · Disable mcp settings_delete_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_delete_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_reveal_certificate"></a>
### 72 · Disable agent settings_reveal_certificate

[Video 03:49](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=229.352) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![72 · Disable agent settings_reveal_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_reveal_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_reveal_certificate"></a>
### 73 · Disable mcp settings_reveal_certificate

[Video 03:52](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=232.570) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![73 · Disable mcp settings_reveal_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_reveal_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_view_certificate"></a>
### 74 · Disable agent settings_view_certificate

[Video 03:55](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=235.782) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![74 · Disable agent settings_view_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_view_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_view_certificate"></a>
### 75 · Disable mcp settings_view_certificate

[Video 03:59](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=239.014) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![75 · Disable mcp settings_view_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_view_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_open_certificate_manager"></a>
### 76 · Disable agent settings_open_certificate_manager

[Video 04:02](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=242.230) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![76 · Disable agent settings_open_certificate_manager](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_open_certificate_manager.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_open_certificate_manager"></a>
### 77 · Disable mcp settings_open_certificate_manager

[Video 04:05](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=245.454) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![77 · Disable mcp settings_open_certificate_manager](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_open_certificate_manager.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_app_container"></a>
### 78 · Disable agent settings_enable_app_container

[Video 04:08](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=248.685) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![78 · Disable agent settings_enable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_app_container"></a>
### 79 · Disable mcp settings_enable_app_container

[Video 04:11](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=251.904) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![79 · Disable mcp settings_enable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_app_container"></a>
### 80 · Disable agent settings_disable_app_container

[Video 04:15](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=255.138) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![80 · Disable agent settings_disable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_app_container"></a>
### 81 · Disable mcp settings_disable_app_container

[Video 04:18](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=258.397) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![81 · Disable mcp settings_disable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_all_app_containers"></a>
### 82 · Disable agent settings_enable_all_app_containers

[Video 04:21](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=261.598) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![82 · Disable agent settings_enable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_all_app_containers"></a>
### 83 · Disable mcp settings_enable_all_app_containers

[Video 04:24](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=264.769) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![83 · Disable mcp settings_enable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_all_app_containers"></a>
### 84 · Disable agent settings_disable_all_app_containers

[Video 04:27](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=267.999) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![84 · Disable agent settings_disable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_all_app_containers"></a>
### 85 · Disable mcp settings_disable_all_app_containers

[Video 04:31](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=271.203) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![85 · Disable mcp settings_disable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_system_proxy"></a>
### 86 · Disable agent settings_enable_system_proxy

[Video 04:34](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=274.428) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![86 · Disable agent settings_enable_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_system_proxy"></a>
### 87 · Disable mcp settings_enable_system_proxy

[Video 04:37](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=277.622) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![87 · Disable mcp settings_enable_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_restore_system_proxy"></a>
### 88 · Disable agent settings_restore_system_proxy

[Video 04:40](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=280.847) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![88 · Disable agent settings_restore_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_restore_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_restore_system_proxy"></a>
### 89 · Disable mcp settings_restore_system_proxy

[Video 04:44](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=284.025) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![89 · Disable mcp settings_restore_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_restore_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_replace_tls_insecure_hosts"></a>
### 90 · Disable agent settings_replace_tls_insecure_hosts

[Video 04:47](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=287.204) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![90 · Disable agent settings_replace_tls_insecure_hosts](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_replace_tls_insecure_hosts.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_replace_tls_insecure_hosts"></a>
### 91 · Disable mcp settings_replace_tls_insecure_hosts

[Video 04:50](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=290.435) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![91 · Disable mcp settings_replace_tls_insecure_hosts](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_replace_tls_insecure_hosts.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_replace_tls_passthrough"></a>
### 92 · Disable agent settings_replace_tls_passthrough

[Video 04:53](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=293.698) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![92 · Disable agent settings_replace_tls_passthrough](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_replace_tls_passthrough.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_replace_tls_passthrough"></a>
### 93 · Disable mcp settings_replace_tls_passthrough

[Video 04:56](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=296.907) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![93 · Disable mcp settings_replace_tls_passthrough](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_replace_tls_passthrough.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_https_decryption"></a>
### 94 · Disable agent settings_enable_https_decryption

[Video 05:00](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=300.115) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![94 · Disable agent settings_enable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_https_decryption"></a>
### 95 · Disable mcp settings_enable_https_decryption

[Video 05:03](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=303.336) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![95 · Disable mcp settings_enable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_https_decryption"></a>
### 96 · Disable agent settings_disable_https_decryption

[Video 05:06](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=306.543) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![96 · Disable agent settings_disable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_https_decryption"></a>
### 97 · Disable mcp settings_disable_https_decryption

[Video 05:09](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=309.756) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![97 · Disable mcp settings_disable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_language"></a>
### 98 · Disable agent settings_set_language

[Video 05:12](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=312.976) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![98 · Disable agent settings_set_language](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_language.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_language"></a>
### 99 · Disable mcp settings_set_language

[Video 05:16](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=316.166) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![99 · Disable mcp settings_set_language](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_language.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_theme"></a>
### 100 · Disable agent settings_set_theme

[Video 05:19](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=319.393) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![100 · Disable agent settings_set_theme](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_theme.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_theme"></a>
### 101 · Disable mcp settings_set_theme

[Video 05:22](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=322.596) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![101 · Disable mcp settings_set_theme](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_theme.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_export_privacy_defaults"></a>
### 102 · Disable agent settings_set_export_privacy_defaults

[Video 05:25](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=325.815) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![102 · Disable agent settings_set_export_privacy_defaults](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_export_privacy_defaults.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_export_privacy_defaults"></a>
### 103 · Disable mcp settings_set_export_privacy_defaults

[Video 05:29](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=329.024) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![103 · Disable mcp settings_set_export_privacy_defaults](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_export_privacy_defaults.png)

<a id="walkthrough-tool-permissions-readonly-review-capture"></a>
### 104 · Scroll to review the capture group

[Video 05:32](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=332.257) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![104 · Scroll to review the capture group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-capture.png)

<a id="walkthrough-tool-permissions-readonly-review-rules"></a>
### 105 · Scroll to review the rules group

[Video 05:35](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=335.284) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![105 · Scroll to review the rules group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-rules.png)

<a id="walkthrough-tool-permissions-readonly-review-composer"></a>
### 106 · Scroll to review the composer group

[Video 05:38](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=338.339) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![106 · Scroll to review the composer group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-composer.png)

<a id="walkthrough-tool-permissions-readonly-review-breakpoints"></a>
### 107 · Scroll to review the breakpoints group

[Video 05:41](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=341.352) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![107 · Scroll to review the breakpoints group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-breakpoints.png)

<a id="walkthrough-tool-permissions-readonly-review-diagnostics"></a>
### 108 · Scroll to review the diagnostics group

[Video 05:44](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=344.364) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![108 · Scroll to review the diagnostics group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-diagnostics.png)

<a id="walkthrough-tool-permissions-readonly-review-settings"></a>
### 109 · Scroll to review the settings group

[Video 05:47](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=347.380) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![109 · Scroll to review the settings group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-settings.png)

<a id="walkthrough-tool-permissions-readonly-10-readonly-list"></a>
### 110 · Verify MCP discovers query Tools only

[Video 05:50](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=350.398) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![110 · Verify MCP discovers query Tools only](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-10-readonly-list.png)

<a id="walkthrough-tool-permissions-readonly-11-before-close"></a>
### 111 · Retain the complete read-only setup before normal Close

[Video 05:54](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly.mp4#t=354.039) · [Back to the video](#walkthrough-tool-permissions-readonly-video)

![111 · Retain the complete read-only setup before normal Close](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-11-before-close.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:tool-permissions-readonly:end -->

<!-- recorded-walkthrough:tool-permissions-restart:start -->
<a id="walkthrough-tool-permissions-restart"></a>
## Complete read-only permissions after restart

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>client</code> | <code>Guide readonly client</code> |
| <code>disabledChanges</code> | <code>capture_start_recording, capture_stop_recording, capture_clear, capture_cancel_transfer_job, capture_export_body, capture_export_har, capture_import_har, capture_export_archive, capture_import_archive, rules_replace_tree, rules_export, rules_import, composer_send_request, composer_probe_connection, composer_replace_collection, composer_export_collection, composer_import_collection, breakpoints_enable_http, breakpoints_disable_http, breakpoints_enable_websocket, breakpoints_disable_websocket, breakpoints_continue, breakpoints_forward_edited, breakpoints_drop, breakpoints_continue_queue, breakpoints_drop_queue, breakpoints_continue_rule, diagnostics_export, settings_generate_certificate, settings_install_certificate, settings_uninstall_certificate, settings_delete_certificate, settings_reveal_certificate, settings_view_certificate, settings_open_certificate_manager, settings_enable_app_container, settings_disable_app_container, settings_enable_all_app_containers, settings_disable_all_app_containers, settings_enable_system_proxy, settings_restore_system_proxy, settings_replace_tls_insecure_hosts, settings_replace_tls_passthrough, settings_enable_https_decryption, settings_disable_https_decryption, settings_set_language, settings_set_theme, settings_set_export_privacy_defaults</code> |
| <code>queryTools</code> | <code>capture_get_proxy_status, capture_get_storage_status, capture_list_exchanges, capture_get_exchange, capture_get_exchange_body, capture_list_websocket_messages, capture_list_grpc_messages, capture_get_transfer_job, rules_get_tree, rules_get_hits, composer_get_collection, breakpoints_list, diagnostics_query, diagnostics_get_trace, diagnostics_get_recent, settings_get_core_process_status, settings_get_system_proxy_status, settings_get_certificate_status, settings_get_tls_insecure_hosts, settings_get_tls_passthrough, settings_list_app_containers</code> |
| <code>persisted</code> | <code>Every change Tool remains disabled for both Agent and MCP after actual App restart</code> |
| <code>evidenceGeneration</code> | <code>readonly-reopened</code> |

<a id="walkthrough-tool-permissions-restart-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4" poster="../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-01-saved-permissions.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.vtt" default>
</video>

<a id="walkthrough-tool-permissions-restart-01-saved-permissions"></a>
### 01 · Read the actual two-column permissions after restart

[Video 00:00](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=0.472) · [Back to the video](#walkthrough-tool-permissions-restart-video)

![01 · Read the actual two-column permissions after restart](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-01-saved-permissions.png)

<a id="walkthrough-tool-permissions-restart-02-query-only"></a>
### 02 · Verify a new connection still discovers queries only

[Video 00:04](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=4.991) · [Back to the video](#walkthrough-tool-permissions-restart-video)

![02 · Verify a new connection still discovers queries only](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-02-query-only.png)

<a id="walkthrough-tool-permissions-restart-03-query-enabled"></a>
### 03 · Verify retained read-only queries still work

[Video 00:07](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=7.973) · [Back to the video](#walkthrough-tool-permissions-restart-video)

![03 · Verify retained read-only queries still work](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-03-query-enabled.png)

<a id="walkthrough-tool-permissions-restart-04-clear-search"></a>
### 04 · Clear search while retaining the complete read-only state

[Video 00:10](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=10.986) · [Back to the video](#walkthrough-tool-permissions-restart-video)

![04 · Clear search while retaining the complete read-only state](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-04-clear-search.png)

<a id="walkthrough-tool-permissions-restart-05-stop-server"></a>
### 05 · Stop the Server without re-enabling changes

[Video 00:14](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart.mp4#t=14.047) · [Back to the video](#walkthrough-tool-permissions-restart-video)

![05 · Stop the Server without re-enabling changes](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-05-stop-server.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:tool-permissions-restart:end -->
