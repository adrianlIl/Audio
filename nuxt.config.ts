// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui'
  ],

  css: ['~/assets/css/main.css'],

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
  }
})


