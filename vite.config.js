import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Refactor',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404:  resolve(__dirname, "public/404.html"),
      }
    }
  },
})
