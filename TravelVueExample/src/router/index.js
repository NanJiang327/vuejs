import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/Main'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
