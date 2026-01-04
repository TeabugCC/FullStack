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
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    }
  }
})
