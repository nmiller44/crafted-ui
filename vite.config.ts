import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './lib'),
      '@components': resolve(__dirname, './lib/components'),
    },
  },
  plugins: [
    react(),
    dts({ 
      include: ['lib'],
      exclude: ['lib/**/*.stories.tsx'] 
    })
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    }
  }
})
