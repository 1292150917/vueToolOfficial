## List 瀑布流

### 使用指南

```javascript
  import { InfiniteScroll } from 'vant';
```
### 代码演示

不需要你使用我自己的标签，只需要在你需要加载数据的地方加上一句 `v-infinite-scroll="loadMore"` 就OK 注意`loadMore`是回调方法，到达底部触发的方法！，此方法以判断是否存在滚动事件，存在添加一个方法，否则创建！并且与其他第三方插件相互兼容！

#### 基础用法

```html
<ul v-infinite-scroll="loadMore">
  <li v-for="item in indexs">{{item}}</li>
</ul>
```
#### 自定义底部距离

```html
<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="10">
  <li v-for="item in indexs">{{item}}</li>
</ul>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| infinite-scroll-disabled | 滚动到底部的距离 | `boolean` | `0` |
| infinite-scroll | 到底底部的返回值 callback | `function` | `-` |
| self-adaption | 自适应高度，到达使用元素元素最底部触发 | `boolean` | `false` |