import {
  BadgeCheck,
  Bell,
  ChartColumnIncreasing,
  CreditCard,
  TentTree,
  Home,
  Inbox,
  LifeBuoy,
  LogOut,
  Megaphone,
  Plus,
  Rss,
  Send,
  Settings,
  Sparkles,
  Tag,
  Ticket,
  Users,
} from 'lucide-react'

import { routes } from '@/config'

export const appData = {
  organizationSwitcher: {
    title: 'Minhas organizações',
    button: {
      label: 'Criar organização',
      icon: Plus,
    },
  },

  navigationSidebar: {
    main: {
      title: 'Principal',
      items: [
        { label: 'Início', href: routes.app, icon: Home },
        {
          label: 'Pedidos',
          href: routes.appOrders,
          icon: Inbox,
        },
        {
          label: 'Produtos',
          href: routes.appProducts,
          icon: Tag,
        },
        {
          label: 'Clientes',
          href: routes.appCustomers,
          icon: Users,
        },
        {
          label: 'Descontos',
          href: routes.appDiscounts,
          icon: Ticket,
        },
        {
          label: 'Marketing',
          href: routes.appMarketing,
          icon: Megaphone,
        },
        {
          label: 'Análises',
          href: routes.appAnalytics,
          icon: ChartColumnIncreasing,
        },
        {
          label: 'Configurações',
          href: routes.appSettings,
          icon: Settings,
        },
      ],
    },

    support: {
      title: 'Suporte',
      items: [
        {
          label: 'Obtenha Ajuda',
          href: routes.help,
          icon: LifeBuoy,
        },
        {
          label: 'Enviar Feedback',
          href: routes.helpFeedback,
          icon: Send,
        },
      ],
    },
  },

  user: {
    upgrade: {
      label: 'Atualizar para Pro',
      icon: Sparkles,
    },
    account: [
      { label: 'Conta', href: routes.appSettings, icon: BadgeCheck },
      { label: 'Cobrança', href: routes.appSettingsBilling, icon: CreditCard },
      {
        label: 'Notificações',
        href: routes.appSettingsNotifications,
        icon: Bell,
      },
    ],
    resources: [
      { label: 'Site', href: routes.home, icon: TentTree, external: true },
      { label: 'Blog', href: routes.blog, icon: Rss, external: true },
    ],
  },

  logout: {
    button: {
      label: 'Sair',
      icon: LogOut,
    },

    messages: {
      genericError:
        'Não foi possível sair na conta. Tente novamente mais tarde.',
    },

    redirectTo: routes.login,
  },

  logo: {
    href: routes.app,
  },

  navigationMain: [
    {
      label: 'Obtenha Ajuda',
      href: routes.help,
      icon: LifeBuoy,
    },
  ],
} as const

export type AppData = typeof appData
