<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-aside-vue />
      </el-aside>
      <el-container>
        <el-header>
            <common-header-vue/>
        </el-header>
        <common-tag-vue/>
        <el-main>
            <!-- 子路由出口 -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import commonAsideVue from '@/components/commonAside.vue';
import commonHeaderVue from '@/components/commonHeader.vue';
import commonTagVue from '@/components/commonTag.vue';
export default {
  data() {
    return {};
  },
  components:{
    commonAsideVue,
    commonHeaderVue,
    commonTagVue
  }
};
</script>


<style scoped>
.el-header{
    padding: 0;
}
</style>