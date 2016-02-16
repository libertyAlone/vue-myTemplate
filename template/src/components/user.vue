<template>
  <div class="hello">
    <h1>\{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    text: String
  }
}
</script>
