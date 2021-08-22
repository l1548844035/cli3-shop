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
    import Pullup from '@better-scroll/pull-up'
    //使用插件，跟使用router类似
    BScroll.use(ObserveDom)
    BScroll.use(ObserveImage)
    BScroll.use(Pullup)
    export default {
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            //创建betterscroll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
                //开启插件
                observeDom: true,
                observeImage: true,
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            //监听滚动位置
            this.scroll.on('scroll', (position) => {
                // console.log(position);
                //传出自定义事件和位置position
                // console.log(this.scroll.y);
                this.$emit('scroll', position)
            })
            //监听上拉事件,需要添加pullUp插件以及使用
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        },
        methods: {
            scrollTo(x, y, time = 500) {
                this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>