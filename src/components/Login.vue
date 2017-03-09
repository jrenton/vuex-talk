<template>
  <form @submit.prevent="login">
    <p v-if="isLoggingIn">Logging in....</p>
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      isLoggingIn: false
    }
  },

  methods: {
    login () {
      this.isLoggingIn = true

      setTimeout(() => {
        this.$store.commit('loggedIn', true)
        this.isLoggingIn = false
      }, 5000)
    }
  }
}
</script>
