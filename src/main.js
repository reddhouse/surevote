// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import App from './App'
import VueFire from 'vuefire'
// import vueScrollTo from 'vue-scrollTo'

Vue.use(Vuex)
Vue.use(VueFire)
// Vue.use(vueScrollTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
