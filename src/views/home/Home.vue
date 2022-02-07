<template>
    <div id="home">
        <nav-bar class="home-bar">
            <template #center>
                购物街
            </template>
        </nav-bar>

        <tab-control v-show="isTabFixed" class="tab-control" ref="tabControl1" :title="['流行','新款','精选']"
                     @tabClick="tabClick">
        </tab-control>

        <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load=true @scroll="contentScroll"
                @pullingUp="loadMore">
            <home-swiper :banners='banners' @swiperImageLoad="swiperImageLoad"></home-swiper>
            <home-recommend :recommends='recommends'></home-recommend>
            <feature></feature>
            <tab-control ref="tabControl2" :title="['流行','新款','精选']" @tabClick="tabClick">
            </tab-control>
            <goods-list :goods="goods[currentType].list"></goods-list>
        </scroll>

        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>


    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backTop/BackTop'


    import HomeSwiper from './childComps/HomeSwiper'
    import HomeRecommend from './childComps/HomeRecommend'
    import Feature from './childComps/Feature'

    import {
        getHomeMultidata,
        getHomeGoods
    } from 'network/home'

    export default {
        data() {
            return {
                //保存轮播图数据
                banners: [],
                //保存每日推荐数据
                recommends: [],
                //保存商品数据
                goods: {
                    'pop': {
                        page: 0,
                        list: []
                    },
                    'new': {
                        page: 0,
                        list: []
                    },
                    'sell': {
                        page: 0,
                        list: []
                    }
                },
                currentType: 'pop', //保存点击哪个tab
                isShowBackTop: false, //保存是否显示返回顶部按钮状态
                tabOffSetTop: 0, //记录tab-control是否吸顶的状态
                isTabFixed: false,
                saveY: 0,
            }
        },
        components: {
            NavBar,
            TabControl,
            Scroll,
            BackTop,
            GoodsList,
            HomeSwiper,
            HomeRecommend,
            Feature,

        },
        computed: {
            activated() {
                this.$refs.scroll.scrollTo(0, this.saveY, 0)
            },
            deactivated() {
                this.saveY = -this.$refs.scroll.scroll.scroll.y
                console.log(this.saveY);
            }
        },
        created() {
            //请求首页多个数据
            this.getHomeMutidata()
            //请求商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },

        methods: {

            //事件监听方法,监听点击了哪个选项
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break;
                    case 1:
                        this.currentType = 'new'
                        break;
                    case 2:
                        this.currentType = 'sell'
                        break;
                }
                this.$refs.tabControl1.currentIndex = index
                this.$refs.tabControl2.currentIndex = index
            },
            backClick() {
                //引用了scroll里面的methods,scrollTo三个参数为x，y，动画时间
                this.$refs.scroll.scrollTo(0, 0, 500)
            },
            //监听滚动位置显示BackTop
            contentScroll(position) {
                //是否显示返回顶部按钮
                this.isShowBackTop = -position.y > 1000
                //判断tab-control是否吸顶
                this.isTabFixed = (-position.y) > this.tabOffSetTop
            },
            //上拉加载更多
            loadMore() {
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad() {
                this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop
                // console.log(this.tabOffSetTop);
            },

            //网络请求相关方法
            getHomeMutidata() {
                getHomeMultidata().then(res => {
                    this.banners = res.data.banner.list,
                        this.recommends = res.data.recommend.list
                })
            },
            //请求商品数据
            getHomeGoods(type) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                    this.$refs.scroll.finishPullUp()

                })
            }
        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
        /* position: relative; */

    }

    .home-bar {
        background-color: hsl(350, 89%, 63%);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;

    }

    .tab-control {
        position: relative;
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

    /* .content {
        height: calc(100% - 93px);
        overflow: hidden;
        margin-top: 44px;
    } */
</style>