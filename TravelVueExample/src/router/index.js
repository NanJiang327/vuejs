import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/Main'
import City from '@/pages/city/City'

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
    }
  ]
})
