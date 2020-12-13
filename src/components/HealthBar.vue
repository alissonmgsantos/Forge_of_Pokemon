<template>
  <div class="health-bar" :data-total="HP" :data-value="HP">
    <div
      class="bar"
      :class="{
        bar50: HP <= 50,
        bar10: HP <= 10,
        'animation-blink': HP <= 10,
        bar0: HP <= 0,
      }"
      :style="`width: ${HP}%`"
    />
  </div>
</template>
<script>
export default {
  props: {
    HP: { required: true },
  },
};
</script>

<style lang="scss" scoped>
.health-bar {
  width: 300px;
  height: 20px;
  padding: 5px;
  background: #ddd;
  border-radius: 5px;
  position: relative;

  .bar {
    background: #439640;
    height: 10px;
    position: relative;
    transition: width 0.5s linear;
  }
  .bar50 {
    background: #ee883a !important;
  }
  .bar10 {
    background: #cc5544 !important;
  }
  .bar0 {
    background: transparent !important;
  }
}
</style>
