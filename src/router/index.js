import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/index.vue';
import About from '@/pages/About.vue';

const routerHistory = createWebHistory();

export default createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});

