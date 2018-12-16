## Popup 弹出层

### 使用指南

```javascript
  import { Popup } from 'vant';
```
### 代码演示

#### 基础用法

`popup`默认从中间弹出,暂未支持滑动效果，仅有一个位置显示！

```html
<ml-popup v-model="show">弹框</ml-popup>
```
#### 弹出位置

通过`position`属性设置 Popup 弹出位置

```html
<ml-popup v-model="show" position="top">
   <div class="div1">弹框</div>
</ml-popup>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| position | 位置可选值为 top bottom right left | `String` | `center` |