import { WelcomeComponent } from '../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { ForgotPasswordFormComponent } from './_components/forgot-password-form'
import { forgotPasswordData } from './_data'

export default function ForgotPasswordPage() {
  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title={forgotPasswordData.welcome.title}
        description={forgotPasswordData.welcome.description}
      />

      <ForgotPasswordFormComponent />

      <AuthAlternativeComponent
        prefix={forgotPasswordData.authAlternative.prefix}
        linkLabel={forgotPasswordData.authAlternative.linkLabel}
        linkHref={forgotPasswordData.authAlternative.linkHref}
      />
    </div>
  )
}
