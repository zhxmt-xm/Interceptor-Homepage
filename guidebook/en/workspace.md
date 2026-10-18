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

   ![Privacy retained after leaving and returning](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-04-return-settings.png)

8. Follow a feature-specific prompt and check its selected section, such as TLS passthrough.

   ![Opening Upstream from Capture's shortcut popover](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-21-upstream-link.png)

   See the separate [TLS passthrough round trip](settings.md#walkthrough-settings-tls-passthrough) for its deep link; opening a section directly is not the same operation.

**Expected result:** the header and main content follow navigation; navigation does not resend traffic.

**Notes:** Breakpoints live inside Capture. Entering Composer or Settings does not pause Capture. Background behavior still depends on Recording, proxy ownership and rules.

<a id="layout"></a>
## Resize panes, windows and scrollable content

**Steps**

1. Drag Capture's separators between filters, list and details to allocate space.

   ![Actually dragging the Capture detail divider](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-11-widen.png)

2. In Composer, adjust the Collection width and the request/response heights separately.

   ![Actually widening the Collection pane](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-33-collection-drag.png)

   ![Independently enlarging the Composer response pane](../media/v0.1.1-alpha.1/composer-inspection/composer-inspection-34-response-drag.png)

3. Use minimize, maximize or restore; resize the window from its edges when needed.

   ![Resizing the same actual App window smaller](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-17-resize.png)

   ![Restoring that window's original size](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-18-restore-size.png)

   These consecutive steps demonstrate resizing. The separate [window-controls recording](#walkthrough-workspace-window-controls) actually clicks Maximize and Restore and checks native window/work-area dimensions, then clicks Minimize. Its button image precedes the actual click; native state is checked separately. The test restores only the same window for continued inspection, not as recorded Dock interaction.

4. Use the wheel, trackpad or keyboard to read overflow. Continue scrolling the outer content after the body viewer reaches its boundary.

   ![Actual wheel input inside the body](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-12-inner-scroll.png)

   ![Continuing into the outer pane at the body boundary](../media/v0.1.1-alpha.1/capture-inspection/capture-inspection-15-scroll-chain.png)

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

   ![Opening Theme without changing the current selection](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-15-theme-menu.png)

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

   ![Following Configure from the unconfigured Agent panel](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-09-configure-link.png)

3. Otherwise, select or create a Chat. Switch workspaces normally when you need another tool.

   These reuse the separate `agent-management` with `Guide model one` and `Guide model two` already configured: create the second Chat, then select `Guide chat one`. This workspace's empty panel did not configure models automatically.

   ![Actually creating a second Chat with an existing session](../media/v0.1.1-alpha.1/agent-management/agent-management-09-new-chat.png)

   ![Actually selecting Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-11-switch-chat.png)

   ![Switching to Rules with Agent still open](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-11-rules.png)

   ![Continuing to Composer while retaining Agent](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-11-composer.png)

4. Close the panel using the Agent toggle or its own Close action.

   ![Actually closing the panel while the App remains running](../media/v0.1.1-alpha.1/workspace/workspace-11-close-panel.png)

   ![Closing Agent through the Header control](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-12-header-close.png)

   ![Reopening and using the panel's own Close](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-14-panel-close.png)

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

   Actual Close and exit recovery are checked outside the recording through real operations and state evidence. A pre-close picture is not a process-exit image. Other exit branches, such as busy refusal, still need their own scenarios; the desktop or a process manager is not recorded to fill the gap.

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

**Scope:** this segment checks Collection name/URL, Privacy and temporary Capture. A complete representative request now has paired [saving](composer.md#walkthrough-composer-persistence-save) and [actual restart](composer.md#walkthrough-composer-persistence-restart) recordings covering three folder levels, method/protocol, Header values and enabled states, Query, JSON and public Auth fields, without refilling or automatic Send. See [Agent restart](agent.md#walkthrough-agent-session-restart) for history. No single clip exhausts every preference or Body/Auth combination.

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

   Finish or cancel each window you opened. [Agent](agent.md#walkthrough-agent-tool-lifecycle-11-native-cancel-panel) and [MCP](mcp.md#walkthrough-mcp-tool-lifecycle-11-native-panel) show actual Save cancellation and subsequent saving, not a claim that every current window was inspected for you.

4. Close the App normally. If a busy operation prevents quitting, wait for it and close again.

   The [preceding section](#saved-data) now records a real driver-executed Close and actual restart. This image precedes closing, not the Close click or completed system recovery.

   ![Image before the actual Close occurs](../media/v0.1.1-alpha.1/workspace-close/workspace-close-06-before-close.png)

   **Recording boundary:** [shutdown with mixed waits](breakpoints.md#walkthrough-breakpoints-mixed-queues) actually closes normally while HTTP and WS items are pending, then verifies client cancellation and no origin forwarding. Native file cancellation is in [Collection Tools](composer.md#walkthrough-composer-file-tools). A pre-close picture is still not an exited-process image; shutdown and host recovery have separate evidence. The guide does not manufacture Core crashes or record the desktop/process manager.

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

<!-- recorded-walkthrough:workspace-navigation:start -->
<a id="walkthrough-workspace-navigation"></a>
## Recorded walkthrough: retained Settings, Agent deep links, panel navigation and window resizing

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>savedSection</code> | <code>Privacy</code> |
| <code>configureTarget</code> | <code>Settings / Agent</code> |
| <code>shortcutTarget</code> | <code>Settings / Upstream</code> |
| <code>originalSize</code> | <code>1600x900</code> |
| <code>smallerSize</code> | <code>1280x800</code> |
| <code>initialTheme</code> | <code>light</code> |
| <code>appLanguage</code> | <code>zh-CN</code> |
| <code>languageChanged</code> | <code>false</code> |
| <code>requestPath</code> | <code>/guide/navigation/ready</code> |

<a id="walkthrough-workspace-navigation-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4" poster="../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.vtt" default>
</video>

<a id="walkthrough-workspace-navigation-01-settings"></a>
### 01 · Open Settings

[Video 00:00](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=0.486) · [Back to the video](#walkthrough-workspace-navigation-video)

![01 · Open Settings](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-01-settings.png)

<a id="walkthrough-workspace-navigation-02-privacy"></a>
### 02 · Open the Privacy section

[Video 00:03](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=3.411) · [Back to the video](#walkthrough-workspace-navigation-video)

![02 · Open the Privacy section](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-02-privacy.png)

<a id="walkthrough-workspace-navigation-03-composer"></a>
### 03 · Leave Settings for Composer

[Video 00:06](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=6.343) · [Back to the video](#walkthrough-workspace-navigation-video)

![03 · Leave Settings for Composer](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-03-composer.png)

<a id="walkthrough-workspace-navigation-04-return-settings"></a>
### 04 · Return to Settings with Privacy retained

[Video 00:09](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=9.249) · [Back to the video](#walkthrough-workspace-navigation-video)

![04 · Return to Settings with Privacy retained](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-04-return-settings.png)

<a id="walkthrough-workspace-navigation-05-diagnostics"></a>
### 05 · Switch to Diagnostics

[Video 00:12](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=12.169) · [Back to the video](#walkthrough-workspace-navigation-video)

![05 · Switch to Diagnostics](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-05-diagnostics.png)

<a id="walkthrough-workspace-navigation-06-retained-again"></a>
### 06 · Return again to the retained Privacy section

[Video 00:15](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=15.151) · [Back to the video](#walkthrough-workspace-navigation-video)

![06 · Return again to the retained Privacy section](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-06-retained-again.png)

<a id="walkthrough-workspace-navigation-07-capture"></a>
### 07 · Return to Capture

[Video 00:18](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=18.100) · [Back to the video](#walkthrough-workspace-navigation-video)

![07 · Return to Capture](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-07-capture.png)

<a id="walkthrough-workspace-navigation-08-agent-empty"></a>
### 08 · Open the unconfigured Agent panel

[Video 00:21](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=21.016) · [Back to the video](#walkthrough-workspace-navigation-video)

![08 · Open the unconfigured Agent panel](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-08-agent-empty.png)

<a id="walkthrough-workspace-navigation-09-configure-link"></a>
### 09 · Follow Configure from the empty state

[Video 00:23](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=23.935) · [Back to the video](#walkthrough-workspace-navigation-video)

![09 · Follow Configure from the empty state](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-09-configure-link.png)

<a id="walkthrough-workspace-navigation-10-agent-open"></a>
### 10 · Return to Capture with Agent open

[Video 00:27](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=27.087) · [Back to the video](#walkthrough-workspace-navigation-video)

![10 · Return to Capture with Agent open](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-10-agent-open.png)

<a id="walkthrough-workspace-navigation-11-rules"></a>
### 11 · Open rules while retaining Agent

[Video 00:30](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=30.076) · [Back to the video](#walkthrough-workspace-navigation-video)

![11 · Open rules while retaining Agent](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-11-rules.png)

<a id="walkthrough-workspace-navigation-11-composer"></a>
### 12 · Open composer while retaining Agent

[Video 00:33](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=33.006) · [Back to the video](#walkthrough-workspace-navigation-video)

![12 · Open composer while retaining Agent](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-11-composer.png)

<a id="walkthrough-workspace-navigation-11-diagnostics"></a>
### 13 · Open diagnostics while retaining Agent

[Video 00:35](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=35.927) · [Back to the video](#walkthrough-workspace-navigation-video)

![13 · Open diagnostics while retaining Agent](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-11-diagnostics.png)

<a id="walkthrough-workspace-navigation-12-header-close"></a>
### 14 · Close Agent with the Header control

[Video 00:38](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=38.938) · [Back to the video](#walkthrough-workspace-navigation-video)

![14 · Close Agent with the Header control](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-12-header-close.png)

<a id="walkthrough-workspace-navigation-13-header-open"></a>
### 15 · Reopen with the Header control

[Video 00:41](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=41.903) · [Back to the video](#walkthrough-workspace-navigation-video)

![15 · Reopen with the Header control](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-13-header-open.png)

<a id="walkthrough-workspace-navigation-14-panel-close"></a>
### 16 · Use the panel’s own close button

[Video 00:44](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=44.901) · [Back to the video](#walkthrough-workspace-navigation-video)

![16 · Use the panel’s own close button](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-14-panel-close.png)

<a id="walkthrough-workspace-navigation-15-theme-menu"></a>
### 17 · Open Theme without changing the selection

[Video 00:47](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=47.866) · [Back to the video](#walkthrough-workspace-navigation-video)

![17 · Open Theme without changing the selection](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-15-theme-menu.png)

<a id="walkthrough-workspace-navigation-16-dismiss-theme"></a>
### 18 · Dismiss with Escape and retain the theme

[Video 00:50](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=50.941) · [Back to the video](#walkthrough-workspace-navigation-video)

![18 · Dismiss with Escape and retain the theme](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-16-dismiss-theme.png)

<a id="walkthrough-workspace-navigation-17-resize"></a>
### 19 · Resize the actual App window smaller

[Video 00:54](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=54.219) · [Back to the video](#walkthrough-workspace-navigation-video)

![19 · Resize the actual App window smaller](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-17-resize.png)

<a id="walkthrough-workspace-navigation-18-restore-size"></a>
### 20 · Restore the original window size

[Video 00:57](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=57.422) · [Back to the video](#walkthrough-workspace-navigation-video)

![20 · Restore the original window size](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-18-restore-size.png)

<a id="walkthrough-workspace-navigation-19-capture"></a>
### 21 · Return to Capture for its shortcut

[Video 01:00](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=60.605) · [Back to the video](#walkthrough-workspace-navigation-video)

![21 · Return to Capture for its shortcut](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-19-capture.png)

<a id="walkthrough-workspace-navigation-20-upstream-shortcut"></a>
### 22 · Open the statusbar Upstream shortcut

[Video 01:03](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=63.545) · [Back to the video](#walkthrough-workspace-navigation-video)

![22 · Open the statusbar Upstream shortcut](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-20-upstream-shortcut.png)

<a id="walkthrough-workspace-navigation-21-upstream-link"></a>
### 23 · Open Upstream settings from the popover

[Video 01:06](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=66.505) · [Back to the video](#walkthrough-workspace-navigation-video)

![23 · Open Upstream settings from the popover](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-21-upstream-link.png)

<a id="walkthrough-workspace-navigation-22-leave-deeplink"></a>
### 24 · Leave the deep-link destination

[Video 01:09](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=69.454) · [Back to the video](#walkthrough-workspace-navigation-video)

![24 · Leave the deep-link destination](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-22-leave-deeplink.png)

<a id="walkthrough-workspace-navigation-23-retained-deeplink"></a>
### 25 · Return to Settings with Upstream retained

[Video 01:12](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=72.368) · [Back to the video](#walkthrough-workspace-navigation-video)

![25 · Return to Settings with Upstream retained](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-23-retained-deeplink.png)

<a id="walkthrough-workspace-navigation-24-recording"></a>
### 26 · Return to Capture and confirm Recording

[Video 01:15](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=75.333) · [Back to the video](#walkthrough-workspace-navigation-video)

![26 · Return to Capture and confirm Recording](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-24-recording.png)

<a id="walkthrough-workspace-navigation-25-request"></a>
### 27 · Verify a request after navigation

[Video 01:18](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation.mp4#t=78.273) · [Back to the video](#walkthrough-workspace-navigation-video)

![27 · Verify a request after navigation](../media/v0.1.1-alpha.1/workspace-navigation/workspace-navigation-25-request.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:workspace-navigation:end -->

<!-- recorded-walkthrough:workspace-window-controls:start -->
<a id="walkthrough-workspace-window-controls"></a>
## Recorded walkthrough: native window maximize, restore and minimize

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>workspace</code> | <code>Settings &gt; Privacy</code> |
| <code>initialSize</code> | <code>1600x900</code> |
| <code>maximize</code> | <code>Actual product Maximize and Restore clicks</code> |
| <code>minimize</code> | <code>Actual product Minimize click; the button image precedes the click</code> |
| <code>restoreBoundary</code> | <code>Test-side accessibility restores the same owned window for continued verification; no Dock interaction is claimed</code> |
| <code>recordingScope</code> | <code>Only the App window; no display, desktop or other application capture</code> |

<a id="walkthrough-workspace-window-controls-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls.mp4" poster="../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls-01-normal.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls.vtt" default>
</video>

<a id="walkthrough-workspace-window-controls-01-normal"></a>
### 01 · Inspect the current normal window

[Video 00:00](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls.mp4#t=0.436) · [Back to the video](#walkthrough-workspace-window-controls-video)

![01 · Inspect the current normal window](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls-01-normal.png)

<a id="walkthrough-workspace-window-controls-02-maximize"></a>
### 02 · Click Maximize

[Video 00:03](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls.mp4#t=3.689) · [Back to the video](#walkthrough-workspace-window-controls-video)

![02 · Click Maximize](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls-02-maximize.png)

<a id="walkthrough-workspace-window-controls-03-restore"></a>
### 03 · Click again to restore the window

[Video 00:07](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls.mp4#t=7.592) · [Back to the video](#walkthrough-workspace-window-controls-video)

![03 · Click again to restore the window](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls-03-restore.png)

<a id="walkthrough-workspace-window-controls-04-minimize-control"></a>
### 04 · Inspect Minimize before actually clicking it

[Video 00:11](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls.mp4#t=11.531) · [Back to the video](#walkthrough-workspace-window-controls-video)

![04 · Inspect Minimize before actually clicking it](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls-04-minimize-control.png)

<a id="walkthrough-workspace-window-controls-05-returned-window"></a>
### 05 · Inspect the returned window without recording the Dock

[Video 00:16](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls.mp4#t=16.893) · [Back to the video](#walkthrough-workspace-window-controls-video)

![05 · Inspect the returned window without recording the Dock](../media/v0.1.1-alpha.1/workspace-window-controls/workspace-window-controls-05-returned-window.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:workspace-window-controls:end -->
