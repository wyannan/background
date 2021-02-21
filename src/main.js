import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入css重置文件
import './assets/css/common.css'

// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 引入element
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')