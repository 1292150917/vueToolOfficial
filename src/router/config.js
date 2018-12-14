function compooentUrl(url) {
  return require(`@/vue-tool/packages/${url}/src/index.md`)
}

function domeUrl(url) {
  return require(`@/views/${url}`)
}
var router = [{
    path: '/Button',
    name: 'Button',
    component: r => require.ensure([], () => r(domeUrl('Button')), 'Button'),
    dome: r => require.ensure([], () => r(compooentUrl('Button')), 'Button')
  }, {
    path: '/Cell',
    name: 'Cell',
    component: r => require.ensure([], () => r(domeUrl('Cell')), 'Cell'),
    dome: r => require.ensure([], () => r(compooentUrl('Cell')), 'Cell')
  },
  {
    path: '/mlAlert',
    name: 'mlAlert',
    component: r => require.ensure([], () => r(domeUrl('mlAlert')), 'mlAlert'),
    dome: r => require.ensure([], () => r(compooentUrl('mlAlert')), 'mlAlert')
  },
  {
    path: '/Swipe',
    name: 'Swipe',
    component: r => require.ensure([], () => r(domeUrl('Swipe')), 'Swipe'),
    dome: r => require.ensure([], () => r(compooentUrl('Swipe')), 'Swipe')
  }, {
    path: '/Toast',
    name: 'Toast',
    component: r => require.ensure([], () => r(domeUrl('Toast')), 'Toast'),
    dome: r => require.ensure([], () => r(compooentUrl('Toast')), 'Toast')
  }, {
    path: '/List',
    name: 'List',
    component: r => require.ensure([], () => r(domeUrl('List')), 'List'),
    dome: r => require.ensure([], () => r(compooentUrl('InfiniteScroll')), 'List')
  }, {
    path: '/mlLazy',
    name: 'mlLazy',
    component: r => require.ensure([], () => r(domeUrl('mlLazy')), 'mlLazy'),
    dome: r => require.ensure([], () => r(compooentUrl('mlLazy')), 'mlLazy')
  }, {
    path: '/NavBar',
    name: 'NavBar',
    component: r => require.ensure([], () => r(domeUrl('NavBar')), 'NavBar'),
    dome: r => require.ensure([], () => r(compooentUrl('NavBar')), 'NavBar')
  }, {
    path: '/Icon',
    name: 'Icon',
    component: r => require.ensure([], () => r(domeUrl('Icon')), 'Icon'),
    dome: r => require.ensure([], () => r(compooentUrl('Icon')), 'Icon')
  },
  {
    path: '/Sticky',
    name: 'Sticky',
    component: r => require.ensure([], () => r(domeUrl('Sticky')), 'Sticky'),
    dome: r => require.ensure([], () => r(compooentUrl('Sticky')), 'Sticky')
  },
  {
    path: '/Loadings',
    name: 'Loadings',
    component: r => require.ensure([], () => r(domeUrl('Loadings')), 'Loadings'),
    dome: r => require.ensure([], () => r(compooentUrl('Loadings')), 'Loadings')
  }
]
export default router
