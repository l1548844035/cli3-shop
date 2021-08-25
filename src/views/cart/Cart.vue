<template>
    <div id="cart">
        <!-- 顶部导航栏 -->
        <cart-nav-bar class="cart-bar"></cart-nav-bar>
        <!-- 列表信息 -->
        <scroll class="content" ref="scroll">
            <cart-list :cart-list="cartList"></cart-list>
        </scroll>
        <!-- 底部汇总 -->
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
    import CartNavBar from './childComps/CartNavBar'
    import CartList from './childComps/CartList'
    import BottomBar from './childComps/BottomBar'

    import Scroll from 'components/common/scroll/Scroll'
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: 'Cart',
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['cartList'])
        },
        components: {
            CartNavBar,
            CartList,
            BottomBar,
            Scroll
        },

        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    #cart {
        /* position: relative; */
        padding-top: 44px;
    }

    .cart-bar {
        background-color: hsl(350, 89%, 63%);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;

    }

    .content {
        overflow: hidden;
        /* height: 100vh; */
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>