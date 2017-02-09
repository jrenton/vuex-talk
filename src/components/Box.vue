<template>
  <div>
    <h1>Box!!</h1>
    ({{ coordinates.x }}, {{ coordinates.y }})
  </div>
</template>

<script>
export default {
  data() {
    return {
      coordinates: this.$state.coordinates
    }
  }
}
</script>
