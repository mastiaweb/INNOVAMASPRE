import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // Esto es vital: define process.env como un objeto vacío para que
  // el navegador no arroje el error "Uncaught ReferenceError: process is not defined"
  define: {
    'process.env': {}
  }
});