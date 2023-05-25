# Vue项目命名规范
前提：前端命名一般是小驼峰式，即```helloVue```
> [Vue风格指南](https://cn.vuejs.org/v2/style-guide/)
### 文件夹命名

超过一个单词的统一使用小写字母开头的**(kebab-case)**命名规范 ，如 ```shop-setting```

### 文件命名 <Badge text="推荐" type="tip"/>

#### 文件

单页面文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。如：
```bash
-shop-setting
  > AddShop.vue
  > add-shop.vue
```

**单词大写**开头对于代码编辑器的自动补全最为友好，推荐使用，如 ```AppMain```

**组件**无论是单词大写开头，还是横线连接，在```template```里引用的时候都是横线连接的。项目封装全局组件的规则是以```Mei```开头的在```components```文件夹下面的，都会自动注册为全局组件，在vue里面直接使用即可，如```<mei-table></mei-table>```

#### 路由

**路由**的path建议文件夹/文件名，方便查找和管理，如```product/product-manage```
路由懒加载：```path```写完整路径，```alias```别名可以简短一点（不配置也可以），```name```使路由跳转可以简单一点（不配置也可以）。```webpackChunkName```主要是打包分组识别，同```name```命名即可。
注意```path```和```name```的路由跳转方式不同，传参也不同：
```js
// 路由配置
  {
    path: "/product/product-manage",
    alias: '/pd-mg'
    name: "ProductManage",
    component: () => import(/* webpackChunkName: 'ProductManage' */ "@/views/product/product-manage")
  }

  // 另外的写法
  {
    path: "/product/product-manage",
    alias: '/pd-mg'
    name: "ProductManage",
    component: r => require.ensure([], () => r(require('@/views/product/product-manage')), 'ProductManage')
  }
// 页面跳转
  this.$router.push({
    name: "ProductManage",
    params: {id: 123}
  })

  this.$router.push({
    path: '/product/product-manage',
    // path: 'pd-mg',
    query: {id: 123}
  })
```

#### 其他

**特殊**：index.vue或index.js ，index为小写即可

其他如mixins下面的文件，一般小驼峰式命名即可：```inputMixin.js```，```uploadMixin.js```

如文件夹存在子文件夹，一般是页面里面的业务组件

```bash
-views
 -layout
  -components
   > AppMain.vue
   > index.js
   > Navbar.vue
   > SideBar.vue
```


### vue文件

- name

建议一般情况下加上，且跟文件同名，如果文件以横线连接命名，转为大写字母开头。这样在调试时方便查看组件

  ```javascript
  export default {
    name: 'Navbar'
  }
  ```


- 私有属性<Badge text="建议" type="warning"/>

插件、mixins混入等不对外的，建议使用``` $_``` 前缀

  ```javascript
  export const testMixin {
      data () {
          return {
              list: []
          }
      },
      methods: {
          $_updateList () {
              this.list.push(1)
          }
      }
  }
  ```

- 普通方法

小驼峰式命名，语义清楚即可，如getInfo获取信息
