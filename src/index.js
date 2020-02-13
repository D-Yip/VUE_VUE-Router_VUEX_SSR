import Vue from 'vue'
import App from './App.vue'

import './assets/styles/global.styl'
import router from './config/router'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
