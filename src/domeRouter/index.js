import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
var router = new Router({
  routes: [{
      path: '/Button',
      name: 'Button',
      component: r => require.ensure([], () => r(require('@/dome/Button')), 'Button')
    },
    {
      path: '/Cell',
      name: 'Cell',
      component: r => require.ensure([], () => r(require('@/dome/Cell')), 'Cell')
    },
    {
      path: '/mlAlert',
      name: 'mlAlert',
      component: r => require.ensure([], () => r(require('@/dome/mlAlert')), 'mlAlert')
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: r => require.ensure([], () => r(require('@/dome/Swipe')), 'Swipe')
    },{
      path: '/Toast',
      name: 'Toast',
      component: r => require.ensure([], () => r(require('@/dome/Toast')), 'Toast')
    },{
      path: '/List',
      name: 'List',
      component: r => require.ensure([], () => r(require('@/dome/List')), 'List')
    },{
      path: '/mlLazy',
      name: 'mlLazy',
      component: r => require.ensure([], () => r(require('@/dome/mlLazy')), 'mlLazy')
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
});
export default router
