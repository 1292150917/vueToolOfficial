<template>
    <div>
            <h2>Swipe 轮播</h2>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { swipe } from 'vant';
                </code>
            </pre>
            <h3>代码演示</h3>
            <h4>显示默认输入</h4>
            <pre>
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
                        <td>position</td>
                        <td>轮播位置 支持left/right</td>
                        <td>String</td>
                        <td>left</td>
                    </tr>
                    <tr>
                        <td>touchable</td>
                        <td>是否可以通过手势滑动</td>
                        <td>boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>indicators</td>
                        <td>是否显示底部.... 指示器</td>
                        <td>boolean</td>
                        <td>true</td>
                    </tr>
                      <tr>
                        <td>autoplay</td>
                        <td>自动轮播时间</td>
                        <td>Number</td>
                        <td>3000</td>
                    </tr>
                         <tr>
                        <td>duration</td>
                        <td>动画时间</td>
                        <td>number</td>
                        <td>500</td>
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
                        <td>autochange</td>
                        <td>滚动的位置返回的索引值</td>
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
    hljs.initHighlightingOnLoad();
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
.mar30{
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
