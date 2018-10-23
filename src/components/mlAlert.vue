<template>
    <div>
            <h2>mlAert 弹框</h2>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { mlAert } from 'vant';
                </code>
            </pre>
            <h3>代码演示</h3>
            <h4>你也可以写成</h4>
            <pre>
              <code class="javascript">
     mlAlert('提示1','内容1').then(res=>{
        console.log(res)
     })
              </code>
            </pre>
            <h4>也可以写成</h4>
            <pre>
              <code class="javascript">
     mlAlert({
        title:"xxxx",
        content:xxx
     }).then(res=>{
       console.log(res)
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
                        <td>title</td>
                        <td>名字/标题</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>内容</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>showCancelButton</td>
                        <td>是否显示取消按钮</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                      <tr>
                        <td>showConfirmButton</td>
                        <td>是否显示确认按钮</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                         <tr>
                        <td>cancelButtonText</td>
                        <td>元素的字体大小</td>
                        <td>取消按钮内容</td>
                        <td>取消</td>
                    </tr>
                         <tr>
                        <td>confirmButtonText</td>
                        <td>确认按钮内容</td>
                        <td>String</td>
                        <td>确认</td>
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
                        <td>成功的回调</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>.then</td>
                        <td>成功的回调</td>
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
