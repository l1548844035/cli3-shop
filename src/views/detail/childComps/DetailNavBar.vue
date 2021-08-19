<template>
    <div>
        <nav-bar>
            <template #left>
                <div class="back" @click="back">
                    <img src="~img/common/back.svg" alt="">
                </div>
            </template>
            <template #center>
                <div class="title">
                    <div @click="itemClick(index)" class="title-item" v-for="(item,index) in titles"
                         :class="{active:index===currentIndex}">
                        <span>{{item}}</span>
                    </div>
                </div>

            </template>


        </nav-bar>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        components: {
            NavBar
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index
            },
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
    }

    .title-item {
        flex: 1;
    }

    .active {
        color: rgb(245, 106, 129);
    }

    .active span {
        border-bottom: 3px solid rgb(245, 106, 129);
        padding-bottom: 7px;
    }

    .back img {
        margin-top: 11px;
    }
</style>