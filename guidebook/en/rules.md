# Rules: change subsequent matching traffic

> Draft for `v0.1.1-alpha.1`. Recorded conditions, actions, ordering and file round trips have step images; missing branches remain explicit. Neither this chapter nor item9 is complete. Use your own endpoint and narrow conditions: Rules affect real traffic.

[Guide directory](../README.en.md) · [Capture](capture.md) · [Breakpoints](breakpoints.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>ruleName</code> | <code>Guide test header</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/rules/order</code> |
| <code>url</code> | <code>http://127.0.0.1:54561/guide/rules/order</code> |
| <code>headerName</code> | <code>x-interceptor-guide</code> |
| <code>headerValue</code> | <code>rules-demo</code> |

<a id="walkthrough-01-open"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules/rules-01-open.png)

<a id="walkthrough-02-create"></a>
### 02 · Create a Rule

![02 · Create a Rule](../media/v0.1.1-alpha.1/rules/rules-02-create.png)

<a id="walkthrough-03-name"></a>
### 03 · Name the Rule

![03 · Name the Rule](../media/v0.1.1-alpha.1/rules/rules-03-name.png)

<a id="walkthrough-04-host"></a>
### 04 · Restrict the host

![04 · Restrict the host](../media/v0.1.1-alpha.1/rules/rules-04-host.png)

<a id="walkthrough-05-path-condition"></a>
### 05 · Add a Path matcher

![05 · Add a Path matcher](../media/v0.1.1-alpha.1/rules/rules-05-path-condition.png)

<a id="walkthrough-06-path"></a>
### 06 · Enter the test path

![06 · Enter the test path](../media/v0.1.1-alpha.1/rules/rules-06-path.png)

<a id="walkthrough-07-header-name"></a>
### 07 · Enter the header name

![07 · Enter the header name](../media/v0.1.1-alpha.1/rules/rules-07-header-name.png)

<a id="walkthrough-08-header-value"></a>
### 08 · Enter the header value

![08 · Enter the header value](../media/v0.1.1-alpha.1/rules/rules-08-header-value.png)

<a id="walkthrough-09-enable"></a>
### 09 · Enable the Rule

![09 · Enable the Rule](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

<a id="walkthrough-10-apply"></a>
### 10 · Apply the Rule

![10 · Apply the Rule](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

<a id="walkthrough-11-hit"></a>
### 11 · Send a matching request

![11 · Send a matching request](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

<a id="walkthrough-12-capture"></a>
### 12 · Inspect the actual Capture result

![12 · Inspect the actual Capture result](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

<a id="walkthrough-13-nonmatching"></a>
### 13 · Verify an unmatched request

![13 · Verify an unmatched request](../media/v0.1.1-alpha.1/rules/rules-13-nonmatching.png)

<a id="walkthrough-14-disable"></a>
### 14 · Disable and Apply

![14 · Disable and Apply](../media/v0.1.1-alpha.1/rules/rules-14-disable.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:end -->

<a id="先区分规则与录制"></a>
## Rules and recording are separate

- Rules intervene in proxy forwarding, not already-completed historical requests.
- Pausing Recording does not disable Rules; it only prevents new Capture records.
- Composer sends directly and does not use proxy Rules. Verify a rule with an external proxied client.
- Folders organize rules; they are not match conditions.

<a id="first-rule"></a>
## Create, enable and apply your first rule

**Goal:** add a harmless test header to a narrow set of requests.

**Prerequisites:** proxy readiness is complete and Recording is enabled for inspection. Use an endpoint you are authorized to test.

**Steps**

1. Open Rules & Map.

   ![Rules opened](../media/v0.1.1-alpha.1/rules/rules-01-open.png)

2. Create a rule in the root toolbar. The empty-area menu is another entry point; see its [separate menu and creation recording](#walkthrough-rules-response-evidence-02-root-menu). That recording creates `Guide response and body`, not this section's Rule.

   ![Actual new rule](../media/v0.1.1-alpha.1/rules/rules-02-create.png)

3. Name it `Guide test header`.

   ![Entering Guide test header](../media/v0.1.1-alpha.1/rules/rules-03-name.png)

4. Set Host to `127.0.0.1`, not a complete URL.

   ![Actual Host value 127.0.0.1](../media/v0.1.1-alpha.1/rules/rules-04-host.png)

5. Add a Path condition.

   ![Intermediate state after adding Path](../media/v0.1.1-alpha.1/rules/rules-05-path-condition.png)

6. Enter `/guide/rules/order`.

   ![Completed test Path](../media/v0.1.1-alpha.1/rules/rules-06-path.png)

7. Use request Header `set` and enter the name `x-interceptor-guide`.

   ![Entering the Header name first](../media/v0.1.1-alpha.1/rules/rules-07-header-name.png)

8. Enter value `rules-demo`.

   ![Entering Header value rules-demo](../media/v0.1.1-alpha.1/rules/rules-08-header-value.png)

9. Resolve incomplete fields and enable the rule. The [separate validation recording](#walkthrough-rules-tree-10-invalid) first shows missing-field issue counts and disabled Apply, then completes each field. It owns `Guide nested priority`; an enabled complete rule is not used as a failure screenshot.

   ![Enabling the complete rule](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

10. Click Apply and wait for success.

    ![Actual rule state after Apply](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

11. Send `http://127.0.0.1:54561/guide/rules/order` through the proxy with an external client and inspect its hit. `54561` is the recording's dynamic port; use your own service.

    ![Hit after the matching request](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

12. Return to Capture and inspect the actual request header. [Header markers and returning to the Rule](#walkthrough-rules-tree-30-header-effect) have actual steps. The marker is a clickable inline source indicator, not a separate expandable panel.

    ![Actual x-interceptor-guide request Header in Capture](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

13. Send a nonmatching request and verify that it does not receive the same modification.

    ![Actual nonmatching-request checkpoint](../media/v0.1.1-alpha.1/rules/rules-13-nonmatching.png)

14. Disable `Guide test header` and Apply after the exercise.

    ![Disabling and applying this Header rule](../media/v0.1.1-alpha.1/rules/rules-14-disable.png)

**Expected result:** the matching request changes while unrelated traffic does not.

**Notes**

- Ordinary new rules and Capture rewrite drafts start disabled. The Capture Breakpoint shortcut is different: it creates, enables and applies immediately.
- Incomplete rules cannot be enabled, and incomplete fields prevent Apply. An empty condition list does not mean “match everything.”
- Editing, toggling and ordering a draft is not proof that Core has applied it.
- Missing-field validation does not prove every regex, JSON body or local path works. Verify actual traffic.

<a id="matchers"></a>
## Select matching conditions

**Steps**

This uses the separate `Guide matchers` recording. `59147` is its dynamic service port; replace the full-URL condition and the client's URL together, not just one of them.

1. Create `Guide matchers`.

   ![Creating the matcher rule](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-02-create.png)

2. Set Host to `127.0.0.1`.

   ![Host condition](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-03-host.png)

3. Add Method, then select `GET`.

   ![Adding Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-04-method-add.png)

   ![Selecting GET](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-05-method.png)

4. Add Path and enter `/guide/matchers/order`.

   ![Adding Path](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-06-path-add.png)

   ![Actual Path value](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-07-path.png)

5. Add URL and enter `http://127.0.0.1:59147/guide/matchers/order?guide=matcher-demo`.

   ![Adding URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-08-url-add.png)

   ![Actual complete URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-09-url.png)

6. Add Query with name `guide` and value `matcher-demo`.

   ![Adding Query](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-10-query-add.png)

   ![Actual Query name and value](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-11-query.png)

7. Add request Header condition `x-guide-match` / `yes`.

   ![Adding a Header condition](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-12-header-add.png)

   ![Actual request Header condition](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-13-header.png)

8. Add Status with range `200` to `200`.

   ![Adding Status](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-14-status-add.png)

   ![Response status range 200 to 200](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-15-status.png)

9. Add response MIME condition `application/json`.

   ![Adding MIME](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-16-mime-add.png)

   ![Actual Response MIME value](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-17-mime.png)

10. Select response phase for the effect Header, rather than attempting a request rewrite before response conditions are known.

    ![Response phase for the effect action](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-18-effect-phase.png)

11. Enter effect Header name `x-interceptor-guide` and value `matcher-demo`.

    ![Entering the effect Header name](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-19-effect-name.png)

    ![Entering the effect Header value](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-20-effect-value.png)

12. Enable the complete rule, then Apply.

    ![Enabling Guide matchers](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-21-enable.png)

    ![Applying the matcher rule](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-22-apply.png)

13. Send that GET with `x-guide-match: yes` and inspect the response Header when all conditions match.

    ![Positive GET matching all eight conditions](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-23-match.png)

14. Try POST as a negative case; inspect the absence of that effect when Method does not match.

    ![AND negative case: POST fails Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-24-no-match.png)

15. For other Host, Path or URL matching, select exact, contains or regex and check case sensitivity before testing.

    This example demonstrates eight-condition AND. The [separate matching-mode recording](#walkthrough-rules-matching-modes) compares actual positive/negative requests for contains, exact, regex, Aa case sensitivity and `application/*`. It uses `/guide/matching/Case` with case/suffix variants; `x-guide-case` distinguishes requests without adding query text to the Path being tested.

    ![Actually enabling exact Path matching](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-13-exact.png)

    ![Actual case-sensitive regex configuration](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-17-valid-regex.png)

    This release permits applying invalid regex `[` but it never matches. [The recording shows that limitation and correction](#walkthrough-rules-matching-modes-16-invalid-regex); an applied/compiled label alone does not prove valid syntax. The tutorial does not modify that product behavior.

| Condition | Use | Important distinction |
| --- | --- | --- |
| Method | Limit to `GET`, `POST`, etc. | Use the actual protocol method |
| Host | Limit the destination host | Do not enter a complete URL as Host |
| Path | Limit the endpoint path | Contains and regex have different meanings |
| URL | Match part of the complete address | Query data may be sensitive |
| Query | Match a parameter name and optional value | Decide whether its value matters |
| Header | Match a name and optional value | Select request or response phase |
| Status | Match a response status range | Evaluated after response headers arrive |
| MIME | Match content type, including supported wildcards | Select the appropriate phase |

**Expected result:** all conditions in one rule must match: they are AND, not OR.

**Notes:** response status, headers and MIME cannot be known before the response. A regex that cannot compile may simply not match; no missing-field warning is not a regex test.

<a id="headers-query"></a>
## Modify Header and Query

1. Use the first rule's narrow scope and request Header `set`, with name `x-interceptor-guide` and value `rules-demo`. The response-phase example is `Guide matchers` above; do not mix the two walkthroughs' values.

   ![Request Header name](../media/v0.1.1-alpha.1/rules/rules-07-header-name.png)

   ![Request Header value rules-demo](../media/v0.1.1-alpha.1/rules/rules-08-header-value.png)

2. Query setting uses a separate `Guide query` rule. After limiting its test endpoint, remove the default Header action and add Query.

   ![Removing Guide query's default Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-06-remove.png)

   ![Selecting Query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-07-action.png)

3. Set name `guide` and value `rewritten`; the incoming value was `original`. Query remove below is a separate example with different input.

   ![Query rewrite guide=rewritten](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-08-values.png)

4. Check action insertion order, enable and Apply. The editor currently provides add/remove controls, not independent action-card drag sorting. Rule-tree reordering is not action-card reordering. Add actions in the intended order and do not add unrelated actions to this exercise.

   ![Enabling Guide query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-09-enable.png)

   ![Applying the Query rewrite](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-10-apply.png)

5. Send a new matching request and check the final `guide=rewritten` Query against your service's observation.

   ![Actual final Query result](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-11-result.png)

6. Header append/remove and Query remove use `rules-operations`. Open Rules; this is not continued editing of the preceding `Guide query`.

   ![Actually opening Rules for the new operations example](../media/v0.1.1-alpha.1/rules-operations/rules-operations-01-rules.png)

7. Create `Guide operations`.

   ![Actually creating Guide operations](../media/v0.1.1-alpha.1/rules-operations/rules-operations-02-new.png)

8. Limit Host to `127.0.0.1` and Path to `/guide/rule-operations`, affecting only your test traffic.

   ![Actual Host and Path scope](../media/v0.1.1-alpha.1/rules-operations/rules-operations-03-scope.png)

9. Enter Header name `x-guide-list`.

   ![Actual Header name x-guide-list](../media/v0.1.1-alpha.1/rules-operations/rules-operations-04-header-name.png)

10. Select `append` with value `two`, rather than replacing the existing value with `two`.

    ![Actual append action and additional value](../media/v0.1.1-alpha.1/rules-operations/rules-operations-05-append.png)

11. Enable this rule.

    ![Actually enabling Guide operations](../media/v0.1.1-alpha.1/rules-operations/rules-operations-06-enable.png)

12. Apply append.

    ![Actually applying Header append](../media/v0.1.1-alpha.1/rules-operations/rules-operations-07-apply.png)

13. Send a matching request with `x-guide-list: one` and check that `one` is retained and `two` appended; inspect the actual multi-value representation.

    ![Actual result retaining one and appending two](../media/v0.1.1-alpha.1/rules-operations/rules-operations-08-appended.png)

14. Change the same Header action to `remove`.

    ![Actually selecting Header remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-09-remove.png)

15. Apply remove.

    ![Actually applying Header remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-10-apply-remove.png)

16. Send another matching request with that Header and verify `x-guide-list` is removed, not merely renamed in the editor.

    ![Actual Header removal result](../media/v0.1.1-alpha.1/rules-operations/rules-operations-11-removed.png)

17. Change this test rule's action to Query.

    ![Actually switching to the Query action](../media/v0.1.1-alpha.1/rules-operations/rules-operations-12-query-action.png)

18. Remove parameter `guide`. This incoming example is `guide=remove-me`, not the earlier `guide=original`.

    ![Actual parameter name for Query remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-13-query-remove.png)

19. Apply Query remove.

    ![Actually applying Query removal](../media/v0.1.1-alpha.1/rules-operations/rules-operations-14-apply-query.png)

20. Send again and verify the final request lacks that parameter. Request Body follows below; finish by [saving the disabled state](#order).

    ![The guide parameter actually removed](../media/v0.1.1-alpha.1/rules-operations/rules-operations-15-query-result.png)

**Expected result:** only explicitly configured changes are applied.

**Notes:** setting and appending are different operations. Later actions can overwrite earlier modifications of the same field.

<a id="response-header-evidence"></a>
### Response Header append/remove

This procedure uses a separate `Guide response and body`, not the request Header above. First follow the [creation and Apply recording](#walkthrough-rules-response-evidence): Host `127.0.0.1`, Path `/guide/response-evidence`, Response Header `x-guide-list`, operation `append`, value `two`. The origin returns `x-guide-list: one`; use the actual port in this recording's example table.

1. Return to Capture after Apply. [Step image](#walkthrough-rules-response-evidence-14-capture)

   ![Returning to Capture with the example path filter](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-14-capture.png)

2. Request `/guide/response-evidence/append` again. [Step image](#walkthrough-rules-response-evidence-15-append-request)

   ![A new append request appears in Capture](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-15-append-request.png)

3. Select that `append` request. [Step image](#walkthrough-rules-response-evidence-16-append-select)

   ![Selecting the same append request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-16-append-select.png)

4. Inspect the response in Headers: `one` is retained and `two` is appended, not substituted for it. [Step image](#walkthrough-rules-response-evidence-17-append-headers)

   ![Response Headers show one and the appended two](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-17-append-headers.png)

5. Return to the same Rule. [Step image](#walkthrough-rules-response-evidence-18-edit-remove)

   ![Returning to Guide response and body](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-18-edit-remove.png)

6. Change the operation to `remove`, keeping `x-guide-list` as the name. No value is needed. [Step image](#walkthrough-rules-response-evidence-19-remove)

   ![The actual Response remove configuration](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-19-remove.png)

7. Apply the configuration. [Step image](#walkthrough-rules-response-evidence-20-apply-remove)

   ![Response remove has been applied](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-20-apply-remove.png)

8. Return to Capture. [Step image](#walkthrough-rules-response-evidence-21-capture-remove)

   ![Preparing to inspect the new request in Capture](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-21-capture-remove.png)

9. Request `/guide/response-evidence/remove`; do not inspect the previously completed `append` as if it were new. [Step image](#walkthrough-rules-response-evidence-22-remove-request)

   ![The separate remove request appears](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-22-remove-request.png)

10. Select `remove` and inspect its response removal marker. The actual client response no longer contains `x-guide-list`; Capture may retain a removal marker to explain the rule effect, not to claim the field was still sent. [Step image](#walkthrough-rules-response-evidence-23-remove-select)

    ![The actual response Header removal effect](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-23-remove-select.png)

Continue with the [same Rule's body-version demonstration](#walkthrough-rules-response-evidence-24-edit-body), then [disable and Apply](#walkthrough-rules-response-evidence-52-disable). Do not delete the last Rule to bypass the documented release limitation.

<a id="body-status"></a>
## Replace a body or response status

1. In the narrowly scoped `Guide body`, remove the default Header and add Body. Its full creation/condition sequence is in the [action recording](#walkthrough-rules-actions-body-02-create).

   ![Removing the default Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-06-remove.png)

   ![Adding Body](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-07-action.png)

2. Select Response phase. The request example later in this section uses `Guide operations`; keep the two rules' bodies separate.

   ![Actual Response phase for Body](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-phase.png)

3. Enter the complete replacement `{"message":"guide-body"}`.

   ![Replacement body entered before sending](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-content.png)

4. Explicitly configure related headers when required; changing Content-Type alone does not convert bytes.

   The [encoding-boundary recording](#walkthrough-rules-response-controls-encoding-phase) owns `Guide response controls`: first it changes only Response `content-encoding` to `gzip`, while wire bytes remain `{"message":"guide-origin"}`. Only after explicitly replacing Body with `{"message":"guide-encoded-body"}` does the product generate actual gzip content using the final Headers.

   ![Header-only encoding produces an actual decode notice without changing bytes](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-header-only.png)

   ![Explicit Body replacement produces real gzip content that can be read](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-body-result.png)

   Each Header/Body input has its own step. Actual client decompression, the existing Content-Length update and Capture body are checked together; text appearance is not substituted for wire encoding.

5. Enable `Guide body`, then Apply.

   ![Enabling the Body rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-09-enable.png)

   ![Applying the Body rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-10-apply.png)

6. Request its matching endpoint and check Final `{"message":"guide-body"}`.

   ![Actual Final body after replacement](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

7. The status example uses a separate `Guide status` rule; add Status.

   ![Selecting the separate Status action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-07-action.png)

8. Enter `418`, not the synthetic-response example's `503`.

   ![Actual Status value 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-08-value.png)

9. Enable and Apply the Status rule, then send a matching request.

   ![Enabling the Status rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-09-enable.png)

   ![Applying the Status rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-10-apply.png)

10. Verify the client receives `418`, and inspect headers/body rather than only the rule's name.

    ![Actual status rewrite to 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-11-result.png)

11. Compare Original/Final where the product makes them available.

    A separate `Guide response and body` demonstrates request-body versions: Original is `{"message":"guide-original"}` and Final is `{"message":"guide-final"}`. The [version switching, copying, fullscreen and saving steps](capture.md#区分原始内容与规则修改结果) all use that recording, not the original response from `Guide body`.

    ![Actually selecting the request Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-34-original.png)

    ![Switching the same request back to Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-39-final-again.png)

    The new example then changes Body to the response phase. Final is `{"message":"guide-response-final"}` and Original is explicitly unavailable, not empty. [Step image](#walkthrough-rules-response-evidence-50-unavailable)

    ![Unavailable response Original and the actual Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-50-unavailable.png)

12. Request phase uses the preceding section's `Guide operations`, Host `127.0.0.1`, Path `/guide/rule-operations`. Change its action to request Body, not the response of `Guide body`.

    ![Actually selecting request-phase Body](../media/v0.1.1-alpha.1/rules-operations/rules-operations-16-body-action.png)

13. Enter complete replacement `{"message":"request-edited"}`; the client originally sends `{"message":"original"}`.

    ![Actual request-body replacement input](../media/v0.1.1-alpha.1/rules-operations/rules-operations-17-body-value.png)

14. Apply request-body replacement.

    ![Actually applying request-body replacement](../media/v0.1.1-alpha.1/rules-operations/rules-operations-18-apply-body.png)

15. Send again and check the origin receives complete `{"message":"request-edited"}`. Finish with the [management steps](#order): rename, inspect name search, then disable and Apply, rather than deleting the last rule.

    ![Origin actually receiving the complete replacement request](../media/v0.1.1-alpha.1/rules-operations/rules-operations-19-body-result.png)

**Expected result:** Body replaces the entire body; it is not an implicit search/replace over unknown source bytes. Status changes the response code.

**Notes:** an original response body replaced at the header stage may never have been observed. Unavailable is not empty, and a full diff is not guaranteed.

<a id="mock-response"></a>
## Return a synthetic response

**Goal:** test a fixed success, error or boundary response without changing the backend.

1. Create `Guide synthetic`, limit Host to `127.0.0.1` and use its test Path rather than all traffic.

   ![Naming Guide synthetic](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-03-name.png)

   ![Limiting the local Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-04-host.png)

   ![Actual test Path for this rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-05-path.png)

2. Remove the default Header and add Synthetic response.

   ![Removing the default Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-06-remove.png)

   ![Adding Synthetic response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-07-action.png)

3. Enter status `503`.

   ![Synthetic response status 503](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-status.png)

4. Enter body `{"message":"guide maintenance"}`. Add response Headers explicitly when needed. The [additional-Header recording](#walkthrough-rules-response-controls-synthetic-add-type) separately uses `Guide response controls`, adds `content-type: application/json` and `x-guide-maintenance: planned`, and uses `{"message":"guide-maintenance"}`. Keep the two examples' body spelling distinct.

   ![Actual synthetic response body input](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-body.png)

5. Enable and Apply.

   ![Enabling the synthetic response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-09-enable.png)

   ![Applying the synthetic response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-10-apply.png)

6. Access the matching endpoint through the proxy and check `503` with `guide maintenance`, not the normal origin result.

   ![Actual synthetic-response checkpoint](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-11-result.png)

7. Disable the rule and Apply when finished, then verify the normal route again.

   [Disabling Synthetic and observing recovery](#walkthrough-rules-response-controls-synthetic-back) has its own steps: disable and Apply, then send new `/guide/response-controls/synthetic-off` and receive origin status 200 with `{"message":"guide-origin"}`. It does not reuse Header-rule disabling.

   ![Actual origin response after Synthetic is disabled](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-restored.png)

**Expected result:** the rule supplies a response without waiting for the origin's normal result.

**Notes:** this short-circuits normal forwarding and subsequent applicable processing. Do not use the real origin response as proof of what a synthetic response should contain.

<a id="mapping"></a>
## Map a local file or another destination

**Map Local**

1. Capture public test text from your own service. This body is `Hello from guide-local.txt`; do not use credentials, private keys or personal files.

   ![Actual captured public test text](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-capture.png)

2. Use product Save body to export `guide-local.txt` and note its chosen absolute path. This is the input file's source, not a hand-fabricated import.

   ![Real native Save panel exporting guide-local.txt](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-save.png)

3. Create `Guide map-local`, limiting Host to `127.0.0.1` and the test Path.

   ![Naming the local mapping rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-03-name.png)

   ![Limiting Host](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-04-host.png)

   ![Limiting the local-mapping test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-05-path.png)

4. Remove the default Header and add Map Local.

   ![Removing the default action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-06-remove.png)

   ![Adding Map Local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-07-action.png)

5. Enter the just-exported file's absolute Local path; this is not a native file picker. The pictured directory belongs only to the recording machine, not a fixed path to copy.

   ![Local path points to that same product-exported guide-local.txt](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-08-path.png)

6. Confirm the file remains readable, enable and Apply. Missing/unreadable-file failures remain image pending.

   ![Enabling Map Local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-09-enable.png)

   ![Applying Map Local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-10-apply.png)

7. Request the matching address and inspect `Hello from guide-local.txt` and its actual response type.

   ![The exported file actually returned as the response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-11-result.png)

**Expected result:** the specified file supplies the response.

**Map Remote**

1. Prepare a destination service you are authorized to use.

   Starting the service is a prerequisite, not an App operation. This example uses an owned loopback service with a recording-assigned port. The [cross-scheme recording](#walkthrough-rules-routing) also routes HTTPS `localhost` to HTTP `127.0.0.1` at a different port and path, then checks the original destination after disabling the rule.

2. In `Guide map-remote`, limit Host to `127.0.0.1` and source Path to `/guide/rule-actions/remote-source`; remove the default Header and add Map Remote.

   ![Actual source Path condition](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-05-path.png)

   ![Removing the default Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-06-remove.png)

   ![Selecting Map Remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-07-action.png)

3. This example changes only Path to `/guide/rule-actions/remote-target`, preserving scheme, host and port. Changing those other fields remains image pending. Never put a full URL in Host or create a loop.

   ![Actual configuration changing only the destination Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-08-path.png)

4. Enable, then Apply.

   ![Enabling Map Remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-09-enable.png)

   ![Applying Map Remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-10-apply.png)

5. Call the original `remote-source` entry and verify the destination receives `remote-target`.

   ![Actual destination-path change](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-11-result.png)

**Expected result:** the client uses its original entry point while the proxy changes the actual destination.

**Notes:** rules do not create files or services. A local path may not exist on another machine. Map Local consumes a file; Save body writes one.

<a id="block-delay"></a>
## Block, delay or pause traffic

1. Limit `Guide delay` to the local test endpoint, not everyday traffic.

   ![Actual narrow conditions for Delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-05-path.png)

2. Remove the default Header, add Delay, check request/response phase and enter `500` milliseconds.

   ![Removing the default Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-06-remove.png)

   ![Selecting Delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-07-action.png)

   ![Actual delay value 500 milliseconds](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-08-value.png)

3. Enable and Apply.

   ![Enabling Delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-09-enable.png)

   ![Applying Delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-10-apply.png)

4. Send again and inspect the actual wait; total elapsed time need not equal exactly `500`.

   ![Actual delayed-request result](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-11-result.png)

5. Blocking uses a separate `Guide block` and its test Path.

   ![Block conditions belong to a different rule from Delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-05-path.png)

6. Remove the default Header and choose Block. The [separate response-control recording](#walkthrough-rules-response-controls-block-reset) individually selects, applies and sends new requests for `reset` and `close`. Each has an actual blocked result; one block is not used as both modes.

   ![Removing the default Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-06-remove.png)

   ![Actual Block action configuration](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-07-action.png)

7. Enable and Apply Block.

   ![Enabling Block](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-09-enable.png)

   ![Applying Block](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-10-apply.png)

8. Request again and inspect the client's actual blocked result.

   ![Actually blocked request](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-11-result.png)

9. Add Breakpoint when a human decision is required. This image comes from the separate `Guide request breakpoint`; follow [Breakpoints](breakpoints.md#http). It is not a renamed Block rule.

   ![Adding the human breakpoint action in its own recording](../media/v0.1.1-alpha.1/breakpoints/breakpoints-08-add-breakpoint.png)

10. Disable or remove actions and Apply after the exercise.

    [Recovery after Delay](#walkthrough-rules-response-controls-delay-back) and [recovery after Block](#walkthrough-rules-response-controls-block-back) each use their own new request and origin result, not breakpoint cleanup pictures.

**Expected result:** the client experiences a real block, delay or pause, not just a UI marker.

**Notes:** Delay is not bandwidth throttling. Multiple delay actions follow the actual maximum-delay semantics rather than being blindly summed. Breakpoints do not have an automatic continuation timeout.

<a id="order"></a>
## Organize, reorder, disable and delete rules

This uses `rules-organization`. First follow its [creation steps](#walkthrough-rules-organization-first-01-new) for `Guide first` and `Guide second`: both use Host `127.0.0.1` and Path `/guide/rule-order`, setting `x-guide-order` to `first` and `second` respectively.

**Known alpha.1 limitation:** deleting the last rule so that the Rules tree becomes empty was observed to leave it dirty without an Apply entry. Persistent deletion cannot be completed through that state. This is an observed failure, not merely a missing image, and was not fixed here. The actual `rules-operations` cleanup retains the rule, disables it and applies; it is not described as successful deletion.

1. Apply both rules.

   ![Applying the initial two-rule order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-02-apply.png)

2. Send a matching request and check that the later `second` value overwrites the earlier one.

   ![Actual result second before reordering](../media/v0.1.1-alpha.1/rules-organization/rules-organization-03-before.png)

3. Drag `Guide second` before `Guide first` and inspect the visible tree order.

   ![Actual order after dragging](../media/v0.1.1-alpha.1/rules-organization/rules-organization-04-reorder.png)

4. Apply the new order.

   ![Applying the new rule order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-05-apply-order.png)

5. Send again and check that the final value is now `first`.

   ![Actual result first after reordering](../media/v0.1.1-alpha.1/rules-organization/rules-organization-06-after.png)

6. Create folder `Guide rules`.

   ![Creating Guide rules](../media/v0.1.1-alpha.1/rules-organization/rules-organization-07-folder.png)

7. Move `Guide second` into it.

   ![Moving Guide second first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-08-move-second.png)

8. Move `Guide first` into it. Folders support at most three levels. The [separate hierarchy recording](#walkthrough-rules-tree-02-root-folder) creates `Guide hierarchy > Guide API > Guide final` one level at a time and actually inspects the disabled fourth-level entry.

   ![Moving Guide first next](../media/v0.1.1-alpha.1/rules-organization/rules-organization-09-move-first.png)

9. Apply the folder structure.

   ![Saving the actual folder hierarchy](../media/v0.1.1-alpha.1/rules-organization/rules-organization-10-apply-folder.png)

10. Name management uses the separate `rules-operations` example: rename the edited `Guide operations` to `Guide operations done`. This renames a rule, not the preceding `Guide rules` folder.

    ![Actually renaming to Guide operations done](../media/v0.1.1-alpha.1/rules-operations/rules-operations-20-rename.png)

11. Locate that rule in name search, not by request URL.

    ![Actually locating the demonstration rule by name](../media/v0.1.1-alpha.1/rules-operations/rules-operations-21-search.png)

    [Renaming and searching a folder](#walkthrough-rules-tree-19-rename-folder) use a separate explicit example: `Guide API` becomes `Guide routes`, followed by name search and collapsing/expanding `Guide hierarchy`. The existing child Rule retains its identity.

    ![Actually searching the Guide routes folder name](../media/v0.1.1-alpha.1/rules-tree/rules-tree-22-folder-search.png)

12. Retain but disable `Guide operations done` after the demonstration.

    ![Actually retaining and disabling the demo rule](../media/v0.1.1-alpha.1/rules-operations/rules-operations-22-disable.png)

13. Apply its disabled state.

    ![Actually saving the disabled state, not deletion](../media/v0.1.1-alpha.1/rules-operations/rules-operations-23-apply-disabled.png)

14. Before deleting nodes, distinguish the empty-tree limitation above. An empty view after deleting the last rule is not a saved result.

    **Blocked — product limitation:** alpha.1 leaves an empty tree dirty without Apply; persistent last-rule deletion failed in the actual run and is neither fixed nor bypassed here. The [non-last deletion recording](#walkthrough-rules-tree-43-delete-nested-menu) uses two Rules that actually demonstrate later-write precedence. It deletes only `Guide nested priority` and the emptied folders, applies them, then proves `Guide root priority` still works on a new request. The final Rule remains disabled; this is not successful empty-tree deletion.

    ![The actual saved state after deleting a non-last Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-45-apply-deletion.png)

    ![Deleting empty folders while retaining the used root Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-48-apply-folders.png)

**Expected result:** visible leaf order determines execution order; folder structure is organizational.

**Notes**

- Several rules can act on one request; the first match does not always stop evaluation.
- Row action tags are only a summary. Hover the summary to inspect the complete ordered actions.
- Later writes can replace earlier writes; synthetic responses and Block short-circuit.
- Breakpoint inspection occurs after ordinary modifications, so its snapshot may already contain rule changes.
- Disabling a rule and resolving already-waiting requests are separate decisions.

<a id="effects"></a>
## Verify effects and handle conflicts

1. Send a new proxied request after Apply and inspect its hit. This reuses the actual `Guide test header` case.

   ![Actual matching request and rule hit](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

2. Use the rule menu to find related Capture records where available.

   [Rule-menu navigation to Capture](#walkthrough-rules-tree-27-rule-menu) uses an actual `Guide nested priority` hit. Its Rule facet is selected on arrival, and the matched request can be inspected.

   ![Opening the corresponding Capture request from the Rule menu](../media/v0.1.1-alpha.1/rules-tree/rules-tree-28-show-requests.png)

3. Inspect actual Header/Body results. These images belong to the Header example and separate `Guide body`, not one request. The Header marker is an inline clickable control; [following it back to the same Rule](#walkthrough-rules-tree-30-header-effect) has actual footage. There is no separate marker expansion panel.

   ![Actual request header from the Header example](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

   ![Actual Final from the Body example](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

4. On a revision conflict, preserve needed edits before choosing Reload. Reload discards the local draft and loads the latest tree.

   The [conflict recording](#walkthrough-rules-conflict) retains a local draft while an approved MCP caller writes another revision through the same App, then explicitly uses Reload. It does not fabricate a conflict response or automatically overwrite the other writer.

   ![Local draft retained after the second writer commits](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-15-draft-retained.png)

   ![Explicitly reloading the latest rules](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-17-reload.png)

5. Reapply intentional changes and verify; do not repeatedly submit a stale tree over another writer's changes.

   ![Editing the latest revision and applying](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-20-apply-merged.png)

   ![A new request verifies the merged Header](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-21-merged-request.png)

**Expected result:** confirm actual effects rather than guessing bytes from a rule name or count.

**Notes:** Rules still act while Recording is paused, but no new Capture evidence is created. Saved revision, current draft and validity are distinct.

<a id="import-export"></a>
## Import and export rules

1. Review addresses, bodies and local paths for sensitive data.

   Review addresses, bodies and local paths before sharing; this is a safety requirement, not a promise of automatic redaction. The following file operation uses the public ordered examples in `Guide rules`, not other rules, and does not send files to a third party.

2. Use Export and save `guide-rules.json` in the real native dialog.

   ![Actual native Rules Export save panel](../media/v0.1.1-alpha.1/rules-organization/rules-organization-11-export.png)

3. Inspect the actual exported tree.

   ![Checking product-exported guide-rules.json](../media/v0.1.1-alpha.1/rules-organization/rules-organization-12-exported.png)

4. Use Import and select that same file in the native open dialog.

   ![Selecting the just-exported rule file](../media/v0.1.1-alpha.1/rules-organization/rules-organization-13-import-file.png)

5. Review rule/folder counts, enabled rules and skipped items; enabled rules can immediately affect traffic.

   ![Actual preview warning about enabled rules](../media/v0.1.1-alpha.1/rules-organization/rules-organization-14-preview.png)

6. Cancel first and check that the original tree remains.

   ![Original tree after actually cancelling preview](../media/v0.1.1-alpha.1/rules-organization/rules-organization-15-cancel.png)

7. Import again and select the same `guide-rules.json`.

   ![Selecting the same file again](../media/v0.1.1-alpha.1/rules-organization/rules-organization-16-import-again.png)

8. Accept the effects, confirm and inspect the appended root tree and enabled state; do not expect existing items to be overwritten.

   ![Actual appended result after confirmation](../media/v0.1.1-alpha.1/rules-organization/rules-organization-17-confirm.png)

**Expected result:** import creates new local identities and appends, without overwriting, merging or deduplicating names. Confirmation saves the result; imported enabled rules can immediately affect subsequent traffic.

**Notes:** UI export uses the current editor tree; Agent/MCP export uses the saved tree. Repeated import appends again and can cause repeated matches. File-level errors reject the file; invalid nodes are reported individually.

<a id="message-editing"></a>
## Coordinate headers and bodies

The same core principles apply to related HTTP Breakpoint and Composer editing:

- Header-only edits do not automatically transcode, compress or decompress the existing body.
- Explicit body replacement uses the chosen body mode and final headers. An existing Content-Length not explicitly edited by the user can be maintained for the replacement.
- Explicitly setting or deleting Content-Length preserves that choice. The App does not silently alter the body to make the declared length true.
- Transfer-Encoding, compression, character sets and protocol constraints can produce genuine send errors. Editor acceptance does not prove wire correctness.
- ETag, signatures and Digest are not automatically recalculated after a body change.

Start with a simple header and small text body, then add encoding changes one at a time.

<!-- recorded-walkthrough:rules-actions:start -->
<a id="walkthrough-rules-actions"></a>
## Recorded walkthrough: rewrite, mock, delay, block and map

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-actions-query-01-rules"></a>
### 01 · Return to Rules

![01 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-01-rules.png)

<a id="walkthrough-rules-actions-query-02-create"></a>
### 02 · Create a query Rule

![02 · Create a query Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-02-create.png)

<a id="walkthrough-rules-actions-query-03-name"></a>
### 03 · Name the Rule Guide query

![03 · Name the Rule Guide query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-03-name.png)

<a id="walkthrough-rules-actions-query-04-host"></a>
### 04 · Restrict Host to 127.0.0.1

![04 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-04-host.png)

<a id="walkthrough-rules-actions-query-05-path"></a>
### 05 · Enter this action’s test Path

![05 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-05-path.png)

<a id="walkthrough-rules-actions-query-06-remove"></a>
### 06 · Remove the default Header action

![06 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-06-remove.png)

<a id="walkthrough-rules-actions-query-07-action"></a>
### 07 · Select the query action

![07 · Select the query action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-07-action.png)

<a id="walkthrough-rules-actions-query-08-values"></a>
### 08 · Set guide=rewritten

![08 · Set guide=rewritten](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-08-values.png)

<a id="walkthrough-rules-actions-query-09-enable"></a>
### 09 · Enable the current Rule

![09 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-09-enable.png)

<a id="walkthrough-rules-actions-query-10-apply"></a>
### 10 · Apply to the real proxy

![10 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-10-apply.png)

<a id="walkthrough-rules-actions-query-11-result"></a>
### 11 · Verify the final Query

![11 · Verify the final Query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-11-result.png)

<a id="walkthrough-rules-actions-body-01-rules"></a>
### 12 · Return to Rules

![12 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-01-rules.png)

<a id="walkthrough-rules-actions-body-02-create"></a>
### 13 · Create a body Rule

![13 · Create a body Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-02-create.png)

<a id="walkthrough-rules-actions-body-03-name"></a>
### 14 · Name the Rule Guide body

![14 · Name the Rule Guide body](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-03-name.png)

<a id="walkthrough-rules-actions-body-04-host"></a>
### 15 · Restrict Host to 127.0.0.1

![15 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-04-host.png)

<a id="walkthrough-rules-actions-body-05-path"></a>
### 16 · Enter this action’s test Path

![16 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-05-path.png)

<a id="walkthrough-rules-actions-body-06-remove"></a>
### 17 · Remove the default Header action

![17 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-06-remove.png)

<a id="walkthrough-rules-actions-body-07-action"></a>
### 18 · Select the body action

![18 · Select the body action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-07-action.png)

<a id="walkthrough-rules-actions-body-08-phase"></a>
### 19 · Select the response phase

![19 · Select the response phase](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-phase.png)

<a id="walkthrough-rules-actions-body-08-content"></a>
### 20 · Enter the guide-body replacement

![20 · Enter the guide-body replacement](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-content.png)

<a id="walkthrough-rules-actions-body-09-enable"></a>
### 21 · Enable the current Rule

![21 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-09-enable.png)

<a id="walkthrough-rules-actions-body-10-apply"></a>
### 22 · Apply to the real proxy

![22 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-10-apply.png)

<a id="walkthrough-rules-actions-body-11-result"></a>
### 23 · Inspect the Final body

![23 · Inspect the Final body](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

<a id="walkthrough-rules-actions-status-01-rules"></a>
### 24 · Return to Rules

![24 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-01-rules.png)

<a id="walkthrough-rules-actions-status-02-create"></a>
### 25 · Create a status Rule

![25 · Create a status Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-02-create.png)

<a id="walkthrough-rules-actions-status-03-name"></a>
### 26 · Name the Rule Guide status

![26 · Name the Rule Guide status](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-03-name.png)

<a id="walkthrough-rules-actions-status-04-host"></a>
### 27 · Restrict Host to 127.0.0.1

![27 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-04-host.png)

<a id="walkthrough-rules-actions-status-05-path"></a>
### 28 · Enter this action’s test Path

![28 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-05-path.png)

<a id="walkthrough-rules-actions-status-06-remove"></a>
### 29 · Remove the default Header action

![29 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-06-remove.png)

<a id="walkthrough-rules-actions-status-07-action"></a>
### 30 · Select the status action

![30 · Select the status action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-07-action.png)

<a id="walkthrough-rules-actions-status-08-value"></a>
### 31 · Set status 418

![31 · Set status 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-08-value.png)

<a id="walkthrough-rules-actions-status-09-enable"></a>
### 32 · Enable the current Rule

![32 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-09-enable.png)

<a id="walkthrough-rules-actions-status-10-apply"></a>
### 33 · Apply to the real proxy

![33 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-10-apply.png)

<a id="walkthrough-rules-actions-status-11-result"></a>
### 34 · Verify HTTP 418

![34 · Verify HTTP 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-11-result.png)

<a id="walkthrough-rules-actions-synthetic-01-rules"></a>
### 35 · Return to Rules

![35 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-01-rules.png)

<a id="walkthrough-rules-actions-synthetic-02-create"></a>
### 36 · Create a synthetic Rule

![36 · Create a synthetic Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-02-create.png)

<a id="walkthrough-rules-actions-synthetic-03-name"></a>
### 37 · Name the Rule Guide synthetic

![37 · Name the Rule Guide synthetic](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-03-name.png)

<a id="walkthrough-rules-actions-synthetic-04-host"></a>
### 38 · Restrict Host to 127.0.0.1

![38 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-04-host.png)

<a id="walkthrough-rules-actions-synthetic-05-path"></a>
### 39 · Enter this action’s test Path

![39 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-05-path.png)

<a id="walkthrough-rules-actions-synthetic-06-remove"></a>
### 40 · Remove the default Header action

![40 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-06-remove.png)

<a id="walkthrough-rules-actions-synthetic-07-action"></a>
### 41 · Select the synthetic action

![41 · Select the synthetic action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-07-action.png)

<a id="walkthrough-rules-actions-synthetic-08-status"></a>
### 42 · Set mock status 503

![42 · Set mock status 503](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-status.png)

<a id="walkthrough-rules-actions-synthetic-08-body"></a>
### 43 · Enter the mock response

![43 · Enter the mock response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-body.png)

<a id="walkthrough-rules-actions-synthetic-09-enable"></a>
### 44 · Enable the current Rule

![44 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-09-enable.png)

<a id="walkthrough-rules-actions-synthetic-10-apply"></a>
### 45 · Apply to the real proxy

![45 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-10-apply.png)

<a id="walkthrough-rules-actions-synthetic-11-result"></a>
### 46 · Verify the origin was not called

![46 · Verify the origin was not called](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-11-result.png)

<a id="walkthrough-rules-actions-delay-01-rules"></a>
### 47 · Return to Rules

![47 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-01-rules.png)

<a id="walkthrough-rules-actions-delay-02-create"></a>
### 48 · Create a delay Rule

![48 · Create a delay Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-02-create.png)

<a id="walkthrough-rules-actions-delay-03-name"></a>
### 49 · Name the Rule Guide delay

![49 · Name the Rule Guide delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-03-name.png)

<a id="walkthrough-rules-actions-delay-04-host"></a>
### 50 · Restrict Host to 127.0.0.1

![50 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-04-host.png)

<a id="walkthrough-rules-actions-delay-05-path"></a>
### 51 · Enter this action’s test Path

![51 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-05-path.png)

<a id="walkthrough-rules-actions-delay-06-remove"></a>
### 52 · Remove the default Header action

![52 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-06-remove.png)

<a id="walkthrough-rules-actions-delay-07-action"></a>
### 53 · Select the delay action

![53 · Select the delay action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-07-action.png)

<a id="walkthrough-rules-actions-delay-08-value"></a>
### 54 · Set 500 milliseconds

![54 · Set 500 milliseconds](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-08-value.png)

<a id="walkthrough-rules-actions-delay-09-enable"></a>
### 55 · Enable the current Rule

![55 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-09-enable.png)

<a id="walkthrough-rules-actions-delay-10-apply"></a>
### 56 · Apply to the real proxy

![56 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-10-apply.png)

<a id="walkthrough-rules-actions-delay-11-result"></a>
### 57 · Verify the actual delay

![57 · Verify the actual delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-11-result.png)

<a id="walkthrough-rules-actions-block-01-rules"></a>
### 58 · Return to Rules

![58 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-01-rules.png)

<a id="walkthrough-rules-actions-block-02-create"></a>
### 59 · Create a block Rule

![59 · Create a block Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-02-create.png)

<a id="walkthrough-rules-actions-block-03-name"></a>
### 60 · Name the Rule Guide block

![60 · Name the Rule Guide block](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-03-name.png)

<a id="walkthrough-rules-actions-block-04-host"></a>
### 61 · Restrict Host to 127.0.0.1

![61 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-04-host.png)

<a id="walkthrough-rules-actions-block-05-path"></a>
### 62 · Enter this action’s test Path

![62 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-05-path.png)

<a id="walkthrough-rules-actions-block-06-remove"></a>
### 63 · Remove the default Header action

![63 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-06-remove.png)

<a id="walkthrough-rules-actions-block-07-action"></a>
### 64 · Select the block action

![64 · Select the block action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-07-action.png)

<a id="walkthrough-rules-actions-block-09-enable"></a>
### 65 · Enable the current Rule

![65 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-09-enable.png)

<a id="walkthrough-rules-actions-block-10-apply"></a>
### 66 · Apply to the real proxy

![66 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-10-apply.png)

<a id="walkthrough-rules-actions-block-11-result"></a>
### 67 · Verify the blocked request

![67 · Verify the blocked request](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-11-result.png)

<a id="walkthrough-rules-actions-map-remote-01-rules"></a>
### 68 · Return to Rules

![68 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-01-rules.png)

<a id="walkthrough-rules-actions-map-remote-02-create"></a>
### 69 · Create a map-remote Rule

![69 · Create a map-remote Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-02-create.png)

<a id="walkthrough-rules-actions-map-remote-03-name"></a>
### 70 · Name the Rule Guide map-remote

![70 · Name the Rule Guide map-remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-03-name.png)

<a id="walkthrough-rules-actions-map-remote-04-host"></a>
### 71 · Restrict Host to 127.0.0.1

![71 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-04-host.png)

<a id="walkthrough-rules-actions-map-remote-05-path"></a>
### 72 · Enter this action’s test Path

![72 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-05-path.png)

<a id="walkthrough-rules-actions-map-remote-06-remove"></a>
### 73 · Remove the default Header action

![73 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-06-remove.png)

<a id="walkthrough-rules-actions-map-remote-07-action"></a>
### 74 · Select the map-remote action

![74 · Select the map-remote action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-07-action.png)

<a id="walkthrough-rules-actions-map-remote-08-path"></a>
### 75 · Change only the destination Path

![75 · Change only the destination Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-08-path.png)

<a id="walkthrough-rules-actions-map-remote-09-enable"></a>
### 76 · Enable the current Rule

![76 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-09-enable.png)

<a id="walkthrough-rules-actions-map-remote-10-apply"></a>
### 77 · Apply to the real proxy

![77 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-10-apply.png)

<a id="walkthrough-rules-actions-map-remote-11-result"></a>
### 78 · Verify the mapped destination

![78 · Verify the mapped destination](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-11-result.png)

<a id="walkthrough-rules-actions-map-local-00-capture"></a>
### 79 · Capture public example text

![79 · Capture public example text](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-capture.png)

<a id="walkthrough-rules-actions-map-local-00-save"></a>
### 80 · Export guide-local.txt

![80 · Export guide-local.txt](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-save.png)

<a id="walkthrough-rules-actions-map-local-01-rules"></a>
### 81 · Return to Rules

![81 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-01-rules.png)

<a id="walkthrough-rules-actions-map-local-02-create"></a>
### 82 · Create a map-local Rule

![82 · Create a map-local Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-02-create.png)

<a id="walkthrough-rules-actions-map-local-03-name"></a>
### 83 · Name the Rule Guide map-local

![83 · Name the Rule Guide map-local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-03-name.png)

<a id="walkthrough-rules-actions-map-local-04-host"></a>
### 84 · Restrict Host to 127.0.0.1

![84 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-04-host.png)

<a id="walkthrough-rules-actions-map-local-05-path"></a>
### 85 · Enter this action’s test Path

![85 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-05-path.png)

<a id="walkthrough-rules-actions-map-local-06-remove"></a>
### 86 · Remove the default Header action

![86 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-06-remove.png)

<a id="walkthrough-rules-actions-map-local-07-action"></a>
### 87 · Select the map-local action

![87 · Select the map-local action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-07-action.png)

<a id="walkthrough-rules-actions-map-local-08-path"></a>
### 88 · Enter the product-exported file path

![88 · Enter the product-exported file path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-08-path.png)

<a id="walkthrough-rules-actions-map-local-09-enable"></a>
### 89 · Enable the current Rule

![89 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-09-enable.png)

<a id="walkthrough-rules-actions-map-local-10-apply"></a>
### 90 · Apply to the real proxy

![90 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-10-apply.png)

<a id="walkthrough-rules-actions-map-local-11-result"></a>
### 91 · Verify the local-file response

![91 · Verify the local-file response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-11-result.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-actions:end -->

<!-- recorded-walkthrough:rules-matchers:start -->
<a id="walkthrough-rules-matchers"></a>
## Recorded walkthrough: all eight conditions and AND matching

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-matchers-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-01-rules.png)

<a id="walkthrough-rules-matchers-02-create"></a>
### 02 · Create Guide matchers

![02 · Create Guide matchers](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-02-create.png)

<a id="walkthrough-rules-matchers-03-host"></a>
### 03 · Set Host to 127.0.0.1

![03 · Set Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-03-host.png)

<a id="walkthrough-rules-matchers-04-method-add"></a>
### 04 · Add Method

![04 · Add Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-04-method-add.png)

<a id="walkthrough-rules-matchers-05-method"></a>
### 05 · Set Method to GET

![05 · Set Method to GET](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-05-method.png)

<a id="walkthrough-rules-matchers-06-path-add"></a>
### 06 · Add Path

![06 · Add Path](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-06-path-add.png)

<a id="walkthrough-rules-matchers-07-path"></a>
### 07 · Enter the endpoint Path

![07 · Enter the endpoint Path](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-07-path.png)

<a id="walkthrough-rules-matchers-08-url-add"></a>
### 08 · Add URL

![08 · Add URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-08-url-add.png)

<a id="walkthrough-rules-matchers-09-url"></a>
### 09 · Enter the complete example URL

![09 · Enter the complete example URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-09-url.png)

<a id="walkthrough-rules-matchers-10-query-add"></a>
### 10 · Add Query

![10 · Add Query](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-10-query-add.png)

<a id="walkthrough-rules-matchers-11-query"></a>
### 11 · Set the Query pair

![11 · Set the Query pair](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-11-query.png)

<a id="walkthrough-rules-matchers-12-header-add"></a>
### 12 · Add Header

![12 · Add Header](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-12-header-add.png)

<a id="walkthrough-rules-matchers-13-header"></a>
### 13 · Set the request Header pair

![13 · Set the request Header pair](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-13-header.png)

<a id="walkthrough-rules-matchers-14-status-add"></a>
### 14 · Add Status

![14 · Add Status](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-14-status-add.png)

<a id="walkthrough-rules-matchers-15-status"></a>
### 15 · Set range 200 to 200

![15 · Set range 200 to 200](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-15-status.png)

<a id="walkthrough-rules-matchers-16-mime-add"></a>
### 16 · Add MIME

![16 · Add MIME](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-16-mime-add.png)

<a id="walkthrough-rules-matchers-17-mime"></a>
### 17 · Set the response MIME

![17 · Set the response MIME](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-17-mime.png)

<a id="walkthrough-rules-matchers-18-effect-phase"></a>
### 18 · Select response Header editing

![18 · Select response Header editing](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-18-effect-phase.png)

<a id="walkthrough-rules-matchers-19-effect-name"></a>
### 19 · Enter the effect Header name

![19 · Enter the effect Header name](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-19-effect-name.png)

<a id="walkthrough-rules-matchers-20-effect-value"></a>
### 20 · Enter the effect value

![20 · Enter the effect value](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-20-effect-value.png)

<a id="walkthrough-rules-matchers-21-enable"></a>
### 21 · Enable the complete Rule

![21 · Enable the complete Rule](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-21-enable.png)

<a id="walkthrough-rules-matchers-22-apply"></a>
### 22 · Apply

![22 · Apply](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-22-apply.png)

<a id="walkthrough-rules-matchers-23-match"></a>
### 23 · Send a GET satisfying every condition

![23 · Send a GET satisfying every condition](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-23-match.png)

<a id="walkthrough-rules-matchers-24-no-match"></a>
### 24 · A POST does not satisfy Method

![24 · A POST does not satisfy Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-24-no-match.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-matchers:end -->

<!-- recorded-walkthrough:rules-organization:start -->
<a id="walkthrough-rules-organization"></a>
## Recorded walkthrough: precedence, folders and Rule files

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-organization-01-open"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-organization/rules-organization-01-open.png)

<a id="walkthrough-rules-organization-first-01-new"></a>
### 02 · Create Guide first

![02 · Create Guide first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-01-new.png)

<a id="walkthrough-rules-organization-first-02-host"></a>
### 03 · Enter Host

![03 · Enter Host](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-02-host.png)

<a id="walkthrough-rules-organization-first-03-path"></a>
### 04 · Restrict the example Path

![04 · Restrict the example Path](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-03-path.png)

<a id="walkthrough-rules-organization-first-04-header"></a>
### 05 · Enter x-guide-order

![05 · Enter x-guide-order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-04-header.png)

<a id="walkthrough-rules-organization-first-05-enable"></a>
### 06 · Enable this Rule

![06 · Enable this Rule](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-05-enable.png)

<a id="walkthrough-rules-organization-second-01-new"></a>
### 07 · Create Guide second

![07 · Create Guide second](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-01-new.png)

<a id="walkthrough-rules-organization-second-02-host"></a>
### 08 · Enter Host

![08 · Enter Host](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-02-host.png)

<a id="walkthrough-rules-organization-second-03-path"></a>
### 09 · Restrict the example Path

![09 · Restrict the example Path](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-03-path.png)

<a id="walkthrough-rules-organization-second-04-header"></a>
### 10 · Enter x-guide-order

![10 · Enter x-guide-order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-04-header.png)

<a id="walkthrough-rules-organization-second-05-enable"></a>
### 11 · Enable this Rule

![11 · Enable this Rule](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-05-enable.png)

<a id="walkthrough-rules-organization-02-apply"></a>
### 12 · Apply both Rules

![12 · Apply both Rules](../media/v0.1.1-alpha.1/rules-organization/rules-organization-02-apply.png)

<a id="walkthrough-rules-organization-03-before"></a>
### 13 · Verify second wins initially

![13 · Verify second wins initially](../media/v0.1.1-alpha.1/rules-organization/rules-organization-03-before.png)

<a id="walkthrough-rules-organization-04-reorder"></a>
### 14 · Drag second before first

![14 · Drag second before first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-04-reorder.png)

<a id="walkthrough-rules-organization-05-apply-order"></a>
### 15 · Apply the new order

![15 · Apply the new order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-05-apply-order.png)

<a id="walkthrough-rules-organization-06-after"></a>
### 16 · Verify first now wins

![16 · Verify first now wins](../media/v0.1.1-alpha.1/rules-organization/rules-organization-06-after.png)

<a id="walkthrough-rules-organization-07-folder"></a>
### 17 · Create the Guide rules folder

![17 · Create the Guide rules folder](../media/v0.1.1-alpha.1/rules-organization/rules-organization-07-folder.png)

<a id="walkthrough-rules-organization-08-move-second"></a>
### 18 · Move second into the folder

![18 · Move second into the folder](../media/v0.1.1-alpha.1/rules-organization/rules-organization-08-move-second.png)

<a id="walkthrough-rules-organization-09-move-first"></a>
### 19 · Move first into the folder

![19 · Move first into the folder](../media/v0.1.1-alpha.1/rules-organization/rules-organization-09-move-first.png)

<a id="walkthrough-rules-organization-10-apply-folder"></a>
### 20 · Apply the folder structure

![20 · Apply the folder structure](../media/v0.1.1-alpha.1/rules-organization/rules-organization-10-apply-folder.png)

<a id="walkthrough-rules-organization-11-export"></a>
### 21 · Save guide-rules.json

![21 · Save guide-rules.json](../media/v0.1.1-alpha.1/rules-organization/rules-organization-11-export.png)

<a id="walkthrough-rules-organization-12-exported"></a>
### 22 · Verify the product-exported tree

![22 · Verify the product-exported tree](../media/v0.1.1-alpha.1/rules-organization/rules-organization-12-exported.png)

<a id="walkthrough-rules-organization-13-import-file"></a>
### 23 · Select the exported Rules file

![23 · Select the exported Rules file](../media/v0.1.1-alpha.1/rules-organization/rules-organization-13-import-file.png)

<a id="walkthrough-rules-organization-14-preview"></a>
### 24 · Inspect the enabled-rule import warning

![24 · Inspect the enabled-rule import warning](../media/v0.1.1-alpha.1/rules-organization/rules-organization-14-preview.png)

<a id="walkthrough-rules-organization-15-cancel"></a>
### 25 · Cancel and retain the original tree

![25 · Cancel and retain the original tree](../media/v0.1.1-alpha.1/rules-organization/rules-organization-15-cancel.png)

<a id="walkthrough-rules-organization-16-import-again"></a>
### 26 · Select the same file again

![26 · Select the same file again](../media/v0.1.1-alpha.1/rules-organization/rules-organization-16-import-again.png)

<a id="walkthrough-rules-organization-17-confirm"></a>
### 27 · Confirm append without overwrite

![27 · Confirm append without overwrite](../media/v0.1.1-alpha.1/rules-organization/rules-organization-17-confirm.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-organization:end -->

<!-- recorded-walkthrough:rules-operations:start -->
<a id="walkthrough-rules-operations"></a>
## Recorded walkthrough: remove, append, request bodies and search

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-operations-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-operations/rules-operations-01-rules.png)

<a id="walkthrough-rules-operations-02-new"></a>
### 02 · Create Guide operations

![02 · Create Guide operations](../media/v0.1.1-alpha.1/rules-operations/rules-operations-02-new.png)

<a id="walkthrough-rules-operations-03-scope"></a>
### 03 · Restrict Host and Path

![03 · Restrict Host and Path](../media/v0.1.1-alpha.1/rules-operations/rules-operations-03-scope.png)

<a id="walkthrough-rules-operations-04-header-name"></a>
### 04 · Enter x-guide-list

![04 · Enter x-guide-list](../media/v0.1.1-alpha.1/rules-operations/rules-operations-04-header-name.png)

<a id="walkthrough-rules-operations-05-append"></a>
### 05 · Choose append

![05 · Choose append](../media/v0.1.1-alpha.1/rules-operations/rules-operations-05-append.png)

<a id="walkthrough-rules-operations-06-enable"></a>
### 06 · Enable the Rule

![06 · Enable the Rule](../media/v0.1.1-alpha.1/rules-operations/rules-operations-06-enable.png)

<a id="walkthrough-rules-operations-07-apply"></a>
### 07 · Apply append

![07 · Apply append](../media/v0.1.1-alpha.1/rules-operations/rules-operations-07-apply.png)

<a id="walkthrough-rules-operations-08-appended"></a>
### 08 · Verify one is retained and two appended

![08 · Verify one is retained and two appended](../media/v0.1.1-alpha.1/rules-operations/rules-operations-08-appended.png)

<a id="walkthrough-rules-operations-09-remove"></a>
### 09 · Choose remove

![09 · Choose remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-09-remove.png)

<a id="walkthrough-rules-operations-10-apply-remove"></a>
### 10 · Apply remove

![10 · Apply remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-10-apply-remove.png)

<a id="walkthrough-rules-operations-11-removed"></a>
### 11 · Verify the Header was removed

![11 · Verify the Header was removed](../media/v0.1.1-alpha.1/rules-operations/rules-operations-11-removed.png)

<a id="walkthrough-rules-operations-12-query-action"></a>
### 12 · Switch to a Query action

![12 · Switch to a Query action](../media/v0.1.1-alpha.1/rules-operations/rules-operations-12-query-action.png)

<a id="walkthrough-rules-operations-13-query-remove"></a>
### 13 · Remove the guide parameter

![13 · Remove the guide parameter](../media/v0.1.1-alpha.1/rules-operations/rules-operations-13-query-remove.png)

<a id="walkthrough-rules-operations-14-apply-query"></a>
### 14 · Apply Query removal

![14 · Apply Query removal](../media/v0.1.1-alpha.1/rules-operations/rules-operations-14-apply-query.png)

<a id="walkthrough-rules-operations-15-query-result"></a>
### 15 · Verify the parameter is removed

![15 · Verify the parameter is removed](../media/v0.1.1-alpha.1/rules-operations/rules-operations-15-query-result.png)

<a id="walkthrough-rules-operations-16-body-action"></a>
### 16 · Switch to request Body replacement

![16 · Switch to request Body replacement](../media/v0.1.1-alpha.1/rules-operations/rules-operations-16-body-action.png)

<a id="walkthrough-rules-operations-17-body-value"></a>
### 17 · Enter request-edited

![17 · Enter request-edited](../media/v0.1.1-alpha.1/rules-operations/rules-operations-17-body-value.png)

<a id="walkthrough-rules-operations-18-apply-body"></a>
### 18 · Apply request-body replacement

![18 · Apply request-body replacement](../media/v0.1.1-alpha.1/rules-operations/rules-operations-18-apply-body.png)

<a id="walkthrough-rules-operations-19-body-result"></a>
### 19 · Verify the complete replacement at the origin

![19 · Verify the complete replacement at the origin](../media/v0.1.1-alpha.1/rules-operations/rules-operations-19-body-result.png)

<a id="walkthrough-rules-operations-20-rename"></a>
### 20 · Rename the Rule

![20 · Rename the Rule](../media/v0.1.1-alpha.1/rules-operations/rules-operations-20-rename.png)

<a id="walkthrough-rules-operations-21-search"></a>
### 21 · Search by name

![21 · Search by name](../media/v0.1.1-alpha.1/rules-operations/rules-operations-21-search.png)

<a id="walkthrough-rules-operations-22-disable"></a>
### 22 · Retain and disable the demo Rule

![22 · Retain and disable the demo Rule](../media/v0.1.1-alpha.1/rules-operations/rules-operations-22-disable.png)

<a id="walkthrough-rules-operations-23-apply-disabled"></a>
### 23 · Apply the disabled state

![23 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-operations/rules-operations-23-apply-disabled.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-operations:end -->

<!-- recorded-walkthrough:rules-response-evidence:start -->
<a id="walkthrough-rules-response-evidence"></a>
## Recorded walkthrough: response Headers and body-version evidence

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-response-evidence-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-01-rules.png)

<a id="walkthrough-rules-response-evidence-02-root-menu"></a>
### 02 · Open the empty-area menu

![02 · Open the empty-area menu](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-02-root-menu.png)

<a id="walkthrough-rules-response-evidence-03-create"></a>
### 03 · Create a Rule

![03 · Create a Rule](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-03-create.png)

<a id="walkthrough-rules-response-evidence-04-name"></a>
### 04 · Name the Rule Guide response and body

![04 · Name the Rule Guide response and body](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-04-name.png)

<a id="walkthrough-rules-response-evidence-05-host"></a>
### 05 · Restrict Host to 127.0.0.1

![05 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-05-host.png)

<a id="walkthrough-rules-response-evidence-06-add-path"></a>
### 06 · Add a Path condition

![06 · Add a Path condition](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-06-add-path.png)

<a id="walkthrough-rules-response-evidence-07-path"></a>
### 07 · Restrict the example Path

![07 · Restrict the example Path](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-07-path.png)

<a id="walkthrough-rules-response-evidence-08-response-phase"></a>
### 08 · Choose Response for the Header

![08 · Choose Response for the Header](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-08-response-phase.png)

<a id="walkthrough-rules-response-evidence-09-header"></a>
### 09 · Enter x-guide-list

![09 · Enter x-guide-list](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-09-header.png)

<a id="walkthrough-rules-response-evidence-10-append"></a>
### 10 · Choose append

![10 · Choose append](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-10-append.png)

<a id="walkthrough-rules-response-evidence-11-value"></a>
### 11 · Enter the appended value two

![11 · Enter the appended value two](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-11-value.png)

<a id="walkthrough-rules-response-evidence-12-enable"></a>
### 12 · Enable the example Rule

![12 · Enable the example Rule](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-12-enable.png)

<a id="walkthrough-rules-response-evidence-13-apply-append"></a>
### 13 · Apply response append

![13 · Apply response append](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-13-apply-append.png)

<a id="walkthrough-rules-response-evidence-14-capture"></a>
### 14 · Return to Capture

![14 · Return to Capture](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-14-capture.png)

<a id="walkthrough-rules-response-evidence-15-append-request"></a>
### 15 · Send a new append request

![15 · Send a new append request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-15-append-request.png)

<a id="walkthrough-rules-response-evidence-16-append-select"></a>
### 16 · Select the append request

![16 · Select the append request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-16-append-select.png)

<a id="walkthrough-rules-response-evidence-17-append-headers"></a>
### 17 · Verify the response retains one and appends two

![17 · Verify the response retains one and appends two](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-17-append-headers.png)

<a id="walkthrough-rules-response-evidence-18-edit-remove"></a>
### 18 · Return to the same Rule

![18 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-18-edit-remove.png)

<a id="walkthrough-rules-response-evidence-19-remove"></a>
### 19 · Switch to remove

![19 · Switch to remove](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-19-remove.png)

<a id="walkthrough-rules-response-evidence-20-apply-remove"></a>
### 20 · Apply response removal

![20 · Apply response removal](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-20-apply-remove.png)

<a id="walkthrough-rules-response-evidence-21-capture-remove"></a>
### 21 · Return to Capture to inspect removal

![21 · Return to Capture to inspect removal](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-21-capture-remove.png)

<a id="walkthrough-rules-response-evidence-22-remove-request"></a>
### 22 · Send a new remove request

![22 · Send a new remove request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-22-remove-request.png)

<a id="walkthrough-rules-response-evidence-23-remove-select"></a>
### 23 · Select the remove request

![23 · Select the remove request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-23-remove-select.png)

<a id="walkthrough-rules-response-evidence-24-edit-body"></a>
### 24 · Return to Rules to edit the body action

![24 · Return to Rules to edit the body action](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-24-edit-body.png)

<a id="walkthrough-rules-response-evidence-25-remove-header"></a>
### 25 · Remove the Header action

![25 · Remove the Header action](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-25-remove-header.png)

<a id="walkthrough-rules-response-evidence-26-add-body"></a>
### 26 · Add a Body action

![26 · Add a Body action](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-26-add-body.png)

<a id="walkthrough-rules-response-evidence-27-request-phase"></a>
### 27 · Choose Request for the Body

![27 · Choose Request for the Body](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-27-request-phase.png)

<a id="walkthrough-rules-response-evidence-28-body-value"></a>
### 28 · Enter the guide-final body

![28 · Enter the guide-final body](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-28-body-value.png)

<a id="walkthrough-rules-response-evidence-29-apply-body"></a>
### 29 · Apply request-body replacement

![29 · Apply request-body replacement](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-29-apply-body.png)

<a id="walkthrough-rules-response-evidence-30-capture-body"></a>
### 30 · Return to Capture to inspect the body

![30 · Return to Capture to inspect the body](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-30-capture-body.png)

<a id="walkthrough-rules-response-evidence-31-post"></a>
### 31 · Send a POST containing guide-original

![31 · Send a POST containing guide-original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-31-post.png)

<a id="walkthrough-rules-response-evidence-32-body-select"></a>
### 32 · Select the request-body request

![32 · Select the request-body request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-32-body-select.png)

<a id="walkthrough-rules-response-evidence-33-final"></a>
### 33 · Request initially shows Final

![33 · Request initially shows Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-33-final.png)

<a id="walkthrough-rules-response-evidence-34-original"></a>
### 34 · Switch to Original

![34 · Switch to Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-34-original.png)

<a id="walkthrough-rules-response-evidence-35-raw"></a>
### 35 · Choose Raw

![35 · Choose Raw](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-35-raw.png)

<a id="walkthrough-rules-response-evidence-36-copy-original"></a>
### 36 · Copy Original

![36 · Copy Original](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-36-copy-original.png)

<a id="walkthrough-rules-response-evidence-37-fullscreen"></a>
### 37 · View Original fullscreen

![37 · View Original fullscreen](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-37-fullscreen.png)

<a id="walkthrough-rules-response-evidence-38-close-fullscreen"></a>
### 38 · Return to details with Escape

![38 · Return to details with Escape](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-38-close-fullscreen.png)

<a id="walkthrough-rules-response-evidence-39-final-again"></a>
### 39 · Switch back to Final

![39 · Switch back to Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-39-final-again.png)

<a id="walkthrough-rules-response-evidence-40-copy-final"></a>
### 40 · Copy Final

![40 · Copy Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-40-copy-final.png)

<a id="walkthrough-rules-response-evidence-41-save-dialog"></a>
### 41 · Save Final as guide-final.json

![41 · Save Final as guide-final.json](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-41-save-dialog.png)

<a id="walkthrough-rules-response-evidence-42-saved"></a>
### 42 · Confirm the saved body is Final

![42 · Confirm the saved body is Final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-42-saved.png)

<a id="walkthrough-rules-response-evidence-43-body-rule"></a>
### 43 · Follow the body effect to its Rule

![43 · Follow the body effect to its Rule](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-43-body-rule.png)

<a id="walkthrough-rules-response-evidence-44-response-body"></a>
### 44 · Change the Body phase to Response

![44 · Change the Body phase to Response](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-44-response-body.png)

<a id="walkthrough-rules-response-evidence-45-response-value"></a>
### 45 · Enter guide-response-final

![45 · Enter guide-response-final](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-45-response-value.png)

<a id="walkthrough-rules-response-evidence-46-apply-response"></a>
### 46 · Apply response-body replacement

![46 · Apply response-body replacement](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-46-apply-response.png)

<a id="walkthrough-rules-response-evidence-47-capture-response"></a>
### 47 · Return to Capture to inspect the response

![47 · Return to Capture to inspect the response](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-47-capture-response.png)

<a id="walkthrough-rules-response-evidence-48-response-request"></a>
### 48 · Send a new response-body request

![48 · Send a new response-body request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-48-response-request.png)

<a id="walkthrough-rules-response-evidence-49-response-select"></a>
### 49 · Select the response-body request

![49 · Select the response-body request](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-49-response-select.png)

<a id="walkthrough-rules-response-evidence-50-unavailable"></a>
### 50 · Verify response Original is unavailable

![50 · Verify response Original is unavailable](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-50-unavailable.png)

<a id="walkthrough-rules-response-evidence-51-rule-again"></a>
### 51 · Return to the response writer Rule

![51 · Return to the response writer Rule](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-51-rule-again.png)

<a id="walkthrough-rules-response-evidence-52-disable"></a>
### 52 · Disable this example Rule

![52 · Disable this example Rule](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-52-disable.png)

<a id="walkthrough-rules-response-evidence-53-apply-disabled"></a>
### 53 · Apply the disabled state

![53 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-53-apply-disabled.png)

<a id="walkthrough-rules-response-evidence-54-capture-restored"></a>
### 54 · Return to Capture to verify restoration

![54 · Return to Capture to verify restoration](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-54-capture-restored.png)

<a id="walkthrough-rules-response-evidence-55-restored-request"></a>
### 55 · Verify a new request is unmodified

![55 · Verify a new request is unmodified](../media/v0.1.1-alpha.1/rules-response-evidence/rules-response-evidence-55-restored-request.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-response-evidence:end -->

<!-- recorded-walkthrough:rules-tree:start -->
<a id="walkthrough-rules-tree"></a>
## Recorded walkthrough: hierarchy, validation, matched-request navigation and non-last deletion

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-tree-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-tree/rules-tree-01-rules.png)

<a id="walkthrough-rules-tree-02-root-folder"></a>
### 02 · Create a root folder

![02 · Create a root folder](../media/v0.1.1-alpha.1/rules-tree/rules-tree-02-root-folder.png)

<a id="walkthrough-rules-tree-03-root-name"></a>
### 03 · Name it Guide hierarchy

![03 · Name it Guide hierarchy](../media/v0.1.1-alpha.1/rules-tree/rules-tree-03-root-name.png)

<a id="walkthrough-rules-tree-04-child-folder"></a>
### 04 · Create a child through the folder menu

![04 · Create a child through the folder menu](../media/v0.1.1-alpha.1/rules-tree/rules-tree-04-child-folder.png)

<a id="walkthrough-rules-tree-05-child-name"></a>
### 05 · Name it Guide API

![05 · Name it Guide API](../media/v0.1.1-alpha.1/rules-tree/rules-tree-05-child-name.png)

<a id="walkthrough-rules-tree-06-third-folder"></a>
### 06 · Create the third folder level

![06 · Create the third folder level](../media/v0.1.1-alpha.1/rules-tree/rules-tree-06-third-folder.png)

<a id="walkthrough-rules-tree-07-third-name"></a>
### 07 · Name it Guide final

![07 · Name it Guide final](../media/v0.1.1-alpha.1/rules-tree/rules-tree-07-third-name.png)

<a id="walkthrough-rules-tree-08-depth-limit"></a>
### 08 · Verify a fourth folder level is unavailable

![08 · Verify a fourth folder level is unavailable](../media/v0.1.1-alpha.1/rules-tree/rules-tree-08-depth-limit.png)

<a id="walkthrough-rules-tree-09-nested-rule"></a>
### 09 · Create a Rule in the third-level folder

![09 · Create a Rule in the third-level folder](../media/v0.1.1-alpha.1/rules-tree/rules-tree-09-nested-rule.png)

<a id="walkthrough-rules-tree-10-invalid"></a>
### 10 · Inspect missing fields and disabled Apply

![10 · Inspect missing fields and disabled Apply](../media/v0.1.1-alpha.1/rules-tree/rules-tree-10-invalid.png)

<a id="walkthrough-rules-tree-11-rule-name"></a>
### 11 · Name the Rule Guide nested priority

![11 · Name the Rule Guide nested priority](../media/v0.1.1-alpha.1/rules-tree/rules-tree-11-rule-name.png)

<a id="walkthrough-rules-tree-12-host"></a>
### 12 · Restrict Host to 127.0.0.1

![12 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-tree/rules-tree-12-host.png)

<a id="walkthrough-rules-tree-13-path-condition"></a>
### 13 · Add a Path condition

![13 · Add a Path condition](../media/v0.1.1-alpha.1/rules-tree/rules-tree-13-path-condition.png)

<a id="walkthrough-rules-tree-14-path"></a>
### 14 · Restrict this run’s Rule path

![14 · Restrict this run’s Rule path](../media/v0.1.1-alpha.1/rules-tree/rules-tree-14-path.png)

<a id="walkthrough-rules-tree-15-header"></a>
### 15 · Enter x-guide-tree

![15 · Enter x-guide-tree](../media/v0.1.1-alpha.1/rules-tree/rules-tree-15-header.png)

<a id="walkthrough-rules-tree-16-header-value"></a>
### 16 · Enter nested

![16 · Enter nested](../media/v0.1.1-alpha.1/rules-tree/rules-tree-16-header-value.png)

<a id="walkthrough-rules-tree-17-enable"></a>
### 17 · Enable the completed Rule

![17 · Enable the completed Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-17-enable.png)

<a id="walkthrough-rules-tree-18-apply"></a>
### 18 · Apply the folders and Rule

![18 · Apply the folders and Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-18-apply.png)

<a id="walkthrough-rules-tree-19-rename-folder"></a>
### 19 · Rename the folder through its menu

![19 · Rename the folder through its menu](../media/v0.1.1-alpha.1/rules-tree/rules-tree-19-rename-folder.png)

<a id="walkthrough-rules-tree-20-folder-name"></a>
### 20 · Rename Guide API to Guide routes

![20 · Rename Guide API to Guide routes](../media/v0.1.1-alpha.1/rules-tree/rules-tree-20-folder-name.png)

<a id="walkthrough-rules-tree-21-apply-rename"></a>
### 21 · Apply the folder name

![21 · Apply the folder name](../media/v0.1.1-alpha.1/rules-tree/rules-tree-21-apply-rename.png)

<a id="walkthrough-rules-tree-22-folder-search"></a>
### 22 · Search by folder name

![22 · Search by folder name](../media/v0.1.1-alpha.1/rules-tree/rules-tree-22-folder-search.png)

<a id="walkthrough-rules-tree-23-search-clear"></a>
### 23 · Clear Rules search

![23 · Clear Rules search](../media/v0.1.1-alpha.1/rules-tree/rules-tree-23-search-clear.png)

<a id="walkthrough-rules-tree-24-collapse"></a>
### 24 · Collapse the root folder

![24 · Collapse the root folder](../media/v0.1.1-alpha.1/rules-tree/rules-tree-24-collapse.png)

<a id="walkthrough-rules-tree-25-expand"></a>
### 25 · Expand the same folder again

![25 · Expand the same folder again](../media/v0.1.1-alpha.1/rules-tree/rules-tree-25-expand.png)

<a id="walkthrough-rules-tree-26-request"></a>
### 26 · Send a matching request and verify nested

![26 · Send a matching request and verify nested](../media/v0.1.1-alpha.1/rules-tree/rules-tree-26-request.png)

<a id="walkthrough-rules-tree-27-rule-menu"></a>
### 27 · Open the matched Rule menu

![27 · Open the matched Rule menu](../media/v0.1.1-alpha.1/rules-tree/rules-tree-27-rule-menu.png)

<a id="walkthrough-rules-tree-28-show-requests"></a>
### 28 · Navigate to this Rule’s requests

![28 · Navigate to this Rule’s requests](../media/v0.1.1-alpha.1/rules-tree/rules-tree-28-show-requests.png)

<a id="walkthrough-rules-tree-28a-rule-facet"></a>
### 29 · Expand and verify the selected Rule facet

![29 · Expand and verify the selected Rule facet](../media/v0.1.1-alpha.1/rules-tree/rules-tree-28a-rule-facet.png)

<a id="walkthrough-rules-tree-29-select-request"></a>
### 30 · Inspect the matched request selected by navigation

![30 · Inspect the matched request selected by navigation](../media/v0.1.1-alpha.1/rules-tree/rules-tree-29-select-request.png)

<a id="walkthrough-rules-tree-30-header-effect"></a>
### 31 · Inspect the Header set marker

![31 · Inspect the Header set marker](../media/v0.1.1-alpha.1/rules-tree/rules-tree-30-header-effect.png)

<a id="walkthrough-rules-tree-31-return-rule"></a>
### 32 · Follow the marker to the same Rule

![32 · Follow the marker to the same Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-31-return-rule.png)

<a id="walkthrough-rules-tree-32-root-menu"></a>
### 33 · Open the root-level menu

![33 · Open the root-level menu](../media/v0.1.1-alpha.1/rules-tree/rules-tree-32-root-menu.png)

<a id="walkthrough-rules-tree-33-root-rule"></a>
### 34 · Create a precedence comparison Rule at the root

![34 · Create a precedence comparison Rule at the root](../media/v0.1.1-alpha.1/rules-tree/rules-tree-33-root-rule.png)

<a id="walkthrough-rules-tree-34-root-name"></a>
### 35 · Name it Guide root priority

![35 · Name it Guide root priority](../media/v0.1.1-alpha.1/rules-tree/rules-tree-34-root-name.png)

<a id="walkthrough-rules-tree-35-root-host"></a>
### 36 · Enter the same Host

![36 · Enter the same Host](../media/v0.1.1-alpha.1/rules-tree/rules-tree-35-root-host.png)

<a id="walkthrough-rules-tree-36-root-path-condition"></a>
### 37 · Add Path to the root Rule

![37 · Add Path to the root Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-36-root-path-condition.png)

<a id="walkthrough-rules-tree-37-root-path"></a>
### 38 · Enter the same example path

![38 · Enter the same example path](../media/v0.1.1-alpha.1/rules-tree/rules-tree-37-root-path.png)

<a id="walkthrough-rules-tree-38-root-header"></a>
### 39 · Enter the same Header

![39 · Enter the same Header](../media/v0.1.1-alpha.1/rules-tree/rules-tree-38-root-header.png)

<a id="walkthrough-rules-tree-39-root-value"></a>
### 40 · Enter root as the later value

![40 · Enter root as the later value](../media/v0.1.1-alpha.1/rules-tree/rules-tree-39-root-value.png)

<a id="walkthrough-rules-tree-40-root-enable"></a>
### 41 · Enable the root precedence Rule

![41 · Enable the root precedence Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-40-root-enable.png)

<a id="walkthrough-rules-tree-41-root-apply"></a>
### 42 · Apply both Rules

![42 · Apply both Rules](../media/v0.1.1-alpha.1/rules-tree/rules-tree-41-root-apply.png)

<a id="walkthrough-rules-tree-42-precedence"></a>
### 43 · Verify the root Rule writes root last

![43 · Verify the root Rule writes root last](../media/v0.1.1-alpha.1/rules-tree/rules-tree-42-precedence.png)

<a id="walkthrough-rules-tree-43-delete-nested-menu"></a>
### 44 · Open deletion for the non-last Rule

![44 · Open deletion for the non-last Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-43-delete-nested-menu.png)

<a id="walkthrough-rules-tree-44-delete-nested"></a>
### 45 · Delete only Guide nested priority

![45 · Delete only Guide nested priority](../media/v0.1.1-alpha.1/rules-tree/rules-tree-44-delete-nested.png)

<a id="walkthrough-rules-tree-45-apply-deletion"></a>
### 46 · Apply the non-last deletion

![46 · Apply the non-last deletion](../media/v0.1.1-alpha.1/rules-tree/rules-tree-45-apply-deletion.png)

<a id="walkthrough-rules-tree-46-delete-folder-menu"></a>
### 47 · Open deletion for the empty folder tree

![47 · Open deletion for the empty folder tree](../media/v0.1.1-alpha.1/rules-tree/rules-tree-46-delete-folder-menu.png)

<a id="walkthrough-rules-tree-47-delete-folders"></a>
### 48 · Delete the empty three-level folder tree

![48 · Delete the empty three-level folder tree](../media/v0.1.1-alpha.1/rules-tree/rules-tree-47-delete-folders.png)

<a id="walkthrough-rules-tree-48-apply-folders"></a>
### 49 · Apply empty-folder deletion

![49 · Apply empty-folder deletion](../media/v0.1.1-alpha.1/rules-tree/rules-tree-48-apply-folders.png)

<a id="walkthrough-rules-tree-49-after-delete"></a>
### 50 · Verify the remaining Rule still matches

![50 · Verify the remaining Rule still matches](../media/v0.1.1-alpha.1/rules-tree/rules-tree-49-after-delete.png)

<a id="walkthrough-rules-tree-50-disable"></a>
### 51 · Retain and disable the last Rule

![51 · Retain and disable the last Rule](../media/v0.1.1-alpha.1/rules-tree/rules-tree-50-disable.png)

<a id="walkthrough-rules-tree-51-apply-disabled"></a>
### 52 · Apply the disabled state

![52 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-tree/rules-tree-51-apply-disabled.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-tree:end -->

<!-- recorded-walkthrough:rules-matching-modes:start -->
<a id="walkthrough-rules-matching-modes"></a>
## Recorded walkthrough: contains, exact, regex, case and MIME matching

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-matching-modes-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-01-rules.png)

<a id="walkthrough-rules-matching-modes-02-create"></a>
### 02 · Create the matching-mode Rule

![02 · Create the matching-mode Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-02-create.png)

<a id="walkthrough-rules-matching-modes-03-name"></a>
### 03 · Name it Guide matching modes

![03 · Name it Guide matching modes](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-03-name.png)

<a id="walkthrough-rules-matching-modes-04-host"></a>
### 04 · Enter 127.0.0.1

![04 · Enter 127.0.0.1](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-04-host.png)

<a id="walkthrough-rules-matching-modes-05-path-condition"></a>
### 05 · Add a Path condition

![05 · Add a Path condition](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-05-path-condition.png)

<a id="walkthrough-rules-matching-modes-06-path-value"></a>
### 06 · Enter the example Path with mixed case

![06 · Enter the example Path with mixed case](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-06-path-value.png)

<a id="walkthrough-rules-matching-modes-07-header"></a>
### 07 · Enter x-guide-mode

![07 · Enter x-guide-mode](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-07-header.png)

<a id="walkthrough-rules-matching-modes-08-value"></a>
### 08 · Enter matched

![08 · Enter matched](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-08-value.png)

<a id="walkthrough-rules-matching-modes-09-enable"></a>
### 09 · Enable the Rule

![09 · Enable the Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-09-enable.png)

<a id="walkthrough-rules-matching-modes-10-contains"></a>
### 10 · Apply the default contains mode

![10 · Apply the default contains mode](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-10-contains.png)

<a id="walkthrough-rules-matching-modes-contains-capture"></a>
### 11 · Return to Capture to inspect the input

![11 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-contains-capture.png)

<a id="walkthrough-rules-matching-modes-contains-request"></a>
### 12 · Send the contains request

![12 · Send the contains request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-contains-request.png)

<a id="walkthrough-rules-matching-modes-contains-headers"></a>
### 13 · Inspect the actually matched Header

![13 · Inspect the actually matched Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-contains-headers.png)

<a id="walkthrough-rules-matching-modes-contains-rules"></a>
### 14 · Return to the same Rule

![14 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-contains-rules.png)

<a id="walkthrough-rules-matching-modes-11-case-sensitive"></a>
### 15 · Enable Aa case sensitivity

![15 · Enable Aa case sensitivity](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-11-case-sensitive.png)

<a id="walkthrough-rules-matching-modes-12-apply-case"></a>
### 16 · Apply the case setting

![16 · Apply the case setting](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-12-apply-case.png)

<a id="walkthrough-rules-matching-modes-case-sensitive-capture"></a>
### 17 · Return to Capture to inspect the input

![17 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-case-sensitive-capture.png)

<a id="walkthrough-rules-matching-modes-case-sensitive-request"></a>
### 18 · Send the case-sensitive request

![18 · Send the case-sensitive request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-case-sensitive-request.png)

<a id="walkthrough-rules-matching-modes-case-sensitive-headers"></a>
### 19 · Verify this input did not rewrite the Header

![19 · Verify this input did not rewrite the Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-case-sensitive-headers.png)

<a id="walkthrough-rules-matching-modes-case-sensitive-rules"></a>
### 20 · Return to the same Rule

![20 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-case-sensitive-rules.png)

<a id="walkthrough-rules-matching-modes-13-exact"></a>
### 21 · Enable exact matching

![21 · Enable exact matching](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-13-exact.png)

<a id="walkthrough-rules-matching-modes-14-apply-exact"></a>
### 22 · Apply exact matching

![22 · Apply exact matching](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-14-apply-exact.png)

<a id="walkthrough-rules-matching-modes-exact-negative-capture"></a>
### 23 · Return to Capture to inspect the input

![23 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-negative-capture.png)

<a id="walkthrough-rules-matching-modes-exact-negative-request"></a>
### 24 · Send the exact-negative request

![24 · Send the exact-negative request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-negative-request.png)

<a id="walkthrough-rules-matching-modes-exact-negative-headers"></a>
### 25 · Verify this input did not rewrite the Header

![25 · Verify this input did not rewrite the Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-negative-headers.png)

<a id="walkthrough-rules-matching-modes-exact-negative-rules"></a>
### 26 · Return to the same Rule

![26 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-negative-rules.png)

<a id="walkthrough-rules-matching-modes-exact-positive-capture"></a>
### 27 · Return to Capture to inspect the input

![27 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-positive-capture.png)

<a id="walkthrough-rules-matching-modes-exact-positive-request"></a>
### 28 · Send the exact-positive request

![28 · Send the exact-positive request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-positive-request.png)

<a id="walkthrough-rules-matching-modes-exact-positive-headers"></a>
### 29 · Inspect the actually matched Header

![29 · Inspect the actually matched Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-positive-headers.png)

<a id="walkthrough-rules-matching-modes-exact-positive-rules"></a>
### 30 · Return to the same Rule

![30 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-exact-positive-rules.png)

<a id="walkthrough-rules-matching-modes-15-regex"></a>
### 31 · Switch to regex mode

![31 · Switch to regex mode](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-15-regex.png)

<a id="walkthrough-rules-matching-modes-16-invalid-regex"></a>
### 32 · Enter an invalid regex

![32 · Enter an invalid regex](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-16-invalid-regex.png)

<a id="walkthrough-rules-matching-modes-16a-apply-invalid"></a>
### 33 · Observe that this release still allows Apply

![33 · Observe that this release still allows Apply](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-16a-apply-invalid.png)

<a id="walkthrough-rules-matching-modes-invalid-regex-capture"></a>
### 34 · Return to Capture to inspect the input

![34 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-invalid-regex-capture.png)

<a id="walkthrough-rules-matching-modes-invalid-regex-request"></a>
### 35 · Send the invalid-regex request

![35 · Send the invalid-regex request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-invalid-regex-request.png)

<a id="walkthrough-rules-matching-modes-invalid-regex-headers"></a>
### 36 · Verify this input did not rewrite the Header

![36 · Verify this input did not rewrite the Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-invalid-regex-headers.png)

<a id="walkthrough-rules-matching-modes-invalid-regex-rules"></a>
### 37 · Return to the same Rule

![37 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-invalid-regex-rules.png)

<a id="walkthrough-rules-matching-modes-17-valid-regex"></a>
### 38 · Fix the regex to match an uppercase segment

![38 · Fix the regex to match an uppercase segment](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-17-valid-regex.png)

<a id="walkthrough-rules-matching-modes-18-apply-regex"></a>
### 39 · Apply the valid regex

![39 · Apply the valid regex](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-18-apply-regex.png)

<a id="walkthrough-rules-matching-modes-regex-positive-capture"></a>
### 40 · Return to Capture to inspect the input

![40 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-positive-capture.png)

<a id="walkthrough-rules-matching-modes-regex-positive-request"></a>
### 41 · Send the regex-positive request

![41 · Send the regex-positive request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-positive-request.png)

<a id="walkthrough-rules-matching-modes-regex-positive-headers"></a>
### 42 · Inspect the actually matched Header

![42 · Inspect the actually matched Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-positive-headers.png)

<a id="walkthrough-rules-matching-modes-regex-positive-rules"></a>
### 43 · Return to the same Rule

![43 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-positive-rules.png)

<a id="walkthrough-rules-matching-modes-regex-negative-capture"></a>
### 44 · Return to Capture to inspect the input

![44 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-negative-capture.png)

<a id="walkthrough-rules-matching-modes-regex-negative-request"></a>
### 45 · Send the regex-negative request

![45 · Send the regex-negative request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-negative-request.png)

<a id="walkthrough-rules-matching-modes-regex-negative-headers"></a>
### 46 · Verify this input did not rewrite the Header

![46 · Verify this input did not rewrite the Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-negative-headers.png)

<a id="walkthrough-rules-matching-modes-regex-negative-rules"></a>
### 47 · Return to the same Rule

![47 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-negative-rules.png)

<a id="walkthrough-rules-matching-modes-19-ignore-case"></a>
### 48 · Disable Aa for case-insensitive regex

![48 · Disable Aa for case-insensitive regex](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-19-ignore-case.png)

<a id="walkthrough-rules-matching-modes-20-apply-ignore-case"></a>
### 49 · Apply the regex case setting

![49 · Apply the regex case setting](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-20-apply-ignore-case.png)

<a id="walkthrough-rules-matching-modes-regex-ignore-case-capture"></a>
### 50 · Return to Capture to inspect the input

![50 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-ignore-case-capture.png)

<a id="walkthrough-rules-matching-modes-regex-ignore-case-request"></a>
### 51 · Send the regex-ignore-case request

![51 · Send the regex-ignore-case request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-ignore-case-request.png)

<a id="walkthrough-rules-matching-modes-regex-ignore-case-headers"></a>
### 52 · Inspect the actually matched Header

![52 · Inspect the actually matched Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-ignore-case-headers.png)

<a id="walkthrough-rules-matching-modes-regex-ignore-case-rules"></a>
### 53 · Return to the same Rule

![53 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-regex-ignore-case-rules.png)

<a id="walkthrough-rules-matching-modes-21-response-action"></a>
### 54 · Change the Header action to Response

![54 · Change the Header action to Response](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-21-response-action.png)

<a id="walkthrough-rules-matching-modes-22-mime-condition"></a>
### 55 · Add a response MIME condition

![55 · Add a response MIME condition](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-22-mime-condition.png)

<a id="walkthrough-rules-matching-modes-23-mime-wildcard"></a>
### 56 · Enter the application/* wildcard

![56 · Enter the application/* wildcard](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-23-mime-wildcard.png)

<a id="walkthrough-rules-matching-modes-24-apply-mime"></a>
### 57 · Apply the response MIME condition

![57 · Apply the response MIME condition](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-24-apply-mime.png)

<a id="walkthrough-rules-matching-modes-mime-json-capture"></a>
### 58 · Return to Capture to inspect the input

![58 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-json-capture.png)

<a id="walkthrough-rules-matching-modes-mime-json-request"></a>
### 59 · Send the mime-json request

![59 · Send the mime-json request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-json-request.png)

<a id="walkthrough-rules-matching-modes-mime-json-headers"></a>
### 60 · Inspect the actually matched Header

![60 · Inspect the actually matched Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-json-headers.png)

<a id="walkthrough-rules-matching-modes-mime-json-rules"></a>
### 61 · Return to the same Rule

![61 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-json-rules.png)

<a id="walkthrough-rules-matching-modes-mime-text-capture"></a>
### 62 · Return to Capture to inspect the input

![62 · Return to Capture to inspect the input](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-text-capture.png)

<a id="walkthrough-rules-matching-modes-mime-text-request"></a>
### 63 · Send the mime-text request

![63 · Send the mime-text request](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-text-request.png)

<a id="walkthrough-rules-matching-modes-mime-text-headers"></a>
### 64 · Verify this input did not rewrite the Header

![64 · Verify this input did not rewrite the Header](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-text-headers.png)

<a id="walkthrough-rules-matching-modes-mime-text-rules"></a>
### 65 · Return to the same Rule

![65 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-mime-text-rules.png)

<a id="walkthrough-rules-matching-modes-25-disable"></a>
### 66 · Disable the demonstration Rule

![66 · Disable the demonstration Rule](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-25-disable.png)

<a id="walkthrough-rules-matching-modes-26-apply-disabled"></a>
### 67 · Apply the disabled state

![67 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-matching-modes/rules-matching-modes-26-apply-disabled.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-matching-modes:end -->

<!-- recorded-walkthrough:rules-response-controls:start -->
<a id="walkthrough-rules-response-controls"></a>
## Recorded walkthrough: response Headers, action recovery and body encoding

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-response-controls-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-01-rules.png)

<a id="walkthrough-rules-response-controls-02-create"></a>
### 02 · Create Guide response controls

![02 · Create Guide response controls](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-02-create.png)

<a id="walkthrough-rules-response-controls-03-host"></a>
### 03 · Restrict to 127.0.0.1

![03 · Restrict to 127.0.0.1](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-03-host.png)

<a id="walkthrough-rules-response-controls-04-path-condition"></a>
### 04 · Add Path

![04 · Add Path](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-04-path-condition.png)

<a id="walkthrough-rules-response-controls-05-path"></a>
### 05 · Restrict this run’s action paths

![05 · Restrict this run’s action paths](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-05-path.png)

<a id="walkthrough-rules-response-controls-synthetic-remove"></a>
### 06 · Remove the previous action

![06 · Remove the previous action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-remove.png)

<a id="walkthrough-rules-response-controls-synthetic-add"></a>
### 07 · Add this action

![07 · Add this action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-add.png)

<a id="walkthrough-rules-response-controls-synthetic-status"></a>
### 08 · Set mock status 503

![08 · Set mock status 503](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-status.png)

<a id="walkthrough-rules-response-controls-synthetic-add-type"></a>
### 09 · Add a Header to the synthetic response

![09 · Add a Header to the synthetic response](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-add-type.png)

<a id="walkthrough-rules-response-controls-synthetic-type-name"></a>
### 10 · Enter content-type

![10 · Enter content-type](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-type-name.png)

<a id="walkthrough-rules-response-controls-synthetic-type-value"></a>
### 11 · Enter application/json

![11 · Enter application/json](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-type-value.png)

<a id="walkthrough-rules-response-controls-synthetic-add-extra"></a>
### 12 · Add the second synthetic Header

![12 · Add the second synthetic Header](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-add-extra.png)

<a id="walkthrough-rules-response-controls-synthetic-extra-name"></a>
### 13 · Enter x-guide-maintenance

![13 · Enter x-guide-maintenance](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-extra-name.png)

<a id="walkthrough-rules-response-controls-synthetic-extra-value"></a>
### 14 · Enter planned

![14 · Enter planned](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-extra-value.png)

<a id="walkthrough-rules-response-controls-synthetic-body"></a>
### 15 · Enter the synthetic JSON body

![15 · Enter the synthetic JSON body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-body.png)

<a id="walkthrough-rules-response-controls-synthetic-enable"></a>
### 16 · Enable the current action

![16 · Enable the current action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-enable.png)

<a id="walkthrough-rules-response-controls-synthetic-apply"></a>
### 17 · Apply the current action

![17 · Apply the current action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-apply.png)

<a id="walkthrough-rules-response-controls-synthetic-result"></a>
### 18 · Verify status 503, Headers and the mock body

![18 · Verify status 503, Headers and the mock body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-result.png)

<a id="walkthrough-rules-response-controls-synthetic-back"></a>
### 19 · Return to the same Rule

![19 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-back.png)

<a id="walkthrough-rules-response-controls-synthetic-disable"></a>
### 20 · Disable this Rule

![20 · Disable this Rule](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-disable.png)

<a id="walkthrough-rules-response-controls-synthetic-apply-off"></a>
### 21 · Apply the disabled state

![21 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-apply-off.png)

<a id="walkthrough-rules-response-controls-synthetic-restored"></a>
### 22 · Verify origin recovery with a new request

![22 · Verify origin recovery with a new request](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-restored.png)

<a id="walkthrough-rules-response-controls-synthetic-edit-next"></a>
### 23 · Return to Rules to continue editing

![23 · Return to Rules to continue editing](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-synthetic-edit-next.png)

<a id="walkthrough-rules-response-controls-delay-remove"></a>
### 24 · Remove the previous action

![24 · Remove the previous action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-remove.png)

<a id="walkthrough-rules-response-controls-delay-add"></a>
### 25 · Add this action

![25 · Add this action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-add.png)

<a id="walkthrough-rules-response-controls-delay-value"></a>
### 26 · Set a 2000ms delay

![26 · Set a 2000ms delay](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-value.png)

<a id="walkthrough-rules-response-controls-delay-enable"></a>
### 27 · Enable the current action

![27 · Enable the current action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-enable.png)

<a id="walkthrough-rules-response-controls-delay-apply"></a>
### 28 · Apply the current action

![28 · Apply the current action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-apply.png)

<a id="walkthrough-rules-response-controls-delay-result"></a>
### 29 · Verify the real wait still reaches the origin

![29 · Verify the real wait still reaches the origin](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-result.png)

<a id="walkthrough-rules-response-controls-delay-back"></a>
### 30 · Return to the same Rule

![30 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-back.png)

<a id="walkthrough-rules-response-controls-delay-disable"></a>
### 31 · Disable this Rule

![31 · Disable this Rule](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-disable.png)

<a id="walkthrough-rules-response-controls-delay-apply-off"></a>
### 32 · Apply the disabled state

![32 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-apply-off.png)

<a id="walkthrough-rules-response-controls-delay-restored"></a>
### 33 · Verify origin recovery with a new request

![33 · Verify origin recovery with a new request](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-restored.png)

<a id="walkthrough-rules-response-controls-delay-edit-next"></a>
### 34 · Return to Rules to continue editing

![34 · Return to Rules to continue editing](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-delay-edit-next.png)

<a id="walkthrough-rules-response-controls-block-remove"></a>
### 35 · Remove the previous action

![35 · Remove the previous action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-remove.png)

<a id="walkthrough-rules-response-controls-block-add"></a>
### 36 · Add this action

![36 · Add this action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-add.png)

<a id="walkthrough-rules-response-controls-block-reset"></a>
### 37 · Select reset mode

![37 · Select reset mode](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-reset.png)

<a id="walkthrough-rules-response-controls-block-enable"></a>
### 38 · Enable the current action

![38 · Enable the current action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-enable.png)

<a id="walkthrough-rules-response-controls-block-apply"></a>
### 39 · Apply the current action

![39 · Apply the current action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-apply.png)

<a id="walkthrough-rules-response-controls-block-reset-result"></a>
### 40 · Verify reset blocking

![40 · Verify reset blocking](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-reset-result.png)

<a id="walkthrough-rules-response-controls-block-edit-close"></a>
### 41 · Return to the Rule to change blocking mode

![41 · Return to the Rule to change blocking mode](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-edit-close.png)

<a id="walkthrough-rules-response-controls-block-close"></a>
### 42 · Select close mode

![42 · Select close mode](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-close.png)

<a id="walkthrough-rules-response-controls-block-apply-close"></a>
### 43 · Apply close mode

![43 · Apply close mode](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-apply-close.png)

<a id="walkthrough-rules-response-controls-block-close-result"></a>
### 44 · Verify close blocking

![44 · Verify close blocking](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-close-result.png)

<a id="walkthrough-rules-response-controls-block-back"></a>
### 45 · Return to the same Rule

![45 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-back.png)

<a id="walkthrough-rules-response-controls-block-disable"></a>
### 46 · Disable this Rule

![46 · Disable this Rule](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-disable.png)

<a id="walkthrough-rules-response-controls-block-apply-off"></a>
### 47 · Apply the disabled state

![47 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-apply-off.png)

<a id="walkthrough-rules-response-controls-block-restored"></a>
### 48 · Verify origin recovery with a new request

![48 · Verify origin recovery with a new request](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-restored.png)

<a id="walkthrough-rules-response-controls-block-edit-next"></a>
### 49 · Return to Rules to continue editing

![49 · Return to Rules to continue editing](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-block-edit-next.png)

<a id="walkthrough-rules-response-controls-encoding-remove"></a>
### 50 · Remove the previous action

![50 · Remove the previous action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-remove.png)

<a id="walkthrough-rules-response-controls-encoding-add"></a>
### 51 · Add this action

![51 · Add this action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-add.png)

<a id="walkthrough-rules-response-controls-encoding-phase"></a>
### 52 · Select Response for the Header

![52 · Select Response for the Header](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-phase.png)

<a id="walkthrough-rules-response-controls-encoding-name"></a>
### 53 · Enter content-encoding

![53 · Enter content-encoding](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-name.png)

<a id="walkthrough-rules-response-controls-encoding-value"></a>
### 54 · Enter gzip

![54 · Enter gzip](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-value.png)

<a id="walkthrough-rules-response-controls-encoding-enable"></a>
### 55 · Enable the current action

![55 · Enable the current action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-enable.png)

<a id="walkthrough-rules-response-controls-encoding-apply"></a>
### 56 · Apply the current action

![56 · Apply the current action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-apply.png)

<a id="walkthrough-rules-response-controls-encoding-header-only"></a>
### 57 · Header-only editing does not compress the original body

![57 · Header-only editing does not compress the original body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-header-only.png)

<a id="walkthrough-rules-response-controls-encoding-edit-body"></a>
### 58 · Return to add an explicit Body replacement

![58 · Return to add an explicit Body replacement](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-edit-body.png)

<a id="walkthrough-rules-response-controls-encoding-add-body"></a>
### 59 · Add the Body action

![59 · Add the Body action](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-add-body.png)

<a id="walkthrough-rules-response-controls-encoding-body-phase"></a>
### 60 · Select Response for Body

![60 · Select Response for Body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-body-phase.png)

<a id="walkthrough-rules-response-controls-encoding-body"></a>
### 61 · Enter guide-encoded-body

![61 · Enter guide-encoded-body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-body.png)

<a id="walkthrough-rules-response-controls-encoding-apply-body"></a>
### 62 · Apply Header and Body

![62 · Apply Header and Body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-apply-body.png)

<a id="walkthrough-rules-response-controls-encoding-body-result"></a>
### 63 · Verify gzipped wire bytes and the readable body

![63 · Verify gzipped wire bytes and the readable body](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-body-result.png)

<a id="walkthrough-rules-response-controls-encoding-back"></a>
### 64 · Return to the same Rule

![64 · Return to the same Rule](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-back.png)

<a id="walkthrough-rules-response-controls-encoding-disable"></a>
### 65 · Disable this Rule

![65 · Disable this Rule](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-disable.png)

<a id="walkthrough-rules-response-controls-encoding-apply-off"></a>
### 66 · Apply the disabled state

![66 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-apply-off.png)

<a id="walkthrough-rules-response-controls-encoding-restored"></a>
### 67 · Verify origin recovery with a new request

![67 · Verify origin recovery with a new request](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-restored.png)

<a id="walkthrough-rules-response-controls-encoding-edit-next"></a>
### 68 · Return to Rules to continue editing

![68 · Return to Rules to continue editing](../media/v0.1.1-alpha.1/rules-response-controls/rules-response-controls-encoding-edit-next.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-response-controls:end -->

<!-- recorded-walkthrough:rules-conflict:start -->
<a id="walkthrough-rules-conflict"></a>
## Recorded walkthrough: a real second writer, retained conflicting drafts and Reload recovery

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
| --- | --- |
| <code>path</code> | <code>/guide/rules-conflict</code> |
| <code>header</code> | <code>x-guide-conflict</code> |
| <code>initial</code> | <code>Guide initial / initial</code> |
| <code>localDraft</code> | <code>Guide local draft / local</code> |
| <code>externalSaved</code> | <code>Guide remote / remote</code> |
| <code>afterReloadEdit</code> | <code>Guide merged / merged</code> |
| <code>writer</code> | <code>Official SDK on localhost, named Guide rules writer; not a commercial Host</code> |
| <code>conflict</code> | <code>Local draft is retained; Reload deliberately discards it before editing the latest revision</code> |

<a id="walkthrough-rules-conflict-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-01-rules.png)

<a id="walkthrough-rules-conflict-02-create"></a>
### 02 · Create the initial Rule

![02 · Create the initial Rule](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-02-create.png)

<a id="walkthrough-rules-conflict-03-name"></a>
### 03 · Name it Guide initial

![03 · Name it Guide initial](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-03-name.png)

<a id="walkthrough-rules-conflict-04-host"></a>
### 04 · Restrict to 127.0.0.1

![04 · Restrict to 127.0.0.1](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-04-host.png)

<a id="walkthrough-rules-conflict-05-add-path"></a>
### 05 · Add a Path condition

![05 · Add a Path condition](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-05-add-path.png)

<a id="walkthrough-rules-conflict-06-path"></a>
### 06 · Restrict the conflict example paths

![06 · Restrict the conflict example paths](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-06-path.png)

<a id="walkthrough-rules-conflict-07-header"></a>
### 07 · Enter x-guide-conflict

![07 · Enter x-guide-conflict](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-07-header.png)

<a id="walkthrough-rules-conflict-08-value"></a>
### 08 · Enter initial

![08 · Enter initial](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-08-value.png)

<a id="walkthrough-rules-conflict-09-enable"></a>
### 09 · Enable the initial Rule

![09 · Enable the initial Rule](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-09-enable.png)

<a id="walkthrough-rules-conflict-10-apply"></a>
### 10 · Apply the initial revision

![10 · Apply the initial revision](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-10-apply.png)

<a id="walkthrough-rules-conflict-11-local-name"></a>
### 11 · Leave a local name draft

![11 · Leave a local name draft](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-11-local-name.png)

<a id="walkthrough-rules-conflict-12-local-value"></a>
### 12 · Leave an unapplied local value

![12 · Leave an unapplied local value](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-12-local-value.png)

<a id="walkthrough-rules-conflict-13-second-writer"></a>
### 13 · Inspect the second writer’s actual Ask approval

![13 · Inspect the second writer’s actual Ask approval](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-13-second-writer.png)

<a id="walkthrough-rules-conflict-14-allow"></a>
### 14 · Allow the second writer to save remote

![14 · Allow the second writer to save remote](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-14-allow.png)

<a id="walkthrough-rules-conflict-15-draft-retained"></a>
### 15 · Verify the local draft was not silently overwritten

![15 · Verify the local draft was not silently overwritten](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-15-draft-retained.png)

<a id="walkthrough-rules-conflict-16-core-remote"></a>
### 16 · Verify new traffic actually uses remote

![16 · Verify new traffic actually uses remote](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-16-core-remote.png)

<a id="walkthrough-rules-conflict-17-reload"></a>
### 17 · Explicitly Reload and discard the local draft

![17 · Explicitly Reload and discard the local draft](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-17-reload.png)

<a id="walkthrough-rules-conflict-18-merged-name"></a>
### 18 · Enter Guide merged based on the new revision

![18 · Enter Guide merged based on the new revision](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-18-merged-name.png)

<a id="walkthrough-rules-conflict-19-merged-value"></a>
### 19 · Enter the merged value

![19 · Enter the merged value](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-19-merged-value.png)

<a id="walkthrough-rules-conflict-20-apply-merged"></a>
### 20 · Apply the new edits

![20 · Apply the new edits](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-20-apply-merged.png)

<a id="walkthrough-rules-conflict-21-merged-request"></a>
### 21 · Verify a new request uses merged

![21 · Verify a new request uses merged](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-21-merged-request.png)

<a id="walkthrough-rules-conflict-22-disable"></a>
### 22 · Disable the example Rule

![22 · Disable the example Rule](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-22-disable.png)

<a id="walkthrough-rules-conflict-23-apply-disabled"></a>
### 23 · Apply the disabled state

![23 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-23-apply-disabled.png)

<a id="walkthrough-rules-conflict-24-mcp-settings"></a>
### 24 · Return to MCP settings for cleanup

![24 · Return to MCP settings for cleanup](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-24-mcp-settings.png)

<a id="walkthrough-rules-conflict-25-stop-server"></a>
### 25 · Stop this run’s MCP Server

![25 · Stop this run’s MCP Server](../media/v0.1.1-alpha.1/rules-conflict/rules-conflict-25-stop-server.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-conflict:end -->

<!-- recorded-walkthrough:rules-routing:start -->
<a id="walkthrough-rules-routing"></a>
## Cross-scheme routing and missing Map Local recovery

These images show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots. Advanced branches not shown here still need their own step images and acceptance.

| Example field | Actual recorded value |
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

<a id="walkthrough-rules-routing-01-rules"></a>
### 01 · Open Rules

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-routing/rules-routing-01-rules.png)

<a id="walkthrough-rules-routing-02-create"></a>
### 02 · Create Guide mapping

![02 · Create Guide mapping](../media/v0.1.1-alpha.1/rules-routing/rules-routing-02-create.png)

<a id="walkthrough-rules-routing-03-source-host"></a>
### 03 · Restrict the original Host to localhost

![03 · Restrict the original Host to localhost](../media/v0.1.1-alpha.1/rules-routing/rules-routing-03-source-host.png)

<a id="walkthrough-rules-routing-04-add-path"></a>
### 04 · Add a Path condition

![04 · Add a Path condition](../media/v0.1.1-alpha.1/rules-routing/rules-routing-04-add-path.png)

<a id="walkthrough-rules-routing-05-path"></a>
### 05 · Restrict the example prefix

![05 · Restrict the example prefix](../media/v0.1.1-alpha.1/rules-routing/rules-routing-05-path.png)

<a id="walkthrough-rules-routing-06-remove-header"></a>
### 06 · Remove the default Header action

![06 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-routing/rules-routing-06-remove-header.png)

<a id="walkthrough-rules-routing-07-map-remote"></a>
### 07 · Add Map Remote

![07 · Add Map Remote](../media/v0.1.1-alpha.1/rules-routing/rules-routing-07-map-remote.png)

<a id="walkthrough-rules-routing-08-http"></a>
### 08 · Explicitly set the target scheme to http

![08 · Explicitly set the target scheme to http](../media/v0.1.1-alpha.1/rules-routing/rules-routing-08-http.png)

<a id="walkthrough-rules-routing-09-target-host"></a>
### 09 · Change target Host to 127.0.0.1

![09 · Change target Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-routing/rules-routing-09-target-host.png)

<a id="walkthrough-rules-routing-10-target-port"></a>
### 10 · Enter the other actual HTTP service port

![10 · Enter the other actual HTTP service port](../media/v0.1.1-alpha.1/rules-routing/rules-routing-10-target-port.png)

<a id="walkthrough-rules-routing-11-target-path"></a>
### 11 · Enter the remote-target path

![11 · Enter the remote-target path](../media/v0.1.1-alpha.1/rules-routing/rules-routing-11-target-path.png)

<a id="walkthrough-rules-routing-12-enable"></a>
### 12 · Enable the mapping Rule

![12 · Enable the mapping Rule](../media/v0.1.1-alpha.1/rules-routing/rules-routing-12-enable.png)

<a id="walkthrough-rules-routing-13-apply"></a>
### 13 · Apply mapping

![13 · Apply mapping](../media/v0.1.1-alpha.1/rules-routing/rules-routing-13-apply.png)

<a id="walkthrough-rules-routing-14-remote-result"></a>
### 14 · Verify HTTPS input reaches the actual HTTP destination

![14 · Verify HTTPS input reaches the actual HTTP destination](../media/v0.1.1-alpha.1/rules-routing/rules-routing-14-remote-result.png)

<a id="walkthrough-rules-routing-15-edit"></a>
### 15 · Return to the mapping Rule

![15 · Return to the mapping Rule](../media/v0.1.1-alpha.1/rules-routing/rules-routing-15-edit.png)

<a id="walkthrough-rules-routing-16-disable"></a>
### 16 · Disable Map Remote

![16 · Disable Map Remote](../media/v0.1.1-alpha.1/rules-routing/rules-routing-16-disable.png)

<a id="walkthrough-rules-routing-17-apply-off"></a>
### 17 · Apply disabling

![17 · Apply disabling](../media/v0.1.1-alpha.1/rules-routing/rules-routing-17-apply-off.png)

<a id="walkthrough-rules-routing-18-original-result"></a>
### 18 · Restore the original HTTPS endpoint’s 404 after disabling

![18 · Restore the original HTTPS endpoint’s 404 after disabling](../media/v0.1.1-alpha.1/rules-routing/rules-routing-18-original-result.png)

<a id="walkthrough-rules-routing-19-file-source"></a>
### 19 · Fetch the public body the product can save

![19 · Fetch the public body the product can save](../media/v0.1.1-alpha.1/rules-routing/rules-routing-19-file-source.png)

<a id="walkthrough-rules-routing-20-save-file"></a>
### 20 · Save guide-map-local.json through the product

![20 · Save guide-map-local.json through the product](../media/v0.1.1-alpha.1/rules-routing/rules-routing-20-save-file.png)

<a id="walkthrough-rules-routing-21-check-file"></a>
### 21 · Verify the actual product-created file

![21 · Verify the actual product-created file](../media/v0.1.1-alpha.1/rules-routing/rules-routing-21-check-file.png)

<a id="walkthrough-rules-routing-22-edit-local"></a>
### 22 · Return to prepare Map Local

![22 · Return to prepare Map Local](../media/v0.1.1-alpha.1/rules-routing/rules-routing-22-edit-local.png)

<a id="walkthrough-rules-routing-23-local-host"></a>
### 23 · Set this example’s original Host to 127.0.0.1

![23 · Set this example’s original Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-routing/rules-routing-23-local-host.png)

<a id="walkthrough-rules-routing-24-remove-remote"></a>
### 24 · Remove the Map Remote action

![24 · Remove the Map Remote action](../media/v0.1.1-alpha.1/rules-routing/rules-routing-24-remove-remote.png)

<a id="walkthrough-rules-routing-25-local"></a>
### 25 · Add Map Local

![25 · Add Map Local](../media/v0.1.1-alpha.1/rules-routing/rules-routing-25-local.png)

<a id="walkthrough-rules-routing-26-missing-name"></a>
### 26 · Enter the owned missing-file name

![26 · Enter the owned missing-file name](../media/v0.1.1-alpha.1/rules-routing/rules-routing-26-missing-name.png)

<a id="walkthrough-rules-routing-27-enable-local"></a>
### 27 · Enable Map Local

![27 · Enable Map Local](../media/v0.1.1-alpha.1/rules-routing/rules-routing-27-enable-local.png)

<a id="walkthrough-rules-routing-28-apply-local"></a>
### 28 · Apply local mapping

![28 · Apply local mapping](../media/v0.1.1-alpha.1/rules-routing/rules-routing-28-apply-local.png)

<a id="walkthrough-rules-routing-29-missing-result"></a>
### 29 · Verify the actual missing-file 404

![29 · Verify the actual missing-file 404](../media/v0.1.1-alpha.1/rules-routing/rules-routing-29-missing-result.png)

<a id="walkthrough-rules-routing-30-correct-rule"></a>
### 30 · Return to correct the path

![30 · Return to correct the path](../media/v0.1.1-alpha.1/rules-routing/rules-routing-30-correct-rule.png)

<a id="walkthrough-rules-routing-31-correct-file"></a>
### 31 · Enter the actual path saved by this workflow

![31 · Enter the actual path saved by this workflow](../media/v0.1.1-alpha.1/rules-routing/rules-routing-31-correct-file.png)

<a id="walkthrough-rules-routing-32-apply-correct"></a>
### 32 · Apply the correct path

![32 · Apply the correct path](../media/v0.1.1-alpha.1/rules-routing/rules-routing-32-apply-correct.png)

<a id="walkthrough-rules-routing-33-local-result"></a>
### 33 · Verify file replacement without calling the origin

![33 · Verify file replacement without calling the origin](../media/v0.1.1-alpha.1/rules-routing/rules-routing-33-local-result.png)

<a id="walkthrough-rules-routing-34-final-rule"></a>
### 34 · Return to the Rule for cleanup

![34 · Return to the Rule for cleanup](../media/v0.1.1-alpha.1/rules-routing/rules-routing-34-final-rule.png)

<a id="walkthrough-rules-routing-35-final-disable"></a>
### 35 · Disable the mapping Rule

![35 · Disable the mapping Rule](../media/v0.1.1-alpha.1/rules-routing/rules-routing-35-final-disable.png)

<a id="walkthrough-rules-routing-36-final-apply"></a>
### 36 · Apply final disabling

![36 · Apply final disabling](../media/v0.1.1-alpha.1/rules-routing/rules-routing-36-final-apply.png)

<a id="walkthrough-rules-routing-37-certificates"></a>
### 37 · Open Certificates to restore this run’s TLS settings

![37 · Open Certificates to restore this run’s TLS settings](../media/v0.1.1-alpha.1/rules-routing/rules-routing-37-certificates.png)

<a id="walkthrough-rules-routing-38-mitm-off"></a>
### 38 · Disable this run’s decryption

![38 · Disable this run’s decryption](../media/v0.1.1-alpha.1/rules-routing/rules-routing-38-mitm-off.png)

<a id="walkthrough-rules-routing-39-remove-exception"></a>
### 39 · Remove the localhost origin exception

![39 · Remove the localhost origin exception](../media/v0.1.1-alpha.1/rules-routing/rules-routing-39-remove-exception.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-routing:end -->
