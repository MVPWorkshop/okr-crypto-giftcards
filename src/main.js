import Vue from 'vue'
import * as emailjs from 'emailjs-com'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './styles.scss'
import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

emailjs.init('user_WwiwC7LSdWEAevqOWsOyR')



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')