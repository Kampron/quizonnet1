import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/quizonnet_client",
  plugins: [react()],
  server: {
    proxy: {
      "/quizonnet": {
        target: "https://quizonnet-server.onrender.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
// http://localhost:400