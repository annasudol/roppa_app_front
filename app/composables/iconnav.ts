/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RouteLocationRaw } from 'vue-router'

export interface TairoIconnavResolvedConfig {
  name: string
  divider?: boolean
  icon: {
    name: string
    class?: string
  }
  children?: any[]
  component?: {
    name: string
    props?: any
  }
  to?: RouteLocationRaw
  click?: () => void | Promise<void>
  activePath?: string
}

export function useIconnav() {
  const route = useRoute()
  const items = [
    {
      name: 'New Design',
      icon: { name: 'iconoir:hexagon-plus', class: 'w-6 h-6' },
      activePath: '/new-design',
      children: []

    },
    {
      name: 'How it works',
      icon: { name: 'iconoir:shield-question', class: 'w-6 h-6' },
      activePath: '/how-it-works',
      children: []

    },
    {
      name: 'About Us',
      icon: { name: 'iconoir:book', class: 'w-6 h-6' },
      activePath: '/about-us',
      children: []

    }
  ]

  const menuItems = computed(() => {
    return items.map(navigation =>
        <TairoIconnavResolvedConfig>{
          ...navigation
        }
    )
  })

  const activeMenuItem = computed(() => {
    return menuItems.value?.find((item) => {
      if (item.activePath) {
        return route.path.startsWith(item.activePath)
      }
      if (item.to) {
        return route.path.startsWith(item.to.toString())
      }
      return false
    })
  })
  const selectedMenuItem = useState(
    'iconnav-selected-menu-item',
    () => activeMenuItem.value
  )
  watch(activeMenuItem, (item) => {
    selectedMenuItem.value = item
  })

  if (import.meta.client) {
    const { lg, xl } = useTailwindBreakpoints()
    /* watch(xl, (isXl) => {
      if (!isXl) {
        isOpen.value = false
      }
    }) */
  }

  return {
    menuItems,
    activeMenuItem,
    selectedMenuItem
  }
}
