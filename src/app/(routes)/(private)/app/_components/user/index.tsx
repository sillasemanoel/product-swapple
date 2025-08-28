'use client'

import Link from 'next/link'
import { ChevronsUpDown, ArrowUpRight } from 'lucide-react'

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
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/utils/formatText'

import { appData } from '../../_data'
import { LogoutComponent } from './_components/logout'

const user = {
  name: 'Sillas Emanoel',
  email: 'sillasemanoel.work@gmail.com',
  avatar: 'https://github.com/sillasemanoel.png',
}

export function UserComponent() {
  const { isMobile } = useSidebar()

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
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg uppercase">
                  {getInitials(user.name, 2)}
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <p className="truncate font-medium">{user.name}</p>
                <p className="truncate text-xs">{user.email}</p>
              </div>

              <ChevronsUpDown className="size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
          >
            <DropdownMenuLabel className="flex items-center gap-2 text-left font-normal">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {getInitials(user.name, 2)}
                </AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <p className="truncate font-medium">{user.name}</p>
                <p className="truncate text-xs">{user.email}</p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <appData.user.upgrade.icon />
                {appData.user.upgrade.label}
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              {appData.user.account.map((item) => (
                <Link href={item.href} key={item.href}>
                  <DropdownMenuItem className="cursor-pointer">
                    <item.icon />
                    {item.label}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              {appData.user.resources.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  target={item.external ? '_blank' : undefined}
                >
                  <DropdownMenuItem className="cursor-pointer">
                    <item.icon />
                    {item.label}
                    {item.external ? (
                      <ArrowUpRight className="ml-auto" />
                    ) : null}
                  </DropdownMenuItem>
                </Link>
              ))}
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
