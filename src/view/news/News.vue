<template>
  <div>
    <h2>我是消息</h2>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
/**
 * 獲得資料
 */
  import {getData} from 'network/home'
export default {
  name: "News",
  created() {
    getData()
    .then(res => {
      console.log(res);
      this.title = res.data.records.earthquake[0].reportContent
    })
  },
  data() {
    return {
      title: ""
    }
  },
}
</script>

<style scoped>

</style>