## mlLazy 粘贴定位

常用来实现吸顶效果，如果浏览器支持sticky定位，则使用原生的，否则会模拟实现，但可能与原生有些许差别

### 使用指南

```javascript
  import { Sticky } from 'vant';

  Vue.use(sticky);
```
### 代码演示



```html
<ml-sticky :top="40">
    <span>40</span>
</ml-sticky>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| top | 距浏览器顶部的距离（单位为px） | `String | Number` | `0` |
| z-index | 原生 z-index 属性 | `String | Number` | `1` |
