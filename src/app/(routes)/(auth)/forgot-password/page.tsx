import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { ROUTES } from '@/config'

import { getSessionAction } from '../../_actions/get-session'
import { WelcomeComponent } from '../../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { FormComponent } from './_components/form'

export const metadata: Metadata = {
  title: 'Esqueci a Senha',
}

export default async function ForgotPasswordPage() {
  const session = await getSessionAction()

  if (session.status === 'success') {
    redirect(ROUTES.app)
  }

  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title="Esqueci a senha"
        description="Digite seu e-mail para enviar um link de redefinição de senha"
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
