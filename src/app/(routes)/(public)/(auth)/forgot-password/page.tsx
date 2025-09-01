import { routes } from '@/config'

import { WelcomeComponent } from '../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { FormComponent } from './_components/form'

export default function ForgotPasswordPage() {
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
        linkHref={routes.login}
      />
    </div>
  )
}
