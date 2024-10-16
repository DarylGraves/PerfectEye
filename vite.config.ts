import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PerfectEye/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure these extensions are resolved
  },
  server: {
    configureServer(server) {
      server.middlewares.use((req: any, res: any, next: any) => {
        // Custom MIME type handling for .js and .tsx files
        if (req.url.endsWith('.js')) {
          res.setHeader('Content-Type', 'application/javascript');
        } else if (req.url.endsWith('.tsx')) {
          res.setHeader('Content-Type', 'text/typescript');
        }
        next();
      });
    },
  },
});
