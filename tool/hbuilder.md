### Hbuilder
- 代码片段
HBuilder的代码片段就直接建对应格式的文件保存在指定目录即可。以vue为例，新建页面，选择自定义模板，系统会打开目录，把刚才的文件放入就可以了（组件同样的道理），之后会出现类似下面的弹窗：![新建vue页面](/img/hbuilder-1.png)  

附上vue-template模板代码，仅供参考，实际内容可以拓展：
```vue
<template>
  <view>
    
  </view>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      
    }
  },
  onLoad(options) {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
</style>
```