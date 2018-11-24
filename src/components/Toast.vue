<template>
    <div>
            <h2>Toast 轻提示</h2>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { Toast } from 'vue-tool';
                </code>
            </pre>
            <h3>代码演示</h3>
            <h4>显示默认输入</h4>
            <pre>
                 <code class="javascript">
      mlToast({
        message: "提示信息",
        position:"top",
        duration:1000,
        icon:''
    })
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
                        <td>duration</td>
                        <td>时间</td>
                        <td>Number</td>
                        <td>3000</td>
                    </tr>
                    <tr>
                        <td>touchable</td>
                        <td>position</td>
                        <td>位置，支持 top/bottom/middle</td>
                        <td>middle</td>
                    </tr>
                    <tr>
                        <td>message</td>
                        <td>内容</td>
                        <td>boolean</td>
                        <td>-</td>
                    </tr>
                      <tr>
                        <td>icon</td>
                        <td>成功或失败提示框  success/loading/fail/clear</td>
                        <td>boolean</td>
                        <td>-</td>
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
                        <td>success</td>
                        <td>消失以后的回调</td>
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
