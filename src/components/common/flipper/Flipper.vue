<template>
  <div class="flipper-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Flipper"
}
</script>
  
<style scoped>
  .flipper-container {
    perspective: 10000;

    /* width: 150px;
    height: 150px; */
  }
  
</style>