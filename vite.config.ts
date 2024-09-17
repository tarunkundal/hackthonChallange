import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  svgr({
    svgrOptions: {
      exportType: 'named',
      ref: true,
      svgo: false,
      titleProp: true,
      memo: true,
      icon: true
    },
    include: '**/*.svg',
  }),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
