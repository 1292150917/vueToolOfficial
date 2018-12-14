<template>
    <div>
        <ml-button @click="go()">带取消按钮点击</ml-button>
        <ml-button :plain="true" @click="go1()">自定义内容</ml-button>
    </div>
</template>
<script>
import mlAlert from "../vue-tool/packages/mlAlert";
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
  components: {},
  mounted: function() {}
};
</script>
<style>
</style>
