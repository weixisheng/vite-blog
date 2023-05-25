# 卡片式轮播图之小程序实现
营销活动中，轮播图效果是比较常见的，基于轮播图拓展的组件也很多，这里记录一下使用swiper实现卡片式轮播的过程，分为PC端和小程序端，其中PC端是```Vue```+```typescript```，小程序端是```uni-app```。

::: tip 后台说明
使用场景为管理后台配置相关参数实现预览效果，小程序根据配置实现相应效果。

[卡片式轮播图之后台实现](../vue/swiper.html)
:::


小程序实现轮播用的是小程序自带组件：[swiper](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)和[swiper-item](https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html)。通过修改swiper的```previous-margin```和```next-margin```实现前边距/后边距，可用于露出前/后一项的一小部分
## 使用

1. template结构
```html
<view class="image-ad">
  <swiper
   :autoplay="true"
   :circular="true"
   :previous-margin="swiperMargin"
   :next-margin="swiperMargin"
   @change="onSwiperChanged"
 >
   <swiper-item v-for="(item, index) in imgList" :key="index" class="image-ad__item">
     <view class="image-ad__img-wrap" :style="{margin: activeIndex !== index ? '0 10rpx' : 0}">
       <image class="image-ad__image" mode="widthFix" :src="item.ImageUrl" :style="{width: swiperLargeWidth + 'rpx'}" />
     </view>
   </swiper-item>
 </swiper>
 
 <view v-if="imgList.length > 1" class="image-ad__dots">
    <view v-for="(item, index) in imgList" :key="index" class="image-ad__dot" :class="{'is-active': activeIndex === index}" />
  </view>
</view>
```
2. 数据管理
```js
props: {
  value: {
     type: Object,
     default () {
       return {
       	 Images: []
       }
     }
   }
},
data() {
	activeIndex: 0,
	imgList: []
},
computed: {
	swiperLargeWidth() {
	// 可以根据实际UI计算当前项图片宽度
		return 580
	}
},
watch: {
	value: {
		handler(val) {
			this.swiperMargin = val.Style === 'large' ? `65rpx` : `0`
			this.imgList = val.Images
		}
	}
}
```
3. 样式

主要scss如下，指示器根据自己项目写就不罗列了。
```css
$prefix: 'image-ad';
.#{$prefix} {
	position: relative;
	&__item {
        display: flex;
        overflow: hidden;
    }
    &__img-wrap {
		position: relative;
	    width: 100%;
		height: 100%;
		flex: 1;
		overflow: hidden;
		box-sizing: content-box;
    }
    &__image {
      display: block;
      width: 100%;
      margin: 0 auto;
    }
}
```