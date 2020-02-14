import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import store from './store/store'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(Vuex)
Vue.use(VueRouter)

const router = createRouter()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
