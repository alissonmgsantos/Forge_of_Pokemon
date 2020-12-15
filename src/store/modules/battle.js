const randomDanger = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
export default {
  namespaced: true,

  state: {
    playerHealth: 100,
    enemyHealth: 100,
    results: {
      victory: 0,
      lost: 0,
    },
  },

  getters: {},

  actions: {
    attack: ({ commit }) => {
      commit('SET_DANGER_ENEMY', randomDanger(10, 1));
    },
    especial: ({ commit }) => {
      commit('');
    },
    playAgain: ({ commit }) => {
      commit('SET_PLAY_AGAIN');
    },
  },

  mutations: {
    SET_DANGER_PLAYER: (state, payload) => {
      state.playerHealth -= payload;
    },
    SET_DANGER_ENEMY: (state, payload) => {
      state.enemyHealth -= payload;
    },
    SET_RESULT: (state) => {
      state;
    },
    SET_PLAY_AGAIN: (state) => {
      state.playerHealth = 100;
      state.enemyHealth = 100;
    },
  },
};
