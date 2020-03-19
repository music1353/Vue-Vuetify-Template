export default {
  namespaced: true,
  state: {
    visible: false,
    msg: '',
    // attribute
    showClose: true,
    timeout: 6000,
    color: 'pink'
  },
  mutations: {
    OPEN_SNACKBAR(state, options) {
      state.visible = true;
      
      Object.keys(options).forEach((k) => {
        state[k] = options[k];
      });
    },
    CLOSE_SNACKBAR(state) {
      state.visible = false;
    },
    // set snackbar
    reset_attribute(state) {
      state.showClose = true;
      state.timeout = 6000;
      state.color = 'pink';
    }
    // setShowClose(state, isShow) {
    //   state.showClose = isShow;
    // },
    // setTimeout(state, timeout) {
    //   state.timeout = timeout;
    // },
    // setColor(state, color) {
    //   state.color = color;
    // }
  },
  actions: {
    openSnackbar(context, options) {
      let timeout = context.state.timeout;

      context.commit('OPEN_SNACKBAR', options);

      setTimeout(() => {
        context.commit('CLOSE_SNACKBAR');
        context.commit('reset_attribute');
      }, timeout);
    }
  }
}