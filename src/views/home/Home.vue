<template>
    <div id="home">
        <nav-bar class="home-bar">
            <template #center>
                购物街
            </template>
        </nav-bar>

        <home-swiper :banners=banners></home-swiper>

    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childComps/HomeSwiper'
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
            HomeSwiper
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
    .home-bar {
        background-color: hsl(350, 89%, 63%);
        color: #fff;
    }
</style>