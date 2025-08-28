'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

import { appData } from '../../../_data'
import { logoutAction } from '../_actions/logout'

export function LogoutComponent() {
  const router = useRouter()

  async function handleLogout() {
    const { success, message, redirectTo } = await logoutAction()

    if (success) {
      if (redirectTo) router.push(redirectTo)
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
      <appData.logout.button.icon />
      {appData.logout.button.label}
    </DropdownMenuItem>
  )
}
