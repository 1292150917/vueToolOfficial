<template>
    <div>
        <img v-for="item in message" v-ml-lazy="item" alt="">
    </div>
</template>
<script>
import mlLazy from "../vue-tool/packages/ml-alert";
export default {
  name: "mlLazy",
  data() {
    return {
      message: [
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg",
        "http://goss.veer.com/creative/vcg/veer/800water/veer-146897995.jpg"
      ]
    };
  },
  methods: {},
  components: {},
  mounted: function() {}
};
</script>
<style>
img {
  width: 100%;
  height: 200px;
}
</style>
