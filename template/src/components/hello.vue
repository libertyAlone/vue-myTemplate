<template>
  <div class="hello">
    <h1>\{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    text: String
  }
}
</script>
