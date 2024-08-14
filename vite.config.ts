import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
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
