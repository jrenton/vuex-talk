import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    loggedIn (state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    },

    setCoordinates (state, coordinates) {
      state.coordinates = coordinates
    }
  }
})
