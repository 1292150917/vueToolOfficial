<template>
    <div>
        <p>上拉☞底部自动加载</p>
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="10">
        <li v-for="item in indexs">{{item}}</li>
    </ul>
    </div>
</template>
<script>
import InfiniteScroll from "../vue-tool/packages/InfiniteScroll";
export default {
  name: "mlToast",
  data() {
    return {
      indexs: 20
    };
  },
  methods: {
    loadMore() {
      this.indexs += 10;
    },
    go() {}
  },
  components: {},
  mounted: function() {}
};
</script>
<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
li {
  height: 30px;
  line-height: 30px;
  border-top: 1px solid #eee;
}
p{
    text-align: center;
    font-size: 15px;
    color: #999;
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>
