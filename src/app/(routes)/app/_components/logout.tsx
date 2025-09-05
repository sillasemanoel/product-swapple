'use client'

import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { LogOut } from 'lucide-react'

import { ROUTES } from '@/config'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

import { logoutAction } from '../_actions/logout'

export function LogoutComponent() {
  async function handleLogout() {
    const result = await logoutAction()

    if (result.status === 'success') {
      redirect(ROUTES.login)
    } else {
      toast.error(result.message)
    }
  }
  return (
    <DropdownMenuItem
      variant="destructive"
      onClick={handleLogout}
      className="cursor-pointer"
    >
      <LogOut />
      Sair
    </DropdownMenuItem>
  )
}
