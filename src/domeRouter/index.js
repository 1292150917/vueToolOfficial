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
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
});
export default router
