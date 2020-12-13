<template>
  <div class="container">
    <div class="menu-choose">
      <div class="header">
        <h1>Choose your pokemon</h1>
        <h1 class="counter effect-stroke animation-blink">{{ counter }}</h1>
      </div>
      <div class="content">
        <div v-if="selected && selected.name">
          <Card
            :name="selected.name"
            :type="selected.type"
            :height="selected.height"
            :weight="selected.weight"
            :image="selected.image"
            :card_width="150"
          />
        </div>
        <h1 class="versus effect-stroke">VS</h1>
        <div v-if="enemy && enemy.name">
          <Card
            :name="enemy.name"
            :type="enemy.type"
            :height="enemy.height"
            :weight="enemy.weight"
            :image="enemy.image"
            :card_width="150"
          />
        </div>
      </div>
      <div class="search">
        <input
          name="search"
          placeholder="SEARCH"
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
          <img width="60" :src="pokemon.image" alt="Image" />
          <small>{{ pokemon.name }}</small>
        </div>
      </div>
      <template v-if="datasource.length === 0">
        <div>aqui</div>
      </template>
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
      limit: 52,
      counter: 30,
    };
  },
  watch: {
    counter(value) {
      if (value === 0) {
        this.$router.push('battle');
      }
    },
    search(value) {
      this.searchPokemon(value);
    },
    '$store.state.pokemon.datasource': {
      handler(value) {
        this.pokemons = value;
      },
    },
    pokemons(value) {
      return (this.limit = value.length > 52 ? 52 : value.length);
    },
  },

  computed: {
    ...mapState('pokemon', {
      datasource: (state) => state.datasource,
      selected: (state) => state.selected,
      enemy: (state) => state.enemy,
    }),
  },

  methods: {
    ...mapActions('pokemon', {
      getAll: 'getAll',
      getSelected: 'getSelected',
      getEnemy: 'getEnemy',
    }),

    searchPokemon(name) {
      if (name) {
        return (this.pokemons = this.datasource.filter((s) =>
          s.name.includes(`${name}`.toLowerCase())
        ));
      }
      this.pokemons = this.datasource;
    },
  },
  created() {
    this.getAll();
    this.getSelected(1);
    this.getEnemy();
  },
  mounted() {
    setInterval(() => {
      this.counter -= 1;
    }, 1000);
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex: 1;

  h1 {
    color: #fff;
    font-size: 2rem;
  }
  .menu-choose {
    width: 100%;
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .counter {
        font-size: 3.5rem;
        text-align: center;
        padding: 0.5rem;
      }
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      .versus {
        font-size: 6rem;
        text-align: center;
      }
    }
    .search {
      input {
        color: #fff;
        height: 2.5rem;
        width: 100%;
        padding: 0 1rem;
        border: 0.1rem solid #333;
        text-align: center;
        font-size: 28px;
        background: transparent;
        border-radius: 2rem;
        margin-bottom: 1rem;
      }
    }
    .choose {
      margin-top: 0.5rem;
      margin: 0 auto;
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      text-transform: capitalize;
      .selected,
      :hover {
        background-color: #4fa17c;
      }
      .choose-pokemon {
        width: 100px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        small {
          text-align: center;
        }
      }
    }
  }
}
</style>
