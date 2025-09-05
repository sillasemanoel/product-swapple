'use client'

import { APP } from '@/config'

export function CopyrightComponent() {
  return (
    <p className="text-muted-foreground text-sm">
      &copy; {new Date().getFullYear()} {APP.name}
    </p>
  )
}
