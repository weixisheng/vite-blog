## 小程序获取系统栏信息
一般在自定义导航栏时需要获取小程序导航栏信息，然后根据位置大小等信息处理布局。

## 基础api
- 获取系统信息 <BaseTag type="danger" text="停止维护" size="mini" />
> [wx.getSystemInfoSync](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoSync.html)

- 代替 <BaseTag type="success" text="新" size="mini" />
> [wx.getWindowInfo](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html)、[wx.getDeviceInfo](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getDeviceInfo.html)

- 获取菜单按钮（右上角胶囊按钮）的布局位置信息
> [wx.getMenuButtonBoundingClientRect](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)

这个接口因为机型/网络等原因，有时不会有返回的数据，需要 ```try catch```。

## 参考代码
为了做缓存，可以在```App```里面添加一个```cache```属性，保存获取到的数据，下次如果有其他页面使用，不用重新获取数据，优化性能。

这里采用```promise```封装数据，下次使用直接```resolve```。

```js{11-13,20}
globalData: {
  systemInfo: null
},

getSystemInfo() {
    return new Promise((resolve, reject) => {
      if (this.globalData.systemInfo) resolve(this.globalData.systemInfo)
      else {
        // let res = wx.getSystemInfoSync()
        let res = {}
        const windowInfo = wx.getWindowInfo()
        const deviceInfo = wx.getDeviceInfo()
        res = {...windowInfo, ...deviceInfo}
        const ios = !!(res.system.toLowerCase().search('ios') + 1)
        const isIPhoneX = ios && res.screenHeight >= 812
        res.isIPhoneX = isIPhoneX
        res.ios = ios
        let rect
        try {
          rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null
          if (!rect || !rect.height || !rect.width) {
            throw new Error('getMenuButtonBoundingClientRect error')
          }
        } catch (error) {
          let gap = 4 // 胶囊按钮上下间距 使导航内容居中
          let width = 96 // 胶囊的宽度
          if (res.platform === 'android') {
            gap = 8
            width = 96
          } else if (res.platform === 'devtools') {
            if (ios) {
              gap = 5.5 // 开发工具中ios手机
            } else {
              gap = 7.5 // 开发工具中android和其他手机
            }
          } else {
            gap = 4
            width = 88
          }
          if (!res.statusBarHeight) {
            // 开启wifi的情况下修复statusBarHeight值获取不到
            res.statusBarHeight = res.screenHeight - res.windowHeight - 20
          }
          rect = {
            // 获取不到胶囊信息就自定义重置一个
            bottom: res.statusBarHeight + gap + 32,
            height: 32,
            left: res.windowWidth - width - 10,
            right: res.windowWidth - 10,
            top: res.statusBarHeight + gap,
            width: width
          }
        }
        this.globalData.systemInfo = res
        this.globalData.systemInfo.menu = rect
        let gap = rect.top - res.statusBarHeight
        let navbarTop = res.statusBarHeight + 2 * gap + rect.height
        // 计算导航栏高度，页面可以直接使用navbarTopWithPX
        // this.globalData.systemInfo.navbarTop = navbarTop
        // let t = res.screenTop || navbarTop
        // if (isIPhoneX) {
        //   t = 88
        // }
        // let navbarTopWithPX = (t || 64) + 4 + 'px'
        // this.globalData.systemInfo.navbarTopWithPX = navbarTopWithPX
        console.log('systemInfo', this.globalData.systemInfo)
        resolve(this.globalData.systemInfo)
      }
    })
  }
```
