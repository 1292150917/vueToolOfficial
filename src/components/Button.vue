<template>
    <div>
            <h2>Button 按钮</h2>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { Button } from 'vant';
                </code>
            </pre>
            <h3>代码演示</h3>
            <h4>按钮类型</h4>
            <p>支持
                <span>default</span>、
                <span>primary</span>、
                <span>warning</span>、
                <span>danger</span> 四种类型，默认为
                <span>default</span>
            </p>
            <pre>
                    <code class="html">
    &ltmt-button size="large" icon="back" type="primary">按钮&lt/mt-button&gt
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
                        <td>type</td>
                        <td>按钮类型，可选值为 primary warning danger</td>
                        <td>String</td>
                        <td>primary</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>禁用按钮</td>
                        <td>boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>plain</td>
                        <td>幽灵按钮</td>
                        <td>boolean</td>
                        <td>false</td>
                    </tr>
                      <tr>
                        <td>icon</td>
                        <td>图标位置</td>
                        <td>String</td>
                        <td>back</td>
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
                        <td>click</td>
                        <td>点击按钮触发的事件</td>
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
.mar30 {
  margin-top: 30px;
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
