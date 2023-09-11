import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  //合并vite.config.ts配置文件
  viteConfig,
  defineConfig({
    //vitest配置
    test: {
      //测试哪些文件夹
      include: ['packages/components/*/tests/*.spec.{ts,tsx}'],
      //全局注册API，例如expect、describe
      globals: true,
      //模拟浏览器环境
      environment: 'happy-dom'
    }
  })
)
