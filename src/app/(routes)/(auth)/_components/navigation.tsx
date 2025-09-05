'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { NAVIGATION } from '../_datas/navigation'

export function NavigationComponent() {
  return (
    <nav className="flex flex-1 items-center justify-end gap-2">
      {NAVIGATION.map((item) => (
        <Button variant="outline" size="sm" asChild key={item.href}>
          <Link href={item.href}>
            <item.icon />
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
