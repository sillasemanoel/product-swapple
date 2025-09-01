'use client'

import Link from 'next/link'
import {
  ChevronsUpDown,
  ArrowUpRight,
  Sparkles,
  BadgeCheck,
  CreditCard,
  Bell,
  TentTree,
  Rss,
} from 'lucide-react'

import { routes } from '@/config'
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

import { LogoutComponent } from './_components/logout'

interface UserProps {
  user: {
    name: string
    email: string
    avatar?: string
  }
}

export function UserComponent({ user }: UserProps) {
  const { isMobile } = useSidebar()

  if (!user) return null

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
                <Sparkles />
                Atualizar para Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={routes.appSettings}>
                  <BadgeCheck />
                  Conta
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={routes.appSettingsBilling}>
                  <CreditCard />
                  Cobrança
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={routes.appSettingsNotifications}>
                  <Bell />
                  Notificações
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={routes.home} target="_blank">
                  <TentTree />
                  Site
                  <ArrowUpRight className="ml-auto" />
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href={routes.blog} target="_blank">
                  <Rss />
                  Blog
                  <ArrowUpRight className="ml-auto" />
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
