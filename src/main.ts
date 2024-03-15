// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { firestorePlugin } from 'vuefire';
import store from './store';
import './assets/css/app.css';
import { auth } from './FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import '../node_modules/flowbite-vue/dist/index.css'

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

