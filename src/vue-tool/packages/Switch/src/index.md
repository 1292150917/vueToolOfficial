## Switch 开关

### 使用指南

```javascript
  import { Switch } from 'vant';

  Vue.use(Switch);
```
### 代码演示

#### 基础用法


```html
<ml-switch v-model="checked"></ml-switch>
```
```javascript
 export default {
   data() {
     return {
       checked: true
     };
   },
 }; 
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 开关选中状态 | `Boolean` | `false` |