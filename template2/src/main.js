import Vue from 'vue'
import App from './App'
import HelloView from './views/helloView'
import WorldView from './views/worldView'
import UserView from './views/userView'
import VueResource from 'vue-resource'
import Router from 'vue-router'

require('./less/style.less')

Vue.use(Router)
Vue.use(VueResource)

var router = new Router()
router.map({
  '/hello': {
    component: HelloView
  },
  '/world': {
    component: WorldView
  },
  '/user': {
    component: UserView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(App, '#app')

