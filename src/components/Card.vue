<template>
  <div class="container">
    <span>Card</span>
  </div>
</template>
<script>
export default {
  name: 'Card',
};
</script>
<style lang="scss">
.container {
  margin-left: 500px;
  display: flex;
  width: 150px;
  height: 150px;
  background: #fff;
  border: 1rem solid #ccc;
  border-radius: 10%;
  transform: rotate(-45deg);
}
</style>
