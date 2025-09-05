import { redirect } from 'next/navigation'

import { ROUTES } from '@/config'

import { getSessionAction } from '../_actions/get-session'
import { LogoComponent } from '../_components/logo'
import { CopyrightComponent } from '../_components/copyright'

interface OnboardingProps {
  children: React.ReactNode
}

export default async function OnboardingLayout(props: OnboardingProps) {
  const session = await getSessionAction()

  if (session.status === 'error') {
    redirect(ROUTES.login)
  }

  return (
    <section className="mx-auto flex h-screen max-w-7xl flex-col">
      <header className="bg-background sticky top-0 z-50 flex items-center gap-2 p-6 md:p-4">
        <LogoComponent href={ROUTES.onboarding} />
      </header>

      <main className="flex flex-1 flex-col p-6 md:p-4">{props.children}</main>

      <footer className="flex items-center justify-center p-6 md:p-4">
        <CopyrightComponent />
      </footer>
    </section>
  )
}
