<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">OA后台管理系统</div>
      <el-form :model="param"
               :rules="rules"
               ref="login"
               label-width="0px"
               class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username"
                    placeholder="username">
            <el-button icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"
                    placeholder="password"
                    v-model="param.password"
                    @keyup.enter="submitForm">
            <el-button icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-reg">
          <el-button type="primary"
                     @click="submitForm">注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        username: 'admin',
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
  methods: {
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.$message.success('登录成功')
          localStorage.setItem('ms_username', this.param.username)
          // this.$router.push('/')
        } else {
          this.$message.error('请输入账号和密码')
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../assets/loginBg.jpg');
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  /* color: rgb(55, 66, 59); */
  color: #fff;
  border-bottom: 1px solid #ddd;
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
.login-reg button {
  background-color: deepskyblue;
}
</style>
