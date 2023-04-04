<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{ isCollapse ? '后台' : '通用管理后台系统' }}</h3>
    <el-menu-item v-for="item in noChild" :key="item.name" :index="item.name" style="padding-left: 0px" @click="clickMenu(item)">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu v-for="item in hasChild" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  data() {
    return {
      // menuDate: []
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    // 点击菜单
    clickMenu(item) {
      // 判断点击的是否是同一页面，非同一页面才跳转
      if (this.$route.path !== item.path && !(this.$route.path === '/home' && item.path === '/')) {
        this.$router.push(item.path)
      }
      this.$store.commit('selectMenu', item)
    }
  },
  computed: {
    // 无子菜单的
    noChild() {
      return this.menuDate.filter(item => !item.children)
    },

    // 有子菜单的
    hasChild() {
      return this.menuDate.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    menuDate() {
      // 判断当前数据,如果缓存中没有,当前store中去获取
      console.log(this.$store.state.tab.menu, 'menu')
      return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu
    }
  }
}
</script>

<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  padding-left: 20px;
  //   box-sizing: border-box;
  border-right: 0;
  text-align: start;
  height: 100vh;
  h3 {
    padding: 20px;
    color: aliceblue;
    font-size: 16px;
    // text-align: center;
  }
}
</style>
