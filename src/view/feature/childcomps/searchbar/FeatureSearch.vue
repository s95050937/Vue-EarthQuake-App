<template>
  <div>
    <search class="feature-search" @selectChange="getSelected($event)">
      <search-item v-for="(item, index) in district" :key="index">
        <h2>{{item.areaDesc}}</h2>
      </search-item>
    </search>

    <!-- <div v-for="(item, index) in itemIsActive" :key="index">
      <div>{{item.areaDesc}}</div>
    /div> -->
    
    <search-shake :itemIsActive="itemIsActive[0]" class="search-shake"></search-shake>
    <search-content :itemIsActive="itemIsActive[0]" id="search-content"></search-content>
  </div>
</template>

<script>
import Search from 'components/common/search/Search'
import SearchItem from 'components/common/search/SearchItem'
import SearchShake from './childcomps/SearchShake'
import SearchContent from './childcomps/SearchContent'

export default {
  name: "FeatureSearch",
  components: {
    Search,
    SearchItem,
    SearchShake,
    SearchContent
  },
  props: {
    disasterArea: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      selected: "臺北市地區"
    }
  },
  methods: {
    getSelected(selected) {
      this.selected = selected
      
    },
  },
  computed: {
    district() {
      return this.disasterArea.filter(item => {
        return item.areaDesc.indexOf("最大") == -1
      })
    },
    itemIsActive() {      
      return this.disasterArea.filter(item => {
        return item.areaDesc == this.selected
      })   
    },
    eqStation() {
      return this.itemIsActive.eqStation
    },
  
  },
}
</script>

<style scoped>
  .feature-search {
    display: flex;
    justify-content: center;

    margin: 10px 0;
  }
  .search-shake {
    width: 80%;
    height: 50px;
    margin: 10px auto;
    
    text-align: center;
    line-height: 50px;
    
  }
  #search-content {
    width: 90%;
    margin: 0 auto;

    border: 2px solid black;
    padding: 5px;
  }
</style>>

