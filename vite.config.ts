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
    middlewareMode: true,  // Use middleware mode for customizing responses
    setupMiddleware(app) {
      // Custom middleware for MIME type handling
      app.use((req: { url: string }, res: { setHeader: (arg0: string, arg1: string) => void }, next: () => void) => {
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
