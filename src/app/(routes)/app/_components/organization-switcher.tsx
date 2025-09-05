'use client'

import React from 'react'
import Link from 'next/link'
import {
  ChevronsUpDown,
  Plus,
  CreditCard,
  Bell,
  BadgeCheck,
} from 'lucide-react'

import { ROUTES } from '@/config'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/utils/format-text'

import { LogoutComponent } from './logout'

const organizations = [
  {
    id: '1',
    name: 'Galinheiro Franca',
    logo: '/default.jpeg',
    plan: 'pro',
  },
  {
    id: '2',
    name: 'Padaria do Ze',
    logo: null,
    plan: 'free',
  },
]

export function OrganizationSwitcherComponent() {
  const { isMobile } = useSidebar()
  const [activeOrganization, setActiveOrganization] = React.useState(
    organizations[0],
  )

  if (!activeOrganization) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={activeOrganization.logo as string}
                  alt={activeOrganization.name}
                />
                <AvatarFallback className="rounded-lg">
                  {getInitials(activeOrganization.name, 2)}
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <p className="truncate font-medium">
                  {activeOrganization.name}
                </p>
                <p className="truncate text-xs capitalize">
                  {activeOrganization.plan}
                </p>
              </div>

              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Organizações ({organizations.length})
            </DropdownMenuLabel>

            <DropdownMenuGroup>
              {organizations.map((organization) => (
                <DropdownMenuItem
                  key={organization.id}
                  onClick={() => setActiveOrganization(organization)}
                  className="cursor-pointer"
                >
                  <Avatar className="h-6 w-6 rounded-md">
                    <AvatarImage
                      src={organization.logo as string}
                      alt={organization.name}
                    />
                    <AvatarFallback className="rounded-md text-xs">
                      {getInitials(organization.name, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <p className="truncate font-medium">{organization.name}</p>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus />
                </div>
                <p className="text-muted-foreground font-medium">
                  Criar organização
                </p>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={ROUTES.settings}>
                  <BadgeCheck />
                  Conta
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={ROUTES.notifications}>
                  <Bell />
                  Notificações
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={ROUTES.billing}>
                  <CreditCard />
                  Cobrança
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <LogoutComponent />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
