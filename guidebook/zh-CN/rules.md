# Rules：修改后续匹配的流量

[教程目录](../README.md) · [Capture](capture.md) · [Breakpoints](breakpoints.md)

## 先区分规则与录制

- Rules 作用于真实代理转发路径，不能改写已经完成的历史请求。
- 暂停 Recording 不会停用 Rules；只是新流量不再被记录。
- Composer 直接出站，不应用这些代理规则。验证规则应使用经过代理的外部客户端。
- 目录只是组织方式，不会自动成为匹配条件。

<a id="first-rule"></a>
## 创建、启用并应用第一条规则

只给一组测试请求添加一个不含敏感信息的 Header。

代理就绪；为了观察结果，开启 Recording。使用自己有权访问的测试地址。图示服务为 `http://127.0.0.1:62029`；下面 `E2E action variants` 的路径都基于该服务，实际操作时换成自己服务的地址和端口。

1. <a id="walkthrough"></a><a id="walkthrough-01-open"></a>打开 Rules。

   ![尚未创建规则的 Rules](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-002.png)

2. <a id="walkthrough-02-create"></a>点击规则列表上方的加号新建规则。也可以在列表空白处打开菜单并选择新建；两种入口创建的是同一类规则。

   ![新规则默认未启用，Host 和 Header 尚未填写](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-004.png)

3. <a id="walkthrough-03-name"></a>在红框 1 的名称框中填 `E2E action variants`。列表中的空目录 `New folder` 不参与匹配。

   ![填写规则名称 E2E action variants](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-006.annotated.png)

4. <a id="walkthrough-04-host"></a>在红框 1 的 Host 输入框填 `127.0.0.1`，不是完整 URL。

   ![将 Host 限制为本机地址](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-007.annotated.png)

5. <a id="walkthrough-05-path-condition"></a>点击 Add condition，再选择红框 1 的 Path，新增路径条件。

   ![条件菜单中的 Path](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-008.annotated.png)

6. <a id="walkthrough-06-path"></a>在红框 1 填 `/e2e/rules/actions`，只处理这组测试路径。

   ![填写测试路径范围](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-010.annotated.png)

7. <a id="walkthrough-07-header-name"></a>保留 Header 动作的 `request` 阶段和 `Set` 操作，在红框 1 的名称框填 `x-e2e-action`。

   ![填写请求 Header 名称](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-011.annotated.png)

8. <a id="walkthrough-08-header-value"></a>在红框 1 的值框填 `from-rule`。

   ![填写 Header 值 from-rule](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-012.annotated.png)

9. <a id="walkthrough-09-enable"></a>补齐必填字段，再打开红框 1 的规则开关。此时显示 Enabled，但底部仍是 Unsaved changes；开关不等于已经保存。

   ![规则已启用但尚未保存](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-013.annotated.png)

10. <a id="walkthrough-10-apply"></a>点击右上角 Save，等红框 1 的底部状态变为 Rule set applied。规则现在才应用到后续请求。

    ![保存后状态变为 Rule set applied](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-018.annotated.png)

11. <a id="walkthrough-11-hit"></a>让外部客户端通过代理 GET `/e2e/rules/actions/request-set`，带上原始 Header `x-e2e-action: original`。请求完成后查看 `E2E action variants` 的规则行，命中数从 `0` 增为 `1`。

    ![第一条匹配请求后规则命中数为 1](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-022.png)

12. <a id="walkthrough-12-capture"></a>回到 Capture，在红框 1 的 Keyword 中输入 `/e2e/rules/actions/request-set`，选中红框 2 的新请求行，不要用历史行判断刚保存的配置。

    ![按路径定位并选中第一条匹配请求](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-019.annotated.png)

    打开 Headers，在下图红框 1 的 Request Headers 中核对 `x-e2e-action: from-rule` 旁的 Rule set。原值 `original` 带划线和 Rule replaced，表示已被覆盖，不是仍向源站发送两个值。可点击的行内来源标记用于返回规则，不是独立的展开面板。

    ![请求 Header 显示原值被覆盖和最终 Set 值](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-020.annotated.png)

13. <a id="walkthrough-13-nonmatching"></a>再请求不含 `/e2e/rules/actions` 的路径，确认没有同样的 Header 改写。不要用已完成的历史请求判断新配置。

14. <a id="walkthrough-14-disable"></a>如果不继续下面的动作练习，关闭 `E2E action variants` 并 Save；再次请求，确认恢复原始 Header。

- 普通新规则和从 Capture 创建的改写草稿默认未启用；Capture 的快捷 Breakpoint 是例外，会创建、启用并立即 Apply。
- 字段未填写完整时不能启用，存在未填写项时不能 Apply。空条件集不是“匹配所有请求”。
- 编辑草稿、开关和排序之后，要检查 Apply 状态，不把屏幕修改当作 Core 已经应用。
- 未填写校验不等于所有正则、JSON 或本地文件一定可用；执行结果仍要用真实请求核对。

<a id="matchers"></a>
## 选择匹配条件

下面使用 `E2E hierarchy rule`。同一规则中的条件为 AND，必须全部满足才执行。示例服务端口为 `53161`；换成自己的接口时，同时修改 URL 条件和客户端请求地址。本例只向自己的本机测试服务发请求。

1. <a id="walkthrough-rules-matchers"></a><a id="walkthrough-rules-matchers-01-rules"></a><a id="walkthrough-rules-matchers-02-create"></a>按[目录操作](#order)在三级目录中创建规则，使用节点菜单的 Rename，在红框 1 输入 `E2E hierarchy rule`，按 Enter 确认。

   ![在目录中命名 E2E hierarchy rule](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-014.annotated.png)

2. <a id="walkthrough-rules-matchers-03-host"></a>在第一张图红框 1 的 Host 框填 `127.0.0.1`。默认请求 Header 动作使用 `Set`，名称填 `x-rules-e2e`，第二张图红框 1 的值框填 `active`。启用并 Save，随后在同一条规则上逐项增加条件。

   ![填写 Host 条件](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-017.annotated.png)

   ![完成请求 Header 的 active 值](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-019.annotated.png)

3. <a id="walkthrough-rules-matchers-04-method-add"></a><a id="walkthrough-rules-matchers-05-method"></a>点击 Add condition，添加 Method，在红框 1 的方法框填 `GET`。

   ![Method 条件填写 GET](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-033.annotated.png)

4. <a id="walkthrough-rules-matchers-06-path-add"></a><a id="walkthrough-rules-matchers-07-path"></a>添加 Path，在红框 1 填 `/e2e/rules/all-conditions`。

   ![限定 all-conditions 路径](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-037.annotated.png)

5. <a id="walkthrough-rules-matchers-08-url-add"></a><a id="walkthrough-rules-matchers-09-url"></a>添加 URL，在红框 1 填 `http://127.0.0.1:53161/e2e/rules/all-conditions?case=and`。

   ![填写完整 URL 条件](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-041.annotated.png)

6. <a id="walkthrough-rules-matchers-10-query-add"></a><a id="walkthrough-rules-matchers-11-query"></a>添加 Query，名称填 `case`，在红框 1 的值框填 `and`。

   ![Query 条件 case=and](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-046.annotated.png)

7. <a id="walkthrough-rules-matchers-12-header-add"></a><a id="walkthrough-rules-matchers-13-header"></a>添加 Header 条件，选择 `request`，名称填 `x-e2e-matcher`，红框 1 的值填 `present`。这是匹配条件，不是下方的改写动作。

   ![请求 Header 条件 x-e2e-matcher](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-051.annotated.png)

8. <a id="walkthrough-rules-matchers-14-status-add"></a><a id="walkthrough-rules-matchers-15-status"></a>添加 Status，下限和上限都填 `200`；红框 1 标出上限框。

   ![响应状态范围 200 到 200](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-056.annotated.png)

9. <a id="walkthrough-rules-matchers-16-mime-add"></a><a id="walkthrough-rules-matchers-17-mime"></a>添加 MIME，选择 `response`，在红框 1 填 `application/json`。

   ![响应 MIME 条件](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-060.annotated.png)

10. <a id="walkthrough-rules-matchers-18-effect-phase"></a>把下方 Header 动作的红框 1 阶段切换为 `response`。Status 和响应 MIME 要等响应头到达后才能判定，不能据此提前改写请求。

    ![将效果 Header 切换到响应阶段](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-062.annotated.png)

11. <a id="walkthrough-rules-matchers-19-effect-name"></a><a id="walkthrough-rules-matchers-20-effect-value"></a>确认动作仍是 `Set x-rules-e2e: active`，不要误用匹配条件中的 `x-e2e-matcher: present`。

12. <a id="walkthrough-rules-matchers-21-enable"></a><a id="walkthrough-rules-matchers-22-apply"></a>保持规则启用并点击 Save，等红框 1 的状态变为 Rule set applied。此时八类条件和响应动作一起生效。

    ![八类 AND 条件保存完成](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-063.annotated.png)

13. <a id="walkthrough-rules-matchers-23-match"></a>向上述 URL 发送带 `x-e2e-matcher: present` 的 GET。在 Capture 筛选 `/e2e/rules/all-conditions` 并选中本次 GET，红框 1 的 Response Headers 应同时显示 `application/json` 和 `x-rules-e2e: active`。

    ![GET 满足全部条件时的响应 Header](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-065.annotated.png)

14. <a id="walkthrough-rules-matchers-24-no-match"></a>只把方法改为 POST 再请求同一 URL，在 Capture 选择新的 POST 行，不要仍查看上一条 GET。即使响应仍为 `200`，红框 1 的 Response Headers 中也没有 `x-rules-e2e`。

    ![POST 不满足 Method 条件时没有相同改写](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-068.annotated.png)

15. <a id="walkthrough-rules-matching-modes"></a><a id="walkthrough-rules-matching-modes-01-rules"></a><a id="walkthrough-rules-matching-modes-02-create"></a><a id="walkthrough-rules-matching-modes-03-name"></a><a id="walkthrough-rules-matching-modes-04-host"></a><a id="walkthrough-rules-matching-modes-05-path-condition"></a><a id="walkthrough-rules-matching-modes-06-path-value"></a><a id="walkthrough-rules-matching-modes-07-header"></a><a id="walkthrough-rules-matching-modes-08-value"></a><a id="walkthrough-rules-matching-modes-09-enable"></a><a id="walkthrough-rules-matching-modes-10-contains"></a><a id="walkthrough-rules-matching-modes-contains-capture"></a><a id="walkthrough-rules-matching-modes-contains-request"></a><a id="walkthrough-rules-matching-modes-contains-headers"></a><a id="walkthrough-rules-matching-modes-contains-rules"></a><a id="walkthrough-rules-matching-modes-11-case-sensitive"></a><a id="walkthrough-rules-matching-modes-12-apply-case"></a><a id="walkthrough-rules-matching-modes-case-sensitive-capture"></a><a id="walkthrough-rules-matching-modes-case-sensitive-request"></a><a id="walkthrough-rules-matching-modes-case-sensitive-headers"></a><a id="walkthrough-rules-matching-modes-case-sensitive-rules"></a><a id="walkthrough-rules-matching-modes-13-exact"></a><a id="walkthrough-rules-matching-modes-14-apply-exact"></a><a id="walkthrough-rules-matching-modes-exact-negative-capture"></a><a id="walkthrough-rules-matching-modes-exact-negative-request"></a><a id="walkthrough-rules-matching-modes-exact-negative-headers"></a><a id="walkthrough-rules-matching-modes-exact-negative-rules"></a><a id="walkthrough-rules-matching-modes-exact-positive-capture"></a><a id="walkthrough-rules-matching-modes-exact-positive-request"></a><a id="walkthrough-rules-matching-modes-exact-positive-headers"></a><a id="walkthrough-rules-matching-modes-exact-positive-rules"></a><a id="walkthrough-rules-matching-modes-15-regex"></a><a id="walkthrough-rules-matching-modes-16-invalid-regex"></a><a id="walkthrough-rules-matching-modes-16a-apply-invalid"></a><a id="walkthrough-rules-matching-modes-invalid-regex-capture"></a><a id="walkthrough-rules-matching-modes-invalid-regex-request"></a><a id="walkthrough-rules-matching-modes-invalid-regex-headers"></a><a id="walkthrough-rules-matching-modes-invalid-regex-rules"></a><a id="walkthrough-rules-matching-modes-17-valid-regex"></a><a id="walkthrough-rules-matching-modes-18-apply-regex"></a><a id="walkthrough-rules-matching-modes-regex-positive-capture"></a><a id="walkthrough-rules-matching-modes-regex-positive-request"></a><a id="walkthrough-rules-matching-modes-regex-positive-headers"></a><a id="walkthrough-rules-matching-modes-regex-positive-rules"></a><a id="walkthrough-rules-matching-modes-regex-negative-capture"></a><a id="walkthrough-rules-matching-modes-regex-negative-request"></a><a id="walkthrough-rules-matching-modes-regex-negative-headers"></a><a id="walkthrough-rules-matching-modes-regex-negative-rules"></a><a id="walkthrough-rules-matching-modes-19-ignore-case"></a><a id="walkthrough-rules-matching-modes-20-apply-ignore-case"></a><a id="walkthrough-rules-matching-modes-regex-ignore-case-capture"></a><a id="walkthrough-rules-matching-modes-regex-ignore-case-request"></a><a id="walkthrough-rules-matching-modes-regex-ignore-case-headers"></a><a id="walkthrough-rules-matching-modes-regex-ignore-case-rules"></a><a id="walkthrough-rules-matching-modes-21-response-action"></a><a id="walkthrough-rules-matching-modes-22-mime-condition"></a><a id="walkthrough-rules-matching-modes-23-mime-wildcard"></a><a id="walkthrough-rules-matching-modes-24-apply-mime"></a><a id="walkthrough-rules-matching-modes-mime-json-capture"></a><a id="walkthrough-rules-matching-modes-mime-json-request"></a><a id="walkthrough-rules-matching-modes-mime-json-headers"></a><a id="walkthrough-rules-matching-modes-mime-json-rules"></a><a id="walkthrough-rules-matching-modes-mime-text-capture"></a><a id="walkthrough-rules-matching-modes-mime-text-request"></a><a id="walkthrough-rules-matching-modes-mime-text-headers"></a><a id="walkthrough-rules-matching-modes-mime-text-rules"></a><a id="walkthrough-rules-matching-modes-25-disable"></a><a id="walkthrough-rules-matching-modes-26-apply-disabled"></a>需要其他 Host、Path 或 URL 匹配方式时，按界面选择精确、包含或正则并核对大小写选项，再分别验证。

    1. 移除其他条件，只保留 Host 和 Path；在红框 1 把 Path 改为 `/e2e/rules/modes/Case`，保留响应 Header 动作。默认 contains 忽略大小写；Save 后请求 `/e2e/rules/modes/case/extra`，响应应带 `x-rules-e2e: active`。

       ![为匹配模式比较填写 Path](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-071.annotated.png)

       在 Capture 选择本次小写路径请求，下图红框 1 的 Response Headers 包含 `x-rules-e2e: active`。

       ![contains 忽略大小写时的匹配结果](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-073.annotated.png)

    2. 打开红框 1 的 Aa 大小写选项并 Save。同一个小写 `case/extra` 请求不再匹配。

       ![开启 Aa 大小写敏感](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-076.annotated.png)

       选择后发出的同路径请求，下图红框 1 的 Response Headers 不再包含 `x-rules-e2e`；两条历史请求不会因当前设置改变而相互覆盖。

       ![Aa 开启后的新请求不匹配小写路径](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-078.annotated.png)

    3. 点击红框 1 的精确匹配按钮并 Save。`/e2e/rules/modes/Case` 匹配，增加 `/extra` 后不匹配。

       ![开启精确匹配](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-081.annotated.png)

       依次选择这两条新请求：第一张结果图红框 1 的响应头没有 `x-rules-e2e`，第二张红框 1 则有 `active`。

       ![精确匹配拒绝额外的路径后缀](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-083.annotated.png)

       ![完整路径相同时精确匹配成功](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-086.annotated.png)

    4. 切换到正则按钮 `.*`，在 Path 填 `[` 并 Save。无效正则不会匹配请求；保存成功不代表表达式可用。

       ![无效正则输入](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-089.png)

       再请求 `/e2e/rules/modes/Case` 并选择这条新记录，结果图红框 1 的 Response Headers 没有 `x-rules-e2e`。

       ![无效正则保存后仍不匹配请求](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-091.annotated.png)

    5. 在红框 1 修正为 `^/e2e/rules/modes/Case/[0-9]+$` 并 Save。末尾 `/123` 匹配，`/letters` 不匹配；Aa 仍控制大小写，需要忽略大小写时关闭它再保存。

       ![匹配数字路径的正则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-094.annotated.png)

       在 Capture 分别选择 `/123` 和 `/letters`。两张结果图的红框 1 都是 Response Headers：数字路径有 `active`，字母路径没有该 Header。

       ![数字路径满足正则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-096.annotated.png)

       ![字母路径不满足正则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-099.annotated.png)

    6. 添加响应 MIME 条件，在红框 1 填 `application/*` 并 Save。让 `/Case/124` 返回 `application/json`、`/Case/125` 返回 `text/plain`，前者匹配，后者不匹配。结束时关闭规则并 Save。

       ![用 MIME 通配符限定响应类型](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-102.annotated.png)

       两张结果图红框 1 的 Response Headers 同时展示内容类型和匹配结果：`application/json` 增加 `active`，`text/plain` 不增加。

       ![application/json 满足 MIME 通配符](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-104.annotated.png)

       ![text/plain 不满足 MIME 通配符](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-107.annotated.png)

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

响应状态、响应 Header、响应 MIME 不能在请求尚未收到响应时提前判定。正则无法编译时可能不匹配，不把没有缺项提示当作正则已经测试成功。

<a id="headers-query"></a>
## 修改 Header 和 Query

1. <a id="walkthrough-rules-operations"></a><a id="walkthrough-rules-operations-01-rules"></a><a id="walkthrough-rules-operations-02-new"></a><a id="walkthrough-rules-operations-03-scope"></a><a id="walkthrough-rules-operations-04-header-name"></a>继续编辑第一节的 `E2E action variants`：Host 为 `127.0.0.1`，Path 为 `/e2e/rules/actions`，请求 Header 为 `x-e2e-action`，值为 `from-rule`。下面每次替换当前动作，不叠加无关动作。

2. <a id="walkthrough-rules-operations-05-append"></a><a id="walkthrough-rules-operations-06-enable"></a><a id="walkthrough-rules-operations-07-apply"></a><a id="walkthrough-rules-operations-08-appended"></a>在红框 1 的操作框选择 Append，保留 `from-rule`，保持规则启用并 Save。发送带 `x-e2e-action: original` 的 `/e2e/rules/actions/request-append`，源站应同时收到 `original` 和 `from-rule`，而不是只收到替换值。

   ![请求 Header 选择 Append](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-024.annotated.png)

   回到 Capture，用 Keyword 定位并选中新请求。在下图红框 1 的 Request Headers 中，`original` 没有被划掉，新增的 `from-rule` 带 Rule appended 标记。

   ![请求 Header 同时保留原值和追加值](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-027.annotated.png)

3. <a id="walkthrough-rules-operations-09-remove"></a><a id="walkthrough-rules-operations-10-apply-remove"></a><a id="walkthrough-rules-operations-11-removed"></a>将红框 1 改为 Remove，名称仍是 `x-e2e-action`，此时不需要值。Save 后重新发送带该 Header 的 `/e2e/rules/actions/request-remove`，源站不应再收到它。

   ![请求 Header 选择 Remove](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-031.annotated.png)

   在 Capture 选择新请求，检查下图红框 1 的 Request Headers。`x-e2e-action` 的原值带划线和 Rule removed；这条历史说明不代表 Header 仍被转发。

   ![请求 Header 的原值显示 Rule removed](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-034.annotated.png)

4. <a id="walkthrough-rules-actions"></a><a id="walkthrough-rules-actions-query-01-rules"></a><a id="walkthrough-rules-actions-query-02-create"></a><a id="walkthrough-rules-actions-query-03-name"></a><a id="walkthrough-rules-actions-query-04-host"></a><a id="walkthrough-rules-actions-query-05-path"></a><a id="walkthrough-rules-actions-query-06-remove"></a><a id="walkthrough-rules-actions-query-07-action"></a><a id="walkthrough-rules-operations-12-query-action"></a>测试 Query 时，保留同一条规则的 Host 和 Path。点击旧 Header 动作右上角的 ×，再打开 Add action，选择红框 1 的 Rewrite query。

   ![移除旧动作后添加 Rewrite query](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-061.annotated.png)

5. <a id="walkthrough-rules-actions-query-08-values"></a>Query 操作选 Set，名称填 `entry`，红框 1 的替换值填 `rewritten`。

   ![Query 设置 entry=rewritten](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-064.annotated.png)

6. <a id="walkthrough-rules-actions-query-09-enable"></a><a id="walkthrough-rules-actions-query-10-apply"></a><a id="walkthrough-rules-actions-query-11-result"></a>保持规则启用，点击 Save，等红框 1 显示 Rule set applied。请求 `/e2e/rules/actions/query-set?entry=original`，核对源站收到的地址变为 `/e2e/rules/actions/query-set?entry=rewritten`。

   ![Query Set 保存完成](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-065.annotated.png)

   在 Capture 用 Keyword 定位这条新请求，打开 Request。下图红框 1 的 Query String Parameters 仍显示入站的 `entry=original`，这里不是最终转发值。

   ![Query 面板保留客户端入站参数](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-067.annotated.png)

   为了看到源站实际收到的地址，让测试接口在响应 JSON 的 `path` 字段回显收到的路径。打开 Response，选择 Raw，再点击下图红框 1 的 Copy。完整响应中的 `path` 应为 `/e2e/rules/actions/query-set?entry=rewritten`。

   ![复制源站响应核对 Query Set 后的完整路径](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-068.annotated.png)

7. <a id="walkthrough-rules-operations-13-query-remove"></a>在红框 1 选择 Remove，参数名称仍为 `entry`；值框会消失，不用填写空字符串代替删除。

   ![Query 切换到 Remove](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-071.annotated.png)

8. <a id="walkthrough-rules-operations-14-apply-query"></a><a id="walkthrough-rules-operations-15-query-result"></a>点击 Save，检查红框 1 的已应用状态。请求 `/e2e/rules/actions/query-remove?entry=original`，源站收到的地址应为 `/e2e/rules/actions/query-remove`。

   ![Query Remove 保存完成](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-072.annotated.png)

   在 Capture 选择新请求，打开 Request。下图红框 1 仍显示入站的 `entry=original`；不要因此误判 Remove 没有生效。

   ![删除 Query 后仍能查看原始入站参数](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-074.annotated.png)

   打开 Response 的 Raw，点击下图红框 1 的 Copy，核对响应 JSON 的完整 `path` 为 `/e2e/rules/actions/query-remove`，不再含 `entry` 参数。结束后返回规则，关闭并 Save。

   ![复制响应核对 entry 已从转发路径移除](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-075.annotated.png)

设置同名字段与追加字段不是同一件事。多个动作可能先后修改同一位置；后面的结果可能覆盖前面的结果。

编辑器提供动作添加和移除，没有独立的动作卡片拖拽排序入口。需要多个动作时，按预期先后顺序添加；规则树的拖拽只改变规则顺序。

<a id="response-header-evidence"></a>
### 响应 Header 的 append/remove

下面仍使用 `E2E action variants` 和 `/e2e/rules/actions` 范围。测试服务的原始响应 Header 为 `x-e2e-action: original`。若当前是 Query 或其他动作，先移除它，再通过 Add action 添加 Rewrite header。

1. <a id="walkthrough-rules-response-evidence"></a><a id="walkthrough-rules-response-evidence-01-rules"></a><a id="walkthrough-rules-response-evidence-02-root-menu"></a><a id="walkthrough-rules-response-evidence-03-create"></a><a id="walkthrough-rules-response-evidence-04-name"></a><a id="walkthrough-rules-response-evidence-05-host"></a><a id="walkthrough-rules-response-evidence-06-add-path"></a><a id="walkthrough-rules-response-evidence-07-path"></a><a id="walkthrough-rules-response-evidence-08-response-phase"></a><a id="walkthrough-rules-response-evidence-09-header"></a><a id="walkthrough-rules-response-evidence-10-append"></a><a id="walkthrough-rules-response-evidence-11-value"></a><a id="walkthrough-rules-response-evidence-12-enable"></a><a id="walkthrough-rules-response-evidence-13-apply-append"></a><a id="walkthrough-rules-response-evidence-14-capture"></a>在第一张图红框 1 的阶段框选择 `response`，再把第二张图红框 1 的操作设为 Set；名称填 `x-e2e-action`，值填 `from-rule`。启用并 Save，请求 `/e2e/rules/actions/response-set`，客户端收到的该 Header 应为 `from-rule`。

   ![Header 动作切换为 response](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-038.annotated.png)

   ![响应 Header 的 Set 配置](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-040.annotated.png)

   在 Capture 用 Keyword 定位这条新请求，打开 Headers。下图红框 1 的 Response Headers 中，`original` 带 Rule replaced，`from-rule` 带 Rule set；最终响应采用后者。

   ![响应 Header 的 Set 覆盖原值](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-043.annotated.png)

2. <a id="walkthrough-rules-response-evidence-15-append-request"></a><a id="walkthrough-rules-response-evidence-16-append-select"></a><a id="walkthrough-rules-response-evidence-17-append-headers"></a>在红框 1 选择 Append 并 Save。请求 `/e2e/rules/actions/response-append`，在 Capture 选择这条新请求，再在 Headers 检查响应：`original` 保留，另有追加的 `from-rule`。

   ![响应 Header 的 Append 配置](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-047.annotated.png)

   下图红框 1 的 Response Headers 同时显示未划掉的 `original` 和带 Rule appended 的 `from-rule`，与 Set 的覆盖效果不同。

   ![响应 Header 保留原值并追加 from-rule](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-050.annotated.png)

3. <a id="walkthrough-rules-response-evidence-18-edit-remove"></a><a id="walkthrough-rules-response-evidence-19-remove"></a><a id="walkthrough-rules-response-evidence-20-apply-remove"></a><a id="walkthrough-rules-response-evidence-21-capture-remove"></a><a id="walkthrough-rules-response-evidence-22-remove-request"></a><a id="walkthrough-rules-response-evidence-23-remove-select"></a>返回同一条规则，在红框 1 选择 Remove，保留名称并 Save。请求 `/e2e/rules/actions/response-remove`，回到 Capture 选择新请求；客户端响应不应再含 `x-e2e-action`。Capture 的删除标记用于解释效果，不表示该字段仍被发出。

   ![响应 Header 的 Remove 配置](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-054.annotated.png)

   下图红框 1 的 Response Headers 中，`x-e2e-action: original` 被划掉并标为 Rule removed；客户端收到的响应不再包含该字段。

   ![响应 Header 显示删除来源标记](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-057.annotated.png)

完成后关闭规则并 Save。下面的 Body 示例使用独立规则，先停用当前 Header 规则，避免两者共同影响结果。

<a id="body-status"></a>
## 替换正文与响应状态

1. <a id="walkthrough-rules-actions-body-01-rules"></a><a id="walkthrough-rules-actions-body-02-create"></a><a id="walkthrough-rules-actions-body-03-name"></a><a id="walkthrough-rules-actions-body-04-host"></a><a id="walkthrough-rules-actions-body-05-path"></a><a id="walkthrough-rules-actions-body-06-remove"></a><a id="walkthrough-rules-actions-body-07-action"></a>先停用其他测试规则。新建 `E2E regular response body`，在第一张图红框 1 填名称，第二张图红框 1 的 Host 填 `127.0.0.1`。本例只有 Host 条件，只用于隔离的本机测试流量。移除默认 Header，再打开 Add action，选择第三张图红框 1 的 Rewrite body。Body 会整体替换正文，不是局部文本替换。

   ![命名独立的响应 Body 规则](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-051.annotated.png)

   ![响应 Body 规则的 Host](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-052.annotated.png)

   ![添加 Rewrite body](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-054.annotated.png)

2. <a id="walkthrough-rules-actions-body-08-phase"></a><a id="walkthrough-rules-response-evidence-44-response-body"></a>在红框 1 的阶段框选择 `response`；格式保留 JSON。不要把响应正文动作配成请求阶段。

   ![Body 选择 response 阶段](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-056.annotated.png)

3. <a id="walkthrough-rules-actions-body-08-content"></a><a id="walkthrough-rules-response-evidence-45-response-value"></a>在红框 1 填完整替换正文 `{"stage":"response-final"}`。

   ![填写响应正文替换内容](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-057.annotated.png)

4. <a id="walkthrough-rules-response-controls-synthetic-edit-next"></a><a id="walkthrough-rules-response-controls-delay-remove"></a><a id="walkthrough-rules-response-controls-delay-add"></a><a id="walkthrough-rules-response-controls-delay-value"></a><a id="walkthrough-rules-response-controls-delay-enable"></a><a id="walkthrough-rules-response-controls-delay-apply"></a><a id="walkthrough-rules-response-controls-delay-result"></a><a id="walkthrough-rules-response-controls-delay-back"></a><a id="walkthrough-rules-response-controls-delay-disable"></a><a id="walkthrough-rules-response-controls-delay-apply-off"></a><a id="walkthrough-rules-response-controls-delay-restored"></a><a id="walkthrough-rules-response-controls-delay-edit-next"></a><a id="walkthrough-rules-response-controls-block-remove"></a><a id="walkthrough-rules-response-controls-block-add"></a><a id="walkthrough-rules-response-controls-block-reset"></a><a id="walkthrough-rules-response-controls-block-enable"></a><a id="walkthrough-rules-response-controls-block-apply"></a><a id="walkthrough-rules-response-controls-block-reset-result"></a><a id="walkthrough-rules-response-controls-block-edit-close"></a><a id="walkthrough-rules-response-controls-block-close"></a><a id="walkthrough-rules-response-controls-block-apply-close"></a><a id="walkthrough-rules-response-controls-block-close-result"></a><a id="walkthrough-rules-response-controls-block-back"></a><a id="walkthrough-rules-response-controls-block-disable"></a><a id="walkthrough-rules-response-controls-block-apply-off"></a><a id="walkthrough-rules-response-controls-block-restored"></a><a id="walkthrough-rules-response-controls-block-edit-next"></a><a id="walkthrough-rules-response-controls-encoding-remove"></a><a id="walkthrough-rules-response-controls-encoding-add"></a><a id="walkthrough-rules-response-controls-encoding-phase"></a><a id="walkthrough-rules-response-controls-encoding-name"></a><a id="walkthrough-rules-response-controls-encoding-value"></a><a id="walkthrough-rules-response-controls-encoding-enable"></a><a id="walkthrough-rules-response-controls-encoding-apply"></a><a id="walkthrough-rules-response-controls-encoding-header-only"></a><a id="walkthrough-rules-response-controls-encoding-edit-body"></a><a id="walkthrough-rules-response-controls-encoding-add-body"></a><a id="walkthrough-rules-response-controls-encoding-body-phase"></a><a id="walkthrough-rules-response-controls-encoding-body"></a><a id="walkthrough-rules-response-controls-encoding-apply-body"></a><a id="walkthrough-rules-response-controls-encoding-body-result"></a><a id="walkthrough-rules-response-controls-encoding-back"></a><a id="walkthrough-rules-response-controls-encoding-disable"></a><a id="walkthrough-rules-response-controls-encoding-apply-off"></a><a id="walkthrough-rules-response-controls-encoding-restored"></a><a id="walkthrough-rules-response-controls-encoding-edit-next"></a>根据接口需要明确配置相关 Header，不假设只改 `Content-Type` 就自动转换正文。

   只把 `content-encoding` 改为 `gzip` 不会自动压缩原正文，客户端可能解码失败。需要生成 gzip 内容时，按[Header 与 Body 配合步骤](#message-editing)明确替换正文，并检查实际字节和长度。

5. <a id="walkthrough-rules-actions-body-09-enable"></a><a id="walkthrough-rules-actions-body-10-apply"></a><a id="walkthrough-rules-response-evidence-46-apply-response"></a>打开红框 1 的规则行开关，再点击编辑器右上角 Save。下方第二张图中状态已变为 Rule set applied。

   ![启用响应 Body 规则](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-058.annotated.png)

   ![响应 Body 规则已保存](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-059.png)

6. <a id="walkthrough-rules-actions-body-11-result"></a><a id="walkthrough-rules-response-evidence-47-capture-response"></a><a id="walkthrough-rules-response-evidence-48-response-request"></a><a id="walkthrough-rules-response-evidence-49-response-select"></a><a id="walkthrough-rules-response-evidence-50-unavailable"></a>通过代理请求 `/e2e/body-effect-regular-response`，在 Capture 选择它并打开 Response，核对 Final 为 `{"stage":"response-final"}`。Original 已禁用，提示响应在头部阶段被替换、原正文不可用；这不等于原正文为空。

   ![响应 Final 与不可用的 Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-061.png)

   1. 保持 Final 选中，点击第一张图红框 1 的 Raw，查看未格式化的 `{"stage":"response-final"}`。点击第二张图红框 1 的 Copy，复制的也是当前 Final，不是不可用的 Original。

      ![响应 Final 切换为 Raw](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-063.annotated.png)

      ![复制完整响应 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-064.annotated.png)

   2. 点击正文工具栏的 Fullscreen，放大查看同一正文；第二张图红框 1 是弹窗顶部的 Copy。复制后点击右上角 × 关闭弹窗，第三张图红框 1 的 Final 仍选中，Raw 保持不变。

      ![全屏查看响应 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-065.png)

      ![在全屏窗口复制响应 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-066.annotated.png)

      ![关闭全屏后仍选中响应 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-067.annotated.png)

   3. 点击 Save body，在系统 Save 窗口保存为 `body-effect-regular-response-final.json`。返回后，第二张图红框 1 的 Final 仍选中；文件应包含完整的 `{"stage":"response-final"}`，而不是截图或空原文。

      ![在原生窗口保存响应 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-068.png)

      ![保存后保持响应 Final 选择](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-069.annotated.png)

   4. <a id="walkthrough-rules-response-evidence-51-rule-again"></a><a id="walkthrough-rules-response-evidence-52-disable"></a><a id="walkthrough-rules-response-evidence-53-apply-disabled"></a><a id="walkthrough-rules-response-evidence-54-capture-restored"></a><a id="walkthrough-rules-response-evidence-55-restored-request"></a>点击第一张图红框 1 的 Rule replaced 来源标记，回到 Rules 后，第二张图红框 1 选中 `E2E regular response body`。检查完关闭该规则并 Save，再用新请求确认不再替换响应；不能拿先前已完成的 Final 当作停用结果。

      ![响应正文的规则来源标记](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-070.annotated.png)

      ![响应正文标记返回原规则](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-071.annotated.png)

7. <a id="walkthrough-rules-actions-status-01-rules"></a><a id="walkthrough-rules-actions-status-02-create"></a><a id="walkthrough-rules-actions-status-03-name"></a><a id="walkthrough-rules-actions-status-04-host"></a><a id="walkthrough-rules-actions-status-05-path"></a><a id="walkthrough-rules-actions-status-06-remove"></a><a id="walkthrough-rules-actions-status-07-action"></a>状态码演示先停用并保存其他测试规则，再回到 `E2E action variants`，保留 Host `127.0.0.1` 和 Path `/e2e/rules/actions`。移除旧动作，再从 Add action 选择红框 1 的 Set status。

   ![添加 Set status](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-079.annotated.png)

8. <a id="walkthrough-rules-actions-status-08-value"></a>在红框 1 的 Status code 框填 `418`，不是模拟响应例子的 `503`。

   ![Status code 填写 418](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-081.annotated.png)

9. <a id="walkthrough-rules-actions-status-09-enable"></a><a id="walkthrough-rules-actions-status-10-apply"></a>确认规则启用并 Save，检查红框 1 的 Rule set applied 状态。

   ![Status 动作保存完成](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-082.annotated.png)

10. <a id="walkthrough-rules-actions-status-11-result"></a>请求 `/e2e/rules/actions/status`，在 Capture 用 Keyword 定位并选中新请求。Headers 中红框 1 的 General 显示 `418 I'm a Teapot`，与客户端收到的状态一致。继续检查 Header 和 Body；Status 只修改响应状态，不等于构造整份模拟响应。

    ![Capture 的 General 显示改写后的 418](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-084.annotated.png)

11. 若提供 Original/Final 选择，再切换比较可观察的原始内容与最终内容。

    先选所需版本，再使用 Raw、Copy、Fullscreen 或 Save body；这些操作针对当前选中的正文。下面的请求示例有可观察的 Original 和 Final，不把响应原文不可用的提示当作空内容。

12. <a id="walkthrough-rules-operations-16-body-action"></a><a id="walkthrough-rules-response-evidence-24-edit-body"></a><a id="walkthrough-rules-response-evidence-25-remove-header"></a><a id="walkthrough-rules-response-evidence-26-add-body"></a>停用其他测试规则，再创建 `E2E regular request body`。第一张图红框 1 是名称，第二张图红框 1 的 Host 填 `127.0.0.1`。移除默认 Header，从 Add action 选择第三张图红框 1 的 Rewrite body；本例仍只有 Host 条件。

    ![命名独立的请求 Body 规则](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-017.annotated.png)

    ![请求 Body 规则的 Host](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-018.annotated.png)

    ![添加请求正文改写动作](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-020.annotated.png)

13. <a id="walkthrough-rules-operations-17-body-value"></a><a id="walkthrough-rules-response-evidence-27-request-phase"></a><a id="walkthrough-rules-response-evidence-28-body-value"></a>在第一张图红框 1 选择 `request` 阶段，格式保留 JSON；在第二张图红框 1 填完整替换内容 `{"stage":"regular-final"}`。

    ![选择 request 阶段](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-022.annotated.png)

    ![填写 regular-final 替换内容](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-023.annotated.png)

14. <a id="walkthrough-rules-operations-18-apply-body"></a><a id="walkthrough-rules-response-evidence-29-apply-body"></a>打开红框 1 的规则行开关并 Save，确认第二张图底部显示 Rule set applied。

    ![启用请求 Body 规则](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-024.annotated.png)

    ![请求 Body 规则已保存](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-025.png)

15. <a id="walkthrough-rules-operations-19-body-result"></a><a id="walkthrough-rules-response-evidence-30-capture-body"></a><a id="walkthrough-rules-response-evidence-31-post"></a><a id="walkthrough-rules-response-evidence-32-body-select"></a><a id="walkthrough-rules-response-evidence-33-final"></a><a id="walkthrough-rules-response-evidence-34-original"></a>向 `/e2e/body-effect-regular-request` 发送 POST，原正文为 `{"stage":"regular-original"}`。在 Capture 选择这条请求并打开 Request，点击第一张图红框 1 的 Final，核对源站收到的完整正文是 `{"stage":"regular-final"}`；再点击第二张图红框 1 的 Original，查看原来的 `regular-original`。

    ![请求 Final 显示规则替换后的正文](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-027.annotated.png)

    ![同一请求的 Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-029.annotated.png)

    1. <a id="walkthrough-rules-response-evidence-35-raw"></a>保持 Original 选中，点击红框 1 的 Raw，正文显示 `{"stage":"regular-original"}`，没有切换到 Final。

       ![Original 在 Raw 模式下的正文](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-030.annotated.png)

    2. <a id="walkthrough-rules-response-evidence-36-copy-original"></a>点击红框 1 的 Copy，复制完整 Original。粘贴内容应为 `{"stage":"regular-original"}`，不包含编辑器的视觉换行。

       ![复制请求 Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-031.annotated.png)

    3. <a id="walkthrough-rules-response-evidence-37-fullscreen"></a><a id="walkthrough-rules-response-evidence-38-close-fullscreen"></a>点击 Fullscreen 查看同一 Original。第二张图红框 1 是弹窗的 Copy，可复制同一正文；点击弹窗右上角 × 返回，第三张图红框 1 的 Original 仍选中，Raw 保持不变。

       ![全屏查看请求 Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-032.png)

       ![在全屏复制请求 Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-033.annotated.png)

       ![关闭全屏后保留 Original 与 Raw](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-034.annotated.png)

    4. 点击 Save body，在系统保存窗口使用 `body-effect-regular-request-original.json`。返回后，第二张图红框 1 的 Original 仍选中；保存文件中的完整正文应为 `{"stage":"regular-original"}`。

       ![在原生窗口保存请求 Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-035.png)

       ![保存后保留请求 Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-036.annotated.png)

    5. <a id="walkthrough-rules-response-evidence-39-final-again"></a>点击红框 1 的 Final。Raw 仍选中，正文变为 `{"stage":"regular-final"}`；不要把前一次复制或保存的 Original 当作当前内容。

       ![同一请求切回 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-037.annotated.png)

    6. <a id="walkthrough-rules-response-evidence-40-copy-final"></a>点击红框 1 的 Copy，复制的完整正文现在应是 `{"stage":"regular-final"}`。

       ![复制请求 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-039.annotated.png)

    7. 再点击 Fullscreen 查看 Final，并使用第二张图红框 1 的弹窗 Copy。关闭后，第三张图红框 1 的 Final 仍选中，正文没有切回 Original。

       ![全屏查看请求 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-040.png)

       ![在全屏复制请求 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-041.annotated.png)

       ![关闭全屏后仍为请求 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-042.annotated.png)

    8. <a id="walkthrough-rules-response-evidence-41-save-dialog"></a><a id="walkthrough-rules-response-evidence-42-saved"></a>保持 Final 选中，使用 Save body 保存为 `body-effect-regular-request-final.json`。第二张图红框 1 的 Final 选择在保存后保持，文件内容是 `{"stage":"regular-final"}`；它与 Original 文件是两份不同内容。

       ![在原生窗口保存请求 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-043.png)

       ![保存后保留请求 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-044.annotated.png)

    9. <a id="walkthrough-rules-response-evidence-43-body-rule"></a>点击第一张图红框 1 的 Rule replaced 标记，返回 Rules。第二张图红框 1 选中 `E2E regular request body`，编辑器仍显示该规则的请求 Body 动作。

       ![点击普通请求正文的来源标记](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-045.annotated.png)

       ![普通请求正文标记返回原规则](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-046.annotated.png)

    结束时关闭下图红框 1 的规则行开关并 Save，保留规则但停止后续改写。

    ![请求 Body 规则停用并保存](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-048.annotated.png)

源站响应在头部阶段被替换后，原始正文可能不可用。不要把不可用当成空响应，也不要承诺任何情况下都能查看完整 diff。

<a id="mock-response"></a>
## 模拟响应而不依赖服务端结果

为前端测试固定成功、错误或边界响应。

1. <a id="walkthrough-rules-actions-synthetic-01-rules"></a><a id="walkthrough-rules-actions-synthetic-02-create"></a><a id="walkthrough-rules-actions-synthetic-03-name"></a><a id="walkthrough-rules-actions-synthetic-04-host"></a><a id="walkthrough-rules-actions-synthetic-05-path"></a>打开 `E2E action variants`，保留 Host `127.0.0.1` 和 Path `/e2e/rules/actions`，不扩大到日常流量。停用其他可能匹配的测试规则。

2. <a id="walkthrough-rules-actions-synthetic-06-remove"></a><a id="walkthrough-rules-actions-synthetic-07-action"></a>移除当前动作，打开 Add action，选择红框 1 的 Synthetic。

   ![从动作菜单选择 Synthetic](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-088.annotated.png)

3. <a id="walkthrough-rules-actions-synthetic-08-status"></a>在红框 1 的 Status 框填 `503`。

   ![模拟响应状态填写 503](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-090.annotated.png)

4. <a id="walkthrough-rules-actions-synthetic-08-body"></a>在第一张图红框 1 填正文 `{"message":"synthetic-action-body"}`。点击 Add header，名称填 `x-e2e-synthetic`，第二张图红框 1 的值填 `present`；Header 必须在同一 Synthetic 动作中明确配置。

   ![填写模拟响应正文](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-091.annotated.png)

   ![填写额外响应 Header 的值](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-094.annotated.png)

5. <a id="walkthrough-rules-actions-synthetic-09-enable"></a><a id="walkthrough-rules-actions-synthetic-10-apply"></a>确认规则已启用，点击 Save，等红框 1 显示 Rule set applied。

   ![Synthetic 配置保存完成](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-095.annotated.png)

6. <a id="walkthrough-rules-actions-synthetic-11-result"></a>通过代理请求 `/e2e/rules/actions/synthetic`，源站不应收到这条请求。在 Capture 用 Keyword 定位并选中新请求，打开 Headers，红框 1 的 General 应显示 `503 Service Unavailable`。

   ![Synthetic 在原请求上返回 503](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-097.annotated.png)

   在下图红框 1 的 Response Headers 核对 `x-e2e-synthetic: present`，它来自刚配置的 Synthetic 动作。

   ![模拟响应包含明确配置的 Header](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-098.annotated.png)

   打开 Response，选择 Raw，点击下图红框 1 的 Copy。复制的完整正文应为 `{"message":"synthetic-action-body"}`；客户端收到的状态、Header 和正文也应一致。

   ![复制模拟响应的完整正文](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-099.annotated.png)

7. <a id="walkthrough-rules-response-controls"></a><a id="walkthrough-rules-response-controls-01-rules"></a><a id="walkthrough-rules-response-controls-02-create"></a><a id="walkthrough-rules-response-controls-03-host"></a><a id="walkthrough-rules-response-controls-04-path-condition"></a><a id="walkthrough-rules-response-controls-05-path"></a><a id="walkthrough-rules-response-controls-synthetic-remove"></a><a id="walkthrough-rules-response-controls-synthetic-add"></a><a id="walkthrough-rules-response-controls-synthetic-status"></a><a id="walkthrough-rules-response-controls-synthetic-add-type"></a><a id="walkthrough-rules-response-controls-synthetic-type-name"></a><a id="walkthrough-rules-response-controls-synthetic-type-value"></a><a id="walkthrough-rules-response-controls-synthetic-add-extra"></a><a id="walkthrough-rules-response-controls-synthetic-extra-name"></a><a id="walkthrough-rules-response-controls-synthetic-extra-value"></a><a id="walkthrough-rules-response-controls-synthetic-body"></a><a id="walkthrough-rules-response-controls-synthetic-enable"></a><a id="walkthrough-rules-response-controls-synthetic-apply"></a><a id="walkthrough-rules-response-controls-synthetic-result"></a><a id="walkthrough-rules-response-controls-synthetic-back"></a><a id="walkthrough-rules-response-controls-synthetic-disable"></a><a id="walkthrough-rules-response-controls-synthetic-apply-off"></a><a id="walkthrough-rules-response-controls-synthetic-restored"></a>测试完停用该规则并 Apply，再发请求确认恢复正常路径。

   关闭开关后点击 Save，再发送一条新的匹配请求。检查响应重新来自自己的源站，而不是继续返回固定 `503`；不要重复查看先前已经完成的模拟响应。

模拟响应会短路后续正常转发及相应后续规则。不要同时用真实服务器返回值来判断这条模拟是否成功。

<a id="mapping"></a>
## 映射本地文件或另一个服务

**Map Local**

1. <a id="walkthrough-rules-actions-map-local-00-capture"></a>先停用可能改写该请求的规则并 Save。请求测试服务的 `/e2e/rules/actions/file-source`，在 Capture 选中它并打开红框 1 的 Response。这里的公开正文为 `{"message":"original-action-body"}`，不用个人文件或凭据。

   ![在 Response 查看要保存的正文](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-144.annotated.png)

2. <a id="walkthrough-rules-actions-map-local-00-save"></a>点击正文工具栏的 Save body，在系统保存窗口保存为 `rule-map-source.json`，记下自己选择的绝对路径。

   ![系统 Save body 窗口保存 rule-map-source.json](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-145.png)

3. <a id="walkthrough-rules-actions-map-local-01-rules"></a><a id="walkthrough-rules-actions-map-local-02-create"></a><a id="walkthrough-rules-actions-map-local-03-name"></a><a id="walkthrough-rules-actions-map-local-04-host"></a><a id="walkthrough-rules-actions-map-local-05-path"></a>返回 `E2E action variants`，检查 Host `127.0.0.1` 和 Path `/e2e/rules/actions`，保持本次测试范围。

4. <a id="walkthrough-rules-actions-map-local-06-remove"></a><a id="walkthrough-rules-actions-map-local-07-action"></a>移除旧动作，在 Add action 菜单选择红框 1 的 Map Local。

   ![选择 Map Local](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-148.annotated.png)

5. <a id="walkthrough-rules-actions-map-local-08-path"></a>Local path 是绝对路径输入框，不是文件选择按钮。第一张图红框 1 的路径指向不存在的 `rule-map-missing.json`。开启第二张图红框 1 的规则开关并 Save。

   ![不存在的本地文件路径](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-150.annotated.png)

   ![启用本地文件映射](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-151.annotated.png)

   请求 `/e2e/rules/actions/local-missing`，在 Capture 用 Keyword 定位并选中新请求。下图红框 1 的 General 显示 `404 Not Found`；先修正文件路径，不要把它当作源站正常返回。

   ![缺失的本地文件导致 404](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-154.annotated.png)

   返回同一条规则，把下图红框 1 的路径修正为刚保存的 `rule-map-source.json` 的实际绝对路径，不要照抄图片中的本机目录。

   ![修正为刚保存的 rule-map-source.json](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-156.annotated.png)

6. <a id="walkthrough-rules-actions-map-local-09-enable"></a><a id="walkthrough-rules-actions-map-local-10-apply"></a>确认文件仍可读，保持规则启用并 Save，等红框 1 的状态变为 Rule set applied。

   ![修正后的 Map Local 已保存](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-157.annotated.png)

7. <a id="walkthrough-rules-actions-map-local-11-result"></a>请求 `/e2e/rules/actions/local-file`，在 Capture 选择这条新请求，核对红框 1 的 General 已恢复 `200 OK`。

   ![修正文件路径后新请求返回 200](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-159.annotated.png)

   打开 Response 的 Raw，点击下图红框 1 的 Copy，核对完整正文为文件中的 `{"message":"original-action-body"}`。这次正文来自本地文件，不是再次请求源站。完成后返回规则，关闭并 Save。

   ![复制 Map Local 返回的文件正文](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-160.annotated.png)

**Map Remote**

1. 准备自己有权使用的目标测试服务。

   先准备可访问的源入口和目标接口，再填写 Map Remote。本例两者都在 `http://127.0.0.1:62029`，目标路径 `/e2e/rules/actions/remote-target` 返回 `mapped-target-body`。需要同时改变协议、Host 和端口时，按[跨协议映射](#walkthrough-rules-routing)分别配置。

2. <a id="walkthrough-rules-actions-map-remote-01-rules"></a><a id="walkthrough-rules-actions-map-remote-02-create"></a><a id="walkthrough-rules-actions-map-remote-03-name"></a><a id="walkthrough-rules-actions-map-remote-04-host"></a><a id="walkthrough-rules-actions-map-remote-05-path"></a><a id="walkthrough-rules-actions-map-remote-06-remove"></a><a id="walkthrough-rules-actions-map-remote-07-action"></a>在 `E2E action variants` 中保留 Host `127.0.0.1` 和 Path `/e2e/rules/actions`。移除当前动作，再从 Add action 选择红框 1 的 Map Remote。

   ![选择 Map Remote](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-132.annotated.png)

3. <a id="walkthrough-rules-actions-map-remote-08-path"></a>在红框 1 的目标 Path 框填 `/e2e/rules/actions/remote-target`，scheme 保持 `keep`，Host 和 Port 留空以保持原值。Host 不接受完整 URL；目标不能形成代理循环。

   ![只修改目标 Path](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-134.annotated.png)

4. <a id="walkthrough-rules-actions-map-remote-09-enable"></a><a id="walkthrough-rules-actions-map-remote-10-apply"></a>开启规则并 Save，检查红框 1 的 Rule set applied 状态。

   ![Map Remote 已启用并保存](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-136.annotated.png)

5. <a id="walkthrough-rules-actions-map-remote-11-result"></a>请求原入口 `/e2e/rules/actions/remote-source`，核对目标服务收到 `/e2e/rules/actions/remote-target`。在 Capture 用 Keyword 选中原入口请求，红框 1 的 General 仍显示原 URL，状态为 `200 OK`，不需要寻找另一条目标请求行。

   ![Map Remote 保留原入口的 Capture 记录](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-138.annotated.png)

   打开 Response 的 Raw，点击下图红框 1 的 Copy，完整正文应为目标接口的 `mapped-target-body`。它与 General 中保留的原 URL 一起说明了映射效果。

   ![原入口请求收到 mapped-target-body](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-139.annotated.png)

   完成后返回规则，关闭 Map Remote 并 Save。下图红框 1 是保存后的状态，再发新请求应恢复原入口。

   ![Map Remote 停用并保存](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-143.annotated.png)

本地文件和目标服务必须实际可用；规则配置不会自动创建它们。跨机器分享规则时，本地路径不保证存在；Map Local 与保存正文是不同方向的操作。

<a id="walkthrough-rules-routing"></a>
## 映射到另一个协议地址并修正本地文件路径

### Map Remote：从 HTTPS 到 HTTP

先完成自己测试服务的 [HTTPS 解密与信任配置](settings.md#https-decryption)，并准备可访问的 HTTP 目标。本例原服务为 `https://localhost:56535`，目标为 `http://127.0.0.1:56533/e2e/rules/mapped-http`；地址和端口要一起换成自己的服务，不形成代理循环。

1. <a id="walkthrough-rules-routing-01-rules"></a><a id="walkthrough-rules-routing-02-create"></a>在 Rules 新建规则，在红框 1 的名称框填 `E2E HTTPS to HTTP mapping`。

   ![命名 HTTPS 到 HTTP 映射规则](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-010.annotated.png)

2. <a id="walkthrough-rules-routing-03-source-host"></a>在红框 1 的 Host 匹配框填 `localhost`。这里匹配原 HTTPS 请求，不是填写 HTTP 目标。

   ![匹配原请求的 localhost](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-011.annotated.png)

3. <a id="walkthrough-rules-routing-04-add-path"></a><a id="walkthrough-rules-routing-05-path"></a>添加 Path 条件，在红框 1 填 `/e2e/rules/tls-mapping`，同时覆盖下面的 `/enabled` 和 `/disabled` 测试路径。

   ![限定原 HTTPS 请求的路径前缀](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-012.annotated.png)

4. <a id="walkthrough-rules-routing-06-remove-header"></a><a id="walkthrough-rules-routing-07-map-remote"></a>移除默认 Header 动作，打开 Add action，再选择红框 1 的 Map Remote。

   ![在动作菜单选择 Map Remote](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-013.annotated.png)

5. <a id="walkthrough-rules-routing-08-http"></a>在红框 1 的 Map Remote 动作卡片中，将左侧 scheme 选为 `http`。

   ![Map Remote 目标协议选择 http](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-014.annotated.png)

6. <a id="walkthrough-rules-routing-09-target-host"></a>在红框 1 的目标 Host 框填 `127.0.0.1`，不要填完整 URL。

   ![填写 HTTP 目标 Host](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-015.annotated.png)

7. <a id="walkthrough-rules-routing-10-target-port"></a>在红框 1 的 Port 框填目标服务端口 `56533`。它与原 HTTPS 服务的 `56535` 不是同一个端口。

   ![填写目标 HTTP 服务端口](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-016.annotated.png)

8. <a id="walkthrough-rules-routing-11-target-path"></a>在红框 1 的目标 Path 框填 `/e2e/rules/mapped-http`。

   ![填写 HTTP 目标路径](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-017.annotated.png)

9. <a id="walkthrough-rules-routing-12-enable"></a>检查目标协议、Host、Port 和 Path，再打开红框 1 的规则开关。Enabled 仍只是草稿状态。

   ![启用跨协议映射草稿](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-018.annotated.png)

10. <a id="walkthrough-rules-routing-13-apply"></a>点击 Save，等红框 1 的底部状态变为 Rule set applied，映射才开始作用于后续请求。

    ![跨协议映射保存并生效](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-019.annotated.png)

11. <a id="walkthrough-rules-routing-14-remote-result"></a>通过代理 GET `https://localhost:56535/e2e/rules/tls-mapping/enabled`。在 Capture 选择该请求并打开红框 1 的 Response，核对 `200` 和目标服务返回的 `owned-http-mapping-result`；客户端仍访问原 HTTPS 地址，正文来自 HTTP 目标。

    ![原 HTTPS 请求收到 HTTP 目标的响应](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-020.annotated.png)

12. <a id="walkthrough-rules-routing-15-edit"></a><a id="walkthrough-rules-routing-16-disable"></a>返回同一条规则，关闭红框 1 的启用开关。

    ![停用跨协议映射规则](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-021.annotated.png)

13. <a id="walkthrough-rules-routing-17-apply-off"></a>再点击 Save，核对红框 1 的 Rule set applied 状态以及上方 Disabled。只关闭开关而未保存，不算完成停用。

    ![保存映射停用状态](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-022.annotated.png)

14. <a id="walkthrough-rules-routing-18-original-result"></a>请求同一原 HTTPS 服务的另一条地址 `https://localhost:56535/e2e/rules/tls-mapping/disabled`。红框 1 的新请求返回原服务的 `404`，不再收到 HTTP 目标正文；Headers 中仍可核对原 HTTPS URL。这里比较的是同一服务下的 `/enabled` 和 `/disabled`，不是重复查看同一条请求。

    ![停用后新请求回到原 HTTPS 服务](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-023.annotated.png)

HTTPS 调试结束后，按本节末尾的[清理说明](#walkthrough-rules-routing-37-certificates)恢复仅为测试改变的设置。

### Map Local：保存文件并修正路径

下面是独立的 Local 示例：HTTPS 服务为 `https://localhost:63644`，准备文件时使用的 HTTP 目标为 `http://127.0.0.1:63638/e2e/rules/mapped-http`，不要与上一例的端口混用。先按上面的 Map Remote 步骤配置这组地址并 Save，使 `/e2e/rules/tls-mapping/enabled` 返回公开正文 `owned-http-mapping-result`。换成自己的服务时，一起修改请求地址和映射目标。

1. <a id="walkthrough-rules-routing-19-file-source"></a><a id="walkthrough-rules-routing-20-save-file"></a><a id="walkthrough-rules-routing-21-check-file"></a><a id="walkthrough-rules-routing-22-edit-local"></a><a id="walkthrough-rules-routing-23-local-host"></a><a id="walkthrough-rules-routing-24-remove-remote"></a><a id="walkthrough-rules-routing-25-local"></a>先通过产品保存正文，再把映射动作改为读取该文件。

   1. 通过代理请求 `https://localhost:63644/e2e/rules/tls-mapping/enabled`，在 Capture 选中它并打开 Response。点击正文工具栏的 Save body，在系统窗口中保存为 `https-map-local-response.txt`，记下自己选择的绝对路径，再点击 Save。

      ![在系统窗口保存 HTTPS 响应正文](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-021.png)

   2. 保存窗口关闭后，回到 Response，核对正文仍为 `owned-http-mapping-result`、大小为 `25 B`。红框 1 是正文工具栏的 Save body 入口；文件已经保存，不用再点一次。

      ![保存返回后核对原响应正文](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-022.annotated.png)

   3. 返回 Rules，先停用这条 Map Remote 规则并 Save，再在红框 1 的名称框改为 `E2E HTTPS to local file mapping`。保留 Host `localhost` 和 Path `/e2e/rules/tls-mapping`，它们匹配客户端的 HTTPS 请求。

      ![为本地文件映射修改规则名称](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-026.annotated.png)

   4. 点击旧 Map Remote 动作右上角的 ×，再打开 Add action，选择红框 1 的 Map Local。这里是替换动作，不是同时保留远程映射。

      ![移除 Map Remote 后添加 Map Local](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-027.annotated.png)

2. <a id="walkthrough-rules-routing-26-missing-name"></a><a id="walkthrough-rules-routing-27-enable-local"></a><a id="walkthrough-rules-routing-28-apply-local"></a><a id="walkthrough-rules-routing-29-missing-result"></a>检查文件路径错误时，区分 Map Local 产生的错误与源站响应。

   1. 在红框 1 的 Local path 输入一个不存在的文件 `https-map-local-missing.txt` 的完整绝对路径。这里是路径输入框，不是文件选择按钮；不要照抄图片中的本机目录。

      ![输入不存在的本地文件路径](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-028.annotated.png)

   2. 打开红框 1 的规则开关。上方显示 Enabled，但底部仍为 Unsaved changes，配置还没有保存。

      ![启用尚未保存的 Map Local 草稿](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-029.annotated.png)

   3. 点击右上角 Save，等红框 1 的底部状态变为 Rule set applied。保存规则不会自动创建缺失的文件。

      ![缺失文件路径的规则已保存](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-030.annotated.png)

   4. 请求 `https://localhost:63644/e2e/rules/tls-mapping/map-local-missing`，在 Capture 用 Keyword 定位并选中新请求，再打开红框 1 的 Response。应看到 `404` 和 `27 B` 的 `Map Local target not found.`；先检查文件路径，不要反复切换 Recording。

      ![缺失文件的 HTTPS 请求返回明确错误正文](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-031.annotated.png)

3. <a id="walkthrough-rules-routing-30-correct-rule"></a><a id="walkthrough-rules-routing-31-correct-file"></a><a id="walkthrough-rules-routing-32-apply-correct"></a><a id="walkthrough-rules-routing-33-local-result"></a>修正为刚保存的实际文件，再发新请求核对内容。

   1. 返回 `E2E HTTPS to local file mapping`，把红框 1 的路径改为自己保存的 `https-map-local-response.txt` 的完整绝对路径，确认文件仍可读。

      ![修正为产品保存的实际文件路径](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-032.annotated.png)

   2. 保持规则启用，点击 Save，核对红框 1 的 Rule set applied 状态。

      ![保存修正后的 Map Local 路径](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-033.annotated.png)

   3. 请求 `https://localhost:63644/e2e/rules/tls-mapping/map-local-enabled`，在 Capture 选中这条新请求并打开红框 1 的 Response。状态应为 `200`，正文是文件中的 `owned-http-mapping-result`，大小为 `25 B`；客户端仍访问 HTTPS，但正文来自本地文件。

      ![HTTPS Map Local 返回保存文件中的正文](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-034.annotated.png)

4. <a id="walkthrough-rules-routing-34-final-rule"></a><a id="walkthrough-rules-routing-35-final-disable"></a><a id="walkthrough-rules-routing-36-final-apply"></a><a id="walkthrough-rules-routing-37-certificates"></a><a id="walkthrough-rules-routing-38-mitm-off"></a><a id="walkthrough-rules-routing-39-remove-exception"></a>停用文件映射，确认请求恢复，再分别处理 HTTPS 设置。

   1. 返回同一条规则，关闭红框 1 的启用开关。此时只是 Disabled 草稿，还需要保存。

      ![关闭本地文件映射的规则开关](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-035.annotated.png)

   2. 点击 Save，核对红框 1 的 Rule set applied 状态和上方 Disabled。

      ![Map Local 停用状态已保存](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-036.annotated.png)

   3. 请求 `https://localhost:63644/e2e/rules/tls-mapping/map-local-disabled`。Capture 中红框 1 的新记录返回源端点的 `404`，正文为 `0 B`，不同于缺失文件时的 `27 B` 错误。规则停用后 HTTPS 解密仍可保持开启，两者不是同一个开关。

      ![停用 Map Local 后新 HTTPS 请求恢复源端点响应](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-037.annotated.png)

   4. 如果只为本次 HTTPS 调试开启了解密或添加了 `localhost` 源站例外，打开 Settings，再点击红框 1 的 Certificates。不要把规则停用当作已经清理 HTTPS 设置。

      ![打开 Certificates 处理本次 HTTPS 设置](../media/v0.1.1-alpha.1/tls-cleanup-english/step-039.annotated.png)

   5. 关闭红框 1 的 Decrypt HTTPS (MITM)。这只停止后续解密，不删除或移除信任日常使用的 CA。

      ![关闭本次开启的 HTTPS 解密](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

   6. 找到红框 1 的 `localhost` 源站例外，点击标签右侧的移除按钮。只移除本次调试添加的项，不删除其他日常设置。

      ![定位 localhost 例外及其移除入口](../media/v0.1.1-alpha.1/tls-cleanup-english/step-041.annotated.png)

   7. 确认 `localhost` 例外已消失、MITM 仍关闭。红框 1 是剩余的 Host 输入框，不是删除按钮；无需再点击 CA 的 Remove。

      ![localhost 已移除且 HTTPS 解密保持关闭](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.annotated.png)

<a id="block-delay"></a>
## 阻断、延迟与断点

1. <a id="walkthrough-rules-actions-delay-01-rules"></a><a id="walkthrough-rules-actions-delay-02-create"></a><a id="walkthrough-rules-actions-delay-03-name"></a><a id="walkthrough-rules-actions-delay-04-host"></a><a id="walkthrough-rules-actions-delay-05-path"></a>继续使用 `E2E action variants`，Host 为 `127.0.0.1`、Path 为 `/e2e/rules/actions`。停用其他测试规则，不影响日常流量。

2. <a id="walkthrough-rules-actions-delay-06-remove"></a><a id="walkthrough-rules-actions-delay-07-action"></a><a id="walkthrough-rules-actions-delay-08-value"></a>移除当前动作，在第一张图红框 1 选择 Delay。阶段选 `response`，第二张图红框 1 的 Delay (ms) 填 `500`。

   ![在菜单中选择 Delay](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-103.annotated.png)

   ![填写响应延迟 500 毫秒](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-105.annotated.png)

3. <a id="walkthrough-rules-actions-delay-09-enable"></a><a id="walkthrough-rules-actions-delay-10-apply"></a>确认规则启用并 Save，等红框 1 显示 Rule set applied。

   ![Delay 已保存](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-106.annotated.png)

4. <a id="walkthrough-rules-actions-delay-11-result"></a>请求 `/e2e/rules/actions/delay`，检查原响应仍保留，并增加 `500` 毫秒的等待。在 Capture 用 Keyword 选中新请求，打开 Timing，红框 1 显示本例 Waiting (TTFB) 为 `503 ms`、Total 为 `505 ms`。总耗时还包含连接与服务处理时间，不必恰好等于 `500`。

   ![Timing 显示响应延迟后的等待和总耗时](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-108.annotated.png)

5. <a id="walkthrough-rules-actions-block-01-rules"></a><a id="walkthrough-rules-actions-block-02-create"></a><a id="walkthrough-rules-actions-block-03-name"></a><a id="walkthrough-rules-actions-block-04-host"></a><a id="walkthrough-rules-actions-block-05-path"></a>测试阻断时，仍保留同一条规则的 Host 和 Path，不另外扩大匹配范围。

6. <a id="walkthrough-rules-actions-block-06-remove"></a><a id="walkthrough-rules-actions-block-07-action"></a>移除 Delay，从 Add action 添加 Block，Mode 保持 `reset`。Save 后请求 `/e2e/rules/actions/block-reset`，客户端连接应失败，源站不应收到请求。

   ![Block 的 reset 配置](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-113.png)

   在 Capture 用 Keyword 选中该请求。下图红框 1 的 General 没有 HTTP 状态码，显示 `—`；Response Headers 为空，请求行的响应大小为 `0 B`，不是一次正常的 `200` 响应。

   ![reset 阻断没有正常 HTTP 响应](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-116.annotated.png)

7. <a id="walkthrough-rules-actions-block-09-enable"></a><a id="walkthrough-rules-actions-block-10-apply"></a>在红框 1 的 Mode 框改选 `close`，保持规则启用并 Save。请求 `/e2e/rules/actions/block-close`，检查连接被关闭、没有正常源站响应。

   ![Block 切换为 close](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-119.annotated.png)

   在 Capture 选择新的 `/e2e/rules/actions/block-close`，不要沿用上一条 reset 请求。下图红框 1 的 General 同样没有 HTTP 状态码，响应头为空、大小为 `0 B`。

   ![close 阻断的新请求也没有 HTTP 响应](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-122.annotated.png)

8. <a id="walkthrough-rules-actions-block-11-result"></a>核对阻断结果后关闭规则并 Save，检查红框 1 的已应用状态和上方 Disabled。再请求 `/e2e/rules/actions/block-disabled`，应恢复源站 `200`。

   ![Block 已停用并保存](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-126.annotated.png)

   在 Capture 选择新的 `/e2e/rules/actions/block-disabled`，核对下图红框 1 的 General 已恢复 `200 OK`；之前两条被阻断的历史请求不会改变。

   ![停用 Block 后新请求恢复 200](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-128.annotated.png)

9. 需要人工决定时使用 Breakpoint。下面是独立的正文示例，不是把 Block 改名；完整队列操作见 [Breakpoints](breakpoints.md#http)。

   1. 停用其他规则，新建 `E2E request body effect`，红框 1 的 Host 填 `127.0.0.1`。本例只向自己的本机服务发测试请求。

      ![请求 Breakpoint 规则的名称和 Host](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-001.annotated.png)

   2. 移除默认 Header，在 Add action 菜单选择红框 1 的 Breakpoint。

      ![添加 Breakpoint 动作](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-003.annotated.png)

   3. Phase 保持 Request，打开红框 1 的规则行开关并 Save。

      ![启用请求 Breakpoint](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-005.annotated.png)

   4. POST `/e2e/body-effect-red`，原正文为 `{"stage":"original"}`。打开暂停的请求，选择 Text 替换为 `{"stage":"final"}`，提交修改并继续。回到 Capture 的 Request，红框 1 的 Final 应显示 `final`，来源为 Text。

      ![Breakpoint 修改后的请求 Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-008.annotated.png)

   5. 点击红框 1 的 Original，核对同一请求的原正文仍为 `{"stage":"original"}`。

      ![Breakpoint 请求的 Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-009.annotated.png)

   6. 切回 Final，再点击正文标题旁的 Rule replaced 标记，返回 `E2E request body effect`。这个标记指向最终写入正文的规则；随后关闭该规则并 Save。

      ![正文标记返回最终写入规则](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-011.png)

   7. 要用文件替换响应，先请求 `/e2e/body-effect-file-source`，在红框 1 的 Response 检查公开正文 `{"stage":"breakpoint-file-final"}`，通过 Save body 保存成 `body-effect-response-file.json`。

      ![选择要保存的响应正文](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-083.annotated.png)

      ![保存供 File 替换使用的正文](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-084.png)

   8. 新建 `E2E response body effect`，Host 为 `127.0.0.1`，移除默认 Header 并添加 Breakpoint。在红框 1 选择 Response，然后启用并 Save。

      ![为文件替换选择响应 Breakpoint](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-090.annotated.png)

   9. 请求 `/e2e/body-effect-response-file`，打开暂停的响应，选择 File，再通过 Choose file 和系统 Open 窗口选择刚保存的文件。移除原有的 `transfer-encoding` Header，提交修改并继续。Capture 的 Response 应显示 File 来源和 `{"stage":"breakpoint-file-final"}` 的 Final；Original 不可用，标记不展示本地绝对路径。

      ![响应正文来自 File，Original 不可用](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-095.png)

10. 完成后停用测试规则并 Save，再发新请求确认恢复。若单独测试 Delay，也要在停用保存后比较新请求的等待时间；关闭规则不会自动处理已经挂起的断点请求，需先完成对应队列项。

Delay 不是带宽限速；多个延迟按实际规则语义取最大等待值，不机械相加。人工断点没有自动放行超时，详见 [Breakpoints](breakpoints.md)。

<a id="order"></a>
## 组织目录、调整顺序、停用和删除

本节使用 `E2E rules level 1 > E2E rules level 2 > E2E rules level 3` 和 `E2E hierarchy rule`。可见树的规则顺序决定执行顺序；目录只负责组织，不是匹配组。

**alpha.1 限制**：删除最后一条规则后，空树没有可用的保存入口。要停止最后一条规则，保留它、关闭开关并 Save；不要把空界面当作已保存的删除结果。

1. <a id="walkthrough-rules-tree"></a><a id="walkthrough-rules-tree-01-rules"></a><a id="walkthrough-rules-tree-02-root-folder"></a><a id="walkthrough-rules-tree-03-root-name"></a><a id="walkthrough-rules-organization-07-folder"></a>在规则列表空白处打开菜单，点击第一张图红框 1 的 New folder；在第二张图红框 1 输入 `E2E rules level 1`，按 Enter。

   ![根级菜单中的 New folder](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-002.annotated.png)

   ![填写第一级目录名称](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-003.annotated.png)

2. <a id="walkthrough-rules-tree-04-child-folder"></a><a id="walkthrough-rules-tree-05-child-name"></a>打开该目录的节点菜单，选择 New subfolder，在红框 1 输入 `E2E rules level 2` 并按 Enter。

   ![填写第二级目录名称](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-006.annotated.png)

3. <a id="walkthrough-rules-tree-06-third-folder"></a><a id="walkthrough-rules-tree-07-third-name"></a>在第二级目录的菜单继续新建子目录，在红框 1 输入 `E2E rules level 3` 并按 Enter。

   ![填写第三级目录名称](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-009.annotated.png)

4. <a id="walkthrough-rules-tree-08-depth-limit"></a><a id="walkthrough-rules-tree-09-nested-rule"></a>打开第三级目录菜单。红框 1 的 New subfolder 已禁用，不能增加第四层；红框 2 的 New rule 仍可用，点击它在这个目录中创建规则。

   ![第三级目录只能继续新建规则，不能再建子目录](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-011.annotated.png)

5. <a id="walkthrough-rules-tree-11-rule-name"></a><a id="walkthrough-rules-operations-20-rename"></a>打开新规则的节点菜单，选择第一张图红框 1 的 Rename，在第二张图红框 1 输入 `E2E hierarchy rule`，按 Enter 确认。

   ![规则节点的 Rename 命令](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-013.annotated.png)

   ![行内填写规则名称](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-014.annotated.png)

6. <a id="walkthrough-rules-tree-10-invalid"></a>先看底部 Validation errors：Host 和 Header 必填项尚未完成时，Save 不可用，规则也不能启用。

   ![缺少必填字段时的校验状态](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-016.png)

7. <a id="walkthrough-rules-tree-12-host"></a><a id="walkthrough-rules-tree-15-header"></a><a id="walkthrough-rules-tree-16-header-value"></a>依次填写三张图红框 1 的 Host `127.0.0.1`、请求 Header 名称 `x-rules-e2e`、值 `active`，操作保持 Set。先只向自己的本机测试服务发流量；需要八类条件时继续[匹配条件步骤](#matchers)。

   ![完成 Host 条件](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-017.annotated.png)

   ![完成请求 Header 名称](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-018.annotated.png)

   ![完成请求 Header 值](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-019.annotated.png)

8. <a id="walkthrough-rules-tree-17-enable"></a><a id="walkthrough-rules-tree-18-apply"></a><a id="walkthrough-rules-organization-10-apply-folder"></a>开启规则。选择第二张图红框 1 的目录行时，右侧仍保留当前规则编辑器，不会把目录变成匹配条件。点击 Save，确认第三张图底部的 Rule set applied。

   ![必填字段完成后启用规则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-020.png)

   ![选中目录仍保留规则编辑器](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-021.annotated.png)

   ![目录和规则保存完成](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-022.png)

9. <a id="walkthrough-rules-organization"></a><a id="walkthrough-rules-organization-01-open"></a><a id="walkthrough-rules-organization-first-01-new"></a><a id="walkthrough-rules-organization-first-02-host"></a><a id="walkthrough-rules-organization-first-03-path"></a><a id="walkthrough-rules-organization-first-04-header"></a><a id="walkthrough-rules-organization-first-05-enable"></a><a id="walkthrough-rules-tree-13-path-condition"></a><a id="walkthrough-rules-tree-14-path"></a>比较顺序时，让 `E2E hierarchy rule` 只保留 Host 和 Path；添加或修改 Path 为 `/e2e/rules/priority`。Header 动作切回 `request`，名称仍为 `x-rules-e2e`，红框 1 的值改为 `nested`，保持启用并 Save。

   ![嵌套规则写入 nested](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-110.annotated.png)

10. <a id="walkthrough-rules-organization-second-01-new"></a><a id="walkthrough-rules-organization-second-02-host"></a><a id="walkthrough-rules-organization-second-03-path"></a><a id="walkthrough-rules-organization-second-04-header"></a><a id="walkthrough-rules-organization-second-05-enable"></a><a id="walkthrough-rules-organization-02-apply"></a><a id="walkthrough-rules-tree-32-root-menu"></a><a id="walkthrough-rules-tree-33-root-rule"></a><a id="walkthrough-rules-tree-34-root-name"></a><a id="walkthrough-rules-tree-35-root-host"></a><a id="walkthrough-rules-tree-36-root-path-condition"></a><a id="walkthrough-rules-tree-37-root-path"></a><a id="walkthrough-rules-tree-38-root-header"></a><a id="walkthrough-rules-tree-39-root-value"></a><a id="walkthrough-rules-tree-40-root-enable"></a><a id="walkthrough-rules-tree-41-root-apply"></a>从根级菜单新建 `E2E root priority`。第一张图红框 1 是名称；Host 填 `127.0.0.1`，第二张图红框 1 的 Path 填 `/e2e/rules/priority`。使用请求 Header Set `x-rules-e2e`，第三张图红框 1 的值填 `root`。打开第四张图红框 1 的开关并 Save；保存后它位于目录分支之后。

    ![命名根级竞争规则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-112.annotated.png)

    ![竞争规则使用相同 Path](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-114.annotated.png)

    ![竞争规则写入 root](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-116.annotated.png)

    ![启用竞争规则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-117.annotated.png)

    ![拖动前已保存的两条规则顺序](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-121.png)

11. <a id="walkthrough-rules-organization-03-before"></a><a id="walkthrough-rules-tree-42-precedence"></a>请求 `/e2e/rules/priority/before-drag`，核对源站收到 `x-rules-e2e: root`：后执行的根级规则覆盖了 `nested`。

    在 Capture 选中该请求，红框 1 的 Request Headers 保留写入与替换痕迹；最后一条 Rule set 的值是 `root`，不能把较早的 `nested` 当作最终值。

    ![排序前最后写入 root 的请求 Header](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-119.annotated.png)

12. <a id="walkthrough-rules-organization-04-reorder"></a><a id="walkthrough-rules-organization-05-apply-order"></a><a id="walkthrough-rules-organization-06-after"></a><a id="walkthrough-rules-organization-08-move-second"></a><a id="walkthrough-rules-organization-09-move-first"></a>把 `E2E root priority` 拖到 `E2E hierarchy rule` 之前；红框 1 的规则现在进入同一个第三级目录。Save 后再请求 `/e2e/rules/priority/after-drag`，最后写入的值应变成 `nested`。

    ![把竞争规则移入目录并放到前面](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-122.annotated.png)

    ![保存后的新顺序](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-126.png)

    回到 Capture 选中新的 `after-drag` 请求，红框 1 中最后一条 Rule set 的值变为 `nested`，`root` 的替换痕迹仍可追溯。

    ![排序后最后写入 nested 的请求 Header](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-124.annotated.png)

13. <a id="walkthrough-rules-operations-21-search"></a>在红框 1 的名称搜索框输入 `E2E root priority`。只显示匹配规则并保留其父目录路径；这里不是按请求 URL 搜索。清空输入恢复完整树。

    ![按规则名称搜索并保留目录路径](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-127.annotated.png)

14. <a id="walkthrough-rules-tree-19-rename-folder"></a><a id="walkthrough-rules-tree-20-folder-name"></a><a id="walkthrough-rules-tree-21-apply-rename"></a><a id="walkthrough-rules-tree-22-folder-search"></a>在第一级目录菜单选 Rename，在第一张图红框 1 输入 `E2E renamed hierarchy` 并按 Enter。也可用目录名称搜索定位它，再清空搜索；点击第二张图红框 1 的箭头折叠，子规则暂时隐藏，展开后仍在原目录中。完成目录编辑后需要 Save。

    ![行内重命名目录](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-129.annotated.png)

    ![折叠目录而不删除子规则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-131.annotated.png)

15. <a id="walkthrough-rules-tree-43-delete-nested-menu"></a><a id="walkthrough-rules-tree-44-delete-nested"></a><a id="walkthrough-rules-tree-45-apply-deletion"></a>展开目录，在 `E2E root priority` 的菜单点击红框 1 的 Delete rule。这不是最后一条规则；删除后 `E2E hierarchy rule` 仍保留。最后统一 Save。

    ![删除竞争规则的菜单](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-133.annotated.png)

    ![删除后仍保留嵌套规则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-134.png)

16. 把剩余的 `E2E hierarchy rule` 拖到列表根级空白区域，红框 1 显示移出目录后的规则位置。

    ![把保留的规则移回根级](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-135.annotated.png)

17. <a id="walkthrough-rules-tree-46-delete-folder-menu"></a><a id="walkthrough-rules-tree-47-delete-folders"></a><a id="walkthrough-rules-tree-48-apply-folders"></a><a id="walkthrough-rules-tree-49-after-delete"></a>确认 `E2E renamed hierarchy` 只剩空子目录，在其菜单点击红框 1 的 Delete folder，删除这个目录分支，再 Save。第二张图中根级规则仍保留，底部已应用状态表示删除和移动一起保存完成。

    ![删除不再含规则的目录分支](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-136.annotated.png)

    ![目录删除和规则移动保存完成](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-140.png)

    再请求 `/e2e/rules/priority/after-deletion`，选择这条新记录。红框 1 的 Request Headers 只显示保留规则写入的 `x-rules-e2e: nested`；删除规则不会清除旧请求中的历史效果。

    ![删除竞争规则后的新请求仍由保留规则改写](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-138.annotated.png)

18. <a id="walkthrough-rules-operations-22-disable"></a><a id="walkthrough-rules-operations-23-apply-disabled"></a><a id="walkthrough-rules-tree-50-disable"></a><a id="walkthrough-rules-tree-51-apply-disabled"></a>结束时保留最后一条规则，关闭它并 Save。重新发请求，确认不再写入 `x-rules-e2e`；不通过删除最后一条规则来停止效果。

- 多条规则可以顺序作用于同一请求，不是命中第一条就全部结束。
- 规则行的动作标签只是摘要；将鼠标停在动作摘要上可以查看完整有序说明，不以行内标签数量判断实际动作数量。
- 后写可能覆盖先写；模拟响应或 Block 会短路后续处理。
- Breakpoint 是普通修改完成后的人工调试点，看到的快照可能已包含规则修改。
- 修改顺序、停用规则与处理已经挂起的请求是不同操作，不把它们混为一谈。

<a id="effects"></a>
## 验证命中、查看效果并处理保存冲突

1. 以目录练习中 `E2E hierarchy rule` 的初始配置为例：Host 为 `127.0.0.1`，请求 Header Set `x-rules-e2e: active`，还未增加其他条件。Save 后通过代理请求 `/e2e/rules/hierarchy-status`，红框 1 的规则行命中数变为 `1`。

   ![匹配请求使规则命中数变为 1](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-024.annotated.png)

2. <a id="walkthrough-rules-tree-23-search-clear"></a><a id="walkthrough-rules-tree-24-collapse"></a><a id="walkthrough-rules-tree-25-expand"></a><a id="walkthrough-rules-tree-26-request"></a><a id="walkthrough-rules-tree-27-rule-menu"></a><a id="walkthrough-rules-tree-28-show-requests"></a>清空名称搜索并展开目录，打开该规则菜单，点击红框 1 的 Show matching requests。未命中时此入口不可用；命中后可跳到对应 Capture 分组。

   ![命中后的 Show matching requests 菜单](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-025.annotated.png)

   进入 Capture 后，在下图红框 1 的 Keyword 中填写 `/e2e/rules/hierarchy-status`，选中红框 2 的本次请求；左侧 Rule 分组仍指向同一规则。

   ![通过 Keyword 明确选中同一次命中请求](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-027.annotated.png)

3. <a id="walkthrough-rules-tree-28a-rule-facet"></a><a id="walkthrough-rules-tree-29-select-request"></a><a id="walkthrough-rules-tree-30-header-effect"></a><a id="walkthrough-rules-tree-31-return-rule"></a>检查左侧 Rule 分组已选中 `E2E hierarchy rule`。Headers 中的请求头显示 `x-rules-e2e: active`；第一张图红框 1 是行内 Rule set 来源标记。点击后返回 Rules，第二张图红框 1 选中的仍是 `E2E hierarchy rule`，不需要展开独立面板。正文结果按[Original/Final 步骤](#body-status)另行查看。

   ![Rule 分组、匹配请求及行内 Header 来源标记](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-028.annotated.png)

   ![点击 Header 来源返回同一条规则](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-030.annotated.png)

   1. 如果规则还包含同阶段 Breakpoint，原样继续后也可以追溯 Header 来源。独立示例 `E2E request header layout` 使用 Host `127.0.0.1`、请求 Header Set `x-effect-layout: from-rule` 和 Request Breakpoint。向 `/e2e/header-effect-layout-request` 发送带 `x-effect-layout: client` 的请求，在断点原样继续。第一张图红框 1 的 Rule set 指向 `from-rule`，原 `client` 保留替换痕迹；点击标记后，第二张图红框 1 选中该规则，编辑器仍显示 Header 和 Breakpoint 两个动作。

      ![原样继续后的请求 Header 来源](../media/v0.1.1-alpha.1/rules-header-effects-workflow-en/step-002.annotated.png)

      ![请求 Header 标记返回对应规则](../media/v0.1.1-alpha.1/rules-header-effects-workflow-en/step-003.annotated.png)

   2. 停用前一条规则并 Save。响应示例另用 `E2E response header layout`：Host `127.0.0.1`、响应 Header Append `x-effect-layout: from-rule` 和 Response Breakpoint。让 `/e2e/header-effect-layout-response` 原响应带 `x-effect-layout: origin`，在断点原样继续。第一张图红框 1 的 Rule appended 标记说明追加的 `from-rule`，而不是替换 `origin`；点击后第二张图红框 1 选中对应响应规则。结束后停用并 Save。

      ![原样继续后追加的响应 Header 来源](../media/v0.1.1-alpha.1/rules-header-effects-workflow-en/step-008.annotated.png)

      ![响应 Header 标记返回对应规则](../media/v0.1.1-alpha.1/rules-header-effects-workflow-en/step-009.annotated.png)

4. <a id="walkthrough-rules-conflict"></a><a id="walkthrough-rules-conflict-01-rules"></a><a id="walkthrough-rules-conflict-02-create"></a><a id="walkthrough-rules-conflict-03-name"></a><a id="walkthrough-rules-conflict-04-host"></a><a id="walkthrough-rules-conflict-05-add-path"></a><a id="walkthrough-rules-conflict-06-path"></a><a id="walkthrough-rules-conflict-07-header"></a><a id="walkthrough-rules-conflict-08-value"></a><a id="walkthrough-rules-conflict-09-enable"></a><a id="walkthrough-rules-conflict-10-apply"></a><a id="walkthrough-rules-conflict-11-local-name"></a><a id="walkthrough-rules-conflict-12-local-value"></a><a id="walkthrough-rules-conflict-13-second-writer"></a><a id="walkthrough-rules-conflict-14-allow"></a><a id="walkthrough-rules-conflict-15-draft-retained"></a><a id="walkthrough-rules-conflict-16-core-remote"></a><a id="walkthrough-rules-conflict-17-reload"></a>与 MCP 或其他调用方同时编辑时，要区分本地草稿与已经保存的规则。以下示例使用已授权的 MCP Client；先完成 Client 和规则工具授权，不向其他人提供凭据。

   1. 打开经 MCP 保存的规则。红框 1 的名称为 `MCP updated header`，Host 为 `127.0.0.1`，Path 为 `/e2e/mcp/rules`；请求 Header Set 的名称为 `x-mcp-rules`，红框 2 的值为 `updated`。底部显示 Rule set applied 和 `rev 2`。

      ![MCP 保存后的规则名称和 Header 值](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-017.annotated.png)

   2. 在 Rules 中把红框 1 的名称改为 `MCP local draft`，把红框 2 的 Header 值改为 `unapplied-local-value`，暂不点击 Save。底部变为 Unsaved changes，保存版本仍是 `rev 2`。

      ![修改本地名称和值但不保存](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-018.annotated.png)

   3. 让已授权的 MCP Client 基于已保存版本再次保存规则树，仍使用 `MCP updated header` 和 `updated`。Rules 不会静默覆盖本地输入：红框 1 的名称仍是 `MCP local draft`，Header 值仍为 `unapplied-local-value`，底部显示 Changed elsewhere · draft kept。编辑器保留草稿不代表 Core 在使用这个未保存的值。

      ![另一写入者保存后仍保留本地草稿](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-019.annotated.png)

   4. 先记下自己需要保留的改动，再点击编辑器右上方红框 1 的 Reload。这个操作会放弃当前本地草稿并读取最新规则，不是再次提交旧版本。

      ![通过 Reload 明确放弃本地草稿](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-020.annotated.png)

   5. 核对名称恢复为 `MCP updated header`，Header 值恢复为 `updated`，底部显示 Rule set applied 和 `rev 3`。`MCP local draft` 与 `unapplied-local-value` 已被放弃；Reload 不会自动合并这两项本地修改。

      ![Reload 后读取已保存的 rev 3](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-021.png)

5. <a id="walkthrough-rules-conflict-18-merged-name"></a><a id="walkthrough-rules-conflict-19-merged-value"></a><a id="walkthrough-rules-conflict-20-apply-merged"></a><a id="walkthrough-rules-conflict-21-merged-request"></a><a id="walkthrough-rules-conflict-22-disable"></a><a id="walkthrough-rules-conflict-23-apply-disabled"></a><a id="walkthrough-rules-conflict-24-mcp-settings"></a><a id="walkthrough-rules-conflict-25-stop-server"></a>需要保留自己的修改时，在刚 Reload 的同一条规则上重新编辑并 Save，再发送新请求核对。不要连续重试旧草稿覆盖别人或 Agent/MCP 的更新。

   1. 在最新的 `rev 3` 上，把红框 1 的名称改为 `MCP merged header`，把红框 2 的 Header 值改为 `merged`。保留 Host `127.0.0.1`、Path `/e2e/mcp/rules` 和请求 Header 名称 `x-mcp-rules`，再点击红框 3 的 Save。

      ![在最新版本上重新编辑名称和值并保存](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-023.annotated.png)

   2. 等待底部恢复 Rule set applied，核对本例版本变为 `rev 4`，名称和 Header 值仍为 `MCP merged header`、`merged`。这是重新编辑后保存的结果，不是 Reload 自动合并了本地草稿。

      ![手动合并后的规则已保存为 rev 4](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-024.png)

   3. 让外部客户端通过代理 GET `http://127.0.0.1:54222/e2e/mcp/rules/merged`；实际操作时换成自己的测试服务端口。在 Capture 的 Keyword 填 `/e2e/mcp/`，选中红框 2 的新请求行。打开 Headers，向下查看 Request Headers，红框 1 的 Header 行应显示 `x-mcp-rules: merged` 和 Rule set；不要用之前的 `/updated` 请求判断这次保存。

      ![新请求的 Header 使用手动合并后的 merged 值](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-025.annotated.png)

Recording 暂停时规则仍可能生效，但 Capture 不产生新的检查记录。状态栏的保存版本与编辑草稿不同，冲突也不是规则一定无效。

<a id="import-export"></a>
## 导入和导出规则

1. 分享前检查地址、正文和本地路径，导出不承诺自动脱敏。下面准备两条 Host 为 `127.0.0.1` 的独立规则：`E2E enabled rule` 设置请求 Header `x-e2e-enabled-rule: active` 并启用；`E2E disabled rule` 设置 `x-e2e-disabled-rule: active`，但保持停用。新建目录，在第一张图红框 1 填 `E2E imported folder`，把停用规则拖到第二张图红框 1 所示的目录内，再 Save。原树应有两条规则、一个目录、一条启用规则。

   ![填写导出示例的目录名称](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-002.annotated.png)

   ![把停用规则移入目录](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-003.annotated.png)

   ![保存后的导出源规则树](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-004.png)

2. <a id="walkthrough-rules-organization-11-export"></a>点击规则列表工具栏的 Export rules，在系统保存窗口保存为 `rules-roundtrip.json`。

   ![Export rules 保存 rules-roundtrip.json](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-005.png)

3. <a id="walkthrough-rules-organization-12-exported"></a>确认文件已保存。JSON 顶层的 `nodes` 数组保留当前编辑树的目录、顺序和启用状态；Export 本身不会应用规则，也不会删除原树。

4. <a id="walkthrough-rules-organization-13-import-file"></a>点击 Import rules，在系统 Open 窗口选择刚导出的 `rules-roundtrip.json`，点击 Open 进入预览。

5. <a id="walkthrough-rules-organization-14-preview"></a>核对预览：Rules `2`、Folders `1`、Enabled `1`、Skipped `0`。红框 1 的 Cancel 会取消这次导入；红框 2 的 Import 2 rules 会追加并保存两条规则，其中一条立即开始匹配流量。先确认是否接受重复命中的影响。

   ![包含数量、启用警告及取消和确认按钮的导入预览](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-008.annotated.png)

6. <a id="walkthrough-rules-organization-15-cancel"></a>先点击 Cancel，检查原树仍是两条规则和一个目录，只有 `E2E enabled rule` 启用。取消预览不增加节点，也不保存新版本。

   ![取消导入后原树不变](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-009.png)

7. <a id="walkthrough-rules-organization-16-import-again"></a>重新点击 Import rules，选择同一个 `rules-roundtrip.json`，再次检查预览中的数量与启用警告。

8. <a id="walkthrough-rules-organization-17-confirm"></a>确认可以接受影响后，点击 Import 2 rules。新节点追加到根级末尾，不覆盖同名原项；现在有四条规则、两个目录、两条启用规则。确认导入会立即保存，不需要再点一次 Save。

   ![确认后在原树后追加导入节点](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-011.png)

9. 如果再次导入并确认同一文件，会继续追加为六条规则、三个目录、三条启用规则，不会按名称合并。完成后停用不需要的规则，或删除额外副本并 Save，避免重复执行动作。

   ![重复导入继续追加，不覆盖原有节点](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-013.png)

UI 导出当前编辑树；Agent/MCP 导出已保存树，二者在尚未 Apply 时可能不同。重复导入会继续追加，且可能重复命中。配置级 JSON 错误整体失败，节点错误按预览逐项跳过。

<a id="message-editing"></a>
## Header 与 Body 修改如何配合

这条约定也适用于 HTTP Breakpoints 和 Composer 的相关发送路径：

- 只改 Header：原正文不因为 `Content-Type` 或 `Content-Encoding` 改变就自动转码、压缩或解压。
- 明确替换正文：按最终 Header 和所选正文模式构造新内容；没有编辑过且原本存在的 `Content-Length` 才会随新内容维护。
- 显式设置或删除 `Content-Length`：保留用户意图，不用偷偷修改正文来迎合填写的长度。
- `Transfer-Encoding`、压缩、字符集和协议限制可能产生真实发送错误；以客户端与服务端结果为准，不把编辑器接受输入当成协议正确。
- ETag、签名、Digest 等不会因为改了正文就自动重新生成；测试时需要自行处理一致性。

推荐先用普通 Header 和小文本验证，再逐项增加编码或协议变化。不要一次改变多个条件后只根据“请求失败”猜原因。

1. 打开 `E2E action variants`，保留 Host `127.0.0.1` 和 Path `/e2e/rules/actions`，移除旧动作，再添加响应 Header Set `content-encoding`。红框 1 的值填 `gzip`，启用并 Save。请求 `/e2e/rules/actions/header-only` 时，原字节仍是 `{"message":"original-action-body"}`，不会因为 Header 改了就自动压缩。

   ![只设置响应 Content-Encoding](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-168.annotated.png)

   在 Capture 用 Keyword 定位并选中新请求，打开 Headers。下图红框 1 的 Response Headers 显示 `content-encoding: gzip` 带 Rule set，而 `content-length` 仍为原来的 `34`。

   ![只改编码 Header 后原正文长度仍是 34](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-171.annotated.png)

   打开 Response 的 Raw，正文区提示 `Failed to decode gzip body; showing raw bytes.`。点击下图红框 1 的 Copy，完整正文仍为 `{"message":"original-action-body"}`；提示说明 Header 与字节不一致，不是正文已经自动压缩。

   ![解码提示和复制结果表明原字节没有改变](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-172.annotated.png)

2. 保留这条 Header 动作，打开 Add action，再选择红框 1 的 Rewrite body。这里是追加第二个动作，不是移除 Header。

   ![在编码 Header 之后添加 Body](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-175.annotated.png)

3. Body 选择 `response` 和 JSON，在红框 1 填 `{"message":"encoded-action-body"}`。

   ![明确填写待编码的新正文](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-178.annotated.png)

4. 点击 Save，检查红框 1 的已应用状态。请求 `/e2e/rules/actions/body-encoded`，客户端解压后应得到 `{"message":"encoded-action-body"}`；同时核对原本存在且未手动编辑的 `Content-Length` 已按实际 gzip 字节长度更新。

   ![Header 和 Body 两个动作一起保存](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-179.annotated.png)

   在 Capture 选择新的 `/e2e/rules/actions/body-encoded`。下图红框 1 的 Response Headers 显示 `content-encoding: gzip`，`content-length` 已更新为本例压缩后的 `53` 字节。

   ![明确替换 Body 后 Content-Length 对应 gzip 字节](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-181.annotated.png)

   打开 Response 的 Final，选择 Raw，再点击下图红框 1 的 Copy。复制的解码后正文应为 `{"message":"encoded-action-body"}`。此处响应在 headers 阶段被替换，Original 明确不可用，不代表原正文为空。

   ![Final 展示并复制解码后的替换正文](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-182.annotated.png)

5. 结束时关闭规则并 Save，检查红框 1 的已应用状态以及上方 Disabled。请求 `/e2e/rules/actions/all-disabled`，应恢复源站 `200` 和 `{"message":"original-action-body"}`。

   ![正文和编码改写停用并保存](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-186.annotated.png)

   在 Capture 选择新的 `/e2e/rules/actions/all-disabled`，打开 Response 的 Raw，点击下图红框 1 的 Copy。核对完整正文回到 `{"message":"original-action-body"}`，请求行显示 `200` 和原来的 `34 B`。

   ![停用后复制新请求的原始响应正文](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-188.annotated.png)
