<template>
  <div>
    <div class="news-title">
      <h2 class="title-name">發生區域</h2>
      <h2 class="title-content">{{title}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsTitle",
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    
  }
}
</script>

<style scoped>
/*  */
  .news-title {
    width: 80%;

    border: 2px solid black;
  }
  .title-name {
    border-bottom: 2px solid black;
    padding: 8px;

    background-color: #f6e58d;
  }
  .title-content {
    padding: 10px;

    letter-spacing: 1px;
    line-height: 22px;
    font-size: 18px;
  }
</style>