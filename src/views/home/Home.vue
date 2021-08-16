<template>
    <div id="home">
        <nav-bar class="home-bar">
            <template #center>
                购物街
            </template>
        </nav-bar>

        <home-swiper :banners='banners'></home-swiper>
        <home-recommend :recommends='recommends'></home-recommend>
        <feature></feature>
        <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>

        <ul>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
            <li>ll</li>
        </ul>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/TabControl'

    import HomeSwiper from './childComps/HomeSwiper'
    import HomeRecommend from './childComps/HomeRecommend'
    import Feature from './childComps/Feature'
    import {
        getHomeMultidata
    } from 'network/home'

    export default {
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        components: {
            NavBar,
            TabControl,
            HomeSwiper,
            HomeRecommend,
            Feature
        },
        created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list,
                    this.recommends = res.data.recommend.list
            })
        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    .home-bar {
        background-color: hsl(350, 89%, 63%);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
        width: 100%;
    }

    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>