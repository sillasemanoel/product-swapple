import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { ROUTES } from '@/config'

import { getSessionAction } from '../../_actions/get-session'
import { WelcomeComponent } from '../../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { FormComponent } from './_components/form'

export const metadata: Metadata = {
  title: 'Redefinir Senha',
}

export default async function ResetPassword() {
  const session = await getSessionAction()

  if (session.status === 'success') {
    redirect(ROUTES.app)
  }

  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title="Redefinir senha"
        description="Digite sua nova senha para redefini-la"
      />

      <FormComponent />

      <AuthAlternativeComponent
        prefix="Lembrou da senha?"
        linkLabel="Entrar"
        linkHref={ROUTES.login}
      />
    </div>
  )
}
