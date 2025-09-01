import { routes } from '@/config'

import { WelcomeComponent } from '../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { FormComponent } from './_components/form'

export default function RegisterPage() {
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
        linkHref={routes.login}
      />
    </div>
  )
}
