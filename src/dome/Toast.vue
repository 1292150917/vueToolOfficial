<template>
    <div>
        <ml-button @click="go()">轻提示</ml-button>
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
    go() {
      mlToast({
        message: "提示信息",
        position: "middle",
        duration: 1000,
        icon: ""
      });
    }
  },
  components: {},
  mounted: function() {}
};
</script>
<style>
</style>
