import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

// Simulación de autenticación (reemplaza por tu lógica real)
function isAuthenticated() {
  return !!localStorage.getItem('auth');
}

const publicPages = ['home', 'login', 'about'];
router.beforeEach((to, from, next) => {
  if (!publicPages.includes(String(to.name)) && !isAuthenticated()) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
