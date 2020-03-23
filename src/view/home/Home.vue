<template>
  <div id="home">
    <nav-bar id="home-nav">
      <img src="~assets/img/homeUser.svg" alt="" class="nav-left" slot="left" @click="userClick">
      <h2 slot="center" class="center">全台地震通</h2>
    </nav-bar>
    <banner></banner>
    <home-content>
      <home-content-item v-for="(item, index) in homeContent" :key="index">
        <div slot="left">{{item.title}}</div>
        <div slot="right">{{item.content}}</div>
      </home-content-item>
      <home-copy-right></home-copy-right>
    </home-content>
    
    
  </div>
</template>

<script>
/**
 * 公共區
 */
import NavBar from 'components/common/navbar/NavBar'

/**
 * 小組件區
 */
import Banner from './childcomps/Banner'
import HomeContent from './childcomps/homecontent/HomeContent'
import HomeContentItem from './childcomps/homecontent/HomeContentItem'
import HomeCopyRight from './childcomps/HomeCopyRight'

export default {
  name: "Home",
  components: {
    NavBar,
    Banner,
    HomeContent,
    HomeContentItem,
    HomeCopyRight
  },
  methods: {
    userClick() {
      this.$router.replace('/about')
    }
  },
  data() {
    return {
      homeContent: [
        {
          title: "資料來源",
          content: "政府資料開放平台"
        },
        {
          title: "Author",
          content: "Wuuu4280"
        }
      ]
    }
  },
}
</script>

<style scoped>
  #home {
    /* height: 100vh; */
    position: relative;

    padding-bottom: 49px;
    padding-top: 44px;
  }
  #home-nav {
    background-color: #006266;
    color: #f5f6fa;
  }
  .nav-left {
    width: 30px;
    height: 30px;

    vertical-align: middle;
    
    margin-right:30%;

    background-color: rgba(0, 98, 102,0.1);
    border: 1px solid rgba(0, 98, 102,0.8);
    border-radius: 5%;
    /* line-height: ; */
    /* padding: ; */
  }
 
</style>