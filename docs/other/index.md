---
layout: doc
---
<script setup>
  import { ref } from 'vue'
  import BaseNotify from '/components/BaseNotify.vue'
  const isValid = ref(false)
  const input = ref('')

  const toast = ref(null)

  function checkInput() {
    if (!input.value) return toast.value.show({
      title: '请输入密钥',
      type: 'error'
    })
    if (input.value !== 'hishion') return toast.value.show({
      title: '密钥不正确',
      type: 'error'
    })

    toast.value.show({
      title: '校验成功',
      type: 'success'
    })
    isValid.value = true
  }
</script>
::: tip 科目一知识点
:::

<div v-if="!isValid" class="form">
  <input v-model="input" placeholder="请输入校验密钥" />
  <button @click="checkInput">校验</button>
</div>
<BaseNotify ref="toast" />

<div v-if="isValid">

## 初次申领驾驶证
<div class="panel-item">
  <p class="primary-color">取得学习驾驶证明满（C1: 30, C2: 20）日后预约考试科目三</p>
  <div class="panel-content">
    <ul>
      <li>城市公交车、大型货车、小型汽车、小型自动挡汽车、低速载货汽车</li>
      <li>三轮汽车、残疾人专用小型自动挡载客汽车、普通三轮摩托车、普通二轮摩托车、轻便摩托车、轮式自行机械车、无轨电车、有轨电车</li>
    </ul>
  </div>
</div>

## 增驾申领
<div class="panel-item">
  <p class="primary-color">已持有机动车驾驶证，申请增加准驾车型</p>
  <div class="panel-content">
    <ul>
      <li>大型客车、重型牵引挂车、城市公交车、中型客车、大型货车、小型汽车、小型自动挡汽车</li>
      <li>低速载货汽车、三轮汽车、轻型牵引挂车、普通三轮摩托车、普通二轮摩托车、轻便摩托车、轮式专用机械车、无轨电车、有轨电车</li>
    </ul>
  </div>
</div>

## 申领驾驶证年龄车型
<div class="panel-item">
  <div class="panel-content">
    <ol>
      <li>申请小型汽车、小型自动挡汽车、残疾人专用小型自动挡载客汽车、轻便摩托车准驾车型的，<span class="danger-color">在18周岁以上</span>；</li>
      <li>申请低速载货汽车、三轮汽车、普通三轮摩托车、普通二轮摩托车或者轮式自行机械车准驾车型的，在18-60周岁；</li>
      <li>申请城市公交车、大型货车、无轨电车或者有轨电车准驾车型的，在20-50周岁；</li>
      <li>申请中型客车准驾车型的，在21-50周岁；</li>
      <li>申请牵引车准驾车型的，在24-50周岁；</li>
      <li>申请大型客车准驾车型的，在26-50周岁。</li>
      <li>接受全日制驾驶职业教育的学生，申请大型客车、牵引车准驾车型的，在20-50周岁。</li>
    </ol>
  </div>
</div>

## 小型汽车（C1）准驾车型
<div class="panel-item">
  <div class="panel-content">
    <ol>
      <li>小型、微型载客汽车；小型、微型自动挡载客汽车</li>
      <li>轻型、微型载货汽车；轻型、微型专项作业车；轻型、微型自动挡载货汽车</li>
      <li>低速载货汽车</li>
      <li>三轮汽车</li>
    </ol>
  </div>
</div>

## 小型汽车（C2）准驾车型
<div class="panel-item">
  <div class="panel-content">
    <ol>
      <li>小型、微型自动挡载客汽车</li>
      <li>轻型、微型自动挡载货汽车</li>
    </ol>
  </div>
</div>
</div>


<style lang="scss" scoped>
.form {
  input {
    border-bottom: 1px solid #eee;
  }
  button {
    height: 32px;
    padding: 0 15px;
    cursor: pointer;
    user-select: none;

    border: 1px solid #19be6b;
    border-radius: 4px;

    font-size: 14px;
    line-height: 32px;
    color: #fff;
    background-color: #19be6b;
  }
}
.panel-item {
  overflow: hidden;

  margin-top: 20px;
  padding: 0 20px;

  color: #303133;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  p {
    margin: 10px 0;
  }
  .panel-title {
    position: relative;

    margin-bottom: 12px;
    padding-left: 20px;

    background-image: -webkit-linear-gradient(90deg, rgb(47, 223, 150), rgb(22, 151, 211));
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;

      width: 4px;
      height: 100%;

      content: ' ';

      border-radius: 2px;
      background: linear-gradient(45deg, rgba(60, 216, 73, 0.801), rgba(67, 26, 216, 0.788));
    }
  }
  .panel-content {
    font-size: 14px;
  }
}
.danger-color {
  color: #e40000;
}
.primary-color {
  color: #409EFF;
}
.warning-color {
  color: #E6A23C;
}
.success-color {
  color: #67C23A;
}
.gray-color {
  color: #999;
}
.font-bold {
  font-weight: bold;
}
</style>