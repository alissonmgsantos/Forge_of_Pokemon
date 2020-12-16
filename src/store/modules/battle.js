const randomDanger = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
export default {
  namespaced: true,

  state: {
    playerHealth: 100,
    enemyHealth: 100,
  },

  getters: {},

  actions: {
    attack: ({ commit }) => {
      commit('SET_DANGER_ENEMY', randomDanger(10, 1));
      commit('SET_DANGER_PLAYER', randomDanger(10, 1));
    },
    especial: ({ commit }) => {
      commit('SET_DANGER_ENEMY', randomDanger(10, 5));
      commit('SET_DANGER_PLAYER', randomDanger(10, 5));
    },
    playAgain: ({ commit }) => {
      commit('SET_PLAY_AGAIN');
    },
    heal: ({ commit }) => {
      commit('SET_HEAL', randomDanger(10, 5));
      commit('SET_HEAL', randomDanger(10, 5));
    },
  },

  mutations: {
    SET_DANGER_PLAYER: (state, payload) => {
      state.playerHealth -= payload;
    },
    SET_DANGER_ENEMY: (state, payload) => {
      state.enemyHealth -= payload;
    },
    SET_HEAL: (state, payload) => {
      state.playerHealth =
        state.playerHealth + payload > 100 ? 100 : state.playerHealth + payload;
      state.enemyHealth =
        state.enemyHealth + payload > 100 ? 100 : state.enemyHealth + payload;
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
