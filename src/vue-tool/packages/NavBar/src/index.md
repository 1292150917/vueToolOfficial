## mlAlert 导航栏

### 使用指南

```javascript
  import { NavBar } from 'vue-tool';
```
### 代码演示

#### 基础用法

注意:`left-arrow="true"`为显示左箭头！
```html
<nav-bar 
  left-text="左侧" 
  @click-left="onClickLeft" 
  @click-right="onClickRight" 
  title="标题" 
  right-text="按钮" 
  :left-arrow="true"
/>
```
#### 回调方法

```javascript
export default {
  methods: {
    onClickLeft() {
      alert('返回')
    },
    onClickRight() {
      alert('按钮')
    }
  }
}
```

#### 高级用法

通过插槽`slot`控制左右按钮,支持`title/left/right` 可现实对应的位置！

```html
<nav-bar left-text="左侧" title="标题" :left-arrow="true">
   <ml-icon name="home" slot="right" size="18px" color="#ab97c3"></ml-icon>
</nav-bar>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 标题 | `string` | `-` |
| left-text | 左侧文案 | `string` | `-` |
| right-text | 右侧文案 | `string` | `-` |
| left-arrow | 是否显示左侧箭头 | `Boolean` | `false` |

### Slot

| 参数 | 说明 |
|------|------|
| title | 自定义标题 |
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Event

| 参数 | 说明 | 参数|
|------|------|------|
| click-left | 点击左侧按钮时触发 |  |
| click-right | 点击右侧按钮时触发 |  |