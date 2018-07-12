import { loginByUsername, logout, getUserInfo} from '@/api/login'
import {getCount} from '@/api/maincount'
import {changePassword} from '@/api/changePassword'
import {messageList,msgRead} from '@/api/messageList'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: ['admin'],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data.data;
          commit('SET_TOKEN', data.ticket);
          setToken(data.ticket);
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    
//  获取主页数据
    GetCount({ commit }, state) {
    
      return new Promise((resolve, reject) => {
        getCount().then(response => {
       
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 修改密码
    ChangePassword({ commit }, data) {
    
      return new Promise((resolve, reject) => {
        changePassword(data).then(response => {
       
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 信息列表
    MessageList({ commit }, data) {
      return new Promise((resolve, reject) => {
        messageList(data).then(response => {   
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },

        // 信息已读
        MsgRead({ commit }, data) {
          return new Promise((resolve, reject) => {
            msgRead(data).then(response => {   
              resolve(response.data)
            }).catch(error => {
              reject(error)
            })
          })
        },
    


    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user
