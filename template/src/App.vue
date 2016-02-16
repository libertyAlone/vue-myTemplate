<template>
  <div id="wrapper">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>
<style lang="less">
.view {
  position: absolute;
  background-color: #eee;
  width: 100%;
  transition: opacity .2s ease;
  box-sizing: border-box;
  padding: 8px 20px;
  &.v-enter, &.v-leave {
    opacity: 0;
  }
}
</style>
