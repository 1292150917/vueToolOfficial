<template>
    <div>
            <h2>Loading 加载</h2>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { Loading } from 'vue-tool';
                </code>
            </pre>
            <h3>代码演示</h3>
            <h4>显示默认输入</h4>
            <pre>
                 <code class="html">
    &ltml-loading icon="circleXuan">&lt/ml-loading&gt
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
                        <td>color</td>
                        <td>颜色</td>
                        <td>String</td>
                        <td>#c9c9c9</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>参考文档  <a href="https://loading.io/">icon图标</a> </td>
                        <td>String</td>
                        <td>circular</td>
                    </tr>
                    <tr>
                        <td>sise</td>
                        <td>大小</td>
                        <td>String</td>
                        <td>30px</td>
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
