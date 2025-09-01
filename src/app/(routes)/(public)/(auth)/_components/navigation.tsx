'use client'

import Link from 'next/link'
import { LifeBuoy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { routes } from '@/config'

export function NavigationComponent() {
  return (
    <>
      <Button variant="outline" asChild>
        <Link href={routes.help}>
          <LifeBuoy />
          Obtenha Ajuda
        </Link>
      </Button>
    </>
  )
}
