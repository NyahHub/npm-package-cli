<style scoped lang="less">
@import "styles/common.less";
</style>
<template>
  <div class="Hello-wrapper">
    <span>hello!</span>
    <span class="account">{{data.name}}</span>
  </div>
</template>
<script>
export default {
  name: 'Hello',
  data() {
    return {}
  },
  props: {
    data: {
      type: Object,
      default: {
        name: 'default'
      }
    }
  },
  methods: {

  },
  created() {
    let that = this;
  }
}
</script>