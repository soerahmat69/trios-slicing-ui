import { createRouter, createWebHistory } from 'vue-router'
// import AboutUs from '../pages/About-us.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../pages/About-us.vue'),
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../pages/About-us.vue'),
    },
  ],
})

export default router
