::: tip 插槽
Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 ```<slot>``` 元素作为承载分发内容的出口。
这里介绍的是自 2.6.0 的新语法，```v-slot```指令。
:::

## 具名插槽
组件示例```HelloWorld.vue```：
```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```
页面中使用组件，示例：
```html{2,9,13}
<hello-world>
  <template v-slot:header>
    <h1>Welcome to Your Vue.js App</h1>
  </template>
  <!-- 默认插槽可以放任何内容，包括其他组件等 -->
  <p>内容1</p>
  <p>内容2</p>
  <!-- 这里可以显式默认插槽名称 -->
  <template v-slot:default>
    <p>内容3</p>
    <p>内容4</p>
  </template>
  <template v-slot:footer>
    <div class="footer">Vue是一套用于构建用户界面的渐进式框架</div>
  </template>
</hello-world> 
```
具名插槽可以使用```#```缩写，注意使用缩写语法时，需要带参数：
```html{4,9}
<template #header>
  <h1>Welcome to Your Vue.js App</h1>
</template>
<template #default>
  <p>内容1</p>
  <p>内容2</p>
</template>
<!-- 使用解构的缩写 -->
<template #default="{user}">
  <h3>{{user.lastName}}</h3>
</template>
```
## 作用域插槽
通常情况下，当在一个插槽中使用变量数据时，父级模板的变量使用父级的作用域，组件里的作用域无法被访问。
为了让插槽内容能够访问子组件的作用域，需要在```slot```绑定数据。
修改```HelloWorld.vue```：
```vue{5}
<template>
  <div class="container">
    <header><slot name="header"></slot></header>
    <main>
      <slot v-bind:user="user">{{ user.firstName }}</slot>
    </main>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: {
        firstName: 'hello',
        lastName: 'Vue'
      }
    };
  }
};
</script>
```
这样就在第5行绑定了组件的数据源```user```，作为```<slot>```的```attribute```，在父级页面使用：
```html{1,5}
<template v-slot:default="slotProps">
  <h3>{{slotProps.user.lastName}}</h3>
</template>
<!-- 等同于 -->
<template v-slot="slotProps">
  <h3>{{slotProps.user.lastName}}</h3>
</template>
```
其中，```slotProps```可以根据js命名规则随便命名，作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里：
```js
function (slotProps) {
  // slot content
}
```
这里可以使用ES2015解构```slotProps```，即：
```html{1}
<template v-slot="{user}">
  <h3>{{user.lastName}}</h3>
</template>
```
效果如下：

![Vue slot示例](/img/Vue-2.png)