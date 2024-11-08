<script setup lang="ts">
import { useTopnav } from '~/composables/topnav'

const props = withDefaults(
  defineProps<{
    topnav?: boolean
    toolbar?: boolean
    circularMenu?: boolean
  }>(),
  {
    topnav: true,
    toolbar: true,
    circularMenu: true
  }
)

const config = useAppConfig().roppa?.topnav
console.log(config?.toolbar)
const topnavEnabled = computed(() => {
  return config?.navigation?.enabled as boolean !== false && props.topnav !== false
})

const circularMenuEnabled = computed(() => {
  return config?.circularMenu?.enabled as boolean !== false && props.circularMenu !== false
})

const mainClass = computed(() => {

  if (!topnavEnabled.value) {
    return 'bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  ]


  return list
})
</script>

<template>
  <div>
    <div class="dark:bg-muted-900 bg-muted-50 pb-20">
      <slot name="navigation">
        <TairoTopnavNavigation
          position="fixed"
        >
          <div
            v-if="config?.navigation?.logo?.component"
            class="flex h-16 w-full items-center gap-x-4"
          >
            <NuxtLink
              to="/"
              class="flex items-center justify-center"
            >
              <component
                :is="
                  resolveComponentOrNative(config?.navigation.logo.component)
                "
                v-bind="config?.navigation.logo.props"
              />
            </NuxtLink>
            <component
              :is="
                resolveComponentOrNative(config?.navigation?.header?.component)
              "
              v-bind="config?.navigation?.header?.props"
            />
          </div>
          <template #toolbar>
            <div>
              <div class="flex items-center justify-end gap-4 md:gap-2">
                <BaseThemeToggle />
                <!-- <template v-for="tool of config?.toolbar?.tools">
                  <component
                    :is="resolveComponentOrNative(tool.component)"
                    v-if="tool.component"
                    :key="tool.component"
                    v-bind="tool.props"
                  />
                </template> -->
              </div>
            </div>
          </template>
        </TairoTopnavNavigation>
      </slot>

      <div :class="mainClass">
        <div
          class="pt-40 md:pt-36"
        >
          <slot />
        </div>
      </div>

      <!-- <TairoPanels /> -->

      <TairoTopnavCircularMenu v-if="circularMenuEnabled" />
    </div>

    <TairoTopnavFooter />
  </div>
</template>
