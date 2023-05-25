# Vue项目配置ESLint校验
Vue项目配置ESLint校验，并使用prettier进行代码格式化。

## 配置
配置前安装一下依赖，之后在项目根目录下创建对应文件。

```bash
npm i eslint babel-eslint eslint-plugin-vue prettier eslint-plugin-prettier @vue/cli-plugin-eslint @vue/eslint-config-prettier -D
// or
yarn add eslint babel-eslint eslint-plugin-vue prettier eslint-plugin-prettier @vue/cli-plugin-eslint @vue/eslint-config-prettier -D
```

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
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf'
}
```

### .eslintrc.js
关键文件，这里主要就是配置eslint规则。

更多配置参考 [ESlint · rules](https://eslint.org/docs/rules/)
```js
module.exports = {
  root: true,
  globals: {
    process: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  plugins: ['babel'],
  rules: {
    'semi': [
      'error',
      'never'
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ]
 }
}

```
### .eslintignore
可选配置，忽略校验的文件，一般项目都有一些打包文件、第三方文件等，在这里可以忽略，减少eslint带来的不便。
```bash
dist/*
```
### vscode编辑器

```json
"[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
},
// 其他文件不用自动格式化可以单独配置
"[scss]": {
  "editor.defaultFormatter": "michelemelluso.code-beautifier",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": false
  }
},
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
## 提交校验

一些旧项目，如果一次性格式化，可能会出现未知错误，最好在提交的代码进行格式化，确保存入仓库的代码风格统一。

- [```husky```](https://typicode.github.io/husky/#/) 处理pre-commit等git hooks
- [```lint-staged```](https://www.npmjs.com/package/lint-staged) 对git提交代码使用linter
```bash
npm i lint-staged husky -D
# or
yarn add lint-staged husky -D
```

配置 ```package.json```文件，根据 [```Vue CLI```](https://cli.vuejs.org/zh/guide/cli-service.html#git-hook)最新说明，```@vue/cli-service```会安装yorkie方便指定 Git Hook，且不兼容```husky```，为此无需安装```husky```也可。
```json
  "gitHooks": {
    "pre-commit": "lint-staged --allow-empty"
  },
  "lint-staged": {
    "src/**/*.{js,vue}": [
      "vue-cli-service lint"
    ]
  },
```

## 最后

这样在保存代码时，编辑器会根据prettier配置格式化代码。

提交的代码如果格式不符合，也会自动格式化并提交。