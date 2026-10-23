# Tool permissions and approval

[Guide directory](../README.en.md) · [Agent](agent.md) · [MCP](mcp.md) · [Tool reference](tool-reference.md)

<a id="switches"></a>
## Configure Agent and MCP separately

<a id="walkthrough-tool-permissions-readonly-disable-agent-capture_start_recording"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_start_recording"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-capture_stop_recording"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_stop_recording"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-capture_cancel_transfer_job"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_cancel_transfer_job"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_body"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_body"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_har"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_har"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-capture_import_har"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_import_har"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-capture_export_archive"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_export_archive"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-capture_import_archive"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-capture_import_archive"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-rules_replace_tree"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_replace_tree"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-rules_export"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_export"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-rules_import"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-rules_import"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-composer_send_request"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_send_request"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-composer_probe_connection"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_probe_connection"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-composer_replace_collection"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_replace_collection"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-composer_export_collection"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_export_collection"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-composer_import_collection"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-composer_import_collection"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_enable_http"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_enable_http"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_disable_http"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_disable_http"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_enable_websocket"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_enable_websocket"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_disable_websocket"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_disable_websocket"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_forward_edited"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_forward_edited"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_drop"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_drop"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue_queue"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue_queue"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_drop_queue"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_drop_queue"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-breakpoints_continue_rule"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-breakpoints_continue_rule"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-diagnostics_export"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-diagnostics_export"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_generate_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_generate_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_install_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_install_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_uninstall_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_uninstall_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_delete_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_delete_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_reveal_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_reveal_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_view_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_view_certificate"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_open_certificate_manager"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_open_certificate_manager"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_app_container"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_app_container"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_app_container"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_app_container"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_all_app_containers"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_all_app_containers"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_all_app_containers"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_all_app_containers"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_system_proxy"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_system_proxy"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_restore_system_proxy"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_restore_system_proxy"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_replace_tls_insecure_hosts"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_replace_tls_insecure_hosts"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_replace_tls_passthrough"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_replace_tls_passthrough"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_enable_https_decryption"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_enable_https_decryption"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_disable_https_decryption"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_disable_https_decryption"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_language"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_language"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_theme"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_theme"></a><a id="walkthrough-tool-permissions-readonly-disable-agent-settings_set_export_privacy_defaults"></a><a id="walkthrough-tool-permissions-readonly-disable-mcp-settings_set_export_privacy_defaults"></a><a id="walkthrough-tool-permissions-readonly-review-capture"></a><a id="walkthrough-tool-permissions-readonly-review-rules"></a><a id="walkthrough-tool-permissions-readonly-review-composer"></a><a id="walkthrough-tool-permissions-readonly-review-breakpoints"></a><a id="walkthrough-tool-permissions-readonly-review-diagnostics"></a><a id="walkthrough-tool-permissions-readonly-review-settings"></a><a id="walkthrough-tool-permissions-readonly-10-readonly-list"></a><a id="walkthrough-tool-permissions-readonly-11-before-close"></a><a id="walkthrough-tool-permissions-readonly"></a><a id="walkthrough-tool-permissions-readonly-01-search"></a><a id="walkthrough-tool-permissions-readonly-02-disable-agent-clear"></a><a id="walkthrough-tool-permissions-readonly-03-disable-mcp-clear"></a><a id="walkthrough-tool-permissions-readonly-04-mcp-rejection"></a><a id="walkthrough-tool-permissions-readonly-05-agent"></a><a id="walkthrough-tool-permissions-readonly-06-agent-rejection"></a><a id="walkthrough-tool-permissions-restart"></a>
Tool capabilities controls which operations the internal Agent and external MCP can use independently. Changing a switch does not execute its Tool and requires no model configuration.

1. <a id="walkthrough"></a><a id="walkthrough-01-settings"></a><a id="walkthrough-02-agent"></a>Open Settings → Agent and find Tool capabilities below the model and MCP settings. Inspect the actual switches instead of assuming default-on permissions suit your task.

   ![Configure Agent and MCP separately · 1](../media/v0.1.1-alpha.1/tool-permissions-english/step-001.png)

2. <a id="walkthrough-03-search"></a><a id="walkthrough-08-query"></a>Search `capture_get_proxy_status` in box 1. Box 2 is Agent access and box 3 is MCP access on the same row. This is a query capability, and each entry point can still be restricted.

   ![Configure Agent and MCP separately · 2](../media/v0.1.1-alpha.1/tool-permissions-english/step-003.annotated.png)

3. <a id="walkthrough-04-disable-agent"></a>Disable Agent in box 1. MCP in box 2 stays enabled; it does not change with the Agent switch.

   ![Configure Agent and MCP separately · 3](../media/v0.1.1-alpha.1/tool-permissions-english/step-004.annotated.png)

4. <a id="walkthrough-05-disable-mcp"></a>Search `rules_replace_tree`. Disable MCP in box 2 if external Hosts must not replace rules. Agent in box 1 remains independent and should also be disabled when that access is unwanted.

   ![Configure Agent and MCP separately · 4](../media/v0.1.1-alpha.1/tool-permissions-english/step-005.annotated.png)

5. Enter `diagnostics` in box 1 to narrow the list to four Diagnostics Tools. Search only filters the display; it does not change permissions in bulk.

   ![Configure Agent and MCP separately · 5](../media/v0.1.1-alpha.1/tool-permissions-english/step-007.annotated.png)

6. <a id="walkthrough-tool-permissions-readonly-08-close-agent"></a><a id="walkthrough-tool-permissions-readonly-09-clear-search"></a>Clear search and scroll through the other groups. Hidden rows are not disabled automatically. Follow the next section for complete read-only configuration.

   ![Configure Agent and MCP separately · 6](../media/v0.1.1-alpha.1/tool-permissions-english/step-008.png)

7. <a id="walkthrough-tool-permissions-restart-01-saved-permissions"></a>After closing and reopening the App normally, search again. Box 1 in the first image shows Agent status querying still disabled. Box 1 in the second shows MCP rule replacement still disabled.

   ![Configure Agent and MCP separately · 7](../media/v0.1.1-alpha.1/tool-permissions-english/step-010.annotated.png)

   ![Configure Agent and MCP separately · 7](../media/v0.1.1-alpha.1/tool-permissions-english/step-012.annotated.png)

8. <a id="walkthrough-06-restore-agent"></a>Re-enable Agent in box 1 when status querying is needed. Restoring access does not replay failed or denied calls.

   ![Configure Agent and MCP separately · 8](../media/v0.1.1-alpha.1/tool-permissions-english/step-011.annotated.png)

9. <a id="walkthrough-07-restore-mcp"></a>Enable MCP in box 1 only when external Hosts should be allowed to replace rules. It makes later calls eligible for their approval policy; it does not immediately change rules.

   ![Configure Agent and MCP separately · 9](../media/v0.1.1-alpha.1/tool-permissions-english/step-013.annotated.png)

After disabling a Tool, refresh capability discovery in the caller. A stale conversation requesting a disabled operation is rejected; do not automatically restore access after `unknown_tool`. See the [Agent example](agent.md#walkthrough-18-ask) for rejection and the actual Recording state.


<a id="read-only"></a>
## Configure read-only access

<a id="walkthrough-tool-permissions-readonly-07-retained-record"></a><a id="walkthrough-tool-permissions-restart-02-query-only"></a><a id="walkthrough-tool-permissions-restart-03-query-enabled"></a><a id="walkthrough-tool-permissions-restart-04-clear-search"></a><a id="walkthrough-tool-permissions-restart-05-stop-server"></a>
Read-only configuration disables every unwanted change Tool, not just Clear. Queries can also read sensitive information, so retain only data needed for analysis. Ask is not a read-only mode.

1. Search `capture_clear` in Tool capabilities and first disable Agent in box 1. MCP in box 2 remains enabled and must be handled separately.

   ![Configure read-only access · 1](../media/v0.1.1-alpha.1/tool-permissions-english/step-014.annotated.png)

2. Disable MCP in box 2 and confirm Agent in box 1 stays off. Do not execute Clear to test a switch or practise cleanup on everyday traffic.

   ![Configure read-only access · 2](../media/v0.1.1-alpha.1/tool-permissions-english/step-015.annotated.png)

3. Continue through Capture, Rules, Composer, Breakpoints, Diagnostics and Settings. Disable both columns for each change entry and retain the required queries. Connect the model or Host after completing the restrictions; follow [MCP](mcp.md) for Client creation and connection.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/tool-permissions-english/step-015.png)

4. Review each group after setup. Search `capture_` in box 1 and scroll through Start/Stop recording, Clear, transfers and transfer cancellation to confirm changes are disabled. Retain only needed status, record, body and message queries. The illustrated Client is `Read-only verification client`.

   ![Configure read-only access · 4](../media/v0.1.1-alpha.1/tool-permissions-english/step-016.annotated.png)

5. Search `rules_` in box 1. Disable Apply rules, Export Rules and Import Rules for read-only access. Retain Rule set and Rule hits only when needed.

   ![Configure read-only access · 5](../media/v0.1.1-alpha.1/tool-permissions-english/step-017.annotated.png)

6. Search `composer_` in box 1 and disable Send request, Probe connection, collection replacement, import and export. Probe connection creates network activity; it is not a read-only query.

   ![Configure read-only access · 6](../media/v0.1.1-alpha.1/tool-permissions-english/step-018.annotated.png)

7. Search `breakpoints_` in box 1 and scroll to verify enable, disable, Continue, Forward edited, Drop and batch operations are off. Retain Pending breakpoints only when inspection is needed.

   ![Configure read-only access · 7](../media/v0.1.1-alpha.1/tool-permissions-english/step-019.annotated.png)

8. Search `diagnostics_` in box 1. Disable Export diagnostics because it writes a file. Retain the other queries only for the diagnostic data needed.

   ![Configure read-only access · 8](../media/v0.1.1-alpha.1/tool-permissions-english/step-020.annotated.png)

9. Search `settings_` in box 1 and scroll through every row. Certificate actions, system proxies, TLS lists, AppContainer controls, language, theme and export-privacy settings are not read-only queries. The absence of a native dialog does not make these changes read-only.

   ![Configure read-only access · 9](../media/v0.1.1-alpha.1/tool-permissions-english/step-021.annotated.png)

10. Finally, search for a required query. Here, `capture_get_proxy_status` remains enabled for Agent in box 1 and MCP in box 2. Disable either entry point when it is not needed.

    ![Configure read-only access · 10](../media/v0.1.1-alpha.1/tool-permissions-english/step-022.annotated.png)

11. Refresh the Host’s Tool list, confirm it contains only retained queries, then query proxy status and inspect the result. Disabled operations are unavailable. Refresh or reconnect a stale Host rather than enabling changes to silence errors.

    ![Related view from the same workflow](../media/v0.1.1-alpha.1/tool-permissions-english/step-022.png)

12. Check again after a normal restart. For `capture_clear`, Agent in box 1 and MCP in box 2 both remain disabled. Recheck the other groups and the Host’s current catalog; this row alone does not prove complete read-only access.

    ![Configure read-only access · 12](../media/v0.1.1-alpha.1/tool-permissions-english/step-024.annotated.png)

Read-only does not mean no data reaches a model. Query results can contain request bodies, responses, messages or logs. Limit permitted data before starting analysis.


<a id="ask-auto"></a>
## Understand Ask and Auto

| Operation | Ask | Auto |
| --- | --- | --- |
| Enabled query Tool | Direct query | Direct query |
| Enabled change Tool | Explicit App approval | Automatic execution |
| Disabled Tool | Rejected | Rejected |
| Native file and system prompts | Still required | Still required |

Keep Ask for first use or broad operations. Execution mode controls approval, not Tool permissions, system authorization or business prerequisites.

1. Select Ask in box 1 of the current Agent Chat. A change Tool requires a decision in its approval card.

   ![Understand Ask and Auto · 1](../media/v0.1.1-alpha.1/agent-execution-english/step-004.annotated.png)

2. Select Auto in box 1 only when automatic execution is intended. It affects this Chat, not other Chats or MCP Clients.

   ![Understand Ask and Auto · 2](../media/v0.1.1-alpha.1/agent-execution-english/step-017.annotated.png)

3. Changing to Auto after an approval appears does not approve the existing request. Box 1 marks Auto in the first image and the still-pending approval in the second. Return to that card and choose Allow or Deny.

   ![Understand Ask and Auto · 3](../media/v0.1.1-alpha.1/agent-execution-english/step-007.annotated.png)

   ![Understand Ask and Auto · 3](../media/v0.1.1-alpha.1/agent-execution-english/step-008.annotated.png)

4. After automatic work, return this Chat to Ask with box 1. A mode change neither cancels calls nor undoes completed operations.

   ![Understand Ask and Auto · 4](../media/v0.1.1-alpha.1/agent-execution-english/step-027.annotated.png)

5. An external Host uses its own MCP Client mode. Find its row under Settings → Agent → Clients. This example, `MCP workflow client`, starts in Ask after creation.

   ![Understand Ask and Auto · 5](../media/v0.1.1-alpha.1/mcp-streamable-english/step-005.png)

6. When intended, select Auto in box 1 for that Client. It changes only that Client’s approval policy; an Agent Chat mode is not a substitute.

   ![Understand Ask and Auto · 6](../media/v0.1.1-alpha.1/mcp-streamable-english/step-015.annotated.png)

7. Choose Ask on the same Client row when automatic execution is no longer needed. Resolve existing approvals in their dialogs or cancel the relevant call in the Host. Check whether Recording, file jobs or breakpoints remain active.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/mcp-streamable-english/step-015.png)

<a id="review"></a>

## Review an approval

Configure a usable model and keep the current Chat in Ask. The following steps first deny and then allow `capture_stop_recording`: it pauses new recording without clearing Capture or restoring the system proxy.

1. Enter `Pause recording after asking for my approval.` in box 1 and click Send in box 2.

   ![Review an approval · 1](../media/v0.1.1-alpha.1/agent-execution-english/step-005.annotated.png)

2. Review the caller, Tool name, target and effect. Deny Tool in box 1 refuses execution; Allow Tool in box 2 permits this operation. Choose Deny Tool first.

   ![Review an approval · 2](../media/v0.1.1-alpha.1/agent-execution-english/step-006.annotated.png)

3. After denial, box 2 retains the Denied result and Recording in box 1 remains enabled. A model reply or an approval card does not prove execution.

   ![Review an approval · 3](../media/v0.1.1-alpha.1/agent-execution-english/step-010.annotated.png)

4. When a pause is intended, enter `Pause capture after explicit approval.` in box 1 and click Send in box 2. The new request requires a new approval.

   ![Review an approval · 4](../media/v0.1.1-alpha.1/agent-execution-english/step-013.annotated.png)

5. Review the Tool and effect again, then click Allow Tool in box 1. The earlier Deny does not decide this call.

   ![Review an approval · 5](../media/v0.1.1-alpha.1/agent-execution-english/step-014.annotated.png)

6. Box 2 shows the result and box 1 changes to Paused. Resume with the Capture recording control when needed, and check the actual state before continuing.

   ![Review an approval · 6](../media/v0.1.1-alpha.1/agent-execution-english/step-015.annotated.png)

7. Review other Tools against their own arguments. Here, Client `Diagnostics transfer MCP` requests `diagnostics_export`. Check process `core`, level `info`, outcome `success` and the file-writing effect before choosing Allow Tool call in box 1.

   ![Review an approval · 7](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-030.annotated.png)

Allow may still be followed by file selection, an import preview or system authorization. Complete those steps, then inspect the terminal job state and actual file. Do not bypass confirmations or treat “started” as “completed”.


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
