import Router from 'vue-router'
import Vue from 'vue'
import routes from './routes'

Vue.use(Router)

export default () => {
  return new Router({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true
  })
}
