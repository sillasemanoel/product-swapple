import { WelcomeComponent } from '../../_components/welcome'
import { FormComponent } from './_components/form'

export default async function OnboardingPage() {
  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title="Criar organização"
        description="Crie uma nova organização preenchendo o formulário abaixo"
      />

      <FormComponent />
    </div>
  )
}
