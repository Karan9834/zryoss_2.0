import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: false,
      filename: 'bundle-analysis.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    reportCompressedSize: false, // Speed up build
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core
          if (id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')) {
            return 'vendor-react';
          }

          // Router
          if (id.includes('node_modules/react-router') ||
            id.includes('node_modules/@remix-run/router')) {
            return 'vendor-router';
          }

          // Animations
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }

          // Icons
          if (id.includes('node_modules/lucide-react') ||
            id.includes('node_modules/react-icons')) {
            return 'vendor-icons';
          }

          // Other heavy libraries
          if (id.includes('node_modules/@emailjs')) {
            return 'vendor-emailjs';
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
})
