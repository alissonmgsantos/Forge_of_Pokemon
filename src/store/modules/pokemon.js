import api from '../../config/api';

const urlImage =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export default {
  namespaced: true,
  state: {
    loading: false,
    datasource: [],
    selected: null,
  },
  getters: {},
  actions: {
    async getAll({ commit }) {
      try {
        const { data } = await api.get('pokemon', { params: { limit: 1118 } });
        commit('SET_DATA', data?.results);
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
  },
  mutations: {
    SET_DATA(state, payload) {
      payload.map((pokemon) => {
        if (pokemon.url.split('/')[6] % 3 == 1) {
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
  },
};
