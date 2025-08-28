import { CircleQuestionMark, CreditCard, Rss, Sparkles } from 'lucide-react'

import { app, routes } from '@/config'

export const siteData = {
  logo: {
    href: routes.home,
  },

  navigation: {
    main: [
      {
        label: 'Produto',
        href: routes.product,
        variant: 'ghost',
        icon: Sparkles,
      },
      {
        label: 'Preços',
        href: routes.pricing,
        variant: 'ghost',
        icon: CreditCard,
      },
      {
        label: 'Blog',
        href: routes.blog,
        variant: 'ghost',
        icon: Rss,
      },
      {
        label: 'Ajuda',
        href: routes.help,
        variant: 'ghost',
        icon: CircleQuestionMark,
      },
    ],

    auth: [
      {
        label: 'Entrar',
        href: routes.login,
        variant: 'ghost',
      },
      {
        label: `Use a ${app.name} de graça`,
        href: routes.register,
        variant: 'default',
      },
    ],
  },
} as const

export type SiteData = typeof siteData
