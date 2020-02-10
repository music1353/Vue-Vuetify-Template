import req from '../https.js'

const users = {
  // 使用者資料
  detail() {
    return req('get', '/v1/users/detail')
  }
}

export default users;

// export const apiv1UsersDetail = () => req('get', '/v1/users/detail')
