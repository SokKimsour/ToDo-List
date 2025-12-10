// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CORRECTED CODE: The config object MUST be wrapped in {}
export default defineConfig({ 
  plugins: [react()],
  base: './',
});