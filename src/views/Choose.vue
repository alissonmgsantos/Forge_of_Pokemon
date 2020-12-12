<template>
  <div class="container">
    <h1 align="left">Select pokemon</h1>
    <div class="menu-choose">
      <div class="header">
        <!-- <img width="100" :src="selected.image" /> -->
        <div v-if="selected && selected.name">
          <Card
            :name="selected.name"
            :type="selected.type"
            :height="selected.height"
            :weight="selected.weight"
            :image="selected.image"
          />
        </div>
        <h2 align="center">Choose battle pokemon</h2>
        <input
          name="search"
          placeholder="Search pokemon"
          type="search"
          v-model="search"
        />
      </div>
      <div class="choose" v-if="datasource.length > 0">
        <div
          v-for="(pokemon, index) in pokemons.slice(0, limit)"
          :key="index"
          class="choose-pokemon"
          :class="pokemon.id == selected.id ? 'selected' : ''"
          @click="getSelected(pokemon.id)"
        >
          <img width="64" :src="pokemon.image" alt="Image" />
          <small>{{ pokemon.name }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Card from '../components/Card';
export default {
  components: {
    Card,
  },
  data() {
    return {
      search: '',
      pokemons: this.$store.state.pokemon.datasource,
      limit: 60,
    };
  },
  watch: {
    search(value) {
      this.searchPokemon(value);
    },
    '$store.state.pokemon.datasource': {
      handler(value) {
        this.pokemons = value;
      },
    },
    pokemons(value) {
      return (this.limit = value.length > 60 ? 60 : value.length);
    },
  },

  computed: {
    ...mapState('pokemon', {
      datasource: (state) => state.datasource,
      selected: (state) => state.selected,
    }),
  },

  methods: {
    ...mapActions('pokemon', {
      getAll: 'getAll',
      getSelected: 'getSelected',
    }),

    searchPokemon(name) {
      if (name) {
        return (this.pokemons = this.datasource.filter((s) =>
          s.name.includes(name)
        ));
      }
      this.pokemons = this.datasource;
    },
  },
  created() {
    this.getAll();
    this.getSelected(1);
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
    fixed;
   background-size: cover; */
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
      text-transform: capitalize;
      .selected,
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
