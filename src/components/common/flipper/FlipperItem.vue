<template>
  <div class="flipper">
    <div class="front">
      <div class="line-height"><slot name="front"></slot></div>
    </div>
    <div class="back">
      <div class="line-height"><slot name="back"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipperItem"
  
}
</script>

<style scoped>
  .flipper , .front , .back {
    width: 130px;
    height: 130px;
  }
  /* .flipper {
    width: 48%;
    height: 48%;
  }
  .front , .back {
    width: 100%;
    height: 100%;
  } */
  .flipper {
    position: relative;

    transition: 0.6s;
    transform-style: preserve-3d;

    margin-bottom: 5px;
    margin-right: 5px;
  }
  .flipper-container:hover .flipper {
    transform: rotateY(180deg);
  }

  .front , .back{
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;

    text-align: center;
    line-height: inherit;
  }

  .front {
    z-index: 2;
    background-color: #fdcb6e;
    
    
    background-color: #48dbfb;
    background-color: #f0932b;
    background-color: #38ada9;
    background-color: #82ccdd;
    background-color: #7bed9f;
    margin-bottom: -5px;
  }
  .back {
    /* background-color: #fdcb6e; */
    background-color: #ffeaa7;
    background-color: #54a0ff;
    background-color: #eb4d4b;
    background-color: #f0932b;
    background-color: #eccc68;
    background-color: #fad390;
    margin-bottom: -5px;

    transform:rotateY(180deg)
  }
  .line-height {
    line-height: 150px;
  }
</style>