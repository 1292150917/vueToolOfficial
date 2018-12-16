<template>
    <div v-if="icon !== 'loading'" :class="'ml-toast ml-toast-' + position">
        <ml-icon :name="icon" size="50px" color="#fff"></ml-icon>
        <div>{{message}}</div>
    </div>
    <div v-else class="loading">
        <div>
            <ml-loading icon="ripple"></ml-loading>
            <div>
                {{message || '加载中...'}} 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
            icon:String,
            message: String
        }
    };
</script>
<style scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);display: flex;
    justify-content: center;
     flex-direction: column;
    align-items: center;
}
.loading div{    width: 100%;
    color: white;
    position: relative;
    top: -13px;
}
div{
    text-align: center;;
}
    .ml-toast {    
        width: 80px;
        height: 80px;
        font-size: 16px;
        padding: 12px;
        color: white;
        display: inline-block;
        background: rgba(0, 0, 0, .6);
        position: fixed;
        border-radius: 5px;
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