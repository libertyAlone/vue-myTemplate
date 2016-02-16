<template>
  <div>
    <hello :text="text">
      {{ text }}
    </hello>
  </div>
</template>

<script>
import Hello from '../components/hello'

export default {
  components: {
    Hello
  },

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      text: 'This is "Hello" View'
    }
  }
}
</script>
