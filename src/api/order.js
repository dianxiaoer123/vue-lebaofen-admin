import request from '@/utils/request'

// 订单列表
export function orderList(data) {
  return request({
    url: '/manageapi/order/list', 
    method: 'post',
    data
  })
}


// 代理状态修改
export function agentUpstatus(data) {
  return request({
    url: '/manageapi/agent/updsta', 
    method: 'post',
    data
  })
}

//代理人数据统计
export function agentStatistics() {
  return request({
    url: '/manageapi/agent/statistics', 
    method: 'post',
  })
}
