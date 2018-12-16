<template>
    <div>
      <p class="title">基础用法</p>
      <ml-cell title="标题" value="这是内容"></ml-cell>
      <ml-cell title="标题" seat="left" label="描述信息" value="这是内容"></ml-cell>
      <p class="title">单元格大小</p>
      <ml-cell title="标题" value="这是内容" height="50px"></ml-cell> 
      <ml-cell title="标题" seat="left" label="描述信息" value="这是内容" height="50px"></ml-cell>
    </div>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {},
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
    text-indent: 10px;
}
</style>
