import { createStore } from 'vuex';
import { auth } from '@/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default createStore({
  state: {
    user: null,
    error: null, // Agregar un estado para manejar errores de autenticación
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    signInWithEmail({ commit }, { email, password }) {
      // Llama a la función signInWithEmailAndPassword de auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Haz algo con userCredential si es necesario
          const user = userCredential.user;
          commit('setUser', user);
        })
        .catch((error) => {
          // Maneja errores aquí
          console.error('Error al iniciar sesión:', error.message);
        });
    },
    // Otras acciones si es necesario
  },
  
  getters: {
    isAuthenticated: (state) => !!state.user,
    // Otros getters si es necesario
  },
});
