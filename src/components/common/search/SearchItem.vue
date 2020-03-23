<template>
  <option><slot></slot></option>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    value: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>>
