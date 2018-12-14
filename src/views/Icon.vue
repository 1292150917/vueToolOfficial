<template>
    <div>
        <ml-icon name="home"></ml-icon>
        <p>自定义大小</p>
        <ml-icon name="home" size="16px"></ml-icon>
        <ml-icon name="home" size="32px"></ml-icon>
        <ml-icon name="home" size="48px"></ml-icon>
        <p>自定义颜色</p>
        <ml-icon name="home" color="#49b683"></ml-icon>
        <ml-icon name="home" color="#ab97c3"></ml-icon>
    </div>
</template>
<script>
    export default {
        name: "Icon",
        data() {
            return {
                indexs: 20
            };
        },
        methods: {
            loadMore() {
                this.indexs += 10;
            },
            go() { }
        },
        components: {},
        mounted: function () { }
    };
</script>
<style scoped>
    ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    li {
        height: 30px;
        line-height: 30px;
        border-top: 1px solid #eee;
    }

    p {
        text-align: center;
        font-size: 15px;
        color: #999;
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>