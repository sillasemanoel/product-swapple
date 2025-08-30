import * as React from 'react'
import { Html, Button } from '@react-email/components'

interface ResetPasswordProps {
  url: string
}

export function ResetPassword(props: ResetPasswordProps) {
  return (
    <Html lang="pt-BR">
      <Button href={props.url} target="_blank">
        Click me
      </Button>
    </Html>
  )
}
