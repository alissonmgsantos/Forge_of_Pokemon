let state = {
  count: 0,
};

let actions = {
  incrementCount({ commit }) {
    commit('incrementCount');
  },
};

let mutations = {};

export default {
  namespaced: true,
  state,
  mutations: {
    incrementCount(state) {
      state.count++;
    },
  },
};
