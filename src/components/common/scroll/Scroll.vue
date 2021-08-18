<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    //高版本的better-scroll的导入有变化，加上observeDOM的插件，
    import BScroll from '@better-scroll/core'
    import ObserveDom from '@better-scroll/observe-dom'
    import ObserveImage from '@better-scroll/observe-image'
    //使用插件，跟使用router类似
    // BScroll.use(ObserveDom)
    BScroll.use(ObserveImage)
    export default {
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                //开启插件
                // observeDom: true,
                observeImage: true,
                click: true,
            })
        }
    }
</script>

<style scoped>

</style>