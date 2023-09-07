<div style="text-align:center">
<b style="font-size:30px">coin-ui</b>
<p>基于 Vite4 + TypeScript 的 Vue3 组件库</p>

# 使用

入口文件`main.js`中引入：

```JS
import ui from 'coin-ui';
import 'coin-ui/style';
import App from './App.vue';
const app = createApp(App);
app.use(ui);
```

# 组件

## 按钮

可选属性：

`type:['default' | 'primary' | 'success' | 'warning' | 'danger' | 'info']`

`size:['small' | 'default' | 'large']`

`round`、`loading`、`disabled`



组件中使用举例：

```VUE
<c-button type="primary" size="large" round loading disabled></c-button>
```

