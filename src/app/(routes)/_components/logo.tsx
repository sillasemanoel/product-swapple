'use client'

import Link from 'next/link'
import Image from 'next/image'

import { APP } from '@/config'
import { Button } from '@/components/ui/button'

interface LogoProps {
  href: string
}

export function LogoComponent(props: LogoProps) {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={props.href}>
        <Image
          src={APP.logo}
          alt={APP.name}
          width={333}
          height={333}
          className="size-6"
          priority
        />
      </Link>
    </Button>
  )
}
