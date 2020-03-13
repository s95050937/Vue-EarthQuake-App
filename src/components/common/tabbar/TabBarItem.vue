<template>
  <div class="tab-item" @click="itemClick" :class="{active: isActive}">
    <div class="tab-item-img">
      <slot name="icon"></slot>
    </div>
    <div class="tab-item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabItem",
  methods: {
    
  },
  data() {
    return {
      // isActive: false,
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
      // console.log(this.$route);
    }
  },
  props: {
    path: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    isActive() {
      if (this.$route.path.indexOf(this.path) != -1) {
        return true
      } else {
        false        
      }
    }
  },
}
</script>

<style scoped>
  .tab-item {
    flex: 1;

    height: 49px;
    line-height: 28px;
    /* text-align: center; */

    background-color: rgba(123, 237, 159,0.5);

  }
  .tab-item-img{
    width: 26px;
    height: 26px;

    padding-top: 3px;
    text-align: center;
    margin: 0 auto;
    /* vertical-align:middle; */
  }
  .tab-item-img img {
    vertical-align: middle;
  }
  .tab-item-text {
    padding-top: 0px;
    font-size: 12px;
  }
  
  .active {
    background-color: rgba(29, 209, 161,1.0);

  }
</style>