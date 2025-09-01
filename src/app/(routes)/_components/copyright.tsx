'use client'

import { app } from '@/config'

export function CopyrightComponent() {
  return (
    <p className="text-muted-foreground text-sm">
      &copy; {new Date().getFullYear()} {app.name}
    </p>
  )
}
