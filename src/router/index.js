import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/about',
    name: 'ABOUT',
    component: () => import('@/pages/about/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
