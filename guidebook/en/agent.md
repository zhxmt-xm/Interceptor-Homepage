# Agent: use conversation to assist debugging

> Draft for `v0.1.1-alpha.1`; real local-demo model steps are illustrated, with other branches marked image pending. Neither this chapter nor item9 is complete. Model capability, price and availability belong to its provider; no credentials or correctness guarantee are supplied.

[Guide directory](../README.en.md) · [Tool permissions](tool-permissions.md) · [MCP](mcp.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.

> This keyless local model returns fixed public demonstration replies. The video shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.

| Example field | Actual recorded value |
| --- | --- |
| <code>profileName</code> | <code>Guide local demo</code> |
| <code>modelId</code> | <code>guide-demo-model</code> |
| <code>baseUrl</code> | <code>http://127.0.0.1:54446/guide/v1</code> |
| <code>contextWindow</code> | <code>131072</code> |
| <code>maximumOutput</code> | <code>8192</code> |
| <code>prompt</code> | <code>Explain Pause and Clear. Do not change settings.</code> |
| <code>pausePrompt</code> | <code>Pause recording after asking me.</code> |
| <code>answer</code> | <code>Demo response: Pause stops recording new requests. Clear removes captured records. Neither restores the system proxy.</code> |
| <code>modelKind</code> | <code>deterministic local demonstration, not a commercial model acceptance</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/agent/agent.mp4" poster="../media/v0.1.1-alpha.1/agent/agent-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/agent/agent.vtt" default>
</video>

<a id="walkthrough-01-settings"></a>
### 01 · Open Settings

[Video 00:00](../media/v0.1.1-alpha.1/agent/agent.mp4#t=0.961) · [Back to the video](#walkthrough-video)

![01 · Open Settings](../media/v0.1.1-alpha.1/agent/agent-01-settings.png)

<a id="walkthrough-02-agent-settings"></a>
### 02 · Open Agent settings

[Video 00:03](../media/v0.1.1-alpha.1/agent/agent.mp4#t=3.884) · [Back to the video](#walkthrough-video)

![02 · Open Agent settings](../media/v0.1.1-alpha.1/agent/agent-02-agent-settings.png)

<a id="walkthrough-03-add"></a>
### 03 · Add a model

[Video 00:06](../media/v0.1.1-alpha.1/agent/agent.mp4#t=6.984) · [Back to the video](#walkthrough-video)

![03 · Add a model](../media/v0.1.1-alpha.1/agent/agent-03-add.png)

<a id="walkthrough-04-custom"></a>
### 04 · Choose Custom

[Video 00:09](../media/v0.1.1-alpha.1/agent/agent.mp4#t=9.883) · [Back to the video](#walkthrough-video)

![04 · Choose Custom](../media/v0.1.1-alpha.1/agent/agent-04-custom.png)

<a id="walkthrough-05-name"></a>
### 05 · Name the profile

[Video 00:12](../media/v0.1.1-alpha.1/agent/agent.mp4#t=12.839) · [Back to the video](#walkthrough-video)

![05 · Name the profile](../media/v0.1.1-alpha.1/agent/agent-05-name.png)

<a id="walkthrough-06-endpoint"></a>
### 06 · Enter the local demo URL

[Video 00:15](../media/v0.1.1-alpha.1/agent/agent.mp4#t=15.692) · [Back to the video](#walkthrough-video)

![06 · Enter the local demo URL](../media/v0.1.1-alpha.1/agent/agent-06-endpoint.png)

<a id="walkthrough-07-model"></a>
### 07 · Enter the model ID

[Video 00:18](../media/v0.1.1-alpha.1/agent/agent.mp4#t=18.583) · [Back to the video](#walkthrough-video)

![07 · Enter the model ID](../media/v0.1.1-alpha.1/agent/agent-07-model.png)

<a id="walkthrough-08-context"></a>
### 08 · Set the context window

[Video 00:21](../media/v0.1.1-alpha.1/agent/agent.mp4#t=21.434) · [Back to the video](#walkthrough-video)

![08 · Set the context window](../media/v0.1.1-alpha.1/agent/agent-08-context.png)

<a id="walkthrough-09-output"></a>
### 09 · Set maximum output

[Video 00:24](../media/v0.1.1-alpha.1/agent/agent.mp4#t=24.285) · [Back to the video](#walkthrough-video)

![09 · Set maximum output](../media/v0.1.1-alpha.1/agent/agent-09-output.png)

<a id="walkthrough-10-test"></a>
### 10 · Test the actual connection

[Video 00:27](../media/v0.1.1-alpha.1/agent/agent.mp4#t=27.184) · [Back to the video](#walkthrough-video)

![10 · Test the actual connection](../media/v0.1.1-alpha.1/agent/agent-10-test.png)

<a id="walkthrough-11-save"></a>
### 11 · Save the verified model

[Video 00:30](../media/v0.1.1-alpha.1/agent/agent.mp4#t=30.192) · [Back to the video](#walkthrough-video)

![11 · Save the verified model](../media/v0.1.1-alpha.1/agent/agent-11-save.png)

<a id="walkthrough-12-panel"></a>
### 12 · Open the Agent panel

[Video 00:33](../media/v0.1.1-alpha.1/agent/agent.mp4#t=33.232) · [Back to the video](#walkthrough-video)

![12 · Open the Agent panel](../media/v0.1.1-alpha.1/agent/agent-12-panel.png)

<a id="walkthrough-13-chat"></a>
### 13 · Create a Chat

[Video 00:36](../media/v0.1.1-alpha.1/agent/agent.mp4#t=36.185) · [Back to the video](#walkthrough-video)

![13 · Create a Chat](../media/v0.1.1-alpha.1/agent/agent-13-chat.png)

<a id="walkthrough-14-prompt"></a>
### 14 · Enter a scoped question

[Video 00:39](../media/v0.1.1-alpha.1/agent/agent.mp4#t=39.134) · [Back to the video](#walkthrough-video)

![14 · Enter a scoped question](../media/v0.1.1-alpha.1/agent/agent-14-prompt.png)

<a id="walkthrough-15-send"></a>
### 15 · Send and read the demo response

[Video 00:41](../media/v0.1.1-alpha.1/agent/agent.mp4#t=41.983) · [Back to the video](#walkthrough-video)

![15 · Send and read the demo response](../media/v0.1.1-alpha.1/agent/agent-15-send.png)

<a id="walkthrough-16-context"></a>
### 16 · Inspect context usage

[Video 00:44](../media/v0.1.1-alpha.1/agent/agent.mp4#t=44.982) · [Back to the video](#walkthrough-video)

![16 · Inspect context usage](../media/v0.1.1-alpha.1/agent/agent-16-context.png)

<a id="walkthrough-17-auto"></a>
### 17 · Inspect Auto mode

[Video 00:47](../media/v0.1.1-alpha.1/agent/agent.mp4#t=47.901) · [Back to the video](#walkthrough-video)

![17 · Inspect Auto mode](../media/v0.1.1-alpha.1/agent/agent-17-auto.png)

<a id="walkthrough-18-ask"></a>
### 18 · Restore Ask

[Video 00:50](../media/v0.1.1-alpha.1/agent/agent.mp4#t=50.833) · [Back to the video](#walkthrough-video)

![18 · Restore Ask](../media/v0.1.1-alpha.1/agent/agent-18-ask.png)

<a id="walkthrough-18a-tool-question"></a>
### 19 · Request a Tool requiring approval

[Video 00:53](../media/v0.1.1-alpha.1/agent/agent.mp4#t=53.733) · [Back to the video](#walkthrough-video)

![19 · Request a Tool requiring approval](../media/v0.1.1-alpha.1/agent/agent-18a-tool-question.png)

<a id="walkthrough-18b-deny"></a>
### 20 · Deny one Tool call

[Video 00:56](../media/v0.1.1-alpha.1/agent/agent.mp4#t=56.735) · [Back to the video](#walkthrough-video)

![20 · Deny one Tool call](../media/v0.1.1-alpha.1/agent/agent-18b-deny.png)

<a id="walkthrough-18c-tool-again"></a>
### 21 · Request again and review the target

[Video 00:59](../media/v0.1.1-alpha.1/agent/agent.mp4#t=59.735) · [Back to the video](#walkthrough-video)

![21 · Request again and review the target](../media/v0.1.1-alpha.1/agent/agent-18c-tool-again.png)

<a id="walkthrough-18d-allow"></a>
### 22 · Allow actual Recording pause

[Video 01:02](../media/v0.1.1-alpha.1/agent/agent.mp4#t=62.833) · [Back to the video](#walkthrough-video)

![22 · Allow actual Recording pause](../media/v0.1.1-alpha.1/agent/agent-18d-allow.png)

<a id="walkthrough-19-stream"></a>
### 23 · Start a stoppable demonstration

[Video 01:05](../media/v0.1.1-alpha.1/agent/agent.mp4#t=65.834) · [Back to the video](#walkthrough-video)

![23 · Start a stoppable demonstration](../media/v0.1.1-alpha.1/agent/agent-19-stream.png)

<a id="walkthrough-20-stop"></a>
### 24 · Stop while retaining history

[Video 01:08](../media/v0.1.1-alpha.1/agent/agent.mp4#t=68.833) · [Back to the video](#walkthrough-video)

![24 · Stop while retaining history](../media/v0.1.1-alpha.1/agent/agent-20-stop.png)

<a id="walkthrough-21-retry"></a>
### 25 · Retry as a new attempt

[Video 01:11](../media/v0.1.1-alpha.1/agent/agent.mp4#t=71.786) · [Back to the video](#walkthrough-video)

![25 · Retry as a new attempt](../media/v0.1.1-alpha.1/agent/agent-21-retry.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="先决定是否需要-ai"></a>
## Decide whether you need AI

Agent is an optional side panel, not a capture prerequisite. Capture, Rules, Breakpoints and Composer work without a model account.

The internal Agent uses App-configured models; external MCP hosts use their own model configuration. Sharing business tools does not make their login or permissions identical.

<a id="models"></a>
## Add and verify a model

**Prerequisites:** authorized provider access and awareness of possible charges. Enter credentials only in the product's configuration dialog.

This uses a deterministic local demonstration service without a key, not commercial-model acceptance. `54446` is its recording-only dynamic port. The App does not create that service; prepare your own compatible test service first. Context/output numbers are configured examples, not measured model capacity.

1. Open Settings, then Agent.

   ![Opening Settings](../media/v0.1.1-alpha.1/agent/agent-01-settings.png)

   ![Opening Agent model settings](../media/v0.1.1-alpha.1/agent/agent-02-agent-settings.png)

2. Add a model.

   ![Actual add-model dialog](../media/v0.1.1-alpha.1/agent/agent-03-add.png)

3. Select Custom OpenAI-compatible. DeepSeek uses its fixed official endpoint and needs your own key and Model ID; that paid-service branch is image pending / blocked, not certified by this local demo.

   ![Actually selecting Custom](../media/v0.1.1-alpha.1/agent/agent-04-custom.png)

4. Enter Profile name `Guide local demo`.

   ![Actual profile name Guide local demo](../media/v0.1.1-alpha.1/agent/agent-05-name.png)

5. Enter Base URL `http://127.0.0.1:54446/guide/v1`, with no key for this local service. Credential input for an authenticated service remains image pending.

   ![Actual loopback demo endpoint](../media/v0.1.1-alpha.1/agent/agent-06-endpoint.png)

6. Enter Model ID `guide-demo-model`.

   ![Actual Model ID](../media/v0.1.1-alpha.1/agent/agent-07-model.png)

7. Enter Context Window `131072`.

   ![This example's Context Window](../media/v0.1.1-alpha.1/agent/agent-08-context.png)

8. Enter Maximum Output `8192`.

   ![This example's Maximum Output](../media/v0.1.1-alpha.1/agent/agent-09-output.png)

9. Test connection and wait for the actual HTTP model request.

   ![Actual connection test against the local demo service](../media/v0.1.1-alpha.1/agent/agent-10-test.png)

10. Save after success and inspect identity/status in Configured models.

    ![Saving verified Guide local demo](../media/v0.1.1-alpha.1/agent/agent-11-save.png)

11. Retest after changing connection fields; do not reuse the earlier test result.

    These accurately reuse the separate `agent-management` example: change `Guide model two` to Model ID `guide-two-edited`, then Test and Save. This is not silently changing the preceding `Guide local demo` into another configuration.

    ![Actually editing the second Model ID](../media/v0.1.1-alpha.1/agent-management/agent-management-02-edit.png)

    ![Actually retesting changed fields](../media/v0.1.1-alpha.1/agent-management/agent-management-03-retest.png)

    ![Saving the retested configuration](../media/v0.1.1-alpha.1/agent-management/agent-management-04-save-edit.png)

**Expected result:** the saved configuration is the one you tested and appears in the model selector.

**Notes**

- Test connection makes a real model request, not only a URL-format check.
- Remote Custom endpoints require HTTPS; HTTP is limited to supported loopback addresses.
- “OpenAI-compatible” does not guarantee every provider extension. Use its actual Base URL and Model ID.
- Context/output values must match real support; larger numbers do not expand server capacity.
- Resolve secure-storage errors instead of saving keys in plaintext to bypass them.

<a id="manage-models"></a>
## Edit, choose defaults and remove models

This section uses the two key-free profiles created and tested in the [management recording](#walkthrough-agent-management). `51439` is this local service's dynamic port, not a fixed replacement for the earlier `54446`, nor commercial-model acceptance.

| Profile | Base URL | Model ID |
| --- | --- | --- |
| `Guide model one` | `http://127.0.0.1:51439/guide-one/v1` | `guide-one` |
| `Guide model two` | `http://127.0.0.1:51439/guide-two/v1` | Initially `guide-two`; Edit below changes it to `guide-two-edited` |

1. Edit the second profile in Configured models and change Model ID to `guide-two-edited`.

   ![Actually editing Guide model two](../media/v0.1.1-alpha.1/agent-management/agent-management-02-edit.png)

2. Test connection again instead of reusing the initial add-model test.

   ![Actual retest after editing](../media/v0.1.1-alpha.1/agent-management/agent-management-03-retest.png)

3. Save after success.

   ![Actually saving the edited profile](../media/v0.1.1-alpha.1/agent-management/agent-management-04-save-edit.png)

4. First create a Chat using the first default model.

   ![First Chat before changing the global default](../media/v0.1.1-alpha.1/agent-management/agent-management-05-first-chat.png)

5. Rename it `Guide chat one` to distinguish it later.

   ![Actually naming Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-06-chat-name.png)

6. Set `Guide model two` as the global default. This affects subsequent new Chats, without automatically switching existing `Guide chat one`.

   ![Actually making the second model the global default](../media/v0.1.1-alpha.1/agent-management/agent-management-07-default.png)

7. To change existing `Guide chat one`, separately operate its Model Select and inspect the selected entry. This changes the current Chat, not the global default again.

   ![Actually changing only the current Chat model](../media/v0.1.1-alpha.1/agent-management/agent-management-08-current-model.png)

8. Create a second Chat and inspect its new default configuration; naming and selection follow below.

   ![Actually creating the second Chat after changing default](../media/v0.1.1-alpha.1/agent-management/agent-management-09-new-chat.png)

9. Later cleanup removes only the first unnecessary demo Provider. Review its confirmation and any chats still using it first.

   ![Actual confirmation for removing the first Provider](../media/v0.1.1-alpha.1/agent-management/agent-management-17-remove-model-dialog.png)

10. Confirm removal of `Guide model one`, retaining the second profile.

    ![Actually removing the first demo Provider](../media/v0.1.1-alpha.1/agent-management/agent-management-18-remove-model.png)

11. For a credentialed Custom service, still explicitly retain, replace or remove the stored key; DeepSeek requires a valid key.

    **Image pending / blocked:** neither local profile has a key. They do not cover credential management or commercial-model connections.

12. Removing the final model requires configuration again before model calls can continue.

    **Image pending:** this recording retains `Guide model two`, without removing the final model or verifying the unconfigured state.

**Expected result:** global defaults and current-chat selection remain separate, without silently reordering model rows.

**Notes:** deleting local configuration does not revoke a provider account/key. Revoke leaked credentials at the provider.

<a id="chat"></a>
## Start a well-scoped conversation

1. Open Agent using the button near window controls.

   ![Actually opening Agent](../media/v0.1.1-alpha.1/agent/agent-12-panel.png)

2. Create a Chat and inspect model and Ask/Auto mode.

   ![New Chat using the local demo model](../media/v0.1.1-alpha.1/agent/agent-13-chat.png)

3. Enter the actual prompt `Explain Pause and Clear. Do not change settings.` This asks for an explanation, not traffic queries or modifications.

   ![Read-only question matching the recording](../media/v0.1.1-alpha.1/agent/agent-14-prompt.png)

4. Click Send and read the answer starting with `Demo response:`. `Ctrl+Enter` / macOS `Command+Enter` is also available; keyboard sending remains image pending.

   ![Actual local demonstration answer, not commercial-model quality evidence](../media/v0.1.1-alpha.1/agent/agent-15-send.png)

5. If a task produces Tool calls, inspect calls/results and effects before approving.

   **Image pending for this question:** this explanation did not execute a business Tool. The real Pause approval below uses a different prompt.

6. Verify results in the relevant product workspace.

   **Image pending for this question:** this is only an explanation, with no configuration mutation to verify. The Pause example below has its own actual state.

**Expected result:** a conversation with an explicit scope, where explanation and actual execution are distinguishable.

**Notes**

- Selecting a request or changing workspace does not implicitly attach it to model context.
- Read current records through authorized tools; do not ask the model to invent IDs.
- Instructions contained in captured pages, bodies or logs are untrusted data, not your authorization.

<a id="sessions"></a>
## Manage chats and restore history

This continues `agent-management`, not the earlier single `Guide local demo` Chat. The two sessions are `Guide chat one` and `Guide chat two`.

1. Create the first Chat before the preceding section's global-default change.

   ![Actually creating the first demo Chat](../media/v0.1.1-alpha.1/agent-management/agent-management-05-first-chat.png)

2. Rename it `Guide chat one`.

   ![Actually renaming the first Chat](../media/v0.1.1-alpha.1/agent-management/agent-management-06-chat-name.png)

3. After the separate default/current-model operations above, use New Chat for a second task instead of reusing the first.

   ![Actually creating a second Chat with an existing session](../media/v0.1.1-alpha.1/agent-management/agent-management-09-new-chat.png)

4. Rename it `Guide chat two`.

   ![Actually renaming the second Chat](../media/v0.1.1-alpha.1/agent-management/agent-management-10-second-name.png)

5. Use Chat selector to return to `Guide chat one` and verify the selected target.

   ![Actually returning to Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-11-switch-chat.png)

6. Open Delete confirmation and inspect the session name.

   ![First actual Chat deletion confirmation](../media/v0.1.1-alpha.1/agent-management/agent-management-12-delete-dialog.png)

7. Cancel first, retaining that Chat.

   ![Actually cancelling Chat deletion](../media/v0.1.1-alpha.1/agent-management/agent-management-13-cancel-delete.png)

8. Later in this recording, after capability checks and Provider cleanup, open Delete for `Guide chat one` again.

   ![Confirming the actual Chat to delete again](../media/v0.1.1-alpha.1/agent-management/agent-management-19-delete-chat-dialog.png)

9. Confirm deletion of `Guide chat one` and inspect the remaining sessions. The cancellation image is not deletion.

   ![Actually deleting Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-20-delete-chat.png)

10. When deleting an actively executing Chat, wait for its cancellation cleanup.

    **Image pending:** this recording does not delete a running Turn; ordinary deletion does not cover that branch.

11. Restart normally, reopen Agent and inspect retained sessions/state.

    **Image pending:** the new Workspace restart clip checks Collection, Privacy and Capture, not Agent conversation history.

**Expected result:** history persists locally. Navigating workspaces does not close the panel, and closing the panel does not delete a Chat.

**Notes:** restoring history does not replay prior side effects. Old Capture IDs can become invalid after Core restarts.

<a id="context"></a>
## Read context and usage

1. Inspect the Context ring and details above the input: current context, window limit and available input, output, total and cache figures.

   ![Actual Context usage details for this demonstration](../media/v0.1.1-alpha.1/agent/agent-16-context.png)

2. Hover or keyboard-focus can reveal the explanation; the separate keyboard-focus interaction remains image pending.

   **Image pending:** one open detail image is not evidence that both input methods were recorded.

3. Decide whether a separate Chat would reduce unrelated context.

   **Image pending:** creating a second Chat based on usage was not recorded as a complete flow.

**Expected result:** distinguish current/recent request context from cumulative session consumption.

**Notes**

- Current Context is not the visible App workspace or cumulative token count.
- Cache hit/miss are parts of input, not extra tokens to add again.
- Missing provider metrics are unavailable, not zero.
- Remaining context must also accommodate output; it is not a guaranteed generation length.
- Token usage is not automatically a monetary bill or automatic spending stop.

<a id="tools"></a>
## Let Agent use product tools

1. First inspect enforcement using `agent-management`: find `capture_stop_recording` in Tool capabilities and disable its Agent column, not `capture_clear` or the MCP column.

   ![Actually disabling the Agent stop-recording capability](../media/v0.1.1-alpha.1/agent-management/agent-management-14-disable-tool.png)

2. Have the local demo model request that disabled Tool and inspect the actual `unknown_tool` refusal, not a successful pause. This is unavailable capability, not a user clicking Deny in Ask or a model connection failure.

   ![Actual unknown_tool refusal without executing the disabled Tool](../media/v0.1.1-alpha.1/agent-management/agent-management-15-enforcement.png)

3. Restore the Agent capability to its pre-exercise state. Restoring the switch does not replay the rejected call.

   ![Actually restoring capture_stop_recording permission](../media/v0.1.1-alpha.1/agent-management/agent-management-16-restore-tool.png)

4. The following accurately reuses `Guide local demo` from the original `agent` clip to demonstrate approval for an enabled capability. Keep Ask in that Chat.

   ![Actually restoring Ask](../media/v0.1.1-alpha.1/agent/agent-18-ask.png)

5. Enter `Pause recording after asking me.` Inspect `capture_stop_recording` and its effect on new recording, not Clear or proxy restoration.

   ![Actual Pause request and pending Tool approval](../media/v0.1.1-alpha.1/agent/agent-18a-tool-question.png)

6. Deny the first request and inspect the refusal.

   ![Actually denying one pause operation](../media/v0.1.1-alpha.1/agent/agent-18b-deny.png)

7. Request the same scoped action again and review the new target. A past denial is not the new approval.

   ![New approval after requesting again](../media/v0.1.1-alpha.1/agent/agent-18c-tool-again.png)

8. Allow and inspect actual execution and the Recording state.

   ![Recording actually paused after Allow](../media/v0.1.1-alpha.1/agent/agent-18d-allow.png)

9. For other tools needing native file/system prompts, finish them after Allow and inspect the terminal state.

   **Image pending:** Pause does not need those native dialogs; other tools' file/authorization steps were not recorded here.

**Expected result:** authorized actions use formal product operations and update the relevant UI.

**Notes:** see [permissions](tool-permissions.md) for query/change types and independent entry points. “Done” in model text is not a substitute for Tool results or real state.

<a id="stop-retry"></a>
## Stop, inspect failure and retry

1. Start the stoppable local streaming demonstration and observe the active turn.

   ![Demonstration still running before Stop](../media/v0.1.1-alpha.1/agent/agent-19-stream.png)

2. Stop when no longer needed, wait for cancellation and inspect preserved history.

   ![Actual Chat history retained after Stop](../media/v0.1.1-alpha.1/agent/agent-20-stop.png)

3. Inspect actual state, then use the offered Retry for a new attempt. A network-failure branch was not recorded here.

   ![Actual new Retry attempt](../media/v0.1.1-alpha.1/agent/agent-21-retry.png)

4. Before retrying a possibly sent request, export or setting change, verify what already happened.

   **Image pending:** this streaming demonstration has no such business side effects; side-effectful Stop/Retry comparisons were not recorded.

5. Send a new message to clarify the allowed scope when needed.

   **Image pending:** a new scope-defining message after Retry was not recorded.

**Expected result:** stopping preserves the Chat and completed history. Failures stay visible.

**Notes**

- Stop is not undo or Breakpoint Continue.
- The formal Chat UI does not expose a general Continue for an active turn merely because an internal runtime supports checkpoints.
- Switching to Auto does not approve an already-pending question.
- A stream that already displayed content is not assumed safe to replay automatically.

<a id="privacy"></a>
## Understand the model-data boundary

- Local configuration/history does not mean conversation stays on the device.
- Prompts and Tool results included in context go to the configured model service.
- Enable only needed capabilities and avoid sending personal traffic, keys or sensitive bodies.
- Redaction does not recognize every possible business secret.
- Captured webpages/logs are data, not authorization to expand the task.
- Disabling Agent access does not disable MCP or revoke provider credentials.

<!-- recorded-walkthrough:agent-management:start -->
<a id="walkthrough-agent-management"></a>
## Recorded walkthrough: models, Chats and capability enforcement

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.

> This keyless local model returns fixed public demonstration replies. The video shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.

| Example field | Actual recorded value |
| --- | --- |
| <code>firstProfile</code> | <code>Guide model one</code> |
| <code>secondProfile</code> | <code>Guide model two</code> |
| <code>firstModel</code> | <code>guide-one</code> |
| <code>editedModel</code> | <code>guide-two-edited</code> |
| <code>firstEndpoint</code> | <code>http://127.0.0.1:51439/guide-one/v1</code> |
| <code>secondEndpoint</code> | <code>http://127.0.0.1:51439/guide-two/v1</code> |
| <code>firstChat</code> | <code>Guide chat one</code> |
| <code>secondChat</code> | <code>Guide chat two</code> |
| <code>tool</code> | <code>capture_stop_recording</code> |
| <code>credentials</code> | <code>none</code> |

<a id="walkthrough-agent-management-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/agent-management/agent-management.mp4" poster="../media/v0.1.1-alpha.1/agent-management/agent-management-01-settings.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/agent-management/agent-management.vtt" default>
</video>

<a id="walkthrough-agent-management-01-settings"></a>
### 01 · Open Agent settings

[Video 00:00](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=0.324) · [Back to the video](#walkthrough-agent-management-video)

![01 · Open Agent settings](../media/v0.1.1-alpha.1/agent-management/agent-management-01-settings.png)

<a id="walkthrough-agent-management-guide-one-01-dialog"></a>
### 02 · Add Guide model one

[Video 00:03](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=3.693) · [Back to the video](#walkthrough-agent-management-video)

![02 · Add Guide model one](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-01-dialog.png)

<a id="walkthrough-agent-management-guide-one-02-name"></a>
### 03 · Enter Guide model one

[Video 00:07](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=7.131) · [Back to the video](#walkthrough-agent-management-video)

![03 · Enter Guide model one](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-02-name.png)

<a id="walkthrough-agent-management-guide-one-03-endpoint"></a>
### 04 · Enter the local demo endpoint

[Video 00:09](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=9.986) · [Back to the video](#walkthrough-agent-management-video)

![04 · Enter the local demo endpoint](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-03-endpoint.png)

<a id="walkthrough-agent-management-guide-one-04-model"></a>
### 05 · Enter guide-one

[Video 00:12](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=12.839) · [Back to the video](#walkthrough-agent-management-video)

![05 · Enter guide-one](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-04-model.png)

<a id="walkthrough-agent-management-guide-one-05-test"></a>
### 06 · Test the connection

[Video 00:15](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=15.781) · [Back to the video](#walkthrough-agent-management-video)

![06 · Test the connection](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-05-test.png)

<a id="walkthrough-agent-management-guide-one-06-save"></a>
### 07 · Save verified configuration

[Video 00:18](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=18.730) · [Back to the video](#walkthrough-agent-management-video)

![07 · Save verified configuration](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-06-save.png)

<a id="walkthrough-agent-management-guide-two-01-dialog"></a>
### 08 · Add Guide model two

[Video 00:21](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=21.746) · [Back to the video](#walkthrough-agent-management-video)

![08 · Add Guide model two](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-01-dialog.png)

<a id="walkthrough-agent-management-guide-two-02-name"></a>
### 09 · Enter Guide model two

[Video 00:25](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=25.032) · [Back to the video](#walkthrough-agent-management-video)

![09 · Enter Guide model two](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-02-name.png)

<a id="walkthrough-agent-management-guide-two-03-endpoint"></a>
### 10 · Enter the local demo endpoint

[Video 00:27](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=27.890) · [Back to the video](#walkthrough-agent-management-video)

![10 · Enter the local demo endpoint](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-03-endpoint.png)

<a id="walkthrough-agent-management-guide-two-04-model"></a>
### 11 · Enter guide-two

[Video 00:30](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=30.793) · [Back to the video](#walkthrough-agent-management-video)

![11 · Enter guide-two](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-04-model.png)

<a id="walkthrough-agent-management-guide-two-05-test"></a>
### 12 · Test the connection

[Video 00:33](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=33.781) · [Back to the video](#walkthrough-agent-management-video)

![12 · Test the connection](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-05-test.png)

<a id="walkthrough-agent-management-guide-two-06-save"></a>
### 13 · Save verified configuration

[Video 00:36](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=36.781) · [Back to the video](#walkthrough-agent-management-video)

![13 · Save verified configuration](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-06-save.png)

<a id="walkthrough-agent-management-02-edit"></a>
### 14 · Edit the second Model ID

[Video 00:39](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=39.812) · [Back to the video](#walkthrough-agent-management-video)

![14 · Edit the second Model ID](../media/v0.1.1-alpha.1/agent-management/agent-management-02-edit.png)

<a id="walkthrough-agent-management-03-retest"></a>
### 15 · Retest changed configuration

[Video 00:42](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=42.789) · [Back to the video](#walkthrough-agent-management-video)

![15 · Retest changed configuration](../media/v0.1.1-alpha.1/agent-management/agent-management-03-retest.png)

<a id="walkthrough-agent-management-04-save-edit"></a>
### 16 · Save the edit

[Video 00:45](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=45.782) · [Back to the video](#walkthrough-agent-management-video)

![16 · Save the edit](../media/v0.1.1-alpha.1/agent-management/agent-management-04-save-edit.png)

<a id="walkthrough-agent-management-05-first-chat"></a>
### 17 · Create a Chat with the first default

[Video 00:48](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=48.832) · [Back to the video](#walkthrough-agent-management-video)

![17 · Create a Chat with the first default](../media/v0.1.1-alpha.1/agent-management/agent-management-05-first-chat.png)

<a id="walkthrough-agent-management-06-chat-name"></a>
### 18 · Rename Guide chat one

[Video 00:51](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=51.931) · [Back to the video](#walkthrough-agent-management-video)

![18 · Rename Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-06-chat-name.png)

<a id="walkthrough-agent-management-07-default"></a>
### 19 · Make the second model the default

[Video 00:55](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=55.089) · [Back to the video](#walkthrough-agent-management-video)

![19 · Make the second model the default](../media/v0.1.1-alpha.1/agent-management/agent-management-07-default.png)

<a id="walkthrough-agent-management-08-current-model"></a>
### 20 · Change only the current Chat model

[Video 00:58](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=58.131) · [Back to the video](#walkthrough-agent-management-video)

![20 · Change only the current Chat model](../media/v0.1.1-alpha.1/agent-management/agent-management-08-current-model.png)

<a id="walkthrough-agent-management-09-new-chat"></a>
### 21 · Create a second Chat

[Video 01:01](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=61.437) · [Back to the video](#walkthrough-agent-management-video)

![21 · Create a second Chat](../media/v0.1.1-alpha.1/agent-management/agent-management-09-new-chat.png)

<a id="walkthrough-agent-management-10-second-name"></a>
### 22 · Rename Guide chat two

[Video 01:04](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=64.331) · [Back to the video](#walkthrough-agent-management-video)

![22 · Rename Guide chat two](../media/v0.1.1-alpha.1/agent-management/agent-management-10-second-name.png)

<a id="walkthrough-agent-management-11-switch-chat"></a>
### 23 · Return to Guide chat one

[Video 01:07](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=67.587) · [Back to the video](#walkthrough-agent-management-video)

![23 · Return to Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-11-switch-chat.png)

<a id="walkthrough-agent-management-12-delete-dialog"></a>
### 24 · Review Chat deletion

[Video 01:10](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=70.535) · [Back to the video](#walkthrough-agent-management-video)

![24 · Review Chat deletion](../media/v0.1.1-alpha.1/agent-management/agent-management-12-delete-dialog.png)

<a id="walkthrough-agent-management-13-cancel-delete"></a>
### 25 · Cancel deletion

[Video 01:13](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=73.531) · [Back to the video](#walkthrough-agent-management-video)

![25 · Cancel deletion](../media/v0.1.1-alpha.1/agent-management/agent-management-13-cancel-delete.png)

<a id="walkthrough-agent-management-14-disable-tool"></a>
### 26 · Disable the Agent stop-recording Tool

[Video 01:16](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=76.431) · [Back to the video](#walkthrough-agent-management-video)

![26 · Disable the Agent stop-recording Tool](../media/v0.1.1-alpha.1/agent-management/agent-management-14-disable-tool.png)

<a id="walkthrough-agent-management-15-enforcement"></a>
### 27 · Verify a disabled Tool cannot execute

[Video 01:19](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=79.386) · [Back to the video](#walkthrough-agent-management-video)

![27 · Verify a disabled Tool cannot execute](../media/v0.1.1-alpha.1/agent-management/agent-management-15-enforcement.png)

<a id="walkthrough-agent-management-16-restore-tool"></a>
### 28 · Restore the original capability

[Video 01:22](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=82.431) · [Back to the video](#walkthrough-agent-management-video)

![28 · Restore the original capability](../media/v0.1.1-alpha.1/agent-management/agent-management-16-restore-tool.png)

<a id="walkthrough-agent-management-17-remove-model-dialog"></a>
### 29 · Review removing an unused Provider

[Video 01:25](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=85.331) · [Back to the video](#walkthrough-agent-management-video)

![29 · Review removing an unused Provider](../media/v0.1.1-alpha.1/agent-management/agent-management-17-remove-model-dialog.png)

<a id="walkthrough-agent-management-18-remove-model"></a>
### 30 · Remove the first demo Provider

[Video 01:28](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=88.231) · [Back to the video](#walkthrough-agent-management-video)

![30 · Remove the first demo Provider](../media/v0.1.1-alpha.1/agent-management/agent-management-18-remove-model.png)

<a id="walkthrough-agent-management-19-delete-chat-dialog"></a>
### 31 · Review deleting the demo Chat

[Video 01:31](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=91.179) · [Back to the video](#walkthrough-agent-management-video)

![31 · Review deleting the demo Chat](../media/v0.1.1-alpha.1/agent-management/agent-management-19-delete-chat-dialog.png)

<a id="walkthrough-agent-management-20-delete-chat"></a>
### 32 · Delete Guide chat one

[Video 01:34](../media/v0.1.1-alpha.1/agent-management/agent-management.mp4#t=94.131) · [Back to the video](#walkthrough-agent-management-video)

![32 · Delete Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-20-delete-chat.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:agent-management:end -->
