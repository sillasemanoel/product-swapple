'use client'

import Link from 'next/link'

interface AuthAlternativeProps {
  prefix: string
  linkLabel: string
  linkHref: string
}

export function AuthAlternativeComponent(props: AuthAlternativeProps) {
  return (
    <p className="text-muted-foreground text-sm">
      {props.prefix}{' '}
      <Link
        href={props.linkHref}
        className="text-primary underline-offset-4 hover:underline"
      >
        {props.linkLabel}
      </Link>
    </p>
  )
}
