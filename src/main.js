import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import './assets/stylus/main.styl'

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Promise((resolve, reject) => {
  resolve(app)
  reject(console.log('reject'))
})
