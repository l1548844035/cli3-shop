<template>
    <div>
        <nav-bar>
            <template #center>
                购物车({{$store.state.cartList.length}})
            </template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'CartNavBar',
        data() {
            return {}
        },
        components: {
            NavBar
        }
    }
</script>

<style scoped>

</style>