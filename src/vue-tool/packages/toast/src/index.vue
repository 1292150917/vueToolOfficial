<template>
    <div :class="'ml-toast ml-toast-' + position">
        {{message}}
    </div>
</template>

<script>
    /**
* mt-header
* @module components/button
* @desc 按钮
* @param {string} [duration=3000] - 时间
* @param {boolean} [position=middle] - 位置，支持 top/bottom/middle
* @param {boolean} [message=xxxx] - 内容
* @param {boolean} [icon=xxxx] - 成功或失败提示框  success/loading/fail/clear
* @example
    mlToast({
        message: "提示信息",
        position:"top",
        duration:1000,
        icon:''
    })
*/
    export default {
        name: "ml-toast",
        data() {
            return {

            }
        },
        methods: {
        },
        props: {
            duration: Number,
            position: {
                default: 'middle',
                type: String
            },
            message: String
        }
    };
</script>
<style>
    .ml-toast {
        padding: 7px 8px 8px 8px;
        color: white;
        display: inline-block;
        background: rgba(0, 0, 0, .6);
        position: fixed;
        font-size: 12px;
        border-radius: 5px;
        text-align: center;
        left: 50%;
        -webkit-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0);
    }

    .ml-toast-middle {
        top: 50%;
    }

    .ml-toast-bottom {
        top: 90%;
    }

    .ml-toast-top {
        top: 8%;
    }
</style>