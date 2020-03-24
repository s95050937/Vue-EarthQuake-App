<template>
  <div id="about">
    <nav-bar id="about-nav">
      <h2 slot="center">關於</h2>
    </nav-bar>
    <about-banner id="about-banner"></about-banner>
    <about-content></about-content>
  </div>
</template>

<script>
/**
 * 公共
 */
import NavBar from '../../components/common/navbar/NavBar'
/**
 * 子組件
 */
import AboutBanner from './childcomps/AboutBanner'
import AboutContent from './childcomps/AboutContent'
export default {
  name: "About",
  components: {
    NavBar,
    AboutBanner,
    AboutContent
  }
}
</script>

<style scoped>
  #about {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  #about-nav {
    background-color: #006266;
    color: #f5f6fa;
  }
  /* #about-banner */
</style>