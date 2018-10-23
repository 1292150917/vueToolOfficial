import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    children: [{
        path: '/Button',
        name: 'Button',
        component: r => require.ensure([], () => r(require('@/components/Button')), 'Button')
      },
      {
        path: '/Cell',
        name: 'Cell',
        component: r => require.ensure([], () => r(require('@/components/Cell')), 'Cell')
      },
      {
        path: '/mlAlert',
        name: 'mlAlert',
        component: r => require.ensure([], () => r(require('@/components/mlAlert')), 'mlAlert')
      },
      {
        path: '/Swipe',
        name: 'Swipe',
        component: r => require.ensure([], () => r(require('@/components/Swipe')), 'Swipe')
      }
    ]
  }]
})
