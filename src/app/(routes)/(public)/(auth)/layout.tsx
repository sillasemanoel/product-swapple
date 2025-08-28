import { LogoComponent } from '../../_components/logo'
import { CopyrightComponent } from '../../_components/copyright'
import { NavigationComponent } from './_components/navigation'
import { authData } from './_data'

interface AuthProps {
  children: React.ReactNode
}

export default function AuthLayout(props: AuthProps) {
  return (
    <section className="mx-auto flex h-screen max-w-7xl flex-col">
      <header className="bg-background sticky top-0 z-50 flex items-center gap-1 p-6 md:p-4">
        <LogoComponent href={authData.logo.href} />

        <nav className="flex flex-1 items-center justify-end gap-1">
          <NavigationComponent />
        </nav>
      </header>

      <main className="flex flex-1 flex-col p-6 md:p-4">{props.children}</main>

      <footer className="flex items-center justify-center p-6 md:p-4">
        <CopyrightComponent />
      </footer>
    </section>
  )
}
