import { ROUTES } from '@/config'
import { getSessionAction } from '../_actions/get-session'

import { LogoComponent } from '../_components/logo'
import { CopyrightComponent } from '../_components/copyright'
import { NavigationWebComponent } from './_components/navigation-web'
import { NavigationMobileComponent } from './_components/navigation-mobile'

interface SiteProps {
  children: React.ReactNode
}

export default async function SiteLayout(props: SiteProps) {
  const session = await getSessionAction()

  const authenticated = session.status === 'success'

  return (
    <section className="mx-auto flex h-screen max-w-7xl flex-col">
      <header className="bg-background sticky top-0 z-50 flex items-center gap-2 p-6 md:p-4">
        <NavigationMobileComponent authenticated={authenticated} />

        <LogoComponent href={ROUTES.landing} />

        <NavigationWebComponent authenticated={authenticated} />
      </header>

      <main className="flex flex-1 flex-col p-6 md:p-4">{props.children}</main>

      <footer className="flex items-center justify-center p-6 md:p-4">
        <CopyrightComponent />
      </footer>
    </section>
  )
}
