// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import pageOne from '../views/pageOne.vue'
import pageTwo from '../views/pageTwo.vue'
import Login from '../views/Login.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 我们晚点再讨论嵌套路由。
const routes = [
  {
    path: '/',
    component: Main,
    name: 'Main',
    redirect: '/home', //重定向到home
    // 嵌套路由（子路由）
    children: [
      //   { path: 'home', name: 'home', component: Home }, //  /home中的斜杠可以去掉
      //   { path: 'user', name: 'user', component: User },
      //   { path: 'mall', name: 'mall', component: Mall },
      //   { path: 'page1', name: 'page1', component: pageOne },
      //   { path: 'page2', name: 'page2', component: pageTwo }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 对外暴露 router 实例
export default router

// 5. 将router挂载到根实例中
