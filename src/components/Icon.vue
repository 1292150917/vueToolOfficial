<template>
    <div>
            <h2>icon 图标</h2>
            <p>图标资源来自于 <a href="https://fontawesome.com/v4.7.0/">Font Awesome 4.7.0</a>，兼容官方写法，如果你只是想简单使用某个图标，可以使用这里提供的Icon组件，也许能省下一些你写类名的时间</p>
            <h3 class="mar30">使用指南</h3>
            <pre>
                <code class="javascript">
    import { icon } from 'vue-tool';
                </code>
            </pre>
            <h3>代码演示</h3>
            <h4>显示默认输入</h4>
            <pre>
              <code>
    &lti-icon name="home" size="16px">&lt/i-icon&gt
    &lti-icon name="home" size="32px">&lt/i-icon&gt
    &lti-icon name="home" size="48px">&lt/i-icon&gt
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
                        <td>name</td>
                        <td>图标名称</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>图标大小</td>
                        <td>String</td>
                        <td>inherit</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>图标颜色</td>
                        <td>String</td>
                        <td>inherit</td>
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
</style>
