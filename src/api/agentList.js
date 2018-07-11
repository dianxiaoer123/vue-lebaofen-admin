import request from '@/utils/request'

export function agentList(data) {

  return request({
    url: '/manageapi/agent/list', 
    method: 'post',
    data
  })
}
