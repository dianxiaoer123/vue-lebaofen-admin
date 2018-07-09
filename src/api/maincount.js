import request from '@/utils/request'

export function getCount() {

  return request({
    url: '/manageapi/main/count', 
    method: 'post'
  })
}
