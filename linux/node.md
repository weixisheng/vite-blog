# Linux安装Node

## 下载

1. 到 [node 官网](http://nodejs.cn/download/)获取 `Linux` 版本的下载链接
![Linux 二进制文件 (x64)](/img/linux-1.png)

采用LTS版本，获取的链接为 <base-tag text="https://npm.taobao.org/mirrors/node/v14.17.5/node-v14.17.5-linux-x64.tar.xz"></base-tag>

2. 进入 `Linux` 的 `/usr/local` 目录创建一个 `nodejs` 目录，如果权限不足，使用 `sudo` 命令。
```bash
cd ~
cd /usr/local
mkdir nodejs
```

3. 进入 `nodejs` 目录，执行下载命令
```bash
wget https://npm.taobao.org/mirrors/node/v14.17.5/node-v14.17.5-linux-x64.tar.xz
```
## 解压

1. 在当前目录（`nodejs`） `xz` 解压，生成 `node-v14.17.5-linux-x64.tar`
```bash
xz -d node-v14.17.5-linux-x64.tar.xz
```

2. 再执行 `tar` 解压，生成 `node-v14.17.5-linux-x64` 目录
```bash
tar -xf node-v14.17.5-linux-x64.tar
```

3. 此时我们可以删掉 `nodejs` 目录下的 `node-v14.17.5-linux-x64.tar`
```bash
rm -rf node-v14.17.5-linux-x64.tar
```

4. 然后把 `node-v14.17.5-linux-x64` 目录下的所有内容移到 `nodejs`
```bash
mv node-v14.17.5-linux-x64/* /usr/local/nodejs
```

5. 最后顺便把空目录 `node-v14.17.5-linux-x64` 删掉
```bash
rm -rf node-v14.17.5-linux-x64
```
## 配置
此时 `nodejs/bin` 目录下已经存在 `node` 和 `npm`，但是为了全局能使用，配置下软链接
```bash
ln -s /usr/local/nodejs/bin/node /usr/local/bin
ln -s /usr/local/nodejs/bin/npm /usr/local/bin
```
测试下安装结果
```bash
node -v
# v14.17.5
npm -v
# 6.14.14 
```
完成！