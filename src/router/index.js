import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home/index.vue')
  },
  {
    path: '/Scss',
    name: 'Scss',
    component: () => import('@/pages/Scss/index.vue') // 引入scss
  },
  {
    path: '/Stylelint',
    name: 'Stylelint',
    component: () => import('@/pages/Stylelint/index.vue') // 配置stylelint
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
