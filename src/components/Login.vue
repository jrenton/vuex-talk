<template>
  <form @submit.prevent="login">
    <button type="submit">Login</button>
  </form>
</template>

<script>
import state from '../state'

export default {
  methods: {
    login () {
      state.isLoggedIn = true
    }
  }
}
</script>
