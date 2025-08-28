import { LifeBuoy } from 'lucide-react'

import { routes } from '@/config'

export const authData = {
  logo: {
    href: routes.home,
  },

  navigation: [
    {
      label: 'Obtenha Ajuda',
      href: routes.help,
      variant: 'outline',
      icon: LifeBuoy,
    },
  ],
} as const

export type AuthData = typeof authData
