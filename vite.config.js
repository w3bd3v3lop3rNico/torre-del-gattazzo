import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['bootstrap'] // Includi Bootstrap nelle dipendenze ottimizzate
  },
  define: {
    // Esporta Bootstrap come variabile globale per renderlo accessibile a livello globale
    'window.bootstrap': 'import("bootstrap/dist/js/bootstrap.bundle.min.js")'
  }
})
