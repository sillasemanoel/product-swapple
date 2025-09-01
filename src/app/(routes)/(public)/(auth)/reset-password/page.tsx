import { routes } from '@/config'

import { WelcomeComponent } from '../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { FormComponent } from './_components/form'

export default function ResetPassword() {
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
        linkHref={routes.login}
      />
    </div>
  )
}
