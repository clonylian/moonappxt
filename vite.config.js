import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/moon-server': {
        target: 'http://43.134.115.222:8080/moon-server/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/moon-server/, ''),
      },
    },
  },
});