<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">OA后台管理系统</div>
      <RLForm />
    </div>
  </div>
</template>

<script>
import RLForm from '@/components/LRForm'

export default {
  components: {
    RLForm
  },
  data() {
    return {}
  },
  setup() {
    // console.log('Vue3.0  setup')
  },
  methods: {}
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-image: url('../assets/loginBg.jpg'); */
  background-image: var(--backgroundImage);
  background-repeat: no-repeat;
  background-size: 100%;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
