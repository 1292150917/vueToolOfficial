<template>
    <div style="width: 90%;margin: 0 auto;">
        <p class="title">文字提示</p>
        <button @click="go('提示信息')">轻提示</button>
        <button @click="go('这是一段很长很长很长很长很长很长很长很长的文字')">长文字提示</button>
        <p class="title">加载提示</p>
        <button @click="loading">加载提示</button>
        <p class="title">成功/失败提示</p>
        <button @click="success">成功提示</button>
        <button @click="fail">失败提示</button>
    </div>
</template>
<script>
import mlToast from "../vue-tool/packages/toast";
export default {
  name: "mlToast",
  data() {
    return {};
  },
  methods: {
    success(){
      mlToast({
        message: '成功',
        position: "middle",
        duration: 2000,
        icon: "success"
      });
    },
    loading(){
      mlToast({
        message: '加载中',
        position: "middle",
        duration: 2000,
        icon: "loading"
      });
    },
    fail(){
      mlToast({
        message: '失败',
        position: "middle",
        duration: 2000,
        icon: "fail"
      });
    },
    go(s) {
      mlToast({
        message: s,
        position: "middle",
        duration: 2000,
        icon: ""
      });
    }
  },
  components: {},
  mounted: function() {
    
  }
};
</script>
<style scoped>
.title{
    font-size: 14px;
    color: #999;
    margin-top: 14px;
    margin-bottom: 13px;
}
button{
  color: #323233;
    background-color: #fff;
    border: 1px solid #ebedf0;
    padding: 10px 21px 10px 21px;
}
</style>
