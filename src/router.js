import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/add-video',
      name: 'add-video',
      component: () => import('./pages/AddVideo.vue')
    }
  ]
})
