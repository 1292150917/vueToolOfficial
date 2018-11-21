<template>
    <div>
        <button @click="go()">带取消按钮点击</button>
        <button @click="go1()">自定义内容</button>
    </div>
</template>
<script>
import { mlAlert } from "vue-tool";
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {
    go() {
      mlAlert("提示1", "内容1").then(res => {
        console.log(res);
      });
    },
    go1() {
      mlAlert({
        title: "提示",
        content: "点个赞吧",
        cancelButtonText: "No",
        confirmButtonText: "Yes"
      });
    }
  },
  mounted: function() {}
};
</script>
<style>
</style>
