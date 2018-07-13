import {orderList} from '@/api/order'


const agent = {
  state: {
     
  },
  mutations: {
    
  },
  actions: {
       // 订单列表
       OrderList({ commit }, data) {
        return new Promise((resolve, reject) => {
          orderList(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      
      
  }
}

export default agent
