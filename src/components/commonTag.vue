<template>
  <div class="tabs">
    <el-tag
      v-for="tag in tags"
      :key="tag.path"
      :closable="tag.name !== 'home'"
      :type="tag.type"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
};
</script>

<style lang="less" scoped>
.tabs{
    margin-left: 20px;
}
</style>