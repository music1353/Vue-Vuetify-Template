const snackbar = {
  state: {
    msg: '',
    visible: false,
    showClose: true,
    timeout: 6000,
    color: 'pink'
  },
  mutations: {
    showSnack(state) {
      state.visible = true;
      
      setTimeout(() => { 
        state.visible = false; 
      }, state.timeout);
    },
    closeSnack(state) {
      state.visible = false;
    },
    // set snackbar
    setMsg(state, msg) {
      state.msg = msg;
    },
    setShowClose(state, status) {
      state.showClose = status;
    },
    setTimeout(state, timeout) {
      state.timeout = timeout;
    },
    setColor(state, color) {
      state.color = color;
    }
  }
}

export default snackbar;