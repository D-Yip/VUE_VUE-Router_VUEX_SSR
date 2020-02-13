import Router from 'vue-router'
import Vue from 'vue'
import routes from './routes'

Vue.use(Router)

export default () => {
  return new Router({
    routes
  })
}
