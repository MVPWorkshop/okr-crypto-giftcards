import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const routerMap = [
  {
    path: '/',
    component: () => import('../views/Home'),
    meta: {
      title: 'Crypto Gift Cards',
      metaTags: [
        {
          name: 'Crypto Gift Cards',
          content: 'Welcome to our Card creator'
        },
      ]
    }
  }
]

const router =  new Router ({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})

const DEFAULT_TITLE = 'Crypto Gift Cards';
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router