<script setup lang="ts">
import CollapseBurger from '../global/CollapseBurger.vue'

const props = withDefaults(
  defineProps<{
    collapse?: boolean
    horizontalScroll?: boolean
  }>(),
  {
    collapse: true
  }
)

const app = useAppConfig()

const route = useRoute()

const showNavBurger = computed(() => {
  return props.collapse && app.roppa?.collapse?.toolbar?.showNavBurger
})
</script>

<template>
  <div
    class="relative mb-5 flex h-16 items-center gap-2"
    :class="props.horizontalScroll && 'pe-4 xl:pe-10'"
  >
    <CollapseBurger
      v-if="showNavBurger"
      class="-ms-3"
    />

    <BaseHeading
      v-if="app.roppa?.collapse?.toolbar?.showTitle"
      as="h1"
      size="2xl"
      weight="light"
      class="text-muted-800 hidden md:block dark:text-white"
    >
      <slot name="title">
        {{ route.meta.title }}
      </slot>
    </BaseHeading>

    <div class="ms-auto" />
    <template v-for="tool of app.roppa?.collapse?.toolbar?.tools">
      <component
        :is="resolveComponentOrNative(tool.component)"
        v-if="tool.component"
        :key="tool.component"
        v-bind="tool.props"
      />
    </template>
  </div>
</template>
