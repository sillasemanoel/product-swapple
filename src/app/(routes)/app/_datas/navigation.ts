import {
  ChartColumnIncreasing,
  Home,
  Inbox,
  LifeBuoy,
  Megaphone,
  Send,
  Settings,
  Tag,
  Ticket,
  Users,
} from 'lucide-react'

import { ROUTES } from '@/config'

export const NAVIGATION = {
  main: [
    {
      href: ROUTES.app,
      label: 'Início',
      icon: Home,
    },
    {
      href: ROUTES.orders,
      label: 'Pedidos',
      icon: Inbox,
    },
    {
      href: ROUTES.products,
      label: 'Produtos',
      icon: Tag,
    },
    {
      href: ROUTES.customers,
      label: 'Clientes',
      icon: Users,
    },
    {
      href: ROUTES.discounts,
      label: 'Descontos',
      icon: Ticket,
    },
    {
      href: ROUTES.marketing,
      label: 'Marketing',
      icon: Megaphone,
    },
    {
      href: ROUTES.analytics,
      label: 'Análises',
      icon: ChartColumnIncreasing,
    },
    {
      href: ROUTES.settings,
      label: 'Configurações',
      icon: Settings,
    },
  ],

  support: [
    {
      href: ROUTES.help,
      label: 'Obtenha Ajuda',
      icon: LifeBuoy,
    },
    {
      href: ROUTES.feedback,
      label: 'Enviar Feedback',
      icon: Send,
    },
  ],
} as const
