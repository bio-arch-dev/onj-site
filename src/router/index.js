import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 페이지 이동 시 항상 상단(top: 0)으로 이동
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/commercial',
      name: 'commercial',
      // 필요할 때 불러오는 Lazy Loading 방식 적용
      component: () => import('../views/CommercialView.vue'),
    },
    {
      path: '/residential',
      name: 'residential',
      component: () => import('../views/ResidentialView.vue'),
    },
  ],
})

export default router
