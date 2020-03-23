<template>
  <div>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
export default {
  name: "NewsChart",
  props: {
    imgSrc: {
      type: String,
      default() {
        return ""
      }
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>