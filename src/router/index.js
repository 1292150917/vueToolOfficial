import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
Vue.use(Router)
var router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    redirect:"Button",
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
      },
      {
        path: '/Toast',
        name: 'Toast',
        component: r => require.ensure([], () => r(require('@/components/Toast')), 'Toast')
      },
      {
        path: '/List',
        name: 'List',
        component: r => require.ensure([], () => r(require('@/components/List')), 'List')
      },
      {
        path: '/mlLazy',
        name: 'mlLazy',
        component: r => require.ensure([], () => r(require('@/components/mlLazy')), 'mlLazy')
      },
    ]
  }]
})
router.beforeEach((to, from, next) => {
  next()
});
export default router
