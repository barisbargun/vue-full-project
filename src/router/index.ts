import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@main/layout.vue";
import mainRouter from './main';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-layout',
      component: MainLayout,
      children: mainRouter
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: '/home'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
