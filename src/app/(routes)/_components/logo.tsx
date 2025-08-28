'use client'

import Link from 'next/link'
import Image from 'next/image'

import { app } from '@/config'
import { Button } from '@/components/ui/button'

interface LogoProps {
  href: string
}

export function LogoComponent(props: LogoProps) {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={props.href}>
        <Image
          src={app.logo}
          alt={app.name}
          width={333}
          height={333}
          priority
          className="h-6 w-6"
        />
      </Link>
    </Button>
  )
}
