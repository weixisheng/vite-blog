### 背景
小程序原生提供tabbar用以切换tab页面，但是可供配置的毕竟有限，产品和设计想法也是天马行空，看到有些小程序底部tabbar“奇奇怪怪”的，于是要前端也搞一下，有些图标凸出来显得不一样。自定义 tabBar 可以让开发者更加灵活地设置 tabBar 样式，以满足更多个性化的场景。```基础库 2.5.0 开始支持，2.5.2 修复了跳转非tab页面、底部tabBar不消失的问题```   
下面以实际项目为例（项目基于wepy，有些方法稍稍改动一下），实现一个custom-tab-bar。
### 开发
custom-tab-bar组件基于vant-weapp的tabbar组件改造，优点是不用重复造轮子、缺点就是文件稍多一点。
- 文件拷贝  
1. npm安装 
```bash
npm i @vant/weapp -S --production
```
2. github拷贝  
到[github](https://github.com/youzan/vant-weapp.git)上克隆项目至本地，到[官网](https://youzan.github.io/vant-weapp/#/tabbar)查看组件用法
- 稍加整理
去除多余组件，留下tabbar组件需要的文件。因为icon使用的是原生tabbar的图片，就把tabbar-item组件里面的的icon逻辑删了，只保留一个slot用于传图片即可。
> tab-bar-item/index.wxml
```html
<wxs src="../wxs/utils.wxs" module="utils" />

<view
  class="{{ utils.bem('tabbar-item', { active }) }} custom-class"
  style="color: {{ active ? activeColor : inactiveColor }}"
  bind:tap="onClick">
  <slot wx:if="{{ active }}" name="icon-active"/>
  <slot wx:else name="icon" />
  <slot />
</view>
```
![components/vant](/img/tabbar-1.png)
- 开始
1. 根目录下面新建custom-tab-bar文件夹（跟pages同级），微信规定的名字和结构，需要完全一致，否则不起效果。新建组件

![custom-tab-bar](/img/tabbar-2.png)

2. 编写代码
> app.json
```json
"tabBar": {
    "custom": true,
    // 为了保证低版本兼容以及区分哪些页面是 tab 页，tabBar 的相关配置项需完整声明
}
```
配置之后，custom-tab-bar会接管tabbar渲染。下面开始custom-tab-bar逻辑。
> index.wxml
```html
 <van-tabbar bindchange="changeTab" active="{{selected}}" active-color="{{selectedColor}}" inactive-color="{{color}}">
    <van-tabbar-item wx:for="{{list}}" wx:key="index" class="{{item.isSpecial?'special':''}}">
      <image slot="icon" src="{{item.iconPath}}" class="tabbar-item__image {{item.isSpecial?'special':''}}"/>
      <image slot="icon-active" src="{{item.selectedIconPath}}" class="tabbar-item__image {{item.isSpecial?'special':''}}"/>
      <view class="van-tabbar-item__text {{item.isSpecial?'special':''}}">{{item.text}}</view>
    </van-tabbar-item>
  </van-tabbar>
```
> index.js
```javascript
/* eslint-disable */
Component({
  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: '#707070',
    selectedColor: '#e30100',
    list: [
      {
        pagePath: '/pages/home/index',
        text: '首页',
        iconPath: '../images/home.png',
        selectedIconPath: '../images/home-active.png'
      }, {
        pagePath: '/pages/live/index',
        text: '直播',
        iconPath: '../images/live-active.png',
        selectedIconPath: '../images/live-active.png',
        isSpecial: true // 突出图标
      }, {
        pagePath: '/pages/me/index',
        text: '我的',
        iconPath: '../images/me.png',
        selectedIconPath: '../images/me-active.png'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e) {
      const v = e.detail
      wx.switchTab({
        url: this.data.list[v].pagePath
      })
    }
  }
})

```
> index.wxss
```css
/*样式可以根据实际项目做调整*/
.tabbar-item__image {
  display:block;

  width:24px;
  height:24px;
}
.tabbar-item__image.special {
  position: relative;
  z-index: 200;
  top: -18px;
  width: 40px;
  height: 40px;
}
.van-tabbar-item__text.special {
  margin-top: -16px;
}
```
- 页面使用  
**所有 tab 页的 json 里需声明 ```usingComponents``` 项，也可以在 app.json 全局开启**。 以home/index.js为例：  
在onShow选中第一项：
```javascript
/* 原生小程序 */
if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    this.getTabBar().setData({
      selected: 0
    })
}
/* wepy */
if (typeof this.$wxpage.getTabBar === 'function' && this.$wxpage.getTabBar()) {
    this.$wxpage.getTabBar().setData({
      selected: 0,
      selectedColor: '#e30100'
    })
}
/* uni-app */
if (typeof this.$mp.page.getTabBar === 'function' && this.$mp.page.getTabBar()) {
    this.$mp.page.getTabBar().setData({
      selected: 0,
      selectedColor: '#e30100'
    })
}
```

![](/img/tabbar-3.png)
- 优化  
实现onTabItemTap事件，修改custom-tab-bar/index.js文件的```changeTab```事件：
```javascript
// 1.在当前tab页点击tab才会触发
changeTab(e) {
  const v = e.detail
  /* tabItemTap */
  if (this.data.selected == v) {
    let pages = getCurrentPages()
    let page = pages[pages.length - 1]
    // 这里如果直接调用onTabItemTap会报错，定义一个类似的onTabItemTap事件tabItemTap
    page.tabItemTap && page.tabItemTap()
    return
  }
  /* tabItemTap */
  wx.switchTab({
    url: this.data.list[v].pagePath
  })
}
// 2.只要切换了tab就触发
changeTab(e) {
  const v = e.detail
  let target = this.data.list[v].pagePath.replace(/^\//, '')
  wx.switchTab({
    url: this.data.list[v].pagePath,
    success: () => {
      let pages = getCurrentPages()
      let targetIndex = pages.findIndex(item => item.route === target)
      targetIndex > -1 && pages[targetIndex].tabItemTap && pages[targetIndex].tabItemTap()
    }
  })
}
```

### 后续
- 官方推荐使用cover-view+cover-image实现，由于示例项目的tab页面并没有原生组件，暂时用不上就用view了。
- 普通组件形式  
基于以上逻辑，可以不用custom-tab-bar，自定义一个普通组件，然后在页面导入使用，监听组件事件等。这种实现方式在低版本会报错Component is not found in path "custom-tab-bar/index"，不影响小程序使用。
```html
<!-- other -->
<tab-bar @tabitemTab.user="onTabItemTap" :active.sync="tabIndex"></tab-bar>
```
后面iOS系统样式获取不到，导致tabbar错乱，把样式放到```common.less```引入

```css
/* tabbar */
.van-tabbar{display:-webkit-flex;display:flex;width:100%;height:50px;background-color:#fff;border-top: 1rpx solid #e2e2e2;}
.van-tabbar--fixed{position:fixed;bottom:0;left:0}
.van-tabbar--safe{padding-bottom:34px}
.van-tabbar-item{-webkit-flex:1;flex:1;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;height:100%;color:#707070;font-size:10px;line-height:1;}
.van-tabbar-item__icon{position:relative;margin-bottom:3px;font-size:18px;}
```

### 上线项目预览

![](/img/mp_wanmian.jpg)