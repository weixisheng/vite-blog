# npm发包 
我们在开发的过程中都会从 ```npm``` 上下载包，来帮助我们提高工作效率。如果把自己的一些方法封装成包，并发布，后续自己安装就方便了。

此文主要记录最近发包到 ```npm``` 的过程。[@hishion_wei/uniapp-utils](https://github.com/weixisheng/uniapp-utils)

## 起步
### npm基础知识
- install
```bash
npm install <packge> [--save-prod|--save-dev|--save-optional|--no-save] [--save-exact|--save-bundle]
## -P, --save-prod，默认。依赖项会出现在 dependencies
## -D, --save-dev。依赖项会出现在 devDependencies
## -O, --save-optional。依赖项会出现在 optionalDependencies
## --no-save。依赖项不会出现在 dependencies

## -E, --save-exact。依赖项将配置一个确切的版本
## -B, --save-bundle。依赖项同时被添加到 bundleDependencies
```
- link
一般是两步操作，之后就可以在其他项目方便调试了：
```bash
## 1. 在需要发布的包npm link创建一个全局映射
cd ~/projects/my-package
npm link
## 2. 在需要使用包的地方npm link <packge-name>
## <package-name>是package.json中的name，不是目录名
cd ~/projects/other-project
npm link mypackage
```
### 初始化

首先得有一个本地开发的项目用来发布，可以创建一个 新目录使用 ```npm init``` 初始化项目信息。
![npm init](/img/npm-1.png)

其中```entry```是入口文件，可以根据项目实际情况填写其他路径，例如：```lib.index.js```。

然后添加一些文件，这里添加一个```src/index.js```。

```js
// 内容自定义
export default function add(a, b) {
  return a + b
}
```
## 调试
 ```npm``` 包在发布之前，其他项目还无法直接安装使用。这时候可以使用 ```npm link```关联。

 进入```npm-test```目录，执行```npm link```关联到全局，相当于```npm install npm-test -g```，只不过此时指向的是本地库。

 ![npm link](/img/npm-2.png)

 然后找一个需要用到这个包的项目 ```my-project```，执行：
 ```bash
 npm link npm-test
 ```

 从node_modules下面能看出 ```npm-test``` 与其他```npm``` 包有些许不同，前面有个链接符号。

 ![npm module link](/img/npm-3.png)

 准备好了之后，引用这个包，像其他包一样使用其方法，可以看到控制台输出3。

 ```js
import add from 'npm-test'

let sum = add(1, 2)
console.log(sum)
 ```

说明包里面的方法正常使用了，还可以根据情况转义es6代码为es5。

经过开发调试阶段，确认正常之后，现在可以在 ```my-project``` 取消关联，并准备发布到 ```npm``` 了。

```bash
npm unlink npm-test
```

## 账号
- 注册

去 [npm](https://www.npmjs.com/) 注册一个账号，在发布包的时候需要验证账号权限。

或者使用 ```npm adduser``` 添加，为了防止设置了其他镜像，先重置镜像为 ```npmjs```

```bash
npm config set registry https://registry.npmjs.org

npm adduser
```
- 登录
```bash
npm login
```

 ![npm login](/img/npm-4.png)

 ## 发布
 经过前面的准备阶段，现在可以准备发布包了。有几方面需要注意下
 
 ### 文件管理
- 使用files
  
参考 ```element-ui``` 的 ```package.json```，发现里面使用的是 ```files``` 选项来控制需要发布的文件。**根据实际开发包选择使用**。
 ```json
  "main": "lib/element-ui.common.js",
  "files": [
    "lib",
    "src",
    "packages",
    "types"
  ]
 ```
- 使用ignore

在根目录创建 ```.npmignore``` 文件，类似 ```.gitignore```，如果没有```.npmignore``` 会使用 ```.gitignore``` 替代。例如：

```bash
# 不发布src源码
src
```

- 默认发布的文件

无法通过 ```.npmignore``` 和 ```.gitignore``` 设置：

```bash
package.json
README
CHANGELOG
LICENSE/LICENCE
```
- 默认忽略的文件

不需要显式添加到 ```.npmignore``` ：

```bash
.*.swp
._*
.DS_Store
.git
.hg
.npmrc
.lock-wscript
.svn
.wafpickle-*
config.gypi
CVS
npm-debug.log
```
```node_modules``` 也是忽略的，一些依赖文件npm会自动处理，无需加到 ```.npmignore```。
 ### 版本管理
 ::: tip standard-version

 使用 [standard-version](https://github.com/conventional-changelog/standard-version) 生成版本更新和日志
 :::
 ```bash
 npm i standard-version -D
 ```

 然后在 ```package.json``` 添加一个```script```，后续升级执行 ```npm run release``` 即可。
 ```js
"scripts": {
  //  "release": "standard-version"
  "release": "standard-version && git push --follow-tags origin master && npm publish"
}
 ```

 如果git提交信息符合规范，就会自动生成日志
 参考 [Git知识>Git提交规范>基本格式](../git/#基本格式)。例如：
 ```bash
 feat: 初始化
 fix: 修复问题
 ```
 初次发布可以这样写 ```npm run release -- --first-release```

 ![npm publish](/img/npm-6.png)

 ### 发布

 ```bash
 npm publish
 ```

 集成在命令 ```npm run release``` 中。

 发布成功之后，可以在 [npm](https://www.npmjs.com/) 上搜索，类似：

 ![npm package](/img/npm-5.png)

## 管理

- 发布scope包

如果发布 `scope` 包，需要修改 `package.json` 的 `name` 为包含组织的包名，格式为：`@somescope/somepackagename`，例如 `@vue/cli-service`
```bash
npm publish --access public
```

- 删除包

使用 `npm unpublish` 命令删除某个包或者包的某个版本。

删除某个版本之后，这个版本就不再可用，必须使用新版本号；删除整个包需要24小时后才能发布新版本

```bash
# 删除包的某个版本
npm unpublish [<@scope>/]<pkg>@<version>
# 删除全部
npm unpublish [<@scope>/]<pkg> --force
```

- 废弃包

如果不用维护某个包，或者提醒使用者更新版本，可以标记某个包或者某个版本为废弃的

```bash
npm deprecate <pkg>[@<version range>] <message>

## example
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
npm deprecate my-thing@1.x "1.x is no longer supported"
```