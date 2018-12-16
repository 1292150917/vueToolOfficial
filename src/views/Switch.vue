<template>
  <div style="width: 90%;margin: 0 auto;">
    <p class="title">基础用法</p>
    <ml-switch v-model="SwitchType"></ml-switch>
  </div>
</template>
<script >
  export default {
  name: "mlswitch",
  data() {
    return {
      SwitchType:false
    };
  },
  components: {},
  created: function() {
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
</style>