import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import { useSurveyStore } from '../stores/survey'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'survey',
      component: HomeView,
    },
    {
      path: '/results',
      name: 'results',
      // route level code-splitting: lazy-loaded when the route is visited
      component: () => import('../pages/ResultsView.vue'),
      beforeEnter: () => {
        const store = useSurveyStore()
        return store.isComplete ? true : { name: 'survey' }
      },
    },
  ],
})

export default router
