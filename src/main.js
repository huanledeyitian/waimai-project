// 入口js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 注冊全局组件标签
import {Button} from 'mint-ui'
Vue.component(Button.name, Button) // <mt-button>

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
