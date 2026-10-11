import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: () => import('../views/CommercialView.vue'),
    },
    {
      path: '/residential',
      name: 'residential',
      component: () => import('../views/ResidentialView.vue'),
    },
    // 신규 추가: 병원/의료시설
    {
      path: '/medical',
      name: 'medical',
      component: () => import('../views/MedicalView.vue'),
    },
    // 신규 추가: 관공사/공공시설
    {
      path: '/public',
      name: 'public',
      component: () => import('../views/PublicView.vue'),
    },
  ],
})

export default router
