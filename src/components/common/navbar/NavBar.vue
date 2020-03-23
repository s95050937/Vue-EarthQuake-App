<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    display: flex;

    position: fixed;
    right: 0;
    top: 0;
    left: 0;

    height: 44px;
    line-height: 44px;
    text-align: center;

    z-index: 1000;
    
  }
  .nav-left {
    flex: 1;
    /* line-height: 44px; */
  }
  .nav-center {
    flex: 2;
  }
  .nav-right {
    flex: 1;
  }
</style>