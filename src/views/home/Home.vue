<template>
    <div id="home">
        <nav-bar class="home-bar">
            <template #center>
                购物街
            </template>
        </nav-bar>

        <!-- <scroll class="content"> -->
        <home-swiper :banners='banners'></home-swiper>
        <home-recommend :recommends='recommends'></home-recommend>
        <feature></feature>
        <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="goods[currentType].list"></goods-list>
        <!-- </scroll> -->



    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import Scroll from 'components/common/scroll/Scroll'



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
                banners: [],
                recommends: [],
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
                currentType: 'pop'
            }
        },
        components: {
            NavBar,
            TabControl,
            Scroll,
            GoodsList,
            HomeSwiper,
            HomeRecommend,
            Feature
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
            //事件监听方法
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
                    // this.$refs.scroll.finishPullUp()

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
        position: sticky;
        top: 44px;
        /* z-index: 9; */
    }

    .content {
        overflow: hidden;

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