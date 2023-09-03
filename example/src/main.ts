import { createApp } from 'vue';
import App from './App.vue';
//用于测试打包
// import coin from 'coin-ui';
//用于开发调试
import coin from '../../packages/coin-ui/index';
const app = createApp(App);
app.use(coin);
app.mount('#app');
