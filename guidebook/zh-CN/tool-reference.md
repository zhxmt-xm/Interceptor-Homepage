# Tool 操作速查

[教程目录](../README.md) · [权限与审批](tool-permissions.md)

本表按用户意图列出名称。`query` 读取数据，`change` 会控制操作、修改状态、产生网络请求或打开原生窗口。启用后，query 直接查询，change 再按 Agent Chat 或 MCP Client 的 Ask/Auto 决定是否审批。

<a id="capture"></a>
## Capture

| Tool | 类型 | 做什么 |
| --- | --- | --- |
| `capture_get_proxy_status` | query | 查询 listener 与录制状态 |
| `capture_get_storage_status` | query | 查询当前临时记录和正文用量 |
| `capture_start_recording` | change | 开始记录后续流量，处理正式就绪前提 |
| `capture_stop_recording` | change | 暂停新流量录制，不停止转发或恢复系统代理 |
| `capture_clear` | change | 清理当前 Capture 记录与正文 |
| `capture_list_exchanges` | query | 按查询条件列出请求摘要 |
| `capture_get_exchange` | query | 读取已存在请求的详情 |
| `capture_get_exchange_body` | query | 读取已存在请求的指定正文，遵守返回的预览边界 |
| `capture_list_websocket_messages` | query | 读取指定连接的 WebSocket 消息 |
| `capture_list_grpc_messages` | query | 读取指定记录的 gRPC 消息 |
| `capture_export_body` | change | 通过原生保存窗口导出指定正文 |
| `capture_export_har` | change | 通过原生窗口启动 HAR 导出 |
| `capture_import_har` | change | 通过原生窗口选择并导入 HAR |
| `capture_export_archive` | change | 通过原生窗口启动原生归档导出 |
| `capture_import_archive` | change | 通过原生窗口选择并导入原生归档 |
| `capture_get_transfer_job` | query | 查询已存在文件任务的进度、警告和终态 |
| `capture_cancel_transfer_job` | change | 请求取消并等待目标任务实际收尾 |

先查询得到当前身份，再读取正文或消息，不复用 Core 重启前的旧 ID。开始文件任务后继续检查结果；Tool 不接受模型随意给出的本机文件路径。操作步骤见 [Capture](capture.md)、[导入导出](transfer.md)。

<a id="rules"></a>
## Rules

| Tool | 类型 | 做什么 |
| --- | --- | --- |
| `rules_get_tree` | query | 读取已保存规则树及版本 |
| `rules_get_hits` | query | 查询规则命中情况 |
| `rules_replace_tree` | change | 基于当前版本替换规则树 |
| `rules_import` | change | 选择文件，经预览确认后追加规则 |
| `rules_export` | change | 导出 Core 已保存的规则树 |

替换前先读最新版本。Map Local 的本地路径有专门脱敏和保留边界，不用模型编造路径。UI 导出草稿与 Tool 导出保存态不同，详见 [Rules](rules.md#import-export)。

<a id="composer"></a>
## Composer

| Tool | 类型 | 做什么 |
| --- | --- | --- |
| `composer_get_collection` | query | 读取已保存请求集合及版本 |
| `composer_replace_collection` | change | 基于当前版本原子替换集合 |
| `composer_import_collection` | change | 选择文件，经预览确认后追加集合 |
| `composer_export_collection` | change | 通过原生保存窗口导出集合 |
| `composer_send_request` | change | 直接发送明确的请求，不经过 Capture 的代理数据面 |
| `composer_probe_connection` | change | 只做 TLS 握手探测，不发送 HTTP 请求 |

集合替换或导入不自动发送。请求发送与 TLS 探测都产生真实网络活动，不是 query。详见 [Composer](composer.md)。

<a id="breakpoints"></a>
## Breakpoints

| Tool | 类型 | 做什么 |
| --- | --- | --- |
| `breakpoints_list` | query | 读取当前仍在等待的断点 |
| `breakpoints_enable_http` | change | 开启 HTTP 断点匹配控制 |
| `breakpoints_disable_http` | change | 关闭 HTTP 断点匹配控制 |
| `breakpoints_enable_websocket` | change | 为指定连接启用 WebSocket 帧断点配置 |
| `breakpoints_disable_websocket` | change | 停用 WebSocket 帧断点配置 |
| `breakpoints_continue` | change | 原样放行一个仍存在的等待项 |
| `breakpoints_forward_edited` | change | 在允许字段范围内编辑并放行一个等待项 |
| `breakpoints_drop` | change | 丢弃一个仍存在的等待项 |
| `breakpoints_continue_queue` | change | 原样放行指定逻辑队列在操作开始时的等待项 |
| `breakpoints_drop_queue` | change | 丢弃指定逻辑队列在操作开始时的等待项 |
| `breakpoints_continue_rule` | change | 原样放行属于指定规则的已有等待项 |

编辑 Tool 的范围按阶段区分：request 可编辑方法、URL、文本正文；response 可编辑状态码和文本正文；WebSocket 可编辑文本正文。它不开放 Header、任意文件路径或关闭码参数，这些细项用 [App 编辑器](breakpoints.md#edit)处理。

批量 Continue 忽略 Renderer 草稿，不等于对所有项执行 Forward edited；过期单项必须重新查询。

<a id="diagnostics"></a>
## Diagnostics

| Tool | 类型 | 做什么 |
| --- | --- | --- |
| `diagnostics_get_trace` | query | 读取当前 Core trace 的有限快照 |
| `diagnostics_get_recent` | query | 读取当前 Core 内存中的最近记录 |
| `diagnostics_query` | query | 按支持条件查询持久诊断记录 |
| `diagnostics_export` | change | 通过原生窗口导出脱敏 JSONL |

内存快照不是完整历史；导出启动仍需等待任务完成。详见 [Diagnostics](diagnostics.md)。

<a id="settings"></a>
## Settings

| Tool | 类型 | 做什么 |
| --- | --- | --- |
| `settings_get_core_process_status` | query | 查询 Core 当前运行状态 |
| `settings_get_system_proxy_status` | query | 查询系统代理公开状态 |
| `settings_enable_system_proxy` | change | 按正式流程接管系统代理 |
| `settings_restore_system_proxy` | change | 按所有权规则恢复系统代理 |
| `settings_get_certificate_status` | query | 查询 CA 公开身份与信任状态 |
| `settings_generate_certificate` | change | 生成 CA；受信任的现有 CA 不能被直接覆盖 |
| `settings_install_certificate` | change | 经平台授权安装信任 |
| `settings_uninstall_certificate` | change | 撤销信任，保留材料 |
| `settings_delete_certificate` | change | 按必要的信任撤销流程删除材料 |
| `settings_reveal_certificate` | change | 通过原生方式定位证书材料 |
| `settings_view_certificate` | change | 通过原生窗口查看证书 |
| `settings_open_certificate_manager` | change | 打开对应平台的证书管理入口 |
| `settings_get_tls_insecure_hosts` | query | 查询源站证书校验例外 |
| `settings_replace_tls_insecure_hosts` | change | 替换明确的源站证书例外名单 |
| `settings_enable_https_decryption` | change | 开启解密意图；真正生效仍需要可用且受信任的 CA |
| `settings_disable_https_decryption` | change | 停止解密，不自动卸载 CA |
| `settings_get_tls_passthrough` | query | 查询加密透传主机名单 |
| `settings_replace_tls_passthrough` | change | 替换加密透传名单 |
| `settings_list_app_containers` | query | 查询 Windows AppContainer 公开列表 |
| `settings_enable_app_container` | change | 为单个目标启用 loopback 例外 |
| `settings_disable_app_container` | change | 撤销单个目标的 loopback 例外 |
| `settings_enable_all_app_containers` | change | 为当前枚举目标批量启用例外 |
| `settings_disable_all_app_containers` | change | 批量撤销当前枚举目标的例外 |
| `settings_set_language` | change | 选择现有 App 语言 |
| `settings_set_theme` | change | 选择四个现有主题之一 |
| `settings_set_export_privacy_defaults` | change | 设置后续导出的三项隐私默认值 |

原生文件位置、私钥和完整系统代理配置不是普通 Tool 查询结果。系统授权、平台专属能力及实际作用范围见 [Settings](settings.md)。

## 使用这份速查表

下面以 MCP 查询代理状态、再暂停录制为例。先在 [MCP](mcp.md) 创建并连接自己的 Client；名称只标识客户端，不会自动配置 Host。

1. 按目标找到对应业务章节，理解操作后果。query 也可能读取敏感流量，只开启本次需要的能力。

2. 在 Settings → Agent 的 Tool capabilities 搜索 `capture_get_proxy_status`，确认 MCP 列已开启。Agent 列独立配置；搜索不会关闭看不见的行。

   ![使用这份速查表 · 2](../media/v0.1.1-alpha.1/mcp-streamable-english/step-008.png)

3. 在 Host 刷新 Tool 列表，从当前 schema 读取准确参数，再调用 `capture_get_proxy_status` 并检查返回的 listener 与录制状态。不从名称猜字段，也不把复制连接配置当作查询成功。

4. 需要暂停录制时，先确认 MCP 列允许 `capture_stop_recording`，Client 保持 Ask，再从 Host 发起调用。核对 Client、Tool 和影响；红框 1 是 Deny Tool call，红框 2 是 Allow Tool call。本次先选择 Deny，录制不会暂停。

   ![使用这份速查表 · 4](../media/v0.1.1-alpha.1/mcp-streamable-english/step-012.annotated.png)

5. 确实需要执行时重新请求，审阅新的审批，再点击红框 1 的 Allow Tool call。

   ![使用这份速查表 · 5](../media/v0.1.1-alpha.1/mcp-streamable-english/step-013.annotated.png)

6. 回到 Capture，确认红框 1 已变为 Paused，再检查 Host 中的 Tool 结果。暂停不清空已有记录，也不恢复系统代理；需要继续采集时通过录制按钮恢复。

   ![使用这份速查表 · 6](../media/v0.1.1-alpha.1/mcp-streamable-english/step-014.annotated.png)

模型配置、MCP Client 凭据管理、任意文件读写和 App 更新不在这份业务 Tool 表中，使用对应正式界面。更完整的权限与审批步骤见 [Tool 权限](tool-permissions.md)。
