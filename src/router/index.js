import Vue from 'vue'
import VueRouter from 'vue-router'

import Clinic from '../pages/Clinic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/clinic',
    name: 'clinic',
    component: Clinic
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
