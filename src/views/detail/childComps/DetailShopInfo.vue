<template>
    <div>
        {{shop}}
    </div>
</template>

<script>
    export default {
        props: {
            shop: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        name: 'DetailShopInfo',
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>