import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { resolve } from 'node:path';

export default defineConfig({
  root: resolve(__dirname),
  plugins: [vue()],
  resolve: {
    alias: {
      '@martinszeltins/vue-tel-input': resolve(__dirname, '../src/index.js'),
    },
  },
  server: {
    port: 4200,
    open: true,
  },
});
