## Cell 单元格

### 使用指南

```javascript
import { Cell } from 'vue-tool';

Vue.use(Cell);
```
### 代码演示

#### 基础用法

```html
<ml-cell title="标题" value="这是内容"></ml-cell>
<ml-cell title="标题" seat="left" label="描述信息" value="这是内容"></ml-cell>
```

#### 高级用法

```html
<ml-cell title="标题" seat="left" is-link label="描述信息" value="这是内容"></ml-cell>
```
### API 

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 名字/标题 | `string` | `-` |
| value | 后缀显示内容 | `string` | `-` |
| plain | 幽灵按钮 | `string` | `false` |
| icon | class名字 图片显示class（案例图标库） | `string` | `icon-arrowright` |
| height | 元素的高度 | `string` | `45px` |
| sise | 元素的字体大小 | `string` | `12px` |
| seat | 图标位置 支持left/right | `string` | `right` |
| label | 描述文字 | `string` | `-` |
| style | 根据key自动添加style 支持 styleTitle  styleValue | `string` | `right` |
