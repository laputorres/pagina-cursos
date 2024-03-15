// store/index.ts
import { createStore } from 'vuex';
import { obtenerDatosUsuario } from '@/services/firestoreServices';

const USER_KEY = 'user';

// Función para cargar el usuario desde el almacenamiento local
const loadUserFromLocalStorage = () => {
  const userData = localStorage.getItem(USER_KEY);
  return userData ? JSON.parse(userData) : null;
};

export default createStore({
  state: {
    user: loadUserFromLocalStorage() || {}, // Cargar desde localStorage si está disponible
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, user) {
      console.log('Mutación setUser llamada con:', user);
      state.user = user;
      state.isAuthenticated = !!user;
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    setIsAdmin(state, isAdmin) {
      state.user.isAdmin = isAdmin;
      localStorage.setItem(USER_KEY, JSON.stringify(state.user));
    },
    clearUser(state) {
      state.user = {};
      state.isAuthenticated = false;
      localStorage.removeItem(USER_KEY);
    }
  },
  actions: {
    async login(context, user) {
      // Lógica de inicio de sesión
      context.commit('setUser', user);
      context.commit('setIsAdmin', user.userType === 'admin');
      await context.dispatch('fetchUserData');
    },
    async fetchUserData({ commit, state }) {
      // Lógica para obtener los datos del usuario
      if (state.isAuthenticated) {
        const userData = await obtenerDatosUsuario();
        commit('setUser', userData);
        commit('setIsAdmin', userData.userType === 'admin');
      }
    },
    logout(context) {
      // Lógica de cierre de sesión
      context.commit('clearUser');
    }
  },
  getters: {
    currentUser: state => state.user,
    isAuthenticated: state => state.isAuthenticated,
    isAdmin: state => state.user.isAdmin || false // Asegúrate de devolver false si no se estableció isAdmin
  }
});
