<template>
    <div>
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
<style>
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
