import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  // plugins: [createPersistedState({
  //   storage: window.localStorage,
  //     reducer(val) {
  //         return {
  //         // 只儲存特定module
  //       }
  //    }
  // })]
});