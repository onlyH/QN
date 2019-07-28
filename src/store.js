import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '北京'
  },
  mutations: {
    changeHandle(state, city) {
      localStorage.city = city
      state.city = city
    }
  },
  actions: {
    changHandle(ctx, city) {
      ctx.commit('changeHandle', city)
    }
  }
})
