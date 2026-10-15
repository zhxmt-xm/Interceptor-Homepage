# Rules: change subsequent matching traffic

> Draft for `v0.1.1-alpha.1`. Recorded conditions, actions, ordering and file round trips have step images; missing branches remain explicit. Neither this chapter nor item9 is complete. Use your own endpoint and narrow conditions: Rules affect real traffic.

[Guide directory](../README.en.md) · [Capture](capture.md) · [Breakpoints](breakpoints.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## Recorded walkthrough: actual product steps

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


| Example field | Actual recorded value |
| --- | --- |
| <code>ruleName</code> | <code>Guide test header</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/rules/order</code> |
| <code>url</code> | <code>http://127.0.0.1:54561/guide/rules/order</code> |
| <code>headerName</code> | <code>x-interceptor-guide</code> |
| <code>headerValue</code> | <code>rules-demo</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/rules/rules.mp4" poster="../media/v0.1.1-alpha.1/rules/rules-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules/rules.vtt" default>
</video>

<a id="walkthrough-01-open"></a>
### 01 · Open Rules

[Video 00:00](../media/v0.1.1-alpha.1/rules/rules.mp4#t=0.334) · [Back to the video](#walkthrough-video)

![01 · Open Rules](../media/v0.1.1-alpha.1/rules/rules-01-open.png)

<a id="walkthrough-02-create"></a>
### 02 · Create a Rule

[Video 00:03](../media/v0.1.1-alpha.1/rules/rules.mp4#t=3.189) · [Back to the video](#walkthrough-video)

![02 · Create a Rule](../media/v0.1.1-alpha.1/rules/rules-02-create.png)

<a id="walkthrough-03-name"></a>
### 03 · Name the Rule

[Video 00:06](../media/v0.1.1-alpha.1/rules/rules.mp4#t=6.087) · [Back to the video](#walkthrough-video)

![03 · Name the Rule](../media/v0.1.1-alpha.1/rules/rules-03-name.png)

<a id="walkthrough-04-host"></a>
### 04 · Restrict the host

[Video 00:08](../media/v0.1.1-alpha.1/rules/rules.mp4#t=8.939) · [Back to the video](#walkthrough-video)

![04 · Restrict the host](../media/v0.1.1-alpha.1/rules/rules-04-host.png)

<a id="walkthrough-05-path-condition"></a>
### 05 · Add a Path matcher

[Video 00:11](../media/v0.1.1-alpha.1/rules/rules.mp4#t=11.789) · [Back to the video](#walkthrough-video)

![05 · Add a Path matcher](../media/v0.1.1-alpha.1/rules/rules-05-path-condition.png)

<a id="walkthrough-06-path"></a>
### 06 · Enter the test path

[Video 00:14](../media/v0.1.1-alpha.1/rules/rules.mp4#t=14.991) · [Back to the video](#walkthrough-video)

![06 · Enter the test path](../media/v0.1.1-alpha.1/rules/rules-06-path.png)

<a id="walkthrough-07-header-name"></a>
### 07 · Enter the header name

[Video 00:17](../media/v0.1.1-alpha.1/rules/rules.mp4#t=17.798) · [Back to the video](#walkthrough-video)

![07 · Enter the header name](../media/v0.1.1-alpha.1/rules/rules-07-header-name.png)

<a id="walkthrough-08-header-value"></a>
### 08 · Enter the header value

[Video 00:20](../media/v0.1.1-alpha.1/rules/rules.mp4#t=20.587) · [Back to the video](#walkthrough-video)

![08 · Enter the header value](../media/v0.1.1-alpha.1/rules/rules-08-header-value.png)

<a id="walkthrough-09-enable"></a>
### 09 · Enable the Rule

[Video 00:23](../media/v0.1.1-alpha.1/rules/rules.mp4#t=23.388) · [Back to the video](#walkthrough-video)

![09 · Enable the Rule](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

<a id="walkthrough-10-apply"></a>
### 10 · Apply the Rule

[Video 00:26](../media/v0.1.1-alpha.1/rules/rules.mp4#t=26.195) · [Back to the video](#walkthrough-video)

![10 · Apply the Rule](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

<a id="walkthrough-11-hit"></a>
### 11 · Send a matching request

[Video 00:29](../media/v0.1.1-alpha.1/rules/rules.mp4#t=29.037) · [Back to the video](#walkthrough-video)

![11 · Send a matching request](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

<a id="walkthrough-12-capture"></a>
### 12 · Inspect the actual Capture result

[Video 00:33](../media/v0.1.1-alpha.1/rules/rules.mp4#t=33.695) · [Back to the video](#walkthrough-video)

![12 · Inspect the actual Capture result](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

<a id="walkthrough-13-nonmatching"></a>
### 13 · Verify an unmatched request

[Video 00:36](../media/v0.1.1-alpha.1/rules/rules.mp4#t=36.839) · [Back to the video](#walkthrough-video)

![13 · Verify an unmatched request](../media/v0.1.1-alpha.1/rules/rules-13-nonmatching.png)

<a id="walkthrough-14-disable"></a>
### 14 · Disable and Apply

[Video 00:39](../media/v0.1.1-alpha.1/rules/rules.mp4#t=39.837) · [Back to the video](#walkthrough-video)

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

2. Create a rule in the root toolbar. The empty-area menu is another entry point; that branch is still image pending.

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

9. Resolve incomplete fields and enable the rule. This shows a complete rule enabled; validation-failure branches remain image pending.

   ![Enabling the complete rule](../media/v0.1.1-alpha.1/rules/rules-09-enable.png)

10. Click Apply and wait for success.

    ![Actual rule state after Apply](../media/v0.1.1-alpha.1/rules/rules-10-apply.png)

11. Send `http://127.0.0.1:54561/guide/rules/order` through the proxy with an external client and inspect its hit. `54561` is the recording's dynamic port; use your own service.

    ![Hit after the matching request](../media/v0.1.1-alpha.1/rules/rules-11-hit.png)

12. Return to Capture and inspect the actual request header. Separate effect-marker expansion/navigation remains image pending.

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

    **Image pending:** this example demonstrates its configured eight-condition AND, not every operator, invalid regex, case option or MIME wildcard branch.

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

1. Use the first rule's narrow scope and request Header `set`, with name `x-interceptor-guide` and value `rules-demo`. The response-phase example is `Guide matchers` above; do not mix the two recordings' values.

   ![Request Header name](../media/v0.1.1-alpha.1/rules/rules-07-header-name.png)

   ![Request Header value rules-demo](../media/v0.1.1-alpha.1/rules/rules-08-header-value.png)

2. Query setting uses a separate `Guide query` rule. After limiting its test endpoint, remove the default Header action and add Query.

   ![Removing Guide query's default Header](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-06-remove.png)

   ![Selecting Query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-07-action.png)

3. Set name `guide` and value `rewritten`; the incoming value was `original`. Query remove below is a separate example with different input.

   ![Query rewrite guide=rewritten](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-08-values.png)

4. Check action order, enable and Apply. Reordering multiple actions remains image pending; do not add unrelated actions to this exercise.

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

**Image pending:** this append/remove exercise checks request Headers. Response-phase remove/append still need their own images; the response `set` result from `Guide matchers` is not a substitute.

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

   **Image pending:** additional Header/encoding combinations were not separately edited in this recording. Body input does not prove encoding correctness.

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

    **Image pending:** the Body result shows Final only, not toggling between versions. Unavailable original content is not empty content.

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

4. Enter body `{"message":"guide maintenance"}`. Explicitly add response headers if required; additional header editing remains image pending.

   ![Actual synthetic response body input](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-body.png)

5. Enable and Apply.

   ![Enabling the synthetic response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-09-enable.png)

   ![Applying the synthetic response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-10-apply.png)

6. Access the matching endpoint through the proxy and check `503` with `guide maintenance`, not the normal origin result.

   ![Actual synthetic-response checkpoint](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-11-result.png)

7. Disable the rule and Apply when finished, then verify the normal route again.

   **Image pending:** the normal request after disabling Synthetic response was not separately shown. Disabling a Header rule is not this operation.

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

   **Image pending:** starting the external service is outside this App recording. The following images use an already-running local service with a recording-assigned port.

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

6. Remove the default Header and choose Block. Modes include `reset` and `close`; switching between both remains image pending. One recorded block does not demonstrate both modes.

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

    **Image pending:** Delay/Block did not separately record normal requests after disabling. Breakpoint cleanup images only cover that breakpoint rule.

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

8. Move `Guide first` into it. Folders support up to three levels; the depth boundary remains image pending.

   ![Moving Guide first next](../media/v0.1.1-alpha.1/rules-organization/rules-organization-09-move-first.png)

9. Apply the folder structure.

   ![Saving the actual folder hierarchy](../media/v0.1.1-alpha.1/rules-organization/rules-organization-10-apply-folder.png)

10. Name management uses the separate `rules-operations` example: rename the edited `Guide operations` to `Guide operations done`. This renames a rule, not the preceding `Guide rules` folder.

    ![Actually renaming to Guide operations done](../media/v0.1.1-alpha.1/rules-operations/rules-operations-20-rename.png)

11. Locate that rule in name search, not by request URL.

    ![Actually locating the demonstration rule by name](../media/v0.1.1-alpha.1/rules-operations/rules-operations-21-search.png)

    **Image pending:** folder-name search, existing-folder rename and the three-level boundary are not covered by this rule-name operation.

12. Retain but disable `Guide operations done` after the demonstration.

    ![Actually retaining and disabling the demo rule](../media/v0.1.1-alpha.1/rules-operations/rules-operations-22-disable.png)

13. Apply its disabled state.

    ![Actually saving the disabled state, not deletion](../media/v0.1.1-alpha.1/rules-operations/rules-operations-23-apply-disabled.png)

14. Before deleting nodes, distinguish the empty-tree limitation above. An empty view after deleting the last rule is not a saved result.

    **Blocked — product limitation:** alpha.1 leaves the empty tree dirty without Apply; persistent last-rule deletion failed in the actual run. Non-last-rule/folder deletion and subsequent requests remain image pending. The disabled result above does not prove any deletion persisted.

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

   **Image pending:** rule-menu navigation to Capture was not recorded.

3. Inspect actual Header/Body results. These images belong to the Header example and separate `Guide body`, not one request. Effect-marker expansion remains image pending.

   ![Actual request header from the Header example](../media/v0.1.1-alpha.1/rules/rules-12-capture.png)

   ![Actual Final from the Body example](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

4. On a revision conflict, preserve needed edits before choosing Reload. Reload discards the local draft and loads the latest tree.

   **Image pending / blocked:** a two-writer conflict and Reload were not recorded. An ordinary successful Apply is not conflict recovery.

5. Reapply intentional changes and verify; do not repeatedly submit a stale tree over another writer's changes.

   **Image pending:** editing and applying after that conflict were not recorded.

**Expected result:** confirm actual effects rather than guessing bytes from a rule name or count.

**Notes:** Rules still act while Recording is paused, but no new Capture evidence is created. Saved revision, current draft and validity are distinct.

<a id="import-export"></a>
## Import and export rules

1. Review addresses, bodies and local paths for sensitive data.

   **Image pending:** field-by-field privacy review has no separate image. The following file operation belongs specifically to the ordered rules in `Guide rules`.

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

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


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

<a id="walkthrough-rules-actions-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4" poster="../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-actions/rules-actions.vtt" default>
</video>

<a id="walkthrough-rules-actions-query-01-rules"></a>
### 01 · Return to Rules

[Video 00:00](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=0.414) · [Back to the video](#walkthrough-rules-actions-video)

![01 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-01-rules.png)

<a id="walkthrough-rules-actions-query-02-create"></a>
### 02 · Create a query Rule

[Video 00:03](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=3.325) · [Back to the video](#walkthrough-rules-actions-video)

![02 · Create a query Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-02-create.png)

<a id="walkthrough-rules-actions-query-03-name"></a>
### 03 · Name the Rule Guide query

[Video 00:06](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=6.275) · [Back to the video](#walkthrough-rules-actions-video)

![03 · Name the Rule Guide query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-03-name.png)

<a id="walkthrough-rules-actions-query-04-host"></a>
### 04 · Restrict Host to 127.0.0.1

[Video 00:09](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=9.123) · [Back to the video](#walkthrough-rules-actions-video)

![04 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-04-host.png)

<a id="walkthrough-rules-actions-query-05-path"></a>
### 05 · Enter this action’s test Path

[Video 00:11](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=11.975) · [Back to the video](#walkthrough-rules-actions-video)

![05 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-05-path.png)

<a id="walkthrough-rules-actions-query-06-remove"></a>
### 06 · Remove the default Header action

[Video 00:15](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=15.323) · [Back to the video](#walkthrough-rules-actions-video)

![06 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-06-remove.png)

<a id="walkthrough-rules-actions-query-07-action"></a>
### 07 · Select the query action

[Video 00:18](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=18.172) · [Back to the video](#walkthrough-rules-actions-video)

![07 · Select the query action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-07-action.png)

<a id="walkthrough-rules-actions-query-08-values"></a>
### 08 · Set guide=rewritten

[Video 00:21](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=21.423) · [Back to the video](#walkthrough-rules-actions-video)

![08 · Set guide=rewritten](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-08-values.png)

<a id="walkthrough-rules-actions-query-09-enable"></a>
### 09 · Enable the current Rule

[Video 00:24](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=24.324) · [Back to the video](#walkthrough-rules-actions-video)

![09 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-09-enable.png)

<a id="walkthrough-rules-actions-query-10-apply"></a>
### 10 · Apply to the real proxy

[Video 00:27](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=27.174) · [Back to the video](#walkthrough-rules-actions-video)

![10 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-10-apply.png)

<a id="walkthrough-rules-actions-query-11-result"></a>
### 11 · Verify the final Query

[Video 00:30](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=30.023) · [Back to the video](#walkthrough-rules-actions-video)

![11 · Verify the final Query](../media/v0.1.1-alpha.1/rules-actions/rules-actions-query-11-result.png)

<a id="walkthrough-rules-actions-body-01-rules"></a>
### 12 · Return to Rules

[Video 00:33](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=33.174) · [Back to the video](#walkthrough-rules-actions-video)

![12 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-01-rules.png)

<a id="walkthrough-rules-actions-body-02-create"></a>
### 13 · Create a body Rule

[Video 00:36](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=36.025) · [Back to the video](#walkthrough-rules-actions-video)

![13 · Create a body Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-02-create.png)

<a id="walkthrough-rules-actions-body-03-name"></a>
### 14 · Name the Rule Guide body

[Video 00:38](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=38.877) · [Back to the video](#walkthrough-rules-actions-video)

![14 · Name the Rule Guide body](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-03-name.png)

<a id="walkthrough-rules-actions-body-04-host"></a>
### 15 · Restrict Host to 127.0.0.1

[Video 00:41](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=41.724) · [Back to the video](#walkthrough-rules-actions-video)

![15 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-04-host.png)

<a id="walkthrough-rules-actions-body-05-path"></a>
### 16 · Enter this action’s test Path

[Video 00:44](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=44.574) · [Back to the video](#walkthrough-rules-actions-video)

![16 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-05-path.png)

<a id="walkthrough-rules-actions-body-06-remove"></a>
### 17 · Remove the default Header action

[Video 00:47](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=47.822) · [Back to the video](#walkthrough-rules-actions-video)

![17 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-06-remove.png)

<a id="walkthrough-rules-actions-body-07-action"></a>
### 18 · Select the body action

[Video 00:50](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=50.672) · [Back to the video](#walkthrough-rules-actions-video)

![18 · Select the body action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-07-action.png)

<a id="walkthrough-rules-actions-body-08-phase"></a>
### 19 · Select the response phase

[Video 00:53](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=53.923) · [Back to the video](#walkthrough-rules-actions-video)

![19 · Select the response phase](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-phase.png)

<a id="walkthrough-rules-actions-body-08-content"></a>
### 20 · Enter the guide-body replacement

[Video 00:57](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=57.122) · [Back to the video](#walkthrough-rules-actions-video)

![20 · Enter the guide-body replacement](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-08-content.png)

<a id="walkthrough-rules-actions-body-09-enable"></a>
### 21 · Enable the current Rule

[Video 00:59](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=59.971) · [Back to the video](#walkthrough-rules-actions-video)

![21 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-09-enable.png)

<a id="walkthrough-rules-actions-body-10-apply"></a>
### 22 · Apply to the real proxy

[Video 01:02](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=62.820) · [Back to the video](#walkthrough-rules-actions-video)

![22 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-10-apply.png)

<a id="walkthrough-rules-actions-body-11-result"></a>
### 23 · Inspect the Final body

[Video 01:05](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=65.682) · [Back to the video](#walkthrough-rules-actions-video)

![23 · Inspect the Final body](../media/v0.1.1-alpha.1/rules-actions/rules-actions-body-11-result.png)

<a id="walkthrough-rules-actions-status-01-rules"></a>
### 24 · Return to Rules

[Video 01:09](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=69.170) · [Back to the video](#walkthrough-rules-actions-video)

![24 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-01-rules.png)

<a id="walkthrough-rules-actions-status-02-create"></a>
### 25 · Create a status Rule

[Video 01:12](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=72.066) · [Back to the video](#walkthrough-rules-actions-video)

![25 · Create a status Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-02-create.png)

<a id="walkthrough-rules-actions-status-03-name"></a>
### 26 · Name the Rule Guide status

[Video 01:14](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=74.964) · [Back to the video](#walkthrough-rules-actions-video)

![26 · Name the Rule Guide status](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-03-name.png)

<a id="walkthrough-rules-actions-status-04-host"></a>
### 27 · Restrict Host to 127.0.0.1

[Video 01:17](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=77.777) · [Back to the video](#walkthrough-rules-actions-video)

![27 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-04-host.png)

<a id="walkthrough-rules-actions-status-05-path"></a>
### 28 · Enter this action’s test Path

[Video 01:20](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=80.609) · [Back to the video](#walkthrough-rules-actions-video)

![28 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-05-path.png)

<a id="walkthrough-rules-actions-status-06-remove"></a>
### 29 · Remove the default Header action

[Video 01:23](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=83.855) · [Back to the video](#walkthrough-rules-actions-video)

![29 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-06-remove.png)

<a id="walkthrough-rules-actions-status-07-action"></a>
### 30 · Select the status action

[Video 01:26](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=86.684) · [Back to the video](#walkthrough-rules-actions-video)

![30 · Select the status action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-07-action.png)

<a id="walkthrough-rules-actions-status-08-value"></a>
### 31 · Set status 418

[Video 01:29](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=89.902) · [Back to the video](#walkthrough-rules-actions-video)

![31 · Set status 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-08-value.png)

<a id="walkthrough-rules-actions-status-09-enable"></a>
### 32 · Enable the current Rule

[Video 01:32](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=92.720) · [Back to the video](#walkthrough-rules-actions-video)

![32 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-09-enable.png)

<a id="walkthrough-rules-actions-status-10-apply"></a>
### 33 · Apply to the real proxy

[Video 01:35](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=95.567) · [Back to the video](#walkthrough-rules-actions-video)

![33 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-10-apply.png)

<a id="walkthrough-rules-actions-status-11-result"></a>
### 34 · Verify HTTP 418

[Video 01:38](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=98.410) · [Back to the video](#walkthrough-rules-actions-video)

![34 · Verify HTTP 418](../media/v0.1.1-alpha.1/rules-actions/rules-actions-status-11-result.png)

<a id="walkthrough-rules-actions-synthetic-01-rules"></a>
### 35 · Return to Rules

[Video 01:41](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=101.548) · [Back to the video](#walkthrough-rules-actions-video)

![35 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-01-rules.png)

<a id="walkthrough-rules-actions-synthetic-02-create"></a>
### 36 · Create a synthetic Rule

[Video 01:44](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=104.397) · [Back to the video](#walkthrough-rules-actions-video)

![36 · Create a synthetic Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-02-create.png)

<a id="walkthrough-rules-actions-synthetic-03-name"></a>
### 37 · Name the Rule Guide synthetic

[Video 01:47](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=107.247) · [Back to the video](#walkthrough-rules-actions-video)

![37 · Name the Rule Guide synthetic](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-03-name.png)

<a id="walkthrough-rules-actions-synthetic-04-host"></a>
### 38 · Restrict Host to 127.0.0.1

[Video 01:50](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=110.054) · [Back to the video](#walkthrough-rules-actions-video)

![38 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-04-host.png)

<a id="walkthrough-rules-actions-synthetic-05-path"></a>
### 39 · Enter this action’s test Path

[Video 01:52](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=112.847) · [Back to the video](#walkthrough-rules-actions-video)

![39 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-05-path.png)

<a id="walkthrough-rules-actions-synthetic-06-remove"></a>
### 40 · Remove the default Header action

[Video 01:56](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=116.065) · [Back to the video](#walkthrough-rules-actions-video)

![40 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-06-remove.png)

<a id="walkthrough-rules-actions-synthetic-07-action"></a>
### 41 · Select the synthetic action

[Video 01:58](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=118.869) · [Back to the video](#walkthrough-rules-actions-video)

![41 · Select the synthetic action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-07-action.png)

<a id="walkthrough-rules-actions-synthetic-08-status"></a>
### 42 · Set mock status 503

[Video 02:02](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=122.009) · [Back to the video](#walkthrough-rules-actions-video)

![42 · Set mock status 503](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-status.png)

<a id="walkthrough-rules-actions-synthetic-08-body"></a>
### 43 · Enter the mock response

[Video 02:04](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=124.805) · [Back to the video](#walkthrough-rules-actions-video)

![43 · Enter the mock response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-08-body.png)

<a id="walkthrough-rules-actions-synthetic-09-enable"></a>
### 44 · Enable the current Rule

[Video 02:07](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=127.619) · [Back to the video](#walkthrough-rules-actions-video)

![44 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-09-enable.png)

<a id="walkthrough-rules-actions-synthetic-10-apply"></a>
### 45 · Apply to the real proxy

[Video 02:10](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=130.494) · [Back to the video](#walkthrough-rules-actions-video)

![45 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-10-apply.png)

<a id="walkthrough-rules-actions-synthetic-11-result"></a>
### 46 · Verify the origin was not called

[Video 02:13](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=133.339) · [Back to the video](#walkthrough-rules-actions-video)

![46 · Verify the origin was not called](../media/v0.1.1-alpha.1/rules-actions/rules-actions-synthetic-11-result.png)

<a id="walkthrough-rules-actions-delay-01-rules"></a>
### 47 · Return to Rules

[Video 02:16](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=136.458) · [Back to the video](#walkthrough-rules-actions-video)

![47 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-01-rules.png)

<a id="walkthrough-rules-actions-delay-02-create"></a>
### 48 · Create a delay Rule

[Video 02:19](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=139.354) · [Back to the video](#walkthrough-rules-actions-video)

![48 · Create a delay Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-02-create.png)

<a id="walkthrough-rules-actions-delay-03-name"></a>
### 49 · Name the Rule Guide delay

[Video 02:22](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=142.196) · [Back to the video](#walkthrough-rules-actions-video)

![49 · Name the Rule Guide delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-03-name.png)

<a id="walkthrough-rules-actions-delay-04-host"></a>
### 50 · Restrict Host to 127.0.0.1

[Video 02:24](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=144.999) · [Back to the video](#walkthrough-rules-actions-video)

![50 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-04-host.png)

<a id="walkthrough-rules-actions-delay-05-path"></a>
### 51 · Enter this action’s test Path

[Video 02:27](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=147.828) · [Back to the video](#walkthrough-rules-actions-video)

![51 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-05-path.png)

<a id="walkthrough-rules-actions-delay-06-remove"></a>
### 52 · Remove the default Header action

[Video 02:31](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=151.073) · [Back to the video](#walkthrough-rules-actions-video)

![52 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-06-remove.png)

<a id="walkthrough-rules-actions-delay-07-action"></a>
### 53 · Select the delay action

[Video 02:33](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=153.904) · [Back to the video](#walkthrough-rules-actions-video)

![53 · Select the delay action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-07-action.png)

<a id="walkthrough-rules-actions-delay-08-value"></a>
### 54 · Set 500 milliseconds

[Video 02:37](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=157.144) · [Back to the video](#walkthrough-rules-actions-video)

![54 · Set 500 milliseconds](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-08-value.png)

<a id="walkthrough-rules-actions-delay-09-enable"></a>
### 55 · Enable the current Rule

[Video 02:39](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=159.967) · [Back to the video](#walkthrough-rules-actions-video)

![55 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-09-enable.png)

<a id="walkthrough-rules-actions-delay-10-apply"></a>
### 56 · Apply to the real proxy

[Video 02:42](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=162.783) · [Back to the video](#walkthrough-rules-actions-video)

![56 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-10-apply.png)

<a id="walkthrough-rules-actions-delay-11-result"></a>
### 57 · Verify the actual delay

[Video 02:45](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=165.648) · [Back to the video](#walkthrough-rules-actions-video)

![57 · Verify the actual delay](../media/v0.1.1-alpha.1/rules-actions/rules-actions-delay-11-result.png)

<a id="walkthrough-rules-actions-block-01-rules"></a>
### 58 · Return to Rules

[Video 02:49](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=169.303) · [Back to the video](#walkthrough-rules-actions-video)

![58 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-01-rules.png)

<a id="walkthrough-rules-actions-block-02-create"></a>
### 59 · Create a block Rule

[Video 02:52](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=172.206) · [Back to the video](#walkthrough-rules-actions-video)

![59 · Create a block Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-02-create.png)

<a id="walkthrough-rules-actions-block-03-name"></a>
### 60 · Name the Rule Guide block

[Video 02:55](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=175.048) · [Back to the video](#walkthrough-rules-actions-video)

![60 · Name the Rule Guide block](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-03-name.png)

<a id="walkthrough-rules-actions-block-04-host"></a>
### 61 · Restrict Host to 127.0.0.1

[Video 02:57](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=177.865) · [Back to the video](#walkthrough-rules-actions-video)

![61 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-04-host.png)

<a id="walkthrough-rules-actions-block-05-path"></a>
### 62 · Enter this action’s test Path

[Video 03:00](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=180.686) · [Back to the video](#walkthrough-rules-actions-video)

![62 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-05-path.png)

<a id="walkthrough-rules-actions-block-06-remove"></a>
### 63 · Remove the default Header action

[Video 03:03](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=183.897) · [Back to the video](#walkthrough-rules-actions-video)

![63 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-06-remove.png)

<a id="walkthrough-rules-actions-block-07-action"></a>
### 64 · Select the block action

[Video 03:06](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=186.730) · [Back to the video](#walkthrough-rules-actions-video)

![64 · Select the block action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-07-action.png)

<a id="walkthrough-rules-actions-block-09-enable"></a>
### 65 · Enable the current Rule

[Video 03:09](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=189.855) · [Back to the video](#walkthrough-rules-actions-video)

![65 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-09-enable.png)

<a id="walkthrough-rules-actions-block-10-apply"></a>
### 66 · Apply to the real proxy

[Video 03:12](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=192.683) · [Back to the video](#walkthrough-rules-actions-video)

![66 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-10-apply.png)

<a id="walkthrough-rules-actions-block-11-result"></a>
### 67 · Verify the blocked request

[Video 03:15](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=195.541) · [Back to the video](#walkthrough-rules-actions-video)

![67 · Verify the blocked request](../media/v0.1.1-alpha.1/rules-actions/rules-actions-block-11-result.png)

<a id="walkthrough-rules-actions-map-remote-01-rules"></a>
### 68 · Return to Rules

[Video 03:18](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=198.614) · [Back to the video](#walkthrough-rules-actions-video)

![68 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-01-rules.png)

<a id="walkthrough-rules-actions-map-remote-02-create"></a>
### 69 · Create a map-remote Rule

[Video 03:21](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=201.468) · [Back to the video](#walkthrough-rules-actions-video)

![69 · Create a map-remote Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-02-create.png)

<a id="walkthrough-rules-actions-map-remote-03-name"></a>
### 70 · Name the Rule Guide map-remote

[Video 03:24](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=204.317) · [Back to the video](#walkthrough-rules-actions-video)

![70 · Name the Rule Guide map-remote](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-03-name.png)

<a id="walkthrough-rules-actions-map-remote-04-host"></a>
### 71 · Restrict Host to 127.0.0.1

[Video 03:27](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=207.118) · [Back to the video](#walkthrough-rules-actions-video)

![71 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-04-host.png)

<a id="walkthrough-rules-actions-map-remote-05-path"></a>
### 72 · Enter this action’s test Path

[Video 03:29](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=209.927) · [Back to the video](#walkthrough-rules-actions-video)

![72 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-05-path.png)

<a id="walkthrough-rules-actions-map-remote-06-remove"></a>
### 73 · Remove the default Header action

[Video 03:33](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=213.176) · [Back to the video](#walkthrough-rules-actions-video)

![73 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-06-remove.png)

<a id="walkthrough-rules-actions-map-remote-07-action"></a>
### 74 · Select the map-remote action

[Video 03:36](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=216.008) · [Back to the video](#walkthrough-rules-actions-video)

![74 · Select the map-remote action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-07-action.png)

<a id="walkthrough-rules-actions-map-remote-08-path"></a>
### 75 · Change only the destination Path

[Video 03:39](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=219.256) · [Back to the video](#walkthrough-rules-actions-video)

![75 · Change only the destination Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-08-path.png)

<a id="walkthrough-rules-actions-map-remote-09-enable"></a>
### 76 · Enable the current Rule

[Video 03:42](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=222.071) · [Back to the video](#walkthrough-rules-actions-video)

![76 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-09-enable.png)

<a id="walkthrough-rules-actions-map-remote-10-apply"></a>
### 77 · Apply to the real proxy

[Video 03:44](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=224.871) · [Back to the video](#walkthrough-rules-actions-video)

![77 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-10-apply.png)

<a id="walkthrough-rules-actions-map-remote-11-result"></a>
### 78 · Verify the mapped destination

[Video 03:47](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=227.737) · [Back to the video](#walkthrough-rules-actions-video)

![78 · Verify the mapped destination](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-remote-11-result.png)

<a id="walkthrough-rules-actions-map-local-00-capture"></a>
### 79 · Capture public example text

[Video 03:50](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=230.797) · [Back to the video](#walkthrough-rules-actions-video)

![79 · Capture public example text](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-capture.png)

<a id="walkthrough-rules-actions-map-local-00-save"></a>
### 80 · Export guide-local.txt

[Video 04:04](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=244.277) · [Back to the video](#walkthrough-rules-actions-video)

![80 · Export guide-local.txt](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-00-save.png)

<a id="walkthrough-rules-actions-map-local-01-rules"></a>
### 81 · Return to Rules

[Video 04:08](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=248.392) · [Back to the video](#walkthrough-rules-actions-video)

![81 · Return to Rules](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-01-rules.png)

<a id="walkthrough-rules-actions-map-local-02-create"></a>
### 82 · Create a map-local Rule

[Video 04:11](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=251.251) · [Back to the video](#walkthrough-rules-actions-video)

![82 · Create a map-local Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-02-create.png)

<a id="walkthrough-rules-actions-map-local-03-name"></a>
### 83 · Name the Rule Guide map-local

[Video 04:14](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=254.094) · [Back to the video](#walkthrough-rules-actions-video)

![83 · Name the Rule Guide map-local](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-03-name.png)

<a id="walkthrough-rules-actions-map-local-04-host"></a>
### 84 · Restrict Host to 127.0.0.1

[Video 04:16](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=256.898) · [Back to the video](#walkthrough-rules-actions-video)

![84 · Restrict Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-04-host.png)

<a id="walkthrough-rules-actions-map-local-05-path"></a>
### 85 · Enter this action’s test Path

[Video 04:19](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=259.712) · [Back to the video](#walkthrough-rules-actions-video)

![85 · Enter this action’s test Path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-05-path.png)

<a id="walkthrough-rules-actions-map-local-06-remove"></a>
### 86 · Remove the default Header action

[Video 04:22](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=262.958) · [Back to the video](#walkthrough-rules-actions-video)

![86 · Remove the default Header action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-06-remove.png)

<a id="walkthrough-rules-actions-map-local-07-action"></a>
### 87 · Select the map-local action

[Video 04:25](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=265.791) · [Back to the video](#walkthrough-rules-actions-video)

![87 · Select the map-local action](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-07-action.png)

<a id="walkthrough-rules-actions-map-local-08-path"></a>
### 88 · Enter the product-exported file path

[Video 04:29](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=269.062) · [Back to the video](#walkthrough-rules-actions-video)

![88 · Enter the product-exported file path](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-08-path.png)

<a id="walkthrough-rules-actions-map-local-09-enable"></a>
### 89 · Enable the current Rule

[Video 04:31](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=271.891) · [Back to the video](#walkthrough-rules-actions-video)

![89 · Enable the current Rule](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-09-enable.png)

<a id="walkthrough-rules-actions-map-local-10-apply"></a>
### 90 · Apply to the real proxy

[Video 04:34](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=274.706) · [Back to the video](#walkthrough-rules-actions-video)

![90 · Apply to the real proxy](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-10-apply.png)

<a id="walkthrough-rules-actions-map-local-11-result"></a>
### 91 · Verify the local-file response

[Video 04:37](../media/v0.1.1-alpha.1/rules-actions/rules-actions.mp4#t=277.540) · [Back to the video](#walkthrough-rules-actions-video)

![91 · Verify the local-file response](../media/v0.1.1-alpha.1/rules-actions/rules-actions-map-local-11-result.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-actions:end -->

<!-- recorded-walkthrough:rules-matchers:start -->
<a id="walkthrough-rules-matchers"></a>
## Recorded walkthrough: all eight conditions and AND matching

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


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

<a id="walkthrough-rules-matchers-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4" poster="../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.vtt" default>
</video>

<a id="walkthrough-rules-matchers-01-rules"></a>
### 01 · Open Rules

[Video 00:00](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=0.402) · [Back to the video](#walkthrough-rules-matchers-video)

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-01-rules.png)

<a id="walkthrough-rules-matchers-02-create"></a>
### 02 · Create Guide matchers

[Video 00:03](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=3.304) · [Back to the video](#walkthrough-rules-matchers-video)

![02 · Create Guide matchers](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-02-create.png)

<a id="walkthrough-rules-matchers-03-host"></a>
### 03 · Set Host to 127.0.0.1

[Video 00:06](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=6.306) · [Back to the video](#walkthrough-rules-matchers-video)

![03 · Set Host to 127.0.0.1](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-03-host.png)

<a id="walkthrough-rules-matchers-04-method-add"></a>
### 04 · Add Method

[Video 00:09](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=9.101) · [Back to the video](#walkthrough-rules-matchers-video)

![04 · Add Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-04-method-add.png)

<a id="walkthrough-rules-matchers-05-method"></a>
### 05 · Set Method to GET

[Video 00:12](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=12.303) · [Back to the video](#walkthrough-rules-matchers-video)

![05 · Set Method to GET](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-05-method.png)

<a id="walkthrough-rules-matchers-06-path-add"></a>
### 06 · Add Path

[Video 00:15](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=15.109) · [Back to the video](#walkthrough-rules-matchers-video)

![06 · Add Path](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-06-path-add.png)

<a id="walkthrough-rules-matchers-07-path"></a>
### 07 · Enter the endpoint Path

[Video 00:18](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=18.352) · [Back to the video](#walkthrough-rules-matchers-video)

![07 · Enter the endpoint Path](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-07-path.png)

<a id="walkthrough-rules-matchers-08-url-add"></a>
### 08 · Add URL

[Video 00:21](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=21.203) · [Back to the video](#walkthrough-rules-matchers-video)

![08 · Add URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-08-url-add.png)

<a id="walkthrough-rules-matchers-09-url"></a>
### 09 · Enter the complete example URL

[Video 00:24](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=24.453) · [Back to the video](#walkthrough-rules-matchers-video)

![09 · Enter the complete example URL](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-09-url.png)

<a id="walkthrough-rules-matchers-10-query-add"></a>
### 10 · Add Query

[Video 00:27](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=27.304) · [Back to the video](#walkthrough-rules-matchers-video)

![10 · Add Query](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-10-query-add.png)

<a id="walkthrough-rules-matchers-11-query"></a>
### 11 · Set the Query pair

[Video 00:30](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=30.503) · [Back to the video](#walkthrough-rules-matchers-video)

![11 · Set the Query pair](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-11-query.png)

<a id="walkthrough-rules-matchers-12-header-add"></a>
### 12 · Add Header

[Video 00:33](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=33.403) · [Back to the video](#walkthrough-rules-matchers-video)

![12 · Add Header](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-12-header-add.png)

<a id="walkthrough-rules-matchers-13-header"></a>
### 13 · Set the request Header pair

[Video 00:36](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=36.602) · [Back to the video](#walkthrough-rules-matchers-video)

![13 · Set the request Header pair](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-13-header.png)

<a id="walkthrough-rules-matchers-14-status-add"></a>
### 14 · Add Status

[Video 00:39](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=39.604) · [Back to the video](#walkthrough-rules-matchers-video)

![14 · Add Status](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-14-status-add.png)

<a id="walkthrough-rules-matchers-15-status"></a>
### 15 · Set range 200 to 200

[Video 00:42](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=42.904) · [Back to the video](#walkthrough-rules-matchers-video)

![15 · Set range 200 to 200](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-15-status.png)

<a id="walkthrough-rules-matchers-16-mime-add"></a>
### 16 · Add MIME

[Video 00:45](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=45.762) · [Back to the video](#walkthrough-rules-matchers-video)

![16 · Add MIME](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-16-mime-add.png)

<a id="walkthrough-rules-matchers-17-mime"></a>
### 17 · Set the response MIME

[Video 00:49](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=49.055) · [Back to the video](#walkthrough-rules-matchers-video)

![17 · Set the response MIME](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-17-mime.png)

<a id="walkthrough-rules-matchers-18-effect-phase"></a>
### 18 · Select response Header editing

[Video 00:51](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=51.962) · [Back to the video](#walkthrough-rules-matchers-video)

![18 · Select response Header editing](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-18-effect-phase.png)

<a id="walkthrough-rules-matchers-19-effect-name"></a>
### 19 · Enter the effect Header name

[Video 00:55](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=55.154) · [Back to the video](#walkthrough-rules-matchers-video)

![19 · Enter the effect Header name](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-19-effect-name.png)

<a id="walkthrough-rules-matchers-20-effect-value"></a>
### 20 · Enter the effect value

[Video 00:58](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=58.003) · [Back to the video](#walkthrough-rules-matchers-video)

![20 · Enter the effect value](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-20-effect-value.png)

<a id="walkthrough-rules-matchers-21-enable"></a>
### 21 · Enable the complete Rule

[Video 01:00](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=60.853) · [Back to the video](#walkthrough-rules-matchers-video)

![21 · Enable the complete Rule](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-21-enable.png)

<a id="walkthrough-rules-matchers-22-apply"></a>
### 22 · Apply

[Video 01:03](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=63.703) · [Back to the video](#walkthrough-rules-matchers-video)

![22 · Apply](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-22-apply.png)

<a id="walkthrough-rules-matchers-23-match"></a>
### 23 · Send a GET satisfying every condition

[Video 01:06](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=66.655) · [Back to the video](#walkthrough-rules-matchers-video)

![23 · Send a GET satisfying every condition](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-23-match.png)

<a id="walkthrough-rules-matchers-24-no-match"></a>
### 24 · A POST does not satisfy Method

[Video 01:10](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers.mp4#t=70.104) · [Back to the video](#walkthrough-rules-matchers-video)

![24 · A POST does not satisfy Method](../media/v0.1.1-alpha.1/rules-matchers/rules-matchers-24-no-match.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-matchers:end -->

<!-- recorded-walkthrough:rules-organization:start -->
<a id="walkthrough-rules-organization"></a>
## Recorded walkthrough: precedence, folders and Rule files

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


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

<a id="walkthrough-rules-organization-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4" poster="../media/v0.1.1-alpha.1/rules-organization/rules-organization-01-open.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-organization/rules-organization.vtt" default>
</video>

<a id="walkthrough-rules-organization-01-open"></a>
### 01 · Open Rules

[Video 00:00](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=0.409) · [Back to the video](#walkthrough-rules-organization-video)

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-organization/rules-organization-01-open.png)

<a id="walkthrough-rules-organization-first-01-new"></a>
### 02 · Create Guide first

[Video 00:03](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=3.231) · [Back to the video](#walkthrough-rules-organization-video)

![02 · Create Guide first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-01-new.png)

<a id="walkthrough-rules-organization-first-02-host"></a>
### 03 · Enter Host

[Video 00:06](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=6.217) · [Back to the video](#walkthrough-rules-organization-video)

![03 · Enter Host](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-02-host.png)

<a id="walkthrough-rules-organization-first-03-path"></a>
### 04 · Restrict the example Path

[Video 00:09](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=9.017) · [Back to the video](#walkthrough-rules-organization-video)

![04 · Restrict the example Path](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-03-path.png)

<a id="walkthrough-rules-organization-first-04-header"></a>
### 05 · Enter x-guide-order

[Video 00:12](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=12.217) · [Back to the video](#walkthrough-rules-organization-video)

![05 · Enter x-guide-order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-04-header.png)

<a id="walkthrough-rules-organization-first-05-enable"></a>
### 06 · Enable this Rule

[Video 00:15](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=15.067) · [Back to the video](#walkthrough-rules-organization-video)

![06 · Enable this Rule](../media/v0.1.1-alpha.1/rules-organization/rules-organization-first-05-enable.png)

<a id="walkthrough-rules-organization-second-01-new"></a>
### 07 · Create Guide second

[Video 00:17](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=17.867) · [Back to the video](#walkthrough-rules-organization-video)

![07 · Create Guide second](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-01-new.png)

<a id="walkthrough-rules-organization-second-02-host"></a>
### 08 · Enter Host

[Video 00:20](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=20.767) · [Back to the video](#walkthrough-rules-organization-video)

![08 · Enter Host](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-02-host.png)

<a id="walkthrough-rules-organization-second-03-path"></a>
### 09 · Restrict the example Path

[Video 00:23](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=23.567) · [Back to the video](#walkthrough-rules-organization-video)

![09 · Restrict the example Path](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-03-path.png)

<a id="walkthrough-rules-organization-second-04-header"></a>
### 10 · Enter x-guide-order

[Video 00:26](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=26.777) · [Back to the video](#walkthrough-rules-organization-video)

![10 · Enter x-guide-order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-04-header.png)

<a id="walkthrough-rules-organization-second-05-enable"></a>
### 11 · Enable this Rule

[Video 00:29](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=29.617) · [Back to the video](#walkthrough-rules-organization-video)

![11 · Enable this Rule](../media/v0.1.1-alpha.1/rules-organization/rules-organization-second-05-enable.png)

<a id="walkthrough-rules-organization-02-apply"></a>
### 12 · Apply both Rules

[Video 00:32](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=32.468) · [Back to the video](#walkthrough-rules-organization-video)

![12 · Apply both Rules](../media/v0.1.1-alpha.1/rules-organization/rules-organization-02-apply.png)

<a id="walkthrough-rules-organization-03-before"></a>
### 13 · Verify second wins initially

[Video 00:35](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=35.317) · [Back to the video](#walkthrough-rules-organization-video)

![13 · Verify second wins initially](../media/v0.1.1-alpha.1/rules-organization/rules-organization-03-before.png)

<a id="walkthrough-rules-organization-04-reorder"></a>
### 14 · Drag second before first

[Video 00:38](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=38.118) · [Back to the video](#walkthrough-rules-organization-video)

![14 · Drag second before first](../media/v0.1.1-alpha.1/rules-organization/rules-organization-04-reorder.png)

<a id="walkthrough-rules-organization-05-apply-order"></a>
### 15 · Apply the new order

[Video 00:41](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=41.068) · [Back to the video](#walkthrough-rules-organization-video)

![15 · Apply the new order](../media/v0.1.1-alpha.1/rules-organization/rules-organization-05-apply-order.png)

<a id="walkthrough-rules-organization-06-after"></a>
### 16 · Verify first now wins

[Video 00:43](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=43.918) · [Back to the video](#walkthrough-rules-organization-video)

![16 · Verify first now wins](../media/v0.1.1-alpha.1/rules-organization/rules-organization-06-after.png)

<a id="walkthrough-rules-organization-07-folder"></a>
### 17 · Create the Guide rules folder

[Video 00:46](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=46.669) · [Back to the video](#walkthrough-rules-organization-video)

![17 · Create the Guide rules folder](../media/v0.1.1-alpha.1/rules-organization/rules-organization-07-folder.png)

<a id="walkthrough-rules-organization-08-move-second"></a>
### 18 · Move second into the folder

[Video 00:49](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=49.567) · [Back to the video](#walkthrough-rules-organization-video)

![18 · Move second into the folder](../media/v0.1.1-alpha.1/rules-organization/rules-organization-08-move-second.png)

<a id="walkthrough-rules-organization-09-move-first"></a>
### 19 · Move first into the folder

[Video 00:52](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=52.518) · [Back to the video](#walkthrough-rules-organization-video)

![19 · Move first into the folder](../media/v0.1.1-alpha.1/rules-organization/rules-organization-09-move-first.png)

<a id="walkthrough-rules-organization-10-apply-folder"></a>
### 20 · Apply the folder structure

[Video 00:55](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=55.425) · [Back to the video](#walkthrough-rules-organization-video)

![20 · Apply the folder structure](../media/v0.1.1-alpha.1/rules-organization/rules-organization-10-apply-folder.png)

<a id="walkthrough-rules-organization-11-export"></a>
### 21 · Save guide-rules.json

[Video 01:18](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=78.586) · [Back to the video](#walkthrough-rules-organization-video)

![21 · Save guide-rules.json](../media/v0.1.1-alpha.1/rules-organization/rules-organization-11-export.png)

<a id="walkthrough-rules-organization-12-exported"></a>
### 22 · Verify the product-exported tree

[Video 01:23](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=83.317) · [Back to the video](#walkthrough-rules-organization-video)

![22 · Verify the product-exported tree](../media/v0.1.1-alpha.1/rules-organization/rules-organization-12-exported.png)

<a id="walkthrough-rules-organization-13-import-file"></a>
### 23 · Select the exported Rules file

[Video 01:38](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=98.706) · [Back to the video](#walkthrough-rules-organization-video)

![23 · Select the exported Rules file](../media/v0.1.1-alpha.1/rules-organization/rules-organization-13-import-file.png)

<a id="walkthrough-rules-organization-14-preview"></a>
### 24 · Inspect the enabled-rule import warning

[Video 01:43](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=103.853) · [Back to the video](#walkthrough-rules-organization-video)

![24 · Inspect the enabled-rule import warning](../media/v0.1.1-alpha.1/rules-organization/rules-organization-14-preview.png)

<a id="walkthrough-rules-organization-15-cancel"></a>
### 25 · Cancel and retain the original tree

[Video 01:46](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=106.668) · [Back to the video](#walkthrough-rules-organization-video)

![25 · Cancel and retain the original tree](../media/v0.1.1-alpha.1/rules-organization/rules-organization-15-cancel.png)

<a id="walkthrough-rules-organization-16-import-again"></a>
### 26 · Select the same file again

[Video 02:02](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=122.131) · [Back to the video](#walkthrough-rules-organization-video)

![26 · Select the same file again](../media/v0.1.1-alpha.1/rules-organization/rules-organization-16-import-again.png)

<a id="walkthrough-rules-organization-17-confirm"></a>
### 27 · Confirm append without overwrite

[Video 02:07](../media/v0.1.1-alpha.1/rules-organization/rules-organization.mp4#t=127.165) · [Back to the video](#walkthrough-rules-organization-video)

![27 · Confirm append without overwrite](../media/v0.1.1-alpha.1/rules-organization/rules-organization-17-confirm.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-organization:end -->

<!-- recorded-walkthrough:rules-operations:start -->
<a id="walkthrough-rules-operations"></a>
## Recorded walkthrough: remove, append, request bodies and search

These images and video show the published <code>0.1.1-alpha.1</code> on macOS x64, retaining the App language <code>zh-CN</code>. Every recorded step has its own native-window screenshot; open an image at full size to inspect values.

Loopback addresses, ports and generated IDs belong to this recording, not a public service. Use your own authorized test environment. The actual values below match the screenshots and video. Advanced branches not shown here still need their own step images and acceptance.


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

<a id="walkthrough-rules-operations-video"></a>

<video controls preload="metadata" playsinline lang="en" src="../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4" poster="../media/v0.1.1-alpha.1/rules-operations/rules-operations-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/rules-operations/rules-operations.vtt" default>
</video>

<a id="walkthrough-rules-operations-01-rules"></a>
### 01 · Open Rules

[Video 00:00](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=0.367) · [Back to the video](#walkthrough-rules-operations-video)

![01 · Open Rules](../media/v0.1.1-alpha.1/rules-operations/rules-operations-01-rules.png)

<a id="walkthrough-rules-operations-02-new"></a>
### 02 · Create Guide operations

[Video 00:03](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=3.255) · [Back to the video](#walkthrough-rules-operations-video)

![02 · Create Guide operations](../media/v0.1.1-alpha.1/rules-operations/rules-operations-02-new.png)

<a id="walkthrough-rules-operations-03-scope"></a>
### 03 · Restrict Host and Path

[Video 00:06](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=6.253) · [Back to the video](#walkthrough-rules-operations-video)

![03 · Restrict Host and Path](../media/v0.1.1-alpha.1/rules-operations/rules-operations-03-scope.png)

<a id="walkthrough-rules-operations-04-header-name"></a>
### 04 · Enter x-guide-list

[Video 00:09](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=9.563) · [Back to the video](#walkthrough-rules-operations-video)

![04 · Enter x-guide-list](../media/v0.1.1-alpha.1/rules-operations/rules-operations-04-header-name.png)

<a id="walkthrough-rules-operations-05-append"></a>
### 05 · Choose append

[Video 00:12](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=12.403) · [Back to the video](#walkthrough-rules-operations-video)

![05 · Choose append](../media/v0.1.1-alpha.1/rules-operations/rules-operations-05-append.png)

<a id="walkthrough-rules-operations-06-enable"></a>
### 06 · Enable the Rule

[Video 00:15](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=15.714) · [Back to the video](#walkthrough-rules-operations-video)

![06 · Enable the Rule](../media/v0.1.1-alpha.1/rules-operations/rules-operations-06-enable.png)

<a id="walkthrough-rules-operations-07-apply"></a>
### 07 · Apply append

[Video 00:18](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=18.554) · [Back to the video](#walkthrough-rules-operations-video)

![07 · Apply append](../media/v0.1.1-alpha.1/rules-operations/rules-operations-07-apply.png)

<a id="walkthrough-rules-operations-08-appended"></a>
### 08 · Verify one is retained and two appended

[Video 00:21](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=21.453) · [Back to the video](#walkthrough-rules-operations-video)

![08 · Verify one is retained and two appended](../media/v0.1.1-alpha.1/rules-operations/rules-operations-08-appended.png)

<a id="walkthrough-rules-operations-09-remove"></a>
### 09 · Choose remove

[Video 00:24](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=24.303) · [Back to the video](#walkthrough-rules-operations-video)

![09 · Choose remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-09-remove.png)

<a id="walkthrough-rules-operations-10-apply-remove"></a>
### 10 · Apply remove

[Video 00:27](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=27.554) · [Back to the video](#walkthrough-rules-operations-video)

![10 · Apply remove](../media/v0.1.1-alpha.1/rules-operations/rules-operations-10-apply-remove.png)

<a id="walkthrough-rules-operations-11-removed"></a>
### 11 · Verify the Header was removed

[Video 00:30](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=30.454) · [Back to the video](#walkthrough-rules-operations-video)

![11 · Verify the Header was removed](../media/v0.1.1-alpha.1/rules-operations/rules-operations-11-removed.png)

<a id="walkthrough-rules-operations-12-query-action"></a>
### 12 · Switch to a Query action

[Video 00:33](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=33.254) · [Back to the video](#walkthrough-rules-operations-video)

![12 · Switch to a Query action](../media/v0.1.1-alpha.1/rules-operations/rules-operations-12-query-action.png)

<a id="walkthrough-rules-operations-13-query-remove"></a>
### 13 · Remove the guide parameter

[Video 00:36](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=36.503) · [Back to the video](#walkthrough-rules-operations-video)

![13 · Remove the guide parameter](../media/v0.1.1-alpha.1/rules-operations/rules-operations-13-query-remove.png)

<a id="walkthrough-rules-operations-14-apply-query"></a>
### 14 · Apply Query removal

[Video 00:39](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=39.453) · [Back to the video](#walkthrough-rules-operations-video)

![14 · Apply Query removal](../media/v0.1.1-alpha.1/rules-operations/rules-operations-14-apply-query.png)

<a id="walkthrough-rules-operations-15-query-result"></a>
### 15 · Verify the parameter is removed

[Video 00:42](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=42.353) · [Back to the video](#walkthrough-rules-operations-video)

![15 · Verify the parameter is removed](../media/v0.1.1-alpha.1/rules-operations/rules-operations-15-query-result.png)

<a id="walkthrough-rules-operations-16-body-action"></a>
### 16 · Switch to request Body replacement

[Video 00:45](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=45.154) · [Back to the video](#walkthrough-rules-operations-video)

![16 · Switch to request Body replacement](../media/v0.1.1-alpha.1/rules-operations/rules-operations-16-body-action.png)

<a id="walkthrough-rules-operations-17-body-value"></a>
### 17 · Enter request-edited

[Video 00:49](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=49.004) · [Back to the video](#walkthrough-rules-operations-video)

![17 · Enter request-edited](../media/v0.1.1-alpha.1/rules-operations/rules-operations-17-body-value.png)

<a id="walkthrough-rules-operations-18-apply-body"></a>
### 18 · Apply request-body replacement

[Video 00:51](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=51.853) · [Back to the video](#walkthrough-rules-operations-video)

![18 · Apply request-body replacement](../media/v0.1.1-alpha.1/rules-operations/rules-operations-18-apply-body.png)

<a id="walkthrough-rules-operations-19-body-result"></a>
### 19 · Verify the complete replacement at the origin

[Video 00:54](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=54.809) · [Back to the video](#walkthrough-rules-operations-video)

![19 · Verify the complete replacement at the origin](../media/v0.1.1-alpha.1/rules-operations/rules-operations-19-body-result.png)

<a id="walkthrough-rules-operations-20-rename"></a>
### 20 · Rename the Rule

[Video 00:57](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=57.610) · [Back to the video](#walkthrough-rules-operations-video)

![20 · Rename the Rule](../media/v0.1.1-alpha.1/rules-operations/rules-operations-20-rename.png)

<a id="walkthrough-rules-operations-21-search"></a>
### 21 · Search by name

[Video 01:00](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=60.655) · [Back to the video](#walkthrough-rules-operations-video)

![21 · Search by name](../media/v0.1.1-alpha.1/rules-operations/rules-operations-21-search.png)

<a id="walkthrough-rules-operations-22-disable"></a>
### 22 · Retain and disable the demo Rule

[Video 01:03](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=63.503) · [Back to the video](#walkthrough-rules-operations-video)

![22 · Retain and disable the demo Rule](../media/v0.1.1-alpha.1/rules-operations/rules-operations-22-disable.png)

<a id="walkthrough-rules-operations-23-apply-disabled"></a>
### 23 · Apply the disabled state

[Video 01:06](../media/v0.1.1-alpha.1/rules-operations/rules-operations.mp4#t=66.403) · [Back to the video](#walkthrough-rules-operations-video)

![23 · Apply the disabled state](../media/v0.1.1-alpha.1/rules-operations/rules-operations-23-apply-disabled.png)

The complete reference follows. Only operations with matching real step images and checked input values count as illustrated acceptance.
<!-- recorded-walkthrough:rules-operations:end -->
