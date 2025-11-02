import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(), react()],
  server: { port: 3000 },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
