import { ROUTES } from '@/config'

import { LogoComponent } from '../_components/logo'
import { CopyrightComponent } from '../_components/copyright'
import { NavigationComponent } from './_components/navigation'

interface AuthProps {
  children: React.ReactNode
}

export default async function AuthLayout(props: AuthProps) {
  return (
    <section className="mx-auto flex h-screen max-w-7xl flex-col">
      <header className="bg-background sticky top-0 z-50 flex items-center gap-2 p-6 md:p-4">
        <LogoComponent href={ROUTES.landing} />

        <NavigationComponent />
      </header>

      <main className="flex flex-1 flex-col p-6 md:p-4">{props.children}</main>

      <footer className="flex items-center justify-center p-6 md:p-4">
        <CopyrightComponent />
      </footer>
    </section>
  )
}
