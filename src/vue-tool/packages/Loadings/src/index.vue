<template>
    <div v-html="spiner">
    </div>
</template>
<script>
import min from './index.js'
export default {
  name: "mlLoading",
  mixins:[min],
  props:[
  'icon'
  ],
  data() {
    return {
      indexs: 20
    };
  },
  methods: {
  },
  components: {},
  mounted: function() {
  }
};
</script>
<style scoped>
</style>
