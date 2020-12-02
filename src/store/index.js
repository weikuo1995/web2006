import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './modules/loginMoudule'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    loginModule
  }
})
