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

The recording only demonstrates safe drafts: `exampleApplied=false`. `127.0.0.1:7890` was not verified as a running upstream and `https://proxy.example.test/proxy.pac` is not a public PAC. Do not Apply merely to match a screenshot.

1. Open Upstream proxy in Settings and inspect the current route. Opening Capture's lower-right shortcut remains image pending.

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

   **Image pending / blocked:** neither draft was applied. Real upstream round trips, System/Direct switches and WPAD discovery need their own environments and recordings.

7. Send a new request and inspect client/destination results; reconnect long-lived connections as needed.

   **Image pending:** no request using those applied routes was recorded. Ordinary Capture success does not prove an upstream route.

8. Cancel/Discard unwanted drafts; the shortcut's Open in Settings continues the same draft there.

   **Image pending:** earlier images cover Settings Discard only, not shortcut Cancel or Open in Settings draft handoff.

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

1. Open TLS passthrough and inspect existing entries.

   ![Actually opening TLS passthrough](../media/v0.1.1-alpha.1/settings/settings-09-passthrough.png)

2. Add the exact required host; expand to a controlled wildcard only when justified.

   **Image pending:** this was read-only; neither an exact host nor a wildcard was added.

3. Save and reconnect the client.

   **Image pending:** list editing, saving and reconnection were not recorded.

4. Verify TLS tunnel metadata rather than expecting decrypted bodies.

   **Image pending:** recorded plaintext HTTP/2 is not a passthrough tunnel.

5. Remove unnecessary entries, save and test new connections.

   **Image pending:** no new entry was added, and removal/new-connection recovery was not recorded.

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

**Image pending:** Clear refusal and waiting for running/cancelling file-task cleanup are not part of this ordinary-clear recording.

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

    **Image pending:** only Cookie defaults changed here. The other two switches, changes while drafts/jobs are already open/running, and existing-file branches were not recorded.

12. Review URLs, bodies, custom sensitive fields and the final file before sharing.

    **Image pending:** this export was cancelled, without a field-by-field final-file privacy review. Switch states do not prove universal redaction.

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

   **Image pending / blocked:** only the page was inspected, without a separate Check recording. Anonymous access to the private source remains limited.

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
