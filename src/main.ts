// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { firestorePlugin } from 'vuefire';
import store from './store/index';
import './assets/css/app.css';
import { auth } from './FirebaseConfig';


const app = createApp(App);
const myRouter = router;


myRouter.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirige a la página de inicio de sesión solo si no está en la página de inicio de sesión o registro
    if (to.path !== '/login' && to.path !== '/register') {
      next('/login');
    } else {
      next(); // Evita bucle infinito si ya está en la página de inicio de sesión o registro
    }
  } else {
    next();
  }
});

// Usa el plugin firestorePlugin
app.use(firestorePlugin);

// Configura VueFireAuth directamente con el objeto de autenticación de Firebase
// No es necesario importar createVueFire y VueFireAuth de vuefire
app.use({
  install: (app) => {
    app.config.globalProperties.$auth = auth; // Agrega el objeto de autenticación a las propiedades globales
  },
});

app.use(store).use(router);
app.mount('#app');
