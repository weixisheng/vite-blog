::: tip 提交规范
社区有多种 Commit message 的写法规范，比较流行的方案是约定式提交规范（Conventional Commits），它受到了```Angular```提交准则的启发，并在很大程度上以其为依据。
:::

## 基本格式
```bash
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```
其中，Header 是必需的，Body 和 Footer 可以省略。例如：
```bash
feat: 新增优惠券功能

fix(coupon-picker.vue): 修复优惠券无法选择的问题
```

#### Header
- type 用于说明 commit 的类别，只允许使用下面的标识。
```js
/* 主要type */
feat // 新功能（feature）
fix // 修复bug

/* 特殊type */
docs // 改动文档内容（documentation）
style // 格式（不影响代码运行的变动，去掉空格、缩进等）
refactor // 重构（即不是新增功能，也不是修改bug的代码变动）
chore // 不修改src或者test的其余修改，构建过程或辅助工具的变动（修改readme，webpack配置）

/* 其他type */
pref // 提升页面性能
test // 增加测试或修改测试
build // 影响构建或其他依赖的改动（gulp, npm等）
ci // 持续集成的相关改动

/* 撤销type */
revert // 撤销以前的commit，revert:开头，跟着撤销的header。
// 例如：  revert: fix(coupon-picker.vue): 修复优惠券无法选择的问题
```
- scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
- subject 是 commit 目的的简短描述，不超过50个字符。
#### Body
Body 部分是对本次 commit 的详细描述，可以分成多行。
#### Footer
Footer 部分只用于两种情况:
- 不兼容变动  
如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。
- 关闭 Issue  
如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。
```bash
Closes #123, #245, #992
```

## 工具校验
#### [Commitizen](https://github.com/commitizen/cz-cli)
Commitizen是一个撰写合格 Commit message 的工具。全局安装
```bash
npm i -g commitizen
```
然后在项目目录里面运行命令，使其支持Angular的提交格式规范
```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
# or yarn
commitizen init cz-conventional-changelog --yarn --dev --exact
```
使用：
```bash
git add .
git cz
```
![提交信息](/img/git-1.png)
![提交结果](/img/git-2.png)

#### [validate-commit-msg](https://github.com/conventional-changelog-archived-repos/validate-commit-msg)
validate-commit-msg 一款Node插件，检查项目的 Commit message 是否符合格式。

- 新建.vcmrc文件
```json
{
  "types": ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"],
  "scope": {
    "required": false,
    "allowed": ["*"],
    "validate": false,
    "multiple": false
  },
  "warnOnFail": false,
  "maxSubjectLength": 100,
  "subjectPattern": ".+",
  "subjectPatternErrorMsg": "subject does not match subject pattern!",
  "helpMessage": "",
  "autoFix": true
}
```
- package.json配置
```json
{
  ...
  ...
  "config": {
    "validate-commit-msg": {
      "types": ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"],
      "scope": {
        "required": false,
        "allowed": ["*"],
        "validate": false,
        "multiple": false
      },
      "warnOnFail": false,
      "maxSubjectLength": 100,
      "subjectPattern": ".+",
      "subjectPatternErrorMsg": "subject does not match subject pattern!",
      "helpMessage": "",
      "autoFix": true
    }
  }
}
```
- ghooks配置

```bash
 npm i ghooks --save-dev
```

```json
{
  ...
  "config": {
    "ghooks": {
      "commit-msg": "validate-commit-msg"
    }
    ...
  } 
}
```
![提交结果](/img/git-3.png)

## CHANGELOG
使用 `conventional-changelog-cli`生成 `changelog`。全局安装
```bash
npm install -g conventional-changelog-cli
```

在需要使用的项目下

```bash
# 输出所有changelogs，一般第一次使用
conventional-changelog -p angular -i CHANGELOG.md -s -r 0
# 基于先前changelogs添加
conventional-changelog -p angular -i CHANGELOG.md -s
```

参数说明

| 配置                | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| -i, --infile        | 标记读取changelog的文件                                      |
| -o, --outfile       | 将changelog写入的文件路径，若未指定，打印到输出              |
| -s, --same-file     | 输出到跟infile的同一个文件，这样不用传outfile参数            |
| -p, --preset        | 使用的预设名称，可选项：angular, atom, codemirror, ember, eslint, express, jquery, jscs, jshint |
| -r, --release-count | 从最新版本生成多少个版本，传0的话，重新生成所有版本，默认1   |

## git提交添加表情

更多查看[Git emoji](./emoji)
