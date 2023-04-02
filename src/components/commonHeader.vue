<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        @click="handleClickMeny"
        icon="el-icon-menu"
        size="mini"
        style="margin-right: 10px"
      ></el-button>

      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="image" src="../assets/user.png" alt="" />
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
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    handleClickMeny() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
};
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