<template>
  <el-row class="container">
    <el-col :span="8" class="l-container">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/user.png" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login">
            <p>上次登录时间： <span>2021-7-21</span></p>
            <p>上次登录地点： <span>武汉</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" class="r-container">
      <div class="grid-content bg-purple-light">right</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.container {
  .l-container {
    .user {
      height: 60%;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #878787;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-left: 30px;
      }
      .userinfo {
        margin-left: 50px;
        .name{
            font-size: 32px;
            margin-bottom: 10px;
        }
        .access{
            color: #999;
        }
      }
    }
    .login {
        margin-left: 30px;
        // background-color: aquamarine;
        p{
            color: #000000;
            margin: 10px 0;
            span{
                // background-color: aqua;
                margin-left: 80px;
                color: #878787;
            }
        }
    }
  }
  .r-container {
  }
}
</style>