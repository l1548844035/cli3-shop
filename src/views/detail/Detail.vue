<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"></detail-nav-bar>
        <scroll class="content">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
            <detail-param-info :param-info="paramInfo"></detail-param-info>
            <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
        </scroll>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import DetailParamInfo from './childComps/DetailParamInfo'
    import DetailCommentInfo from './childComps/DetailCommentInfo'
    import Scroll from 'components/common/scroll/Scroll'
    import {
        getDetail,
        Goods,
        Shop,
        GoodsParam
    } from 'network/detail'
    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            Scroll
        },
        created() {
            //保存iid
            this.iid = this.$route.params.iid
            //请求detail数据
            getDetail(this.iid).then(res => {
                const data = res.result
                //1.请求轮播图数据
                this.topImages = res.result.itemInfo.topImages
                //2.请求商品标题等数据
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                // console.log(this.goods);
                //3.请求店铺信息
                this.shop = new Shop(data.shopInfo)
                // console.log(this.shop);
                //4.请求具体商品效果图
                this.detailInfo = data.detailInfo
                //5.请求参数详情数据
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
                //6.判断是否有评论决定传入参数
                if (data.rate.cRate !== 0) {
                    this.commentInfo = data.rate.list[0]
                }
            })
        }
    }
</script>

<style scoped>
    #detail {
        position: relative;
        background-color: #fff;
        z-index: 9;
        height: 100vh;
    }

    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }

    .content {
        height: calc(100% - 44px);
    }
</style>