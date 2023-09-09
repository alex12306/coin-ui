<div align="center">
<h1 align="center">coin-ui 组件库</h1>
<p align="center">Vue3 + Vite4 + TypeScript5 + monorepo  </p>
</div>

# 安装

```
npm i coin-ui
```

或使用其他包管理器

# 使用

完整引入：

```JS
// main.js
import ui from 'coin-ui';
import 'coin-ui/style';
import App from './App.vue';
const app = createApp(App);
app.use(ui);
```

手动引入：

```JS
// main.js
import 'coin-ui/style'

//使用
import { CButton } from 'coin-ui'
```

# 组件

## 按钮

| 名称     | 说明               | 类型                                                                | 默认值  |
| -------- | ------------------ | ------------------------------------------------------------------- | ------- |
| type     | 类型               | `'default' , 'primary' , 'success' , 'warning' , 'danger' , 'info'` | default |
| size     | 尺寸               | `'small' , 'default' , 'large'`                                     | default |
| round    | 是否为圆角按钮     | `boolean`                                                           | false   |
| loading  | 是否为加载中状态   | `boolean`                                                           | false   |
| disabled | 按钮是否为禁用状态 | `boolean`                                                           | false   |

使用举例：

```VUE
<c-button type="primary" size="large" round loading disabled></c-button>
```

## 消息提示

| 名称      | 说明                                         | 类型                                       | 默认值  |
| --------- | -------------------------------------------- | ------------------------------------------ | ------- |
| message   | 消息文字                                     | `'success' , 'warning' , 'info' , 'error'` | default |
| type      | 消息类型                                     | `'success', 'warning', 'info', 'error'`    | default |
| showClose | 是否显示关闭按钮                             | `boolean`                                  | false   |
| onClose   | 关闭时的回调函数                             | `Function`                                 | —       |
| duration  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | number                                     | 2000    |

使用举例：

```JS
import { CMessage } from 'coin-ui'
  CMessage({
    message: 'hello',
    type: 'success',
    showClose: true,
    duration: 3000,
    onClose: () => {
      console.log('关闭了')
    }
  })
```
