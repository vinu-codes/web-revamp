import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginPrettier from 'vite-plugin-prettier'

export default defineConfig({
  plugins: [
    vue(),
    vitePluginPrettier({
      configFile: '.prettierrc',
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
