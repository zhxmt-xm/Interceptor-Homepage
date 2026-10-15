# Interceptor User Guide

> English draft for `v0.1.1-alpha.1`. Every operating step requires a matching real screenshot and consistent example data before it can be accepted. Release walkthroughs, step images and feature videos are still being completed. The website is not yet publicly deployed, and the App does not embed it yet.

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

<a id="videos"></a>
## Recorded videos and step images

Each link opens actual product video, captions, example values and per-step screenshots in its owning chapter. Recordings use the published macOS x64 `v0.1.1-alpha.1` App. Unrecorded branches, other platforms and first-time OS authorization are not certified by these demonstrations.

| Operation | Recording |
| --- | --- |
| Workspaces and themes | [Workspace](en/workspace.md#walkthrough-video) |
| Recording, bodies, HTTP/2, WebSocket and gRPC | [Capture](en/capture.md#walkthrough-video) |
| Sending and adding fields | [Composer](en/composer.md#walkthrough-video) |
| JSON/Text/Form and Collection files | [Composer editing](en/composer.md#walkthrough-composer-editing-video) |
| Three folder levels, ordering, import cancellation and deletion | [Collection management](en/composer.md#walkthrough-composer-collection-video) |
| Field switches, resending after deletion and history restoration | [Composer fields](en/composer.md#walkthrough-composer-fields-video) |
| First Header rule and hits | [Rules introduction](en/rules.md#walkthrough-video) |
| Rewrites, mocks, delays, blocking and mapping | [Rule actions](en/rules.md#walkthrough-rules-actions-video) |
| All eight matchers and AND | [Matching conditions](en/rules.md#walkthrough-rules-matchers-video) |
| Precedence, folders and appended Rule files | [Rule organization](en/rules.md#walkthrough-rules-organization-video) |
| Text edits, continuation and Drop | [Breakpoints](en/breakpoints.md#walkthrough-video) |
| HAR, archives and native body file dialogs | [File round trips](en/transfer.md#walkthrough-video) |
| Existing CA, upstream drafts, privacy and storage | [Settings](en/settings.md#walkthrough-video) |
| Records, filters and details | [Diagnostics](en/diagnostics.md#walkthrough-video) |
| Models, chats, approvals, Stop and Retry | [Agent](en/agent.md#walkthrough-video) |
| Clients, queries, approval and revocation | [MCP](en/mcp.md#walkthrough-video) |
| Port conflict recovery after restart | [MCP recovery](en/mcp.md#walkthrough-mcp-endpoint-video) |
| Separate Agent/MCP access | [Permissions](en/tool-permissions.md#walkthrough-video) |

## Reading conventions

- Names such as Capture, Recording and Headers identify App features. Button text follows the App's current language; you do not need to change that language for the guide.
- Each procedure states its purpose, prerequisites, actions, observable outcome and limitations.
- Example names, field names and values are shared by the text, screenshots and videos. Generated IDs, timestamps and dynamic ports are identified rather than silently changed.
- Use only traffic you are authorized to inspect. `example.com` is a public example; `.test` addresses and example filenames are not ready-made services.
- Start with plain HTTP, then configure HTTPS. Do not disable system-wide security controls to follow a tutorial.
- A captured record, a body preview and a completely received response are different facts.

## Versions, media and access

- The Chinese and English drafts cover the same operations. Neither translation nor a working reading page proves the steps have passed release acceptance.
- Every operating step needs a real screenshot from the stated App version and platform. Design previews, empty images and invented timestamps do not count.
- The guide is maintained only in Homepage. Finish the website first; App integration will later use an online borderless iframe and a browser-open action.
- Online access requires a reachable website. There is no offline guarantee or private npm dependency for building the App.
- Capture is temporary. Export important records and review credentials, cookies, URLs, bodies and system identity before sharing.
