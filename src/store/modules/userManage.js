import {agentList,agentUpstatus,agentStatistics} from '@/api/agent'
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

      
      
  }
}

export default agent
