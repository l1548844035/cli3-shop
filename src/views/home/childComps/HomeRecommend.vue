<template>
    <div class="recommend">
        <div v-for='item in recommends' class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            recommends: {
                type: Array,
                default () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        padding: 10px 0 10px;
        font-size: 14px;
        border-bottom: 8px solid #eee;
    }

    .recommend-item {
        flex: 1;
    }

    .recommend-item img {
        width: 65%;
        height: 65%;
        margin-bottom: 10px;
    }
</style>