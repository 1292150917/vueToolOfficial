## Toast 轻提示

### 使用指南

```javascript
  import { mlToast } from 'vant';
```

#### 简单用法

```javascript
  mlToast({
    message: "提示信息",
    position: "middle",
    duration: 1000
  });
```
### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| message | 内容 | `string` | `-` |
| duration | 停留时间 | `Number` | `3000` |
| position | 位置，支持 top/bottom/middle | `string` | `middle` |
| icon | 成功或失败提示框 success/loading/fail/clear | `string` | `-` |
