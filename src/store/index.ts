// auth.js
import { createStore } from 'vuex';
import { obtenerDatosUsuario } from '@/services/firestoreServices'


export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, user) {
      console.log('Mutación setUser llamada con:', user);
      state.user = user;
      state.isAuthenticated = !!user;
      
    },
  },
  actions: {
    async login(context, user) {
      // Lógica de inicio de sesión (puedes llamar a tu función register aquí también)
      // Después de autenticar al usuario, obtén los datos y actualiza el estado usando la mutación
      context.commit('setUser', user);
      await context.dispatch('fetchUserData'); // Llamamos a la nueva acción para obtener y guardar los datos del usuario
      
    },
    async fetchUserData({ commit }) {
      // Llama a tu función para obtener los datos del usuario desde Firebase
      const userData = await obtenerDatosUsuario();
      commit('setUser', userData);
    },
    logout(context) {
      // Lógica de cierre de sesión
      // Después de cerrar sesión, actualiza el estado usando la mutación
      context.commit('setUser', null);
    },
  },
  getters: {
    currentUser: state => state.user,
    isAuthenticated: state => {
      console.log('Getter isAuthenticated se está llamando con el estado:', state);
      return state.isAuthenticated;
    },
  },

});
