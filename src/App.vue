<template>

  <router-view v-slot="{ Component }">
    <keep-alive exclude='Detail,DetailBaseInfo'>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <main-tab-bar></main-tab-bar>
  <icon></icon>
  <svg-icon></svg-icon>

</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  import Icon from 'components/content/Icon/Icon.vue'
  import SvgIcon from 'components/content/Icon/svg.vue'

  export default {
    name: 'App',
    components: {
      MainTabBar,
      Icon,
      SvgIcon
    }
  }
</script>

<style>



</style>