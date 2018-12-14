<template>
    <div>
      <ml-button size="large" class="button" icon="back" type="primary">按钮</ml-button>
      <ml-button size="large" class="button" :plain="true" type="primary">幽灵按钮</ml-button>
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
<style>
.button{
  margin-top: 20px;
}
</style>
