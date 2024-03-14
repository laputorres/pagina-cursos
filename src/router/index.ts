//router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import HomeView from "../views/homeView.vue";
import DashboardView from "../views/DashboardView.vue";
import ProfileDashboard from "../views/profileDashboard.vue";
import signinComponent from "@/components/login/signinComponent.vue";
import RegisterComponent from "@/components/login/RegisterComponent.vue";
import SettingsProfile from "../components/dashboard/pages/settingsProfile.vue";
import usersComponent from '@/components/dashboard/pages/usersComponent.vue';
import createCursePage from '@/components/dashboard/pages/createCursePage.vue';
import forgotPassword from '@/components/login/forgotPassword.vue'
import categoriesAdmin from '@/components/dashboard/pages/categoriesAdmin.vue'
import store from "@/store/index";

const currentUser = () => store.getters.currentUser;

const isAuthenticated = () => store.getters.isAuthenticated;
const isAdmin = () => {
  const user = currentUser();
  return user && user.userType === 'admin';
};

const requiresAuth = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  await store.dispatch('fetchUserData');
  if (isAuthenticated()) {
    if (to.meta.requiresAdmin && !isAdmin()) {
      next({ name: 'home' }); // Si el usuario no es admin y está intentando acceder a una ruta que requiere ser admin, redirige al dashboard normal
    } else {
      next(); // Permitir acceso
    }
  } else {
    next({ name: 'login' }); // Redirigir al inicio de sesión si el usuario no está autenticado
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: signinComponent,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterComponent,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: forgotPassword,
  },

  {
    path: "/profile",
    name: "profileDashboard",
    component: ProfileDashboard,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardView,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
    children: [
      
      {
        path: "settings-profile",
        component: SettingsProfile,
      },
      {
        path: "users",
        component: usersComponent,
      },
      {
        path: "create-curse",
        component: createCursePage,
      },
      {
        path: "categories",
        component: categoriesAdmin,
      },
    ],
  },

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(requiresAuth);

export default router;
