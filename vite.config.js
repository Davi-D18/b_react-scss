import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    react(),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.jsx'],
      safelist: ['a'] // Adicione classes que você quer manter
    })
  ],
  resolve: {
    alias: {
      '@c': path.resolve('./src/components'),
      '@assets': path.resolve('./src/assets')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve('src/styles/_variables.scss')}" as *;`
      }
    }
  }
})
