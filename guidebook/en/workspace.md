# Workspace and everyday controls

> Draft for `v0.1.1-alpha.1`; navigation, four themes, the language menu and panel have real images. Layout, language switching and exit still have gaps; neither this chapter nor item9 is complete. This is the desktop App, not the website layout/System theme.

[Guide directory](../README.en.md) · [Getting started](getting-started.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>initialTheme</code> | <code>light</code> |
| <code>appLanguage</code> | <code>zh-CN</code> |
| <code>languageChanged</code> | <code>false</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/workspace/workspace.mp4" poster="../media/v0.1.1-alpha.1/workspace/workspace-01-sidebar.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/workspace/workspace.vtt" default>
</video>

<a id="walkthrough-01-sidebar"></a>
### 01 · Expand sidebar labels

[Video 00:00](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=0.396) · [Back to the video](#walkthrough-video)

![01 · Expand sidebar labels](../media/v0.1.1-alpha.1/workspace/workspace-01-sidebar.png)

<a id="walkthrough-02-capture"></a>
### 02 · Open Capture

[Video 00:03](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=3.229) · [Back to the video](#walkthrough-video)

![02 · Open Capture](../media/v0.1.1-alpha.1/workspace/workspace-02-capture.png)

<a id="walkthrough-03-rules"></a>
### 03 · Open Rules

[Video 00:06](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=6.078) · [Back to the video](#walkthrough-video)

![03 · Open Rules](../media/v0.1.1-alpha.1/workspace/workspace-03-rules.png)

<a id="walkthrough-04-composer"></a>
### 04 · Open Composer

[Video 00:08](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=8.929) · [Back to the video](#walkthrough-video)

![04 · Open Composer](../media/v0.1.1-alpha.1/workspace/workspace-04-composer.png)

<a id="walkthrough-05-diagnostics"></a>
### 05 · Open Diagnostics

[Video 00:11](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=11.778) · [Back to the video](#walkthrough-video)

![05 · Open Diagnostics](../media/v0.1.1-alpha.1/workspace/workspace-05-diagnostics.png)

<a id="walkthrough-06-settings"></a>
### 06 · Open Settings

[Video 00:14](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=14.678) · [Back to the video](#walkthrough-video)

![06 · Open Settings](../media/v0.1.1-alpha.1/workspace/workspace-06-settings.png)

<a id="walkthrough-07-theme-warm"></a>
### 07 · Select the warm theme

[Video 00:17](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=17.578) · [Back to the video](#walkthrough-video)

![07 · Select the warm theme](../media/v0.1.1-alpha.1/workspace/workspace-07-theme-warm.png)

<a id="walkthrough-07-theme-light"></a>
### 08 · Select the light theme

[Video 00:20](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=20.828) · [Back to the video](#walkthrough-video)

![08 · Select the light theme](../media/v0.1.1-alpha.1/workspace/workspace-07-theme-light.png)

<a id="walkthrough-07-theme-ember"></a>
### 09 · Select the ember theme

[Video 00:24](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=24.078) · [Back to the video](#walkthrough-video)

![09 · Select the ember theme](../media/v0.1.1-alpha.1/workspace/workspace-07-theme-ember.png)

<a id="walkthrough-07-theme-dark"></a>
### 10 · Select the dark theme

[Video 00:27](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=27.378) · [Back to the video](#walkthrough-video)

![10 · Select the dark theme](../media/v0.1.1-alpha.1/workspace/workspace-07-theme-dark.png)

<a id="walkthrough-08-restore-theme"></a>
### 11 · Restore the original theme

[Video 00:30](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=30.578) · [Back to the video](#walkthrough-video)

![11 · Restore the original theme](../media/v0.1.1-alpha.1/workspace/workspace-08-restore-theme.png)

<a id="walkthrough-09-language-menu"></a>
### 12 · Inspect languages without changing the current language

[Video 00:33](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=33.829) · [Back to the video](#walkthrough-video)

![12 · Inspect languages without changing the current language](../media/v0.1.1-alpha.1/workspace/workspace-09-language-menu.png)

<a id="walkthrough-10-agent-panel"></a>
### 13 · Open the optional Agent panel

[Video 00:36](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=36.792) · [Back to the video](#walkthrough-video)

![13 · Open the optional Agent panel](../media/v0.1.1-alpha.1/workspace/workspace-10-agent-panel.png)

<a id="walkthrough-11-close-panel"></a>
### 14 · Close the panel, not the App

[Video 00:39](../media/v0.1.1-alpha.1/workspace/workspace.mp4#t=39.678) · [Back to the video](#walkthrough-video)

![14 · Close the panel, not the App](../media/v0.1.1-alpha.1/workspace/workspace-11-close-panel.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="navigation"></a>
## Find the tool you need

**Purpose and prerequisites:** startup has finished. Choose the workspace for your task from the left navigation.

| Entry | Purpose |
| --- | --- |
| Capture | Inspect proxied requests, bodies and messages; handle waiting breakpoints |
| Rules & Map | Change subsequent matching proxy traffic |
| Composer | Send independent requests and manage collections |
| Diagnostics | Query operations and failures |
| Settings | Manage proxies, certificates, preferences, models, MCP and updates |
| Agent button near the window controls | Open or close the AI panel beside the workspace |

**Steps**

1. Expand the sidebar using the menu button at the left of the window header.

   ![Actually expanded navigation labels](../media/v0.1.1-alpha.1/workspace/workspace-01-sidebar.png)

2. Select Capture.

   ![Actual Capture workspace](../media/v0.1.1-alpha.1/workspace/workspace-02-capture.png)

3. Select Rules & Map.

   ![Actual Rules workspace](../media/v0.1.1-alpha.1/workspace/workspace-03-rules.png)

4. Select Composer.

   ![Actual Composer workspace](../media/v0.1.1-alpha.1/workspace/workspace-04-composer.png)

5. Select Diagnostics.

   ![Actual Diagnostics workspace](../media/v0.1.1-alpha.1/workspace/workspace-05-diagnostics.png)

6. Select Settings and the section you need.

   ![Actually entering Settings](../media/v0.1.1-alpha.1/workspace/workspace-06-settings.png)

7. Leave Settings and return to inspect the retained last section.

   **Image pending:** entering Settings is recorded, but leaving/returning to verify the section is not.

8. Follow a feature-specific prompt and check its selected section, such as TLS passthrough.

   **Image pending:** directly opening a section is not following a settings deep link; existing images do not cover that path.

**Expected result:** the header and main content follow navigation; navigation does not resend traffic.

**Notes:** Breakpoints live inside Capture. Entering Composer or Settings does not pause Capture. Background behavior still depends on Recording, proxy ownership and rules.

<a id="layout"></a>
## Resize panes, windows and scrollable content

**Steps**

1. Drag Capture's separators between filters, list and details to allocate space.

   **Image pending:** divider-drag before/after states are missing. A static Capture overview is not a substitute.

2. In Composer, adjust the Collection width and the request/response heights separately.

   **Image pending:** Composer recordings edit request fields, not these dividers.

3. Use minimize, maximize or restore; resize the window from its edges when needed.

   **Image pending:** window resizing/minimizing/restoring was not recorded. Different chapter screenshots are not one resize sequence.

4. Use the wheel, trackpad or keyboard to read overflow. Continue scrolling the outer content after the body viewer reaches its boundary.

   **Image pending:** actual nested scrolling was not recorded. Static fullscreen does not demonstrate scroll handoff.

5. Use fullscreen for a long body, then return to the workspace.

   These accurately reuse Capture's orders JSON fullscreen/Escape sequence. They demonstrate the controls, not oversized-body scrolling.

   ![Actually opening Capture body fullscreen](../media/v0.1.1-alpha.1/capture/capture-08a-fullscreen.png)

   ![Returning to Capture details with Escape](../media/v0.1.1-alpha.1/capture/capture-08b-close-fullscreen.png)

**Expected result:** panes fit the available area without silently cutting off readable content.

**Notes:** minimizing is not quitting. Recording and proxy forwarding can continue. Fullscreen changes the viewing area, not byte-preview limits or previously missing data.

<a id="appearance"></a>
## Choose a theme and language

**Steps**

1. Open Theme at the bottom of the sidebar.

   **Image pending:** the open menu before choosing a theme has no separate intermediate image. The following states are actual selections.

2. First select `warm`.

   ![Actual App after selecting warm](../media/v0.1.1-alpha.1/workspace/workspace-07-theme-warm.png)

3. Select `light`.

   ![Actual light theme](../media/v0.1.1-alpha.1/workspace/workspace-07-theme-light.png)

4. Select `ember`.

   ![Actual ember theme](../media/v0.1.1-alpha.1/workspace/workspace-07-theme-ember.png)

5. Select `dark`.

   ![Actual dark theme](../media/v0.1.1-alpha.1/workspace/workspace-07-theme-dark.png)

6. Restore the original `light`, not an App System theme.

   ![Restoring the original light theme](../media/v0.1.1-alpha.1/workspace/workspace-08-restore-theme.png)

7. Open Language to inspect available choices; this recording retains `zh-CN`.

   ![Actual language menu without switching](../media/v0.1.1-alpha.1/workspace/workspace-09-language-menu.png)

8. Select a different supported language when needed and inspect the interface change.

   **Image pending:** `languageChanged=false` in this recording. The menu does not prove a switch to English or another language.

9. Restart normally and inspect retained language/theme preferences.

   The new `workspace-restart` recording confirms `zh-CN` across two App starts without switching language for recording:

   ![Confirming language was not changed after the real restart](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-05-language.png)

   **Image pending:** this does not change language/theme before restarting, so it is not a complete changed-preference round trip.

**Expected result:** theme changes colors, not behavior. Language changes UI text, not URLs, protocol values, request content or Tool names.

**Notes:** the App has four themes and 15 UI languages. This does not imply 15 translated guides. The website's System/Light/Dark control is a separate preference.

<a id="agent-panel"></a>
## Use Agent beside your workspace

**Steps**

1. Click the Agent button near the window controls.

   ![Actually opening Agent beside the workspace](../media/v0.1.1-alpha.1/workspace/workspace-10-agent-panel.png)

2. If no model is configured, follow the configuration entry to Settings > Agent.

   **Image pending:** sidebar navigation to Agent settings is recorded, but the panel's unconfigured-state link is not.

3. Otherwise, select or create a Chat. Switch workspaces normally when you need another tool.

   These reuse the separate `agent-management` with `Guide model one` and `Guide model two` already configured: create the second Chat, then select `Guide chat one`. This workspace's empty panel did not configure models automatically.

   ![Actually creating a second Chat with an existing session](../media/v0.1.1-alpha.1/agent-management/agent-management-09-new-chat.png)

   ![Actually selecting Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-11-switch-chat.png)

   **Image pending:** navigating workspaces with the panel open is still unrecorded. Chat selection is not workspace navigation.

4. Close the panel using the Agent toggle or its own Close action.

   ![Actually closing the panel while the App remains running](../media/v0.1.1-alpha.1/workspace/workspace-11-close-panel.png)

   **Image pending:** this covers the recorded closing action, not separate demonstrations of both entry points.

**Expected result:** the main workspace narrows beside the panel rather than being covered. Workspace/settings navigation does not close Agent implicitly.

**Notes:** merely opening the panel does not attach the selected request to the model. See [Agent privacy](agent.md#privacy).

<a id="saved-data"></a>
## Know what is retained

| Data | Retention rule |
| --- | --- |
| Current Capture records and bodies | Temporary; Core shutdown/restart releases them. Export important data |
| Rules | Apply edits; confirming a file import saves the appended result directly |
| Composer Collection | Edits save automatically; Recent sends is separate in-memory data |
| Proxy, TLS and preferences | Saved through their own controls; Capture Clear does not erase them |
| Agent configuration and chats | Stored locally, but model calls and Tool results can still leave the machine |
| Exported files | Saved where you choose; Capture Clear does not delete them |

**Actual saving and restart check**

Read `workspace-close` → `workspace-restart` in their real order: two App generations using the same profile. The request is `Guide retained request`, URL `http://127.0.0.1:63009/guide/restart/request`; `63009` is this recording's dynamic service port.

1. Open Composer.

   ![Actually opening Composer before closing](../media/v0.1.1-alpha.1/workspace-close/workspace-close-01-composer.png)

2. Enter that test URL and wait for automatic saving.

   ![Actually saving this example URL](../media/v0.1.1-alpha.1/workspace-close/workspace-close-02-url.png)

3. Name the request `Guide retained request`.

   ![Actual request name before closing](../media/v0.1.1-alpha.1/workspace-close/workspace-close-03-name.png)

4. Temporarily set that profile's Privacy `maskCookies` to `false` to inspect persistence. No personal data is exported/shared here; masking is restored afterward.

   ![Actually setting maskCookies=false before closing](../media/v0.1.1-alpha.1/workspace-close/workspace-close-04-privacy.png)

5. Generate a temporary Capture demonstration record through the proxy, separate from the saved Collection definition.

   ![Actual temporary Capture record before closing](../media/v0.1.1-alpha.1/workspace-close/workspace-close-05-capture.png)

6. After confirming saving, Close normally. The driver executed the real Close in this run. This image precedes the action; it is neither the click nor the desktop after exit.

   ![Saved state before the actual Close](../media/v0.1.1-alpha.1/workspace-close/workspace-close-06-before-close.png)

   **Image pending:** the Close click, busy-operation refusal and separate proxy/process-cleanup views are absent. A real Close does not mean all those branches are illustrated.

7. Start the same profile again, find `Guide retained request` in the new App generation's Collection and inspect the saved URL.

   ![Collection request retained after an actual restart](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-01-collection.png)

8. Open Privacy and verify `maskCookies` remains `false`, rather than inferring persistence from an old window staying open.

   ![Privacy preference retained after an actual restart](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-02-privacy.png)

9. Restore the Cookie-masking default rather than leaving it disabled for the demonstration.

   ![Actually restoring the masking default](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-03-restore-privacy.png)

10. Return to Capture and confirm the previous generation's temporary records are gone, unlike the retained Collection definition.

    ![Old Capture records absent after the actual restart](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-04-temporary-capture.png)

11. Confirm the language is still `zh-CN`; recording did not change it.

    ![Original language actually retained after restarting](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-05-language.png)

**Scope:** this checks the Collection request name/URL, Privacy and temporary Capture, not Agent history or every preference across restart. Deeper Collection folders, ordering, preview cancellation and deletion remain blocked by the macOS lock screen; that supplementary flow did not launch the App. These images cannot substitute for it.

**Before quitting:** finish exports, Apply or pending saves. Visible editor content alone does not prove it has been persisted.

Do not assume collections or chats synchronize between OS accounts or separate App data environments. The current OS user's shared CA and proxy-recovery information have separate lifetimes; deleting an App profile is not a safe way to reset them.

<a id="close"></a>
## Finish a session

1. Resolve or deliberately abandon waiting breakpoints so clients are not left waiting unnoticed.

   These separately reuse one unchanged continuation and POST-C/PUT-C batch continuation in the new HTTP queue. They are not a global status for every current connection; complete cleanup across mixed queues remains image pending.

   ![Actually continuing one breakpoint unchanged](../media/v0.1.1-alpha.1/breakpoints/breakpoints-17-unmodified.png)

   ![Actually resolving this HTTP queue in a batch](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-24-continue-queue.png)

2. Export important traffic and wait for file operations.

   This reuses Transfer's completed `guide-recording.iarchive`, not automatic persistence of the entire workspace.

   ![Actual completed archive save](../media/v0.1.1-alpha.1/transfer/transfer-13-archive-complete.png)

3. Check for native authorization or file windows awaiting a decision.

   **Image pending:** there is no separate pre-quit overview of all native windows. A Save panel image does not prove every window was handled.

4. Close the App normally. If a busy operation prevents quitting, wait for it and close again.

   The [preceding section](#saved-data) now records a real driver-executed Close and actual restart. This image precedes closing, not the Close click or completed system recovery.

   ![Image before the actual Close occurs](../media/v0.1.1-alpha.1/workspace-close/workspace-close-06-before-close.png)

   **Image pending:** the Close click, busy refusal, native-window waits at exit and proxy/process-cleanup images are still missing. Do not call the real Close unexecuted or treat a pre-close image as complete shutdown acceptance.

**Expected result:** proxy recovery and process shutdown finish. Minimizing or force-killing is not normal shutdown.

**Notes:** quitting does not uninstall a CA, delete exports or overwrite another application's new proxy settings. See [recovery](troubleshooting.md#proxy-recovery).

<!-- recorded-walkthrough:workspace-close:start -->
<a id="walkthrough-workspace-close"></a>
## Recorded walkthrough: save before normal Close

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>requestName</code> | <code>Guide retained request</code> |
| <code>url</code> | <code>http://127.0.0.1:63009/guide/restart/request</code> |
| <code>maskCookies</code> | <code>false</code> |
| <code>closeImage</code> | <code>before the actual Close action; shutdown is verified by the driver</code> |

<a id="walkthrough-workspace-close-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/workspace-close/workspace-close.mp4" poster="../media/v0.1.1-alpha.1/workspace-close/workspace-close-01-composer.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/workspace-close/workspace-close.vtt" default>
</video>

<a id="walkthrough-workspace-close-01-composer"></a>
### 01 · Open Composer

[Video 00:00](../media/v0.1.1-alpha.1/workspace-close/workspace-close.mp4#t=0.346) · [Back to the video](#walkthrough-workspace-close-video)

![01 · Open Composer](../media/v0.1.1-alpha.1/workspace-close/workspace-close-01-composer.png)

<a id="walkthrough-workspace-close-02-url"></a>
### 02 · Save the example URL

[Video 00:03](../media/v0.1.1-alpha.1/workspace-close/workspace-close.mp4#t=3.329) · [Back to the video](#walkthrough-workspace-close-video)

![02 · Save the example URL](../media/v0.1.1-alpha.1/workspace-close/workspace-close-02-url.png)

<a id="walkthrough-workspace-close-03-name"></a>
### 03 · Name the retained request

[Video 00:06](../media/v0.1.1-alpha.1/workspace-close/workspace-close.mp4#t=6.177) · [Back to the video](#walkthrough-workspace-close-video)

![03 · Name the retained request](../media/v0.1.1-alpha.1/workspace-close/workspace-close-03-name.png)

<a id="walkthrough-workspace-close-04-privacy"></a>
### 04 · Set this profile’s export preference

[Video 00:10](../media/v0.1.1-alpha.1/workspace-close/workspace-close.mp4#t=10.277) · [Back to the video](#walkthrough-workspace-close-video)

![04 · Set this profile’s export preference](../media/v0.1.1-alpha.1/workspace-close/workspace-close-04-privacy.png)

<a id="walkthrough-workspace-close-05-capture"></a>
### 05 · Produce a temporary Capture record

[Video 00:13](../media/v0.1.1-alpha.1/workspace-close/workspace-close.mp4#t=13.284) · [Back to the video](#walkthrough-workspace-close-video)

![05 · Produce a temporary Capture record](../media/v0.1.1-alpha.1/workspace-close/workspace-close-05-capture.png)

<a id="walkthrough-workspace-close-06-before-close"></a>
### 06 · Save first, then close normally

[Video 00:16](../media/v0.1.1-alpha.1/workspace-close/workspace-close.mp4#t=16.276) · [Back to the video](#walkthrough-workspace-close-video)

![06 · Save first, then close normally](../media/v0.1.1-alpha.1/workspace-close/workspace-close-06-before-close.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:workspace-close:end -->

<!-- recorded-walkthrough:workspace-restart:start -->
<a id="walkthrough-workspace-restart"></a>
## Recorded walkthrough: persistent and temporary data after reopening

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>requestName</code> | <code>Guide retained request</code> |
| <code>url</code> | <code>http://127.0.0.1:63009/guide/restart/request</code> |
| <code>persisted</code> | <code>Collection and privacy preference</code> |
| <code>temporary</code> | <code>Capture records</code> |
| <code>appLanguage</code> | <code>zh-CN</code> |

<a id="walkthrough-workspace-restart-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/workspace-restart/workspace-restart.mp4" poster="../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-01-collection.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/workspace-restart/workspace-restart.vtt" default>
</video>

<a id="walkthrough-workspace-restart-01-collection"></a>
### 01 · Find the saved request after reopening

[Video 00:00](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart.mp4#t=0.365) · [Back to the video](#walkthrough-workspace-restart-video)

![01 · Find the saved request after reopening](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-01-collection.png)

<a id="walkthrough-workspace-restart-02-privacy"></a>
### 02 · Verify the persisted preference

[Video 00:03](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart.mp4#t=3.395) · [Back to the video](#walkthrough-workspace-restart-video)

![02 · Verify the persisted preference](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-02-privacy.png)

<a id="walkthrough-workspace-restart-03-restore-privacy"></a>
### 03 · Restore the masking default

[Video 00:06](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart.mp4#t=6.305) · [Back to the video](#walkthrough-workspace-restart-video)

![03 · Restore the masking default](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-03-restore-privacy.png)

<a id="walkthrough-workspace-restart-04-temporary-capture"></a>
### 04 · Verify old Capture records are temporary

[Video 00:09](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart.mp4#t=9.146) · [Back to the video](#walkthrough-workspace-restart-video)

![04 · Verify old Capture records are temporary](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-04-temporary-capture.png)

<a id="walkthrough-workspace-restart-05-language"></a>
### 05 · Confirm recording did not change language

[Video 00:12](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart.mp4#t=12.103) · [Back to the video](#walkthrough-workspace-restart-video)

![05 · Confirm recording did not change language](../media/v0.1.1-alpha.1/workspace-restart/workspace-restart-05-language.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:workspace-restart:end -->
