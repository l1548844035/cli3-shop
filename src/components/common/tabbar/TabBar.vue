<template>
  <div>
    <div id="tag-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }

</script>

<style>
  #tag-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -5px 2px rgba(100, 100, 100, .1);
    background-color: #f6f6f6;
  }

</style>
