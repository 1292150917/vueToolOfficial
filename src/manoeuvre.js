// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './manoeuvre.vue'
import router from './router/dome'
import Vuetool from './vue-tool/src/index'
Vue.use(Vuetool)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
