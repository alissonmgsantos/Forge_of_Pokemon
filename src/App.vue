<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <Card
      name="Pikachu"
      type="Fire"
      weight="100"
      height="50"
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    />

    <Card
      name="Pikachu"
      type="Fire"
      weight="100"
      height="50"
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    />
  </div>
</template>

<script>
import Card from './components/Card.vue';
import './assets/global.scss';
export default {
  name: 'App',
  components: {
    Card,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
