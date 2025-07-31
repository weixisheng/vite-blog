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

## phantomjs下载失败

#### 1. **手动下载二进制文件**

- **下载地址**：访问PhantomJS 官方下载页获取 `phantomjs-2.1.1-windows.zip`文件
- **存放路径**：将文件保存到日志指定的临时目录：

```
  C:\Users\xxx\AppData\Local\Temp\phantomjs\phantomjs-2.1.1-windows.zip
```

- **重新安装**：

```bash
npm install phantomjs-prebuilt@2.1.16
```

#### 2. **忽略安装脚本（快速修复）**

```bash
npm install phantomjs-prebuilt@2.1.16 --ignore-scripts
```

- 此命令跳过`install.js` 脚本的执行，避免触发证书验证

- 适用场景：网络不稳定或镜像源证书异常时。

#### 3. 重新安装

```
npm install
```

