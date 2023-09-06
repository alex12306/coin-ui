import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    rollupOptions: {
      //忽略打vue文件
      external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: 'dist/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
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
      //生成格式
      // formats: ['es', 'cjs'],
    }
  },
  plugins: [
    vue(),
    // 自动生成类型声明文件
    dts({ include: './index.ts' })
  ]
})
