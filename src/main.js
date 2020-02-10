import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/index'
import api from './apis'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.prototype.$api = api; // 將api掛載到vue的原型上

Vue.use(vuetify);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
