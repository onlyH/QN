import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'customCSS/border.css'
import 'customCSS/reset.css'
import FastClick from 'fastclick'
import 'customCSS/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
