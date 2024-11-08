/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RouteLocationRaw } from 'vue-router'

export interface TairoTopnavResolvedConfig {
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

export function useTopnav() {
  const route = useRoute()
  const topnavItems = [
    {
      name: 'Dashboard',
      icon: { name: 'ph:gauge-duotone', class: 'w-6 h-6' },
      activePath: '/dashboards/sales',
      to: '/dashboards/sales'
    },
    {
      name: 'Projects',
      icon: { name: 'ph:suitcase-duotone', class: 'w-6 h-6' },
      activePath: '/layouts/projects/project-list-3',
      to: '/layouts/projects/project-list-3'
    },
    {
      name: 'Freelancers',
      icon: { name: 'ph:users-duotone', class: 'w-6 h-6' },
      activePath: '/layouts/flex-list-1',
      to: '/layouts/flex-list-1'
    },
    {
      name: 'Files',
      icon: { name: 'ph:note-duotone', class: 'w-6 h-6' },
      activePath: '/layouts/table-list-3',
      to: '/layouts/table-list-3'
    },
    {
      name: 'Customers',
      icon: { name: 'ph:users-three-duotone', class: 'w-6 h-6' },
      activePath: '/layouts/user-grid-3',
      to: '/layouts/user-grid-3'
    },
    {
      name: 'Billing',
      icon: { name: 'ph:credit-card-duotone', class: 'w-6 h-6' },
      activePath: '/layouts/utility-billing',
      to: '/layouts/utility-billing'
    },
    {
      name: 'Settings',
      icon: { name: 'ph:gear-six-duotone', class: 'w-6 h-6' },
      activePath: '/layouts/profile-settings',
      to: '/layouts/profile-settings'
    },
    {
      name: 'Status',
      icon: { name: 'ph:notification-duotone', class: 'w-6 h-6' },
      activePath: '/layouts/utility-status',
      to: '/layouts/utility-status'
    }
  ]

  const menuItems = computed(() => {
    return topnavItems?.map(
      navigation =>
        <TairoTopnavResolvedConfig>{
          ...navigation
        }
    )
  })

  const isMobileOpen = useState('collapse-open', () => false)

  const activeMenuItem = computed(() => {
    return menuItems.value?.find((item: { activePath: string, to: { toString: () => string } }) => {
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
    'topnav-selected-menu-item',
    () => activeMenuItem.value
  )
  watch(activeMenuItem, (item: any) => {
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
    selectedMenuItem,
    isMobileOpen
  }
}
