<script setup>
  import BaseTag from '../components/BaseTag.vue'
</script>
::: tip 前端编码规范
旨在增强团队协作、提高代码质量，保持代码最大程度的一致性、降低维护代码的成本。
:::

## 命名规范
约定前端项目中合法的命名格式有以下4种（后续提及命名风格时直接以英文展示）：
1. `camelCase`: 小驼峰式命名
2. `PascalCase`: 大驼峰式命名
3. `kebab-case`: 短横线连接式命名
4. `CONSTANT_CASE`: 全大写下划线式命名
<img src="/img/standard-name.png" width="600" />

### 通用命名
1. <base-tag type="success" text="强制" size="small" />命名禁止使用拼音与英文混合的方式，更不允许直接使用中文的方式。 

:neutral_face:说明：正确的英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免。

:blush:正例：`discount` / `seckill` / `rmb` （国际通用的名称可视为英文）

:fearful:反例：`dazhe` [打折] / `miaosha` [秒杀]

2. <base-tag type="success" text="强制" size="small" />使用完整的单词组合来表达，名称具有语义性，可以体现功能。

:neutral_face:说明：代码要避免不规范的缩写和随意命名，严重降低了代码的可阅读性。

:blush:正例：`function dateFormat() {}` / `let orderCount = 1` / `class="user-avatar"`

:fearful:反例：`function a() {}` / `let b = 1` / `class="c"`

3. <base-tag type="success" text="强制" size="small" />禁止使用特殊字符命名。

:fearful:反例：`user&` / `user<` / `user"`

4. <base-tag type="success" text="强制" size="small" class="mb-5" />代码中变量、函数和参数等不要使用保留关键字。

5. <base-tag type="primary" text="推荐" size="small" />不要使用和广告挂钩的单词做样式和页面路径，因为有些浏览器插件（Chrome的广告拦截插件等）可能会过滤这些命名，导致页面访问异常。

:fearful:反例：`ad` / `banner` / `gg` / `guanggao`

6. <base-tag type="info" text="建议" size="small" />项目中使用增删改查、详情等功能时，统一使用以下单词
    - `add`: 新增/添加/创建，如`views/product/add`, `views/shop/add-product`
    - `edit`: 编辑/修改，如`views/product/edit`, `views/shop/edit-product`
    - `delete`: 删除，如`views/product/delete`, `views/shop/delete-product`
    - `detail`: 详情/明细，如`views/product/detail`, `views/shop/product-detail`
    - `list`: 查询列表/记录，如`views/product/list`, `views/shop/product-list`

### 目录文件命名
1. <base-tag type="success" text="强制" size="small" />项目命名采用<code>kebab-case</code>命名，最好能体现项目特色。

:neutral_face:说明：利用项目中的主要功能特点，结合项目终端类型命名，可以更好归类项目。

:blush:正例：`salesman-admin`（业务员后台管理系统） / `salesman-mp`（业务员小程序） 

:fearful:反例：`saleAdmin` / `SaleMp` / `sale_admin` / `my-project`

2. <base-tag type="success" text="强制" size="small" />目录/文件夹命名采用<code>kebab-case</code>命名，有复数结构时，要采用复数命名法，普遍认同的目录名称不用复数。

:neutral_face:说明：这些目录无需遵循复数命名风格：`src` / `store` / `router` / `static` / `config` / `api` / `wxs`

:blush:正例：`styles` / `utils` / `assets` / `common-setting`

:fearful:反例：`style` / `util` / `img`

3. <base-tag type="success" text="强制" size="small" />文件命名采用<code>kebab-case</code>命名，体现文件代表的功能和特点等。

:neutral_face:说明：项目中所有文件，包括js/ts、css/stylus/less/scss、html/vue和图片等。

:blush:正例：`time-mixin.js` / `product-detail.scss` / `none-data.vue`

:fearful:反例：`a.js` / `birthdayPackage.vue` / `BaseAvatar.png`

4. <base-tag type="success" text="强制" size="small" />除了需要动态适配的文件，其他文件不得简单添加数字、字母等非语义性字符区分。

:neutral_face:说明：可能有些图片是区分主题的，例如theme为1,2,3...，这样图片路径可以动态拼接src=`static/logo-${theme}.png`，为此不做限制。

:blush:正例：`auth-btn.vue` / `middle-btn.vue` / `user.js`

:fearful:反例：`btn1.vue` / `btn2.vue` / `btn-copy.vue` / `api1.js` / `api-t.js`

### HTML命名
1. <base-tag type="success" text="强制" size="small" />标签名、类名、标签属性和属性值统一采用小写。

:neutral_face:说明：虽然HTML语言不区分大小写，但是小写看起来更纯净，统一采用小写。

2. <base-tag type="success" text="强制" size="small" />id属性值保持唯一，即在整个HTML范围内只能出现一次。

:blush:正例：
```html
<div id="topHeader"></div>
<div id="bottomHeader"></div>
```
:fearful:反例：
```html
<div id="topHeader"></div>
<div id="topHeader"></div>
```
3. <base-tag type="primary" text="推荐" size="small" />标签的自定义属性以data- 开头。

:blush:正例：
```html
<div class="home-page" data-theme="dark"></div>
```
### JS命名
1. <base-tag type="success" text="强制" size="small" />JS中的类和构造函数采用<code>PascalCase</code>命名。

:blush:正例：`function Request() {}` / `class Request {}`

:fearful:反例：`function request() {}` / `class request {}`

2. <base-tag type="success" text="强制" size="small" />JS中的变量、函数、方法名、参数名采用<code>camelCase</code>命名。

:neutral_face:说明：因为接口传参的字段和返回的字段不一定遵从`camelCase`命名，与接口对接的字段可以原样保存，除此之外一律采用`camelCase`命名。

:blush:正例：`btnLoading` / `function getData(pageSize) {}`

:fearful:反例：`BtnLoading` / `fucntion getdata(PageSize) {}`

3. <base-tag type="success" text="强制" size="small" />JS中的常量采用<code>CONSTANT_CASE</code>命名。

:neutral_face:说明：常量名力求语义表达清楚、完整，不用担心名称过长，使用`const`声明。

:blush:正例：`COUNTDOWN_TIME` / `MAX_STOCK_COUNT`

:fearful:反例：`count_time` / `MAX_COUNT`

4. <base-tag type="primary" text="推荐" size="small" />项目中的请求采用<code>camelCase</code>命名，并且以 <code>api</code> 为前缀。

:neutral_face:说明：API请求稍微特殊一点，如果采用`camelCase`命名，可能会跟页面中的变量、方法混淆，通过特定格式`apiXxYy`更容易区分。

:blush:正例：`apiGetUserInfo`

:fearful:反例：`getUserInfo` / `MyInfo` / `my_detailInfo`

### CSS命名
1. <base-tag type="success" text="强制" size="small" />CSS中类名采用<code>kebab-case</code>命名。

:blush:正例：`class="user-avtar"` 

:fearful:反例：`class="my_header"` / `class="myHeader"` / `class="MyHeader"`

2. <base-tag type="success" text="强制" size="small" />CSS中id采用<code>camelCase</code>命名。

:blush:正例：`id = “userAvatar"`

3. <base-tag type="success" text="强制" size="small" />scss中的变量、mixin采用<code>kebab-case</code>命名。

:blush:正例：`$state-prefix` / `@mixin scroll-bar`

4. <base-tag type="success" text="强制" size="small" />scss中的函数采用<code>camelCase</code>命名。

:blush:正例：`@function containWhenFlag() {}`

### Vue命名
1. <base-tag type="success" text="强制" size="small" />组件name为多个单词，采用<code>PascalCase</code>命名。

:neutral_face:说明：HTML元素都是单个单词，组件name使用多个单词的组合，可以避免跟现有的以及未来的HTML元素冲突。

2. <base-tag type="success" text="强制" size="small" />在使用组件的地方统一采用<code>kebab-case</code>命名。

:neutral_face:说明：由于HTML大小写不敏感，而且在单文件组件、字符串模板和DOM模板，需要区分组件名，为此统一约定采用`kebab-case`命名。

3. <base-tag type="success" text="强制" size="small" />prop声明采用<code>camelCase</code>命名，在template中使用时属性采用<code>kebab-case</code>命名。

:neutral_face:说明：单纯遵循每个语言的约定，JavaScript中更自然的是`camelCase`，而在HTML中是`kebab-case`。

:blush:正例：（涉及1-3点）
```js
// components/md-table.vue
export default {
  name: 'MdTable', // 1.组件名PascalCase
  props: {
    tableLoading: { // 3.prop声明camelCase
      type: Boolean,
      default: false
    }
  }
}
// test.vue 
// 2.组件使用kebab-case 3.属性kebab-case
<md-table :table-loading="tableLoading"></md-table>
```
4. <base-tag type="success" text="强制" size="small" />Prop声明不要使用保留关键字和<code>data</code> / <code>methods</code>等Vue选项名称。

:neutral_face:说明：Prop不能使用关键字，与Vue选项相同会有覆盖的风险。

:blush:正例：
```js
value: {
  type: Object,
  default () {
    return {}
  }
}
```
:fearful:反例：
```js
data: {
  type: Object,
  default() {
    return {}
  }
}
```
5. <base-tag type="success" text="强制" size="small" />vue中的引用（<code>ref</code>）采用<code>camelCase</code>命名。

:neutral_face:说明：ref被用来给元素或子组件注册引用信息，绑定在父组件的refs对象中，根据引用使用在DOM元素或子组件，引用指向DOM元素或子组件实例。当ref与`v-for`结合时，引用是一个数组。

:blush:正例：
```html
<!-- this.$refs.testTag 包含三个数组实例-->
<el-tag v-for="i in 3" ref="testTag" :key="i" type="success">
   test tag
</el-tag>
```
6. <base-tag type="success" text="强制" size="small" />路由path采用<code>kebab-case</code>命名。

:neutral_face:说明：尽量和vue文件的目录结构保持一致，path和文件名都是`kebab-case`，这样方便查找文件。

:blush:正例：
```js
// router.js
path: '/shop/product-list'
```
7. <base-tag type="success" text="强制" size="small" />路由<code>name</code>采用<code>PascalCase</code>命名。

:neutral_face:说明：一般情况下与所对应的`.vue`文件中的`name`字段保持一致。

:blush:正例：
```js{3,9}
// product-list.vue
export default {
  name: 'ProductList',
}

// router.js
{
  path: '/shop/product-list',
  name: 'ProductList',
  component: () => import('@/views/shop/product-list.vue')
}
```
8. <base-tag type="success" text="强制" size="small" /> uni-app项目页面路径采用<code>kebab-case</code>命名，对应`page.json`的<code>path</code>配置。

:blush:正例：
```json
// page.json
{
  "path": "pages/member/card-list"
}
```
## HTML规范
HTML规范适用于普通html文件、Vue里面的template模板和小程序的WXML文件。
### 格式规范
1. <base-tag type="success" text="强制" size="small" />标签必须嵌套正确，统一使用2个空格缩进。

:blush:正例：
```html
<div>
  <p></p>
</div>
```

2. <base-tag type="success" text="强制" size="small" />标签必须合法且闭合，空元素和没有内容的组件自闭合。

:neutral_face:说明：常见的HTML空元素：`img` / `input` / `link` / `meta` 。

:blush:正例：
```html
<img src="" alt="" />
<my-component />
```
3. <base-tag type="success" text="强制" size="small" />元素属性值使用双引号（"）包括，boolean类型的属性可不加属性值。

:neutral_face:说明：boolean属性不加属性值，默认生效，如需动态切换还是需要书写完整。

:blush:正例：
```html
<el-button type="primary" plain>提交</el-button>
<el-button type="danger" :loading="btnLoading">删除</el-button>
```
4. <base-tag type="primary" text="推荐" size="small" />使用空行分隔大型或逻辑代码块。

:neutral_face:说明：为了提高可读性，可以根据页面中的功能模块，用一个空行分隔。

5. <base-tag type="primary" text="推荐" size="small" />单行代码字符不要超过80，超过三个属性换行。

:neutral_face:说明：每个属性单独一行，这样更清晰、易阅读。

:blush:正例：
```html
<el-date-picker
   v-model="form.time"
   type="date"
   placeholder="选择日期"
   class="w-300"
></el-date-picker>
```

### 语言规范
1. <base-tag type="success" text="强制" size="small" />html文件必须加上DOCTYPE声明，并统一使用HTML5的文档类型声明
`<!DOCTYPE html>`。同时声明页面语言`<html lang="zh-CN">`，字符集`<meta charset="UTF-8">`。

:blush:正例：
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
  </head>
</html>
```
2. <base-tag type="primary" text="推荐" size="small" />标签尽量保证语义性，减少标签数量，DOM节点过多会影响页面渲染。

:blush:正例：
```html
<header></header>
<main>
   <nav></nav>
   <section></section>
</main>
<footer></footer>
```
:fearful:反例：
```html
<div class="header-container">
  <div class="header"></div>
</div>
```
3. <base-tag type="primary" text="推荐" size="small" />使用 <code>class</code> 选择器实现样式，避免 <code>id</code> 和标签等选择器强耦合。

### 注释规范
HTML注释语法为`<!-- 注释内容 -->`。在`<!--`之后增加一个空格，在`-->`之前增加一个空格。

1. <base-tag type="primary" text="推荐" size="small" />页面一个完整的功能、模块增加相关说明。

:blush:正例：
```html
<!-- 优惠券 -->
<div class="coupon-container"></div>
```
2. <base-tag type="primary" text="推荐" size="small" />功能、模块代码较多的，可以标注起始段和结束段。

:blush:正例：
```html
<!-- 秒杀 开始 -->
<div class="seckill-container">
  ...
</div>
<!-- 秒杀 结束 -->
```
## JS规范
### 格式规范
1. <base-tag type="success" text="强制" size="small" />使用2个空格缩进。

2. <base-tag type="success" text="强制" size="small" />单行代码字符不要超过80，超出需拆分多行，提高代码可读性和可维护性。

:blush:正例：
```js
const foo = { bar: 'This is a bar.', 'baz': { 'qux': 'This is a qux' }, 'difficult': 'to read' }
```
:fearful:反例：
```js
const foo = {
  bar: 'This is a bar.',
  baz: { qux: 'This is a qux' },
  easier: 'to read'
}
```
3. <base-tag type="success" text="强制" size="small" />代码后面无需加分号（;）。

:neutral_face:说明：当JavaScript遇见一个没有分号的换行符时，JavaScript引擎会使用自动分号插入规则（`automatic semicolon insertion`）视换行符为结束。特殊语法需要添加分号，防止报错，常见的场景有：三目表达式函数前面的语句，解构赋值括号前。

:blush:正例：
```js{2,5}
this.checkTimes()
this.btnLoading = true;
(this.isAdd ? API_APPOINTMENT_ADD : API_APPOINTMENT_EDIT)()

;({ result, msg } = rules[check](val, errMsg))
```
4. <base-tag type="success" text="强制" size="small" />统一使用单引号（<code>'</code>）定义字符串，而不是双引号（<code>"</code>）。

:neutral_face:说明：ES6中模板字符串的反引号（`）也是支持的，但推荐在包含插值或换行时使用。

:blush:正例：
```js
let result = ''
let result = `${msg}`
```
:fearful:反例：
```js
let result = ""
```
5. <base-tag type="success" text="强制" size="small" />大括号风格。如果大括号内容为空，可以{}表示，无需换行；如果非空则左大括号前不换行，左大括号后换行；右大括号前换行，右大括号后还有else等代码块不换行，表示终止的右大括号必须换行。

:blush:正例：
```js
if (firstName === 'hello') {
  console.log(firstName)
} else {
  console.log(lastName)
}
// 以及
if (firstName === 'hello') {
  return
}
console.log(lastName)
```
:fearful:反例：
```js
if (firstName === 'hello') {
  console.log(firstName)
} 
else {
  console.log(lastName)
}
// 以及
if (firstName === 'hello') 
{
  console.log(firstName)
} 
else 
{
  console.log(lastName)
}
```
6. <base-tag type="success" text="强制" size="small" />统一空格维持一致性。

:neutral_face:说明：以下几种情况需要添加空格

（1）算数运算符（`+ - * / %`）、赋值运算符（`= += -= *= /= %=`）、比较运算符（`== === != !== > < >= <= ?:`）、逻辑运算符（`&& || !`）的前后加一个空格

（2）代码块左大括号（`{`）前加一个空格

（3）关键词（`else while catch finally`）前加一个空格

（4）对象的属性值前加一个空格

（5）函数声明或函数表达式的左大括号（`{`）前加一个空格

（6）关键词（`if else for while do switch case try catch finally return typeof`）后加一个空格

（7）for循环分号（`;`）后面加一个空格

（8）逗号前避免使用空格，逗号后面加一个空格

:blush:正例：（涉及1-8点）
```js
// 1.运算符前后加空格
const person = {
  firstName: 'hello',// 4.对象属性前加空格
  lastName: 'world'
}
// 5.函数声明 `{` 前加空格
// 8.函数参数多个，逗号后加空格
function log({ firstName, lastName }) {
  // 2.代码块 `{` 前加空格
  if (firstName === 'hello') {
    console.log(firstName)
    // 3.关键词前加空格
    // 6.关键词后加空格
  } else {
    console.log(lastName)
  }
}
log(person)
// 7.for循环分号后加空格
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```
7. <base-tag type="success" text="强制" size="small" />不使用拖尾逗号。

:neutral_face:说明：拖尾逗号可以使git差异更清洁，但是没有设置好babel编译选项的话，可能个别机型/浏览器会报错。统一约定在最后一个元素或属性不使用拖尾逗号。

:blush:正例：
```js
const person = {
  firstName: 'hello',
  lastName: 'world'
}

const languages = ['React', 'Vue']
```
:fearful:反例：
```js
const person = {
  firstName: 'hello',
  lastName: 'world',
}
const languages = ['React', 'Vue',]
```
8. <base-tag type="primary" text="推荐" size="small" />不同逻辑、不同定义、不同业务代码之间插入一个空行，文件末尾插入一个空行。

:neutral_face:说明：通过空行在视觉上对代码进行分组，也能更方便地知道，后续新加的逻辑的所在位置。任何情形，没有必要插入多个空行进行分隔。
### 语言规范
1. <base-tag type="success" text="强制" size="small" />变量必须先声明后使用，使用<code>let/const</code>替代<code>var</code>，而且<code>const</code>性能更佳。

:neutral_face:说明：优先使用const声明，如果需要重新赋值的，使用let声明。const声明可以避免因重新赋值导致的错误或产生难以理解的代码。

:blush:正例：
```js
let result = '' 
const COUNTDOWN_TIME = 60
const obj = {}
```
:fearful:反例：
```js
var result = '' 
const countdownTime = 60
```
2. <base-tag type="success" text="强制" size="small" />将所有的<code>import</code>语句放在所有非导入语句的最上边。

:neutral_face:说明：由于所有import被提前，保持它们在顶部是为了防止意外发生。

3. <base-tag type="success" text="强制" size="small" />禁止随意使用<code>console</code>，大量使用<code>console</code>会有性能问题。

:neutral_face:说明：杜绝输出一些简单的日志仅用于判断某个逻辑是否执行，这些应该调试完删除。可以使用的地方：输出请求信息以便定位接口，输出捕获的异常信息。

:blush:正例：
```js
api().then(res => {}).catch(err => {
  console.log(err)
})
```
:fearful:反例：
```js
private handleSearch() {
    this.getFindAppraiseList(1, this.page.size)
    console.log(this.filter, '111111', this.createTime)
}
```
4. <base-tag type="success" text="强制" size="small" />代码中禁止出现<code>debugger</code>等断点调试语句，这些应该调试完删除。

:neutral_face:说明：可以利用浏览器或调试工具的sources面板进行调试，且功能更强大。

5. <base-tag type="success" text="强制" size="small" />禁止使用<code>arguments</code>定义参数名称，且不要对参数赋值。

:neutral_face:说明：定义参数为arguments，会优先于函数给定范围的arguments对象。重新赋值参数会导致意外的行为，可以使用参数默认值语法。

:blush:正例：
```js
function log(name = 'hello', args) {}
```
:fearful:反例：
```js
function log(name, arguments) {
name = 'prevent'
}
```
6. <base-tag type="success" text="强制" size="small" />使用对象字面量语法创建对象、数组字面量创建数组。

:blush:正例：
```js
const obj = {}
const arr = []
```
:fearful:反例：
```js
const obj = new Object()
const arr = new Array()
```
7. <base-tag type="success" text="强制" size="small" />不要直接使用<code>undefined</code>判断变量，通过<code>typeof</code>与<code>'undefined'</code>比较。

:blush:正例：
```js
if (typeof name === 'undefined')
```
:fearful:反例：
```js
name === undefined
```
8. <base-tag type="success" text="强制" size="small" />定时器任务（<code>setTimeout / setInterval</code>等）及时销毁。

:neutral_face:说明：非业务需要前提下，在页面隐藏、页面路由变化时销毁或暂停定时器任务，特别是setInterval，不然相关逻辑依旧在后台执行。

9. <base-tag type="primary" text="推荐" size="small" />函数里面的参数不要使用<code>arguments</code>，使用剩余运算符（...）。

:neutral_face:说明：arguments只是一个类数组，而剩余运算符是一个真正的数组。

:blush:正例：
```js
function test(...args) {
  return args.map(item => item * 2)
}
```
:fearful:反例：
```js
function test() {
  const args = Array.prototype.slice.call(arguments)
  return args.map(item => item * 2)
}
```
10. <base-tag type="primary" text="推荐" size="small" />使用对象属性的简洁表达式。

:neutral_face:说明：在对象直接写入变量和函数，作为属性和方法。

:blush:正例：
```js
const name = 'hello'
const language = {
  name,
  sayName() {
    console.log(this.name)
  }
}
```
:fearful:反例：
```js
const name = 'hello'
const language = {
  name: name,
  sayName: function() {
    console.log(this.name)
  }
}
```
11. <base-tag type="primary" text="推荐" size="small" />浅拷贝对象、数组时，或将一个类数组转换成一个数组时，使用扩展运算符（...）。

:blush:正例：
```js
const NEW_OPTIONS = { ...DEFAULT_OPTIONS, ...options }

const copyArr = [...originArr]

const elements = document.querySelectorAll('.item')
const nodes = [...elements]
```
:fearful:反例：
```js
const NEW_OPTIONS = Object.assign({}, DEFAULT_OPTIONS, options)
// 禁止直接操作源对象
const NEW_OPTIONS = Object.assign(DEFAULT_OPTIONS, options)
```
12. <base-tag type="primary" text="推荐" size="small" />在访问和使用对象的多个属性时，优先使用对象的解构。

:neutral_face:说明：解构可以避免为这些属性创建临时引用。

:blush:正例：
```js
function log(user) {
  const { firstName, lastName } = user
  return `${firstName} ${lastName}`
}
// 更好
function log({firstName, lastName}) {
  return `${firstName} ${lastName}`
}
```
:fearful:反例：
```js
function log(user) {
  const firstName = user.firstName
  const lastName = user.lastName
  return `${firstName} ${lastName}`
}
```
13. <base-tag type="primary" text="推荐" size="small" />对于返回多个值的函数使用对象，而不是数组。

:neutral_face:说明：使用对象就可以随时添加新的属性或者改变属性的顺序，调用方不用修改。

:blush:正例：
```js
function processInput(input) {
  // 处理代码...
  return { left, right, top, bottom }
}

// 调用者只选择他们需要的数据。
const { left, top } = processInput(input)
```
:fearful:反例：
```js
function processInput(input) {
  // 处理代码...
  return [left, right, top, bottom]
}

// 调用者需要考虑返回数据的顺序。
const [left, _, top] = processInput(input)
```
14. <base-tag type="primary" text="推荐" size="small" />使用JS更高优先级的函数代替<code>for</code>、<code>for-in</code>或<code>for-of</code>循环。

:neutral_face:说明：使用map()、every()、some()、filter()、find()、findIndex()、reduce()...等遍历数组，若有需要，使用Object.keys()、Object.values()、Object.entries()迭代对象生成数组。

:blush:正例：
```js
const numbers = [1, 2, 3]

let sum = 0
numbers.forEach(num => sum += num)
// 更好
const sum = numbers.reduce((total, num) => total + num, 0)
```
:fearful:反例：
```js
let sum = 0
for (let num of numbers) {
  sum += num
}
```
15. <base-tag type="primary" text="推荐" size="small" />使用严格比较运算符即<code>===</code>和<code>!==</code>，而不是<code>==</code>和<code>!=</code>。

:blush:正例：
```js
typeof check === 'function'
```
:fearful:反例：
```js
typeof check == 'function'
```

16. <base-tag type="primary" text="推荐" size="small" />函数设计应当遵循低耦合的基本原则，一个函数完成单一的逻辑，复杂的逻辑进一步抽取，特定算法等不可(适合)分割的逻辑除外。

17. <base-tag type="primary" text="推荐" size="small" />善于利用三元表达式、短路运算符等优化<code>if</code>条件判断。

:blush:正例：
```js
res = status === 200 ? '成功' : '失败'
isValid && func()
```
:fearful:反例：
```js
if (status === 200) {
  res = '成功'
} else {
  res = '失败'
}
if (isValid) {
  func()
}
```
18. <base-tag type="primary" text="推荐" size="small" />TypeScript中，声明函数、变量的类型，全局变量、函数、接口需先定义，书写内部空间和模块等声明文件(<code>*.d.ts</code>)。

19. <base-tag type="info" text="建议" size="small" />用好TypeScript的类型检查，尽量从根本原因解决一些警告和错误，而不是使用<code>// @ts-ignore</code>等跳过检验。
### 注释规范
JavaScript注释语法分为单行注释（`// 注释内容`）和多行注释（`/* 注释内容 */`）。

:neutral_face:说明：单行注释中，注释文字与`//`之间保留一个空格；多行注释建议在至少三行注释时使用，第一行为`/**`，最后为`*/`，中间行以`*`开始，注释文字与`*`之间保留一个空格。

:blush:正例：
```js
// 单行注释

/**
 * 多行注释
 */
```
1. <base-tag type="primary" text="推荐" size="small" />核心方法、业务逻辑强相关代码，添加注释，简述功能目的、入参出参（若有）等，采用多行注释。

:neutral_face:说明：代码本身是清晰的、可读性强的，可以无需注释。

:blush:正例：
```js
/**
 * 防抖函数
 * @param delay 延迟 单位毫秒，默认300
 * @param options leading: true先调用后等待 trailing:true先等待后调用
 *                都为true则可以多次调用
 * @returns {Function}
 */
function Debounce(
  delay = 300,
  options = { leading: true, trailing: false }
) {}
```
2. <base-tag type="primary" text="推荐" size="small" />项目中封装的逻辑，增加使用说明，采用多行注释。

:blush:正例：
```js
/**
 * 规则封装
* e.g.:  mobile: [validate({ check: 'mobile', nullMsg: '请输入手机号' })]
 * @param required 是否必填，默认true
 * @param trigger 触发操作
 * @param nullMsg required=true时提示信息
 */
function validate() {}
```
3. <base-tag type="primary" text="推荐" size="small" />业务逻辑使用的变量，增加说明，包括含义，可能出现的值，采用单行注释。

:blush:正例：
```js
let popupType = 1 // 弹窗类型 1.xx 2.yy
```
## CSS规范
### 格式规范
1. <base-tag type="success" text="强制" size="small" class="mb-5" />使用2个空格缩进。
2. <base-tag type="success" text="强制" size="small" class="mb-5" />每个属性声明以分号（;）结尾。
3. <base-tag type="success" text="强制" size="small" class="mb-5" />统一使用展开格式，每个选择器及属性单独一行。
4. <base-tag type="success" text="强制" size="small" class="mb-5" />使用多个选择器时，每个选择器单独一行，逗号在前一个选择器末尾。
5. <base-tag type="success" text="强制" size="small" class="mb-5" />每个规则集包含在大括号里（{}），左大括号不换行，右大括号换行。
6. <base-tag type="success" text="强制" size="small" class="mb-5" />统一空格维持一致性。

:neutral_face:说明：以下几种情况需要添加空格

（1）属性值前

（2）选择器（`> + ~`）前后

（3）左大括号（`{`）前

（4）`!important`前

7. <base-tag type="success" text="强制" size="small" />样式选择器、属性名、属性值关键词全部小写。

:blush:正例：（涉及1-7点）
```css
.el-input,
.el-radio {
  color: #333;
}
```
:fearful:反例：
```css
.el-input,.el-radio{
  color:#333;
}
```
8. <base-tag type="success" text="强制" size="small" class="mb-5" />不允许存在空的规则，重复的规则。
9. <base-tag type="primary" text="推荐" size="small" class="mb-5" />去掉小数前面的0，去掉数字中不必要的小数点和0。
10. <base-tag type="primary" text="推荐" size="small" class="mb-5" />去掉属性值0后面的单位。
11. <base-tag type="primary" text="推荐" size="small" />颜色使用16进制小写字母，尽量简写。

:blush:正例：（涉及8-11点）
```css
.test {
  width: 16px;
  height: 0;

  color: #f40;
  background-color: rgba(255, 255, 255, .1);
}
```
:fearful:反例：
```scss
.test {
  color: #FF4400;
  background-color: rgba(255, 255, 255, 0.1);
  width: 16.0px;
  height: 0px;
}
.header {}
```
12. <base-tag type="primary" text="推荐" size="small" />SCSS中使用<code>@include</code>时，放在普通属性后面。如果有嵌套选择器，空一行再定义嵌套选择器。

:blush:正例：
```scss
.el-input {
  border: none;
  @include round(5px);

  input {
    font-size: 14px;
  }
}
```
13. <base-tag type="info" text="建议" size="small" />如果了解属性值的顺序，而且需要设置几个属性值，可以采用简写。否则的话，分开书写更清晰。

:blush:正例：
```scss
.element {
  transition-delay: 1s;
  transition-timing-function: linear;
  transition-duration: .5s;
  transition-property: opacity;
}
// 相当于
.element {
  transition: opacity .5s linear 1s;
}
```
### 语言规范
1. <base-tag type="success" text="强制" size="small" />避免样式嵌套层级过深，最好限制在3级，CSS选择器的匹配是从右向左进行的。虽然页面层级可能嵌套很深，但是css不需要完全按照页面层级书写。

2. <base-tag type="success" text="强制" size="small" />公共样式写在<code>common.scss</code>，页面优先使用通用样式，特殊需要覆盖再重新书写。

:blush:正例：
```scss
// common.scss
.tab-container {
  height: 60px;
  background-color: #fff;
}

// test.vue <style>
.tab-container {
  height: 54px;
}
```
3. <base-tag type="success" text="强制" size="small" />尽量用class选择器，少用甚至不用id、标签和属性等选择器。

:neutral_face:说明：id选择器样式无法复用，同时防止开发过程中id名或标签名等变化，引起页面布局错乱。

4. <base-tag type="primary" text="推荐" size="small" class="mb-5" />无需兼容低配机型和浏览器时，优先考虑使用flex布局，就算重排也会比inline-block和float快。

5. <base-tag type="primary" text="推荐" size="small" />定义<code>variable.scss</code>变量文件，然后在页面/组件等需要的地方采用引入的方式，可以方便整体控制应用的风格。

:neutral_face:说明：uni-app项目中存在一个uni.scss文件，页面/组件无需导入这个文件，在此定义的变量，页面/组件可直接使用变量。

6. <base-tag type="info" text="建议" size="small" />将相关属性顺序放在一组，提高代码可读性。

:neutral_face:说明：参考[CSScomb yandex](https://github.com/csscomb/csscomb.js/blob/master/config/yandex.json)配置，建议遵循的顺序为

  （1）布局定位属性：position、display、float、flex等  
  （2）盒子模型属性：box-sizing、width、height、margin、padding等  
  （3）过渡动画属性：transition、animation等  
  （4）文本属性：text-align、white-space、text-decoration等  
  （5）外观属性：opacity、color、border、outline、background等  
  （6）字体属性：font、font-size、line-height等

7. <base-tag type="info" text="建议" size="small" />根选择器限制唯一性，子选择器可以使用不同命名区分。

:neutral_face:说明：可选择BEM命名风格，格式为`[namespace-]block__element--modifier`，namespace一般为组件名称。

## Vue规范
Vue单文件分为template、script和style三大部分，分别参考HTML规范、JavaScript规范和CSS规范。Vue规范针对Vue2.x版本，除了遵循上述规范外，摘取Vue官方规范中必要的和强烈推荐的风格（更多的可以参考Vue风格指南），以及开发过程中的一些优化建议。
### 格式规范
1. <base-tag type="success" text="强制" size="small" />单文件应该有统一的顺序。

:neutral_face:说明：单文件中应该让`<template>`、`<script>`和`<style>`标签保持顺序一致，且`<style>`放在最后，因为`<style>`是可选的。

:blush:正例：
```html
<template>
 
</template>

<script>

</script>

<style>

</style>
```
2. <base-tag type="primary" text="推荐" size="small" />选项应该有统一的顺序。

:blush:正例：
```html
 name/parent
 components/directives/filters
 mixins
 inheritAttrs/model/props/propsData
 data/computed
 watch
 生命周期
 methods
```
3. <base-tag type="primary" text="推荐" size="small" />生命周期顺序，按照它们被调用的顺序依次定义。

:blush:正例：
```html
beforeCreate --> created --> beforeMount --> mounted
beforeUpdate --> updated 
activated --> deactivated --> beforeDestory --> destroyed
```
4. <base-tag type="primary" text="推荐" size="small" />元素（含组件）的属性应该有统一的顺序。

:blush:正例：
```html
is
v-for
v-if/v-else-if/v-else/v-show/v-cloak
v-pre/v-once
id
ref/key
v-model
其他attribute:
  class
  name
  data-*
  src/for/type/href/value
  max-length/min-length/max/min/paterrn
  placeholader/title/alt
  aria-*/role
  required/readonly/disabled/checked/selectd
v-on 
v-html/v-text
```
5. <base-tag type="success" text="强制" size="small" />样式顺序

:neutral_face:说明：style按导入（@import）、变量（$variable）、选择器的顺序书写。

:blush:正例：
```scss
@import "~@/styles/variable.scss";
$page: home-page;
.#{$page} {
  padding: 20px;
}
```
6. <base-tag type="primary" text="推荐" size="small" />绑定语法（双大括号<code>{{}}</code>）内容左右两边添加一个空格。

:blush:正例：
```html
<el-tag type="primary">{{ count }}</el-tag>
```
:fearful:反例：
```html
<el-tag type="primary">{{count}}</el-tag>
```
7. <base-tag type="primary" text="推荐" size="small" />指令都使用缩写形式（ <code>:</code>表示<code>v-bind:</code>，<code>@</code>表示<code>v-on:</code>，<code>#</code>表示<code>v-slot:</code>）。

:blush:正例：
```html
 <md-table
  :table-data="tableData"
  :columns="headers"
  @getData="getTableData"
 >
    <template #operate>
      <el-button type="primary" size="mini">编辑</el-button>
    </template>
</md-table>
```
### 语言规范
1. <base-tag type="success" text="强制" size="small" />组件的<code>data</code>必须是返回对象的函数。

:neutral_face:说明：除了使用new Vue的任何地方，都必须是返回函数的对象。因为直接使用一个对象，会使得这个组件的所有实例共享数据。

:blush:正例：
```js
  data() {
    return {
      headers: []
    }
  }
```
:fearful:反例：
```js
  data: {
      headers: []
  }
```
2. <base-tag type="success" text="强制" size="small" /><code>prop</code>定义尽量详细，必须指定类型，必须指定<code>required</code>或者<code>default</code>。如果有业务需要，必须加上<code>validator</code>验证。

:blush:正例：
```js
props: {
  tableLoading: {
    type: Boolean,
    default: false
  }
}
```
:fearful:反例：
```js
props: ['tableLoading']
```

3. <base-tag type="success" text="强制" size="small" />为<code>v-for</code>设置<code>key</code>属性，并且属性值是唯一的，有利于维护内部组件及其子树的状态。
:blush:正例：
```html
<el-option v-for="item in 3" :key="item" :value="item">
    {{ item }}
</el-option>
```
:fearful:反例：
```html
<el-option v-for="item in 3"  :value="item">
    {{ item }}
</el-option>
```
4. <base-tag type="success" text="强制" size="small" /><code>v-for</code>和<code>v-if</code>不能用在同一个元素上。

:neutral_face:说明：Vue处理指令时，v-for比v-if优先级高，渲染时会遍历整个列表，然后进行v-if逻辑判断，影响性能。可以解耦渲染逻辑，提前v-if判断，或者先计算出符合v-if条件的数据再v-for。

:blush:正例：
```html
<template v-if="isActiveUser">
   <div v-for="item in userList" :key="item.userId"></div>
</template>
<!-- 或者 利用computed计算出activeUserList -->
<div v-for="item in activeUserList" :key="item.userId"></div>
```
:fearful:反例：
```html
<div
   v-for="item in userList"
   v-if="item.isActive"
   :key="item.userId">
</div>
```
5. <base-tag type="success" text="强制" size="small" />组件模板不要包含复杂表达式，应该重构为计算属性或方法。

:blush:正例：
```js
// 模板内使用 {{ normalizedFullName }}
computed: {
  normalizedFullName() {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```
:fearful:反例：
```js
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}
```

6. <base-tag type="success" text="强制" size="small" class="mb-5" /><code>style</code>添加<code>scoped</code>属性，限制作用域，防止污染全局样式。

7. <base-tag type="primary" text="推荐" size="small" />data声明中对象层次不要超过4层。

:neutral_face:说明：对象嵌套太深一方面对性能有影响，因为Vue2.x版本是利用Object.defineProperty递归实现数据响应式变化的；另一方面获取某个属性值时不方便。

:fearful:反例：
```js
data() {
    return {
      form: {
        person: {
          name: '',
          job: {
            title: '',
            desc: ''
          }
        }
      }
    }
  }
// this.form.person.job.title
```
8. <base-tag type="primary" text="推荐" size="small" />利用<code>Object.freeze()</code>提升展示类数据渲染性能。

:neutral_face:说明：Object.freeze()可以冻结一个对象，冻结之后不能增加新属性，不能删除已有属性，不能修改属性值，不能更改对象配置。Vue赋值变量为一个冻结对象后，不会生成getter和setter劫持方法。对于纯展示类、无需变化的数据，可以使用，在数据量越大时性能提升越显著。Object.freeze()冻结的是值，仍然可以将变量的整个引用替换掉。

:blush:正例：
```js
data() {
  return {
    list: []
  }
}
async created() {
  const list = await API_GET_LIST()
  this.list = Object.freeze(list)
},
methods: {
  async updateList() {
    const list = await API_POST_LIST()
    this.list = Object.freeze(list)
  }
}
```
9. <base-tag type="primary" text="推荐" size="small" />应该把复杂的计算属性拆分多个且简单的计算属性。

:neutral_face:说明：不要在一个计算属性内包含太多逻辑，尽量拆分出几个功能相对单一的计算属性，最终组合成所需的计算属性。这样不仅易于测试和阅读，而且就算后期调整也更好重构。

:blush:正例：
```js
isValid() {
     return this.addressList && this.addressList.length > 0
  },
  chooseAddress() {
     let chosedAddress = null
     if (this.chooseAddressId) {
          chosedAddress = this.addressList.find(
           item => item.Id === this.chooseAddressId
        )
     }
     return chosedAddress || null
  },
  curAddress() {
     if (this.isValid) {
        const defaultAddress = this.addressList.find(item => item.IsDefault)
        return this.chooseAddress || defaultAddress || this.addressList[0]
     }
  }
```
:fearful:反例：
```js
curAddress() {
  if (this.addressList && this.addressList.length > 0) {
    const defaultAddress = this.addressList.find(item => item.IsDefault)
    let chooseAddress = null
    if (this.chooseAddressId) {
      const chosedAddress = this.addressList.find(
        item => item.Id == this.chooseAddressId
      )
      chosedAddress && (chooseAddress = chosedAddress)
    }
    return chooseAddress || defaultAddress || this.addressList[0]
  }
  return null
}
```
## uni-app规范
以遵从Vue规范为前提，扩展uni-app特有规范。
### 格式规范
1. <base-tag type="primary" text="推荐" size="small" />生命周期按照它们被调用的顺序依次定义。

（1）页面生命周期

:blush:正例：
```html
onLoad
onShow
onReady
onHide
onUnload
onPullDownRefresh
onReachBottom
onTabItemTap
onShareAppMessage
onPageScroll
```
（2）组件生命周期

:blush:正例：
```html
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestory
destroyed
```
### 语言规范
1. <base-tag type="success" text="强制" size="small" />优先使用<code>uni-app</code>组件元素，即<code>view</code>、<code>image</code>、<code>picker</code>等。

:neutral_face:说明：标签靠近微信小程序规范。不推荐使用HTML标签，实际上div等标签也会被编译器转化。但为了管理方便、策略统一，建议使用view等组件。

2. <base-tag type="success" text="强制" size="small" />接口能力（JS API）优先使用<code>uni</code>前缀。

:neutral_face:说明：接口能力靠近微信小程序规范，但是uni-app项目中需将wx前缀替换为uni。如果各个小程序平台有新功能而uni-app未兼容的，可以使用各平台的前缀。

3. <base-tag type="primary" text="推荐" size="small" />条件编译解决各端差异。

:neutral_face:说明：uni-app已将常用的组件、JS API封装到框架中，保证了多平台兼容。但每个平台有一些特性，可能存在一些无法跨平台的情况。为此可以使用条件编译，将不同代码编译到不同平台。

（1）条件编译是使用特殊注释语法作标记，以`#ifdef`（仅在某平台存在）或`#ifndef`（除了某平台均存在）加<code>PLATFORM</code>（平台名称，使用`||`分隔多个平台）开头，以`#endif`结尾。

（2）不同语法有不同注释写法，js/ts/json使用 `// 注释`、SCSS使用 `/* 注释 */`、vue模板使用`<!-- 注释 -->`。

（3）PLATFORM取值：APP-PLUS（APP）、H5、MP-WEIXIN（微信小程序）、MP-ALIPAY（支付宝小程序）、MP-BAIDU（百度小程序）、MP-TOUTIAO（字节跳动小程序）、MP-QQ、MP-360、MP（含各端小程序）、QUICKAPP-WEBVIEW（含联盟、华为快应用）、QUICKAPP-WEBVIEW-UNION（快应用联盟）、QUICKAPP-WEBVIEW-HUAWEI（快应用华为）

（4）static目录可以通过新建不同平台的专有名称（PLATFORM取值小写），实现条件编译，这样静态资源只有特定平台才会编译进去。

（5）在项目根目录创建platforms目录，进一步创建子目录（PLATFORM取值小写），存放不同平台的文件，实现整体目录的条件编译。目录下只支持放置页面文件（vue文件），其他资源建议使用static条件编译。

:blush:正例：（涉及1-4点）
```html
// vue模板条件编译
<!-- #ifdef MP-WEIXIN -->
<official-account></official-account>
<!-- #endif -->
```
```js
// js条件编译
// #ifndef H5
uni.setClipboardData({})
// #endif
// #ifdef MP-WEIXIN MP-ALIPAY
uni.login()
// #endif

// json条件编译
// #ifdef MP
{
  "path": "pages/index/auth",
  "style": {
    "navigationBarTitleText": "授权登录"
  }
}
// #endif
```
```scss
// SCSS条件编译
.element {
  /* #ifndef H5 */
  height: 100%;
  /* #endif */
}
```
```html
// static目录条件编译
|___static
|   |__mp-weixin
|       |__wx-logo.png
|   |__mp-alipay
|       |__ali-logo.png
|   |__common.png
|___main.js
|___App.vue
```
4. <base-tag type="primary" text="推荐" size="small" /><code>scss</code>文件和<code>&lt;style&gt;</code>标签里面的背景图不使用本地图片。

:neutral_face:说明：不支持本地图片的平台（mp-weixin、mp-qq、mp-toutiao和app v2），小于40kb会转base64，H5平台小于4kb会转base64，其余平台不会。推荐统一上传至CDN。

<style>
  .mb-5 {
    margin-bottom: 5px;
  }
  .base-tag {
    margin-right: 3px;
  }
</style>