# sass相关
## 安装
因为网络问题，`sass-loader` 和 `node-sass` 可能安装失败，这里可以采用淘宝镜像解决一下
### 安装镜像
> ~~[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM?from=tnpm)~~ 见[工具-镜像](../tool/mirror.html)
```bash
npm i -g cnpm --registry=https://registry.npm.taobao.org
```

### 项目安装依赖
在镜像安装成功之后，切换到项目，安装依赖
```bash
cnpm i sass-loader node-sass -D
```

### 版本问题
`sass-loader` 可能由于版本太高，解析出错，可以安装7.x版本，例如
```bash
npm uninstall sass-loader
npm i sass-loader@7.3.1 -D
```

### 依赖替换
使用 `sass` 替换 `node-sass`，即安装
```bash
npm i sass@1.35.2 sass-loader@7.3.1 -D
```

## 深度选择器
采用```::v-deep```，例如：
```scss
.el-table ::v-deep th {
  color: #333;
  background-color: #f8f8f8;
}
```
less和stylus的深度选择器为```>>>```，
```less
.el-table >>> th {
  color: #333;
  background-color: #f8f8f8;
}
```