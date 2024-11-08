<script setup lang="ts">
import { useCollapse } from '~/composables/collapse'
import TairoCollapseCircularMenu from '~/components/global/TairoCollapseCircularMenu.vue'
import TairoCollapseNavigation from '~/components/global/TairoCollapseNavigation.vue'
import TairoCollapseToolbar from '~/components/global/TairoCollapseToolbar.vue'

const props = withDefaults(
  defineProps<{
    collapse?: boolean
    toolbar?: boolean
    circularMenu?: boolean
    condensed?: boolean
    horizontalScroll?: boolean
  }>(),
  {
    collapse: true,
    toolbar: true,
    circularMenu: true,
    condensed: false
  }
)

const app = useAppConfig()
const { isOpen, isMobileOpen, toggle } = useCollapse()

const collapseEnabled = computed(() => true)
const toolbarEnabled = computed(() => {
  return (
    app.roppa?.collapse?.toolbar?.enabled as boolean !== false && props.toolbar !== false
  )
})
const circularMenuEnabled = computed(() => {
  return (
    app.roppa?.collapse?.circularMenu?.enabled as boolean !== false
    && props.circularMenu !== false
  )
})

const mainClass = computed(() => {
  if (props.condensed) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden'
  }

  if (!collapseEnabled.value) {
    return 'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10 lg:max-w-[calc(100%_-_80px)] lg:ms-[80px]'
  ]

  if (isOpen.value) {
    list.push('lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]')
  }

  if (props.horizontalScroll) {
    list.push('!pe-0 xl:!pe-0')
  }

  return list
})
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 pb-20">
    <slot name="navigation">
      <TairoCollapseNavigation v-if="collapseEnabled" />
      <div
        role="button"
        tabindex="0"
        class="bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden"
        :class="
          isMobileOpen
            ? 'opacity-50 dark:opacity-75'
            : 'opacity-0 pointer-events-none'
        "
        @click="toggle"
      />
    </slot>

    <div :class="mainClass">
      <div
        :class="[
          // props.condensed && !props.horizontalScroll && 'w-full',
          // !props.condensed && props.horizontalScroll && 'mx-auto w-full',
          // !props.condensed
          //   && !props.horizontalScroll
          //   && 'mx-auto w-full max-w-7xl'
        ]"
      >
        <slot name="toolbar">
          <TairoCollapseToolbar
            v-if="toolbarEnabled"
            :collapse="props.collapse"
            :horizontal-scroll="props.horizontalScroll"
          >
            <template #title>
              <slot name="toolbar-title" />
            </template>
          </TairoCollapseToolbar>
        </slot>

        <slot />
      </div>
    </div>

    <TairoPanels />

    <TairoCollapseCircularMenu v-if="circularMenuEnabled" />
  </div>
</template>
