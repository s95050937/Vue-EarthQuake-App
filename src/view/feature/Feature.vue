<template>
  <div id="feature">
    <nav-bar id="fe-nav">
      <h2 slot="center">詳細資訊</h2>
    </nav-bar>
    
    <feature-search :disasterArea="disasterArea" ></feature-search>
  </div>
</template>

<script>
/**
 * 獲得資料
 */
  import {getData} from 'network/home'

/**
 * 公共區
 */
  import NavBar from '../../components/common/navbar/NavBar'
  import Search from '../../components/common/search/Search'
  import SearchItem from '../../components/common/search/SearchItem'
  /**
   * 子組件
   */
  import FeatureSearch from './childcomps/searchbar/FeatureSearch'
export default {
  name: "Feature",
  created() {
    getData()
    .then(res => {
      console.log(res);
      this.disasterArea = res.data.records.earthquake[0].intensity.shakingArea
    })
  },
  data() {
    return {
      disasterArea: [],
      selected: ""
    }
  },
  computed: {
  },
  components: {
    NavBar,
    Search,
    SearchItem,
    FeatureSearch
  }
}
</script>

<style scoped>
  #feature {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  #fe-nav {
    background-color: #006266;
    color: #f5f6fa;
  }
  .feature-search {
    /* width: 10%; */
    height: 35px;
    
    display: flex;
    /* align-items: center; */
  }
  .feature-search select {
    width: 85%;
    margin: 0 auto;

    
  }
</style>
