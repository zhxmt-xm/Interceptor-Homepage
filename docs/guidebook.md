# 使用指南内容与阅读页面

## 当前交付

- 唯一正文在 [guidebook/](../guidebook/README.md)，是普通 Markdown 目录，不分发 npm 包，不再维护 registry、PAT、草稿发布 tag 或跨仓库制品同步。
- 中英初稿均覆盖入门、工作区、Capture、Composer、Rules、Breakpoints、导入导出、Settings、Diagnostics、Agent、MCP、权限、Tool速查和排查；正文、章节名称和简介按语言加载，操作值与共同锚点保持一致。
- [功能覆盖关系](guidebook-coverage.md)逐组映射 workflow 到正文和锚点；这是内容覆盖，不是产品操作验收。
- 写作目标为 `v0.1.1-alpha.1` / `e55f1ed1`。代码与契约不一致时以核对后的实际产品行为写作，差异在覆盖文档说明；不能直接把测试说明转成产品能力承诺。
- 当前工作区已接入`/guide`与全部章节的本地阅读页面，入口按UI语言显示“使用指南”或“User Guide”，资源卡提供“阅读教程”。不再显示重复的“返回官网”控件。
- 使用React Router的`BrowserRouter / Routes / Link`完成站内导航，不以普通跨页`a`或自行封装History API代替客户端路由；语言、主题与站点外壳在切换时保留，两种正文分别标记实际语言与初稿边界。
- 先完成Homepage，再接App。已录范围使用真实发布App的步骤图、视频与字幕；未录分支仍明确标注，不能由部分素材推断全书完成。本轮没有创建App iframe、Preload或IPC，没有修改桌面App的运行依赖；公开上线与App接入仍未完成。

### 中间进度提交边界

用户已明确要求保存Interceptor与Homepage两个仓库的全部当前进度。Homepage首次提交包含首页基座、教程正文、阅读器、共用App/Header接线、依赖清单与lockfile，不提交缺少基座而无法构建的零散教程快照。

这是中间进度保存，不代表教程内容实机验收、真实媒体、App内嵌或公开上线已完成；后续修改影响既有验证结论时复跑对应检查。

本次继续保存以item 9为边界：官网Header、Ant Design与全站平滑滚动先由item 10独立提交至`0ee867b`，教程提交在该基线上保留`behavior: 'auto'`与构建生成的CSP。教程中英正文、已核对的逐步素材、阅读性能、录制workflow和剩余缺口一起保存；全局搜索只登记为Guidebook完成后的独立待办，本次不实现。

早期`8d39d29`与App交接`c67515ec`曾受Git HTTPS超时、SSH认证拒绝影响，现已随两个仓库的item 10推送同步；该历史网络阻塞不再作为当前待办，不修改remote或全局凭据。

## 内容组织

每个操作小节说明用途、平台与前提、实际操作顺序、可观察结果和限制。教程只使用用户可见的功能名称，不出现为了验收才需要的 fixture、automation ID、临时 profile 或测试输入生成步骤。

- 相似测试合并为用户场景，布局回归只转写为正常的滚动、分栏或选择行为。
- 敏感或破坏性操作先写前提与影响，不让用户为了学习删除日常 CA、清掉全部网络设置或操作个人流量。
- Rules、Breakpoints 与 Composer 的共同 Header/Body 语义由 [Rules 的消息编辑小节](../guidebook/zh-CN/rules.md#message-editing)统一解释，其他章节链接过去。
- 权限与 Tool 名称分别集中在 [tool-permissions.md](../guidebook/zh-CN/tool-permissions.md) 和 [tool-reference.md](../guidebook/zh-CN/tool-reference.md)，业务步骤由所属 feature 维护。
- 章节用目录内相对链接和稳定锚点互相引用；用户不用访问私有源码或本机绝对路径才能理解操作。
- 中文和英文分别维护完整正文，沿用同一示例数据与步骤顺序；英文不得只翻译站点外壳或缩写掉操作。接入前按真实Browser验证当前英文正文缺失，接入后逐章核对标题、步骤、链接和语言标记。

## Homepage 阅读页面

已提供目录、正文、资源卡片前后及手机效果，并按用户后续要求接入页面、翻译入口名称、使用客户端路由和去除重复返回入口。未接入、整页重载和多余返回入口的前置Red分别保留，不把设计预览当作真实阅读验证。

### 阅读流程契约

1. 顶栏按当前语言显示“使用指南”或“User Guide”，直接进入`/guide`并保留站点UI语言，不再跳转资源区；具体窄屏布局跟随Header所属改动验收。首页学习资源中的教程卡片继续提供“阅读教程”入口。
2. 目录按当前语言列出全部章节，每章进入`/guide/<chapter>`，显示对应中英Markdown正文而非复制的样章。
3. 文内相对Markdown链接转换为网站路由，章节锚点在点击、直接打开和刷新后均可定位，并避让固定Header。
4. 桌面显示章节导航和本章目录；教程不再添加“返回官网”之类重复入口，站点切换使用原Header。手机通过教程目录访问全部章节，代码块和表格在自身区域横向滚动，不能撑宽页面。
5. 主题继续使用现有System/Light/Dark；切English加载对应英文正文、目录和简介，正文标记`lang="en"`，中文仍为`lang="zh-CN"`。中英文使用共同的章节位置锚点，切换语言不丢失当前功能点；未取得步骤图与媒体验收的内容继续标为初稿。
6. 未知章节、子路径及不存在的静态资源返回真正404；不把全部路径回退到首页200。
7. 页面持续标注初稿、真实媒体和逐章实机验收缺口，不显示假图片、占位视频或App离线能力。
8. 站内入口、章节、文内链接和首页锚点通过客户端路由切换，不产生新的document请求；浏览器前进后退保持同一页面。只有首次访问、显式刷新或新标签页打开才请求对应HTML入口。
9. 同章锚点保留当前路径和查询参数。英文阅读器点击本章目录、重复定位或前进后退时仍保持`lang=en`，不因只更新hash而重置UI语言；锚点核对读取React Router生成的真实href，不能只检查已不存在的`href="#..."`写法。

- `/guide` 作为目录入口，`/guide/<chapter>` 对应章节，例如 `/guide/capture`；已有章节锚点对应具体功能点。
- 正常官网访问使用官网导航；App 的嵌入模式只呈现教程阅读区，移除营销页头、页脚和重复外壳。
- 根据明确参数选择语言、主题和章节，不接受任意待加载 URL；App 与官网的主题值不同，嵌入模式需要核对对应颜色，不用近似背景掩盖边界。
- 不用 iframe 边框、阴影、额外卡片边距或固定宽高造成“套了一个网页”的效果；保留正常滚动与键盘访问。
- App 计划另提供“在浏览器打开”按钮，打开当前对应章节；加载、网络失败、重试要明确，不把白屏当成功。
- 在线教程需要网络，不承诺缓存存在或离线可读。正式公开地址未确定，不写虚构 Cloudflare URL。
- 图片、链接、深链刷新、404、窄屏、语言、主题、加载失败和嵌入滚动要分别验证。UI 布局先提供截图确认，再实施。

### 渲染与静态入口

- [正文编译](../scripts/guide-content.ts)在Vite构建/开发服务端使用unified、remark/GFM和rehype完成Markdown解析、HTML清理、标题与目录生成。`hast-util-to-jsx-runtime`与React静态序列化也只在构建端运行；浏览器接收已净化的完整HTML及视频元数据，不在点击时复制HAST、解析Markdown或创建数千个React正文节点。显式锚点与自动标题仍使用不同命名空间。
- `GuideArticle`一次写入构建期净化的HTML，只有视频通过React portal挂载`GuideVideo`。HTML不来自用户输入、URL参数或远程业务响应；样式名与带hash的媒体URL在模块内绑定，并进行属性转义。图片原尺寸、原图链接、表格键盘滚动及原样式均保留；不隐藏正文、不引入另一套History API。`GuidePage`统一处理正文及大纲的普通站内点击，交给React Router；修饰键、新窗口、语言与历史保持。中英正文随阅读器首次载入，切章保留外壳，页内hash保持HTML和视频实例。
- 媒体地址由同一个Vite plugin生成单一清单，生产构建仍输出带内容hash的独立静态文件；开发环境不再为每张图片、视频和字幕分别import一个URL模块。生成的数据模块不携带无用的巨大内联sourcemap，Vite开发服务预热阅读器入口；Markdown与媒体变更仍会更新对应虚拟模块。
- 显式视频锚点与`<video>`之间保留空行，使`<track>`留在同一个HTML块并成为播放器子节点。验收要检查每段视频的字幕轨与cue已加载，不能只核对文件存在或影片能播放。
- 阅读器首次进入时可以加载代码与正文数据，但准备完成后，章节和语言切换不得再串行请求正文/脚本/样式，不得反复显示整页Loading。首页点击指南到目录完整绘制的本地目标为1000ms以内；开发环境也不能为每张图片、字幕或影片下载一个URL模块。图片保留原尺寸、懒加载并异步解码；视频距离可视区域600px以内才请求同源MP4、封面和字幕，不为切章下载整套媒体。
- Cloudflare本地静态Assets对视频Range请求返回完整200；直接URL的原生`preload=auto`即使缓冲完整，部分视频仍不能seek。`GuideVideo`只在600px近视区下载该段同源MP4，将完整Blob交给原生播放器并使用`preload=metadata`，不在尚未播放时自动增加解码工作；切章取消未完成下载并释放object URL。保留原文件入口、原生控制条与字幕，不增加Worker、远程服务或付费存储，失败显式提示。验收同时核对请求、完整可seek区间及末cue，不只检查metadata；不改其他会话维护的响应头。
- 章节标题和完整正文的首次可见提交按浏览器实际点击到两帧绘制测量，目标为本地生产产物300ms以内；切换保留章节外壳，页内锚点不重新解析整篇Markdown或重建播放器。不可只用Router地址已改变代替真实正文完成。
- 正文仍来自现有Markdown，不维护第二份产品文案；首次阅读器资源失败明确提示重试，Header导航仍可用。保留原URL深链、图片原尺寸、中英位置锚点与字幕，不因性能修复删减内容或隐藏错误。
- 初次访问和刷新使用构建时为已知路由生成的HTML入口，客户端仍是同一个SPA。Vite的`appType: mpa`仅用于禁用未知路径的全局HTML回退，不代表站内切换重新加载文档。
- 服务端只为已知路由提供入口，未知资源保持404；Cloudflare继续使用静态资源，不增加业务Worker或付费服务。

## iframe 与部署边界

- 官网仍只使用免费 Cloudflare 静态托管，不要求买域名、开付费视频服务或 China Network；不能保证默认域名在中国大陆稳定访问。
- 按用户最新确认，官网[响应头](../public/_headers)只保留静态资源缓存，不再发送CSP、`X-Frame-Options`或其他自定义安全头；网站层不再拒绝iframe嵌入。
- 此调整不改变App的`frame-src`或实现内嵌入口。App侧仍须结合实际教程地址接入、核对可信来源，并验证登录/会话、主题、语言、导航、滚动和失败提示；不能把普通浏览器iframe通过当作App真实E2E完成。
- iframe 不拥有 Electron、Node、Preload 或业务 IPC 权限，不接受来自网页的任意产品命令。
- 如果用消息同步主题、语言或当前章节，双方核对来源、窗口身份和数据结构；不传递凭据、捕获数据或本地路径。
- 下文保留的CSP、23个样式hash与`DENY`记录对应各自历史产物；当前官网响应头以[部署约定](deployment.md#http-与索引)为准，不改写既有验收事实。
- 实际 App 接入要另走对应的进程边界、E2E、打包及退出验证，不能拿本次 Markdown 检查或设计截图代替。

## 真实素材与逐 feature 视频

每个操作步骤必须有对应的真实步骤图，不再只对关键节点配图。文字、截图和视频使用同一套示例名称与输入值；缺图的步骤保持待验收，不能用占位图片、设计预览、虚构时间戳或workflow trace冒充教程交付。

- 每个操作步骤有稳定编号，正文紧邻放置对应截图；一段包含多个独立操作时先拆分，不用一张最终状态图代替全过程。
- 规则名、集合/请求名、变量名、Header/Query字段、URL、正文值和文件名按同一演示数据填写，并在实际界面中逐项核对。
- 视频按同一操作顺序录制，章节或时间戳指向这些步骤。不会一边讲`Guide request`、一边在图中显示不相关的`E2E request`。
- 动态端口、生成ID、时间等确实不能固定的值，以该次真实录制为准；文字说明实际值与读者环境可能不同，不伪造或修改产品截图里的值。
- 先在真实App执行并保存步骤图，再校正文案和翻译；中英文共用同一演示数据，App保持当前语言，不为截图临时切换。
- 使用原生授权或文件选择的步骤，也要显示对应真实原生窗口；拿不到该画面就明确保留该步骤缺口。
- 实际取得的演示小节紧邻操作放置步骤图，并提供本章视频、字幕和逐步时间戳；按原始录制清单核对所有图片/视频路径、输入值、版本和平台。完整功能说明中仍未配图的分支保留待验收，不因为增加一个入门演示就宣称整章完成。
- 素材在`guidebook/media/<version>/<chapter>/`保存，发布清单仅含公开版本、示例值、步骤时间和文件摘要，不含本机路径或凭据。`scripts/sync-guidebook-walkthroughs.mjs`从已核对清单生成中英图文区块，只同步明确指定的章节，遇已有人工小节或摘要不符就报错；不抓取或上传外部数据，不替代人工审图。
- 原生视频无麦克风，按具体App窗口隔离；普通窗口不包含的原生面板必须独立取景。视频与字幕仍是同源静态资源，不嵌入第三方播放器；教程媒体修复不改当前托管安全头设置，也不代表已完成App iframe接入。

| 章节 | 必需的真实操作节点 |
| --- | --- |
| 快速上手 / 工作区 | 平台安装前提、就绪提示、第一条请求、导航与正常退出 |
| Capture | 录制、筛选、正文模式、Original/Final、TLS tunnel、WS/gRPC、清理 |
| Composer | 方法/URL、Query/Header、Body/Auth、响应、Collection、原生导入导出 |
| Rules | 各类 matcher/action、Apply、命中、顺序、文件预览与冲突 |
| Breakpoints | 快捷创建与手工规则、HTTP/WS队列、编辑、批量、客户端结束 |
| 导入导出 | 范围/隐私、原生窗口、进度、取消、重新导入和完整正文 |
| Settings | 两平台原生前提、CA、解密/透传、上游模式、AppContainer、隐私和更新 |
| Diagnostics | 查询、分组详情、分页和JSONL保存 |
| Agent | 配置测试、Chat、模型切换、Context、Ask/Auto、Stop/Retry |
| MCP | endpoint、Client配置、真实Host发现/查询/审批、轮换/撤权 |
| 权限 / Tool速查 | 每类query/change的对应产品入口与实际作用范围 |
| 排查 | 典型真实错误与恢复结果，不人为修改个人环境制造故障 |

- 录制仅使用有权公开的自产数据，记录实际产品版本和平台，保持当前语言。
- 每个 feature 的视频与正文锚点对应，按实际剪辑结果填写时间戳并双向链接。
- 不录入 API Key、MCP配置凭据、CA私钥、个人流量或系统账号信息；截图也要检查这些边界。
- 真实图片取得后再加入教程媒体目录。原始录屏、trace 和日志不随官网公开；成片存放先核对免费限制。
- `144` 条契约的逐项映射和 `69` 个 Tool 的目录核对只能证明初稿有对应内容，不能替代功能点实际操作、图文视频一致性或两平台验收。

## 维护与验证

正文更新后检查相对链接、锚点、完整目录、Tool名称/类型、代码块和UTF-8。纯内容未接入构建时不运行与之无关的App测试，也不增加“测试的测试”。

阅读页面完成后，要从目录实际进入每章并验证深链和媒体；图文/视频取得实际版本操作与退出恢复证据后，才更新正式完成状态。英文、真实媒体、公开访问和App接入分别保留未完成范围。

### 阅读入口与长章节性能验证

- [前置Red](../artifacts/item9-navigation-performance/red/)保留未访问章节依赖额外下载、阅读外壳被替换的真实失败；[开发入口Red](../artifacts/item9-navigation-performance/entry-red/)确认还存在742个独立媒体地址模块请求。后续采样发现等待`html`属性的Locator断言会生成整页accessibility snapshot，给长页增加额外开销；[调用栈证据](../artifacts/item9-navigation-performance/runner-profile/)保留，最终改为等待页面已记录的绘制标记，不放宽1000ms/300ms门槛，也不把旧测量直接用于计算加速倍率。
- [开发入口检查](../artifacts/item9-navigation-performance/development-warmup-green/)通过：首次进入约495.6ms，脚本请求从765个降为25个，其中逐媒体地址模块请求为0。正文与媒体数据仍由真实Markdown及文件生成，没有删除章节、步骤或素材。
- [生产阅读性能](../artifacts/item9-navigation-performance/reader-green/)的4项性能用例通过：首次目录约428.4ms；未访问的Rules约225.8ms、Composer约153.7ms，重复Rules约148.2ms。每次测量要求正确标题、与源Markdown一致的完整二级标题数量及两次绘制帧，不只等待地址变化。首次就绪后阻断新脚本/正文/样式请求，仍可切章和切英文；页内定位保留文章与视频节点、已设置的播放位置，屏外视频不抢先下载，加载前后占位尺寸一致。
- lint、typecheck和构建通过；[相关站点回归](../artifacts/item9-navigation-performance/site-regression/)35项通过，覆盖全部中英章节、原图尺寸和实际解码、全部已发布影片字幕、播放、失败重试、浏览历史、深链、主题、手机布局、首页与公共Header调用。完整逐图/逐影片遍历的总体运行预算为90秒，单次导航性能门槛不变；早期30秒累计遍历超时不算产品Red，也没有通过抽样或跳过图片解决。
- 最终Header版本重建后，[本地静态托管重复验证](../artifacts/item9-navigation-performance/static-navigation-green/)8项通过：两轮首次进入分别为412.3ms、365.9ms，长章节切换为91.1–255.1ms，均保留阅读外壳。详细测量在[measurement记录](../artifacts/item9-navigation-performance/measurements.json)，这些是本地浏览器结果，不代表公网或低性能设备速度。
- [阅读区设计对比](../artifacts/item9-navigation-performance/visual/comparison.json)检查1600/390px、浅深主题。标题、简介、初稿标签/图标及可见选中章节的几何、字体和相同内容像素一致；初稿提示正文已因真实媒体接入而更新，与早期设计稿有明确文字和像素差异，差异图保留，不把整张页面描述为零差异，也没有修改设计基准掩盖它。
- [静态托管与报告核对](../artifacts/item9-navigation-performance/static-delivery/result.json)确认Wrangler直接使用本轮构建产物的`_headers`，实际响应与生成策略一致，包含23个精确style hash，无`unsafe-inline`，继续保留`DENY`。中英/浅深视频与字幕、语言/章节导航无CSP违规或页面异常，未知章节和媒体仍404；同一份离线HTML报告的图片、全部展开状态与1600/390px排版通过。没有用`public/_headers`覆盖生成产物，没有公开部署或放宽iframe保护。

### 本次中间进度保存核对

- [素材复核](../artifacts/item9-save-20261016/media-audit.json)逐文件确认31组影片、680张独立步骤图及字幕的SHA-256、字节数、PNG尺寸、双语引用和步骤时间。每组采用的影片都匹配已有真实录制文件，且对应`metadata.json`记录正常退出；未重录屏幕，也没有将失败片段、原始录屏或私有日志放入发布目录。最大素材约1.97MiB，仍低于25MiB单文件限制。
- Desktop typecheck通过；Homepage lint、typecheck和[独立构建](../artifacts/item9-save-20261016/build.log)通过。未更改App生产代码或runtime dependency，本次保存不重新打包，也不把静态检查当作新增App操作验收。
- 当前Header与平滑滚动组合下的[23项Browser复验](../artifacts/item9-save-20261016/browser.log)有21项通过：长章测量一次为302.2ms，超过300ms门槛；首页smooth轨迹一次只采到1个中间位置，未满足大于1的断言。两项失败与trace保留，未改写为通过。
- 不改代码、不放宽阈值，对长章和首页smooth/reduce进行[三轮独立复核](../artifacts/item9-save-20261016/timing-repeat.log)，9项通过。该结果说明本机可复现通过，不证明先前两次时序波动已被定位或消除；后续性能验收继续保留这项风险。全部章节、逐图解码、字幕播放、错误恢复、指南smooth/reduce等其余检查由首轮实际结果覆盖。

旧 tarball 和包 dry-run 材料仅代表已放弃方案的本地检查，不用于当前教程结论。普通仓库构建与部署命令保持不变。

### 响应证据与TLS透传补录

- `rules-response-evidence`来自真实发布App的55个连续步骤：`Guide response and body`只匹配`127.0.0.1`及`/guide/response-evidence`；响应`x-guide-list`先保留`one`并append `two`，再remove。请求正文从`guide-original`替换为`guide-final`，分别核对Original/Final、Copy、全屏、原生`guide-final.json`保存与效果标记导航；响应正文另改为`guide-response-final`并显示Original不可用，最终停用Apply后新请求恢复原文。有效[实录、trace及退出metadata](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/verified/rules-guidebook-response-e-af18e-nd-observable-body-versions-macos-guidebook/)保留。
- `settings-tls-passthrough`来自34个连续步骤，使用自有`localhost:63604`；端口是该录制的实际分配值。按Host搜索并在Tunnel核对端口，分别显示未解密CONNECT、已有CA下的HTTPS正文、精确透传项生效后的新Tunnel、从Tunnel定位并删除条目，以及新连接恢复HTTP正文。最后通过UI关闭本轮MITM并移除源站例外；[完整实录与退出metadata](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/tls-verified/)确认正常Close，不动日常CA及其信任。
- 两组素材使用明确对应的有效录制；[原始来源与摘要](../artifacts/item9-20261016/recording-sources.json)保留实际步骤与首次成片SHA-256，[当前素材审计](../artifacts/item9-20261016/media-audit.json)另核对尾部重编码后的影片出处。公开目录只包含原生图片、成片、双语字幕和去除本机路径的manifest，不包含失败片段、原始视频、日志或私有profile。复制、保存内容由真实剪贴板和产品输出文件核对，不以相似截图替代。
- 前面的失败分别来自把Response Headers标题当成内容容器、Fullscreen返回时鼠标仍停在Tooltip、以及把`host:port`当作搜索字段；原始输出与trace保留在同一私有证据目录。最终录制使用公开`aria-controls`、正常移开鼠标和实际Host/Path搜索，没有强制点击、隐藏Tooltip、修改产品或放宽阈值；这些失败不登记为产品前置Red。
- 中英正文、视频索引、Capture/Rules/Settings/Transfer交叉引用一并更新；Workspace与Transfer中已过期的Collection锁屏/预览取消缺口改为已有实录入口，不重录Collection。生成器的“只读设置/Manual与PAC未Apply”说明只用于原来的`settings`录制，不错误套用到真正修改TLS名单的新影片。
- [最终Browser结果](../artifacts/item9-20261016/final-browser-report.json)19项通过，无跳过，涵盖全部中英章节、字幕最后一步、错误恢复、深链、原图尺寸与阅读外壳；[实际性能值](../artifacts/item9-20261016/final-measurements.json)记录目录进入392.7ms、长章切换103.3–250.0ms，保持1000ms/300ms原门槛及同一阅读外壳。此前300ms临界风险仍保留，本次通过不代表时序波动已消除。未修改Renderer布局、设计基准、App产品代码或运行依赖，不重打包，不以本地阅读验证替代公开上线和App接入。
- [逐步媒体验收](../artifacts/item9-20261016/reader-accepted/result.json)在两种正文中分别核对全部55/34个新步骤：按稳定步骤锚点检查原图SHA-256、实际解码、声明尺寸、视频时间链接和cue数量，并实际播放。Vite可合并字节相同的图片地址，验收不把独立URL数误当步骤数，也不添加噪声制造“不同图片”。浅深主题、1600/390px共16个阅读状态、中文与英文跨章深链及document保留均通过；同一份离线报告的内嵌图片、全部展开、红框边界和宽窄屏排版通过。有效改前图使用保留的真实旧构建，未回滚源码或复制仓库。
- [实际容器时长核对](../artifacts/item9-20261016/clip-duration-before.json)发现ScreenCaptureKit会省略静止尾帧：多数影片少了录制中真实保留的阅读停顿，Transfer甚至在最后步骤字幕的起点前结束。这是媒体时间轴缺口，不把先前仅检查VTT存在/加载的结果解释为完整时间验收。32段受影响影片已从保留的真实原始录屏按实际停止时间重新编码；[重编码出处](../artifacts/item9-20261016/clip-normalization.json)包含原始录屏、旧成片及新成片摘要。原图、步骤、示例值和字幕起点不变，不重跑Collection，也不增加虚构画面或动作。
- 新增的影片末尾Browser断言先取得[真实Red](../artifacts/item9-20261016/caption-tail-red.log)：末字幕与容器结束相差2.634秒，超过20fps单帧及毫秒舍入范围。最终33组影片在两种正文中均检查最后字幕起点在影片内、终点与片长相符，并实际seek最后一步；不是只改manifest或放宽检查。每个当前公开文件的摘要及769张原图尺寸已复核，最大素材约1.99MiB，低于25MiB限制。
- 共用编码与清空搜索最初被macOS锁屏guard在启动前拦截，[受阻输出](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/codec-and-search.log)保留，不作为产品Red。用户解锁后，[真实Capture复验](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/codec-and-search-resumed-1421/)已通过：13步完整实录，先确认未筛选记录也只有四条自产请求，再清空搜索并保留四条记录与暂停状态，最后正常Close并核对宿主恢复。新成片37.70秒，与实际录制37.6526秒仅有20fps单帧舍入差，不再截掉最后的阅读停顿。
- Desktop typecheck、Homepage typecheck/build及本轮脚本/媒体清单/Browser测试的Biome检查通过。Vite仍提示大于500kB的chunk；全站Biome对原有大体积内嵌图片报告有文件大小警告，本轮没有放宽检查配置。报告另经真实Browser检查；网站代码或构建配置的其他会话修改保持原样，不纳入本轮产品或发布结论。
- [锁屏阶段环境检查](../artifacts/item9-20261016/final-environment.json)保留当时GUI状态及8888、4176/4178释放结果。当前锁屏阻塞已解除，不把该文件描述为现在仍无法录制；之前的临时服务与自有空目录已清理，原有4175预览保留，未停止其他会话服务。
- 锁屏期间完成的[全书链接核对](../artifacts/item9-20261016/full-book-links.json)覆盖30个中英目录/章节页面，均能找到目标章节及锚点，没有跨章丢失语言或页面异常。它不访问外部服务，不替代App实录；新Capture步骤接入后继续按实际正文复核，不以旧计数代表更新后的链接总数。

### 解锁后恢复录制复验

已在解锁后的真实发布App完成复验，结果见上述实录目录。以下保留复跑入口；保持App当前语言，不关闭guard或改成显示器录制。原受阻运行没有启动App，三组有效实录均正常退出，不需要额外手动恢复系统代理或日常CA。

```sh
cd /Users/zhxmt/Desktop/Interceptor/apps/desktop
INTERCEPTOR_GUIDE_RECORDER="$PWD/test-results/guidebook-media-20261016/guide-recorder" \
INTERCEPTOR_GUIDE_FFMPEG="/Users/zhxmt/.copilot/session-state/549e8dc8-bccd-40ee-9228-d5895e50551f/files/media-tools/imageio_ffmpeg/binaries/ffmpeg-macos-x86_64-v7.1" \
INTERCEPTOR_E2E_MACOS_APP_PATH="$PWD/test-results/guidebook-release-20261015/product/Interceptor.app" \
npm exec playwright test -- --config tests/e2e-workflow-tests/playwright.guidebook.config.ts \
  workflows/capture/guidebook-filters.workflow.ts --reporter=list \
  --output test-results/guidebook-media-20261016/codec-and-search-resumed
```

Capture筛选素材已换为本轮13步实录，中英正文对应缺图说明已移除。原32段尾部重编码证据保持历史原样，其中旧Capture筛选片段现由完整新录制替代；当前其余31段仍对应保留的原始录屏，图片总数为770，影片仍为33组。

- [新步骤媒体验收](../artifacts/item9-20261016/capture-filter-accepted/result.json)核对两种正文各13张原图的SHA-256、实际解码、尺寸、视频时间链接与字幕；实际播放最后一步，末字幕为34.751–37.653秒，成片37.70秒。浅深/1600与390px共8个阅读状态及同一离线报告的前后红框通过，原有App语言保持不变。
- [更新后的19项Browser](../artifacts/item9-20261016/capture-browser-report.json)全部通过、无跳过；[绘制测量](../artifacts/item9-20261016/capture-measurements.json)为目录进入457.2ms、长章104.0–257.4ms，保持原1000ms/300ms门槛和阅读外壳。它们是当前本地构建结果，不宣称已消除之前记录的时序波动。
- [全书链接](../artifacts/item9-20261016/full-book-links.json)更新为30个中英目录/章节页面、1838个教程链接，无缺失目标、语言丢失或页面异常；[全部素材审计](../artifacts/item9-20261016/media-audit.json)区分保留的重编码影片与新Capture实录，不把旧摘要错误套用于更新后的文件。
- [恢复后的最终环境](../artifacts/item9-20261016/capture-final-environment.json)确认本轮App进程已退出、正常销毁通过，8888与4186可重新绑定；临时验证服务已停止，原有4175教程预览仍可访问。没有重新录制Collection或变更日常CA。

本轮的锁屏阻塞与录制器待E2E已解除；其他尚未录制的分组与功能分支、Windows、隔离CA、实际外部Host/凭据、公开访问和App接入仍分别保留，不将整项登记完成。

### 连续补录与本地阅读验收

- 剩余可执行操作继续使用同一下载Release与独立原生窗口录制。Capture检查/分组/协议/长消息、大正文、导出范围与取消，Rules目录/匹配/响应/冲突/改道，断点管理/HTTP变体/WebSocket控制帧，工作区/认证，上游/隐私/实际更新检查，Diagnostics历史/过滤，以及Agent会话/Tool/完整只读权限、MCP审批/撤销/新地址重连均已有有效来源；公开接入与正文同步仍以[来源清单](../artifacts/item9-20261016/recording-sources.json)及后续全媒体审计为准，不以生成文件存在代替workflow通过。
- 更新检查实际终态为`failed`，没有下载或安装；Agent仍是明确标注的无Key本地模型，MCP是本地官方SDK调用方。商业模型、真实外部Host、Windows与隔离CA前提不在这些实录中。
- 新长章暴露了[原门槛失败](../artifacts/item9-20261016/reader-native-playback.log)：首次Rules超过300ms、原生视频不可seek、reduced-motion大纲定位没有滚动。正文之外的`GuideOutline`必须与正文共享同一导航入口，不能只修文章内链接；`GuidePage`现在统一处理普通点击，保留修饰键、新窗口、语言、历史与重复hash。
- 本地Wrangler对MP4的Range请求返回完整200响应。实测原生`preload="auto"`即使`buffered=[0,74.8]`、`readyState=4`，`seekable`仍为`[0,0]`，设置72秒后仍在0秒；只有metadata/时长通过不能算可播放验收。现在只对进入600px预加载范围的单段影片执行可取消的下载，把完整Blob交给原生播放器；切章释放object URL，下载或解码失败显示明确错误和原文件入口，不添加Worker、不改静态托管或响应头。
- [播放器与大纲对应复验](../artifacts/item9-20261016/reader-buffered-playback.log)通过当时影片末字幕seek、播放、普通/减少动态效果定位等22项，但长章仍超过原300ms门槛。减少空白节点、改成原生链接、复用正文、提前生成JSX均未完整解决；无收益的预热缓存与正文复用方案已删除，不保留第二条渲染路径。
- 最终改为构建期净化的完整HTML与独立React视频。[早期局部导航验证](../artifacts/item9-20261016/static-article-navigation.json)取得4项通过，但扩充正文后的整组仍出现超限，历史结果不覆盖后续变更。[早期HAST的trace关闭对照](../artifacts/item9-20261016/measurement-trace-off.json)仍超过300ms，说明最初确有产品渲染成本，不能只改变采样配置就宣称解决。
- [原样式核对](../artifacts/item9-20261016/native-html-parity-controlled/comparison.json)在1600/390px、浅深主题分别检查4846个元素，几何、实际已加载字体及图片过滤/缩放/边框等样式无差异；12个截图状态的正文、控件和图片之外像素均一致。部分原图区域存在浏览器重采样差异，同一未修改版本重拍也出现相同差异，记录保留；不宣称整张PNG零差异，不改原图、设计基准或CSS补偿它。
- 静态HTML的构建使用浅层字符串数组，避免超长二元拼接表达式触发本机构建器的`Illegal instruction`；[原失败](../artifacts/item9-20261016/build-static-article.log)与[修正后的构建](../artifacts/item9-20261016/build-static-article-array.log)分别保留，没有修改第三方依赖。
- 当前源码为61段视频、1610个录制步骤，目录已补齐全部影片入口。Agent重启片段因背景流量不发布；只展示Settings/Chat的补录在App启动前遇到锁屏，见[实际阻塞](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/agent-restart-private-view/)。其余明确未录App分支待解锁；Windows、隔离CA、WPAD、外部Host与更新下载/安装分别保留前提，不以这些本地结果代替。
- 性能测量始终等待正确标题、完整二级标题数量和两次绘制帧；不隐藏正文、不放宽1000ms/300ms门槛。共享主机存在其他高CPU进程，保留实际失败，不终止其他会话的进程来获得数字。

### 当前整书结果与恢复入口

- [最终Browser](../artifacts/item9-20261016/verified-book-browser.json)26项通过、无跳过，覆盖全部中英正文、原图声明与实际解码、61段影片在两种语言中的字幕末步与实际seek、失败入口、历史、深链、主题/窄屏、smooth/reduce及Cloudflare本地静态托管。当前产物为[独立构建](../artifacts/item9-20261016/site-verified-reader/)，没有公开部署。
- [最终绘制指标](../artifacts/item9-20261016/final-reader-measurements.json)为首次目录309.5ms、完整长章127.0–271.2ms，保持原1000ms/300ms门槛。`guide-navigation.test.ts`的性能组明确关闭trace DOM快照，保留测量JSON与失败截图；其余功能测试仍使用原trace配置。[当前实现的开trace](../artifacts/item9-20261016/isolated-browser-timing.json)与[关trace对照](../artifacts/item9-20261016/isolated-trace-off.json)显示采样会竞争渲染时间，不能把工具快照成本算作产品绘制。没有关闭测试、降低完整正文断言、放宽容差或隐藏内容。
- [浏览器详细trace](../artifacts/item9-20261016/browser-render-detailed-summary.json)同时保留实际布局和HitTest开销。`contain`、语言同步、预热缓存、首帧占位与`isolation`尝试没有作为最终实现保留；`isolation`虽有几何不变结果，却改变桌面文字栅格，因此已撤回，没有改字体或像素阈值掩盖它。
- [全章几何](../artifacts/item9-20261016/full-guide-geometry.json)覆盖中英30页、浅深主题、1600/390px的120个状态；最终[12态像素与字体核对](../artifacts/item9-20261016/final-pixel-parity/comparison.json)每态核对4859个元素，没有几何/字体/样式差异，非原图区域像素一致。原图区域的重采样波动在同一未改版本对照中也出现，原始差异保留，不称整张PNG零差异。最终JS/CSS与`site-final-metadata`基准端摘要一致；所有实验性样式和App语言同步改动均已移除。
- [全媒体审计](../artifacts/item9-20261016/media-audit.json)核对61段视频、1610张独立步骤图、1732个素材文件、SHA-256、真实来源、字幕时间、原生尺寸及录制进程退出；需更新的影片已完整解码。最大素材为3,118,042字节，低于25MiB。macOS的`.DS_Store`不在媒体清单或构建资源中，审计只显式排除这一系统目录元数据，没有删除用户文件或忽略未知素材。
- [全书链接](../artifacts/item9-20261016/full-book-links.json)检查30页、3846个站内教程链接，没有缺失目标、语言变化或页面异常。中英目录覆盖全部61个影片入口；[同一份离线报告](../commit-changes/202610141539_ui_homepage_initial-progress.html)与主仓库报告的内嵌图、红框、全部展开和宽窄屏排版见[报告检查](../artifacts/item9-20261016/final-report/acceptance.json)。
- Homepage lint/typecheck/build及Desktop、Playground typecheck通过；lint只保留原大HTML报告超出默认扫描大小的警告。Desktop正式产品代码、依赖与下载App未修改；录制辅助不进入发布产物，本轮不以重新打包代替真实流程。
- [最终环境](../artifacts/item9-20261016/final-environment.json)确认8888及本轮4187–4190临时服务端口已释放；原有4175预览保留，并实际显示新增完整目录、无页面异常。本次受阻重录未启动App，没有新的系统代理或CA修改；已接受片段的正常退出与宿主恢复仍以各自metadata为准。
- 先前[锁屏拒绝](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/agent-restart-private-view/)保留，不记为产品Red。用户解锁后已实际完成Agent安全重启取景与Composer专用Tool流程，见下节；没有绕过guard，也没有公开旧片含背景Capture流量的前段。
- 仍需按实际用户场景补齐窗口控件和特定退出等待、Collection深字段重启与原生文件Tool、Composer其余响应边界，以及断点混合队列/持等待退出。普通目录操作、已录控制帧或内部并发穷举不重复拍摄。首次授权/隔离CA、Windows、WPAD、商业模型/外部Host和实际更新安装缺各自前提；App入口与公开部署仍按原约定暂停。整项不标完成、不提交未验范围。
- Agent配置重测已在原`agent-management`实录的`02-edit`、`03-retest`、`04-save-edit`覆盖：Model ID变成`guide-two-edited`后Save禁用，重新Test后保存。中英排查章节原来的“未录制”提示已纠正，复用同一真实原图，不再把这项列入补录清单，也不把Model ID变化扩大为凭据或Base URL变化。
- [Composer专用录制代码](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/composer/guidebook-tools.workflow.ts)先经过Desktop typecheck和Playwright `--list`，解锁后再取得真实运行与媒体。MCP发送Deny/Allow、调用方201结果与当前UI响应分离、按真实revision替换并通知UI均由真实产品操作核对；参数与范围来自产品保存数据，不预造Collection。完整步骤与数据约定见[对应规格](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/docs/composer.md)。
  - 这条新workflow包含在Desktop的`tests/**/*.ts`类型检查范围内，另通过新文件空白检查。Root未配置Biome；误用同名npm包的命令不计格式检查通过。该命令新建的临时npx目录与空`.biome`目录已按创建时间确认并清理，依赖清单和项目配置没有变化，不为验收新增工具。

以下两条已顺序运行通过，产物保留在`prepared-unlocked`。不要直接复跑覆盖这个目录；后续运行必须另取输出目录。`--max-failures=0`让独立流程继续执行，不把失败视为通过：

```sh
INTERCEPTOR_GUIDE_RECORDER="$PWD/apps/desktop/test-results/guidebook-media-20261016/guide-recorder" \
INTERCEPTOR_GUIDE_FFMPEG="/Users/zhxmt/.copilot/session-state/549e8dc8-bccd-40ee-9228-d5895e50551f/files/media-tools/imageio_ffmpeg/binaries/ffmpeg-macos-x86_64-v7.1" \
INTERCEPTOR_E2E_MACOS_APP_PATH="$PWD/apps/desktop/test-results/guidebook-release-20261015/product/Interceptor.app" \
npm exec --workspace @interceptor/desktop playwright test -- \
  --config tests/e2e-workflow-tests/playwright.guidebook.config.ts \
  workflows/agent/guidebook-session-lifecycle.workflow.ts \
  workflows/composer/guidebook-tools.workflow.ts \
  --max-failures=0 --reporter=list \
  --output "$PWD/apps/desktop/test-results/guidebook-media-20261016/prepared-unlocked"
```

### 解锁后的真实补录与媒体接入

- [Agent两代App](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/prepared-unlocked/agent-guidebook-session-li-6c1a1-tart-and-last-model-removal-macos-guidebook/)通过：第一代15步，第二代6步。重启段从Settings/Agent开始取景，实际回载两个保留Chat、确认运行中删除的Chat不存在、模型请求零重放，再删除最后模型；画面不再显示Capture背景流量。公开的`agent-session-lifecycle`已同步为同一轮第一代素材，避免把不同轮次的端口/历史拼成同一过程；旧来源摘要另存于[原来源记录](../artifacts/item9-20261016/previous-agent-lifecycle-source.json)。
- [Composer Tool实录](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/prepared-unlocked/composer-guidebook-tools.w-439f3-iven-Collection-replacement-macos-guidebook/)通过22步：先UI保存并Send得到`guide-ui-response`，再对独立POST依次Deny/Allow，真实源站和调用方核对201及`guide-tool-response`；UI响应保持原值。Collection读取保留真实身份，Deny不写入，Allow把revision从4改为5并自动更新名称，网络总计只有UI与Tool两次发送。
- 三代App均记录`gracefulDestroyVerified=true`、`abruptDestroyVerified=false`。Composer Main为8102、Core为8157；退出后实际确认8888释放，才将真实App/原生输入独占窗口交给item10截图会话。对方使用独立`homepage-media-20261017`目录，并已回告正常Close、宿主恢复与8888释放后交回，不附着或强制关闭对方App。
- 新重启片与Composer片已接入中英和目录，当前为64段影片、1641个步骤图，其中包含一个明确标注的7.3秒原生节选。[更新后的Browser](../artifacts/item9-20261016/unlocked-64-browser.json)26项通过、无跳过，全部64段在中英页面中的字幕与末步播放均核对；[新构建](../artifacts/item9-20261016/site-unlocked-64/)来自这次完整内容，不复用旧产物冒充。
- [当前媒体审计](../artifacts/item9-20261016/media-audit.json)核对64段、1641张图、1769个素材及原片/节选来源、正常退出和完整解码；[当前链接](../artifacts/item9-20261016/full-book-links.json)为30页3926条，缺失目标、语言变化和页面异常均为零。[绘制测量](../artifacts/item9-20261016/unlocked-reader-measurements.json)为目录328.3ms、长章104.7–297.5ms，原门槛不变；最高值接近300ms，保留共享主机波动风险，不宣传所有设备都稳定达到该延迟。
- 原有[Homepage离线报告](../commit-changes/202610141539_ui_homepage_initial-progress.html)仅更新`guidebook-final-reading-change`标记区块。写入前检查文件未被并发修改，标记外内容逐字节保持，`homepage-real-media-20261017`及既有item10区块完整保留；[离线检查](../artifacts/item9-20261016/final-report/acceptance-64.json)确认76张内嵌图、无折叠、对应红框与1600/390px排版正常。没有覆盖或借用item10另一次65项验证结论。
- `agent-model-removal`是旧成功录制的12.050–19.302秒连续安全尾段，不是新的E2E执行。[原片摘要、剪辑范围和所有帧拼图](../artifacts/item9-20261016/model-removal-excerpt/)保留；逐帧均为Settings/Agent，三个PNG字节不改，原生操作与停顿不重建。字幕只换算相对时间；首步是片段开始时已可见的配置，不冒充打开Settings或重启操作。[8个中英/主题/尺寸阅读状态](../artifacts/item9-20261016/model-removal-excerpt/reader-acceptance.json)已实际播放末字幕。新完整重启片使用后来独立补录的来源，不是这个旧节选的父文件。
- 生成器现在自动保留节选说明；“只演示单项权限、不是完整只读”的警告只适用于原`tool-permissions`基础片，不再错误套用到111步完整只读配置和其重启片。新流程没有为辅助代码新增unit/integration“测试的测试”。
- item10完成独立截图并交回后，已通过类型检查的[窗口控件补录](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/application/guidebook-window-controls.workflow.ts)在[启动前再次遇到锁屏](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/window-controls-20261017/)，没有启动App。没有获得临时防休眠断言授权，因此不改系统设置、不绕过guard；其余已取得的实录结果仍有效。
- [深层请求字段持久化流程](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/composer/guidebook-request-persistence.workflow.ts)也已准备并通过Desktop typecheck与`--list`，但没有实际运行。它用已通过UI建立的三级目录作为前提，不重复目录管理；第一代录完整代表字段并保存，第二代在Composer内回载、逐字段核对后只Send一次，再清理公开演示Auth。不能把这条代码准备增加到已验收影片或E2E数量中。
- [Composer响应格式化边界](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/composer/guidebook-response-formatting.workflow.ts)已准备并通过Desktop typecheck与`--list`，补HTML/JavaScript自动格式化、XML原文保留、2MiB预览限制和文档视图恢复，尚未实际运行。仅用真实UI和自有HTTP响应，不造导入文件，不重复已有CSS手动Format。
- [Collection文件Tool录制](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/composer/guidebook-file-tools.workflow.ts)已准备并通过Desktop typecheck与`--list`，覆盖Ask Export/Import、真实Save/Open取消、预览取消/追加及Auto仍须确认。所有导入均使用本流程先由产品Export生成的同一文件，确认后保留原节点并检查新身份，没有业务Store注入。尚未实际运行，因此当前64段/1641图计数不变。
- 对下一批窗口/持久化流程执行了最多10分钟的只读等待：只有屏幕未锁定且8888空闲时才会交给原workflow guard。等待结束仍未满足条件，未启动App、未使用防休眠断言、未改变系统策略；不把等待或代码准备算作实录通过。

### 本机剩余用户流程的实际补录

- 继续只读等待后，桌面恢复可用，批次才进入原guard；没有修改锁屏/休眠策略。首批窗口检查遇到Release未提供的CDP `Browser.getWindowForTarget`；改用本轮PID与启动身份限定的原生Accessibility尺寸/`AXMinimized`后，[窗口控件](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/window-controls-native/)通过。最大化、还原和最小化均真实点击；最小化按钮图在点击之前，工具恢复同一窗口仅供后续检查，不冒充Dock录像。
- 首批文件Tool遇到App不在前景、原生面板未被辅助代码发现，正常Close因仍待原生选择而未完成，guard保留App与监听。随后只激活本轮App并用真实Escape取消面板，原退出继续完成，所有原PID、8888和journal均释放；[独立恢复记录](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/next-batch-unlocked/composer-guidebook-file-to-cc199-mation-for-actual-MCP-Tools-macos-guidebook/manual-recovery.json)保留，原失败metadata不改写为通过。辅助代码改为先按PID/启动身份激活所属App，再寻找/取消原生面板；[文件Tool重跑](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/file-tools-foreground/)29步通过，正常Close和宿主恢复通过。
- [深字段真实重启](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/composer-final-boundaries/composer-guidebook-request-f45cd--generations-without-replay-macos-guidebook/)两代App通过：第一段12步保存代表性完整请求，第二段11步回载原三层目录/身份、方法/协议、Header启停、Query、JSON和公开演示Auth，只在重启后Send一次检验真实字节。没有重填或重放。两代各自正常退出，第二代证据为`composer-reopened`。
- [响应格式化](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/formatting-real-semantics/)22步通过：HTML换行、JavaScript格式化空格、XML失败保留原文、精确2MiB预览/禁用Format和原文档视图恢复。此前错误要求短JavaScript也必须换行的失败保留，不修改发布App或伪造格式化结果。
- [混合队列与持等待Close](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/mixed-queues-directions/)16步通过：HTTP request/response共用队列，双向WS另有独立队列；Continue HTTP不提交草稿或释放WS，Drop WS不转发两方向内容；最后带HTTP/WS等待正常Close，客户端取消且内容未抵达目标，全部进程/监听和宿主恢复通过。
- 该Release的实测限制单列：配置的狭窄GET Rule没有把Upgrade挂进HTTP队列，连接实际完成；同向第二条WS读取受前一帧背压影响，不能用两个Sent帧假造两个pending。指南按实际Upgrade结果与Sent/Received队列书写，保留失败原证据，不改产品或把设计契约当成已经实现。
- 上述六段有效媒体已逐图检查并接入中英，当前为70段影片、1736个步骤图，含前述明确标注的原生安全节选。每段都指向真正通过的输出目录；失败原片不发布。[最终Browser](../artifacts/item9-20261016/final70-browser.json)26项通过、无跳过；[媒体审计](../artifacts/item9-20261016/media-audit.json)核对1876个素材、全部来源与对应退出，最大文件仍为3,118,042字节；[链接](../artifacts/item9-20261016/full-book-links.json)为30页4158条，无缺失、语言变化或页面错误。
- [最终测量](../artifacts/item9-20261016/final70-measurements.json)目录首次进入281.1ms、完整长章102.2–247.2ms，仍使用原1000ms/300ms与完整内容断言。计时排除工具DOM快照竞争，功能场景继续保留trace；这些结果属于70段的[独立构建](../artifacts/item9-20261016/site-final70/)，不改写item10或旧快照的结论。Homepage lint/typecheck/build和Desktop typecheck通过。
- 两份既有离线报告只更新item9标记区块，标记外内容逐字节保留；[报告检查](../artifacts/item9-20261016/final-report/acceptance-70.json)确认原首页素材区块、全部内嵌图片、红框、展开状态及宽窄屏排版保留。未创建新报告或独立报告commit。
- 默认`dist`已重建，[1728个文件与70段Green快照逐字节一致](../artifacts/item9-20261016/default-dist-final70.json)，不能再引用此前item10/64段快照的文件数。[最终环境记录](../artifacts/item9-20261016/final70-environment.json)确认本轮录制进程退出、8888释放与journal不存在；没有强杀保留的App或直接覆盖系统代理，原失败metadata和独立恢复记录保留。
- 本机无需新增权限的窗口、数据/协议、重启与文件用户流程已具备相应实录。本机以外的Windows/AppContainer/UAC、隔离首次CA、办公网络WPAD、商业凭据/实际外部Host及更新安装仍缺前提；原App入口/iframe继续按既有约定暂停。这些边界不以未验证图片、设计稿、重复操作或本机结果填补，item9仍不整体标完成。

## 本机交付与后续任务边界

用户已授权将原item 9的未完成范围独立记为item 16，并提交当前两仓所有改动。本机图文/影片与阅读器按既有真实证据保存；Windows、隔离环境、外部服务及App入口不因此变成已验证。部署与访问控制继续属于item 15，后续用户流程须在自己的环境重新验收。

<!-- original-item9-handover-archive -->
### 原item 9的移交记录

以下保留拆分前Handover的原事实、链接、命令和风险，早期“当前/下一步”只对应当时阶段。现在的未完成范围以Handover item 16为准；本段不重新打开已完成的本机步骤，也不覆盖本文后续更完整的验证记录。

- **9. 完整 Guidebook 与逐 feature Guide Video · 进行中 · 连续补齐剩余可执行分支，不按单批次收尾**
  - 目标：提供一本面向用户的完整 guidebook 和每个 feature 对应的 guide video，让用户不必阅读大量 workflow，也能按步骤掌握每个功能点。
  - 范围：以[功能设计](../../Interceptor/architecture/features)、[workflow 规格索引](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/docs/README.md)和[workflow 源码](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows)核对完整功能目录，逐 feature、逐功能点建立对应关系；相似测试归纳为用户场景，不照搬测试脚本、fixture 或验收日志。
  - 交付：每个功能点写清使用目的、适用平台与前提、简单直接的操作步骤、预期结果和关键说明；按用户补充要求，每个操作步骤都配对应真实步骤图，不能只截关键节点。变量名、规则/请求/文件名及输入值与实际操作和视频一致，动态端口/ID明确说明。每个feature提供对应视频，按步骤分章节或时间戳，与guidebook相互链接；缺图步骤不能算完成。
  - 当前：用户要求先写完整教程、先完成Homepage，再接入App；唯一[教程目录](../guidebook/README.md)已整理为普通Markdown目录，含快速上手、工作区、Capture、Composer、Rules、Breakpoints、导入导出、Settings、Diagnostics、Agent、MCP、权限、Tool速查与排查中文初稿。[覆盖关系](guidebook-coverage.md)逐组链接到正文及功能点锚点；已按源码区分Capture快捷断点立即Apply、普通规则草稿、Collection自动保存和Agent当前Chat模型等行为。
  - 已核对范围：[内容检查](../artifacts/guidebook-content-20261014.json)覆盖正文映射与UTF-8；当前阅读器的lint/typecheck、静态构建及[整站Browser](../artifacts/guide-reader-20261014/site-green)通过，覆盖中英入口、真实正文、同一document切换、前进后退、刷新、手机/主题与404。已修复本章锚点删除`lang=en`导致UI回到中文的问题，[前置Red](../artifacts/guide-reader-20261014/anchor-red)与[教程Green](../artifacts/guide-reader-20261014/guide-green)保留；验证使用独立构建目录，避免并行重建`dist/`造成临时资源404。
  - 页面与托管核对：[浅深/手机阅读区对比](../artifacts/guide-reader-20261014/visual/comparison.json)的标题、简介、初稿提示与可见章节选中态几何、字体和像素一致；全文及独立维护的Header不伪装成缩略设计fixture。[Cloudflare本地Browser](../artifacts/guide-reader-20261014/cloudflare-green)与静态发布dry-run通过，该轮保留了当时的frame保护、无业务Worker/绑定。以上不证明当前响应头、公开地址、App接入、英文正文或真实产品媒体验收。
  - 页面实现：[官网阅读器](../src/features/guide)与中英Markdown已接入首页和Header，“使用指南 / User Guide”可进入真实章节；不再把旧的“准备中”卡片描述为当前实现。[早期候选源码](../../Interceptor/design-vite/src/features/HomepageGuidePreview)随本仓库保留，[目录效果](../../../.copilot/session-state/549e8dc8-bccd-40ee-9228-d5895e50551f/files/homepage-guide-proposal/light/homepage-guide/overview.png)与[交互核对](../../../.copilot/session-state/549e8dc8-bccd-40ee-9228-d5895e50551f/files/homepage-guide-interaction/result.json)只说明候选，不能替代官网或App验收。
  - 组织与构建：按用户明确要求保存两个仓库全部当前进度，Homepage首次快照包含共享入口、依赖与lockfile，避免提交无法构建的孤立教程目录；本仓库保存设计候选。仍不发布教程npm包、不向App同步目录或压缩包、不增加私有registry认证，未部署网站或接入App。
  - 本次保存边界：用户授权保存item 9的中间进度，教程正文、公开素材、阅读器、验收工具、改动说明与剩余缺口一起保存。item 10的Header、Ant Design与平滑滚动已有独立提交，保留其`behavior: 'auto'`和生成CSP，不重复收录或回写；item 13只登记后续搜索需求，不提前实现。
  - 已确认方向：Homepage提供对应教程路由，完成后App使用无边框iframe内嵌，并提供浏览器打开按钮；嵌入模式去掉官网外壳、与App主题/语言衔接，保持滚动并明确加载失败。现在暂停App入口和预览实现；官网及App的具体UI仍须截图确认，不承诺离线阅读。官网只用免费Cloudflare，不要求购买域名或启用付费服务。
  - 当前步骤：已核对alpha.1发布ZIP摘要，并使用该下载App完成可执行实录；[录制来源](../../Interceptor/apps/desktop/test-results/guidebook-release-20261015/release-source.json)保留。中英正文已接入对应图、视频、字幕与共同锚点，首页有真实视频索引。首页进入指南及大章节切换已改为Vite端编译正文、单一媒体地址清单、保留阅读外壳和按视区加载影片；阅读行为、逐图字幕、主题窄屏及最终Header的静态托管检查已取得适用结果，继续核对剩余图文视频缺口。实现位于[阅读器](../src/features/guide)与[正文编译](../scripts/guide-content.ts)，验证范围、初稿提示的设计文案差异和剩余缺口集中记录在[阅读约定](guidebook.md#阅读入口与长章节性能验证)，整项不标完成。[原生录制工具](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/fixtures/ui/guidebook-media.ts)仅为验收，不进入产品。
  - 素材边界：已录片段保持App语言和公开示例值；Agent为无Key本地演示模型，MCP为本地SDK调用方，不冒充商业模型或真实Host。原生文件面板已独立取景，选择演示目录后切列表视图，避免显示父目录文件；断点响应/File、队列批量、双向文本帧已取得[实机证据](../../Interceptor/apps/desktop/test-results/guidebook-media-20261015/breakpoints-verification.json)。普通窗口灰色遮罩不作为面板素材。
  - 录屏隐私约束：用户明确只允许App窗口及其相关原生面板，不录整个显示器、桌面或其他应用。录制器按本轮Main进程查找唯一窗口ID，使用单窗口过滤；原生Open/Save只取本轮App拥有的面板，选定公开演示目录后才取景。不得改用全屏、显示器或桌面区域录制作为回退。
  - 配图与环境边界：Collection的目录边界、目录内请求切换、排序、原生文件预览取消与删除已实录，并接入中英正文，不重跑该流程；[实际Collection与退出证据](../../Interceptor/apps/desktop/test-results/guidebook-media-20261015/collection-resumed)、[正文/全影片字幕核对](../artifacts/item9-20261015/collection-and-captions-green)保留。桌面解锁后已完成Agent安全重启取景与Composer专用Tool的[真实流程及正常退出](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/prepared-unlocked)；后续窗口补录又遇到锁屏，拒绝证据保持原样，不算产品Red。Windows、首次CA隔离环境、实际外部Host和真实服务凭据仍缺，不动日常CA。
  - 当前验证风险：[保存核对](guidebook.md#本次中间进度保存核对)保留本机长章绘制临界值和首页smooth采样的一次失败，以及不改代码、不放宽阈值的后续通过结果；时序波动原因未定位，不能宣称已经消除。该次保存没有重跑App录制；本轮适用的新证据单独记录，不把typecheck或网站Browser结果替代缺失的真实步骤。
  - 已发布行为限制：alpha.1删除Rules最后一条后保留dirty状态，但空树不提供Apply入口；[实际失败](../../Interceptor/apps/desktop/test-results/guidebook-media-20261015/gaps-repaired)保留，不能把删除持久化或相应步骤配图标完成。产品修复授权尚未取得，本item只如实说明该限制，继续录制其余已存在行为，不增加备用规则、隐藏API或修改发布包来绕过。
  - 当前续做：[响应Header与正文证据](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/rules/guidebook-response-evidence.workflow.ts)、[TLS透传往返](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/settings/guidebook-tls-passthrough.workflow.ts)及[Capture搜索清空](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/capture/guidebook-filters.workflow.ts)均取得真实发布App操作与正常退出恢复，素材及中英正文已同步。共用编码修正已通过真实录制，不再保留本轮锁屏阻塞；更新后的原图字节、字幕最后一步、深链、主题窄屏、原阅读门槛与同一份离线报告均已核对，见[补录与验收说明](guidebook.md#响应证据与tls透传补录)。不重录Collection、不把这些结果扩展为其他未录分支通过；未改产品或日常CA，整项仍待剩余图文视频与整体媒体验收。
  - 当前推进：已核对的Capture、Rules、断点、工作区/Composer、Settings/Diagnostics和Agent/MCP实录均已接入中英；目录漏链、旧缺图说明、示例边界和同一份离线报告已同步。[当前整书结果](guidebook.md#当前整书结果与恢复入口)记录全部媒体、站内导航、字幕末步、主题窄屏及退出来源的适用范围。未修补发布App、未录桌面或其他应用、不重跑已验收Collection；App入口、公开访问与未录分支不随本地阅读验证一并关项。
  - 当前阅读实现：Vite端净化并序列化完整HTML，浏览器一次解析，影片仍由React与原生播放器负责；近视区单段Blob解决静态服务器无Range时无法seek的问题，切章取消下载并释放URL。正文与大纲共享导航，布局/字体/滚动策略保持。计时组排除DOM快照采样竞争，保留原完整正文与绘制门槛、测量JSON和失败截图；功能用例继续保留trace。所有失败与已撤回的试验见上述阅读约定，不把工具采样成本或一次局部通过当作最终产品结论。
  - 当前状态与下一步：本机可执行的窗口控件、Collection完整代表字段跨重启与原生文件Tool、Composer响应格式化边界、HTTP/WS混合队列及持等待正常Close均已取得真实App结果并接入中英；新增后的整书媒体、字幕、导航、原性能门槛和同一份报告也已复验，见[当前结果](guidebook.md#本机剩余用户流程的实际补录)。下一步需要Windows/AppContainer/UAC、隔离首次CA、WPAD、外部Host/商业凭据及实际更新安装的对应环境；App入口/iframe仍按原约定暂停。本机结果不能替代这些缺口，不擅自缩范围关项或提交未验范围。
    - [Composer专用流程](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/workflows/composer/guidebook-tools.workflow.ts)已实际核对发送的Deny/Allow、调用方返回与UI响应分离，以及按真实request ID/revision替换并通知UI；[规格和出处](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/docs/composer.md)已更新，不再只是typecheck/注册状态。
    - Agent的Model ID修改、验证失效与重新Test/Save已有原生实录；中英排查章节的旧缺图提示已改为原图，不再安排重复录制。重启前后素材已统一为本轮安全取景来源，旧片背景流量不公开；原安全尾段节选仍明确标注独立出处，凭据变化不由这些无Key演示代替。
    - item10已交回真实App/8888窗口，其独立素材和报告区块完整保留。只读等待在桌面可用后已自动启动，不再留后台等待任务；没有使用防休眠断言或改锁屏策略。
    - 首次文件Tool失败时，guard正确保留尚未恢复的本轮App；已激活该App并真实取消其Save面板，让原正常Close继续，未强杀。所有本轮PID、8888与journal已释放，原失败metadata不改成passed；[独立恢复证据](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/next-batch-unlocked/composer-guidebook-file-to-cc199-mation-for-actual-MCP-Tools-macos-guidebook/manual-recovery.json)保留。
    - [文件Tool](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/file-tools-foreground)修正为按PID/启动身份激活原生面板所属App后通过；[深字段两代](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/composer-final-boundaries)与[响应格式化](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/formatting-real-semantics)分别使用对应有效来源，失败片段不发布。JavaScript格式化可仅增加空格，不强求短函数换行。
    - [窗口控件](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/window-controls-native)改用原生Accessibility尺寸/最小化状态，不使用Release不提供的CDP Browser方法。[混合队列与正常退出](../../Interceptor/apps/desktop/test-results/guidebook-media-20261016/mixed-queues-directions)已核对request/response、双向WS与退出不转发；该Release受测Upgrade直接连通、同向帧有背压，按实录写明，不为教程修补产品或伪造排队状态。
  - 下一步：按[内容与页面约定](guidebook.md)持续逐章操作、逐步骤配图并核对feature视频；官网地址就绪后才处理App iframe及浏览器跳转。当前本地阅读页面为`http://127.0.0.1:4175/guide`，停止后在Homepage执行`npm run dev`恢复。涉及item8的未验证场景保留限制；官网响应头按用户最新确认清理，但App端仍须单独接入可信教程来源，不向远程页面开放Preload或业务IPC。
  - 验收：所有 feature 和功能点均可从目录找到图文步骤及对应视频章节；按教程在真实 App 中完成操作，文字、截图、视频和发布版本一致；演示使用可公开的测试数据，不包含凭据、个人流量或其他敏感信息。
