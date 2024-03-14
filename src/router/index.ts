import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
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

const isAuthenticated = () => store.getters.isAuthenticated;

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
    },
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardView,
    meta: {
      requiresAuth: true,
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated()) {
    next({ name: "login" }); // Redirige a la página de inicio de sesión si no está autenticado
  } else if (requiresAuth && isAuthenticated()) {
    // Verifica el tipo de usuario antes de permitir el acceso al dashboard
    const userData = store.getters.currentUser;

    if (userData && userData.userType === 'admin') {
      next(); // El usuario es admin, permite el acceso al dashboard
    } else {
      next({ name: "home" }); // El usuario no es admin, redirige a la página de inicio
    }
  }
  else {
    next(); // Continúa con la navegación normal
  }
});

export default router;
