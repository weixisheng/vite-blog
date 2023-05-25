# 页面滚动tabbar变为滚动到顶部
## 概述
有些应用在使用过程中，交互这块变一下，就会让人就觉得耳目一新。例如在页面滚动过程中，如果是tabbar页面，把底部tabbar项变为回到顶部，点击就可以回到顶部。

效果跟悬浮在页面右侧等位置，效果差不多，当然两者各有特色。
## 实现
:::tip 参考api
[uni.setTabBarItem](https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem)

[uni.pageScrollTo](https://uniapp.dcloud.io/api/ui/scroll?id=pagescrollto)

[页面生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)
:::

```vue
<template>
  <view></view>
</template>

<script>
export default {
  data() {
    return {
      showTop: false,
      top: 0
    }
  },
  onLoad(options) {

  },
  onTabItemTap(res) {
    if (this.showTop) {
      this.goTop()
      this.resetGoTop()
    }
  },
  onPageScroll(res) {
    let { scrollTop } = res
    scrollTop > 300 ? this.setGoTop() : this.resetGoTop()
  },
  methods: {
    setGoTop() {
      uni.setTabBarItem({
        index: 0,
        text: '回到顶部',
        iconPath: 'static/top.png',
        selectedIconPath: 'static/top.png'
      })
      this.showTop = true
    },
    resetGoTop() {
      uni.setTabBarItem({
        index: 0,
        text: '首页',
        iconPath: 'static/home.png',
        selectedIconPath: 'static/home-active.png'
      })
      this.showTop = false
    },
    goTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 100
      })
    }
  }
}
</script>
```