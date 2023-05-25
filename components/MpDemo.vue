<template>
  <div v-for="(item, index) in mp" :key="index">
    <h4 class="module-title">{{ item.module }}</h4>
    <div class="mp-wrapper">
      <div class="mp-item" v-for="(m, i) in item.imgs" :key="i">
        <img :src="withBase(m.img)" :alt="m.title" class="mp-logo" />
        <div class="cover">
          <p>{{ m.title }}</p>
          <p>{{ m.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'
const mp = ref([
  {
    module: '社交云店',
    imgs: [
      { img: '/img/mp_kunlunshan.jpg', title: '昆仑山矿泉水官方商城', desc: '昆仑山矿泉水官方商城，多重缤纷好礼' },
      { img: '/img/mp_tianlongquan.jpg', title: '天龙泉云店', desc: '天龙泉品牌产品营销活动' },
      { img: '/img/mp_taiyangshen.jpg', title: '太眼神官方商城', desc: '太眼神旗下品牌' }
    ]
  },
  {
    module: '会员经营',
    imgs: [
      { img: '/img/mp_xuehua.jpg', title: '雪花啤酒', desc: '雪花啤酒安徽会员中心' },
      { img: '/img/mp_bnht.jpg', title: '百年糊涂', desc: '百年糊涂积分商城' },
      { img: '/img/mp_vinda.jpg', title: '维达', desc: '维达集团旗下品牌专属活动资讯平台，粉丝会员中心' }
    ]
  },
  {
    module: '分销商城',
    imgs: [
      { img: '/img/mp_6s.jpg', title: '6S一站式变美', desc: '入驻加盟，尊享VIP服务，推广营销' },
      { img: '/img/mp_lieke.jpg', title: '宜成', desc: '拼团免费领超值好礼' },
      { img: '/img/mp_wuyu.jpg', title: '武雨美人腰', desc: '会员分享赚钱，低价购物，代理尊享每笔订单收益' }
    ]
  },
  {
    module: '智慧门店',
    imgs: [
      {
        img: '/img/mp_wanmian.jpg',
        title: '万免',
        desc: '专属云门店，线上直播、线上商城、线上分销、线上裂变、线上推广'
      },
      { img: '/img/mp_store.jpeg', title: '孙氏睡觉', desc: '线上预约服务，到店享受，购买礼包返积分兑商品' },
      { img: '/img/mp_manage.jpg', title: '万免智慧门店助手', desc: '门店运营和管理' }
    ]
  },
  {
    module: '其他',
    imgs: [
      { img: '/img/mp_bawang.png', title: '99霸王会员卡', desc: '周边商家，吃喝玩乐，同城万店免单' },
      { img: '/img/mp_longcheng.jpg', title: '龙程酒业促销员管理', desc: '促销员管理系统' }
    ]
  }
])
</script>

<style lang="scss" scoped>
.mp-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.module-title {
  position: relative;
  padding-left: 20px;
  background-image: -webkit-linear-gradient(90deg, rgb(223, 47, 208), rgb(22, 85, 211));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    position: absolute;
    content: ' ';
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-radius: 2px;
    background: linear-gradient(45deg, #E1001A, #34721A);
  }
}
.mp-item {
  position: relative;
  margin-right: 20px;
  margin-bottom: 20px;
  &:hover .cover {
    background: rgba(255,255,255,.92);
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    opacity: 1;
    transform: rotateY(0deg);
  }
  .cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #000;
    line-height: 100%;
    text-align: center;
    opacity: 0;
    transform: rotateY(-180deg);
    cursor: pointer;
  }
  .mp-logo {
    display: block;
    width: 200px;
    height: 200px;
  }
}
</style>
