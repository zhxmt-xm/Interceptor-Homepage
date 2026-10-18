# Settings: proxies, certificates, storage and updates

> Draft for `v0.1.1-alpha.1`; read-only checks, safe drafts and recorded operations are illustrated, with authorization/platform gaps marked individually. Neither this chapter nor item9 is complete. Use actual OS authorization; macOS or CI does not certify Windows.

[Guide directory](../README.en.md) · [Getting started](getting-started.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.

> This recording shows the existing CA, settings and discardable drafts. Manual/PAC examples are not applied or claimed reachable. The daily-use CA is not regenerated or uninstalled.

| Example field | Actual recorded value |
| --- | --- |
| <code>manualHost</code> | <code>127.0.0.1</code> |
| <code>manualPort</code> | <code>7890</code> |
| <code>pacUrl</code> | <code>https://proxy.example.test/proxy.pac</code> |
| <code>exampleApplied</code> | <code>false</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/settings/settings.mp4" poster="../media/v0.1.1-alpha.1/settings/settings-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/settings/settings.vtt" default>
</video>

<a id="walkthrough-01-open"></a>
### 01 · Open Settings

[Video 00:00](../media/v0.1.1-alpha.1/settings/settings.mp4#t=0.388) · [Back to the video](#walkthrough-video)

![01 · Open Settings](../media/v0.1.1-alpha.1/settings/settings-01-open.png)

<a id="walkthrough-02-certificates"></a>
### 02 · Inspect the existing CA and trust

[Video 00:03](../media/v0.1.1-alpha.1/settings/settings.mp4#t=3.255) · [Back to the video](#walkthrough-video)

![02 · Inspect the existing CA and trust](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

<a id="walkthrough-03-proxy"></a>
### 03 · Inspect System proxy

[Video 00:06](../media/v0.1.1-alpha.1/settings/settings.mp4#t=6.104) · [Back to the video](#walkthrough-video)

![03 · Inspect System proxy](../media/v0.1.1-alpha.1/settings/settings-03-proxy.png)

<a id="walkthrough-04-upstream"></a>
### 04 · Inspect the current upstream route

[Video 00:08](../media/v0.1.1-alpha.1/settings/settings.mp4#t=8.958) · [Back to the video](#walkthrough-video)

![04 · Inspect the current upstream route](../media/v0.1.1-alpha.1/settings/settings-04-upstream.png)

<a id="walkthrough-05-manual-draft"></a>
### 05 · Choose a Manual draft

[Video 00:11](../media/v0.1.1-alpha.1/settings/settings.mp4#t=11.854) · [Back to the video](#walkthrough-video)

![05 · Choose a Manual draft](../media/v0.1.1-alpha.1/settings/settings-05-manual-draft.png)

<a id="walkthrough-06-discard"></a>
### 06 · Discard without applying the example

[Video 00:14](../media/v0.1.1-alpha.1/settings/settings.mp4#t=14.855) · [Back to the video](#walkthrough-video)

![06 · Discard without applying the example](../media/v0.1.1-alpha.1/settings/settings-06-discard.png)

<a id="walkthrough-07-pac"></a>
### 07 · Inspect PAC input

[Video 00:17](../media/v0.1.1-alpha.1/settings/settings.mp4#t=17.703) · [Back to the video](#walkthrough-video)

![07 · Inspect PAC input](../media/v0.1.1-alpha.1/settings/settings-07-pac.png)

<a id="walkthrough-08-discard-pac"></a>
### 08 · Discard the non-running PAC example

[Video 00:20](../media/v0.1.1-alpha.1/settings/settings.mp4#t=20.608) · [Back to the video](#walkthrough-video)

![08 · Discard the non-running PAC example](../media/v0.1.1-alpha.1/settings/settings-08-discard-pac.png)

<a id="walkthrough-09-passthrough"></a>
### 09 · Open TLS passthrough

[Video 00:23](../media/v0.1.1-alpha.1/settings/settings.mp4#t=23.457) · [Back to the video](#walkthrough-video)

![09 · Open TLS passthrough](../media/v0.1.1-alpha.1/settings/settings-09-passthrough.png)

<a id="walkthrough-10-privacy"></a>
### 10 · Inspect export privacy defaults

[Video 00:26](../media/v0.1.1-alpha.1/settings/settings.mp4#t=26.313) · [Back to the video](#walkthrough-video)

![10 · Inspect export privacy defaults](../media/v0.1.1-alpha.1/settings/settings-10-privacy.png)

<a id="walkthrough-11-storage"></a>
### 11 · Inspect temporary storage

[Video 00:29](../media/v0.1.1-alpha.1/settings/settings.mp4#t=29.204) · [Back to the video](#walkthrough-video)

![11 · Inspect temporary storage](../media/v0.1.1-alpha.1/settings/settings-11-storage.png)

<a id="walkthrough-12-refresh"></a>
### 12 · Refresh usage

[Video 00:32](../media/v0.1.1-alpha.1/settings/settings.mp4#t=32.058) · [Back to the video](#walkthrough-video)

![12 · Refresh usage](../media/v0.1.1-alpha.1/settings/settings-12-refresh.png)

<a id="walkthrough-13-clear-confirm"></a>
### 13 · Review Clear confirmation

[Video 00:34](../media/v0.1.1-alpha.1/settings/settings.mp4#t=34.904) · [Back to the video](#walkthrough-video)

![13 · Review Clear confirmation](../media/v0.1.1-alpha.1/settings/settings-13-clear-confirm.png)

<a id="walkthrough-14-cancel"></a>
### 14 · Cancel clearing

[Video 00:37](../media/v0.1.1-alpha.1/settings/settings.mp4#t=37.753) · [Back to the video](#walkthrough-video)

![14 · Cancel clearing](../media/v0.1.1-alpha.1/settings/settings-14-cancel.png)

<a id="walkthrough-15-updates"></a>
### 15 · Inspect version and update state

[Video 00:40](../media/v0.1.1-alpha.1/settings/settings.mp4#t=40.604) · [Back to the video](#walkthrough-video)

![15 · Inspect version and update state](../media/v0.1.1-alpha.1/settings/settings-15-updates.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="先找到对应设置"></a>
## Find the relevant section

Open Settings from the sidebar. System proxy, Upstream proxy, App containers, TLS passthrough, Certificates, Appearance, Storage, Privacy, Agent and Updates solve different problems.

Returning preserves the last visited section. Readiness, TLS or Agent links can deliberately select the relevant section.

<a id="system-proxy"></a>
## Take ownership and restore the system proxy

**Purpose:** route clients that follow system proxy settings through Interceptor.

This uses `settings-proxy-routing` on a machine with an already-authorized helper. It shows actual Restore/Enable, not first helper installation or OS authorization. The caller is a local demonstration client with explicit proxy configuration.

1. Check current Interceptor system-proxy ownership and listener `127.0.0.1:8888`.

   ![Actual system-proxy ownership state](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-01-owned.png)

2. Restore the system route from before this takeover.

   ![Actually restoring the system proxy](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-02-restore.png)

3. Verify the listener remains running. The demo client explicitly uses `http://127.0.0.1:8888` to reach `http://127.0.0.1:59429/guide/system-proxy/explicit-client`; `59429` is the dynamic origin port, not the proxy port. Restore does not stop the listener, and this request does not prove an application follows system settings automatically.

   ![Actual running-listener checkpoint after Restore](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-03-listener.png)

4. Enable again through Settings and wait for confirmed ownership. This reuses the authorized helper without first-time authorization prompts.

   ![Actual Enable using the already-authorized helper](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-04-enable.png)

5. Return to Capture and confirm Recording is currently enabled. Inspect ownership and recording separately.

   ![Actually returning to Capture to inspect Recording](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-05-recording.png)

6. Pause Recording.

   ![Actually pausing new recording](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-06-pause.png)

7. Return to System proxy and confirm Interceptor still owns it: Pause did not Restore.

   ![Actual proxy ownership retained after pausing Recording](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-07-still-owned.png)

8. Restore the original system route before ending this exercise; stopping recording is not proxy restoration.

   ![Actual final Restore in this exercise](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-08-final-restore.png)

9. On first use or without an authorized helper, read and complete the real OS authorization before declaring Enable successful.

   **Image pending / blocked:** first helper setup, macOS authorization and Windows UAC are absent. Success with an existing authorization does not substitute.

10. To verify a target application automatically follows system proxy settings, send through that application itself and inspect Capture.

    **Image pending:** this explicit-proxy client does not verify automatic routing by an external application.

**Expected result:** ownership and restoration are explicit, not inferred from Recording.

**Notes**

- Windows primarily controls WinINet. WinHTTP, custom stacks, Java, curl, containers and WSL may need separate configuration.
- A client explicitly using `127.0.0.1:8888` may still pass through the listener after system Restore.
- Do not repeatedly click or force-quit during native operations.
- Another application's later proxy settings must not be overwritten blindly.
- Normal App Close also performs exit recovery, but this clip ends with Restore, not Close. See [Workspace](workspace.md#close) for the exit evidence boundary.

<a id="upstream"></a>
## Choose an upstream proxy

**Purpose:** select the route Interceptor uses after receiving a request. This differs from routing clients into Interceptor.

| Mode | Meaning | Prerequisite |
| --- | --- | --- |
| System | Reuse effective system settings from before takeover | Correct existing proxy/automatic configuration |
| Direct | Connect from Interceptor directly to the destination | Direct reachability |
| Manual | Use an explicit upstream proxy | Protocol, Host and port |
| PAC | Select routes using a PAC script | Reachable HTTP/HTTPS PAC URL |
| WPAD | Discover a PAC in the current network | Actual network discovery configuration |

The first five steps below belong to the earlier safe-draft clip: `exampleApplied=false`. `127.0.0.1:7890` was not verified as a running upstream and `https://proxy.example.test/proxy.pac` is not a public PAC. Do not Apply merely to match a screenshot. The [complete upstream recording](#walkthrough-settings-upstream) uses separately running owned services to verify Manual, PAC, Direct and System.

1. Open Upstream proxy in Settings and inspect the current route. The [Capture shortcut](#walkthrough-settings-upstream-11-shortcut) opens the same configuration.

   ![Current Upstream proxy route](../media/v0.1.1-alpha.1/settings/settings-04-upstream.png)

2. Select a Manual draft, enter Host `127.0.0.1` and port `7890`. Host excludes scheme, path and credentials; this port is demonstration input, not an automatically assigned listener.

   ![Unapplied Manual demonstration draft](../media/v0.1.1-alpha.1/settings/settings-05-manual-draft.png)

3. Discard the example, which has no actual upstream service.

   ![Discarding the Manual draft](../media/v0.1.1-alpha.1/settings/settings-06-discard.png)

4. Select PAC and inspect `https://proxy.example.test/proxy.pac`. Real use requires your own reachable HTTP/HTTPS PAC, not a local path or credential-bearing URL.

   ![Unexecuted PAC example input](../media/v0.1.1-alpha.1/settings/settings-07-pac.png)

5. Discard that PAC draft, preserving the previous configuration.

   ![Actually discarding the PAC draft](../media/v0.1.1-alpha.1/settings/settings-08-discard-pac.png)

6. Only after preparing a real route should you fill its fields, Apply and inspect Current route.

   ![Actually applying the owned Manual upstream](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-08-apply-manual.png)

   ![Actually applying the owned PAC](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-19-apply-pac.png)

   WPAD still needs a real discovery environment; a local PAC clip does not substitute.

7. Send a new request and inspect client/destination results; reconnect long-lived connections as needed.

   ![Verifying a request actually sent through the Manual upstream](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-09-manual-request.png)

   PAC separately verifies a [proxied request](#walkthrough-settings-upstream-20-pac-proxy) and a [DIRECT request](#walkthrough-settings-upstream-21-pac-direct). Finish by explicitly switching to Direct and System; not every PAC request uses one fixed route.

8. Cancel/Discard unwanted drafts; the shortcut's Open in Settings continues the same draft there.

   ![Actually cancelling the shortcut's PAC draft](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-14-cancel-draft.png)

   ![Continuing the same draft through Open in Settings](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-18-open-settings.png)

**Expected result:** successful Apply changes subsequent requests. Failure explicitly retains the previously applied route instead of silently choosing Direct.

**Notes**

- Direct does not stop Capture or restore OS settings.
- System must not treat Interceptor's own `8888` as the original upstream.
- Do not point Manual at the current listener. Another valid local proxy can use its own port.
- PAC/WPAD can choose differently per request; one address cannot summarize every route.
- WPAD needs actual network support. Do not modify office DHCP/DNS for a tutorial.
- Discovery and authorization differ on macOS and Windows.
- There is no separate upstream username/password form; do not insert credentials into fields that reject them.

<a id="https-decryption"></a>
## Prepare a CA and enable HTTPS decryption

**Purpose:** inspect authorized HTTPS headers/bodies rather than only tunnel metadata.

1. Open Certificates and inspect CA presence, identity and trust.

   ![Existing CA and trust in Certificates](../media/v0.1.1-alpha.1/settings/settings-02-certificates.png)

2. First-launch preparation normally handles a missing shared CA. If manual generation is needed, use the product action rather than overwriting files.

   **Image pending / blocked:** the recording machine already has a daily-use CA; there is no empty shared-CA environment. Do not delete it for screenshots.

3. If untrusted, use Install/trust and complete the real system prompt.

   **Image pending / blocked:** first helper, Keychain trust and Windows UAC were not recorded. Already-trusted status does not demonstrate authorization.

4. Confirm trust, then enable HTTPS decryption.

   This reuses Capture's controlled protocol exercise with an already-trusted CA:

   ![Enabling HTTPS decryption in the Capture exercise](../media/v0.1.1-alpha.1/capture/capture-20-decryption.png)

5. Establish a new client HTTPS connection and inspect Capture.

   This is the same exercise's new `/playground/h2-json` connection. Its controlled `localhost` origin exception is explained [below](#insecure-hosts), not a general Internet recommendation.

   ![Actual HTTP/2 details after enabling decryption](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

**Expected result:** suitable HTTPS connections can be decrypted only when the CA is usable, trusted and decryption enabled.

**Notes**

- macOS helper/Keychain/trust prompts and Windows administrator prompts are OS authorization, not GitHub login.
- CA trust affects the system, not just the App. Confirm provenance and purpose.
- Separate App data environments for the same OS user share the CA. Quitting/deleting a profile does not remove it.
- Pinning, separate trust stores and passthrough may prevent interception; do not disable global validation.
- Disabling decryption does not uninstall CA trust.

<a id="certificate-lifecycle"></a>
## View, untrust and delete a CA

1. Use View to inspect the public certificate and identity; Reveal locates its materials.

   **Image pending:** Certificates was inspected, but View/Reveal was not clicked. That page is not a native certificate/file window.

2. Use the product's system certificate-manager entry when needed, respecting platform permissions.

   **Image pending / blocked:** actual Keychain or Windows administrator MMC operation is missing.

3. Use Uninstall to remove trust.

   **Image pending / blocked:** the daily-use CA was not untrusted; an independent safe environment is required.

4. Use Delete only when the materials are no longer needed, following trust removal if required.

   **Image pending / blocked:** deletion was not executed; an empty list or unrelated setting cannot substitute.

5. Before regenerating, inspect the current CA and clients relying on it, then follow the product prompt.

   **Image pending / blocked:** regeneration and client trust updates were not executed. The complete lifecycle is not accepted.

**Expected result:** viewing, removing trust and deleting material remain separate operations.

**Notes:** Uninstall retains material. A trusted CA cannot simply be overwritten by regeneration. A changed identity invalidates old client trust. Do not delete daily-use CAs or share private keys. The Windows administrator MMC scenario has a separate acceptance boundary.

<a id="tls-passthrough"></a>
## Keep selected TLS hosts encrypted

**Purpose:** preserve original encrypted connections for targets unsuitable for interception.

This example owns `https://localhost:63604/playground/tls/h1`. Port `63604` was allocated for the recording; it is not a fixed product port. Complete the [preparation steps](#walkthrough-settings-tls-passthrough) first: inspect the existing trusted CA, add `localhost` only as this self-signed test origin's exception, enable decryption and obtain the first visible HTTP body. Do not copy that exception or demo address to an uncontrolled service.

1. Return to Settings. [Video step](#walkthrough-settings-tls-passthrough-17-settings-passthrough)

   ![Returning from Capture to Settings](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-17-settings-passthrough.png)

2. Open TLS passthrough and inspect the list. [Video step](#walkthrough-settings-tls-passthrough-18-passthrough)

   ![The actual list before adding the entry](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-18-passthrough.png)

3. Enter the exact host `localhost`, without a scheme, port or Path. [Video step](#walkthrough-settings-tls-passthrough-19-host)

   ![Entering the exact host localhost](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-19-host.png)

4. Click Add. Adding saves the entry immediately; there is no separate Rules-style Apply. [Video step](#walkthrough-settings-tls-passthrough-20-add)

   ![The saved localhost passthrough entry](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-20-add.png)

5. Return to Capture, keeping the `localhost` search. [Video step](#walkthrough-settings-tls-passthrough-21-capture-passthrough)

   ![Returning to Capture with the same host filter](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-21-capture-passthrough.png)

6. Have the client request the same HTTPS address over a new connection. [Video step](#walkthrough-settings-tls-passthrough-22-passthrough-request)

   ![A new CONNECT after the passthrough entry takes effect](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-22-passthrough-request.png)

7. Select the new CONNECT, not the previously decrypted GET. [Video step](#walkthrough-settings-tls-passthrough-23-passthrough-select)

   ![Selecting the actual new passthrough connection](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-23-passthrough-select.png)

8. Inspect Tunnel. Its host and port still identify the local origin, the protocol is `TLS passthrough`, and no HTTP body is shown. The client still received a successful response. [Video step](#walkthrough-settings-tls-passthrough-24-passthrough-tunnel)

   ![Global MITM is enabled but this connection matches passthrough](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-24-passthrough-tunnel.png)

9. Follow the passthrough-settings link. Settings locates and briefly highlights the actual `localhost` entry. [Video step](#walkthrough-settings-tls-passthrough-25-locate)

   ![Navigation from Tunnel highlights the actual entry](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-25-locate.png)

10. Remove the `localhost` entry added by this exercise. Removal is saved immediately. [Video step](#walkthrough-settings-tls-passthrough-26-remove)

    ![The exercise's passthrough entry has been removed](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-26-remove.png)

11. Return to Capture. The old Tunnel is not retroactively converted to HTTP. [Video step](#walkthrough-settings-tls-passthrough-27-capture-restored)

    ![The old Tunnel remains after removing the configuration](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-27-capture-restored.png)

12. Request the same address over another new connection. [Video step](#walkthrough-settings-tls-passthrough-28-reconnect)

    ![A new GET appears after removing passthrough](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-28-reconnect.png)

13. Select the new GET and check the same host and actual port. [Video step](#walkthrough-settings-tls-passthrough-29-restored-select)

    ![Selecting the newly decrypted request](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-29-restored-select.png)

14. Open Response and read `{"mode":"https-h1","secure":true}`. This belongs to the new connection, not a body backfilled into the old Tunnel. [Video step](#walkthrough-settings-tls-passthrough-30-restored-body)

    ![The actual HTTP body restored after removing passthrough](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-30-restored-body.png)

15. Return to Settings when finished. [Video step](#walkthrough-settings-tls-passthrough-31-cleanup-settings)

    ![Returning to Settings to clean up this exercise](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-31-cleanup-settings.png)

16. Open Certificates without using Generate, Uninstall or Delete. [Video step](#walkthrough-settings-tls-passthrough-32-cleanup-certificates)

    ![Opening Certificates while preserving the existing CA](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-32-cleanup-certificates.png)

17. Disable the HTTPS decryption enabled by this exercise. [Video step](#walkthrough-settings-tls-passthrough-33-mitm-off)

    ![Disabling this run's decryption while preserving CA trust](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-33-mitm-off.png)

18. Remove this run's `localhost` origin-certificate exception without changing other settings. [Video step](#walkthrough-settings-tls-passthrough-34-origin-remove)

    ![The exercise's origin exception has been removed](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-34-origin-remove.png)

**Image pending:** this recording adds only exact `localhost`, not wildcards, complex lists or first-time OS authorization.

**Expected result:** new connections follow the list; existing connections are not forcibly converted.

**Notes**

- Exact names and wildcards cover different scopes.
- Not now in the compatibility prompt saves nothing.
- Review failing hosts individually rather than allowing an entire broad domain by default.
- A tunnel's settings link can locate the most specific matching entry.

<a id="insecure-hosts"></a>
## Distinguish origin-certificate exceptions

**Purpose:** diagnose certificates on an authorized test origin, not client trust in the Interceptor CA.

1. Confirm the problem is the origin certificate: check host, validity and your managed trust chain.

   **Image pending:** Capture used a known local test origin, without recording certificate-error, validity or trust-chain diagnosis.

2. Prefer fixing the certificate. Only for an authorized controlled test, add the exact host in Certificates > Per-host overrides. This Capture image uses `localhost`, not TLS passthrough.

   ![Capture exercise adding the localhost origin exception](../media/v0.1.1-alpha.1/capture/capture-19-local-origin.png)

3. Establish a new request and inspect its result; this example uses `/playground/h2-json`.

   ![Actual new request to the same local origin](../media/v0.1.1-alpha.1/capture/capture-22-http2.png)

4. Remove the `localhost` entry added for this exercise afterward.

   ![Removing this localhost exception](../media/v0.1.1-alpha.1/capture/capture-31-remove-exception.png)

**Expected result:** a narrowly selected target is affected, not every host's validation.

**Notes:** an origin exception can keep decryption while relaxing origin validation. TLS passthrough keeps encryption. They are not interchangeable or a blanket fix for unknown business traffic.

<a id="app-containers"></a>
## Windows AppContainer loopback access

**Prerequisites:** Windows, an application actually affected by AppContainer isolation, and permission to change system settings.

1. Open App containers and search for the target.

   **Image pending / blocked:** all current recordings are macOS; there is no Windows AppContainer list/search.

2. Inspect loopback access, adjust its individual switch and complete UAC as needed.

   **Image pending / blocked:** a Windows target and actual UAC are required; macOS images cannot substitute.

3. Send a new request from that application and inspect Capture.

   **Image pending / blocked:** actual traffic from an AppContainer-isolated target is missing.

4. If batch changes are justified, choose Enable all or Disable all, review count/scope/effects and confirm.

   **Image pending / blocked:** Windows enumeration and batch authorization were not recorded.

5. Remove unnecessary exemptions after the exercise and verify actual system state.

   **Image pending / blocked:** Windows exemption restoration and system-state evidence images are missing.

**Expected result:** target loopback exemptions change explicitly. Enabled entries remain stably grouped first.

**Notes:** loopback access does not fix certificate pinning; passthrough does not let an isolated application reach the proxy. Batch scope is the current enumerated set, not arbitrary system isolation. This Windows capability is not available on macOS.

<a id="appearance"></a>
## Language and theme

Use Appearance or the sidebar controls to choose existing language/theme values and confirm persistence. App themes are `warm`, `light`, `ember`, `dark`; do not assume a System option.

Preferences do not translate captured URLs, data or protocol values. See [Workspace](workspace.md#appearance).

<a id="storage"></a>
## Inspect usage and clear Capture

This uses `settings-storage-privacy`. The complete recording first performs the [following section's](#privacy) default/per-export checks and cancels export, then clears Storage. Recording was already paused before Clear. Only this flow's public temporary records/bodies are removed, not another person's traffic. Export your own important records through [Transfer](transfer.md#har) first; this cancelled HAR draft did not create a backup.

1. Confirm the target is this exercise's `http://127.0.0.1:52747/guide/storage/before-clear`, body `{"orderId":"guide-storage-001","message":"public example"}`. `52747` is the dynamic origin port. This image is the same recording's pre-clear preparation.

   ![Actual public demonstration record before clearing](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-01-record.png)

2. Open Storage and inspect Captured body data and Session/Exchange/Body counts.

   ![Actual storage usage in this exercise](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-11-storage.png)

3. Refresh and check updated statistics with records retained. Refresh is neither Clear nor a fixed-quota setting.

   ![Actual Refresh updates only statistics](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-12-refresh.png)

4. Open Clear capture confirmation and review its effects.

   ![Actual Clear confirmation in this exercise](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-13-clear-dialog.png)

5. Cancel first and verify temporary data remains.

   ![Actual cancellation of Clear retaining data](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-14-cancel-clear.png)

6. Clear again and confirm removal of this exercise's records/bodies. The preceding cancellation image is not successful cleanup.

   ![Actually confirming this temporary-data cleanup](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-15-confirm-clear.png)

7. Return to Capture and inspect an empty list with Recording still paused. Clear preserved the earlier paused state; it did not automatically pause or resume recording.

   ![Actual empty Capture and still-paused Recording](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-16-empty-capture.png)

8. Explicitly resume Recording.

   ![Actually resuming Recording separately after Clear](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-17-resume-after-clear.png)

9. Request `http://127.0.0.1:52747/guide/storage/after-clear` through the proxy and inspect the new record, not an old record reappearing.

   ![Actually capturing after-clear after clearing and resuming](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-18-new-record.png)

**Expected result:** this clears the same temporary data as Capture Clear, not previously exported files.

**Notes:** body usage is neither process RSS nor total disk usage. There is no retention-days/quota control here and Refresh is not continuous polling. Active file tasks can prevent clearing.

Do not force Clear before file-task cleanup finishes. The [running archive cancellation recording](transfer.md#walkthrough-transfer-cancel) shows Cancel, waiting for a terminal result, then Clear. Clicking a disabled control or calling an internal command is not a required user step.

<a id="privacy"></a>
## Set privacy defaults for future exports

This is the first part of `settings-storage-privacy`, actually preceding Storage Clear above. It only demonstrates the relationship between the `maskCookies` default and the current HAR draft's override, not every privacy setting or a completed output-file review.

1. Select public test record `/guide/storage/before-clear` from `http://127.0.0.1:52747`; the port belongs only to this recording.

   ![Actual public record selected for the privacy example](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-01-record.png)

2. Open Privacy.

   ![Actually opening privacy defaults](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-02-privacy.png)

3. Temporarily set the Cookie default to `maskCookies=false`. This checks credential-free demo data, not a recommendation to publish unmasked traffic.

   ![Actually changing the saved Cookie default](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-03-cookie-default.png)

4. Open a new HAR export and check it inherits `maskCookies=false`.

   ![New HAR draft actually inheriting the changed default](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-04-new-export.png)

5. Select the current filtered-record scope and inspect this draft's range.

   ![Actually selecting the filtered-record scope](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-05-filter-scope.png)

6. Inspect the all-record scope as well. All records here are still this flow's public demo data, not evidence that everyday traffic is safe to share.

   ![Actually inspecting the all-record scope](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-06-all-scope.png)

7. Override Cookie masking to `true` only in this export draft, separately from the saved `false` default.

   ![Actual Cookie override for this export only](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-07-one-export-override.png)

8. Cancel this export. It cancels a HAR draft without saving a file, not a running file task.

   ![Actually cancelling this HAR export draft](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-08-cancel-export.png)

9. Return to Privacy and verify the saved default remains `false`, not changed to `true` by the one-export override.

   ![Actually checking that the override did not change the default](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-09-default-unchanged.png)

10. Restore the Cookie default to `true` before continuing to Storage cleanup.

    ![Actually restoring maskCookies=true](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-10-restore-privacy.png)

11. Configure Authorization masking and unmasked-export warnings independently when needed.

    The [complete privacy recording](#walkthrough-settings-privacy-export) separately changes Authorization, Cookie and warning defaults, checks inheritance, a one-export override and the actual HAR, then restores all three settings.

    ![Changing the Authorization default independently](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-02-auth-default.png)

    ![Changing the unmasked-export warning independently](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-09-warning-default.png)

12. Review URLs, bodies, custom sensitive fields and the final file before sharing.

    ![Checking the actual HAR produced with the one-export override](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-07-check-override.png)

    The additional recording also [strips bodies, exports and imports again](#walkthrough-settings-privacy-export-18-strip-bodies), checking the file and actual reloaded result. These public demo values do not establish universal anonymization; review your own data before sharing.

**Expected result:** a new HAR draft inherits current defaults; a per-draft override does not write back to the saved default. Default changes do not alter open drafts, running jobs or existing files; these images only demonstrate the new-draft and per-export round trip.

**Notes:** native archives retain full data. Defaults are not universal anonymization; see [Export privacy](transfer.md#privacy).

<a id="agent-mcp"></a>
## Models, Tools and MCP

- Add/test models in Settings > Agent: [Agent](agent.md#models).
- Configure separate Agent/MCP columns: [Tool permissions](tool-permissions.md).
- Manage Server, Clients and endpoints: [MCP](mcp.md).

A model does not enable MCP automatically. MCP does not require an internal Agent model; the external host has its own model configuration.

<a id="updates"></a>
## Check, download and open updates

**Prerequisites:** a packaged Windows/macOS App. A source-development run can report updates unsupported.

1. Open Updates and inspect version/status.

   ![Actual release App version and update status](../media/v0.1.1-alpha.1/settings/settings-15-updates.png)

2. Choose Check. Investigate failures rather than interpreting them as up-to-date.

   The [independent Check recording](#walkthrough-settings-update-check) uses the original release source and actually returns `failed` / `GitHub returned HTTP 404`. Nothing was downloaded or installed; failure is not “up to date.”

   ![The failure state after an actual Check](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-04-result.png)

3. Read an available release's notes and explicitly choose Download.

   **Image pending / blocked:** an updater-accessible supported release and actual download steps are missing.

4. Wait for download and integrity checks, then Open installer.

   **Image pending / blocked:** download verification and opening the installer were not executed; the version page is not proof.

5. Complete the real OS installer process; do not execute unfinished temporary files.

   **Image pending / blocked:** native macOS/Windows update installation and authorization were not recorded.

**Expected result:** checking, downloading and opening are separate actions. Discovering an update does not automatically download it.

**Notes**

- Updates use anonymous fixed-source GitHub requests, not VS Code login or an App PAT field.
- A private source or lack of a suitable stable release can make checks fail. A published Alpha is not proof of updater availability.
- Platform, architecture and installer formats must match. A macOS ZIP-only release is not automatically an updater target.
- Notification actions use the same state as Settings; Dismiss only hides the notice.
- Quit cleans up active checks/downloads rather than bypassing validation with an old temporary file.

<!-- recorded-walkthrough:settings-storage-privacy:start -->
<a id="walkthrough-settings-storage-privacy"></a>
## Recorded walkthrough: privacy defaults, cancelling and clearing storage

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.

> This recording shows the existing CA, settings and discardable drafts. Manual/PAC examples are not applied or claimed reachable. The daily-use CA is not regenerated or uninstalled.

| Example field | Actual recorded value |
| --- | --- |
| <code>firstUrl</code> | <code>http://127.0.0.1:52747/guide/storage/before-clear</code> |
| <code>secondUrl</code> | <code>http://127.0.0.1:52747/guide/storage/after-clear</code> |
| <code>body</code> | <code>{&quot;orderId&quot;:&quot;guide-storage-001&quot;,&quot;message&quot;:&quot;public example&quot;}</code> |
| <code>privacyOverride</code> | <code>maskCookies true for one cancelled export; saved default remained false then restored true</code> |
| <code>clearedData</code> | <code>only this workflow’s temporary records and bodies</code> |

<a id="walkthrough-settings-storage-privacy-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4" poster="../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-01-record.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.vtt" default>
</video>

<a id="walkthrough-settings-storage-privacy-01-record"></a>
### 01 · Select this run’s temporary record

[Video 00:00](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=0.381) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![01 · Select this run’s temporary record](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-01-record.png)

<a id="walkthrough-settings-storage-privacy-02-privacy"></a>
### 02 · Open privacy defaults

[Video 00:03](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=3.734) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![02 · Open privacy defaults](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-02-privacy.png)

<a id="walkthrough-settings-storage-privacy-03-cookie-default"></a>
### 03 · Temporarily change the Cookie default

[Video 00:06](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=6.618) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![03 · Temporarily change the Cookie default](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-03-cookie-default.png)

<a id="walkthrough-settings-storage-privacy-04-new-export"></a>
### 04 · Open a new HAR export and check defaults

[Video 00:09](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=9.431) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![04 · Open a new HAR export and check defaults](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-04-new-export.png)

<a id="walkthrough-settings-storage-privacy-05-filter-scope"></a>
### 05 · Select the current filter scope

[Video 00:12](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=12.782) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![05 · Select the current filter scope](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-05-filter-scope.png)

<a id="walkthrough-settings-storage-privacy-06-all-scope"></a>
### 06 · Inspect the all-records scope

[Video 00:15](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=15.579) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![06 · Inspect the all-records scope](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-06-all-scope.png)

<a id="walkthrough-settings-storage-privacy-07-one-export-override"></a>
### 07 · Override Cookie masking for this export

[Video 00:18](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=18.364) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![07 · Override Cookie masking for this export](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-07-one-export-override.png)

<a id="walkthrough-settings-storage-privacy-08-cancel-export"></a>
### 08 · Cancel this export

[Video 00:21](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=21.177) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![08 · Cancel this export](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-08-cancel-export.png)

<a id="walkthrough-settings-storage-privacy-09-default-unchanged"></a>
### 09 · Verify the override did not change defaults

[Video 00:23](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=23.983) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![09 · Verify the override did not change defaults](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-09-default-unchanged.png)

<a id="walkthrough-settings-storage-privacy-10-restore-privacy"></a>
### 10 · Restore the Cookie masking default

[Video 00:26](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=26.874) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![10 · Restore the Cookie masking default](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-10-restore-privacy.png)

<a id="walkthrough-settings-storage-privacy-11-storage"></a>
### 11 · Inspect actual storage usage

[Video 00:29](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=29.684) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![11 · Inspect actual storage usage](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-11-storage.png)

<a id="walkthrough-settings-storage-privacy-12-refresh"></a>
### 12 · Refresh updates statistics only

[Video 00:32](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=32.552) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![12 · Refresh updates statistics only](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-12-refresh.png)

<a id="walkthrough-settings-storage-privacy-13-clear-dialog"></a>
### 13 · Review Clear effects

[Video 00:35](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=35.358) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![13 · Review Clear effects](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-13-clear-dialog.png)

<a id="walkthrough-settings-storage-privacy-14-cancel-clear"></a>
### 14 · Cancel Clear without deleting records

[Video 00:38](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=38.152) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![14 · Cancel Clear without deleting records](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-14-cancel-clear.png)

<a id="walkthrough-settings-storage-privacy-15-confirm-clear"></a>
### 15 · Confirm clearing this run’s records and bodies

[Video 00:40](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=40.955) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![15 · Confirm clearing this run’s records and bodies](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-15-confirm-clear.png)

<a id="walkthrough-settings-storage-privacy-16-empty-capture"></a>
### 16 · Capture is empty and remains paused

[Video 00:43](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=43.823) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![16 · Capture is empty and remains paused](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-16-empty-capture.png)

<a id="walkthrough-settings-storage-privacy-17-resume-after-clear"></a>
### 17 · Explicitly resume after Clear

[Video 00:46](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=46.684) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![17 · Explicitly resume after Clear](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-17-resume-after-clear.png)

<a id="walkthrough-settings-storage-privacy-18-new-record"></a>
### 18 · Capture a new request after Clear

[Video 00:49](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy.mp4#t=49.547) · [Back to the video](#walkthrough-settings-storage-privacy-video)

![18 · Capture a new request after Clear](../media/v0.1.1-alpha.1/settings-storage-privacy/settings-storage-privacy-18-new-record.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:settings-storage-privacy:end -->

<!-- recorded-walkthrough:settings-proxy-routing:start -->
<a id="walkthrough-settings-proxy-routing"></a>
## Recorded walkthrough: system routing restore versus Recording

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.

> This recording shows the existing CA, settings and discardable drafts. Manual/PAC examples are not applied or claimed reachable. The daily-use CA is not regenerated or uninstalled.

| Example field | Actual recorded value |
| --- | --- |
| <code>listener</code> | <code>127.0.0.1:8888</code> |
| <code>explicitClientUrl</code> | <code>http://127.0.0.1:59429/guide/system-proxy/explicit-client</code> |
| <code>purpose</code> | <code>System proxy routing and Recording are separate; Restore retains the listener</code> |
| <code>authorizationScope</code> | <code>existing authorized helper; this is not first-time OS authorization footage</code> |

<a id="walkthrough-settings-proxy-routing-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4" poster="../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-01-owned.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.vtt" default>
</video>

<a id="walkthrough-settings-proxy-routing-01-owned"></a>
### 01 · Inspect system proxy ownership

[Video 00:00](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4#t=0.405) · [Back to the video](#walkthrough-settings-proxy-routing-video)

![01 · Inspect system proxy ownership](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-01-owned.png)

<a id="walkthrough-settings-proxy-routing-02-restore"></a>
### 02 · Restore the original system routing

[Video 00:03](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4#t=3.368) · [Back to the video](#walkthrough-settings-proxy-routing-video)

![02 · Restore the original system routing](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-02-restore.png)

<a id="walkthrough-settings-proxy-routing-03-listener"></a>
### 03 · Confirm the listener is still available

[Video 00:09](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4#t=9.619) · [Back to the video](#walkthrough-settings-proxy-routing-video)

![03 · Confirm the listener is still available](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-03-listener.png)

<a id="walkthrough-settings-proxy-routing-04-enable"></a>
### 04 · Enable again through Settings

[Video 00:12](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4#t=12.416) · [Back to the video](#walkthrough-settings-proxy-routing-video)

![04 · Enable again through Settings](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-04-enable.png)

<a id="walkthrough-settings-proxy-routing-05-recording"></a>
### 05 · Return to Capture and ensure Recording is on

[Video 00:19](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4#t=19.118) · [Back to the video](#walkthrough-settings-proxy-routing-video)

![05 · Return to Capture and ensure Recording is on](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-05-recording.png)

<a id="walkthrough-settings-proxy-routing-06-pause"></a>
### 06 · Pause Recording

[Video 00:22](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4#t=22.119) · [Back to the video](#walkthrough-settings-proxy-routing-video)

![06 · Pause Recording](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-06-pause.png)

<a id="walkthrough-settings-proxy-routing-07-still-owned"></a>
### 07 · Pausing is not Restore

[Video 00:24](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4#t=24.970) · [Back to the video](#walkthrough-settings-proxy-routing-video)

![07 · Pausing is not Restore](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-07-still-owned.png)

<a id="walkthrough-settings-proxy-routing-08-final-restore"></a>
### 08 · Restore routing before finishing

[Video 00:27](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing.mp4#t=27.870) · [Back to the video](#walkthrough-settings-proxy-routing-video)

![08 · Restore routing before finishing](../media/v0.1.1-alpha.1/settings-proxy-routing/settings-proxy-routing-08-final-restore.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:settings-proxy-routing:end -->

<!-- recorded-walkthrough:settings-tls-passthrough:start -->
<a id="walkthrough-settings-tls-passthrough"></a>
## Recorded walkthrough: TLS passthrough and restored decryption

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>host</code> | <code>localhost</code> |
| <code>filter</code> | <code>localhost</code> |
| <code>url</code> | <code>https://localhost:63604/playground/tls/h1</code> |
| <code>originPort</code> | <code>63604</code> |
| <code>originException</code> | <code>localhost (owned self-signed test origin; removed after recording)</code> |
| <code>passthrough</code> | <code>localhost (exact host; removed before reconnecting)</code> |
| <code>certificateScope</code> | <code>existing trusted CA; no generation, install, uninstall or deletion</code> |

<a id="walkthrough-settings-tls-passthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4" poster="../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-01-filter.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.vtt" default>
</video>

<a id="walkthrough-settings-tls-passthrough-01-filter"></a>
### 01 · Filter by localhost

[Video 00:00](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=0.335) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![01 · Filter by localhost](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-01-filter.png)

<a id="walkthrough-settings-tls-passthrough-02-record"></a>
### 02 · Start Recording

[Video 00:03](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=3.185) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![02 · Start Recording](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-02-record.png)

<a id="walkthrough-settings-tls-passthrough-03-opaque-request"></a>
### 03 · Establish an opaque TLS connection

[Video 00:05](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=5.979) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![03 · Establish an opaque TLS connection](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-03-opaque-request.png)

<a id="walkthrough-settings-tls-passthrough-04-tunnel-select"></a>
### 04 · Select the CONNECT tunnel

[Video 00:08](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=8.883) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![04 · Select the CONNECT tunnel](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-04-tunnel-select.png)

<a id="walkthrough-settings-tls-passthrough-05-tunnel"></a>
### 05 · Inspect Tunnel rather than an HTTP body

[Video 00:11](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=11.833) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![05 · Inspect Tunnel rather than an HTTP body](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-05-tunnel.png)

<a id="walkthrough-settings-tls-passthrough-06-https-setup"></a>
### 06 · Open HTTPS Setup from Tunnel

[Video 00:14](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=14.732) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![06 · Open HTTPS Setup from Tunnel](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-06-https-setup.png)

<a id="walkthrough-settings-tls-passthrough-07-cancel-setup"></a>
### 07 · Cancel without enabling decryption

[Video 00:17](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=17.889) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![07 · Cancel without enabling decryption](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-07-cancel-setup.png)

<a id="walkthrough-settings-tls-passthrough-08-settings"></a>
### 08 · Open Settings

[Video 00:20](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=20.882) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![08 · Open Settings](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-08-settings.png)

<a id="walkthrough-settings-tls-passthrough-09-certificates"></a>
### 09 · Inspect the existing trusted CA

[Video 00:23](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=23.783) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![09 · Inspect the existing trusted CA](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-09-certificates.png)

<a id="walkthrough-settings-tls-passthrough-10-origin-host"></a>
### 10 · Enter the owned origin localhost

[Video 00:26](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=26.683) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![10 · Enter the owned origin localhost](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-10-origin-host.png)

<a id="walkthrough-settings-tls-passthrough-11-origin-add"></a>
### 11 · Add only this run’s origin exception

[Video 00:29](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=29.533) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![11 · Add only this run’s origin exception](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-11-origin-add.png)

<a id="walkthrough-settings-tls-passthrough-12-mitm-on"></a>
### 12 · Enable HTTPS decryption

[Video 00:32](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=32.485) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![12 · Enable HTTPS decryption](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-12-mitm-on.png)

<a id="walkthrough-settings-tls-passthrough-13-capture-decrypted"></a>
### 13 · Return to Capture

[Video 00:35](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=35.584) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![13 · Return to Capture](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-13-capture-decrypted.png)

<a id="walkthrough-settings-tls-passthrough-14-decrypted-request"></a>
### 14 · Request HTTPS over a new connection

[Video 00:38](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=38.482) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![14 · Request HTTPS over a new connection](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-14-decrypted-request.png)

<a id="walkthrough-settings-tls-passthrough-15-decrypted-select"></a>
### 15 · Select the decrypted GET

[Video 00:41](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=41.384) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![15 · Select the decrypted GET](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-15-decrypted-select.png)

<a id="walkthrough-settings-tls-passthrough-16-decrypted-body"></a>
### 16 · Read the actual HTTPS body

[Video 00:44](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=44.283) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![16 · Read the actual HTTPS body](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-16-decrypted-body.png)

<a id="walkthrough-settings-tls-passthrough-17-settings-passthrough"></a>
### 17 · Return to Settings

[Video 00:47](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=47.434) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![17 · Return to Settings](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-17-settings-passthrough.png)

<a id="walkthrough-settings-tls-passthrough-18-passthrough"></a>
### 18 · Open TLS passthrough

[Video 00:50](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=50.334) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![18 · Open TLS passthrough](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-18-passthrough.png)

<a id="walkthrough-settings-tls-passthrough-19-host"></a>
### 19 · Enter the exact host localhost

[Video 00:53](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=53.233) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![19 · Enter the exact host localhost](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-19-host.png)

<a id="walkthrough-settings-tls-passthrough-20-add"></a>
### 20 · Add and save the passthrough entry

[Video 00:56](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=56.084) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![20 · Add and save the passthrough entry](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-20-add.png)

<a id="walkthrough-settings-tls-passthrough-21-capture-passthrough"></a>
### 21 · Return to Capture to inspect a new connection

[Video 00:59](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=59.034) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![21 · Return to Capture to inspect a new connection](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-21-capture-passthrough.png)

<a id="walkthrough-settings-tls-passthrough-22-passthrough-request"></a>
### 22 · Reconnect to the same HTTPS origin

[Video 01:02](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=62.034) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![22 · Reconnect to the same HTTPS origin](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-22-passthrough-request.png)

<a id="walkthrough-settings-tls-passthrough-23-passthrough-select"></a>
### 23 · Select the new CONNECT tunnel

[Video 01:04](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=64.933) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![23 · Select the new CONNECT tunnel](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-23-passthrough-select.png)

<a id="walkthrough-settings-tls-passthrough-24-passthrough-tunnel"></a>
### 24 · Verify the TLS passthrough match

[Video 01:07](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=67.830) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![24 · Verify the TLS passthrough match](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-24-passthrough-tunnel.png)

<a id="walkthrough-settings-tls-passthrough-25-locate"></a>
### 25 · Locate the actual entry from Tunnel

[Video 01:10](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=70.732) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![25 · Locate the actual entry from Tunnel](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-25-locate.png)

<a id="walkthrough-settings-tls-passthrough-26-remove"></a>
### 26 · Remove this run’s localhost passthrough entry

[Video 01:13](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=73.634) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![26 · Remove this run’s localhost passthrough entry](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-26-remove.png)

<a id="walkthrough-settings-tls-passthrough-27-capture-restored"></a>
### 27 · Return to Capture to inspect restoration

[Video 01:16](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=76.486) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![27 · Return to Capture to inspect restoration](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-27-capture-restored.png)

<a id="walkthrough-settings-tls-passthrough-28-reconnect"></a>
### 28 · Request HTTPS over another new connection

[Video 01:19](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=79.434) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![28 · Request HTTPS over another new connection](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-28-reconnect.png)

<a id="walkthrough-settings-tls-passthrough-29-restored-select"></a>
### 29 · Select the newly decrypted GET

[Video 01:22](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=82.332) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![29 · Select the newly decrypted GET](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-29-restored-select.png)

<a id="walkthrough-settings-tls-passthrough-30-restored-body"></a>
### 30 · Verify the HTTP body is visible again

[Video 01:25](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=85.285) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![30 · Verify the HTTP body is visible again](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-30-restored-body.png)

<a id="walkthrough-settings-tls-passthrough-31-cleanup-settings"></a>
### 31 · Return to Settings to restore this run’s configuration

[Video 01:28](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=88.231) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![31 · Return to Settings to restore this run’s configuration](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-31-cleanup-settings.png)

<a id="walkthrough-settings-tls-passthrough-32-cleanup-certificates"></a>
### 32 · Open Certificates

[Video 01:31](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=91.133) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![32 · Open Certificates](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-32-cleanup-certificates.png)

<a id="walkthrough-settings-tls-passthrough-33-mitm-off"></a>
### 33 · Disable this run’s decryption

[Video 01:34](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=94.034) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![33 · Disable this run’s decryption](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-33-mitm-off.png)

<a id="walkthrough-settings-tls-passthrough-34-origin-remove"></a>
### 34 · Remove the owned origin exception

[Video 01:37](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough.mp4#t=97.079) · [Back to the video](#walkthrough-settings-tls-passthrough-video)

![34 · Remove the owned origin exception](../media/v0.1.1-alpha.1/settings-tls-passthrough/settings-tls-passthrough-34-origin-remove.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:settings-tls-passthrough:end -->

<!-- recorded-walkthrough:settings-upstream:start -->
<a id="walkthrough-settings-upstream"></a>
## Recorded walkthrough: Manual, PAC, Direct and shared drafts

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>origin</code> | <code>http://127.0.0.1:51204/guide/upstream</code> |
| <code>proxyHost</code> | <code>127.0.0.1</code> |
| <code>proxyPort</code> | <code>51206</code> |
| <code>pacUrl</code> | <code>http://127.0.0.1:51204/guide/upstream/route.pac</code> |
| <code>pacChoice</code> | <code>127.0.0.1 uses the owned PROXY; localhost uses DIRECT</code> |
| <code>draftBoundary</code> | <code>Cancel/Discard do not Apply; Open in Settings retains the same draft</code> |
| <code>finalMode</code> | <code>system</code> |
| <code>scope</code> | <code>Owned HTTP routes only; no WPAD, external credentials or system proxy preference writes</code> |

<a id="walkthrough-settings-upstream-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4" poster="../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.vtt" default>
</video>

<a id="walkthrough-settings-upstream-01-settings"></a>
### 01 · Open Settings

[Video 00:00](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=0.458) · [Back to the video](#walkthrough-settings-upstream-video)

![01 · Open Settings](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-01-settings.png)

<a id="walkthrough-settings-upstream-02-upstream"></a>
### 02 · Open Upstream proxy

[Video 00:03](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=3.424) · [Back to the video](#walkthrough-settings-upstream-video)

![02 · Open Upstream proxy](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-02-upstream.png)

<a id="walkthrough-settings-upstream-03-direct-draft"></a>
### 03 · Select a Direct draft

[Video 00:06](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=6.415) · [Back to the video](#walkthrough-settings-upstream-video)

![03 · Select a Direct draft](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-03-direct-draft.png)

<a id="walkthrough-settings-upstream-04-discard"></a>
### 04 · Discard the draft without changing the route

[Video 00:09](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=9.361) · [Back to the video](#walkthrough-settings-upstream-video)

![04 · Discard the draft without changing the route](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-04-discard.png)

<a id="walkthrough-settings-upstream-05-manual"></a>
### 05 · Select Manual

[Video 00:12](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=12.310) · [Back to the video](#walkthrough-settings-upstream-video)

![05 · Select Manual](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-05-manual.png)

<a id="walkthrough-settings-upstream-06-host"></a>
### 06 · Enter the owned upstream Host

[Video 00:15](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=15.311) · [Back to the video](#walkthrough-settings-upstream-video)

![06 · Enter the owned upstream Host](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-06-host.png)

<a id="walkthrough-settings-upstream-07-port"></a>
### 07 · Enter the actual upstream port

[Video 00:18](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=18.260) · [Back to the video](#walkthrough-settings-upstream-video)

![07 · Enter the actual upstream port](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-07-port.png)

<a id="walkthrough-settings-upstream-08-apply-manual"></a>
### 08 · Apply Manual

[Video 00:21](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=21.206) · [Back to the video](#walkthrough-settings-upstream-video)

![08 · Apply Manual](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-08-apply-manual.png)

<a id="walkthrough-settings-upstream-09-manual-request"></a>
### 09 · Verify Manual through actual forwarding

[Video 00:24](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=24.262) · [Back to the video](#walkthrough-settings-upstream-video)

![09 · Verify Manual through actual forwarding](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-09-manual-request.png)

<a id="walkthrough-settings-upstream-10-capture"></a>
### 10 · Return to Capture to inspect the active route

[Video 00:27](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=27.167) · [Back to the video](#walkthrough-settings-upstream-video)

![10 · Return to Capture to inspect the active route](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-10-capture.png)

<a id="walkthrough-settings-upstream-11-shortcut"></a>
### 11 · Open the statusbar popover

[Video 00:30](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=30.209) · [Back to the video](#walkthrough-settings-upstream-video)

![11 · Open the statusbar popover](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-11-shortcut.png)

<a id="walkthrough-settings-upstream-12-pac-draft"></a>
### 12 · Select a PAC draft in the popover

[Video 00:33](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=33.257) · [Back to the video](#walkthrough-settings-upstream-video)

![12 · Select a PAC draft in the popover](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-12-pac-draft.png)

<a id="walkthrough-settings-upstream-13-pac-url"></a>
### 13 · Enter the owned PAC URL

[Video 00:36](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=36.250) · [Back to the video](#walkthrough-settings-upstream-video)

![13 · Enter the owned PAC URL](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-13-pac-url.png)

<a id="walkthrough-settings-upstream-14-cancel-draft"></a>
### 14 · Cancel this popover draft

[Video 00:39](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=39.168) · [Back to the video](#walkthrough-settings-upstream-video)

![14 · Cancel this popover draft](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-14-cancel-draft.png)

<a id="walkthrough-settings-upstream-15-reopen"></a>
### 15 · Reopen and verify Manual remains

[Video 00:42](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=42.410) · [Back to the video](#walkthrough-settings-upstream-video)

![15 · Reopen and verify Manual remains](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-15-reopen.png)

<a id="walkthrough-settings-upstream-16-pac-again"></a>
### 16 · Select PAC again

[Video 00:45](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=45.409) · [Back to the video](#walkthrough-settings-upstream-video)

![16 · Select PAC again](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-16-pac-again.png)

<a id="walkthrough-settings-upstream-17-pac-url-again"></a>
### 17 · Enter this run’s PAC again

[Video 00:48](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=48.369) · [Back to the video](#walkthrough-settings-upstream-video)

![17 · Enter this run’s PAC again](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-17-pac-url-again.png)

<a id="walkthrough-settings-upstream-18-open-settings"></a>
### 18 · Carry the same draft into Settings

[Video 00:51](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=51.411) · [Back to the video](#walkthrough-settings-upstream-video)

![18 · Carry the same draft into Settings](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-18-open-settings.png)

<a id="walkthrough-settings-upstream-19-apply-pac"></a>
### 19 · Apply PAC

[Video 00:54](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=54.408) · [Back to the video](#walkthrough-settings-upstream-video)

![19 · Apply PAC](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-19-apply-pac.png)

<a id="walkthrough-settings-upstream-20-pac-proxy"></a>
### 20 · Verify PAC selects PROXY

[Video 00:57](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=57.495) · [Back to the video](#walkthrough-settings-upstream-video)

![20 · Verify PAC selects PROXY](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-20-pac-proxy.png)

<a id="walkthrough-settings-upstream-21-pac-direct"></a>
### 21 · Verify the same PAC selects DIRECT

[Video 01:00](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=60.415) · [Back to the video](#walkthrough-settings-upstream-video)

![21 · Verify the same PAC selects DIRECT](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-21-pac-direct.png)

<a id="walkthrough-settings-upstream-22-direct"></a>
### 22 · Select Direct explicitly

[Video 01:03](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=63.359) · [Back to the video](#walkthrough-settings-upstream-video)

![22 · Select Direct explicitly](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-22-direct.png)

<a id="walkthrough-settings-upstream-23-apply-direct"></a>
### 23 · Apply Direct

[Video 01:06](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=66.309) · [Back to the video](#walkthrough-settings-upstream-video)

![23 · Apply Direct](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-23-apply-direct.png)

<a id="walkthrough-settings-upstream-24-direct-request"></a>
### 24 · Verify Direct bypasses the upstream

[Video 01:09](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=69.309) · [Back to the video](#walkthrough-settings-upstream-video)

![24 · Verify Direct bypasses the upstream](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-24-direct-request.png)

<a id="walkthrough-settings-upstream-25-system"></a>
### 25 · Restore the System selection

[Video 01:12](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=72.211) · [Back to the video](#walkthrough-settings-upstream-video)

![25 · Restore the System selection](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-25-system.png)

<a id="walkthrough-settings-upstream-26-apply-system"></a>
### 26 · Apply System

[Video 01:15](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream.mp4#t=75.159) · [Back to the video](#walkthrough-settings-upstream-video)

![26 · Apply System](../media/v0.1.1-alpha.1/settings-upstream/settings-upstream-26-apply-system.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:settings-upstream:end -->

<!-- recorded-walkthrough:settings-privacy-export:start -->
<a id="walkthrough-settings-privacy-export"></a>
## Recorded walkthrough: privacy defaults, per-export overrides and actual HAR fields

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:61384/guide/privacy-export/record</code> |
| <code>publicAuthorization</code> | <code>Bearer public-export-value</code> |
| <code>publicCookie</code> | <code>guide-request=public</code> |
| <code>publicResponseCookie</code> | <code>guide-response=public; Path=/</code> |
| <code>retainedHeader</code> | <code>x-guide-note: public-note</code> |
| <code>originalBody</code> | <code>{&quot;message&quot;:&quot;public privacy example&quot;}</code> |
| <code>firstFile</code> | <code>guide-auth-masked.har</code> |
| <code>secondFile</code> | <code>guide-public-unmasked.har</code> |
| <code>finalFile</code> | <code>guide-redacted-no-body.har</code> |
| <code>safety</code> | <code>All authentication-like values are deliberately public loopback examples, not real credentials</code> |
| <code>finalDefaults</code> | <code>Authorization, Cookie and warning enabled; existing files not rewritten</code> |

<a id="walkthrough-settings-privacy-export-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4" poster="../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-01-privacy.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.vtt" default>
</video>

<a id="walkthrough-settings-privacy-export-01-privacy"></a>
### 01 · Inspect all three Privacy defaults

[Video 00:00](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=0.481) · [Back to the video](#walkthrough-settings-privacy-export-video)

![01 · Inspect all three Privacy defaults](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-01-privacy.png)

<a id="walkthrough-settings-privacy-export-02-auth-default"></a>
### 02 · Change the Authorization default

[Video 00:03](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=3.651) · [Back to the video](#walkthrough-settings-privacy-export-video)

![02 · Change the Authorization default](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-02-auth-default.png)

<a id="walkthrough-settings-privacy-export-03-cookie-default"></a>
### 03 · Change the Cookie default

[Video 00:06](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=6.663) · [Back to the video](#walkthrough-settings-privacy-export-video)

![03 · Change the Cookie default](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-03-cookie-default.png)

<a id="walkthrough-settings-privacy-export-04-inherited-export"></a>
### 04 · Open a new HAR draft and verify inherited defaults

[Video 00:09](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=9.676) · [Back to the video](#walkthrough-settings-privacy-export-video)

![04 · Open a new HAR draft and verify inherited defaults](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-04-inherited-export.png)

<a id="walkthrough-settings-privacy-export-05-one-time-override"></a>
### 05 · Mask Authorization for this export only

[Video 00:13](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=13.782) · [Back to the video](#walkthrough-settings-privacy-export-video)

![05 · Mask Authorization for this export only](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-05-one-time-override.png)

<a id="walkthrough-settings-privacy-export-06-save-override"></a>
### 06 · Save guide-auth-masked.har

[Video 00:37](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=37.513) · [Back to the video](#walkthrough-settings-privacy-export-video)

![06 · Save guide-auth-masked.har](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-06-save-override.png)

<a id="walkthrough-settings-privacy-export-07-check-override"></a>
### 07 · Verify only the selected fields are masked

[Video 00:42](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=42.649) · [Back to the video](#walkthrough-settings-privacy-export-video)

![07 · Verify only the selected fields are masked](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-07-check-override.png)

<a id="walkthrough-settings-privacy-export-08-defaults-unchanged"></a>
### 08 · Verify the per-export override did not change defaults

[Video 00:45](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=45.793) · [Back to the video](#walkthrough-settings-privacy-export-video)

![08 · Verify the per-export override did not change defaults](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-08-defaults-unchanged.png)

<a id="walkthrough-settings-privacy-export-09-warning-default"></a>
### 09 · Disable the unmasked-export warning preference

[Video 00:48](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=48.918) · [Back to the video](#walkthrough-settings-privacy-export-video)

![09 · Disable the unmasked-export warning preference](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-09-warning-default.png)

<a id="walkthrough-settings-privacy-export-10-unmasked-draft"></a>
### 10 · Inspect the new public-data export draft

[Video 00:51](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=51.940) · [Back to the video](#walkthrough-settings-privacy-export-video)

![10 · Inspect the new public-data export draft](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-10-unmasked-draft.png)

<a id="walkthrough-settings-privacy-export-11-save-public"></a>
### 11 · Save only this run’s public example values

[Video 01:17](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=77.499) · [Back to the video](#walkthrough-settings-privacy-export-video)

![11 · Save only this run’s public example values](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-11-save-public.png)

<a id="walkthrough-settings-privacy-export-12-check-public"></a>
### 12 · Verify the actual unmasked exported fields

[Video 01:23](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=83.082) · [Back to the video](#walkthrough-settings-privacy-export-video)

![12 · Verify the actual unmasked exported fields](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-12-check-public.png)

<a id="walkthrough-settings-privacy-export-13-restore-privacy"></a>
### 13 · Return to Privacy to restore defaults

[Video 01:26](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=86.210) · [Back to the video](#walkthrough-settings-privacy-export-video)

![13 · Return to Privacy to restore defaults](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-13-restore-privacy.png)

<a id="walkthrough-settings-privacy-export-14-restore-auth"></a>
### 14 · Restore Authorization masking

[Video 01:29](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=89.317) · [Back to the video](#walkthrough-settings-privacy-export-video)

![14 · Restore Authorization masking](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-14-restore-auth.png)

<a id="walkthrough-settings-privacy-export-15-restore-cookies"></a>
### 15 · Restore Cookie masking

[Video 01:32](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=92.332) · [Back to the video](#walkthrough-settings-privacy-export-video)

![15 · Restore Cookie masking](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-15-restore-cookies.png)

<a id="walkthrough-settings-privacy-export-16-restore-warning"></a>
### 16 · Restore the unmasked-export warning

[Video 01:35](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=95.339) · [Back to the video](#walkthrough-settings-privacy-export-video)

![16 · Restore the unmasked-export warning](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-16-restore-warning.png)

<a id="walkthrough-settings-privacy-export-17-redacted-draft"></a>
### 17 · Inspect a new draft with restored defaults

[Video 01:38](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=98.358) · [Back to the video](#walkthrough-settings-privacy-export-video)

![17 · Inspect a new draft with restored defaults](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-17-redacted-draft.png)

<a id="walkthrough-settings-privacy-export-18-strip-bodies"></a>
### 18 · Remove request and response bodies for this export

[Video 01:42](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=102.552) · [Back to the video](#walkthrough-settings-privacy-export-video)

![18 · Remove request and response bodies for this export](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-18-strip-bodies.png)

<a id="walkthrough-settings-privacy-export-19-save-redacted"></a>
### 19 · Save guide-redacted-no-body.har

[Video 02:07](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=127.046) · [Back to the video](#walkthrough-settings-privacy-export-video)

![19 · Save guide-redacted-no-body.har](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-19-save-redacted.png)

<a id="walkthrough-settings-privacy-export-20-check-redacted"></a>
### 20 · Verify the actual file field by field

[Video 02:12](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=132.676) · [Back to the video](#walkthrough-settings-privacy-export-video)

![20 · Verify the actual file field by field](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-20-check-redacted.png)

<a id="walkthrough-settings-privacy-export-21-clear"></a>
### 21 · Clear this run’s temporary records before checking import

[Video 02:15](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=135.727) · [Back to the video](#walkthrough-settings-privacy-export-video)

![21 · Clear this run’s temporary records before checking import](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-21-clear.png)

<a id="walkthrough-settings-privacy-export-22-import"></a>
### 22 · Select the just-exported HAR through the product

[Video 02:18](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=138.763) · [Back to the video](#walkthrough-settings-privacy-export-video)

![22 · Select the just-exported HAR through the product](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-22-import.png)

<a id="walkthrough-settings-privacy-export-23-open-redacted"></a>
### 23 · Open this run’s body-stripped HAR

[Video 02:37](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=157.575) · [Back to the video](#walkthrough-settings-privacy-export-video)

![23 · Open this run’s body-stripped HAR](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-23-open-redacted.png)

<a id="walkthrough-settings-privacy-export-24-imported"></a>
### 24 · Import does not recreate removed body bytes

[Video 02:43](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export.mp4#t=163.133) · [Back to the video](#walkthrough-settings-privacy-export-video)

![24 · Import does not recreate removed body bytes](../media/v0.1.1-alpha.1/settings-privacy-export/settings-privacy-export-24-imported.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:settings-privacy-export:end -->

<!-- recorded-walkthrough:settings-update-check:start -->
<a id="walkthrough-settings-update-check"></a>
## Real update check and its failure state

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>source</code> | <code>The actual Release update source zhxmt-xm/Interceptor, without injected credentials</code> |
| <code>checkResult</code> | <code>failed</code> |
| <code>lastCheckedAt</code> | <code>2026-10-16T12:57:32.772Z</code> |
| <code>downloaded</code> | <code>false</code> |
| <code>installerOpened</code> | <code>false</code> |
| <code>boundary</code> | <code>Only the actual Check action/result is recorded; download and native installation require their own conditions</code> |

<a id="walkthrough-settings-update-check-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/settings-update-check/settings-update-check.mp4" poster="../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/settings-update-check/settings-update-check.vtt" default>
</video>

<a id="walkthrough-settings-update-check-01-settings"></a>
### 01 · Open Settings

[Video 00:00](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check.mp4#t=0.511) · [Back to the video](#walkthrough-settings-update-check-video)

![01 · Open Settings](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-01-settings.png)

<a id="walkthrough-settings-update-check-02-updates"></a>
### 02 · Open Updates and inspect the actual state

[Video 00:03](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check.mp4#t=3.592) · [Back to the video](#walkthrough-settings-update-check-video)

![02 · Open Updates and inspect the actual state](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-02-updates.png)

<a id="walkthrough-settings-update-check-03-check"></a>
### 03 · Actually click Check

[Video 00:06](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check.mp4#t=6.632) · [Back to the video](#walkthrough-settings-update-check-video)

![03 · Actually click Check](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-03-check.png)

<a id="walkthrough-settings-update-check-04-result"></a>
### 04 · Inspect the actual terminal result of this check

[Video 00:09](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check.mp4#t=9.669) · [Back to the video](#walkthrough-settings-update-check-video)

![04 · Inspect the actual terminal result of this check](../media/v0.1.1-alpha.1/settings-update-check/settings-update-check-04-result.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:settings-update-check:end -->
