import req from '../https.js'

export const apiv1UsersDetail = () => req('get', '/v1/users/detail')
