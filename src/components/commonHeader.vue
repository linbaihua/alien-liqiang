<template>
  <div class="header-container">
    <div class="l-content">
      <el-button @click="handleClickMeny" icon="el-icon-menu" size="mini"></el-button>

      <!-- 面包屑 -->
      <span class="text">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
            <img class="image" src="../assets/user.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        handleClickMeny(){
            this.$store.commit('collapseMenu')
        }
    },
};
</script>

<style lang="less" scope>
.header-container {
  background-color: #333;
  height: 60px;
  // line-height: 60px;
  color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 20px;
  }
  .r-content{
    .image{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
  }
}
</style>