<template>
    <div>
            <h2>Cell 轮播</h2>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { InfiniteScroll } from 'vue-tool';
                </code>
            </pre>
            <h3>代码演示</h3>
            <h4>显示默认输入</h4>
            <pre>
                 <code class="html">
    &ltul v-infinite-scroll="loadMore" infinite-scroll-disabled="10"&gt
         &ltli&gt1&lt/li&gt
         &ltli&gt1&lt/li&gt
         &ltli&gt1&lt/li&gt
    &lt/ul&gt
                    </code>
            </pre>
            <h3 class="name">API</h3>
            <table>
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>infinite-scroll-disabled</td>
                        <td>滚动的距离到浏览器底部的距离 和[infinite-scroll]同时使用则会是距离底部距离额外加上多少</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>only-once-teue</td>
                        <td>需要使用infinite-scroll-disabled以后禁止1px执行一次 如果需要可以更改为false</td>
                        <td>boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>self-adaption</td>
                        <td>自适应高度，到达使用元素元素最底部触发 默认是针对[infinite-scroll]绑定的元素</td>
                        <td>boolean</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
            <h3 class="name mar20">Event</h3>
            <table>
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>infinite-scroll</td>
                        <td>到底底部的返回值 callback</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {},
  mounted: function() {
    $("pre code").each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
};
</script>
<style>
thead {
  background: #f1f4f8;
  text-align: left;
}
th {
  font-weight: 300;
}
td {
  font-size: 13px;
}
.mar30 {
  margin-top: 30px;
}
.mar20 {
  margin-top: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
h2 {
  margin-top: 40px;
}
h4 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.name {
  margin-bottom: 30px;
}
tr {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
</style>
