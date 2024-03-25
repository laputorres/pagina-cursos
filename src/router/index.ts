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
import checkoutView from '@/views/checkoutView.vue'
import store from "@/store/index";
import CategoriesView from "@/views/categoriesView.vue";
import courseView from '@/views/courseView.vue'

const currentUser = () => store.getters.currentUser;

const isAuthenticated = () => store.getters.isAuthenticated;
const isAdmin = () => store.getters.isAdmin;

const requireAuth = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log("Guard requireAuth activated");
  if (!isAuthenticated()) {
    console.log("User not authenticated. Redirecting to login.");
    next({ name: "login" });
  } else {
    console.log("User authenticated. Proceeding to next route.");
    next();
  }
};

const requireAdmin = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log("Guard requireAdmin activated");
  await store.dispatch('fetchUserData'); // Esperar a que se cargue la información del usuario
  const user = currentUser();
  if (user && user.isAdmin) {
    console.log("User is admin. Proceeding to next route.");
    next();
  } else {
    console.log("User is not admin. Redirecting to home.");
    next({ name: "profileDashboard" });
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
    path: "/checkout",
    name: "checkout",
    component: checkoutView,
  },
  {
    path: "/all-categories",
    name: "allCategories",
    component: CategoriesView

  },

  {
    path: '/courses/:productName', // La parte `:productId` indica que es una parte variable de la URL
    name: 'ProductView',
    component: courseView,
    props: true,
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
      isAdmin: true,
    },
    beforeEnter: [requireAuth, requireAdmin],
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

export default router;
