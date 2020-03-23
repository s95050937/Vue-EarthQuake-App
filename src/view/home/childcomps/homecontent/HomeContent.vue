<template>
  <div id="home-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>

<style scoped>
  #home-content {
    width: 85%;
    height: 200px;

    margin: 0 auto;

    border: 5px solid black;
    background-color: #7bed9f;

    position: relative;

    margin-bottom: 15px;
  }
</style>