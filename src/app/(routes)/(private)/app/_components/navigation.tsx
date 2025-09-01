'use client'

import Link from 'next/link'
import {
  ChartColumnIncreasing,
  Home,
  Inbox,
  LifeBuoy,
  Megaphone,
  Send,
  Settings,
  Tag,
  Ticket,
  Users,
} from 'lucide-react'

import { routes } from '@/config'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavigationComponent() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Principal</SidebarGroupLabel>

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Início" asChild>
              <Link href={routes.app}>
                <Home />
                Início
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Pedidos" asChild>
              <Link href={routes.appOrders}>
                <Inbox />
                Pedidos
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Produtos" asChild>
              <Link href={routes.appProducts}>
                <Tag />
                Produtos
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Clientes" asChild>
              <Link href={routes.appCustomers}>
                <Users />
                Clientes
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Descontos" asChild>
              <Link href={routes.appDiscounts}>
                <Ticket />
                Descontos
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Marketing" asChild>
              <Link href={routes.appMarketing}>
                <Megaphone />
                Marketing
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Análises" asChild>
              <Link href={routes.appAnalytics}>
                <ChartColumnIncreasing />
                Análises
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Configurações" asChild>
              <Link href={routes.appSettings}>
                <Settings />
                Configurações
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Suporte</SidebarGroupLabel>

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Obtenha Ajuda" asChild>
              <Link href={routes.help}>
                <LifeBuoy />
                Obtenha Ajuda
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Enviar Feedback" asChild>
              <Link href={routes.helpFeedback}>
                <Send />
                Enviar Feedback
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  )
}
