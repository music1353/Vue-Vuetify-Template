import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";

import snackbar from './store/snackbar'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
});

export default new Vuex.Store({
  modules: {
    snackbar
  },
  plugins: [vuexLocal.plugin]
});