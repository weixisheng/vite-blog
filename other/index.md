<script setup></script>
::: tip 科目一知识点汇总 
:::

<div class="panel-item" id="初次申领驾驶证">
  <h4 class="panel-title">初次申领驾驶证</h4>
  <p class="primary-color">取得学习驾驶证明满（C1: 30, C2: 20）日后预约考试科目三</p>
  <div class="panel-content">
    <li>城市公交车、大型货车、小型汽车、小型自动挡汽车、低速载货汽车</li>
    <li>三轮汽车、残疾人专用小型自动挡载客汽车、普通三轮摩托车、普通二轮摩托车、轻便摩托车、轮式自行机械车、无轨电车、有轨电车</li>
  </div>
</div>

<style lang="scss" scoped>
  .panel-item {
  overflow: hidden;

  margin-top: 20px;
  padding: 20px;

  color: #303133;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  .panel-title {
    position: relative;

    margin-bottom: 20px;
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