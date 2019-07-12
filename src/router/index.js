import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import Details from '@/Details/Details'

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
    }
  ]
})
