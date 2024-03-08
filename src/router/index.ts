import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/homeView.vue";
import DashboardView from "../views/DashboardView.vue";
import ProfileDashboard from "../views/profileDashboard.vue";
import signinComponent from "@/components/login/signinComponent.vue";
import RegisterComponent from "@/components/login/RegisterComponent.vue";
import SettingsProfile from "../components/dashboard/pages/settingsProfile.vue";
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
  } else {
    next(); // Continúa con la navegación normal
  }
});

export default router;
