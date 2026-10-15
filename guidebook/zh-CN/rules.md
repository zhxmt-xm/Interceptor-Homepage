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

2. 在根工具栏新建规则；空白区域菜单是另一入口，该入口仍待配图。

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

9. 检查未填写问题，补齐后开启规则；本图是完整规则的启用状态，校验失败分支仍待配图。

   ![启用本次完整规则](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

10. 点击 Apply，等待成功。

    ![实际 Apply 后的规则状态](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

11. 让外部客户端经过代理请求 `http://127.0.0.1:54561/guide/rules/order`，检查命中。`54561` 只是录制时的动态端口，实际使用自己的服务。

    ![发送匹配请求后的命中](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

12. 回到 Capture 检查实际请求头；效果标记的独立展开与跳转仍待配图。

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

    **待配图**：本例证明已配置的八条件 AND，不是所有匹配运算符、正则失败、大小写或 MIME 通配分支的逐项录制。

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

4. 检查动作顺序，启用再 Apply。多个动作的排序操作仍待配图，本次不要自行加入无关动作。

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

**待配图**：本轮 append/remove 核对的是请求 Header；响应方向的 remove/append 仍需独立画面，不能用 `Guide matchers` 的响应 `set` 结果代替。

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

   **待配图**：本段未单独录制 Body 与额外 Header/编码组合编辑，不把正文输入图作为编码正确的证明。

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

    **待配图**：现有 Body 图只展示 Final，没有录制版本来回切换；不可用原文不能冒充空原文。

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

4. 正文填 `{"message":"guide maintenance"}`；如接口还需要响应 Header，应明确填写，额外 Header 编辑仍待配图。

   ![模拟响应正文的实际输入](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-body.png)

5. 启用规则，再 Apply。

   ![启用模拟响应](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-09-enable.png)

   ![Apply 模拟响应](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-10-apply.png)

6. 让经过代理的客户端访问匹配接口，核对 `503` 与 `guide maintenance`，而不是源站正常响应。

   ![实际模拟响应检查点](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-11-result.png)

7. 测试完停用该规则并 Apply，再发请求确认恢复正常路径。

   **待配图**：该片段没有单独展示停用 Synthetic response 后的正常请求；Header 规则停用图不能替代。

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

   **待配图**：外部服务的启动配置不在 App 录制内；下面只展示已经运行的本机服务，端口由录制环境分配。

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

6. 移除默认 Header 后选择 Block。可用模式为 `reset` 或 `close`；两种模式分别切换的分支仍待配图，不把一次阻断当作两种都已录制。

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

    **待配图**：Delay/Block 片段没有分别录制停用后的恢复请求；断点结束图仅覆盖对应断点规则。

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

8. 再将 `Guide first` 移入目录；目录最多三级，三级边界的操作仍待配图。

   ![再移动 Guide first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-09-move-first.png)

9. Apply 保存目录结构。

   ![保存实际目录层级](../media/v0.1.1-alpha.1/rules-organization/rules-organization-10-apply-folder.png)

10. 名称管理改用独立的 `rules-operations`：将前面编辑的 `Guide operations` 重命名为 `Guide operations done`。这是规则名称，不是上述 `Guide rules` 目录改名。

    ![实际重命名为 Guide operations done](../media/v0.1.1-alpha.1/rules-operations/rules-operations-20-rename.png)

11. 在名称搜索框定位这条规则，不按请求 URL 搜索。

    ![按名称查找实际演示规则](../media/v0.1.1-alpha.1/rules-operations/rules-operations-21-search.png)

    **待配图**：目录名称搜索、已有目录重命名和三级目录边界不由这次规则名称操作覆盖。

12. 演示结束保留但停用 `Guide operations done`。

    ![实际保留并停用演示规则](../media/v0.1.1-alpha.1/rules-operations/rules-operations-22-disable.png)

13. Apply 停用状态。

    ![实际保存停用，而不是删除](../media/v0.1.1-alpha.1/rules-operations/rules-operations-23-apply-disabled.png)

14. 需要删除节点时，先区分上述空树限制，不把删除最后一条后的空界面当作已保存。

    **blocked（产品限制）**：alpha.1 空树 dirty 且无 Apply，最后一条规则的持久化删除实测失败。非最后一条规则、目录删除及删除后的请求仍待配图；上面的停用结果不证明任何删除已经持久化。

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

   **待配图**：尚未录制规则节点菜单的 Capture 跳转。

3. 检查真实 Header/Body 结果。下图分别来自 Header 示例与独立的 `Guide body`，不是同一次请求；效果标记的展开仍待配图。

   ![Header 示例的实际请求头](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

   ![Body 示例的实际 Final](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

4. 若 Apply 提示版本冲突，先保留需要的编辑信息，再显式使用 Reload 获取最新规则并重新编辑；Reload 会放弃当前草稿。

   **待配图 / blocked**：没有双写入者引发冲突与 Reload 的录制，普通 Apply 成功不能证明冲突恢复。

5. 再次 Apply 并核对，不连续重试旧草稿覆盖别人或 Agent/MCP 的更新。

   **待配图**：没有上述冲突后的重新编辑及 Apply 往返。

**预期结果**：确认实际生效的结果，而不是只根据规则名称或命中数推断具体字节。

**关键说明**：Recording 暂停时规则仍可能生效，但 Capture 不产生新的检查记录。状态栏的保存版本与编辑草稿不同，冲突也不是规则一定无效。

<a id="import-export"></a>
## 导入和导出规则

1. 检查规则中的地址、正文和本地路径是否适合分享。

   **待配图**：逐字段隐私检查没有独立画面。下面的文件操作准确来自 `Guide rules` 目录中的排序规则，不包括其他示例文件。

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
