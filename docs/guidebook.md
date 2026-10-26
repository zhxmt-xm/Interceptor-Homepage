# 使用指南内容与阅读页面

## 内容职责

- [guidebook/](../guidebook/README.md)是中英文教程正文的唯一来源，普通Markdown与PNG随Homepage静态构建发布。
- Homepage负责目录、章节阅读、搜索、图片预览与App嵌入模式；App只加载固定的官方在线入口。
- [功能覆盖关系](guidebook-coverage.md)把workflow契约对应到正文和锚点，只表示内容归属。未完成任务、验证缺口与阻塞统一放在Interceptor的[Handover](../../Interceptor/architecture/HANDOVER.md)。
- 教程使用alpha App的真实行为。图片来源manifest记录具体版本、平台、语言与步骤；不能把源码存在、图片数量或其他平台结果作为操作验收。

## 内容组织

每个操作小节沿用快速上手的普通编号图文：先交代操作所需环境，再按顺序写清点击位置、输入值和操作后需要检查的状态，图片紧跟对应步骤。教程只使用用户可见的功能名称，不出现为了验收才需要的 fixture、automation ID、临时 profile 或测试输入生成步骤。

- 阅读页只保留App操作相关内容：用途、所需环境、步骤、输入值、结果、排查和恢复。目录、侧栏、正文、首页教程入口与页面摘要不展示初稿、写作版本、素材制作、验收进度、发布或App接入计划；职责与操作方法留在本文件和覆盖关系，未完成任务只在Interceptor的Handover维护。
- 不再使用“用途 / 前提 / 步骤 / 预期结果 / 关键说明”等模板标签或“编号标题 + 原图”的独立图册。重复操作只保留有说明的正文；补充功能写成完整编号流程，中英步骤与同源图片一致。原有功能和步骤锚点随对应操作保留，不因整理正文断开站内链接。
- 相似测试合并为用户场景，布局回归只转写为正常的滚动、分栏或选择行为。
- 敏感或破坏性操作先写前提与影响，不让用户为了学习删除日常 CA、清掉全部网络设置或操作个人流量。
- Rules、Breakpoints 与 Composer 的共同 Header/Body 语义由 [Rules 的消息编辑小节](../guidebook/zh-CN/rules.md#message-editing)统一解释，其他章节链接过去。
- 权限与 Tool 名称分别集中在 [tool-permissions.md](../guidebook/zh-CN/tool-permissions.md) 和 [tool-reference.md](../guidebook/zh-CN/tool-reference.md)，业务步骤由所属 feature 维护。
- 章节用目录内相对链接和稳定锚点互相引用；用户不用访问私有源码或本机绝对路径才能理解操作。
- 中文和英文分别维护完整正文，沿用同一示例数据与步骤顺序；英文不得只翻译站点外壳或缩写掉操作。逐章核对标题、步骤、链接和语言标记。

## Homepage阅读页面

- 中文目录为`/guide`，英文目录为`/en/guide`；章节使用对应语言路径和稳定锚点。
- React Router负责站内切换、历史与深链，切章保留网站外壳、主题和语言。首次访问与刷新由已知路由的静态HTML承载，未知路径保持404。
- 阅读页提供章节目录、本章导航、全局搜索与原页大图预览；窄屏保留正文导航和正常滚动。
- 共享`ImagePreview`负责缩放、拖动、关闭与焦点恢复；Escape、遮罩或关闭按钮退出，历史切换时收起预览。

### 渲染与静态入口

- [正文编译](../scripts/guide-content.ts)在Vite构建/开发服务端使用unified、remark/GFM和rehype完成Markdown解析、HTML清理、标题与目录生成。`hast-util-to-jsx-runtime`与React静态序列化也只在构建端运行；浏览器接收已净化的完整HTML，不在点击时复制HAST、解析Markdown或创建数千个React正文节点。显式锚点与自动标题仍使用不同命名空间。
- `GuideArticle`一次写入构建期净化的HTML，不再维护播放器、portal或视频状态。HTML不来自用户输入、URL参数或远程业务响应；样式名与带hash的图片URL在模块内绑定，并进行属性转义。图片原尺寸、原图链接、表格键盘滚动及原样式均保留；`GuidePage`统一处理正文及大纲的普通站内点击，交给React Router。中英正文随阅读器首次载入，切章保留外壳，页内hash保持HTML和图片节点。
- 图片地址由同一个Vite plugin生成单一清单，仅收集PNG/WebP，生产构建输出带内容hash的独立静态文件；开发环境不为每张图片分别import一个URL模块。数据模块不携带巨大的内联sourcemap，Markdown与图片变更更新对应虚拟模块。
- 阅读器首次进入时可以加载代码与正文数据，但准备完成后，章节和语言切换不得再串行请求正文/脚本/样式，不得反复显示整页Loading。首页点击指南到目录完整绘制的本地目标为1000ms以内；图片保留原尺寸、懒加载并异步解码，不为切章下载整套图片。
- 章节标题和完整正文的首次可见提交按浏览器实际点击到两帧绘制测量，目标为本地生产产物300ms以内；页内锚点不重新解析整篇Markdown或替换当前图片节点。不可只用Router地址已改变代替真实正文完成。
- 正文仍来自现有Markdown，不维护第二份文案；首次阅读器资源失败明确提示重试，Header导航仍可用。保留图文深链、原图及中英位置锚点；旧视频时间入口已删除，站内引用统一指向图文小节。
- 初次访问和刷新使用构建时为已知路由生成的HTML入口，客户端仍是同一个SPA。Vite的`appType: mpa`仅用于禁用未知路径的全局HTML回退，不代表站内切换重新加载文档。
- 服务端只为已知路由提供入口，未知资源保持404；Cloudflare继续使用静态资源，不增加业务Worker或付费服务。

## 教程全局搜索

搜索由现有Markdown编译器与阅读器共同提供，索引和正文一起加载。索引覆盖当前语言的完整教程。

- 桌面入口位于教程侧栏标题下，手机入口位于正文导航上方；目录和所有章节均可使用。点击入口或在教程页按`Cmd/Ctrl+K`打开Ant Design搜索弹窗，焦点进入输入框。
- 只搜索当前语言的整本教程：章节名称、各级小节标题、编号步骤、普通正文、代码与表格文字。中英文分别使用已有Markdown，不做图片OCR、不收集查询、不访问外部搜索服务，也不复制一份人工维护的搜索正文。
- 在现有Vite Markdown编译中提取`search`条目，与正文一起发布。条目包含`kind: chapter | section | step`、`anchor`、`title`、`text`；步骤另含真实编号`step`。图片、媒体URL与HTML属性不进入检索文本。
- 查询按空白分词、忽略英文大小写，所有关键词须在同一条目的章节、小节或正文中同时命中；标点按字面量处理，不支持正则、模糊或语义搜索。完整标题与标题命中优先，随后正文命中；同分时保留章节和正文顺序。不静默丢弃结果。
- 结果返回当前语言的`href`、章节名、标题、命中附近的有限摘要与条目类型；摘要正文最多200个UTF-16代码单元，首尾省略号另计，检索范围不因此截断。摘要和标题只高亮实际匹配的文字，不插入查询HTML。显示真实结果数，结果列表保留鼠标、触控板与键盘滚动。
- 章节/小节复用现有路由和锚点。步骤保留全部旧锚点，并按显式步骤标识或编号列表位置构造独立的`search-step-…`定位锚点，不依赖翻译后的标题；切换语言后仍定位同一步。点击或Enter导航到对应步骤，而非仅打开章节顶部。中文使用`/guide/…`，英文使用`/en/guide/…`；旧`?lang=en`入口由客户端replace到英文路径，支持刷新、前进后退与重复定位同一结果。
- 只有标题前独立、无正文的锚点节点可以作为该标题的显式定位；上一条操作内部的锚点不用于后续小节，避免目录或搜索结果跳回先前步骤。原显式锚点均保留。
- 空查询显示搜索提示和示例关键词；无结果显示明确提示。方向键选择、Enter打开、Escape和关闭按钮退出；取消恢复原焦点和阅读位置，选择结果后不把焦点拉回旧位置。IME组合输入的Enter不触发导航。
- 搜索不重新下载所有章节或媒体，准备好的阅读器搜索不发起网络请求；编译失败沿用教程错误边界，不返回假空结果。保留目录首次进入小于1000ms、长章切换小于300ms的现有门槛；搜索输入到完整结果绘制同样要求小于300ms，不以首条结果出现或截断结果数替代完整绘制。

验收流程：

1. 在内容编译集成层核对两种语言的整本索引、真实标题/正文/代码/表格、排序、多个关键词和字面标点；逐条确认结果锚点确实存在且没有重复。
2. 在真实Browser从目录打开搜索，输入跨章关键词，核对结果、高亮与数量；点击章节、小节和具体步骤，并验证深链刷新、历史和同一目标重复定位。
3. 在中英、浅深主题、桌面与手机尺寸下检查空态、无结果、焦点、IME、键盘、滚动与窗口缩小；核对现有Header、正文与图片未改变。
4. 生产构建通过本地Cloudflare Static Assets承载，复跑受影响的阅读导航、语言/主题、图片预览和性能；独立数据对照按相同内容检查设计与实现的元素几何、样式、文本和状态，不使用容差或截图代替。

实现入口为[Markdown编译](../scripts/guide-content.ts)、[检索函数](../src/features/guide/search/utils.ts)与[搜索弹窗](../src/features/guide/search/GuideSearchDialog.tsx)。内容与性能由[编译/检索集成检查](../tests/integration/guide-search-content.test.ts)覆盖，实际操作由[Browser搜索流程](../tests/integration/guide-search.test.ts)覆盖；这些是正式网站功能检查，不是设计工具的测试。

## 本章内容当前位置

右侧目录根据实际正文阅读位置标记当前小节；不依赖最近点击的链接，也不改变教程搜索、正文或App入口范围。

- 右侧“本章内容”仍只列当前章节的二级小节。宽度大于1000px时显示，较窄窗口沿用现有隐藏规则，不新增手机导航控件。
- 当前小节使用12px、600字重和主题强调色，并在对应链接上标记`aria-current="location"`；其余项仍为11px。保留目录宽度、间距、换行、可见焦点和既有hover/focus行为，不改变正文或图片大小。
- 以固定Header下的原生阅读位置判断当前小节；下一小节尚未到达阅读位置时保持上一项，页面起始选择首项，页面滚动到底时选择末项。点击目录、刷新深链、历史切换与搜索定位到步骤后，标记实际阅读位置所属的小节，而不是只读取URL中的hash。
- 滚动只更新当前位置，不写URL或新增历史，也不把正文拉回标题。当前项超出目录视区时只滚动目录自身；窗口高度、宽度或语言改变后仍保持当前项可见。
- 继续由`GuidePage`处理正常链接导航并遵循原生平滑滚动/减少动态效果；不使用会另行接管滚动与History的控件。正文定位与目录跟随共用同一锚点解析，不新增第二套正文ID。
- 更换章节时取消旧观察与滚动监听；图片/字体布局和窗口尺寸变化后按实际位置更新。不因目录状态更新而重建正文或重新加载章节。

`GuideOutline`以`requestAnimationFrame`合并滚动读取，观察正文和目录尺寸；`GuideLink`只新增`aria-current`透传，普通、外部和命名锚点行为不变。正文定位与目录共用`findGuideFragmentElement()`。原生锚点滚动可能留下小数CSS像素，当前项判断按CSS像素落点处理；元素对照仍比较未经舍入的原始几何。目录末项按浏览器原生滚动范围显示，不增加padding、行高或位移补偿整数`scrollHeight`与小数行框之间的差异。

验收覆盖[共享链接语义](../tests/integration/guide-link.test.ts)、[真实Browser目录跟随](../tests/integration/guide-outline.test.ts)、搜索/深链/历史/语言、目录自身滚动与宽度切换，以及高分屏逐项点击；保留首次目录小于1000ms、长章导航与受测搜索完整绘制小于300ms的门槛。正式UI与已确认设计按独立元素数据严格对照，不用截图相似度替代，也不使用容差或位置补偿。

## App嵌入与部署边界

- App固定加载`https://www.interceptor.cn/guide?embed=desktop`或`https://www.interceptor.cn/en/guide?embed=desktop`。`zh-CN`选择中文，其他App语言选择英文；不接受任意URL。
- `embed=desktop`移除网站Header/Footer，保留教程目录、正文、搜索、图片与本章导航；内部导航继续保留该参数。
- Renderer保留App Window Header、Guidebook工具栏和Statusbar，显示Loading、Ready与Error；Refresh或Retry重新创建frame。在线教程需要网络。
- iframe使用sandbox，App CSP的`frame-src`仅允许官方origin；远程frame没有Electron、Node、Preload或业务IPC权限。
- Renderer只向指定frame和origin发送有限的主题、语言及`open-search`消息；Homepage核对parent窗口身份和消息结构，不接收凭据、Capture或本地路径。
- 浏览器按钮通过`openGuidebookInBrowser(language)`交给Main，打开对应语言的固定官方目录页，不读取远程frame当前URL。
- Homepage使用Cloudflare静态资源；当前[响应头](../public/_headers)只维护缓存，部署规则见[部署约定](deployment.md#http-与索引)。App自身仍独立维护可信来源和进程边界。
- 网站Browser验收不能代替App真实E2E；App契约见[Guidebook功能文档](../../Interceptor/architecture/features/guidebook.md)。

## 真实步骤图与素材来源

唯一流程来源是Interceptor原业务workflow；截图是可选产物，正常回归不会写入Homepage。见[截图来源](#从原workflow取得步骤图)；不维护独立教程workflow、制作/导入工具、录屏器、编码器、字幕生成器或视频同步脚本。

每个用户步骤必须对应真实步骤图。文字与截图使用同一套示例名称和输入值；缺图的步骤保持待验收，不能用设计预览、占位图片或workflow trace冒充教程交付。

- 每个操作步骤有稳定编号，正文紧邻放置对应截图；一段包含多个独立操作时先拆分，不用一张最终状态图代替全过程。
- 规则名、集合/请求名、变量名、Header/Query字段、URL、正文值和文件名按同一演示数据填写，并在实际界面中逐项核对。
- 正文按实际操作顺序放图，章节和步骤锚点直接定位图文。不会一边讲`Guide request`、一边在图中显示不相关的`E2E request`。
- 动态端口、生成ID、时间等确实不能固定的值，以该次真实录制为准；文字说明实际值与读者环境可能不同，不伪造或修改产品截图里的值。
- 先在真实App执行并保存步骤图，再校正文案和翻译；中英文共用同一演示数据，使用独立App profile的English初始语言，不修改系统或日常App语言；i18n专项单独执行并恢复初始语言。
- 使用原生授权或文件选择的步骤，也要显示对应真实原生窗口；拿不到该画面就明确保留该步骤缺口。
- 实际取得的小节紧邻操作放置图片，按原始清单核对文件、输入值、版本和平台。未配图分支保留待验收，不因一个入门演示就宣称整章完成。
- 素材在`guidebook/media/<version>/<section>/`保存，公开清单包含步骤、图片尺寸/字节数/SHA-256及可公开的来源，不携带trace、profile、日志、完整私有metadata或本机源目录。已有图片转换为纯图文时保留原始字节和出处，不冒充新拍摄。
- 原生PNG仅捕获本轮App或其拥有的文件面板，不截桌面、其他App或麦克风。取消文件窗口后拍回到App的状态，不取景尚未定位的个人目录；未支持的原生平台明确保留缺口。

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
- 每个 feature 的步骤图与正文锚点对应；当前步骤及跨章引用直接定位图文，不维护时间轴。
- 不录入 API Key、MCP配置凭据、CA私钥、个人流量或系统账号信息；截图也要检查这些边界。
- 真实图片取得并审核后再加入媒体目录，单文件仍核对静态托管限制。历史原始录屏、trace和日志留在私有验收目录，不随官网公开。
- 契约的逐项映射和Tool目录核对只能证明有对应内容，不能替代功能点实际操作、图文一致性或所属平台的原生验收；契约数量以[当前规格索引](../../Interceptor/apps/desktop/tests/e2e-workflow-tests/docs/README.md)为准。

## 从原workflow取得步骤图

从Interceptor的`npm start → Test → E2E`选择“逐步截图”，再选择功能/workflow。结果自动保存在`apps/desktop/test-results/workflow-screenshots/<run>/<test>/step-screenshots/`，包含PNG和schema 1清单，不需要手写flag。普通截图模式不写本仓库；整本更新使用下述显式发布操作。

- 普通模式与截图模式使用同一批业务流程和断言；截图目录与普通测试输出隔离，不被下一次普通运行清空。
- 使用图片前检查测试结果、宿主恢复、每代App正常退出及原图/步骤内容。工程验收注释、内部故障注入、个人流量或凭据不能直接变成用户教程。
- 本仓库继续维护现有Markdown、原图和图片尺寸索引，保留已有图文；发布契约与内容放在一起，执行入口在Interceptor的`npm start`，不建立第二套教程workflow。素材来源、实际版本、平台和隐私要求仍然适用，local build不冒充已发布Release，Windows Renderer图不冒充原生面板。
- 内容变更后运行已有build与受影响Browser检查。现有编译器统一处理图片尺寸、懒加载、原图入口和导航，不新增一套阅读数据。

### npm start整本截图发布

入口为Interceptor的`npm start → Test → E2E → 教程截图更新并发布 Homepage`。自动截图范围以[发布清单](../guidebook/screenshot-publication.json)的`workflows`为准；独立实录登记在`retainedMedia`，校验后保留。

1. 本地只准备Interceptor仓库，使用有本仓库写入权限的账号执行`gh auth login`。Start直接读取GitHub上的`main`及[发布清单](../guidebook/screenshot-publication.json)，不要求本地Homepage目录，不clone或创建分支。
2. 默认在Interceptor根目录执行`npm run package`，使用当前平台的packaged App；已有产物可通过`INTERCEPTOR_E2E_APP_PATH`选择Windows `Interceptor.exe`或macOS `.app`，此时不重复package。App的实际版本须与发布契约一致。Windows与macOS均通过Renderer CDP执行`workflows`登记的全部原测试；每项用`file`和`testName`选择原文件中的一个`test()`，直接包含完整`steps`和正文动态端口绑定`examples`。媒体目录从step的`image.target`得到；独立实录按审核摘要校验后保留，不重新运行其来源。目标图及原图使用清单中的路径，图文不依赖新运行的顺序文件名。选择不发布时仍完整截图和校验，只保存本地产物。
3. 每条测试完整通过且所有App代际正常退出、宿主恢复后，逐检查点核对标题、实际语言、窗口、主题和红框编号，核对截图manifest尺寸与实际PNG一致。先完成整组验证，不边拍边覆盖官网图片；任何失败、缺失或歧义停止发布。
4. 完整步骤序列通过后，直接按对应step的`image.target`及`rawTarget`更新目标图、原图、来源与尺寸。多个教程复用同一张截图时，各Markdown直接引用同一个`target`路径，不增加发布副本或映射列表。动态端口按所属workflow的`examples[].name`读取真实截图manifest中的同名示例，再按明确的正文锚点和出现次数更新中英文；不同步骤偶然使用相同端口时不互相替换。不存在或冲突的绑定失败，不从图像或文字相似度猜值。
5. 全部截图、各代退出恢复和固定映射通过后，GitHub Git Data API上传改变的blob；相同内容按Git对象摘要复用。只更新映射中登记的文件，不读取或提交操作者本机其他repo的未提交修改。
6. 以启动时Homepage `main`为唯一父commit创建候选，然后用`force:false`更新`main`；远端已经推进则停止。完成后再次读取远端SHA确认成功，不强推、pull/rebase或操作App仓库的index。Homepage现有`Check website`在更新后运行，不新增或等待额外的Actions发布流程，也不进行本地网站构建或部署。

发布目录和阶段写入Interceptor的`apps/desktop/test-results/guidebook-publications/<run>/publication.json`，不进入网站源码。报告schema为4，`completedWorkflows`逐项保存`file`、`testName`、本地`directory`、`captureInputs`及manifest/退出证据摘要。可从同一Start入口选择“继续截图并发布（复用有效流程，只补缺项）”，恢复部分批次：重新核对整个App产物、本workflow源码、全部共用fixture与运行依赖、完整PNG和每代退出恢复证据，只在新子目录补拍缺失或输入失效的workflow。无关workflow改变不使已有成功项失效，当前校验器仍核对每项完整步骤。只有当前清单全部通过才生成或发布，失败项和旧报告格式不复用。候选commit创建前以当前远端清单重新核对映射；候选commit创建后必须保持原基线及清单，复用前核对tree与父commit。已上传blob可按实际摘要复用；仅创建候选commit尚未推进`main`时不称为发布成功。GitHub权限、限流、网络或分支保护错误明确失败，不自动绕过。

固定身份的维护：

- 发布清单schema为2，自动截图只有一份`workflows`列表，不再维护`sources`、`groups`、`values`或跨列表的`source`、`checkpoint`、`id`引用。每个step的`image`直接保存完整发布路径和红框`labels`；未采用到教程的step写`target: null`且不含`rawTarget`，仍须完整校验。复用图片只需要让不同正文引用同一个`target`路径。Homepage仓库和分支由Interceptor的`guidebook-github.mjs`固定，不在清单重复配置。动态示例的`documents`只保存文件和`regions`，每个region记录锚点及准确出现次数，不重复保存文档总次数。
- `workflows[].steps`保存完整原测试的明确顺序契约，标题允许重复；`workflowSha256`锁定原文件的UTF-8源码（CRLF统一为LF）。新增截图或流程变化必须更新对应step及摘要，将既有目标路径保留在用途对应的step中。序列检查拒绝错位，不用标题或新文件序号推断旧用途。

例如`settings/upstream-settings.workflow.ts`的Manual Host/Port截图，其`steps`中的对应项直接写为：

```json
{
  "title": "填写真实Manual上游的Host和Port / Enter the actual Manual upstream Host and Port",
  "window": "app",
  "theme": "light",
  "image": {
    "target": "guidebook/media/v0.1.1-alpha.1/settings-upstream-english/step-004.annotated.png",
    "rawTarget": "guidebook/media/v0.1.1-alpha.1/settings-upstream-english/step-004.png",
    "labels": ["1", "2", "3"]
  }
}
```

发布器校验该step的真实截图后，将其标注PNG字节写到`target`，原图字节写到`rawTarget`；Git tree直接使用这两个完整路径。

- `retainedMedia`登记独立实录的原`manifest.json`路径和审核后的`manifestSha256`，包括真实Host、本地原生面板/App Containers、公开Release页面及已发布App实录。保留原来源与版本，全部图片的SHA-256、字节、PNG尺寸和全局尺寸必须匹配；真实Host另核对原生调用与Host验收摘要，本地workflow实录须有业务断言、正常退出及宿主恢复声明。缺图、变更、与自动目标重叠或未登记正文图片均停止。报告保存`reexecuted: false`，批量生成不写这些媒体文件，也不修改其固定示例值。
- 红框或示例语义变化必须同步正文与绑定；新增图片先明确其章节用途和安全边界，再纳入清单，不自动把所有未采用候选图上传。
- 清单要求English App `0.1.1-alpha.1`，不指定平台、CPU架构、Playwright project或历史macOS窗口尺寸。每次媒体manifest保存实际平台/架构与启动目标；每张步骤图记录`renderer`或`native-window`，尺寸索引读取实际PNG。历史原图及真实Host媒体保留原来源，不因新批次平台改变而改写。首次系统授权和外部凭据仍需正常处理，原生API场景仍在对应平台运行。

### 真实Host英文图片与保留边界

- 外部MCP Host实录与自动SDK workflow分别保留真实来源，不用SDK Client冒充VS Code等原生Host。
- [真实Host媒体manifest](../guidebook/media/v0.1.1-alpha.1/mcp-current-host-english/manifest.json)记录Host身份、实际App版本、原生调用和验收报告摘要。私有原始报告与配置不随网站公开。
- `retainedMedia`用固定manifest摘要锁定已审核图片；发布器核对完整资产SHA-256、字节、PNG尺寸和全局尺寸，不自动重拍或改变原示例值。
- Windows AppContainer、原生面板、公开Release页面和已发布App实录保留其实际平台、版本及隐私处理。普通Renderer workflow在当前可用平台执行，原生API专项在所属平台执行。

### 原workflow截图与纯图文验收

- 每个采用步骤核对原workflow操作、实际界面、示例值和正文说明；原图作为证据，红框图只负责定位。
- 红框编号属于当前图片，正文必须明确说明每个编号对应的对象或动作；不要把它当成文章步骤号。
- 双语正文引用相同图片且顺序一致。连续说明可以复用同一张真实图片，Markdown直接引用同一路径，不生成`copies`列表。
- 原workflow须完整通过，有trace、每代App正常退出、8888释放和宿主恢复证据；失败、跳过或平台阻塞不算通过。
- 本地验证与完整发布分别检查；部分来源通过不能作为整批完成或远端已发布的依据。

## 维护与验证

- 修改用户步骤前同步Interceptor功能契约与对应E2E规格；截图检查点变化时同步发布清单的完整步骤和源码摘要。
- 内容变化运行`npm run build`和受影响的既有Browser检查，核对全部链接、锚点、图片自然尺寸、双语同序与编号说明。
- 搜索与阅读器变化验证真实Browser导航、主题、语言、窄屏、焦点、图片、错误和性能；设计图不替代这些操作。
- PNG、manifest和尺寸索引必须一起维护，公开媒体只保留可公开的有限来源；trace、日志和验收结果留在运行产物目录。
