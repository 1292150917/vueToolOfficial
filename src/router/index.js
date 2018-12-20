import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import config from './config'
Vue.use(Router)
var routerList = []
config.forEach(res => {
  routerList.push({
    path: res.path,
    name: res.name,
    component: res.dome,
  })
})
var router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index,
    redirect: "brief",
    children: routerList
  }]
})
export default router
