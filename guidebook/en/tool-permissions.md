# Tool permissions and approval

> For `v0.1.1-alpha.1`; includes independent switches, every step of a complete read-only setup, actual rejected calls and restart persistence. Tools allow the chosen AI entry point to read/change data; grant only necessary scope. The demo callers do not establish commercial-model or external-host compatibility.

[Guide directory](../README.en.md) · [Agent](agent.md) · [MCP](mcp.md) · [Tool reference](tool-reference.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

> This demonstrates independent per-tool switches, not a complete read-only configuration. Clear is not executed.

| Example field | Actual recorded value |
| --- | --- |
| <code>changeTool</code> | <code>capture_clear</code> |
| <code>queryTool</code> | <code>capture_get_proxy_status</code> |
| <code>operationExecuted</code> | <code>none</code> |

<a id="walkthrough-01-settings"></a>
### 01 · Open Settings

![01 · Open Settings](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-01-settings.png)

<a id="walkthrough-02-agent"></a>
### 02 · Open Tool capabilities

![02 · Open Tool capabilities](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-02-agent.png)

<a id="walkthrough-03-search"></a>
### 03 · Find capture_clear

![03 · Find capture_clear](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-03-search.png)

<a id="walkthrough-04-disable-agent"></a>
### 04 · Disable only Agent clear access

![04 · Disable only Agent clear access](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-04-disable-agent.png)

<a id="walkthrough-05-disable-mcp"></a>
### 05 · Disable MCP clear access separately

![05 · Disable MCP clear access separately](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-05-disable-mcp.png)

<a id="walkthrough-06-restore-agent"></a>
### 06 · Explicitly restore Agent access

![06 · Explicitly restore Agent access](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-06-restore-agent.png)

<a id="walkthrough-07-restore-mcp"></a>
### 07 · Explicitly restore MCP access

![07 · Explicitly restore MCP access](../media/v0.1.1-alpha.1/tool-permissions/tool-permissions-07-restore-mcp.png)

<a id="walkthrough-08-query"></a>
### 08 · Find a read-only query Tool

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

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>client</code> | <code>Guide readonly client</code> |
| <code>model</code> | <code>Guide permission demo (keyless local endpoint)</code> |
| <code>blockedOperation</code> | <code>capture_clear rejected by both Agent and MCP without clearing the real record</code> |
| <code>changeToolCount</code> | <code>48</code> |
| <code>queryToolCount</code> | <code>21</code> |
| <code>disabledChanges</code> | <code>capture_start_recording, capture_stop_recording, capture_clear, capture_cancel_transfer_job, capture_export_body, capture_export_har, capture_import_har, capture_export_archive, capture_import_archive, rules_replace_tree, rules_export, rules_import, composer_send_request, composer_probe_connection, composer_replace_collection, composer_export_collection, composer_import_collection, breakpoints_enable_http, breakpoints_disable_http, breakpoints_enable_websocket, breakpoints_disable_websocket, breakpoints_continue, breakpoints_forward_edited, breakpoints_drop, breakpoints_continue_queue, breakpoints_drop_queue, breakpoints_continue_rule, diagnostics_export, settings_generate_certificate, settings_install_certificate, settings_uninstall_certificate, settings_delete_certificate, settings_reveal_certificate, settings_view_certificate, settings_open_certificate_manager, settings_enable_app_container, settings_disable_app_container, settings_enable_all_app_containers, settings_disable_all_app_containers, settings_enable_system_proxy, settings_restore_system_proxy, settings_replace_tls_insecure_hosts, settings_replace_tls_passthrough, settings_enable_https_decryption, settings_disable_https_decryption, settings_set_language, settings_set_theme, settings_set_export_privacy_defaults</code> |
| <code>closeImage</code> | <code>Before actual Close; real shutdown is separately verified</code> |

<a id="walkthrough-tool-permissions-readonly-01-search"></a>
### 01 · Find capture_clear

![01 · Find capture_clear](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-01-search.png)

<a id="walkthrough-tool-permissions-readonly-02-disable-agent-clear"></a>
### 02 · Disable Agent clear access

![02 · Disable Agent clear access](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-02-disable-agent-clear.png)

<a id="walkthrough-tool-permissions-readonly-03-disable-mcp-clear"></a>
### 03 · Independently disable MCP clear access

![03 · Independently disable MCP clear access](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-03-disable-mcp-clear.png)

<a id="walkthrough-tool-permissions-readonly-04-mcp-rejection"></a>
### 04 · Verify the actual MCP call is rejected

![04 · Verify the actual MCP call is rejected](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-04-mcp-rejection.png)

<a id="walkthrough-tool-permissions-readonly-05-agent"></a>
### 05 · Open the local demo Agent

![05 · Open the local demo Agent](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-05-agent.png)

<a id="walkthrough-tool-permissions-readonly-06-agent-rejection"></a>
### 06 · Verify Agent also cannot execute the disabled action

![06 · Verify Agent also cannot execute the disabled action](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-06-agent-rejection.png)

<a id="walkthrough-tool-permissions-readonly-07-retained-record"></a>
### 07 · Verify the actual record remains

![07 · Verify the actual record remains](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-07-retained-record.png)

<a id="walkthrough-tool-permissions-readonly-08-close-agent"></a>
### 08 · Close the panel and return to capabilities

![08 · Close the panel and return to capabilities](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-08-close-agent.png)

<a id="walkthrough-tool-permissions-readonly-09-clear-search"></a>
### 09 · Clear search to show every group

![09 · Clear search to show every group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-09-clear-search.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_start_recording"></a>
### 10 · Disable agent capture_start_recording

![10 · Disable agent capture_start_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_start_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_start_recording"></a>
### 11 · Disable mcp capture_start_recording

![11 · Disable mcp capture_start_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_start_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_stop_recording"></a>
### 12 · Disable agent capture_stop_recording

![12 · Disable agent capture_stop_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_stop_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_stop_recording"></a>
### 13 · Disable mcp capture_stop_recording

![13 · Disable mcp capture_stop_recording](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_stop_recording.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_cancel_transfer_job"></a>
### 14 · Disable agent capture_cancel_transfer_job

![14 · Disable agent capture_cancel_transfer_job](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_cancel_transfer_job.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_cancel_transfer_job"></a>
### 15 · Disable mcp capture_cancel_transfer_job

![15 · Disable mcp capture_cancel_transfer_job](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_cancel_transfer_job.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_body"></a>
### 16 · Disable agent capture_export_body

![16 · Disable agent capture_export_body](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_body.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_body"></a>
### 17 · Disable mcp capture_export_body

![17 · Disable mcp capture_export_body](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_body.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_har"></a>
### 18 · Disable agent capture_export_har

![18 · Disable agent capture_export_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_har"></a>
### 19 · Disable mcp capture_export_har

![19 · Disable mcp capture_export_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_import_har"></a>
### 20 · Disable agent capture_import_har

![20 · Disable agent capture_import_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_import_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_import_har"></a>
### 21 · Disable mcp capture_import_har

![21 · Disable mcp capture_import_har](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_import_har.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_archive"></a>
### 22 · Disable agent capture_export_archive

![22 · Disable agent capture_export_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_export_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_archive"></a>
### 23 · Disable mcp capture_export_archive

![23 · Disable mcp capture_export_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_export_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_import_archive"></a>
### 24 · Disable agent capture_import_archive

![24 · Disable agent capture_import_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-capture_import_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_import_archive"></a>
### 25 · Disable mcp capture_import_archive

![25 · Disable mcp capture_import_archive](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-capture_import_archive.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_replace_tree"></a>
### 26 · Disable agent rules_replace_tree

![26 · Disable agent rules_replace_tree](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_replace_tree.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_replace_tree"></a>
### 27 · Disable mcp rules_replace_tree

![27 · Disable mcp rules_replace_tree](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_replace_tree.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_export"></a>
### 28 · Disable agent rules_export

![28 · Disable agent rules_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_export"></a>
### 29 · Disable mcp rules_export

![29 · Disable mcp rules_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-rules_import"></a>
### 30 · Disable agent rules_import

![30 · Disable agent rules_import](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-rules_import.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_import"></a>
### 31 · Disable mcp rules_import

![31 · Disable mcp rules_import](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-rules_import.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_send_request"></a>
### 32 · Disable agent composer_send_request

![32 · Disable agent composer_send_request](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_send_request.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_send_request"></a>
### 33 · Disable mcp composer_send_request

![33 · Disable mcp composer_send_request](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_send_request.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_probe_connection"></a>
### 34 · Disable agent composer_probe_connection

![34 · Disable agent composer_probe_connection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_probe_connection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_probe_connection"></a>
### 35 · Disable mcp composer_probe_connection

![35 · Disable mcp composer_probe_connection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_probe_connection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_replace_collection"></a>
### 36 · Disable agent composer_replace_collection

![36 · Disable agent composer_replace_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_replace_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_replace_collection"></a>
### 37 · Disable mcp composer_replace_collection

![37 · Disable mcp composer_replace_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_replace_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_export_collection"></a>
### 38 · Disable agent composer_export_collection

![38 · Disable agent composer_export_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_export_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_export_collection"></a>
### 39 · Disable mcp composer_export_collection

![39 · Disable mcp composer_export_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_export_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-composer_import_collection"></a>
### 40 · Disable agent composer_import_collection

![40 · Disable agent composer_import_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-composer_import_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_import_collection"></a>
### 41 · Disable mcp composer_import_collection

![41 · Disable mcp composer_import_collection](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-composer_import_collection.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_enable_http"></a>
### 42 · Disable agent breakpoints_enable_http

![42 · Disable agent breakpoints_enable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_enable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_enable_http"></a>
### 43 · Disable mcp breakpoints_enable_http

![43 · Disable mcp breakpoints_enable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_enable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_disable_http"></a>
### 44 · Disable agent breakpoints_disable_http

![44 · Disable agent breakpoints_disable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_disable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_disable_http"></a>
### 45 · Disable mcp breakpoints_disable_http

![45 · Disable mcp breakpoints_disable_http](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_disable_http.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_enable_websocket"></a>
### 46 · Disable agent breakpoints_enable_websocket

![46 · Disable agent breakpoints_enable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_enable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_enable_websocket"></a>
### 47 · Disable mcp breakpoints_enable_websocket

![47 · Disable mcp breakpoints_enable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_enable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_disable_websocket"></a>
### 48 · Disable agent breakpoints_disable_websocket

![48 · Disable agent breakpoints_disable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_disable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_disable_websocket"></a>
### 49 · Disable mcp breakpoints_disable_websocket

![49 · Disable mcp breakpoints_disable_websocket](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_disable_websocket.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue"></a>
### 50 · Disable agent breakpoints_continue

![50 · Disable agent breakpoints_continue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue"></a>
### 51 · Disable mcp breakpoints_continue

![51 · Disable mcp breakpoints_continue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_forward_edited"></a>
### 52 · Disable agent breakpoints_forward_edited

![52 · Disable agent breakpoints_forward_edited](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_forward_edited.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_forward_edited"></a>
### 53 · Disable mcp breakpoints_forward_edited

![53 · Disable mcp breakpoints_forward_edited](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_forward_edited.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_drop"></a>
### 54 · Disable agent breakpoints_drop

![54 · Disable agent breakpoints_drop](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_drop.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_drop"></a>
### 55 · Disable mcp breakpoints_drop

![55 · Disable mcp breakpoints_drop](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_drop.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue_queue"></a>
### 56 · Disable agent breakpoints_continue_queue

![56 · Disable agent breakpoints_continue_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue_queue"></a>
### 57 · Disable mcp breakpoints_continue_queue

![57 · Disable mcp breakpoints_continue_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_drop_queue"></a>
### 58 · Disable agent breakpoints_drop_queue

![58 · Disable agent breakpoints_drop_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_drop_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_drop_queue"></a>
### 59 · Disable mcp breakpoints_drop_queue

![59 · Disable mcp breakpoints_drop_queue](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_drop_queue.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue_rule"></a>
### 60 · Disable agent breakpoints_continue_rule

![60 · Disable agent breakpoints_continue_rule](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-breakpoints_continue_rule.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue_rule"></a>
### 61 · Disable mcp breakpoints_continue_rule

![61 · Disable mcp breakpoints_continue_rule](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-breakpoints_continue_rule.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-diagnostics_export"></a>
### 62 · Disable agent diagnostics_export

![62 · Disable agent diagnostics_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-diagnostics_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-diagnostics_export"></a>
### 63 · Disable mcp diagnostics_export

![63 · Disable mcp diagnostics_export](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-diagnostics_export.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_generate_certificate"></a>
### 64 · Disable agent settings_generate_certificate

![64 · Disable agent settings_generate_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_generate_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_generate_certificate"></a>
### 65 · Disable mcp settings_generate_certificate

![65 · Disable mcp settings_generate_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_generate_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_install_certificate"></a>
### 66 · Disable agent settings_install_certificate

![66 · Disable agent settings_install_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_install_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_install_certificate"></a>
### 67 · Disable mcp settings_install_certificate

![67 · Disable mcp settings_install_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_install_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_uninstall_certificate"></a>
### 68 · Disable agent settings_uninstall_certificate

![68 · Disable agent settings_uninstall_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_uninstall_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_uninstall_certificate"></a>
### 69 · Disable mcp settings_uninstall_certificate

![69 · Disable mcp settings_uninstall_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_uninstall_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_delete_certificate"></a>
### 70 · Disable agent settings_delete_certificate

![70 · Disable agent settings_delete_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_delete_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_delete_certificate"></a>
### 71 · Disable mcp settings_delete_certificate

![71 · Disable mcp settings_delete_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_delete_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_reveal_certificate"></a>
### 72 · Disable agent settings_reveal_certificate

![72 · Disable agent settings_reveal_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_reveal_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_reveal_certificate"></a>
### 73 · Disable mcp settings_reveal_certificate

![73 · Disable mcp settings_reveal_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_reveal_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_view_certificate"></a>
### 74 · Disable agent settings_view_certificate

![74 · Disable agent settings_view_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_view_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_view_certificate"></a>
### 75 · Disable mcp settings_view_certificate

![75 · Disable mcp settings_view_certificate](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_view_certificate.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_open_certificate_manager"></a>
### 76 · Disable agent settings_open_certificate_manager

![76 · Disable agent settings_open_certificate_manager](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_open_certificate_manager.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_open_certificate_manager"></a>
### 77 · Disable mcp settings_open_certificate_manager

![77 · Disable mcp settings_open_certificate_manager](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_open_certificate_manager.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_app_container"></a>
### 78 · Disable agent settings_enable_app_container

![78 · Disable agent settings_enable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_app_container"></a>
### 79 · Disable mcp settings_enable_app_container

![79 · Disable mcp settings_enable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_app_container"></a>
### 80 · Disable agent settings_disable_app_container

![80 · Disable agent settings_disable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_app_container"></a>
### 81 · Disable mcp settings_disable_app_container

![81 · Disable mcp settings_disable_app_container](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_app_container.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_all_app_containers"></a>
### 82 · Disable agent settings_enable_all_app_containers

![82 · Disable agent settings_enable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_all_app_containers"></a>
### 83 · Disable mcp settings_enable_all_app_containers

![83 · Disable mcp settings_enable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_all_app_containers"></a>
### 84 · Disable agent settings_disable_all_app_containers

![84 · Disable agent settings_disable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_all_app_containers"></a>
### 85 · Disable mcp settings_disable_all_app_containers

![85 · Disable mcp settings_disable_all_app_containers](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_all_app_containers.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_system_proxy"></a>
### 86 · Disable agent settings_enable_system_proxy

![86 · Disable agent settings_enable_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_system_proxy"></a>
### 87 · Disable mcp settings_enable_system_proxy

![87 · Disable mcp settings_enable_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_restore_system_proxy"></a>
### 88 · Disable agent settings_restore_system_proxy

![88 · Disable agent settings_restore_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_restore_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_restore_system_proxy"></a>
### 89 · Disable mcp settings_restore_system_proxy

![89 · Disable mcp settings_restore_system_proxy](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_restore_system_proxy.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_replace_tls_insecure_hosts"></a>
### 90 · Disable agent settings_replace_tls_insecure_hosts

![90 · Disable agent settings_replace_tls_insecure_hosts](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_replace_tls_insecure_hosts.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_replace_tls_insecure_hosts"></a>
### 91 · Disable mcp settings_replace_tls_insecure_hosts

![91 · Disable mcp settings_replace_tls_insecure_hosts](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_replace_tls_insecure_hosts.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_replace_tls_passthrough"></a>
### 92 · Disable agent settings_replace_tls_passthrough

![92 · Disable agent settings_replace_tls_passthrough](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_replace_tls_passthrough.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_replace_tls_passthrough"></a>
### 93 · Disable mcp settings_replace_tls_passthrough

![93 · Disable mcp settings_replace_tls_passthrough](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_replace_tls_passthrough.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_https_decryption"></a>
### 94 · Disable agent settings_enable_https_decryption

![94 · Disable agent settings_enable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_enable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_https_decryption"></a>
### 95 · Disable mcp settings_enable_https_decryption

![95 · Disable mcp settings_enable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_enable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_https_decryption"></a>
### 96 · Disable agent settings_disable_https_decryption

![96 · Disable agent settings_disable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_disable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_https_decryption"></a>
### 97 · Disable mcp settings_disable_https_decryption

![97 · Disable mcp settings_disable_https_decryption](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_disable_https_decryption.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_language"></a>
### 98 · Disable agent settings_set_language

![98 · Disable agent settings_set_language](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_language.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_language"></a>
### 99 · Disable mcp settings_set_language

![99 · Disable mcp settings_set_language](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_language.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_theme"></a>
### 100 · Disable agent settings_set_theme

![100 · Disable agent settings_set_theme](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_theme.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_theme"></a>
### 101 · Disable mcp settings_set_theme

![101 · Disable mcp settings_set_theme](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_theme.png)

<a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_export_privacy_defaults"></a>
### 102 · Disable agent settings_set_export_privacy_defaults

![102 · Disable agent settings_set_export_privacy_defaults](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-agent-settings_set_export_privacy_defaults.png)

<a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_export_privacy_defaults"></a>
### 103 · Disable mcp settings_set_export_privacy_defaults

![103 · Disable mcp settings_set_export_privacy_defaults](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-disable-mcp-settings_set_export_privacy_defaults.png)

<a id="walkthrough-tool-permissions-readonly-review-capture"></a>
### 104 · Scroll to review the capture group

![104 · Scroll to review the capture group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-capture.png)

<a id="walkthrough-tool-permissions-readonly-review-rules"></a>
### 105 · Scroll to review the rules group

![105 · Scroll to review the rules group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-rules.png)

<a id="walkthrough-tool-permissions-readonly-review-composer"></a>
### 106 · Scroll to review the composer group

![106 · Scroll to review the composer group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-composer.png)

<a id="walkthrough-tool-permissions-readonly-review-breakpoints"></a>
### 107 · Scroll to review the breakpoints group

![107 · Scroll to review the breakpoints group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-breakpoints.png)

<a id="walkthrough-tool-permissions-readonly-review-diagnostics"></a>
### 108 · Scroll to review the diagnostics group

![108 · Scroll to review the diagnostics group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-diagnostics.png)

<a id="walkthrough-tool-permissions-readonly-review-settings"></a>
### 109 · Scroll to review the settings group

![109 · Scroll to review the settings group](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-review-settings.png)

<a id="walkthrough-tool-permissions-readonly-10-readonly-list"></a>
### 110 · Verify MCP discovers query Tools only

![110 · Verify MCP discovers query Tools only](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-10-readonly-list.png)

<a id="walkthrough-tool-permissions-readonly-11-before-close"></a>
### 111 · Retain the complete read-only setup before normal Close

![111 · Retain the complete read-only setup before normal Close](../media/v0.1.1-alpha.1/tool-permissions-readonly/tool-permissions-readonly-11-before-close.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:tool-permissions-readonly:end -->

<!-- recorded-walkthrough:tool-permissions-restart:start -->
<a id="walkthrough-tool-permissions-restart"></a>
## Complete read-only permissions after restart

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>client</code> | <code>Guide readonly client</code> |
| <code>disabledChanges</code> | <code>capture_start_recording, capture_stop_recording, capture_clear, capture_cancel_transfer_job, capture_export_body, capture_export_har, capture_import_har, capture_export_archive, capture_import_archive, rules_replace_tree, rules_export, rules_import, composer_send_request, composer_probe_connection, composer_replace_collection, composer_export_collection, composer_import_collection, breakpoints_enable_http, breakpoints_disable_http, breakpoints_enable_websocket, breakpoints_disable_websocket, breakpoints_continue, breakpoints_forward_edited, breakpoints_drop, breakpoints_continue_queue, breakpoints_drop_queue, breakpoints_continue_rule, diagnostics_export, settings_generate_certificate, settings_install_certificate, settings_uninstall_certificate, settings_delete_certificate, settings_reveal_certificate, settings_view_certificate, settings_open_certificate_manager, settings_enable_app_container, settings_disable_app_container, settings_enable_all_app_containers, settings_disable_all_app_containers, settings_enable_system_proxy, settings_restore_system_proxy, settings_replace_tls_insecure_hosts, settings_replace_tls_passthrough, settings_enable_https_decryption, settings_disable_https_decryption, settings_set_language, settings_set_theme, settings_set_export_privacy_defaults</code> |
| <code>queryTools</code> | <code>capture_get_proxy_status, capture_get_storage_status, capture_list_exchanges, capture_get_exchange, capture_get_exchange_body, capture_list_websocket_messages, capture_list_grpc_messages, capture_get_transfer_job, rules_get_tree, rules_get_hits, composer_get_collection, breakpoints_list, diagnostics_query, diagnostics_get_trace, diagnostics_get_recent, settings_get_core_process_status, settings_get_system_proxy_status, settings_get_certificate_status, settings_get_tls_insecure_hosts, settings_get_tls_passthrough, settings_list_app_containers</code> |
| <code>persisted</code> | <code>Every change Tool remains disabled for both Agent and MCP after actual App restart</code> |
| <code>evidenceGeneration</code> | <code>readonly-reopened</code> |

<a id="walkthrough-tool-permissions-restart-01-saved-permissions"></a>
### 01 · Read the actual two-column permissions after restart

![01 · Read the actual two-column permissions after restart](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-01-saved-permissions.png)

<a id="walkthrough-tool-permissions-restart-02-query-only"></a>
### 02 · Verify a new connection still discovers queries only

![02 · Verify a new connection still discovers queries only](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-02-query-only.png)

<a id="walkthrough-tool-permissions-restart-03-query-enabled"></a>
### 03 · Verify retained read-only queries still work

![03 · Verify retained read-only queries still work](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-03-query-enabled.png)

<a id="walkthrough-tool-permissions-restart-04-clear-search"></a>
### 04 · Clear search while retaining the complete read-only state

![04 · Clear search while retaining the complete read-only state](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-04-clear-search.png)

<a id="walkthrough-tool-permissions-restart-05-stop-server"></a>
### 05 · Stop the Server without re-enabling changes

![05 · Stop the Server without re-enabling changes](../media/v0.1.1-alpha.1/tool-permissions-restart/tool-permissions-restart-05-stop-server.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:tool-permissions-restart:end -->
