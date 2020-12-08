<template>
  <div class="container">
    <h1 align="left">Select pokemon</h1>
    <div></div>
    <div class="menu-choose">
      <div class="header">
        <img
          width="100"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        />
        <h2 align="center">Choose battle pokemon</h2>
        <input name="search" placeholder="Search pokemon" type="search" />
      </div>
      <div class="choose">
        <div
          class="choose-pokemon"
          v-for="(pokemon, index) in datasource"
          :key="index"
        >
          <img width="64" :src="pokemon.image" />
          <small>{{ pokemon.name }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      pokemons: [],
    };
  },
  computed: {
    ...mapState('pokemon', {
      datasource: (state) => state.datasource,
    }),
  },

  methods: {
    ...mapActions('pokemon', {
      all: 'getAll',
    }),
  },
  created() {
    this.all();
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  /* background: url('../assets/images/background.jpg') no-repeat center center
    fixed; */
  /* background-size: cover; */
  height: 100vh;

  h1 {
    border-bottom: 0.2rem solid #333;
  }

  .menu-choose {
    width: 100%;
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      input {
        height: 2.5rem;
        padding: 0 1rem;
        border: 0.15rem solid #333;
        border-radius: 1rem;
      }
    }
    .choose {
      margin-top: 0.5rem;
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10%, 0fr));
      background-color: #2196f3;
      :hover {
        background-color: red;
      }
      .choose-pokemon {
        border: 0.1rem solid #333;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        small {
          width: 100%;
          text-align: center;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
}
</style>
