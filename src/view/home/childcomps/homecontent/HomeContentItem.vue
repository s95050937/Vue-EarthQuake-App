<template>
  <div class="home-content-item">
    <div class="left"><slot name="left"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'HomeContentItem'
}
</script>

<style scoped>
  .home-content-item {
    display: flex;

    text-align: center;

    font-size: 1.0em;
    font-weight: normal;
  }
  .left {
    flex: 1;

    height: 60px;
    line-height: 60px;

    font-weight: 500;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
  }
  .right {
    flex: 1;

    height: 60px;
    line-height: 60px;

    border-bottom: 2px solid black;
  }
</style>