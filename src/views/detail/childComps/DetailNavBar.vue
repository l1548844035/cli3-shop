<template>
    <div>
        <nav-bar id="top">
            <template #left>
                <div class="back" @click="back">
                    <img src="~img/common/houtui.png" alt="">

                </div>
            </template>
            <template #center>
                <div class="title">
                    <div class="title-item" v-for="(item,index) in titles" :key="index"
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
        props: {
            currentIndex: 0
        },
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐']

            }
        },
        components: {
            NavBar
        },
        methods: {
            itemClick(index) {
                // console.log(this.currentIndex);
                this.currentIndex = index
                this.$emit('navClick', index)
            },
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    #top {
        background-color: darkgrey;
    }

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