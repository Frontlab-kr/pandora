import { createWebHistory, createRouter } from 'vue-router';

import Index from './pages/index.vue';
import Login from './pages/login.vue';
import Dashboard from './pages/dashboard.vue';
import Detail from './pages/detail.vue';

const routes = [
  { path: '/index', component: Index },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/detail', component: Detail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
