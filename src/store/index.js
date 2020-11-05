import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import auth from './modules/auth'
import snackbar from './modules/snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    snackbar
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
      reducer(val) {
          return {
          // 只儲存特定module
          auth: val.auth
        }
     }
  })]
});