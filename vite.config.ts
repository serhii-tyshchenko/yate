import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      constants: '/src/constants',
      utils: '/src/utils',
      hooks: '/src/hooks',
      styles: '/src/styles',
      '~': '/src/',
      '~styles': '/src/styles',
      '~assets': '/src/assets',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
