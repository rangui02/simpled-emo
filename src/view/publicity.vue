<template>
  <div class="publicity">
    publicity
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'publicity',
  setup() {
    const state = reactive({ counter: 0 })
    console.log('publicity')
    console.log('33333', state)
  }
}
</script>

<style scoped>
.publicity {
  color: #ffffff;
  line-height: 200px;
  text-align: center;
}
</style>
