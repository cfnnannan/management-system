import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login'],resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/home'],resolve),
      children: [
        {
          path: 'day',
          name: 'day',
          component: resolve => require(['@/views/home/day'],resolve),
        },
        {
          path: 'month',
          name: 'month',
          component: resolve => require(['@/views/home/month'],resolve),
        },
        {
          path: 'personnel',
          name: 'personnel',
          component: resolve => require(['@/views/home/personnel'],resolve),
        },
        {
          path: 'company',
          name: 'company',
          component: resolve => require(['@/views/home/company'],resolve),
        },
        {
          path: 'department',
          name: 'department',
          component: resolve => require(['@/views/home/department'],resolve),
        },
      ]
    }
  ]
})
