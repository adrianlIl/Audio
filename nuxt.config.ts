// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui'
  ],

  css: ['~/assets/css/main.css'],

  // 優化 SSR 和 CSS 加載
  experimental: {
    payloadExtraction: false
  },

  // 確保 CSS 優先加載
  app: {
    head: {
      title: '音响网站',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '专业的音响设备展示网站' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // 開發服務器配置
  devServer: {
    host: '0.0.0.0'
  },

  // Vite 配置優化
  vite: {
    server: {
      allowedHosts: true
    },
    css: {
      devSourcemap: false
    },
    build: {
      cssCodeSplit: false
    }
  }
})


