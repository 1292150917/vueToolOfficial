## Cache 数据缓存

### 使用指南

```javascript
import { Cache } from 'vue-tool';
```

> 此文档对`localStorage`,`sessionStorage`,`cookie`的处理，可以直接对缓存`存储和读取` `JSON` 格式

### localStorage操作

> localStorageGet(读取)

```javascript
const los = Cache.localStorageGet('name')
```

> localStorageSet(存储)

```javascript
const los = Cache.localStorageSet('name',{sex:'男'})
```

### API 

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | key值 | `string` | `-` |
| value | key内容 | `string` | `-` |

### sessionStorage操作

> sessionStorageGet(读取)

```javascript
const los = Cache.sessionStorageGet('name')
```

> sessionStorageSet(存储)

```javascript
const los = Cache.sessionStorageSet('name',{sex:'男'})
```

### API 

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | key值 | `string` | `-` |
| value | key内容 | `string` | `-` |

### cookie操作

> cookieGet(读取)

```javascript
const los = Cache.cookieGet('name')
```

> cookieSet(存储)

```javascript
const los = Cache.cookieSet('name',{sex:'男'})
```

### API 

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | key值 | `string` | `-` |
| value | key内容 | `string` | `-` |