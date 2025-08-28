'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { authData } from '../_data'

export function NavigationComponent() {
  return (
    <>
      {authData.navigation.map((item) => (
        <Button key={item.href} variant={item.variant} asChild>
          <Link href={item.href}>
            <item.icon />
            {item.label}
          </Link>
        </Button>
      ))}
    </>
  )
}
