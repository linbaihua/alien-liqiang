<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <common-aside-vue />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            main
            <!-- 子路由出口 -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import commonAsideVue from '@/components/commonAside.vue';
export default {
  data() {
    return {};
  },
  components:{
    commonAsideVue,
  }
};
</script>

<style>
</style>