<template>
    <div class="toast" v-show="show">
        <div>{{msg}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: ''
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        color: #fff;
        background-color: rgba(0, 0, 0, .75);
    }
</style>