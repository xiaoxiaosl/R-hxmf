import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/contactUs',
    component: () => import('@/views/contactUs.vue')
  },
  {
    path: '/product',
    component: () => import('@/views/product.vue'),
  },
  {
    path: '/technology',
    component: () => import('@/views/technology.vue')
  },
  {
    path: '/brand',
    component: () => import('@/views/brand.vue'),
  },
  {
    path: '/product-detail',
    component: () => import('@/views/product-detail.vue')
  },
  {
    path: '/news',
    component: () => import('@/views/news.vue')
  },
  {
    path: '/news-detail',
    component: () => import('@/views/news-detail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router