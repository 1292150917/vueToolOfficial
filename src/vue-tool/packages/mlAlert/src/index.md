## mlAlert 提示框/弹框

### 使用指南

```javascript
  import { mlAlert } from 'vue-tool';
```
### 代码演示

#### 消息提示

```javascript
  mlAlert("标题", "弹框内容").then(() => {
    // on close
  });

  mlAlert({
    title: "提示",
    content: "点个赞吧",
    success: function(){
     // on close
    }
  });
```

#### 自定义按钮内容

```javascript
  mlAlert({
    title:"提示",
    content: "点个赞吧",
    cancelButtonText:"no",
    confirmButtonText:"yes",
    success: function(){
      // on close
    }
  });

  mlAlert({
    title:"提示",
    content: "点个赞吧",
    confirmButtonText:"yes",
    showCancelButton:false,
    success: function(){
      // on close
    }
  });
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | title名字 | `string` | `-` |
| content | 内容 | `string` | `-` |
| showCancelButton | 是否显示取消按钮 | `boolean` | `true` |
| showConfirmButton | 是否显示确认按钮 | `boolean` | `true` |
| cancelButtonText | 取消按钮内容 | `string` | `true` |
| confirmButtonText | 确认按钮内容 | `string` | `true` |