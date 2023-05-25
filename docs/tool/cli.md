# npm脚手架

项目开发过程中， 经过版本迭代，项目变得越来越大，结构也越来越复杂。这时候，如果想创建一个新项目，要么是基于既有项目复制，然后删除、修改，要么是直接从头开始创建， 两种方式虽然能达到目的，但是费时费力，<base-tag text="vue-cli" link="https://cli.vuejs.org/zh/guide/" /> 脚手架就是一个基于<base-tag text="Vue.js" type="success" link="https://cn.vuejs.org/v2/guide/" />进行快速开发的完整系统，提供丰富的功能和配置大大降低了创建项目难度。

为此，我们可以通过自定义一个脚手架，实现简单拉取模板的功能，一定程度上 ~~（可以愉快地摸鱼）~~ 降低创建项目工作量。

部分知识同 [npm发包](./npm.html)，因此本篇不再赘述，以<base-tag text="hishion-cli" type="danger" link="https://www.npmjs.com/package/hishion-cli" />为例重点介绍如何开发。
## 起步

项目中用到的一些依赖，这里先简单了解一下。

**注意**：项目中的依赖需要安装在 ```dependencies``` 中，即：
```bash
npm install <package>
```
::: tip chalk
[chalk](https://www.npmjs.com/package/chalk) ：可以美化终端输出。
:::

::: tip commander
[commander](https://www.npmjs.com/package/commander) ：node.js的命令行，可以解析命令和参数，处理用户输入。
:::
::: tip download-git-repo
[download-git-repo](https://www.npmjs.com/package/download-git-repo) ：下载并提取git仓库。
:::

::: tip inquirer
[inquirer](https://www.npmjs.com/package/inquirer) ：常见的交互式命令行用户界面的集合。
:::
::: tip log-symbols
[log-symbols](https://www.npmjs.com/package/log-symbols) ：根据日志输出不同等级标志。
:::

::: tip ora
[ora](https://www.npmjs.com/package/ora) ：终端loading效果。
:::

## 开发
文件目录如下：
```
|-- root  
  |-- bin  
    |-- index.js
  |-- commands
    |-- init.js
  |-- lib
    |-- message.js
  |-- package.json  
  |-- README.md  
  |-- templates.json  
```
- package.json

```package.json``` 中的 ```bin``` 字段可以映射本地执行文件，在安装时，```npm``` 将把该映射到全局安装的 ```prefix/bin``` 中，或者本地安装的 ```./node_ modules/.bin```。
可以如下配置：

```js
"bin": {
  "hishion-cli": "./bin/index.js"
}
// 如果单一的执行文件，并且是包名
"bin": "./bin/index.js"
```

- bin/index.js

入口文件，处理命令行逻辑，可以在这里处理子命令。

确保 ```bin``` 引用的文件以 ```#!/usr/bin/env node``` 开头，指定用<base-tag text="node" type="success" />执行脚本，配置用于解决不同用户的 ```node``` 路径不同问题，让系统动态去查找 ```node``` 来执行脚本。如果报错 ```no such file or directory```，是因为没有把 ```node``` 安装路径添加到系统 ```PATH``` 中，去配置下环境变量即可。
```js{1}
#!/usr/bin/env node

process.env.NODE_PATH = __dirname + '/../node_modules/'

const program = require('commander')
const pkg = require('../package.json')

program.version(pkg.version).usage('<command> [options]')

program.command('init').description('create a uni-cli project')
.action(() => require('../commands/init'))

program.parse(process.argv)

if (!program.args.length) {
  program.help()
}
```
这里我们定义了一个 ```init``` 的命令，这个命令会执行 ```commands/init.js``` 的子命令。

- commands/init.js

子命令 ```init``` 入口，分4步简单说明。

1. 基础引入
```js
const path = require('path')
const {
  prompt
} = require('inquirer')
const program = require('commander')
const message = require('../lib/message')
const download = require('download-git-repo')
const ora = require('ora')
const fs = require('fs')
```
2. 交互配置
```js
const templates = require('../templates')
const question = [{
  type: 'input',
  name: 'name',
  message: 'project name',
  default: 'uni-template',
  filter(val) {
    return val.trim()
  },
  validate(val) {
    const validate = (val.trim().split(" ")).length === 1;
    return validate || 'project name is not allowed to have spaces.';
  },
  transformer(val) {
    return val || 'uni-template';
  }
}]
const question2 = [{
    type: 'input',
    name: 'description',
    message: 'project description',
    default: 'uni-app project'
  },
  {
    type: 'list',
    name: 'template',
    message: 'which template?',
    choices: ['uni', 'wepy'],
    default: 'uni'
  }
]
```
3. 执行入口
```js{4,5,6}
init()
async function init() {
  // 项目名称
  const {
    name: projectName
  } = await prompt(question)
  const rootName = path.basename(process.cwd()) // 当前目录
  const list = fs.readdirSync(process.cwd()) // 当前目录列表
  try {
    if (list.length) {
      // 目录不为空，且存在于projectName同名目录，提示已存在，结束
      let isExist = list.some(name => {
        const fileName = path.join(process.cwd(), name)
        const isDir = fs.statSync(fileName).isDirectory()
        return name === projectName && isDir
      })
      if (isExist) {
        message.error(`项目${projectName}已存在`)
        process.exit()
      }
    }
  } catch (err) {
    message.error(err)
    process.exit()
  }
  create(projectName)
};
```
4. 创建下载
```js{13,14}
async function create(projectName) {
  try {
    const {
      description,
      template
    } = await prompt(question2)
    const gitPlace = templates[template].path

    const spinner = ora('Downloading please wait...');

    spinner.start();
    // 非GitHub, GitLab, Bitbucket的仓库使用clone
    download(`${gitPlace}`, `./${projectName}`, {
      clone: gitPlace.includes('uni')
    }, (err) => {
      if (err) {
        message.error(err)
        process.exit()
      }

      fs.readFile(`./${projectName}/package.json`, 'utf8', function(err, data) {
        if (err) {
          spinner.stop();
          message.error(err)
          return;
        }

        const packageJson = JSON.parse(data);
        packageJson.name = projectName;
        packageJson.description = description;

        fs.writeFile(`./${projectName}/package.json`, JSON.stringify(packageJson, null, 2), 'utf8', function(
          err) {
          if (err) {
            spinner.stop();
            message.error(err)
          } else {
            spinner.stop();
            message.success('project init successfully!')
            message.info(
              `${`cd ${projectName}`}
${'npm install'}
${`npm run ${gitPlace.includes('wepy') ? 'dev' : 'serve'}`}
            `
            );
          }
        });
      });
    })

  } catch (err) {
    message.error(err)
    process.exit()
  }
}
```
- lib/message.js

封装 ```console.log()```方法，不详细展开。

- templates.json

这里配置需要 ```clone``` 的模板地址。

## 调试

在 ```cli``` 目录执行 ```npm link``` ，本地关联，之后我们可以简单执行命令查看一下输出：

```bash
λ hishion-cli
Usage: index <command> [options]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  init            create a uni-cli project
  help [command]  display help for command
```
可以看到命令 ```commands```中除了默认命令外，多了一个 ```init``` 的命令。实际中，我们要求的完整命令是
```bash
λ hishion-cli init
```

 ![示例图](/img/cli-1.png)

## 发布
调试确认无误之后，可以发布。
```bash
npm publish
```