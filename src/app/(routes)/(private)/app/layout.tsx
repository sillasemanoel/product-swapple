import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { routes } from '@/config'
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar'

import { getSessionAction } from '../../_actions/get-session'
import { LogoComponent } from '../../_components/logo'
import { CopyrightComponent } from '../../_components/copyright'
import { OrganizationSwitcherComponent } from './_components/organization-switcher'
import { NavigationComponent } from './_components/navigation'
import { UserComponent } from './_components/user'

interface AppProps {
  children: React.ReactNode
}

export default async function AppLayout(props: AppProps) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

  const session = await getSessionAction()

  if (!session?.user) redirect(routes.login)

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <OrganizationSwitcherComponent />
        </SidebarHeader>

        <SidebarContent>
          <NavigationComponent />
        </SidebarContent>

        <SidebarFooter>
          <UserComponent user={session?.user} />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="bg-background sticky top-0 z-50 flex items-center gap-1 rounded-t-xl p-6 md:p-4">
          <SidebarTrigger className="cursor-pointer" />

          <LogoComponent href={routes.app} />

          <nav className="flex flex-1 items-center justify-end gap-1">nav</nav>
        </header>

        <main className="flex flex-1 flex-col p-6 md:p-4">
          {props.children}
        </main>

        <footer className="flex items-center justify-center p-6 md:p-4">
          <CopyrightComponent />
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
