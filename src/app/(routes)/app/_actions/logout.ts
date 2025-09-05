'use server'

import { headers } from 'next/headers'

import { auth } from '@/lib/auth'

export async function logoutAction() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    })

    return {
      status: 'success' as const,
    }
  } catch (error) {
    console.error('\x1b[35m[Error] logoutAction:\x1b[0m', error)

    return {
      status: 'error' as const,
      message: 'Não foi possível sair da conta. Tente novamente mais tarde.',
    }
  }
}
