<template>
  <div class="game" :class="[ canPlay ? 'success': 'error' ]">
    <h3>{{ player.name }}. Player {{ player.id }}</h3>
    <p>You <strong>{{ playText }}</strong> play the game.</p>
    <input type="text" v-model="x">
    <input type="text" v-model="y">
  </div>
</template>

<script>
export default {
  props: ['player'],
  computed: {
    x () {
      return this.$state.coordinates.x
    },

    y () {
      return this.$state.coordinates.y
    },

    canPlay () {
      return this.$state.isLoggedIn
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

      this.x = event.x
      this.y = event.y
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
