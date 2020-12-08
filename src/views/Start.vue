<template>
  <div class="container">
    <h1>
      Battle
      <br />
      POKEMON'S
    </h1>
    <!-- <div class="poke-ball" /> -->
    <!-- <img src="../assets/images/brush.png" /> -->
    <router-link to="/choose">PRESS START</router-link>
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

  h1 {
    text-align: center;
    color: #fff;
    font-size: 5rem;
    -webkit-text-stroke-width: 0.2rem;
    -webkit-text-stroke-color: #333;
    small {
      font-size: 2.5rem;
      color: #ff1900;
      -webkit-text-stroke-width: 0.1rem;
    }
  }

  img {
    padding-top: 10;
    &::after {
      position: absolute;
      top: 145px;
      right: 20px;
      font-size: 40px;
      color: black;
      text-shadow: 0px 0px 5px black;
      content: 'a';
      z-index: 100;
    }
  }
  a {
    padding: 1rem 5rem;
    border-radius: 0.8rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    -webkit-animation: blink 0.75s linear infinite;
    -moz-animation: blink 0.75s linear infinite;
    -ms-animation: blink 0.75s linear infinite;
    -o-animation: blink 0.75s linear infinite;
    animation: blink 0.75s linear infinite;
    &:hover {
      font-size: 2.5rem;
      color: #f34530;
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
