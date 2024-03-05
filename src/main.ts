// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { firestorePlugin } from 'vuefire';
import store from './store';
import './assets/css/app.css';
import { auth } from './FirebaseConfig';

const app = createApp(App);

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
