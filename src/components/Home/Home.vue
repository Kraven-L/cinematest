<template>
  <div class="home">
      <banner-swiper></banner-swiper>
      
  </div>
</template>
<script>
// require("../../assets/css/home.less");

import swiper from "../component/swiper";
export default {
  data() {
    return {
      msg: "这是message"
    };
  },
  components: {
    bannerSwiper: swiper
  },
  mounted() {
    
  },
  methods: {

  }
};
</script>
<style>
.home{
    font-size: 36px;
    color: #fff;
    height: 200px;
}
</style>


