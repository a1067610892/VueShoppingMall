<template>
  <div class="payment">
    <nav-title :content="'支付订单'"></nav-title>
    <div class="payment-box">
      <h2>提交订单成功</h2>
      <p>请在<span class="color">24小时</span>内完成支付，超时订单将自动取消。</p>
      <p>我们将在您完成支付后的 72 小时内发货</p>
    </div>
    <footer-bottom :content="'完成支付'" :price="Pirce" :num="count"></footer-bottom>
  </div>
</template>

<script>
import NavTitle from '../common/Title'
import FooterBottom from '../components/Footer'
export default {
  name: 'Payment',
  data () {
    return {
      Pirce: 0,
      count: 0
    }
  },
  mounted () {
    this.Pirce = Number(this.$route.query.money)
    this.count = Number(this.$route.query.Number)
  },
  components: {
    NavTitle,
    FooterBottom
  }
}
</script>

<style scoped>
.payment {
  width: 1220px;
  margin: 39px auto 0 auto;
  border: 1px solid #D1D1D1;
  border-color: rgba(0,0,0,.14);
  border-radius: 8px;
  box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  background: #FFF;
}
.payment .payment-box {
  padding: 60px 0 55px;
  color: #333;
  text-align: center;
  border-bottom: 1px solid #EBEBEB;
}

.payment .payment-box h2 {
  padding-bottom: 14px;
  line-height: 36px;
  font-size: 36px;
  color: #212121;
}
.payment .payment-box p {
  line-height: 24px;
  font-size: 14px;
  color: #999;
}
.payment .payment-box p .color {
  font-weight: bolder;
  color: #DE4037;
}
</style>
