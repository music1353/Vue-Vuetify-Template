import req from '../https.js'

let prefix = (param) => {
  let pre = 'v1/users/';
  return pre + param
}

const users = {
  // 使用者資料
  detail() {
    return req('get', prefix('detail'))
  }
}

export default users;
