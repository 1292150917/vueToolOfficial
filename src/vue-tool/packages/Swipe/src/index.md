## Swipe 轮播

### 代码演示

```javascript
  import { Swipe } from 'vant';
  
  Vue.use(Swipe)
```

#### 基本用法

```html
<ml-swipe>
   <ml-swipe-item>
      <div>1</div>
   </ml-swipe-item>
   <ml-swipe-item>
      <div>2</div>
   </ml-swipe-item>
   <ml-swipe-item>
      <div>3</div>
   </ml-swipe-item>
</ml-swipe>
```

#### 禁止手势滑动并且隐藏...

```html
<ml-swipe :indicators="false" :touchable="false">
   <ml-swipe-item>
      <div>1</div>
   </ml-swipe-item>
   <ml-swipe-item>
      <div>2</div>
   </ml-swipe-item>
</ml-swipe>
```

#### 自定义滑动时间

```html
<ml-swipe :autoplay="1000">
   <ml-swipe-item>
      <div>1</div>
   </ml-swipe-item>
   <ml-swipe-item>
      <div>2</div>
   </ml-swipe-item>
   <ml-swipe-item>
</ml-swipe>
```

#### Checkbox 组

```html
<i-checkbox-group v-model="value7" :max="3">
  <i-checkbox name="a">a</i-checkbox>
  <i-checkbox name="b">b</i-checkbox>
  <i-checkbox name="c">c</i-checkbox>
  <i-checkbox name="d">d</i-checkbox>
</i-checkbox-group>
<p>当前选择：{{ value7 }}</p>
```

#### 搭配 Cell 使用

`Checkbox`提供了一个`toggle`方法用来切换选中状态，你可以搭配`Cell`组件一起使用

```html
<i-cell-group>
  <i-cell title="A" is-link @click="_=>$refs.a.toggle()">
    <i-checkbox slot="right-icon" v-model="value8" ref="a" />
  </i-cell>
  <i-cell title="B" is-link @click="_=>$refs.b.toggle()">
    <i-checkbox slot="right-icon" v-model="value9" ref="b" />
  </i-cell>
</i-cell-group>
```

### API
| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| position | 轮播位置 支持left/right | `String` | `left` |
| touchable | 是否可以通过手势滑动 | `boolean` | `true` |
| indicators | 是否显示底部.... 指示器 | `boolean` | `true` |
| autoplay | 自动轮播时间 | `Number` | `3000` |
| duration | 动画时间 | `duration` | `500` |
| autochange | 自动滑动的位置，返回的索引 | `Number` | `0` |