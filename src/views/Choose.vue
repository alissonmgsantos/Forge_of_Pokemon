<template>
  <div class="container">
    <h1 align="left">Select pokemon</h1>
    <div></div>
    <div class="menu-choose">
      <div class="header">
        <img
          width="120"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        />
        <h2 align="center">Choose battle pokemon</h2>
        <input name="search" placeholder="Search pokemon" type="search" />
      </div>
      <div class="choose">
        <div
          class="choose-pokemon"
          v-for="(pokemon, index) in this.pokemons"
          :key="index"
        >
          <img width="64" :src="pokemon.image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '../config/api';
export default {
  data() {
    return {
      pokemons: [],
    };
  },
  created() {
    api.get('pokemon', { params: { limit: 140 } }).then((response) => {
      response.data.results.map((pokemon) => {
        this.pokemons.push({
          id: pokemon.url.split('/')[6],
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            pokemon.url.split('/')[6]
          }.png`,
        });
      });
    });

    console.log(this.pokemons);
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
      margin-top: 1rem;
      width: 100%;
      height: auto;
      border: 0.2rem solid #333;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(5%, 0fr));
      background-color: #2196f3;

      .choose-pokemon {
        border: 0.1rem solid #333;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
          /* border: 0.2rem solid #433; */
          background-color: red;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
