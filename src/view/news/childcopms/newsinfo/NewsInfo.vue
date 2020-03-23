<template>
<!-- :class="{transY: isTrans(index)}" @click="itemClick(index)" -->
    <div class="flex">
      <flipper class="flipper-container" v-for="(item, index) in infoObj" :key="index">
        <flipper-item  class="flipper-item">
          <div slot="front">{{item.front}}</div>
          <div slot="back">{{item.back}}</div>
        </flipper-item>
      </flipper>

    <!-- <div v-for="(item, index) in infoObj" :key="index">
      <div>{{item.front}}</div>
      <div>{{item.back}}</div>
    </div> -->
    </div>
</template>

<script>
import Flipper from 'components/common/flipper/Flipper'
import FlipperItem from 'components/common/flipper/FlipperItem'
export default {
  name: "NewsInfo",
  data() {
    return {
      isTrans: false,
      currentIndex: -1,
    }
  },
  components: {
    Flipper,
    FlipperItem
  },
  props: {
    infoObj: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    // itemClick(index) {
    //   this.currentClick = index
    // },
    // isTrans(index) {
    //   if (index == this.currentClick ) {
    //     return true
    //   } else {
    //     return flase
    //   }
    // }
  },
}
</script>

<style scoped>
  .flipper-container {
    /* transform: rotateY(180deg);
    transform-style: preserve-3d; */
  }
  .flex {
    display: flex;
    width: 90%;
    flex-wrap: wrap; 
    margin: 0 auto;

    position: relative;
    align-content: center;
    justify-content: center;
    /* justify-content: baseline; */
    /* justify-content:space-between; */
    /* justify-content:space-around; */
  }
  .flipper-item {
    /* width: 100px; */
    /* width: 49%; */
    line-height: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    
    /* display: inline-block; */
    /* border: 5px solid black; */

    /* border: 5px solid black; */
  }
  /* .transY  */
</style>