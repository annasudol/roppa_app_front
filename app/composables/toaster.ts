import type {
  DefaultProps,
  NinjaToasterBaseProps
} from '@cssninja/nuxt-toaster'
import type { RoppaToaster } from '#components'

// This type infer the props of RoppaToaster component
type RoppaToasterProps = Omit<
  InstanceType<typeof RoppaToaster>['$props'],
  keyof DefaultProps
>

export function useToaster() {
  const $nt = useNinjaToaster()

  /**
   * Display a RoppaToaster component
   */
  function show(props: RoppaToasterProps, options?: NinjaToasterBaseProps) {
    return $nt.showComponent('RoppaToaster', {
      props,
      options
    })
  }

  return {
    show,
    clear: $nt.clear,
    clearAll: $nt.clearAll
  }
}
