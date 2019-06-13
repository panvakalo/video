
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueVideoPlayer from 'vue-video-player'

import './assets/styles/config.scss'
import 'video.js/dist/video-js.css'

require('videojs-youtube')

Vue.config.productionTip = false

Vue.use(VueVideoPlayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
