<template>
    <div>
        <h2>Sticky 粘贴定位</h2>
        <h3 class="mar30">使用指南</h3>
        <pre>
                    <code class="javascript">
        import { Sticky } from 'vue-tool';
                    </code>
                </pre>
        <h3>代码演示</h3>
        <pre>
                  <code class="html">
        &ltml-sticky :top="300">
            &ltspan style="background: red">300&lt/span&gt
        &lt/ml-sticky&gt
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
                    <td>top</td>
                    <td>距浏览器顶部的距离（单位为px） </td>
                    <td>String | Number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>z-index</td>
                    <td>原生 z-index 属性 </td>
                    <td>String | Number</td>
                    <td>1</td>
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
        mounted: function () {
            $("pre code").each(function (i, block) {
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