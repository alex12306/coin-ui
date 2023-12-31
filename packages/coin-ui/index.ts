import type { App } from 'vue'
import * as components from '../components/index'
// 提供手动导入
export { CMessage, CButton } from '../components/index'
export default {
  // 提供全局导入
  install: (app: App) => {
    // 声明对象映射，其中键是字符串(string)，值是组件(any)
    const componentMap: Record<string, any> = components
    Object.keys(components).forEach((item) => {
      app.component(componentMap[item].name, componentMap[item])
    })
  }
}
