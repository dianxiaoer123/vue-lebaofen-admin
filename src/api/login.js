import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    account:username,
    password:password
  }
  return request({
    url: '/manageapi/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/manageapi/logout',
    method: 'post'
  })
}
export function getUserInfo(token) {
return request({
    url: '/user/info',
    method: 'get',
    params: { token }
})
}

