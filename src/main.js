import Vue from 'vue'
import { Button, Select, Row } from 'element-ui';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Row)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
