import { WelcomeComponent } from '../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { LoginFormComponent } from './_components/login-form'
import { loginData } from './_data'

export default function LoginPage() {
  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title={loginData.welcome.title}
        description={loginData.welcome.description}
      />

      <LoginFormComponent />

      <AuthAlternativeComponent
        prefix={loginData.authAlternative.prefix}
        linkLabel={loginData.authAlternative.linkLabel}
        linkHref={loginData.authAlternative.linkHref}
      />
    </div>
  )
}
