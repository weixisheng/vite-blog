<template>
  <span :class="[link ? 'base-tag--link' : '', typeClass, 'base-tag']">
    <a v-if="link" class="text" :href="link" :target="target">
      {{ text }}
    </a>
    <span v-else class="text">{{ text }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: function (value) {
      return ['primary', 'info', 'success', 'warning', 'danger'].indexOf(value) !== -1
    }
  },
  text: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'medium',
    validator: function (value) {
      return ['large', 'medium', 'small', 'mini'].indexOf(value) !== -1
    }
  },
  link: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_blank'
  }
})

const typeClass = computed(() => {
  return `base-tag--${props.type} base-tag--${props.size}`
})
</script>

<style lang="scss" scoped>
.base-tag {
  display: inline-block;
  margin-bottom: 4px;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  text-decoration: none;
  .text {
    background-color: inherit;
    color: inherit;
    border-color: inherit;
  }
  &:hover .text {
    text-decoration: none !important;
  }
  &--link {
    cursor: pointer;
  }
  &--primary {
    background-color: #ecf5ff;
    color: #409eff;
    border: 1px solid #d9ecff;
  }
  &--success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
  }
  &--info {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }
  &--warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
  }
  &--danger {
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: #f56c6c;
  }
  &--large {
    height: 32px;
    padding: 0 12px;
    line-height: 30px;
    font-size: 16px;
  }
  &--medium {
    height: 28px;
    padding: 0 10px;
    line-height: 26px;
    font-size: 14px;
  }
  &--small {
    height: 26px;
    padding: 0 8px;
    line-height: 24px;
    font-size: 12px;
  }
  &--mini {
    height: 24px;
    padding: 0 5px;
    line-height: 22px;
    font-size: 12px;
  }
}
@media screen and (min-width: 900px) {
  .base-tag {
    margin-bottom: 8px;
  }
}
</style>
