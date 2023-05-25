# uni-app生命周期
## 应用生命周期
- onLaunch

当 ```uni-app``` 初始化完成时触发（全局只触发一次）。可以检测小程序更新，或者页面中需要用到的初始化数据。

- onShow

当 ```uni-app``` 启动，或从后台进入前台显示。

- onHide

当 ```uni-app``` 从前台进入后台。

## 页面生命周期
### 常规
- beforeCreate

- created

这里调用接口，赋值 ```data``` ，可以减少小程序dom显示```undefined```问题。

- beforeMount

- onLoad <BaseTag text="小程序" type="success" />

参数```options```为上一个页面传参。

- onShow <BaseTag text="小程序" type="success" />

- mounted

- onUnload <BaseTag text="小程序" type="success" />

- beforeDestroy

- destroyed

### 其他
- onPullDownRefresh

页面下拉刷新。```appjson```中的 ```window``` 或页面 配置 ```enablePullDownRefresh: true```，```uni.startPullDownRefresh``` 触发下拉刷新，在回调停止下拉刷新```uni.stopPullDownRefresh```。

- onReachBottom

页面上拉加载。```appjson```中的 ```window``` 或页面 配置 ```onReachBottomDistance: 50```，可选，默认```50px```。

- onTabItemTap

点击 ```tab``` 时触发，参数 ```res = {index, pagePath, text}```。

- onShareAppMessage

页面分享，参数 ```res = {from: button|menu, target: from==button?button:undefined}```，```return``` 一个自定义分享内容
```obj = {title, path: startWith('/'), imageUrl}```。

- onPageScroll

监听页面滚动，参数 ```res = {scrollTop}```，单位px。

## 组件生命周期
- beforeCreate

在实例初始化之后被调用，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

- created

在实例创建完成后被立即调用，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，```$el``` 目前尚不可用。

- beforeMount

在挂载开始之前被调用，调用 ```render```。

- mounted

实例被挂载后调用，这时 ```el``` 被新创建的 ```vm.$el``` 替换了。此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用 ```$nextTick```。

- beforeUpdate

数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

- updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

- beforeDestroy

实例销毁之前调用。可以访问 ```this```。

- destroyed

实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
