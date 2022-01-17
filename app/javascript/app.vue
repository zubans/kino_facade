<template>
  <div id="app">
  <Sessions />
 </div>
</template>

<script>
import Sessions from './components/Sessions'

export default {
 components: {
     Sessions
     },
 data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
