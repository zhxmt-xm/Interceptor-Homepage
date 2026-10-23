# Tool reference

[Guide directory](../README.en.md) · [Permissions](tool-permissions.md)

`query` reads data. `change` controls operations, changes state, sends network traffic or opens native dialogs. Enabled queries run directly; changes follow the Agent Chat or MCP Client's Ask/Auto policy.

<a id="capture"></a>
## Capture

| Tool | Type | Purpose |
| --- | --- | --- |
| `capture_get_proxy_status` | query | Read listener and recording state |
| `capture_get_storage_status` | query | Read temporary-record/body usage |
| `capture_start_recording` | change | Start recording with normal readiness requirements |
| `capture_stop_recording` | change | Pause new recording without stopping forwarding or restoring proxies |
| `capture_clear` | change | Clear current Capture records and bodies |
| `capture_list_exchanges` | query | Query request summaries |
| `capture_get_exchange` | query | Read an existing request's details |
| `capture_get_exchange_body` | query | Read its selected body within the returned preview limits |
| `capture_list_websocket_messages` | query | Read connection messages |
| `capture_list_grpc_messages` | query | Read gRPC messages |
| `capture_export_body` | change | Save a selected body through a native dialog |
| `capture_export_har` | change | Start HAR export through a native dialog |
| `capture_import_har` | change | Select and import HAR |
| `capture_export_archive` | change | Start native archive export |
| `capture_import_archive` | change | Select and import a native archive |
| `capture_get_transfer_job` | query | Inspect progress, warnings and final task state |
| `capture_cancel_transfer_job` | change | Request cancellation and wait for real cleanup |

Query current identities before reading bodies/messages. Do not reuse pre-restart IDs. File tasks need completion checks, and tools do not accept arbitrary model-chosen local paths. See [Capture](capture.md) and [transfers](transfer.md).

<a id="rules"></a>
## Rules

| Tool | Type | Purpose |
| --- | --- | --- |
| `rules_get_tree` | query | Read the saved rule tree and revision |
| `rules_get_hits` | query | Inspect hits |
| `rules_replace_tree` | change | Replace the tree using the current revision |
| `rules_import` | change | Select a file and append after preview confirmation |
| `rules_export` | change | Export Core's saved rule tree |

Read the latest revision first. Map Local paths have explicit redaction/preservation rules; do not invent paths. UI draft export differs from Tool saved-state export: [Rules](rules.md#import-export).

<a id="composer"></a>
## Composer

| Tool | Type | Purpose |
| --- | --- | --- |
| `composer_get_collection` | query | Read saved Collection/revision |
| `composer_replace_collection` | change | Atomically replace using the current revision |
| `composer_import_collection` | change | Select and append after preview confirmation |
| `composer_export_collection` | change | Export using the native save dialog |
| `composer_send_request` | change | Send directly, outside Capture's proxy data path |
| `composer_probe_connection` | change | Perform a TLS handshake without an HTTP request |

Replacing/importing collections does not Send. Sending and probing both create real network activity and are change operations. See [Composer](composer.md).

<a id="breakpoints"></a>
## Breakpoints

| Tool | Type | Purpose |
| --- | --- | --- |
| `breakpoints_list` | query | Read current waiting breakpoints |
| `breakpoints_enable_http` | change | Enable HTTP matching control |
| `breakpoints_disable_http` | change | Disable HTTP matching control |
| `breakpoints_enable_websocket` | change | Configure frame interception for a connection |
| `breakpoints_disable_websocket` | change | Disable frame interception |
| `breakpoints_continue` | change | Continue one existing wait unchanged |
| `breakpoints_forward_edited` | change | Edit permitted fields and continue one wait |
| `breakpoints_drop` | change | Drop one existing wait |
| `breakpoints_continue_queue` | change | Continue waits in the specified queue's initial snapshot |
| `breakpoints_drop_queue` | change | Drop waits in that snapshot |
| `breakpoints_continue_rule` | change | Continue existing waits belonging to a rule |

Editable Tool fields depend on phase: request method/URL/text body, response status/text body, or WebSocket text body. Headers, arbitrary file paths and close codes are not exposed here; use the [App editor](breakpoints.md#edit).

Batch Continue ignores Renderer drafts. Requery stale individual waits.

<a id="diagnostics"></a>
## Diagnostics

| Tool | Type | Purpose |
| --- | --- | --- |
| `diagnostics_get_trace` | query | Read a bounded current-Core trace snapshot |
| `diagnostics_get_recent` | query | Read recent current-Core memory records |
| `diagnostics_query` | query | Query persistent diagnostics |
| `diagnostics_export` | change | Export redacted JSONL through a native dialog |

Memory snapshots are not complete history. Wait for export completion. See [Diagnostics](diagnostics.md).

<a id="settings"></a>
## Settings

| Tool | Type | Purpose |
| --- | --- | --- |
| `settings_get_core_process_status` | query | Read Core runtime state |
| `settings_get_system_proxy_status` | query | Read public proxy status |
| `settings_enable_system_proxy` | change | Take system proxy ownership |
| `settings_restore_system_proxy` | change | Restore according to ownership rules |
| `settings_get_certificate_status` | query | Read public CA identity/trust |
| `settings_generate_certificate` | change | Generate CA material, without overwriting a trusted CA |
| `settings_install_certificate` | change | Install trust through native authorization |
| `settings_uninstall_certificate` | change | Remove trust while retaining material |
| `settings_delete_certificate` | change | Remove material following necessary trust removal |
| `settings_reveal_certificate` | change | Reveal certificate material through the OS |
| `settings_view_certificate` | change | View the public certificate |
| `settings_open_certificate_manager` | change | Open the platform's manager |
| `settings_get_tls_insecure_hosts` | query | Read origin-certificate exceptions |
| `settings_replace_tls_insecure_hosts` | change | Replace the explicit exception list |
| `settings_enable_https_decryption` | change | Enable intent; effective decryption still needs a usable trusted CA |
| `settings_disable_https_decryption` | change | Stop decryption without removing CA trust |
| `settings_get_tls_passthrough` | query | Read encrypted-passthrough hosts |
| `settings_replace_tls_passthrough` | change | Replace that list |
| `settings_list_app_containers` | query | Read Windows AppContainer entries |
| `settings_enable_app_container` | change | Enable one loopback exemption |
| `settings_disable_app_container` | change | Remove one exemption |
| `settings_enable_all_app_containers` | change | Enable the current enumerated targets |
| `settings_disable_all_app_containers` | change | Remove exemptions for enumerated targets |
| `settings_set_language` | change | Select an existing App language |
| `settings_set_theme` | change | Select one of four App themes |
| `settings_set_export_privacy_defaults` | change | Set the three explicit export privacy defaults |

Ordinary queries do not expose arbitrary native paths, private keys or complete OS proxy configuration. See [Settings](settings.md) for platform and authorization limits.

<a id="使用这份速查表"></a>
## Use this reference

This example queries proxy status over MCP and then pauses recording. First create and connect your Client as described in [MCP](mcp.md). A label identifies the Client but does not configure the Host automatically.

1. Find the owning chapter and understand the operation’s effects. Queries can also read sensitive traffic; enable only the capabilities needed.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/mcp-streamable-english/step-008.png)

2. Search `capture_get_proxy_status` under Settings → Agent → Tool capabilities and confirm MCP access is enabled. Configure Agent separately; searching does not disable hidden rows.

   ![Use this reference · 2](../media/v0.1.1-alpha.1/mcp-streamable-english/step-008.png)

3. Refresh the Tool list in the Host, read exact arguments from the current schema, then call `capture_get_proxy_status` and inspect its listener and recording state. Do not guess fields from a name or equate copying configuration with a successful query.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/mcp-streamable-english/step-008.png)

4. To pause recording, enable MCP access to `capture_stop_recording`, keep the Client in Ask and request it from the Host. Review the Client, Tool and effect. Box 1 is Deny Tool call; box 2 is Allow Tool call. Choose Deny first to leave Recording active.

   ![Use this reference · 4](../media/v0.1.1-alpha.1/mcp-streamable-english/step-012.annotated.png)

5. Request the operation again when intended, review the new approval and click Allow Tool call in box 1.

   ![Use this reference · 5](../media/v0.1.1-alpha.1/mcp-streamable-english/step-013.annotated.png)

6. Return to Capture and verify Paused in box 1, then inspect the Tool result in the Host. Pausing neither clears existing records nor restores the system proxy. Resume with the recording control when needed.

   ![Use this reference · 6](../media/v0.1.1-alpha.1/mcp-streamable-english/step-014.annotated.png)

Model configuration, MCP Client credentials, arbitrary file access and App updates are not in this business Tool catalog. Use their formal UI. See [Tool permissions](tool-permissions.md) for the full access and approval steps.
