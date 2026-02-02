import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Modern JS for smaller bundles
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Three.js and related libraries in separate chunk
          if (id.includes('three') || id.includes('@react-three')) {
            return 'three';
          }
          // Framer Motion in vendor chunk
          if (id.includes('framer-motion')) {
            return 'vendor';
          }
          // React core in vendor chunk  
          if (id.includes('react-dom') || id.includes('node_modules/react/')) {
            return 'vendor';
          }
          // Icons in separate chunk
          if (id.includes('lucide-react')) {
            return 'icons';
          }
        }
      }
    }
  }
})
