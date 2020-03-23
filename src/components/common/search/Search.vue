<template>
  <div>
    <select class="search" v-model="selected" @change="selectChange">
      <slot></slot>
    </select>
  </div>
</template>

<script>
import SearchItem from './SearchItem'
export default {
  name: "Search",
  data() {
    return {
      selected: "haha"
    }
  },
  methods: {
    selectChange() {
      this.$emit("selectChange",this.selected)
    }
  }
}
</script>

<style scoped>
  .search {
    /* height: 100%; */
    width: 70%;
    border: 2px solid black;

    /* padding-left: 10px; */
    padding: 3px 3px 5px 5px ;
    font-size: 20px;
    border-radius: 5px;
    /* appearance:none; */
  }
  .search:focus {
    outline: none;
  }
</style>