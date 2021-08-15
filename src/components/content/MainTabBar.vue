<template>
  <div class="home">
    <tab-bar>
      <tab-bar-item path='/home'>
        <template #item-icon>
          <img src="~img/active.png" alt="">
        </template>
        <template #item-icon-unactive>
          <img src="~img/unactive.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <template #item-icon>
          <img src="~img/active.png" alt="">
        </template>
        <template #item-icon-unactive>
          <img src="~img/unactive.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <template #item-icon>
          <img src="~img/active.png" alt="">
        </template>
        <template #item-icon-unactive>
          <img src="~img/unactive.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <template #item-icon>
          <img src="~img/active.png" alt="">
        </template>
        <template #item-icon-unactive>
          <img src="~img/unactive.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import url(~assets/css/base.css);
</style>