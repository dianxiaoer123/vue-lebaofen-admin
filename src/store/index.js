import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import userManage from './modules/userManage'
import systemrManage from './modules/systemManage'
import order from './modules/orderManage'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    userManage,
    systemrManage,
    order,
    user
  },
  getters
})

export default store
