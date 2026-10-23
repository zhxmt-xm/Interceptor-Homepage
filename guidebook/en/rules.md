# Rules: change subsequent matching traffic

[Guide directory](../README.en.md) · [Capture](capture.md) · [Breakpoints](breakpoints.md)

<a id="先区分规则与录制"></a>
## Rules and recording are separate

- Rules intervene in proxy forwarding, not already-completed historical requests.
- Pausing Recording does not disable Rules; it only prevents new Capture records.
- Composer sends directly and does not use proxy Rules. Verify a rule with an external proxied client.
- Folders organize rules; they are not match conditions.

<a id="first-rule"></a>
## Create, enable and apply your first rule

Add a harmless test header to a narrow set of requests.

Have the proxy ready and enable Recording for inspection. Use an endpoint you are authorized to test. The pictured service is `http://127.0.0.1:62029`; the `E2E action variants` paths below are relative to this service. Replace its address and port with your own service's values.

1. <a id="walkthrough"></a><a id="walkthrough-01-open"></a>Open Rules.

   ![Rules before creating the first rule](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-002.png)

2. <a id="walkthrough-02-create"></a>Click the plus button above the rule list. You can also choose New rule from the list's empty-area menu; both create the same kind of rule.

   ![The new rule is disabled with empty Host and Header fields](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-004.png)

3. <a id="walkthrough-03-name"></a>Enter `E2E action variants` in the name field in box 1. The empty `New folder` in the list does not participate in matching.

   ![Naming the rule E2E action variants](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-006.annotated.png)

4. <a id="walkthrough-04-host"></a>Enter `127.0.0.1` in the Host field in box 1, not a complete URL.

   ![Restricting Host to the loopback address](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-007.annotated.png)

5. <a id="walkthrough-05-path-condition"></a>Click Add condition, then choose Path in box 1 to add a path condition.

   ![Path in the condition menu](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-008.annotated.png)

6. <a id="walkthrough-06-path"></a>Enter `/e2e/rules/actions` in box 1 to restrict the rule to these test paths.

   ![Entering the test path scope](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-010.annotated.png)

7. <a id="walkthrough-07-header-name"></a>Keep the Header action in the `request` phase with operation `Set`. Enter `x-e2e-action` in the name field in box 1.

   ![Entering the request Header name](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-011.annotated.png)

8. <a id="walkthrough-08-header-value"></a>Enter `from-rule` in the value field in box 1.

   ![Entering Header value from-rule](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-012.annotated.png)

9. <a id="walkthrough-09-enable"></a>Complete the required fields, then turn on the rule switch in box 1. The rule says Enabled, but the bottom still says Unsaved changes; enabling is not saving.

   ![The rule is enabled but not yet saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-013.annotated.png)

10. <a id="walkthrough-10-apply"></a>Click Save at the upper right. Wait for the bottom status in box 1 to become Rule set applied; the rule now applies to subsequent requests.

    ![Rule set applied after saving](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-018.annotated.png)

11. <a id="walkthrough-11-hit"></a>Use an external client to GET `/e2e/rules/actions/request-set` through the proxy with the original Header `x-e2e-action: original`. After the request finishes, inspect the `E2E action variants` row: its hit count increases from `0` to `1`.

    ![The rule has one hit after the first matching request](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-022.png)

12. <a id="walkthrough-12-capture"></a>Return to Capture, enter `/e2e/rules/actions/request-set` in Keyword in box 1, and select the new row in box 2. Do not use a historical row to judge the settings you just saved.

    ![Finding and selecting the first matching request by its path](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-019.annotated.png)

    Open Headers. In Request Headers in box 1 below, check for `x-e2e-action: from-rule` with Rule set. The original value `original` is struck through and marked Rule replaced: it was overwritten, not forwarded as a second value. Clickable inline source markers return to the rule; they are not a separate expandable panel.

    ![Request Headers show the replaced original and final Set value](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-020.annotated.png)

13. <a id="walkthrough-13-nonmatching"></a>Request a path that does not contain `/e2e/rules/actions` and check that it does not receive the same Header change. Do not inspect an already-completed request to judge new settings.

    ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-020.png)

14. <a id="walkthrough-14-disable"></a>If you are not continuing with the action exercises below, disable `E2E action variants` and Save. Send another request and check that the original Header behavior returns.

    ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-020.png)
- Ordinary new rules and Capture rewrite drafts start disabled. The Capture Breakpoint shortcut is different: it creates, enables and applies immediately.
- Incomplete rules cannot be enabled, and incomplete fields prevent Apply. An empty condition list does not mean “match everything.”
- Editing, toggling and ordering a draft is not proof that Core has applied it.
- Missing-field validation does not prove every regex, JSON body or local path works. Verify actual traffic.

<a id="matchers"></a>

## Select matching conditions

This example uses `E2E hierarchy rule`. Conditions within a rule are ANDed: all must match. The example service uses port `53161`; replace the full-URL condition and the client's URL together when using your own endpoint. Send only your own loopback test traffic during this exercise.

1. <a id="walkthrough-rules-matchers"></a><a id="walkthrough-rules-matchers-01-rules"></a><a id="walkthrough-rules-matchers-02-create"></a>Follow the [folder steps](#order) to create a rule in a third-level folder. Choose Rename in its node menu, enter `E2E hierarchy rule` in box 1, and press Enter.

   ![Naming E2E hierarchy rule inside the folders](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-014.annotated.png)

2. <a id="walkthrough-rules-matchers-03-host"></a>Enter `127.0.0.1` in the Host field in box 1 of the first image. Keep the default request Header action on `Set`, enter name `x-rules-e2e`, and enter `active` in the value field in box 1 of the second image. Enable and Save, then add the following conditions to the same rule.

   ![Entering the Host condition](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-017.annotated.png)

   ![Completing the request Header value active](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-019.annotated.png)

3. <a id="walkthrough-rules-matchers-04-method-add"></a><a id="walkthrough-rules-matchers-05-method"></a>Click Add condition, add Method, and enter `GET` in the method field in box 1.

   ![Entering GET for Method](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-033.annotated.png)

4. <a id="walkthrough-rules-matchers-06-path-add"></a><a id="walkthrough-rules-matchers-07-path"></a>Add Path and enter `/e2e/rules/all-conditions` in box 1.

   ![Restricting the all-conditions path](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-037.annotated.png)

5. <a id="walkthrough-rules-matchers-08-url-add"></a><a id="walkthrough-rules-matchers-09-url"></a>Add URL and enter `http://127.0.0.1:53161/e2e/rules/all-conditions?case=and` in box 1.

   ![Entering the complete URL condition](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-041.annotated.png)

6. <a id="walkthrough-rules-matchers-10-query-add"></a><a id="walkthrough-rules-matchers-11-query"></a>Add Query, enter name `case`, and enter `and` in the value field in box 1.

   ![Query condition case=and](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-046.annotated.png)

7. <a id="walkthrough-rules-matchers-12-header-add"></a><a id="walkthrough-rules-matchers-13-header"></a>Add a Header condition, choose `request`, enter name `x-e2e-matcher`, and enter `present` in box 1. This is a matching condition, not the rewrite action below.

   ![Request Header condition x-e2e-matcher](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-051.annotated.png)

8. <a id="walkthrough-rules-matchers-14-status-add"></a><a id="walkthrough-rules-matchers-15-status"></a>Add Status and set both limits to `200`. Box 1 marks the upper-limit field.

   ![Response status range 200 to 200](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-056.annotated.png)

9. <a id="walkthrough-rules-matchers-16-mime-add"></a><a id="walkthrough-rules-matchers-17-mime"></a>Add MIME, choose `response`, and enter `application/json` in box 1.

   ![Response MIME condition](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-060.annotated.png)

10. <a id="walkthrough-rules-matchers-18-effect-phase"></a>Switch the Header action's phase control in box 1 to `response`. Status and response MIME are evaluated after response headers arrive; they cannot trigger an earlier request rewrite.

    ![Switching the effect Header to response phase](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-062.annotated.png)

11. <a id="walkthrough-rules-matchers-19-effect-name"></a><a id="walkthrough-rules-matchers-20-effect-value"></a>Check that the action is still `Set x-rules-e2e: active`. Do not substitute the matching condition's `x-e2e-matcher: present`.

    ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-062.png)

12. <a id="walkthrough-rules-matchers-21-enable"></a><a id="walkthrough-rules-matchers-22-apply"></a>Keep the rule enabled and click Save. Wait for Rule set applied in box 1; all eight conditions and the response action now apply together.

    ![All eight AND conditions saved](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-063.annotated.png)

13. <a id="walkthrough-rules-matchers-23-match"></a>Send GET to that URL with `x-e2e-matcher: present`. Filter Capture by `/e2e/rules/all-conditions` and select this GET. Response Headers in box 1 should show both `application/json` and `x-rules-e2e: active`.

    ![Response Header when GET satisfies all conditions](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-065.annotated.png)

14. <a id="walkthrough-rules-matchers-24-no-match"></a>Change only the method to POST and request the same URL. Select the new POST row in Capture, not the previous GET. Although the response is still `200`, Response Headers in box 1 has no `x-rules-e2e`.

    ![POST does not receive the rewrite when Method fails](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-068.annotated.png)

15. <a id="walkthrough-rules-matching-modes"></a><a id="walkthrough-rules-matching-modes-01-rules"></a><a id="walkthrough-rules-matching-modes-02-create"></a><a id="walkthrough-rules-matching-modes-03-name"></a><a id="walkthrough-rules-matching-modes-04-host"></a><a id="walkthrough-rules-matching-modes-05-path-condition"></a><a id="walkthrough-rules-matching-modes-06-path-value"></a><a id="walkthrough-rules-matching-modes-07-header"></a><a id="walkthrough-rules-matching-modes-08-value"></a><a id="walkthrough-rules-matching-modes-09-enable"></a><a id="walkthrough-rules-matching-modes-10-contains"></a><a id="walkthrough-rules-matching-modes-contains-capture"></a><a id="walkthrough-rules-matching-modes-contains-request"></a><a id="walkthrough-rules-matching-modes-contains-headers"></a><a id="walkthrough-rules-matching-modes-contains-rules"></a><a id="walkthrough-rules-matching-modes-11-case-sensitive"></a><a id="walkthrough-rules-matching-modes-12-apply-case"></a><a id="walkthrough-rules-matching-modes-case-sensitive-capture"></a><a id="walkthrough-rules-matching-modes-case-sensitive-request"></a><a id="walkthrough-rules-matching-modes-case-sensitive-headers"></a><a id="walkthrough-rules-matching-modes-case-sensitive-rules"></a><a id="walkthrough-rules-matching-modes-13-exact"></a><a id="walkthrough-rules-matching-modes-14-apply-exact"></a><a id="walkthrough-rules-matching-modes-exact-negative-capture"></a><a id="walkthrough-rules-matching-modes-exact-negative-request"></a><a id="walkthrough-rules-matching-modes-exact-negative-headers"></a><a id="walkthrough-rules-matching-modes-exact-negative-rules"></a><a id="walkthrough-rules-matching-modes-exact-positive-capture"></a><a id="walkthrough-rules-matching-modes-exact-positive-request"></a><a id="walkthrough-rules-matching-modes-exact-positive-headers"></a><a id="walkthrough-rules-matching-modes-exact-positive-rules"></a><a id="walkthrough-rules-matching-modes-15-regex"></a><a id="walkthrough-rules-matching-modes-16-invalid-regex"></a><a id="walkthrough-rules-matching-modes-16a-apply-invalid"></a><a id="walkthrough-rules-matching-modes-invalid-regex-capture"></a><a id="walkthrough-rules-matching-modes-invalid-regex-request"></a><a id="walkthrough-rules-matching-modes-invalid-regex-headers"></a><a id="walkthrough-rules-matching-modes-invalid-regex-rules"></a><a id="walkthrough-rules-matching-modes-17-valid-regex"></a><a id="walkthrough-rules-matching-modes-18-apply-regex"></a><a id="walkthrough-rules-matching-modes-regex-positive-capture"></a><a id="walkthrough-rules-matching-modes-regex-positive-request"></a><a id="walkthrough-rules-matching-modes-regex-positive-headers"></a><a id="walkthrough-rules-matching-modes-regex-positive-rules"></a><a id="walkthrough-rules-matching-modes-regex-negative-capture"></a><a id="walkthrough-rules-matching-modes-regex-negative-request"></a><a id="walkthrough-rules-matching-modes-regex-negative-headers"></a><a id="walkthrough-rules-matching-modes-regex-negative-rules"></a><a id="walkthrough-rules-matching-modes-19-ignore-case"></a><a id="walkthrough-rules-matching-modes-20-apply-ignore-case"></a><a id="walkthrough-rules-matching-modes-regex-ignore-case-capture"></a><a id="walkthrough-rules-matching-modes-regex-ignore-case-request"></a><a id="walkthrough-rules-matching-modes-regex-ignore-case-headers"></a><a id="walkthrough-rules-matching-modes-regex-ignore-case-rules"></a><a id="walkthrough-rules-matching-modes-21-response-action"></a><a id="walkthrough-rules-matching-modes-22-mime-condition"></a><a id="walkthrough-rules-matching-modes-23-mime-wildcard"></a><a id="walkthrough-rules-matching-modes-24-apply-mime"></a><a id="walkthrough-rules-matching-modes-mime-json-capture"></a><a id="walkthrough-rules-matching-modes-mime-json-request"></a><a id="walkthrough-rules-matching-modes-mime-json-headers"></a><a id="walkthrough-rules-matching-modes-mime-json-rules"></a><a id="walkthrough-rules-matching-modes-mime-text-capture"></a><a id="walkthrough-rules-matching-modes-mime-text-request"></a><a id="walkthrough-rules-matching-modes-mime-text-headers"></a><a id="walkthrough-rules-matching-modes-mime-text-rules"></a><a id="walkthrough-rules-matching-modes-25-disable"></a><a id="walkthrough-rules-matching-modes-26-apply-disabled"></a>For other Host, Path or URL matching, select exact, contains or regex and check case sensitivity before testing.

    1. Remove the other conditions, keeping Host and Path. Enter `/e2e/rules/modes/Case` in box 1 and retain the response Header action. Default contains matching ignores case. Save and request `/e2e/rules/modes/case/extra`; the response should contain `x-rules-e2e: active`.

       ![Entering the Path for matching-mode comparisons](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-071.annotated.png)

       Select this lowercase-path request in Capture. Response Headers in box 1 below includes `x-rules-e2e: active`.

       ![Contains matches the path without case sensitivity](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-073.annotated.png)

    2. Turn on the Aa case-sensitivity option in box 1 and Save. The same lowercase `case/extra` request no longer matches.

       ![Enabling Aa case sensitivity](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-076.annotated.png)

       Select the later request with the same path. Response Headers in box 1 below no longer includes `x-rules-e2e`; changing current settings does not overwrite the earlier historical request.

       ![A new lowercase request no longer matches with Aa enabled](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-078.annotated.png)

    3. Click the exact-match button in box 1 and Save. `/e2e/rules/modes/Case` matches; adding `/extra` does not.

       ![Enabling exact matching](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-081.annotated.png)

       Select the two new requests in turn. Response Headers in box 1 of the first result has no `x-rules-e2e`; box 1 of the second has `active`.

       ![Exact matching rejects the extra path suffix](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-083.annotated.png)

       ![Exact matching succeeds for the complete path](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-086.annotated.png)

    4. Select the regex button `.*`, enter `[` in Path, and Save. An invalid regex does not match requests; a successful save does not make the expression valid.

       ![Entering an invalid regex](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-089.png)

       Request `/e2e/rules/modes/Case` again and select the new record. Response Headers in box 1 of the result has no `x-rules-e2e`.

       ![The saved invalid regex still does not match](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-091.annotated.png)

    5. Correct box 1 to `^/e2e/rules/modes/Case/[0-9]+$` and Save. A `/123` suffix matches; `/letters` does not. Aa still controls case sensitivity; turn it off and save if you need case-insensitive matching.

       ![Regex matching numeric path suffixes](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-094.annotated.png)

       Select `/123` and `/letters` in Capture. Box 1 in each result marks Response Headers: the numeric path has `active`, while the alphabetic path has no such Header.

       ![A numeric path matches the regex](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-096.annotated.png)

       ![An alphabetic path does not match the regex](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-099.annotated.png)

    6. Add a response MIME condition, enter `application/*` in box 1, and Save. Have `/Case/124` return `application/json` and `/Case/125` return `text/plain`: the former matches and the latter does not. Disable the rule and Save when finished.

       ![Restricting response types with a MIME wildcard](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-102.annotated.png)

       Response Headers in box 1 of each result shows the content type and matching outcome together: `application/json` gains `active`; `text/plain` does not.

       ![application/json matches the MIME wildcard](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-104.annotated.png)

       ![text/plain does not match the MIME wildcard](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-107.annotated.png)

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

response status, headers and MIME cannot be known before the response. A regex that cannot compile may simply not match; no missing-field warning is not a regex test.

<a id="headers-query"></a>
## Modify Header and Query

1. <a id="walkthrough-rules-operations"></a><a id="walkthrough-rules-operations-01-rules"></a><a id="walkthrough-rules-operations-02-new"></a><a id="walkthrough-rules-operations-03-scope"></a><a id="walkthrough-rules-operations-04-header-name"></a>Continue with the first section's `E2E action variants`: Host `127.0.0.1`, Path `/e2e/rules/actions`, request Header `x-e2e-action`, and value `from-rule`. Replace the current action for each exercise rather than adding unrelated actions.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-024.png)

2. <a id="walkthrough-rules-operations-05-append"></a><a id="walkthrough-rules-operations-06-enable"></a><a id="walkthrough-rules-operations-07-apply"></a><a id="walkthrough-rules-operations-08-appended"></a>Select Append in the operation control in box 1, retain `from-rule`, keep the rule enabled, and Save. Send `/e2e/rules/actions/request-append` with `x-e2e-action: original`. The origin should receive both `original` and `from-rule`, not just a replacement value.

   ![Selecting Append for the request Header](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-024.annotated.png)

   Return to Capture and use Keyword to find and select the new request. In Request Headers in box 1 below, `original` remains without a strike-through and the added `from-rule` carries Rule appended.

   ![Request Headers retain the original and appended values](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-027.annotated.png)

3. <a id="walkthrough-rules-operations-09-remove"></a><a id="walkthrough-rules-operations-10-apply-remove"></a><a id="walkthrough-rules-operations-11-removed"></a>Change box 1 to Remove and retain name `x-e2e-action`; no value is needed. Save and send `/e2e/rules/actions/request-remove` with that Header. The origin should no longer receive it.

   ![Selecting Remove for the request Header](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-031.annotated.png)

   Select the new request in Capture and inspect Request Headers in box 1 below. The original `x-e2e-action` value is struck through and marked Rule removed. This history row does not mean the Header was still forwarded.

   ![The original request Header value is marked Rule removed](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-034.annotated.png)

4. <a id="walkthrough-rules-actions"></a><a id="walkthrough-rules-actions-query-01-rules"></a><a id="walkthrough-rules-actions-query-02-create"></a><a id="walkthrough-rules-actions-query-03-name"></a><a id="walkthrough-rules-actions-query-04-host"></a><a id="walkthrough-rules-actions-query-05-path"></a><a id="walkthrough-rules-actions-query-06-remove"></a><a id="walkthrough-rules-actions-query-07-action"></a><a id="walkthrough-rules-operations-12-query-action"></a>For Query, retain the same rule's Host and Path. Remove the old Header action with its upper-right ×, open Add action, and select Rewrite query in box 1.

   ![Adding Rewrite query after removing the previous action](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-061.annotated.png)

5. <a id="walkthrough-rules-actions-query-08-values"></a>Choose Set, enter parameter name `entry`, and enter replacement value `rewritten` in box 1.

   ![Setting Query entry=rewritten](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-064.annotated.png)

6. <a id="walkthrough-rules-actions-query-09-enable"></a><a id="walkthrough-rules-actions-query-10-apply"></a><a id="walkthrough-rules-actions-query-11-result"></a>Keep the rule enabled and click Save. Wait for Rule set applied in box 1. Request `/e2e/rules/actions/query-set?entry=original` and check that the origin receives `/e2e/rules/actions/query-set?entry=rewritten`.

   ![Query Set saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-065.annotated.png)

   Use Keyword in Capture to find the new request and open Request. Query String Parameters in box 1 below still shows the incoming `entry=original`, not the final forwarded value.

   ![The Query panel preserves the client's incoming parameter](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-067.annotated.png)

   To see what the origin actually receives, have the test endpoint echo its received path in a response JSON `path` field. Open Response, choose Raw, and click Copy in box 1 below. The complete response's `path` should be `/e2e/rules/actions/query-set?entry=rewritten`.

   ![Copying the origin response to check the complete Query Set path](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-068.annotated.png)

7. <a id="walkthrough-rules-operations-13-query-remove"></a>Select Remove in box 1 and retain parameter name `entry`. The value field disappears; deletion is not setting an empty string.

   ![Switching Query to Remove](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-071.annotated.png)

8. <a id="walkthrough-rules-operations-14-apply-query"></a><a id="walkthrough-rules-operations-15-query-result"></a>Click Save and check the applied status in box 1. Request `/e2e/rules/actions/query-remove?entry=original`; the origin should receive `/e2e/rules/actions/query-remove`.

   ![Query Remove saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-072.annotated.png)

   Select the new request in Capture and open Request. Box 1 below still shows the incoming `entry=original`; this does not mean Remove failed.

   ![The original incoming Query remains inspectable after removal](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-074.annotated.png)

   Open Raw in Response and click Copy in box 1 below. Check that the response JSON's complete `path` is `/e2e/rules/actions/query-remove`, without the `entry` parameter. Return to the rule, disable it, and Save when finished.

   ![Copying the response to check entry was removed from the forwarded path](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-075.annotated.png)

Setting and appending are different operations. Later actions can overwrite earlier modifications of the same field.

The editor provides action add/remove controls, not independent action-card drag sorting. Add multiple actions in the intended sequence; dragging in the rule tree changes only rule order.

<a id="response-header-evidence"></a>
### Response Header append/remove

Keep using `E2E action variants` and the `/e2e/rules/actions` scope. The test service's original response Header is `x-e2e-action: original`. If the current action is Query or another type, remove it and add Rewrite header through Add action.

1. <a id="walkthrough-rules-response-evidence"></a><a id="walkthrough-rules-response-evidence-01-rules"></a><a id="walkthrough-rules-response-evidence-02-root-menu"></a><a id="walkthrough-rules-response-evidence-03-create"></a><a id="walkthrough-rules-response-evidence-04-name"></a><a id="walkthrough-rules-response-evidence-05-host"></a><a id="walkthrough-rules-response-evidence-06-add-path"></a><a id="walkthrough-rules-response-evidence-07-path"></a><a id="walkthrough-rules-response-evidence-08-response-phase"></a><a id="walkthrough-rules-response-evidence-09-header"></a><a id="walkthrough-rules-response-evidence-10-append"></a><a id="walkthrough-rules-response-evidence-11-value"></a><a id="walkthrough-rules-response-evidence-12-enable"></a><a id="walkthrough-rules-response-evidence-13-apply-append"></a><a id="walkthrough-rules-response-evidence-14-capture"></a>Select `response` in the phase control in box 1 of the first image, then Set in the operation control in box 1 of the second. Enter name `x-e2e-action` and value `from-rule`. Enable and Save, then request `/e2e/rules/actions/response-set`; the client should receive this Header as `from-rule`.

   ![Switching the Header action to response](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-038.annotated.png)

   ![Response Header Set configuration](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-040.annotated.png)

   Use Keyword in Capture to find the new request and open Headers. Response Headers in box 1 below shows `original` with Rule replaced and `from-rule` with Rule set; the latter is the final response value.

   ![Response Header Set replaces the original value](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-043.annotated.png)

2. <a id="walkthrough-rules-response-evidence-15-append-request"></a><a id="walkthrough-rules-response-evidence-16-append-select"></a><a id="walkthrough-rules-response-evidence-17-append-headers"></a>Select Append in box 1 and Save. Request `/e2e/rules/actions/response-append`, select the new request in Capture, and inspect its response Headers: `original` remains and `from-rule` is appended.

   ![Response Header Append configuration](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-047.annotated.png)

   Response Headers in box 1 below shows both the unstruck `original` and `from-rule` with Rule appended, unlike Set's replacement.

   ![Response Headers retain the original and append from-rule](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-050.annotated.png)

3. <a id="walkthrough-rules-response-evidence-18-edit-remove"></a><a id="walkthrough-rules-response-evidence-19-remove"></a><a id="walkthrough-rules-response-evidence-20-apply-remove"></a><a id="walkthrough-rules-response-evidence-21-capture-remove"></a><a id="walkthrough-rules-response-evidence-22-remove-request"></a><a id="walkthrough-rules-response-evidence-23-remove-select"></a>Return to the same rule, select Remove in box 1, retain the name, and Save. Request `/e2e/rules/actions/response-remove`, then select that new request in Capture. The client response should no longer contain `x-e2e-action`. Capture's removal marker explains the effect; it does not mean the field was still transmitted.

   ![Response Header Remove configuration](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-054.annotated.png)

   In Response Headers in box 1 below, `x-e2e-action: original` is struck through and marked Rule removed. The response received by the client no longer includes this field.

   ![Response Headers show the removal source marker](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-057.annotated.png)

Disable the rule and Save when finished. The Body examples below use separate rules; disable this Header rule first so their effects do not overlap.

<a id="body-status"></a>
## Replace a body or response status

1. <a id="walkthrough-rules-actions-body-01-rules"></a><a id="walkthrough-rules-actions-body-02-create"></a><a id="walkthrough-rules-actions-body-03-name"></a><a id="walkthrough-rules-actions-body-04-host"></a><a id="walkthrough-rules-actions-body-05-path"></a><a id="walkthrough-rules-actions-body-06-remove"></a><a id="walkthrough-rules-actions-body-07-action"></a>Disable the other test rules first. Create `E2E regular response body`, entering its name in box 1 of the first image and Host `127.0.0.1` in box 1 of the second. This example has only a Host condition and is for isolated loopback test traffic. Remove the default Header, open Add action, and select Rewrite body in box 1 of the third image. Body replaces the entire body, not a substring.

   ![Naming the separate response Body rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-051.annotated.png)

   ![Host for the response Body rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-052.annotated.png)

   ![Adding Rewrite body](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-054.annotated.png)

2. <a id="walkthrough-rules-actions-body-08-phase"></a><a id="walkthrough-rules-response-evidence-44-response-body"></a>Select `response` in the phase control in box 1 and keep JSON format. Do not configure a response-body action as a request action.

   ![Selecting response phase for Body](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-056.annotated.png)

3. <a id="walkthrough-rules-actions-body-08-content"></a><a id="walkthrough-rules-response-evidence-45-response-value"></a>Enter the complete replacement `{"stage":"response-final"}` in box 1.

   ![Entering the response-body replacement](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-057.annotated.png)

4. <a id="walkthrough-rules-response-controls-synthetic-edit-next"></a><a id="walkthrough-rules-response-controls-delay-remove"></a><a id="walkthrough-rules-response-controls-delay-add"></a><a id="walkthrough-rules-response-controls-delay-value"></a><a id="walkthrough-rules-response-controls-delay-enable"></a><a id="walkthrough-rules-response-controls-delay-apply"></a><a id="walkthrough-rules-response-controls-delay-result"></a><a id="walkthrough-rules-response-controls-delay-back"></a><a id="walkthrough-rules-response-controls-delay-disable"></a><a id="walkthrough-rules-response-controls-delay-apply-off"></a><a id="walkthrough-rules-response-controls-delay-restored"></a><a id="walkthrough-rules-response-controls-delay-edit-next"></a><a id="walkthrough-rules-response-controls-block-remove"></a><a id="walkthrough-rules-response-controls-block-add"></a><a id="walkthrough-rules-response-controls-block-reset"></a><a id="walkthrough-rules-response-controls-block-enable"></a><a id="walkthrough-rules-response-controls-block-apply"></a><a id="walkthrough-rules-response-controls-block-reset-result"></a><a id="walkthrough-rules-response-controls-block-edit-close"></a><a id="walkthrough-rules-response-controls-block-close"></a><a id="walkthrough-rules-response-controls-block-apply-close"></a><a id="walkthrough-rules-response-controls-block-close-result"></a><a id="walkthrough-rules-response-controls-block-back"></a><a id="walkthrough-rules-response-controls-block-disable"></a><a id="walkthrough-rules-response-controls-block-apply-off"></a><a id="walkthrough-rules-response-controls-block-restored"></a><a id="walkthrough-rules-response-controls-block-edit-next"></a><a id="walkthrough-rules-response-controls-encoding-remove"></a><a id="walkthrough-rules-response-controls-encoding-add"></a><a id="walkthrough-rules-response-controls-encoding-phase"></a><a id="walkthrough-rules-response-controls-encoding-name"></a><a id="walkthrough-rules-response-controls-encoding-value"></a><a id="walkthrough-rules-response-controls-encoding-enable"></a><a id="walkthrough-rules-response-controls-encoding-apply"></a><a id="walkthrough-rules-response-controls-encoding-header-only"></a><a id="walkthrough-rules-response-controls-encoding-edit-body"></a><a id="walkthrough-rules-response-controls-encoding-add-body"></a><a id="walkthrough-rules-response-controls-encoding-body-phase"></a><a id="walkthrough-rules-response-controls-encoding-body"></a><a id="walkthrough-rules-response-controls-encoding-apply-body"></a><a id="walkthrough-rules-response-controls-encoding-body-result"></a><a id="walkthrough-rules-response-controls-encoding-back"></a><a id="walkthrough-rules-response-controls-encoding-disable"></a><a id="walkthrough-rules-response-controls-encoding-apply-off"></a><a id="walkthrough-rules-response-controls-encoding-restored"></a><a id="walkthrough-rules-response-controls-encoding-edit-next"></a>Explicitly configure related headers when required; changing Content-Type alone does not convert bytes.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-057.png)
   Changing only `content-encoding` to `gzip` does not compress the original body and may cause a client decoding failure. To generate gzip content, follow the [combined Header and Body steps](#message-editing), explicitly replace the body, and check actual bytes and length.


5. <a id="walkthrough-rules-actions-body-09-enable"></a><a id="walkthrough-rules-actions-body-10-apply"></a><a id="walkthrough-rules-response-evidence-46-apply-response"></a>Turn on the rule-row switch in box 1, then click Save at the upper right. The second image shows Rule set applied after saving.

   ![Enabling the response Body rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-058.annotated.png)

   ![Response Body rule saved](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-059.png)

6. <a id="walkthrough-rules-actions-body-11-result"></a><a id="walkthrough-rules-response-evidence-47-capture-response"></a><a id="walkthrough-rules-response-evidence-48-response-request"></a><a id="walkthrough-rules-response-evidence-49-response-select"></a><a id="walkthrough-rules-response-evidence-50-unavailable"></a>Request `/e2e/body-effect-regular-response` through the proxy, select it in Capture, and open Response. Check Final `{"stage":"response-final"}`. Original is disabled with a notice that a headers-stage replacement made the original response body unavailable; unavailable is not empty.

   ![Response Final and unavailable Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-061.png)

   1. Keep Final selected and click Raw in box 1 of the first image to view unformatted `{"stage":"response-final"}`. Click Copy in box 1 of the second image; it copies the current Final, not the unavailable Original.

      ![Selecting Raw for response Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-063.annotated.png)

      ![Copying the complete response Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-064.annotated.png)

   2. Click Fullscreen in the body toolbar to enlarge the same body. Box 1 of the second image marks Copy at the top of the dialog. After copying, close the dialog with its upper-right ×. Final in box 1 of the third image remains selected, and Raw is unchanged.

      ![Viewing response Final fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-065.png)

      ![Copying response Final in the fullscreen dialog](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-066.annotated.png)

      ![Response Final remains selected after closing fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-067.annotated.png)

   3. Click Save body and save `body-effect-regular-response-final.json` in the system Save dialog. After returning, Final in box 1 of the second image remains selected. The file should contain the complete `{"stage":"response-final"}`, not a screenshot or an empty Original.

      ![Saving response Final in the native dialog](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-068.png)

      ![Keeping response Final selected after saving](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-069.annotated.png)

   4. <a id="walkthrough-rules-response-evidence-51-rule-again"></a><a id="walkthrough-rules-response-evidence-52-disable"></a><a id="walkthrough-rules-response-evidence-53-apply-disabled"></a><a id="walkthrough-rules-response-evidence-54-capture-restored"></a><a id="walkthrough-rules-response-evidence-55-restored-request"></a>Click Rule replaced in box 1 of the first image. Back in Rules, box 1 of the second image selects `E2E regular response body`. Disable this rule and Save when finished, then use a new request to confirm responses are no longer replaced. An earlier completed Final is not a disabled-rule result.

      ![The response body's rule source marker](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-070.annotated.png)

      ![The response-body marker returns to its rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-071.annotated.png)

7. <a id="walkthrough-rules-actions-status-01-rules"></a><a id="walkthrough-rules-actions-status-02-create"></a><a id="walkthrough-rules-actions-status-03-name"></a><a id="walkthrough-rules-actions-status-04-host"></a><a id="walkthrough-rules-actions-status-05-path"></a><a id="walkthrough-rules-actions-status-06-remove"></a><a id="walkthrough-rules-actions-status-07-action"></a>For status changes, disable the other test rules and save them first. Return to `E2E action variants`, keeping Host `127.0.0.1` and Path `/e2e/rules/actions`. Remove its previous action, then choose Set status in box 1 from Add action.

   ![Adding Set status](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-079.annotated.png)

8. <a id="walkthrough-rules-actions-status-08-value"></a>Enter `418` in the Status code field in box 1, not the synthetic-response example's `503`.

   ![Entering Status code 418](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-081.annotated.png)

9. <a id="walkthrough-rules-actions-status-09-enable"></a><a id="walkthrough-rules-actions-status-10-apply"></a>Make sure the rule is enabled and Save. Check the Rule set applied status in box 1.

   ![Status action saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-082.annotated.png)

10. <a id="walkthrough-rules-actions-status-11-result"></a>Request `/e2e/rules/actions/status`, then use Keyword in Capture to find and select the new request. General in box 1 under Headers shows `418 I'm a Teapot`, matching the client's status. Continue checking Header and Body: Status changes the response status, not the entire response as Synthetic does.

    ![Capture General shows the rewritten 418 status](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-084.annotated.png)

11. Compare Original/Final where the product makes them available.

    ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-084.png)
    Select the required version before using Raw, Copy, Fullscreen, or Save body; those operations use the currently selected body. The request example below has observable Original and Final versions. Do not treat an unavailable response Original as empty content.


12. <a id="walkthrough-rules-operations-16-body-action"></a><a id="walkthrough-rules-response-evidence-24-edit-body"></a><a id="walkthrough-rules-response-evidence-25-remove-header"></a><a id="walkthrough-rules-response-evidence-26-add-body"></a>Disable the other test rules, then create `E2E regular request body`. Box 1 of the first image marks its name; enter Host `127.0.0.1` in box 1 of the second. Remove the default Header and select Rewrite body in box 1 of the third image from Add action. This example also has only a Host condition.

    ![Naming the separate request Body rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-017.annotated.png)

    ![Host for the request Body rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-018.annotated.png)

    ![Adding the request-body rewrite action](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-020.annotated.png)

13. <a id="walkthrough-rules-operations-17-body-value"></a><a id="walkthrough-rules-response-evidence-27-request-phase"></a><a id="walkthrough-rules-response-evidence-28-body-value"></a>Select `request` in box 1 of the first image and retain JSON format. Enter the complete replacement `{"stage":"regular-final"}` in box 1 of the second.

    ![Selecting request phase](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-022.annotated.png)

    ![Entering the regular-final replacement](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-023.annotated.png)

14. <a id="walkthrough-rules-operations-18-apply-body"></a><a id="walkthrough-rules-response-evidence-29-apply-body"></a>Turn on the rule-row switch in box 1 and Save. Check Rule set applied at the bottom of the second image.

    ![Enabling the request Body rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-024.annotated.png)

    ![Request Body rule saved](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-025.png)

15. <a id="walkthrough-rules-operations-19-body-result"></a><a id="walkthrough-rules-response-evidence-30-capture-body"></a><a id="walkthrough-rules-response-evidence-31-post"></a><a id="walkthrough-rules-response-evidence-32-body-select"></a><a id="walkthrough-rules-response-evidence-33-final"></a><a id="walkthrough-rules-response-evidence-34-original"></a>Send POST to `/e2e/body-effect-regular-request` with original body `{"stage":"regular-original"}`. Select it in Capture, open Request, and choose Final in box 1 of the first image. Check that the origin received the complete `{"stage":"regular-final"}` body. Then click Original in box 1 of the second image to see `regular-original`.

    ![Request Final after the rule replacement](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-027.annotated.png)

    ![Original for the same request](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-029.annotated.png)

    1. <a id="walkthrough-rules-response-evidence-35-raw"></a>Keep Original selected and click Raw in box 1. The body shows `{"stage":"regular-original"}` without switching to Final.

       ![Original body in Raw mode](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-030.annotated.png)

    2. <a id="walkthrough-rules-response-evidence-36-copy-original"></a>Click Copy in box 1 to copy the complete Original. Pasted content should be `{"stage":"regular-original"}`, without the editor's visual line wrapping.

       ![Copying request Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-031.annotated.png)

    3. <a id="walkthrough-rules-response-evidence-37-fullscreen"></a><a id="walkthrough-rules-response-evidence-38-close-fullscreen"></a>Click Fullscreen to inspect the same Original. Copy in box 1 of the second image copies that body from the dialog. Close with the upper-right ×; Original in box 1 of the third image remains selected, and Raw is unchanged.

       ![Viewing request Original fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-032.png)

       ![Copying request Original from fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-033.annotated.png)

       ![Original and Raw remain after closing fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-034.annotated.png)

    4. Click Save body and use `body-effect-regular-request-original.json` in the system Save dialog. After returning, Original in box 1 of the second image remains selected. The saved file should contain the complete `{"stage":"regular-original"}`.

       ![Saving request Original in the native dialog](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-035.png)

       ![Request Original remains selected after saving](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-036.annotated.png)

    5. <a id="walkthrough-rules-response-evidence-39-final-again"></a>Click Final in box 1. Raw remains selected and the body changes to `{"stage":"regular-final"}`. The Original copied or saved earlier is not the current content.

       ![Switching the same request back to Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-037.annotated.png)

    6. <a id="walkthrough-rules-response-evidence-40-copy-final"></a>Click Copy in box 1. The complete copied body should now be `{"stage":"regular-final"}`.

       ![Copying request Final](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-039.annotated.png)

    7. Open Fullscreen again to inspect Final and use the dialog's Copy in box 1 of the second image. After closing, Final in box 1 of the third image remains selected; the body has not reverted to Original.

       ![Viewing request Final fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-040.png)

       ![Copying request Final from fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-041.annotated.png)

       ![Request Final remains after closing fullscreen](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-042.annotated.png)

    8. <a id="walkthrough-rules-response-evidence-41-save-dialog"></a><a id="walkthrough-rules-response-evidence-42-saved"></a>Keep Final selected and use Save body to save `body-effect-regular-request-final.json`. Final in box 1 of the second image remains selected afterward. The file contains `{"stage":"regular-final"}`, distinct from the Original file.

       ![Saving request Final in the native dialog](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-043.png)

       ![Request Final remains selected after saving](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-044.annotated.png)

    9. <a id="walkthrough-rules-response-evidence-43-body-rule"></a>Click Rule replaced in box 1 of the first image to return to Rules. Box 1 of the second image selects `E2E regular request body`; its editor still shows that rule's request Body action.

       ![Following the regular request body's source marker](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-045.annotated.png)

       ![The regular request-body marker returns to its rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-046.annotated.png)

    Finish by turning off the rule-row switch in box 1 below and saving. The rule remains available but stops rewriting subsequent requests.

    ![Request Body rule disabled and saved](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-048.annotated.png)

an original response body replaced at the header stage may never have been observed. Unavailable is not empty, and a full diff is not guaranteed.

<a id="mock-response"></a>
## Return a synthetic response

Test a fixed success, error or boundary response without changing the backend.

1. <a id="walkthrough-rules-actions-synthetic-01-rules"></a><a id="walkthrough-rules-actions-synthetic-02-create"></a><a id="walkthrough-rules-actions-synthetic-03-name"></a><a id="walkthrough-rules-actions-synthetic-04-host"></a><a id="walkthrough-rules-actions-synthetic-05-path"></a>Open `E2E action variants`, retaining Host `127.0.0.1` and Path `/e2e/rules/actions`, not everyday traffic. Disable other test rules that could also match.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-088.png)

2. <a id="walkthrough-rules-actions-synthetic-06-remove"></a><a id="walkthrough-rules-actions-synthetic-07-action"></a>Remove the current action, open Add action, and select Synthetic in box 1.

   ![Selecting Synthetic from the action menu](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-088.annotated.png)

3. <a id="walkthrough-rules-actions-synthetic-08-status"></a>Enter `503` in the Status field in box 1.

   ![Entering synthetic response status 503](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-090.annotated.png)

4. <a id="walkthrough-rules-actions-synthetic-08-body"></a>Enter body `{"message":"synthetic-action-body"}` in box 1 of the first image. Click Add header, enter name `x-e2e-synthetic`, and enter value `present` in box 1 of the second image. Configure Headers explicitly inside this Synthetic action.

   ![Entering the synthetic response body](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-091.annotated.png)

   ![Entering the additional response Header value](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-094.annotated.png)

5. <a id="walkthrough-rules-actions-synthetic-09-enable"></a><a id="walkthrough-rules-actions-synthetic-10-apply"></a>Make sure the rule is enabled, click Save, and wait for Rule set applied in box 1.

   ![Synthetic configuration saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-095.annotated.png)

6. <a id="walkthrough-rules-actions-synthetic-11-result"></a>Request `/e2e/rules/actions/synthetic` through the proxy; the origin should not receive it. Use Keyword in Capture to find and select the new request, then open Headers. General in box 1 should show `503 Service Unavailable`.

   ![Synthetic returns 503 on the original request](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-097.annotated.png)

   In Response Headers in box 1 below, check for `x-e2e-synthetic: present`, supplied by the Synthetic action you configured.

   ![The synthetic response includes the explicitly configured Header](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-098.annotated.png)

   Open Response, choose Raw, and click Copy in box 1 below. The complete copied body should be `{"message":"synthetic-action-body"}`. The client's status, Header, and body should match as well.

   ![Copying the complete synthetic response body](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-099.annotated.png)

7. <a id="walkthrough-rules-response-controls"></a><a id="walkthrough-rules-response-controls-01-rules"></a><a id="walkthrough-rules-response-controls-02-create"></a><a id="walkthrough-rules-response-controls-03-host"></a><a id="walkthrough-rules-response-controls-04-path-condition"></a><a id="walkthrough-rules-response-controls-05-path"></a><a id="walkthrough-rules-response-controls-synthetic-remove"></a><a id="walkthrough-rules-response-controls-synthetic-add"></a><a id="walkthrough-rules-response-controls-synthetic-status"></a><a id="walkthrough-rules-response-controls-synthetic-add-type"></a><a id="walkthrough-rules-response-controls-synthetic-type-name"></a><a id="walkthrough-rules-response-controls-synthetic-type-value"></a><a id="walkthrough-rules-response-controls-synthetic-add-extra"></a><a id="walkthrough-rules-response-controls-synthetic-extra-name"></a><a id="walkthrough-rules-response-controls-synthetic-extra-value"></a><a id="walkthrough-rules-response-controls-synthetic-body"></a><a id="walkthrough-rules-response-controls-synthetic-enable"></a><a id="walkthrough-rules-response-controls-synthetic-apply"></a><a id="walkthrough-rules-response-controls-synthetic-result"></a><a id="walkthrough-rules-response-controls-synthetic-back"></a><a id="walkthrough-rules-response-controls-synthetic-disable"></a><a id="walkthrough-rules-response-controls-synthetic-apply-off"></a><a id="walkthrough-rules-response-controls-synthetic-restored"></a>Disable the rule and Apply when finished, then verify the normal route again.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-099.png)
   Turn off the switch, click Save, and send a new matching request. Check that the response comes from your own origin again rather than returning the fixed `503`. Do not reuse the already-completed synthetic response for this check.

this short-circuits normal forwarding and subsequent applicable processing. Do not use the real origin response as proof of what a synthetic response should contain.

<a id="mapping"></a>

## Map a local file or another destination

**Map Local**

1. <a id="walkthrough-rules-actions-map-local-00-capture"></a>Disable rules that could rewrite this request and Save. Request your test service's `/e2e/rules/actions/file-source`, select it in Capture, and open Response in box 1. Its public body is `{"message":"original-action-body"}`; do not use personal files or credentials.

   ![Inspecting the body to save in Response](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-144.annotated.png)

2. <a id="walkthrough-rules-actions-map-local-00-save"></a>Click Save body in the body toolbar. In the system Save dialog, save `rule-map-source.json` and note the absolute path you chose.

   ![System Save body dialog saving rule-map-source.json](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-145.png)

3. <a id="walkthrough-rules-actions-map-local-01-rules"></a><a id="walkthrough-rules-actions-map-local-02-create"></a><a id="walkthrough-rules-actions-map-local-03-name"></a><a id="walkthrough-rules-actions-map-local-04-host"></a><a id="walkthrough-rules-actions-map-local-05-path"></a>Return to `E2E action variants` and check Host `127.0.0.1` and Path `/e2e/rules/actions`, retaining this test scope.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-145.png)

4. <a id="walkthrough-rules-actions-map-local-06-remove"></a><a id="walkthrough-rules-actions-map-local-07-action"></a>Remove the previous action and select Map Local in box 1 from Add action.

   ![Selecting Map Local](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-148.annotated.png)

5. <a id="walkthrough-rules-actions-map-local-08-path"></a>Local path accepts an absolute path; it is not a file picker. The path in box 1 of the first image points to the nonexistent `rule-map-missing.json`. Enable the rule with the switch in box 1 of the second image and Save.

   ![A nonexistent local file path](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-150.annotated.png)

   ![Enabling local-file mapping](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-151.annotated.png)

   Request `/e2e/rules/actions/local-missing`, then use Keyword in Capture to find and select the new request. General in box 1 below shows `404 Not Found`. Correct the file path rather than treating this as a normal origin response.

   ![A missing local file produces 404](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-154.annotated.png)

   Return to the same rule and correct the path in box 1 below to the actual absolute path of the `rule-map-source.json` you saved, not the pictured machine's directory.

   ![Correcting the path to the saved rule-map-source.json](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-156.annotated.png)

6. <a id="walkthrough-rules-actions-map-local-09-enable"></a><a id="walkthrough-rules-actions-map-local-10-apply"></a>Confirm the file remains readable, keep the rule enabled, and Save. Wait for Rule set applied in box 1.

   ![Corrected Map Local configuration saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-157.annotated.png)

7. <a id="walkthrough-rules-actions-map-local-11-result"></a>Request `/e2e/rules/actions/local-file`, select the new request in Capture, and check that General in box 1 is back to `200 OK`.

   ![A new request returns 200 after the file path is corrected](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-159.annotated.png)

   Open Raw in Response and click Copy in box 1 below. The complete body should be the file's `{"message":"original-action-body"}`. This body comes from the local file, not another origin request. Return to the rule, disable it, and Save when finished.

   ![Copying the file body returned by Map Local](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-160.annotated.png)

**Map Remote**

1. Prepare a destination service you are authorized to use.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-160.png)
   Prepare a reachable source entry and destination endpoint before configuring Map Remote. Both are on `http://127.0.0.1:62029` in this example; destination path `/e2e/rules/actions/remote-target` returns `mapped-target-body`. To change scheme, Host, and port together, follow the [cross-scheme mapping steps](#walkthrough-rules-routing).


2. <a id="walkthrough-rules-actions-map-remote-01-rules"></a><a id="walkthrough-rules-actions-map-remote-02-create"></a><a id="walkthrough-rules-actions-map-remote-03-name"></a><a id="walkthrough-rules-actions-map-remote-04-host"></a><a id="walkthrough-rules-actions-map-remote-05-path"></a><a id="walkthrough-rules-actions-map-remote-06-remove"></a><a id="walkthrough-rules-actions-map-remote-07-action"></a>In `E2E action variants`, retain Host `127.0.0.1` and Path `/e2e/rules/actions`. Remove the current action, then choose Map Remote in box 1 from Add action.

   ![Selecting Map Remote](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-132.annotated.png)

3. <a id="walkthrough-rules-actions-map-remote-08-path"></a>Enter `/e2e/rules/actions/remote-target` in the destination Path field in box 1. Leave scheme on `keep` and Host and Port empty to retain their original values. Host does not accept a complete URL; the destination must not create a proxy loop.

   ![Changing only the destination Path](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-134.annotated.png)

4. <a id="walkthrough-rules-actions-map-remote-09-enable"></a><a id="walkthrough-rules-actions-map-remote-10-apply"></a>Enable the rule and Save. Check Rule set applied in box 1.

   ![Map Remote enabled and saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-136.annotated.png)

5. <a id="walkthrough-rules-actions-map-remote-11-result"></a>Request the original `/e2e/rules/actions/remote-source` entry and check that the service receives `/e2e/rules/actions/remote-target`. Use Keyword in Capture to select the original entry's request. General in box 1 retains the original URL with `200 OK`; you do not need to find a separate destination request row.

   ![Map Remote retains the original entry's Capture record](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-138.annotated.png)

   Open Raw in Response and click Copy in box 1 below. The complete body should be the destination endpoint's `mapped-target-body`. Together with General's original URL, it shows the mapping result.

   ![The original entry receives mapped-target-body](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-139.annotated.png)

   When finished, return to the rule, disable Map Remote, and Save. Box 1 below marks the saved status; a new request should use the original entry again.

   ![Map Remote disabled and saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-143.annotated.png)

rules do not create files or services. A local path may not exist on another machine. Map Local consumes a file; Save body writes one.

<a id="walkthrough-rules-routing"></a>
## Map to another protocol address and correct a local file path

### Map Remote: HTTPS to HTTP

First complete [HTTPS decryption and trust](settings.md#https-decryption) for your own test service and prepare a reachable HTTP destination. This example's source service is `https://localhost:56535`; its destination is `http://127.0.0.1:56533/e2e/rules/mapped-http`. Replace the addresses and ports together with your own services, without creating a proxy loop.

1. <a id="walkthrough-rules-routing-01-rules"></a><a id="walkthrough-rules-routing-02-create"></a>Create a rule in Rules and enter `E2E HTTPS to HTTP mapping` in the name field in box 1.

   ![Naming the HTTPS-to-HTTP mapping rule](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-010.annotated.png)

2. <a id="walkthrough-rules-routing-03-source-host"></a>Enter `localhost` in the Host matcher in box 1. This matches the original HTTPS request; it is not the HTTP destination field.

   ![Matching localhost on the original request](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-011.annotated.png)

3. <a id="walkthrough-rules-routing-04-add-path"></a><a id="walkthrough-rules-routing-05-path"></a>Add a Path condition and enter `/e2e/rules/tls-mapping` in box 1. It covers both the `/enabled` and `/disabled` test paths below.

   ![Restricting the original HTTPS path prefix](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-012.annotated.png)

4. <a id="walkthrough-rules-routing-06-remove-header"></a><a id="walkthrough-rules-routing-07-map-remote"></a>Remove the default Header action, open Add action, and choose Map Remote in box 1.

   ![Selecting Map Remote from the action menu](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-013.annotated.png)

5. <a id="walkthrough-rules-routing-08-http"></a>Inside the Map Remote card marked by box 1, select `http` in the leftmost scheme control.

   ![Selecting http as the Map Remote destination scheme](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-014.annotated.png)

6. <a id="walkthrough-rules-routing-09-target-host"></a>Enter `127.0.0.1` in the destination Host field in box 1, not a complete URL.

   ![Entering the HTTP destination Host](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-015.annotated.png)

7. <a id="walkthrough-rules-routing-10-target-port"></a>Enter destination port `56533` in box 1. It differs from the original HTTPS service's port `56535`.

   ![Entering the destination HTTP service port](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-016.annotated.png)

8. <a id="walkthrough-rules-routing-11-target-path"></a>Enter `/e2e/rules/mapped-http` in the destination Path field in box 1.

   ![Entering the HTTP destination path](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-017.annotated.png)

9. <a id="walkthrough-rules-routing-12-enable"></a>Check the destination scheme, Host, Port, and Path, then enable the rule switch in box 1. Enabled is still only a draft state.

   ![Enabling the cross-scheme mapping draft](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-018.annotated.png)

10. <a id="walkthrough-rules-routing-13-apply"></a>Click Save and wait for the bottom status in box 1 to become Rule set applied. The mapping now affects subsequent requests.

    ![Saving and applying the cross-scheme mapping](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-019.annotated.png)

11. <a id="walkthrough-rules-routing-14-remote-result"></a>Through the proxy, GET `https://localhost:56535/e2e/rules/tls-mapping/enabled`. Select the request in Capture and open Response in box 1. Check `200` and the target service's `owned-http-mapping-result`: the client still addresses HTTPS, while the body comes from the HTTP destination.

    ![The original HTTPS request receives the HTTP destination response](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-020.annotated.png)

12. <a id="walkthrough-rules-routing-15-edit"></a><a id="walkthrough-rules-routing-16-disable"></a>Return to the same rule and turn off the enabled switch in box 1.

    ![Disabling the cross-scheme mapping rule](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-021.annotated.png)

13. <a id="walkthrough-rules-routing-17-apply-off"></a>Click Save again. Check Rule set applied in box 1 and Disabled above. Turning off the switch without saving does not complete disabling.

    ![Saving the disabled mapping state](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-022.annotated.png)

14. <a id="walkthrough-rules-routing-18-original-result"></a>Request another address on the same original HTTPS service: `https://localhost:56535/e2e/rules/tls-mapping/disabled`. The new row in box 1 receives the source service's `404`, not the HTTP destination body. Headers still shows the original HTTPS URL. This compares `/enabled` and `/disabled` on one service; it does not reuse a completed request.

    ![A new request returns to the original HTTPS service after disabling](../media/v0.1.1-alpha.1/capture-https-http-mapping-english/step-023.annotated.png)

After HTTPS debugging, use the [cleanup instructions](#walkthrough-rules-routing-37-certificates) at the end of this section to restore settings changed only for the test.

### Map Local: save a file and correct its path

This is a separate Local example. Its HTTPS service is `https://localhost:63644`, and the HTTP destination used to prepare the file is `http://127.0.0.1:63638/e2e/rules/mapped-http`; do not mix these ports with the previous example. First configure these addresses using the Map Remote steps above and Save, so `/e2e/rules/tls-mapping/enabled` returns the public body `owned-http-mapping-result`. Replace the request address and mapping destination together when using your own services.

1. <a id="walkthrough-rules-routing-19-file-source"></a><a id="walkthrough-rules-routing-20-save-file"></a><a id="walkthrough-rules-routing-21-check-file"></a><a id="walkthrough-rules-routing-22-edit-local"></a><a id="walkthrough-rules-routing-23-local-host"></a><a id="walkthrough-rules-routing-24-remove-remote"></a><a id="walkthrough-rules-routing-25-local"></a>Save the body through the product, then change the mapping action to read that file.

   1. Request `https://localhost:63644/e2e/rules/tls-mapping/enabled` through the proxy, select it in Capture, and open Response. Click Save body in the body toolbar. In the system dialog, save `https-map-local-response.txt`, note the absolute path you chose, and click Save.

      ![Saving the HTTPS response body in the system dialog](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-021.png)

   2. After the Save dialog closes, return to Response and check that its body is still `owned-http-mapping-result`, with a size of `25 B`. Box 1 marks the body toolbar's Save body control; the file is already saved, so do not click it again.

      ![Checking the original response after returning from Save](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-022.annotated.png)

   3. Return to Rules, disable this Map Remote rule and Save, then change the name in box 1 to `E2E HTTPS to local file mapping`. Retain Host `localhost` and Path `/e2e/rules/tls-mapping`, which match the client's HTTPS request.

      ![Renaming the rule for local-file mapping](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-026.annotated.png)

   4. Remove the old Map Remote action with its upper-right ×, open Add action, and choose Map Local in box 1. This replaces the action rather than retaining remote mapping alongside it.

      ![Adding Map Local after removing Map Remote](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-027.annotated.png)

2. <a id="walkthrough-rules-routing-26-missing-name"></a><a id="walkthrough-rules-routing-27-enable-local"></a><a id="walkthrough-rules-routing-28-apply-local"></a><a id="walkthrough-rules-routing-29-missing-result"></a>When checking a bad file path, distinguish Map Local's error from an origin response.

   1. In Local path in box 1, enter the complete absolute path of a nonexistent `https-map-local-missing.txt`. This is a path input, not a file picker; do not copy the pictured machine's directory.

      ![Entering a nonexistent local file path](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-028.annotated.png)

   2. Turn on the rule switch in box 1. The top says Enabled, but the bottom still shows Unsaved changes: the configuration is not saved yet.

      ![Enabling the unsaved Map Local draft](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-029.annotated.png)

   3. Click Save at the upper right and wait for the bottom status in box 1 to become Rule set applied. Saving a rule does not create a missing file.

      ![Saving the rule with the missing-file path](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-030.annotated.png)

   4. Request `https://localhost:63644/e2e/rules/tls-mapping/map-local-missing`. Use Keyword in Capture to find and select the new request, then open Response in box 1. Expect `404` and the `27 B` body `Map Local target not found.`. Check the file path instead of repeatedly toggling Recording.

      ![The missing-file HTTPS request returns a specific error body](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-031.annotated.png)

3. <a id="walkthrough-rules-routing-30-correct-rule"></a><a id="walkthrough-rules-routing-31-correct-file"></a><a id="walkthrough-rules-routing-32-apply-correct"></a><a id="walkthrough-rules-routing-33-local-result"></a>Correct the path to the file you saved, then send a new request to check its content.

   1. Return to `E2E HTTPS to local file mapping`. Change the path in box 1 to the complete absolute path of your saved `https-map-local-response.txt` and confirm that the file is still readable.

      ![Correcting the path to the product-saved file](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-032.annotated.png)

   2. Keep the rule enabled, click Save, and check the Rule set applied status in box 1.

      ![Saving the corrected Map Local path](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-033.annotated.png)

   3. Request `https://localhost:63644/e2e/rules/tls-mapping/map-local-enabled`, select that new request in Capture, and open Response in box 1. Expect `200` with the file's `owned-http-mapping-result` body and size `25 B`. The client still addresses HTTPS, but the body comes from the local file.

      ![HTTPS Map Local returns the product-saved file body](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-034.annotated.png)

4. <a id="walkthrough-rules-routing-34-final-rule"></a><a id="walkthrough-rules-routing-35-final-disable"></a><a id="walkthrough-rules-routing-36-final-apply"></a><a id="walkthrough-rules-routing-37-certificates"></a><a id="walkthrough-rules-routing-38-mitm-off"></a><a id="walkthrough-rules-routing-39-remove-exception"></a>Disable file mapping, verify the restored request behavior, then handle HTTPS settings separately.

   1. Return to the same rule and turn off the enabled switch in box 1. This is only a Disabled draft until you save it.

      ![Turning off the local-file mapping rule](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-035.annotated.png)

   2. Click Save and check Rule set applied in box 1 and Disabled above.

      ![The disabled Map Local state is saved](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-036.annotated.png)

   3. Request `https://localhost:63644/e2e/rules/tls-mapping/map-local-disabled`. The new Capture row in box 1 returns the source endpoint's `404` with `0 B`, unlike the missing file's `27 B` error. HTTPS decryption can remain enabled after the rule is disabled; these are separate switches.

      ![A new HTTPS request returns to the source endpoint after Map Local is disabled](../media/v0.1.1-alpha.1/capture-https-local-mapping-english/step-037.annotated.png)

   4. If you enabled decryption or added a `localhost` origin exception only for this HTTPS test, open Settings and choose Certificates in box 1. A disabled Rule does not mean its HTTPS settings have been cleaned up.

      ![Open Certificates for this HTTPS cleanup](../media/v0.1.1-alpha.1/tls-cleanup-english/step-039.annotated.png)

   5. Turn off Decrypt HTTPS (MITM) in box 1. This stops subsequent decryption; it does not delete or untrust your daily-use CA.

      ![Turn off the HTTPS decryption enabled for this test](../media/v0.1.1-alpha.1/tls-cleanup-english/step-040.annotated.png)

   6. Find the `localhost` origin exception in box 1 and use the removal button at the right of its tag. Remove only the entry added for this test, not unrelated everyday settings.

      ![Locate the localhost exception and its removal control](../media/v0.1.1-alpha.1/tls-cleanup-english/step-041.annotated.png)

   7. Confirm the `localhost` exception is gone and MITM remains disabled. Box 1 is the remaining Host input, not a delete button. There is no need to use the CA Remove action.

      ![The localhost exception is removed while HTTPS decryption stays disabled](../media/v0.1.1-alpha.1/tls-cleanup-english/step-042.annotated.png)

<a id="block-delay"></a>
## Block, delay or pause traffic

1. <a id="walkthrough-rules-actions-delay-01-rules"></a><a id="walkthrough-rules-actions-delay-02-create"></a><a id="walkthrough-rules-actions-delay-03-name"></a><a id="walkthrough-rules-actions-delay-04-host"></a><a id="walkthrough-rules-actions-delay-05-path"></a>Continue using `E2E action variants` with Host `127.0.0.1` and Path `/e2e/rules/actions`. Disable other test rules and keep everyday traffic out of scope.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-103.png)

2. <a id="walkthrough-rules-actions-delay-06-remove"></a><a id="walkthrough-rules-actions-delay-07-action"></a><a id="walkthrough-rules-actions-delay-08-value"></a>Remove the current action and choose Delay in box 1 of the first image. Select `response` phase and enter `500` in the Delay (ms) field in box 1 of the second.

   ![Selecting Delay in the menu](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-103.annotated.png)

   ![Entering a 500 millisecond response delay](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-105.annotated.png)

3. <a id="walkthrough-rules-actions-delay-09-enable"></a><a id="walkthrough-rules-actions-delay-10-apply"></a>Make sure the rule is enabled and Save. Wait for Rule set applied in box 1.

   ![Delay saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-106.annotated.png)

4. <a id="walkthrough-rules-actions-delay-11-result"></a>Request `/e2e/rules/actions/delay`. Check that the original response is preserved with the configured `500` millisecond wait. Use Keyword in Capture to select the new request and open Timing. Box 1 shows this example's Waiting (TTFB) of `503 ms` and Total of `505 ms`. Total time also includes connection and service processing, so it need not equal exactly `500`.

   ![Timing shows the delayed response's wait and total duration](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-108.annotated.png)

5. <a id="walkthrough-rules-actions-block-01-rules"></a><a id="walkthrough-rules-actions-block-02-create"></a><a id="walkthrough-rules-actions-block-03-name"></a><a id="walkthrough-rules-actions-block-04-host"></a><a id="walkthrough-rules-actions-block-05-path"></a>For blocking, retain this same rule's Host and Path rather than widening the matching scope.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-108.png)

6. <a id="walkthrough-rules-actions-block-06-remove"></a><a id="walkthrough-rules-actions-block-07-action"></a>Remove Delay, add Block through Add action, and leave Mode on `reset`. Save and request `/e2e/rules/actions/block-reset`. The client connection should fail and the origin should not receive the request.

   ![Block reset configuration](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-113.png)

   Use Keyword in Capture to select this request. General in box 1 below has no HTTP status code and shows `—`. Response Headers is empty and the row's response size is `0 B`, not a normal `200` response.

   ![The reset block produces no normal HTTP response](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-116.annotated.png)

7. <a id="walkthrough-rules-actions-block-09-enable"></a><a id="walkthrough-rules-actions-block-10-apply"></a>Select `close` in the Mode field in box 1, keep the rule enabled, and Save. Request `/e2e/rules/actions/block-close` and check that the connection closes without a normal origin response.

   ![Switching Block to close](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-119.annotated.png)

   Select the new `/e2e/rules/actions/block-close` request in Capture, not the previous reset request. General in box 1 below also has no HTTP status code; response headers are empty and the size is `0 B`.

   ![The new close-blocked request also has no HTTP response](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-122.annotated.png)

8. <a id="walkthrough-rules-actions-block-11-result"></a>After checking the blocked result, turn the rule off and Save. Check the applied status in box 1 and Disabled above. Request `/e2e/rules/actions/block-disabled`; the origin's `200` should return.

   ![Block disabled and saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-126.annotated.png)

   Select the new `/e2e/rules/actions/block-disabled` request in Capture. General in box 1 below is back to `200 OK`; the two earlier blocked records do not change.

   ![A new request returns 200 after Block is disabled](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-128.annotated.png)

9. Use Breakpoint when a human decision is required. This is a separate body example, not a renamed Block rule. See [Breakpoints](breakpoints.md#http) for the full queue workflow.

   1. Disable other rules and create `E2E request body effect`, setting Host `127.0.0.1` in box 1. Send only your own loopback test requests in this example.

      ![Request Breakpoint rule name and Host](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-001.annotated.png)

   2. Remove the default Header and choose Breakpoint in box 1 from Add action.

      ![Adding the Breakpoint action](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-003.annotated.png)

   3. Keep Phase on Request, enable the rule-row switch in box 1, and Save.

      ![Enabling the request Breakpoint](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-005.annotated.png)

   4. POST `/e2e/body-effect-red` with `{"stage":"original"}`. Open the paused request, choose Text, replace the body with `{"stage":"final"}`, and submit the edit to continue. In Capture's Request tab, Final in box 1 should display `final` with a Text source.

      ![Request Final after the Breakpoint edit](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-008.annotated.png)

   5. Click Original in box 1 and check that the same request's original body is still `{"stage":"original"}`.

      ![Original for the Breakpoint request](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-009.annotated.png)

   6. Switch back to Final, then click Rule replaced beside the body heading to return to `E2E request body effect`. This marker identifies the final body-writing rule. Disable that rule and Save afterward.

      ![The body marker returns to the final writer rule](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-011.png)

   7. For a file-backed response, first request `/e2e/body-effect-file-source`. Open Response in box 1, inspect public body `{"stage":"breakpoint-file-final"}`, and use Save body to save `body-effect-response-file.json`.

      ![Selecting the response body to save](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-083.annotated.png)

      ![Saving the body for File replacement](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-084.png)

   8. Create `E2E response body effect` with Host `127.0.0.1`, remove its default Header, and add Breakpoint. Select Response in box 1, then enable and Save.

      ![Selecting a response Breakpoint for file replacement](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-090.annotated.png)

   9. Request `/e2e/body-effect-response-file`, open the paused response, choose File, and use Choose file and the system Open dialog to select the file you just saved. Remove the original `transfer-encoding` Header, submit the edit, and continue. Capture's Response should show File as the source and Final `{"stage":"breakpoint-file-final"}`. Original is unavailable, and the marker does not expose the local absolute path.

      ![File-backed response with unavailable Original](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-095.png)

10. Disable the test rules and Save when finished, then send a fresh request to check recovery. When testing Delay alone, compare a new request's wait after disabling and saving. Turning off a rule does not resolve requests already paused at a Breakpoint; finish those queue items separately.

    ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-body-tools-workflow-en/step-095.png)
Delay is not bandwidth throttling. Multiple delay actions follow the actual maximum-delay semantics rather than being blindly summed. Breakpoints do not have an automatic continuation timeout.

<a id="order"></a>

## Organize, reorder, disable and delete rules

This example uses `E2E rules level 1 > E2E rules level 2 > E2E rules level 3` and `E2E hierarchy rule`. Visible rule order determines execution order; folders organize rules and are not matching groups.

**alpha.1 limitation:** after deleting the last rule, the empty tree has no available Save action. To stop the last rule, retain it, turn its switch off, and Save. An empty view is not proof that deletion was saved.

1. <a id="walkthrough-rules-tree"></a><a id="walkthrough-rules-tree-01-rules"></a><a id="walkthrough-rules-tree-02-root-folder"></a><a id="walkthrough-rules-tree-03-root-name"></a><a id="walkthrough-rules-organization-07-folder"></a>Open the rule list's empty-area menu and choose New folder in box 1 of the first image. Enter `E2E rules level 1` in box 1 of the second image and press Enter.

   ![New folder in the root menu](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-002.annotated.png)

   ![Entering the first-level folder name](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-003.annotated.png)

2. <a id="walkthrough-rules-tree-04-child-folder"></a><a id="walkthrough-rules-tree-05-child-name"></a>Open that folder's node menu, choose New subfolder, enter `E2E rules level 2` in box 1, and press Enter.

   ![Entering the second-level folder name](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-006.annotated.png)

3. <a id="walkthrough-rules-tree-06-third-folder"></a><a id="walkthrough-rules-tree-07-third-name"></a>Create a subfolder from the second-level folder's menu. Enter `E2E rules level 3` in box 1 and press Enter.

   ![Entering the third-level folder name](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-009.annotated.png)

4. <a id="walkthrough-rules-tree-08-depth-limit"></a><a id="walkthrough-rules-tree-09-nested-rule"></a>Open the third-level folder menu. New subfolder in box 1 is disabled, preventing a fourth level. New rule in box 2 remains available; click it to create a rule in this folder.

   ![A third-level folder allows new rules but no deeper subfolders](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-011.annotated.png)

5. <a id="walkthrough-rules-tree-11-rule-name"></a><a id="walkthrough-rules-operations-20-rename"></a>Open the new rule's node menu and choose Rename in box 1 of the first image. Enter `E2E hierarchy rule` in box 1 of the second image and press Enter.

   ![Rename in the rule node menu](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-013.annotated.png)

   ![Entering the rule name inline](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-014.annotated.png)

6. <a id="walkthrough-rules-tree-10-invalid"></a>Inspect Validation errors at the bottom. While required Host and Header fields are incomplete, Save is unavailable and the rule cannot be enabled.

   ![Validation state with missing required fields](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-016.png)

7. <a id="walkthrough-rules-tree-12-host"></a><a id="walkthrough-rules-tree-15-header"></a><a id="walkthrough-rules-tree-16-header-value"></a>Complete box 1 in each image in sequence: Host `127.0.0.1`, request Header name `x-rules-e2e`, and value `active`. Keep operation Set. Send only your own loopback test traffic; continue with the [matching-condition steps](#matchers) when you need all eight condition types.

   ![Completing the Host condition](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-017.annotated.png)

   ![Completing the request Header name](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-018.annotated.png)

   ![Completing the request Header value](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-019.annotated.png)

8. <a id="walkthrough-rules-tree-17-enable"></a><a id="walkthrough-rules-tree-18-apply"></a><a id="walkthrough-rules-organization-10-apply-folder"></a>Enable the rule. Selecting the folder row in box 1 of the second image keeps the current rule editor open; it does not turn the folder into a condition. Click Save and check Rule set applied at the bottom of the third image.

   ![Enabling the rule after completing required fields](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-020.png)

   ![Folder selection preserves the open rule editor](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-021.annotated.png)

   ![Folders and rule saved](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-022.png)

9. <a id="walkthrough-rules-organization"></a><a id="walkthrough-rules-organization-01-open"></a><a id="walkthrough-rules-organization-first-01-new"></a><a id="walkthrough-rules-organization-first-02-host"></a><a id="walkthrough-rules-organization-first-03-path"></a><a id="walkthrough-rules-organization-first-04-header"></a><a id="walkthrough-rules-organization-first-05-enable"></a><a id="walkthrough-rules-tree-13-path-condition"></a><a id="walkthrough-rules-tree-14-path"></a>To compare order, keep only Host and Path in `E2E hierarchy rule`, adding or changing Path to `/e2e/rules/priority`. Switch its Header action back to `request`, retain name `x-rules-e2e`, and set the value in box 1 to `nested`. Keep it enabled and Save.

   ![The nested rule writes nested](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-110.annotated.png)

10. <a id="walkthrough-rules-organization-second-01-new"></a><a id="walkthrough-rules-organization-second-02-host"></a><a id="walkthrough-rules-organization-second-03-path"></a><a id="walkthrough-rules-organization-second-04-header"></a><a id="walkthrough-rules-organization-second-05-enable"></a><a id="walkthrough-rules-organization-02-apply"></a><a id="walkthrough-rules-tree-32-root-menu"></a><a id="walkthrough-rules-tree-33-root-rule"></a><a id="walkthrough-rules-tree-34-root-name"></a><a id="walkthrough-rules-tree-35-root-host"></a><a id="walkthrough-rules-tree-36-root-path-condition"></a><a id="walkthrough-rules-tree-37-root-path"></a><a id="walkthrough-rules-tree-38-root-header"></a><a id="walkthrough-rules-tree-39-root-value"></a><a id="walkthrough-rules-tree-40-root-enable"></a><a id="walkthrough-rules-tree-41-root-apply"></a>Create `E2E root priority` from the root menu. Box 1 of the first image marks the name. Enter Host `127.0.0.1` and Path `/e2e/rules/priority` in box 1 of the second. Use request Header Set `x-rules-e2e`, entering `root` in box 1 of the third image. Enable the switch in box 1 of the fourth image and Save. The saved rule follows the folder branch.

    ![Naming the competing root rule](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-112.annotated.png)

    ![The competing rule uses the same Path](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-114.annotated.png)

    ![The competing rule writes root](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-116.annotated.png)

    ![Enabling the competing rule](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-117.annotated.png)

    ![Saved two-rule order before dragging](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-121.png)

11. <a id="walkthrough-rules-organization-03-before"></a><a id="walkthrough-rules-tree-42-precedence"></a>Request `/e2e/rules/priority/before-drag` and check that the origin receives `x-rules-e2e: root`: the later root rule overwrites `nested`.

    Select this request in Capture. Request Headers in box 1 retains the write and replacement history. The final Rule set row has value `root`; the earlier `nested` is not the final value.

    ![Request Header with root as the final writer before reordering](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-119.annotated.png)

12. <a id="walkthrough-rules-organization-04-reorder"></a><a id="walkthrough-rules-organization-05-apply-order"></a><a id="walkthrough-rules-organization-06-after"></a><a id="walkthrough-rules-organization-08-move-second"></a><a id="walkthrough-rules-organization-09-move-first"></a>Drag `E2E root priority` before `E2E hierarchy rule`. The rule in box 1 now belongs to the same third-level folder. Save and request `/e2e/rules/priority/after-drag`; the final value should now be `nested`.

    ![Moving the competing rule into the folder and ahead of the other rule](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-122.annotated.png)

    ![The new order after saving](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-126.png)

    Return to Capture and select the new `after-drag` request. The final Rule set row in box 1 now has value `nested`, while the replacement of `root` remains traceable.

    ![Request Header with nested as the final writer after reordering](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-124.annotated.png)

13. <a id="walkthrough-rules-operations-21-search"></a>Enter `E2E root priority` in the name-search field in box 1. Only the matching rule remains, with its parent-folder path. This is not a request-URL search. Clear the input to restore the full tree.

    ![Rule-name search retaining the parent-folder path](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-127.annotated.png)

14. <a id="walkthrough-rules-tree-19-rename-folder"></a><a id="walkthrough-rules-tree-20-folder-name"></a><a id="walkthrough-rules-tree-21-apply-rename"></a><a id="walkthrough-rules-tree-22-folder-search"></a>Choose Rename in the first-level folder's menu. Enter `E2E renamed hierarchy` in box 1 of the first image and press Enter. You can also locate it by its folder name, then clear search. Click the arrow in box 1 of the second image to collapse it: child rules are hidden, not removed, and reappear when expanded. Save when finished editing the folder.

    ![Renaming the folder inline](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-129.annotated.png)

    ![Collapsing the folder without deleting child rules](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-131.annotated.png)

15. <a id="walkthrough-rules-tree-43-delete-nested-menu"></a><a id="walkthrough-rules-tree-44-delete-nested"></a><a id="walkthrough-rules-tree-45-apply-deletion"></a>Expand the folder and select Delete rule in box 1 from `E2E root priority`'s menu. It is not the last rule: `E2E hierarchy rule` remains afterward. Save after completing the following tree edits.

    ![The menu for deleting the competing rule](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-133.annotated.png)

    ![The nested rule remains after deletion](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-134.png)

16. Drag the retained `E2E hierarchy rule` to the root-level empty area. Box 1 shows its position outside the folders.

    ![Moving the retained rule back to the root](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-135.annotated.png)

17. <a id="walkthrough-rules-tree-46-delete-folder-menu"></a><a id="walkthrough-rules-tree-47-delete-folders"></a><a id="walkthrough-rules-tree-48-apply-folders"></a><a id="walkthrough-rules-tree-49-after-delete"></a>Check that `E2E renamed hierarchy` contains only empty subfolders, choose Delete folder in box 1, and Save. The second image retains the root rule; its applied status confirms that deletion and movement were saved together.

    ![Deleting the folder branch that no longer contains rules](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-136.annotated.png)

    ![Folder deletion and rule movement saved](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-140.png)

    Request `/e2e/rules/priority/after-deletion` and select the new record. Request Headers in box 1 shows only the retained rule's `x-rules-e2e: nested`. Deleting a rule does not erase its effects from historical requests.

    ![A new request is still rewritten by the retained rule after deletion](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-138.annotated.png)

18. <a id="walkthrough-rules-operations-22-disable"></a><a id="walkthrough-rules-operations-23-apply-disabled"></a><a id="walkthrough-rules-tree-50-disable"></a><a id="walkthrough-rules-tree-51-apply-disabled"></a>Finish by retaining the last rule, disabling it, and saving. Send another request and check that it no longer gains `x-rules-e2e`. Do not delete the final rule simply to stop its effect.

    ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-138.png)
- Several rules can act on one request; the first match does not always stop evaluation.
- Row action tags are only a summary. Hover the summary to inspect the complete ordered actions.
- Later writes can replace earlier writes; synthetic responses and Block short-circuit.
- Breakpoint inspection occurs after ordinary modifications, so its snapshot may already contain rule changes.
- Disabling a rule and resolving already-waiting requests are separate decisions.

<a id="effects"></a>

## Verify effects and handle conflicts

1. Use the folder exercise's initial `E2E hierarchy rule` configuration: Host `127.0.0.1`, request Header Set `x-rules-e2e: active`, and no additional conditions yet. Save and request `/e2e/rules/hierarchy-status` through the proxy. The hit count in box 1 becomes `1`.

   ![A matching request raises the rule hit count to 1](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-024.annotated.png)

2. <a id="walkthrough-rules-tree-23-search-clear"></a><a id="walkthrough-rules-tree-24-collapse"></a><a id="walkthrough-rules-tree-25-expand"></a><a id="walkthrough-rules-tree-26-request"></a><a id="walkthrough-rules-tree-27-rule-menu"></a><a id="walkthrough-rules-tree-28-show-requests"></a>Clear name search, expand the folders, open the rule menu, and click Show matching requests in box 1. The command is unavailable before a hit; afterward it opens the matching Capture group.

   ![Show matching requests after a hit](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-025.annotated.png)

   In Capture, enter `/e2e/rules/hierarchy-status` in the Keyword field in box 1 below and select this request in box 2. The Rule group on the left still identifies the same rule.

   ![Using Keyword to select the same matching request explicitly](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-027.annotated.png)

3. <a id="walkthrough-rules-tree-28a-rule-facet"></a><a id="walkthrough-rules-tree-29-select-request"></a><a id="walkthrough-rules-tree-30-header-effect"></a><a id="walkthrough-rules-tree-31-return-rule"></a>Check that the Rule group selects `E2E hierarchy rule`. Request Headers shows `x-rules-e2e: active`; box 1 of the first image marks its inline Rule set source. Click it to return to Rules, where box 1 of the second image still selects `E2E hierarchy rule`. There is no separate expansion panel. Inspect body results with the [Original/Final steps](#body-status).

   ![Rule group, matching request, and inline Header source marker](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-028.annotated.png)

   ![Following the Header source back to the same rule](../media/v0.1.1-alpha.1/rules-hierarchy-results-workflow-en/step-030.annotated.png)

   1. A rule that also contains a same-phase Breakpoint remains traceable after continuing unmodified. The separate `E2E request header layout` example uses Host `127.0.0.1`, request Header Set `x-effect-layout: from-rule`, and a Request Breakpoint. Send `/e2e/header-effect-layout-request` with `x-effect-layout: client` and continue unmodified at the breakpoint. Rule set in box 1 of the first image identifies `from-rule`, while `client` retains a replacement marker. Click the source: box 1 of the second image selects that rule, and its editor still shows both Header and Breakpoint actions.

      ![Request Header source after continuing unmodified](../media/v0.1.1-alpha.1/rules-header-effects-workflow-en/step-002.annotated.png)

      ![The request Header marker returns to its rule](../media/v0.1.1-alpha.1/rules-header-effects-workflow-en/step-003.annotated.png)

   2. Disable the previous rule and Save. The response example uses `E2E response header layout`: Host `127.0.0.1`, response Header Append `x-effect-layout: from-rule`, and a Response Breakpoint. Have `/e2e/header-effect-layout-response` originally return `x-effect-layout: origin`, then continue unmodified at the breakpoint. Rule appended in box 1 of the first image identifies the added `from-rule`, not a replacement of `origin`. Click it: box 1 of the second image selects the corresponding response rule. Disable and Save when finished.

      ![Appended response Header source after continuing unmodified](../media/v0.1.1-alpha.1/rules-header-effects-workflow-en/step-008.annotated.png)

      ![The response Header marker returns to its rule](../media/v0.1.1-alpha.1/rules-header-effects-workflow-en/step-009.annotated.png)

4. <a id="walkthrough-rules-conflict"></a><a id="walkthrough-rules-conflict-01-rules"></a><a id="walkthrough-rules-conflict-02-create"></a><a id="walkthrough-rules-conflict-03-name"></a><a id="walkthrough-rules-conflict-04-host"></a><a id="walkthrough-rules-conflict-05-add-path"></a><a id="walkthrough-rules-conflict-06-path"></a><a id="walkthrough-rules-conflict-07-header"></a><a id="walkthrough-rules-conflict-08-value"></a><a id="walkthrough-rules-conflict-09-enable"></a><a id="walkthrough-rules-conflict-10-apply"></a><a id="walkthrough-rules-conflict-11-local-name"></a><a id="walkthrough-rules-conflict-12-local-value"></a><a id="walkthrough-rules-conflict-13-second-writer"></a><a id="walkthrough-rules-conflict-14-allow"></a><a id="walkthrough-rules-conflict-15-draft-retained"></a><a id="walkthrough-rules-conflict-16-core-remote"></a><a id="walkthrough-rules-conflict-17-reload"></a>When editing alongside MCP or another caller, distinguish your local draft from saved rules. This example uses an authorized MCP Client. Complete Client and Rules-tool authorization first, and do not share its credentials.

   1. Open the rule saved through MCP. Its name in box 1 is `MCP updated header`, with Host `127.0.0.1` and Path `/e2e/mcp/rules`. The request Header Set name is `x-mcp-rules` and its value in box 2 is `updated`. The bottom shows Rule set applied and `rev 2`.

      ![The rule name and Header value saved through MCP](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-017.annotated.png)

   2. In Rules, change the name in box 1 to `MCP local draft` and the Header value in box 2 to `unapplied-local-value`, without clicking Save. The bottom becomes Unsaved changes while the saved revision remains `rev 2`.

      ![Editing the local name and value without saving](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-018.annotated.png)

   3. Have the authorized MCP Client save the tree again using the saved revision, still with `MCP updated header` and `updated`. Rules does not silently overwrite your input: the name in box 1 remains `MCP local draft`, the Header value remains `unapplied-local-value`, and the bottom says Changed elsewhere · draft kept. Retaining the editor draft does not mean Core is using its unsaved value.

      ![The local draft is retained after another writer saves](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-019.annotated.png)

   4. Note the edits you want to keep, then click Reload in box 1 at the upper right of the editor. This discards the current local draft and reads the latest rules; it does not resubmit the old revision.

      ![Explicitly discarding the local draft with Reload](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-020.annotated.png)

   5. Check that the name returns to `MCP updated header`, the Header value returns to `updated`, and the bottom shows Rule set applied with `rev 3`. `MCP local draft` and `unapplied-local-value` were discarded; Reload does not automatically merge those local edits.

      ![Reload reads the saved rev 3](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-021.png)

5. <a id="walkthrough-rules-conflict-18-merged-name"></a><a id="walkthrough-rules-conflict-19-merged-value"></a><a id="walkthrough-rules-conflict-20-apply-merged"></a><a id="walkthrough-rules-conflict-21-merged-request"></a><a id="walkthrough-rules-conflict-22-disable"></a><a id="walkthrough-rules-conflict-23-apply-disabled"></a><a id="walkthrough-rules-conflict-24-mcp-settings"></a><a id="walkthrough-rules-conflict-25-stop-server"></a>To keep your changes, re-edit the same rule you just reloaded, Save, and verify with a new request. Do not repeatedly submit a stale tree over another writer's changes.

   1. On the latest `rev 3`, change the name in box 1 to `MCP merged header` and the Header value in box 2 to `merged`. Retain Host `127.0.0.1`, Path `/e2e/mcp/rules`, and request Header name `x-mcp-rules`, then click Save in box 3.

      ![Re-editing the name and value on the latest revision and saving](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-023.annotated.png)

   2. Wait for Rule set applied at the bottom. Check that this example advances to `rev 4` and retains name `MCP merged header` and Header value `merged`. This is the result of editing and saving again, not an automatic merge by Reload.

      ![The manually merged rule is saved as rev 4](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-024.png)

   3. Use an external client to GET `http://127.0.0.1:54222/e2e/mcp/rules/merged` through the proxy, replacing the port with your own test service's port. Enter `/e2e/mcp/` in Capture's Keyword and select the new request row in box 2. Open Headers and scroll to Request Headers: the Header row in box 1 should show `x-mcp-rules: merged` with Rule set. Do not use the earlier `/updated` request to judge this save.

      ![The new request Header uses the manually merged value](../media/v0.1.1-alpha.1/mcp-rules-merge-english/step-025.annotated.png)

Rules still act while Recording is paused, but no new Capture evidence is created. Saved revision, current draft and validity are distinct.

<a id="import-export"></a>
## Import and export rules

1. Review addresses, bodies, and local paths before sharing; export does not promise automatic redaction. Prepare two separate rules with Host `127.0.0.1`: enable `E2E enabled rule` with request Header `x-e2e-enabled-rule: active`; configure `E2E disabled rule` with `x-e2e-disabled-rule: active` but leave it disabled. Create a folder, enter `E2E imported folder` in box 1 of the first image, drag the disabled rule into the folder at the position in box 1 of the second image, and Save. The original tree has two rules, one folder, and one enabled rule.

   ![Entering the export example's folder name](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-002.annotated.png)

   ![Moving the disabled rule into the folder](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-003.annotated.png)

   ![The saved source tree for export](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-004.png)

2. <a id="walkthrough-rules-organization-11-export"></a>Click Export rules in the rule-list toolbar and save `rules-roundtrip.json` in the system Save dialog.

   ![Export rules saving rules-roundtrip.json](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-005.png)

3. <a id="walkthrough-rules-organization-12-exported"></a>Confirm that the file was saved. Its top-level `nodes` array preserves the current editor tree's folders, order, and enabled state. Export does not apply rules or delete the original tree.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-005.png)

4. <a id="walkthrough-rules-organization-13-import-file"></a>Click Import rules, select the just-exported `rules-roundtrip.json` in the system Open dialog, and click Open to reach the preview.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-005.png)

5. <a id="walkthrough-rules-organization-14-preview"></a>Check the preview: Rules `2`, Folders `1`, Enabled `1`, Skipped `0`. Cancel in box 1 cancels this import. Import 2 rules in box 2 appends and saves both rules, with one beginning to match traffic immediately. Consider the effect of matching the same traffic twice before confirming.

   ![Import preview with counts, enabled warning, cancel and confirmation controls](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-008.annotated.png)

6. <a id="walkthrough-rules-organization-15-cancel"></a>Click Cancel first. Check that the original tree still has two rules and one folder, with only `E2E enabled rule` enabled. Cancelling the preview adds no nodes and saves no new revision.

   ![The original tree is unchanged after cancelling import](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-009.png)

7. <a id="walkthrough-rules-organization-16-import-again"></a>Click Import rules again, select the same `rules-roundtrip.json`, and review the counts and enabled-rule warning once more.

   ![Related view from the same workflow](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-009.png)

8. <a id="walkthrough-rules-organization-17-confirm"></a>After accepting the effects, click Import 2 rules. New nodes append at the end of the root instead of replacing same-named items. There are now four rules, two folders, and two enabled rules. Confirmation saves the import immediately; another Save click is not required.

   ![Imported nodes appended after the original tree](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-011.png)

9. Importing and confirming the same file again appends another copy: six rules, three folders, and three enabled rules. Names are not merged. When finished, disable unneeded rules or delete extra copies and Save to avoid repeated actions.

   ![Repeated import appends again without replacing existing nodes](../media/v0.1.1-alpha.1/rules-import-workflow-en/step-013.png)

UI export uses the current editor tree; Agent/MCP export uses the saved tree. Repeated import appends again and can cause repeated matches. File-level errors reject the file; invalid nodes are reported individually.

<a id="message-editing"></a>
## Coordinate headers and bodies

The same core principles apply to related HTTP Breakpoint and Composer editing:

- Header-only edits do not automatically transcode, compress or decompress the existing body.
- Explicit body replacement uses the chosen body mode and final headers. An existing Content-Length not explicitly edited by the user can be maintained for the replacement.
- Explicitly setting or deleting Content-Length preserves that choice. The App does not silently alter the body to make the declared length true.
- Transfer-Encoding, compression, character sets and protocol constraints can produce genuine send errors. Editor acceptance does not prove wire correctness.
- ETag, signatures and Digest are not automatically recalculated after a body change.

Start with a simple header and small text body, then add encoding changes one at a time.

1. Open `E2E action variants`, retaining Host `127.0.0.1` and Path `/e2e/rules/actions`. Remove the previous action and add response Header Set `content-encoding`. Enter `gzip` in box 1, enable, and Save. Request `/e2e/rules/actions/header-only`: the original bytes remain `{"message":"original-action-body"}`, not automatically compressed just because the Header changed.

   ![Setting only the response Content-Encoding](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-168.annotated.png)

   Use Keyword in Capture to find and select the new request, then open Headers. Response Headers in box 1 below shows `content-encoding: gzip` with Rule set, while `content-length` remains the original `34`.

   ![Changing only the encoding Header leaves the body length at 34](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-171.annotated.png)

   Open Raw in Response. The body pane says `Failed to decode gzip body; showing raw bytes.` Click Copy in box 1 below: the complete body is still `{"message":"original-action-body"}`. The notice explains a mismatch between the Header and bytes, not automatic compression.

   ![The decode notice and copied body show the original bytes are unchanged](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-172.annotated.png)

2. Retain that Header action, open Add action, and select Rewrite body in box 1. This adds a second action rather than removing the Header.

   ![Adding Body after the encoding Header](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-175.annotated.png)

3. Select `response` and JSON for Body, and enter `{"message":"encoded-action-body"}` in box 1.

   ![Explicitly entering the new body to encode](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-178.annotated.png)

4. Click Save and check the applied status in box 1. Request `/e2e/rules/actions/body-encoded`; after decompression, the client should receive `{"message":"encoded-action-body"}`. Also check that the pre-existing, unedited `Content-Length` now matches the actual gzip byte length.

   ![Saving the Header and Body actions together](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-179.annotated.png)

   Select the new `/e2e/rules/actions/body-encoded` request in Capture. Response Headers in box 1 below shows `content-encoding: gzip` and `content-length` updated to this example's compressed length of `53` bytes.

   ![After explicit Body replacement, Content-Length matches the gzip bytes](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-181.annotated.png)

   Open Final in Response, choose Raw, and click Copy in box 1 below. The complete decoded body should be `{"message":"encoded-action-body"}`. This response was replaced at the headers stage, so Original is explicitly unavailable; it does not mean the original body was empty.

   ![Final displays and copies the decoded replacement body](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-182.annotated.png)

5. Finish by disabling the rule and saving. Check the applied status in box 1 and Disabled above. Request `/e2e/rules/actions/all-disabled`; the origin's `200` and `{"message":"original-action-body"}` should return.

   ![Body and encoding rewrites disabled and saved](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-186.annotated.png)

   Select the new `/e2e/rules/actions/all-disabled` request in Capture, open Raw in Response, and click Copy in box 1 below. Check that the complete body is back to `{"message":"original-action-body"}` and the row shows `200` with the original `34 B`.

   ![Copying the new request's original response after disabling the rule](../media/v0.1.1-alpha.1/rules-root-results-workflow-en/step-188.annotated.png)
