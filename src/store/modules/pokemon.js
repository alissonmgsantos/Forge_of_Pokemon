import api from '../../config/api';

const urlImage =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export default {
  namespaced: true,
  state: {
    datasource: [],
    selected: null,
    enemy: null,
  },
  getters: {},
  actions: {
    async getAll({ commit }) {
      try {
        if (
          !localStorage.getItem('vuex') ||
          JSON.parse(localStorage.getItem('vuex')).pokemon.datasource.length < 1
        ) {
          const { data } = await api.get('pokemon', { params: { limit: -1 } });
          commit('SET_DATA', data?.results);
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    async getSelected({ commit }, id) {
      try {
        const { data } = await api.get(`pokemon/${id}`);
        commit('SET_SELECTED', data);
      } catch (error) {
        console.log('error', error);
      }
    },

    async getEnemy({ commit }) {
      try {
        let random = Math.floor(Math.random() * (1118 - 1)) + 1;
        const { data } = await api.get(`pokemon/${random}`);
        commit('SET_ENEMY', data);
      } catch (error) {
        console.log('error', error);
      }
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      payload.map((pokemon) => {
        if (
          !pokemon.name.includes('max') &&
          !pokemon.name.includes('pikachu-')
        ) {
          state.datasource.push({
            id: pokemon.url.split('/')[6],
            name: pokemon.name,
            image: `${urlImage}/${pokemon.url.split('/')[6]}.png`,
          });
        }
      });
    },
    SET_SELECTED(state, payload) {
      const { id, name, height, types, weight } = payload;
      state.selected = {
        id,
        name,
        height,
        type: types[0].type.name,
        weight,
        image: `${urlImage}/${id}.png`,
      };
    },

    SET_ENEMY(state, payload) {
      const { id, name, height, types, weight } = payload;
      state.enemy = {
        id,
        name,
        height,
        type: types[0].type.name,
        weight,
        image: `${urlImage}/${id}.png`,
      };
    },
  },
};
