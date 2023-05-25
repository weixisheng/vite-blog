<template>
  <div
    class="u-toast"
    :class="[
      isShow ? 'u-show' : '',
      'u-type-' + tmpConfig.type,
      'u-position-' + tmpConfig.position
    ]"
  >
    <span class="u-text">{{ tmpConfig.title }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref(false)
const config = ref({
  title: "", // 显示文本
  type: "", // 主题类型，primary，success，error，warning，black
  duration: 2000, // 显示的时间，毫秒
  position: "center" // toast出现的位置
})
const tmpConfig = ref({})  // 将用户配置和内置配置合并后的临时配置变量
const timer = ref(null)

function show(options) {
  tmpConfig.value = Object.assign(config.value, options);
  if (timer.value) {
    reset();
  }
  isShow.value = true;
  timer.value = setTimeout(() => {
    // 倒计时结束，清除定时器，隐藏toast组件
    isShow.value = false;
    reset();
  }, tmpConfig.value.duration);
}

function hide() {
  isShow.value = false;
  timer.value && reset();
}

function reset() {
  clearTimeout(timer.value);
  timer.value = null;
}

defineExpose({
  show
})
</script>

<style lang="scss" scoped>
.u-toast {
  position: fixed;
  z-index: 1000;
  transition: opacity 0.3s;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  background: #585858;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  opacity: 0;
  pointer-events: none;
  padding: 6px 10px;
}
.u-toast.u-show {
  opacity: 1;
}
.u-position-center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.u-position-top {
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
.u-position-bottom {
  left: 50%;
  bottom: 20%;
  transform: translate(-50%, -50%);
}
.u-type-primary {
  color: #2979ff;
  background-color: #ecf5ff;
  border: 1px solid rgb(215, 234, 254);
}
.u-type-success {
  color: #19be6b;
  background-color: #dbf1e1;
  border: 1px solid #bef5c8;
}
.u-type-error {
  color: #fa3534;
  background-color: #fef0f0;
  border: 1px solid #fde2e2;
}
.u-type-warning {
  color: #ff9900;
  background-color: #fdf6ec;
  border: 1px solid #faecd8;
}
.u-type-info {
  color: #909399;
  background-color: #f4f4f5;
  border: 1px solid #ebeef5;
}
.u-type-default {
  color: #fff;
  background-color: #585858;
}
</style>
