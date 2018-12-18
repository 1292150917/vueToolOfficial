## Icon 图标

### 使用指南

```javascript
  import { Icon } from 'vue-tool';
  Vue.use(Icon)
```
>图标资源来自于[Font Awesome 4.7.0](http://fontawesome.dashgame.com/)兼容官方写法，如果你只是想简单使用某个图标，可以使用这里提供的Icon组件，也许能省下一些你写类名的时间
### 代码演示

#### 基础用法

```html
<ml-icon name="home"></ml-icon>
```
#### 自定义大小

```html
<ml-icon name="home" size="16px"></ml-icon>
<ml-icon name="heart" size="32px"></ml-icon>
<ml-icon name="hand-peace-o" size="48px"></ml-icon>
```
#### 自定义颜色

```html
<ml-icon name="home" color="#49b683"></ml-icon>
<ml-icon name="home" color="#ab97c3"></ml-icon>
```
### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 图标名称 | `string` | `-` |
| color | 图标颜色 | `string` | `-` |
| size | 图标大小，如 20px 2em | `string` | `-` |