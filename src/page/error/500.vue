<template>
  <div class="error-page">
    <div class="error-code">5<span>0</span>0</div>
    <div class="error-desc">十分抱歉~ 服务器出现错误</div>
    <div class="error-handle">

      <el-button class="error-btn"
                 type="success"
                 size="large">
        <router-link to="/">
          前往首页
        </router-link>
      </el-button>
      <el-button class="error-btn"
                 type="warning"
                 size="large"
                 @click="goBack">返回上页</el-button>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scopeds>
.error-page {
    /* 状态码字体 */
    --codeWordColor: #2d8cf0;
    /* 提示字体 */
    --descWordColor: rgb(253, 4, 4);
}
@import '../../style/error.css';
</style>
