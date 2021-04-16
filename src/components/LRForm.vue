<template>
  <el-form :model="form"
           :rules="rules"
           ref="login"
           label-width="0px"
           class="ms-content">
    <el-form-item prop="username">
      <el-input v-model="form.username"
                placeholder="username">
        <el-button icon="el-icon-lx-people"></el-button>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password"
                placeholder="password"
                v-model="form.password"
                @keyup.enter="submitForm">
        <el-button icon="el-icon-lx-lock"></el-button>
      </el-input>
    </el-form-item>
    <div class="login-btn">
      <el-button type="primary"
                 @click="submitForm">登录</el-button>
    </div>
    <p class="login-tips">没有账号？请先注册</p>
    <div class="login-reg">
      <el-button type="primary"
                 @click="registerMethod">注册</el-button>
    </div>
  </el-form>
</template>

<script>
// import {} from 'vue'

export default {
  data() {
    return {
      form: {
        username: '慧君',
        password: '123123'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  setup() {
    console.log(3333)
    // localStorage.removeItem('ms_username')
  },
  methods: {
    submitForm() {
      // let _this = this
      this.$refs.login.validate((valid) => {
        if (valid) {
          // this.$message.success('登录成功')
          localStorage.setItem('ms_username', JSON.stringify(this.form))
          this.$router.push('/Home')
        } else {
          this.$message.error('请输入账号和密码')
          return false
        }
      })
    },
    // 注册
    registerMethod() {
      this.$router.push('/Register')
    }
  }
}
</script>
<style scoped>
.ms-content {
  padding: 30px 30px;
}
.login-btn,
.login-reg {
  text-align: center;
}
.login-btn button,
.login-reg button {
  width: 100%;
  height: 36px;
  color: black;
  margin-bottom: 10px;
}
.login-tips {
  text-align: center;
  font-size: 12px;
  line-height: 30px;
  color: rgb(3, 70, 31);
}

.login-reg button {
  background-color: deepskyblue;
}
</style>
