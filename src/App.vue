<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
    <!-- 写条件，meta 属性判断 -->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {reqFoodCategorys} from './api'  //测试数据的
export default {
  name: 'App',
  components: {
    FooterGuide 
  },
  // async mounted(){  
  //   // 测试数据的
  //   const result = await reqFoodCategorys()
  //   console.log(result)
  // }
  mounted(){
    // this.$store.dispatch('getAddress')  //测试数据 actions 里面的异步数据
    this.getAddress()
  },

  methods: {
    // 映射
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
