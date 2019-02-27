import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const routerMap = [
  {
    path: '/',
    component: () => import('../views/Home')
  }
]

export default new Router ({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})