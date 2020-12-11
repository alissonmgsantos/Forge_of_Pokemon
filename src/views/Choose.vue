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
        <input name="search" placeholder="Search pokemon" type="search" />
      </div>
      <div class="choose" v-if="datasource.length > 0">
        <div
          v-for="index in 60"
          :key="datasource[index].id"
          class="choose-pokemon"
          :class="datasource[index].id == selected.id ? 'selected' : ''"
          @click="getSelected(datasource[index].id)"
        >
          <img width="64" :src="datasource[index].image" alt="Image" />
          <small>{{ datasource[index].name }}</small>
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
      pokemons: [],
    };
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
