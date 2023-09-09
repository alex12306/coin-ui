import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    // 关闭最小化混淆，否则会改变代码中变量命名，使得打包后有控制台警告：
    // Do not use built-in or reserved HTML elements as component id: g
    minify: false,
    rollupOptions: {
      //忽略打包进来的文件
      external: ['vue', '@vueuse/core'],
      input: ['index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //使用原始模块名作为文件名，为所有模块创建单独的 chunk
          preserveModules: true,
          //指定所有生成的 chunk 被放置在哪个目录中
          dir: 'dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist/lib'
        }
      ]
    },
    //库模式
    lib: {
      //入口
      entry: 'index.ts',
      //文件名
      fileName: 'index'
    }
  },
  plugins: [
    vue(),
    // 自动生成类型声明文件
    dts({ include: './index.ts' })
  ]
})
