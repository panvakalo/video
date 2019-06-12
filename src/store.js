import Vue from 'vue'
import Vuex from 'vuex'
import { videoStore } from './stores/video'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['video']
  })],
  modules: {
    video: videoStore
  }
})
