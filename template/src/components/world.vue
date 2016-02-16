<template>
  <div class="hello">
    <h1>\{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'world',
  props: {
    text: String
  }
}
</script>
