import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Login from '../components/Login'
import Why from '../components/Why4'
import How from '../components/How'
import UserAccount from '../components/UserAccount'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: false }
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: Hello,
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/why',
      name: 'why',
      component: Why,
      meta: { requiresAuth: false }
    },
    {
      path: '/how',
      name: 'how',
      component: How,
      meta: { requiresAuth: false }
    },
    {
      path: '/account',
      name: 'account',
      component: UserAccount,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.surevote_user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
