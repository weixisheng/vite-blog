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
  <ul>
    <li>城市公交车、大型货车、小型汽车、小型自动挡汽车、低速载货汽车</li>
    <li>三轮汽车、残疾人专用小型自动挡载客汽车、普通三轮摩托车、普通二轮摩托车、轻便摩托车、轮式自行机械车、无轨电车、有轨电车</li>
  </ul>
</div>

## 增驾申领
<div class="panel-item">
  <p class="primary-color">已持有机动车驾驶证，申请增加准驾车型</p>
  <ul>
    <li>大型客车、重型牵引挂车、城市公交车、中型客车、大型货车、小型汽车、小型自动挡汽车</li>
    <li>低速载货汽车、三轮汽车、轻型牵引挂车、普通三轮摩托车、普通二轮摩托车、轻便摩托车、轮式专用机械车、无轨电车、有轨电车</li>
  </ul>
</div>

## 申领驾驶证年龄车型
<div class="panel-item">
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

## 小型汽车（C1）准驾车型
<div class="panel-item">
  <ol>
    <li>小型、微型载客汽车；小型、微型自动挡载客汽车</li>
    <li>轻型、微型载货汽车；轻型、微型专项作业车；轻型、微型自动挡载货汽车</li>
    <li>低速载货汽车</li>
    <li>三轮汽车</li>
  </ol>
</div>

## 小型汽车（C2）准驾车型
<div class="panel-item">
  <ol>
    <li>小型、微型自动挡载客汽车</li>
    <li>轻型、微型自动挡载货汽车</li>
  </ol>
</div>

 ## 夜间行车
<div class="panel-item">
  <ol>
    <li>夜间通过急弯、坡路、拱桥、人行横道或者没有交通信号灯控制的路口时，应当交替使用远近光灯示意。</li>
    <li>夜间会车应当在距相对方向来车150米以外改用近光灯</li>
  </ol>
</div>

 ## 补领、换领
<div class="panel-item">
  <p class="primary-color">机动车、行驶证相关：<span class="danger-color">登记地车辆管理所</span></p>
  <ol>
    <li>机动车号牌、登记证书、行驶证灭失、丢失或者损毁的，机动车所有人应当向登记地车辆管理所申请补领、换领</li>
  </ol>
  <p class="primary-color">驾驶证相关：<span class="danger-color">核发地车辆管理所</span></p>
  <ol>
    <li>在车辆管理所管辖区域内，机动车驾驶证记载的机动车驾驶人信息发生变化的（换证）</li>
    <li>机动车驾驶证遗失（补发）、损毁无法辨认的（换证）<span class="warning-color">30日内到驾驶证核发地或者核发地以外的车辆管理所</span>申请补发或换证</li>
  </ol>
  <p class="primary-color">迁入迁出</p>
  <ol>
    <li>户籍迁出原车辆管理所管辖区的，应当向迁入地车辆管理所申请换证</li>
    <li>核发地车辆管理所管辖区以外居住的，可以向居住地车辆管理所申请换证</li>
  </ol>
</div>

 ## 酒驾、醉驾
<div class="panel-item">
  <p class="primary-color">血液中酒精含量在80毫克/100毫升（含）以上属于醉酒驾驶</p>
  <ol>
    <li>饮酒后驾驶机动车辆，暂扣6个月机动车驾驶证，罚款1000-2000元，记12分；因饮酒后驾驶机动车被处罚，再次饮酒后驾驶机动车的，处10日以下拘留，并处1000-2000元罚款，<span class="danger-color">吊销机动车驾驶证</span>。</li>
    <li>饮酒驾驶营运机动车，罚款5000元，记12分，处以15日以下拘留，并且5年内不得重新获取机动车驾驶证</li>
    <li>醉酒驾驶机动车辆，<span class="danger-color">吊销机动车驾驶证</span>，5年内不得重新获取机动车驾驶证，经过判决后处以拘役，并处罚金。</li>
    <li>醉酒驾驶营运机动车的，<span class="danger-color">吊销机动车驾驶证</span>，依法追究刑事责任；10年内不得重新获取机动车驾驶证，重新取得机动车驾驶证后，不得驾驶营运机动车。</li>
    <li>饮酒后或者醉酒驾驶机动车发生重大交通事故，构成犯罪的，依法追究刑事责任，并由公安机关交通管理部门<span class="danger-color">吊销机动车驾驶证</span>，终生不得重新取得机动车驾驶证。</li>
  </ol>
</div>

 ## 罚款20-200
<div class="panel-item">
  <ol>
    <li>机动车驾驶人补领机动车驾驶证后，继续使用原机动车驾驶证的</li>
    <li>逆向行驶</li>
    <li>驾驶人在实习期内驾驶机动车上高速公路行驶，无驾驶员陪同或陪同驾驶员不符合要求的</li>
    <li>驾驶的机动车不得牵引挂车</li>
    <li>未按规定粘贴、悬挂实习标志或者残疾人机动车专用标志的</li>
    <li>持有大型客车、牵引车、城市公交车、中型客车、大型货车驾驶证的驾驶人联系电话、从业单位等信息发生变化未及时申报变更信息的。（<span class="warning-color">在信息变更后30日内，向驾驶证核发地车辆管理所备案</span>）</li>
  </ol>
  <p class="primary-color">对教练员或者随车指导人员罚款</p>
  <ol>
    <li>学习驾驶时：未按照公安机关交通管理部门指定的路线、时间进行的；未按照规定放置、粘贴学车专用标识的</li>
  </ol>
</div>

 ## 罚款200-2000
<div class="panel-item">
  <ol>
    <li><span class="danger-color">未取得机动车驾驶证、机动车驾驶证被吊销或者机动车驾驶证被暂扣期间驾驶机动车的；</span></li>
    <li><span class="warning-color">将机动车交由未取得机动车驾驶证或者机动车驾驶证被吊销、暂扣的人驾驶的；</span></li>
    <li><span class="danger-color">造成交通事故后逃逸，尚不构成犯罪的；</span></li>
    <li><span class="warning-color">机动车行驶超过规定时速50%的；</span></li>
    <li><span class="danger-color">强迫机动车驾驶人违反道路交通安全法律、法规和机动车安全驾驶要求驾驶机动车，造成交通事故，尚不构成犯罪的；</span></li>
    <li><span class="danger-color">违反交通管制的规定强行通行，不听劝阻的；</span></li>
    <li><span class="danger-color">故意损毁、移动、涂改交通设施，造成危害后果，尚不构成犯罪的；</span></li>
    <li><span class="danger-color">非法拦截、扣留机动车辆，不听劝阻，造成交通严重阻塞或者较大财产损失的。</span></li>
    <li>驾驶拼装的机动车或者已达到报废标准的机动车上道路行驶的，公安机关交通管理部门应当予以收缴，强制报废，罚款并<span class="danger-color">吊销机动车驾驶证</span></li>
    <li>非法安装警报器、标志灯具的，公安机关交通管理部门强制拆除，予以收缴</li>
  </ol>
  行为人有前款第2、4项情形之一的，可以并处<span class="warning-color">吊销机动车驾驶证</span>；有第1项、第3项、第5-8项情形之一的，可以并处<span class="danger-color">15日以下拘留</span>
  <p class="primary-color">其他</p>
  <ol>
    <li>学习驾驶时：未取得学习驾驶证明的；没有教练员或者随车指导人员的；不符合规定的人员随车指导的</li>
  </ol>
</div>

 ## 罚款200-500
<div class="panel-item">
  <ol>
    <li><span class="warning-color">逾期不参加审验</span>仍驾驶机动车的</li>
    <li>驾驶人<span class="warning-color">身体条件发生变化</span>不适合驾驶机动车，仍驾驶机动车</li>
    <li>未使用符合规定的机动车的、自学用车搭载随车指导人员以外的其他人员（对教练员或者随车指导人员罚款）</li>
  </ol>
</div>

 ## 罚款200以下
<div class="panel-item">
  <ol>
    <li>重型、中型载货汽车、专项作业车、挂车及大型客车的车身或者车厢后部未按照规定喷涂放大的牌号或者放大的牌号不清晰的</li>
    <li>机动车喷涂、粘贴标识或者车身广告，影响安全驾驶的</li>
    <li>载货汽车、专项作业车及挂车未按照规定安装侧面及后下部防护装置、粘贴车身反光标识的</li>
    <li>机动车未按照规定期限进行安全技术检验的</li>
    <li>改变车身颜色、更换发动机、车身或者车架，未按照规定的时限办理变更登记的</li>
    <li>机动车所有权转让后，现机动车所有人未按照规定的时限办理转让登记</li>
    <li>机动车所有人办理变更登记、转让登记，未按照规定的时限到住所地车辆管理所申请机动车转入的；</li>
    <li>机动车所有人未按照规定申请变更备案的</li>
  </ol>
</div>

## 罚款500以下
<div class="panel-item">
  <ol>
    <li>申请人<span class="warning-color">隐瞒有关情况或者提供虚假材料</span>申领机动车驾驶证的</li>
  </ol>
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

  color: #333;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  font-size: 14px;
  p {
    margin: 10px 0;
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