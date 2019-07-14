<template>
  <div class="checkout">
    <div class="checkout-head-box">
      <h1 class="head-title">收获信息</h1>
      <div>
        111111111111111111111
      </div>
    </div>
    <div class="checkout-head-box height">
      <h1 class="head-title">发票信息</h1>
      <div class="head-box">
        <p class="head-p">发票类型：电子发票</p>
        <div class="Radio-box">
          <span>发票抬头：</span>
          <div class="Radio">
            <input @click="Switchhide" name="personal" type="radio" checked = 'checked'>个人
          </div>
          <div class="Radio">
            <input @click="Switchshow" name="personal" type="radio">单位
          </div>
          <div class="Radio-input" v-show="show">
            <input  type="text" value="请填写公司发票抬头">
            <span>必填</span>
          </div>
        </div>
        <p class="head-p">发票内容：购买商品明细</p>
        <p class="head-p-bottom">电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。</p>
      </div>
    </div>
    <div class="checkout-head-box">
      <h1 class="head-title">购物清单</h1>
      <header class="head-nav">
        <ul>
          <li>商品名称</li>
          <li>小计</li>
          <li>数量</li>
          <li>单价</li>
        </ul>
      </header>
      <div class="head-list">
        <img :src="itemlist.ali_image">
        <span class="checkout-head-title">{{itemlist.title}} ({{itemlist.sku_list[this.ListIndex].color}}) x</span>
        <span class="checkout-price">￥{{itemlist.price}}</span>
        <span class="checkout-price num">{{mun}}</span>
        <span class="checkout-price total">{{mun * itemlist.price}}.00</span>
      </div>
      <div class="head-list">
        <div class="head-list-right">
          <span>商品总计：</span>
          <span>￥{{mun * itemlist.price}}.00</span>
          <span>运费：</span>
          <span>+￥8.00</span>
        </div>
      </div>
      <footer class="head-footer">
        <div class="head-footer-right">
          <button @click="placeOrder">提交订单</button>
          <span class="footer-total">￥{{(mun * itemlist.price) + 8}}.00</span>
          <span class="number">应付金额：</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data () {
    return {
      show: false,
      itemlist: {
        sku_list: [{color: ''}, {color: ''}, {color: ''}, {color: ''}]
      },
      mun: 0,
      ListIndex: 0
    }
  },
  mounted () {
    this.itemlist = JSON.parse(this.$route.query.item)
    this.mun = this.$route.query.number
    this.ListIndex = this.$route.query.itemIndex
  },
  methods: {
    Switchhide () {
      this.show = false
    },
    Switchshow () {
      this.show = true
    },
    placeOrder () {
      this.$router.push({
        name: 'Payment',
        path: '/Payment'
      })
    }
  }
}
</script>

<style scoped>
.checkout {
  width: 1220px;
  margin: 40px auto;
}
.checkout .checkout-head-box {
  border: 1px solid #D1D1D1;
  border-color: rgba(0,0,0,.14);
  border-radius: 8px;
  box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  background: #FFF;
  margin-bottom: 30px;
}
.checkout .height {
  height: 250px;
}
.checkout .head-title {
  padding: 0 10px 0 28px;
  height: 60px;
  line-height: 60px;
  background: linear-gradient(#FFF,#F5F5F5);
  border-bottom: 1px solid #DCDCDC;
  border-radius: 10px 10px 0 0;
  color: #646464;
  font-size: 18px;
}
.checkout .checkout-head-box .head-box {
  padding: 22px 29px 29px 28px;
}
.checkout .checkout-head-box .head-box .head-p {
  height: 36px;
  line-height: 36px;
  color: #666;
}
.checkout .checkout-head-box .head-box .head-p-bottom {
  padding-top: 25px;
  margin-top: 11px;
  border-top: 1px solid #E5E5E5;
  line-height: 12px;
  text-indent: 10px;
  font-size: 12px;
  color: #999;
}
.checkout .checkout-head-box .head-box .Radio {
  display: inline-block;
  height: 30px;
  line-height: 30px;
}
.checkout .checkout-head-box .head-box .Radio>input {
  padding: 4px;
  width: 20px;
  height: 20px;
  background: blue;
}
.checkout .checkout-head-box .head-box .Radio-input {
  display: inline-block;
  height: 40px;
  margin-left: 20px;
  line-height: 40px;
  width: 340px;
  border: 1px solid #ccc;
  box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
  border-radius: 4px;
}
.checkout .checkout-head-box .head-box .Radio-input>input {
  color: #bebebe;
  margin: 0 10px;
  height: 40px;
  width: 270px;
}
.checkout .checkout-head-box .head-box .Radio-input>span {
  width: 40px;
  height: 32px;
  display: block;
  float: right;
  margin: 4px 0;
  background: #E66157;
  border-radius: 5px;
  color: #FFF;
  line-height: 34px;
  text-align: center;
  margin-right: 5px;
}
.checkout .checkout-head-box .head-nav {
  padding: 0 0 0 29px;
  font-size: 12px;
  height: 39px;
  line-height: 39px;
  background: #EEE;
  border-bottom: 1px solid #DBDBDB;
  color: #666;
}
.checkout .checkout-head-box .head-nav>ul {
  width: 100%;
  height: 100%;
}
.checkout .checkout-head-box .head-nav>ul>li {
  float: right;
  width: 149px;
  height: 100%;
  text-align: center;
}
.checkout .checkout-head-box .head-nav>ul>li:nth-of-type(1) {
  width: 200px;
  float: left;
}
.checkout .checkout-head-box .head-list {
  height: 110px;
  padding-left: 29px;
  border-bottom : 1px solid #EBEBEB;
}
.checkout .checkout-head-box .head-list>img {
  float: left;
  width: 80px;
  height: 80px;
  padding: 5px;
  border: 1px solid #EBEBEB;
  border-radius: 5px;
  margin: 9px 0;
}
.checkout .checkout-head-box .head-list .checkout-head-title {
  margin-left: 30px;
  width: 650px;
  height: 100%;
  display: block;
  float: left;
  line-height: 110px;
}
.checkout .checkout-head-box .head-list .checkout-price {
  width: 80px;
  height: 110px;
  display: block;
  float: left;
  text-align: center;
  line-height: 110px;
}
.checkout .checkout-head-box .head-list .num {
  margin-left: 75px;
}
.checkout .checkout-head-box .head-list .total{
  margin-left: 65px;
}
.checkout .checkout-head-box .head-list .head-list-right {
  padding: 21px 30px;
  float: right;
  height: 68px;
  width: 220px;
}
.checkout .checkout-head-box .head-list .head-list-right>span:nth-child(odd) {
  width: 110px;
  height: 34px;
  display: block;
  float: left;
  line-height: 34px;
}
.checkout .checkout-head-box .head-list .head-list-right>span:nth-child(even) {
  width: 110px;
  height: 34px;
  display: block;
  float: left;
  line-height: 34px;
  text-align: right;
}
.head-footer {
  width: 1220px;
  height: 92px;
  line-height: 92px;
}
.head-footer .head-footer-right {
  height: 51px;
  line-height: 51px;
  padding: 22px 29px 19px 30px;
}
.head-footer .head-footer-right>button {
  width: 136px;
  height: 46px;
  background: linear-gradient(#6F97E5,#527ED9);
  border-radius: 6px;
  color: #FFF;
  font-size: 16px;
  float: right;
  margin-left: 20px;
}
.head-footer .head-footer-right .footer-total {
  height: 50px;
  display: block;
  float: right;
  text-align: center;
  font-size: 24px;
  color: #D44D44;
}
.head-footer .head-footer-right .number {
  display: block;
  float: right;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
}
</style>
