<script setup lang="ts">
import Footer from '../components/global/Footer.vue'
import { useNinjaWindowScroll } from '~/hooks/useScroll'

const { y } = useNinjaWindowScroll()
</script>

<template>
  <div
    class="group/landing overflow-hidden"
    :class="y > 60 ? 'scrolled' : ''"
  >
    <LandingNavbar />
    <slot />

    <TairoPanels />
    <Footer />
  </div>
</template>
