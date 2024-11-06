// import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@shuriken-ui/nuxt'],

  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    'nuxt-swiper'
  ],
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',
  hub: {
    database: true
  },
  // Development config
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
