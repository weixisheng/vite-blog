# 卡片式轮播图之后台实现
营销活动中，轮播图效果是比较常见的，基于轮播图拓展的组件也很多，这里记录一下使用swiper实现卡片式轮播的过程，分为PC端和小程序端，其中PC端是```Vue```+```typescript```，小程序端是```uni-app```。

::: tip 小程序说明
使用场景为管理后台配置相关参数实现预览效果，小程序根据配置实现相应效果。

[卡片式轮播图之小程序实现](../uni/swiper.html)
:::

使用了 ```vue-awesome-swiper```依赖，首先安装
```bash
yarn add swiper vue-awesome-swiper
# or
npm install swiper vue-awesome-swiper -S
```

vue-awesome-swiper参考文档：[vue-awesome-swiper](https://npmjs.com/package/vue-awesome-swiper)

swiper的参考文档：[swiper中文网](https://www.swiper.com.cn/)

```vue-awesome-swiper```中的属性和配置基本同swiper，注意```swiper3```和```swiper≥3```区别有点大，具体以安装版本为主。

## 使用
1. 导入组件
```js
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
@Component({
  components: {
    Swiper,
    SwiperSlide
  }
})
```

2. template基本结构
```html
<Swiper
   ref="myswiper"
   :options="option_swiper"
   class="swiper"
   @slideChange="slideChange"
 >
   <SwiperSlide
     v-for="(item, index) in images"
     :key="index"
   >
     <img
       :class="bem('image')"
       :src="item.ImageUrl"
     >
   </SwiperSlide>
   <!-- 可选 -->
   <!-- <div
     slot="pagination"
     class="swiper-pagination swiper-pagination-white"
   /> -->
   <Pagination v-if="data.Position" :value="images" :active="activeIndex" />
 </Swiper>
```

3. 源数据
```js
// 图片数据
@Prop({
	default() {
  		return []
  }
}) images!: any

private option_swiper: any = {
  // pagination: {
  //   el: '.swiper-pagination'
  // }, // 这里可选，然后使用自定义指示器
  autoplay: {
    disableOnInteraction: false
  },
  watchOverflow: true,
  loop: true,
  observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
  observeParents: true, // 当Swiper的父元素变化时，例如window.resize，Swiper更新
  centeredSlides: true,
  spaceBetween: 20, // 轮播项间距
  slidesPerView: 1.3 // 用于展示轮播项数量，非整数能露出前后一部分
}

public activeIndex: number = 0 // 可以用来自定义指示器索引

get myswiper() {
  // @ts-ignore
  return this.$refs.myswiper.$swiper
}

public slideChange() {
  this.activeIndex = this.myswiper.realIndex
}

```

4. 初始化
由于是组件，数据是通过props传参的，这里最好监听一下数据源，在数据改变时及时变换效果。
```js
@Watch('images', { immediate: true, deep: true })
onImageChanged(val: any) {
  this.$nextTick(() => {
  // 可选
    if (val.length <= 1) {
      this.myswiper.autoplay.stop()
      this.myswiper.update()
    } else {
      this.myswiper.slideToLoop(0) // 在Loop模式下Swiper切换到指定slide
      this.myswiper.autoplay.start()
    }
  })
}
```

5. 指示器

循环数据，判断active索引高亮即可。

## 效果

![卡片式轮播效果](/img/swiper-1.png)

## 注意
swiper需要以单独组件存在，动态更改option配置不会起作用。即如果有其他配置项，需要新建一个组件，更改```option_swiper```，例如：
```js
private option_swiper: any = {
    pagination: {
      el: '.swiper-pagination'
    },
    autoplay: {
      disableOnInteraction: false
    },
    watchOverflow: true,
    loop: true,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    spaceBetween: 20,
    slidesPerView: 1.5
  }
```