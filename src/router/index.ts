import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../layouts/baseLayout.vue'),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/WelcomeView.vue'),
        meta: { level: 1 }
      },
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: { level: 2 }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
