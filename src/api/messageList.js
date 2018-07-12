import request from '@/utils/request'

export function messageList(data) {

  return request({
    url: '/manageapi/message/list', 
    method: 'post',
    data
  })
}

export function msgRead(data) {

  return request({
    url: '/manageapi/message/read', 
    method: 'post',
    data
  })
}
