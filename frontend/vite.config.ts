import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: must match your GitHub repo name exactly, wrapped in slashes.
  // e.g. if your repo is github.com/yourname/synergeticspark-website,
  // this must be '/synergeticspark-website/'
  base: '/synergeticspark-website/',
})
