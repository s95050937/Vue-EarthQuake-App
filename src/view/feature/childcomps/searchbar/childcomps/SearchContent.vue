<template>
  <div class="search-content">
    <!-- <div>{{itemIsActive}}</div> -->
      <div v-for="(item, index) in itemIsActive.eqStation" :key="index" class="search-content-item">
        <h3 class="search-content-title">{{item.stationName}}</h3>
        <h3 class="search-content-value">{{item.stationIntensity.value + "級"}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: "SearchContent",
  props: {
    itemIsActive: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      // eqStation: this.itemIsActive.eqStation
    }
  },
}
</script>

<style scoped>
  .search-content {
    display: flex;
    flex-wrap: wrap;

  }
  .search-content-item {
    width: 48%;
    display: flex;
    flex-direction: column;

    border: 2px solid black;
    margin: 5px auto;
    text-align: center;
    /* borderr */
    /* box-sizing: border-box; */
  }
  .search-content-title {
    flex:1;
    border-bottom: 2px solid black;
    /* margin: 5px 0; */
    padding: 3px 0;
    background-color: #ffaf6a;

  }
  .search-content-value {
    flex: 1;
    padding: 5px 0;
    /* background-color: #ffaf6a; */
  }
</style>