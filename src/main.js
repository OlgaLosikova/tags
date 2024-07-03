import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
