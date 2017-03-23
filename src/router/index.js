import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import Sandbox from '../components/misc/Sandbox'
import Login from '../components/Login'
import Why from '../components/questions/Why'
import How from '../components/questions/How'
import ImpRoot from '../components/improvements/ImpRoot'
import ImpList from '../components/improvements/ImpList'
import ImpDetails from '../components/improvements/ImpDetails'
import ImpNew from '../components/improvements/ImpNew'
import Lawmakers from '../components/lawmakers/Lawmakers'
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
      component: Sandbox,
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
      path: '/improvements',
      name: 'improvements',
      component: ImpRoot,
      children: [
        {
          path: 'all',
          name: 'improvements-list',
          component: ImpList,
          meta: { requiresAuth: false }
        },
        {
          path: 'new',
          name: 'newimprovement',
          component: ImpNew,
          meta: { requiresAuth: true }
        },
        {
          path: ':iid',
          name: 'improvement-details',
          component: ImpDetails,
          meta: { requiresAuth: false }
        }
      ],
      meta: { requiresAuth: false }
    },
    {
      path: '/lawmakers',
      name: 'lawmakers',
      component: Lawmakers,
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
