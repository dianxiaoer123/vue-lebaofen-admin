import {orderList,orderStatistics,collectionOrder,changeCard,overdueCard,confirmAppealsOrder,sendCode} from '@/api/order'


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

      CollectionOrder({ commit }, data) {
        return new Promise((resolve, reject) => {
          collectionOrder(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      // 逾期
      OverdueCard({ commit }, data) {
        return new Promise((resolve, reject) => {
          overdueCard(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      // 申诉通过
      ConfirmAppealsOrder({ commit }, data) {
        return new Promise((resolve, reject) => {
          confirmAppealsOrder(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },


      

      ChangeCard({ commit }, data) {
        return new Promise((resolve, reject) => {
          changeCard(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      

      //  订单统计
      QrderStatistics({ commit }, state) {
        return new Promise((resolve, reject) => {
          orderStatistics().then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      // 发送验证码
      SendCode({ commit }, data) {
        return new Promise((resolve, reject) => {
          sendCode(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      

      
      
  }
}

export default agent
