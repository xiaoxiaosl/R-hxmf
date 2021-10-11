import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    redirect: {
      name: 'home'
    }
  }, {
    name: 'home',
    path: '/home',
    component: () => import('@/views/index.vue'),
  },
  {
    name: 'contactUs',
    path: '/contactUs',
    component: () => import('@/views/contactUs.vue')
  },
  {
    name: 'product',
    path: '/product',
    component: () => import('@/views/product.vue')
  },
  {
    name: 'technology',
    path: '/technology',
    component: () => import('@/views/technology.vue')
  },
  {
    name: 'brand',
    path: '/brand/:id',
    component: () => import('@/views/brand.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router