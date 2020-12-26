import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'IndexLayout',
    component: () => import('@/components/IndexLayout'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/Index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
