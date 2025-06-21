// vite.config.js
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // 将所有以 /api 开头的请求代理到 OpenAI
      '/api': {
        target: 'https://api.ohmygpt.com/v1',
        changeOrigin: true, // 必须设置为 true
        // 重写请求路径，去掉 /api 前缀
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})