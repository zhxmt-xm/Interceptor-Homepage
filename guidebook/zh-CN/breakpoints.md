# Breakpoints：暂停流量后再决定如何继续

> 草稿，面向 `v0.1.1-alpha.1`；已接入请求断点的真实步骤图，响应、队列与帧断点等缺口逐步标注，不代表全章或 item9 完成。人工挂起会影响真实客户端，只用于有权调试的请求。

[教程目录](../README.md) · [Rules](rules.md) · [Capture](capture.md)

<!-- recorded-walkthrough:start -->
<a id="walkthrough"></a>
## 逐步骤实操：真实产品录制

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>ruleName</code> | <code>Guide request breakpoint</code> |
| <code>host</code> | <code>127.0.0.1</code> |
| <code>path</code> | <code>/guide/breakpoints</code> |
| <code>url</code> | <code>http://127.0.0.1:51191/guide/breakpoints/edited</code> |
| <code>original</code> | <code>{&quot;message&quot;:&quot;original&quot;}</code> |
| <code>replacement</code> | <code>{&quot;message&quot;:&quot;edited-by-guide&quot;}</code> |

<a id="walkthrough-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4" poster="../media/v0.1.1-alpha.1/breakpoints/breakpoints-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/breakpoints/breakpoints.vtt" default>
</video>

<a id="walkthrough-01-rules"></a>
### 01 · 打开 Rules

[视频 00:00](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=0.378) · [返回本节视频](#walkthrough-video)

![01 · 打开 Rules](../media/v0.1.1-alpha.1/breakpoints/breakpoints-01-rules.png)

<a id="walkthrough-02-create"></a>
### 02 · 新建断点规则

[视频 00:03](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=3.205) · [返回本节视频](#walkthrough-video)

![02 · 新建断点规则](../media/v0.1.1-alpha.1/breakpoints/breakpoints-02-create.png)

<a id="walkthrough-03-name"></a>
### 03 · 填写 Guide request breakpoint

[视频 00:06](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=6.155) · [返回本节视频](#walkthrough-video)

![03 · 填写 Guide request breakpoint](../media/v0.1.1-alpha.1/breakpoints/breakpoints-03-name.png)

<a id="walkthrough-04-host"></a>
### 04 · 设置本机测试 Host

[视频 00:09](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=9.008) · [返回本节视频](#walkthrough-video)

![04 · 设置本机测试 Host](../media/v0.1.1-alpha.1/breakpoints/breakpoints-04-host.png)

<a id="walkthrough-05-path-condition"></a>
### 05 · 添加 Path 条件

[视频 00:11](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=11.860) · [返回本节视频](#walkthrough-video)

![05 · 添加 Path 条件](../media/v0.1.1-alpha.1/breakpoints/breakpoints-05-path-condition.png)

<a id="walkthrough-06-path"></a>
### 06 · 限制 /guide/breakpoints

[视频 00:15](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=15.060) · [返回本节视频](#walkthrough-video)

![06 · 限制 /guide/breakpoints](../media/v0.1.1-alpha.1/breakpoints/breakpoints-06-path.png)

<a id="walkthrough-07-remove-header"></a>
### 07 · 移除默认 Header 动作

[视频 00:17](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=17.869) · [返回本节视频](#walkthrough-video)

![07 · 移除默认 Header 动作](../media/v0.1.1-alpha.1/breakpoints/breakpoints-07-remove-header.png)

<a id="walkthrough-08-add-breakpoint"></a>
### 08 · 添加 Breakpoint 动作

[视频 00:20](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=20.665) · [返回本节视频](#walkthrough-video)

![08 · 添加 Breakpoint 动作](../media/v0.1.1-alpha.1/breakpoints/breakpoints-08-add-breakpoint.png)

<a id="walkthrough-09-enable"></a>
### 09 · 启用断点规则

[视频 00:23](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=23.963) · [返回本节视频](#walkthrough-video)

![09 · 启用断点规则](../media/v0.1.1-alpha.1/breakpoints/breakpoints-09-enable.png)

<a id="walkthrough-10-apply"></a>
### 10 · Apply 生效

[视频 00:26](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=26.813) · [返回本节视频](#walkthrough-video)

![10 · Apply 生效](../media/v0.1.1-alpha.1/breakpoints/breakpoints-10-apply.png)

<a id="walkthrough-11-capture"></a>
### 11 · 回到 Capture

[视频 00:29](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=29.663) · [返回本节视频](#walkthrough-video)

![11 · 回到 Capture](../media/v0.1.1-alpha.1/breakpoints/breakpoints-11-capture.png)

<a id="walkthrough-12-pending"></a>
### 12 · 发出并选中挂起请求

[视频 00:32](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=32.513) · [返回本节视频](#walkthrough-video)

![12 · 发出并选中挂起请求](../media/v0.1.1-alpha.1/breakpoints/breakpoints-12-pending.png)

<a id="walkthrough-13-text"></a>
### 13 · 选择 Text 替换

[视频 00:35](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=35.713) · [返回本节视频](#walkthrough-video)

![13 · 选择 Text 替换](../media/v0.1.1-alpha.1/breakpoints/breakpoints-13-text.png)

<a id="walkthrough-14-replacement"></a>
### 14 · 输入 edited-by-guide

[视频 00:38](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=38.661) · [返回本节视频](#walkthrough-video)

![14 · 输入 edited-by-guide](../media/v0.1.1-alpha.1/breakpoints/breakpoints-14-replacement.png)

<a id="walkthrough-15-forward"></a>
### 15 · Forward edited 并核对源站

[视频 00:41](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=41.514) · [返回本节视频](#walkthrough-video)

![15 · Forward edited 并核对源站](../media/v0.1.1-alpha.1/breakpoints/breakpoints-15-forward.png)

<a id="walkthrough-16-next"></a>
### 16 · 发出下一条请求

[视频 00:44](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=44.461) · [返回本节视频](#walkthrough-video)

![16 · 发出下一条请求](../media/v0.1.1-alpha.1/breakpoints/breakpoints-16-next.png)

<a id="walkthrough-17-unmodified"></a>
### 17 · 原样放行

[视频 00:47](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=47.461) · [返回本节视频](#walkthrough-video)

![17 · 原样放行](../media/v0.1.1-alpha.1/breakpoints/breakpoints-17-unmodified.png)

<a id="walkthrough-18-drop-target"></a>
### 18 · 选中要丢弃的测试请求

[视频 00:50](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=50.420) · [返回本节视频](#walkthrough-video)

![18 · 选中要丢弃的测试请求](../media/v0.1.1-alpha.1/breakpoints/breakpoints-18-drop-target.png)

<a id="walkthrough-19-drop"></a>
### 19 · Drop 并核对客户端错误

[视频 00:53](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=53.462) · [返回本节视频](#walkthrough-video)

![19 · Drop 并核对客户端错误](../media/v0.1.1-alpha.1/breakpoints/breakpoints-19-drop.png)

<a id="walkthrough-20-disable"></a>
### 20 · 停用测试规则

[视频 00:56](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=56.413) · [返回本节视频](#walkthrough-video)

![20 · 停用测试规则](../media/v0.1.1-alpha.1/breakpoints/breakpoints-20-disable.png)

<a id="walkthrough-21-apply-disabled"></a>
### 21 · 保存停用

[视频 00:59](../media/v0.1.1-alpha.1/breakpoints/breakpoints.mp4#t=59.412) · [返回本节视频](#walkthrough-video)

![21 · 保存停用](../media/v0.1.1-alpha.1/breakpoints/breakpoints-21-apply-disabled.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:end -->

<a id="http"></a>
## 建立 HTTP 请求或响应断点

**用途**：在请求到达目标前，或响应返回客户端前，检查并修改消息。

**前提**：外部客户端经过代理；为了在列表中观察过程，开启 Recording。

**步骤**

1. 若使用 Capture 快捷入口，展开请求右键菜单的 Breakpoint 子菜单并选 Endpoint。下面引用独立的 `capture-shortcuts`：`http://127.0.0.1:52315/guide/shortcuts/order` 的 `52315` 是录制动态端口。此入口同时创建 request、response 阶段，启用并立即 Apply；同一新请求会挂起两次，需分别放行，完整顺序见 [Capture](capture.md#从流量进入阻断与断点)。下面的 Rules 手工路径是另一种操作。

   ![Capture 中实际展开 Breakpoint 子菜单](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-10-breakpoint-menu.png)

   ![Endpoint 快捷操作同时应用请求与响应阶段](../media/v0.1.1-alpha.1/capture-shortcuts/capture-shortcuts-11-endpoint.png)

2. 使用手工路径时，先打开 Rules。

   ![打开 Rules 的真实画面](../media/v0.1.1-alpha.1/breakpoints/breakpoints-01-rules.png)

3. 新建规则，命名为 `Guide request breakpoint`。

   ![新建断点规则](../media/v0.1.1-alpha.1/breakpoints/breakpoints-02-create.png)

   ![填写 Guide request breakpoint](../media/v0.1.1-alpha.1/breakpoints/breakpoints-03-name.png)

4. Host 填 `127.0.0.1`。

   ![限制本机 Host](../media/v0.1.1-alpha.1/breakpoints/breakpoints-04-host.png)

5. 添加 Path 条件，限定 `/guide/breakpoints`。

   ![添加 Path 条件](../media/v0.1.1-alpha.1/breakpoints/breakpoints-05-path-condition.png)

   ![实际 Path 范围](../media/v0.1.1-alpha.1/breakpoints/breakpoints-06-path.png)

6. 移除默认 Header 动作，再添加请求阶段的 Breakpoint。

   ![移除默认 Header](../media/v0.1.1-alpha.1/breakpoints/breakpoints-07-remove-header.png)

   ![添加 Breakpoint 动作](../media/v0.1.1-alpha.1/breakpoints/breakpoints-08-add-breakpoint.png)

7. 补齐字段后启用规则。

   ![启用请求断点](../media/v0.1.1-alpha.1/breakpoints/breakpoints-09-enable.png)

8. Apply 并等待成功；未填写问题导致 Apply 失败的分支仍待配图。

   ![Apply 手工断点规则](../media/v0.1.1-alpha.1/breakpoints/breakpoints-10-apply.png)

9. 回到Capture确认Break on match；全局与单条规则的真实开关见[管理器实录](#walkthrough-breakpoints-manager)，不把普通规则停用当作清理全部等待项。

   ![回到 Capture 准备接收请求](../media/v0.1.1-alpha.1/breakpoints/breakpoints-11-capture.png)

10. 让外部客户端经过代理发送到 `http://127.0.0.1:51191/guide/breakpoints/edited`，选中挂起项。`51191` 是录制环境动态端口；测试请求原正文为 `{"message":"original"}`，不表示 HTTP 头部挂起时一定有原正文快照。

    ![新匹配请求实际挂起](../media/v0.1.1-alpha.1/breakpoints/breakpoints-12-pending.png)

11. 响应示例使用另一条 `Guide response breakpoint`，Path 范围 `/guide/response`，源站为 `http://127.0.0.1:59309/`；`59309` 也是录制动态端口。打开该规则，展开阶段菜单并选择 `response`。若练习 File，先完成[下节](#edit)的文件保存准备，再启用此规则。

    ![打开独立的 Guide response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-06-rules.png)

    ![展开阶段菜单](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-07-phase-menu.png)

    ![实际选择 response 阶段](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-08-response-phase.png)

12. Apply 响应断点。

    ![实际 Apply 响应阶段](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-09-apply.png)

13. 回到 Capture，再用客户端发送该范围的 `POST`，请求正文为 `{"request":"guide-response"}`。

    ![响应演示回到 Capture](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-10-capture.png)

    ![header-only 示例等待响应阶段](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-11-header-paused.png)

14. 选中响应等待项，确认不是请求阶段，再按下节编辑。

    ![实际选中的响应断点](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-12-select-header.png)

**预期结果**：客户端等待人工决定；断点不自动重发已完成的请求。

**关键说明**：HTTP 断点在头部阶段挂起，不为了显示原文而等待完整正文。没有正文快照不等于原始请求没有正文。

<a id="continue-drop"></a>
## 原样放行、修改后放行或丢弃

**步骤**

1. 先确认等待项属于上述请求和阶段。

   ![选择实际挂起的请求](../media/v0.1.1-alpha.1/breakpoints/breakpoints-12-pending.png)

2. 本次先演示修改：选择 Text。

   ![选择 Text 替换，而非原样继续](../media/v0.1.1-alpha.1/breakpoints/breakpoints-13-text.png)

3. 输入完整替换 `{"message":"edited-by-guide"}`。

   ![提交前的 edited-by-guide 草稿](../media/v0.1.1-alpha.1/breakpoints/breakpoints-14-replacement.png)

4. 选择 Forward edited，再核对源站收到的结果。

   ![实际修改后放行的检查点](../media/v0.1.1-alpha.1/breakpoints/breakpoints-15-forward.png)

5. 再发一条测试请求，选中新的等待项，不复用已经处理的目标。

   ![下一条待处理请求](../media/v0.1.1-alpha.1/breakpoints/breakpoints-16-next.png)

6. 选择 Continue unmodified，核对原样放行结果。

   ![实际原样放行](../media/v0.1.1-alpha.1/breakpoints/breakpoints-17-unmodified.png)

7. 再发一条仅用于丢弃的测试请求，确认目标。

   ![选中本次要 Drop 的等待项](../media/v0.1.1-alpha.1/breakpoints/breakpoints-18-drop-target.png)

8. 选择 Drop，再核对客户端错误与 Capture 状态；它不是成功响应。

   ![真实 Drop 结果检查点](../media/v0.1.1-alpha.1/breakpoints/breakpoints-19-drop.png)

**预期结果**

- Continue unmodified 忽略本地未提交草稿，按当前未编辑的挂起消息继续。
- Forward edited 才应用断点编辑草稿。
- Drop 丢弃目标等待项，客户端可能收到错误或连接终止，不会自动变成一份成功响应。

**关键说明**：已有规则可能先修改了消息；这里的“原样”是“不再应用当前断点草稿”，不承诺回到最初客户端字节。

<a id="edit"></a>
## 编辑 Header、Text 和 File

**步骤**

下面完整使用 `breakpoints-response`，先保存文件，再配置响应断点。源站 `http://127.0.0.1:59309/` 仅属于录制环境。请求阶段的 `edited-by-guide` 仍见[上一节](#continue-drop)，不要与本节响应数据混用。

1. 在响应规则生效前，取得本例用于保存文件的 source 响应。

   ![实际获取可保存的示例响应](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-01-source.png)

2. 选中这条 source 请求。

   ![选中实际 source 请求](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-02-select-source.png)

3. 打开 Response，检查要保存的 JSON：`message` 为 `file-from-product`，`orderId` 为 `guide-response-001`。

   ![产品中实际可保存的文件正文](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-03-response-body.png)

4. 使用 Save body，在真实保存面板生成 `guide-response.json`；不要手写替代文件，也不要拿 Transfer 章节同名但内容不同的文件代替。

   ![真实 Save 面板保存本轮 guide-response.json](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-04-save-dialog.png)

5. 等待保存完成，保留产品导出的完整字节。该文件正文是以下 JSON，不是之后 header-only 请求的 `origin-response`。

   ```json
   {
     "message": "file-from-product",
     "orderId": "guide-response-001"
   }
   ```

   ![本轮产品保存完整正文的检查点](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-05-saved-body.png)

6. 打开 `Guide response breakpoint`。

   ![打开本轮响应规则](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-06-rules.png)

7. 展开阶段菜单，选择 `response`。

   ![展开阶段选项](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-07-phase-menu.png)

   ![选择 response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-08-response-phase.png)

8. Apply 后再发送匹配请求。

   ![Apply 本轮响应断点](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-09-apply.png)

9. 回到 Capture，观察等待项。

   ![实际返回 Capture](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-10-capture.png)

10. 发出 header-only 示例 `POST`，请求正文 `{"request":"guide-response"}`，等待响应阶段。

    ![header-only 响应实际挂起](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-11-header-paused.png)

11. 选中该响应断点，在队首编辑器检查可用字段；请求与响应字段不同。

    ![实际响应阶段编辑字段](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-12-select-header.png)

12. 只改 Header 时保持 Body Off。

    ![明确保持 Body Off](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-13-body-off.png)

13. 将 `x-guide-response` 改为 `header-only-guide`，不输入正文替换。

    ![仅修改实际响应 Header](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-14-header-value.png)

14. Forward edited，核对 Header 改变，而正文仍为 `{"message":"origin-response","orderId":"guide-response-001"}`。

    ![仅 Header 改写后的实际放行结果](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-15-header-forward.png)

15. 另发一条 Text 示例请求，等待它的响应，不复用已经放行的目标。

    ![新的 Text 示例响应等待项](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-16-text-paused.png)

16. 选中 Text 示例。

    ![选中实际 Text 响应断点](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-17-select-text.png)

17. 将正文来源切到 Text。

    ![选择 Text 替换模式](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-18-text-mode.png)

18. 输入完整替换 `{"message":"text-from-guide","orderId":"guide-response-001"}`。

    ![提交前真实的 text-from-guide 草稿](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-19-text-value.png)

19. Forward edited，核对客户端收到替换后的 Text。

    ![实际 Text 替换放行结果](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-20-text-forward.png)

20. 再发 File 示例请求，等待它的响应。

    ![独立的 File 示例响应等待项](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-21-file-paused.png)

21. 选中 File 示例。

    ![选中实际 File 响应断点](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-22-select-file.png)

22. 将正文来源切到 File。

    ![选择 File，而非 Text 或 Off](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-23-file-mode.png)

23. 在真实系统 Open 面板选择本节第4步保存的同一个 `guide-response.json`。

    ![真实 Open 面板选择同轮产品导出的文件](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-24-open-dialog.png)

24. 折叠响应头，核对文件名、显示的大小及文件预览，确认使用的是 `file-from-product`。

    ![完整显示实际文件来源与预览](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-25-file-preview.png)

25. Forward edited，核对客户端收到产品保存文件的完整字节，不把预览片段当作发送内容。

    ![实际完整文件替换放行结果](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-26-file-forward.png)

26. 回到响应规则准备结束演示。

    ![回到 Guide response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-27-cleanup-rule.png)

27. 停用该响应断点。

    ![实际停用响应规则](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-28-disable.png)

28. Apply 停用状态，再核对本轮请求都已处理。

    ![保存响应断点的停用状态](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-29-apply-disabled.png)

**预期结果**：Off 保留正文；Text 使用明确的替换文本；File 发送完整文件，不是仅发送预览片段。

**关键说明**

- 文件预览最多 `2 MiB` 文本或 `16 MiB` 完整图片；未知二进制、音视频或超限图片可能只显示说明。
- 普通 HTTP 头部断点没有正文快照时，空 Text 仍是 Using original，不能用它推断会清空正文。
- 快照已有正文时，例如 WebSocket 消息，清空 Text 可以表示发送空正文；空格也是真实内容，不等于空输入。
- 旁边后来加载出的 Capture 原文预览，不会改变断点快照原本是否拥有正文的事实。
- Header 与编码的配合见[消息编辑约定](rules.md#message-editing)。
- [请求变体实录](#walkthrough-breakpoints-request-variants)另外展示Header-only、HTTP空Text保持原正文、产品保存的JSON和六字节binary File，以及响应状态改为202。HTTP头阶段没有完整正文快照，不等于Capture稍后没有原文；binary File只有元信息，不伪称有文本预览。大文件的预览与完整保存另见[Capture正文限制](capture.md#walkthrough-capture-body-limits)。

<a id="queues"></a>
## 处理多个等待项

**步骤**

本段来自 `breakpoints-queue`，源站 `http://127.0.0.1:56242/` 的端口仅用于本次录制。两条已准备好的规则 `Guide POST queue`、`Guide PUT queue` 都限定 `/guide/queue`，分别匹配 POST、PUT，共用 `http` 队列；本片段从检查规则开始，不把检查图当作首次创建过程。

1. 在 Rules 检查两条规则。

   ![本次两条实际 Method 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-01-rules.png)

2. 选中 `Guide POST queue`，核对 POST 条件。

   ![实际 Guide POST queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-02-post-rule.png)

3. 选中 `Guide PUT queue`，核对 PUT 条件，不把两条规则误认为两个 HTTP 队列。

   ![实际 Guide PUT queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-03-put-rule.png)

4. 返回 Capture。

   ![返回 Capture 准备排队请求](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-04-capture.png)

5. 经代理发送 POST-A，正文 `{"order":"POST-A","source":"original"}`，它成为 Head。

   ![POST-A 成为实际队首](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-05-post-head.png)

6. 不处理队首，继续发送 POST-B，正文 `{"order":"POST-B","source":"original"}`，观察 Queued。

   ![POST-B 在同一队列中等待](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-06-post-queued.png)

7. 再发送 PUT-A，正文 `{"order":"PUT-A","source":"original"}`。现在 `http` 队列有三项，并非 Method 不同就独立放行。

   ![PUT-A 加入实际三项 HTTP 队列](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-07-put-queued.png)

8. 选中可编辑的 POST-A 队首。

   ![选中 POST-A Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-08-select-head.png)

9. 为队首选择 Text。

   ![队首选择 Text 草稿](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-09-text-draft.png)

10. 输入 `{"order":"POST-A","source":"draft-not-submitted"}`，先不要 Forward edited。

    ![实际未提交的 POST-A 草稿](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-10-enter-draft.png)

11. 选中 POST-B，只查看 Queued 的普通详情，不能编辑它。

    ![POST-B 的真实只读 Queued 详情](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-11-post-queued-detail.png)

12. 再选 PUT-A，确认它也仍在等待。

    ![PUT-A 的实际等待详情](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-12-put-queued-detail.png)

13. 回到 POST-A Head，核对自己的 `draft-not-submitted` 草稿仍保留；不要把后续项套用这份草稿。

    ![返回队首后实际保留的草稿](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-13-restore-draft.png)

14. 按下节执行 Continue rule 后，观察 POST-A、POST-B 被处理，PUT-A 保留并成为可继续处理的队首；这是处理原有等待项，不是新发请求冒充队列推进。

    ![处理 POST 规则后剩余的 PUT 等待项](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-15-continue-rule.png)

**预期结果**：HTTP 请求、响应和 WebSocket 握手共享 HTTP 队列；不同 WebSocket 连接分别有自己的消息队列，同连接双向帧按到达顺序等待。

**关键说明**

- 筛选只影响哪些行可见，不移除隐藏的等待项，也不改变队列顺序。
- 切换选择保留各等待项自己的草稿，不把多个请求共用同一份编辑内容。
- 客户端超时或断开可能移除等待项；此时旧 ID 不能继续提交，不能自动套用到下一条请求。
- 没有“队列太长就自动放行”机制；大量挂起可能占满客户端连接。
- 若已选择其他请求，按自己的顺序继续，不把未自动跳转当作丢失等待项。[混合队列实录](#walkthrough-breakpoints-mixed-queues)检查request/response的HTTP队列和连接消息的独立WS队列；实际客户端取消另见管理器。该Release的受测Upgrade直接建立连接，没有HTTP pending，不能按架构预期伪造Queued状态；已消失的ID不通过内部API强行重用。

<a id="batch"></a>
## 批量处理和规则管理

**步骤**

以下承接上一节已有 POST-A、POST-B、PUT-A 的 `http` 队列，以及尚未提交的 POST-A 草稿。每种命令分别执行，不对已经处理的目标重复操作。

1. 展开批量操作菜单，核对规则目标为 `Guide POST queue`。

   ![真实批量菜单与规则目标](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-14-rule-menu.png)

2. 选择 Continue rule，只原样放行属于 POST 规则的 POST-A、POST-B，PUT-A 仍保留。这个动作不提交 `draft-not-submitted`，POST-A 仍使用 `source: original`。

   ![实际只放行 POST，PUT 继续等待](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-15-continue-rule.png)

3. 再发送 PUT-B，正文 `{"order":"PUT-B","source":"original"}`，使剩余队列包含 PUT-A、PUT-B。

   ![实际加入 PUT-B](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-16-put-b.png)

4. 展开当前 `http` 队列的菜单。

   ![剩余 PUT 等待项的实际队列菜单](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-18-drop-menu.png)

5. 选择 Drop queue，检查这两项被丢弃及客户端的实际错误/结束，不把 Drop 当作成功响应。

   ![Drop queue 实际处理剩余两项](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-19-drop-queue.png)

6. 新发 POST-C，正文 `{"order":"POST-C","source":"original"}`，建立新的队首。

   ![新 POST-C 队首，不复用旧请求](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-20-new-post.png)

7. 新发 PUT-C，正文 `{"order":"PUT-C","source":"original"}`，加入同一个 `http` 队列。

   ![PUT-C 加入新 HTTP 队列](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-21-new-put.png)

8. 选中新队首。

   ![选中实际新 Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-22-select-new-head.png)

9. 展开整个队列的操作菜单，区分 Continue queue 与 Continue rule。

   ![实际整个队列的菜单](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-23-continue-menu.png)

10. 选择 Continue queue，原样放行当前 POST-C 和 PUT-C；这次跨两条规则，不只处理 POST。

    ![实际原样放行 POST 与 PUT](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-24-continue-queue.png)

11. 返回 Rules 清理后续匹配。

    ![处理等待项后返回 Rules](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-25-cleanup-rules.png)

12. 选中 `Guide POST queue` 并停用。

    ![选中 POST 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-26-select-post-rule.png)

    ![实际停用 POST 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-27-disable-post.png)

13. 选中 `Guide PUT queue` 并停用。

    ![选中 PUT 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-28-select-put-rule.png)

    ![实际停用 PUT 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-29-disable-put.png)

14. Apply 两条停用状态；本次保留规则，不执行删除。

    ![实际 Apply 两条停用规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-30-apply-disabled.png)

**预期结果**：只作用于操作开始时选定范围内的等待项，不把后来新到的请求无限吸收进同一次操作。

**关键说明**：管理器中的断点规则开关或撤销会立即 Apply；普通 Rules 编辑仍按自己的 Apply 流程。批量 Continue 不应用任意一条编辑器草稿；停用匹配与解决已经挂起的项要分别检查。不要把“规则已经关了”当作所有客户端已经被释放。

[管理器实录](#walkthrough-breakpoints-manager)独立展示管理器内开关、撤销、重新命中和对应规则检查。队列并发到达属于操作边界，不把固定批次影片说成所有内部竞争时序的穷举。

<a id="websocket"></a>
## 暂停和编辑 WebSocket 帧

**前提**：已有可查看的 WebSocket 连接；WSS 需要相应解密条件才能看到消息。

**步骤**

本段独立使用 `ws://127.0.0.1:58082/guide/websocket/text`，`58082` 是录制动态端口。所有示例都是 `message` 类型的 JSON 文本帧，先 Sent、再 Received，分别覆盖两个方向；不是 Capture 章节普通 `hello from client`，也不是同时开启 Both。

1. 让外部客户端通过代理建立该文本连接。

   ![实际建立本轮 WebSocket 连接](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-01-connect.png)

2. 选中这条连接。

   ![选中真实 WebSocket 记录](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-02-select-connection.png)

3. 打开 Messages。

   ![实际 Messages 入口](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-03-messages.png)

4. 打开当前连接的断点设置。

   ![真实连接断点设置](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-04-sent-setup.png)

5. 选择 Sent，本轮只暂停客户端发送方向的 message。

   ![实际选择 Sent](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-05-sent-direction.png)

6. 启用 Sent 文本断点。

   ![实际启用发送方向拦截](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-06-enable-sent.png)

7. 客户端发送 `{"type":"chat","message":"hello-original"}`，检查暂停帧。

   ![hello-original 实际暂停](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-07-sent-original.png)

8. Continue unmodified，核对原样发送。

   ![实际原样放行发送帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-08-sent-unmodified.png)

9. 客户端再发送 `{"type":"chat","message":"edit-this"}`，等待新的帧。

   ![独立的 edit-this 暂停帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-09-sent-edit-target.png)

10. 在该帧的行内编辑区选择 Text。

    ![发送帧选择 Text](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-10-sent-text.png)

11. 输入完整替换 `{"type":"chat","message":"edited-by-guide"}`。

    ![发送帧的实际替换草稿](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-11-sent-edit.png)

12. Forward edited，核对源站及 echo 使用替换内容。

    ![实际编辑后发送及 echo 检查点](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-12-sent-forward.png)

13. 客户端另发 `{"type":"chat","message":"do-not-forward"}`，确认本次 Drop 目标。

    ![实际要丢弃的发送帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-13-sent-drop-target.png)

14. Drop 此发送帧，不把它当作成功送达源站。

    ![实际 Drop 发送方向帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-14-sent-drop.png)

15. 停用 Sent 设置，结束第一方向的演示。

    ![实际停用 Sent](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-15-disable-sent.png)

16. 重新打开同一连接的设置。

    ![重新打开真实连接设置](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-16-received-setup.png)

17. 选择 Received，改为服务端到客户端方向。

    ![实际选择 Received](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-17-received-direction.png)

18. 启用 Received 文本断点。

    ![实际启用接收方向拦截](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-18-enable-received.png)

19. 让源站发送 `{"type":"chat","message":"server-original"}`，检查接收方向暂停帧。

    ![server-original 实际暂停](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-19-received-original.png)

20. Continue unmodified，核对客户端收到原文。

    ![实际原样放行接收帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-20-received-unmodified.png)

21. 源站另发 `{"type":"chat","message":"server-edit-this"}`。

    ![独立的 server-edit-this 暂停帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-21-received-edit-target.png)

22. 为该接收帧选择 Text。

    ![接收帧实际选择 Text](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-22-received-text.png)

23. 输入完整替换 `{"type":"chat","message":"server-edited-by-guide"}`。

    ![接收帧的真实替换草稿](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-23-received-edit.png)

24. Forward edited，核对客户端收到替换文本。

    ![实际编辑后接收的结果](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-24-received-forward.png)

25. 源站再发 `{"type":"chat","message":"server-do-not-forward"}`，确认本次 Drop 目标。

    ![实际要丢弃的接收帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-25-received-drop-target.png)

26. Drop 此接收帧，不向客户端交付它。

    ![实际 Drop 接收方向帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-26-received-drop.png)

27. 关闭本连接的 Received 断点。

    ![实际关闭连接断点](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-27-disable-received.png)

28. 发送 `{"type":"chat","message":"after-disabled"}`，核对关闭后正常 echo，不再等待人工决定。

    ![关闭后实际恢复正常 echo](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-28-after-disabled.png)

29. 正常关闭本轮示例客户端连接。

    ![实际关闭示例连接，不是拦截 close 帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-29-close-client.png)

30. 若需要同时 Both，或拦截 ping、pong、close，再选择相应方向与帧类型并单独核对。

    [控制帧实录](#walkthrough-breakpoints-websocket-controls)独立选择Both，实际拦截ping、pong和close，并编辑关闭码；它还验证已知WebSocket payload的空Text确实转发零字节。关闭码1001是源站侧实际接收值，客户端一侧的关闭确认仍可能为1000，不混淆两段连接。

**预期结果**：帧在当前连接的 Messages 中等待，不与普通 HTTP 编辑器混成同一个界面。

**关键说明**

- 当前只维护一份活动 WebSocket 拦截配置，不意味着可同时为任意多连接持久保存独立设置。
- 切换到新连接配置不会自动解决旧连接已有的等待项。
- close 帧可以只修改关闭码再 Forward edited，不要求同时修改文本；使用协议允许的关闭码。
- 对 ping、pong、close 的拦截会影响连接保活和关闭，不能只把它们当普通聊天文字。

<a id="lifecycle"></a>
## 结束调试与异常释放

1. 处理需要保留的等待项，停用不再需要的匹配并保存。

   本图对应已按前文处理三条请求后，停用 `Guide request breakpoint` 再 Apply，不是批量释放：

   ![停用本次请求断点](../media/v0.1.1-alpha.1/breakpoints/breakpoints-20-disable.png)

   ![Apply 停用状态](../media/v0.1.1-alpha.1/breakpoints/breakpoints-21-apply-disabled.png)

2. 检查客户端是否已经继续、失败或断开。

   分别核对自己执行的示例：下图来自队列片段的 POST-C/PUT-C 原样放行，以及另一 WebSocket 片段的正常关闭，不冒充同一批连接的全局汇总。

   ![本轮 HTTP 队列实际处理完成](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-24-continue-queue.png)

   ![WebSocket 示例连接实际关闭](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-29-close-client.png)

3. 正常退出 App，等待代理和进程收尾。

   [Workspace 的独立 Close/重启实拍](workspace.md#saved-data)已有 driver 执行的真实 Close。下图仅是关闭前已保存的状态，不是点击 Close 的瞬间，也不是系统代理恢复画面。

   ![Workspace 实拍中实际 Close 之前的状态](../media/v0.1.1-alpha.1/workspace-close/workspace-close-06-before-close.png)

   [持等待正常退出](#walkthrough-breakpoints-mixed-queues-16-before-close)已实际保留HTTP与WS等待后执行Close，客户端取消、内容未转发和宿主恢复分别核对。图片是关闭前状态，不是进程退出图；没有强杀Core或录入桌面来制造故障素材。

**预期结果**：用户决定、客户端断开或 Core 生命周期结束会解除相应挂起；不存在固定秒数之后自动继续的规则。

**关键说明**：关闭 App 或 Core 重启造成的是取消/中止，不是成功放行。若请求仍停住，先检查隐藏在筛选外的等待项，不用强杀代替正常清理。

<a id="tools"></a>
## 通过 Agent 或 MCP 处理断点

先查询当前等待项，再审批针对具体项、队列或规则的操作。过期目标会被拒绝；让 AI 重新读取状态，不要猜下一个 ID。

Tool 的编辑范围小于完整 UI：它不接受任意本地文件路径，也不提供所有 Header 或关闭码编辑。文件替换和更细的协议编辑应回到 App 的正式控件；详见 [Tool 速查](tool-reference.md#breakpoints)。

<!-- recorded-walkthrough:breakpoints-response:start -->
<a id="walkthrough-breakpoints-response"></a>
## 逐步骤实操：响应 Header、Text 与 File 断点

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>rule</code> | <code>Guide response breakpoint</code> |
| <code>path</code> | <code>/guide/response</code> |
| <code>method</code> | <code>POST</code> |
| <code>phase</code> | <code>response</code> |
| <code>requestBody</code> | <code>{&quot;request&quot;:&quot;guide-response&quot;}</code> |
| <code>originBody</code> | <code>{&quot;message&quot;:&quot;origin-response&quot;,&quot;orderId&quot;:&quot;guide-response-001&quot;}</code> |
| <code>headerName</code> | <code>x-guide-response</code> |
| <code>headerValue</code> | <code>header-only-guide</code> |
| <code>textReplacement</code> | <code>{&quot;message&quot;:&quot;text-from-guide&quot;,&quot;orderId&quot;:&quot;guide-response-001&quot;}</code> |
| <code>fileName</code> | <code>guide-response.json</code> |
| <code>fileBody</code> | <code>{&#10;  &quot;message&quot;: &quot;file-from-product&quot;,&#10;  &quot;orderId&quot;: &quot;guide-response-001&quot;&#10;}</code> |
| <code>origin</code> | <code>http://127.0.0.1:59309/</code> |

<a id="walkthrough-breakpoints-response-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4" poster="../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-01-source.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.vtt" default>
</video>

<a id="walkthrough-breakpoints-response-01-source"></a>
### 01 · 获取可保存的示例响应

[视频 00:00](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=0.406) · [返回本节视频](#walkthrough-breakpoints-response-video)

![01 · 获取可保存的示例响应](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-01-source.png)

<a id="walkthrough-breakpoints-response-02-select-source"></a>
### 02 · 选中 source 请求

[视频 00:03](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=3.264) · [返回本节视频](#walkthrough-breakpoints-response-video)

![02 · 选中 source 请求](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-02-select-source.png)

<a id="walkthrough-breakpoints-response-03-response-body"></a>
### 03 · 打开 Response 正文

[视频 00:06](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=6.242) · [返回本节视频](#walkthrough-breakpoints-response-video)

![03 · 打开 Response 正文](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-03-response-body.png)

<a id="walkthrough-breakpoints-response-04-save-dialog"></a>
### 04 · Save body 保存 guide-response.json

[视频 00:20](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=20.430) · [返回本节视频](#walkthrough-breakpoints-response-video)

![04 · Save body 保存 guide-response.json](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-04-save-dialog.png)

<a id="walkthrough-breakpoints-response-05-saved-body"></a>
### 05 · 确认产品保存了完整正文

[视频 00:24](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=24.568) · [返回本节视频](#walkthrough-breakpoints-response-video)

![05 · 确认产品保存了完整正文](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-05-saved-body.png)

<a id="walkthrough-breakpoints-response-06-rules"></a>
### 06 · 打开 Guide response breakpoint

[视频 00:27](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=27.401) · [返回本节视频](#walkthrough-breakpoints-response-video)

![06 · 打开 Guide response breakpoint](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-06-rules.png)

<a id="walkthrough-breakpoints-response-07-phase-menu"></a>
### 07 · 展开断点阶段

[视频 00:30](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=30.306) · [返回本节视频](#walkthrough-breakpoints-response-video)

![07 · 展开断点阶段](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-07-phase-menu.png)

<a id="walkthrough-breakpoints-response-08-response-phase"></a>
### 08 · 选择 response 阶段

[视频 00:33](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=33.201) · [返回本节视频](#walkthrough-breakpoints-response-video)

![08 · 选择 response 阶段](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-08-response-phase.png)

<a id="walkthrough-breakpoints-response-09-apply"></a>
### 09 · Apply 响应断点

[视频 00:36](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=36.051) · [返回本节视频](#walkthrough-breakpoints-response-video)

![09 · Apply 响应断点](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-09-apply.png)

<a id="walkthrough-breakpoints-response-10-capture"></a>
### 10 · 返回 Capture

[视频 00:38](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=38.953) · [返回本节视频](#walkthrough-breakpoints-response-video)

![10 · 返回 Capture](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-10-capture.png)

<a id="walkthrough-breakpoints-response-11-header-paused"></a>
### 11 · 发出 header-only 并等待响应

[视频 00:41](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=41.862) · [返回本节视频](#walkthrough-breakpoints-response-video)

![11 · 发出 header-only 并等待响应](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-11-header-paused.png)

<a id="walkthrough-breakpoints-response-12-select-header"></a>
### 12 · 选中响应断点

[视频 00:44](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=44.752) · [返回本节视频](#walkthrough-breakpoints-response-video)

![12 · 选中响应断点](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-12-select-header.png)

<a id="walkthrough-breakpoints-response-13-body-off"></a>
### 13 · 保持 Body Off

[视频 00:47](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=47.810) · [返回本节视频](#walkthrough-breakpoints-response-video)

![13 · 保持 Body Off](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-13-body-off.png)

<a id="walkthrough-breakpoints-response-14-header-value"></a>
### 14 · 仅修改 x-guide-response

[视频 00:50](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=50.908) · [返回本节视频](#walkthrough-breakpoints-response-video)

![14 · 仅修改 x-guide-response](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-14-header-value.png)

<a id="walkthrough-breakpoints-response-15-header-forward"></a>
### 15 · Forward edited，正文保持原样

[视频 00:54](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=54.161) · [返回本节视频](#walkthrough-breakpoints-response-video)

![15 · Forward edited，正文保持原样](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-15-header-forward.png)

<a id="walkthrough-breakpoints-response-16-text-paused"></a>
### 16 · 发出 Text 示例响应

[视频 00:57](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=57.203) · [返回本节视频](#walkthrough-breakpoints-response-video)

![16 · 发出 Text 示例响应](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-16-text-paused.png)

<a id="walkthrough-breakpoints-response-17-select-text"></a>
### 17 · 选中 Text 示例

[视频 01:00](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=60.066) · [返回本节视频](#walkthrough-breakpoints-response-video)

![17 · 选中 Text 示例](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-17-select-text.png)

<a id="walkthrough-breakpoints-response-18-text-mode"></a>
### 18 · 选择 Text

[视频 01:03](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=63.110) · [返回本节视频](#walkthrough-breakpoints-response-video)

![18 · 选择 Text](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-18-text-mode.png)

<a id="walkthrough-breakpoints-response-19-text-value"></a>
### 19 · 输入 text-from-guide

[视频 01:06](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=66.316) · [返回本节视频](#walkthrough-breakpoints-response-video)

![19 · 输入 text-from-guide](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-19-text-value.png)

<a id="walkthrough-breakpoints-response-20-text-forward"></a>
### 20 · Forward edited，核对 Text 字节

[视频 01:09](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=69.510) · [返回本节视频](#walkthrough-breakpoints-response-video)

![20 · Forward edited，核对 Text 字节](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-20-text-forward.png)

<a id="walkthrough-breakpoints-response-21-file-paused"></a>
### 21 · 发出 File 示例响应

[视频 01:12](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=72.555) · [返回本节视频](#walkthrough-breakpoints-response-video)

![21 · 发出 File 示例响应](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-21-file-paused.png)

<a id="walkthrough-breakpoints-response-22-select-file"></a>
### 22 · 选中 File 示例

[视频 01:15](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=75.506) · [返回本节视频](#walkthrough-breakpoints-response-video)

![22 · 选中 File 示例](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-22-select-file.png)

<a id="walkthrough-breakpoints-response-23-file-mode"></a>
### 23 · 选择 File

[视频 01:18](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=78.661) · [返回本节视频](#walkthrough-breakpoints-response-video)

![23 · 选择 File](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-23-file-mode.png)

<a id="walkthrough-breakpoints-response-24-open-dialog"></a>
### 24 · 选择产品保存的 guide-response.json

[视频 01:35](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=95.515) · [返回本节视频](#walkthrough-breakpoints-response-video)

![24 · 选择产品保存的 guide-response.json](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-24-open-dialog.png)

<a id="walkthrough-breakpoints-response-25-file-preview"></a>
### 25 · 折叠响应头，完整查看文件预览

[视频 01:40](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=100.572) · [返回本节视频](#walkthrough-breakpoints-response-video)

![25 · 折叠响应头，完整查看文件预览](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-25-file-preview.png)

<a id="walkthrough-breakpoints-response-26-file-forward"></a>
### 26 · Forward edited，核对完整文件字节

[视频 01:43](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=103.960) · [返回本节视频](#walkthrough-breakpoints-response-video)

![26 · Forward edited，核对完整文件字节](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-26-file-forward.png)

<a id="walkthrough-breakpoints-response-27-cleanup-rule"></a>
### 27 · 返回响应规则

[视频 01:47](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=107.107) · [返回本节视频](#walkthrough-breakpoints-response-video)

![27 · 返回响应规则](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-27-cleanup-rule.png)

<a id="walkthrough-breakpoints-response-28-disable"></a>
### 28 · 停用响应断点

[视频 01:50](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=110.006) · [返回本节视频](#walkthrough-breakpoints-response-video)

![28 · 停用响应断点](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-28-disable.png)

<a id="walkthrough-breakpoints-response-29-apply-disabled"></a>
### 29 · Apply 停用状态

[视频 01:52](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response.mp4#t=112.855) · [返回本节视频](#walkthrough-breakpoints-response-video)

![29 · Apply 停用状态](../media/v0.1.1-alpha.1/breakpoints-response/breakpoints-response-29-apply-disabled.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:breakpoints-response:end -->

<!-- recorded-walkthrough:breakpoints-queue:start -->
<a id="walkthrough-breakpoints-queue"></a>
## 逐步骤实操：队首、草稿与批量范围

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>postRule</code> | <code>Guide POST queue</code> |
| <code>putRule</code> | <code>Guide PUT queue</code> |
| <code>path</code> | <code>/guide/queue</code> |
| <code>queueKey</code> | <code>http</code> |
| <code>postA</code> | <code>{&quot;order&quot;:&quot;POST-A&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>postB</code> | <code>{&quot;order&quot;:&quot;POST-B&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>putA</code> | <code>{&quot;order&quot;:&quot;PUT-A&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>putB</code> | <code>{&quot;order&quot;:&quot;PUT-B&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>postC</code> | <code>{&quot;order&quot;:&quot;POST-C&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>putC</code> | <code>{&quot;order&quot;:&quot;PUT-C&quot;,&quot;source&quot;:&quot;original&quot;}</code> |
| <code>draft</code> | <code>{&quot;order&quot;:&quot;POST-A&quot;,&quot;source&quot;:&quot;draft-not-submitted&quot;}</code> |
| <code>origin</code> | <code>http://127.0.0.1:56242/</code> |

<a id="walkthrough-breakpoints-queue-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4" poster="../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-01-rules.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.vtt" default>
</video>

<a id="walkthrough-breakpoints-queue-01-rules"></a>
### 01 · 查看两条 Method 规则

[视频 00:00](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=0.391) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![01 · 查看两条 Method 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-01-rules.png)

<a id="walkthrough-breakpoints-queue-02-post-rule"></a>
### 02 · 查看 Guide POST queue

[视频 00:03](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=3.238) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![02 · 查看 Guide POST queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-02-post-rule.png)

<a id="walkthrough-breakpoints-queue-03-put-rule"></a>
### 03 · 查看 Guide PUT queue

[视频 00:06](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=6.042) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![03 · 查看 Guide PUT queue](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-03-put-rule.png)

<a id="walkthrough-breakpoints-queue-04-capture"></a>
### 04 · 返回 Capture

[视频 00:08](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=8.886) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![04 · 返回 Capture](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-04-capture.png)

<a id="walkthrough-breakpoints-queue-05-post-head"></a>
### 05 · 发送 POST-A，成为 Head

[视频 00:11](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=11.737) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![05 · 发送 POST-A，成为 Head](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-05-post-head.png)

<a id="walkthrough-breakpoints-queue-06-post-queued"></a>
### 06 · 发送 POST-B，进入 Queued

[视频 00:14](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=14.586) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![06 · 发送 POST-B，进入 Queued](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-06-post-queued.png)

<a id="walkthrough-breakpoints-queue-07-put-queued"></a>
### 07 · 发送 PUT-A，HTTP 队列共三项

[视频 00:17](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=17.440) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![07 · 发送 PUT-A，HTTP 队列共三项](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-07-put-queued.png)

<a id="walkthrough-breakpoints-queue-08-select-head"></a>
### 08 · 选中 POST-A 队首

[视频 00:20](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=20.348) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![08 · 选中 POST-A 队首](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-08-select-head.png)

<a id="walkthrough-breakpoints-queue-09-text-draft"></a>
### 09 · 为队首选择 Text

[视频 00:23](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=23.490) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![09 · 为队首选择 Text](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-09-text-draft.png)

<a id="walkthrough-breakpoints-queue-10-enter-draft"></a>
### 10 · 输入未提交草稿

[视频 00:26](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=26.340) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![10 · 输入未提交草稿](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-10-enter-draft.png)

<a id="walkthrough-breakpoints-queue-11-post-queued-detail"></a>
### 11 · 切到 POST-B，只读 Queued

[视频 00:29](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=29.191) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![11 · 切到 POST-B，只读 Queued](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-11-post-queued-detail.png)

<a id="walkthrough-breakpoints-queue-12-put-queued-detail"></a>
### 12 · 切到 PUT-A，仍在等待

[视频 00:32](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=32.196) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![12 · 切到 PUT-A，仍在等待](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-12-put-queued-detail.png)

<a id="walkthrough-breakpoints-queue-13-restore-draft"></a>
### 13 · 回到 Head，草稿保持

[视频 00:35](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=35.093) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![13 · 回到 Head，草稿保持](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-13-restore-draft.png)

<a id="walkthrough-breakpoints-queue-14-rule-menu"></a>
### 14 · 展开批量操作菜单

[视频 00:38](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=38.092) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![14 · 展开批量操作菜单](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-14-rule-menu.png)

<a id="walkthrough-breakpoints-queue-15-continue-rule"></a>
### 15 · Continue rule 仅放行 POST，PUT 保留

[视频 00:41](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=41.096) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![15 · Continue rule 仅放行 POST，PUT 保留](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-15-continue-rule.png)

<a id="walkthrough-breakpoints-queue-16-put-b"></a>
### 16 · 加入 PUT-B

[视频 00:44](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=44.248) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![16 · 加入 PUT-B](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-16-put-b.png)

<a id="walkthrough-breakpoints-queue-18-drop-menu"></a>
### 17 · 展开 PUT 队列菜单

[视频 00:47](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=47.145) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![17 · 展开 PUT 队列菜单](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-18-drop-menu.png)

<a id="walkthrough-breakpoints-queue-19-drop-queue"></a>
### 18 · Drop queue 丢弃剩余两项

[视频 00:50](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=50.096) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![18 · Drop queue 丢弃剩余两项](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-19-drop-queue.png)

<a id="walkthrough-breakpoints-queue-20-new-post"></a>
### 19 · 建立新 POST 队首

[视频 00:53](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=53.103) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![19 · 建立新 POST 队首](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-20-new-post.png)

<a id="walkthrough-breakpoints-queue-21-new-put"></a>
### 20 · 把 PUT 加入同一 HTTP 队列

[视频 00:55](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=55.995) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![20 · 把 PUT 加入同一 HTTP 队列](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-21-new-put.png)

<a id="walkthrough-breakpoints-queue-22-select-new-head"></a>
### 21 · 选中新队首

[视频 00:58](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=58.897) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![21 · 选中新队首](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-22-select-new-head.png)

<a id="walkthrough-breakpoints-queue-23-continue-menu"></a>
### 22 · 展开整个队列的菜单

[视频 01:01](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=61.807) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![22 · 展开整个队列的菜单](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-23-continue-menu.png)

<a id="walkthrough-breakpoints-queue-24-continue-queue"></a>
### 23 · Continue queue 原样放行 POST 和 PUT

[视频 01:04](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=64.747) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![23 · Continue queue 原样放行 POST 和 PUT](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-24-continue-queue.png)

<a id="walkthrough-breakpoints-queue-25-cleanup-rules"></a>
### 24 · 返回 Rules 清理

[视频 01:07](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=67.796) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![24 · 返回 Rules 清理](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-25-cleanup-rules.png)

<a id="walkthrough-breakpoints-queue-26-select-post-rule"></a>
### 25 · 选中 POST 规则

[视频 01:10](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=70.696) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![25 · 选中 POST 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-26-select-post-rule.png)

<a id="walkthrough-breakpoints-queue-27-disable-post"></a>
### 26 · 停用 POST 规则

[视频 01:13](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=73.499) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![26 · 停用 POST 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-27-disable-post.png)

<a id="walkthrough-breakpoints-queue-28-select-put-rule"></a>
### 27 · 选中 PUT 规则

[视频 01:16](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=76.347) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![27 · 选中 PUT 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-28-select-put-rule.png)

<a id="walkthrough-breakpoints-queue-29-disable-put"></a>
### 28 · 停用 PUT 规则

[视频 01:19](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=79.195) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![28 · 停用 PUT 规则](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-29-disable-put.png)

<a id="walkthrough-breakpoints-queue-30-apply-disabled"></a>
### 29 · Apply 两条停用状态

[视频 01:22](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue.mp4#t=82.045) · [返回本节视频](#walkthrough-breakpoints-queue-video)

![29 · Apply 两条停用状态](../media/v0.1.1-alpha.1/breakpoints-queue/breakpoints-queue-30-apply-disabled.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:breakpoints-queue:end -->

<!-- recorded-walkthrough:breakpoints-websocket:start -->
<a id="walkthrough-breakpoints-websocket"></a>
## 逐步骤实操：WebSocket 文本帧断点

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>path</code> | <code>/guide/websocket/text</code> |
| <code>original</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;hello-original&quot;}</code> |
| <code>editOriginal</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;edit-this&quot;}</code> |
| <code>replacement</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;edited-by-guide&quot;}</code> |
| <code>dropped</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;do-not-forward&quot;}</code> |
| <code>serverOriginal</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;server-original&quot;}</code> |
| <code>serverEditOriginal</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;server-edit-this&quot;}</code> |
| <code>serverReplacement</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;server-edited-by-guide&quot;}</code> |
| <code>serverDropped</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;server-do-not-forward&quot;}</code> |
| <code>afterDisabled</code> | <code>{&quot;type&quot;:&quot;chat&quot;,&quot;message&quot;:&quot;after-disabled&quot;}</code> |
| <code>origin</code> | <code>ws://127.0.0.1:58082/guide/websocket/text</code> |
| <code>directions</code> | <code>client-to-server, server-to-client</code> |
| <code>frames</code> | <code>message</code> |

<a id="walkthrough-breakpoints-websocket-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4" poster="../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-01-connect.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.vtt" default>
</video>

<a id="walkthrough-breakpoints-websocket-01-connect"></a>
### 01 · 建立文本示例连接

[视频 00:00](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=0.404) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![01 · 建立文本示例连接](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-01-connect.png)

<a id="walkthrough-breakpoints-websocket-02-select-connection"></a>
### 02 · 选中 WebSocket 连接

[视频 00:03](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=3.248) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![02 · 选中 WebSocket 连接](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-02-select-connection.png)

<a id="walkthrough-breakpoints-websocket-03-messages"></a>
### 03 · 打开 Messages

[视频 00:06](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=6.248) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![03 · 打开 Messages](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-03-messages.png)

<a id="walkthrough-breakpoints-websocket-04-sent-setup"></a>
### 04 · 打开连接断点设置

[视频 00:09](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=9.096) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![04 · 打开连接断点设置](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-04-sent-setup.png)

<a id="walkthrough-breakpoints-websocket-05-sent-direction"></a>
### 05 · 选择 Sent，仅暂停发送消息

[视频 00:11](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=11.998) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![05 · 选择 Sent，仅暂停发送消息](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-05-sent-direction.png)

<a id="walkthrough-breakpoints-websocket-06-enable-sent"></a>
### 06 · 启用 Sent 文本断点

[视频 00:14](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=14.897) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![06 · 启用 Sent 文本断点](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-06-enable-sent.png)

<a id="walkthrough-breakpoints-websocket-07-sent-original"></a>
### 07 · 发送 hello-original 并暂停

[视频 00:17](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=17.747) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![07 · 发送 hello-original 并暂停](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-07-sent-original.png)

<a id="walkthrough-breakpoints-websocket-08-sent-unmodified"></a>
### 08 · Continue unmodified 原样发送

[视频 00:20](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=20.847) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![08 · Continue unmodified 原样发送](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-08-sent-unmodified.png)

<a id="walkthrough-breakpoints-websocket-09-sent-edit-target"></a>
### 09 · 发送 edit-this 并暂停

[视频 00:23](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=23.697) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![09 · 发送 edit-this 并暂停](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-09-sent-edit-target.png)

<a id="walkthrough-breakpoints-websocket-10-sent-text"></a>
### 10 · 选择发送帧的 Text

[视频 00:26](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=26.659) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![10 · 选择发送帧的 Text](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-10-sent-text.png)

<a id="walkthrough-breakpoints-websocket-11-sent-edit"></a>
### 11 · 输入 edited-by-guide

[视频 00:29](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=29.547) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![11 · 输入 edited-by-guide](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-11-sent-edit.png)

<a id="walkthrough-breakpoints-websocket-12-sent-forward"></a>
### 12 · Forward edited，核对源站和echo

[视频 00:32](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=32.398) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![12 · Forward edited，核对源站和echo](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-12-sent-forward.png)

<a id="walkthrough-breakpoints-websocket-13-sent-drop-target"></a>
### 13 · 发送 do-not-forward 并暂停

[视频 00:35](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=35.299) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![13 · 发送 do-not-forward 并暂停](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-13-sent-drop-target.png)

<a id="walkthrough-breakpoints-websocket-14-sent-drop"></a>
### 14 · Drop 发送帧

[视频 00:38](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=38.246) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![14 · Drop 发送帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-14-sent-drop.png)

<a id="walkthrough-breakpoints-websocket-15-disable-sent"></a>
### 15 · 停用 Sent 设置

[视频 00:41](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=41.109) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![15 · 停用 Sent 设置](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-15-disable-sent.png)

<a id="walkthrough-breakpoints-websocket-16-received-setup"></a>
### 16 · 重新打开连接设置

[视频 00:43](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=43.946) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![16 · 重新打开连接设置](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-16-received-setup.png)

<a id="walkthrough-breakpoints-websocket-17-received-direction"></a>
### 17 · 选择 Received

[视频 00:46](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=46.807) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![17 · 选择 Received](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-17-received-direction.png)

<a id="walkthrough-breakpoints-websocket-18-enable-received"></a>
### 18 · 启用 Received 文本断点

[视频 00:49](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=49.698) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![18 · 启用 Received 文本断点](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-18-enable-received.png)

<a id="walkthrough-breakpoints-websocket-19-received-original"></a>
### 19 · 源站发送 server-original

[视频 00:52](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=52.548) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![19 · 源站发送 server-original](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-19-received-original.png)

<a id="walkthrough-breakpoints-websocket-20-received-unmodified"></a>
### 20 · Continue unmodified 原样接收

[视频 00:55](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=55.495) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![20 · Continue unmodified 原样接收](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-20-received-unmodified.png)

<a id="walkthrough-breakpoints-websocket-21-received-edit-target"></a>
### 21 · 源站发送 server-edit-this

[视频 00:58](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=58.347) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![21 · 源站发送 server-edit-this](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-21-received-edit-target.png)

<a id="walkthrough-breakpoints-websocket-22-received-text"></a>
### 22 · 选择接收帧的 Text

[视频 01:01](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=61.400) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![22 · 选择接收帧的 Text](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-22-received-text.png)

<a id="walkthrough-breakpoints-websocket-23-received-edit"></a>
### 23 · 输入 server-edited-by-guide

[视频 01:04](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=64.250) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![23 · 输入 server-edited-by-guide](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-23-received-edit.png)

<a id="walkthrough-breakpoints-websocket-24-received-forward"></a>
### 24 · Forward edited，客户端收到替换文本

[视频 01:07](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=67.098) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![24 · Forward edited，客户端收到替换文本](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-24-received-forward.png)

<a id="walkthrough-breakpoints-websocket-25-received-drop-target"></a>
### 25 · 源站发送 server-do-not-forward

[视频 01:09](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=69.948) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![25 · 源站发送 server-do-not-forward](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-25-received-drop-target.png)

<a id="walkthrough-breakpoints-websocket-26-received-drop"></a>
### 26 · Drop 接收帧

[视频 01:12](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=72.897) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![26 · Drop 接收帧](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-26-received-drop.png)

<a id="walkthrough-breakpoints-websocket-27-disable-received"></a>
### 27 · 关闭连接断点

[视频 01:15](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=75.746) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![27 · 关闭连接断点](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-27-disable-received.png)

<a id="walkthrough-breakpoints-websocket-28-after-disabled"></a>
### 28 · 核对关闭后正常echo

[视频 01:18](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=78.596) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![28 · 核对关闭后正常echo](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-28-after-disabled.png)

<a id="walkthrough-breakpoints-websocket-29-close-client"></a>
### 29 · 正常关闭示例连接

[视频 01:21](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket.mp4#t=81.357) · [返回本节视频](#walkthrough-breakpoints-websocket-video)

![29 · 正常关闭示例连接](../media/v0.1.1-alpha.1/breakpoints-websocket/breakpoints-websocket-29-close-client.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:breakpoints-websocket:end -->

<!-- recorded-walkthrough:breakpoints-manager:start -->
<a id="walkthrough-breakpoints-manager"></a>
## 逐步骤实操：快捷撤销、全局开关、规则开关与客户端取消

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>url</code> | <code>http://127.0.0.1:63537/guide/breakpoint-manager/request</code> |
| <code>shortcutScope</code> | <code>endpoint</code> |
| <code>generatedRuleName</code> | <code>断点 · 127.0.0.1/guide/breakpoint-manager/request</code> |
| <code>abortHeader</code> | <code>x-guide-attempt: abort</code> |
| <code>resumedHeader</code> | <code>x-guide-attempt: after-abort</code> |
| <code>finalState</code> | <code>Break on match enabled; this endpoint Rule disabled and applied; no pending item remains</code> |

<a id="walkthrough-breakpoints-manager-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4" poster="../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-01-source.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.vtt" default>
</video>

<a id="walkthrough-breakpoints-manager-01-source"></a>
### 01 · 查看快捷操作的历史请求

[视频 00:00](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=0.384) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![01 · 查看快捷操作的历史请求](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-01-source.png)

<a id="walkthrough-breakpoints-manager-02-menu"></a>
### 02 · 打开Breakpoint作用范围菜单

[视频 00:03](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=3.573) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![02 · 打开Breakpoint作用范围菜单](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-02-menu.png)

<a id="walkthrough-breakpoints-manager-03-create"></a>
### 03 · 选择Endpoint并立即Apply

[视频 00:07](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=7.098) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![03 · 选择Endpoint并立即Apply](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-03-create.png)

<a id="walkthrough-breakpoints-manager-04-undo"></a>
### 04 · 使用创建提示中的Undo

[视频 00:07](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=7.873) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![04 · 使用创建提示中的Undo](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-04-undo.png)

<a id="walkthrough-breakpoints-manager-05-after-undo"></a>
### 05 · 发送新请求确认已撤销

[视频 00:11](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=11.197) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![05 · 发送新请求确认已撤销](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-05-after-undo.png)

<a id="walkthrough-breakpoints-manager-06-recreate-menu"></a>
### 06 · 再次打开同一Endpoint菜单

[视频 00:14](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=14.204) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![06 · 再次打开同一Endpoint菜单](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-06-recreate-menu.png)

<a id="walkthrough-breakpoints-manager-07-recreate"></a>
### 07 · 重新创建本轮断点

[视频 00:17](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=17.647) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![07 · 重新创建本轮断点](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-07-recreate.png)

<a id="walkthrough-breakpoints-manager-08-manager"></a>
### 08 · 打开断点管理器

[视频 00:20](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=20.701) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![08 · 打开断点管理器](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-08-manager.png)

<a id="walkthrough-breakpoints-manager-09-global-off"></a>
### 09 · 关闭全局Break on match

[视频 00:23](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=23.751) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![09 · 关闭全局Break on match](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-09-global-off.png)

<a id="walkthrough-breakpoints-manager-10-close-manager"></a>
### 10 · 关闭管理器

[视频 00:26](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=26.753) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![10 · 关闭管理器](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-10-close-manager.png)

<a id="walkthrough-breakpoints-manager-11-not-paused"></a>
### 11 · 确认全局关闭时不暂停新请求

[视频 00:30](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=30.102) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![11 · 确认全局关闭时不暂停新请求](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-11-not-paused.png)

<a id="walkthrough-breakpoints-manager-12-manager-again"></a>
### 12 · 再次打开管理器

[视频 00:33](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=33.097) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![12 · 再次打开管理器](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-12-manager-again.png)

<a id="walkthrough-breakpoints-manager-13-global-on"></a>
### 13 · 重新开启Break on match

[视频 00:36](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=36.097) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![13 · 重新开启Break on match](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-13-global-on.png)

<a id="walkthrough-breakpoints-manager-14-close-manager"></a>
### 14 · 回到请求列表

[视频 00:39](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=39.154) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![14 · 回到请求列表](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-14-close-manager.png)

<a id="walkthrough-breakpoints-manager-15-abort-pending"></a>
### 15 · 发送会由客户端取消的请求

[视频 00:42](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=42.451) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![15 · 发送会由客户端取消的请求](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-15-abort-pending.png)

<a id="walkthrough-breakpoints-manager-16-select-pending"></a>
### 16 · 查看这个Head等待项

[视频 00:45](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=45.396) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![16 · 查看这个Head等待项](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-16-select-pending.png)

<a id="walkthrough-breakpoints-manager-17-client-abort"></a>
### 17 · 客户端结束后等待项自动解除

[视频 00:48](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=48.397) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![17 · 客户端结束后等待项自动解除](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-17-client-abort.png)

<a id="walkthrough-breakpoints-manager-18-new-wait"></a>
### 18 · 重新发送得到新的等待项

[视频 00:51](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=51.394) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![18 · 重新发送得到新的等待项](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-18-new-wait.png)

<a id="walkthrough-breakpoints-manager-19-continue-request"></a>
### 19 · 原样放行请求阶段

[视频 00:54](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=54.496) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![19 · 原样放行请求阶段](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-19-continue-request.png)

<a id="walkthrough-breakpoints-manager-20-continue-response"></a>
### 20 · 原样放行响应阶段

[视频 00:57](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=57.783) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![20 · 原样放行响应阶段](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-20-continue-response.png)

<a id="walkthrough-breakpoints-manager-21-rule-manager"></a>
### 21 · 打开管理器停用单条规则

[视频 01:00](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=60.987) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![21 · 打开管理器停用单条规则](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-21-rule-manager.png)

<a id="walkthrough-breakpoints-manager-22-rule-off"></a>
### 22 · 只停用本轮Endpoint规则

[视频 01:03](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=63.953) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![22 · 只停用本轮Endpoint规则](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-22-rule-off.png)

<a id="walkthrough-breakpoints-manager-23-close-manager"></a>
### 23 · 返回列表检查停用结果

[视频 01:06](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=66.945) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![23 · 返回列表检查停用结果](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-23-close-manager.png)

<a id="walkthrough-breakpoints-manager-24-rule-disabled"></a>
### 24 · 新请求不再被该规则挂起

[视频 01:10](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=70.212) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![24 · 新请求不再被该规则挂起](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-24-rule-disabled.png)

<a id="walkthrough-breakpoints-manager-25-open-rule"></a>
### 25 · 从管理器进入对应Rules

[视频 01:13](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager.mp4#t=73.147) · [返回本节视频](#walkthrough-breakpoints-manager-video)

![25 · 从管理器进入对应Rules](../media/v0.1.1-alpha.1/breakpoints-manager/breakpoints-manager-25-open-rule.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:breakpoints-manager:end -->

<!-- recorded-walkthrough:breakpoints-websocket-controls:start -->
<a id="walkthrough-breakpoints-websocket-controls"></a>
## 逐步骤实操：Both、空Text、Ping/Pong与关闭码修改

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>path</code> | <code>/guide/websocket-controls</code> |
| <code>originalMessage</code> | <code>guide-before-empty</code> |
| <code>replacement</code> | <code>empty Text produces an empty WebSocket message</code> |
| <code>directions</code> | <code>Both for message and ping/pong; Sent only for close</code> |
| <code>ping</code> | <code>guide-ping</code> |
| <code>afterDisabled</code> | <code>guide-unpaused is delivered without any pending item</code> |
| <code>originalClose</code> | <code>1000, guide-close</code> |
| <code>forwardedClose</code> | <code>1001, guide-close</code> |
| <code>clientAcknowledgement</code> | <code>The client-side close acknowledgement is 1000; do not equate both connection directions</code> |

<a id="walkthrough-breakpoints-websocket-controls-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4" poster="../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-01-connect.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.vtt" default>
</video>

<a id="walkthrough-breakpoints-websocket-controls-01-connect"></a>
### 01 · 建立控制帧演示连接

[视频 00:00](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=0.475) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![01 · 建立控制帧演示连接](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-01-connect.png)

<a id="walkthrough-breakpoints-websocket-controls-02-select"></a>
### 02 · 选中本轮连接

[视频 00:03](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=3.388) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![02 · 选中本轮连接](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-02-select.png)

<a id="walkthrough-breakpoints-websocket-controls-03-messages"></a>
### 03 · 打开Messages

[视频 00:06](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=6.430) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![03 · 打开Messages](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-03-messages.png)

<a id="walkthrough-breakpoints-websocket-controls-04-setup"></a>
### 04 · 打开连接断点设置

[视频 00:09](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=9.375) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![04 · 打开连接断点设置](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-04-setup.png)

<a id="walkthrough-breakpoints-websocket-controls-05-both"></a>
### 05 · 选择Both方向

[视频 00:12](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=12.326) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![05 · 选择Both方向](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-05-both.png)

<a id="walkthrough-breakpoints-websocket-controls-06-ping"></a>
### 06 · 增加ping帧

[视频 00:15](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=15.225) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![06 · 增加ping帧](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-06-ping.png)

<a id="walkthrough-breakpoints-websocket-controls-07-pong"></a>
### 07 · 增加pong帧

[视频 00:18](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=18.178) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![07 · 增加pong帧](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-07-pong.png)

<a id="walkthrough-breakpoints-websocket-controls-08-enable"></a>
### 08 · 启用Both消息与ping/pong

[视频 00:21](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=21.224) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![08 · 启用Both消息与ping/pong](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-08-enable.png)

<a id="walkthrough-breakpoints-websocket-controls-09-text"></a>
### 09 · 发送非空消息并暂停

[视频 00:24](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=24.175) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![09 · 发送非空消息并暂停](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-09-text.png)

<a id="walkthrough-breakpoints-websocket-controls-10-empty-mode"></a>
### 10 · 选择Text替换

[视频 00:27](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=27.325) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![10 · 选择Text替换](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-10-empty-mode.png)

<a id="walkthrough-breakpoints-websocket-controls-11-empty-value"></a>
### 11 · 明确填写空Text

[视频 00:30](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=30.334) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![11 · 明确填写空Text](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-11-empty-value.png)

<a id="walkthrough-breakpoints-websocket-controls-12-empty-forward"></a>
### 12 · 发送空消息而不是保留原文

[视频 00:33](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=33.264) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![12 · 发送空消息而不是保留原文](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-12-empty-forward.png)

<a id="walkthrough-breakpoints-websocket-controls-13-empty-echo"></a>
### 13 · 放行Both中的返回方向

[视频 00:36](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=36.281) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![13 · 放行Both中的返回方向](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-13-empty-echo.png)

<a id="walkthrough-breakpoints-websocket-controls-14-send-ping"></a>
### 14 · 发送guide-ping并暂停

[视频 00:39](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=39.279) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![14 · 发送guide-ping并暂停](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-14-send-ping.png)

<a id="walkthrough-breakpoints-websocket-controls-15-continue-ping"></a>
### 15 · 原样放行ping

[视频 00:42](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=42.381) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![15 · 原样放行ping](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-15-continue-ping.png)

<a id="walkthrough-breakpoints-websocket-controls-16-continue-pong"></a>
### 16 · 原样放行返回pong

[视频 00:45](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=45.479) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![16 · 原样放行返回pong](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-16-continue-pong.png)

<a id="walkthrough-breakpoints-websocket-controls-17-disable-both"></a>
### 17 · 停用本轮Both设置

[视频 00:48](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=48.480) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![17 · 停用本轮Both设置](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-17-disable-both.png)

<a id="walkthrough-breakpoints-websocket-controls-18-close-setup"></a>
### 18 · 重新打开连接设置

[视频 00:51](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=51.430) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![18 · 重新打开连接设置](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-18-close-setup.png)

<a id="walkthrough-breakpoints-websocket-controls-19-close-sent"></a>
### 19 · 关闭演示只选择Sent

[视频 00:54](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=54.389) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![19 · 关闭演示只选择Sent](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-19-close-sent.png)

<a id="walkthrough-breakpoints-websocket-controls-20-message-off"></a>
### 20 · 不再暂停message

[视频 00:57](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=57.343) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![20 · 不再暂停message](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-20-message-off.png)

<a id="walkthrough-breakpoints-websocket-controls-20-ping-off"></a>
### 21 · 不再暂停ping

[视频 01:00](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=60.330) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![21 · 不再暂停ping](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-20-ping-off.png)

<a id="walkthrough-breakpoints-websocket-controls-20-pong-off"></a>
### 22 · 不再暂停pong

[视频 01:03](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=63.283) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![22 · 不再暂停pong](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-20-pong-off.png)

<a id="walkthrough-breakpoints-websocket-controls-21-close-on"></a>
### 23 · 选择close控制帧

[视频 01:06](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=66.230) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![23 · 选择close控制帧](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-21-close-on.png)

<a id="walkthrough-breakpoints-websocket-controls-22-enable-close"></a>
### 24 · 启用Sent close断点

[视频 01:09](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=69.233) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![24 · 启用Sent close断点](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-22-enable-close.png)

<a id="walkthrough-breakpoints-websocket-controls-23-close-request"></a>
### 25 · 客户端请求以1000关闭

[视频 01:12](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=72.183) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![25 · 客户端请求以1000关闭](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-23-close-request.png)

<a id="walkthrough-breakpoints-websocket-controls-24-close-code"></a>
### 26 · 只将关闭码改为1001

[视频 01:15](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=75.279) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![26 · 只将关闭码改为1001](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-24-close-code.png)

<a id="walkthrough-breakpoints-websocket-controls-25-close-forward"></a>
### 27 · 核对源站修改和客户端实际关闭确认

[视频 01:18](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls.mp4#t=78.282) · [返回本节视频](#walkthrough-breakpoints-websocket-controls-video)

![27 · 核对源站修改和客户端实际关闭确认](../media/v0.1.1-alpha.1/breakpoints-websocket-controls/breakpoints-websocket-controls-25-close-forward.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:breakpoints-websocket-controls:end -->

<!-- recorded-walkthrough:breakpoints-request-variants:start -->
<a id="walkthrough-breakpoints-request-variants"></a>
## 请求Header、空Text、File与响应状态

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>ruleName</code> | <code>Guide request variants</code> |
| <code>path</code> | <code>/guide/request-variants</code> |
| <code>originalRequest</code> | <code>{&quot;message&quot;:&quot;guide-original-request&quot;}</code> |
| <code>requestHeader</code> | <code>x-guide-request: header-only</code> |
| <code>jsonFile</code> | <code>guide-request.json</code> |
| <code>jsonFileBody</code> | <code>{&quot;message&quot;:&quot;guide-file-request&quot;,&quot;count&quot;:2}</code> |
| <code>binaryFile</code> | <code>guide-request.bin</code> |
| <code>binaryHex</code> | <code>00010203feff</code> |
| <code>responseStatus</code> | <code>202</code> |
| <code>retainedResponseBody</code> | <code>{&quot;message&quot;:&quot;guide-origin-response&quot;}</code> |
| <code>binaryPreview</code> | <code>The release shows file metadata without a text preview; forwarding still sends all six bytes</code> |
| <code>httpSnapshot</code> | <code>HTTP suspension is at the head stage; Capture may independently provide a readable original preview</code> |
| <code>source</code> | <code>Both replacement files are generated by this workflow’s real Save body</code> |

<a id="walkthrough-breakpoints-request-variants-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4" poster="../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-01-source.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.vtt" default>
</video>

<a id="walkthrough-breakpoints-request-variants-json-01-source"></a>
### 01 · 获取公开json源文件正文

[视频 00:00](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=0.490) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![01 · 获取公开json源文件正文](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-01-source.png)

<a id="walkthrough-breakpoints-request-variants-json-02-select"></a>
### 02 · 选择源响应

[视频 00:03](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=3.511) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![02 · 选择源响应](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-02-select.png)

<a id="walkthrough-breakpoints-request-variants-json-03-save"></a>
### 03 · 由产品保存guide-request.json

[视频 00:16](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=16.651) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![03 · 由产品保存guide-request.json](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-03-save.png)

<a id="walkthrough-breakpoints-request-variants-json-04-saved"></a>
### 04 · 核对实际保存的原始字节

[视频 00:20](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=20.915) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![04 · 核对实际保存的原始字节](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-04-saved.png)

<a id="walkthrough-breakpoints-request-variants-binary-01-source"></a>
### 05 · 获取公开binary源文件正文

[视频 00:23](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=23.886) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![05 · 获取公开binary源文件正文](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-01-source.png)

<a id="walkthrough-breakpoints-request-variants-binary-02-select"></a>
### 06 · 选择源响应

[视频 00:26](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=26.863) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![06 · 选择源响应](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-02-select.png)

<a id="walkthrough-breakpoints-request-variants-binary-03-save"></a>
### 07 · 由产品保存guide-request.bin

[视频 00:38](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=38.951) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![07 · 由产品保存guide-request.bin](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-03-save.png)

<a id="walkthrough-breakpoints-request-variants-binary-04-saved"></a>
### 08 · 核对实际保存的原始字节

[视频 00:43](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=43.230) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![08 · 核对实际保存的原始字节](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-04-saved.png)

<a id="walkthrough-breakpoints-request-variants-header-01-pending"></a>
### 09 · 发送并选中Header-only等待项

[视频 00:46](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=46.200) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![09 · 发送并选中Header-only等待项](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-01-pending.png)

<a id="walkthrough-breakpoints-request-variants-header-02-off"></a>
### 10 · 明确保持Body Off

[视频 00:49](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=49.408) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![10 · 明确保持Body Off](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-02-off.png)

<a id="walkthrough-breakpoints-request-variants-header-03-add"></a>
### 11 · 添加请求Header行

[视频 00:52](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=52.448) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![11 · 添加请求Header行](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-03-add.png)

<a id="walkthrough-breakpoints-request-variants-header-04-name"></a>
### 12 · 填写x-guide-request

[视频 00:55](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=55.477) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![12 · 填写x-guide-request](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-04-name.png)

<a id="walkthrough-breakpoints-request-variants-header-05-value"></a>
### 13 · 填写header-only

[视频 00:58](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=58.477) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![13 · 填写header-only](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-05-value.png)

<a id="walkthrough-breakpoints-request-variants-header-06-forward"></a>
### 14 · Forward edited后原正文不变

[视频 01:01](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=61.481) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![14 · Forward edited后原正文不变](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-header-06-forward.png)

<a id="walkthrough-breakpoints-request-variants-empty-01-pending"></a>
### 15 · 发送空Text示例

[视频 01:04](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=64.558) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![15 · 发送空Text示例](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-empty-01-pending.png)

<a id="walkthrough-breakpoints-request-variants-empty-02-text"></a>
### 16 · 选择Text但不填写替换

[视频 01:07](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=67.719) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![16 · 选择Text但不填写替换](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-empty-02-text.png)

<a id="walkthrough-breakpoints-request-variants-empty-03-forward"></a>
### 17 · 核对HTTP头阶段空Text保持原正文

[视频 01:10](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=70.774) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![17 · 核对HTTP头阶段空Text保持原正文](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-empty-03-forward.png)

<a id="walkthrough-breakpoints-request-variants-json-file-01-pending"></a>
### 18 · 发送本次File等待请求

[视频 01:13](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=73.838) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![18 · 发送本次File等待请求](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-01-pending.png)

<a id="walkthrough-breakpoints-request-variants-json-file-02-mode"></a>
### 19 · 选择File替换

[视频 01:17](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=77.055) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![19 · 选择File替换](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-02-mode.png)

<a id="walkthrough-breakpoints-request-variants-json-file-03-open"></a>
### 20 · 选择刚保存的guide-request.json

[视频 01:27](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=87.088) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![20 · 选择刚保存的guide-request.json](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-03-open.png)

<a id="walkthrough-breakpoints-request-variants-json-file-04-preview"></a>
### 21 · 检查实际选择的文件

[视频 01:31](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=91.388) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![21 · 检查实际选择的文件](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-04-preview.png)

<a id="walkthrough-breakpoints-request-variants-json-file-05-forward"></a>
### 22 · 核对源站收到完整文件字节

[视频 01:34](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=94.481) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![22 · 核对源站收到完整文件字节](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-json-file-05-forward.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-01-pending"></a>
### 23 · 发送本次File等待请求

[视频 01:37](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=97.549) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![23 · 发送本次File等待请求](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-01-pending.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-02-mode"></a>
### 24 · 选择File替换

[视频 01:40](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=100.723) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![24 · 选择File替换](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-02-mode.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-03-open"></a>
### 25 · 选择刚保存的guide-request.bin

[视频 01:50](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=110.493) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![25 · 选择刚保存的guide-request.bin](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-03-open.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-04-preview"></a>
### 26 · 检查实际选择的文件

[视频 01:54](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=114.814) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![26 · 检查实际选择的文件](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-04-preview.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-04a-type"></a>
### 27 · 明确将Content-Type改为二进制

[视频 01:57](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=117.846) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![27 · 明确将Content-Type改为二进制](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-04a-type.png)

<a id="walkthrough-breakpoints-request-variants-binary-file-05-forward"></a>
### 28 · 核对源站收到完整文件字节

[视频 02:00](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=120.843) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![28 · 核对源站收到完整文件字节](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-binary-file-05-forward.png)

<a id="walkthrough-breakpoints-request-variants-status-01-rule"></a>
### 29 · 返回同一规则

[视频 02:03](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=123.932) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![29 · 返回同一规则](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-01-rule.png)

<a id="walkthrough-breakpoints-request-variants-status-02-phase"></a>
### 30 · 切换到响应阶段

[视频 02:07](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=127.060) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![30 · 切换到响应阶段](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-02-phase.png)

<a id="walkthrough-breakpoints-request-variants-status-03-apply"></a>
### 31 · Apply响应阶段

[视频 02:10](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=130.459) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![31 · Apply响应阶段](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-03-apply.png)

<a id="walkthrough-breakpoints-request-variants-status-04-capture"></a>
### 32 · 返回Capture

[视频 02:13](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=133.522) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![32 · 返回Capture](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-04-capture.png)

<a id="walkthrough-breakpoints-request-variants-status-05-pending"></a>
### 33 · 发送并等待源站响应头

[视频 02:16](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=136.619) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![33 · 发送并等待源站响应头](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-05-pending.png)

<a id="walkthrough-breakpoints-request-variants-status-06-code"></a>
### 34 · 将响应状态改为202

[视频 02:20](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=140.315) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![34 · 将响应状态改为202](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-06-code.png)

<a id="walkthrough-breakpoints-request-variants-status-07-forward"></a>
### 35 · 核对状态改变而响应正文保持

[视频 02:23](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=143.962) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![35 · 核对状态改变而响应正文保持](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-status-07-forward.png)

<a id="walkthrough-breakpoints-request-variants-finish-01-rule"></a>
### 36 · 返回规则收尾

[视频 02:27](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=147.102) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![36 · 返回规则收尾](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-finish-01-rule.png)

<a id="walkthrough-breakpoints-request-variants-finish-02-disable"></a>
### 37 · 停用本轮规则

[视频 02:30](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=150.190) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![37 · 停用本轮规则](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-finish-02-disable.png)

<a id="walkthrough-breakpoints-request-variants-finish-03-apply"></a>
### 38 · Apply停用状态

[视频 02:33](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants.mp4#t=153.211) · [返回本节视频](#walkthrough-breakpoints-request-variants-video)

![38 · Apply停用状态](../media/v0.1.1-alpha.1/breakpoints-request-variants/breakpoints-request-variants-finish-03-apply.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:breakpoints-request-variants:end -->

<!-- recorded-walkthrough:breakpoints-mixed-queues:start -->
<a id="walkthrough-breakpoints-mixed-queues"></a>
## 逐步骤实操：混合队列、Upgrade实际行为与持等待退出

以下图片和视频来自已发布的 <code>0.1.1-alpha.1</code>、macOS x64，App保持<code>zh-CN</code>。每个步骤都有对应原生窗口截图，可点击查看原尺寸。

本机地址、端口和生成ID来自这次真实录制，不是公开服务；使用时替换成自己的已授权测试环境。下面先列本次实际数据，再按相同顺序操作。未出现在本段录像中的进阶分支仍待逐步配图与验收。


| 示例字段 | 录制中的实际值 |
| --- | --- |
| <code>requestPath</code> | <code>/guide/mixed/request-head</code> |
| <code>responsePath</code> | <code>/guide/mixed/response-queued</code> |
| <code>upgradePath</code> | <code>/guide/mixed/upgrade-queued</code> |
| <code>livePath</code> | <code>/guide/mixed/live</code> |
| <code>exitPath</code> | <code>/guide/mixed/request-exit</code> |
| <code>originalBody</code> | <code>{&quot;message&quot;:&quot;guide-original-http&quot;}</code> |
| <code>unsentDraft</code> | <code>{&quot;message&quot;:&quot;guide-unsubmitted-draft&quot;}</code> |
| <code>firstFrame</code> | <code>guide-ws-head</code> |
| <code>secondFrame</code> | <code>guide-ws-queued</code> |
| <code>exitFrame</code> | <code>guide-ws-exit-must-not-forward</code> |
| <code>httpScope</code> | <code>Request and response waits share queueKey=http</code> |
| <code>upgradeBoundary</code> | <code>The released App established this real Upgrade without a pending item despite the configured narrow GET Rule; no queued Upgrade is claimed</code> |
| <code>wsScope</code> | <code>Established connection frames have a separate ws:* queue</code> |
| <code>closeImage</code> | <code>Before the actual Close; post-close cancellation and host restoration are separate evidence, not a desktop recording</code> |

<a id="walkthrough-breakpoints-mixed-queues-video"></a>

<video controls preload="metadata" playsinline lang="zh-CN" src="../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4" poster="../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-01-http-head.png">
<track kind="captions" srclang="zh-CN" label="Steps / 步骤" src="../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.vtt" default>
</video>

<a id="walkthrough-breakpoints-mixed-queues-01-http-head"></a>
### 01 · 发送HTTP请求成为队首

[视频 00:00](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=0.322) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![01 · 发送HTTP请求成为队首](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-01-http-head.png)

<a id="walkthrough-breakpoints-mixed-queues-02-response-queued"></a>
### 02 · 让响应进入同一HTTP队列

[视频 00:03](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=3.470) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![02 · 让响应进入同一HTTP队列](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-02-response-queued.png)

<a id="walkthrough-breakpoints-mixed-queues-03-upgrade-result"></a>
### 03 · 检查Upgrade实际建立连接而未排队

[视频 00:06](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=6.604) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![03 · 检查Upgrade实际建立连接而未排队](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-03-upgrade-result.png)

<a id="walkthrough-breakpoints-mixed-queues-04-live-connection"></a>
### 04 · 选择已经建立的WS连接

[视频 00:10](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=10.196) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![04 · 选择已经建立的WS连接](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-04-live-connection.png)

<a id="walkthrough-breakpoints-mixed-queues-05-ws-head"></a>
### 05 · 发送第一条WS帧成为独立队首

[视频 00:13](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=13.295) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![05 · 发送第一条WS帧成为独立队首](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-05-ws-head.png)

<a id="walkthrough-breakpoints-mixed-queues-06-ws-queued"></a>
### 06 · 源站帧进入同一WS队列

[视频 00:16](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=16.693) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![06 · 源站帧进入同一WS队列](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-06-ws-queued.png)

<a id="walkthrough-breakpoints-mixed-queues-07-http-draft"></a>
### 07 · 为HTTP队首填写但不提交草稿

[视频 00:19](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=19.923) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![07 · 为HTTP队首填写但不提交草稿](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-07-http-draft.png)

<a id="walkthrough-breakpoints-mixed-queues-08-inspect-response"></a>
### 08 · 选择排队响应，只读查看

[视频 00:23](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=23.929) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![08 · 选择排队响应，只读查看](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-08-inspect-response.png)

<a id="walkthrough-breakpoints-mixed-queues-09-inspect-upgrade"></a>
### 09 · 选择已建立的连接，不伪造Queued

[视频 00:27](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=27.156) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![09 · 选择已建立的连接，不伪造Queued](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-09-inspect-upgrade.png)

<a id="walkthrough-breakpoints-mixed-queues-10-http-menu"></a>
### 10 · 回到HTTP队首并打开批量菜单

[视频 00:30](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=30.953) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![10 · 回到HTTP队首并打开批量菜单](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-10-http-menu.png)

<a id="walkthrough-breakpoints-mixed-queues-11-continue-http"></a>
### 11 · 仅Continue HTTP队列，草稿不应用

[视频 00:34](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=34.339) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![11 · 仅Continue HTTP队列，草稿不应用](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-11-continue-http.png)

<a id="walkthrough-breakpoints-mixed-queues-12-ws-still-pending"></a>
### 12 · 回到WS确认等待项仍在

[视频 00:38](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=38.154) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![12 · 回到WS确认等待项仍在](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-12-ws-still-pending.png)

<a id="walkthrough-breakpoints-mixed-queues-13-drop-ws"></a>
### 13 · 仅Drop当前WS队列

[视频 00:41](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=41.534) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![13 · 仅Drop当前WS队列](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-13-drop-ws.png)

<a id="walkthrough-breakpoints-mixed-queues-14-exit-http"></a>
### 14 · 为退出场景挂起新HTTP请求

[视频 00:45](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=45.053) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![14 · 为退出场景挂起新HTTP请求](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-14-exit-http.png)

<a id="walkthrough-breakpoints-mixed-queues-15-exit-ws"></a>
### 15 · 同时保留一条WS等待项

[视频 00:48](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=48.126) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![15 · 同时保留一条WS等待项](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-15-exit-ws.png)

<a id="walkthrough-breakpoints-mixed-queues-16-before-close"></a>
### 16 · 记录真实Close之前的两条等待

[视频 00:51](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues.mp4#t=51.398) · [返回本节视频](#walkthrough-breakpoints-mixed-queues-video)

![16 · 记录真实Close之前的两条等待](../media/v0.1.1-alpha.1/breakpoints-mixed-queues/breakpoints-mixed-queues-16-before-close.png)

下面保留完整功能参考。只有已经附上真实步骤图、核对过变量和值的操作才能计入图文验收。
<!-- recorded-walkthrough:breakpoints-mixed-queues:end -->
