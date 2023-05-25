::: tip 自动注入
利用```webpack```中的```require.context```自动注册全局组件和自动扫描文件，减少手动引入的步骤。
:::

## 自动注册全局组件
```js
// main.js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Base命名开头的文件
const requireCom = require.context(
  './components',
  // 是否查询其子目录
  true,
  /Base\w+\.(vue|js)$/
)
requireCom.keys().forEach(fileName => {
  // 获取组件配置
  const comConfig = requireCom(fileName)
  // 获取组件的 PascalCase 命名，如BaseSearch
  const comName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName.split('/').pop().replace(/\.\w+$/, '')
    )
  )
  Vue.component(comName, comConfig.default || comConfig)
})
```

## 自动注册路由模块
一个大型应用中，可能路由跳转很多，这时候根据模块设置路由信息，会比较方便管理。假设有如下目录：
```bash
- router
  > module
    > vip.js
    > product.js
    > order.js
  > index.js
  > map.js 
```

其中```router/index.js```是入口文件，初始化路由数据。

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './map'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

export default router
```

```routes```是实际的路由配置，通过require自动扫描文件，```router/map.js```如下：

```js
let moduleRoutes = []
const files = require.context(
  './module',
  false,
  /\.js$/
)
files.keys().forEach(key => {
  moduleRoutes = moduleRoutes.concat(files(key).default)
})
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    alias: '',
    redirect: '/home',
    component: () => import('@/components/layout/MainContent'),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/Home')
        },
        ...moduleRoutes,
        {
          path: '*',
          component: () => import('@/views/NotFound')
        }
      ]
  }
]
```
最后在 ```main.js```引入路由文件
```js
import Vue from 'vue'
import router from '@/router/index'
import App from './App.vue'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```