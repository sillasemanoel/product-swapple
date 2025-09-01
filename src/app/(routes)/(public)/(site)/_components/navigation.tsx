'use client'

import Link from 'next/link'
import { CircleQuestionMark, CreditCard, Rss, Sparkles } from 'lucide-react'

import { routes } from '@/config'
import { Button } from '@/components/ui/button'

export function NavigationComponent() {
  return (
    <>
      <div className="flex items-center gap-1">
        <Button variant="ghost" asChild>
          <Link href={routes.product}>
            <Sparkles />
            Produto
          </Link>
        </Button>

        <Button variant="ghost" asChild>
          <Link href={routes.pricing}>
            <CreditCard />
            Preços
          </Link>
        </Button>

        <Button variant="ghost" asChild>
          <Link href={routes.blog}>
            <Rss />
            Blog
          </Link>
        </Button>

        <Button variant="ghost" asChild>
          <Link href={routes.help}>
            <CircleQuestionMark />
            Ajuda
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" asChild>
          <Link href={routes.login}>Entrar</Link>
        </Button>

        <Button variant="default" asChild>
          <Link href={routes.register}>Use a Swapple de graça</Link>
        </Button>
      </div>
    </>
  )
}
