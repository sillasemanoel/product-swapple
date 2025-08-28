import { cookies } from 'next/headers'

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar'

import { LogoComponent } from '../../_components/logo'
import { CopyrightComponent } from '../../_components/copyright'
import { OrganizationSwitcherComponent } from './_components/organization-switcher'
import { NavigationSidebarComponent } from './_components/navigation-sidebar'
import { UserComponent } from './_components/user'
import { appData } from './_data'

interface AppProps {
  children: React.ReactNode
}

export default async function AppLayout(props: AppProps) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <OrganizationSwitcherComponent />
        </SidebarHeader>

        <SidebarContent>
          <NavigationSidebarComponent />
        </SidebarContent>

        <SidebarFooter>
          <UserComponent />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="bg-background sticky top-0 z-50 flex items-center gap-1 rounded-t-xl p-6 md:p-4">
          <SidebarTrigger className="cursor-pointer" />

          <LogoComponent href={appData.logo.href} />

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
