// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决某些移动设备上click延迟问题
import fastClick from 'fastclick'
// 统一移动设备的显示效果
// 在build中的wepack.base.conf.js中配置了styles路径, 则styles代表/src/assets/styles
import 'styles/reset.css'
// 消除移动设备的border像素问题
import 'styles/border.css'
// 引用polyfill兼容不支持promise的设备
import 'babel-polyfill'
// 引入iconfont
import 'styles/icon.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
