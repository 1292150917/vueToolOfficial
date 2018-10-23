<template>
    <div>
            <h2>Cell 单元格</h2>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { cell } from 'vant';
                </code>
            </pre>
            <h3>代码演示</h3>
            <h4>显示默认输入</h4>
            <pre>
              <code>
    &ltml-cell title="标题" icon="icon-arrowright" seat="left" label="描述信息" value="这是内容"> &lt/ml-cell&gt
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
                        <td>value</td>
                        <td>内容</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>指定图标class,可根据<a href="#">此位置</a>查看支持图标</td>
                        <td>String</td>
                        <td>icon-arrowright</td>
                    </tr>
                      <tr>
                        <td>height</td>
                        <td>元素的高度</td>
                        <td>String</td>
                        <td>100px</td>
                    </tr>
                         <tr>
                        <td>sise</td>
                        <td>元素的字体大小</td>
                        <td>String</td>
                        <td>12px</td>
                    </tr>
                         <tr>
                        <td>seat</td>
                        <td>图标位置 支持left right</td>
                        <td>String</td>
                        <td>right</td>
                    </tr>
                         <tr>
                        <td>label</td>
                        <td>描述字体</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                         <tr>
                        <td>style</td>
                        <td>根据key自动添加style 支持 styleTitle  styleValue</td>
                        <td>String</td>
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
