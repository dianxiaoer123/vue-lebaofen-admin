import request from '@/utils/request'

// 消费者列表
export function consumerList(data) {
  return request({
    url: '/manageapi/consumer/list', 
    method: 'post',
    data
  })
}


//消费者数据统计
export function consumerStatistics() {
  return request({
    url: '/manageapi/consumer/statistics', 
    method: 'post',
  })
}
