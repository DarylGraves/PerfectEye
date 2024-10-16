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
    mimeTypes: {
      'application/javascript': ['js', 'jsx'],   // For JavaScript and JSX files
      'text/typescript': ['ts', 'tsx'],          // For TypeScript and TSX files
    },
  },
});
