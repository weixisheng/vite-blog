# 镜像
::: tip NPM MIRROR
[npmmirror 镜像站](https://npmmirror.com/)
:::
## npm镜像
```bash
# 原始镜像
https://registry.npmjs.org/
# 淘宝
https://npm.taobao.org => https://npmmirror.com
https://registry.npm.taobao.org => https://registry.npmmirror.com
```
cnpm使用
```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

镜像安装
```bash
yarn install --registry=https://registry.npmmirror.com
npm install --registry=https://registry.npmmirror.com
```
## npm包下载
一般在nvm下载失败时手动下载替换
```bash
https://registry.npmmirror.com/binary.html?path=npm/
https://github.com/npm/cli/releases
```
下载解压并重命名为`npm`，放置到 `path/nvm/${version}/node_modules`，并把npm/bin下的`npm`、`npm.cmd`、`npx`、`npx.cmd`复制放到`path/nvm/${version}`下