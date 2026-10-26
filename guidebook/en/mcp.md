# MCP: connect an external AI host

[Guide directory](../README.en.md) · [Permissions](tool-permissions.md) · [Tool reference](tool-reference.md)

<a id="requirements"></a>
## Check the prerequisites

- Interceptor runs locally and MCP Server is enabled.
- The host can reach the local loopback Streamable HTTP endpoint.
- Supported protocols are `2025-06-18`, `2025-11-25`, `2026-07-28`; host/SDK negotiation is automatic.
- Do not substitute `stdio` or legacy HTTP+SSE configuration.
- The external host owns its model setup; an internal Agent model is not required.

A cloud-originated connector cannot access your computer's `127.0.0.1`. Supporting MCP alone does not make your loopback endpoint reachable from the cloud.

<a id="server"></a>
## Enable the server

MCP Server is separate from the Capture proxy listener. Initial enablement selects an available port; normal later starts reuse the saved port.

1. <a id="walkthrough"></a><a id="walkthrough-01-settings"></a><a id="walkthrough-02-mcp"></a>Open Settings → Agent and find MCP server. MCP does not require an internal Agent model, and the Server starts disabled.

   ![Enable the server · 1](../media/v0.1.1-alpha.1/mcp-streamable-english/step-001.png)

2. <a id="walkthrough-03-enable"></a>Enable the switch in box 1 and wait for Running. Box 2 shows this instance’s endpoint, `http://127.0.0.1:55871/mcp`. Use the URL shown in your App rather than treating Capture’s `8888` as an MCP port.

   ![Enable the server · 2](../media/v0.1.1-alpha.1/mcp-streamable-english/step-002.annotated.png)

The service listens only on local loopback, not the LAN or public Internet. Normal App exit does not leave an independent MCP Server running.


<a id="client"></a>
## Create one client per host

Create a separate Client for each actual Host. This example is named `MCP workflow client`; its label identifies the Client but does not configure the Host automatically.

1. <a id="walkthrough-04-add-client"></a>Click Add client in the Clients section to open the Client name dialog. Replace the default label with one that identifies your Host.

   ![Create one client per host · 1](../media/v0.1.1-alpha.1/mcp-streamable-english/step-003.png)

2. <a id="walkthrough-05-name"></a><a id="walkthrough-06-create"></a>Enter `MCP workflow client` in box 1 and click Create client in box 2. The new Client starts in Ask and has an independent credential rather than sharing another Host’s identity.

   ![Create one client per host · 2](../media/v0.1.1-alpha.1/mcp-streamable-english/step-004.annotated.png)

   ![Create one client per host · 2](../media/v0.1.1-alpha.1/mcp-streamable-english/step-005.png)

3. <a id="walkthrough-07-copy"></a>Use the copy button in box 1 of the Client row to place its connection configuration on the clipboard. It contains authentication data; do not paste it into chat, commit it to a project or publish it in screenshots.

   ![Create one client per host · 3](../media/v0.1.1-alpha.1/mcp-streamable-english/step-006.annotated.png)

4. Add an HTTP Server in your Host’s user-level MCP configuration using its required format, endpoint and authentication fields. Outer configuration formats vary, and a cloud connector without access to your machine cannot use its loopback URL.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/mcp-streamable-english/step-006.png)

5. <a id="walkthrough-08-query"></a>Connect from the Host, refresh its Tool list and first call the read-only `capture_get_proxy_status`. Inspect the returned result in the Host. The App retains this Client configuration; a successful copy alone does not prove authentication or querying succeeded.

   ![Create one client per host · 5](../media/v0.1.1-alpha.1/mcp-streamable-english/step-009.png)

6. To control query access, search Tool capabilities for `capture_get_proxy_status`. Box 1 is the MCP switch; box 2 is the independent Agent switch. Disabling MCP makes this Tool unavailable until explicitly enabled again.

   ![Create one client per host · 6](../media/v0.1.1-alpha.1/mcp-streamable-english/step-007.annotated.png)

   ![Create one client per host · 6](../media/v0.1.1-alpha.1/mcp-streamable-english/step-008.png)

- Keep the configuration in the Host’s secure user-level location, outside the project and Settings Sync.
- Use separate Clients for separate Hosts instead of sharing a credential.
- The Host’s model account is independent of Interceptor’s internal Agent configuration.


<a id="approval"></a>
## Request a change from the host

<a id="walkthrough-mcp-tool-lifecycle-18-long-request"></a><a id="walkthrough-mcp-tool-lifecycle-19-revoke-dialog"></a><a id="walkthrough-mcp-tool-lifecycle-20-revoke"></a><a id="walkthrough-mcp-tool-lifecycle-21-old-identity"></a><a id="walkthrough-mcp-tool-lifecycle-22-stop"></a>
Enable the required Tool in the MCP column of Tool capabilities. The following example uses the Copilot SDK Host inside VS Code, with a Client named `Current copilot-cli`, independently of the earlier `MCP workflow client` example. An SDK session may use a different MCP configuration entry point from built-in VS Code Copilot Chat. Load the configuration through the current Host's official user-level entry point; do not paste credentials into chat.

1. <a id="current-host"></a><a id="walkthrough-mcp-tool-lifecycle"></a><a id="walkthrough-mcp-tool-lifecycle-01-client"></a><a id="walkthrough-mcp-tool-lifecycle-02-pause-permission"></a><a id="walkthrough-mcp-tool-lifecycle-03-pending-ask"></a>Copy the configuration from `Current copilot-cli` using box 1 in the first image, and let the current SDK Host load this example's `http://127.0.0.1:51983/mcp`. Use your own App's actual address. Keep Ask selected in box 1 of the second image. A successful copy or a Running Server does not replace a real call in the next step.

   ![Request a change from the host · 1](../media/v0.1.1-alpha.1/mcp-current-host-english/step-001.annotated.png)

   ![Request a change from the host · 1](../media/v0.1.1-alpha.1/mcp-current-host-english/step-002.annotated.png)

2. <a id="current-host-query"></a>Use only a disposable capture and send a request you control through the proxy. Box 1 filters this example's path, `/e2e/current-mcp-host/c8a505f8-a3b7-4197-841c-002a789ccc9d`; box 2 identifies its GET, `200` and `113 B`. In the current Host, call `capture_get_proxy_status`, then filter `capture_list_exchanges` by the same path and GET method. Use its returned ID for details and body reads, checking that request rather than unrelated personal traffic. The example path is dynamic; substitute your own.

   ![Request a change from the host · 2](../media/v0.1.1-alpha.1/mcp-current-host-english/step-003.annotated.png)

3. <a id="walkthrough-09-ask"></a><a id="walkthrough-10-deny"></a>Request `capture_stop_recording` from the current Host. In the App, inspect the Client, Tool, empty arguments and effect on new recording. First choose Deny Tool call in box 1 of the first image. The Host returns a rejection, while box 1 of the second image still shows Recording. Denying this call neither pauses recording nor restores the system proxy.

   ![Request a change from the host · 3](../media/v0.1.1-alpha.1/mcp-current-host-english/step-004.annotated.png)

   ![Request a change from the host · 3](../media/v0.1.1-alpha.1/mcp-current-host-english/step-005.annotated.png)

4. <a id="walkthrough-11-ask-again"></a><a id="walkthrough-12-allow"></a>Request the same Tool again, review the new call and choose Allow Tool call in box 1 of the first image. Box 1 of the second image changes to Paused, and the Host returns `recording: false`. The earlier denial does not decide this call; do not infer state from a model saying “done”.

   ![Request a change from the host · 4](../media/v0.1.1-alpha.1/mcp-current-host-english/step-006.annotated.png)

   ![Request a change from the host · 4](../media/v0.1.1-alpha.1/mcp-current-host-english/step-007.annotated.png)

5. <a id="walkthrough-mcp-tool-lifecycle-17-auto"></a>First resume Recording in Capture. If automatic execution is intended, open Settings and select Auto for this Client only, using box 1 in the first image. Request a pause from the Host again: box 1 in the second image shows Paused without another App approval dialog. Auto does not bypass Tool permissions, Host approval or system authorization, and does not change an internal Agent Chat's mode. Resume Recording afterward when needed.

   ![Request a change from the host · 5](../media/v0.1.1-alpha.1/mcp-current-host-english/step-008.annotated.png)

   ![Request a change from the host · 5](../media/v0.1.1-alpha.1/mcp-current-host-english/step-009.annotated.png)

6. <a id="current-host-clear"></a>Call `capture_clear` only after confirming that the entire current capture may be deleted, not just its filtered results. Check zero exchange and body counts in the actual result. Box 1 retains the Keyword, box 2 still shows Recording, and the list is empty. The Stop recording text above the control is a pointer tooltip, not a paused state.

   ![Request a change from the host · 6](../media/v0.1.1-alpha.1/mcp-current-host-english/step-010.annotated.png)

7. <a id="walkthrough-mcp-tool-lifecycle-04-caller-abort"></a>If the caller supports cancellation, cancel a single call that is still awaiting approval. Its dialog closes while Recording retains its previous state. The image below uses the separate `MCP workflow client` example. Cancelling one call differs from disconnecting the whole Host, and the available control depends on the Host.

   ![Request a change from the host · 7](../media/v0.1.1-alpha.1/mcp-streamable-english/step-011.png)

8. <a id="walkthrough-mcp-tool-lifecycle-05-diagnostics-permissions"></a><a id="walkthrough-mcp-tool-lifecycle-06-recent"></a><a id="walkthrough-mcp-tool-lifecycle-07-trace"></a><a id="walkthrough-mcp-tool-lifecycle-08-export-ask"></a><a id="walkthrough-mcp-tool-lifecycle-09-deny"></a><a id="walkthrough-mcp-tool-lifecycle-10-export-again"></a><a id="walkthrough-mcp-tool-lifecycle-11-native-panel"></a><a id="walkthrough-mcp-tool-lifecycle-12-native-cancel"></a><a id="walkthrough-mcp-tool-lifecycle-13-export-save"></a><a id="walkthrough-mcp-tool-lifecycle-14-save"></a><a id="walkthrough-mcp-tool-lifecycle-15-job-completed"></a><a id="walkthrough-mcp-tool-lifecycle-16-clear-search"></a>File Tools still require the system dialog. In this example, the separate `Diagnostics transfer MCP` Client requests `diagnostics_export`: choose Allow Tool call in box 1, then save `mcp.jsonl`. Cancel starts no export. Check the job and actual file afterward.

   ![Request a change from the host · 8](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-030.annotated.png)

   ![Request a change from the host · 8](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-031.png)

A Host may also require its own approval, separately from Interceptor. Auto does not choose files or bypass system authorization.


<a id="endpoint"></a>
## Resolve an endpoint conflict

An occupied port during manual enablement and a saved-port conflict after App restart have different recovery paths. Read the actual error first. Do not create conflicts for practice or terminate unknown processes.

1. Open Settings → Agent. Protocol information in box 1 remains visible while the Server is off. A port conflict does not change the supported revisions: `2026-07-28`, `2025-11-25` and `2025-06-18`.

   ![Resolve an endpoint conflict · 1](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-002.annotated.png)

2. <a id="walkthrough-18-port-conflict"></a>After manual enablement fails, box 1 shows `EADDRINUSE` and the Server stays Off. The occupied endpoint here is `127.0.0.1:52142`, not Capture’s `8888`.

   ![Resolve an endpoint conflict · 2](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-005.annotated.png)

3. Identify the owner first and normally stop only a service you manage and no longer need. If ownership is unclear, leave it running and ask its user to resolve the conflict.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-005.png)

4. <a id="walkthrough-19-release-port"></a>Enable MCP Server after the known owner releases the port and wait for Running. Box 1 still shows `http://127.0.0.1:52142/mcp`; changing the endpoint was not required.

   ![Resolve an endpoint conflict · 4](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-006.annotated.png)

5. <a id="walkthrough-20-final-disable"></a>Disable the Server when MCP is no longer needed and verify Off. A saved URL can remain visible even when the Server is not listening.

   ![Resolve an endpoint conflict · 5](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-007.png)

6. <a id="walkthrough-mcp-endpoint"></a><a id="walkthrough-mcp-endpoint-01-settings"></a><a id="walkthrough-mcp-endpoint-02-conflict"></a><a id="walkthrough-mcp-endpoint-reconnect"></a><a id="walkthrough-mcp-endpoint-reconnect-01-settings"></a><a id="walkthrough-mcp-endpoint-reconnect-02-conflict"></a>The other case occurs after a normal restart: a previously enabled Server’s saved port is occupied. Port unavailable appears while the URL and Client remain. This example retains `Endpoint recovery client`; it need not be deleted or recreated.

   ![Resolve an endpoint conflict · 6](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-010.png)

7. <a id="walkthrough-mcp-endpoint-03-change"></a><a id="walkthrough-mcp-endpoint-reconnect-03-change"></a>Click Change endpoint in box 1 when a different available port is intended. The App does not silently update the Host’s configuration.

   ![Resolve an endpoint conflict · 7](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-011.annotated.png)

8. <a id="walkthrough-mcp-endpoint-04-note-new-address"></a>Wait for Running and read the new URL in box 1. Here it is `http://127.0.0.1:52166/mcp`; the previous `52142` is no longer this Server’s address.

   ![Resolve an endpoint conflict · 8](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-012.annotated.png)

9. <a id="walkthrough-mcp-endpoint-reconnect-04-copy-current"></a>Use the copy control in box 1 on the original Client row, then update the endpoint and authentication fields in its Host. Change endpoint itself does not rotate the Client credential. Keep copied configuration out of chats and public projects.

   ![Resolve an endpoint conflict · 9](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-013.annotated.png)

10. <a id="walkthrough-mcp-endpoint-reconnect-05-reconnect"></a><a id="walkthrough-mcp-endpoint-reconnect-06-query-new-endpoint"></a>Reconnect the Host, refresh its Tool list, call `capture_get_proxy_status` and inspect the actual result. The App retains the same Client. A copied-configuration message alone does not establish query success.

    ![Resolve an endpoint conflict · 10](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-014.png)

11. <a id="walkthrough-mcp-endpoint-reconnect-07-disable"></a><a id="walkthrough-mcp-endpoint-05-disable"></a>Disable the Server with box 1 when finished and verify Off. Its Client configuration can remain. If the Host is no longer trusted, revoke that Client separately as described next.

    ![Resolve an endpoint conflict · 11](../media/v0.1.1-alpha.1/mcp-endpoint-english/step-015.annotated.png)

Normal enablement, disablement or restart does not require recreating Clients. An explicit endpoint change does require updating Hosts that still use the old URL.


<a id="credentials"></a>
## Rotate, revoke and disable

<a id="walkthrough-13-auto"></a><a id="walkthrough-14-ask-mode"></a>
Credential rotation, Client revocation and Server shutdown are distinct operations. Inspect ongoing calls and pending work before choosing one. The first five steps use `MCP workflow client` for rotation; the final three return to `Current copilot-cli` for revocation and shutdown.

1. Normal App restart restores the saved endpoint and Client mode. The original Client in box 1 remains Auto; an ordinary restart does not rotate its credential.

   ![Rotate, revoke and disable · 1](../media/v0.1.1-alpha.1/mcp-streamable-english/step-028.annotated.png)

2. Switch the Client back to Ask when approval is needed. A Host disconnect during approval of an operation such as Continue cancels that Tool call, not the pending traffic; the HTTP item here remains waiting.

   ![Rotate, revoke and disable · 2](../media/v0.1.1-alpha.1/mcp-streamable-english/step-029.png)

3. <a id="walkthrough-14a-regenerate-dialog"></a>Use Regenerate on the Client and review its confirmation. Cancel in box 1 abandons it; Regenerate credential in box 2 invalidates the old configuration immediately without resolving existing breakpoints.

   ![Rotate, revoke and disable · 3](../media/v0.1.1-alpha.1/mcp-streamable-english/step-030.annotated.png)

4. <a id="walkthrough-14b-regenerate"></a><a id="walkthrough-14c-update-client"></a>After rotation, copy the new configuration with box 1, update the corresponding Host and reconnect. The endpoint stays the same, but the old credential no longer works. Keep the new credential out of chats and projects.

   ![Rotate, revoke and disable · 4](../media/v0.1.1-alpha.1/mcp-streamable-english/step-031.annotated.png)

5. After reconnecting, handle previously pending work under the current permissions. Allow it only when continuation is intended; rotation is not business recovery.

   ![Rotate, revoke and disable · 5](../media/v0.1.1-alpha.1/mcp-streamable-english/step-032.png)

6. <a id="walkthrough-15-revoke-dialog"></a>When the earlier SDK Host is no longer trusted or needed, find `Current copilot-cli` and use its revoke button in box 1. Check the Client name first so that another Host is not revoked.

   ![Rotate, revoke and disable · 6](../media/v0.1.1-alpha.1/mcp-current-host-english/step-011.annotated.png)

7. <a id="walkthrough-16-revoke"></a>Check the name again in the confirmation, then choose Revoke client in box 1; Cancel abandons the operation. Revocation removes the row, invalidates its old configuration and cancels its active calls. Revoking one Client does not itself shut down the Server.

   ![Rotate, revoke and disable · 7](../media/v0.1.1-alpha.1/mcp-current-host-english/step-012.annotated.png)

8. <a id="walkthrough-17-disable"></a>After confirming that this Client is gone, disable MCP Server with box 1 only when external access is no longer needed, and verify Off. Stop and remove this entry through the corresponding Host's configuration without replacing other Servers. Hosts cannot connect to the closed listener until it is explicitly enabled again.

   ![Rotate, revoke and disable · 8](../media/v0.1.1-alpha.1/mcp-current-host-english/step-013.annotated.png)

Rotate or revoke immediately after credential exposure. Renaming a Host does not invalidate its credential.


<a id="browser"></a>
## Browser hosts and compatibility

1. Confirm the browser-side client runs on your device rather than through a remote connector.

   ![Create a local Browser MCP Client](../media/windows-local-20261023/mcp-browser/client-setup.png)

2. Use only a deliberately trusted page and provide only its authorized Client credentials.

   ![Local Browser Client with independent Ask mode](../media/windows-local-20261023/mcp-browser/client-setup.png)

3. If discovery is empty, inspect Server, identity, protocol and MCP permissions.

   ![Inspect Server, Client and MCP permissions](../media/windows-local-20261023/mcp-browser/client-setup.png)

   If discovery returns no Tools, check this Client’s Tool permissions, then reconnect and refresh the list. See [read-only permissions](tool-permissions.md#read-only).

4. If queries work but changes wait, check App approval, native windows and business prerequisites.

   ![Browser Client in Ask mode](../media/windows-local-20261023/mcp-browser/client-setup.png)

   If a call keeps waiting, return to the App and check Tool approval, file selection and confirmation dialogs. Confirm or cancel them explicitly.

5. After host upgrades, verify a real query/action rather than only seeing a registered server entry.

   ![State after revoking the Client and disabling the Server](../media/windows-local-20261023/mcp-browser/client-cleanup.png)

- Cross-Origin browser support is not anonymous access.
- Do not give client credentials to arbitrary third-party webpages.
- The guide does not require internal Playground or claim that SDK-client checks certify all real VS Code/Claude/other hosts.
- Existing representative host results do not prove every Tool, two-host concurrency or every host version.
