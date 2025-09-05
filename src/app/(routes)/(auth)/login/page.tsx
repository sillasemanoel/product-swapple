import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { ROUTES } from '@/config'

import { getSessionAction } from '../../_actions/get-session'
import { WelcomeComponent } from '../../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { FormComponent } from './_components/form'

export const metadata: Metadata = {
  title: 'Entrar',
}

export default async function LoginPage() {
  const session = await getSessionAction()

  if (session.status === 'success') {
    redirect(ROUTES.app)
  }

  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title="Entrar"
        description="Digite seu e-mail e senha para acessar sua conta"
      />

      <FormComponent />

      <AuthAlternativeComponent
        prefix="Não tem uma conta?"
        linkLabel="Cadastre-se"
        linkHref={ROUTES.register}
      />
    </div>
  )
}
