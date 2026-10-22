# Workspace and everyday controls

[Guide directory](../README.en.md) · [Getting started](getting-started.md)

<a id="navigation"></a>
## Find the tool you need

<a id="walkthrough-workspace-navigation"></a>
After the App is ready, use the left navigation to open the tool you need. Breakpoints are handled within Capture, not in a separate workspace.

1. <a id="walkthrough"></a><a id="walkthrough-01-sidebar"></a>Click the menu button to the left of the window title to expand the sidebar labels. Click again to collapse it without leaving the current page.

   ![Find the tool you need · 1](../media/v0.1.1-alpha.1/workspace-navigation-english/step-019.png)

2. <a id="walkthrough-02-capture"></a>Click Capture in box 1 to inspect proxied traffic. This example filters its test path, so the list may be empty; an empty list does not mean the proxy failed to start.

   ![Find the tool you need · 2](../media/v0.1.1-alpha.1/workspace-navigation-english/step-013.annotated.png)

3. <a id="walkthrough-03-rules"></a>Click Rules & Map in box 1 to manage rules for subsequent traffic. Rules do not rewrite requests that have already completed.

   ![Find the tool you need · 3](../media/v0.1.1-alpha.1/workspace-navigation-english/step-015.annotated.png)

4. <a id="walkthrough-04-composer"></a>Click Composer in box 1 to build requests and manage Collection. Composer sends directly; its requests are not automatically captured or processed by proxy Rules.

   ![Find the tool you need · 4](../media/v0.1.1-alpha.1/workspace-navigation-english/step-016.annotated.png)

5. <a id="walkthrough-05-diagnostics"></a>Click Diagnostics in box 1 to inspect App operation records by time and category. It helps diagnose App operations rather than acting as a complete network-frame analyzer.

   ![Find the tool you need · 5](../media/v0.1.1-alpha.1/workspace-navigation-english/step-017.annotated.png)

6. <a id="walkthrough-06-settings"></a><a id="walkthrough-workspace-navigation-01-settings"></a><a id="walkthrough-workspace-navigation-02-privacy"></a><a id="walkthrough-workspace-navigation-03-composer"></a><a id="walkthrough-workspace-navigation-04-return-settings"></a><a id="walkthrough-workspace-navigation-19-capture"></a><a id="walkthrough-workspace-navigation-20-upstream-shortcut"></a><a id="walkthrough-workspace-navigation-21-upstream-link"></a><a id="walkthrough-workspace-navigation-22-leave-deeplink"></a><a id="walkthrough-workspace-navigation-23-retained-deeplink"></a><a id="walkthrough-workspace-navigation-24-recording"></a><a id="walkthrough-workspace-navigation-25-request"></a>Open Settings and choose a section such as Certificates, App Containers or TLS passthrough. Returning normally preserves the last section; a feature-specific settings link opens its designated section.

   ![Find the tool you need · 6](../media/v0.1.1-alpha.1/workspace-navigation-english/step-006.png)

   ![Find the tool you need · 6](../media/v0.1.1-alpha.1/workspace-navigation-english/step-014.png)

   ![Find the tool you need · 6](../media/v0.1.1-alpha.1/workspace-navigation-english/step-018.png)

Navigation itself neither sends requests nor pauses Recording. Proxy, rule and recording states remain independent.


<a id="layout"></a>
## Resize panes, windows and scrollable content

1. Drag Capture's separators between filters, list and details to allocate space. Box 1 marks the divider between the list and Inspector. Drag left to widen the details, then right to restore space when needed; the selected request and Query contents remain.

   ![Dragging the divider left to widen the Inspector](../media/v0.1.1-alpha.1/capture-query-layout-english/step-010.annotated.png)

   ![Restoring Inspector width while retaining the selected request](../media/v0.1.1-alpha.1/capture-query-layout-english/step-011.annotated.png)

2. In Composer, adjust the Collection width and the request/response heights separately.

   ![Widening Collection while retaining the selected request](../media/v0.1.1-alpha.1/composer-tree-workflow-en/step-016.png)

   ![Enlarging the response pane while retaining its view mode](../media/v0.1.1-alpha.1/composer-response-workflow-en/step-029.png)

3. <a id="walkthrough-workspace-navigation-16-dismiss-theme"></a><a id="walkthrough-workspace-navigation-17-resize"></a><a id="walkthrough-workspace-navigation-18-restore-size"></a>Drag a window edge or corner for a custom size; panes respond to the available space. For the header’s maximize, restore and minimize controls, follow the next section’s [illustrated window operations](#walkthrough-workspace-window-controls). Minimizing does not stop the proxy.

4. Use the wheel, trackpad or keyboard to read overflow. These images select the long Request body for `/e2e/detail-body-fill`. Box 1 is the Inspector's scroll region, containing the body's own scrollbar. Scroll inside the body first, or drag its scrollbar to the lower boundary. After `entry-199`, further scrolling moves the outer Inspector instead of being trapped inside the body.

   ![Using the wheel inside the Request body](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-003.annotated.png)

   ![Dragging the body scrollbar to its lower boundary](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-004.annotated.png)

   ![Continuing into the outer Inspector after the body reaches its end](../media/v0.1.1-alpha.1/capture-body-scroll-english/step-005.annotated.png)

5. Use the fullscreen control in a Capture body to enlarge its contents. This example shows the JSON response for `/e2e/fullscreen-json`; box 1 marks Raw mode in fullscreen.

   ![Reading the JSON response as Raw text in fullscreen](../media/v0.1.1-alpha.1/capture-fullscreen-english/step-014.annotated.png)

6. Select Hex in fullscreen when you need to inspect bytes. Box 1 marks the selected Hex mode; this is still the same response.

   ![Selecting Hex for the same response in fullscreen](../media/v0.1.1-alpha.1/capture-fullscreen-english/step-017.annotated.png)

7. Press Escape to return to the original details. Box 1 shows that Hex remains selected, without reselecting the request or its view mode.

   ![Retaining Hex after returning to the details with Escape](../media/v0.1.1-alpha.1/capture-fullscreen-english/step-018.annotated.png)

minimizing is not quitting. Recording and proxy forwarding can continue. Fullscreen changes the viewing area, not byte-preview limits or previously missing data.

<a id="walkthrough-workspace-window-controls"></a>
## Maximize, restore and minimize the window

Window controls are on the right of the header. Resizing or minimizing does not quit the App or stop the proxy.

1. <a id="walkthrough-workspace-window-controls-01-normal"></a><a id="walkthrough-workspace-window-controls-02-maximize"></a>Click Maximize to use the available screen area. The current Settings section and edits remain in place.

   ![Maximize, restore and minimize the window · 1](../media/v0.1.1-alpha.1/workspace-navigation-english/step-026.png)

2. <a id="walkthrough-workspace-window-controls-03-restore"></a>Click Restore in the same position to return to a normal window. Drag its edges if you need another size.

   ![Maximize, restore and minimize the window · 2](../media/v0.1.1-alpha.1/workspace-navigation-english/step-027.png)

3. <a id="walkthrough-workspace-window-controls-04-minimize-control"></a>Box 1 marks Minimize. Click it to put the window away temporarily; it is not Close, and the App and proxy may keep running.

   ![Maximize, restore and minimize the window · 3](../media/v0.1.1-alpha.1/workspace-navigation-english/step-028.annotated.png)

4. <a id="walkthrough-workspace-window-controls-05-returned-window"></a>Restore the window to continue the same operation. When finished, close the App normally instead of treating minimization as quitting.

   ![Maximize, restore and minimize the window · 4](../media/v0.1.1-alpha.1/workspace-navigation-english/step-029.png)


<a id="appearance"></a>
## Choose a theme and language

Themes change colors rather than behavior. Interface language does not translate request URLs, bodies, protocol values or Tool names.

1. <a id="walkthrough-workspace-navigation-15-theme-menu"></a>Click Theme in box 1 at the bottom of the sidebar to open the four theme choices.

   ![Choose a theme and language · 1](../media/v0.1.1-alpha.1/workspace-navigation-english/step-020.annotated.png)

2. <a id="walkthrough-07-theme-warm"></a>Choose warm for the warm palette. The current page, requests and settings remain unchanged.

   ![Choose a theme and language · 2](../media/v0.1.1-alpha.1/workspace-navigation-english/step-023.png)

3. <a id="walkthrough-07-theme-light"></a><a id="walkthrough-08-restore-theme"></a>Choose light to return to the light palette. Keep it if it was your previous preference.

   ![Choose a theme and language · 3](../media/v0.1.1-alpha.1/workspace-navigation-english/step-021.png)

4. <a id="walkthrough-07-theme-ember"></a>Choose ember for the warm dark palette.

   ![Choose a theme and language · 4](../media/v0.1.1-alpha.1/workspace-navigation-english/step-024.png)

5. <a id="walkthrough-07-theme-dark"></a>Choose dark for the dark palette. Return to your previous theme through the same menu when needed.

   ![Choose a theme and language · 5](../media/v0.1.1-alpha.1/workspace-navigation-english/step-022.png)

6. <a id="walkthrough-09-language-menu"></a><a id="walkthrough-workspace-restart-05-language"></a>Open Language and choose the interface language you need. This example uses English; language names use their own native spelling. Close the menu to continue without resending requests.

   ![Choose a theme and language · 6](../media/v0.1.1-alpha.1/workspace-navigation-english/step-025.png)

The App provides four themes and 15 interface languages. The website’s System/Light/Dark preference is separate from the App theme.


<a id="agent-panel"></a>
## Use Agent beside your workspace

Agent is an optional side panel. Opening it does not send the current request or automatically provide page content to a model.

1. <a id="walkthrough-10-agent-panel"></a><a id="walkthrough-workspace-navigation-07-capture"></a><a id="walkthrough-workspace-navigation-08-agent-empty"></a>Click Agent in the header to open the side panel. Without a configured model, box 1 shows the configuration entry instead of starting a conversation.

   ![Use Agent beside your workspace · 1](../media/v0.1.1-alpha.1/workspace-agent-english/step-002.annotated.png)

   ![Use Agent beside your workspace · 1](../media/v0.1.1-alpha.1/workspace-agent-english/step-003.png)

2. <a id="walkthrough-workspace-navigation-09-configure-link"></a>Click the configuration entry to open Settings → Agent while keeping the panel open. See [Agent](agent.md) for model configuration.

   ![Use Agent beside your workspace · 2](../media/v0.1.1-alpha.1/workspace-agent-english/step-004.png)

3. <a id="walkthrough-workspace-navigation-05-diagnostics"></a><a id="walkthrough-workspace-navigation-06-retained-again"></a><a id="walkthrough-workspace-navigation-10-agent-open"></a><a id="walkthrough-workspace-navigation-11-rules"></a><a id="walkthrough-workspace-navigation-11-composer"></a><a id="walkthrough-workspace-navigation-11-diagnostics"></a>Switch to Rules, Composer, Diagnostics or Capture; Agent stays beside the workspace. Once a model is configured, create or select a Chat in the panel; see [Agent](agent.md#sessions) for conversation controls.

   ![Use Agent beside your workspace · 3](../media/v0.1.1-alpha.1/workspace-agent-english/step-005.png)

   ![Use Agent beside your workspace · 3](../media/v0.1.1-alpha.1/workspace-agent-english/step-006.png)

   ![Use Agent beside your workspace · 3](../media/v0.1.1-alpha.1/workspace-agent-english/step-007.png)

   ![Use Agent beside your workspace · 3](../media/v0.1.1-alpha.1/workspace-agent-english/step-008.png)

   ![Use Agent beside your workspace · 3](../media/v0.1.1-alpha.1/workspace-agent-english/step-009.png)

4. <a id="walkthrough-11-close-panel"></a><a id="walkthrough-workspace-navigation-12-header-close"></a><a id="walkthrough-workspace-navigation-13-header-open"></a><a id="walkthrough-workspace-navigation-14-panel-close"></a>Box 1 marks the panel Close button. Click it, or click Agent in the header again, to close only the panel. The workspace and App keep running, and existing conversations are not deleted.

   ![Use Agent beside your workspace · 4](../media/v0.1.1-alpha.1/workspace-agent-english/step-011.annotated.png)

   ![Use Agent beside your workspace · 4](../media/v0.1.1-alpha.1/workspace-agent-english/step-010.png)

   ![Use Agent beside your workspace · 4](../media/v0.1.1-alpha.1/workspace-agent-english/step-012.png)


<a id="saved-data"></a>
## Know what is retained

| Content | How it is retained |
| --- | --- |
| Capture requests and bodies | Temporary data for the current Core; export important records before exit or restart |
| Rules | Save after editing; confirming an import saves appended content |
| Composer Collection | Edits autosave; Recent sends is separate temporary send history |
| Proxy, TLS and preferences | Saved by their own setting operations, not removed by Capture Clear |
| Agent configuration and chats | Stored locally; model calls can still send context to the model service |
| Exported files | Kept at the selected destination, not deleted by Capture Clear |

Compare Collection, Privacy and temporary Capture before and after the same normal restart. Saving a request does not send it.

1. <a id="walkthrough-workspace-close"></a><a id="walkthrough-workspace-close-01-composer"></a>Open Composer and create a Collection request with box 1.

   ![Know what is retained · 1](../media/v0.1.1-alpha.1/privacy-workspace-english/step-011.annotated.png)

2. <a id="walkthrough-workspace-close-02-url"></a>Enter your URL in box 1. This example uses `http://127.0.0.1:56881/e2e/preferences/retained-request` and saves the definition without clicking Send. Use your own address.

   ![Know what is retained · 2](../media/v0.1.1-alpha.1/privacy-workspace-english/step-012.annotated.png)

3. <a id="walkthrough-workspace-close-03-name"></a>Choose Rename from the request row’s context menu, enter `Workspace retained request` in box 1 and press Enter.

   ![Know what is retained · 3](../media/v0.1.1-alpha.1/privacy-workspace-english/step-013.annotated.png)

4. <a id="walkthrough-workspace-close-04-privacy"></a>Note the current Privacy settings. In this example, authorization masking in box 1 is off, cookie masking in box 2 is on and the warning in box 3 is off. These are previously selected defaults, not a request to disable protection.

   ![Know what is retained · 4](../media/v0.1.1-alpha.1/privacy-workspace-english/step-009.annotated.png)

5. <a id="walkthrough-workspace-close-05-capture"></a>Inspect the temporary `/e2e/preferences/export-defaults` Capture record in box 1. It is separate from the Collection definition; export it first if it must be retained.

   ![Know what is retained · 5](../media/v0.1.1-alpha.1/privacy-workspace-english/step-014.annotated.png)

6. <a id="walkthrough-workspace-close-06-before-close"></a>Wait for saves and file tasks to finish, then use the window Close control in box 1. Do not substitute force termination.

   ![Know what is retained · 6](../media/v0.1.1-alpha.1/privacy-workspace-english/step-015.annotated.png)

7. <a id="walkthrough-workspace-restart"></a><a id="walkthrough-workspace-restart-01-collection"></a>Restart the App and open Composer. Box 1 still contains `Workspace retained request`, and the address in box 2 retains its value. The protocol prefix is displayed separately from the address field. Without clicking Send, this request should not be issued.

   ![Know what is retained · 7](../media/v0.1.1-alpha.1/privacy-workspace-english/step-017.annotated.png)

8. <a id="walkthrough-workspace-restart-02-privacy"></a>Return to Privacy and check authorization masking in box 1, cookie masking in box 2 and the warning in box 3 match the saved values. Do not delete App data or the CA to simulate a restart.

   ![Know what is retained · 8](../media/v0.1.1-alpha.1/privacy-workspace-english/step-016.annotated.png)

9. <a id="walkthrough-workspace-restart-04-temporary-capture"></a>Return to Capture: the previous temporary record is gone. Also check the interface still uses the previously selected language. Collection definitions and saved preferences remain separate.

   ![Know what is retained · 9](../media/v0.1.1-alpha.1/privacy-workspace-english/step-018.png)

10. <a id="walkthrough-workspace-restart-03-restore-privacy"></a>If protection was temporarily changed for testing, finish by enabling authorization masking in box 1, cookie masking in box 2 and the warning in box 3. Restore your preferred theme as needed.

    ![Know what is retained · 10](../media/v0.1.1-alpha.1/privacy-workspace-english/step-019.annotated.png)

Finish exports, Rules Save and other saves before quitting; visible data alone does not prove persistence. See [Composer](composer.md#walkthrough-composer-persistence-save) for complete request fields and [Agent](agent.md#walkthrough-agent-session-restart) for chat history. Different system accounts or independent App data environments do not automatically synchronize collections or chats. Shared CA and proxy-recovery information have separate lifecycles and should not be deleted casually.


<a id="close"></a>
## Finish a session

Handle data you need to retain and outstanding operations before quitting.

1. Resolve breakpoints that need to continue. Continue in box 1 forwards only the current HTTP head unchanged. For multiple waits, check the scope before using [batch commands](breakpoints.md#batch).

   ![Finish a session · 1](../media/v0.1.1-alpha.1/breakpoints-mixed-complete-english/step-017.annotated.png)

2. Export important traffic and wait for completion. All traffic in box 1 contains four records, and Export 4 requests in box 2 opens Save. Confirm the file was saved rather than treating a selected destination as completion. Use [Native Archive](transfer.md#archive) when additional protocol information is needed.

   ![Finish a session · 2](../media/v0.1.1-alpha.1/capture-har-all-english/step-013.annotated.png)

   ![Finish a session · 2](../media/v0.1.1-alpha.1/capture-har-all-english/step-014.png)

3. Complete or cancel each system authorization and file dialog you opened. After cancelling a running task, wait for cleanup before Clear or exit.

4. Finally click Close in box 1. If an active system operation prevents exit, let that operation finish before closing again rather than repeatedly clicking or force-killing.

   ![Finish a session · 4](../media/v0.1.1-alpha.1/privacy-workspace-english/step-015.annotated.png)

Minimizing or closing the Agent panel does not quit the App. Normal exit ends Main/Core and restores system proxy settings owned by this session; it does not uninstall the shared CA. If networking remains incorrect, follow [proxy recovery](troubleshooting.md#proxy-recovery) rather than indiscriminately clearing network settings.
