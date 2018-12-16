<template>
    <div style="background: white;margin: 0;">
        <ml-icon name="home"></ml-icon>
        <p>自定义大小</p>
        <ml-icon name="home" size="16px"></ml-icon>
        <ml-icon name="heart" size="32px"></ml-icon>
        <ml-icon name="hand-peace-o" size="48px"></ml-icon>
        <p>自定义颜色</p>
        <ml-icon name="home" color="#49b683"></ml-icon>
        <ml-icon name="home" color="#ab97c3"></ml-icon>
        <p class="title">更多图标(颜色可自定义)</p>
        <div  v-for="(item,index) in obj" :key="index">
          <ml-icon :name="item" color="#ab97c3"></ml-icon>
          <span>{{item}}</span>
        </div>
        <p class="title">查看更多可看( <a href="http://fontawesome.dashgame.com/">Font Awesome 4.7.0</a> )</p>
    </div>
</template>
<script>
    export default {
        name: "Icon",
        data() {
            return {
                indexs: 20,
                obj:['check','success','frown-o','check-circle','calendar','exclamation','exclamation-circle','close','commenting-o','comments','dot-circle-o','clock-o','flash','frown-o','handshake-o','plane','plug','hand-pointer-o','hand-rock-o','wifi','users','wheelchair','vcard-o','star-o','sort-desc','sort-up','search-minus','plus-circle','plus-square','history','recycle','star','star-half-o','thumbs-up','thumbs-down','user-o','unlock-alt','user-circle','unsorted','user-times','video-camera','volume-up','search-plus','transgender','genderless','neuter','mars','mercury','venus','mars','mars-stroke-v','file','file-excel-o','file-text-o','file-audio-o','file-o','spinner','cog','refresh','check-square-o','plus-square-o','square','square-o','minus-square-o','check-square-o','check-square','angle-down','angle-left','angle-double-left','angle-double-down','angle-up','angle-right','chevron-down','chevron-left','chevron-right','chevron-up','arrows-alt','heart-o']
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
div{
    margin-right: 9px;
    margin-top: 14px;text-align: center;
}
div span{

    color: #999;
}
.title{

font-size: 14px;
    color: #999;
    margin-top: 14px;
    margin-bottom: 13px;
    text-indent: 10px;
}
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