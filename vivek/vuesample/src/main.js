import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios';

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode:'history'
})


Vue.config.productionTip = false
Vue.prototype.$http = axios;
axios.defaults.baseURL  =  'http://localhost:3000/';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
