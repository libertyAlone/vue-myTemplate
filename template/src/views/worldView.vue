<template>
  <div>
    <world :text="text">
      {{ text }}
    </world>
  </div>
</template>

<script>
import World from '../components/world'

export default {
  components: {
    World
  },

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      text: 'This is "World" View'
    }
  }
}
</script>
