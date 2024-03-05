// auth.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
  },
  actions: {
    login({ commit }, user) {
      // Lógica de inicio de sesión (puedes llamar a tu función register aquí también)
      // Después de autenticar al usuario, actualiza el estado usando la mutación
      commit('setUser', user);
    },
    logout({ commit }) {
      // Lógica de cierre de sesión
      // Después de cerrar sesión, actualiza el estado usando la mutación
      commit('setUser', null);
    },
  },
  getters: {
    currentUser: state => state.user,
    isAuthenticated: state => state.isAuthenticated,
  },
});
