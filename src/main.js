import Vue from 'vue'
import { Button, Select, Row } from 'element-ui';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Row)

new Vue({
  render: h => h(App),
}).$mount('#app')
