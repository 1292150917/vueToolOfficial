<template>
    <div style="margin-left: 16px;">
      <p class="title">消息提示</p>
      <button @click="go">消息提示</button>
      <button @click="go1">无标题提示</button>
      <p class="title">自定义按钮内容</p>
      <button @click="go2">更改取消/确认</button>
      <button @click="go3">删除取消</button>
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
        content: "点个赞吧",
        success: function(){
        
        }
      });
    },
    go3(){
      mlAlert({
        title:"提示",
        content: "点个赞吧",
        confirmButtonText:"yes",
        showCancelButton:false,
        success: function(){
        
        }
      });
    },
    go2(){
      mlAlert({
        title:"提示",
        content: "点个赞吧",
        cancelButtonText:"no",
        confirmButtonText:"yes",
        success: function(){
        
        }
      });
    }
  },
  components: {},
  mounted: function() {}
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
      border: 1px solid #3d7bd4;
    color: #3d7bd4;
    padding: 7px 14px 7px 14px;
    background: white;
}
</style>
