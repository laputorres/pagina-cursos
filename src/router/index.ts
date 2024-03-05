import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/homeView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProfileDashboard from '../views/profileDashboard.vue'
import LoginView from '../views/loginView.vue'
import RegisterComponent from '@/components/login/RegisterComponent.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent
  },
 
  
  {
    path: '/profile',
    name: 'profileDashboard',
    component: ProfileDashboard,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true, // Agrega esta meta para indicar que la ruta requiere autenticación
    },
    
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
