// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { firestorePlugin } from 'vuefire';
import store from './store';
import './assets/css/app.css';
import { auth } from './FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import PrimeVue from 'primevue/config'
import MegaMenu from 'primevue/megamenu';

const app = createApp(App);
const myRouter = router;

const waitForAuth = new Promise<void>((resolve) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Estás logeado');
      store.dispatch('login', user);
    }
    resolve();  // Pasa void como argumento
  });
});

// Esperar a que la autenticación se complete antes de montar la aplicación
waitForAuth.then(() => {
  // Imprimir el estado actual del store antes de montar la aplicación
  console.log('Estado actual del store:', store.state);

  // Montar la aplicación con el store y el router
  app.use(store).use(router).mount('#app');
  console.log('Estado inicial del store:', store.state);
});

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

app.use(PrimeVue, {
  unstyled: true,
  
});

app.component('MegaMenu', MegaMenu)
