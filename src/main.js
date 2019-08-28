// 入口js
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
// 注册 store 
import store from './store'

import './mock/mockServer' // 加载mockServer即可

Vue.config.productionTip = false

// 引入 gif
import loading from './common/imgs/loading.gif'
// 注册全局组件标签
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

// 注冊全局组件标签
import {Button} from 'mint-ui'
Vue.component(Button.name, Button) // <mt-button>
import MintUI from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //使用 vue-router
  store,   //使用vuex
  render: h => h(App)
})
