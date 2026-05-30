import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  script:{
    proxy:{
      '/api':[
        'https://trefle.io'
      ]
        ,
    }
  },
  plugins: [react()],
})
