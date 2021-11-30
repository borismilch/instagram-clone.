import { defineConfig } from 'vite'
//import { VitePWA } from 'vite-plugin-pwa'

import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [
    reactRefresh(),  
    // VitePWA({

    //   srcDir: 'src',
    //   filename: 'sw.ts',
    //   base: '/',
    //   strategies: 'injectManifest',

    //   includeAssets: ['robots.txt'],  
    //   manifest: {
    //     name: 'Stogram',
    //     short_name: 'Stogram',
    //     description: 'Ttograms',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: '/icon-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/icon-256x256.png',
    //         sizes: '256x256',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/icon-384x384.png',
    //         sizes: '384x384',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       },
    //       {
    //         src: '/icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       }
    //     ]
    //   }
    // })
  ]
})
