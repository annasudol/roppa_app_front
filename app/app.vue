<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()

/**
 * Global head configuration
 * @see https://nuxt.com/docs/getting-started/seo-meta
 */
useHead({
  title: () => route.meta?.title ?? '',
  titleTemplate: (titleChunk?: string) => {
    return titleChunk
      ? `${app.roppa?.title} - ${titleChunk}`
      : `${app.roppa?.title}`
  },
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png'
    }
  ],

  meta: [
    {
      name: 'description',
      content: 'The most advanced Nuxt and Tailwind CSS dashboard template'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:site',
      content: '@cssninjaStudio'
    },
    {
      name: 'og:image:type',
      content: 'image/png'
    },
    {
      name: 'og:image:width',
      content: '1200'
    },
    {
      name: 'og:image:height',
      content: '630'
    },
    {
      name: 'og:image',
      content: 'https://media.cssninja.io/embed/marketplace/product/wide.png'
    }
  ]
})
</script>

<template>
  <div>
    <!--
      Global app search modal
      @see .demo/components/DemoAppSearch.vue
    -->
    <!-- <DemoAppSearch /> -->
    <!--
      Global app layout switcher
      @see .demo/components/DemoAppLayoutSwitcher.vue
    -->
    <!-- <DemoAppLayoutSwitcher /> -->

    <!--
      Vue Axe Popup
      @see .demo/plugins/vue-axe.client.ts
    -->
    <!-- <VueAxePopup /> -->

    <NuxtLoadingIndicator color="rgb(var(--color-primary-500))" />
    <NuxtPage />
  </div>
</template>
