
<p align=center>
    <a href="https://1292150917.github.io/vueToolOfficial/dist/index.html/#/brief"><img src="static/favicon.png"/></a>
</p>
<p align=center>
	<b size=5 color=#7FFFD4 face="微软雅黑" align=center>
		一套收集各式各样、偶尔维护的UI库, mintUi,Vant的设计
	</b>
</p>
<p align=center>
	<b size=5 color=#7FFFD4 face="微软雅黑" align=center>
		为什么现在又那么多开源的UI框架，我为什么又要在写一套！下面我来解释一下
	</b>
</p>

> 对自己能力的提升！

> 想拥有一个自己的UI框架，现在的UI框架太散落，总是找来找去的！

> 想了解一下webpack以及各种loader的打包机制！

> 就是想装B一下！ 嗯嗯 就这个

##

## 快速上手

### 脚手架

推荐使用 Vue 官方提供的脚手架 Vue Cli 3 创建项目

### 方法使用说明

此方法提供各种转换方法！也是个人项目中经常使用到的！希望对你有帮助！

### 安装

#### NPM

```javascript
npm i vue-tool
```

#### YARN

```javascript
yarn add vue-tool
```

#### CDN

暂不提供第三方CDN引入

### 引入组件


方式一. 使用 `babel-plugin-import` (推荐，方法来自vant，但是引入方式是一致的！)

`babel-plugin-import ` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```javascript
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```
##### 
 
```javascript
// .babelrc 中配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "vue-tool",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vue-tool',
      libraryDirectory: 'es',
      style: true
    }, 'vue-tool']
  ]
};
```

接着你可以在代码中直接引入 vue-tool 组件，插件会自动将代码转化为方式二中的按需引入形式

```javascript

import { Button } from 'vue-tool';

```

方式二. 导入所有组件

```javascript

import Vue from 'vue';
import vueTool from 'vue-tool';

Vue.use(vueTool);

```

#####

`注意：配置 babel-plugin-import 插件后将不允许导入所有组件`

### Rem 适配

vue-tool 中的样式默认使用px作为单位，如果需要使用rem单位，推荐使用以下两个工具

`postcss-pxtorem` 是一款 `postcss` 插件，用于将单位转化为 rem
`px2rem` 把px转换rem
也可以装对应的loader