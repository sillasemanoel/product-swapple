import { ROUTES } from '@/config'

export const NAVIGATION = [
  {
    variant: 'ghost',
    href: ROUTES.product,
    label: 'Produto',
  },
  {
    variant: 'ghost',
    label: 'Preços',
    href: ROUTES.pricing,
  },
  {
    variant: 'ghost',
    label: 'Blog',
    href: ROUTES.blog,
  },
  {
    variant: 'ghost',
    label: 'Ajuda',
    href: ROUTES.help,
  },
] as const
