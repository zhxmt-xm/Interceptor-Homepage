# Agent：用对话辅助调试

[教程目录](../README.md) · [Tool 权限](tool-permissions.md) · [MCP](mcp.md)

## 先决定是否需要 AI

Agent 是可选的右侧对话面板，不是抓包前提。只查看流量、使用 Rules、Breakpoints 或 Composer 时不需要模型账号。

内置 Agent 使用你在 App 中配置的模型；外部 MCP Host 使用它自己的模型配置。两者不能因为都有 Tool 就混为一个登录入口。

<a id="models"></a>
## 添加并验证模型

<a id="walkthrough-agent-management"></a>
在 Settings → Agent 添加你有权使用的模型服务。Test connection 和对话可能产生费用，只在正式配置窗口输入凭据。

下例使用本机演示服务 `http://127.0.0.1:51723/keyed/v1`，配置名为 `Keyed lab`。这个服务不会由 App 自动创建；实际使用时换成自己的服务地址、Model ID 和凭据，不向示例地址提交真实 Key。

1. <a id="walkthrough"></a><a id="walkthrough-01-settings"></a><a id="walkthrough-02-agent-settings"></a><a id="walkthrough-agent-management-01-settings"></a>从侧栏进入 Settings，选择 Agent。尚未添加模型时，页面显示 No models configured；这不影响普通抓包。

   ![添加并验证模型 · 1](../media/v0.1.1-alpha.1/agent-models-english/step-001.png)

2. <a id="walkthrough-03-add"></a><a id="walkthrough-04-custom"></a><a id="walkthrough-agent-management-guide-one-01-dialog"></a>点击 Add provider，选择红框 1 的 OpenAI-compatible，打开配置窗口。DeepSeek 使用其独立预设和官方 endpoint，需要自己的有效 Key。

   ![添加并验证模型 · 2](../media/v0.1.1-alpha.1/agent-models-english/step-002.annotated.png)

   ![添加并验证模型 · 2](../media/v0.1.1-alpha.1/agent-models-english/step-003.png)

3. <a id="walkthrough-05-name"></a><a id="walkthrough-agent-management-guide-one-02-name"></a>在红框 1 的 Profile name 填写便于识别的名称，本例为 `Keyed lab`。它是本地配置名称，不是 Model ID。

   ![添加并验证模型 · 3](../media/v0.1.1-alpha.1/agent-models-english/step-004.annotated.png)

4. <a id="walkthrough-06-endpoint"></a><a id="walkthrough-agent-management-guide-one-03-endpoint"></a>在红框 1 的 Base URL 填写服务商提供的地址。图中为 `http://127.0.0.1:51723/keyed/v1`；远端 Custom 服务使用 HTTPS，HTTP 仅用于允许的本机 loopback。

   ![添加并验证模型 · 4](../media/v0.1.1-alpha.1/agent-models-english/step-005.annotated.png)

5. <a id="walkthrough-07-model"></a><a id="walkthrough-agent-management-guide-one-04-model"></a>需要认证时在 API key 输入自己的凭据，界面会遮罩显示。红框 1 的 Model ID 填实际模型标识，本例初始为 `keyed-model`；不要用配置名称代替它。

   ![添加并验证模型 · 5](../media/v0.1.1-alpha.1/agent-models-english/step-006.annotated.png)

6. <a id="walkthrough-08-context"></a><a id="walkthrough-09-output"></a>按模型真实能力填写红框 1 的 Context window 和红框 2 的 Maximum output。本例分别为 `131072` 和 `8192`，更大的数字不会扩大服务端能力。

   ![添加并验证模型 · 6](../media/v0.1.1-alpha.1/agent-models-english/step-007.annotated.png)

7. <a id="walkthrough-10-test"></a><a id="walkthrough-agent-management-guide-one-05-test"></a>点击 Test connection 并等待结果。出现 Connection verified 后，红框 1 的 Save provider 可用；Test 会发出真实模型请求，不只是检查 URL 格式。

   ![添加并验证模型 · 7](../media/v0.1.1-alpha.1/agent-models-english/step-008.annotated.png)

8. <a id="walkthrough-agent-management-02-edit"></a>如果此时修改连接字段，需要重新测试。图中将红框 1 的 Model ID 改为 `keyed-model-v2`，红框 2 的 Save provider 随即停用，之前的验证不再适用于新字段。

   ![添加并验证模型 · 8](../media/v0.1.1-alpha.1/agent-models-english/step-009.annotated.png)

9. <a id="walkthrough-agent-management-03-retest"></a>点击红框 1 的 Test connection，重新验证当前字段；失败时先处理显示的错误。

   ![添加并验证模型 · 9](../media/v0.1.1-alpha.1/agent-models-english/step-010.annotated.png)

10. <a id="walkthrough-11-save"></a><a id="walkthrough-agent-management-guide-one-06-save"></a><a id="walkthrough-agent-management-04-save-edit"></a>重新验证成功后点击红框 1 的 Save provider，在 Configured models 检查 `Keyed lab` 和 `keyed-model-v2`。关闭窗口或只看到输入值，不等于已保存。

    ![添加并验证模型 · 10](../media/v0.1.1-alpha.1/agent-models-english/step-011.annotated.png)

    ![添加并验证模型 · 10](../media/v0.1.1-alpha.1/agent-models-english/step-012.png)

11. <a id="walkthrough-agent-management-guide-two-01-dialog"></a>本机服务不需要 Key 时，也通过 Add provider → 红框 1 的 OpenAI-compatible 新增独立配置，不必覆盖已有模型。

    ![添加并验证模型 · 11](../media/v0.1.1-alpha.1/agent-models-english/step-013.annotated.png)

    ![添加并验证模型 · 11](../media/v0.1.1-alpha.1/agent-models-english/step-014.png)

12. <a id="walkthrough-agent-management-guide-two-02-name"></a>在红框 1 的 Profile name 填 `Keyless lab`，用于区分这份无 Key 配置。

    ![添加并验证模型 · 12](../media/v0.1.1-alpha.1/agent-models-english/step-015.annotated.png)

13. <a id="walkthrough-agent-management-guide-two-03-endpoint"></a>红框 1 的 Base URL 填本机服务地址，本例为 `http://127.0.0.1:51723/keyless/v1`；这个服务允许无认证，API key 保持为空。

    ![添加并验证模型 · 13](../media/v0.1.1-alpha.1/agent-models-english/step-016.annotated.png)

14. <a id="walkthrough-agent-management-guide-two-04-model"></a>红框 1 的 Model ID 填 `keyless-model`。无 Key 不意味着可以省略服务要求的模型标识。

    ![添加并验证模型 · 14](../media/v0.1.1-alpha.1/agent-models-english/step-017.annotated.png)

15. 核对红框 1 的 Context window 为 `131072`、红框 2 的 Maximum output 为 `8192`。自己的模型使用其实际支持值。

    ![添加并验证模型 · 15](../media/v0.1.1-alpha.1/agent-models-english/step-018.annotated.png)

16. <a id="walkthrough-agent-management-guide-two-05-test"></a>点击红框 1 的 Test connection，验证无 Key 服务确实可用。

    ![添加并验证模型 · 16](../media/v0.1.1-alpha.1/agent-models-english/step-019.annotated.png)

17. <a id="walkthrough-agent-management-guide-two-06-save"></a>成功后点击红框 1 的 Save provider。列表同时保留 `Keyed lab` 和 `Keyless lab`，可以继续设置默认模型或编辑其中一项。

    ![添加并验证模型 · 17](../media/v0.1.1-alpha.1/agent-models-english/step-020.annotated.png)

    ![添加并验证模型 · 17](../media/v0.1.1-alpha.1/agent-models-english/step-021.png)

- OpenAI-compatible 不保证所有服务的全部扩展兼容，Base URL 与 Model ID 以服务商接口为准。
- 系统安全存储不可用时处理实际错误，不改用明文文件保存 Key。


<a id="manage-models"></a>
## 编辑、默认模型与删除

下面继续管理已经保存的 `Keyed lab` 和 `Keyless lab`。更改配置前确认目标名称；删除本地配置不会撤销服务商账号或 Key。

1. <a id="walkthrough-agent-management-07-default"></a>在 `Keyless lab` 行点击红框 1 的 Set default，把它设为之后新建 Chat 的默认模型。

   ![编辑、默认模型与删除 · 1](../media/v0.1.1-alpha.1/agent-models-english/step-022.annotated.png)

2. <a id="walkthrough-agent-management-05-first-chat"></a><a id="walkthrough-agent-management-06-chat-name"></a><a id="walkthrough-agent-management-08-current-model"></a><a id="walkthrough-agent-management-09-new-chat"></a>红框 1 的行显示 Default，但列表没有重排。已有 Chat 仍保留各自的模型；要新建、命名或切换当前 Chat 的模型，按[管理 Chat](#sessions)的步骤操作。

   ![编辑、默认模型与删除 · 2](../media/v0.1.1-alpha.1/agent-models-english/step-023.annotated.png)

3. 点击 `Keyed lab` 的 Edit，将红框 1 的 Model ID 改为 `keyed-model-edited`。红框 2 的 Key 输入框留空表示保留已存凭据，不是删除；需要替换时输入新 Key，需要移除时使用独立选项。

   ![编辑、默认模型与删除 · 3](../media/v0.1.1-alpha.1/agent-models-english/step-024.annotated.png)

4. 修改后点击红框 1 的 Test connection，不能沿用保存前的验证结果。

   ![编辑、默认模型与删除 · 4](../media/v0.1.1-alpha.1/agent-models-english/step-025.annotated.png)

5. 测试成功后点击红框 1 的 Save changes，返回列表核对新的 Model ID。`Keyless lab` 仍是默认模型。

   ![编辑、默认模型与删除 · 5](../media/v0.1.1-alpha.1/agent-models-english/step-026.annotated.png)

   ![编辑、默认模型与删除 · 5](../media/v0.1.1-alpha.1/agent-models-english/step-027.png)

6. 需要检查保存结果时，用红框 1 的 Close 正常退出，再打开 Settings → Agent。模型顺序、编辑后的字段和 Default 标记会回载，不会自动发起对话。

   ![编辑、默认模型与删除 · 6](../media/v0.1.1-alpha.1/agent-models-english/step-029.annotated.png)

   ![编辑、默认模型与删除 · 6](../media/v0.1.1-alpha.1/agent-models-english/step-030.png)

7. 服务不再需要认证时，编辑该模型并勾选 Remove saved API key。输入框会停用，表示本次明确移除，而不是保留旧 Key。

   ![编辑、默认模型与删除 · 7](../media/v0.1.1-alpha.1/agent-models-english/step-031.png)

8. 点击红框 1 的 Test connection，确认服务允许无 Key 访问。仍要求认证的服务应保留或替换有效 Key。

   ![编辑、默认模型与删除 · 8](../media/v0.1.1-alpha.1/agent-models-english/step-032.annotated.png)

9. 成功后点击红框 1 的 Save changes，列表中的 `Keyed lab` 显示 No API key。这个操作只清理本地保存的凭据。

   ![编辑、默认模型与删除 · 9](../media/v0.1.1-alpha.1/agent-models-english/step-033.annotated.png)

   ![编辑、默认模型与删除 · 9](../media/v0.1.1-alpha.1/agent-models-english/step-034.png)

10. <a id="walkthrough-agent-management-17-remove-model-dialog"></a>点击不再需要的 `Keyless lab` 的删除按钮，核对确认窗口中的名称。红框 1 的 Cancel 保留它；本例点击红框 2 的 Confirm remove model 删除。

    ![编辑、默认模型与删除 · 10](../media/v0.1.1-alpha.1/agent-models-english/step-036.annotated.png)

11. <a id="walkthrough-agent-management-18-remove-model"></a>删除原默认模型后，剩余的 `Keyed lab` 成为默认项。检查剩余配置，不把关闭确认窗口误认为已经删除。

    ![编辑、默认模型与删除 · 11](../media/v0.1.1-alpha.1/agent-models-english/step-037.png)

12. <a id="walkthrough-agent-model-removal"></a><a id="walkthrough-agent-model-removal-04-model-settings"></a><a id="walkthrough-agent-model-removal-05-last-model-dialog"></a><a id="walkthrough-agent-model-removal-06-remove-last"></a>确实不再使用最后一个模型时，再核对 `Keyed lab` 的删除确认。红框 1 的 Cancel 可放弃；红框 2 的 Confirm remove model 会移除最后一项。

    ![编辑、默认模型与删除 · 12](../media/v0.1.1-alpha.1/agent-models-english/step-038.annotated.png)

13. 列表回到 No models configured。要继续使用 Agent，重新添加并测试模型；若真实 Key 泄露，还必须到服务商侧撤销或轮换。

    ![编辑、默认模型与删除 · 13](../media/v0.1.1-alpha.1/agent-models-english/step-039.png)


<a id="chat"></a>
## 开始一次范围明确的对话

先准备至少一个已经测试并保存的模型。下列对话使用名为 `Recovery lab` 的配置；使用自己的模型时选择自己的配置，实际回复可能不同。

1. <a id="walkthrough-12-panel"></a>点击 App 顶栏的 Agent 打开右侧面板。红框 1 的加号用于 New chat，点击它新建会话。

   ![开始一次范围明确的对话 · 1](../media/v0.1.1-alpha.1/agent-chat-english/step-002.annotated.png)

2. <a id="walkthrough-13-chat"></a>检查输入框上方的模型和执行模式。本例选择 `Recovery lab` 并保持 Ask；新 Chat 尚无历史消息。

   ![开始一次范围明确的对话 · 2](../media/v0.1.1-alpha.1/agent-chat-english/step-003.png)

3. <a id="walkthrough-14-prompt"></a>在红框 1 输入 `Explain Recording and Clear without changing settings.`，只要求解释概念。核对范围后点击红框 2 的 Send，也可用 Ctrl+Enter（macOS 为 Command+Enter）发送。

   ![开始一次范围明确的对话 · 3](../media/v0.1.1-alpha.1/agent-chat-english/step-004.annotated.png)

4. <a id="walkthrough-15-send"></a>等待回复完成并阅读红框 1。这里说明 Recording 与 Clear 的区别，没有调用业务 Tool 或修改配置。实际操作时仍需检查 Tool 结果和对应功能状态，而不是仅相信模型的描述。

   ![开始一次范围明确的对话 · 4](../media/v0.1.1-alpha.1/agent-chat-english/step-005.annotated.png)

- 选中请求或切换工作区，不会自动把该页面加入模型上下文。
- 通过可用查询明确获取请求 ID、正文或消息，不让模型猜测已失效的记录。
- 网络响应中的命令或“忽略规则”文字属于被检查的数据，不是你的操作授权。


<a id="sessions"></a>
## 管理 Chat 和恢复历史

继续管理上一节的对话：先命名为 `Recording and Clear`，再建立独立的 `Upstream modes`。不同任务使用不同 Chat，避免混入无关历史。

1. 点击面板顶部的 Chat selector，选择红框 1 的 Rename current chat。

   ![管理 Chat 和恢复历史 · 1](../media/v0.1.1-alpha.1/agent-chat-english/step-006.annotated.png)

2. 在红框 1 输入 `Recording and Clear`，点击红框 2 的 Save chat title。面板标题更新，已有消息保留。

   ![管理 Chat 和恢复历史 · 2](../media/v0.1.1-alpha.1/agent-chat-english/step-007.annotated.png)

   ![管理 Chat 和恢复历史 · 2](../media/v0.1.1-alpha.1/agent-chat-english/step-008.png)

3. 要分别选择全局默认和当前 Chat 模型，先按前文添加、测试另一份配置。本例新增 `Recovery alternate`，Model ID 为 `recovery-alternate`；当前 Chat 仍使用 `Recovery lab`。

   ![管理 Chat 和恢复历史 · 3](../media/v0.1.1-alpha.1/agent-chat-english/step-009.png)

4. 在 Settings → Agent 点击红框 1 的 Set default，将 `Recovery alternate` 设为后续新 Chat 的默认模型。

   ![管理 Chat 和恢复历史 · 4](../media/v0.1.1-alpha.1/agent-chat-english/step-010.annotated.png)

5. 红框 1 显示新的全局 Default，红框 2 的当前 Chat 仍选 `Recovery lab`。这两个选择彼此独立。

   ![管理 Chat 和恢复历史 · 5](../media/v0.1.1-alpha.1/agent-chat-english/step-011.annotated.png)

6. 要改变当前 Chat，打开输入框上方的模型选择器，选择红框 1 的 `Recovery alternate`。关闭菜单后检查当前模型名称，而不是再次修改全局默认。

   ![管理 Chat 和恢复历史 · 6](../media/v0.1.1-alpha.1/agent-chat-english/step-012.annotated.png)

   ![管理 Chat 和恢复历史 · 6](../media/v0.1.1-alpha.1/agent-chat-english/step-013.png)

7. 需要回到原模型时，在同一选择器重新选择 `Recovery lab`。图中当前 Chat 已恢复，但 Settings 的全局 Default 仍为 `Recovery alternate`。

   ![管理 Chat 和恢复历史 · 7](../media/v0.1.1-alpha.1/agent-chat-english/step-014.png)

8. 点击 New chat 开始第二个任务，检查新会话没有上一段历史，并使用新的默认模型 `Recovery alternate`。

   ![管理 Chat 和恢复历史 · 8](../media/v0.1.1-alpha.1/agent-chat-english/step-015.png)

9. 在输入框红框 1 填写 `Explain when to use Direct and Manual upstream modes.`，用红框 2 的 Send 发送。回复图中的红框 1 是第二个 Chat 的回答，不是第一个会话的追加消息。

   ![管理 Chat 和恢复历史 · 9](../media/v0.1.1-alpha.1/agent-chat-english/step-016.annotated.png)

   ![管理 Chat 和恢复历史 · 9](../media/v0.1.1-alpha.1/agent-chat-english/step-017.annotated.png)

10. 从菜单红框 1 的 Rename current chat 打开重命名窗口；暂时不想改名时点击确认窗口红框 1 的 Cancel，保留当前会话和消息。

    ![管理 Chat 和恢复历史 · 10](../media/v0.1.1-alpha.1/agent-chat-english/step-018.annotated.png)

    ![管理 Chat 和恢复历史 · 10](../media/v0.1.1-alpha.1/agent-chat-english/step-019.annotated.png)

11. <a id="walkthrough-agent-management-10-second-name"></a>重新打开 Rename，在红框 1 填 `Upstream modes`，点击红框 2 的 Save chat title。确认顶部标题已更新后再切换任务。

    ![管理 Chat 和恢复历史 · 11](../media/v0.1.1-alpha.1/agent-chat-english/step-021.annotated.png)

    ![管理 Chat 和恢复历史 · 11](../media/v0.1.1-alpha.1/agent-chat-english/step-022.png)

12. <a id="walkthrough-agent-session-restart"></a><a id="walkthrough-agent-session-restart-01-open"></a>需要结束使用时，通过红框 1 的 App Close 正常退出。重新打开 App 和 Agent 面板后，检查 `Upstream modes` 及原有回复已恢复；重新打开本身不会重发消息。

    ![管理 Chat 和恢复历史 · 12](../media/v0.1.1-alpha.1/agent-chat-english/step-023.annotated.png)

    ![管理 Chat 和恢复历史 · 12](../media/v0.1.1-alpha.1/agent-chat-english/step-024.png)

13. <a id="walkthrough-agent-management-11-switch-chat"></a><a id="walkthrough-agent-session-restart-02-chats"></a><a id="walkthrough-agent-session-restart-03-history"></a>打开 Chat selector。红框 1 是 `Upstream modes`，红框 2 是 `Recording and Clear`；选择红框 2，检查它自己的历史和 `Recovery lab` 模型。

    ![管理 Chat 和恢复历史 · 13](../media/v0.1.1-alpha.1/agent-chat-english/step-025.annotated.png)

    ![管理 Chat 和恢复历史 · 13](../media/v0.1.1-alpha.1/agent-chat-english/step-026.png)

14. 在原会话中输入 `Does pausing Recording restore the system proxy?`，点击红框 1 的 Send 继续追问。回复保留在 `Recording and Clear` 中，不与另一会话合并。

    ![管理 Chat 和恢复历史 · 14](../media/v0.1.1-alpha.1/agent-chat-english/step-027.annotated.png)

    ![管理 Chat 和恢复历史 · 14](../media/v0.1.1-alpha.1/agent-chat-english/step-028.png)

15. <a id="walkthrough-agent-management-12-delete-dialog"></a>要删除第二个 Chat，先切到 `Upstream modes` 并核对顶部标题，再从菜单选择红框 1 的 Delete current chat。

    ![管理 Chat 和恢复历史 · 15](../media/v0.1.1-alpha.1/agent-chat-english/step-029.annotated.png)

16. <a id="walkthrough-agent-management-13-cancel-delete"></a>红框 1 的 Cancel 放弃删除；红框 2 的 Confirm delete chat 才会移除历史。本次先点 Cancel，确认 `Upstream modes` 和消息仍保留。

    ![管理 Chat 和恢复历史 · 16](../media/v0.1.1-alpha.1/agent-chat-english/step-030.annotated.png)

    ![管理 Chat 和恢复历史 · 16](../media/v0.1.1-alpha.1/agent-chat-english/step-031.png)

17. <a id="walkthrough-agent-management-19-delete-chat-dialog"></a><a id="walkthrough-agent-management-20-delete-chat"></a>确实不再需要时，再选择 Delete current chat，点击红框 1 的 Confirm delete chat。删除后回到保留的 `Recording and Clear`，核对它的历史没有丢失。

    ![管理 Chat 和恢复历史 · 17](../media/v0.1.1-alpha.1/agent-chat-english/step-033.annotated.png)

    ![管理 Chat 和恢复历史 · 17](../media/v0.1.1-alpha.1/agent-chat-english/step-034.png)

18. <a id="walkthrough-agent-session-lifecycle-09-fresh-name"></a><a id="walkthrough-agent-session-lifecycle-10-running-chat"></a><a id="walkthrough-agent-session-lifecycle-11-running-prompt"></a>正在生成回复的 Chat 也可以删除。先确认当前就是不再需要的会话，再打开菜单，选择红框 1 的 Delete current chat；不要误删旁边已完成的会话。

    ![管理 Chat 和恢复历史 · 18](../media/v0.1.1-alpha.1/agent-chat-english/step-037.png)

    ![管理 Chat 和恢复历史 · 18](../media/v0.1.1-alpha.1/agent-chat-english/step-038.annotated.png)

19. <a id="walkthrough-agent-session-lifecycle-12-running-delete-dialog"></a><a id="walkthrough-agent-session-lifecycle-13-delete-running"></a><a id="walkthrough-agent-session-lifecycle-14-retained-chat"></a><a id="walkthrough-agent-session-lifecycle-15-before-close"></a>点击红框 1 的 Confirm delete chat 后等待取消收尾。当前生成停止，界面返回保留的会话；这不是把未完成的模型回复自动重试。

    ![管理 Chat 和恢复历史 · 19](../media/v0.1.1-alpha.1/agent-chat-english/step-039.annotated.png)

    ![管理 Chat 和恢复历史 · 19](../media/v0.1.1-alpha.1/agent-chat-english/step-040.png)

20. <a id="walkthrough-agent-session-restart-04-model-settings"></a><a id="walkthrough-agent-session-restart-05-last-model-dialog"></a><a id="walkthrough-agent-session-restart-06-remove-last"></a>若同时不再使用模型配置，到 Settings → Agent 逐项核对后删除。图中先删除 `Recovery alternate`，再删除 `Recovery lab`；两张图的红框 1 都是对应模型的 Confirm remove model。

    ![管理 Chat 和恢复历史 · 20](../media/v0.1.1-alpha.1/agent-chat-english/step-041.annotated.png)

    ![管理 Chat 和恢复历史 · 20](../media/v0.1.1-alpha.1/agent-chat-english/step-042.annotated.png)

21. 最后一个模型被移除后，Agent 显示 Connect a model to start。需要继续对话时使用 Configure Agent 重新配置，不把这个状态当成网络请求仍在执行。

    ![管理 Chat 和恢复历史 · 21](../media/v0.1.1-alpha.1/agent-chat-english/step-043.png)

恢复历史不会自动重放有副作用的操作。旧消息中的 Capture ID 可能已经失效，需要重新查询当前录制。


<a id="context"></a>
## 读懂 Context 与用量

Context 表示最近一次模型请求携带的上下文；弹出的 Session usage 是会话累计用量。读取自己的实际数值，不把示例数字当作固定额度或费用。

1. <a id="walkthrough-16-context"></a>把鼠标移到输入框上方的 Context。红框 1 是累计用量面板：本例总量为 `12`，其中 Cache hit `6`、Cache miss `4`、Output `2`；下方 Context 当前为 `10 / 131.1k`，不是累计的 `12`。

   ![读懂 Context 与用量 · 1](../media/v0.1.1-alpha.1/agent-context-english/step-004.annotated.png)

2. <a id="walkthrough-agent-session-lifecycle"></a><a id="walkthrough-agent-session-lifecycle-01-panel"></a><a id="walkthrough-agent-session-lifecycle-02-chat"></a><a id="walkthrough-agent-session-lifecycle-03-name"></a><a id="walkthrough-agent-session-lifecycle-04-prompt"></a><a id="walkthrough-agent-session-lifecycle-05-keyboard-send"></a><a id="walkthrough-agent-session-lifecycle-06-keyboard-context"></a>也可以先聚焦消息输入框，再按 Shift+Tab，将焦点移到 Context 按钮。红框 1 显示同一份用量；按 Tab 回到输入框。

   ![读懂 Context 与用量 · 2](../media/v0.1.1-alpha.1/agent-context-english/step-005.annotated.png)

3. 再完成一轮回复后重新查看。图中当前 Context 为 `20`，红框 1 的累计值为 `36`：Cache hit `24`、Cache miss `6`、Output `6`。Cache hit/miss 已包含在输入中，不要再次加到总量。

   ![读懂 Context 与用量 · 3](../media/v0.1.1-alpha.1/agent-context-english/step-007.annotated.png)

4. 后续 Retry 也可能增加用量。本例红框 1 已累计 `66`，当前 Context 则是最后一次请求的 `25`；缓存命中率按报告的输入 token 计算，不是各轮百分比的简单平均。

   ![读懂 Context 与用量 · 4](../media/v0.1.1-alpha.1/agent-context-english/step-012.annotated.png)

5. <a id="walkthrough-agent-session-lifecycle-07-dismiss-context"></a><a id="walkthrough-agent-session-lifecycle-08-fresh-chat"></a>开始不同任务时使用 New chat，避免继续携带无关历史。图中是新会话的初始状态；原会话仍可通过 Chat selector 返回。

   ![读懂 Context 与用量 · 5](../media/v0.1.1-alpha.1/agent-context-english/step-001.png)

- 很小的占用比例可能显示为 `0.0%`，仍要看实际 token 数。
- 服务没有报告的用量可能显示为 `—`，不代表零消耗；取消的调用也不保证免费。
- 剩余窗口还需容纳模型输出，不等于保证能生成同等长度的回复。
- 用量不会自动换算成账单金额。


<a id="tools"></a>
## 让 Agent 操作产品

先配置可用模型，在当前 Chat 明确允许的操作范围。本例使用 `Execution mode lab` 演示 `capture_stop_recording`：只暂停新录制，不清空记录，也不恢复系统代理。Ask/Auto 属于当前 Chat，新 Chat 默认使用 Ask。

1. <a id="walkthrough-18-ask"></a>点击红框 1 的 Ask，要求 change Tool 执行前先询问。Tool 是否可用仍由 Settings 的对应权限决定。

   ![让 Agent 操作产品 · 1](../media/v0.1.1-alpha.1/agent-execution-english/step-004.annotated.png)

2. <a id="walkthrough-18a-tool-question"></a>在红框 1 输入 `Pause recording after asking for my approval.`，点击红框 2 的 Send。

   ![让 Agent 操作产品 · 2](../media/v0.1.1-alpha.1/agent-execution-english/step-005.annotated.png)

3. 审批卡显示 `capture_stop_recording` 及其影响。先阅读内容：红框 1 的 Deny Tool 拒绝执行，红框 2 的 Allow Tool 才允许暂停。

   ![让 Agent 操作产品 · 3](../media/v0.1.1-alpha.1/agent-execution-english/step-006.annotated.png)

4. 已有审批等待时，即使点击红框 1 切为 Auto，也不会自动处理已经出现的那一条审批。

   ![让 Agent 操作产品 · 4](../media/v0.1.1-alpha.1/agent-execution-english/step-007.annotated.png)

5. 红框 1 的审批仍等待用户决定。切换工作区或暂时离开该 Chat，也不能代替 Allow 或 Deny。

   ![让 Agent 操作产品 · 5](../media/v0.1.1-alpha.1/agent-execution-english/step-008.annotated.png)

6. <a id="walkthrough-18b-deny"></a>回到原 Chat 后，先点击红框 1 的 Deny Tool，拒绝这次暂停。

   ![让 Agent 操作产品 · 6](../media/v0.1.1-alpha.1/agent-execution-english/step-009.annotated.png)

7. 红框 2 保留 Denied 结果，红框 1 的 Recording 仍开启。这次拒绝没有停止录制，不能把模型回复当作执行成功。

   ![让 Agent 操作产品 · 7](../media/v0.1.1-alpha.1/agent-execution-english/step-010.annotated.png)

8. 要重新请求审批，先把当前 Chat 切回红框 1 的 Ask。

   ![让 Agent 操作产品 · 8](../media/v0.1.1-alpha.1/agent-execution-english/step-012.annotated.png)

9. <a id="walkthrough-18c-tool-again"></a>在红框 1 输入新的请求 `Pause capture after explicit approval.`，用红框 2 的 Send 发送。旧拒绝不会自动成为本次决定。

   ![让 Agent 操作产品 · 9](../media/v0.1.1-alpha.1/agent-execution-english/step-013.annotated.png)

10. <a id="walkthrough-18d-allow"></a>再次核对 Tool 和影响，这次点击红框 1 的 Allow Tool。

    ![让 Agent 操作产品 · 10](../media/v0.1.1-alpha.1/agent-execution-english/step-014.annotated.png)

11. 红框 2 显示已允许的调用结果，红框 1 变为 Paused。代理仍可能继续转发，新流量只是不再被记录。

    ![让 Agent 操作产品 · 11](../media/v0.1.1-alpha.1/agent-execution-english/step-015.annotated.png)

12. 需要继续录制时，通过红框 1 的 Capture 按钮恢复 Recording，核对状态后再进行下一次操作。

    ![让 Agent 操作产品 · 12](../media/v0.1.1-alpha.1/agent-execution-english/step-016.annotated.png)

13. <a id="walkthrough-17-auto"></a>只有明确接受后续 change 操作自动执行时，才点击红框 1 的 Auto。它不会绕过已关闭的权限或原生文件选择。

    ![让 Agent 操作产品 · 13](../media/v0.1.1-alpha.1/agent-execution-english/step-017.annotated.png)

14. 在红框 1 输入 `Pause capture using this Chat mode.`，通过红框 2 的 Send 发送。当前 Auto 模式下本次调用直接执行；仍需核对 Tool activity 和 Capture 的 Paused 状态。

    ![让 Agent 操作产品 · 14](../media/v0.1.1-alpha.1/agent-execution-english/step-018.annotated.png)

    ![让 Agent 操作产品 · 14](../media/v0.1.1-alpha.1/agent-execution-english/step-019.png)

15. <a id="walkthrough-agent-management-14-disable-tool"></a>先恢复 Recording，再进入 Settings → Agent，在 Tool capabilities 搜索 `capture_stop_recording`。关闭红框 1 的 Agent 开关；红框 2 的 MCP 开关保持不变，两种入口独立授权。

    ![让 Agent 操作产品 · 15](../media/v0.1.1-alpha.1/agent-execution-english/step-021.annotated.png)

16. 如果模型仍尝试已禁用的 Tool，也不能执行。图中在红框 1 输入 `Try the disabled recording Tool.`，点击红框 2 的 Send 检查拒绝结果。

    ![让 Agent 操作产品 · 16](../media/v0.1.1-alpha.1/agent-execution-english/step-022.annotated.png)

17. <a id="walkthrough-agent-management-15-enforcement"></a>Tool activity 显示 Unknown tool，红框 1 的 Recording 保持开启。这是 `unknown_tool` 权限拒绝，不是 Ask 中的 Deny，也不是模型连接失败。

    ![让 Agent 操作产品 · 17](../media/v0.1.1-alpha.1/agent-execution-english/step-023.annotated.png)

18. 正常重启后再进入相同设置，红框 1 的权限仍关闭。重新打开 App 不会自动恢复被关闭的授权或重放刚才的请求。

    ![让 Agent 操作产品 · 18](../media/v0.1.1-alpha.1/agent-execution-english/step-025.annotated.png)

19. <a id="walkthrough-agent-management-16-restore-tool"></a>需要再次使用时明确打开红框 1 的 Agent 权限。恢复开关只影响之后的新调用，不重放刚才失败的调用。

    ![让 Agent 操作产品 · 19](../media/v0.1.1-alpha.1/agent-execution-english/step-026.annotated.png)

20. 完成演示后把当前 Chat 恢复为红框 1 的 Ask，再确认 Recording 处于自己需要的状态。

    ![让 Agent 操作产品 · 20](../media/v0.1.1-alpha.1/agent-execution-english/step-027.annotated.png)

21. <a id="walkthrough-agent-tool-lifecycle-08-diagnostics-recent"></a><a id="walkthrough-agent-tool-lifecycle-09-read-trace"></a><a id="walkthrough-agent-tool-lifecycle-10-export-request"></a><a id="walkthrough-agent-tool-lifecycle-11-native-cancel-panel"></a><a id="walkthrough-agent-tool-lifecycle-12-cancel-native"></a><a id="walkthrough-agent-tool-lifecycle-13-export-again"></a><a id="walkthrough-agent-tool-lifecycle-14-native-save"></a><a id="walkthrough-agent-tool-lifecycle-15-started-result"></a><a id="walkthrough-agent-tool-lifecycle-16-completion-query"></a><a id="walkthrough-agent-tool-lifecycle-17-final-state"></a>其他 Tool 需要文件窗口或系统授权时，Allow 后仍要继续处理。例如 `diagnostics_export` 会打开 Save；本例保存为 `agent.jsonl`，实际操作选择自己的位置。Cancel 不启动导出；确认 Save 后，返回 App 查看任务。`started` 或 Export job Running 只表示任务已启动，不能代替实际文件和终态检查。

    ![让 Agent 操作产品 · 21](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-017.png)

    ![让 Agent 操作产品 · 21](../media/v0.1.1-alpha.1/diagnostics-workflow-english/step-018.png)

query/change、各入口独立权限和只读配置见 [Tool 权限](tool-permissions.md)。模型说“已完成”不能替代 Tool 结果和产品状态。


<a id="stop-retry"></a>
## 停止、失败与重试

Stop 取消当前模型回复，不删除整个 Chat，也不撤销已经完成的产品操作。失败时先读取实际错误，不把空回答当作成功。

1. <a id="walkthrough-19-stream"></a>回复仍显示 Generating response 时，如果不再需要，点击红框 1 的 Stop response。

   ![停止、失败与重试 · 1](../media/v0.1.1-alpha.1/agent-context-english/step-009.annotated.png)

2. <a id="walkthrough-20-stop"></a>等待 Response stopped 出现，已显示的部分回复保留。红框 1 是 Retry response，不是继续等待旧连接。

   ![停止、失败与重试 · 2](../media/v0.1.1-alpha.1/agent-context-english/step-010.annotated.png)

3. <a id="walkthrough-21-retry"></a>先核对消息和已经完成的 Tool，再点击 Retry response。重试是新的尝试，会保留原用户消息，不要求复制同一问题再发送一次。

   ![停止、失败与重试 · 3](../media/v0.1.1-alpha.1/agent-context-english/step-011.png)

4. 重试完成后可以重新查看红框 1 的用量。图中累计值已更新；不能把停止过的请求或 Retry 视为必然免费。

   ![停止、失败与重试 · 4](../media/v0.1.1-alpha.1/agent-context-english/step-012.annotated.png)

5. <a id="walkthrough-agent-tool-lifecycle"></a><a id="walkthrough-agent-tool-lifecycle-01-agent"></a><a id="walkthrough-agent-tool-lifecycle-02-ask"></a><a id="walkthrough-agent-tool-lifecycle-03-side-effect-prompt"></a><a id="walkthrough-agent-tool-lifecycle-04-allow-pause"></a><a id="walkthrough-agent-tool-lifecycle-05-stop-after-tool"></a>如果 `capture_stop_recording` 已经执行，红框 1 已是 Paused，此时红框 2 的 Stop 只取消仍在生成的解释。点击后等待 Response stopped，Recording 仍暂停；它不会撤销已经完成的 Tool。

   ![停止、失败与重试 · 5](../media/v0.1.1-alpha.1/agent-traffic-control-english/step-003.annotated.png)

   ![停止、失败与重试 · 5](../media/v0.1.1-alpha.1/agent-traffic-control-english/step-004.png)

6. <a id="walkthrough-agent-tool-lifecycle-06-retry"></a><a id="walkthrough-agent-tool-lifecycle-07-clarify"></a>本例 Retry 只返回解释，没有重复执行暂停，Recording 仍为 Paused。需要重新说明目标时发送新消息，例如限定为只读状态查询；不要因为上一轮停止或失败，就默认重复发送请求、导出或配置写入。

   ![停止、失败与重试 · 6](../media/v0.1.1-alpha.1/agent-traffic-control-english/step-005.png)

- Stop 不是断点的 Continue，也不是对已有副作用的撤销。
- Chat 不提供任意恢复正在运行 Turn 的通用 Continue 按钮。
- 已经显示模型增量后，不应假定网络失败会安全地自动从头重放。


<a id="privacy"></a>
## 模型数据与本地数据的边界

- Provider 配置和会话历史在本地保存，不代表对话不出机器。
- Prompt、被加入上下文的 Tool 结果及相关正文会发送给配置的模型服务。
- 只开启需要的 Tool，少量查询，并避免把个人流量、密钥或隐私正文交给模型。
- Tool 结果有脱敏边界，但不是任意业务内容都会被自动识别和清除。
- 浏览器抓到的页面、日志和响应内容都是待分析数据，不是授权模型扩大操作范围的指令。
- 停用 Agent 能力不等于停用 MCP，同样也不会撤销模型服务商侧的凭据。
