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
    path: '/GetImageUrl',
    name: 'GetImageUrl',
    component: () => import('@/pages/GetImageUrl/index.vue') // 获取静态图片地址
  },
  {
    path: '/UnpluginAutoImport',
    name: 'UnpluginAutoImport',
    component: () => import('@/pages/UnpluginAutoImport/index.vue') // 自动导入vue api
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
