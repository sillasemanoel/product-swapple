import { WelcomeComponent } from '../_components/welcome'
import { AuthAlternativeComponent } from '../_components/auth-alternative'
import { ResetPasswordFormComponent } from './_components/reset-password-form'
import { resetPasswordData } from './_data'

export default function ResetPassword() {
  return (
    <div className="m-auto flex w-full max-w-96 flex-col gap-6">
      <WelcomeComponent
        title={resetPasswordData.welcome.title}
        description={resetPasswordData.welcome.description}
      />

      <ResetPasswordFormComponent />

      <AuthAlternativeComponent
        prefix={resetPasswordData.authAlternative.prefix}
        linkLabel={resetPasswordData.authAlternative.linkLabel}
        linkHref={resetPasswordData.authAlternative.linkHref}
      />
    </div>
  )
}
