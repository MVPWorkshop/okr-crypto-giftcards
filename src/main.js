import Vue from 'vue'
import * as emailjs from 'emailjs-com'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './styles.scss'
import router from './router'
import nacl from 'tweetnacl'
import bs58check from 'bs58check'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

emailjs.init('user_WwiwC7LSdWEAevqOWsOyR')



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

const keyPair = nacl.sign.keyPair()
console.log({ keyPair })

const publicBuffer = Buffer.from(keyPair.publicKey)
const secretBuffer = Buffer.from(keyPair.secretKey)

console.log({
  publicBuffer, secretBuffer
})

console.log({
  publicKey: `ak_${encodeBase58Check(publicBuffer)}`,
  secretBuffer: secretBuffer.toString('hex'),
})

function encodeBase58Check (input) {
  return bs58check.encode(Buffer.from(input))
}