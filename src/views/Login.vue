<template>
  <el-form :model="ruleForm" :rules="rules" class="login" :inline="true">
    <h1 class="login_title">系统登录</h1>
    <el-form-item label="账号名称" prop="username">
      <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="登录密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item class="denglu">
      <el-button type="primary">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Mock from 'mockjs'
export default {
  data() {
    return {
      ruleForm: {
        // 中间不要加空格，习惯给空的中间加空格
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.login {
  width: 350px;
  margin: 180px auto;
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 0 25px #c6c6c6;
  box-sizing: border-box;
  .login_title {
    // background-color: antiquewhite;
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
    color: black;
  }
  .denglu {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
