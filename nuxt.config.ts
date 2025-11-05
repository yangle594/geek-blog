// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-18',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon'
  ],
  app: {
    baseURL: process.env.GITHUB_PAGES === 'true' ? '/geek-blog/' : '/',
    head: {
      title: 'Yangle · 极客风个人博客',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0a' },
        { name: 'description', content: '极客风格·简洁大气·新颖的个人博客' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true
    }
  },
  tailwindcss: {
    viewer: false
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://yangle594.github.io/geek-blog'
    }
  }
})

