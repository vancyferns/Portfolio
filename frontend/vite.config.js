import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: [
      '740a29f7-090b-424b-aa48-0bd1e64a213d-00-131hf83hco1da.spock.replit.dev'
    ]
  }
})