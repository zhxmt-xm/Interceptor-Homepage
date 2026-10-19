# Agent: use conversation to assist debugging

> Draft for `v0.1.1-alpha.1`; real local-demo model steps are illustrated, with other branches marked image pending. Neither this chapter nor item9 is complete. Model capability, price and availability belong to its provider; no credentials or correctness guarantee are supplied.

[Guide directory](../README.en.md) · [Tool permissions](tool-permissions.md) · [MCP](mcp.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

> This keyless local model returns fixed public demonstration replies. The walkthrough shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.

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

<a id="walkthrough-01-settings"></a>
### 01 · Open Settings

![01 · Open Settings](../media/v0.1.1-alpha.1/agent/agent-01-settings.png)

<a id="walkthrough-02-agent-settings"></a>
### 02 · Open Agent settings

![02 · Open Agent settings](../media/v0.1.1-alpha.1/agent/agent-02-agent-settings.png)

<a id="walkthrough-03-add"></a>
### 03 · Add a model

![03 · Add a model](../media/v0.1.1-alpha.1/agent/agent-03-add.png)

<a id="walkthrough-04-custom"></a>
### 04 · Choose Custom

![04 · Choose Custom](../media/v0.1.1-alpha.1/agent/agent-04-custom.png)

<a id="walkthrough-05-name"></a>
### 05 · Name the profile

![05 · Name the profile](../media/v0.1.1-alpha.1/agent/agent-05-name.png)

<a id="walkthrough-06-endpoint"></a>
### 06 · Enter the local demo URL

![06 · Enter the local demo URL](../media/v0.1.1-alpha.1/agent/agent-06-endpoint.png)

<a id="walkthrough-07-model"></a>
### 07 · Enter the model ID

![07 · Enter the model ID](../media/v0.1.1-alpha.1/agent/agent-07-model.png)

<a id="walkthrough-08-context"></a>
### 08 · Set the context window

![08 · Set the context window](../media/v0.1.1-alpha.1/agent/agent-08-context.png)

<a id="walkthrough-09-output"></a>
### 09 · Set maximum output

![09 · Set maximum output](../media/v0.1.1-alpha.1/agent/agent-09-output.png)

<a id="walkthrough-10-test"></a>
### 10 · Test the actual connection

![10 · Test the actual connection](../media/v0.1.1-alpha.1/agent/agent-10-test.png)

<a id="walkthrough-11-save"></a>
### 11 · Save the verified model

![11 · Save the verified model](../media/v0.1.1-alpha.1/agent/agent-11-save.png)

<a id="walkthrough-12-panel"></a>
### 12 · Open the Agent panel

![12 · Open the Agent panel](../media/v0.1.1-alpha.1/agent/agent-12-panel.png)

<a id="walkthrough-13-chat"></a>
### 13 · Create a Chat

![13 · Create a Chat](../media/v0.1.1-alpha.1/agent/agent-13-chat.png)

<a id="walkthrough-14-prompt"></a>
### 14 · Enter a scoped question

![14 · Enter a scoped question](../media/v0.1.1-alpha.1/agent/agent-14-prompt.png)

<a id="walkthrough-15-send"></a>
### 15 · Send and read the demo response

![15 · Send and read the demo response](../media/v0.1.1-alpha.1/agent/agent-15-send.png)

<a id="walkthrough-16-context"></a>
### 16 · Inspect context usage

![16 · Inspect context usage](../media/v0.1.1-alpha.1/agent/agent-16-context.png)

<a id="walkthrough-17-auto"></a>
### 17 · Inspect Auto mode

![17 · Inspect Auto mode](../media/v0.1.1-alpha.1/agent/agent-17-auto.png)

<a id="walkthrough-18-ask"></a>
### 18 · Restore Ask

![18 · Restore Ask](../media/v0.1.1-alpha.1/agent/agent-18-ask.png)

<a id="walkthrough-18a-tool-question"></a>
### 19 · Request a Tool requiring approval

![19 · Request a Tool requiring approval](../media/v0.1.1-alpha.1/agent/agent-18a-tool-question.png)

<a id="walkthrough-18b-deny"></a>
### 20 · Deny one Tool call

![20 · Deny one Tool call](../media/v0.1.1-alpha.1/agent/agent-18b-deny.png)

<a id="walkthrough-18c-tool-again"></a>
### 21 · Request again and review the target

![21 · Request again and review the target](../media/v0.1.1-alpha.1/agent/agent-18c-tool-again.png)

<a id="walkthrough-18d-allow"></a>
### 22 · Allow actual Recording pause

![22 · Allow actual Recording pause](../media/v0.1.1-alpha.1/agent/agent-18d-allow.png)

<a id="walkthrough-19-stream"></a>
### 23 · Start a stoppable demonstration

![23 · Start a stoppable demonstration](../media/v0.1.1-alpha.1/agent/agent-19-stream.png)

<a id="walkthrough-20-stop"></a>
### 24 · Stop while retaining history

![24 · Stop while retaining history](../media/v0.1.1-alpha.1/agent/agent-20-stop.png)

<a id="walkthrough-21-retry"></a>
### 25 · Retry as a new attempt

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

    This separate example uses `Guide session demo`, not `Guide model two` above. The [final-model removal steps](#walkthrough-agent-model-removal) retains the safe Settings ending of the earlier source recording. A later [complete restart walkthrough](#walkthrough-agent-session-restart) has its own source; their images are not mixed.

    ![Reviewing confirmation for the only remaining model](../media/v0.1.1-alpha.1/agent-model-removal/agent-session-restart-05-last-model-dialog.png)

    ![The panel actually becomes unconfigured after deletion](../media/v0.1.1-alpha.1/agent-model-removal/agent-session-restart-06-remove-last.png)

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

   This read-only question requests explanation, not a business Tool. The Pause approval below uses a separate, explicit prompt and is not presented as an effect of this reply.

6. Verify results in the relevant product workspace.

   An explanation has no configuration mutation to verify. See the Pause example below and the [Tool lifecycle recording](#walkthrough-agent-tool-lifecycle) for actual operations and state checks.

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

    ![Opening deletion confirmation for a running Chat](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-12-running-delete-dialog.png)

    ![Waiting for actual cancellation and inspecting retained Chats](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-13-delete-running.png)

11. Restart normally, reopen Agent and inspect retained sessions/state.

    The [session actions](#walkthrough-agent-session-lifecycle) and [restart clip](#walkthrough-agent-session-restart) now come from the same successful two-generation App run. Settings is opened before restart recording starts, showing only the public demo Chats rather than background Capture traffic.

    ![The retained Chat list after an actual restart](../media/v0.1.1-alpha.1/agent-session-restart/agent-session-restart-02-chats.png)

    ![Selecting Guide retained chat and reading its actual restored history](../media/v0.1.1-alpha.1/agent-session-restart/agent-session-restart-03-history.png)

    `Guide running delete` is absent; `Guide retained chat` and `Guide fresh context` remain. No model-request replay is verified through that run's local-service count, not inferred from a static picture alone.

**Expected result:** history persists locally. Navigating workspaces does not close the panel, and closing the panel does not delete a Chat.

**Notes:** restoring history does not replay prior side effects. Old Capture IDs can become invalid after Core restarts.

<a id="context"></a>
## Read context and usage

1. Inspect the Context ring and details above the input: current context, window limit and available input, output, total and cache figures.

   ![Actual Context usage details for this demonstration](../media/v0.1.1-alpha.1/agent/agent-16-context.png)

2. Hover or keyboard focus reveals the explanation. The preceding image uses hover; the following image independently records `Shift+Tab` from the message input to Context.

   ![Keyboard-focused Context usage details](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-06-keyboard-context.png)

3. Decide whether a separate Chat would reduce unrelated context.

   ![Creating an independent Chat after inspecting usage](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-08-fresh-chat.png)

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

   The [Diagnostics export recording](#walkthrough-agent-tool-lifecycle-10-export-request) includes native Save after approval. Cancelling does not start export; saving again still requires checking completion. This does not replace Windows system authorization.

   ![Actual native Save destination selection](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-14-native-save.png)

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

   The [actual Tool recording](#walkthrough-agent-tool-lifecycle) allows Pause before stopping the model reply; Recording remains paused. This demo model's Retry continues explanation only, not a promise that another model will never request the Tool again.

   ![Stop does not undo the completed Pause](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-05-stop-after-tool.png)

5. Send a new message to clarify the allowed scope when needed.

   ![Restating a read-only status-query goal after Retry](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-07-clarify.png)

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

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

> This keyless local model returns fixed public demonstration replies. The walkthrough shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.

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

<a id="walkthrough-agent-management-01-settings"></a>
### 01 · Open Agent settings

![01 · Open Agent settings](../media/v0.1.1-alpha.1/agent-management/agent-management-01-settings.png)

<a id="walkthrough-agent-management-guide-one-01-dialog"></a>
### 02 · Add Guide model one

![02 · Add Guide model one](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-01-dialog.png)

<a id="walkthrough-agent-management-guide-one-02-name"></a>
### 03 · Enter Guide model one

![03 · Enter Guide model one](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-02-name.png)

<a id="walkthrough-agent-management-guide-one-03-endpoint"></a>
### 04 · Enter the local demo endpoint

![04 · Enter the local demo endpoint](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-03-endpoint.png)

<a id="walkthrough-agent-management-guide-one-04-model"></a>
### 05 · Enter guide-one

![05 · Enter guide-one](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-04-model.png)

<a id="walkthrough-agent-management-guide-one-05-test"></a>
### 06 · Test the connection

![06 · Test the connection](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-05-test.png)

<a id="walkthrough-agent-management-guide-one-06-save"></a>
### 07 · Save verified configuration

![07 · Save verified configuration](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-one-06-save.png)

<a id="walkthrough-agent-management-guide-two-01-dialog"></a>
### 08 · Add Guide model two

![08 · Add Guide model two](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-01-dialog.png)

<a id="walkthrough-agent-management-guide-two-02-name"></a>
### 09 · Enter Guide model two

![09 · Enter Guide model two](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-02-name.png)

<a id="walkthrough-agent-management-guide-two-03-endpoint"></a>
### 10 · Enter the local demo endpoint

![10 · Enter the local demo endpoint](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-03-endpoint.png)

<a id="walkthrough-agent-management-guide-two-04-model"></a>
### 11 · Enter guide-two

![11 · Enter guide-two](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-04-model.png)

<a id="walkthrough-agent-management-guide-two-05-test"></a>
### 12 · Test the connection

![12 · Test the connection](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-05-test.png)

<a id="walkthrough-agent-management-guide-two-06-save"></a>
### 13 · Save verified configuration

![13 · Save verified configuration](../media/v0.1.1-alpha.1/agent-management/agent-management-guide-two-06-save.png)

<a id="walkthrough-agent-management-02-edit"></a>
### 14 · Edit the second Model ID

![14 · Edit the second Model ID](../media/v0.1.1-alpha.1/agent-management/agent-management-02-edit.png)

<a id="walkthrough-agent-management-03-retest"></a>
### 15 · Retest changed configuration

![15 · Retest changed configuration](../media/v0.1.1-alpha.1/agent-management/agent-management-03-retest.png)

<a id="walkthrough-agent-management-04-save-edit"></a>
### 16 · Save the edit

![16 · Save the edit](../media/v0.1.1-alpha.1/agent-management/agent-management-04-save-edit.png)

<a id="walkthrough-agent-management-05-first-chat"></a>
### 17 · Create a Chat with the first default

![17 · Create a Chat with the first default](../media/v0.1.1-alpha.1/agent-management/agent-management-05-first-chat.png)

<a id="walkthrough-agent-management-06-chat-name"></a>
### 18 · Rename Guide chat one

![18 · Rename Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-06-chat-name.png)

<a id="walkthrough-agent-management-07-default"></a>
### 19 · Make the second model the default

![19 · Make the second model the default](../media/v0.1.1-alpha.1/agent-management/agent-management-07-default.png)

<a id="walkthrough-agent-management-08-current-model"></a>
### 20 · Change only the current Chat model

![20 · Change only the current Chat model](../media/v0.1.1-alpha.1/agent-management/agent-management-08-current-model.png)

<a id="walkthrough-agent-management-09-new-chat"></a>
### 21 · Create a second Chat

![21 · Create a second Chat](../media/v0.1.1-alpha.1/agent-management/agent-management-09-new-chat.png)

<a id="walkthrough-agent-management-10-second-name"></a>
### 22 · Rename Guide chat two

![22 · Rename Guide chat two](../media/v0.1.1-alpha.1/agent-management/agent-management-10-second-name.png)

<a id="walkthrough-agent-management-11-switch-chat"></a>
### 23 · Return to Guide chat one

![23 · Return to Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-11-switch-chat.png)

<a id="walkthrough-agent-management-12-delete-dialog"></a>
### 24 · Review Chat deletion

![24 · Review Chat deletion](../media/v0.1.1-alpha.1/agent-management/agent-management-12-delete-dialog.png)

<a id="walkthrough-agent-management-13-cancel-delete"></a>
### 25 · Cancel deletion

![25 · Cancel deletion](../media/v0.1.1-alpha.1/agent-management/agent-management-13-cancel-delete.png)

<a id="walkthrough-agent-management-14-disable-tool"></a>
### 26 · Disable the Agent stop-recording Tool

![26 · Disable the Agent stop-recording Tool](../media/v0.1.1-alpha.1/agent-management/agent-management-14-disable-tool.png)

<a id="walkthrough-agent-management-15-enforcement"></a>
### 27 · Verify a disabled Tool cannot execute

![27 · Verify a disabled Tool cannot execute](../media/v0.1.1-alpha.1/agent-management/agent-management-15-enforcement.png)

<a id="walkthrough-agent-management-16-restore-tool"></a>
### 28 · Restore the original capability

![28 · Restore the original capability](../media/v0.1.1-alpha.1/agent-management/agent-management-16-restore-tool.png)

<a id="walkthrough-agent-management-17-remove-model-dialog"></a>
### 29 · Review removing an unused Provider

![29 · Review removing an unused Provider](../media/v0.1.1-alpha.1/agent-management/agent-management-17-remove-model-dialog.png)

<a id="walkthrough-agent-management-18-remove-model"></a>
### 30 · Remove the first demo Provider

![30 · Remove the first demo Provider](../media/v0.1.1-alpha.1/agent-management/agent-management-18-remove-model.png)

<a id="walkthrough-agent-management-19-delete-chat-dialog"></a>
### 31 · Review deleting the demo Chat

![31 · Review deleting the demo Chat](../media/v0.1.1-alpha.1/agent-management/agent-management-19-delete-chat-dialog.png)

<a id="walkthrough-agent-management-20-delete-chat"></a>
### 32 · Delete Guide chat one

![32 · Delete Guide chat one](../media/v0.1.1-alpha.1/agent-management/agent-management-20-delete-chat.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:agent-management:end -->

<!-- recorded-walkthrough:agent-session-lifecycle:start -->
<a id="walkthrough-agent-session-lifecycle"></a>
## Keyboard, Context, new Chats and running deletion

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

> This keyless local model returns fixed public demonstration replies. The walkthrough shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.

| Example field | Actual recorded value |
| --- | --- |
| <code>profileName</code> | <code>Guide session demo</code> |
| <code>modelId</code> | <code>guide-session-model</code> |
| <code>endpoint</code> | <code>http://127.0.0.1:52300/guide-session/v1</code> |
| <code>prompt</code> | <code>Explain why a fresh Chat has separate context.</code> |
| <code>answer</code> | <code>Demo response: this local example reports usage; a new Chat starts a separate history.</code> |
| <code>reportedInputTokens</code> | <code>120000 (deliberately reported by the local demo, not commercial billing)</code> |
| <code>retainedChat</code> | <code>Guide retained chat</code> |
| <code>freshChat</code> | <code>Guide fresh context</code> |
| <code>deletedRunningChat</code> | <code>Guide running delete</code> |
| <code>closeImage</code> | <code>Before the actual Close; the driver verifies the real shutdown between App generations</code> |

<a id="walkthrough-agent-session-lifecycle-01-panel"></a>
### 01 · Open the Agent panel

![01 · Open the Agent panel](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-01-panel.png)

<a id="walkthrough-agent-session-lifecycle-02-chat"></a>
### 02 · Create the Chat to retain

![02 · Create the Chat to retain](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-02-chat.png)

<a id="walkthrough-agent-session-lifecycle-03-name"></a>
### 03 · Name it Guide retained chat

![03 · Name it Guide retained chat](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-03-name.png)

<a id="walkthrough-agent-session-lifecycle-04-prompt"></a>
### 04 · Enter this run’s public prompt

![04 · Enter this run’s public prompt](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-04-prompt.png)

<a id="walkthrough-agent-session-lifecycle-05-keyboard-send"></a>
### 05 · Send with Command+Enter

![05 · Send with Command+Enter](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-05-keyboard-send.png)

<a id="walkthrough-agent-session-lifecycle-06-keyboard-context"></a>
### 06 · Use actual Tab navigation to read Context

![06 · Use actual Tab navigation to read Context](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-06-keyboard-context.png)

<a id="walkthrough-agent-session-lifecycle-07-dismiss-context"></a>
### 07 · Move focus away from Context

![07 · Move focus away from Context](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-07-dismiss-context.png)

<a id="walkthrough-agent-session-lifecycle-08-fresh-chat"></a>
### 08 · Start a separate Chat after reviewing usage

![08 · Start a separate Chat after reviewing usage](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-08-fresh-chat.png)

<a id="walkthrough-agent-session-lifecycle-09-fresh-name"></a>
### 09 · Name it Guide fresh context

![09 · Name it Guide fresh context](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-09-fresh-name.png)

<a id="walkthrough-agent-session-lifecycle-10-running-chat"></a>
### 10 · Create the running-deletion example

![10 · Create the running-deletion example](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-10-running-chat.png)

<a id="walkthrough-agent-session-lifecycle-11-running-prompt"></a>
### 11 · Start the local held-stream example

![11 · Start the local held-stream example](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-11-running-prompt.png)

<a id="walkthrough-agent-session-lifecycle-12-running-delete-dialog"></a>
### 12 · Open deletion confirmation while running

![12 · Open deletion confirmation while running](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-12-running-delete-dialog.png)

<a id="walkthrough-agent-session-lifecycle-13-delete-running"></a>
### 13 · Confirm deletion and cancel that stream

![13 · Confirm deletion and cancel that stream](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-13-delete-running.png)

<a id="walkthrough-agent-session-lifecycle-14-retained-chat"></a>
### 14 · Return to the retained Chat

![14 · Return to the retained Chat](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-14-retained-chat.png)

<a id="walkthrough-agent-session-lifecycle-15-before-close"></a>
### 15 · Confirm persistent content before normal Close

![15 · Confirm persistent content before normal Close](../media/v0.1.1-alpha.1/agent-session-lifecycle/agent-session-lifecycle-15-before-close.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:agent-session-lifecycle:end -->

<!-- recorded-walkthrough:agent-tool-lifecycle:start -->
<a id="walkthrough-agent-tool-lifecycle"></a>
## Completed Tools, Stop, Retry and native file approval

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

> This keyless local model returns fixed public demonstration replies. The walkthrough shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.

| Example field | Actual recorded value |
| --- | --- |
| <code>model</code> | <code>Guide Tool demo; deterministic local keyless endpoint</code> |
| <code>endpoint</code> | <code>http://127.0.0.1:55719/guide-tool-lifecycle/v1</code> |
| <code>pausePrompt</code> | <code>Pause recording after asking me, then continue a streaming explanation.</code> |
| <code>clarification</code> | <code>Keep recording paused. Only read and explain its current status.</code> |
| <code>queryTools</code> | <code>diagnostics_get_recent, diagnostics_get_trace</code> |
| <code>exportTool</code> | <code>diagnostics_export</code> |
| <code>taskQuery</code> | <code>capture_get_transfer_job</code> |
| <code>canceledFile</code> | <code>guide-cancelled.jsonl</code> |
| <code>savedFile</code> | <code>guide-agent-diagnostics.jsonl</code> |
| <code>stopBoundary</code> | <code>A completed Recording pause remains applied after stopping the later model reply</code> |
| <code>retryBoundary</code> | <code>This retry requests explanation only; other models may propose new actions and require fresh review</code> |

<a id="walkthrough-agent-tool-lifecycle-01-agent"></a>
### 01 · Open Agent and create a Chat

![01 · Open Agent and create a Chat](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-01-agent.png)

<a id="walkthrough-agent-tool-lifecycle-02-ask"></a>
### 02 · Explicitly choose Ask

![02 · Explicitly choose Ask](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-02-ask.png)

<a id="walkthrough-agent-tool-lifecycle-03-side-effect-prompt"></a>
### 03 · Ask to pause Recording and then continue explaining

![03 · Ask to pause Recording and then continue explaining](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-03-side-effect-prompt.png)

<a id="walkthrough-agent-tool-lifecycle-04-allow-pause"></a>
### 04 · Allow the explicit pause operation

![04 · Allow the explicit pause operation](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-04-allow-pause.png)

<a id="walkthrough-agent-tool-lifecycle-05-stop-after-tool"></a>
### 05 · Stop the response without undoing the completed Tool

![05 · Stop the response without undoing the completed Tool](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-05-stop-after-tool.png)

<a id="walkthrough-agent-tool-lifecycle-06-retry"></a>
### 06 · Retry with explanation only in this example

![06 · Retry with explanation only in this example](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-06-retry.png)

<a id="walkthrough-agent-tool-lifecycle-07-clarify"></a>
### 07 · Restate a read-only goal

![07 · Restate a read-only goal](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-07-clarify.png)

<a id="walkthrough-agent-tool-lifecycle-08-diagnostics-recent"></a>
### 08 · Execute a real Diagnostics Recent query

![08 · Execute a real Diagnostics Recent query](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-08-diagnostics-recent.png)

<a id="walkthrough-agent-tool-lifecycle-09-read-trace"></a>
### 09 · Query related records using the returned traceId

![09 · Query related records using the returned traceId](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-09-read-trace.png)

<a id="walkthrough-agent-tool-lifecycle-10-export-request"></a>
### 10 · Request a Diagnostics export requiring approval

![10 · Request a Diagnostics export requiring approval](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-10-export-request.png)

<a id="walkthrough-agent-tool-lifecycle-11-native-cancel-panel"></a>
### 11 · Approval still leads to a real Save window

![11 · Approval still leads to a real Save window](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-11-native-cancel-panel.png)

<a id="walkthrough-agent-tool-lifecycle-12-cancel-native"></a>
### 12 · Cancel native saving without replacing its return value

![12 · Cancel native saving without replacing its return value](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-12-cancel-native.png)

<a id="walkthrough-agent-tool-lifecycle-13-export-again"></a>
### 13 · Request export again and review parameters

![13 · Request export again and review parameters](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-13-export-again.png)

<a id="walkthrough-agent-tool-lifecycle-14-native-save"></a>
### 14 · Save guide-agent-diagnostics.jsonl

![14 · Save guide-agent-diagnostics.jsonl](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-14-native-save.png)

<a id="walkthrough-agent-tool-lifecycle-15-started-result"></a>
### 15 · Distinguish a started job from completion

![15 · Distinguish a started job from completion](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-15-started-result.png)

<a id="walkthrough-agent-tool-lifecycle-16-completion-query"></a>
### 16 · Query the actual file task for completion

![16 · Query the actual file task for completion](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-16-completion-query.png)

<a id="walkthrough-agent-tool-lifecycle-17-final-state"></a>
### 17 · Retain the paused state and verify the actual result

![17 · Retain the paused state and verify the actual result](../media/v0.1.1-alpha.1/agent-tool-lifecycle/agent-tool-lifecycle-17-final-state.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:agent-tool-lifecycle:end -->

<!-- recorded-walkthrough:agent-model-removal:start -->
<a id="walkthrough-agent-model-removal"></a>
## Recorded walkthrough: removing the final model (native recording excerpt)

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

> These step images come from the same actual App run as <code>agent-session-restart</code>. Original PNGs are unchanged; this does not establish acceptance of branches not shown.
> This keyless local model returns fixed public demonstration replies. The walkthrough shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.

| Example field | Actual recorded value |
| --- | --- |
| <code>profileName</code> | <code>Guide session demo</code> |
| <code>initialState</code> | <code>One existing model in Settings &gt; Agent; configuration and restart are outside this excerpt</code> |
| <code>finalModelState</code> | <code>No provider remains; the panel is unconfigured</code> |
| <code>recordingScope</code> | <code>Only the final Settings steps are published; earlier Capture/history images are not published</code> |

<a id="walkthrough-agent-model-removal-04-model-settings"></a>
### 01 · Inspect the retained model configuration

![01 · Inspect the retained model configuration](../media/v0.1.1-alpha.1/agent-model-removal/agent-session-restart-04-model-settings.png)

<a id="walkthrough-agent-model-removal-05-last-model-dialog"></a>
### 02 · Open deletion confirmation for the last model

![02 · Open deletion confirmation for the last model](../media/v0.1.1-alpha.1/agent-model-removal/agent-session-restart-05-last-model-dialog.png)

<a id="walkthrough-agent-model-removal-06-remove-last"></a>
### 03 · Remove the last model and inspect the unconfigured state

![03 · Remove the last model and inspect the unconfigured state](../media/v0.1.1-alpha.1/agent-model-removal/agent-session-restart-06-remove-last.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:agent-model-removal:end -->

<!-- recorded-walkthrough:agent-session-restart:start -->
<a id="walkthrough-agent-session-restart"></a>
## Recorded walkthrough: actual restart, restored history and final-model removal

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

> This keyless local model returns fixed public demonstration replies. The walkthrough shows real configuration and chat controls, not a commercial model benchmark or bill. Never enter real credentials for this demo endpoint.

| Example field | Actual recorded value |
| --- | --- |
| <code>profileName</code> | <code>Guide session demo</code> |
| <code>retainedChat</code> | <code>Guide retained chat</code> |
| <code>freshChat</code> | <code>Guide fresh context</code> |
| <code>deletedRunningChat</code> | <code>Guide running delete</code> |
| <code>retainedPrompt</code> | <code>Explain why a fresh Chat has separate context.</code> |
| <code>retainedAnswer</code> | <code>Demo response: this local example reports usage; a new Chat starts a separate history.</code> |
| <code>modelCallsOnRestart</code> | <code>0</code> |
| <code>finalModelState</code> | <code>No provider remains; the panel is unconfigured</code> |
| <code>evidenceGeneration</code> | <code>agent-reopened</code> |

<a id="walkthrough-agent-session-restart-01-open"></a>
### 01 · Reopen the Agent panel

![01 · Reopen the Agent panel](../media/v0.1.1-alpha.1/agent-session-restart/agent-session-restart-01-open.png)

<a id="walkthrough-agent-session-restart-02-chats"></a>
### 02 · Inspect the actually restored Chat list

![02 · Inspect the actually restored Chat list](../media/v0.1.1-alpha.1/agent-session-restart/agent-session-restart-02-chats.png)

<a id="walkthrough-agent-session-restart-03-history"></a>
### 03 · Read the retained history

![03 · Read the retained history](../media/v0.1.1-alpha.1/agent-session-restart/agent-session-restart-03-history.png)

<a id="walkthrough-agent-session-restart-04-model-settings"></a>
### 04 · Inspect the retained model configuration

![04 · Inspect the retained model configuration](../media/v0.1.1-alpha.1/agent-session-restart/agent-session-restart-04-model-settings.png)

<a id="walkthrough-agent-session-restart-05-last-model-dialog"></a>
### 05 · Open deletion confirmation for the last model

![05 · Open deletion confirmation for the last model](../media/v0.1.1-alpha.1/agent-session-restart/agent-session-restart-05-last-model-dialog.png)

<a id="walkthrough-agent-session-restart-06-remove-last"></a>
### 06 · Remove the last model and inspect the unconfigured state

![06 · Remove the last model and inspect the unconfigured state](../media/v0.1.1-alpha.1/agent-session-restart/agent-session-restart-06-remove-last.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:agent-session-restart:end -->
