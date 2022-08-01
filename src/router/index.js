import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
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
    path: '/Prettier',
    name: 'Prettier',
    component: () => import('@/pages/Prettier/index.vue') // 配置prettier
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
  {
    path: '/ElementPlusUI',
    name: 'ElementPlusUI',
    alias: ['/elementUI', '/element'], // 设置别名
    component: () => import('@/pages/ElementPlusUI/index.vue') // 引入ElementPlusUI
  },
  {
    path: '/Pinia',
    name: 'Pinia',
    component: () => import('@/pages/Pinia/index.vue') // Pinia
  },
  {
    path: '/VueRouter',
    name: 'VueRouter',
    component: () => import('@/pages/VueRouter/index.vue'), // VueRouter
    children: [
      // { path: '', redirect: 'GetImageUrl' }, // path值为空，会重定向到指定的页面地址，并忽略component的内容
      { path: 'childPage', name: 'childPage', component: () => import('@/pages/Pinia/index.vue') },
    ]
  },
  {
    path: '/ComponentMitt',
    name: 'ComponentMitt',
    component: () => import('@/pages/ComponentMitt/index.vue') // 父子、兄弟组件传值
  },
  {
    path: '/Mixin',
    name: 'Mixin',
    component: () => import('@/pages/Mixin/index.vue') // Mixin
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404/index.vue') // 404
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/pages/404/index.vue'), // 404
  },
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
