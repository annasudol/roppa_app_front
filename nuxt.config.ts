// import exposeColors from './tailwind/plugin-expose-colors'

import { appRules } from './config/routes-rules';

export default defineNuxtConfig({
  extends: ['@shuriken-ui/nuxt'],
  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    'nuxt-swiper',
    '@cssninja/nuxt-toaster'
  ],
  devtools: { enabled: true },
  css: [
    '../assets/css/colors.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css'
  ],
  routeRules: {
    ...appRules
  },
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
