'use client'

import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { LogOut } from 'lucide-react'

import { routes } from '@/config'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

import { logoutAction } from '../_actions/logout'

export function LogoutComponent() {
  async function handleLogout() {
    const { success, message } = await logoutAction()

    if (success) {
      redirect(routes.login)
    } else {
      toast.error(message)
    }
  }
  return (
    <DropdownMenuItem
      variant="destructive"
      className="cursor-pointer"
      onClick={handleLogout}
    >
      <LogOut />
      Sair
    </DropdownMenuItem>
  )
}
