import request from '@/utils/request'

export function agentExport(data) {

  return request({
    url: '/manageapi/agent/export2', 
    method: 'post',
    data,
 
  })
}
