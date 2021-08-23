<template>
    <div id="cart">
        <cart-nav-bar class="cart-bar"></cart-nav-bar>
        <scroll class="content" ref="scroll">
            <cart-list></cart-list>
        </scroll>
    </div>
</template>

<script>
    import CartNavBar from './childComps/CartNavBar'
    import CartList from './childComps/CartList'

    import Scroll from 'components/common/scroll/Scroll'
    export default {
        name: 'Cart',
        data() {
            return {}
        },
        components: {
            CartNavBar,
            CartList,
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