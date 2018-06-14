<template>
  <div id="app">
    <com-header></com-header>
    <router-view/>
  </div>
</template>

<script>
//引入顶部header组件
import Header from './components/common/header'

export default {
  name: 'App',
  
  data(){
      return{

      }
  },
  components:{
      comHeader :Header
  }
}
</script>

<style>
</style>
