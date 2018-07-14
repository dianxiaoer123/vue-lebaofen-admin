import {agentList,agentUpstatus,agentStatistics,rcmdrewardList,feeList,commissionList,commissionPass,commissionReject} from '@/api/agent'
import {consumerList,consumerStatistics} from '@/api/consumer'

const agent = {
  state: {
     
  },
  mutations: {
    
  },
  actions: {
       // 代理人管理列表
       AgentList({ commit }, data) {
        return new Promise((resolve, reject) => {
          agentList(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      // 代理人状态修改
      AgentUpstatus({ commit }, data) {
        return new Promise((resolve, reject) => {
          agentUpstatus(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

       // 代理人数据统计
       AgentStatistics({ commit }, state) {
        return new Promise((resolve, reject) => {
          agentStatistics().then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

        // 消费者管理列表
        ConsumerList({ commit }, data) {
          return new Promise((resolve, reject) => {
            consumerList(data).then(response => {   
              resolve(response.data)
            }).catch(error => {
              reject(error)
            })
          })
        },

           // 消费者数据统计
       ConsumerStatistics({ commit }, state) {
        return new Promise((resolve, reject) => {
          consumerStatistics().then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

       // 佣金列表 奖励
       RcmdrewardList({ commit }, data) {
         return new Promise((resolve, reject) => {
          rcmdrewardList(data).then(response => {   
            resolve(response.data)
         }).catch(error => {
             reject(error)
        })
        })
     },

     FeeList({ commit }, data) {
      return new Promise((resolve, reject) => {
        feeList(data).then(response => {   
         resolve(response.data)
      }).catch(error => {
          reject(error)
     })
     })
    },

     CommissionList({ commit }, data) {
      return new Promise((resolve, reject) => {
        commissionList(data).then(response => {   
         resolve(response.data)
      }).catch(error => {
          reject(error)
     })
     })
  },

  // 通过
  CommissionPass({ commit }, data) {
    return new Promise((resolve, reject) => {
      commissionPass(data).then(response => {   
       resolve(response.data)
    }).catch(error => {
        reject(error)
   })
   })
},

  // 驳回
  CommissionReject({ commit }, data) {
    return new Promise((resolve, reject) => {
      commissionReject(data).then(response => {   
       resolve(response.data)
    }).catch(error => {
        reject(error)
   })
   })
},

    
      
  }
}

export default agent
