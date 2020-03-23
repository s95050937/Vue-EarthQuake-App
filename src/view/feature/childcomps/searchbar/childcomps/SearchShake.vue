<template>
  <div class="search-shake">
    <h2 class="search-shake-item">最大震度</h2>
    <h2 class="search-shake-value">{{itemIsActive.areaIntensity.value + itemIsActive.areaIntensity.unit}}</h2>
  </div>
</template>

<script>
export default {
  name: "SearchShake",
  props: {
    shake: {
      type: String,
      default() {
        return ''
      }
    },
    itemIsActive: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    // shake() {
    //   return this.itemIsActive.areaIntensity.value + this.itemIsActive.areaIntensity.unit
    // }
  },
} 
</script>

<style scoped>
  .search-shake {
    display: flex;
    /* justify-content: center; */
    border: black 2px solid;
    /* padding: 2px 0; */
    border-radius: 5px;
    /* font-size: 15px; */

  }
  .search-shake-item {
    flex: 1;
    border-right: 2px solid black;
  }
  .search-shake-value {
    flex: 1;
    background-color: #f6e58d;
    
  }
</style>