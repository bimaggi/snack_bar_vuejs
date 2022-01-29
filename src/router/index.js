import { createRouter, createWebHistory } from 'vue-router'
import SnackBar from '../views/SnackBar'

const routes = [
  {
    path: '/',
    name: 'SnackBar',
    component: SnackBar,
  },
  {
    path: '/request',
    name: 'Request',
    component: () => import(/* webpackChunkName: "Request" */ '../views/Request'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
