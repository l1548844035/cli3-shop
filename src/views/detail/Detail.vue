<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @navClick="navClick" :current-index="currentIndex"></detail-nav-bar>

        <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
            <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
            <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
            <goods-list ref="recommends" :goods="recommends"></goods-list>
        </scroll>
        <detail-bottom-bar @addToCart="addCart" class="bottom-bar"></detail-bottom-bar>
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
    import DetailBottomBar from './childComps/DetailBottomBar'

    import Scroll from 'components/common/scroll/Scroll'
    import GoodsList from 'components/content/goods/GoodsList'
    import {
        getDetail,
        getRecommend,
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
                recommends: [],
                themeTopY: [],
                currentIndex: 0
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
            Scroll,
            GoodsList,
            DetailBottomBar,
        },
        created() {
            //获取iid
            this.iid = this.$route.params.iid
            //请求detail数据
            getDetail(this.iid).then(res => {
                //检查是否传入detail详细数据
                // console.log(res);
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
                //获取不同标题对应内容的位置
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.themeTopY = []
                        this.themeTopY.push(0)
                        this.themeTopY.push(this.$refs.param.$el.offsetTop)
                        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
                        this.themeTopY.push(this.$refs.recommends.$el.offsetTop)
                        this.themeTopY.push(Number.MAX_VALUE)
                        // console.log(this.themeTopY);
                    })
                }, 1000);


            })
            getRecommend().then(res => {
                // console.log(res);
                this.recommends = res.data.list

            })
        },
        methods: {
            navClick(index) {
                this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200)
            },
            contentScroll(position) {
                // console.log(position);
                this.listenScroll(-position.y)
            },
            listenScroll(position) {
                let length = this.themeTopY.length
                for (let i = 0; i < length; i++) {
                    let iPos = this.themeTopY[i];
                    if (position >= iPos && position < this.themeTopY[i + 1]) {
                        if (this.currentIndex !== i) {
                            this.currentIndex = i;
                        }
                        break;
                    }
                }
            },
            addCart() {
                //1.拿到购物车需要展示的信息
                const product = {}
                product.iid = this.iid;
                product.image = this.topImages[0];
                product.desc = this.goods.desc;
                product.title = this.goods.title;
                product.price = this.goods.realPrice;
                // console.log(product);
                //2.将商品添加入购物车
                this.$store.dispatch('addToCart', product)
            }
        },
        mounted() {

        },
        updated() {

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
        overflow: hidden;
        /* height: 100vh; */
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>