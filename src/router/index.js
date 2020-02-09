import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import ErrorPage403 from '@/components/Error/ErrorPage403.vue'
import ErrorPage404 from '@/components/Error/ErrorPage404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    name: '403',
    path: '/error/403',
    component: ErrorPage403
  },
  {
    name: '404',
    path: '*',
    component: ErrorPage404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
