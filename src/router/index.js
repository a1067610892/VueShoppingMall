import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import Details from '@/Details/Details'
import Checkout from '@/Checkout/Checkout'
import Payment from '@/Payment/Payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Details',
      name: 'Details',
      component: Details
    }, {
      path: '/Checkout',
      name: 'Checkout',
      component: Checkout
    }, {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    }
  ]
})
