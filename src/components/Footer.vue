<template>
  <footer class="head-footer">
    <div class="head-footer-right">
        <button @click="placeOrder">{{content}}</button>
        <span class="footer-total">￥{{(num * price) + 8}}.00</span>
        <span class="number">应付金额：</span>
    </div>
  </footer>
</template>

<script>
import NavTitle from '../common/Title'
export default {
  props: {
    content: String,
    num: Number,
    price: Number,
    item: Object
  },
  name: 'Payment',
  data () {
    return {

    }
  },
  components: {
    NavTitle
  },
  methods: {
    placeOrder () {
      if (this.content === '提交订单') {
        this.$router.push({
          name: 'Payment',
          path: '/Payment',
          query: {
            list: JSON.stringify(this.item),
            Number: this.num,
            money: this.price
          }
        })
      }
    }
  }
}
</script>

<style scoped>
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
