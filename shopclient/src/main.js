/*
入口JS
 */
import Vue from 'vue'
import store from './store/store'
import App from './App.vue'
import router from './router'
// 引入一个全局组件
import Mint from 'mint-ui'
import './filters'
// 加载过滤器
import 'mint-ui/lib/style.css'
import './mock/mockServer'
// 分别引入vue-lazyload 和 懒加载用的图片
import Vuelazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
/* eslint-disable no-new */
// 路由的懒加载
Vue.use(Mint)
Vue.use(Vuelazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
