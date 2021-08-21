<template>
    <div v-if="Object.keys(goods).length !==0">
        <div>{{goods.title}}</div>
        <div class="info-price">
            <span class="new-price">{{goods.newPrice}}</span>
            <span class="old-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span class="info-other-item">{{goods.columns[0]}}</span>
            <span class="info-other-item center">{{goods.columns[1]}}</span>
            <span class="info-other-item right">{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-services">
            <span v-for="index in goods.services.length-1" :key="index" class="info-services-index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            goods: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        name: 'DetailBaseInfo',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .info-price {
        margin-top: 10px;
    }

    .new-price {
        color: rgb(248, 102, 126);
    }

    .old-price {
        color: darkgray;
        font-size: 12px;
        margin-left: 10px;
        text-decoration: line-through;
    }

    .discount {
        margin-left: 4px;
        background-color: rgb(248, 102, 126);
        color: #fff;
        border: 2px solid;
        border-radius: 25px;
        font-size: 12px;
    }

    .info-other {
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 20px;
        display: flex;
        font-size: 12px;
        color: darkgray;
    }

    .info-other-item {
        flex: 1;
        /* width: 100%; */
    }

    .center {
        text-align: center;
    }

    .right {
        text-align: right;
    }

    .info-services {
        margin-top: 20px;
        font-size: 14px;
        color: rgb(110, 109, 109);
        padding-left: 5px;
        display: flex;
    }

    .info-services img {
        width: 10%;
    }

    .info-services-index {
        flex: 1;
    }
</style>