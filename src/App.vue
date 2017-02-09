<template>
  <div id="app">
    <input type="text" v-model="coordinates.x">
    <input type="text" v-model="coordinates.y">
    <h1>App!</h1>
    ({{ coordinates.x }}, {{ coordinates.y }})
    <box><box>
  </div>
</template>

<script>
import Box from './components/Box.vue';

export default {
  name: 'app',

  data() {
    return {
      coordinates: this.$state.coordinates
    }
  },

  components: {
    Box
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
  margin-top: 60px;
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
</style>
