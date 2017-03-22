import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Login from '../components/Login'
import Why from '../components/questions/Why'
import How from '../components/questions/How'
import ImpRoot from '../components/improvements/ImpRoot'
import ImpList from '../components/improvements/ImpList'
import ImpDetails from '../components/improvements/ImpDetails'
import ImpNew from '../components/improvements/ImpNew'
import ProblemsList from '../components/problems/ProblemsList'
import ProblemDetails from '../components/problems/ProblemDetails'
import SolutionDetails from '../components/problems/SolutionDetails'
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
      path: '/problems',
      name: 'problems',
      component: ProblemsList,
      meta: { requiresAuth: false }
    },
    {
      path: '/problem-details',
      name: 'problem-details',
      component: ProblemDetails,
      meta: { requiresAuth: false }
    },
    {
      path: '/solution-details',
      name: 'solution-details',
      component: SolutionDetails,
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
