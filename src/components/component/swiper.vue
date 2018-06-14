<template>
  <div class="swiper">
      <mt-swipe :show-indicators="false" :auto="4000">
        <mt-swipe-item style="backgroundColor:#f00">1</mt-swipe-item>
        <mt-swipe-item style="backgroundColor:#0f0">2</mt-swipe-item>
        <mt-swipe-item style="backgroundColor:#00f">3</mt-swipe-item>
      </mt-swipe>
  </div>
</template>
<script>
// require('../../assets/css/component/swiper.less')
export default {
  
}
</script>
<style lang="less" scoped>
.swiper{
    font-size: 36px;
    color: #fff;
    height: 200px;
}
</style>

