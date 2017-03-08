<template>
  <div class="game" :class="[ canPlay ? 'success': 'error' ]">
    <h3>{{ player.name }}. Player {{ player.id }}</h3>
    <p>You <strong>{{ playText }}</strong> play the game.</p>
    <input type="text" v-model="coordinates.x">
    <input type="text" v-model="coordinates.y">
  </div>
</template>

<script>
import state from '../state'

export default {
  props: ['player'],
  data () {
    return {
      coordinates: state.coordinates
    }
  },
  computed: {
    canPlay () {
      return state.isLoggedIn
    },
    playText () {
      return this.canPlay ? 'can' : 'cannot'
    }
  },
  methods: {
    clicked (event) {
      if (!this.canPlay) {
        return
      }

      this.coordinates.x = event.x
      this.coordinates.y = event.y
    },
  },
  mounted() {
    this.$el.addEventListener('click', this.clicked)
  },
  beforeDestroy() {
    this.$el.removeEventListener('click', this.clicked)
  }
}
</script>

<style>
.success {
  border-color: #39d239;
}
.error {
  border-color: red;
}
</style>
