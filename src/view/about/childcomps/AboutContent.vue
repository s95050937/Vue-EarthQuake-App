<template>
  <div class="about-content">
    <!-- <img src="~assets/img/about.svg" alt=""> -->

    <div class="content-item">
      <div class="item-title">
        <h3>作者</h3>
        <img src="../../../assets/img/user.svg" alt="">
      </div>
      <div class="item-content">Wuuu4280</div>
    </div>
    <div class="content-item">
      <div class="item-title">
        <h3>聯絡資訊
        </h3>
        <img src="../../../assets/img/phone-alt.svg" alt="">
      </div>
      <div class="item-content">https://github.com/s95050937</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-content"
}
</script>

<style scoped>
  .about-content {
    width: 85%;
    margin: 10px auto;

    /* border: 2px solid black; */
    border-radius: 5px;

    
  }
  /* .about-content img {
    width: 85%;
    margin: 0 auto;
  } */
  .content-item {
    width: 95%;
    margin: 15px auto;

    border: 2px solid black;
    /* padding: 5px; */
    
  }
  .item-title {
    display: flex;

    border-bottom: 2px solid black;

    padding: 7px;

    background-color: #f6e58d;
  }
  .item-title img {
    width: 15px;
    margin-left: 3px;
  }
  .item-content {
    /* display: flex; */
    padding: 7px;
    font-size: 20px;
    /* word-wrap: ; */
    
    word-wrap: break-word;
  }
</style>