import req from './https.js'

export const apiSignUp = params => req('post', '/signup', params)
export const apiLogin = params => req('post', '/login', params)
