<template>
  <div class="container">
    <div class="content">
      <div v-if="selected && selected.name">
        <Card
          :name="selected.name"
          :type="selected.type"
          :height="selected.height"
          :weight="selected.weight"
          :image="selected.image"
          :card_width="300"
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
          :card_width="300"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Card from '../components/Card';
export default {
  components: {
    Card,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState('pokemon', {
      selected: (state) => state.selected,
      enemy: (state) => state.enemy,
    }),
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  h1 {
    color: #fff;
    font-size: 2rem;
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
}
</style>
