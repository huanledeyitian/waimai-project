// 入口js
import Vue from 'vue'
import App from './App'
import router from './router'
// 注册 store 
import store from './store'

import './mock/mockServer' // 加载mockServer即可

Vue.config.productionTip = false

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
