import {agentList} from '@/api/agentList'
import {agentExport} from '@/api/agentExport'
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

        // 代理人管理列表导出
        AgentExport({ commit }, data) {
          return new Promise((resolve, reject) => {
            agentExport(data).then(response => {   
              resolve(response.data)
            }).catch(error => {
              reject(error)
            })
          })
        },
  }
}

export default agent
