import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/homeView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProfileDashboard from '../views/profileDashboard.vue'
import signinComponent from '@/components/login/signinComponent.vue'
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
    component: signinComponent
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
    meta: {
      requiresAuth: true, 
    },
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true, 
    },
    
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
