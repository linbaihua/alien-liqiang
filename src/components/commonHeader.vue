<template>
  <div class="header-container">
    <div class="l-content">
      <el-button @click="handleClickMeny" icon="el-icon-menu" size="mini" style="margin-right: 10px"></el-button>

      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown @command="logout">
        <span class="el-dropdown-link">
          <img class="image" src="../assets/user.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="cancel">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookie from 'js-cookie'
export default {
  data() {
    return {}
  },
  methods: {
    handleClickMeny() {
      this.$store.commit('collapseMenu')
    },
    logout(command) {
      if (command === 'cancel') {
        // 清除cookie中的token
        Cookie.remove('token')
        // 清除cookie中的menu
        Cookie.remove('menu')
        // 跳转到登录页
        this.$router.push('/login')
      }
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>
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
  .l-content {
    display: flex;
    align-items: center;
    // vue样式穿透
    /deep/ .el-breadcrumb__item {
      .el-breadcrumb__inner {
        &.is-link {
          color: #fff;
        }
      }
    }
  }
  .r-content {
    .image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
