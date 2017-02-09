import Vue from 'vue'
import App from './App.vue'
import state from './state';

Vue.mixin({
  beforeCreate() {
    const options = this.$options
    // store injection
    if (options.state) {
      this.$state = options.state
    } else if (options.parent && options.parent.$state) {
      this.$state = options.parent.$state
    }
  },
})

new Vue({
  state,
  el: '#app',
  render: h => h(App)
})
