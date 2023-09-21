import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3003'
      },
      '/v': {
        target: 'http://127.0.0.1:3003'
      },
      '/nes': {
        target: 'ws://127.0.0.1:3000',
        changeOrigin: true,
        ws: true
        // xfwd: true
      }
    }
  }
})
