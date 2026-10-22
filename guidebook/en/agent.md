# Agent: use conversation to assist debugging

[Guide directory](../README.en.md) · [Tool permissions](tool-permissions.md) · [MCP](mcp.md)

<a id="先决定是否需要-ai"></a>
## Decide whether you need AI

Agent is an optional side panel, not a capture prerequisite. Capture, Rules, Breakpoints and Composer work without a model account.

The internal Agent uses App-configured models; external MCP hosts use their own model configuration. Sharing business tools does not make their login or permissions identical.

<a id="models"></a>
## Add and verify a model

<a id="walkthrough-agent-management"></a>
Add a model service you are authorized to use in Settings → Agent. Connection tests and conversations may incur charges; enter credentials only in the configuration dialog.

This example uses a local demonstration service at `http://127.0.0.1:64170/keyed/v1`, named `Keyed lab`. The App does not create it. Use your own service URL, Model ID and credentials rather than sending a real key to the example address.

1. <a id="walkthrough"></a><a id="walkthrough-01-settings"></a><a id="walkthrough-02-agent-settings"></a><a id="walkthrough-agent-management-01-settings"></a>Open Settings from the sidebar and select Agent. Before adding a model, the page shows No models configured; ordinary capture remains available.

   ![Add and verify a model · 1](../media/v0.1.1-alpha.1/agent-models-english/step-001.png)

2. <a id="walkthrough-03-add"></a><a id="walkthrough-04-custom"></a><a id="walkthrough-agent-management-guide-one-01-dialog"></a>Click Add provider and choose OpenAI-compatible in box 1 to open its configuration. DeepSeek uses its separate preset and official endpoint and requires your own valid key.

   ![Add and verify a model · 2](../media/v0.1.1-alpha.1/agent-models-english/step-002.annotated.png)

   ![Add and verify a model · 2](../media/v0.1.1-alpha.1/agent-models-english/step-003.png)

3. <a id="walkthrough-05-name"></a><a id="walkthrough-agent-management-guide-one-02-name"></a>Enter a recognizable Profile name in box 1, `Keyed lab` here. It names the local configuration, not the Model ID.

   ![Add and verify a model · 3](../media/v0.1.1-alpha.1/agent-models-english/step-004.annotated.png)

4. <a id="walkthrough-06-endpoint"></a><a id="walkthrough-agent-management-guide-one-03-endpoint"></a>Enter the service’s Base URL in box 1, `http://127.0.0.1:64170/keyed/v1` in the image. Remote Custom services require HTTPS; HTTP is restricted to supported local loopback endpoints.

   ![Add and verify a model · 4](../media/v0.1.1-alpha.1/agent-models-english/step-005.annotated.png)

5. <a id="walkthrough-07-model"></a><a id="walkthrough-agent-management-guide-one-04-model"></a>Enter your credential in API key when authentication is required; the interface masks it. Enter the actual model identifier in Model ID, box 1, initially `keyed-model` here. Do not substitute the profile name.

   ![Add and verify a model · 5](../media/v0.1.1-alpha.1/agent-models-english/step-006.annotated.png)

6. <a id="walkthrough-08-context"></a><a id="walkthrough-09-output"></a>Set Context window in box 1 and Maximum output in box 2 to the model’s actual capabilities, `131072` and `8192` here. Larger values do not expand the server’s capacity.

   ![Add and verify a model · 6](../media/v0.1.1-alpha.1/agent-models-english/step-007.annotated.png)

7. <a id="walkthrough-10-test"></a><a id="walkthrough-agent-management-guide-one-05-test"></a>Click Test connection and wait for its result. After Connection verified appears, Save provider in box 1 becomes available. Test sends an actual model request rather than only checking URL syntax.

   ![Add and verify a model · 7](../media/v0.1.1-alpha.1/agent-models-english/step-008.annotated.png)

8. <a id="walkthrough-agent-management-02-edit"></a>Changing a connection field requires another test. Here Model ID in box 1 changes to `keyed-model-v2`, disabling Save provider in box 2 because the previous verification no longer matches.

   ![Add and verify a model · 8](../media/v0.1.1-alpha.1/agent-models-english/step-009.annotated.png)

9. <a id="walkthrough-agent-management-03-retest"></a>Click Test connection in box 1 to verify the current fields again. Resolve the displayed error if the test fails.

   ![Add and verify a model · 9](../media/v0.1.1-alpha.1/agent-models-english/step-010.annotated.png)

10. <a id="walkthrough-11-save"></a><a id="walkthrough-agent-management-guide-one-06-save"></a><a id="walkthrough-agent-management-04-save-edit"></a>After the new test succeeds, click Save provider in box 1 and inspect `Keyed lab` with `keyed-model-v2` in Configured models. Closing a dialog or seeing typed values does not mean they were saved.

    ![Add and verify a model · 10](../media/v0.1.1-alpha.1/agent-models-english/step-011.annotated.png)

    ![Add and verify a model · 10](../media/v0.1.1-alpha.1/agent-models-english/step-012.png)

11. <a id="walkthrough-agent-management-guide-two-01-dialog"></a>For a local service that does not need a key, add a separate profile through Add provider → OpenAI-compatible in box 1 rather than overwriting another model.

    ![Add and verify a model · 11](../media/v0.1.1-alpha.1/agent-models-english/step-013.annotated.png)

    ![Add and verify a model · 11](../media/v0.1.1-alpha.1/agent-models-english/step-014.png)

12. <a id="walkthrough-agent-management-guide-two-02-name"></a>Enter `Keyless lab` in Profile name, box 1, to distinguish this keyless configuration.

    ![Add and verify a model · 12](../media/v0.1.1-alpha.1/agent-models-english/step-015.annotated.png)

13. <a id="walkthrough-agent-management-guide-two-03-endpoint"></a>Enter the local service URL in box 1, `http://127.0.0.1:64170/keyless/v1` here. This service permits unauthenticated access, so leave API key empty.

    ![Add and verify a model · 13](../media/v0.1.1-alpha.1/agent-models-english/step-016.annotated.png)

14. <a id="walkthrough-agent-management-guide-two-04-model"></a>Enter `keyless-model` in Model ID, box 1. A keyless service can still require a model identifier.

    ![Add and verify a model · 14](../media/v0.1.1-alpha.1/agent-models-english/step-017.annotated.png)

15. Verify Context window in box 1 is `131072` and Maximum output in box 2 is `8192`. Use the actual supported values for your own model.

    ![Add and verify a model · 15](../media/v0.1.1-alpha.1/agent-models-english/step-018.annotated.png)

16. <a id="walkthrough-agent-management-guide-two-05-test"></a>Click Test connection in box 1 to verify the keyless service is reachable and usable.

    ![Add and verify a model · 16](../media/v0.1.1-alpha.1/agent-models-english/step-019.annotated.png)

17. <a id="walkthrough-agent-management-guide-two-06-save"></a>After success, click Save provider in box 1. Both `Keyed lab` and `Keyless lab` remain in the list, ready for default selection or individual editing.

    ![Add and verify a model · 17](../media/v0.1.1-alpha.1/agent-models-english/step-020.annotated.png)

    ![Add and verify a model · 17](../media/v0.1.1-alpha.1/agent-models-english/step-021.png)

- OpenAI-compatible does not guarantee support for every service extension; use the provider’s actual Base URL and Model ID.
- Resolve secure-storage errors instead of bypassing them by storing a key in plaintext.


<a id="manage-models"></a>
## Edit, choose defaults and remove models

Continue with the saved `Keyed lab` and `Keyless lab` profiles. Check the target name before editing; removing a local profile does not revoke the provider account or key.

1. <a id="walkthrough-agent-management-07-default"></a>Click Set default in box 1 on the `Keyless lab` row to use it for subsequently created Chats.

   ![Edit, choose defaults and remove models · 1](../media/v0.1.1-alpha.1/agent-models-english/step-022.annotated.png)

2. <a id="walkthrough-agent-management-05-first-chat"></a><a id="walkthrough-agent-management-06-chat-name"></a><a id="walkthrough-agent-management-08-current-model"></a><a id="walkthrough-agent-management-09-new-chat"></a>The row in box 1 shows Default without reordering the list. Existing Chats retain their own models. Follow [Chat management](#sessions) to create, name or change the model of a particular Chat.

   ![Edit, choose defaults and remove models · 2](../media/v0.1.1-alpha.1/agent-models-english/step-023.annotated.png)

3. Click Edit on `Keyed lab` and change Model ID in box 1 to `keyed-model-edited`. Leaving the key field in box 2 empty retains the stored credential rather than deleting it. Enter a new key to replace it or use the separate removal option.

   ![Edit, choose defaults and remove models · 3](../media/v0.1.1-alpha.1/agent-models-english/step-024.annotated.png)

4. After editing, click Test connection in box 1 instead of reusing the previous verification.

   ![Edit, choose defaults and remove models · 4](../media/v0.1.1-alpha.1/agent-models-english/step-025.annotated.png)

5. After a successful test, click Save changes in box 1 and verify the new Model ID in the list. `Keyless lab` remains the default.

   ![Edit, choose defaults and remove models · 5](../media/v0.1.1-alpha.1/agent-models-english/step-026.annotated.png)

   ![Edit, choose defaults and remove models · 5](../media/v0.1.1-alpha.1/agent-models-english/step-027.png)

6. To check persistence, exit normally with Close in box 1, then reopen Settings → Agent. Model order, edited fields and the Default selection are restored without automatically starting a conversation.

   ![Edit, choose defaults and remove models · 6](../media/v0.1.1-alpha.1/agent-models-english/step-029.annotated.png)

   ![Edit, choose defaults and remove models · 6](../media/v0.1.1-alpha.1/agent-models-english/step-030.png)

7. When the service no longer needs authentication, edit its profile and select Remove saved API key. The disabled input indicates explicit removal rather than retention of the old key.

   ![Edit, choose defaults and remove models · 7](../media/v0.1.1-alpha.1/agent-models-english/step-031.png)

8. Click Test connection in box 1 to verify the service permits keyless access. Retain or replace a valid key for a service that still requires authentication.

   ![Edit, choose defaults and remove models · 8](../media/v0.1.1-alpha.1/agent-models-english/step-032.annotated.png)

9. After success, click Save changes in box 1. `Keyed lab` now shows No API key in the list; this only removes the locally stored credential.

   ![Edit, choose defaults and remove models · 9](../media/v0.1.1-alpha.1/agent-models-english/step-033.annotated.png)

   ![Edit, choose defaults and remove models · 9](../media/v0.1.1-alpha.1/agent-models-english/step-034.png)

10. <a id="walkthrough-agent-management-17-remove-model-dialog"></a>Click the remove button for the unwanted `Keyless lab` and check its name in the confirmation. Cancel in box 1 retains it; this example uses Confirm remove model in box 2.

    ![Edit, choose defaults and remove models · 10](../media/v0.1.1-alpha.1/agent-models-english/step-036.annotated.png)

11. <a id="walkthrough-agent-management-18-remove-model"></a>After the default is removed, the remaining `Keyed lab` becomes the default. Inspect the remaining profiles instead of assuming a dismissed dialog means removal succeeded.

    ![Edit, choose defaults and remove models · 11](../media/v0.1.1-alpha.1/agent-models-english/step-037.png)

12. <a id="walkthrough-agent-model-removal"></a><a id="walkthrough-agent-model-removal-04-model-settings"></a><a id="walkthrough-agent-model-removal-05-last-model-dialog"></a><a id="walkthrough-agent-model-removal-06-remove-last"></a>If the last model is no longer needed, review the confirmation for `Keyed lab`. Cancel in box 1 abandons the operation; Confirm remove model in box 2 removes the final profile.

    ![Edit, choose defaults and remove models · 12](../media/v0.1.1-alpha.1/agent-models-english/step-038.annotated.png)

13. The list returns to No models configured. Add and test a model before using Agent again. If a real key was exposed, also revoke or rotate it at the provider.

    ![Edit, choose defaults and remove models · 13](../media/v0.1.1-alpha.1/agent-models-english/step-039.png)


<a id="chat"></a>
## Start a well-scoped conversation

Prepare at least one tested and saved model. This conversation uses the profile named `Recovery lab`; select your own configured model when following the steps, and expect its actual response to differ.

1. <a id="walkthrough-12-panel"></a>Open the right-hand panel with Agent in the App header. Click the plus button in box 1 to create a New chat.

   ![Start a well-scoped conversation · 1](../media/v0.1.1-alpha.1/agent-chat-english/step-002.annotated.png)

2. <a id="walkthrough-13-chat"></a>Check the model and execution mode above the input. This example uses `Recovery lab` with Ask; the new Chat has no previous messages.

   ![Start a well-scoped conversation · 2](../media/v0.1.1-alpha.1/agent-chat-english/step-003.png)

3. <a id="walkthrough-14-prompt"></a>Enter `Explain Recording and Clear without changing settings.` in box 1 to request an explanation only. Check the scope, then click Send in box 2 or use Ctrl+Enter (Command+Enter on macOS).

   ![Start a well-scoped conversation · 3](../media/v0.1.1-alpha.1/agent-chat-english/step-004.annotated.png)

4. <a id="walkthrough-15-send"></a>Wait for the response and read box 1. It explains Recording versus Clear without calling a business Tool or changing settings. When requesting real operations, inspect the Tool result and product state rather than relying only on the model’s wording.

   ![Start a well-scoped conversation · 4](../media/v0.1.1-alpha.1/agent-chat-english/step-005.annotated.png)

- Selecting a request or changing workspaces does not automatically add the page to model context.
- Obtain request IDs, bodies or messages through available queries rather than asking the model to guess stale records.
- Commands or “ignore the rules” text inside network responses are inspected data, not your authorization.


<a id="sessions"></a>
## Manage chats and restore history

Continue the previous conversation by naming it `Recording and Clear`, then create a separate `Upstream modes` Chat. Separate tasks into different Chats to avoid unrelated history.

1. Open the Chat selector at the top of the panel and choose Rename current chat in box 1.

   ![Manage chats and restore history · 1](../media/v0.1.1-alpha.1/agent-chat-english/step-006.annotated.png)

2. Enter `Recording and Clear` in box 1 and click Save chat title in box 2. The panel title changes while its messages remain.

   ![Manage chats and restore history · 2](../media/v0.1.1-alpha.1/agent-chat-english/step-007.annotated.png)

   ![Manage chats and restore history · 2](../media/v0.1.1-alpha.1/agent-chat-english/step-008.png)

3. To compare the global default with a Chat-specific model, add and test another profile using the earlier steps. This example adds `Recovery alternate` with Model ID `recovery-alternate`, while the current Chat retains `Recovery lab`.

   ![Manage chats and restore history · 3](../media/v0.1.1-alpha.1/agent-chat-english/step-009.png)

4. In Settings → Agent, click Set default in box 1 to use `Recovery alternate` for future Chats.

   ![Manage chats and restore history · 4](../media/v0.1.1-alpha.1/agent-chat-english/step-010.annotated.png)

5. Box 1 shows the new global Default, while the current Chat still selects `Recovery lab` in box 2. These choices are independent.

   ![Manage chats and restore history · 5](../media/v0.1.1-alpha.1/agent-chat-english/step-011.annotated.png)

6. To change this Chat, open the model selector above its input and choose `Recovery alternate` in box 1. Check the selected model after the menu closes rather than changing the global default again.

   ![Manage chats and restore history · 6](../media/v0.1.1-alpha.1/agent-chat-english/step-012.annotated.png)

   ![Manage chats and restore history · 6](../media/v0.1.1-alpha.1/agent-chat-english/step-013.png)

7. To return to the original model, select `Recovery lab` in the same menu. The current Chat switches back while the global Default remains `Recovery alternate`.

   ![Manage chats and restore history · 7](../media/v0.1.1-alpha.1/agent-chat-english/step-014.png)

8. Click New chat for the second task. Verify it has no earlier conversation history and uses the new default, `Recovery alternate`.

   ![Manage chats and restore history · 8](../media/v0.1.1-alpha.1/agent-chat-english/step-015.png)

9. Enter `Explain when to use Direct and Manual upstream modes.` in the input, box 1, and send with box 2. Box 1 in the response image marks this second Chat’s answer, not an added message in the first Chat.

   ![Manage chats and restore history · 9](../media/v0.1.1-alpha.1/agent-chat-english/step-016.annotated.png)

   ![Manage chats and restore history · 9](../media/v0.1.1-alpha.1/agent-chat-english/step-017.annotated.png)

10. Open Rename current chat from box 1 in the menu. If you decide not to rename it yet, use Cancel in box 1 of the dialog to retain the Chat and messages.

    ![Manage chats and restore history · 10](../media/v0.1.1-alpha.1/agent-chat-english/step-018.annotated.png)

    ![Manage chats and restore history · 10](../media/v0.1.1-alpha.1/agent-chat-english/step-019.annotated.png)

11. <a id="walkthrough-agent-management-10-second-name"></a>Open Rename again, enter `Upstream modes` in box 1 and click Save chat title in box 2. Verify the updated title before switching tasks.

    ![Manage chats and restore history · 11](../media/v0.1.1-alpha.1/agent-chat-english/step-021.annotated.png)

    ![Manage chats and restore history · 11](../media/v0.1.1-alpha.1/agent-chat-english/step-022.png)

12. <a id="walkthrough-agent-session-restart"></a><a id="walkthrough-agent-session-restart-01-open"></a>When finished, exit normally with the App Close button in box 1. Reopen the App and Agent panel and verify `Upstream modes` and its response were restored. Reopening does not resend the message.

    ![Manage chats and restore history · 12](../media/v0.1.1-alpha.1/agent-chat-english/step-023.annotated.png)

    ![Manage chats and restore history · 12](../media/v0.1.1-alpha.1/agent-chat-english/step-024.png)

13. <a id="walkthrough-agent-management-11-switch-chat"></a><a id="walkthrough-agent-session-restart-02-chats"></a><a id="walkthrough-agent-session-restart-03-history"></a>Open the Chat selector. Box 1 is `Upstream modes`; box 2 is `Recording and Clear`. Select box 2 and inspect that Chat’s own history and `Recovery lab` model.

    ![Manage chats and restore history · 13](../media/v0.1.1-alpha.1/agent-chat-english/step-025.annotated.png)

    ![Manage chats and restore history · 13](../media/v0.1.1-alpha.1/agent-chat-english/step-026.png)

14. Enter `Does pausing Recording restore the system proxy?` in the original Chat and click Send in box 1. Its follow-up stays in `Recording and Clear` rather than merging with the other Chat.

    ![Manage chats and restore history · 14](../media/v0.1.1-alpha.1/agent-chat-english/step-027.annotated.png)

    ![Manage chats and restore history · 14](../media/v0.1.1-alpha.1/agent-chat-english/step-028.png)

15. <a id="walkthrough-agent-management-12-delete-dialog"></a>To remove the second Chat, first select `Upstream modes` and check the title, then choose Delete current chat in box 1 of its menu.

    ![Manage chats and restore history · 15](../media/v0.1.1-alpha.1/agent-chat-english/step-029.annotated.png)

16. <a id="walkthrough-agent-management-13-cancel-delete"></a>Cancel in box 1 abandons deletion; Confirm delete chat in box 2 removes its history. Choose Cancel first and verify `Upstream modes` and its messages remain.

    ![Manage chats and restore history · 16](../media/v0.1.1-alpha.1/agent-chat-english/step-030.annotated.png)

    ![Manage chats and restore history · 16](../media/v0.1.1-alpha.1/agent-chat-english/step-031.png)

17. <a id="walkthrough-agent-management-19-delete-chat-dialog"></a><a id="walkthrough-agent-management-20-delete-chat"></a>When the Chat is no longer needed, select Delete current chat again and click Confirm delete chat in box 1. After removal, return to `Recording and Clear` and verify its history remains.

    ![Manage chats and restore history · 17](../media/v0.1.1-alpha.1/agent-chat-english/step-033.annotated.png)

    ![Manage chats and restore history · 17](../media/v0.1.1-alpha.1/agent-chat-english/step-034.png)

18. <a id="walkthrough-agent-session-lifecycle-09-fresh-name"></a><a id="walkthrough-agent-session-lifecycle-10-running-chat"></a><a id="walkthrough-agent-session-lifecycle-11-running-prompt"></a>A Chat that is still generating a response can also be deleted. Verify the current Chat is the unwanted one, then choose Delete current chat in box 1 of its menu rather than removing a completed Chat.

    ![Manage chats and restore history · 18](../media/v0.1.1-alpha.1/agent-chat-english/step-037.png)

    ![Manage chats and restore history · 18](../media/v0.1.1-alpha.1/agent-chat-english/step-038.annotated.png)

19. <a id="walkthrough-agent-session-lifecycle-12-running-delete-dialog"></a><a id="walkthrough-agent-session-lifecycle-13-delete-running"></a><a id="walkthrough-agent-session-lifecycle-14-retained-chat"></a><a id="walkthrough-agent-session-lifecycle-15-before-close"></a>Click Confirm delete chat in box 1 and wait for cancellation to settle. Generation stops and the panel returns to a retained Chat; the unfinished response is not automatically retried.

    ![Manage chats and restore history · 19](../media/v0.1.1-alpha.1/agent-chat-english/step-039.annotated.png)

    ![Manage chats and restore history · 19](../media/v0.1.1-alpha.1/agent-chat-english/step-040.png)

20. <a id="walkthrough-agent-session-restart-04-model-settings"></a><a id="walkthrough-agent-session-restart-05-last-model-dialog"></a><a id="walkthrough-agent-session-restart-06-remove-last"></a>If the model profiles are also no longer needed, review and remove each in Settings → Agent. The images remove `Recovery alternate` first and `Recovery lab` second; box 1 in each is Confirm remove model for that profile.

    ![Manage chats and restore history · 20](../media/v0.1.1-alpha.1/agent-chat-english/step-041.annotated.png)

    ![Manage chats and restore history · 20](../media/v0.1.1-alpha.1/agent-chat-english/step-042.annotated.png)

21. After the last model is removed, Agent shows Connect a model to start. Use Configure Agent to configure a model before continuing; this state does not mean a network request is still running.

    ![Manage chats and restore history · 21](../media/v0.1.1-alpha.1/agent-chat-english/step-043.png)

Restoring history does not automatically replay side effects. Capture IDs in older messages may be stale; query the current recording again when needed.


<a id="context"></a>
## Read context and usage

Context describes the context carried by the latest model request; the Session usage popup reports cumulative session usage. Read your actual values rather than treating the example numbers as quotas or charges.

1. <a id="walkthrough-16-context"></a>Hover Context above the message input. Box 1 is the cumulative usage panel: this example totals `12`, with Cache hit `6`, Cache miss `4` and Output `2`. The Context indicator below is `10 / 131.1k`, not the cumulative `12`.

   ![Read context and usage · 1](../media/v0.1.1-alpha.1/agent-context-english/step-004.annotated.png)

2. <a id="walkthrough-agent-session-lifecycle"></a><a id="walkthrough-agent-session-lifecycle-01-panel"></a><a id="walkthrough-agent-session-lifecycle-02-chat"></a><a id="walkthrough-agent-session-lifecycle-03-name"></a><a id="walkthrough-agent-session-lifecycle-04-prompt"></a><a id="walkthrough-agent-session-lifecycle-05-keyboard-send"></a><a id="walkthrough-agent-session-lifecycle-06-keyboard-context"></a>Alternatively, focus the message input and press Shift+Tab to focus the Context button. Box 1 shows the same usage; press Tab to return to the input.

   ![Read context and usage · 2](../media/v0.1.1-alpha.1/agent-context-english/step-005.annotated.png)

3. Inspect the values again after another response. Current Context is `20`, while box 1 totals `36`: Cache hit `24`, Cache miss `6` and Output `6`. Cache hit/miss are already parts of input usage and must not be added twice.

   ![Read context and usage · 3](../media/v0.1.1-alpha.1/agent-context-english/step-007.annotated.png)

4. A later Retry can also add usage. Box 1 now totals `66`, while current Context is `25` for the latest request. Cache hit rate is calculated from reported input tokens rather than averaging per-turn percentages.

   ![Read context and usage · 4](../media/v0.1.1-alpha.1/agent-context-english/step-012.annotated.png)

5. <a id="walkthrough-agent-session-lifecycle-07-dismiss-context"></a><a id="walkthrough-agent-session-lifecycle-08-fresh-chat"></a>Use New chat for a different task instead of continuing with unrelated history. The image shows a new Chat’s initial state; previous Chats remain accessible from the selector.

   ![Read context and usage · 5](../media/v0.1.1-alpha.1/agent-context-english/step-001.png)

- A small proportion can display `0.0%`; still read the actual token count.
- Unreported usage may appear as `—`, not zero consumption. A cancelled call is not necessarily free.
- The remaining window must also accommodate model output; it does not guarantee a response of that length.
- Usage is not automatically converted into a bill.


<a id="tools"></a>
## Let Agent use product tools

Configure a usable model and state the allowed scope in the current Chat. This example uses `Execution mode lab` with `capture_stop_recording`: it pauses new recording without clearing records or restoring the system proxy. Ask/Auto belongs to the current Chat; new Chats start in Ask.

1. <a id="walkthrough-18-ask"></a>Select Ask in box 1 to require approval before a change Tool executes. Availability still depends on that Tool’s Settings permission.

   ![Let Agent use product tools · 1](../media/v0.1.1-alpha.1/agent-execution-english/step-004.annotated.png)

2. <a id="walkthrough-18a-tool-question"></a>Enter `Pause recording after asking for my approval.` in box 1 and click Send in box 2.

   ![Let Agent use product tools · 2](../media/v0.1.1-alpha.1/agent-execution-english/step-005.annotated.png)

3. The approval card identifies `capture_stop_recording` and its effect. Read it first: Deny Tool in box 1 refuses execution; Allow Tool in box 2 permits the pause.

   ![Let Agent use product tools · 3](../media/v0.1.1-alpha.1/agent-execution-english/step-006.annotated.png)

4. Even if you select Auto in box 1 while an approval is pending, that existing approval is not automatically resolved.

   ![Let Agent use product tools · 4](../media/v0.1.1-alpha.1/agent-execution-english/step-007.annotated.png)

5. The approval in box 1 still waits for a decision. Switching workspaces or leaving the Chat is not a substitute for Allow or Deny.

   ![Let Agent use product tools · 5](../media/v0.1.1-alpha.1/agent-execution-english/step-008.annotated.png)

6. <a id="walkthrough-18b-deny"></a>Return to the original Chat and click Deny Tool in box 1 to refuse this pause.

   ![Let Agent use product tools · 6](../media/v0.1.1-alpha.1/agent-execution-english/step-009.annotated.png)

7. Box 2 retains the Denied result and Recording in box 1 remains enabled. The refusal did not pause recording; a model reply alone is not proof of execution.

   ![Let Agent use product tools · 7](../media/v0.1.1-alpha.1/agent-execution-english/step-010.annotated.png)

8. Before requesting approval again, switch this Chat back to Ask in box 1.

   ![Let Agent use product tools · 8](../media/v0.1.1-alpha.1/agent-execution-english/step-012.annotated.png)

9. <a id="walkthrough-18c-tool-again"></a>Enter the new request `Pause capture after explicit approval.` in box 1 and send with box 2. The earlier denial does not decide this new call.

   ![Let Agent use product tools · 9](../media/v0.1.1-alpha.1/agent-execution-english/step-013.annotated.png)

10. <a id="walkthrough-18d-allow"></a>Review the Tool and effect again, then choose Allow Tool in box 1.

    ![Let Agent use product tools · 10](../media/v0.1.1-alpha.1/agent-execution-english/step-014.annotated.png)

11. Box 2 shows the allowed call result and box 1 changes to Paused. Proxy forwarding can continue; new traffic is simply no longer recorded.

    ![Let Agent use product tools · 11](../media/v0.1.1-alpha.1/agent-execution-english/step-015.annotated.png)

12. Resume Recording with the Capture control in box 1 when needed and verify its state before continuing.

    ![Let Agent use product tools · 12](../media/v0.1.1-alpha.1/agent-execution-english/step-016.annotated.png)

13. <a id="walkthrough-17-auto"></a>Select Auto in box 1 only when you accept automatic execution of subsequent change operations. It does not bypass disabled permissions or native file selection.

    ![Let Agent use product tools · 13](../media/v0.1.1-alpha.1/agent-execution-english/step-017.annotated.png)

14. Enter `Pause capture using this Chat mode.` in box 1 and send with box 2. This call executes directly in Auto; still inspect Tool activity and Capture’s Paused state.

    ![Let Agent use product tools · 14](../media/v0.1.1-alpha.1/agent-execution-english/step-018.annotated.png)

    ![Let Agent use product tools · 14](../media/v0.1.1-alpha.1/agent-execution-english/step-019.png)

15. <a id="walkthrough-agent-management-14-disable-tool"></a>Resume Recording, then open Settings → Agent and search Tool capabilities for `capture_stop_recording`. Disable Agent in box 1 without changing MCP in box 2; their permissions are independent.

    ![Let Agent use product tools · 15](../media/v0.1.1-alpha.1/agent-execution-english/step-021.annotated.png)

16. A model cannot execute a disabled Tool even if it tries to call it. Here, enter `Try the disabled recording Tool.` in box 1 and send with box 2 to inspect the refusal.

    ![Let Agent use product tools · 16](../media/v0.1.1-alpha.1/agent-execution-english/step-022.annotated.png)

17. <a id="walkthrough-agent-management-15-enforcement"></a>Tool activity shows Unknown tool while Recording in box 1 stays enabled. This is an `unknown_tool` permission refusal, distinct from Deny in Ask or a model connection failure.

    ![Let Agent use product tools · 17](../media/v0.1.1-alpha.1/agent-execution-english/step-023.annotated.png)

18. After a normal restart, the permission in box 1 remains disabled. Reopening the App does not restore revoked access or replay the request.

    ![Let Agent use product tools · 18](../media/v0.1.1-alpha.1/agent-execution-english/step-025.annotated.png)

19. <a id="walkthrough-agent-management-16-restore-tool"></a>Explicitly enable Agent access in box 1 when the Tool is needed again. Restoring access affects later calls; it does not replay the failed one.

    ![Let Agent use product tools · 19](../media/v0.1.1-alpha.1/agent-execution-english/step-026.annotated.png)

20. Return this Chat to Ask in box 1 when finished, then verify Recording is in the state you want.

    ![Let Agent use product tools · 20](../media/v0.1.1-alpha.1/agent-execution-english/step-027.annotated.png)

21. <a id="walkthrough-agent-tool-lifecycle-08-diagnostics-recent"></a><a id="walkthrough-agent-tool-lifecycle-09-read-trace"></a><a id="walkthrough-agent-tool-lifecycle-10-export-request"></a><a id="walkthrough-agent-tool-lifecycle-11-native-cancel-panel"></a><a id="walkthrough-agent-tool-lifecycle-12-cancel-native"></a><a id="walkthrough-agent-tool-lifecycle-13-export-again"></a><a id="walkthrough-agent-tool-lifecycle-14-native-save"></a><a id="walkthrough-agent-tool-lifecycle-15-started-result"></a><a id="walkthrough-agent-tool-lifecycle-16-completion-query"></a><a id="walkthrough-agent-tool-lifecycle-17-final-state"></a>Continue with any file dialog or system authorization required after Allow. For example, `diagnostics_export` opens Save; this example uses `agent.jsonl`, but choose your own destination. Cancel starts no export. After confirming Save, return to the App and inspect the job. `started` or Export job Running indicates a start, not a substitute for checking the actual file and terminal result.

    ![Let Agent use product tools · 21](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-017.png)

    ![Let Agent use product tools · 21](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-018.png)

See [Tool permissions](tool-permissions.md) for query/change, independent entry-point access and read-only configuration. A model saying “done” is not a substitute for Tool results and product state.


<a id="stop-retry"></a>
## Stop, inspect failure and retry

Stop cancels the current model response without deleting the Chat or undoing completed product operations. Read the actual error after a failure rather than treating an empty reply as success.

1. <a id="walkthrough-19-stream"></a>While Generating response is visible, click Stop response in box 1 if the response is no longer needed.

   ![Stop, inspect failure and retry · 1](../media/v0.1.1-alpha.1/agent-context-english/step-009.annotated.png)

2. <a id="walkthrough-20-stop"></a>Wait for Response stopped; already displayed partial output is retained. Box 1 is Retry response, not continued waiting on the old connection.

   ![Stop, inspect failure and retry · 2](../media/v0.1.1-alpha.1/agent-context-english/step-010.annotated.png)

3. <a id="walkthrough-21-retry"></a>Inspect the message and completed Tools before clicking Retry response. Retry is a new attempt that retains the original user message, without requiring you to copy and resend the question.

   ![Stop, inspect failure and retry · 3](../media/v0.1.1-alpha.1/agent-context-english/step-011.png)

4. Inspect usage in box 1 after Retry completes. The cumulative values have updated; neither a stopped request nor Retry is necessarily free.

   ![Stop, inspect failure and retry · 4](../media/v0.1.1-alpha.1/agent-context-english/step-012.annotated.png)

5. <a id="walkthrough-agent-tool-lifecycle"></a><a id="walkthrough-agent-tool-lifecycle-01-agent"></a><a id="walkthrough-agent-tool-lifecycle-02-ask"></a><a id="walkthrough-agent-tool-lifecycle-03-side-effect-prompt"></a><a id="walkthrough-agent-tool-lifecycle-04-allow-pause"></a><a id="walkthrough-agent-tool-lifecycle-05-stop-after-tool"></a>If `capture_stop_recording` already executed, box 1 already shows Paused. Stop in box 2 only cancels the ongoing explanation. After Response stopped appears, Recording remains paused; the completed Tool is not undone.

   ![Stop, inspect failure and retry · 5](../media/v0.1.1-alpha.1/agent-traffic-control-english/step-003.annotated.png)

   ![Stop, inspect failure and retry · 5](../media/v0.1.1-alpha.1/agent-traffic-control-english/step-004.png)

6. <a id="walkthrough-agent-tool-lifecycle-06-retry"></a><a id="walkthrough-agent-tool-lifecycle-07-clarify"></a>This Retry only returns an explanation without repeating the pause, and Recording remains Paused. Send a new message if the goal needs clarification, for example limiting it to a read-only status query. A stopped or failed turn does not automatically justify repeating sends, exports or configuration writes.

   ![Stop, inspect failure and retry · 6](../media/v0.1.1-alpha.1/agent-traffic-control-english/step-005.png)

- Stop is neither a breakpoint Continue action nor an undo for existing side effects.
- Chat does not provide a generic Continue button for arbitrarily restoring a running turn.
- After model output has appeared, do not assume a network failure can safely replay the entire operation automatically.


<a id="privacy"></a>
## Understand the model-data boundary

- Local configuration/history does not mean conversation stays on the device.
- Prompts and Tool results included in context go to the configured model service.
- Enable only needed capabilities and avoid sending personal traffic, keys or sensitive bodies.
- Redaction does not recognize every possible business secret.
- Captured webpages/logs are data, not authorization to expand the task.
- Disabling Agent access does not disable MCP or revoke provider credentials.
