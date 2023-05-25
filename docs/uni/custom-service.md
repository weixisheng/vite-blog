# 小程序拖拽客服组件
基于小程序原生组件 [```movable-area```](https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html) 和 [```movable-view```](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html) 实现的客服组件，理论上可以实现其他功能组件。

## 注意

1. 必须设置 ```movable-area``` 的大小，不然就是默认 10px * 10px，默认限制 ```movable-view``` 元素在 ```movable-area``` 可移动范围内。

2. 如果页面使用了下拉刷新 ```enablePullDownRefresh```，需要配置 ```movable-area``` 的样式 ```pointer-events:none;```阻止样式穿透，```movable-view``` 元素样式设置```pointer-events: auto;``` 把样式覆盖。

## 思路
明确了```movable-view``` 元素在 ```movable-area``` 可移动范围内，设置 ```movable-area``` 的大小即可很大一部分实现一定范围内移动组件了。

1. 对 ```movable-area``` 采取 ```fixed``` 定位，相对于页面布局，不用具体宽高，设置```top```、```bottom```值和 ```height: auto;```自适应

2. 根据页面是否自定义导航栏和自定义tabbar动态设置```top```和```bottom```值

3. 组件展示一个图标，可以展开和收缩，支持滚动到顶部，图标大小82rpx，实际以项目为准

## 实现
实际项目中需要根据配置动态展示，这里简化，采用传参形式实现客服组件内的图标，不做单图标判断。

### template结构
```html
<movable-area class="movable-area" :style="areaStyle">
  <movable-view
    :animation="false"
    :x="x"
    :y="y"
    class="movable-view flex flex-middle flex-center flex-column"
    direction="all"
    @change="changePos"
  >
    <view
      v-if="serviceList.length > 1"
      class="more-tip"
      :style="{'margin-bottom': menuShow ? '0' : '14rpx'}"
      @tap="toggleMenu"
    >{{menuShow ? '收起' : '更多'}}</view>
    <block v-for="(item, index) in serviceList" :key="index">
      <template v-if="index < serviceList.length - 1">
        <view
          class="icon-box flex flex-middle flex-center"
          :style="{display: menuShow ? 'flex' : 'none'}"
          @tap="handleClick(item.type)">
          <text class="iconfont" :class="item.icon"></text>
        </view>
      </template>
      <template v-else>
        <button v-if="item.type=='contact'"
          open-type="contact"
          hover-class="none"
          class="icon-box flex flex-middle flex-center">
          <text class="iconfont" :class="item.icon"></text>
        </button>
        <view
          v-else
          class="icon-box flex flex-middle flex-center"
          @tap="handleClick(item.type)">
          <text class="iconfont" :class="item.icon"></text>
        </view>
      </template>
    </block>
    <view
      v-show="showTop"
      class="icon-box flex flex-middle flex-center"
      @tap="handleClick('goTop')">
      <text class="iconfont icon-dingbu"></text>
    </view>
  </movable-view>
</movable-area>
```

### 逻辑
1. props参数
```js
props: {
  showTop: {
    type: Boolean,
    default: false // 显示回到顶部
  },
  isCustomNavbar: {
    type: Boolean,
    default: false // 自定义导航栏
  },
  isCustomTabbar: {
    type: Boolean,
    default: false // 自定义tabbar
  },
  info: {
    type: Object,
    default() {
      return {
        IsOpenPhone: 0,
        Phone: '',
        IsOpenWeChatNumber: 0,
        WechatNumber: '',
        IsOpenWXContact: 0
      }
    }
  }
}
```

2. 具体处理
```js
  data() {
    return {
      serviceList: [],
      x: 350,
      y: 500,
      menuShow: false,
      sysInfo: {}
    }
  },
  computed: {
    areaStyle() {
      // 计算拖动区域位置，防止拖出到导航栏和tabbar
      const s = []
      s.push(`height: auto`)
      // 44是自定义导航栏的高度，实际以项目为准
      s.push(`top: ${this.isCustomNavbar ? this.sysInfo.statusBarHeight + 44 : 0}px`)
      // 34是为了给iphone X等机型留出底部横条
      // 50是自定义tabbar高度，实际以项目为准
      s.push(`bottom: ${uni.upx2px(82) + (this.isCustomTabbar ? (this.sysInfo.isIPhoneX ? 34 + 50 : 50) : 0)}px`)
      return s.join(';')
    }
  },
  watch: {
    showTop(val) {
      // 回到顶部大小
      if (val) {
        this.y -= uni.upx2px(82)
      } else {
        this.y += uni.upx2px(82)
      }
    },
    info: {
      handler(val) {
        this.serviceList = []
        const t = []
        Object.keys(val).map(item => {
          !!val.IsOpenWeChatNumber && (t.push({
            type: 'weixin',
            icon: 'iconweixin'
          }))
          !!val.IsOpenPhone && (t.push({
            type: 'tel',
            icon: 'icondianhua'
          }))
          !!val.IsOpenWXContact && (t.push({
            type: 'contact',
            icon: 'iconservice'
          }))
        })
        let r = {}
        // 对数据去重
        t.map(item => {
          if (!r[item.type]) {
            r[item.type] = 1
            this.serviceList.push(item)
          }
        })
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    const sys = uni.getSystemInfoSync()
    const ios = !!(sys.system.toLowerCase().search('ios') + 1)
    const isIPhoneX = ios && sys.screenHeight >= 812
    sys.isIPhoneX = isIPhoneX
    sys.ios = ios
    this.sysInfo = sys
  },
  methods: {
    changePos(e) {
      const { x, y, source } = e.detail
      if (source === 'touch') {
        this.x = x
        this.y = y
      }
    },
    toggleMenu() {
      this.menuShow = !this.menuShow
    },
    handleClick(type) {
      switch (type) {
        case 'weixin':
          uni.setClipboardData({
            data: this.info.WechatNumber,
            success: () => {
              this.$tips('微信号复制成功')
            }
          })
          break;
        case 'tel':
          uni.makePhoneCall({
            phoneNumber: this.info.Phone
          })
          break;
        case 'goTop':
          uni.pageScrollTo({
            scrollTop: 0
          })
          break;
        default:
          break;
      }
    }
  }
```

### 样式

```scss
.movable-area {
  position: fixed;
  left: 0;
  z-index: 100;
  width: 100%;
  pointer-events:none;
}
.movable-view {
  width: 100rpx;
  height: auto;
  border-radius: 50rpx;
  background-color: #E9E9E9;
  pointer-events: auto;
}
.more-tip {
  margin-top: 14rpx;
  font-size: 22rpx;
}
.icon-box {
  margin: 14rpx 0;
  width: 72rpx;
  height: 72rpx;
  border-radius: 50%;
  background-color: #fff;
  & + .icon-box {
    margin-top: 0;
  }
  .iconfont {
    font-size: 34rpx;
  }
}
button {
  padding: 0;
  &::after {
    border: none;
  }
}
```

## 使用

### 引入
```html
// 如果使用uni-app的easycom模式，则无需导入
import CustomService from "@/components/custom-service/custom-service"
components: {
  CustomService
}

import goTopMixin from '@/mixins/goTopMixin'
mixins: [goTopMixin]

<custom-service :info="info" :show-top="showGoTop" :is-custom-tabbar="true" :is-custom-navbar="true" />
```
回到顶部mixin
```js
export default {
  data() {
    return {
      showGoTop: false
    }
  },
  methods: {},
  onPageScroll(pos) {
    if (pos.scrollTop > 300) {
      this.showGoTop = true
    } else {
      this.showGoTop = false
    }
  }
}
```

### 效果
![初始状态](/img/service3.png)
![回到顶部状态](/img/service1.png)
![回到顶部张开状态](/img/service2.png)

## 后续
组件展开时，动态判断图标数量，计算高度，动态修改y值，这样可以避免组件一开始收缩，展开时由于组件变高了，能拖到 ```movable-area``` 可移动范围外。