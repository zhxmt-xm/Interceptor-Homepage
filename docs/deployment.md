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

## 授权后手动部署

以下命令会登录并发布到外部账号，确认上线后才执行：

```sh
npx wrangler login
npm run deploy
```

项目名为 `interceptor-homepage`，与 GitHub 仓库 `Interceptor-Homepage` 的大小写要求不同。保留仓库名，Cloudflare 资源标识使用合法的小写名称。

发布后检查 Wrangler 返回的实际 URL：

1. 用未登录 GitHub 的浏览器访问首页。
2. 核对手机/桌面、语言、导航、图片、FAQ和键盘操作。
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

- `public/_headers` 为资源设置 CSP、`nosniff`、禁止嵌入、referrer policy和权限限制；外部字体仅允许 Google Fonts 域名。
- 只有 Vite 输出的 `/assets/*` 使用一年 immutable 缓存；HTML和未加 hash 的图片沿用 Cloudflare 的重新验证策略。
- 不存在的资源返回404；官网只有 `/`，不用 SPA catch-all 掩盖错误链接。
- `robots.txt` 允许索引。开发服务只监听 loopback；若需要对外提供未发布预览，先配置访问控制或搜索引擎限制。`noindex` 本身不是访问控制。
- 域名未确定，因此没有编造 canonical URL、sitemap URL或分享图片绝对地址。域名与公开媒体确认后再补齐。
- 这是浏览器渲染的 React 单页，metadata在初始HTML中可用；没有声称完成服务端渲染、静态预渲染或多语言SEO路由。

## Cloudflare Pages 备选

现有 `dist/` 同样可以交给 Pages，构建命令仍为 `npm run build`、输出目录为 `dist`。Pages是另一种项目配置，不直接使用此仓库的 Workers发布命令；未知路径规则与预览权限需按 Pages 配置核对。

参考：[Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)、[Pages limits](https://developers.cloudflare.com/pages/platform/limits/)。截至本次准备，免费计划每月500次构建、单资源最大25 MiB；视频和安装包不应塞进官网静态目录。
