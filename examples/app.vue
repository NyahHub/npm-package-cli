<template>
  <div>
    <div class="left-top-nav">
      <Hello :data="msg"></Hello>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: {
        name: 'test'
      }
    }
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {

  }
}
</script>
