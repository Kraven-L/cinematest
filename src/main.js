// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入mint-ui 
import MintUI from 'mint-ui'
Vue.use(MintUI);
//样式需要单独引入
import 'mint-ui/lib/style.css'


Vue.config.productionTip = false

//引入全局样式
import '../src/assets/css/global.less'

//引入图标字体
import './assets/icon/iconfont.css'

//引入axios发送请求
import axios from 'axios'
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
