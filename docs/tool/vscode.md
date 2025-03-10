# Visual Studio Code
## 插件
1. Add jsdoc comments: 添加注释
2. any-rule：正则校验常用
3. Autoprefixer：样式兼容性
4. CSSComb：css书写顺序格式格式
5. Eslint：语法校验
6. JavaScript (ES6) code snippets 一些快速代码片段
7. npm intelligence
8. path intelligence
9. Prettier：格式化
10. setting sync：vscode设置同步
11. Vetur：Vue开发必备，语法高亮、校验、格式化等
12. vue
13. Commnet Anchors：注释
- 代码片段
1. vue，只要新建页面，输入```vuet```按tab即可
```json
{
    "vue normal template": {
    "prefix": "vuet",
    "body": [
      "<template>",
      "\t<div>",
      "\t\t",
      "\t</div>",
      "</template>\n",
      "<script>",
      "export default {",
      "\tname: '${0}',",
      "\tdata () {",
      "\t\treturn {",
      "      ",
      "\t\t}",
      "\t},",
      "\tcreated () {\n",
      "\t},",
      "\tmethods: {\n",
      "\t}",
      "}",
      "</script>\n",
      "<style lang=\"scss\" scoped>\n",
      "</style>\n"
    ],
    "description": "Create vue template"
  }
}
```
2. uni-app页面、组件等，其中一些路径可以基于项目自行修改
```json
{
    "uni-app page template": {
    "prefix": "vue-page",
    "body": [
      "<template>",
      "\t<view>",
      "\t\t",
      "\t</view>",
      "</template>\n",
      "<script>",
      "import { staticURL } from '@/util/config'",
      "import {  } from '@/api/index'",
      "export default {",
      "\tname: '${0}',",
      "\tdata () {",
      "\t\treturn {",
      "\t\tstaticURL",
      "\t\t}",
      "\t},",
      "\tonLoad (options) {\n",
      "\t},",
      "\tmethods: {\n",
      "\t}",
      "}",
      "</script>\n",
      "<style lang=\"scss\" scoped>",
      "@import '../../style/variable.scss';\n",
      "</style>\n"
    ],
    "description": "Create uni-app page template"
  },
  "uni-app component template": {
    "prefix": "vue-com",
    "body": [
      "<template>",
      "\t<view>",
      "\t\t",
      "\t</view>",
      "</template>\n",
      "<script>",
      "export default {",
      "\tname: '${0}',",
      "\tprops: {\n},",
      "\tdata () {",
      "\t\treturn {",
      "      ",
      "\t\t}",
      "\t},",
      "\tmounted () {\n",
      "\t},",
      "\tmethods: {\n",
      "\t}",
      "}",
      "</script>\n",
      "<style lang=\"scss\" scoped>",
      "@import '../style/variable.scss';\n",
      "</style>\n"
    ],
    "description": "Create uni-app component template"
  }
}
```

## 设置
> 折叠配置文件

在编辑器直接设置，配置参考下方json <base-tag type="success" text="推荐" size="small" />

或者项目根目录下新建.vscode/settings.json文件，内容如下：
```json
{
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.expand": false,
  "explorer.fileNesting.patterns": {
    "tsconfig.json": "tsconfig.*.json, env.d.ts", // [!code warning]
    "vue.config.*": "jsconfig*, vitest.config.*, cypress.config.*, playwright.config.*, babel.config.*, .babelrc, .browserslistrc", // [!code warning]
    "package.json": "package-lock.json, pnpm*, .yarnrc*, yarn*, .eslint*, eslint*, .prettier*, prettier*, .editorconfig, *.sh" // [!code warning]
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}

```

当工作区包含多个项目时，仅设置 `explorer.fileNesting.expand` 参数可能无法生效。此时，还需要通过以下步骤启用嵌套功能：
1. 点击菜单栏中的 **文件 > 首选项 > 设置**。
2. 在设置中找到 `explorer.fileNesting.enabled` 并将其设置为 `true`，以启用文件嵌套功能。
3. 同时，将 `explorer.fileNesting.expand` 设置为 `false`，这样嵌套功能将不会默认展开文件夹，从而避免不必要的混乱。

通过以上操作，可以确保嵌套功能在多项目工作区中正常生效。