<template>
  <div class="tabs">
    <!-- tag样式 close事件是element自己的事件 -->
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.path"
      :closable="tag.name !== 'home'"
      :type="tag.type"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="closeMenu(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods:{
    ...mapMutations(['closeTag']),
    // 点击tag跳转的功能
    changeMenu(tag){
      this.$router.push({name: tag.name}) //传入nme进行跳转
    },
    // 点击tag关闭
    closeMenu(tag, index){
      this.closeTag(tag)
      const length = this.tags.length
      // 删除之后的跳转逻辑
      if (tag.name !== this.$route.name) {
        return
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name
        })
      }else{
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tabs{
    // margin-left: 20px;
    padding: 20px;
    .el-tag{
      margin-right: 10px;
    }
}
</style>