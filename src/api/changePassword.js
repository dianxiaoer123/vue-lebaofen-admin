import request from '@/utils/request'

export function changePassword(data) {

  return request({
    url: '/manageapi/updpwd', 
    method: 'post',
    data
  })
}
