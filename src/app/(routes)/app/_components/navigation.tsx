'use client'

import Link from 'next/link'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { NAVIGATION } from '../_datas/navigation'

export function NavigationComponent() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Principal</SidebarGroupLabel>

        <SidebarMenu>
          {NAVIGATION.main.map((item) => (
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
        <SidebarGroupLabel>Suporte</SidebarGroupLabel>

        <SidebarMenu>
          {NAVIGATION.support.map((item) => (
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
