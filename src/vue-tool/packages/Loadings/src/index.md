## Loading 加载

### 使用指南

```javascript
  import { Loading } from 'vant';
  Vue.use(Loading)
```
>部分图标资源均来自网络/第三方/网友分享，图标均为SVG,CSS,如果侵权请联系删除！
### 代码演示

#### 基础用法

```html
<ml-loading icon="rolling"></ml-loading>
```
#### 自定义大小

```html
<ml-loading icon="rolling" size="100"></ml-loading>
```
#### 自定义颜色

```html
<ml-loading icon="rolling" color="#49b683" size="100"></ml-loading>
```
### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| icon | 图标名称 | `string` | `-` |
| color | 图标颜色 | `string` | `-` |
| size | 图标大小，如 20px 2em | `string` | `-` |