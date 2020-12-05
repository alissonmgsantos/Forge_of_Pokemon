<template>
  <div class="container">
    <div class="poke-ball" />
    <img src="../assets/images/brush.png" />
    <router-link to="/">Start</router-link>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background: url('../assets/images/background.jpg') no-repeat center center
    fixed;
  background-size: cover;
  height: 100vh;
  align-items: center;
  justify-content: center;

  a {
    padding: 1rem 5rem;
    background: #fff;
    border: 3px solid red;
    border-radius: 0.8rem;
    font-size: 1.5rem;
    text-transform: uppercase;

    &:hover {
      background: #ccc;
    }
  }
}

.poke-ball {
  position: absolute;
  height: 10rem;
  width: 10rem;
  background-color: #f34530;
  border: solid 0.3rem #333;
  border-radius: 50%;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  /* Ball center */
  &::before {
    z-index: 2;
    top: 50%;
    left: 50%;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: solid 0.3rem #333;
    background-color: #fff;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  /* Ball final */
  &::after {
    top: 50%;
    height: 50%;
    width: 100%;
    border-top: solid 0.5rem #333;
    background-color: #fff;
  }
}
</style>
