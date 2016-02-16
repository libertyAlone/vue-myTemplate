<template>
  <div>
    <user :text="text">
      {{text}}
    </user>
  </div>
</template>

<script>
import User from '../components/user'

export default {
  components: {
    User
  },

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      text: 'This is "User" View'
    }
  }
}
</script>
