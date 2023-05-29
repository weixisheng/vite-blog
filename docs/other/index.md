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

 ## 罚款-其他
<div class="panel-item">
  <ol>
    <li>申请人在<span class="warning-color">考试</span>过程中有贿赂、舞弊行为的，取消考试资格，已经通过考试的其他科目成绩无效，公安机关交通管理部门处<span class="warning-color">2000元以下</span>罚款；申请人在<span class="warning-color">1年内</span>不得再次申领机动车驾驶证。</li>
    <li>机动车驾驶人参加<span class="warning-color">审验教育</span>时在签注学习记录、学习过程中弄虚作假的，<span class="warning-color">本人：罚1000元；代替他人：罚2000元；组织：罚3倍2万</span></li>
    <li><span class="warning-color">组织</span>他人实施<span class="warning-color">卖分</span>牟取经济利益的，处违法所得<span class="warning-color">5倍以下</span>罚款，但最高<span class="warning-color">不超过10万元</span></li>
    <li><span class="warning-color">组织</span>、参与实施欺骗、贿赂等不正当手段取得机动车<span class="warning-color">驾驶证</span>牟取经济利益的，处违法所得<span class="warning-color">3倍-5倍</span>罚款，但最高<span class="warning-color">不超过10万元</span></li>
    <li>接受交通<span class="warning-color">安全教育</span>扣减交通违法行为记分中弄虚作假的，撤销相应记分扣减记录，<span class="warning-color">1000元以下</span>罚款</li>
    <li>请<span class="warning-color">他人</span>代为接受<span class="warning-color">交通违法</span>行为处罚和记分并支付经济利益的，处所支付经济利益<span class="warning-color">3倍以下罚款</span>，但最高<span class="warning-color">不超过5万元</span></li>
    <li>以<span class="warning-color">欺骗、贿赂</span>等不正当手段取得校车/机动车<span class="warning-color">驾驶资格</span>的，<span class="warning-color">2000元以下</span>罚款</li>
    <li><span class="warning-color">伪造、变造</span>或者使用伪造、变造的机动车<span class="warning-color">登记证书、号牌、行驶证、驾驶证</span>的，由公安机关交通管理部门予以<span class="warning-color">收缴，扣留</span>该机动车，处<span class="warning-color">15日以下</span>拘留，并处<span class="warning-color">2000-5000元</span>罚款</li>
    <li>使用<span class="warning-color">其他车辆</span>的机动车登记证书、号牌、行驶证、检验合格标志、保险标志的，由公安机关交通管理部门予以收缴，扣留该机动车，处<span class="warning-color">2000-5000元</span>罚款</li>
  </ol>
</div>

## 记1分
<div class="panel-item">
  <ol>
    <li>不按规定使用灯光的；</li>
    <li>不按规定会车的；</li>
    <li>不按规定倒车的；</li>
    <li>驾驶机动车违反禁令标志、禁止标线指示的；</li>
    <li>驾驶未按规定定期进行安全技术检验的公路客运汽车、旅游客运汽车、危险物品运输车辆以外的机动车上道路行驶的</li>
    <li>上道路行驶的机动车未放置检验合格标志、保险标志，未随车携带行驶证、机动车驾驶证的；</li>
    <li>驾驶机动车没有关好车门、车厢的；</li>
    <li>驾驶机动车载货长度、宽度、高度超过规定的；</li>
  </ol>
</div>

## 记2分
<div class="panel-item">
  <ol>
    <li>驾驶机动车行经交叉路口不按规定行车或者停车的；</li>
    <li>驾驶二轮摩托车，不戴安全头盔的；</li>
    <li>驾驶机动车在高速公路/城市快速路上行驶时，驾驶人未按规定系安全带的；</li>
    <li>前方机动车停车排队或者缓慢行驶时，借道超车或者占用对面车道、穿插等候车辆的；(<span class="danger-color">100元罚款</span>)</li>
    <li class="gray-color">不按照规定为校车配备安全设备，或者不按照规定对校车进行安全维护的；</li>
    <li class="gray-color">驾驶校车运载学生，不按照规定放置校车标牌、开启校车标志灯，或者不按照经审核确定的线路行驶的；</li>
    <li class="gray-color">校车上下学生，不按照规定在校车停靠站点停靠的；</li>
    <li class="gray-color">校车未运载学生上道路行驶，使用校车标牌、校车标志灯和停车指示标志的；</li>
    <li class="gray-color">驾驶校车上道路行驶前，未对校车车况是否符合安全技术要求进行检查，或者驾驶存在安全隐患的校车上道路行驶的；</li>
    <li class="gray-color">在校车载有学生时给车辆加油，或者在校车发动机引擎熄灭前离开驾驶座位的。</li>
  </ol>
</div>

## 记3分
<div class="panel-item">
  <p class="primary-color">超速处罚超过规定时速10%以内，仅给予警告，不进行扣分处罚。</p>
  <p class="danger-color">慢3占6停9倒逆12。</p>
  <ol>
    <li>驾驶机动车有拨打、接听手持电话等妨碍安全驾驶的行为的；</li>
    <li>驾驶营运客车（不包括公共汽车）、校车以外的载客汽车载人超过核定人数&lt;20%的；</li>
    <li>驾驶中型以上载客载货汽车、危险物品运输车辆在<span class="warning-color">高速公路/城市快速路以外</span>的道路上行驶或者驾驶其他机动车行驶超过规定时速&lt;20%的；</li>
    <li>驾驶货车载物超过核定载质量&lt;30%的；</li>
    <li>高速公路上行驶低于规定最低时速的；(<span class="danger-color">慢3</span>)</li>
    <li>驾驶禁止驶入高速公路的机动车驶入高速公路的；</li>
    <li>驾驶机动车在高速公路/城市快速路上不按规定车道行驶的；</li>
    <li>驾驶机动车行<span class="warning-color">经人行横道，不按规定减速、停车、避让行人</span>的；</li>
    <li>驾驶机动车<span class="warning-color">不按照规定避让校车</span>的。</li>
    <li>驾驶机动车<span class="warning-color">不按规定超车、让行的，或者逆向行驶</span>的；</li>
    <li>驾驶机动车<span class="warning-color">违反规定牵引挂车</span>的；</li>
    <li>在道路上车辆发生故障、事故停车后，<span class="warning-color">不按规定使用灯光和设置警告标志</span>的；</li>
    <li>上道路行驶的机动车未按规定定期进行安全技术检验的。</li>
  </ol>
</div>

## 记6分
<div class="panel-item">
  <ol>
    <li>机动车<span class="warning-color">驾驶证被暂扣</span>期间驾驶机动车的;</li>
    <li>驾驶机动车<span class="warning-color">违反道路交通信号灯</span>通行的;</li>
    <li>驾驶营运客车(不包括公共汽车)、校车载人超过核定人数&lt;20%的，或者驾驶其他载客汽车载人超过核定人数&gt;20%的;</li>
    <li>造驾驶中型以上载客载货汽车、校车、危险物品运输车辆在高速公路/城市快速路上行驶超过规定时速&lt;20%的;</li>
    <li>驾驶中型以上载客载货汽车、校车、危险物品运输车辆在<span class="warning-color">高速公路/城市快速路以外</span>的道路上行驶或者驾驶其他机动车行驶超过规定时速20%~50%的;</li>
    <li>驾驶货车载物超过核定载质量&gt;30%或者违反规定载客的;</li>
    <li>驾驶营运客车以外的机动车在高速公路车道内停车的;</li>
    <li>驾驶机动车在<span class="warning-color">高速公路/城市快速路上违法占用应急车道</span>行驶的;(<span class="danger-color">占6</span>)</li>
    <li>低能见度气象条件下，驾驶机动车在高速公路上不按规定行驶的;</li>
    <li>驾驶机动车运载超限的不可解体的物品，未按指定的时间、路线、速度行驶或者未悬挂明显标志的;</li>
    <li>驾驶机动车载运爆炸物品、易燃易爆化学物品以及剧毒、放射性等危险物品，未按指定的时间、路线、速度行驶或者未悬挂警示标志并采取必要的安全措施的;</li>
    <li>以隐瞒、欺骗手段补领机动车驾驶证的;</li>
    <li>连续驾驶中型以上载客汽车、危险物品运输车辆以外的机动车&gt;4小时未停车休息或者停车休息时间&lt;20分钟的;</li>
  </ol>
</div>

## 记9分
<div class="panel-item">
  <ol>
    <li>驾驶<span class="warning-color">未悬挂机动车号牌或者故意遮挡、污损机动车号牌</span>的机动车上道路行驶的;</li>
    <li><span class="warning-color">未取得校车驾驶资格</span>驾驶校车的;</li>
    <li>驾驶与<span class="warning-color">准驾车型不符</span>的机动车的；</li>
    <li>高速城快违法停车(<span class="danger-color">停9</span>)</li>
  </ol>
</div>

## 记12分
<div class="panel-item">
    <ol>
      <li><span class="warning-color">饮酒</span>后驾驶机动车的；</li>
      <li>驾驶营运客车（不包括公共汽车）、校车载人超过核定人数&gt;20%的；</li>
      <li>造成<span class="warning-color">交通事故后逃逸</span>，尚不构成犯罪的；</li>
      <li>使用<span class="warning-color">伪造、变造</span>的机动车号牌、行驶证、驾驶证、校车标牌或者使用其他机动车号牌、行驶证的；</li>
      <li>驾驶机动车在<span class="warning-color">高速公路上倒车、逆行、穿越中央分隔带掉头</span>的；(<span class="danger-color">倒逆12</span>)</li>
      <li>驾驶<span class="warning-color">营运客车在高速公路车道内停车</span>的；</li>
      <li>驾驶中型以上载客载货汽车、校车、危险物品运输车辆在高速公路/城市快速路上行驶超过规定时速&gt;20%或者在<span class="warning-color">高速公路/城市快速路以外</span>的道路上行驶超过规定时速&gt;50%，以及驾驶其他机动车行驶超过规定时速&gt;50%的；</li>
      <li>连续驾驶中型以上载客汽车、危险物品运输车辆&gt;4小时未停车休息或者停车休息时间&lt;20分钟的；</li>
    </ol>
    <img src="/img/道路记分.png" alt="超速记分" title="超速记分" class="example-img">
</div>

## 限速不超过30
<div class="panel-item">
  <p class="primary-color">单位：km/h。拖拉机、电瓶车、轮式专用机械车不得超过每小时15公里。</p>
  <ol>
    <li>进出非机动车道，通过铁路道口、急弯路、窄路、窄桥时；</li>
    <li>掉头、转弯、下陡坡时；</li>
    <li>遇雾、雨、雪、沙尘、冰雹，能见度在50米以内时；</li>
    <li>在冰雪、泥泞的道路上行驶时；</li>
    <li>牵引发生故障的机动车时</li>
  </ol>
</div>

## 不得超车
<div class="panel-item">
  <ol>
    <li>前车正在左转弯、掉头、超车的；</li>
    <li>与对面来车有会车可能的；</li>
    <li>前车为执行紧急任务的警车、消防车、救护车、工程救险车的；</li>
    <li>行经铁路道口、交叉路口、窄桥、弯道、陡坡、隧道、人行横道、市区交通流量大的路段等没有超车条件的。</li>
  </ol>
</div>

## 先行原则
<div class="panel-item">
  <p class="primary-color">转弯的机动车让<span class="warning-color">直行</span>的车辆先行，<span class="warning-color">右方道路</span>来车先行，右转弯车让<span class="warning-color">左转弯</span>车先行。</p>
  <ol>
    <li>有交通标志、标线控制的，让优先通行的一方先行；</li>
    <li>没有交通标志、标线控制的，在进入路口前停车瞭望，让右方道路的来车先行；</li>
    <li>转弯的机动车让直行的车辆先行；</li>
  </ol>
  <p class="primary-color">在没有中心隔离设施或者没有中心线的道路上会车:</p>
  <ol>
    <li>减速靠右行驶，并与其他车辆、行人保持必要的安全距离；</li>
    <li>在有障碍的路段，无障碍的一方先行：但有障碍的一方已驶入障碍路段而无障碍的一方未驶入时，有障碍的一方先行；</li>
    <li>在狭窄的坡路，上坡的一方先行；但下坡的一方已行至中途而上坡的一方未上坡时，下坡的一方先行；</li>
    <li>在狭窄的山路，不靠山体的一方先行；</li>
    <li>夜间会车应当在距相对方向来车<span class="warning-color">150m以外</span>改用近光灯，在窄路、窄桥与非机动车会车时应当使用近光灯。</li>
  </ol>
</div>

## 停车原则
<div class="panel-item">
  <p class="primary-color">口五站三</p>
  <ol>
    <li>在设有禁停标志、标线的路段，在机动车道与非机动车道、人行道之间设有隔离设施的路段以及人行横道、施工地段，不得停车；</li>
    <li>交叉路口、铁路道口、急转弯、宽度不足4米的窄路、桥梁、陡坡、隧道以及距离上述地点50米以内的路段，不得停车；</li>
    <li>公共汽车站、急救站、加油站、消防栓或者消防队（站）门前以及距离上述地点30米以内的路段，除使用上述设施的以外，不得停车；</li>
    <li>车辆停稳前不得开车门和上下人员，开关车门不得妨碍其他车辆和行人通行；</li>
    <li>路边停车应当<span class="danger-color">紧靠道路右侧</span>，车身距道路边缘不超过30厘米，机动车驾驶人不得离车，上下人员或者装卸物品后，立即驶离；</li>
    <li>城市公共汽车不得在站点以外的路段停车上下乘客。</li>
  </ol>
  <p class="primary-color">路边黄色虚线允许临时停车，黄色实线禁止停车</p>
</div>

## 事故处罚
<div class="panel-item">
  <ol>
    <li>发生重大事故，致人重伤、死亡或者使公私财产遭受重大损失的，处3年以下有期徒刑或者拘役；</li>
    <li>交通运输肇事后逃逸或者有其他特别恶劣情节的，处3年以上7年以下有期徒刑；</li>
    <li>因逃逸致人死亡的，处7年以上有期徒刑。</li>
    <li>道路上驾驶机动车追逐竞驶，情节恶劣的，处拘役，并处罚金，不用判刑。</li>
  </ol>
</div>

## 危险驾驶罪
<div class="panel-item">
  <p class="primary-color">危险驾驶构成犯罪吊销驾照5年内不得再次申领</p>
  <ol>
    <li>追逐竞驶，情节恶劣的；</li>
    <li>醉酒驾驶机动车的；</li>
    <li>从事校车业务或者旅客运输，严重超载，或严重超速行驶的；</li>
    <li>违反危险化学品安全管理规定运输危险化学品，危及公共安全的。</li>
  </ol>
</div>

## 审验
<div class="panel-item">
  <p class="primary-color">驾驶人没有按照规定参加审验仍驾驶机动车的，公安交管部门将处200-500元罚款。</p>
  <p class="primary-color">因服兵役、出国（境）等原因，无法在规定时间内办理驾驶证期满换证、提交身体条件证明的，可以向机动车<span class="danger-color">驾驶证核发地</span>车辆管理所申请延期办理，延期期限最长不超过<span class="danger-color">3年</span>。延期期间机动车驾驶人不得驾驶机动车</p>
  <ol>
    <li>发生交通事故造成人员死亡承担同等以上责任未被吊销驾驶证的，应当在记分周期结束后30日内到公安交管部门接受审验；</li>
    <li>驾驶证转到异地或者有效期满换证时，应当到公安交管部门接受审验。</li>
  </ol>
</div>

## 扣留
<div class="panel-item">
  <p class="primary-color">扣留机动车</p>
  <ol>
    <li>未悬挂机动车号牌，未放置检验合格标志、保险标志，或者未随车携带行驶证、驾驶证的</li>
    <li>未按照国家规定投保机动车第三者责任强制保险的（<span class="danger-color">扣车至投保，并处规定投保最低责任限额应缴纳的保险费的二倍罚款</span>）</li>
    <li>伪造、变造或者使用伪造、变造的机动车登记证书、号牌、行驶证、驾驶证的（<span class="danger-color">收缴，扣车，15日以下拘留，并处罚款2000-5000；构成犯罪依法追究刑事责任</span>）</li>
    <li>伪造、变造或者使用伪造、变造的检验合格标志、保险标志的（<span class="danger-color">收缴，扣车，10日以下拘留，并处罚款1000-3000；构成犯罪依法追究刑事责任</span>）</li>
    <li>对发生道路交通事故，因收集证据需要的</li>
  </ol>
  <p class="primary-color">扣留驾驶证</p>
  <ol>
    <li>饮酒、醉酒后驾驶机动车的</li>
    <li>机动车驾驶人将机动车交由未取得机动车驾驶证或者机动车驾驶证被吊销、暂扣的人驾驶的</li>
    <li>机动车行驶超过规定时速50%的</li>
    <li>驾驶拼装或者已达到报废标准的机动车的</li>
    <li>发生重大交通事故，构成犯罪的</li>
    <li>在一个记分周期内累积记分达到12分的</li>
  </ol>
</div>

## 保护现场并立即报警
<div class="panel-item">
  <p class="primary-color">发生财产损失事故，2-5情形之一，车辆可以移动的，当事人可以在报警后，在确保安全的原则下对现场拍照或者标划停车位置，将车辆移至不妨碍交通的地点等候处理</p>
  <ol>
    <li>造成人员死亡、受伤的</li>
    <li class="warning-color">发生财产损失事故，当事人对事实或者成因有争议的，以及虽然对事实或者成因无争议，但协商损害赔偿未达成协议的</li>
    <li class="warning-color">机动车无号牌、无检验合格标志、无保险标志的</li>
    <li class="warning-color">载运爆炸物品、易燃易爆化学物品以及毒害性、放射性、腐蚀性、传染病病源体等危险物品车辆的</li>
    <li class="warning-color">碰撞建筑物、公共设施或者其他设施的</li>
    <li>驾驶人无有效机动车驾驶证的</li>
    <li>驾驶人有饮酒、服用国家管制的精神药品或者麻醉药品嫌疑的</li>
    <li>当事人不能自行移动车辆的</li>
  </ol>
</div>

## 标记
<div class="panel-item">
  <ol>
    <li>双黄色虚线是“潮汐车道”，行车时允许压线或越线</li>
  </ol>
</div>

## 时间相关
<div class="panel-item">
  <ol>
    <li>不得再次申领驾驶证：<span class="warning-color">作假、贿赂、舞弊（未取得）1年</span>，<span class="warning-color">吊销2年</span>，<span class="warning-color">撤销（已取得）3年</span>，<span class="warning-color">醉酒、危险驾驶5年</span>，<span class="danger-color">逃逸终身</span></li>
    <li>一个记分周期满12分要在<span class="warning-color">15日</span>内到驾驶证核发地参加<span class="warning-color">7日</span>的学习</li>
    <li>2次达到12分或累计达到24分，科目一考试合格后20日内进行科目三考试</li>
    <li>驾驶证<span class="warning-color">有效期满前90日</span>内向<span class="warning-color">驾驶证核发地车辆管理所</span>申请换证</li>
    <li>驾驶人<span class="warning-color">信息发生变化的30日</span>内向驾驶证核发地车辆管理所申请换证</li>
    <li>驾驶技能准考证明的有效期为3年</li>
    <li>机动车驾驶证有效期分为6年、10年和长期</li>
    <li>年龄在<span class="warning-color">70周岁以上</span>的机动车驾驶人，应当<span class="warning-color">每年</span>进行一次身体检查，在<span class="warning-color">记分周期结束后三十日</span>内，提交医疗机构出具的有关身体条件的证明</li>
    <li>一个记分周期满分教育的次数每增加一次或者累积记分每增加12分，道路交通安全法律、法规和相关知识的学习时间增加7天，每次满分学习的天数最多60天</li>
    <li>机动车驾驶人参加<span class="warning-color">现场学习、网络学习</span>的天数累计不得少于<span class="warning-color">5天</span>，其中，<span class="warning-color">现场学习</span>的天数不得少于<span class="warning-color">2天</span>。</li>
    <li>补发、换发号牌期间，申请人可以申领有效期不超过<span class="warning-color">15日的临时行驶车号牌</span></li>
  </ol>
</div>

## 车速相关
<div class="panel-item">
  <ol>
    <li>同方向三车道，最高120，最低60（<span class="warning-color">120-110，110-90，90-60</span>）</li>
    <li>同方向两车道（<span class="warning-color">120-100， 100-60</span>）</li>
    <li>没有道路中心线的道路，城市道路为每小时30公里，公路为每小时40公里（<span class="warning-color">【无线】城3公4</span>）</li>
    <li>同方向只有1条机动车道的道路，城市道路为每小时50公里，公路为每小时70公里（<span class="warning-color">【有线】城5公7</span>）</li>
    <li>高速公路遇到 雨 雾 沙尘 冰雹等限速：（1）能见度&lt;200m，车速≤60km/h，间距≥100m；
      （2）能见度&lt;100m，车速≤40km/h，间距≥50m；
      （3）能见度&lt;50m，车速≤20km/h，尽快驶离高速；
      <span class="warning-color">261、145、520</span>
    </li>
  </ol>
</div>

## 机动车核定的载客人数
<div class="panel-item">
  <ol>
    <li>大型客车是指核定载客人数20人以上（含20人）的载客汽车</li>
    <li>中型客车是指核定载客人数10—19人（含19人）的载客汽车</li>
    <li>小型客车是指核定载客人数小9人（含9人）的载客汽车</li>
    <li>微型载客汽车是指核定载客人数8人以下（含8人）且排气量小于1升（含1升）的载客汽车</li>
  </ol>
</div>

## 超速行驶危害
<div class="panel-item">
  <p class="primary-color">货运车辆在高速上最高车速不得超过100公里/小时</p>
  <ol>
    <li>反应距离延长</li>
    <li>两边的事物会比较模糊，视野变窄</li>
    <li>由于惯性作用，就会加重事故后果</li>
    <li>制动距离延长</li>
  </ol>
</div>


## 广东车牌简称
<div class="panel-item">
  <p style="padding-top: 1px" />
  <BaseTag text="A: 广州" />
  <BaseTag text="B: 深圳" />
  <BaseTag text="C: 珠海" />
  <BaseTag text="D: 汕头" />
  <BaseTag text="E: 佛山" />
  <BaseTag text="F: 韶关" />
  <BaseTag text="G: 湛江" />
  <BaseTag text="H: 肇庆" />
  <BaseTag text="J: 江门" />
  <BaseTag text="K: 茂名" />
  <BaseTag text="L: 惠州" />
  <BaseTag text="M: 梅州" />
  <BaseTag text="N: 汕尾" />
  <BaseTag text="P: 河源" />
  <BaseTag text="Q: 阳江" />
  <BaseTag text="R: 清远" />
  <BaseTag text="S: 东莞" />
  <BaseTag text="T: 中山" />
  <BaseTag text="U: 潮州" />
  <BaseTag text="V: 揭阳" />
  <BaseTag text="W: 云浮" />
  <BaseTag text="X: 佛山顺德区" />
  <BaseTag text="Y: 佛山南海区" />
  <BaseTag text="Z: 港澳进入内地车辆" />
</div>

## 中国各省简称
<div class="panel-item">
  <p style="padding-top: 1px" />
  <BaseTag text="北京: 京" />
  <BaseTag text="天津: 津" />
  <BaseTag text="河北: 冀" />
  <BaseTag text="山西: 晋" />
  <BaseTag text="内蒙古: 蒙" />
  <BaseTag text="辽宁: 辽" />
  <BaseTag text="吉林: 吉" />
  <BaseTag text="黑龙江: 黑" />
  <BaseTag text="上海: 沪" />
  <BaseTag text="江苏: 苏" />
  <BaseTag text="浙江: 浙" />
  <BaseTag text="安徽: 皖" />
  <BaseTag text="福建: 闽" />
  <BaseTag text="江西: 赣" />
  <BaseTag text="山东: 鲁" />
  <BaseTag text="河南: 豫" />
  <BaseTag text="湖北: 鄂" />
  <BaseTag text="湖南: 湘" />
  <BaseTag text="广东: 粤" />
  <BaseTag text="广西: 桂" />
  <BaseTag text="海南: 琼" />
  <BaseTag text="重庆: 渝" />
  <BaseTag text="四川: 川" />
  <BaseTag text="贵州: 黔" />
  <BaseTag text="云南: 滇" />
  <BaseTag text="西藏: 藏" />
  <BaseTag text="陕西: 陕" />
  <BaseTag text="甘肃: 甘" />
  <BaseTag text="青海: 青" />
  <BaseTag text="宁夏: 宁" />
  <BaseTag text="新疆: 新" />
  <BaseTag text="台湾: 台" />
  <BaseTag text="香港: 港" />
  <BaseTag text="澳门: 澳" />
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
  ::v-deep {
    .base-tag {
      margin-right: 10px;
    }
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