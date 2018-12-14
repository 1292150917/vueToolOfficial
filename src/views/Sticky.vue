<template>
    <div class="classList">
        <p class="name">上拉☞查看效果</p>
        <p v-for="(item,index) in 15" :key="index">{{item}}</p>
        <ml-sticky :top="40">
            <span>40</span>
        </ml-sticky>
        <p v-for="(item,index) in 15" :key="index + 100">{{item}}</p>
        <ml-sticky :top="150">
            <img src="http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg" alt="">
        </ml-sticky>
        <p>1</p>
        <p v-for="(item,index) in 15" :key="index + 1000">{{item}}</p>
        <ml-sticky :top="300">
            <span style="background: red">300</span>
        </ml-sticky>
        <p v-for="(item,index) in 15" :key="index + 2000">{{item}}</p>
    </div>
</template>

<script>
    export default {
        name: 'INavBar',
        props: {
        },
        methods: {
        }
    }
</script>
<style scoped>
    span {
        display: block;
        background: #000;
        color: white;
        width: 30%;
    }
    .name{
        text-align: center;
    }

    p {
        height: 40px;
    }
    img{
        width: 40%;
    }
</style>