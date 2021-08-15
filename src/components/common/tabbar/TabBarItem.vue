<template>
  <div class="tag-bar-item" @click='itemClick'>
    <div v-if=!isActive>
      <slot name='item-icon'></slot>
    </div>
    <div v-else>
      <slot name='item-icon-unactive'></slot>
    </div>
    <div :style='activeStyle'>
      <slot name='item-text'></slot>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {
          color: this.activeColor
        } : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tag-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tag-bar-item img {
    height: 24px;
    width: 24px;
  }
</style>