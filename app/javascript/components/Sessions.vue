<template>
<ul>
<Session 
  v-for="(session, i ) in sessions"
  v-bind:session="session"
  v-bind:index="i"
/>
</ul>
</template>

<script>
import Session from './Session'

  export default {
      data() {
        return {sessions: []}
      },
      components: {
          Session
  },
  mounted() {
    fetch("http://localhost:3000/api/v0/get_sessions")
    .then(response => response.json())
    .then(json => {
      this.sessions = json
    })
  }

      
      }
</script>

<style>
ul {
    list-style: none;
    margin:0;
    padding: 0;
}
</style>
