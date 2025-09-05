import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { ROUTES } from '@/config'
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import { getSessionAction } from '../_actions/get-session'
import { LogoComponent } from '../_components/logo'
import { CopyrightComponent } from '../_components/copyright'
import { OrganizationSwitcherComponent } from './_components/organization-switcher'
import { NavigationComponent } from './_components/navigation'

interface AppProps {
  children: React.ReactNode
}

export default async function AppLayout(props: AppProps) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

  const session = await getSessionAction()

  if (session.status === 'error') {
    redirect(ROUTES.login)
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <OrganizationSwitcherComponent />
        </SidebarHeader>

        <SidebarContent>
          <NavigationComponent />
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header className="bg-background sticky top-0 z-50 flex items-center gap-2 rounded-t-xl p-6 md:p-4">
          <SidebarTrigger className="cursor-pointer" />

          <LogoComponent href={ROUTES.app} />
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
