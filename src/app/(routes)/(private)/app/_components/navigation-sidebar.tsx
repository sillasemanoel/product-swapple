'use client'

import Link from 'next/link'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { appData } from '../_data'

export function NavigationSidebarComponent() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>
          {appData.navigationSidebar.main.title}
        </SidebarGroupLabel>

        <SidebarMenu>
          {appData.navigationSidebar.main.items.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton tooltip={item.label} asChild>
                <Link href={item.href}>
                  <item.icon />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>
          {appData.navigationSidebar.support.title}
        </SidebarGroupLabel>

        <SidebarMenu>
          {appData.navigationSidebar.support.items.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton tooltip={item.label} asChild>
                <Link href={item.href}>
                  <item.icon />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  )
}
