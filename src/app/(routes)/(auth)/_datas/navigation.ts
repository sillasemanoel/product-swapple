import { LifeBuoy } from 'lucide-react'

import { ROUTES } from '@/config'

export const NAVIGATION = [
  {
    href: ROUTES.help,
    label: 'Obtenha Ajuda',
    icon: LifeBuoy,
  },
] as const
