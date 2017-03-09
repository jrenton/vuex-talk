<template>
  <div id="app">
    <h2>Welcome to a Vue.js game!</h2>
    <h3>Game coordinates:</h3>
    <input type="text" placeholder="x" v-model="coordinates.x">
    <input type="text" placeholder="y" v-model="coordinates.y">
    <div class="flex">
      <game class="border-gray" v-for="player in players" :player="player"></game>
    </div>
    <login class="border-gray"></login>
  </div>
</template>

<script>
import state from './state'

import Game from './components/Game.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',

  data () {
    return {
      players: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Bill' },
        { id: 3, name: 'Sally' },
        { id: 4, name: 'Jane' }
      ]
    }
  },

  computed: {
    coordinates () {
      return state.coordinates
    }
  },

  components: {
    Game,
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.border-gray {
  border: 2px solid #ccc;
  padding: 20px;
  margin: 20px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

input[type=text] {
  width: 40px;
  padding: 5px;
}
</style>
