import { defineConfig } from 'vite'
import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/animated-drawer/',
  server: {
    allowedHosts: ['x7md.local'],
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
