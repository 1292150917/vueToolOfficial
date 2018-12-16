<template>
  <div>
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