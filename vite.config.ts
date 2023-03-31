import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons()],
      }),
  ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '*': path.resolve('')
        },
    },
    server: {
        proxy: {
            "/api": {
                // 代理请求之后的请求地址
                target: "https://api.openai-proxy.com/pro/",
                changeOrigin: true, // 是否改变域名
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
