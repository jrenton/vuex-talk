import Vue from 'vue'
import App from './App.vue'
import state from './state'
import store from './vuex'

Vue.mixin({
  beforeCreate () {
    const options = this.$options
    if (options.state) {
      this.$state = options.state
    } else if (options.parent && options.parent.$state) {
      this.$state = options.parent.$state
    }
  },
})

new Vue({
  store,
  state,
  el: '#app',
  render: h => h(App)
})
