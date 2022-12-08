import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {},
  },
  getters: {
    GET_USERS: (state)=>state.users
  },
  mutations: {
    UPDATE_USERS: (state, new_value)=> state.users = new_value
  },
  actions: {
    GET_ALL_USERS: ({commit}, val)=>{
      console.log(val);
      fetch('https://api.github.com/users').then(res=>res.json()).then(data=>{
        commit('UPDATE_USERS', data)
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  modules: {
  }
})
