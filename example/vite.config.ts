import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import {
//   ElementPlusResolver,
//   NaiveUiResolver
// } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue()
    // AutoImport({
    //   imports: [
    //     'vue',
    //   ]
    //   resolvers: [ElementPlusResolver()]
    // }),
    // Components({
    //   resolvers: [
    //     ElementPlusResolver(),
    //   ]
    // })
  ],
  server: {
    // open: true
  }
})
