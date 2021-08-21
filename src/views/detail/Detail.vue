<template>
    <div>
        <detail-nav-bar></detail-nav-bar>

        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import {
        getDetail,
        Goods,
        Shop
    } from 'network/detail'
    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
        },
        created() {
            //保存iid
            this.iid = this.$route.params.iid
            //请求detail数据
            getDetail(this.iid).then(res => {
                const data = res.result
                this.topImages = res.result.itemInfo.topImages
                //请求商品标题等数据
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                // console.log(this.goods);
                //请求店铺信息
                this.shop = new Shop(data.shopInfo)
                console.log(this.shop);
            })
        }
    }
</script>

<style scoped>

</style>