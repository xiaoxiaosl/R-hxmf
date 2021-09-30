import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/contactUs',
    component: () => import('@/views/contactUs.vue')
  },
  {
    path: '/product',
    component: () => import('@/views/product.vue')
  },
  {
    path: '/technology',
    component: () => import('@/views/technology.vue')
  },
  {
    path: '/brand',
    component: () => import('@/views/brand.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
