import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'amfe-flexible/index.js'
import './styles/_reset.css'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')