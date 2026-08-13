import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  preview: {
    allowedHosts: ['uci-module-13-candidatesearch.onrender.com'],
  },
});
