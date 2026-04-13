import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/just-eat': {
        target: 'https://uk.api.just-eat.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/just-eat/, '')
      }
    }
  }
})
