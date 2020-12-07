import api from '../../config/api';

export default {
  namespaced: true,
  state: {
    loading: false,
    datasource: [],
    selected: null,
  },
  getters: {
    allPokemons(state) {
      return state.datasource;
    },
  },
  actions: {
    async getAll({ commit }) {
      try {
        const { data } = await api.get('pokemon', { params: { limit: 140 } });
        commit('SET_DATA', data?.results);
      } catch (error) {
        console.log('error', error);
      }
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      payload.map((pokemon) => {
        state.datasource.push({
          id: pokemon.url.split('/')[6],
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            pokemon.url.split('/')[6]
          }.png`,
        });
      });
    },
  },
};
