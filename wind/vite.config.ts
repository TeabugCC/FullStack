/*
 * @Last Modified by: LiFei
 * @LastEditTime: 2024-07-14 18:30:04
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { server } from 'typescript'

// https://vitejs.dev/config/
export default defineConfig((command, mode, isSsrBuild, isPreview) => {
  console.log(command, mode, isSsrBuild, isPreview)
  if (command === 'serve') {
    return {
      plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
      ],
      server: {
        host: '127.0.0.0',
        port: '3000'
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      proxy: {

      }
    }
  } else {
    return {
      plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
      ],
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            // pathRewrite: { // 重写路径 webpack中的老写法 针对vue2或老的vue3项目--- 该选项在 vite 中已被弃用 ---
            //   '^/api': ''
            // },
            rewrite: (path: string) => path.replace(/^\/api/, '')// 
          }
        }
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    }
  }
})
