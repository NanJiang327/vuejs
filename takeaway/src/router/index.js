import Vue from 'vue'
import Router from 'vue-router'
import Rating from '@/components/rating/rating'
import Goods from '@/components/goods/goods'
import Seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'goods'
    }, {
      path: '/rating',
      name: 'Rating',
      component: Rating
    }, {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }, {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ],
  linkActiveClass: 'link-active'
})
