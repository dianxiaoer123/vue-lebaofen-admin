import request from '@/utils/request'

// 订单列表
export function orderList(data) {
  return request({
    url: '/manageapi/order/list', 
    method: 'post',
    data
  })
}


// 累计订单金额
export function orderStatistics() {
  return request({
    url: '/manageapi/order/statistics', 
    method: 'post'
  })
}

