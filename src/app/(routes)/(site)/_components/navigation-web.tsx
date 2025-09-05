'use client'

import Link from 'next/link'

import { APP, ROUTES } from '@/config'
import { Button } from '@/components/ui/button'

import { NAVIGATION } from '../_datas/navigation'

interface NavigationWebProps {
  authenticated?: boolean
}

export function NavigationWebComponent(props: NavigationWebProps) {
  return (
    <div className="flex flex-1 justify-end gap-2 md:justify-between">
      <nav className="hidden items-center gap-2 md:flex">
        {NAVIGATION.map((item) => (
          <Button variant={item.variant} size="sm" asChild key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </nav>

      <nav className="flex items-center gap-2">
        {props.authenticated ? (
          <Button size="sm" asChild>
            <Link href={ROUTES.app}>App</Link>
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
              asChild
            >
              <Link href={ROUTES.login}>Entrar</Link>
            </Button>

            <Button size="sm" asChild>
              <Link href={ROUTES.register}>Use a {APP.name} de graça</Link>
            </Button>
          </>
        )}
      </nav>
    </div>
  )
}
