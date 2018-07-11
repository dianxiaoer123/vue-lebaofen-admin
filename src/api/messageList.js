import request from '@/utils/request'

export function messageList(data) {

  return request({
    url: '/manageapi/message/list', 
    method: 'post',
    data
  })
}
