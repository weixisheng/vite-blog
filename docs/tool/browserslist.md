# browserslist-update
> 源文档：https://github.com/browserslist/update-db#readme，此为翻译版本

## 更新 Browserslist 数据库
用于更新 `caniuse-lite` 中浏览器数据库的 CLI 工具，数据来源自 Browserslist 配置。

某些查询如 `2 versions` 或 `>1%` 依赖于 `caniuse-lite`中的实时数据。

## 为何需要定期执行此操作
`npx update-browserslist-db@latest` 会更新 npm、yarn 或 pnpm 锁文件中的 `caniuse-lite` 版本。

这项更新将为 Autoprefixer 或 Babel 等 polyfill 工具提供新版浏览器数据，并减少不必要的 polyfill 代码。

定期执行此操作有三个重要原因:

1. 确保查询如 `2 versions` 或 `>1%` 使用最新的浏览器版本和统计数据。例如，若项目创建于两年前且未更新依赖, `last 1 version` 将返回两年前的浏览器版本。
2. 使用最新的浏览器数据可以减少 polyfill 代码量，从而缩小 JS 和 CSS 文件体积，提升网站性能。
3. 实现`caniuse-lite` 版本去重：同步不同工具间的版本数据。

## 如何使用
```bash{4}
npx update-browserslist-db@latest

# 新
npx browserslist@latest --update-db
```
![npm init](/img/browserslist-1.png)
![npm init](/img/browserslist-2.png)
