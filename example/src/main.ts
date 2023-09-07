import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.scss'
//用于测试打包
import coin from 'coin-ui'
import 'coin-ui/style'
//用于开发调试
// import coin from '../../packages/coin-ui/index'
// import element from 'element-plus'
// import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(coin)
// app.use(element)
app.mount('#app')
