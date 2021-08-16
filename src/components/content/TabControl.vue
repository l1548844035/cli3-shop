<template>
    <div class="tab-control">
        <div v-for='(item,index) in title' @click='itemClick(index)' class="tab-control-item"
             :class="{active:index===currentIndex}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        width: 100%;
        text-align: center;
        line-height: 44px;
        height: 44px;
        background-color: #fff;
    }

    .tab-control-item {
        flex: 1;
    }

    .tab-control-item span {
        padding: 5px;
    }

    .active {
        color: rgb(252, 129, 150);
    }

    .active span {
        border-bottom: 2px solid rgb(252, 129, 150);
    }
</style>