import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://us-central1-email-sendgrid-442403.cloudfunctions.net/sendgridemail',
        changeOrigin: true,
        secure: true,

        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
