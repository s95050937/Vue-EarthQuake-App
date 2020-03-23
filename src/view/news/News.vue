<template>
  <div id="news">
    <nav-bar id="news-nav">
      <h2 slot="center">最新消息</h2>
    </nav-bar>
    <news-title :title="title" id="news-title"></news-title>
    <news-chart :imgSrc="imgSrc" id="news-chart"></news-chart>
    <news-info :infoObj="infoObj"></news-info>
    
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
  
/**
 * 子組件
 */
  import NewsTitle from './childcopms/newstitle/NewsTitle'
  import NewsChart from './childcopms/newschart/NewsChart'
  import NewsInfo from './childcopms/newsinfo/NewsInfo'
export default {
  name: "News",
  created() {
    getData()
    .then(res => {
      console.log(res);
      this.records = res.data.records.earthquake[0]
    })
  },
  data() {
    return {
      records: {},
      
    }
  },
  computed: {
    title() {
      return this.records.reportContent
    },
    imgSrc() {
      return this.records.reportImageURI
    },
    // 地震資訊
    quakeInfo() {
      return this.records.earthquakeInfo
    },
    depth() {
      return this.quakeInfo.depth.value + this.quakeInfo.depth.unit 
    },
    magnitude() {
      return  this.quakeInfo.magnitude.magnitudeValue
    },
    epiCenterLat() {
      return this.quakeInfo.epiCenter.epiCenterLat.value + this.quakeInfo.epiCenter.epiCenterLat.unit
    },
    epiCenterLon() {
      return this.quakeInfo.epiCenter.epiCenterLon.value + this.quakeInfo.epiCenter.epiCenterLon.unit
    },
    infoObj(){
      // return this.depth
      // let depth = 
      return [
        {front: "深度",back: this.depth},
        {front: "芮氏規模",back: this.magnitude},
        {front: "緯度",back: this.epiCenterLat},
        {front: "經度",back: this.epiCenterLon}
        ]
      // return {
      //   depth: this.depth,
      //   magnitude: this.magnitude,
      //   epiCenterLat: this.epiCenterLat,
      //   epiCenterLon: this.epiCenterLon
      // }
    }
  },
  components: {
    NavBar,
    NewsTitle,
    NewsChart,
    NewsInfo
  }
}
</script>

<style >
  #news {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  #news-nav {
    background-color: #006266;
    color: #f5f6fa;
  }
  #news-title {
    display: flex;
    justify-content: center;

    padding: 10px 0;
  }
  #news-chart {
    width: 90%;

    margin: 0 auto;
  }
</style>