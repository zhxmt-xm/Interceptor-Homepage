# Interceptor User Guide

> English draft for `v0.1.1-alpha.1`. Every operating step requires a matching real screenshot and consistent example data before it can be accepted. Release walkthroughs and step images are still being completed. The website is not yet publicly deployed, and the App does not embed it yet.

Interceptor is a desktop HTTP(S) debugging proxy. Start with the task you want to accomplish; you do not need to read source code, test scripts or use an AI agent.

## First use

1. [Getting started](en/getting-started.md): installation prerequisites, proxy readiness, your first HTTP request, saving and quitting.
2. [Your workspace](en/workspace.md): tools, split panes, themes, languages and data lifetimes.
3. [Capture](en/capture.md): find a request and inspect its headers, body, WebSocket frames or gRPC messages.

## Modify and reproduce

- [Composer](en/composer.md): send independent requests, edit parameters and authentication, and manage collections.
- [Rules](en/rules.md): match traffic and rewrite, mock, map, block or delay it.
- [Breakpoints](en/breakpoints.md): pause requests, responses or WebSocket frames, then continue, edit or drop them.

## Save, configure and troubleshoot

- [Import and export](en/transfer.md): HAR, native archives, individual bodies, cancellation and privacy.
- [Settings](en/settings.md): system and upstream proxies, certificates, TLS, Windows AppContainer, storage and updates.
- [Diagnostics](en/diagnostics.md): find operation records and export useful diagnostics.
- [Troubleshooting and recovery](en/troubleshooting.md): narrow down the cause without blindly reinstalling or deleting data.

## AI-assisted debugging

- [Agent](en/agent.md): configure a model, manage chats, inspect usage, stop and retry.
- [MCP](en/mcp.md): connect an external AI host and manage clients, endpoints and credentials.
- [Tool permissions](en/tool-permissions.md): separate Agent/MCP access, Ask, Auto and native authorization.
- [Tool reference](en/tool-reference.md): actual tool names, operation types and limitations.

AI is optional. Capture, Composer, Rules and Breakpoints do not require a model API key. Model calls may incur provider charges.

## Find an answer

| Task | Start here |
| --- | --- |
| Capture your first request | [First HTTP request](en/getting-started.md#发出第一条-http-请求) |
| Find one endpoint or error response | [Capture filters](en/capture.md#搜索和组合筛选) |
| HTTPS appears only as a tunnel | [HTTPS and certificates](en/settings.md#https-decryption) |
| A request keeps waiting | [Breakpoint queues](en/breakpoints.md#queues) |
| Return test data without changing the server | [Mock a response](en/rules.md#mock-response) |
| Send a request repeatedly | [Composer](en/composer.md#发送第一个请求) |
| Share evidence without leaking data | [Export privacy](en/transfer.md#privacy) |
| Use Interceptor with an existing proxy | [Upstream modes](en/settings.md#upstream) |
| Allow AI to inspect but not change anything | [Read-only permissions](en/tool-permissions.md#read-only) |
| Networking fails after quitting | [Proxy recovery](en/troubleshooting.md#proxy-recovery) |

<a id="walkthroughs"></a>
## Step-by-step image index

These links open real product step images and matching values in the same chapter. Images retain the actual App version and language; branches not shown, other platforms and first-time system authorization are not automatically accepted.

| Operation | Recording |
| --- | --- |
| Workspaces and themes | [Workspace](en/workspace.md#walkthrough) |
| Recording, bodies, HTTP/2, WebSocket and gRPC | [Capture](en/capture.md#walkthrough) |
| Application, Host, Protocol, Type and Rule facets | [Complete filter groups](en/capture.md#walkthrough-capture-facets) |
| Request, Markdown Source, splitters and scrolling | [Body inspection](en/capture.md#walkthrough-capture-inspection) |
| Receive progress, GOAWAY interruption and new-connection recovery | [HTTP/2 lifecycle](en/capture.md#walkthrough-capture-http2) |
| Message copying, fullscreen and 205-message paging | [WebSocket](en/capture.md#walkthrough-capture-websocket-messages) · [gRPC](en/capture.md#walkthrough-capture-grpc-messages) |
| Large-body formatting, preview limits and complete files | [Large bodies](en/capture.md#walkthrough-capture-body-limits) |
| Sending and adding fields | [Composer](en/composer.md#walkthrough) |
| JSON/Text/Form and Collection files | [Composer editing](en/composer.md#walkthrough-composer-editing) |
| Three folder levels, ordering, import cancellation and deletion | [Collection management](en/composer.md#walkthrough-composer-collection) |
| Field switches, resending after deletion and history restoration | [Composer fields](en/composer.md#walkthrough-composer-fields) |
| First Header rule and hits | [Rules introduction](en/rules.md#walkthrough) |
| Response Headers, Original/Final and native body saving | [Response and body evidence](en/rules.md#walkthrough-rules-response-evidence) |
| Rewrites, mocks, delays, blocking and mapping | [Rule actions](en/rules.md#walkthrough-rules-actions) |
| All eight matchers and AND | [Matching conditions](en/rules.md#walkthrough-rules-matchers) |
| Precedence, folders and appended Rule files | [Rule organization](en/rules.md#walkthrough-rules-organization) |
| Text edits, continuation and Drop | [Breakpoints](en/breakpoints.md#walkthrough) |
| HAR, archives and native body file dialogs | [File round trips](en/transfer.md#walkthrough) |
| All/filtered/selected scopes and active cancellation | [Export scopes](en/transfer.md#walkthrough-transfer-scopes) · [Archive cancellation](en/transfer.md#walkthrough-transfer-cancel) |
| Existing CA, upstream drafts, privacy and storage | [Settings](en/settings.md#walkthrough) |
| Adding, matching and removing TLS passthrough, then restoring decryption | [TLS passthrough round trip](en/settings.md#walkthrough-settings-tls-passthrough) |
| Records, filters and details | [Diagnostics](en/diagnostics.md#walkthrough) |
| Models, chats, approvals, Stop and Retry | [Agent](en/agent.md#walkthrough) |
| Clients, queries, approval and revocation | [MCP](en/mcp.md#walkthrough) |
| Port conflict recovery after restart | [MCP recovery](en/mcp.md#walkthrough-mcp-endpoint) |
| Separate Agent/MCP access | [Permissions](en/tool-permissions.md#walkthrough) |
| Workspace: save before normal Close | [Saving and closing](en/workspace.md#walkthrough-workspace-close) |
| Workspace: persistent and temporary data after reopening | [Restart checks](en/workspace.md#walkthrough-workspace-restart) |
| Workspace: retained Settings, Agent links, panel and window resizing | [Navigation and windows](en/workspace.md#walkthrough-workspace-navigation) |
| Workspace: actual maximize, restore and minimize | [Window controls](en/workspace.md#walkthrough-workspace-window-controls) |
| Capture: same-group OR, cross-group AND and clearing search | [Combined filters](en/capture.md#walkthrough-capture-filters) |
| Capture: shortcut Block and two-phase breakpoints | [Shortcut rules](en/capture.md#walkthrough-capture-shortcuts) |
| Composer: response groups, viewers and splitters | [Response inspection](en/composer.md#walkthrough-composer-inspection) |
| Composer: repeated Query, Text and history replay | [Replay](en/composer.md#walkthrough-composer-replay) |
| Composer: public Basic/Bearer authentication and cleanup | [Authentication](en/composer.md#walkthrough-composer-auth) |
| Composer: MCP send approval and Collection read/replace | [Tool and UI boundaries](en/composer.md#walkthrough-composer-tools) |
| Composer: native file Tool cancellation, confirmation and append | [File Tool round trips](en/composer.md#walkthrough-composer-file-tools) |
| Composer: saving complete request fields in a deep folder | [Save before restart](en/composer.md#walkthrough-composer-persistence-save) |
| Composer: restored fields and one explicit Send | [Verify after restart](en/composer.md#walkthrough-composer-persistence-restart) |
| Composer: auto Format, XML preservation and the 2 MiB preview | [Response boundaries](en/composer.md#walkthrough-composer-response-formatting) |
| Rules: remove, append, bodies and search | [Field and body operations](en/rules.md#walkthrough-rules-operations) |
| Rules: hierarchy, validation, hit navigation and deletion | [Rule tree](en/rules.md#walkthrough-rules-tree) |
| Rules: contains, exact, regex, Aa and MIME | [Matching modes](en/rules.md#walkthrough-rules-matching-modes) |
| Rules: response Headers, disable/recovery and encoding | [Response controls](en/rules.md#walkthrough-rules-response-controls) |
| Rules: a second writer, conflicts and Reload | [Conflict recovery](en/rules.md#walkthrough-rules-conflict) |
| Rules: cross-scheme routing and missing Map Local files | [Mapping recovery](en/rules.md#walkthrough-rules-routing) |
| Breakpoints: response Headers, Text and File | [Response breakpoints](en/breakpoints.md#walkthrough-breakpoints-response) |
| Breakpoints: queue heads, drafts and batch scope | [Queues](en/breakpoints.md#walkthrough-breakpoints-queue) |
| Breakpoints: WebSocket text in both directions | [Text frames](en/breakpoints.md#walkthrough-breakpoints-websocket) |
| Breakpoints: shortcut undo, global/rule switches and caller abort | [Manager](en/breakpoints.md#walkthrough-breakpoints-manager) |
| Breakpoints: Both, empty Text, Ping/Pong and close codes | [Control frames](en/breakpoints.md#walkthrough-breakpoints-websocket-controls) |
| Breakpoints: request Headers, empty Text, Files and status | [Request variants](en/breakpoints.md#walkthrough-breakpoints-request-variants) |
| Breakpoints: mixed queue scope and normal shutdown with waits | [Mixed queues and Close](en/breakpoints.md#walkthrough-breakpoints-mixed-queues) |
| Settings: privacy defaults, storage cancellation and clearing | [Storage and privacy](en/settings.md#walkthrough-settings-storage-privacy) |
| Settings: system proxy restoration versus Recording | [Proxy controls](en/settings.md#walkthrough-settings-proxy-routing) |
| Settings: actual Manual, PAC, Direct and shared drafts | [Upstream round trips](en/settings.md#walkthrough-settings-upstream) |
| Settings: all privacy defaults, per-export overrides and actual HAR | [Export privacy](en/settings.md#walkthrough-settings-privacy-export) |
| Settings: actual Check and its failure state | [Update check](en/settings.md#walkthrough-settings-update-check) |
| Diagnostics: actual failures, history, filters and JSONL | [Diagnostic investigation](en/diagnostics.md#walkthrough-diagnostics-lifecycle) |
| Agent: models, Chat management and capability enforcement | [Management](en/agent.md#walkthrough-agent-management) |
| Agent: removing the only remaining model and becoming unconfigured | [Final model removal (native excerpt)](en/agent.md#walkthrough-agent-model-removal) |
| Agent: keyboard, Context, new Chats and running deletion | [Sessions](en/agent.md#walkthrough-agent-session-lifecycle) |
| Agent: actual restart, restored history and final-model removal | [Restart and history](en/agent.md#walkthrough-agent-session-restart) |
| Agent: completed Tools, Stop, Retry and native file approval | [Tool lifecycle](en/agent.md#walkthrough-agent-tool-lifecycle) |
| MCP: cancelled approvals, export and in-flight Client revocation | [Call lifecycle](en/mcp.md#walkthrough-mcp-tool-lifecycle) |
| MCP: discovery and queries after changing a conflicting endpoint | [Endpoint reconnection](en/mcp.md#walkthrough-mcp-endpoint-reconnect) |
| Permissions: every read-only switch and actual rejection | [Complete read-only setup](en/tool-permissions.md#walkthrough-tool-permissions-readonly) |
| Permissions: read-only discovery and queries after restart | [Persistence](en/tool-permissions.md#walkthrough-tool-permissions-restart) |

## Reading conventions

- Names such as Capture, Recording and Headers identify App features. Button text follows the App's current language; you do not need to change that language for the guide.
- Each procedure states its purpose, prerequisites, actions, observable outcome and limitations.
- Example names, field names and values are shared by the text and screenshots. Generated IDs, timestamps and dynamic ports are identified rather than silently changed.
- Use only traffic you are authorized to inspect. `example.com` is a public example; `.test` addresses and example filenames are not ready-made services.
- Start with plain HTTP, then configure HTTPS. Do not disable system-wide security controls to follow a tutorial.
- A captured record, a body preview and a completely received response are different facts.

## Versions, media and access

- The Chinese and English drafts cover the same operations. Neither translation nor a working reading page proves the steps have passed release acceptance.
- Every operating step needs a real screenshot from the stated App version and platform. Design previews and empty images do not count.
- The guide is maintained only in Homepage. Finish the website first; App integration will later use an online borderless iframe and a browser-open action.
- Online access requires a reachable website. There is no offline guarantee or private npm dependency for building the App.
- Capture is temporary. Export important records and review credentials, cookies, URLs, bodies and system identity before sharing.
