## Checkbox 复选框

### 代码演示

```javascript
export default {
  // 示例数据
  data() {
    return {
      value1: true,
      value2: true,
      value3: 0,
      value4: false,
      value5: true,
      value6: false,
      value7: ['b', 'c'],
      value8: false,
      value9: true
    }
  }
}
```

#### 简单用法

```html
<i-checkbox v-model="value1">{{ value1 }}</i-checkbox>
```

#### 自定义颜色

```html
<i-checkbox v-model="value2" color="#49b683">{{ value2 }}</i-checkbox>
```

#### 自定义状态值

```html
<i-checkbox v-model="value3" :true-value="1" :false-value="0">value: {{ value3 }}</i-checkbox>
```

#### 禁用

```html
<i-checkbox v-model="value4" disabled>a</i-checkbox>
<i-checkbox v-model="value5" disabled>b</i-checkbox>
```

#### 自定义图标

```html
<i-checkbox v-model="value6">
  <template slot="icon" slot-scope="props">
    <i-icon :name="props.value ? 'heart' : 'heart-o'" size="24px" color="#ab97c3" />
    <span>{{ props.value }}</span>
  </template>
</i-checkbox>
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

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | 所有选中项`name`值集合 | `Array` | `[]` |
| disabled | 是否禁用所有复选框 | `Boolean` | `false` |
| max | 限制最大选中数量，`0`代表不限制 | `Number` | `0` |

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标识符，与`CheckboxGroup`组件搭配使用 | `String | Number` | `''` |
| value | 状态值 | `Boolean | Number | String` | - |
| true-value | 设置选中状态的值 | `Boolean | Number | String` | `true` |
| false-value | 设置未选中状态的值 | `Boolean | Number | String` | `false` |
| disabled | 是否禁用该复选框 | `Boolean` | `false` |
| color | 选中状态图标背景色 | `String` | 主题色 |

### Checkbox Slots

| 名称 | 说明 | slot-scope |
|------|------|------|
| icon | 自定义图标 | value: 状态值 |

### Checkbox Methods

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| toggle | - | - | 切换选中状态 |

### CheckboxGroup Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 选中项改变时触发 | 所有选中项`name`值集合 |

### Checkbox Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换时触发 | 状态值 |