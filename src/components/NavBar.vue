<template>
    <div>
            <h2>navBar 导航栏</h2>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { navBar } from 'vue-tool';
                </code>
            </pre>
            <h3>代码演示</h3>
            <pre>
              <code class="html">
     &ltvan-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
     />
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
                        <td>title</td>
                        <td>标题 </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>left-text</td>
                        <td>左侧文案 </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>right-text</td>
                        <td>右侧文案</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>left-arrow</td>
                        <td>是否显示左侧箭头 </td>
                        <td>Boolean</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <h3 class="name">Slot</h3>
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>title</td>
                        <td>自定义标题</td>
                    </tr>
                    <tr>
                        <td>left</td>
                        <td>自定义左侧区域内容 </td>
                    </tr>
                    <tr>
                        <td>right</td>
                        <td>自定义右侧区域内容 </td>
                    </tr>
                </tbody>
            </table>
            <h3 class="name">Event</h3>
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>click-left</td>
                        <td>点击左侧按钮时触发</td>
                        <td> - </td>
                    </tr>
                    <tr>
                        <td>click-right</td>
                        <td>点击右侧按钮时触发 </td>
                        <td> - </td>
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
