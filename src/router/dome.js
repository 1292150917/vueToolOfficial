import Vue from 'vue'
import Router from 'vue-router'
import config from './config'
Vue.use(Router)
var routerList = []
config.forEach(res => {
  routerList.push({
    path: res.path,
    name: res.name,
    component: res.component,
    meta:res.meta
  })
})
var router = new Router({
  routes: [
    ...routerList,
  ]
})

export default router
