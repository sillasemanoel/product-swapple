import * as React from 'react'
import { Html } from '@react-email/components'

interface PasswordResetProps {
  name: string
}

export function PasswordReset(props: PasswordResetProps) {
  return (
    <Html lang="pt-BR">
      <p>Senha alterada do usuario {props.name}</p>
    </Html>
  )
}
