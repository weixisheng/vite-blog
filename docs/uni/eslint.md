# uni-app cli模式配置ESLint校验

## 前言
```uni-app``` 是基于 ```Vue``` 语法的多端开发框架，使用```HBuilder```编辑器进行开发，但是对代码校验这一块没有比较好的插件，如果使用```vue-cli```脚手架，就可以利用```vue```的```eslint```配置，结合```prettier```得到比较的提示，提高编码质量。

以下配置完成后在VSCode中有明显变化。

## 配置
配置前安装一下依赖，之后在项目根目录下创建对应文件。

```bash
npm i eslint babel-eslint eslint-plugin-vue @vue/eslint-config-prettier eslint-plugin-prettier eslint-plugin-html -D
// or
yarn add eslint babel-eslint eslint-plugin-vue @vue/eslint-config-prettier eslint-plugin-prettier eslint-plugin-html -D
```

- eslint 全局也安装一下最好
- babel-eslint 解析js
### .editorconfig
基本编辑器编码约定
```bash
root = true

# all files
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

# md files
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```
### .prettierrc.js
代码格式化，```vscode```安装扩展```prettier```，之后会使用该文件进行格式化。

更多配置参考 [Prettier · options](https://prettier.io/docs/en/options.html)
```js
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2
}
```

### .eslintrc.js
关键文件，这里主要就是配置eslint规则。

更多配置参考 [ESlint · rules](https://eslint.org/docs/rules/)
```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // 配置js全局变量，因为是uni-app，全局的uni是不需要引入的，还有5+的plus对象
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    eqeqeq: [
      'warn',
      'always',
      {
        null: 'ignore'
      }
    ],
    semi: ['error', 'never'],
  }
}
```
### .eslintignore
可选配置，忽略校验的文件，一般项目都有一些打包文件、第三方文件等，在这里可以忽略，减少eslint带来的不便。
```bash
dist/*
```
### 测试
- 当使用了逗号的时候，编辑器会有相应提示

![eslint校验提示](/img/eslint-1.png)

- 当使用了双引号的时候，编辑器会有相应提示

![eslint校验提示](/img/eslint-2.png)

- 修复问题

编辑器会有速览问题和快速修复两个选项，可以查看问题，自己修复，或者根据配置，编辑器自动优化，包括代码层面修复以符合规则，或者添加忽略备注

![eslint修复](/img/eslint-3.png)
## 最后
经过以上配置，代码质量和规范相对没有配置的，会提升很多，显得统一的同时，避免了一些错误的产生。在使用工具一段时间之后，如果熟悉了eslint的规则，编码就算没有相关提示，也会在无形之中形成良好的编码习惯，和规范的风格。