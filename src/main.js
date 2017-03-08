import Vue from 'vue'
import App from './App.vue'
import state from './state'

new Vue({
  state,
  el: '#app',
  render: h => h(App)
})
