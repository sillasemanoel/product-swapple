'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { siteData } from '../_data'

export function NavigationComponent() {
  return (
    <>
      <div className="flex items-center gap-1">
        {siteData.navigation.main.map((item) => (
          <Button key={item.href} variant={item.variant} asChild>
            <Link href={item.href}>
              <item.icon />
              {item.label}
            </Link>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-1">
        {siteData.navigation.auth.map((item) => (
          <Button key={item.href} variant={item.variant} asChild>
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </div>
    </>
  )
}
