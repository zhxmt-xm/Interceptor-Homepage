# Settings: proxies, certificates, storage and updates

[Guide directory](../README.en.md) · [Getting started](getting-started.md)

<a id="先找到对应设置"></a>
## Find the relevant section

Open Settings from the sidebar. System proxy, Upstream proxy, App containers, TLS passthrough, Certificates, Appearance, Storage, Privacy, Agent and Updates solve different problems.

Returning preserves the last visited section. Readiness, TLS or Agent links can deliberately select the relevant section.

<a id="system-proxy"></a>
## Take ownership and restore the system proxy

The system proxy routes applications that follow system settings through Interceptor. Explicitly configured clients still use their own proxy address. The product helper and any required system authorization must be ready. Check Restore, Enable and Recording separately rather than inferring every network behavior from one control.

1. <a id="walkthrough-settings-proxy-routing"></a><a id="walkthrough-settings-proxy-routing-01-owned"></a>Open Settings → Proxy & Listener and inspect `127.0.0.1:8888`, Listening and Owned by Interceptor. Restore in box 1 restores the settings that existed before this takeover.

   ![Take ownership and restore the system proxy · 1](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-001.annotated.png)

2. <a id="walkthrough-settings-proxy-routing-02-restore"></a>Click Restore and wait for completion. The previous system proxy configuration returns, shown as External in this example, while the listener remains Listening. A temporarily disabled button alone does not prove restoration completed.

   ![Take ownership and restore the system proxy · 2](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-002.png)

3. <a id="walkthrough-settings-proxy-routing-03-listener"></a>An explicitly configured client can still connect to `http://127.0.0.1:8888`. Box 1 is the resulting `/e2e/system-proxy/ui/explicit-client` record after Restore. It demonstrates the listener is available, not that another application automatically follows system proxy settings.

   ![Take ownership and restore the system proxy · 3](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-003.annotated.png)

4. <a id="walkthrough-settings-proxy-routing-04-enable"></a>Click Enable in box 1 to take ownership again and wait for Owned by Interceptor. This example reuses an authorized helper; first-time authorization still requires the system dialog.

   ![Take ownership and restore the system proxy · 4](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-004.annotated.png)

   ![Take ownership and restore the system proxy · 4](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-005.png)

5. <a id="walkthrough-settings-proxy-routing-05-recording"></a>Return to Capture and separately check Recording in box 1. If recording has not started, use its control and complete the readiness prompt first.

   ![Take ownership and restore the system proxy · 5](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-006.annotated.png)

6. <a id="walkthrough-settings-proxy-routing-06-pause"></a>Use the recording control to pause and confirm box 1 changes to Paused. This is not the Settings Restore operation.

   ![Take ownership and restore the system proxy · 6](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-007.annotated.png)

7. <a id="walkthrough-settings-proxy-routing-07-still-owned"></a>Reopen Proxy & Listener and check the system proxy still shows Owned by Interceptor. Inspect routing, the listener and recording separately; Pause is not restoration of the previous network settings.

   ![Take ownership and restore the system proxy · 7](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-008.png)

8. <a id="walkthrough-settings-proxy-routing-08-final-restore"></a>To restore system routing while keeping the App open, use Restore and wait for completion. To quit, save your data and close the window normally.

   ![Take ownership and restore the system proxy · 8](../media/v0.1.1-alpha.1/system-proxy-ui-english/step-010.png)

- Windows primarily configures WinINet. WinHTTP, custom stacks, Java, curl, containers and WSL do not necessarily follow it.
- To verify a particular application’s route, send a request from that application and inspect Capture.
- Do not repeatedly click or force termination during enable, restore or native authorization; follow any conflict message.
- Do not overwrite another application’s proxy changes made during the session. See the next section for upstream handling of an existing proxy.


<a id="upstream"></a>
## Choose an upstream proxy

The upstream route controls how Interceptor reaches a destination after receiving a request. It is separate from routing clients into Interceptor.

| Mode | Interface option | Behavior |
| --- | --- | --- |
| System | Use system settings | Reuse the system proxy or automatic configuration from before takeover |
| Direct | No upstream proxy | Connect directly without another upstream proxy |
| Manual | Manual proxy | Use the configured protocol, Host and Port |
| PAC | PAC URL | Use an HTTP/HTTPS PAC to select a route for each request |
| WPAD | Auto-discover (WPAD) | Discover a PAC on a network that actually supports discovery |

Prepare your own reachable upstream or PAC. The example HTTP upstream is `127.0.0.1:54669` and its PAC is `http://127.0.0.1:54668/proxy.pac`; the App does not create these services. Without a corresponding service, practice editing and Discard rather than Apply.

1. <a id="walkthrough-03-proxy"></a><a id="walkthrough-04-upstream"></a><a id="walkthrough-settings-upstream"></a><a id="walkthrough-settings-upstream-01-settings"></a><a id="walkthrough-settings-upstream-02-upstream"></a>Open Settings → Upstream proxy and inspect Current route first. It shows the applied System route, not an uncommitted draft.

   ![Choose an upstream proxy · 1](../media/v0.1.1-alpha.1/settings-upstream-english/step-001.png)

2. <a id="walkthrough-settings-upstream-03-direct-draft"></a><a id="walkthrough-settings-upstream-04-discard"></a>Select No upstream proxy (Direct) without applying it. Not applied marks an uncommitted draft; click Discard changes in box 1 and Current route remains System.

   ![Choose an upstream proxy · 2](../media/v0.1.1-alpha.1/settings-upstream-english/step-002.annotated.png)

   ![Choose an upstream proxy · 2](../media/v0.1.1-alpha.1/settings-upstream-english/step-003.png)

3. <a id="walkthrough-05-manual-draft"></a><a id="walkthrough-settings-upstream-05-manual"></a><a id="walkthrough-settings-upstream-06-host"></a><a id="walkthrough-settings-upstream-07-port"></a>Choose Manual proxy and its supported Protocol, HTTP in this example. Enter `127.0.0.1` in Host, box 1, and `54669` in Port, box 2. Host excludes a scheme, path or credentials. Box 3 is Apply; use it only when the upstream is actually available.

   ![Choose an upstream proxy · 3](../media/v0.1.1-alpha.1/settings-upstream-english/step-004.annotated.png)

4. <a id="walkthrough-06-discard"></a>Click Discard changes if you do not want this Manual draft and verify System remains active. Discarding a draft neither closes the listener nor stops Capture.

   ![Choose an upstream proxy · 4](../media/v0.1.1-alpha.1/settings-upstream-english/step-005.png)

5. <a id="walkthrough-settings-upstream-08-apply-manual"></a>To use the upstream, re-enter your Manual fields and click Apply. Current route changes to Manual with the saved Host and Port, and Apply becomes disabled again.

   ![Choose an upstream proxy · 5](../media/v0.1.1-alpha.1/settings-upstream-english/step-006.png)

6. <a id="walkthrough-settings-upstream-09-manual-request"></a><a id="walkthrough-settings-upstream-10-capture"></a>Request your endpoint through `http://127.0.0.1:8888`, then select its Capture row in box 1. The example origin uses `127.0.0.1:54668` and a path starting with `/manual-`. Check the actual client and destination results, not only the settings fields.

   ![Choose an upstream proxy · 6](../media/v0.1.1-alpha.1/settings-upstream-english/step-007.annotated.png)

7. <a id="walkthrough-settings-upstream-11-shortcut"></a>Click Upstream on the right of the Capture status bar to open the same configuration. The shortcut displays the active Manual route and saved fields.

   ![Choose an upstream proxy · 7](../media/v0.1.1-alpha.1/settings-upstream-english/step-008.png)

8. <a id="walkthrough-07-pac"></a><a id="walkthrough-settings-upstream-12-pac-draft"></a><a id="walkthrough-settings-upstream-13-pac-url"></a><a id="walkthrough-settings-upstream-14-cancel-draft"></a>Choose PAC URL and enter `http://127.0.0.1:54668/proxy.pac` in box 1. Use your own reachable HTTP/HTTPS address. To discard the draft, click Cancel or the close button in box 2.

   ![Choose an upstream proxy · 8](../media/v0.1.1-alpha.1/settings-upstream-english/step-009.annotated.png)

9. <a id="walkthrough-settings-upstream-15-reopen"></a>Reopen Upstream and verify the original Manual route remains; the cancelled PAC draft was not applied.

   ![Choose an upstream proxy · 9](../media/v0.1.1-alpha.1/settings-upstream-english/step-010.png)

10. <a id="walkthrough-settings-upstream-16-pac-again"></a><a id="walkthrough-settings-upstream-17-pac-url-again"></a><a id="walkthrough-settings-upstream-18-open-settings"></a>Choose PAC URL again, enter its address in box 1, then click Open in Settings in box 2 to continue the same draft on the Settings page.

    ![Choose an upstream proxy · 10](../media/v0.1.1-alpha.1/settings-upstream-english/step-011.annotated.png)

11. In Settings, box 1 retains the PAC URL you entered while Current route remains Manual. Apply in box 2 commits this draft.

    ![Choose an upstream proxy · 11](../media/v0.1.1-alpha.1/settings-upstream-english/step-012.annotated.png)

12. <a id="walkthrough-08-discard-pac"></a>Click Discard changes when you want to abandon the draft and verify the Manual route and its original Host and Port return. Opening Settings does not apply a draft.

    ![Choose an upstream proxy · 12](../media/v0.1.1-alpha.1/settings-upstream-english/step-013.png)

13. <a id="walkthrough-settings-upstream-19-apply-pac"></a>To use PAC, re-enter a valid URL and Apply. Current route shows PAC and Selected per request because the script chooses an outbound route for each request.

    ![Choose an upstream proxy · 13](../media/v0.1.1-alpha.1/settings-upstream-english/step-014.png)

14. <a id="walkthrough-settings-upstream-20-pac-proxy"></a>Send a request for which the script selects PROXY. The example uses the upstream for `127.0.0.1`; box 1 marks the request whose path starts with `/pac-`. Inspect the response and the actual upstream records.

    ![Choose an upstream proxy · 14](../media/v0.1.1-alpha.1/settings-upstream-english/step-015.annotated.png)

15. <a id="walkthrough-settings-upstream-21-pac-direct"></a>Send a request for which the script selects DIRECT. The example connects directly to `localhost`; box 1 marks the `/pac-direct-` request. Capture still records it; DIRECT only bypasses another upstream proxy.

    ![Choose an upstream proxy · 15](../media/v0.1.1-alpha.1/settings-upstream-english/step-016.annotated.png)

16. <a id="walkthrough-settings-upstream-22-direct"></a><a id="walkthrough-settings-upstream-23-apply-direct"></a><a id="walkthrough-settings-upstream-24-direct-request"></a>To stop using PAC, choose No upstream proxy (Direct) and click Apply in box 1. Wait for Current route to show Direct / Direct connection before sending new requests. Existing connections are not replayed.

    ![Choose an upstream proxy · 16](../media/v0.1.1-alpha.1/settings-upstream-english/step-017.annotated.png)

    ![Choose an upstream proxy · 16](../media/v0.1.1-alpha.1/settings-upstream-english/step-018.png)

17. After saving, use Close in box 1 to exit normally, reopen the App and inspect Current route. Direct remains saved here; closing the window does not delete the upstream preference.

    ![Choose an upstream proxy · 17](../media/v0.1.1-alpha.1/settings-upstream-english/step-019.annotated.png)

    ![Choose an upstream proxy · 17](../media/v0.1.1-alpha.1/settings-upstream-english/step-020.png)

18. <a id="walkthrough-settings-upstream-25-system"></a><a id="walkthrough-settings-upstream-26-apply-system"></a>To reuse the system route from before takeover, choose Use system settings (System), click Apply in box 1 and verify Current route shows System. This is separate from restoring the operating system proxy.

    ![Choose an upstream proxy · 18](../media/v0.1.1-alpha.1/settings-upstream-english/step-021.annotated.png)

    ![Choose an upstream proxy · 18](../media/v0.1.1-alpha.1/settings-upstream-english/step-022.png)

- Do not point Manual at Interceptor’s own `8888` or treat that listener as the original System upstream; it would create a loop.
- Successful Apply affects new requests. Read application errors when they occur; the previously applied route remains rather than silently switching to Direct.
- Direct neither stops Capture nor restores the operating system proxy.
- WPAD requires actual network support. Entering a PAC URL is not discovery. Contact the network administrator when discovery fails instead of changing office DHCP or DNS for practice.
- System snapshots, discovery and authorization differ between macOS and Windows.
- There is no separate upstream username/password form; do not insert credentials into fields that do not accept them.


<a id="https-decryption"></a>
## Prepare a CA and enable HTTPS decryption

Inspect only authorized HTTPS traffic. Ordinary HTTPS decryption needs an available CA, the relevant client trust and enabled MITM. A CONNECT record or TLS tunnel alone does not establish decrypted content.

1. <a id="walkthrough"></a><a id="walkthrough-01-open"></a><a id="walkthrough-02-certificates"></a>Open Settings → Certificates and inspect the public fingerprint, validity, Generated and Trusted states. This example reuses an available trusted CA rather than deleting it to recreate first launch.

   ![Prepare a CA and enable HTTPS decryption · 1](../media/v0.1.1-alpha.1/tls-pattern-english/step-001.png)

2. If the CA is not ready, use the App’s generation and trust actions and complete system authorization. Do not overwrite certificate material yourself or confuse a system permission prompt with GitHub sign-in.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/tls-pattern-english/step-001.png)

3. After confirming the required trust, enable Decrypt HTTPS (MITM) in box 1. The switch alone does not make every client accept the CA; certificate pinning and separate trust stores can still reject it.

   ![Prepare a CA and enable HTTPS decryption · 3](../media/v0.1.1-alpha.1/tls-pattern-english/step-002.annotated.png)

4. Only for a controlled local origin using a test certificate, enter `localhost` in box 1 and click Add host in box 2. This origin exception neither establishes client trust nor belongs on arbitrary public services.

   ![Prepare a CA and enable HTTPS decryption · 4](../media/v0.1.1-alpha.1/tls-pattern-english/step-011.annotated.png)

5. Have the client establish a new connection. This GET `/e2e/passthrough/http` displays the JSON `{"mode":"https-h1","secure":true}` in Response, box 1. It demonstrates decrypted HTTP/1.1 content, not resolution of every TLS failure.

   ![Prepare a CA and enable HTTPS decryption · 5](../media/v0.1.1-alpha.1/tls-pattern-english/step-012.annotated.png)

Existing connections do not change mode merely because a setting changes. Disabling decryption does not uninstall CA trust, and normal exit or removal of one App data environment does not remove the shared CA. Do not globally disable certificate validation just to inspect a body.


<a id="certificate-lifecycle"></a>
## View, untrust and delete a CA

1. Use View to inspect the public certificate and identity; Reveal locates its materials.

   ![Inspect the current Certificates panel](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

2. Use the product's system certificate-manager entry when needed, respecting platform permissions.

   ![Certificates and the system trust entry](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

3. Use Uninstall to remove trust.

   ![Inspect HTTPS decryption and trust in Certificates](../media/v0.1.1-alpha.1/tls-cleanup-english/step-039.png)

4. Use Delete only when the materials are no longer needed, following trust removal if required.

   ![Disable HTTPS decryption before removing certificate materials](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.png)

5. Before regenerating, inspect the current CA and clients relying on it, then follow the product prompt.

   ![Certificates after cleanup](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.png)

Uninstall retains CA material. A trusted CA cannot be overwritten by regeneration, and changing its identity invalidates existing client trust. Do not delete a daily-use CA or share its private key.

<a id="tls-passthrough"></a>
## Keep selected TLS hosts encrypted

Passthrough keeps selected hosts end-to-end encrypted. This example reconnects to the same `https://localhost:56104/e2e/passthrough/http` to compare decryption, passthrough and restoration after removal. Use your own service.

1. <a id="walkthrough-settings-tls-passthrough"></a><a id="walkthrough-settings-tls-passthrough-01-filter"></a><a id="walkthrough-settings-tls-passthrough-02-record"></a><a id="walkthrough-settings-tls-passthrough-03-opaque-request"></a><a id="walkthrough-settings-tls-passthrough-04-tunnel-select"></a><a id="walkthrough-settings-tls-passthrough-05-tunnel"></a><a id="walkthrough-settings-tls-passthrough-06-https-setup"></a><a id="walkthrough-settings-tls-passthrough-07-cancel-setup"></a><a id="walkthrough-settings-tls-passthrough-08-settings"></a><a id="walkthrough-settings-tls-passthrough-09-certificates"></a><a id="walkthrough-settings-tls-passthrough-10-origin-host"></a><a id="walkthrough-settings-tls-passthrough-11-origin-add"></a><a id="walkthrough-settings-tls-passthrough-12-mitm-on"></a><a id="walkthrough-settings-tls-passthrough-13-capture-decrypted"></a><a id="walkthrough-settings-tls-passthrough-14-decrypted-request"></a><a id="walkthrough-settings-tls-passthrough-15-decrypted-select"></a><a id="walkthrough-settings-tls-passthrough-16-decrypted-body"></a>Complete the CA, controlled-origin exception and MITM setup above. Send a new request and confirm Response in box 1 shows the `https-h1` and `secure: true` body.

   ![Keep selected TLS hosts encrypted · 1](../media/v0.1.1-alpha.1/tls-pattern-english/step-012.annotated.png)

2. <a id="walkthrough-settings-tls-passthrough-17-settings-passthrough"></a><a id="walkthrough-settings-tls-passthrough-18-passthrough"></a>Open Settings → TLS passthrough and review the list. Exact hosts and wildcard domains have different scope; prefer the smallest appropriate scope.

   ![Keep selected TLS hosts encrypted · 2](../media/v0.1.1-alpha.1/tls-pattern-english/step-003.png)

3. <a id="walkthrough-settings-tls-passthrough-19-host"></a><a id="walkthrough-settings-tls-passthrough-20-add"></a>Enter the exact host `localhost` in box 1, without a scheme, port or path, then click Add in box 2. It saves immediately without Rules Save.

   ![Keep selected TLS hosts encrypted · 3](../media/v0.1.1-alpha.1/tls-pattern-english/step-013.annotated.png)

4. <a id="walkthrough-settings-tls-passthrough-21-capture-passthrough"></a><a id="walkthrough-settings-tls-passthrough-22-passthrough-request"></a><a id="walkthrough-settings-tls-passthrough-23-passthrough-select"></a><a id="walkthrough-settings-tls-passthrough-24-passthrough-tunnel"></a>Return to Capture, search for `localhost` and reconnect to the same address. Box 1 is the new CONNECT; its Inspector shows TLS passthrough without an HTTP body, although the client can receive its complete response. Box 2 is View passthrough pattern.

   ![Keep selected TLS hosts encrypted · 4](../media/v0.1.1-alpha.1/tls-pattern-english/step-014.annotated.png)

5. <a id="walkthrough-settings-tls-passthrough-25-locate"></a><a id="walkthrough-settings-tls-passthrough-26-remove"></a>Use the preceding image’s settings link to locate and briefly highlight the matching `localhost` entry. To resume decryption, click its removal control in box 1. Removal saves immediately.

   ![Keep selected TLS hosts encrypted · 5](../media/v0.1.1-alpha.1/tls-pattern-english/step-015.annotated.png)

6. <a id="walkthrough-settings-tls-passthrough-27-capture-restored"></a><a id="walkthrough-settings-tls-passthrough-28-reconnect"></a><a id="walkthrough-settings-tls-passthrough-29-restored-select"></a><a id="walkthrough-settings-tls-passthrough-30-restored-body"></a>Reconnect and request the same address, select the new GET and confirm its JSON is readable in Response, box 1. The old Tunnel remains historical tunnel data rather than turning into an HTTP record.

   ![Keep selected TLS hosts encrypted · 6](../media/v0.1.1-alpha.1/tls-pattern-english/step-016.annotated.png)

7. <a id="walkthrough-settings-tls-passthrough-31-cleanup-settings"></a><a id="walkthrough-settings-tls-passthrough-32-cleanup-certificates"></a><a id="walkthrough-settings-tls-passthrough-33-mitm-off"></a>If MITM was enabled only for this session, return to Certificates and disable its switch in box 1 while retaining the existing CA and trust.

   ![Keep selected TLS hosts encrypted · 7](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

8. <a id="walkthrough-settings-tls-passthrough-34-origin-remove"></a>Remove only the origin exception added for this session. Box 1 in the first image is the `localhost` tag and its removal control. In the second, box 1 is the empty Host input after removal, not CA Remove.

   ![Keep selected TLS hosts encrypted · 8](../media/v0.1.1-alpha.1/tls-cleanup-english/step-041.annotated.png)

   ![Keep selected TLS hosts encrypted · 8](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.annotated.png)

9. When TLS interception may be incompatible appears, inspect each failed host. Box 1 demonstrates an exact-host selection and box 2 a parent-domain wildcard. Review the scope before clicking Add 2 patterns in box 3 rather than broadly selecting everything.

   ![Keep selected TLS hosts encrypted · 9](../media/v0.1.1-alpha.1/tls-compatibility-english/step-003.annotated.png)

10. With no scope selected, the save action in box 1 of the first image is disabled. To leave settings unchanged for now, use Not now in box 1 of the second image. Dismissing the prompt does not add a pattern.

    ![Keep selected TLS hosts encrypted · 10](../media/v0.1.1-alpha.1/tls-compatibility-english/step-002.annotated.png)

    ![Keep selected TLS hosts encrypted · 10](../media/v0.1.1-alpha.1/tls-compatibility-english/step-005.annotated.png)

Passthrough still crosses Interceptor and the configured upstream but does not decrypt application content. Client pinning, origin-certificate exceptions and access to the local proxy are different problems. Do not treat passthrough as a universal connection fix.


<a id="insecure-hosts"></a>
## Distinguish origin-certificate exceptions

An origin exception affects validation of the target service’s certificate, not whether a client trusts Interceptor’s CA. Prefer fixing the origin certificate and limit exceptions to exact authorized test hosts.

1. Check the service hostname, validity and managed trust chain to confirm the problem is its origin certificate.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/tls-pattern-english/step-011.png)

2. Enter `localhost` in Per-host overrides, box 1, and click Add host in box 2. This is an owned local origin, not a reason to add exceptions for arbitrary public addresses.

   ![Distinguish origin-certificate exceptions · 2](../media/v0.1.1-alpha.1/tls-pattern-english/step-011.annotated.png)

3. Reconnect to `/e2e/passthrough/http` and inspect Response in box 1. The exception did not disable MITM: decrypted HTTP content remains visible in this example.

   ![Distinguish origin-certificate exceptions · 3](../media/v0.1.1-alpha.1/tls-pattern-english/step-012.annotated.png)

4. Afterward, find the `localhost` tag in box 1 and use its removal button, deleting only the entry added for this operation.

   ![Distinguish origin-certificate exceptions · 4](../media/v0.1.1-alpha.1/tls-cleanup-english/step-041.annotated.png)

5. Confirm the tag is gone; box 1 is now the Host input. Manage origin exceptions, passthrough patterns and CA trust separately.

   ![Distinguish origin-certificate exceptions · 5](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.annotated.png)


<a id="app-containers"></a>
## Windows AppContainer loopback access

Windows, an application actually affected by AppContainer isolation, and permission to change system settings.

1. Open App containers and search for the target.

   ![Windows AppContainer page controls](../media/windows-local-20261023/app-containers/overview-controls.png)

   The image retains navigation, the risk notice, search and batch controls; application identities and SIDs are omitted for privacy.

2. Inspect loopback access, adjust its individual switch and complete UAC as needed.

   ![Related view from the same workflow](../media/windows-local-20261023/app-containers/overview-controls.png)

3. Send a new request from that application and inspect Capture.

   ![Related view from the same workflow](../media/windows-local-20261023/app-containers/overview-controls.png)

4. If batch changes are justified, choose Enable all or Disable all, review count/scope/effects and confirm.

   ![Related view from the same workflow](../media/windows-local-20261023/app-containers/overview-controls.png)

5. Remove unnecessary exemptions after the exercise and verify actual system state.

   ![Related view from the same workflow](../media/windows-local-20261023/app-containers/overview-controls.png)
loopback access does not fix certificate pinning; passthrough does not let an isolated application reach the proxy. Batch scope is the current enumerated set, not arbitrary system isolation. This Windows capability is not available on macOS.

<a id="appearance"></a>

## Language and theme

Use Appearance or the sidebar controls to choose existing language/theme values and confirm persistence. App themes are `warm`, `light`, `ember`, `dark`; do not assume a System option.

Preferences do not translate captured URLs, data or protocol values. See [Workspace](workspace.md#appearance).

<a id="storage"></a>
## Inspect usage and clear Capture

Export any data you need and confirm the backup was saved; cancelling an export does not create one. Clear capture in Settings and Clear in Capture remove the same temporary records and bodies, not previously exported files. Only clear traffic you are allowed to delete.

1. <a id="walkthrough-settings-storage-privacy"></a><a id="walkthrough-settings-storage-privacy-01-record"></a>Select the Capture record in box 1 and inspect its body. This example is POST `/e2e/storage/first` with request body `storage-original-body`. Confirm this is the data to clear, then click Recording in box 2 to pause new recording.

   ![Inspect usage and clear Capture · 1](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-001.annotated.png)

2. <a id="walkthrough-settings-storage-privacy-11-storage"></a>Open Settings → Storage. Box 1 identifies Refresh at the top right; box 2 identifies Captured body data usage. Sessions, Exchanges and Stored bodies are listed separately below.

   ![Inspect usage and clear Capture · 2](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-002.annotated.png)

3. <a id="walkthrough-settings-storage-privacy-12-refresh"></a>Click Refresh and wait for updated statistics. With recording paused, the same records should retain their usage. Refresh does not delete data and is not an automatic-cleanup or quota control.

   ![Inspect usage and clear Capture · 3](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-003.png)

4. <a id="walkthrough-settings-storage-privacy-13-clear-dialog"></a>Click Clear capture and read the explanation. Box 1 is Cancel and box 2 is Confirm clear. Click Cancel in box 1 first.

   ![Inspect usage and clear Capture · 4](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-004.annotated.png)

5. <a id="walkthrough-settings-storage-privacy-14-cancel-clear"></a>Return to Capture and confirm the original record in box 1 and its body remain while recording stays Paused. Cancel does not clear the data.

   ![Inspect usage and clear Capture · 5](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-005.annotated.png)

6. <a id="walkthrough-settings-storage-privacy-15-confirm-clear"></a>Reopen Storage and click Clear capture again. After confirming deletion is intended, click Confirm clear in box 1.

   ![Inspect usage and clear Capture · 6](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-006.annotated.png)

7. Wait for completion and check body usage in box 1 is `0 B`, Exchanges in box 2 is `0`, and Stored bodies in box 3 is `0`. Sessions can remain `1`; clearing does not require removing the current session.

   ![Inspect usage and clear Capture · 7](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-007.annotated.png)

8. <a id="walkthrough-settings-storage-privacy-16-empty-capture"></a>Return to Capture and check the list and Inspector are empty while Recording remains Paused. Clear preserves the prior recording state rather than starting it automatically.

   ![Inspect usage and clear Capture · 8](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-008.png)

9. <a id="walkthrough-settings-storage-privacy-17-resume-after-clear"></a>To capture more traffic, explicitly use the recording control and check box 1 changes to Recording.

   ![Inspect usage and clear Capture · 9](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-009.annotated.png)

10. <a id="walkthrough-settings-storage-privacy-18-new-record"></a>Send a new POST `/e2e/storage/after-clear` through the proxy with body `storage-new-body`. Box 1 is the newly captured request, not a restored old record.

    ![Inspect usage and clear Capture · 10](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-010.annotated.png)

11. If the new record is also disposable, pause recording and click Capture Clear in box 1. Refresh Storage afterward and check the same usage and record counts return to zero. Both entry points clear the same data.

    ![Inspect usage and clear Capture · 11](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-011.annotated.png)

    ![Inspect usage and clear Capture · 11](../media/v0.1.1-alpha.1/settings-storage-usage-english/step-012.png)

Body usage is neither process RSS nor total disk usage. This page has no retention-days or quota setting, and Refresh is not continuous polling. Do not force Clear while a file task is active. Cancel that task first if needed, then wait for its terminal state and temporary-file cleanup.


<a id="privacy"></a>
## Set privacy defaults for future exports

Privacy supplies the initial options for a newly opened HAR export. It does not rewrite files already exported. Use credential-free test records for these examples; disabling masking is not the recommended way to share traffic.

1. <a id="walkthrough-settings-storage-privacy-02-privacy"></a><a id="walkthrough-settings-privacy-export"></a><a id="walkthrough-settings-privacy-export-01-privacy"></a><a id="walkthrough-settings-privacy-export-02-auth-default"></a><a id="walkthrough-settings-privacy-export-09-warning-default"></a>Open Settings → Privacy. Box 1 controls masking of Authorization and URL tokens, box 2 masks Cookie/Set-Cookie, and box 3 controls the warning before an unmasked export. These settings are independent.

   ![Set privacy defaults for future exports · 1](../media/v0.1.1-alpha.1/privacy-workspace-english/step-002.annotated.png)

2. <a id="walkthrough-settings-storage-privacy-03-cookie-default"></a><a id="walkthrough-settings-privacy-export-03-cookie-default"></a>Adjust the switches separately. This example disables authorization masking in box 1, enables cookie masking in box 2 and retains the warning. Each setting saves through its own control; no Rules Save is involved.

   ![Set privacy defaults for future exports · 2](../media/v0.1.1-alpha.1/privacy-workspace-english/step-003.annotated.png)

3. <a id="walkthrough-settings-storage-privacy-04-new-export"></a><a id="walkthrough-settings-storage-privacy-05-filter-scope"></a><a id="walkthrough-settings-privacy-export-04-inherited-export"></a>With records in Capture, open HAR from Export and inspect the scope. This second example has authorization masking enabled in box 1 and cookie masking disabled in box 2; Current filter selects `/e2e/preferences/` records. Read the options actually shown in the current dialog.

   ![Set privacy defaults for future exports · 3](../media/v0.1.1-alpha.1/privacy-workspace-english/step-006.annotated.png)

4. If an authorized MCP client changes defaults to `maskAuthorization=false`, `maskCookies=true` and `warnBeforeUnmasked=false` while this dialog is open, its existing choices remain: box 1 on and box 2 off. An external defaults change does not overwrite the open draft.

   ![Set privacy defaults for future exports · 4](../media/v0.1.1-alpha.1/privacy-workspace-english/step-007.annotated.png)

5. <a id="walkthrough-settings-storage-privacy-08-cancel-export"></a>Close this export dialog and open HAR again from Export. The new dialog reads the updated defaults, with box 1 off and box 2 on. Closing the draft did not save a file.

   ![Set privacy defaults for future exports · 5](../media/v0.1.1-alpha.1/privacy-workspace-english/step-008.annotated.png)

6. <a id="walkthrough-settings-storage-privacy-06-all-scope"></a>Choose scope separately from privacy. In the first image, box 1 is the two-record Current filter and box 2 is Export 2 requests. In the second, All traffic in box 1 contains four records and box 2 is Export 4 requests. All records are not automatically safe to share.

   ![Set privacy defaults for future exports · 6](../media/v0.1.1-alpha.1/capture-har-scopes-english/step-017.annotated.png)

   ![Set privacy defaults for future exports · 6](../media/v0.1.1-alpha.1/capture-har-gui-roundtrip-english/step-013.annotated.png)

7. <a id="walkthrough-settings-storage-privacy-07-one-export-override"></a><a id="walkthrough-settings-privacy-export-05-one-time-override"></a><a id="walkthrough-settings-privacy-export-06-save-override"></a><a id="walkthrough-settings-privacy-export-07-check-override"></a>For a one-time change, override masking in the current HAR dialog, click Export in box 1 and choose a destination. This example saves `ui-override.har`; the override does not write back to Privacy defaults.

   ![Set privacy defaults for future exports · 7](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-023.annotated.png)

   ![Set privacy defaults for future exports · 7](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-024.png)

8. <a id="walkthrough-settings-storage-privacy-09-default-unchanged"></a><a id="walkthrough-settings-privacy-export-08-defaults-unchanged"></a>Return to Privacy and inspect the saved defaults. In this image, authorization masking in box 1 is off, cookie masking in box 2 is on and the warning in box 3 is off. A one-time output file and these defaults are separate objects.

   ![Set privacy defaults for future exports · 8](../media/v0.1.1-alpha.1/privacy-workspace-english/step-009.annotated.png)

9. After closing and reopening the App normally, inspect authorization masking in box 1, cookie masking in box 2 and the warning in box 3. They retain the saved defaults; this is a check after restart, not merely an old window remaining open.

   ![Set privacy defaults for future exports · 9](../media/v0.1.1-alpha.1/privacy-workspace-english/step-016.annotated.png)

10. <a id="walkthrough-settings-storage-privacy-10-restore-privacy"></a><a id="walkthrough-settings-privacy-export-13-restore-privacy"></a><a id="walkthrough-settings-privacy-export-14-restore-auth"></a><a id="walkthrough-settings-privacy-export-15-restore-cookies"></a><a id="walkthrough-settings-privacy-export-16-restore-warning"></a>If protection was disabled only for testing, finish by enabling authorization masking in box 1, cookie masking in box 2 and the unmasked-export warning in box 3.

    ![Set privacy defaults for future exports · 10](../media/v0.1.1-alpha.1/privacy-workspace-english/step-019.annotated.png)

11. <a id="walkthrough-settings-privacy-export-10-unmasked-draft"></a><a id="walkthrough-settings-privacy-export-11-save-public"></a><a id="walkthrough-settings-privacy-export-12-check-public"></a>If unmasked data is genuinely needed, confirm the scope and recipient first. Both authorization and cookie masking are unchecked here, so Export in box 1 retains those original fields. The example file is `ui-plain.har`; it is not anonymized.

    ![Set privacy defaults for future exports · 11](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-026.annotated.png)

    ![Set privacy defaults for future exports · 11](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-027.png)

12. <a id="walkthrough-settings-privacy-export-17-redacted-draft"></a><a id="walkthrough-settings-privacy-export-18-strip-bodies"></a><a id="walkthrough-settings-privacy-export-19-save-redacted"></a><a id="walkthrough-settings-privacy-export-20-check-redacted"></a><a id="walkthrough-settings-privacy-export-21-clear"></a><a id="walkthrough-settings-privacy-export-22-import"></a><a id="walkthrough-settings-privacy-export-23-open-redacted"></a><a id="walkthrough-settings-privacy-export-24-imported"></a>Select Strip request/response bodies when bodies are unnecessary, click Export in box 1 and save `ui-stripped.har`. Inspect the final file to confirm body contents are absent. Importing that file later cannot restore removed bytes.

    ![Set privacy defaults for future exports · 12](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-029.annotated.png)

    ![Set privacy defaults for future exports · 12](../media/v0.1.1-alpha.1/capture-har-privacy-english/step-030.png)

Review URL queries, custom headers, business identifiers, local paths and file bodies before sharing. Masking is not complete anonymization of arbitrary business data. Native archives retain full data rather than automatically applying these HAR options. Cancelling a draft, cancelling a running task and deleting a saved file are different operations; see [export privacy](transfer.md#privacy).


<a id="agent-mcp"></a>
## Models, Tools and MCP

- Add/test models in Settings > Agent: [Agent](agent.md#models).
- Configure separate Agent/MCP columns: [Tool permissions](tool-permissions.md).
- Manage Server, Clients and endpoints: [MCP](mcp.md).

A model does not enable MCP automatically. MCP does not require an internal Agent model; the external host has its own model configuration.

<a id="updates"></a>
## Check, download and open updates

Use an installed Windows or macOS App; source-development runs may not support updates. Checking, downloading and opening the installer are separate actions, and discovering a release does not download it automatically. Start with checking and retrying an unavailable release source.

1. <a id="walkthrough-09-passthrough"></a><a id="walkthrough-10-privacy"></a><a id="walkthrough-11-storage"></a><a id="walkthrough-12-refresh"></a><a id="walkthrough-13-clear-confirm"></a><a id="walkthrough-14-cancel"></a><a id="walkthrough-15-updates"></a><a id="walkthrough-settings-update-check"></a><a id="walkthrough-settings-update-check-01-settings"></a><a id="walkthrough-settings-update-check-02-updates"></a>Open Settings → Updates and inspect Current application, Latest GitHub release and Last update action. Your installed version is different information from a downloadable new release.

   ![Check, download and open updates · 1](../media/v0.1.1-alpha.1/settings-update-check-english/step-001.png)

2. <a id="walkthrough-settings-update-check-03-check"></a>Click Check now in box 1 and wait for it to finish. You do not need to sign in to VS Code or put a GitHub PAT into model configuration.

   ![Check, download and open updates · 2](../media/v0.1.1-alpha.1/settings-update-check-english/step-002.annotated.png)

3. <a id="walkthrough-settings-update-check-04-result"></a>Read the actual result and versions. Up to date means the highest published version is equal to or older than the installed version; an identical alpha version does not require an update. Available means a higher version has a supported installer. Failed means checking did not succeed; it does not mean the App is up to date. Checking alone does not download or install anything.

   ![Check, download and open updates · 3](../media/v0.1.1-alpha.1/settings-update-check-english/step-003.png)

4. When the result is Up to date or Failed, Check now in box 1 remains available. For a failure, check the network and release-source access before retrying. Follow the new result; a retry alone does not prove success. When a newer version is Available, the action becomes Download update.

   ![Check, download and open updates · 4](../media/v0.1.1-alpha.1/settings-update-check-english/step-004.annotated.png)

   ![Check, download and open updates · 4](../media/v0.1.1-alpha.1/settings-update-check-english/step-005.png)

5. Close and reopen the App normally, then open Updates again. The App checks anonymously on launch and shows the action for the actual result: Check now, Download update or Open installer. Box 1 in the first image marks Check now.

   ![Check, download and open updates · 5](../media/v0.1.1-alpha.1/settings-update-check-english/step-007.annotated.png)

   ![Check, download and open updates · 5](../media/v0.1.1-alpha.1/settings-update-check-english/step-008.png)

6. Only when an available release is shown should you read its notes and explicitly click Download. Wait for the download and integrity checks before choosing Open installer, then complete the system installation. Do not run unfinished temporary files.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/settings-update-check-english/step-008.png)
- Updates use anonymous GitHub requests and select the highest published SemVer across all release pages, including alpha. Drafts and invalid version tags do not participate; release dates and list order do not determine the result.
- For example, `0.1.1-alpha.10` is newer than `0.1.1-alpha.2`; `0.1.1` is newer than `0.1.1-alpha.10`. An equal or older version does not trigger an update.
- The highest version must contain a valid installer for the current platform and architecture: Windows MSI or macOS DMG. A ZIP alone is insufficient. An inaccessible source or an invalid installer causes Failed; the App does not silently fall back to an older release.
- Platform, architecture and installer format must match. Notification actions share the Settings state; Dismiss only hides the notice.
- Normal exit cleans up active checks or downloads. Do not bypass validation with an old temporary file.
