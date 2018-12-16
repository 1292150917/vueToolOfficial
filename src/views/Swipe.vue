<template>
    <div>
      <p class="title">基本用法</p>
        <ml-swipe class="swipe" :touchable="true">
            <ml-swipe-item>
                <div class="s">
                    1
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div  class="ss">
                    2
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div class="sss">
                    3
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div class="ssss">
                    4
                </div>
            </ml-swipe-item>
        </ml-swipe>
        <p class="title">禁止手势滑动</p>
        <ml-swipe class="swipe" :indicators="false" :touchable="false">
            <ml-swipe-item>
                <div class="s">
                    1
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div  class="ss">
                    2
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div class="sss">
                    3
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div class="ssss">
                    4
                </div>
            </ml-swipe-item>
        </ml-swipe>
        <p class="title">自定义滑动时间</p>
        <ml-swipe class="swipe" :autoplay="1000" :touchable="false">
            <ml-swipe-item>
                <div class="s">
                    1
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div  class="ss">
                    2
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div class="sss">
                    3
                </div>
            </ml-swipe-item>
            <ml-swipe-item>
                <div class="ssss">
                    4
                </div>
            </ml-swipe-item>
        </ml-swipe>
    </div>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {
    go() {}
  },
  mounted: function() {}
};
</script>
<style scoped>
.title{
font-size: 14px;
    color: #999;
    margin-top: 14px;
    margin-bottom: 13px;
    text-indent: 10px;
}
.swipe{
    cursor:pointer;
}
.s {
  height: 300px;
  color: white;
  background: #eee;
}
.ss {
  height: 300px;
  background: rgb(173, 61, 61);
  color: white;
}
.sss {
  height: 300px;
  background: rgb(90, 8, 8);
  color: white;
}
.ssss {
  height: 300px;
  background: rgb(8, 20, 189);
  color: white;
}
</style>
