<template>
  <div class="wallet">
    wallet
    <div>{{sums}}</div>
    <div @click="gets">viewCompent</div>
  </div>
</template>

<script>
// import { reactive } from 'vue'

export default {
  name: 'wallet',
  data() {
    return {
      sums: 0
    }
  },
  setup() {},
  methods: {
    gets() {
      // const state = reactive({ counter: 0 })
      this.sums++
      console.log('33333', this.sums)
    }
  }
}
</script>

<style scoped>
.wallet {
  width: 100%;
  height: 100%;
  line-height: 200px;
  text-align: center;
  color: #ffffff;
}
</style>
