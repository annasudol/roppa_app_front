import { isProduction } from 'std-env'
import type { NitroConfig, NitroRouteConfig } from 'nitropack'

const staticAssetsRule: NitroRouteConfig = isProduction
  ? {
      headers: {
        'Cache-Control': 'public, max-age=31536000'
      }
    }
  : {}

const staticPageRule: NitroRouteConfig = isProduction
  ? {
      isr: true,
      cache: {
        maxAge: 3600,
        swr: true,
        staleMaxAge: 3600
      },
      headers: {
        'Cache-Control':
          'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600, stale-if-error=3600'
      }
    }
  : {}

export const appRules: NitroConfig['routeRules'] = {
  '/img/**': staticAssetsRule,
  '/api/**': staticAssetsRule,
  '/': staticPageRule,
  '/dashboard/**': staticPageRule,
  '/auth/**': staticPageRule
}
