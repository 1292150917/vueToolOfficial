<template>
    <div class="index">
        <div class="nav"></div>
        <div class="left">
            <ul>
                <p class="zhinan">开发指南</p>
                <p>组建</p>
                <li v-for="item in navMessage">{{item.name}}
                    <span>{{item.value}}</span>
                </li>
            </ul>
        </div>
        <div class="main">
            <h2>Button 按钮</h2>
            <h3>使用指南</h3>
            <pre>
                <code class="javascript">
    import { Button } from 'vant';
    Vue.use(Button);
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
    &ltvan-button type="default">默认按钮&lt/van-button&gt
    &ltvan-button type="primary">主要按钮&lt/van-button&gt
    &ltvan-button type="warning">警告按钮&lt/van-button&gt
    &ltvan-button type="danger">危险按钮&lt/van-button&gt
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
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                    </tr>
                    <tr>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                    </tr>
                    <tr>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                    </tr>
                    <tr>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                    </tr>
                </tbody>
            </table>
            <h3 class="name">Event</h3>
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
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                    </tr>
                    <tr>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                        <td>参数</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="right">
            <img src="https://mint-ui.github.io/docs/static/img/phone.5909f66.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                navMessage: [
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮" },
                    { name: "Button", router: "Button", value: "按钮1" },
                ]
            }
        },
        methods: {
        },
        created: function () {
        }
    }
</script>
<style scoped>
    thead{
        background: #f1f4f8;
        text-align: left;
    }
    th{
        font-weight: 300;
    }
    td{
        font-size: 13px;
    }
    table{
        width: 100%;
        border-collapse: collapse;
    }
    h2{
        margin-top: 40px;
    }
    h4{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .name{
        margin-bottom: 30px;
        margin-top: 70px;
    }
    tr{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #eee;
    }
    /* 内容是main */

    h2,
    h3 {
        font-weight: 500;
    }

    .index,
    .left {
        height: 100%;
    }

    .left p {
        font-weight: 800;
        color: #333;
    }

    .main {
        width: 53%;
        height: 100%;
        min-width: 427px;
        /* margin-left: 53px; */
        margin: 0 auto;
        position: relative;
    left: -100px;
    }

    .left {
        overflow: scroll;
        width: 180px;
        position: fixed;
        top: 60px;
    }

    .right {
        width: 320px;
        height: 640px;
        margin-right: 20px;
        position: fixed;
        right: 30px;
        top: 70px;
    }

    .right img {
        width: 100%;
        height: 100%;
    }

    .zhinan {
        padding-top: 25px;
    }

    .nav {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #eee;
    }

    ul>li {
        list-style: none;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        color: #333;
    }

    ul>li>span {
        color: #999;
    }

    ul {
        border-right: 1px solid #eee;
        min-height: 100%;
    }

    ul>li:hover {
        color: rgb(128, 158, 182);
    }
</style>