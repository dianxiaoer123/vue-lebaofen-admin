import request from '@/utils/request'

// 代理列表
export function agentList(data) {
  return request({
    url: '/manageapi/agent/list', 
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

// 代理人佣金管理==推荐奖励
export function rcmdrewardList(data) {
  return request({
    url: '/manageapi/finance/agent/rcmdreward/list', 
    method: 'post',
    data
  })
}

// 代理人手续费列表
export function feeList(data) {
  return request({
    url: '/manageapi/finance/agent/fee/list', 
    method: 'post',
    data
  })
}

// 佣金清单
export function commissionList(data) {
  return request({
    url: '/manageapi/finance/agent/commission/list', 
    method: 'post',
    data
  })
}

// 通过 佣金清单
export function commissionPass(id) {
  return request({
    url: '/manageapi/finance/agent/commission/pass', 
    method: 'get',
  })
}

// 驳回 佣金清单
export function commissionReject(id) {
  return request({
    url: '/manageapi/finance/agent/commission/reject', 
    method: 'get',
  })
}




