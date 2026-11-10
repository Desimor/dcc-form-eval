import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
// import { useSurveyStore } from '../stores/survey'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
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
      // TODO: re-enable isComplete guard once testing is done
      // beforeEnter: () => {
      //   const store = useSurveyStore()
      //   return store.isComplete ? true : { name: 'survey' }
      // },
    },
  ],
})

export default router
