import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { extname, relative, resolve } from 'path'
import { globSync } from 'fs'
import { fileURLToPath } from 'url'
import tailwindcss from "@tailwindcss/vite";
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, './lib'),
    },
  },
  plugins: [
    react(), 
    tailwindcss(),
    dts({ 
      include: ['lib'],
      exclude: ['lib/**/*.stories.tsx'] 
    })
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync('lib/**/*.{ts,tsx}', { 
          exclude: (path) => {
            return path.includes('.stories.tsx');
          }}).map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  }
})
