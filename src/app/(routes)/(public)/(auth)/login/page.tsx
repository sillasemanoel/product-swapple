import { routes } from '@/config'

import { WelcomeComponent } from '../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { FormComponent } from './_components/form'

export default function LoginPage() {
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
        linkHref={routes.register}
      />
    </div>
  )
}
