import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  define: {
    // Esto previene el error "process is not defined" en el navegador.
    // process.env será un objeto vacío, por lo que process.env.API_KEY será undefined (manejado ahora en el servicio).
    'process.env': {}
  }
});