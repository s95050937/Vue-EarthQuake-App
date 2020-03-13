<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {
    
  }
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;

    /* width: 100%; */
    /* height: 49px; */
    /* background-color: rgba(0, 184, 148,0.5); */

    text-align: center;
    /* justify-content: center; */
    /* align-items: center; */
    
    /* border: 0 -1px 1px solid black; */
    box-shadow:0 -1px  1px #DADADA ;
  }
</style>