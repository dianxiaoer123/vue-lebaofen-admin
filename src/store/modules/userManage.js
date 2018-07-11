import {agentList} from '@/api/agentList'
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
  }
}

export default agent
