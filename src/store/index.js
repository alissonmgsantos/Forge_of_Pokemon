import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import pokemon from './modules/pokemon';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    pokemon,
  },
  plugins: [
    createPersistedState({
      paths: ['pokemon'],
    }),
  ],
});
