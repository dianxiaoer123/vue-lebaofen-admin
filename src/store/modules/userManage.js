import {agentList,agentUpstatus,agentStatistics} from '@/api/agent'

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

      
      
  }
}

export default agent
