/**
 * auth api
 */

import req from './https.js'

const auth = {
  // 註冊
  signUp(params) {
    return req('post', '/signup', params)
  },
  // 燈入
  login(params) {
    return req('post', '/login', params)
  }
}

export default auth;

// export const apiSignUp = params => req('post', '/signup', params)
// export const apiLogin = params => req('post', '/login', params)
