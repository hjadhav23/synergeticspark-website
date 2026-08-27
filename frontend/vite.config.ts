import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using a custom domain (www.syncsparktech.com), which serves from
  // the root — so base is '/', not a repo-name subpath.
  base: '/',
})
