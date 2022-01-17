<template>
  <li>
    {{session.name}} - {{session.time}}
  </li>
</template>

<script>
export default {
  props: {
    session: {
      required: true
    },
    index: Number
  },
  data() {
    return {
      localSession: this.session
    }
  }

}
</script>

          
