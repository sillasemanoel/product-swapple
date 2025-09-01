'use client'

import { useState } from 'react'
import { ChevronsUpDown, Plus } from 'lucide-react'

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
import { getInitials } from '@/utils/formatText'

const organizations = [
  {
    name: 'Galinheiro Franca',
    avatar: '/default.jpeg',
  },
  {
    name: 'Padaria do Ze',
    avatar: null,
  },
]

export function OrganizationSwitcherComponent() {
  const { isMobile } = useSidebar()
  const [activeOrganization, setActiveOrganization] = useState(organizations[0])

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
                  src={activeOrganization.avatar as string}
                  alt={activeOrganization.name}
                />
                <AvatarFallback className="rounded-lg">
                  {getInitials(activeOrganization.name, 2)}
                </AvatarFallback>
              </Avatar>

              <p className="truncate font-medium">{activeOrganization.name}</p>

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
                  key={organization.name}
                  onClick={() => setActiveOrganization(organization)}
                  className="cursor-pointer"
                >
                  <Avatar className="h-6 w-6 rounded-md">
                    <AvatarImage
                      src={organization.avatar as string}
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

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex size-7 items-center justify-center rounded-md border bg-transparent">
                  <Plus />
                </div>

                <p className="text-muted-foreground font-medium">
                  Criar organização
                </p>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
