<script setup lang="ts">
import { useIconnav } from '~/composables/iconnav'

const { menuItems, selectedMenuItem } = useIconnav()

const router = useRouter()
const props = defineProps<{ open: boolean }>()
const isSelectedClass = ref('[&>div]:!bg-primary-500/10 [&>div]:!text-primary-500 dark:[&>div]:!bg-primary-500/20 [&>p]:!text-primary-500')
const isMobileOpenClass = ref('flex-row')
</script>

<template>
  <div class="ltablet:flex grow justify-center gap-x-6 lg:flex">
    <div
      v-for="(item, index) in menuItems"
      :key="index"
      class="text-center"
    >
      <button
        v-if="item.children"
        type="button"
        :class="[{ [isSelectedClass]: selectedMenuItem?.activePath === item.activePath }, { [isMobileOpenClass]: [props.open] }, { ['flex flex-col']: [!props.open] }]"

        @click="
          () => {
            selectedMenuItem = item,
            router.push(item.children?.[0]?.to)
          }
        "
      >
        <div
          class="dark:text-muted-300 text-gray-700 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-800 dark:group-hover:text-muted-200 relative mx-auto flex size-11 items-center justify-center rounded-xl transition-colors duration-300"
        >
          <Icon
            :name="item.icon.name"
            :class="item.icon.class"
          />
        </div>
        <p class="dark:text-muted-300 text-gray-700 w-full text-center font-sans text-xs">
          {{ item.name }}
        </p>
      </button>
    </div>
  </div>
</template>
