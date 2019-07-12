<template>
  <div class="details">
    <div class="details-box">
      <div class="box-left">
        <ul>
          <img @click="Switch(index)" :class="ListIndex === index ? 'on' : ''" v-for="(item, index) in list.ali_images" :key="index" :src="item">
        </ul>
      </div>
      <div class="box-center">
        <img class="box-img" :src="list.ali_images[ListIndex]">
      </div>
      <div class="box-right">
        <h1>{{list.title}}</h1>
        <span class="sub-title">{{list.sub_title}}</span><span class="price">￥{{list.price}}</span>
        <div class="details-box-content">
          <div class="box-content-top">
            <span>颜色</span>
            <img :src="`http://img01.smartisanos.cn/${list.spec_json.image}/20X20.jpg`">
          </div>
          <div class="box-content-bottom">
            <span>数量</span>
            <button class="reduce"></button>
            <span class="num">{{sum}}</span>
            <button class="plus"></button>
          </div>
        </div>
        <button class="btn">加入购物车</button>
        <button class="btn">现在购买</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      list: {
        ali_images: [],
        spec_json: []
      },
      sum: 1,
      ListIndex: 0
    }
  },
  mounted () {
    this.list = JSON.parse(this.$route.query.listitem)
    console.log(this.list)
  },
  methods: {
    Switch (index) {
      this.ListIndex = index
    }
  }
}
</script>

<style scoped>
.details {
  width: 1220px;
  background: #FFF;
  border-radius: 8px;
  border-color: rgba(0,0,0,.14);
  box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  min-height: 600px;
  margin: 0 auto 50px auto;
}
.details .details-box {
  width: 1100px;
  padding: 60px 60px;
}
.details .details-box .box-left {
  float: left;
  width: 105px;
}
.details .details-box .box-left>ul {
  width: 100%;
  height: 100%;
}
.details .details-box .box-left>ul>img {
  width: 80px;
  height: 80px;
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 5px;
  margin: 10px;
  float: left;
}
.details .details-box .box-left>ul .on {
  border: 3px solid rgba(0,0,0,.2);
}
.details .details-box .box-center {
  width: 440px;
  height: 440px;
  float: left;
}
.details .details-box .box-center .box-img {
  width: 440px;
  height: 440px;
}
.details .details-box .box-right {
  width: 450px;
  height: 400px;
  float: left;
  padding: 20px 0;
  margin-left: 10px;
}
.details .details-box .box-right h1 {
  font-size: 24px;
  line-height: 1.25;
  color: #000;
  margin-bottom: 13px;
}
.details .details-box .box-right .sub-title {
  width: 360px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  color: #bdbdbd;
  font-size: 14px;
}
.details .details-box .box-right .price {
  width: 90px;
  height: 40px;
  line-height: 40px;
  color: #de4037;
  font-size: 24px;
  display: inline-block;
}
.details .details-box .box-right .details-box-content {
  width: 450px;
  height: 148px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  margin-top: 10px;
}
.details .details-box .box-right .details-box-content .box-content-top {
  margin: 29px 0 0 30px;
  height: 46px;
  width: 420px;
  line-height: 46px;
}
.details .details-box .box-right .details-box-content .box-content-top>span{
  font-size: 14px;
  color: #8d8d8d;
  width: 50px;
  height: 100%;
  display: block;
  float: left;
}
.details .details-box .box-right .details-box-content .box-content-top>img {
  width: 26px;
  height: 26px;
  float: left;
  border-radius: 50%;
  border: 2px solid #E5E5E5;
  padding: 3px;
  margin: 5px 0;
  cursor: pointer;
}
.details .details-box .box-right .details-box-content .box-content-bottom {
  width: 420px;
  height: 40px;
  margin: 0 0 0 30px;
  line-height: 40px;
}
.details .details-box .box-right .details-box-content .box-content-bottom>span{
  font-size: 14px;
  color: #8d8d8d;
  width: 50px;
  height: 100%;
  display: block;
  float: left;
}
.details .details-box .box-right .details-box-content .box-content-bottom .reduce {
  width: 36px;
  height: 36px;
  float: left;
  background: url('../assets/img/cart-updown.jpg') 0 62px;
  margin: 2px 0;
}
.details .details-box .box-right .details-box-content .box-content-bottom .plus {
  width: 36px;
  height: 36px;
  float: left;
  background: url('../assets/img/cart-updown.jpg') 0 2px;
  margin: 2px 0;
}
.details .details-box .box-right .details-box-content .box-content-bottom .num {
  text-align: center;
  font-size: 16px;
}
.details .details-box .box-right .btn {
  width: 145px;
  height: 50px;
  margin: 30px 0 0 20px;
  border-radius: 7px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
}
.details .details-box .box-right .btn:nth-of-type(1) {
  background: #5c81e3;
  border-color: #5c81e3;
  color: #FFF;
  background-image: linear-gradient(#779ae9,#5078df);
}
.details .details-box .box-right .btn:nth-of-type(1):hover {
  box-shadow: inset 0 1px 1px #7696DE, inset 0 0 2px #627DCA, inset 0 -2px 3px #5A77C7, inset 0 0 100px rgba(48,77,147,.4);
}
.details .details-box .box-right .btn:nth-of-type(2) {
  background: linear-gradient(#fff,#fafafa);
}
.details .details-box .box-right .btn:nth-of-type(2):hover {
  background: linear-gradient(#f6f6f6,#ededed);
}
</style>
