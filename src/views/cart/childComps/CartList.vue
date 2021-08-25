<template>
    <cart-list-item v-for="item in cartList" :item-info="item"></cart-list-item>


</template>

<script>
    import CartListItem from './CartListItem'

    export default {
        props: {
            cartList: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        name: 'CartList',
        data() {
            return {}
        },

        components: {
            CartListItem
        },

    }
</script>

<style scoped>

</style>