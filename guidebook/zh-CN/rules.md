# Rules：修改后续匹配的流量

> 草稿，面向 `v0.1.1-alpha.1`；已录条件、动作、排序及文件往返按步骤配图，缺失分支明确保留，不代表全章或 item9 完成。规则会影响实际请求，先用自己的测试接口和窄范围条件操作。

[教程目录](../README.md) · [Capture](capture.md) · [Breakpoints](breakpoints.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## 逐步骤实操：真实产品录制

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>ruleName</code> | <code>Guide test header</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/rules/order</code> |
| <code>url</code> | <code>http://127.0.0.1:54561/guide/rules/order</code> |
| <code>headerName</code> | <code>x-interceptor-guide</code> |
| <code>headerValue</code> | <code>rules-demo</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules/rules.mp4" poster="../media/v0.1.1-alpha.1/rules/rules-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules/rules.vtt" default>
</video>

<a id="walkthrough-01-open"></a>
### 01 · 打开 Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules/rules.mp4#t=0.334) · [返回本节视频](#walkthrough-video)

![01 · 打开 Rules](../media/v0.1.1-alpha.1/rules/rules-01-open.png)

<a id="walkthrough-02-create"></a>
### 02 · 新建规则

[视频 00:03](../media/v0.1.1-alpha.1/rules/rules.mp4#t=3.189) · [返回本节视频](#walkthrough-video)

![02 · 新建规则](../media/v0.1.1-alpha.1/rules/rules-02-create.png)

<a id="walkthrough-03-name"></a>
### 03 · 命名 Guide test header

[视频 00:06](../media/v0.1.1-alpha.1/rules/rules.mp4#t=6.087) · [返回本节视频](#walkthrough-video)

![03 · 命名 Guide test header](../media/v0.1.1-alpha.1/rules/rules-03-name.png)

<a id="walkthrough-04-host"></a>
### 04 · 限制 Host 为 127.0.0.1

[视频 00:08](../media/v0.1.1-alpha.1/rules/rules.mp4#t=8.939) · [返回本节视频](#walkthrough-video)

![04 · 限制 Host 为 127.0.0.1](../media/v0.1.1-alpha.1/rules/rules-04-host.png)

<a id="walkthrough-05-path-condition"></a>
### 05 · 添加 Path 条件

[视频 00:11](../media/v0.1.1-alpha.1/rules/rules.mp4#t=11.789) · [返回本节视频](#walkthrough-video)

![05 · 添加 Path 条件](../media/v0.1.1-alpha.1/rules/rules-05-path-condition.png)

<a id="walkthrough-06-path"></a>
### 06 · 填写 /guide/rules/order

[视频 00:14](../media/v0.1.1-alpha.1/rules/rules.mp4#t=14.991) · [返回本节视频](#walkthrough-video)

![06 · 填写 /guide/rules/order](../media/v0.1.1-alpha.1/rules/rules-06-path.png)

<a id="walkthrough-07-header-name"></a>
### 07 · 填写 x-interceptor-guide

[视频 00:17](../media/v0.1.1-alpha.1/rules/rules.mp4#t=17.798) · [返回本节视频](#walkthrough-video)

![07 · 填写 x-interceptor-guide](../media/v0.1.1-alpha.1/rules/rules-07-header-name.png)

<a id="walkthrough-08-header-value"></a>
### 08 · 填写 rules-demo

[视频 00:20](../media/v0.1.1-alpha.1/rules/rules.mp4#t=20.587) · [返回本节视频](#walkthrough-video)

![08 · 填写 rules-demo](../media/v0.1.1-alpha.1/rules/rules-08-header-value.png)

<a id="walkthrough-09-enable"></a>
### 09 · 启用规则

[视频 00:23](../media/v0.1.1-alpha.1/rules/rules.mp4#t=23.388) · [返回本节视频](#walkthrough-video)

![09 · 启用规则](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

<a id="walkthrough-10-apply"></a>
### 10 · 应用规则

[视频 00:26](../media/v0.1.1-alpha.1/rules/rules.mp4#t=26.195) · [返回本节视频](#walkthrough-video)

![10 · 应用规则](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

<a id="walkthrough-11-hit"></a>
### 11 · 发送匹配请求

[视频 00:29](../media/v0.1.1-alpha.1/rules/rules.mp4#t=29.037) · [返回本节视频](#walkthrough-video)

![11 · 发送匹配请求](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

<a id="walkthrough-12-capture"></a>
### 12 · 在 Capture 核对实际结果

[视频 00:33](../media/v0.1.1-alpha.1/rules/rules.mp4#t=33.695) · [返回本节视频](#walkthrough-video)

![12 · 在 Capture 核对实际结果](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

<a id="walkthrough-13-nonmatching"></a>
### 13 · 核对非匹配请求不受影响

[视频 00:36](../media/v0.1.1-alpha.1/rules/rules.mp4#t=36.839) · [返回本节视频](#walkthrough-video)

![13 · 核对非匹配请求不受影响](../media/v0.1.1-alpha.1/rules/rules-13-nonmatching.png)

<a id="walkthrough-14-disable"></a>
### 14 · 停用规则并 Apply

[视频 00:39](../media/v0.1.1-alpha.1/rules/rules.mp4#t=39.837) · [返回本节视频](#walkthrough-video)

![14 · 停用规则并 Apply](../media/v0.1.1-alpha.1/rules/rules-14-disable.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:end -->

## 先区分规则与录制

- Rules 作用于真实代理转发路径，不能改写已经完成的历史请求。
- 暂停 Recording 不会停用 Rules；只是新流量不再被记录。
- Composer 直接出站，不应用这些代理规则。验证规则应使用经过代理的外部客户端。
- 目录只是组织方式，不会自动成为匹配条件。

<a id="first-rule"></a>
## 创建、启用并应用第一条规则

**目标**：只给一组测试请求添加一个不含敏感信息的 Header。

**前提**：代理就绪；为了观察结果，开启 Recording。使用自己有权访问的测试地址。

**步骤**

1. 打开 Rules & Map。

   ![打开 Rules](../media/v0.1.1-alpha.1/rules/rules-01-open.png)

2. 在根工具栏新建规则；空白区域菜单是另一入口，见[独立实录中的菜单与新建](#walkthrough-rules-response-evidence-02-root-menu)。该实录创建的是 `Guide response and body`，不是本节这条规则。

   ![实际新建规则](../media/v0.1.1-alpha.1/rules/rules-02-create.png)

3. 将规则命名为 `Guide test header`。

   ![填写 Guide test header](../media/v0.1.1-alpha.1/rules/rules-03-name.png)

4. 将 Host 限制为 `127.0.0.1`，不是完整 URL。

   ![Host 的实际值 127.0.0.1](../media/v0.1.1-alpha.1/rules/rules-04-host.png)

5. 添加 Path 条件。

   ![添加 Path 条件的中间态](../media/v0.1.1-alpha.1/rules/rules-05-path-condition.png)

6. 填写 `/guide/rules/order`。

   ![填好的测试 Path](../media/v0.1.1-alpha.1/rules/rules-06-path.png)

7. 请求 Header 动作使用 `set`，名称填 `x-interceptor-guide`。

   ![先填写 Header 名称](../media/v0.1.1-alpha.1/rules/rules-07-header-name.png)

8. 值填 `rules-demo`。

   ![再填写 Header 值 rules-demo](../media/v0.1.1-alpha.1/rules/rules-08-header-value.png)

9. 检查未填写问题，补齐后开启规则。[独立的校验实录](#walkthrough-rules-tree-10-invalid)先展示缺少字段时的issue数和禁用Apply，再逐字段补齐；这是`Guide nested priority`示例，不把完整规则的启用图冒充失败画面。

   ![启用本次完整规则](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

10. 点击 Apply，等待成功。

    ![实际 Apply 后的规则状态](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

11. 让外部客户端经过代理请求 `http://127.0.0.1:54561/guide/rules/order`，检查命中。`54561` 只是录制时的动态端口，实际使用自己的服务。

    ![发送匹配请求后的命中](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

12. 回到 Capture 检查实际请求头。[Header标记与返回规则](#walkthrough-rules-tree-30-header-effect)另有实际操作；标记是可点击的行内来源，不是需要“展开”的独立面板。

    ![Capture 中实际的 x-interceptor-guide 请求 Header](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

13. 再发不满足条件的测试请求，确认没有相同改写。

    ![非匹配请求的实际检查点](../media/v0.1.1-alpha.1/rules/rules-13-nonmatching.png)

14. 测试结束关闭 `Guide test header` 并 Apply。

    ![停用并应用本次 Header 规则](../media/v0.1.1-alpha.1/rules/rules-14-disable.png)

**预期结果**：匹配请求按规则处理；不匹配请求不受影响。

**关键说明**

- 普通新规则和从 Capture 创建的改写草稿默认未启用；Capture 的快捷 Breakpoint 是例外，会创建、启用并立即 Apply。
- 字段未填写完整时不能启用，存在未填写项时不能 Apply。空条件集不是“匹配所有请求”。
- 编辑草稿、开关和排序之后，要检查 Apply 状态，不把屏幕修改当作 Core 已经应用。
- 未填写校验不等于所有正则、JSON 或本地文件一定可用；执行结果仍要用真实请求核对。

<a id="matchers"></a>
## 选择匹配条件

**步骤**

以下使用独立的 `Guide matchers` 实拍。`59147` 是本次测试服务的动态端口；完整 URL 条件与客户端地址必须一起替换，不能只改其中一处。

1. 新建 `Guide matchers`。

   ![新建本次 matcher 规则](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-02-create.png)

2. Host 填 `127.0.0.1`。

   ![Host 条件](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-03-host.png)

3. 添加 Method，再选 `GET`。

   ![添加 Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-04-method-add.png)

   ![Method 选择 GET](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-05-method.png)

4. 添加 Path，填 `/guide/matchers/order`。

   ![添加 Path](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-06-path-add.png)

   ![Path 的实际值](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-07-path.png)

5. 添加 URL，填 `http://127.0.0.1:59147/guide/matchers/order?guide=matcher-demo`。

   ![添加 URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-08-url-add.png)

   ![完整 URL 的实际值](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-09-url.png)

6. 添加 Query，名称 `guide`，值 `matcher-demo`。

   ![添加 Query](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-10-query-add.png)

   ![Query 的名称和值](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-11-query.png)

7. 添加请求 Header 条件，名称 `x-guide-match`，值 `yes`。

   ![添加 Header 条件](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-12-header-add.png)

   ![请求 Header 条件的实际值](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-13-header.png)

8. 添加 Status，范围填 `200` 到 `200`。

   ![添加 Status](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-14-status-add.png)

   ![响应状态范围 200 到 200](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-15-status.png)

9. 添加响应 MIME 条件，值填 `application/json`。

   ![添加 MIME](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-16-mime-add.png)

   ![Response MIME 的实际值](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-17-mime.png)

10. 将效果 Header 动作设为响应阶段，避免在响应条件尚未判定时执行请求改写。

    ![效果动作选择响应阶段](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-18-effect-phase.png)

11. 效果 Header 名称填 `x-interceptor-guide`，值填 `matcher-demo`。

    ![填写效果 Header 名称](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-19-effect-name.png)

    ![填写效果 Header 值](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-20-effect-value.png)

12. 启用完整规则，再 Apply。

    ![启用 Guide matchers](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-21-enable.png)

    ![Apply matcher 规则](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-22-apply.png)

13. 发送带 `x-guide-match: yes` 的上述 GET，检查全部条件满足时的响应 Header。

    ![满足八种条件的 GET 正例](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-23-match.png)

14. 用 POST 做反例，检查 Method 不满足时不产生同样的效果。

    ![POST 不满足 Method 的 AND 反例](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-24-no-match.png)

15. 需要其他 Host、Path 或 URL 匹配方式时，按界面选择精确、包含或正则并核对大小写选项，再分别验证。

    本例证明八条件AND；[匹配模式独立实录](#walkthrough-rules-matching-modes)进一步比较contains、exact、regex、Aa大小写和`application/*`的真实正反例。输入用`/guide/matching/Case`与大小写/后缀变体，`x-guide-case`只区分同路径请求，不添加query改变被测Path。

    ![真实开启Path精确匹配](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-13-exact.png)

    ![大小写敏感正则的真实配置](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-17-valid-regex.png)

    当前版本允许把无效正则`[` Apply，但它不会匹配任何请求；[实录展示这个限制及修正](#walkthrough-rules-matching-modes-16-invalid-regex)，不能仅看“已应用/编译通过”就认为语法有效。本教程没有修改这一产品行为。

| 条件 | 适用情况 | 注意 |
| --- | --- | --- |
| Method | 只处理 `GET`、`POST` 等方法 | 使用实际协议方法 |
| Host | 限定目标主机 | 不把整个 URL 填成主机 |
| Path | 限定接口路径 | 搜索条件与正则含义不同 |
| URL | 匹配完整地址中的特定部分 | URL 可能包含敏感 query |
| Query | 匹配参数名及可选值 | 明确是否需要比较值 |
| Header | 按名称和可选值匹配头部 | 选择请求或响应阶段 |
| Status | 匹配响应状态范围 | 收到响应头后才能判定 |
| MIME | 匹配内容类型，支持对应通配写法 | 选择请求或响应阶段 |

**预期结果**：一条规则里的条件是 AND，必须全部满足，不是“任意命中一个就执行”。

**关键说明**：响应状态、响应 Header、响应 MIME 不能在请求尚未收到响应时提前判定。正则无法编译时可能不匹配，不把没有缺项提示当作正则已经测试成功。

<a id="headers-query"></a>
## 修改 Header 和 Query

**步骤**

1. 先按第一条规则的窄范围配置，使用请求 Header `set`，名称 `x-interceptor-guide`、值 `rules-demo`。响应方向的实际配置见上面的 `Guide matchers`，不要混用两次示例值。

   ![请求 Header 名称](../media/v0.1.1-alpha.1/rules/rules-07-header-name.png)

   ![请求 Header 值 rules-demo](../media/v0.1.1-alpha.1/rules/rules-08-header-value.png)

2. Query 设置演示使用另一条 `Guide query` 规则。限定自己的测试接口后，移除默认 Header 动作，再添加 Query。

   ![Guide query 移除默认 Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-06-remove.png)

   ![选择 Query 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-07-action.png)

3. 设置名称 `guide`、值 `rewritten`；测试请求原值是 `original`。后面的 Query remove 使用另一段独立示例，不要混用输入值。

   ![Query 改写值 guide=rewritten](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-08-values.png)

4. 检查动作的添加顺序，启用再Apply。当前编辑器提供添加/移除动作，没有独立的动作拖拽排序入口；不要把规则树的拖拽排序当作动作卡片排序。按需要的先后顺序添加动作，本次不加入无关动作。

   ![启用 Guide query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-09-enable.png)

   ![Apply Query 改写](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-10-apply.png)

5. 重新发送该规则的匹配请求，核对最终 Query 为 `guide=rewritten`，并与自己的服务端结果比较。

   ![实际最终 Query 结果](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-11-result.png)

6. Header append/remove 与 Query remove 改用 `rules-operations` 录制。先打开 Rules，不把它当作前面 `Guide query` 的继续编辑。

   ![新操作演示实际打开 Rules](../media/v0.1.1-alpha.1/rules-operations/rules-operations-01-rules.png)

7. 新建 `Guide operations`。

   ![实际创建 Guide operations](../media/v0.1.1-alpha.1/rules-operations/rules-operations-02-new.png)

8. 限定 Host `127.0.0.1`、Path `/guide/rule-operations`，只操作自己的测试流量。

   ![本轮实际 Host 与 Path 范围](../media/v0.1.1-alpha.1/rules-operations/rules-operations-03-scope.png)

9. Header 名称填 `x-guide-list`。

   ![实际 Header 名称 x-guide-list](../media/v0.1.1-alpha.1/rules-operations/rules-operations-04-header-name.png)

10. 选择 `append`，追加值填 `two`，不是将已有值替换成 `two`。

    ![实际 append 动作与追加值](../media/v0.1.1-alpha.1/rules-operations/rules-operations-05-append.png)

11. 启用这条规则。

    ![实际启用 Guide operations](../media/v0.1.1-alpha.1/rules-operations/rules-operations-06-enable.png)

12. Apply append。

    ![实际 Apply Header append](../media/v0.1.1-alpha.1/rules-operations/rules-operations-07-apply.png)

13. 重新发送带 `x-guide-list: one` 的匹配请求，核对保留 `one` 并追加 `two`；多值展示以实际结果为准。

    ![真实保留 one 并追加 two 的结果](../media/v0.1.1-alpha.1/rules-operations/rules-operations-08-appended.png)

14. 将同一 Header 动作改为 `remove`。

    ![实际选择 Header remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-09-remove.png)

15. Apply remove。

    ![实际 Apply Header remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-10-apply-remove.png)

16. 再发带该 Header 的匹配请求，核对 `x-guide-list` 已被移除，不只看编辑器中的动作名称。

    ![实际 Header 移除结果](../media/v0.1.1-alpha.1/rules-operations/rules-operations-11-removed.png)

17. 将这条测试规则的动作改为 Query。

    ![实际改用 Query 动作](../media/v0.1.1-alpha.1/rules-operations/rules-operations-12-query-action.png)

18. 选择移除参数 `guide`；本次客户端输入是 `guide=remove-me`，不是前面的 `guide=original`。

    ![实际 Query remove 的参数名](../media/v0.1.1-alpha.1/rules-operations/rules-operations-13-query-remove.png)

19. Apply Query remove。

    ![实际 Apply Query 移除](../media/v0.1.1-alpha.1/rules-operations/rules-operations-14-apply-query.png)

20. 重新请求，核对最终请求不再包含该参数。请求 Body 的后续步骤见下节；本轮结束按[停用步骤](#order)保存停用状态。

    ![guide 参数实际被移除](../media/v0.1.1-alpha.1/rules-operations/rules-operations-15-query-result.png)

**预期结果**：只应用明确声明的修改，不因观察正文就额外重发请求。

**关键说明**：设置同名字段与追加字段不是同一件事。多个动作可能先后修改同一位置；后面的结果可能覆盖前面的结果。

<a id="response-header-evidence"></a>
### 响应 Header 的 append/remove

这组操作使用独立的 `Guide response and body`，不是继续编辑上面的请求 Header。先按[创建与 Apply 的逐步实录](#walkthrough-rules-response-evidence)设置 Host `127.0.0.1`、Path `/guide/response-evidence`、Response Header `x-guide-list`、`append` 和 `two`。源站原响应包含 `x-guide-list: one`；端口以本次实录的示例表为准。

1. Apply 后回到 Capture。[视频步骤](#walkthrough-rules-response-evidence-14-capture)

   ![回到 Capture，保留本轮路径筛选](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-14-capture.png)

2. 重新请求 `/guide/response-evidence/append`。[视频步骤](#walkthrough-rules-response-evidence-15-append-request)

   ![新的 append 请求进入 Capture](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-15-append-request.png)

3. 选择这条 `append` 请求。[视频步骤](#walkthrough-rules-response-evidence-16-append-select)

   ![选中同一次 append 请求](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-16-append-select.png)

4. 在 Headers 检查响应：原来的 `one` 保留，另有追加的 `two`；不是把 `one` 替换掉。[视频步骤](#walkthrough-rules-response-evidence-17-append-headers)

   ![响应 Header 同时显示 one 与追加的 two](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-17-append-headers.png)

5. 返回同一条规则。[视频步骤](#walkthrough-rules-response-evidence-18-edit-remove)

   ![返回 Guide response and body](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-18-edit-remove.png)

6. 将操作改为 `remove`，名称仍为 `x-guide-list`，不再填写值。[视频步骤](#walkthrough-rules-response-evidence-19-remove)

   ![实际 Response remove 配置](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-19-remove.png)

7. Apply 新配置。[视频步骤](#walkthrough-rules-response-evidence-20-apply-remove)

   ![响应 remove 已 Apply](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-20-apply-remove.png)

8. 返回 Capture。[视频步骤](#walkthrough-rules-response-evidence-21-capture-remove)

   ![准备在 Capture 检查新请求](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-21-capture-remove.png)

9. 重新请求 `/guide/response-evidence/remove`，不要重复检查上一条已完成的 `append`。[视频步骤](#walkthrough-rules-response-evidence-22-remove-request)

   ![独立的 remove 请求已进入列表](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-22-remove-request.png)

10. 选择 `remove` 并检查响应删除标记。客户端实际响应已没有 `x-guide-list`；Capture 为解释规则效果而保留的删除标记不等于仍发送了这个字段。[视频步骤](#walkthrough-rules-response-evidence-23-remove-select)

    ![实际响应 Header 删除效果](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-23-remove-select.png)

后续可继续[同一条规则的正文版本演示](#walkthrough-rules-response-evidence-24-edit-body)，最后按[停用与 Apply](#walkthrough-rules-response-evidence-52-disable)收尾；不删除最后一条规则来绕过已说明的发布版本限制。

<a id="body-status"></a>
## 替换正文与响应状态

**步骤**

1. 在限定范围的 `Guide body` 中去掉默认 Header，添加 Body。完整的新建与条件填写图见[该动作实拍](#walkthrough-rules-actions-body-02-create)。

   ![移除默认 Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-06-remove.png)

   ![添加 Body 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-07-action.png)

2. 选择 Response 阶段；本节后面另用 `Guide operations` 展示请求方向，不混用两条规则的正文。

   ![Body 的实际 Response 阶段](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-phase.png)

3. 填写完整替换正文 `{"message":"guide-body"}`。

   ![发送前填写的替换正文](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-content.png)

4. 根据接口需要明确配置相关 Header，不假设只改 `Content-Type` 就自动转换正文。

   [编码边界实录](#walkthrough-rules-response-controls-encoding-phase)另用`Guide response controls`演示：先只把Response `content-encoding`改为`gzip`，网络字节仍是`{"message":"guide-origin"}`，不能据此期待客户端解压成功；再添加明确的Body替换`{"message":"guide-encoded-body"}`，才按最终Header生成真实gzip内容。

   ![只改编码Header导致真实解码提示，但字节未变](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-header-only.png)

   ![同时替换Body后捕获到真正的gzip内容并可读](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-body-result.png)

   每个Header/Body输入都有独立步骤；实际客户端字节解压、原本存在的Content-Length更新和Capture正文共同核对，不以文本外观代替线上编码。

5. 启用 `Guide body`，再 Apply。

   ![启用 Body 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-09-enable.png)

   ![Apply Body 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-10-apply.png)

6. 重新请求匹配接口，检查 Final 为 `{"message":"guide-body"}`。

   ![Body 改写的实际 Final](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

7. 状态码示例使用独立的 `Guide status` 规则，添加 Status。

   ![选择独立的 Status 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-07-action.png)

8. 目标状态码填 `418`，不是本章模拟响应使用的 `503`。

   ![Status 的实际值 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-08-value.png)

9. 启用并 Apply 状态规则，再发匹配请求。

   ![启用 Status 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-09-enable.png)

   ![Apply Status 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-10-apply.png)

10. 核对客户端收到 `418`，同时检查头部与正文，不只看规则名称。

    ![实际状态改写结果 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-11-result.png)

11. 若提供 Original/Final 选择，再切换比较可观察的原始内容与最终内容。

    版本对照另用 `Guide response and body` 的请求正文：Original 为 `{"message":"guide-original"}`，Final 为 `{"message":"guide-final"}`。完整的[切换、复制、全屏与保存](capture.md#区分原始内容与规则修改结果)都来自这条独立实录，不把它说成 `Guide body` 的原始响应。

    ![请求正文实际切换到 Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-34-original.png)

    ![同一请求再次切换到 Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-39-final-again.png)

    该新例随后将 Body 改为响应方向，Final 为 `{"message":"guide-response-final"}`，Original 明确不可用；不是空原文。[视频步骤](#walkthrough-rules-response-evidence-50-unavailable)

    ![响应原文不可用与实际 Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-50-unavailable.png)

12. 请求方向使用前一节的 `Guide operations`，Host `127.0.0.1`、Path `/guide/rule-operations`。将动作改为请求 Body，不是修改 `Guide body` 的响应。

    ![实际选择请求方向 Body 动作](../media/v0.1.1-alpha.1/rules-operations/rules-operations-16-body-action.png)

13. 填完整替换 `{"message":"request-edited"}`；客户端原正文为 `{"message":"original"}`。

    ![实际请求正文替换输入](../media/v0.1.1-alpha.1/rules-operations/rules-operations-17-body-value.png)

14. Apply 请求 Body 修改。

    ![实际 Apply 请求正文替换](../media/v0.1.1-alpha.1/rules-operations/rules-operations-18-apply-body.png)

15. 重发匹配请求，核对源站收到完整的 `{"message":"request-edited"}`。结束后按[规则管理](#order)改名、检查名称搜索并停用 Apply，不以删除最后一条收尾。

    ![源站实际收到完整请求正文替换](../media/v0.1.1-alpha.1/rules-operations/rules-operations-19-body-result.png)

**预期结果**：Body 是整体替换，不是对未知原文做局部文本替换；Status 只改变相应响应状态。

**关键说明**：源站响应在头部阶段被替换后，原始正文可能不可用。不要把不可用当成空响应，也不要承诺任何情况下都能查看完整 diff。

<a id="mock-response"></a>
## 模拟响应而不依赖服务端结果

**目标**：为前端测试固定成功、错误或边界响应。

**步骤**

1. 新建 `Guide synthetic`，Host 限制为 `127.0.0.1`，Path 使用本次测试接口，不扩大到全部流量。

   ![命名 Guide synthetic](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-03-name.png)

   ![限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-04-host.png)

   ![本规则的实际测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-05-path.png)

2. 移除默认 Header 动作，再添加 Synthetic response。

   ![移除默认 Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-06-remove.png)

   ![添加 Synthetic response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-07-action.png)

3. 状态码填 `503`。

   ![模拟响应状态 503](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-status.png)

4. 正文填 `{"message":"guide maintenance"}`。需要响应Header时应明确填写；[额外Header实录](#walkthrough-rules-response-controls-synthetic-add-type)另用`Guide response controls`，逐步添加`content-type: application/json`与`x-guide-maintenance: planned`，模拟正文为`{"message":"guide-maintenance"}`，不混用两个例子的正文拼写。

   ![模拟响应正文的实际输入](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-body.png)

5. 启用规则，再 Apply。

   ![启用模拟响应](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-09-enable.png)

   ![Apply 模拟响应](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-10-apply.png)

6. 让经过代理的客户端访问匹配接口，核对 `503` 与 `guide maintenance`，而不是源站正常响应。

   ![实际模拟响应检查点](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-11-result.png)

7. 测试完停用该规则并 Apply，再发请求确认恢复正常路径。

   [Synthetic停用与实际恢复](#walkthrough-rules-response-controls-synthetic-back)有独立操作：先停用并Apply，再用新`/guide/response-controls/synthetic-off`请求取得源站200及`{"message":"guide-origin"}`，不是借用Header规则的停用图。

   ![Synthetic停用后的真实源站响应](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-restored.png)

**预期结果**：该动作直接提供响应，不必等待目标服务的真实响应。

**关键说明**：模拟响应会短路后续正常转发及相应后续规则。不要同时用真实服务器返回值来判断这条模拟是否成功。

<a id="mapping"></a>
## 映射本地文件或另一个服务

**Map Local**

1. 从自己的测试服务捕获可公开文本。本次正文是 `Hello from guide-local.txt`，不用凭据、私钥或个人文件。

   ![实际捕获的可公开文本](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-capture.png)

2. 使用产品 Save body 导出 `guide-local.txt`，记下自己选择的绝对路径。这是文件来源，不是手工预造导入文件。

   ![真实原生保存面板导出 guide-local.txt](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-save.png)

3. 新建 `Guide map-local`，限定 Host `127.0.0.1` 和测试 Path。

   ![命名本地映射规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-03-name.png)

   ![限定 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-04-host.png)

   ![限定本地映射测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-05-path.png)

4. 移除默认 Header，添加 Map Local。

   ![移除默认动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-06-remove.png)

   ![添加 Map Local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-07-action.png)

5. 在 Local path 输入刚导出文件的绝对路径；这里不是原生文件选择按钮。图中目录只属于录制机器，不是要照抄的固定路径。

   ![Local path 指向同一次产品导出的 guide-local.txt](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-08-path.png)

6. 确认文件仍可读，启用并 Apply；缺失/不可读文件的失败分支仍待配图。

   ![启用 Map Local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-09-enable.png)

   ![Apply Map Local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-10-apply.png)

7. 请求匹配地址，核对响应为 `Hello from guide-local.txt` 及实际内容类型。

   ![产品导出文件实际作为响应返回](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-11-result.png)

**预期结果**：匹配请求使用指定本地文件作为响应来源。

**Map Remote**

1. 准备自己有权使用的目标测试服务。

   服务启动属于前提，不是App操作；本例只使用已运行的自有loopback服务，端口由录制环境分配。[跨协议实录](#walkthrough-rules-routing)还展示HTTPS `localhost`改道到HTTP `127.0.0.1`的新端口和Path，以及停用后的原目标结果。

2. 在 `Guide map-remote` 中限定 Host `127.0.0.1`、源 Path `/guide/rule-actions/remote-source`，移除默认 Header 后添加 Map Remote。

   ![实际源 Path 条件](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-05-path.png)

   ![移除默认 Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-06-remove.png)

   ![选择 Map Remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-07-action.png)

3. 本次只把目标 Path 改成 `/guide/rule-actions/remote-target`，协议、主机和端口保持原值。改协议、Host 或端口的分支仍待配图；Host 不接受完整 URL，也不要形成循环。

   ![仅改目标 Path 的真实配置](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-08-path.png)

4. 启用，再 Apply。

   ![启用 Map Remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-09-enable.png)

   ![Apply Map Remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-10-apply.png)

5. 通过 `remote-source` 原入口发请求，核对目标服务收到 `remote-target`。

   ![实际目标路径改变的结果](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-11-result.png)

**预期结果**：客户端仍访问原入口，代理按规则改变实际请求目标。

**关键说明**：本地文件和目标服务必须实际可用；规则配置不会自动创建它们。跨机器分享规则时，本地路径不保证存在；Map Local 与保存正文是不同方向的操作。

<a id="block-delay"></a>
## 阻断、延迟与断点

**步骤**

1. 在 `Guide delay` 中限定本机测试条件，不匹配日常流量。

   ![Delay 规则的实际窄范围条件](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-05-path.png)

2. 移除默认 Header 后添加 Delay，核对请求或响应阶段，等待值填 `500` 毫秒。

   ![移除默认 Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-06-remove.png)

   ![选择 Delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-07-action.png)

   ![实际等待值 500 毫秒](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-08-value.png)

3. 启用并 Apply。

   ![启用 Delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-09-enable.png)

   ![Apply Delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-10-apply.png)

4. 让客户端重新请求，核对真实等待，不把 `500` 当作总耗时必须精确等于的数值。

   ![Delay 的实际请求结果](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-11-result.png)

5. 阻断示例使用独立的 `Guide block` 及其测试 Path。

   ![Block 的实际条件，与 Delay 不是同一个规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-05-path.png)

6. 移除默认Header后选择Block。`reset`与`close`在[独立响应控制实录](#walkthrough-rules-response-controls-block-reset)中分别选择、Apply并发送新请求；每种都有真实阻断结果，不把一次阻断当成两种模式。

   ![移除默认 Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-06-remove.png)

   ![实际 Block 动作配置](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-07-action.png)

7. 启用并 Apply Block。

   ![启用 Block](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-09-enable.png)

   ![Apply Block](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-10-apply.png)

8. 重新请求，核对客户端的真实阻断结果。

   ![实际被阻断的请求](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-11-result.png)

9. 需要人工决定时添加 Breakpoint。下图来自独立的 `Guide request breakpoint`，完整步骤见 [Breakpoints](breakpoints.md#http)，不是把 Block 改名。

   ![Breakpoints 录制中添加人工断点动作](../media/v0.1.1-alpha.1/breakpoints/breakpoints-08-add-breakpoint.png)

10. 结束实验后停用或移除动作，再 Apply。

    [Delay停用后恢复](#walkthrough-rules-response-controls-delay-back)与[Block停用后恢复](#walkthrough-rules-response-controls-block-back)分别使用本轮新请求和源站结果验证；不是断点结束画面的复用。

**预期结果**：客户端实际感受到阻断、等待或人工挂起，而不是只看到一条标记。

**关键说明**：Delay 不是带宽限速；多个延迟按实际规则语义取最大等待值，不机械相加。人工断点没有自动放行超时，详见 [Breakpoints](breakpoints.md)。

<a id="order"></a>
## 组织目录、调整顺序、停用和删除

**步骤**

本节使用 `rules-organization`。先按[该段新建步骤](#walkthrough-rules-organization-first-01-new)准备 `Guide first` 和 `Guide second`：Host 均为 `127.0.0.1`，Path 均为 `/guide/rule-order`，都设置 `x-guide-order`，值分别为 `first` 与 `second`。

**alpha.1 已知限制**：实测删除最后一条规则、使 Rules 树为空后，界面停在 dirty 状态且没有 Apply 入口，不能完成持久化删除。这个失败不是“只是缺截图”，也没有在本轮修复；下面 `rules-operations` 的真实收尾是保留规则、停用并 Apply，不把它写成删除成功。

1. Apply 两条规则。

   ![应用初始顺序的两条规则](../media/v0.1.1-alpha.1/rules-organization/rules-organization-02-apply.png)

2. 发出匹配请求，检查后写的 `second` 覆盖前值。

   ![调整前实际结果为 second](../media/v0.1.1-alpha.1/rules-organization/rules-organization-03-before.png)

3. 把 `Guide second` 拖到 `Guide first` 前面，检查可见树顺序。

   ![拖动后的实际顺序](../media/v0.1.1-alpha.1/rules-organization/rules-organization-04-reorder.png)

4. 点击 Apply 保存新顺序。

   ![Apply 新的规则顺序](../media/v0.1.1-alpha.1/rules-organization/rules-organization-05-apply-order.png)

5. 重新发请求，检查最后写入的值变为 `first`。

   ![调整顺序后的实际结果 first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-06-after.png)

6. 新建目录 `Guide rules`。

   ![创建 Guide rules 目录](../media/v0.1.1-alpha.1/rules-organization/rules-organization-07-folder.png)

7. 将 `Guide second` 移入目录。

   ![先移动 Guide second](../media/v0.1.1-alpha.1/rules-organization/rules-organization-08-move-second.png)

8. 再将`Guide first`移入目录；目录最多三级。[独立层级实录](#walkthrough-rules-tree-02-root-folder)从`Guide hierarchy > Guide API > Guide final`逐级创建，实际查看第三级菜单中禁用的第四级入口。

   ![再移动 Guide first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-09-move-first.png)

9. Apply 保存目录结构。

   ![保存实际目录层级](../media/v0.1.1-alpha.1/rules-organization/rules-organization-10-apply-folder.png)

10. 名称管理改用独立的 `rules-operations`：将前面编辑的 `Guide operations` 重命名为 `Guide operations done`。这是规则名称，不是上述 `Guide rules` 目录改名。

    ![实际重命名为 Guide operations done](../media/v0.1.1-alpha.1/rules-operations/rules-operations-20-rename.png)

11. 在名称搜索框定位这条规则，不按请求 URL 搜索。

    ![按名称查找实际演示规则](../media/v0.1.1-alpha.1/rules-operations/rules-operations-21-search.png)

    目录本身的[重命名和搜索](#walkthrough-rules-tree-19-rename-folder)使用另一个明确示例：`Guide API`改为`Guide routes`，名称搜索后展开/折叠`Guide hierarchy`，已有子规则保持原身份。

    ![真实按目录名称Guide routes搜索](../media/v0.1.1-alpha.1/rules-tree/rules-tree-22-folder-search.png)

12. 演示结束保留但停用 `Guide operations done`。

    ![实际保留并停用演示规则](../media/v0.1.1-alpha.1/rules-operations/rules-operations-22-disable.png)

13. Apply 停用状态。

    ![实际保存停用，而不是删除](../media/v0.1.1-alpha.1/rules-operations/rules-operations-23-apply-disabled.png)

14. 需要删除节点时，先区分上述空树限制，不把删除最后一条后的空界面当作已保存。

    **blocked（产品限制）**：alpha.1空树dirty且无Apply，最后一条规则的持久化删除实测失败，本教程未修复或绕过它。[非最后一条删除实录](#walkthrough-rules-tree-43-delete-nested-menu)用两条实际比较后写覆盖的规则，只删除`Guide nested priority`和已空目录，Apply后以新请求证明`Guide root priority`仍生效；最后一条仅保留停用，不声称空树删除成功。

    ![非最后一条规则删除后的实际已保存状态](../media/v0.1.1-alpha.1/rules-tree/rules-tree-45-apply-deletion.png)

    ![空目录删除后保留真正使用的根级规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-48-apply-folders.png)

**预期结果**：可见树的叶子顺序决定规则的执行顺序；目录负责组织，不是匹配组。

**关键说明**

- 多条规则可以顺序作用于同一请求，不是命中第一条就全部结束。
- 规则行的动作标签只是摘要；将鼠标停在动作摘要上可以查看完整有序说明，不以行内标签数量判断实际动作数量。
- 后写可能覆盖先写；模拟响应或 Block 会短路后续处理。
- Breakpoint 是普通修改完成后的人工调试点，看到的快照可能已包含规则修改。
- 修改顺序、停用规则与处理已经挂起的请求是不同操作，不把它们混为一谈。

<a id="effects"></a>
## 验证命中、查看效果并处理保存冲突

**步骤**

1. Apply 后，从外部客户端发新请求，查看规则行命中。这里复用 `Guide test header` 的实际命中。

   ![实际匹配请求与规则命中](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

2. 需要时使用节点菜单进入相关 Capture 请求。

   [节点菜单跳Capture实录](#walkthrough-rules-tree-27-rule-menu)使用`Guide nested priority`的真实命中，跳转后Rule分组已选中该规则，并可查看实际请求。

   ![从规则菜单进入对应Capture请求](../media/v0.1.1-alpha.1/rules-tree/rules-tree-28-show-requests.png)

3. 检查真实Header/Body结果。下图分别来自Header示例与独立的`Guide body`，不是同一次请求。Header来源标记为行内可点击控件，[点击返回同一规则](#walkthrough-rules-tree-30-header-effect)已有真实画面；当前没有单独的标记展开面板。

   ![Header 示例的实际请求头](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

   ![Body 示例的实际 Final](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

4. 若 Apply 提示版本冲突，先保留需要的编辑信息，再显式使用 Reload 获取最新规则并重新编辑；Reload 会放弃当前草稿。

   [冲突实录](#walkthrough-rules-conflict)保留本地草稿，让同一App的MCP调用方经审批提交另一版本，再显式Reload。不模拟冲突返回值，也不自动覆盖远端更新。

   ![第二写入者提交后本地草稿仍保留](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-15-draft-retained.png)

   ![显式Reload读取最新规则](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-17-reload.png)

5. 再次 Apply 并核对，不连续重试旧草稿覆盖别人或 Agent/MCP 的更新。

   ![在最新版本上重新编辑并Apply](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-20-apply-merged.png)

   ![新请求核对合并后的实际Header](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-21-merged-request.png)

**预期结果**：确认实际生效的结果，而不是只根据规则名称或命中数推断具体字节。

**关键说明**：Recording 暂停时规则仍可能生效，但 Capture 不产生新的检查记录。状态栏的保存版本与编辑草稿不同，冲突也不是规则一定无效。

<a id="import-export"></a>
## 导入和导出规则

1. 检查规则中的地址、正文和本地路径是否适合分享。

   分享前主动检查地址、正文和本地路径；这是一项安全要求，不是自动脱敏承诺。下面文件操作来自`Guide rules`目录中的公开排序示例，不包括其他规则，也没有把文件发给第三方。

2. 使用 Export，在真实系统保存窗口保存 `guide-rules.json`。

   ![Rules Export 的实际原生保存面板](../media/v0.1.1-alpha.1/rules-organization/rules-organization-11-export.png)

3. 核对实际导出的规则树。

   ![核对产品导出的 guide-rules.json](../media/v0.1.1-alpha.1/rules-organization/rules-organization-12-exported.png)

4. 使用 Import，在真实打开窗口选择同一个文件。

   ![选择刚导出的规则文件](../media/v0.1.1-alpha.1/rules-organization/rules-organization-13-import-file.png)

5. 阅读预览中的规则、目录、已启用条数和跳过项，注意启用规则可能立即影响流量。

   ![包含已启用规则警告的实际预览](../media/v0.1.1-alpha.1/rules-organization/rules-organization-14-preview.png)

6. 先取消，检查原树保持不变。

   ![实际取消预览后的原树](../media/v0.1.1-alpha.1/rules-organization/rules-organization-15-cancel.png)

7. 重新 Import，选择同一个 `guide-rules.json`。

   ![重新选择同一个文件](../media/v0.1.1-alpha.1/rules-organization/rules-organization-16-import-again.png)

8. 接受影响后确认，检查根目录末尾追加的树及启用状态，不期待覆盖原项。

   ![确认后的真实追加结果](../media/v0.1.1-alpha.1/rules-organization/rules-organization-17-confirm.png)

**预期结果**：导入以新身份追加，不覆盖、合并或按名称去重。确认导入会保存追加结果，文件中已启用的规则可立即参与匹配。

**关键说明**：UI 导出当前编辑树；Agent/MCP 导出已保存树，二者在尚未 Apply 时可能不同。重复导入会继续追加，且可能重复命中。配置级 JSON 错误整体失败，节点错误按预览逐项跳过。

<a id="message-editing"></a>
## Header 与 Body 修改如何配合

这条约定也适用于 HTTP Breakpoints 和 Composer 的相关发送路径：

- 只改 Header：原正文不因为 `Content-Type` 或 `Content-Encoding` 改变就自动转码、压缩或解压。
- 明确替换正文：按最终 Header 和所选正文模式构造新内容；没有编辑过且原本存在的 `Content-Length` 才会随新内容维护。
- 显式设置或删除 `Content-Length`：保留用户意图，不用偷偷修改正文来迎合填写的长度。
- `Transfer-Encoding`、压缩、字符集和协议限制可能产生真实发送错误；以客户端与服务端结果为准，不把编辑器接受输入当成协议正确。
- ETag、签名、Digest 等不会因为改了正文就自动重新生成；测试时需要自行处理一致性。

推荐先用普通 Header 和小文本验证，再逐项增加编码或协议变化。不要一次改变多个条件后只根据“请求失败”猜原因。

<!-- recorded-walkthrough:rules-actions:start -->
<a id="walkthrough-rules-actions"></a>
## 逐步骤实操：改写、模拟、延迟、阻断与映射

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>pathPrefix</code> | <code>/guide/rule-actions</code> |
| <code>queryName</code> | <code>guide</code> |
| <code>queryBefore</code> | <code>original</code> |
| <code>queryAfter</code> | <code>rewritten</code> |
| <code>replacementBody</code> | <code>{&quot;message&quot;:&quot;guide-body&quot;}</code> |
| <code>status</code> | <code>418</code> |
| <code>mockStatus</code> | <code>503</code> |
| <code>mockBody</code> | <code>{&quot;message&quot;:&quot;guide maintenance&quot;}</code> |
| <code>delayMs</code> | <code>500</code> |
| <code>remoteSource</code> | <code>/guide/rule-actions/remote-source</code> |
| <code>remoteTarget</code> | <code>/guide/rule-actions/remote-target</code> |
| <code>localFile</code> | <code>/tmp/interceptor-guidebook-map-ctzevx/guide-local.txt</code> |
| <code>localBody</code> | <code>Hello from guide-local.txt</code> |

<a id="walkthrough-rules-actions-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4" poster="../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-actions/rules-actions.vtt" default>
</video>

<a id="walkthrough-rules-actions-query-01-rules"></a>
### 01 · 回到 Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=0.414) · [返回本节视频](#walkthrough-rules-actions-video)

![01 · 回到 Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-01-rules.png)

<a id="walkthrough-rules-actions-query-02-create"></a>
### 02 · 新建 query 规则

[视频 00:03](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=3.325) · [返回本节视频](#walkthrough-rules-actions-video)

![02 · 新建 query 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-02-create.png)

<a id="walkthrough-rules-actions-query-03-name"></a>
### 03 · 命名 Guide query

[视频 00:06](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=6.275) · [返回本节视频](#walkthrough-rules-actions-video)

![03 · 命名 Guide query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-03-name.png)

<a id="walkthrough-rules-actions-query-04-host"></a>
### 04 · 限制本机 Host

[视频 00:09](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=9.123) · [返回本节视频](#walkthrough-rules-actions-video)

![04 · 限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-04-host.png)

<a id="walkthrough-rules-actions-query-05-path"></a>
### 05 · 填写本动作的测试 Path

[视频 00:11](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=11.975) · [返回本节视频](#walkthrough-rules-actions-video)

![05 · 填写本动作的测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-05-path.png)

<a id="walkthrough-rules-actions-query-06-remove"></a>
### 06 · 移除默认 Header 动作

[视频 00:15](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=15.323) · [返回本节视频](#walkthrough-rules-actions-video)

![06 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-06-remove.png)

<a id="walkthrough-rules-actions-query-07-action"></a>
### 07 · 选择 query 动作

[视频 00:18](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=18.172) · [返回本节视频](#walkthrough-rules-actions-video)

![07 · 选择 query 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-07-action.png)

<a id="walkthrough-rules-actions-query-08-values"></a>
### 08 · 设置 guide=rewritten

[视频 00:21](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=21.423) · [返回本节视频](#walkthrough-rules-actions-video)

![08 · 设置 guide=rewritten](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-08-values.png)

<a id="walkthrough-rules-actions-query-09-enable"></a>
### 09 · 启用当前规则

[视频 00:24](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=24.324) · [返回本节视频](#walkthrough-rules-actions-video)

![09 · 启用当前规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-09-enable.png)

<a id="walkthrough-rules-actions-query-10-apply"></a>
### 10 · Apply 到真实代理

[视频 00:27](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=27.174) · [返回本节视频](#walkthrough-rules-actions-video)

![10 · Apply 到真实代理](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-10-apply.png)

<a id="walkthrough-rules-actions-query-11-result"></a>
### 11 · 核对最终 Query

[视频 00:30](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=30.023) · [返回本节视频](#walkthrough-rules-actions-video)

![11 · 核对最终 Query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-11-result.png)

<a id="walkthrough-rules-actions-body-01-rules"></a>
### 12 · 回到 Rules

[视频 00:33](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=33.174) · [返回本节视频](#walkthrough-rules-actions-video)

![12 · 回到 Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-01-rules.png)

<a id="walkthrough-rules-actions-body-02-create"></a>
### 13 · 新建 body 规则

[视频 00:36](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=36.025) · [返回本节视频](#walkthrough-rules-actions-video)

![13 · 新建 body 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-02-create.png)

<a id="walkthrough-rules-actions-body-03-name"></a>
### 14 · 命名 Guide body

[视频 00:38](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=38.877) · [返回本节视频](#walkthrough-rules-actions-video)

![14 · 命名 Guide body](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-03-name.png)

<a id="walkthrough-rules-actions-body-04-host"></a>
### 15 · 限制本机 Host

[视频 00:41](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=41.724) · [返回本节视频](#walkthrough-rules-actions-video)

![15 · 限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-04-host.png)

<a id="walkthrough-rules-actions-body-05-path"></a>
### 16 · 填写本动作的测试 Path

[视频 00:44](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=44.574) · [返回本节视频](#walkthrough-rules-actions-video)

![16 · 填写本动作的测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-05-path.png)

<a id="walkthrough-rules-actions-body-06-remove"></a>
### 17 · 移除默认 Header 动作

[视频 00:47](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=47.822) · [返回本节视频](#walkthrough-rules-actions-video)

![17 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-06-remove.png)

<a id="walkthrough-rules-actions-body-07-action"></a>
### 18 · 选择 body 动作

[视频 00:50](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=50.672) · [返回本节视频](#walkthrough-rules-actions-video)

![18 · 选择 body 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-07-action.png)

<a id="walkthrough-rules-actions-body-08-phase"></a>
### 19 · 选择 Response 阶段

[视频 00:53](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=53.923) · [返回本节视频](#walkthrough-rules-actions-video)

![19 · 选择 Response 阶段](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-phase.png)

<a id="walkthrough-rules-actions-body-08-content"></a>
### 20 · 填写 guide-body 替换

[视频 00:57](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=57.122) · [返回本节视频](#walkthrough-rules-actions-video)

![20 · 填写 guide-body 替换](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-content.png)

<a id="walkthrough-rules-actions-body-09-enable"></a>
### 21 · 启用当前规则

[视频 00:59](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=59.971) · [返回本节视频](#walkthrough-rules-actions-video)

![21 · 启用当前规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-09-enable.png)

<a id="walkthrough-rules-actions-body-10-apply"></a>
### 22 · Apply 到真实代理

[视频 01:02](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=62.820) · [返回本节视频](#walkthrough-rules-actions-video)

![22 · Apply 到真实代理](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-10-apply.png)

<a id="walkthrough-rules-actions-body-11-result"></a>
### 23 · 读取 Final 正文

[视频 01:05](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=65.682) · [返回本节视频](#walkthrough-rules-actions-video)

![23 · 读取 Final 正文](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

<a id="walkthrough-rules-actions-status-01-rules"></a>
### 24 · 回到 Rules

[视频 01:09](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=69.170) · [返回本节视频](#walkthrough-rules-actions-video)

![24 · 回到 Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-01-rules.png)

<a id="walkthrough-rules-actions-status-02-create"></a>
### 25 · 新建 status 规则

[视频 01:12](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=72.066) · [返回本节视频](#walkthrough-rules-actions-video)

![25 · 新建 status 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-02-create.png)

<a id="walkthrough-rules-actions-status-03-name"></a>
### 26 · 命名 Guide status

[视频 01:14](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=74.964) · [返回本节视频](#walkthrough-rules-actions-video)

![26 · 命名 Guide status](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-03-name.png)

<a id="walkthrough-rules-actions-status-04-host"></a>
### 27 · 限制本机 Host

[视频 01:17](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=77.777) · [返回本节视频](#walkthrough-rules-actions-video)

![27 · 限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-04-host.png)

<a id="walkthrough-rules-actions-status-05-path"></a>
### 28 · 填写本动作的测试 Path

[视频 01:20](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=80.609) · [返回本节视频](#walkthrough-rules-actions-video)

![28 · 填写本动作的测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-05-path.png)

<a id="walkthrough-rules-actions-status-06-remove"></a>
### 29 · 移除默认 Header 动作

[视频 01:23](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=83.855) · [返回本节视频](#walkthrough-rules-actions-video)

![29 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-06-remove.png)

<a id="walkthrough-rules-actions-status-07-action"></a>
### 30 · 选择 status 动作

[视频 01:26](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=86.684) · [返回本节视频](#walkthrough-rules-actions-video)

![30 · 选择 status 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-07-action.png)

<a id="walkthrough-rules-actions-status-08-value"></a>
### 31 · 设置状态 418

[视频 01:29](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=89.902) · [返回本节视频](#walkthrough-rules-actions-video)

![31 · 设置状态 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-08-value.png)

<a id="walkthrough-rules-actions-status-09-enable"></a>
### 32 · 启用当前规则

[视频 01:32](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=92.720) · [返回本节视频](#walkthrough-rules-actions-video)

![32 · 启用当前规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-09-enable.png)

<a id="walkthrough-rules-actions-status-10-apply"></a>
### 33 · Apply 到真实代理

[视频 01:35](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=95.567) · [返回本节视频](#walkthrough-rules-actions-video)

![33 · Apply 到真实代理](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-10-apply.png)

<a id="walkthrough-rules-actions-status-11-result"></a>
### 34 · 核对客户端收到 418

[视频 01:38](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=98.410) · [返回本节视频](#walkthrough-rules-actions-video)

![34 · 核对客户端收到 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-11-result.png)

<a id="walkthrough-rules-actions-synthetic-01-rules"></a>
### 35 · 回到 Rules

[视频 01:41](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=101.548) · [返回本节视频](#walkthrough-rules-actions-video)

![35 · 回到 Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-01-rules.png)

<a id="walkthrough-rules-actions-synthetic-02-create"></a>
### 36 · 新建 synthetic 规则

[视频 01:44](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=104.397) · [返回本节视频](#walkthrough-rules-actions-video)

![36 · 新建 synthetic 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-02-create.png)

<a id="walkthrough-rules-actions-synthetic-03-name"></a>
### 37 · 命名 Guide synthetic

[视频 01:47](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=107.247) · [返回本节视频](#walkthrough-rules-actions-video)

![37 · 命名 Guide synthetic](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-03-name.png)

<a id="walkthrough-rules-actions-synthetic-04-host"></a>
### 38 · 限制本机 Host

[视频 01:50](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=110.054) · [返回本节视频](#walkthrough-rules-actions-video)

![38 · 限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-04-host.png)

<a id="walkthrough-rules-actions-synthetic-05-path"></a>
### 39 · 填写本动作的测试 Path

[视频 01:52](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=112.847) · [返回本节视频](#walkthrough-rules-actions-video)

![39 · 填写本动作的测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-05-path.png)

<a id="walkthrough-rules-actions-synthetic-06-remove"></a>
### 40 · 移除默认 Header 动作

[视频 01:56](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=116.065) · [返回本节视频](#walkthrough-rules-actions-video)

![40 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-06-remove.png)

<a id="walkthrough-rules-actions-synthetic-07-action"></a>
### 41 · 选择 synthetic 动作

[视频 01:58](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=118.869) · [返回本节视频](#walkthrough-rules-actions-video)

![41 · 选择 synthetic 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-07-action.png)

<a id="walkthrough-rules-actions-synthetic-08-status"></a>
### 42 · 设置模拟状态 503

[视频 02:02](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=122.009) · [返回本节视频](#walkthrough-rules-actions-video)

![42 · 设置模拟状态 503](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-status.png)

<a id="walkthrough-rules-actions-synthetic-08-body"></a>
### 43 · 填写模拟响应

[视频 02:04](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=124.805) · [返回本节视频](#walkthrough-rules-actions-video)

![43 · 填写模拟响应](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-body.png)

<a id="walkthrough-rules-actions-synthetic-09-enable"></a>
### 44 · 启用当前规则

[视频 02:07](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=127.619) · [返回本节视频](#walkthrough-rules-actions-video)

![44 · 启用当前规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-09-enable.png)

<a id="walkthrough-rules-actions-synthetic-10-apply"></a>
### 45 · Apply 到真实代理

[视频 02:10](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=130.494) · [返回本节视频](#walkthrough-rules-actions-video)

![45 · Apply 到真实代理](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-10-apply.png)

<a id="walkthrough-rules-actions-synthetic-11-result"></a>
### 46 · 核对模拟响应绕过源站

[视频 02:13](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=133.339) · [返回本节视频](#walkthrough-rules-actions-video)

![46 · 核对模拟响应绕过源站](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-11-result.png)

<a id="walkthrough-rules-actions-delay-01-rules"></a>
### 47 · 回到 Rules

[视频 02:16](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=136.458) · [返回本节视频](#walkthrough-rules-actions-video)

![47 · 回到 Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-01-rules.png)

<a id="walkthrough-rules-actions-delay-02-create"></a>
### 48 · 新建 delay 规则

[视频 02:19](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=139.354) · [返回本节视频](#walkthrough-rules-actions-video)

![48 · 新建 delay 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-02-create.png)

<a id="walkthrough-rules-actions-delay-03-name"></a>
### 49 · 命名 Guide delay

[视频 02:22](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=142.196) · [返回本节视频](#walkthrough-rules-actions-video)

![49 · 命名 Guide delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-03-name.png)

<a id="walkthrough-rules-actions-delay-04-host"></a>
### 50 · 限制本机 Host

[视频 02:24](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=144.999) · [返回本节视频](#walkthrough-rules-actions-video)

![50 · 限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-04-host.png)

<a id="walkthrough-rules-actions-delay-05-path"></a>
### 51 · 填写本动作的测试 Path

[视频 02:27](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=147.828) · [返回本节视频](#walkthrough-rules-actions-video)

![51 · 填写本动作的测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-05-path.png)

<a id="walkthrough-rules-actions-delay-06-remove"></a>
### 52 · 移除默认 Header 动作

[视频 02:31](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=151.073) · [返回本节视频](#walkthrough-rules-actions-video)

![52 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-06-remove.png)

<a id="walkthrough-rules-actions-delay-07-action"></a>
### 53 · 选择 delay 动作

[视频 02:33](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=153.904) · [返回本节视频](#walkthrough-rules-actions-video)

![53 · 选择 delay 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-07-action.png)

<a id="walkthrough-rules-actions-delay-08-value"></a>
### 54 · 设置 500 毫秒

[视频 02:37](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=157.144) · [返回本节视频](#walkthrough-rules-actions-video)

![54 · 设置 500 毫秒](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-08-value.png)

<a id="walkthrough-rules-actions-delay-09-enable"></a>
### 55 · 启用当前规则

[视频 02:39](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=159.967) · [返回本节视频](#walkthrough-rules-actions-video)

![55 · 启用当前规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-09-enable.png)

<a id="walkthrough-rules-actions-delay-10-apply"></a>
### 56 · Apply 到真实代理

[视频 02:42](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=162.783) · [返回本节视频](#walkthrough-rules-actions-video)

![56 · Apply 到真实代理](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-10-apply.png)

<a id="walkthrough-rules-actions-delay-11-result"></a>
### 57 · 核对实际等待

[视频 02:45](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=165.648) · [返回本节视频](#walkthrough-rules-actions-video)

![57 · 核对实际等待](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-11-result.png)

<a id="walkthrough-rules-actions-block-01-rules"></a>
### 58 · 回到 Rules

[视频 02:49](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=169.303) · [返回本节视频](#walkthrough-rules-actions-video)

![58 · 回到 Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-01-rules.png)

<a id="walkthrough-rules-actions-block-02-create"></a>
### 59 · 新建 block 规则

[视频 02:52](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=172.206) · [返回本节视频](#walkthrough-rules-actions-video)

![59 · 新建 block 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-02-create.png)

<a id="walkthrough-rules-actions-block-03-name"></a>
### 60 · 命名 Guide block

[视频 02:55](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=175.048) · [返回本节视频](#walkthrough-rules-actions-video)

![60 · 命名 Guide block](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-03-name.png)

<a id="walkthrough-rules-actions-block-04-host"></a>
### 61 · 限制本机 Host

[视频 02:57](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=177.865) · [返回本节视频](#walkthrough-rules-actions-video)

![61 · 限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-04-host.png)

<a id="walkthrough-rules-actions-block-05-path"></a>
### 62 · 填写本动作的测试 Path

[视频 03:00](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=180.686) · [返回本节视频](#walkthrough-rules-actions-video)

![62 · 填写本动作的测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-05-path.png)

<a id="walkthrough-rules-actions-block-06-remove"></a>
### 63 · 移除默认 Header 动作

[视频 03:03](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=183.897) · [返回本节视频](#walkthrough-rules-actions-video)

![63 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-06-remove.png)

<a id="walkthrough-rules-actions-block-07-action"></a>
### 64 · 选择 block 动作

[视频 03:06](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=186.730) · [返回本节视频](#walkthrough-rules-actions-video)

![64 · 选择 block 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-07-action.png)

<a id="walkthrough-rules-actions-block-09-enable"></a>
### 65 · 启用当前规则

[视频 03:09](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=189.855) · [返回本节视频](#walkthrough-rules-actions-video)

![65 · 启用当前规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-09-enable.png)

<a id="walkthrough-rules-actions-block-10-apply"></a>
### 66 · Apply 到真实代理

[视频 03:12](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=192.683) · [返回本节视频](#walkthrough-rules-actions-video)

![66 · Apply 到真实代理](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-10-apply.png)

<a id="walkthrough-rules-actions-block-11-result"></a>
### 67 · 核对请求被阻断

[视频 03:15](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=195.541) · [返回本节视频](#walkthrough-rules-actions-video)

![67 · 核对请求被阻断](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-11-result.png)

<a id="walkthrough-rules-actions-map-remote-01-rules"></a>
### 68 · 回到 Rules

[视频 03:18](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=198.614) · [返回本节视频](#walkthrough-rules-actions-video)

![68 · 回到 Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-01-rules.png)

<a id="walkthrough-rules-actions-map-remote-02-create"></a>
### 69 · 新建 map-remote 规则

[视频 03:21](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=201.468) · [返回本节视频](#walkthrough-rules-actions-video)

![69 · 新建 map-remote 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-02-create.png)

<a id="walkthrough-rules-actions-map-remote-03-name"></a>
### 70 · 命名 Guide map-remote

[视频 03:24](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=204.317) · [返回本节视频](#walkthrough-rules-actions-video)

![70 · 命名 Guide map-remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-03-name.png)

<a id="walkthrough-rules-actions-map-remote-04-host"></a>
### 71 · 限制本机 Host

[视频 03:27](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=207.118) · [返回本节视频](#walkthrough-rules-actions-video)

![71 · 限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-04-host.png)

<a id="walkthrough-rules-actions-map-remote-05-path"></a>
### 72 · 填写本动作的测试 Path

[视频 03:29](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=209.927) · [返回本节视频](#walkthrough-rules-actions-video)

![72 · 填写本动作的测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-05-path.png)

<a id="walkthrough-rules-actions-map-remote-06-remove"></a>
### 73 · 移除默认 Header 动作

[视频 03:33](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=213.176) · [返回本节视频](#walkthrough-rules-actions-video)

![73 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-06-remove.png)

<a id="walkthrough-rules-actions-map-remote-07-action"></a>
### 74 · 选择 map-remote 动作

[视频 03:36](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=216.008) · [返回本节视频](#walkthrough-rules-actions-video)

![74 · 选择 map-remote 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-07-action.png)

<a id="walkthrough-rules-actions-map-remote-08-path"></a>
### 75 · 只更改目标 Path

[视频 03:39](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=219.256) · [返回本节视频](#walkthrough-rules-actions-video)

![75 · 只更改目标 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-08-path.png)

<a id="walkthrough-rules-actions-map-remote-09-enable"></a>
### 76 · 启用当前规则

[视频 03:42](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=222.071) · [返回本节视频](#walkthrough-rules-actions-video)

![76 · 启用当前规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-09-enable.png)

<a id="walkthrough-rules-actions-map-remote-10-apply"></a>
### 77 · Apply 到真实代理

[视频 03:44](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=224.871) · [返回本节视频](#walkthrough-rules-actions-video)

![77 · Apply 到真实代理](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-10-apply.png)

<a id="walkthrough-rules-actions-map-remote-11-result"></a>
### 78 · 核对目标路径改变

[视频 03:47](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=227.737) · [返回本节视频](#walkthrough-rules-actions-video)

![78 · 核对目标路径改变](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-11-result.png)

<a id="walkthrough-rules-actions-map-local-00-capture"></a>
### 79 · 捕获可公开文本

[视频 03:50](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=230.797) · [返回本节视频](#walkthrough-rules-actions-video)

![79 · 捕获可公开文本](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-capture.png)

<a id="walkthrough-rules-actions-map-local-00-save"></a>
### 80 · 导出为 guide-local.txt

[视频 04:04](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=244.277) · [返回本节视频](#walkthrough-rules-actions-video)

![80 · 导出为 guide-local.txt](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-save.png)

<a id="walkthrough-rules-actions-map-local-01-rules"></a>
### 81 · 回到 Rules

[视频 04:08](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=248.392) · [返回本节视频](#walkthrough-rules-actions-video)

![81 · 回到 Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-01-rules.png)

<a id="walkthrough-rules-actions-map-local-02-create"></a>
### 82 · 新建 map-local 规则

[视频 04:11](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=251.251) · [返回本节视频](#walkthrough-rules-actions-video)

![82 · 新建 map-local 规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-02-create.png)

<a id="walkthrough-rules-actions-map-local-03-name"></a>
### 83 · 命名 Guide map-local

[视频 04:14](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=254.094) · [返回本节视频](#walkthrough-rules-actions-video)

![83 · 命名 Guide map-local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-03-name.png)

<a id="walkthrough-rules-actions-map-local-04-host"></a>
### 84 · 限制本机 Host

[视频 04:16](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=256.898) · [返回本节视频](#walkthrough-rules-actions-video)

![84 · 限制本机 Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-04-host.png)

<a id="walkthrough-rules-actions-map-local-05-path"></a>
### 85 · 填写本动作的测试 Path

[视频 04:19](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=259.712) · [返回本节视频](#walkthrough-rules-actions-video)

![85 · 填写本动作的测试 Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-05-path.png)

<a id="walkthrough-rules-actions-map-local-06-remove"></a>
### 86 · 移除默认 Header 动作

[视频 04:22](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=262.958) · [返回本节视频](#walkthrough-rules-actions-video)

![86 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-06-remove.png)

<a id="walkthrough-rules-actions-map-local-07-action"></a>
### 87 · 选择 map-local 动作

[视频 04:25](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=265.791) · [返回本节视频](#walkthrough-rules-actions-video)

![87 · 选择 map-local 动作](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-07-action.png)

<a id="walkthrough-rules-actions-map-local-08-path"></a>
### 88 · 填写刚导出的文件路径

[视频 04:29](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=269.062) · [返回本节视频](#walkthrough-rules-actions-video)

![88 · 填写刚导出的文件路径](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-08-path.png)

<a id="walkthrough-rules-actions-map-local-09-enable"></a>
### 89 · 启用当前规则

[视频 04:31](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=271.891) · [返回本节视频](#walkthrough-rules-actions-video)

![89 · 启用当前规则](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-09-enable.png)

<a id="walkthrough-rules-actions-map-local-10-apply"></a>
### 90 · Apply 到真实代理

[视频 04:34](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=274.706) · [返回本节视频](#walkthrough-rules-actions-video)

![90 · Apply 到真实代理](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-10-apply.png)

<a id="walkthrough-rules-actions-map-local-11-result"></a>
### 91 · 核对本地文件响应

[视频 04:37](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=277.540) · [返回本节视频](#walkthrough-rules-actions-video)

![91 · 核对本地文件响应](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-11-result.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-actions:end -->

<!-- recorded-walkthrough:rules-matchers:start -->
<a id="walkthrough-rules-matchers"></a>
## 逐步骤实操：八类条件与 AND 匹配

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>ruleName</code> | <code>Guide matchers</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>method</code> | <code>GET</code> |
| <code>path</code> | <code>/guide/matchers/order</code> |
| <code>url</code> | <code>http://127.0.0.1:59147/guide/matchers/order?guide=matcher-demo</code> |
| <code>query</code> | <code>guide=matcher-demo</code> |
| <code>requestHeader</code> | <code>x-guide-match: yes</code> |
| <code>statusRange</code> | <code>200–200</code> |
| <code>responseMime</code> | <code>application/json</code> |
| <code>effectHeader</code> | <code>x-interceptor-guide: matcher-demo</code> |

<a id="walkthrough-rules-matchers-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4" poster="../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.vtt" default>
</video>

<a id="walkthrough-rules-matchers-01-rules"></a>
### 01 · 打开 Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=0.402) · [返回本节视频](#walkthrough-rules-matchers-video)

![01 · 打开 Rules](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-01-rules.png)

<a id="walkthrough-rules-matchers-02-create"></a>
### 02 · 新建 Guide matchers

[视频 00:03](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=3.304) · [返回本节视频](#walkthrough-rules-matchers-video)

![02 · 新建 Guide matchers](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-02-create.png)

<a id="walkthrough-rules-matchers-03-host"></a>
### 03 · Host 为 127.0.0.1

[视频 00:06](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=6.306) · [返回本节视频](#walkthrough-rules-matchers-video)

![03 · Host 为 127.0.0.1](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-03-host.png)

<a id="walkthrough-rules-matchers-04-method-add"></a>
### 04 · 添加 Method

[视频 00:09](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=9.101) · [返回本节视频](#walkthrough-rules-matchers-video)

![04 · 添加 Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-04-method-add.png)

<a id="walkthrough-rules-matchers-05-method"></a>
### 05 · Method 为 GET

[视频 00:12](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=12.303) · [返回本节视频](#walkthrough-rules-matchers-video)

![05 · Method 为 GET](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-05-method.png)

<a id="walkthrough-rules-matchers-06-path-add"></a>
### 06 · 添加 Path

[视频 00:15](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=15.109) · [返回本节视频](#walkthrough-rules-matchers-video)

![06 · 添加 Path](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-06-path-add.png)

<a id="walkthrough-rules-matchers-07-path"></a>
### 07 · 填写接口 Path

[视频 00:18](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=18.352) · [返回本节视频](#walkthrough-rules-matchers-video)

![07 · 填写接口 Path](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-07-path.png)

<a id="walkthrough-rules-matchers-08-url-add"></a>
### 08 · 添加 URL

[视频 00:21](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=21.203) · [返回本节视频](#walkthrough-rules-matchers-video)

![08 · 添加 URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-08-url-add.png)

<a id="walkthrough-rules-matchers-09-url"></a>
### 09 · 填写完整演示 URL

[视频 00:24](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=24.453) · [返回本节视频](#walkthrough-rules-matchers-video)

![09 · 填写完整演示 URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-09-url.png)

<a id="walkthrough-rules-matchers-10-query-add"></a>
### 10 · 添加 Query

[视频 00:27](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=27.304) · [返回本节视频](#walkthrough-rules-matchers-video)

![10 · 添加 Query](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-10-query-add.png)

<a id="walkthrough-rules-matchers-11-query"></a>
### 11 · Query 为 guide=matcher-demo

[视频 00:30](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=30.503) · [返回本节视频](#walkthrough-rules-matchers-video)

![11 · Query 为 guide=matcher-demo](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-11-query.png)

<a id="walkthrough-rules-matchers-12-header-add"></a>
### 12 · 添加 Header

[视频 00:33](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=33.403) · [返回本节视频](#walkthrough-rules-matchers-video)

![12 · 添加 Header](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-12-header-add.png)

<a id="walkthrough-rules-matchers-13-header"></a>
### 13 · Header 为 x-guide-match=yes

[视频 00:36](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=36.602) · [返回本节视频](#walkthrough-rules-matchers-video)

![13 · Header 为 x-guide-match=yes](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-13-header.png)

<a id="walkthrough-rules-matchers-14-status-add"></a>
### 14 · 添加 Status

[视频 00:39](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=39.604) · [返回本节视频](#walkthrough-rules-matchers-video)

![14 · 添加 Status](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-14-status-add.png)

<a id="walkthrough-rules-matchers-15-status"></a>
### 15 · 状态范围 200 到 200

[视频 00:42](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=42.904) · [返回本节视频](#walkthrough-rules-matchers-video)

![15 · 状态范围 200 到 200](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-15-status.png)

<a id="walkthrough-rules-matchers-16-mime-add"></a>
### 16 · 添加 MIME

[视频 00:45](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=45.762) · [返回本节视频](#walkthrough-rules-matchers-video)

![16 · 添加 MIME](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-16-mime-add.png)

<a id="walkthrough-rules-matchers-17-mime"></a>
### 17 · Response MIME 为 application/json

[视频 00:49](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=49.055) · [返回本节视频](#walkthrough-rules-matchers-video)

![17 · Response MIME 为 application/json](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-17-mime.png)

<a id="walkthrough-rules-matchers-18-effect-phase"></a>
### 18 · 响应阶段改写 Header

[视频 00:51](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=51.962) · [返回本节视频](#walkthrough-rules-matchers-video)

![18 · 响应阶段改写 Header](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-18-effect-phase.png)

<a id="walkthrough-rules-matchers-19-effect-name"></a>
### 19 · 填写 x-interceptor-guide

[视频 00:55](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=55.154) · [返回本节视频](#walkthrough-rules-matchers-video)

![19 · 填写 x-interceptor-guide](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-19-effect-name.png)

<a id="walkthrough-rules-matchers-20-effect-value"></a>
### 20 · 填写 matcher-demo

[视频 00:58](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=58.003) · [返回本节视频](#walkthrough-rules-matchers-video)

![20 · 填写 matcher-demo](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-20-effect-value.png)

<a id="walkthrough-rules-matchers-21-enable"></a>
### 21 · 启用完整规则

[视频 01:00](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=60.853) · [返回本节视频](#walkthrough-rules-matchers-video)

![21 · 启用完整规则](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-21-enable.png)

<a id="walkthrough-rules-matchers-22-apply"></a>
### 22 · Apply

[视频 01:03](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=63.703) · [返回本节视频](#walkthrough-rules-matchers-video)

![22 · Apply](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-22-apply.png)

<a id="walkthrough-rules-matchers-23-match"></a>
### 23 · 发送满足全部条件的 GET

[视频 01:06](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=66.655) · [返回本节视频](#walkthrough-rules-matchers-video)

![23 · 发送满足全部条件的 GET](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-23-match.png)

<a id="walkthrough-rules-matchers-24-no-match"></a>
### 24 · POST 不满足 Method

[视频 01:10](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=70.104) · [返回本节视频](#walkthrough-rules-matchers-video)

![24 · POST 不满足 Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-24-no-match.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-matchers:end -->

<!-- recorded-walkthrough:rules-organization:start -->
<a id="walkthrough-rules-organization"></a>
## 逐步骤实操：优先级、目录与规则文件往返

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>firstRule</code> | <code>Guide first</code> |
| <code>secondRule</code> | <code>Guide second</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/rule-order</code> |
| <code>header</code> | <code>x-guide-order</code> |
| <code>firstValue</code> | <code>first</code> |
| <code>secondValue</code> | <code>second</code> |
| <code>folder</code> | <code>Guide rules</code> |
| <code>exportFile</code> | <code>guide-rules.json</code> |

<a id="walkthrough-rules-organization-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4" poster="../media/v0.1.1-alpha.1/rules-organization/rules-organization-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-organization/rules-organization.vtt" default>
</video>

<a id="walkthrough-rules-organization-01-open"></a>
### 01 · 打开 Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=0.409) · [返回本节视频](#walkthrough-rules-organization-video)

![01 · 打开 Rules](../media/v0.1.1-alpha.1/rules-organization/rules-organization-01-open.png)

<a id="walkthrough-rules-organization-first-01-new"></a>
### 02 · 新建 Guide first

[视频 00:03](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=3.231) · [返回本节视频](#walkthrough-rules-organization-video)

![02 · 新建 Guide first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-01-new.png)

<a id="walkthrough-rules-organization-first-02-host"></a>
### 03 · 填写 Host

[视频 00:06](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=6.217) · [返回本节视频](#walkthrough-rules-organization-video)

![03 · 填写 Host](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-02-host.png)

<a id="walkthrough-rules-organization-first-03-path"></a>
### 04 · 限制演示 Path

[视频 00:09](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=9.017) · [返回本节视频](#walkthrough-rules-organization-video)

![04 · 限制演示 Path](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-03-path.png)

<a id="walkthrough-rules-organization-first-04-header"></a>
### 05 · 填写 x-guide-order

[视频 00:12](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=12.217) · [返回本节视频](#walkthrough-rules-organization-video)

![05 · 填写 x-guide-order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-04-header.png)

<a id="walkthrough-rules-organization-first-05-enable"></a>
### 06 · 启用当前规则

[视频 00:15](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=15.067) · [返回本节视频](#walkthrough-rules-organization-video)

![06 · 启用当前规则](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-05-enable.png)

<a id="walkthrough-rules-organization-second-01-new"></a>
### 07 · 新建 Guide second

[视频 00:17](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=17.867) · [返回本节视频](#walkthrough-rules-organization-video)

![07 · 新建 Guide second](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-01-new.png)

<a id="walkthrough-rules-organization-second-02-host"></a>
### 08 · 填写 Host

[视频 00:20](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=20.767) · [返回本节视频](#walkthrough-rules-organization-video)

![08 · 填写 Host](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-02-host.png)

<a id="walkthrough-rules-organization-second-03-path"></a>
### 09 · 限制演示 Path

[视频 00:23](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=23.567) · [返回本节视频](#walkthrough-rules-organization-video)

![09 · 限制演示 Path](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-03-path.png)

<a id="walkthrough-rules-organization-second-04-header"></a>
### 10 · 填写 x-guide-order

[视频 00:26](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=26.777) · [返回本节视频](#walkthrough-rules-organization-video)

![10 · 填写 x-guide-order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-04-header.png)

<a id="walkthrough-rules-organization-second-05-enable"></a>
### 11 · 启用当前规则

[视频 00:29](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=29.617) · [返回本节视频](#walkthrough-rules-organization-video)

![11 · 启用当前规则](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-05-enable.png)

<a id="walkthrough-rules-organization-02-apply"></a>
### 12 · 应用两条规则

[视频 00:32](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=32.468) · [返回本节视频](#walkthrough-rules-organization-video)

![12 · 应用两条规则](../media/v0.1.1-alpha.1/rules-organization/rules-organization-02-apply.png)

<a id="walkthrough-rules-organization-03-before"></a>
### 13 · 验证 second 后写覆盖

[视频 00:35](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=35.317) · [返回本节视频](#walkthrough-rules-organization-video)

![13 · 验证 second 后写覆盖](../media/v0.1.1-alpha.1/rules-organization/rules-organization-03-before.png)

<a id="walkthrough-rules-organization-04-reorder"></a>
### 14 · 把 second 拖到 first 前面

[视频 00:38](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=38.118) · [返回本节视频](#walkthrough-rules-organization-video)

![14 · 把 second 拖到 first 前面](../media/v0.1.1-alpha.1/rules-organization/rules-organization-04-reorder.png)

<a id="walkthrough-rules-organization-05-apply-order"></a>
### 15 · Apply 新顺序

[视频 00:41](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=41.068) · [返回本节视频](#walkthrough-rules-organization-video)

![15 · Apply 新顺序](../media/v0.1.1-alpha.1/rules-organization/rules-organization-05-apply-order.png)

<a id="walkthrough-rules-organization-06-after"></a>
### 16 · 验证 first 变为最后写入

[视频 00:43](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=43.918) · [返回本节视频](#walkthrough-rules-organization-video)

![16 · 验证 first 变为最后写入](../media/v0.1.1-alpha.1/rules-organization/rules-organization-06-after.png)

<a id="walkthrough-rules-organization-07-folder"></a>
### 17 · 新建 Guide rules 目录

[视频 00:46](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=46.669) · [返回本节视频](#walkthrough-rules-organization-video)

![17 · 新建 Guide rules 目录](../media/v0.1.1-alpha.1/rules-organization/rules-organization-07-folder.png)

<a id="walkthrough-rules-organization-08-move-second"></a>
### 18 · 将 second 移入目录

[视频 00:49](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=49.567) · [返回本节视频](#walkthrough-rules-organization-video)

![18 · 将 second 移入目录](../media/v0.1.1-alpha.1/rules-organization/rules-organization-08-move-second.png)

<a id="walkthrough-rules-organization-09-move-first"></a>
### 19 · 将 first 移入目录

[视频 00:52](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=52.518) · [返回本节视频](#walkthrough-rules-organization-video)

![19 · 将 first 移入目录](../media/v0.1.1-alpha.1/rules-organization/rules-organization-09-move-first.png)

<a id="walkthrough-rules-organization-10-apply-folder"></a>
### 20 · 保存目录结构

[视频 00:55](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=55.425) · [返回本节视频](#walkthrough-rules-organization-video)

![20 · 保存目录结构](../media/v0.1.1-alpha.1/rules-organization/rules-organization-10-apply-folder.png)

<a id="walkthrough-rules-organization-11-export"></a>
### 21 · 保存 guide-rules.json

[视频 01:18](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=78.586) · [返回本节视频](#walkthrough-rules-organization-video)

![21 · 保存 guide-rules.json](../media/v0.1.1-alpha.1/rules-organization/rules-organization-11-export.png)

<a id="walkthrough-rules-organization-12-exported"></a>
### 22 · 核对产品导出的规则树

[视频 01:23](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=83.317) · [返回本节视频](#walkthrough-rules-organization-video)

![22 · 核对产品导出的规则树](../media/v0.1.1-alpha.1/rules-organization/rules-organization-12-exported.png)

<a id="walkthrough-rules-organization-13-import-file"></a>
### 23 · 选择刚导出的规则

[视频 01:38](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=98.706) · [返回本节视频](#walkthrough-rules-organization-video)

![23 · 选择刚导出的规则](../media/v0.1.1-alpha.1/rules-organization/rules-organization-13-import-file.png)

<a id="walkthrough-rules-organization-14-preview"></a>
### 24 · 检查已启用规则的导入警告

[视频 01:43](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=103.853) · [返回本节视频](#walkthrough-rules-organization-video)

![24 · 检查已启用规则的导入警告](../media/v0.1.1-alpha.1/rules-organization/rules-organization-14-preview.png)

<a id="walkthrough-rules-organization-15-cancel"></a>
### 25 · 取消预览保持原树

[视频 01:46](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=106.668) · [返回本节视频](#walkthrough-rules-organization-video)

![25 · 取消预览保持原树](../media/v0.1.1-alpha.1/rules-organization/rules-organization-15-cancel.png)

<a id="walkthrough-rules-organization-16-import-again"></a>
### 26 · 重新选择同一文件

[视频 02:02](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=122.131) · [返回本节视频](#walkthrough-rules-organization-video)

![26 · 重新选择同一文件](../media/v0.1.1-alpha.1/rules-organization/rules-organization-16-import-again.png)

<a id="walkthrough-rules-organization-17-confirm"></a>
### 27 · 确认追加，不覆盖

[视频 02:07](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=127.165) · [返回本节视频](#walkthrough-rules-organization-video)

![27 · 确认追加，不覆盖](../media/v0.1.1-alpha.1/rules-organization/rules-organization-17-confirm.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-organization:end -->

<!-- recorded-walkthrough:rules-operations:start -->
<a id="walkthrough-rules-operations"></a>
## 逐步骤实操：remove、append、请求正文与搜索

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/rule-operations</code> |
| <code>header</code> | <code>x-guide-list</code> |
| <code>originalHeader</code> | <code>one</code> |
| <code>appendedHeader</code> | <code>two</code> |
| <code>removedQuery</code> | <code>guide=remove-me</code> |
| <code>originalBody</code> | <code>{&quot;message&quot;:&quot;original&quot;}</code> |
| <code>replacementBody</code> | <code>{&quot;message&quot;:&quot;request-edited&quot;}</code> |
| <code>initialName</code> | <code>Guide operations</code> |
| <code>renamed</code> | <code>Guide operations done</code> |
| <code>deletionLimit</code> | <code>The released empty Rules tree has no Apply entry; this recording does not claim a saved last-rule deletion.</code> |

<a id="walkthrough-rules-operations-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4" poster="../media/v0.1.1-alpha.1/rules-operations/rules-operations-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-operations/rules-operations.vtt" default>
</video>

<a id="walkthrough-rules-operations-01-rules"></a>
### 01 · 打开 Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=0.367) · [返回本节视频](#walkthrough-rules-operations-video)

![01 · 打开 Rules](../media/v0.1.1-alpha.1/rules-operations/rules-operations-01-rules.png)

<a id="walkthrough-rules-operations-02-new"></a>
### 02 · 创建 Guide operations

[视频 00:03](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=3.255) · [返回本节视频](#walkthrough-rules-operations-video)

![02 · 创建 Guide operations](../media/v0.1.1-alpha.1/rules-operations/rules-operations-02-new.png)

<a id="walkthrough-rules-operations-03-scope"></a>
### 03 · 限制 Host 与 Path

[视频 00:06](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=6.253) · [返回本节视频](#walkthrough-rules-operations-video)

![03 · 限制 Host 与 Path](../media/v0.1.1-alpha.1/rules-operations/rules-operations-03-scope.png)

<a id="walkthrough-rules-operations-04-header-name"></a>
### 04 · 填写 x-guide-list

[视频 00:09](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=9.563) · [返回本节视频](#walkthrough-rules-operations-video)

![04 · 填写 x-guide-list](../media/v0.1.1-alpha.1/rules-operations/rules-operations-04-header-name.png)

<a id="walkthrough-rules-operations-05-append"></a>
### 05 · 选择 append

[视频 00:12](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=12.403) · [返回本节视频](#walkthrough-rules-operations-video)

![05 · 选择 append](../media/v0.1.1-alpha.1/rules-operations/rules-operations-05-append.png)

<a id="walkthrough-rules-operations-06-enable"></a>
### 06 · 启用规则

[视频 00:15](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=15.714) · [返回本节视频](#walkthrough-rules-operations-video)

![06 · 启用规则](../media/v0.1.1-alpha.1/rules-operations/rules-operations-06-enable.png)

<a id="walkthrough-rules-operations-07-apply"></a>
### 07 · Apply append

[视频 00:18](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=18.554) · [返回本节视频](#walkthrough-rules-operations-video)

![07 · Apply append](../media/v0.1.1-alpha.1/rules-operations/rules-operations-07-apply.png)

<a id="walkthrough-rules-operations-08-appended"></a>
### 08 · 核对保留 one 并追加 two

[视频 00:21](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=21.453) · [返回本节视频](#walkthrough-rules-operations-video)

![08 · 核对保留 one 并追加 two](../media/v0.1.1-alpha.1/rules-operations/rules-operations-08-appended.png)

<a id="walkthrough-rules-operations-09-remove"></a>
### 09 · 选择 remove

[视频 00:24](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=24.303) · [返回本节视频](#walkthrough-rules-operations-video)

![09 · 选择 remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-09-remove.png)

<a id="walkthrough-rules-operations-10-apply-remove"></a>
### 10 · Apply remove

[视频 00:27](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=27.554) · [返回本节视频](#walkthrough-rules-operations-video)

![10 · Apply remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-10-apply-remove.png)

<a id="walkthrough-rules-operations-11-removed"></a>
### 11 · 核对Header已移除

[视频 00:30](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=30.454) · [返回本节视频](#walkthrough-rules-operations-video)

![11 · 核对Header已移除](../media/v0.1.1-alpha.1/rules-operations/rules-operations-11-removed.png)

<a id="walkthrough-rules-operations-12-query-action"></a>
### 12 · 改为 Query 动作

[视频 00:33](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=33.254) · [返回本节视频](#walkthrough-rules-operations-video)

![12 · 改为 Query 动作](../media/v0.1.1-alpha.1/rules-operations/rules-operations-12-query-action.png)

<a id="walkthrough-rules-operations-13-query-remove"></a>
### 13 · 移除 guide 参数

[视频 00:36](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=36.503) · [返回本节视频](#walkthrough-rules-operations-video)

![13 · 移除 guide 参数](../media/v0.1.1-alpha.1/rules-operations/rules-operations-13-query-remove.png)

<a id="walkthrough-rules-operations-14-apply-query"></a>
### 14 · Apply Query remove

[视频 00:39](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=39.453) · [返回本节视频](#walkthrough-rules-operations-video)

![14 · Apply Query remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-14-apply-query.png)

<a id="walkthrough-rules-operations-15-query-result"></a>
### 15 · 核对参数被移除

[视频 00:42](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=42.353) · [返回本节视频](#walkthrough-rules-operations-video)

![15 · 核对参数被移除](../media/v0.1.1-alpha.1/rules-operations/rules-operations-15-query-result.png)

<a id="walkthrough-rules-operations-16-body-action"></a>
### 16 · 改为请求 Body 动作

[视频 00:45](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=45.154) · [返回本节视频](#walkthrough-rules-operations-video)

![16 · 改为请求 Body 动作](../media/v0.1.1-alpha.1/rules-operations/rules-operations-16-body-action.png)

<a id="walkthrough-rules-operations-17-body-value"></a>
### 17 · 填写 request-edited

[视频 00:49](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=49.004) · [返回本节视频](#walkthrough-rules-operations-video)

![17 · 填写 request-edited](../media/v0.1.1-alpha.1/rules-operations/rules-operations-17-body-value.png)

<a id="walkthrough-rules-operations-18-apply-body"></a>
### 18 · Apply 请求正文

[视频 00:51](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=51.853) · [返回本节视频](#walkthrough-rules-operations-video)

![18 · Apply 请求正文](../media/v0.1.1-alpha.1/rules-operations/rules-operations-18-apply-body.png)

<a id="walkthrough-rules-operations-19-body-result"></a>
### 19 · 核对源站收到完整替换

[视频 00:54](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=54.809) · [返回本节视频](#walkthrough-rules-operations-video)

![19 · 核对源站收到完整替换](../media/v0.1.1-alpha.1/rules-operations/rules-operations-19-body-result.png)

<a id="walkthrough-rules-operations-20-rename"></a>
### 20 · 重命名为 Guide operations done

[视频 00:57](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=57.610) · [返回本节视频](#walkthrough-rules-operations-video)

![20 · 重命名为 Guide operations done](../media/v0.1.1-alpha.1/rules-operations/rules-operations-20-rename.png)

<a id="walkthrough-rules-operations-21-search"></a>
### 21 · 按名称搜索

[视频 01:00](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=60.655) · [返回本节视频](#walkthrough-rules-operations-video)

![21 · 按名称搜索](../media/v0.1.1-alpha.1/rules-operations/rules-operations-21-search.png)

<a id="walkthrough-rules-operations-22-disable"></a>
### 22 · 保留但停用演示规则

[视频 01:03](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=63.503) · [返回本节视频](#walkthrough-rules-operations-video)

![22 · 保留但停用演示规则](../media/v0.1.1-alpha.1/rules-operations/rules-operations-22-disable.png)

<a id="walkthrough-rules-operations-23-apply-disabled"></a>
### 23 · Apply 停用状态

[视频 01:06](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=66.403) · [返回本节视频](#walkthrough-rules-operations-video)

![23 · Apply 停用状态](../media/v0.1.1-alpha.1/rules-operations/rules-operations-23-apply-disabled.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-operations:end -->

<!-- recorded-walkthrough:rules-response-evidence:start -->
<a id="walkthrough-rules-response-evidence"></a>
## 逐步骤实操：响应 Header 与正文版本证据

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>ruleName</code> | <code>Guide response and body</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/response-evidence</code> |
| <code>origin</code> | <code>http://127.0.0.1:62520/guide/response-evidence</code> |
| <code>responseHeader</code> | <code>x-guide-list</code> |
| <code>originalHeader</code> | <code>one</code> |
| <code>appendedHeader</code> | <code>two</code> |
| <code>originalBody</code> | <code>{&quot;message&quot;:&quot;guide-original&quot;}</code> |
| <code>requestFinal</code> | <code>{&quot;message&quot;:&quot;guide-final&quot;}</code> |
| <code>responseFinal</code> | <code>{&quot;message&quot;:&quot;guide-response-final&quot;}</code> |
| <code>savedFile</code> | <code>guide-final.json</code> |
| <code>responseOriginal</code> | <code>unavailable; not an empty response body</code> |

<a id="walkthrough-rules-response-evidence-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4" poster="../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.vtt" default>
</video>

<a id="walkthrough-rules-response-evidence-01-rules"></a>
### 01 · 打开 Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=0.168) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![01 · 打开 Rules](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-01-rules.png)

<a id="walkthrough-rules-response-evidence-02-root-menu"></a>
### 02 · 打开空白区域菜单

[视频 00:03](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=3.302) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![02 · 打开空白区域菜单](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-02-root-menu.png)

<a id="walkthrough-rules-response-evidence-03-create"></a>
### 03 · 新建规则

[视频 00:06](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=6.353) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![03 · 新建规则](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-03-create.png)

<a id="walkthrough-rules-response-evidence-04-name"></a>
### 04 · 命名 Guide response and body

[视频 00:09](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=9.504) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![04 · 命名 Guide response and body](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-04-name.png)

<a id="walkthrough-rules-response-evidence-05-host"></a>
### 05 · 限制 Host 为 127.0.0.1

[视频 00:12](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=12.443) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![05 · 限制 Host 为 127.0.0.1](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-05-host.png)

<a id="walkthrough-rules-response-evidence-06-add-path"></a>
### 06 · 添加 Path 条件

[视频 00:15](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=15.293) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![06 · 添加 Path 条件](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-06-add-path.png)

<a id="walkthrough-rules-response-evidence-07-path"></a>
### 07 · 限制本轮示例 Path

[视频 00:18](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=18.544) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![07 · 限制本轮示例 Path](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-07-path.png)

<a id="walkthrough-rules-response-evidence-08-response-phase"></a>
### 08 · Header 选择 Response

[视频 00:21](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=21.392) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![08 · Header 选择 Response](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-08-response-phase.png)

<a id="walkthrough-rules-response-evidence-09-header"></a>
### 09 · 填写 x-guide-list

[视频 00:24](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=24.692) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![09 · 填写 x-guide-list](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-09-header.png)

<a id="walkthrough-rules-response-evidence-10-append"></a>
### 10 · 选择 append

[视频 00:27](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=27.542) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![10 · 选择 append](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-10-append.png)

<a id="walkthrough-rules-response-evidence-11-value"></a>
### 11 · 追加值填 two

[视频 00:30](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=30.740) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![11 · 追加值填 two](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-11-value.png)

<a id="walkthrough-rules-response-evidence-12-enable"></a>
### 12 · 启用示例规则

[视频 00:33](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=33.643) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![12 · 启用示例规则](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-12-enable.png)

<a id="walkthrough-rules-response-evidence-13-apply-append"></a>
### 13 · Apply 响应 append

[视频 00:36](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=36.492) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![13 · Apply 响应 append](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-13-apply-append.png)

<a id="walkthrough-rules-response-evidence-14-capture"></a>
### 14 · 回到 Capture

[视频 00:39](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=39.443) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![14 · 回到 Capture](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-14-capture.png)

<a id="walkthrough-rules-response-evidence-15-append-request"></a>
### 15 · 重新请求 append

[视频 00:42](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=42.341) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![15 · 重新请求 append](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-15-append-request.png)

<a id="walkthrough-rules-response-evidence-16-append-select"></a>
### 16 · 选择 append 请求

[视频 00:45](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=45.190) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![16 · 选择 append 请求](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-16-append-select.png)

<a id="walkthrough-rules-response-evidence-17-append-headers"></a>
### 17 · 核对响应保留 one 并追加 two

[视频 00:48](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=48.193) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![17 · 核对响应保留 one 并追加 two](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-17-append-headers.png)

<a id="walkthrough-rules-response-evidence-18-edit-remove"></a>
### 18 · 返回原规则

[视频 00:51](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=51.095) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![18 · 返回原规则](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-18-edit-remove.png)

<a id="walkthrough-rules-response-evidence-19-remove"></a>
### 19 · 改为 remove

[视频 00:54](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=54.092) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![19 · 改为 remove](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-19-remove.png)

<a id="walkthrough-rules-response-evidence-20-apply-remove"></a>
### 20 · Apply 响应 remove

[视频 00:57](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=57.392) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![20 · Apply 响应 remove](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-20-apply-remove.png)

<a id="walkthrough-rules-response-evidence-21-capture-remove"></a>
### 21 · 返回 Capture 核对移除

[视频 01:00](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=60.293) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![21 · 返回 Capture 核对移除](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-21-capture-remove.png)

<a id="walkthrough-rules-response-evidence-22-remove-request"></a>
### 22 · 重新请求 remove

[视频 01:03](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=63.394) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![22 · 重新请求 remove](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-22-remove-request.png)

<a id="walkthrough-rules-response-evidence-23-remove-select"></a>
### 23 · 选择 remove 请求

[视频 01:06](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=66.293) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![23 · 选择 remove 请求](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-23-remove-select.png)

<a id="walkthrough-rules-response-evidence-24-edit-body"></a>
### 24 · 返回 Rules 编辑正文动作

[视频 01:09](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=69.393) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![24 · 返回 Rules 编辑正文动作](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-24-edit-body.png)

<a id="walkthrough-rules-response-evidence-25-remove-header"></a>
### 25 · 移除 Header 动作

[视频 01:12](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=72.441) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![25 · 移除 Header 动作](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-25-remove-header.png)

<a id="walkthrough-rules-response-evidence-26-add-body"></a>
### 26 · 添加 Body 动作

[视频 01:15](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=75.298) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![26 · 添加 Body 动作](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-26-add-body.png)

<a id="walkthrough-rules-response-evidence-27-request-phase"></a>
### 27 · Body 选择 Request

[视频 01:18](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=78.594) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![27 · Body 选择 Request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-27-request-phase.png)

<a id="walkthrough-rules-response-evidence-28-body-value"></a>
### 28 · 填写 guide-final 正文

[视频 01:21](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=81.893) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![28 · 填写 guide-final 正文](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-28-body-value.png)

<a id="walkthrough-rules-response-evidence-29-apply-body"></a>
### 29 · Apply 请求正文

[视频 01:24](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=84.740) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![29 · Apply 请求正文](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-29-apply-body.png)

<a id="walkthrough-rules-response-evidence-30-capture-body"></a>
### 30 · 返回 Capture 观察正文

[视频 01:27](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=87.600) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![30 · 返回 Capture 观察正文](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-30-capture-body.png)

<a id="walkthrough-rules-response-evidence-31-post"></a>
### 31 · 发送 guide-original 的 POST

[视频 01:30](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=90.643) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![31 · 发送 guide-original 的 POST](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-31-post.png)

<a id="walkthrough-rules-response-evidence-32-body-select"></a>
### 32 · 选择 request-body 请求

[视频 01:33](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=93.545) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![32 · 选择 request-body 请求](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-32-body-select.png)

<a id="walkthrough-rules-response-evidence-33-final"></a>
### 33 · Request 默认显示 Final

[视频 01:36](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=96.396) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![33 · Request 默认显示 Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-33-final.png)

<a id="walkthrough-rules-response-evidence-34-original"></a>
### 34 · 切换 Original

[视频 01:39](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=99.696) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![34 · 切换 Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-34-original.png)

<a id="walkthrough-rules-response-evidence-35-raw"></a>
### 35 · 选择 Raw

[视频 01:42](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=102.592) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![35 · 选择 Raw](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-35-raw.png)

<a id="walkthrough-rules-response-evidence-36-copy-original"></a>
### 36 · 复制 Original

[视频 01:45](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=105.441) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![36 · 复制 Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-36-copy-original.png)

<a id="walkthrough-rules-response-evidence-37-fullscreen"></a>
### 37 · 全屏查看 Original

[视频 01:48](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=108.343) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![37 · 全屏查看 Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-37-fullscreen.png)

<a id="walkthrough-rules-response-evidence-38-close-fullscreen"></a>
### 38 · Escape 返回详情

[视频 01:51](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=111.339) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![38 · Escape 返回详情](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-38-close-fullscreen.png)

<a id="walkthrough-rules-response-evidence-39-final-again"></a>
### 39 · 再次切换 Final

[视频 01:54](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=114.430) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![39 · 再次切换 Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-39-final-again.png)

<a id="walkthrough-rules-response-evidence-40-copy-final"></a>
### 40 · 复制 Final

[视频 01:57](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=117.333) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![40 · 复制 Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-40-copy-final.png)

<a id="walkthrough-rules-response-evidence-41-save-dialog"></a>
### 41 · 保存 Final 为 guide-final.json

[视频 02:13](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=133.034) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![41 · 保存 Final 为 guide-final.json](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-41-save-dialog.png)

<a id="walkthrough-rules-response-evidence-42-saved"></a>
### 42 · 确认保存的是 Final

[视频 02:17](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=137.201) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![42 · 确认保存的是 Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-42-saved.png)

<a id="walkthrough-rules-response-evidence-43-body-rule"></a>
### 43 · 点击正文效果返回对应规则

[视频 02:19](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=139.961) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![43 · 点击正文效果返回对应规则](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-43-body-rule.png)

<a id="walkthrough-rules-response-evidence-44-response-body"></a>
### 44 · 将 Body 改为 Response

[视频 02:22](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=142.852) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![44 · 将 Body 改为 Response](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-44-response-body.png)

<a id="walkthrough-rules-response-evidence-45-response-value"></a>
### 45 · 填写 guide-response-final

[视频 02:26](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=146.094) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![45 · 填写 guide-response-final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-45-response-value.png)

<a id="walkthrough-rules-response-evidence-46-apply-response"></a>
### 46 · Apply 响应正文

[视频 02:28](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=148.924) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![46 · Apply 响应正文](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-46-apply-response.png)

<a id="walkthrough-rules-response-evidence-47-capture-response"></a>
### 47 · 返回 Capture 核对响应

[视频 02:31](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=151.816) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![47 · 返回 Capture 核对响应](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-47-capture-response.png)

<a id="walkthrough-rules-response-evidence-48-response-request"></a>
### 48 · 发送新的 response-body 请求

[视频 02:34](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=154.793) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![48 · 发送新的 response-body 请求](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-48-response-request.png)

<a id="walkthrough-rules-response-evidence-49-response-select"></a>
### 49 · 选择 response-body 请求

[视频 02:37](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=157.604) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![49 · 选择 response-body 请求](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-49-response-select.png)

<a id="walkthrough-rules-response-evidence-50-unavailable"></a>
### 50 · 核对响应 Original 不可用

[视频 02:40](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=160.483) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![50 · 核对响应 Original 不可用](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-50-unavailable.png)

<a id="walkthrough-rules-response-evidence-51-rule-again"></a>
### 51 · 返回产生响应的规则

[视频 02:43](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=163.477) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![51 · 返回产生响应的规则](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-51-rule-again.png)

<a id="walkthrough-rules-response-evidence-52-disable"></a>
### 52 · 停用本轮规则

[视频 02:46](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=166.353) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![52 · 停用本轮规则](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-52-disable.png)

<a id="walkthrough-rules-response-evidence-53-apply-disabled"></a>
### 53 · Apply 停用状态

[视频 02:49](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=169.193) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![53 · Apply 停用状态](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-53-apply-disabled.png)

<a id="walkthrough-rules-response-evidence-54-capture-restored"></a>
### 54 · 返回 Capture 验证恢复

[视频 02:52](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=172.081) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![54 · 返回 Capture 验证恢复](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-54-capture-restored.png)

<a id="walkthrough-rules-response-evidence-55-restored-request"></a>
### 55 · 发送新请求核对无改写

[视频 02:55](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence.mp4#t=175.116) · [返回本节视频](#walkthrough-rules-response-evidence-video)

![55 · 发送新请求核对无改写](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-55-restored-request.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-response-evidence:end -->

<!-- recorded-walkthrough:rules-tree:start -->
<a id="walkthrough-rules-tree"></a>
## 逐步骤实操：目录层级、校验、命中导航与非最后删除

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/rule-tree</code> |
| <code>header</code> | <code>x-guide-tree</code> |
| <code>nestedRule</code> | <code>Guide nested priority</code> |
| <code>rootRule</code> | <code>Guide root priority</code> |
| <code>initialFolders</code> | <code>Guide hierarchy &gt; Guide API &gt; Guide final</code> |
| <code>renamedFolder</code> | <code>Guide routes</code> |
| <code>firstValue</code> | <code>nested</code> |
| <code>laterValue</code> | <code>root</code> |
| <code>deletionScope</code> | <code>One of two precedence Rules and the emptied folder tree; the last Rule remains disabled</code> |

<a id="walkthrough-rules-tree-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4" poster="../media/v0.1.1-alpha.1/rules-tree/rules-tree-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-tree/rules-tree.vtt" default>
</video>

<a id="walkthrough-rules-tree-01-rules"></a>
### 01 · 打开 Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=0.412) · [返回本节视频](#walkthrough-rules-tree-video)

![01 · 打开 Rules](../media/v0.1.1-alpha.1/rules-tree/rules-tree-01-rules.png)

<a id="walkthrough-rules-tree-02-root-folder"></a>
### 02 · 新建根目录

[视频 00:03](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=3.407) · [返回本节视频](#walkthrough-rules-tree-video)

![02 · 新建根目录](../media/v0.1.1-alpha.1/rules-tree/rules-tree-02-root-folder.png)

<a id="walkthrough-rules-tree-03-root-name"></a>
### 03 · 命名 Guide hierarchy

[视频 00:06](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=6.404) · [返回本节视频](#walkthrough-rules-tree-video)

![03 · 命名 Guide hierarchy](../media/v0.1.1-alpha.1/rules-tree/rules-tree-03-root-name.png)

<a id="walkthrough-rules-tree-04-child-folder"></a>
### 04 · 通过目录菜单新建子目录

[视频 00:09](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=9.353) · [返回本节视频](#walkthrough-rules-tree-video)

![04 · 通过目录菜单新建子目录](../media/v0.1.1-alpha.1/rules-tree/rules-tree-04-child-folder.png)

<a id="walkthrough-rules-tree-05-child-name"></a>
### 05 · 命名 Guide API

[视频 00:12](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=12.755) · [返回本节视频](#walkthrough-rules-tree-video)

![05 · 命名 Guide API](../media/v0.1.1-alpha.1/rules-tree/rules-tree-05-child-name.png)

<a id="walkthrough-rules-tree-06-third-folder"></a>
### 06 · 新建第三级目录

[视频 00:15](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=15.705) · [返回本节视频](#walkthrough-rules-tree-video)

![06 · 新建第三级目录](../media/v0.1.1-alpha.1/rules-tree/rules-tree-06-third-folder.png)

<a id="walkthrough-rules-tree-07-third-name"></a>
### 07 · 命名 Guide final

[视频 00:19](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=19.104) · [返回本节视频](#walkthrough-rules-tree-video)

![07 · 命名 Guide final](../media/v0.1.1-alpha.1/rules-tree/rules-tree-07-third-name.png)

<a id="walkthrough-rules-tree-08-depth-limit"></a>
### 08 · 核对不能继续新建第四级目录

[视频 00:22](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=22.056) · [返回本节视频](#walkthrough-rules-tree-video)

![08 · 核对不能继续新建第四级目录](../media/v0.1.1-alpha.1/rules-tree/rules-tree-08-depth-limit.png)

<a id="walkthrough-rules-tree-09-nested-rule"></a>
### 09 · 在第三级新建规则

[视频 00:25](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=25.106) · [返回本节视频](#walkthrough-rules-tree-video)

![09 · 在第三级新建规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-09-nested-rule.png)

<a id="walkthrough-rules-tree-10-invalid"></a>
### 10 · 检查未填写字段与Apply禁用

[视频 00:28](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=28.204) · [返回本节视频](#walkthrough-rules-tree-video)

![10 · 检查未填写字段与Apply禁用](../media/v0.1.1-alpha.1/rules-tree/rules-tree-10-invalid.png)

<a id="walkthrough-rules-tree-11-rule-name"></a>
### 11 · 命名 Guide nested priority

[视频 00:31](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=31.156) · [返回本节视频](#walkthrough-rules-tree-video)

![11 · 命名 Guide nested priority](../media/v0.1.1-alpha.1/rules-tree/rules-tree-11-rule-name.png)

<a id="walkthrough-rules-tree-12-host"></a>
### 12 · 限定Host为127.0.0.1

[视频 00:34](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=34.113) · [返回本节视频](#walkthrough-rules-tree-video)

![12 · 限定Host为127.0.0.1](../media/v0.1.1-alpha.1/rules-tree/rules-tree-12-host.png)

<a id="walkthrough-rules-tree-13-path-condition"></a>
### 13 · 添加Path条件

[视频 00:37](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=37.065) · [返回本节视频](#walkthrough-rules-tree-video)

![13 · 添加Path条件](../media/v0.1.1-alpha.1/rules-tree/rules-tree-13-path-condition.png)

<a id="walkthrough-rules-tree-14-path"></a>
### 14 · 限定本轮规则路径

[视频 00:40](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=40.415) · [返回本节视频](#walkthrough-rules-tree-video)

![14 · 限定本轮规则路径](../media/v0.1.1-alpha.1/rules-tree/rules-tree-14-path.png)

<a id="walkthrough-rules-tree-15-header"></a>
### 15 · 填写x-guide-tree

[视频 00:43](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=43.411) · [返回本节视频](#walkthrough-rules-tree-video)

![15 · 填写x-guide-tree](../media/v0.1.1-alpha.1/rules-tree/rules-tree-15-header.png)

<a id="walkthrough-rules-tree-16-header-value"></a>
### 16 · 填写nested

[视频 00:46](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=46.417) · [返回本节视频](#walkthrough-rules-tree-video)

![16 · 填写nested](../media/v0.1.1-alpha.1/rules-tree/rules-tree-16-header-value.png)

<a id="walkthrough-rules-tree-17-enable"></a>
### 17 · 启用完整规则

[视频 00:49](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=49.404) · [返回本节视频](#walkthrough-rules-tree-video)

![17 · 启用完整规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-17-enable.png)

<a id="walkthrough-rules-tree-18-apply"></a>
### 18 · Apply目录与规则

[视频 00:52](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=52.365) · [返回本节视频](#walkthrough-rules-tree-video)

![18 · Apply目录与规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-18-apply.png)

<a id="walkthrough-rules-tree-19-rename-folder"></a>
### 19 · 在菜单中重命名目录

[视频 00:55](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=55.404) · [返回本节视频](#walkthrough-rules-tree-video)

![19 · 在菜单中重命名目录](../media/v0.1.1-alpha.1/rules-tree/rules-tree-19-rename-folder.png)

<a id="walkthrough-rules-tree-20-folder-name"></a>
### 20 · 将Guide API改为Guide routes

[视频 00:58](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=58.753) · [返回本节视频](#walkthrough-rules-tree-video)

![20 · 将Guide API改为Guide routes](../media/v0.1.1-alpha.1/rules-tree/rules-tree-20-folder-name.png)

<a id="walkthrough-rules-tree-21-apply-rename"></a>
### 21 · Apply目录名称

[视频 01:01](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=61.713) · [返回本节视频](#walkthrough-rules-tree-video)

![21 · Apply目录名称](../media/v0.1.1-alpha.1/rules-tree/rules-tree-21-apply-rename.png)

<a id="walkthrough-rules-tree-22-folder-search"></a>
### 22 · 按目录名称搜索

[视频 01:04](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=64.705) · [返回本节视频](#walkthrough-rules-tree-video)

![22 · 按目录名称搜索](../media/v0.1.1-alpha.1/rules-tree/rules-tree-22-folder-search.png)

<a id="walkthrough-rules-tree-23-search-clear"></a>
### 23 · 清空Rules搜索

[视频 01:07](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=67.662) · [返回本节视频](#walkthrough-rules-tree-video)

![23 · 清空Rules搜索](../media/v0.1.1-alpha.1/rules-tree/rules-tree-23-search-clear.png)

<a id="walkthrough-rules-tree-24-collapse"></a>
### 24 · 折叠根目录

[视频 01:10](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=70.653) · [返回本节视频](#walkthrough-rules-tree-video)

![24 · 折叠根目录](../media/v0.1.1-alpha.1/rules-tree/rules-tree-24-collapse.png)

<a id="walkthrough-rules-tree-25-expand"></a>
### 25 · 展开原来的目录

[视频 01:13](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=73.655) · [返回本节视频](#walkthrough-rules-tree-video)

![25 · 展开原来的目录](../media/v0.1.1-alpha.1/rules-tree/rules-tree-25-expand.png)

<a id="walkthrough-rules-tree-26-request"></a>
### 26 · 发送匹配请求核对nested

[视频 01:16](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=76.606) · [返回本节视频](#walkthrough-rules-tree-video)

![26 · 发送匹配请求核对nested](../media/v0.1.1-alpha.1/rules-tree/rules-tree-26-request.png)

<a id="walkthrough-rules-tree-27-rule-menu"></a>
### 27 · 打开命中规则的菜单

[视频 01:23](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=83.454) · [返回本节视频](#walkthrough-rules-tree-video)

![27 · 打开命中规则的菜单](../media/v0.1.1-alpha.1/rules-tree/rules-tree-27-rule-menu.png)

<a id="walkthrough-rules-tree-28-show-requests"></a>
### 28 · 跳转到这条规则的请求

[视频 01:26](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=86.454) · [返回本节视频](#walkthrough-rules-tree-video)

![28 · 跳转到这条规则的请求](../media/v0.1.1-alpha.1/rules-tree/rules-tree-28-show-requests.png)

<a id="walkthrough-rules-tree-28a-rule-facet"></a>
### 29 · 展开并核对已选规则分组

[视频 01:29](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=89.605) · [返回本节视频](#walkthrough-rules-tree-video)

![29 · 展开并核对已选规则分组](../media/v0.1.1-alpha.1/rules-tree/rules-tree-28a-rule-facet.png)

<a id="walkthrough-rules-tree-29-select-request"></a>
### 30 · 检查导航选中的匹配请求

[视频 01:32](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=92.554) · [返回本节视频](#walkthrough-rules-tree-video)

![30 · 检查导航选中的匹配请求](../media/v0.1.1-alpha.1/rules-tree/rules-tree-29-select-request.png)

<a id="walkthrough-rules-tree-30-header-effect"></a>
### 31 · 查看Header设置标记

[视频 01:35](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=95.504) · [返回本节视频](#walkthrough-rules-tree-video)

![31 · 查看Header设置标记](../media/v0.1.1-alpha.1/rules-tree/rules-tree-30-header-effect.png)

<a id="walkthrough-rules-tree-31-return-rule"></a>
### 32 · 点击标记返回同一规则

[视频 01:38](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=98.465) · [返回本节视频](#walkthrough-rules-tree-video)

![32 · 点击标记返回同一规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-31-return-rule.png)

<a id="walkthrough-rules-tree-32-root-menu"></a>
### 33 · 打开根级菜单

[视频 01:41](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=101.506) · [返回本节视频](#walkthrough-rules-tree-video)

![33 · 打开根级菜单](../media/v0.1.1-alpha.1/rules-tree/rules-tree-32-root-menu.png)

<a id="walkthrough-rules-tree-33-root-rule"></a>
### 34 · 从根菜单新建顺序对照规则

[视频 01:44](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=104.462) · [返回本节视频](#walkthrough-rules-tree-video)

![34 · 从根菜单新建顺序对照规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-33-root-rule.png)

<a id="walkthrough-rules-tree-34-root-name"></a>
### 35 · 命名Guide root priority

[视频 01:47](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=107.463) · [返回本节视频](#walkthrough-rules-tree-video)

![35 · 命名Guide root priority](../media/v0.1.1-alpha.1/rules-tree/rules-tree-34-root-name.png)

<a id="walkthrough-rules-tree-35-root-host"></a>
### 36 · 填写同一Host

[视频 01:50](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=110.408) · [返回本节视频](#walkthrough-rules-tree-video)

![36 · 填写同一Host](../media/v0.1.1-alpha.1/rules-tree/rules-tree-35-root-host.png)

<a id="walkthrough-rules-tree-36-root-path-condition"></a>
### 37 · 为根规则添加Path

[视频 01:53](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=113.354) · [返回本节视频](#walkthrough-rules-tree-video)

![37 · 为根规则添加Path](../media/v0.1.1-alpha.1/rules-tree/rules-tree-36-root-path-condition.png)

<a id="walkthrough-rules-tree-37-root-path"></a>
### 38 · 填写同一测试路径

[视频 01:56](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=116.756) · [返回本节视频](#walkthrough-rules-tree-video)

![38 · 填写同一测试路径](../media/v0.1.1-alpha.1/rules-tree/rules-tree-37-root-path.png)

<a id="walkthrough-rules-tree-38-root-header"></a>
### 39 · 填写同一Header

[视频 01:59](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=119.712) · [返回本节视频](#walkthrough-rules-tree-video)

![39 · 填写同一Header](../media/v0.1.1-alpha.1/rules-tree/rules-tree-38-root-header.png)

<a id="walkthrough-rules-tree-39-root-value"></a>
### 40 · 填写root作为后写值

[视频 02:02](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=122.704) · [返回本节视频](#walkthrough-rules-tree-video)

![40 · 填写root作为后写值](../media/v0.1.1-alpha.1/rules-tree/rules-tree-39-root-value.png)

<a id="walkthrough-rules-tree-40-root-enable"></a>
### 41 · 启用根级顺序规则

[视频 02:05](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=125.669) · [返回本节视频](#walkthrough-rules-tree-video)

![41 · 启用根级顺序规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-40-root-enable.png)

<a id="walkthrough-rules-tree-41-root-apply"></a>
### 42 · Apply两条规则

[视频 02:08](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=128.657) · [返回本节视频](#walkthrough-rules-tree-video)

![42 · Apply两条规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-41-root-apply.png)

<a id="walkthrough-rules-tree-42-precedence"></a>
### 43 · 核对根规则最后覆盖为root

[视频 02:11](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=131.656) · [返回本节视频](#walkthrough-rules-tree-video)

![43 · 核对根规则最后覆盖为root](../media/v0.1.1-alpha.1/rules-tree/rules-tree-42-precedence.png)

<a id="walkthrough-rules-tree-43-delete-nested-menu"></a>
### 44 · 打开非最后一条规则的删除菜单

[视频 02:14](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=134.560) · [返回本节视频](#walkthrough-rules-tree-video)

![44 · 打开非最后一条规则的删除菜单](../media/v0.1.1-alpha.1/rules-tree/rules-tree-43-delete-nested-menu.png)

<a id="walkthrough-rules-tree-44-delete-nested"></a>
### 45 · 只删除Guide nested priority

[视频 02:17](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=137.515) · [返回本节视频](#walkthrough-rules-tree-video)

![45 · 只删除Guide nested priority](../media/v0.1.1-alpha.1/rules-tree/rules-tree-44-delete-nested.png)

<a id="walkthrough-rules-tree-45-apply-deletion"></a>
### 46 · Apply非最后一条删除

[视频 02:20](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=140.506) · [返回本节视频](#walkthrough-rules-tree-video)

![46 · Apply非最后一条删除](../media/v0.1.1-alpha.1/rules-tree/rules-tree-45-apply-deletion.png)

<a id="walkthrough-rules-tree-46-delete-folder-menu"></a>
### 47 · 打开空目录的删除菜单

[视频 02:23](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=143.504) · [返回本节视频](#walkthrough-rules-tree-video)

![47 · 打开空目录的删除菜单](../media/v0.1.1-alpha.1/rules-tree/rules-tree-46-delete-folder-menu.png)

<a id="walkthrough-rules-tree-47-delete-folders"></a>
### 48 · 删除已空的三级目录

[视频 02:26](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=146.604) · [返回本节视频](#walkthrough-rules-tree-video)

![48 · 删除已空的三级目录](../media/v0.1.1-alpha.1/rules-tree/rules-tree-47-delete-folders.png)

<a id="walkthrough-rules-tree-48-apply-folders"></a>
### 49 · Apply空目录删除

[视频 02:29](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=149.605) · [返回本节视频](#walkthrough-rules-tree-video)

![49 · Apply空目录删除](../media/v0.1.1-alpha.1/rules-tree/rules-tree-48-apply-folders.png)

<a id="walkthrough-rules-tree-49-after-delete"></a>
### 50 · 核对剩余规则仍正常命中

[视频 02:32](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=152.604) · [返回本节视频](#walkthrough-rules-tree-video)

![50 · 核对剩余规则仍正常命中](../media/v0.1.1-alpha.1/rules-tree/rules-tree-49-after-delete.png)

<a id="walkthrough-rules-tree-50-disable"></a>
### 51 · 保留并停用最后一条规则

[视频 02:35](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=155.515) · [返回本节视频](#walkthrough-rules-tree-video)

![51 · 保留并停用最后一条规则](../media/v0.1.1-alpha.1/rules-tree/rules-tree-50-disable.png)

<a id="walkthrough-rules-tree-51-apply-disabled"></a>
### 52 · Apply停用状态

[视频 02:38](../media/v0.1.1-alpha.1/rules-tree/rules-tree.mp4#t=158.560) · [返回本节视频](#walkthrough-rules-tree-video)

![52 · Apply停用状态](../media/v0.1.1-alpha.1/rules-tree/rules-tree-51-apply-disabled.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-tree:end -->

<!-- recorded-walkthrough:rules-matching-modes:start -->
<a id="walkthrough-rules-matching-modes"></a>
## 逐步骤实操：包含、精确、正则、大小写与MIME匹配

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>ruleName</code> | <code>Guide matching modes</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/matching/Case</code> |
| <code>header</code> | <code>x-guide-mode: matched</code> |
| <code>containsInput</code> | <code>/guide/matching/case/extra</code> |
| <code>exactInput</code> | <code>/guide/matching/Case</code> |
| <code>regex</code> | <code>^/guide/matching/[A-Z]+$</code> |
| <code>regexUpper</code> | <code>/guide/matching/READY</code> |
| <code>regexLower</code> | <code>/guide/matching/ready</code> |
| <code>mime</code> | <code>application/*</code> |
| <code>positiveMime</code> | <code>application/json</code> |
| <code>negativeMime</code> | <code>text/plain</code> |
| <code>invalidRegex</code> | <code>[</code> |
| <code>invalidRegexLimit</code> | <code>This release permits Apply but the invalid regex never matches; fix the expression rather than trusting the applied label</code> |

<a id="walkthrough-rules-matching-modes-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4" poster="../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.vtt" default>
</video>

<a id="walkthrough-rules-matching-modes-01-rules"></a>
### 01 · 打开Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=0.410) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![01 · 打开Rules](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-01-rules.png)

<a id="walkthrough-rules-matching-modes-02-create"></a>
### 02 · 创建匹配模式规则

[视频 00:03](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=3.385) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![02 · 创建匹配模式规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-02-create.png)

<a id="walkthrough-rules-matching-modes-03-name"></a>
### 03 · 命名Guide matching modes

[视频 00:06](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=6.433) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![03 · 命名Guide matching modes](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-03-name.png)

<a id="walkthrough-rules-matching-modes-04-host"></a>
### 04 · 填写127.0.0.1

[视频 00:09](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=9.392) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![04 · 填写127.0.0.1](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-04-host.png)

<a id="walkthrough-rules-matching-modes-05-path-condition"></a>
### 05 · 添加Path条件

[视频 00:12](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=12.337) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![05 · 添加Path条件](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-05-path-condition.png)

<a id="walkthrough-rules-matching-modes-06-path-value"></a>
### 06 · 填写区分大小写的示例Path

[视频 00:15](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=15.635) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![06 · 填写区分大小写的示例Path](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-06-path-value.png)

<a id="walkthrough-rules-matching-modes-07-header"></a>
### 07 · 填写x-guide-mode

[视频 00:18](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=18.593) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![07 · 填写x-guide-mode](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-07-header.png)

<a id="walkthrough-rules-matching-modes-08-value"></a>
### 08 · 填写matched

[视频 00:21](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=21.541) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![08 · 填写matched](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-08-value.png)

<a id="walkthrough-rules-matching-modes-09-enable"></a>
### 09 · 启用规则

[视频 00:24](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=24.488) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![09 · 启用规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-09-enable.png)

<a id="walkthrough-rules-matching-modes-10-contains"></a>
### 10 · Apply默认包含模式

[视频 00:27](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=27.490) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![10 · Apply默认包含模式](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-10-contains.png)

<a id="walkthrough-rules-matching-modes-contains-capture"></a>
### 11 · 返回Capture检查输入

[视频 00:30](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=30.537) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![11 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-contains-capture.png)

<a id="walkthrough-rules-matching-modes-contains-request"></a>
### 12 · 发送contains请求

[视频 00:33](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=33.538) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![12 · 发送contains请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-contains-request.png)

<a id="walkthrough-rules-matching-modes-contains-headers"></a>
### 13 · 查看实际命中的Header

[视频 00:36](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=36.484) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![13 · 查看实际命中的Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-contains-headers.png)

<a id="walkthrough-rules-matching-modes-contains-rules"></a>
### 14 · 返回同一规则

[视频 00:39](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=39.687) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![14 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-contains-rules.png)

<a id="walkthrough-rules-matching-modes-11-case-sensitive"></a>
### 15 · 开启Aa区分大小写

[视频 00:42](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=42.738) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![15 · 开启Aa区分大小写](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-11-case-sensitive.png)

<a id="walkthrough-rules-matching-modes-12-apply-case"></a>
### 16 · Apply大小写设置

[视频 00:45](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=45.733) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![16 · Apply大小写设置](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-12-apply-case.png)

<a id="walkthrough-rules-matching-modes-case-sensitive-capture"></a>
### 17 · 返回Capture检查输入

[视频 00:48](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=48.738) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![17 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-case-sensitive-capture.png)

<a id="walkthrough-rules-matching-modes-case-sensitive-request"></a>
### 18 · 发送case-sensitive请求

[视频 00:51](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=51.834) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![18 · 发送case-sensitive请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-case-sensitive-request.png)

<a id="walkthrough-rules-matching-modes-case-sensitive-headers"></a>
### 19 · 确认此输入没有改写Header

[视频 00:54](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=54.824) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![19 · 确认此输入没有改写Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-case-sensitive-headers.png)

<a id="walkthrough-rules-matching-modes-case-sensitive-rules"></a>
### 20 · 返回同一规则

[视频 00:57](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=57.988) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![20 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-case-sensitive-rules.png)

<a id="walkthrough-rules-matching-modes-13-exact"></a>
### 21 · 开启精确匹配

[视频 01:01](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=61.036) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![21 · 开启精确匹配](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-13-exact.png)

<a id="walkthrough-rules-matching-modes-14-apply-exact"></a>
### 22 · Apply精确匹配

[视频 01:03](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=63.983) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![22 · Apply精确匹配](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-14-apply-exact.png)

<a id="walkthrough-rules-matching-modes-exact-negative-capture"></a>
### 23 · 返回Capture检查输入

[视频 01:06](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=66.987) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![23 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-negative-capture.png)

<a id="walkthrough-rules-matching-modes-exact-negative-request"></a>
### 24 · 发送exact-negative请求

[视频 01:10](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=70.086) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![24 · 发送exact-negative请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-negative-request.png)

<a id="walkthrough-rules-matching-modes-exact-negative-headers"></a>
### 25 · 确认此输入没有改写Header

[视频 01:13](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=73.035) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![25 · 确认此输入没有改写Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-negative-headers.png)

<a id="walkthrough-rules-matching-modes-exact-negative-rules"></a>
### 26 · 返回同一规则

[视频 01:16](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=76.188) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![26 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-negative-rules.png)

<a id="walkthrough-rules-matching-modes-exact-positive-capture"></a>
### 27 · 返回Capture检查输入

[视频 01:19](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=79.340) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![27 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-positive-capture.png)

<a id="walkthrough-rules-matching-modes-exact-positive-request"></a>
### 28 · 发送exact-positive请求

[视频 01:22](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=82.448) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![28 · 发送exact-positive请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-positive-request.png)

<a id="walkthrough-rules-matching-modes-exact-positive-headers"></a>
### 29 · 查看实际命中的Header

[视频 01:25](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=85.432) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![29 · 查看实际命中的Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-positive-headers.png)

<a id="walkthrough-rules-matching-modes-exact-positive-rules"></a>
### 30 · 返回同一规则

[视频 01:28](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=88.583) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![30 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-positive-rules.png)

<a id="walkthrough-rules-matching-modes-15-regex"></a>
### 31 · 切换到正则模式

[视频 01:31](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=91.633) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![31 · 切换到正则模式](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-15-regex.png)

<a id="walkthrough-rules-matching-modes-16-invalid-regex"></a>
### 32 · 填写无效正则

[视频 01:34](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=94.635) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![32 · 填写无效正则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-16-invalid-regex.png)

<a id="walkthrough-rules-matching-modes-16a-apply-invalid"></a>
### 33 · 核对当前版本仍允许Apply

[视频 01:37](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=97.585) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![33 · 核对当前版本仍允许Apply](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-16a-apply-invalid.png)

<a id="walkthrough-rules-matching-modes-invalid-regex-capture"></a>
### 34 · 返回Capture检查输入

[视频 01:40](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=100.588) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![34 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-invalid-regex-capture.png)

<a id="walkthrough-rules-matching-modes-invalid-regex-request"></a>
### 35 · 发送invalid-regex请求

[视频 01:43](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=103.686) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![35 · 发送invalid-regex请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-invalid-regex-request.png)

<a id="walkthrough-rules-matching-modes-invalid-regex-headers"></a>
### 36 · 确认此输入没有改写Header

[视频 01:46](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=106.633) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![36 · 确认此输入没有改写Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-invalid-regex-headers.png)

<a id="walkthrough-rules-matching-modes-invalid-regex-rules"></a>
### 37 · 返回同一规则

[视频 01:49](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=109.786) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![37 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-invalid-regex-rules.png)

<a id="walkthrough-rules-matching-modes-17-valid-regex"></a>
### 38 · 修正为只匹配大写段的正则

[视频 01:52](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=112.834) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![38 · 修正为只匹配大写段的正则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-17-valid-regex.png)

<a id="walkthrough-rules-matching-modes-18-apply-regex"></a>
### 39 · Apply有效正则

[视频 01:55](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=115.835) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![39 · Apply有效正则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-18-apply-regex.png)

<a id="walkthrough-rules-matching-modes-regex-positive-capture"></a>
### 40 · 返回Capture检查输入

[视频 01:58](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=118.834) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![40 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-positive-capture.png)

<a id="walkthrough-rules-matching-modes-regex-positive-request"></a>
### 41 · 发送regex-positive请求

[视频 02:01](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=121.935) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![41 · 发送regex-positive请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-positive-request.png)

<a id="walkthrough-rules-matching-modes-regex-positive-headers"></a>
### 42 · 查看实际命中的Header

[视频 02:04](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=124.884) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![42 · 查看实际命中的Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-positive-headers.png)

<a id="walkthrough-rules-matching-modes-regex-positive-rules"></a>
### 43 · 返回同一规则

[视频 02:08](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=128.083) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![43 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-positive-rules.png)

<a id="walkthrough-rules-matching-modes-regex-negative-capture"></a>
### 44 · 返回Capture检查输入

[视频 02:11](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=131.133) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![44 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-negative-capture.png)

<a id="walkthrough-rules-matching-modes-regex-negative-request"></a>
### 45 · 发送regex-negative请求

[视频 02:14](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=134.238) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![45 · 发送regex-negative请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-negative-request.png)

<a id="walkthrough-rules-matching-modes-regex-negative-headers"></a>
### 46 · 确认此输入没有改写Header

[视频 02:17](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=137.184) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![46 · 确认此输入没有改写Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-negative-headers.png)

<a id="walkthrough-rules-matching-modes-regex-negative-rules"></a>
### 47 · 返回同一规则

[视频 02:20](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=140.445) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![47 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-negative-rules.png)

<a id="walkthrough-rules-matching-modes-19-ignore-case"></a>
### 48 · 关闭Aa使正则不区分大小写

[视频 02:23](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=143.490) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![48 · 关闭Aa使正则不区分大小写](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-19-ignore-case.png)

<a id="walkthrough-rules-matching-modes-20-apply-ignore-case"></a>
### 49 · Apply正则大小写设置

[视频 02:26](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=146.482) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![49 · Apply正则大小写设置](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-20-apply-ignore-case.png)

<a id="walkthrough-rules-matching-modes-regex-ignore-case-capture"></a>
### 50 · 返回Capture检查输入

[视频 02:29](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=149.488) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![50 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-ignore-case-capture.png)

<a id="walkthrough-rules-matching-modes-regex-ignore-case-request"></a>
### 51 · 发送regex-ignore-case请求

[视频 02:32](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=152.585) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![51 · 发送regex-ignore-case请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-ignore-case-request.png)

<a id="walkthrough-rules-matching-modes-regex-ignore-case-headers"></a>
### 52 · 查看实际命中的Header

[视频 02:35](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=155.542) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![52 · 查看实际命中的Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-ignore-case-headers.png)

<a id="walkthrough-rules-matching-modes-regex-ignore-case-rules"></a>
### 53 · 返回同一规则

[视频 02:38](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=158.683) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![53 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-ignore-case-rules.png)

<a id="walkthrough-rules-matching-modes-21-response-action"></a>
### 54 · 将Header动作改为Response

[视频 02:41](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=161.740) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![54 · 将Header动作改为Response](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-21-response-action.png)

<a id="walkthrough-rules-matching-modes-22-mime-condition"></a>
### 55 · 添加响应MIME条件

[视频 02:45](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=165.085) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![55 · 添加响应MIME条件](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-22-mime-condition.png)

<a id="walkthrough-rules-matching-modes-23-mime-wildcard"></a>
### 56 · 填写application/*通配

[视频 02:48](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=168.505) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![56 · 填写application/*通配](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-23-mime-wildcard.png)

<a id="walkthrough-rules-matching-modes-24-apply-mime"></a>
### 57 · Apply响应MIME条件

[视频 02:51](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=171.447) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![57 · Apply响应MIME条件](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-24-apply-mime.png)

<a id="walkthrough-rules-matching-modes-mime-json-capture"></a>
### 58 · 返回Capture检查输入

[视频 02:54](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=174.438) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![58 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-json-capture.png)

<a id="walkthrough-rules-matching-modes-mime-json-request"></a>
### 59 · 发送mime-json请求

[视频 02:57](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=177.536) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![59 · 发送mime-json请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-json-request.png)

<a id="walkthrough-rules-matching-modes-mime-json-headers"></a>
### 60 · 查看实际命中的Header

[视频 03:00](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=180.489) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![60 · 查看实际命中的Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-json-headers.png)

<a id="walkthrough-rules-matching-modes-mime-json-rules"></a>
### 61 · 返回同一规则

[视频 03:03](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=183.790) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![61 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-json-rules.png)

<a id="walkthrough-rules-matching-modes-mime-text-capture"></a>
### 62 · 返回Capture检查输入

[视频 03:06](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=186.835) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![62 · 返回Capture检查输入](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-text-capture.png)

<a id="walkthrough-rules-matching-modes-mime-text-request"></a>
### 63 · 发送mime-text请求

[视频 03:10](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=190.036) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![63 · 发送mime-text请求](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-text-request.png)

<a id="walkthrough-rules-matching-modes-mime-text-headers"></a>
### 64 · 确认此输入没有改写Header

[视频 03:13](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=193.086) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![64 · 确认此输入没有改写Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-text-headers.png)

<a id="walkthrough-rules-matching-modes-mime-text-rules"></a>
### 65 · 返回同一规则

[视频 03:16](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=196.339) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![65 · 返回同一规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-text-rules.png)

<a id="walkthrough-rules-matching-modes-25-disable"></a>
### 66 · 停用演示规则

[视频 03:19](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=199.436) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![66 · 停用演示规则](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-25-disable.png)

<a id="walkthrough-rules-matching-modes-26-apply-disabled"></a>
### 67 · Apply停用状态

[视频 03:22](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes.mp4#t=202.432) · [返回本节视频](#walkthrough-rules-matching-modes-video)

![67 · Apply停用状态](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-26-apply-disabled.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-matching-modes:end -->

<!-- recorded-walkthrough:rules-response-controls:start -->
<a id="walkthrough-rules-response-controls"></a>
## 逐步骤实操：响应Header、动作停用恢复与正文编码

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>ruleName</code> | <code>Guide response controls</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/response-controls</code> |
| <code>original</code> | <code>{&quot;message&quot;:&quot;guide-origin&quot;}</code> |
| <code>mockStatus</code> | <code>503</code> |
| <code>mockBody</code> | <code>{&quot;message&quot;:&quot;guide-maintenance&quot;}</code> |
| <code>mockHeader</code> | <code>x-guide-maintenance: planned</code> |
| <code>delayMs</code> | <code>2000</code> |
| <code>blockModes</code> | <code>reset, close</code> |
| <code>encoding</code> | <code>gzip</code> |
| <code>bodyReplacement</code> | <code>{&quot;message&quot;:&quot;guide-encoded-body&quot;}</code> |
| <code>encodingBoundary</code> | <code>Header-only keeps original bytes; explicit Body replacement is encoded using the final Headers</code> |

<a id="walkthrough-rules-response-controls-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4" poster="../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.vtt" default>
</video>

<a id="walkthrough-rules-response-controls-01-rules"></a>
### 01 · 打开Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=0.366) · [返回本节视频](#walkthrough-rules-response-controls-video)

![01 · 打开Rules](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-01-rules.png)

<a id="walkthrough-rules-response-controls-02-create"></a>
### 02 · 创建Guide response controls

[视频 00:03](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=3.354) · [返回本节视频](#walkthrough-rules-response-controls-video)

![02 · 创建Guide response controls](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-02-create.png)

<a id="walkthrough-rules-response-controls-03-host"></a>
### 03 · 限定127.0.0.1

[视频 00:06](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=6.466) · [返回本节视频](#walkthrough-rules-response-controls-video)

![03 · 限定127.0.0.1](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-03-host.png)

<a id="walkthrough-rules-response-controls-04-path-condition"></a>
### 04 · 添加Path

[视频 00:09](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=9.407) · [返回本节视频](#walkthrough-rules-response-controls-video)

![04 · 添加Path](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-04-path-condition.png)

<a id="walkthrough-rules-response-controls-05-path"></a>
### 05 · 限定本轮动作路径

[视频 00:12](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=12.765) · [返回本节视频](#walkthrough-rules-response-controls-video)

![05 · 限定本轮动作路径](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-05-path.png)

<a id="walkthrough-rules-response-controls-synthetic-remove"></a>
### 06 · 移除前一个动作

[视频 00:15](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=15.759) · [返回本节视频](#walkthrough-rules-response-controls-video)

![06 · 移除前一个动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-remove.png)

<a id="walkthrough-rules-response-controls-synthetic-add"></a>
### 07 · 添加本次动作

[视频 00:18](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=18.757) · [返回本节视频](#walkthrough-rules-response-controls-video)

![07 · 添加本次动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-add.png)

<a id="walkthrough-rules-response-controls-synthetic-status"></a>
### 08 · 设置503模拟状态

[视频 00:22](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=22.054) · [返回本节视频](#walkthrough-rules-response-controls-video)

![08 · 设置503模拟状态](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-status.png)

<a id="walkthrough-rules-response-controls-synthetic-add-type"></a>
### 09 · 为模拟响应添加Header

[视频 00:25](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=25.003) · [返回本节视频](#walkthrough-rules-response-controls-video)

![09 · 为模拟响应添加Header](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-add-type.png)

<a id="walkthrough-rules-response-controls-synthetic-type-name"></a>
### 10 · 填写content-type

[视频 00:27](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=27.953) · [返回本节视频](#walkthrough-rules-response-controls-video)

![10 · 填写content-type](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-type-name.png)

<a id="walkthrough-rules-response-controls-synthetic-type-value"></a>
### 11 · 填写application/json

[视频 00:30](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=30.905) · [返回本节视频](#walkthrough-rules-response-controls-video)

![11 · 填写application/json](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-type-value.png)

<a id="walkthrough-rules-response-controls-synthetic-add-extra"></a>
### 12 · 添加第二个模拟Header

[视频 00:33](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=33.904) · [返回本节视频](#walkthrough-rules-response-controls-video)

![12 · 添加第二个模拟Header](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-add-extra.png)

<a id="walkthrough-rules-response-controls-synthetic-extra-name"></a>
### 13 · 填写x-guide-maintenance

[视频 00:36](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=36.904) · [返回本节视频](#walkthrough-rules-response-controls-video)

![13 · 填写x-guide-maintenance](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-extra-name.png)

<a id="walkthrough-rules-response-controls-synthetic-extra-value"></a>
### 14 · 填写planned

[视频 00:39](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=39.855) · [返回本节视频](#walkthrough-rules-response-controls-video)

![14 · 填写planned](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-extra-value.png)

<a id="walkthrough-rules-response-controls-synthetic-body"></a>
### 15 · 填写模拟JSON正文

[视频 00:42](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=42.796) · [返回本节视频](#walkthrough-rules-response-controls-video)

![15 · 填写模拟JSON正文](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-body.png)

<a id="walkthrough-rules-response-controls-synthetic-enable"></a>
### 16 · 启用当前动作

[视频 00:45](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=45.759) · [返回本节视频](#walkthrough-rules-response-controls-video)

![16 · 启用当前动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-enable.png)

<a id="walkthrough-rules-response-controls-synthetic-apply"></a>
### 17 · Apply当前动作

[视频 00:48](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=48.757) · [返回本节视频](#walkthrough-rules-response-controls-video)

![17 · Apply当前动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-apply.png)

<a id="walkthrough-rules-response-controls-synthetic-result"></a>
### 18 · 核对503、Header与模拟正文

[视频 00:51](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=51.762) · [返回本节视频](#walkthrough-rules-response-controls-video)

![18 · 核对503、Header与模拟正文](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-result.png)

<a id="walkthrough-rules-response-controls-synthetic-back"></a>
### 19 · 返回同一规则

[视频 00:55](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=55.556) · [返回本节视频](#walkthrough-rules-response-controls-video)

![19 · 返回同一规则](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-back.png)

<a id="walkthrough-rules-response-controls-synthetic-disable"></a>
### 20 · 停用这条规则

[视频 00:58](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=58.714) · [返回本节视频](#walkthrough-rules-response-controls-video)

![20 · 停用这条规则](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-disable.png)

<a id="walkthrough-rules-response-controls-synthetic-apply-off"></a>
### 21 · Apply停用状态

[视频 01:01](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=61.709) · [返回本节视频](#walkthrough-rules-response-controls-video)

![21 · Apply停用状态](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-apply-off.png)

<a id="walkthrough-rules-response-controls-synthetic-restored"></a>
### 22 · 发送新请求核对源站恢复

[视频 01:04](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=64.708) · [返回本节视频](#walkthrough-rules-response-controls-video)

![22 · 发送新请求核对源站恢复](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-restored.png)

<a id="walkthrough-rules-response-controls-synthetic-edit-next"></a>
### 23 · 返回Rules继续编辑

[视频 01:07](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=67.956) · [返回本节视频](#walkthrough-rules-response-controls-video)

![23 · 返回Rules继续编辑](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-edit-next.png)

<a id="walkthrough-rules-response-controls-delay-remove"></a>
### 24 · 移除前一个动作

[视频 01:10](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=70.956) · [返回本节视频](#walkthrough-rules-response-controls-video)

![24 · 移除前一个动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-remove.png)

<a id="walkthrough-rules-response-controls-delay-add"></a>
### 25 · 添加本次动作

[视频 01:13](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=73.906) · [返回本节视频](#walkthrough-rules-response-controls-video)

![25 · 添加本次动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-add.png)

<a id="walkthrough-rules-response-controls-delay-value"></a>
### 26 · 设置2000ms延迟

[视频 01:17](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=77.265) · [返回本节视频](#walkthrough-rules-response-controls-video)

![26 · 设置2000ms延迟](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-value.png)

<a id="walkthrough-rules-response-controls-delay-enable"></a>
### 27 · 启用当前动作

[视频 01:20](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=80.207) · [返回本节视频](#walkthrough-rules-response-controls-video)

![27 · 启用当前动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-enable.png)

<a id="walkthrough-rules-response-controls-delay-apply"></a>
### 28 · Apply当前动作

[视频 01:23](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=83.206) · [返回本节视频](#walkthrough-rules-response-controls-video)

![28 · Apply当前动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-apply.png)

<a id="walkthrough-rules-response-controls-delay-result"></a>
### 29 · 核对实际等待后仍到达源站

[视频 01:26](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=86.258) · [返回本节视频](#walkthrough-rules-response-controls-video)

![29 · 核对实际等待后仍到达源站](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-result.png)

<a id="walkthrough-rules-response-controls-delay-back"></a>
### 30 · 返回同一规则

[视频 01:31](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=91.619) · [返回本节视频](#walkthrough-rules-response-controls-video)

![30 · 返回同一规则](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-back.png)

<a id="walkthrough-rules-response-controls-delay-disable"></a>
### 31 · 停用这条规则

[视频 01:34](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=94.666) · [返回本节视频](#walkthrough-rules-response-controls-video)

![31 · 停用这条规则](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-disable.png)

<a id="walkthrough-rules-response-controls-delay-apply-off"></a>
### 32 · Apply停用状态

[视频 01:37](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=97.593) · [返回本节视频](#walkthrough-rules-response-controls-video)

![32 · Apply停用状态](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-apply-off.png)

<a id="walkthrough-rules-response-controls-delay-restored"></a>
### 33 · 发送新请求核对源站恢复

[视频 01:40](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=100.566) · [返回本节视频](#walkthrough-rules-response-controls-video)

![33 · 发送新请求核对源站恢复](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-restored.png)

<a id="walkthrough-rules-response-controls-delay-edit-next"></a>
### 34 · 返回Rules继续编辑

[视频 01:43](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=103.865) · [返回本节视频](#walkthrough-rules-response-controls-video)

![34 · 返回Rules继续编辑](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-edit-next.png)

<a id="walkthrough-rules-response-controls-block-remove"></a>
### 35 · 移除前一个动作

[视频 01:46](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=106.858) · [返回本节视频](#walkthrough-rules-response-controls-video)

![35 · 移除前一个动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-remove.png)

<a id="walkthrough-rules-response-controls-block-add"></a>
### 36 · 添加本次动作

[视频 01:49](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=109.804) · [返回本节视频](#walkthrough-rules-response-controls-video)

![36 · 添加本次动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-add.png)

<a id="walkthrough-rules-response-controls-block-reset"></a>
### 37 · 选择reset模式

[视频 01:53](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=113.205) · [返回本节视频](#walkthrough-rules-response-controls-video)

![37 · 选择reset模式](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-reset.png)

<a id="walkthrough-rules-response-controls-block-enable"></a>
### 38 · 启用当前动作

[视频 01:56](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=116.253) · [返回本节视频](#walkthrough-rules-response-controls-video)

![38 · 启用当前动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-enable.png)

<a id="walkthrough-rules-response-controls-block-apply"></a>
### 39 · Apply当前动作

[视频 01:59](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=119.206) · [返回本节视频](#walkthrough-rules-response-controls-video)

![39 · Apply当前动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-apply.png)

<a id="walkthrough-rules-response-controls-block-reset-result"></a>
### 40 · 核对reset阻断

[视频 02:02](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=122.207) · [返回本节视频](#walkthrough-rules-response-controls-video)

![40 · 核对reset阻断](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-reset-result.png)

<a id="walkthrough-rules-response-controls-block-edit-close"></a>
### 41 · 返回规则切换阻断方式

[视频 02:05](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=125.957) · [返回本节视频](#walkthrough-rules-response-controls-video)

![41 · 返回规则切换阻断方式](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-edit-close.png)

<a id="walkthrough-rules-response-controls-block-close"></a>
### 42 · 选择close模式

[视频 02:08](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=128.958) · [返回本节视频](#walkthrough-rules-response-controls-video)

![42 · 选择close模式](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-close.png)

<a id="walkthrough-rules-response-controls-block-apply-close"></a>
### 43 · Apply close模式

[视频 02:12](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=132.005) · [返回本节视频](#walkthrough-rules-response-controls-video)

![43 · Apply close模式](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-apply-close.png)

<a id="walkthrough-rules-response-controls-block-close-result"></a>
### 44 · 核对close阻断

[视频 02:14](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=134.962) · [返回本节视频](#walkthrough-rules-response-controls-video)

![44 · 核对close阻断](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-close-result.png)

<a id="walkthrough-rules-response-controls-block-back"></a>
### 45 · 返回同一规则

[视频 02:18](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=138.654) · [返回本节视频](#walkthrough-rules-response-controls-video)

![45 · 返回同一规则](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-back.png)

<a id="walkthrough-rules-response-controls-block-disable"></a>
### 46 · 停用这条规则

[视频 02:21](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=141.805) · [返回本节视频](#walkthrough-rules-response-controls-video)

![46 · 停用这条规则](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-disable.png)

<a id="walkthrough-rules-response-controls-block-apply-off"></a>
### 47 · Apply停用状态

[视频 02:24](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=144.807) · [返回本节视频](#walkthrough-rules-response-controls-video)

![47 · Apply停用状态](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-apply-off.png)

<a id="walkthrough-rules-response-controls-block-restored"></a>
### 48 · 发送新请求核对源站恢复

[视频 02:27](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=147.753) · [返回本节视频](#walkthrough-rules-response-controls-video)

![48 · 发送新请求核对源站恢复](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-restored.png)

<a id="walkthrough-rules-response-controls-block-edit-next"></a>
### 49 · 返回Rules继续编辑

[视频 02:30](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=150.957) · [返回本节视频](#walkthrough-rules-response-controls-video)

![49 · 返回Rules继续编辑](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-edit-next.png)

<a id="walkthrough-rules-response-controls-encoding-remove"></a>
### 50 · 移除前一个动作

[视频 02:33](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=153.957) · [返回本节视频](#walkthrough-rules-response-controls-video)

![50 · 移除前一个动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-remove.png)

<a id="walkthrough-rules-response-controls-encoding-add"></a>
### 51 · 添加本次动作

[视频 02:36](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=156.912) · [返回本节视频](#walkthrough-rules-response-controls-video)

![51 · 添加本次动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-add.png)

<a id="walkthrough-rules-response-controls-encoding-phase"></a>
### 52 · Header选择Response

[视频 02:40](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=160.155) · [返回本节视频](#walkthrough-rules-response-controls-video)

![52 · Header选择Response](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-phase.png)

<a id="walkthrough-rules-response-controls-encoding-name"></a>
### 53 · 填写content-encoding

[视频 02:43](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=163.449) · [返回本节视频](#walkthrough-rules-response-controls-video)

![53 · 填写content-encoding](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-name.png)

<a id="walkthrough-rules-response-controls-encoding-value"></a>
### 54 · 填写gzip

[视频 02:46](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=166.368) · [返回本节视频](#walkthrough-rules-response-controls-video)

![54 · 填写gzip](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-value.png)

<a id="walkthrough-rules-response-controls-encoding-enable"></a>
### 55 · 启用当前动作

[视频 02:49](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=169.306) · [返回本节视频](#walkthrough-rules-response-controls-video)

![55 · 启用当前动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-enable.png)

<a id="walkthrough-rules-response-controls-encoding-apply"></a>
### 56 · Apply当前动作

[视频 02:52](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=172.306) · [返回本节视频](#walkthrough-rules-response-controls-video)

![56 · Apply当前动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-apply.png)

<a id="walkthrough-rules-response-controls-encoding-header-only"></a>
### 57 · 只改Header不会压缩原文

[视频 02:55](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=175.252) · [返回本节视频](#walkthrough-rules-response-controls-video)

![57 · 只改Header不会压缩原文](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-header-only.png)

<a id="walkthrough-rules-response-controls-encoding-edit-body"></a>
### 58 · 返回规则添加明确Body替换

[视频 02:58](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=178.700) · [返回本节视频](#walkthrough-rules-response-controls-video)

![58 · 返回规则添加明确Body替换](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-edit-body.png)

<a id="walkthrough-rules-response-controls-encoding-add-body"></a>
### 59 · 添加Body动作

[视频 03:01](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=181.765) · [返回本节视频](#walkthrough-rules-response-controls-video)

![59 · 添加Body动作](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-add-body.png)

<a id="walkthrough-rules-response-controls-encoding-body-phase"></a>
### 60 · Body选择Response

[视频 03:05](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=185.105) · [返回本节视频](#walkthrough-rules-response-controls-video)

![60 · Body选择Response](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-body-phase.png)

<a id="walkthrough-rules-response-controls-encoding-body"></a>
### 61 · 填写guide-encoded-body

[视频 03:08](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=188.406) · [返回本节视频](#walkthrough-rules-response-controls-video)

![61 · 填写guide-encoded-body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-body.png)

<a id="walkthrough-rules-response-controls-encoding-apply-body"></a>
### 62 · Apply Header与Body

[视频 03:11](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=191.347) · [返回本节视频](#walkthrough-rules-response-controls-video)

![62 · Apply Header与Body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-apply-body.png)

<a id="walkthrough-rules-response-controls-encoding-body-result"></a>
### 63 · 核对gzip线上字节与可读正文

[视频 03:14](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=194.357) · [返回本节视频](#walkthrough-rules-response-controls-video)

![63 · 核对gzip线上字节与可读正文](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-body-result.png)

<a id="walkthrough-rules-response-controls-encoding-back"></a>
### 64 · 返回同一规则

[视频 03:18](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=198.006) · [返回本节视频](#walkthrough-rules-response-controls-video)

![64 · 返回同一规则](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-back.png)

<a id="walkthrough-rules-response-controls-encoding-disable"></a>
### 65 · 停用这条规则

[视频 03:21](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=201.070) · [返回本节视频](#walkthrough-rules-response-controls-video)

![65 · 停用这条规则](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-disable.png)

<a id="walkthrough-rules-response-controls-encoding-apply-off"></a>
### 66 · Apply停用状态

[视频 03:24](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=204.055) · [返回本节视频](#walkthrough-rules-response-controls-video)

![66 · Apply停用状态](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-apply-off.png)

<a id="walkthrough-rules-response-controls-encoding-restored"></a>
### 67 · 发送新请求核对源站恢复

[视频 03:27](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=207.111) · [返回本节视频](#walkthrough-rules-response-controls-video)

![67 · 发送新请求核对源站恢复](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-restored.png)

<a id="walkthrough-rules-response-controls-encoding-edit-next"></a>
### 68 · 返回Rules继续编辑

[视频 03:30](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls.mp4#t=210.452) · [返回本节视频](#walkthrough-rules-response-controls-video)

![68 · 返回Rules继续编辑](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-edit-next.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-response-controls:end -->

<!-- recorded-walkthrough:rules-conflict:start -->
<a id="walkthrough-rules-conflict"></a>
## 逐步骤实操：真实第二写入者、冲突草稿与Reload恢复

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>path</code> | <code>/guide/rules-conflict</code> |
| <code>header</code> | <code>x-guide-conflict</code> |
| <code>initial</code> | <code>Guide initial / initial</code> |
| <code>localDraft</code> | <code>Guide local draft / local</code> |
| <code>externalSaved</code> | <code>Guide remote / remote</code> |
| <code>afterReloadEdit</code> | <code>Guide merged / merged</code> |
| <code>writer</code> | <code>Official SDK on localhost, named Guide rules writer; not a commercial Host</code> |
| <code>conflict</code> | <code>Local draft is retained; Reload deliberately discards it before editing the latest revision</code> |

<a id="walkthrough-rules-conflict-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4" poster="../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.vtt" default>
</video>

<a id="walkthrough-rules-conflict-01-rules"></a>
### 01 · 打开Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=0.109) · [返回本节视频](#walkthrough-rules-conflict-video)

![01 · 打开Rules](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-01-rules.png)

<a id="walkthrough-rules-conflict-02-create"></a>
### 02 · 创建初始规则

[视频 00:03](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=3.189) · [返回本节视频](#walkthrough-rules-conflict-video)

![02 · 创建初始规则](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-02-create.png)

<a id="walkthrough-rules-conflict-03-name"></a>
### 03 · 命名Guide initial

[视频 00:06](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=6.256) · [返回本节视频](#walkthrough-rules-conflict-video)

![03 · 命名Guide initial](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-03-name.png)

<a id="walkthrough-rules-conflict-04-host"></a>
### 04 · 限定127.0.0.1

[视频 00:09](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=9.246) · [返回本节视频](#walkthrough-rules-conflict-video)

![04 · 限定127.0.0.1](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-04-host.png)

<a id="walkthrough-rules-conflict-05-add-path"></a>
### 05 · 添加Path条件

[视频 00:12](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=12.249) · [返回本节视频](#walkthrough-rules-conflict-video)

![05 · 添加Path条件](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-05-add-path.png)

<a id="walkthrough-rules-conflict-06-path"></a>
### 06 · 限定冲突演示路径

[视频 00:15](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=15.604) · [返回本节视频](#walkthrough-rules-conflict-video)

![06 · 限定冲突演示路径](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-06-path.png)

<a id="walkthrough-rules-conflict-07-header"></a>
### 07 · 填写x-guide-conflict

[视频 00:18](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=18.617) · [返回本节视频](#walkthrough-rules-conflict-video)

![07 · 填写x-guide-conflict](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-07-header.png)

<a id="walkthrough-rules-conflict-08-value"></a>
### 08 · 填写initial

[视频 00:21](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=21.620) · [返回本节视频](#walkthrough-rules-conflict-video)

![08 · 填写initial](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-08-value.png)

<a id="walkthrough-rules-conflict-09-enable"></a>
### 09 · 启用初始规则

[视频 00:24](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=24.623) · [返回本节视频](#walkthrough-rules-conflict-video)

![09 · 启用初始规则](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-09-enable.png)

<a id="walkthrough-rules-conflict-10-apply"></a>
### 10 · Apply初始版本

[视频 00:27](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=27.644) · [返回本节视频](#walkthrough-rules-conflict-video)

![10 · Apply初始版本](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-10-apply.png)

<a id="walkthrough-rules-conflict-11-local-name"></a>
### 11 · 留下本地名称草稿

[视频 00:30](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=30.716) · [返回本节视频](#walkthrough-rules-conflict-video)

![11 · 留下本地名称草稿](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-11-local-name.png)

<a id="walkthrough-rules-conflict-12-local-value"></a>
### 12 · 留下未Apply的local值

[视频 00:33](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=33.724) · [返回本节视频](#walkthrough-rules-conflict-video)

![12 · 留下未Apply的local值](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-12-local-value.png)

<a id="walkthrough-rules-conflict-13-second-writer"></a>
### 13 · 检查第二写入者的实际Ask审批

[视频 00:36](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=36.742) · [返回本节视频](#walkthrough-rules-conflict-video)

![13 · 检查第二写入者的实际Ask审批](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-13-second-writer.png)

<a id="walkthrough-rules-conflict-14-allow"></a>
### 14 · 允许第二写入者保存remote

[视频 00:39](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=39.845) · [返回本节视频](#walkthrough-rules-conflict-video)

![14 · 允许第二写入者保存remote](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-14-allow.png)

<a id="walkthrough-rules-conflict-15-draft-retained"></a>
### 15 · 核对本地草稿没有被静默覆盖

[视频 00:42](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=42.902) · [返回本节视频](#walkthrough-rules-conflict-video)

![15 · 核对本地草稿没有被静默覆盖](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-15-draft-retained.png)

<a id="walkthrough-rules-conflict-16-core-remote"></a>
### 16 · 核对新请求实际使用remote

[视频 00:45](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=45.898) · [返回本节视频](#walkthrough-rules-conflict-video)

![16 · 核对新请求实际使用remote](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-16-core-remote.png)

<a id="walkthrough-rules-conflict-17-reload"></a>
### 17 · 明确Reload放弃本地草稿

[视频 00:48](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=48.894) · [返回本节视频](#walkthrough-rules-conflict-video)

![17 · 明确Reload放弃本地草稿](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-17-reload.png)

<a id="walkthrough-rules-conflict-18-merged-name"></a>
### 18 · 基于新版本填写Guide merged

[视频 00:51](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=51.969) · [返回本节视频](#walkthrough-rules-conflict-video)

![18 · 基于新版本填写Guide merged](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-18-merged-name.png)

<a id="walkthrough-rules-conflict-19-merged-value"></a>
### 19 · 填写merged值

[视频 00:54](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=54.992) · [返回本节视频](#walkthrough-rules-conflict-video)

![19 · 填写merged值](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-19-merged-value.png)

<a id="walkthrough-rules-conflict-20-apply-merged"></a>
### 20 · Apply新的编辑

[视频 00:57](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=57.996) · [返回本节视频](#walkthrough-rules-conflict-video)

![20 · Apply新的编辑](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-20-apply-merged.png)

<a id="walkthrough-rules-conflict-21-merged-request"></a>
### 21 · 核对新请求使用merged

[视频 01:01](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=61.064) · [返回本节视频](#walkthrough-rules-conflict-video)

![21 · 核对新请求使用merged](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-21-merged-request.png)

<a id="walkthrough-rules-conflict-22-disable"></a>
### 22 · 停用演示规则

[视频 01:04](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=64.044) · [返回本节视频](#walkthrough-rules-conflict-video)

![22 · 停用演示规则](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-22-disable.png)

<a id="walkthrough-rules-conflict-23-apply-disabled"></a>
### 23 · Apply停用状态

[视频 01:07](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=67.071) · [返回本节视频](#walkthrough-rules-conflict-video)

![23 · Apply停用状态](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-23-apply-disabled.png)

<a id="walkthrough-rules-conflict-24-mcp-settings"></a>
### 24 · 返回MCP设置收尾

[视频 01:10](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=70.107) · [返回本节视频](#walkthrough-rules-conflict-video)

![24 · 返回MCP设置收尾](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-24-mcp-settings.png)

<a id="walkthrough-rules-conflict-25-stop-server"></a>
### 25 · 关闭本轮MCP Server

[视频 01:13](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict.mp4#t=73.438) · [返回本节视频](#walkthrough-rules-conflict-video)

![25 · 关闭本轮MCP Server](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-25-stop-server.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-conflict:end -->

<!-- recorded-walkthrough:rules-routing:start -->
<a id="walkthrough-rules-routing"></a>
## 跨协议改道与缺失Map Local文件恢复

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>ruleName</code> | <code>Guide mapping</code> |
| <code>pathPrefix</code> | <code>/guide/map-routing</code> |
| <code>source</code> | <code>https://localhost:64268/guide/map-routing/remote-source</code> |
| <code>destination</code> | <code>HTTP 127.0.0.1:64265/guide/map-routing/remote-target</code> |
| <code>file</code> | <code>guide-map-local.json</code> |
| <code>fileBody</code> | <code>{&quot;message&quot;:&quot;guide-local-file&quot;}</code> |
| <code>missingFile</code> | <code>guide-missing.json (never created)</code> |
| <code>missingStatus</code> | <code>404</code> |
| <code>safety</code> | <code>Owned origins and product-created file only; daily CA retained</code> |
| <code>afterRemoteDisabled</code> | <code>The original HTTPS endpoint returns 404 for the unconfigured example path; the mapped HTTP target is not used</code> |

<a id="walkthrough-rules-routing-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4" poster="../media/v0.1.1-alpha.1/rules-routing/rules-routing-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-routing/rules-routing.vtt" default>
</video>

<a id="walkthrough-rules-routing-01-rules"></a>
### 01 · 打开Rules

[视频 00:00](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=0.473) · [返回本节视频](#walkthrough-rules-routing-video)

![01 · 打开Rules](../media/v0.1.1-alpha.1/rules-routing/rules-routing-01-rules.png)

<a id="walkthrough-rules-routing-02-create"></a>
### 02 · 创建Guide mapping

[视频 00:03](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=3.481) · [返回本节视频](#walkthrough-rules-routing-video)

![02 · 创建Guide mapping](../media/v0.1.1-alpha.1/rules-routing/rules-routing-02-create.png)

<a id="walkthrough-rules-routing-03-source-host"></a>
### 03 · 限定原请求Host为localhost

[视频 00:06](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=6.587) · [返回本节视频](#walkthrough-rules-routing-video)

![03 · 限定原请求Host为localhost](../media/v0.1.1-alpha.1/rules-routing/rules-routing-03-source-host.png)

<a id="walkthrough-rules-routing-04-add-path"></a>
### 04 · 添加Path条件

[视频 00:09](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=9.585) · [返回本节视频](#walkthrough-rules-routing-video)

![04 · 添加Path条件](../media/v0.1.1-alpha.1/rules-routing/rules-routing-04-add-path.png)

<a id="walkthrough-rules-routing-05-path"></a>
### 05 · 限定演示前缀

[视频 00:13](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=13.013) · [返回本节视频](#walkthrough-rules-routing-video)

![05 · 限定演示前缀](../media/v0.1.1-alpha.1/rules-routing/rules-routing-05-path.png)

<a id="walkthrough-rules-routing-06-remove-header"></a>
### 06 · 移除默认Header动作

[视频 00:16](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=16.027) · [返回本节视频](#walkthrough-rules-routing-video)

![06 · 移除默认Header动作](../media/v0.1.1-alpha.1/rules-routing/rules-routing-06-remove-header.png)

<a id="walkthrough-rules-routing-07-map-remote"></a>
### 07 · 添加Map Remote

[视频 00:19](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=19.059) · [返回本节视频](#walkthrough-rules-routing-video)

![07 · 添加Map Remote](../media/v0.1.1-alpha.1/rules-routing/rules-routing-07-map-remote.png)

<a id="walkthrough-rules-routing-08-http"></a>
### 08 · 将目标scheme明确设为http

[视频 00:22](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=22.530) · [返回本节视频](#walkthrough-rules-routing-video)

![08 · 将目标scheme明确设为http](../media/v0.1.1-alpha.1/rules-routing/rules-routing-08-http.png)

<a id="walkthrough-rules-routing-09-target-host"></a>
### 09 · 把目标Host改为127.0.0.1

[视频 00:25](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=25.608) · [返回本节视频](#walkthrough-rules-routing-video)

![09 · 把目标Host改为127.0.0.1](../media/v0.1.1-alpha.1/rules-routing/rules-routing-09-target-host.png)

<a id="walkthrough-rules-routing-10-target-port"></a>
### 10 · 填写另一个真实HTTP服务端口

[视频 00:28](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=28.612) · [返回本节视频](#walkthrough-rules-routing-video)

![10 · 填写另一个真实HTTP服务端口](../media/v0.1.1-alpha.1/rules-routing/rules-routing-10-target-port.png)

<a id="walkthrough-rules-routing-11-target-path"></a>
### 11 · 填写remote-target路径

[视频 00:31](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=31.668) · [返回本节视频](#walkthrough-rules-routing-video)

![11 · 填写remote-target路径](../media/v0.1.1-alpha.1/rules-routing/rules-routing-11-target-path.png)

<a id="walkthrough-rules-routing-12-enable"></a>
### 12 · 启用映射规则

[视频 00:34](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=34.649) · [返回本节视频](#walkthrough-rules-routing-video)

![12 · 启用映射规则](../media/v0.1.1-alpha.1/rules-routing/rules-routing-12-enable.png)

<a id="walkthrough-rules-routing-13-apply"></a>
### 13 · Apply映射

[视频 00:37](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=37.675) · [返回本节视频](#walkthrough-rules-routing-video)

![13 · Apply映射](../media/v0.1.1-alpha.1/rules-routing/rules-routing-13-apply.png)

<a id="walkthrough-rules-routing-14-remote-result"></a>
### 14 · 核对HTTPS输入到HTTP目标的真实往返

[视频 00:40](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=40.716) · [返回本节视频](#walkthrough-rules-routing-video)

![14 · 核对HTTPS输入到HTTP目标的真实往返](../media/v0.1.1-alpha.1/rules-routing/rules-routing-14-remote-result.png)

<a id="walkthrough-rules-routing-15-edit"></a>
### 15 · 返回映射规则

[视频 00:44](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=44.263) · [返回本节视频](#walkthrough-rules-routing-video)

![15 · 返回映射规则](../media/v0.1.1-alpha.1/rules-routing/rules-routing-15-edit.png)

<a id="walkthrough-rules-routing-16-disable"></a>
### 16 · 停用Map Remote

[视频 00:47](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=47.349) · [返回本节视频](#walkthrough-rules-routing-video)

![16 · 停用Map Remote](../media/v0.1.1-alpha.1/rules-routing/rules-routing-16-disable.png)

<a id="walkthrough-rules-routing-17-apply-off"></a>
### 17 · Apply停用

[视频 00:50](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=50.369) · [返回本节视频](#walkthrough-rules-routing-video)

![17 · Apply停用](../media/v0.1.1-alpha.1/rules-routing/rules-routing-17-apply-off.png)

<a id="walkthrough-rules-routing-18-original-result"></a>
### 18 · 停用后恢复原HTTPS端点的404

[视频 00:53](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=53.387) · [返回本节视频](#walkthrough-rules-routing-video)

![18 · 停用后恢复原HTTPS端点的404](../media/v0.1.1-alpha.1/rules-routing/rules-routing-18-original-result.png)

<a id="walkthrough-rules-routing-19-file-source"></a>
### 19 · 获取可以由产品保存的公开正文

[视频 00:56](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=56.647) · [返回本节视频](#walkthrough-rules-routing-video)

![19 · 获取可以由产品保存的公开正文](../media/v0.1.1-alpha.1/rules-routing/rules-routing-19-file-source.png)

<a id="walkthrough-rules-routing-20-save-file"></a>
### 20 · 产品保存guide-map-local.json

[视频 01:09](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=69.992) · [返回本节视频](#walkthrough-rules-routing-video)

![20 · 产品保存guide-map-local.json](../media/v0.1.1-alpha.1/rules-routing/rules-routing-20-save-file.png)

<a id="walkthrough-rules-routing-21-check-file"></a>
### 21 · 核对实际产品文件

[视频 01:14](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=74.432) · [返回本节视频](#walkthrough-rules-routing-video)

![21 · 核对实际产品文件](../media/v0.1.1-alpha.1/rules-routing/rules-routing-21-check-file.png)

<a id="walkthrough-rules-routing-22-edit-local"></a>
### 22 · 返回规则准备Map Local

[视频 01:17](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=77.388) · [返回本节视频](#walkthrough-rules-routing-video)

![22 · 返回规则准备Map Local](../media/v0.1.1-alpha.1/rules-routing/rules-routing-22-edit-local.png)

<a id="walkthrough-rules-routing-23-local-host"></a>
### 23 · 将本段原请求Host设为127.0.0.1

[视频 01:20](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=80.471) · [返回本节视频](#walkthrough-rules-routing-video)

![23 · 将本段原请求Host设为127.0.0.1](../media/v0.1.1-alpha.1/rules-routing/rules-routing-23-local-host.png)

<a id="walkthrough-rules-routing-24-remove-remote"></a>
### 24 · 移除Map Remote动作

[视频 01:23](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=83.486) · [返回本节视频](#walkthrough-rules-routing-video)

![24 · 移除Map Remote动作](../media/v0.1.1-alpha.1/rules-routing/rules-routing-24-remove-remote.png)

<a id="walkthrough-rules-routing-25-local"></a>
### 25 · 添加Map Local

[视频 01:26](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=86.515) · [返回本节视频](#walkthrough-rules-routing-video)

![25 · 添加Map Local](../media/v0.1.1-alpha.1/rules-routing/rules-routing-25-local.png)

<a id="walkthrough-rules-routing-26-missing-name"></a>
### 26 · 填写本轮不存在的文件名

[视频 01:29](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=89.864) · [返回本节视频](#walkthrough-rules-routing-video)

![26 · 填写本轮不存在的文件名](../media/v0.1.1-alpha.1/rules-routing/rules-routing-26-missing-name.png)

<a id="walkthrough-rules-routing-27-enable-local"></a>
### 27 · 启用Map Local

[视频 01:32](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=92.863) · [返回本节视频](#walkthrough-rules-routing-video)

![27 · 启用Map Local](../media/v0.1.1-alpha.1/rules-routing/rules-routing-27-enable-local.png)

<a id="walkthrough-rules-routing-28-apply-local"></a>
### 28 · Apply本地映射

[视频 01:35](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=95.873) · [返回本节视频](#walkthrough-rules-routing-video)

![28 · Apply本地映射](../media/v0.1.1-alpha.1/rules-routing/rules-routing-28-apply-local.png)

<a id="walkthrough-rules-routing-29-missing-result"></a>
### 29 · 核对缺失文件的真实404

[视频 01:38](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=98.933) · [返回本节视频](#walkthrough-rules-routing-video)

![29 · 核对缺失文件的真实404](../media/v0.1.1-alpha.1/rules-routing/rules-routing-29-missing-result.png)

<a id="walkthrough-rules-routing-30-correct-rule"></a>
### 30 · 返回规则修正路径

[视频 01:42](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=102.225) · [返回本节视频](#walkthrough-rules-routing-video)

![30 · 返回规则修正路径](../media/v0.1.1-alpha.1/rules-routing/rules-routing-30-correct-rule.png)

<a id="walkthrough-rules-routing-31-correct-file"></a>
### 31 · 选择同流程产品保存的实际路径

[视频 01:45](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=105.348) · [返回本节视频](#walkthrough-rules-routing-video)

![31 · 选择同流程产品保存的实际路径](../media/v0.1.1-alpha.1/rules-routing/rules-routing-31-correct-file.png)

<a id="walkthrough-rules-routing-32-apply-correct"></a>
### 32 · Apply正确路径

[视频 01:48](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=108.348) · [返回本节视频](#walkthrough-rules-routing-video)

![32 · Apply正确路径](../media/v0.1.1-alpha.1/rules-routing/rules-routing-32-apply-correct.png)

<a id="walkthrough-rules-routing-33-local-result"></a>
### 33 · 核对实际文件替换与源站未调用

[视频 01:51](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=111.383) · [返回本节视频](#walkthrough-rules-routing-video)

![33 · 核对实际文件替换与源站未调用](../media/v0.1.1-alpha.1/rules-routing/rules-routing-33-local-result.png)

<a id="walkthrough-rules-routing-34-final-rule"></a>
### 34 · 返回规则收尾

[视频 01:54](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=114.616) · [返回本节视频](#walkthrough-rules-routing-video)

![34 · 返回规则收尾](../media/v0.1.1-alpha.1/rules-routing/rules-routing-34-final-rule.png)

<a id="walkthrough-rules-routing-35-final-disable"></a>
### 35 · 停用映射规则

[视频 01:57](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=117.740) · [返回本节视频](#walkthrough-rules-routing-video)

![35 · 停用映射规则](../media/v0.1.1-alpha.1/rules-routing/rules-routing-35-final-disable.png)

<a id="walkthrough-rules-routing-36-final-apply"></a>
### 36 · Apply最终停用

[视频 02:00](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=120.768) · [返回本节视频](#walkthrough-rules-routing-video)

![36 · Apply最终停用](../media/v0.1.1-alpha.1/rules-routing/rules-routing-36-final-apply.png)

<a id="walkthrough-rules-routing-37-certificates"></a>
### 37 · 进入Certificates恢复本轮TLS设置

[视频 02:03](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=123.810) · [返回本节视频](#walkthrough-rules-routing-video)

![37 · 进入Certificates恢复本轮TLS设置](../media/v0.1.1-alpha.1/rules-routing/rules-routing-37-certificates.png)

<a id="walkthrough-rules-routing-38-mitm-off"></a>
### 38 · 关闭本轮解密

[视频 02:06](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=126.865) · [返回本节视频](#walkthrough-rules-routing-video)

![38 · 关闭本轮解密](../media/v0.1.1-alpha.1/rules-routing/rules-routing-38-mitm-off.png)

<a id="walkthrough-rules-routing-39-remove-exception"></a>
### 39 · 移除localhost源站例外

[视频 02:09](../media/v0.1.1-alpha.1/rules-routing/rules-routing.mp4#t=129.883) · [返回本节视频](#walkthrough-rules-routing-video)

![39 · 移除localhost源站例外](../media/v0.1.1-alpha.1/rules-routing/rules-routing-39-remove-exception.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:rules-routing:end -->
