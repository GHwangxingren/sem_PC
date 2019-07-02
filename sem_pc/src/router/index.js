import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import '../styles/app.less'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../components/Index.vue')
    }
  ]
})
