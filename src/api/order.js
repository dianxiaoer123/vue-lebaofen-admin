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

// 催收
export function collectionOrder(data) {
  return request({
    url: '/manageapi/order/collection', 
    method: 'post',
    data
  })
}

// 更换信用卡
export function changeCard(data) {
  return request({
    url: '/manageapi/order/changeCreditCard', 
    method: 'post',
    data
  })
}

// 逾期
export function overdueCard(data) {
  return request({
    url: '/manageapi/order/overdue', 
    method: 'post',
    data
  })
}

// 申诉通过
export function confirmAppealsOrder(data) {
  return request({
    url: '/manageapi/order/confirmAppealsOrder', 
    method: 'post',
    data
  })
}
