<script setup lang="ts">
import { useNinjaWindowScroll } from '../hooks/useScroll'
import LandingFooter from '~/components/landing/Footer.vue';

const { y } = useNinjaWindowScroll()
</script>

<template>
  <div
    class="group/landing overflow-hidden"
    :class="y > 60 ? 'scrolled' : ''"
  >
    <LandingNavbar />
    <slot />
    <RoppaPanels />
    <LandingFooter />
  </div>
  <!-- <RoppaIconnavFooter /> -->
</template>
