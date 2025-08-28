import { WelcomeComponent } from '../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { RegisterFormComponent } from './_components/register-form'
import { registerData } from './_data'

export default function RegisterPage() {
  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title={registerData.welcome.title}
        description={registerData.welcome.description}
      />

      <RegisterFormComponent />

      <AuthAlternativeComponent
        prefix={registerData.authAlternative.prefix}
        linkLabel={registerData.authAlternative.linkLabel}
        linkHref={registerData.authAlternative.linkHref}
      />
    </div>
  )
}
