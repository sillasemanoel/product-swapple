import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { ROUTES } from '@/config'

import { getSessionAction } from '../../_actions/get-session'
import { WelcomeComponent } from '../../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { FormComponent } from './_components/form'

export const metadata: Metadata = {
  title: 'Cadastre-se',
}

export default async function RegisterPage() {
  const session = await getSessionAction()

  if (session.status === 'success') {
    redirect(ROUTES.app)
  }

  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title="Cadastre-se"
        description="Crie uma nova conta preenchendo o formulário abaixo"
      />

      <FormComponent />

      <AuthAlternativeComponent
        prefix="Já tem uma conta?"
        linkLabel="Entrar"
        linkHref={ROUTES.login}
      />
    </div>
  )
}
