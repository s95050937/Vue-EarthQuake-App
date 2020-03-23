<template>
  <div>
    <tab-bar>
      <tab-item path='/home'>
        <img src="~assets/img/home.svg" alt="" slot="icon" >
        <div slot="text">首頁</div>
      </tab-item>
      <tab-item path='/news'>
        <img src="~assets/img/newspaper.svg" alt="" slot="icon">
        <div slot="text">最新消息</div>
      </tab-item>
      <tab-item path='/feature'>
        <img src="~assets/img/search.svg" alt="" slot="icon">
        <div slot="text">搜尋</div>
      </tab-item>
      <tab-item path='/about'>
        <img src="~assets/img/address-card.svg" alt="" slot="icon">
        <div slot="text">關於</div>
      </tab-item>
     
    </tab-bar>
  </div>
</template>


<script>

import TabBar from 'components/common/tabbar/TabBar'
import TabItem from 'components/common/tabbar/TabBarItem'
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabItem,
  }
}
</script>

<style>

</style>