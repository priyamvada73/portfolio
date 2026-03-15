import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use /portfolio/ for GitHub Pages until custom domain is live
  // Switch back to '/' once custom domain is configured
  base: mode === 'production' ? '/2026/' : '/',
}))
