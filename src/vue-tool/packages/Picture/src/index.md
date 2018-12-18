## Picture 图片处理

>提供几种图片转换！图片压缩.

### 使用指南

```javascript
  import { Picture } from 'vue-tool';
```
### getBase64Image（图片转换base64地址）

>通过`toDataURL`方法实现

```javascript
Picture.getBase64Image('图片地址').then(res => {
    console.log(res);
});
```

#### API

| 参数 | 说明 | 类型 | 备注 |
|------|------|------|------|
| 参数1 | 图片地址 | `String` | `.then返回base64地址` |

### getImgCompress（图片压缩）

```javascript
Picture.getImgCompress('图片地址').then(res => {
    console.log(res);
});
```

#### API

| 参数 | 说明 | 类型 | 备注 |
|------|------|------|------|
| 参数1 | 图片地址 | `String` | `.图片压缩后的地址` |