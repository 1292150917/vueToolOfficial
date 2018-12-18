## Regular 正则表达式

提供几种常用的正则表达式，如果你拥有其他类型的表达式，欢迎共享！

### 使用指南

```javascript

  import { Regular } from 'vue-tool';

```

#### 返回值 状态成立为ture否则为false

<br/>

### figure (判断是否为整数或者小数点)

```javascript
Regular.figure(123) //true
```

判断是否为整数或者小数点

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| figure | 内容 | `Number` | `-` |

<br/>

### getUrlParam (url截取)

```javascript
Regular.getUrlParam('name') // url指定的name值
```

判断是否为整数或者小数点

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 需要或者url的key值 | `String` | `-` |

<br/>

### mobile (手机电话)

```javascript
Regular.mobile(12345678910) //false
```

判断`11`位数并且第二位数为`345678`其中一个的

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| mobile | 手机号 | `String | Number` | `-` |

<br/>

### tel (固定电话)

```javascript
Regular.tel(12345678910) //false
```

判断`7-14`位数

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| tel | 固定号码 | `String | Number` | `-` |

<br/>

### email (email地址)

```javascript
Regular.email('1292150917@qq.com') //true
```

判断正确的邮箱

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| email | 邮箱 | `String` | `-` |

<br/>

### identity (身份证正则)

```javascript
Regular.identity('xxxxxxx') //false
```

身份证号码为`15`位或者`18`位，`15`位时全为数字，`18`位前`17`位为数字，最后一位是校验位，可能为数字或字符`X` 

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| identity | 身份证 | `String` | `-` |

<br/>

### symbol (是否存在特殊字符)

```javascript
Regular.symbol(12345678910) //true 
```

判断是否存在 `[~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]` 特殊字符

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| symbol | 内容 | `String | Number` | `-` |

<br/>

### name (判断用户真实姓名)

```javascript
Regular.name('张自方') //true
```

判断正确的汉字编码并且大于两位

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 姓名 | `String` | `-` |

<br/>

### arrVacancy (判断数据字段是否为空 Arr)

```javascript
Regular.arrVacancy({
    sex:'男',
    name:""
}) //false

var name = 12

Regular.arrVacancy(name) //true

```

为 `空` `undefined` `null` 统一返回false不成立

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| arrVacancy | 需要判断的对象 | `Object || String` | `-` |

<br/>

### urlSplit (对url进行分割处理)

```javascript
var url = Regular.urlSplit(location.href) 
console.log(url) = > 返回结果如下
                        // 0:"http://127.0.0.1:8082/index2.html"
                        // 1:"http"
                        // 2:"127.0.0.1"
                        // 3:":8082"
                        // 4:"/index2.html"
                        // 'groups':undefined
                        // 'index':0
                        // 'input':"http://127.0.0.1:8082/index2.html#/Regular"
```

为 `空` `undefined` `null` 统一返回false不成立

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| href | 需要分割的http地址 | `String` | `-` |

#### callback

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| res | 分割好的对象 | `String` | `-` |