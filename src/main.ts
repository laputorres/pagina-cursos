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
import { createI18n} from 'vue-i18n'



const app = createApp(App);
const myRouter = router;

const i18n = createI18n({
  locale: store.state.isRTL ? 'he' : 'en',
  fallbackLocale: 'en',
  messages: {
    en: require('./assets/languajes/en.json'), // importa las traducciones en inglés
    he: require('./assets/languajes/he.json')
  }
});

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
  app.use(store).use(router).use(i18n).mount('#app');
  console.log('Estado inicial del store:', store.state);
});

