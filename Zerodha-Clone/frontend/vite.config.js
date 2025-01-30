import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  // test: {
  //   globals: true,      
  //   environment: 'jsdom',
  //   setupFiles: './src/landing_page/test/Hero.test.jsx', 
  // },
})
