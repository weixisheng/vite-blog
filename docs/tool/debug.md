# 移动端调试工具
## eruda
> 移动端调试工具，可以查看元素、网络、缓存等 [查看详情](https://github.com/liriliri/eruda)

在html引入相关js文件，然后初始化就可以
```html
<script src="https://cdn.bootcdn.net/ajax/libs/eruda/2.5.0/eruda.min.js"></script>
<script>
  eruda.init()
</script>
```
![示例图](/img/debug-1.jpg)

## vConsole
> 一个轻量、可拓展、针对手机网页的前端开发者调试面板 [查看详情](https://github.com/Tencent/vConsole)

1. npm引入
```bash
$ npm install vconsole
```

```javascript
import VConsole from 'vconsole';

const vConsole = new VConsole();
// or init with options
const vConsole = new VConsole({ theme: 'dark' });

// call `console` methods as usual
console.log('Hello world');

// remove it when you finish debugging
vConsole.destroy();
```
2. CDN引入
```html
<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
<script>
  // VConsole will be exported to `window.VConsole` by default.
  var vConsole = new window.VConsole();
</script>
```

可用 CDN:

- https://unpkg.com/vconsole@latest/dist/vconsole.min.js
- https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js
![示例图](/img/debug-2.jpg)

## 移动端引入vue-devtools
> 详情请查阅：https://github.com/Zippowxk/vue-devtools-plugin

使用cdn引入
```html
<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
<script src="https://unpkg.com/vue-vconsole-devtools@1.0.5/dist/vue_plugin.js"></script>
<script>
  var vConsole = new window.VConsole();
  const Devtools = window.vueVconsoleDevtools
  Devtools.initPlugin(vConsole);
</script>
```