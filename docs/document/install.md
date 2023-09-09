# 安装

```
npm i coin-ui
```

或使用其他包管理器(但是用本项目源码开发组件只限定pnpm安装)

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

//在你想要使用的地方，以button举例 
import { CButton } from 'coin-ui'
```