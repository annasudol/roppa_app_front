/* eslint-disable @typescript-eslint/no-explicit-any */
import { defu } from 'defu'

interface Panel {
  name: string
  component?: string
  props?: Record<string, any>
  position?: 'left' | 'right' | 'top' | 'bottom'
  size: 'sm' | 'md'
  overlay?: boolean
}

export function usePanels() {
  const panelsItems = [
    {
      name: 'language',
      position: 'right',
      component: 'DemoPanelLanguage'
    },
    {
      name: 'activity',
      position: 'right',
      component: 'DemoPanelActivity'
    },
    {
      name: 'search',
      position: 'left',
      component: 'DemoPanelSearch'
    },
    {
      name: 'task',
      position: 'right',
      component: 'DemoPanelTask'
    },
    {
      name: 'account',
      position: 'right',
      component: 'DemoPanelAccount',
      size: 'md'
    },
    {
      name: 'card',
      position: 'right',
      component: 'DemoPanelCard'
    },
    {
      name: 'invest',
      position: 'right',
      component: 'DemoPanelInvest',
      size: 'md'
    }
  ];
  const panels = computed<Panel[]>(
    () =>
      panelsItems.map(panel => ({
        ...panel,
        size: (panel as any).size ?? 'sm',
        position: (panel as any).position ?? 'left',
        overlay: (panel as any).overlay ?? true
      })) ?? []
  )

  const currentName = useState('panels-current-name', () => '')

  // we need to know from which side the panel is coming from
  // and preserve it in the state so we can animate it when it's closing
  const transitionFrom = useState('panels-transition-from', () => 'left')
  const showOverlay = useState('panels-overlay', () => true)

  const currentProps = useState('panels-current-props', () => ({}))

  const current = computed(() => {
    if (!currentName.value) {
      return undefined
    }

    return panels.value.find((panel: { name: string }) => panel.name === currentName.value)
  })

  function open(name: string, props?: Record<string, any>) {
    const panel = panels.value.find(({ name: panelName }) => panelName === name)
    if (panel) {
      transitionFrom.value = panel.position ?? 'left'
      currentName.value = panel.name
      showOverlay.value = !!panel.overlay

      // merge props from the panel config and the props passed to the function
      currentProps.value = defu(props ?? {}, (panel as any).props ?? {})
    }
  }
  function close() {
    currentName.value = ''
  }

  return {
    panels,
    current,
    transitionFrom,
    currentProps,
    showOverlay,
    open,
    close
  }
}
