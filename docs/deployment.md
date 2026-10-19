# 静态部署

当前只准备部署能力，不代表网站已对外上线。创建 Cloudflare 项目、授权读取 GitHub、公开访问、购买域名或启用付费服务，必须由仓库所有者确认。

## 推荐：Cloudflare Workers Static Assets

Cloudflare 当前建议新项目使用 Workers。此官网只有静态 HTML、JS、CSS 与图片，使用 [Static Assets](https://developers.cloudflare.com/workers/static-assets/) 即可：

- 静态资源请求免费且不限请求次数，资源存储不额外收费；见[计费边界](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)。
- [wrangler.jsonc](../wrangler.jsonc) 没有 `main`、业务 Worker、binding 或 `run_worker_first`，请求不会进入自建 Worker 逻辑。
- 不需要数据库、KV、R2、API token 注入前端或框架的 SSR adapter。
- 若未来新增服务端逻辑、SSR、存储或大视频，需要重新评估配额与费用，不能把静态资源的免费承诺套到这些服务上。
- 默认可使用 Cloudflare 提供的 `workers.dev` 地址；自定义域名不是本轮前提。不要把“私有 GitHub 仓库”等同于“部署后的网站也是私有”。

## 本地确认

```sh
npm ci
npm run check
npm run deploy:check
npm run preview:cloudflare
```

最后一条在 <http://127.0.0.1:8787> 启动本地资源服务，不上传代码，不需要登录。Ctrl+C 停止。

`deploy:check` 是 Wrangler `--dry-run`，不是成功发布；构建和本地验证通过，仍不能宣称公开 URL 已通过验收。

Browser检查使用Wrangler本地Static Assets服务承载生产构建，实际应用`wrangler.jsonc`和产物中的`dist/_headers`；不能只用Vite preview的通过结果代替Cloudflare路由与响应头验收。`HOMEPAGE_TEST_URL`可指向另一个已启动的本地托管实例，复用同一组UI断言。

## 授权后手动部署

### 待执行：受限部署与线上验收

本地制作与线上发布分别交付。用户希望先部署给本人或明确允许的成员查看，再决定公开；不能把未公布的网址、GitHub私有仓库或`noindex`当作访问控制。

- 先确认实际Cloudflare账号、项目与访问策略，确保保护覆盖正式域名和所有预览/版本地址，再上传真实内容。只有账号成员范围确实仅含本人时，`Cloudflare account`才等于本人可访问；不为本项目擅自改变其他Worker的可见性。
- 本人完成Wrangler登录或控制台授权；不得创建临时公开账号、购买域名、启用付费服务或改变GitHub仓库可见性来绕过。需要付款资料、原生确认或已有项目设置时由所有者处理。
- GitHub自动部署只授权`zhxmt-xm/Interceptor-Homepage`，按本文件的Workers Builds配置连接；现有CI仍只检查，不因完成本地制作而自动发布。
- 验收实际URL的首页、教程规范深链/刷新、未知路径404、缓存、步骤索引和图片原图；图文页不得再请求已移除的MP4/VTT。历史视频Range记录不作为当前纯图文部署门槛。
- 使用未登录浏览器与获准账号分别验证拒绝和允许访问，同时检查预览域名及直接资源URL是否可绕过策略。删除官网CSP/iframe头不应被误解为开启匿名访问。
- 下载、GitHub和反馈入口仍受私有产品仓库权限限制；上线前确认访客实际可用的入口。国内外线路、当前Google Fonts依赖与移动端阅读需要在真实地址核对，不以本地速度或域名未公布替代。
- 正式公开、App iframe及任何付费/域名操作另行授权；App接入属于Guidebook任务，不由网站可嵌入或本次部署代替。

以下命令会登录并发布到外部账号，确认上线后才执行：

```sh
npx wrangler login
npm run deploy
```

项目名为 `interceptor-homepage`，与 GitHub 仓库 `Interceptor-Homepage` 的大小写要求不同。保留仓库名，Cloudflare 资源标识使用合法的小写名称。

发布后检查 Wrangler 返回的实际 URL：

1. 用未登录 GitHub 的浏览器访问首页。
2. 核对手机/桌面、语言、导航、图片、FAQ和键盘操作；直接打开并刷新`/guide`及任一`/guide/<chapter>`，确认章节正文、站内链接与锚点可用。
   - 已知教程入口直接返回200，地址不增加末尾斜线；带末尾斜线或`index.html`的同一入口重定向到无末尾斜线的地址，保留查询参数。英文深链切换语言时保持章节、其他查询参数和锚点。
3. 检查真实 Release 资产与匿名下载、GitHub和反馈入口；私有产品仓库当前仍会返回404，不能算已通过公开链接验收。
4. 请求一个不存在的路径与资源，确认返回404，不把所有路径回退成首页200。
5. 检查 HTML 不被长时间缓存，带 hash 的 JS/CSS可长期缓存；保留响应头与页面证据。

## 授权后连接 GitHub 自动部署

[Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) 可以连接私有 GitHub 仓库，不必先把官网源码公开。

1. 先经授权提交并推送官网代码，确保仓库有可选择的主分支。
2. 在 Cloudflare 的 Workers & Pages 中创建应用，选择 Import a repository。
3. 只授权需要的 `zhxmt-xm/Interceptor-Homepage` 仓库。
4. 项目名填 `interceptor-homepage`，必须与 Wrangler 配置一致。
5. 根目录用仓库根，构建命令用 `npm run build`，部署命令用 `npx wrangler deploy`。
6. Node 版本使用 [.node-version](../.node-version) 中的版本；如控制台需要显式配置，设置同值的 `NODE_VERSION`。
7. 确认生产分支、预览可见性和当前账户配额后，再保存并部署。

GitHub Actions 的 [check.yml](../.github/workflows/check.yml) 只负责 lint、typecheck/build与浏览器检查，不包含部署凭据，也不会自行发布。Cloudflare 构建与部署由其独立配置控制。

## HTTP 与索引

### 官网响应头约定

- 用户已确认移除官网自定义的`Content-Security-Policy`、`X-Frame-Options`、`Permissions-Policy`、`Referrer-Policy`和`X-Content-Type-Options`，不是仅缩短CSS白名单；官网不再主动限制脚本/样式来源或禁止被iframe嵌入。
- `public/_headers`只保留`/assets/*`的一年immutable缓存；HTML不使用长期immutable缓存，已登记教程路径与未知路径404约定不变。
- 删除Ant Design样式提取、hash生成和对应的直接开发依赖；不修改Ant Design运行时或第三方源码。
- Browser验收直接检查实际静态响应，并从不同来源的父页面加载、浏览教程；已有Header、主题、语言与页面外观需要保持一致。此范围不包含App的iframe入口、Electron安全策略或云端访问授权。
- `npm run build`直接复制`public/_headers`到产物，不执行React样式预渲染、hash提取或响应头改写。Ant Design的运行时依赖保留，组件和主题不因移除构建插件而更换。
- 官网不再发送自定义CSP，包含脚本来源限制也一并移除；它仍受浏览器原有的同源、CORS等机制约束。此选择不等于站点仅本人可见，云端访问保护仍须单独配置与验收。
- 字体来源未在本轮改变；当前仍由浏览器加载Google Fonts，本地化属于另一项改动。
- 只有 Vite 输出的 `/assets/*` 使用一年 immutable 缓存；HTML和未加 hash 的图片沿用 Cloudflare 的重新验证策略。
- 构建同时生成首页`/`、教程目录`/guide`和已登记的`/guide/<chapter>`静态HTML入口，支持章节直接访问与刷新；站内切换仍使用React Router。路由清单由`src/content/guidebook.ts`维护，Vite构建按同一清单输出入口，不另维护部署路由副本。
- `assets.html_handling: "drop-trailing-slash"`使静态托管与站内无末尾斜线的路由一致；目录内的`index.html`是产物路径，不是对外URL。不能依赖Cloudflare默认的`auto-trailing-slash`，它会把直接访问的教程地址改成另一种形式。规则使用[官方HTML handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/)，不增加Worker、客户端纠正跳转或重复路由表。
- 不存在的章节及资源返回404；保持`assets.not_found_handling: "none"`，不用SPA catch-all把未知地址伪装成首页200。
- `robots.txt` 允许索引。开发服务只监听 loopback；若需要对外提供未发布预览，先配置访问控制或搜索引擎限制。`noindex` 本身不是访问控制。
- 域名未确定，因此没有编造 canonical URL、sitemap URL或分享图片绝对地址。域名与公开媒体确认后再补齐。
- 这是浏览器渲染的 React 单页，metadata在初始HTML中可用；没有声称完成服务端渲染、静态预渲染或多语言SEO路由。

## 当前本地部署复核

以下路径修复记录对应当时采用CSP与iframe保护的产物，保留为历史证据，不代表响应头清理后的当前策略。

- 本轮以已提交的`b044362`为源码基座，只修正官网托管配置和Browser承载入口；没有修改教程正文、阅读器、素材、桌面App或第三方依赖。已提交版本的[CI](https://github.com/zhxmt-xm/Interceptor-Homepage/actions/runs/38778529925)通过，不代替本轮未提交配置的验证。
- [前置Browser Red](../artifacts/item10-20261016-preflight/browser-report.json)及[trace](../artifacts/item10-20261016-preflight/browser/)记录Cloudflare默认HTML策略把`/guide/composer`变成`/guide/composer/`，桌面与手机语言切换均不符合原有路径断言。修复使用官方`drop-trailing-slash`，没有改动或放宽断言。
- [该轮Browser Green](../artifacts/item10-20261016-preflight/browser-green-report.json)与[完整trace](../artifacts/item10-20261016-preflight/browser-green/)通过58个官网流程，无失败、跳过或重试。实际入口为`npm test`自动构建并启动的Wrangler本地Static Assets服务，覆盖当时的CSP、Header、中英/浅深、滚动、全部教程路由、视频及字幕；不代表当前响应头或后续新增素材已验收，也不代表公开上线。
- [静态响应检查](../artifacts/item10-20261016-preflight/static-hosting-green.json)核对全部712个可公开资源、16个HTML入口、目录别名重定向与查询参数、真实404、CSP及缓存。独立构建目录不覆盖正在运行的4175开发预览；原始[响应记录](../artifacts/item10-20261016-preflight/http-check.json)保留。
- 当前构建包含713个文件，最大文件为4,013,646字节，符合[Workers Free的20,000文件与单资源25MiB限制](https://developers.cloudflare.com/workers/platform/limits/#static-assets)。typecheck/build和使用该产物的Wrangler dry-run通过，未上传；大JS chunk警告仍在，不能据此承诺公网加载性能。
- `npm run lint`退出成功，但既有离线HTML超过Biome的1MiB文件上限，报告没有被该检查器解析。该[离线说明](../commit-changes/202610141539_ui_homepage_initial-progress.html#homepage-item10-static-routing)另以现有Playwright直接打开，核对[宽窄屏、全部内嵌图片及红框](../artifacts/item10-20261016-preflight/report-check.json)，没有修改大小门槛或掩盖警告。
- 未通过的附加检查：本地对MP4发送`Range: bytes=0-255`仍返回200、完整文件且没有`Content-Range`，见上述原始响应记录。当前本地播放与字幕流程通过，但没有206分段响应证据；公开地址就绪后须复核Range响应和实际播放/拖动。未据此改写`node_modules`、增加Worker或声称公网必定具有相同行为。
- 公开上线仍为`blocked`：[官方OAuth核对](../artifacts/item10-20261016-preflight/oauth-check.json)确认登录页要求本人身份验证，用户当前不可用，未取得登录与明确公开发布授权。登录流程已停止，`wrangler whoami`仍显示未认证，回调端口8976已释放；没有使用临时账号。下载、GitHub和反馈入口匿名访问仍为404。恢复时重新执行[授权后手动部署](#授权后手动部署)中的登录命令，公开访问、免费托管和仓库可见性分别确认，不能自动公开仓库绕过。
- [本地验收退出记录](../artifacts/item10-20261016-preflight/cleanup.json)确认测试/预览端口4176、8787已释放，既有4175开发预览仍返回200；OAuth结果与其回调端口由上述独立授权记录确认。临时独立构建与本地Wrangler状态已清理，trace、响应记录和报告截图保留；没有启动桌面App或修改系统代理、证书设置。

### 官网自定义响应头清理

- [前置Red](../artifacts/item10-header-removal-20261016/red/report.json)中，响应头缺失与跨域iframe两个新目标失败，其余23项Header、主题与缓存基线通过；[浏览器拦截原因](../artifacts/item10-header-removal-20261016/red/iframe-block.json)明确为旧`frame-ancestors 'none'`，不是把定位器或环境故障当成产品Red。
- 删除五种自定义安全响应头、样式hash脚本与Vite插件后，[最终25项Browser](../artifacts/item10-header-removal-20261016/final/report.json)全部通过，无跳过或重试；[真实响应](../artifacts/item10-header-removal-20261016/final/http-responses.json)确认首页、教程和未知路径不再带这些头，正常入口返回200、未知路径仍404。测试通过跨域父页面中的真实iframe阅读并切换教程，不注入产品Store或调用业务后门。
- 官网生产构建的`_headers`只剩`/assets/*`的immutable缓存。lint、typecheck、build和Wrangler dry-run通过，未上传；保留大JS chunk、正文编译耗时以及离线HTML超过Biome文件大小上限的警告，没有调高阈值或声称警告已消除。
- [依赖核对](../artifacts/item10-header-removal-20261016/dependency-check.json)确认只删除`@ant-design/cssinjs`的直接开发声明，Ant Design使用的传递运行时依赖仍为2.1.2，其他依赖版本未变；未修改`node_modules`中的第三方行为。
- [同一源码输入的产物比较](../artifacts/item10-header-removal-20261016/asset-byte-comparison.json)显示1204个文件中只有`_headers`变化，JS、CSS、HTML和媒体字节均一致。收尾构建期间另有item 9新增上游代理、工作区导航素材，[产物变化清单](../artifacts/item10-header-removal-20261016/final-build-drift.json)保留；最终25项检查使用包含这些素材的1246文件快照，没有回滚其他会话内容或拿旧快照覆盖默认`dist/`。
- 前后48个场景覆盖首页/Composer教程、1600/390px、中英、浅深及关闭/主题/语言菜单，全部几何和字体数据一致。[初始像素记录](../artifacts/item10-header-removal-20261016/visual-diff/report.json)存在独立浏览器进程间的差异，[同一版本对照](../artifacts/item10-header-removal-20261016/visual-diff-after-after-control/report.json)也复现像素波动，不能据此认定页面源码改变。固定浏览器渲染参数后，[47个场景像素零差异，另1场景有2个像素差](../artifacts/item10-header-removal-20261016/visual-diff-before-stable-after-stable/report.json)；该场景在[同一浏览器上下文复核](../artifacts/item10-header-removal-20261016/visual-targeted/report.json)中像素及几何均零差异。所有比较保持零像素阈值、包含抗锯齿像素，不修改页面、字体、设计基准或原始截图；未宣称独立进程的截图波动根因已消除。
- [完整官网检查](../artifacts/item10-header-removal-20261016/green/report.json)为58项通过、3项失败，不能标为全量Green：[改前产物复核](../artifacts/item10-header-removal-20261016/existing-baseline/report.json)同样出现这三个用例失败。[汇总](../artifacts/item10-header-removal-20261016/functional-summary.json)区分目标Green与已有缺口。具体包括首页视频入口对3个video使用单元素定位、末段字幕seek期望超过71.786秒但实际为0，以及阅读导航303.1ms超过300ms；性能用例在改前产物还出现等待测量标记超时。没有改动这些教程测试、放宽性能阈值或将定位器失败算为本轮产品Red。
- 同一item10的[离线改动说明](../commit-changes/202610141539_ui_homepage_initial-progress.html#homepage-item10-header-removal)只更新工程改动，未添加虚构UI差异；[报告检查](../artifacts/item10-header-removal-20261016/report-check.json)覆盖1280/390px、18张内嵌图片、红框、无折叠及无横向溢出。
- [清理记录](../artifacts/item10-header-removal-20261016/cleanup.json)确认8791/8792均已释放，原4175开发预览仍可用，默认`dist/`已更新。临时构建和Wrangler状态已删除，trace、截图及JSON证据保留。没有启动桌面App、修改其CSP/sandbox/Preload/IPC或操作云端Access；App内嵌、登录与实际公网表现仍不能由本轮普通浏览器iframe结果替代。

## Cloudflare Pages 备选

现有 `dist/` 同样可以交给 Pages，构建命令仍为 `npm run build`、输出目录为 `dist`。Pages是另一种项目配置，不直接使用此仓库的 Workers发布命令；未知路径规则与预览权限需按 Pages 配置核对。

参考：[Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)、[Pages limits](https://developers.cloudflare.com/pages/platform/limits/)。截至本次准备，免费计划每月500次构建、单资源最大25 MiB；视频和安装包不应塞进官网静态目录。
