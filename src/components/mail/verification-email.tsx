import * as React from 'react'
import { Html, Button } from '@react-email/components'

interface VerificationEmailProps {
  url: string
}

export function VerificationEmail(props: VerificationEmailProps) {
  return (
    <Html lang="pt-BR">
      <Button href={props.url} target="_blank">
        Click me
      </Button>
    </Html>
  )
}
