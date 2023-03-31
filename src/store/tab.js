export default {
    state: {
        isCollapse: false //控制菜单的展开还是收起
    },
    mutations: {
        // 修改菜单的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
      }
}